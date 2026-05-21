#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Audit downloads/cours/ vs BO programmes + annales locales."""

from __future__ import annotations

import re
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURS = ROOT / "downloads" / "cours"
PROG = ROOT / "downloads" / "programmes" / "markdown_version"
ANNALES = ROOT / "downloads" / "annales"
REPORT = COURS / "VERIFICATION_PROGRAMMES_ANNALES.md"

# cours subdir -> (BO file, annales markdown dir, fiche)
MAP = {
    "01_hg": (
        ["00_histoire-geographie_premiere_generale_BO2019.md",
         "01_histoire-geographie_terminale_generale_BO2019.md"],
        "01_hg_ponctuelle",
        "01_hg_ponctuelle.md",
    ),
    "02_es": (["02_enseignement-scientifique_terminale_generale_BO2023.md",
               "00b_enseignement-scientifique_premiere_generale_BO2019.md"],
              "02_es_ponctuelle", "02_es_ponctuelle.md"),
    "03_emc": (["03_emc_cycle_terminal_BO2019.md"], "03_emc_ponctuelle", "03_emc_ponctuelle.md"),
    "04_lva": (["09_langues_vivantes_AB_premiere_terminale_BO2019.md"],
               "06_lva_lvb_ecrit", "06_lva_lvb_ecrit.md"),
    "05_lvb": (["09_langues_vivantes_AB_premiere_terminale_BO2019.md"],
               "06_lva_lvb_ecrit", "06_lva_lvb_ecrit.md"),
    "06_nsi": (["08_nsi_specialite_premiere_BO2019.md"], "05_nsi_ponctuelle", "05_nsi_ponctuelle.md"),
    "07_francais": (["04_francais_premiere_generale_BO2019_modif2020.md"], "08_francais", "08_francais.md"),
    "08_philo": (["05_philosophie_terminale_generale_BO2019.md"], "09_philo", "09_philo.md"),
    "09_pc": (["06_physique-chimie_specialite_terminale_BO2019.md"], "10_pc", "10_pc_finale.md"),
    "10_maths": (["07_mathematiques_specialite_terminale_BO2019.md"], "11_maths", "11_maths_finale.md"),
    "11_grand_oral": (["10_grand_oral_guide_specialites_eduscol.md"], "12_grand_oral", "12_grand_oral.md"),
    "12_eoc": ([], None, "13_eoc.md"),
    "00_fondations": ([], None, None),
}


def audit_file(path: Path) -> dict:
    text = path.read_text(encoding="utf-8", errors="replace")
    lines = len(text.splitlines())
    rel = path.relative_to(ROOT)
    sub = path.parts[path.parts.index("cours") + 1] if "cours" in path.parts else ""

    issues, warns, ok = [], [], []

    if lines < 120:
        issues.append(f"longueur {lines} < 120")
    for sec, alts in [
        ("Introduction", ["## Introduction"]),
        ("Prérequis", ["## Prérequis (niveau 5e)", "## Prérequis"]),
        ("Glossaire", ["## Glossaire"]),
        ("Cours", ["## Cours"]),
        ("À retenir épreuve", ["## À retenir pour l'épreuve", "## À retenir"]),
        ("Exercices", ["## Exercices"]),
    ]:
        if not any(a in text for a in alts):
            issues.append(f"manque {sec}")

    cours_parts = re.findall(r"## Cours[^\n]*\n(.*?)(?=\n## |\Z)", text, re.S)
    n_sub = sum(len(re.findall(r"^### ", p, re.M)) for p in cours_parts)
    if n_sub < 3:
        issues.append(f"Cours: {n_sub} ### (< 3)")

    ex = len(re.findall(r"(?i)(###\s*(découverte|entraînement|type\s*bac)|\*\*exercice\s*\d|###\s*Type bac)", text))
    if ex < 3:
        warns.append(f"exercices structurés: {ex}")

    if sub != "12_eoc" and "downloads/annales" not in text and "annales/markdown_version" not in text:
        warns.append("pas de lien vers downloads/annales/")

    if "## Méthode annales" not in text:
        warns.append("pas de section ## Méthode annales")

    if sub == "01_hg" and not re.search(r"(?i)(partie\s*[12]|\([AB]\)|questions?\s*\(A\))", text):
        warns.append("HG: format Partie A/B absent")

    if sub in MAP and MAP[sub][0]:
        if not any(p in text for p in MAP[sub][0]):
            warns.append("référence BO fichier non citée dans l'en-tête")

    if not issues and not warns:
        ok.append("structure OK")

    return {"path": str(rel), "lines": lines, "issues": issues, "warns": warns, "ok": ok}


def annales_status() -> dict[str, str]:
    md = ANNALES / "markdown_version"
    out = {}
    for sub in md.iterdir() if md.exists() else []:
        if sub.is_dir():
            n = len(list(sub.rglob("*.md")))
            out[sub.name] = f"{n} fichiers .md"
    return out


def main() -> int:
    rows = []
    err_count = warn_count = 0

    for md in sorted(COURS.rglob("*.md")):
        if md.name == "README.md" or md.name == REPORT.name:
            continue
        r = audit_file(md)
        rows.append(r)
        err_count += len(r["issues"])
        warn_count += len(r["warns"])

    ann = annales_status()
    lines = [
        f"# Vérification cours × programmes × annales — {date.today().isoformat()}",
        "",
        "Script : `scripts/verifier_cours_programmes_annales.py`",
        "",
        "## Synthèse",
        "",
        f"- **Fichiers cours audités :** {len(rows)}",
        f"- **Erreurs structure :** {err_count}",
        f"- **Avertissements :** {warn_count}",
        "",
        "## Annales locales (`downloads/annales/markdown_version/`)",
        "",
        "| Dossier | Contenu |",
        "|---------|---------|",
    ]
    for k, v in sorted(ann.items()):
        lines.append(f"| `{k}/` | {v} |")
    lines.extend([
        "",
        "Voir aussi `downloads/annales/VERIFICATION_ANNALES.md` et `downloads/annales/README.md`.",
        "",
        "## Détail par fichier",
        "",
        "| Fichier | Lignes | Erreurs | Avertissements |",
        "|---------|--------|---------|----------------|",
    ])
    for r in rows:
        err = "; ".join(r["issues"]) or "—"
        warn = "; ".join(r["warns"]) or "—"
        flag = "❌" if r["issues"] else ("⚠️" if r["warns"] else "✅")
        lines.append(f"| {flag} `{r['path']}` | {r['lines']} | {err} | {warn} |")

    REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Report: {REPORT}")
    print(f"Errors: {err_count}, Warnings: {warn_count}")
    return 1 if err_count else 0


if __name__ == "__main__":
    raise SystemExit(main())
