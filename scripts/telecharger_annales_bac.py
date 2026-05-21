#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Telecharge les annales alignees sur la convocation bac G 2026 (candidat individuel J60).

Regle : une matiere de fiche = une epreuve de convocation, pas une specialite voisine.
"""

from __future__ import annotations

import re
import time
import urllib.error
import urllib.request
from pathlib import Path

BASE = "https://www.sujetdebac.fr"
EDUSCOL = "https://eduscol.education.gouv.fr/sites/default/files/document"
ROOT = Path("/workspace/downloads/annales")
YEARS_METROPOLE = [2021, 2022, 2023, 2024, 2025]
UA = "Mozilla/5.0 (compatible; BacRevisionBot/2.0)"


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
    if len(data) < 500 or data[:4] != b"%PDF":
        return False
    dest.write_bytes(data)
    return True


def pdfs_from_page(page_url: str) -> list[str]:
    try:
        html = fetch(page_url)
    except Exception:
        return []
    urls: list[str] = []
    for pat in (
        r'href="(/annales-pdf/\d{4}/[^"]+\.pdf)"',
        r'href="(/sujets-e3c-pdf/[^"]+\.pdf)"',
    ):
        urls.extend(BASE + m.group(1) for m in re.finditer(pat, html))
    seen: set[str] = set()
    out: list[str] = []
    for u in urls:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out


def process_page(slug: str, dest_dir: Path) -> int:
    page = f"{BASE}/annales/{slug}"
    n = 0
    for pdf_url in pdfs_from_page(page):
        dest = dest_dir / pdf_url.split("/")[-1]
        if download_file(pdf_url, dest):
            n += 1
        time.sleep(0.12)
    return n


def e3c_slugs(path: str, limit: int = 30) -> list[str]:
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
        s = s.replace("/annales/", "", 1).replace("sujets-e3c/", "", 1)
        cleaned.append(f"sujets-e3c/{s}")
    return cleaned[:limit]


def slugs_metropole_finales(year: int) -> dict[str, list[str]]:
    """Epreuves terminales nationales (60 %) — format identique a la convocation."""
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
    }
    if year == 2021:
        s["08_francais"] = [
            "francais-premiere-2021-metropole-1",
            "francais-premiere-2021-metropole-2",
        ]
    else:
        s["08_francais"] = [f"francais-premiere-{year}-metropole"]
    return s


def download_eduscol_officiels() -> None:
    files = {
        "01_hg_ponctuelle": [
            ("ns_ponctuelle_hg_juin2025.pdf", "ndsevauations-ponctuelleshistoire-geovoies-g-et-tjuin-2025pdf-100587.pdf"),
        ],
        "02_es_ponctuelle": [
            ("document_56670_es_ponctuelle.pdf", None),  # deja copie manuellement si besoin
        ],
        "05_nsi_ponctuelle": [
            ("02_ns_ponctuelle_specialite_abandonnee_1re_juin2025.pdf", None),
            ("ndsevaluations-ponctuelleseds-non-poursuivivoie-gjuin-2025pdf-100575.pdf", "ndsevaluations-ponctuelleseds-non-poursuivivoie-gjuin-2025pdf-100575.pdf"),
            ("ndsevaluation-ponctuelleeds-non-poursuivivoie-tjuin-2025pdf-100578.pdf", "ndsevaluation-ponctuelleeds-non-poursuivivoie-tjuin-2025pdf-100578.pdf"),
        ],
        "06_lva_lvb_ecrit": [
            ("ns_ponctuelle_lv_juin2025.pdf", "nds-evaluations-ponctuelleslva-et-lvbvoies-gtpdf-100590.pdf"),
            ("grilles_lva_lvb.pdf", "grilles-lva-et-lvb-avec-premierepdf-97680.pdf"),
        ],
        "09_philo": [("voie-gphilodoc-consolide.pdf", "voie-gphilodoc-consolidepdf-102099.pdf")],
        "10_pc": [("nds_pc_finale.pdf", "nds-consolidee-definition-epreuve-bac-physique-chimie-102096.pdf")],
        "11_maths": [("nds_maths_finale.pdf", "nds-consolidee-definition-epreuve-bac-maths-102105.pdf")],
        "12_grand_oral": [("nds_grand_oral.pdf", "voie-ggrand-oraldoc-consolidepdf-102120.pdf")],
    }
    extra_urls = {
        "02_es_ponctuelle/document_56670_es_ponctuelle.pdf": "https://eduscol.education.gouv.fr/document/56670/download",
        "06_lva_lvb_ecrit/2024/hebreu_lvb_sujet_2024.pdf": "https://eduscol.education.gouv.fr/document/63577/download",
    }
    for rel, url in extra_urls.items():
        download_file(url, ROOT / rel)
    for subject, items in files.items():
        for local_name, remote in items:
            if remote is None:
                continue
            dest = ROOT / subject / "eduscol_officiel" / local_name
            if dest.exists() and dest.stat().st_size > 500:
                continue
            download_file(f"{EDUSCOL}/{remote}", dest)
            time.sleep(0.15)


def download_e3c_ponctuelles() -> list[str]:
    """E3C = seules banques publiques proches des ponctuelles HG, ES, LVA."""
    jobs = [
        ("01_hg_ponctuelle", "e3c", "histoire-geographie-general/terminale/2021/", 2021),
        ("01_hg_ponctuelle", "e3c", "histoire-geographie-general/terminale/2020/", 2020),
        ("02_es_ponctuelle", "e3c", "enseignement-scientifique/terminale/2021/", 2021),
        ("02_es_ponctuelle", "e3c", "enseignement-scientifique/premiere/2021/", 2021),
        ("02_es_ponctuelle", "e3c", "enseignement-scientifique/terminale/2020/", 2020),
        ("02_es_ponctuelle", "e3c", "enseignement-scientifique/premiere/2020/", 2020),
        ("01_hg_ponctuelle", "e3c/2021_premiere", "histoire-geographie-general/premiere/2021/", 2021),
        ("06_lva_lvb_ecrit", "e3c_anglais_lva", "langues-vivantes-anglais/terminale/2021/", 2021),
        ("06_lva_lvb_ecrit", "e3c_anglais_lva", "langues-vivantes-anglais/premiere-t2/2021/", 2021),
    ]
    log = []
    for subject, subdir, path, year in jobs:
        dest_base = ROOT / subject / subdir / str(year)
        for slug in e3c_slugs(path, limit=20):
            n = process_page(slug, dest_base)
            log.append(f"{subject}/{subdir}/{year}/{slug}: +{n}")
    return log


def main() -> None:
    ROOT.mkdir(parents=True, exist_ok=True)
    log: list[str] = []

    for year in YEARS_METROPOLE:
        for subject, slugs in slugs_metropole_finales(year).items():
            for slug in slugs:
                dest = ROOT / subject / str(year)
                n = process_page(slug, dest)
                log.append(f"{subject}/{year}/{slug}: +{n}")

    log.extend(download_e3c_ponctuelles())
    download_eduscol_officiels()

    (ROOT / "RAPPORT_TELECHARGEMENT.txt").write_text("\n".join(log), encoding="utf-8")
    print("OK", len(log), "lignes")


if __name__ == "__main__":
    main()
