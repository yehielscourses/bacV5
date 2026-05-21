#!/usr/bin/env python3
"""Télécharge les annales bac (métropole + E3C utiles) pour le candidat J60."""

from __future__ import annotations

import re
import time
import urllib.error
import urllib.request
from pathlib import Path

BASE = "https://www.sujetdebac.fr"
ROOT = Path("/workspace/downloads/annales")
YEARS = [2021, 2022, 2023, 2024, 2025]
UA = "Mozilla/5.0 (compatible; BacRevisionBot/1.0)"


def fetch(url: str, timeout: int = 45) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", errors="replace")


def download_file(url: str, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 500:
        return False
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read()
    except urllib.error.HTTPError:
        return False
    if len(data) < 500:
        return False
    dest.write_bytes(data)
    return True


def pdfs_from_page(page_url: str) -> list[tuple[str, str]]:
    try:
        html = fetch(page_url)
    except Exception:
        return []
    out: list[tuple[str, str]] = []
    patterns = [
        r'href="(/annales-pdf/\d{4}/[^"]+\.pdf)"',
        r'href="(/sujets-e3c-pdf/[^"]+\.pdf)"',
    ]
    for pat in patterns:
        for m in re.finditer(pat, html):
            out.append((BASE + m.group(1), m.group(1).split("/")[-1]))
    # dédupliquer
    seen: set[str] = set()
    unique: list[tuple[str, str]] = []
    for url, label in out:
        if url not in seen:
            seen.add(url)
            unique.append((url, label))
    return unique


def safe_name(s: str) -> str:
    s = re.sub(r"[^\w\-+.]+", "_", s, flags=re.UNICODE)
    return s[:120].strip("_") or "fichier"


def process_annale_page(slug: str, subject_dir: str, year: int) -> dict:
    page = f"{BASE}/annales/{slug}"
    pdfs = pdfs_from_page(page)
    stats = {"page": slug, "ok": 0, "skip": 0, "fail": 0}
    for pdf_url, label in pdfs:
        fname = pdf_url.split("/")[-1]
        dest = ROOT / subject_dir / str(year) / fname
        try:
            if download_file(pdf_url, dest):
                stats["ok"] += 1
            else:
                stats["skip"] += 1
        except Exception:
            stats["fail"] += 1
        time.sleep(0.15)
    return stats


def slugs_for_year(year: int) -> dict[str, list[str]]:
    """Matière locale -> slugs sujetdebac métropole."""
    s: dict[str, list[str]] = {
        "09_philo": [f"philosophie-{year}-metropole"],
        "10_pc": [
            f"spe-physique-chimie-{year}-metropole-1",
            f"spe-physique-chimie-{year}-metropole-2",
        ],
        "11_maths": [
            f"spe-mathematiques-{year}-metropole-1",
            f"spe-mathematiques-{year}-metropole-2",
        ],
        "05_nsi": [
            f"spe-numerique-informatique-{year}-metropole-1",
            f"spe-numerique-informatique-{year}-metropole-2",
        ],
        "01_hg": [
            f"spe-hg-geopolitique-sciences-po-{year}-metropole-1",
            f"spe-hg-geopolitique-sciences-po-{year}-metropole-2",
        ],
        "02_es": [
            f"spe-sciences-eco-sociales-{year}-metropole-1",
            f"spe-sciences-eco-sociales-{year}-metropole-2",
        ],
    }
    if year == 2021:
        s["08_francais"] = [
            "francais-premiere-2021-metropole-1",
            "francais-premiere-2021-metropole-2",
        ]
    else:
        s["08_francais"] = [f"francais-premiere-{year}-metropole"]
    return s


def e3c_year_pages(path: str) -> list[str]:
    """Liste les pages E3C individuelles pour une année."""
    index_url = f"{BASE}/annales/sujets-e3c/{path}"
    try:
        html = fetch(index_url)
    except Exception:
        return []
    slugs = sorted(
        set(
            m.group(1)
            for m in re.finditer(r'href="(/annales/sujets-e3c/[^"]+)"', html)
            if re.search(r"-\d{5,}$", m.group(1))
        )
    )
    cleaned = []
    for s in slugs:
        s = s.replace("/annales/", "", 1)
        s = s.replace("sujets-e3c/", "", 1)
        cleaned.append(s)
    return cleaned


def download_eduscol_consolides() -> None:
    docs = {
        "12_grand_oral": "voie-ggrand-oraldoc-consolidepdf-102120.pdf",
        "09_philo": "voie-gphilodoc-consolidepdf-102099.pdf",
        "10_pc": "nds-consolidee-definition-epreuve-bac-physique-chimie-102096.pdf",
        "11_maths": "nds-consolidee-definition-epreuve-bac-maths-102105.pdf",
        "05_nsi": "nds-consolidee-definition-epreuve-bac-si-102090.pdf",
    }
    base = "https://eduscol.education.gouv.fr/sites/default/files/document/"
    for subj, fname in docs.items():
        dest = ROOT / subj / "eduscol_officiel" / fname
        download_file(base + fname, dest)
        time.sleep(0.2)


def main() -> None:
    ROOT.mkdir(parents=True, exist_ok=True)
    log: list[str] = []

    # Annales nationales métropole (terminales + spé)
    for year in YEARS:
        for subject, slugs in slugs_for_year(year).items():
            for slug in slugs:
                st = process_annale_page(slug, subject, year)
                log.append(f"{subject}/{year}/{slug}: +{st['ok']} skip={st['skip']} fail={st['fail']}")

    # E3C HG (entraînement HG ponctuelle — thèmes proches)
    for year in [2020, 2021]:
        for slug in e3c_year_pages(f"histoire-geographie-general/terminale/{year}/"):
            st = process_annale_page(slug, "01_hg_e3c", year)
            log.append(f"01_hg_e3c/{year}/{slug}: +{st['ok']}")

    # E3C LVA anglais
    for year in [2020, 2021]:
        for level in ["terminale", "premiere-t2", "premiere-t3"]:
            for slug in e3c_year_pages(f"langues-vivantes-anglais/{level}/{year}/"):
                st = process_annale_page(slug, "06_lva_anglais_e3c", year)
                log.append(f"06_lva_anglais_e3c/{year}/{slug}: +{st['ok']}")

    download_eduscol_consolides()

    report = ROOT / "RAPPORT_TELECHARGEMENT.txt"
    report.write_text("\n".join(log), encoding="utf-8")
    print(f"Done. Report: {report}")


if __name__ == "__main__":
    main()
