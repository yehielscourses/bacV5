#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Verifie que chaque PDF sous downloads/annales correspond a la bonne epreuve."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("/workspace/downloads/annales")

# Patterns INTERDITS (erreurs connues)
FORBIDDEN = re.compile(
    r"ses|eco-sociales|geopolitique|hggsp|numerique-informatique|"
    r"sciences-ingenieur|llcer|stmg|eppcs|svt|hlp|serie-es|serie-l/",
    re.I,
)

# Par dossier : motifs OBLIGATOIRES dans le chemin ou nom de fichier
RULES: dict[str, re.Pattern | None] = {
    "01_hg_ponctuelle": re.compile(r"histoire-geographie-general|ns_ponctuelle_hg", re.I),
    "02_es_ponctuelle": re.compile(
        r"enseignement-scientifique|document_56670|ns_.*es|ponctuelle.*es", re.I
    ),
    "03_emc_ponctuelle": None,  # pas de PDF attendu
    "04_lvb_oral": None,
    "05_nsi_ponctuelle": re.compile(
        r"specialite_abandonnee|eds-non-poursuivi|nsi|ponctuelle", re.I
    ),
    "06_lva_lvb_ecrit": re.compile(
        r"langues-vivantes-anglais|ns_ponctuelle_lv|grilles_lva|hebreu", re.I
    ),
    "07_lva_oral": None,
    "08_francais": re.compile(r"francais-premiere", re.I),
    "09_philo": re.compile(r"philosophie|gphilodoc", re.I),
    "10_pc": re.compile(r"physique-chimie|nds_pc", re.I),
    "11_maths": re.compile(r"mathematiques|nds_maths", re.I),
    "12_grand_oral": re.compile(r"grand-oral|grand_oral", re.I),
}


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []

    for pdf in sorted(ROOT.rglob("*.pdf")):
        rel = pdf.relative_to(ROOT)
        top = rel.parts[0]
        name = str(rel)

        if FORBIDDEN.search(name):
            errors.append(f"INTERDIT (mauvaise matiere): {rel}")

        pat = RULES.get(top)
        if pat is not None and not pat.search(name):
            errors.append(f"NON CONFORME au dossier {top}: {rel}")

    # Dossiers vides attendus
    for d in ("03_emc_ponctuelle", "04_lvb_oral", "07_lva_oral"):
        if not list((ROOT / d).rglob("*.pdf")):
            warnings.append(f"Pas de PDF dans {d}/ (normal si liens BO seulement)")

    # E3C LVA : rappel format
    lva = list((ROOT / "06_lva_lvb_ecrit").rglob("*.pdf"))
    if lva and not any("terminale" in p.name for p in lva if "anglais" in p.name):
        warnings.append(
            "LVA: E3C anglais surtout 1re-t2 — la ponctuelle exige CO audio (absent des PDF E3C)"
        )

    report = ROOT / "VERIFICATION_ANNALES.md"
    lines = [
        "# Verification des annales — " + __import__("datetime").date.today().isoformat(),
        "",
        "## Resultat automatique",
        "",
        f"- **Erreurs bloquantes:** {len(errors)}",
        f"- **Avertissements:** {len(warnings)}",
        "",
    ]
    if errors:
        lines.append("### Erreurs\n")
        lines.extend(f"- {e}" for e in errors)
    else:
        lines.append("**Aucune matiere hors-sujet detectee** (SES, HGGSP, finale NSI, etc.).\n")

    if warnings:
        lines.append("\n### Avertissements\n")
        lines.extend(f"- {w}" for w in warnings)

    lines.extend(
        [
            "",
            "## Correspondance epreuve → contenu",
            "",
            "| Fiche | Epreuve reelle | Contenu annales | Verdict |",
            "|-------|----------------|-----------------|---------|",
            "| 01 | HG tronc commun, 2h ponctuelle | E3C *Histoire-Géo général* + NS HG | OK discipline ; format E3C ≠ ponctuelle 2024+ |",
            "| 02 | **Enseignement scientifique**, 2h | E3C *Enseignement scientifique* + doc. 56670 | OK |",
            "| 03 | EMC oral | Liens BO uniquement | Pas d'annales nationales |",
            "| 04 | LVB oral | Voir grilles / 06 pour ecrit | Oral = axes, pas sujet type |",
            "| 05 | NSI QCM 1re | NS spé abandonnee + cadre EDS | OK ; pas de sujets QCM publics |",
            "| 06 | LVA/LVB ecrit 1h30 (CO+CE+EE) | NS LV + E3C anglais + hebreu 2024 | E3C sans CO audio ; entrainement partiel |",
            "| 07 | LVA oral | Grilles dans 06 | — |",
            "| 08 | Francais 1re anticipé | Metropole 2021-2025 | OK |",
            "| 09 | Philo terminale | Metropole 2021-2025 + NS | OK |",
            "| 10 | PC finale ecrit | Metropole 2021-2025 + NS | OK |",
            "| 11 | Maths finale | Metropole 2021-2025 + NS | OK |",
            "| 12 | Grand oral | NS seulement | OK (pas d'annale) |",
            "",
            "## Erreurs corrigees depuis la v1",
            "",
            "- ~~SES~~ dans `02_es` → supprime",
            "- ~~HGGSP~~ dans `01_hg` → supprime",
            "- ~~Finales NSI ecrites~~ dans `05_nsi` → supprime",
            "- Doublons Eduscol (2 noms, meme fichier) → supprime",
            "",
        ]
    )

    report.write_text("\n".join(lines), encoding="utf-8")
    print(report)
    for e in errors:
        print("ERROR:", e)
    for w in warnings:
        print("WARN:", w)
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
