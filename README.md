# bacV5 — préparation bac général 2026

Dépôt de référence pour un **candidat individuel** (jury J60, académie Grenoble), session **juin 2026** : programmes officiels, notes de service, grilles, fiches méthode et synthèses.

## Arborescence

```
downloads/
├── programmes/          # BO programmes (pdf_version + markdown_version)
├── notes_de_service/    # NS Eduscol + BO ponctuelles (pdf + md)
├── grilles/             # Grilles et barèmes (pdf + synthèses md)
├── fiches/              # Une fiche par épreuve + checklist candidat
├── syntheses/           # NSI 7 rubriques, philo notions/auteurs
├── ressources/          # Œuvres français, liens entraînement
├── convocation/         # Convocation anonymisée
└── entrainement/        # Placeholder sujets types / annales
scripts/
├── pdf_to_markdown.sh   # PDF → markdown (pdftotext)
└── update_pdf_refs.py   # Chemins relatifs vers pdf_version/
```

## Points d’entrée

| Document | Rôle |
|----------|------|
| [downloads/fiches/README.md](downloads/fiches/README.md) | Calendrier des épreuves et fiches par matière |
| [downloads/programmes/TABLEAU_PROGRAMMES.md](downloads/programmes/TABLEAU_PROGRAMMES.md) | Typologie ponctuelles / terminales → programmes BO |
| [downloads/LACUNES_POUR_FICHES_REVISION.md](downloads/LACUNES_POUR_FICHES_REVISION.md) | État des lacunes (repo + candidat) |
| [downloads/notes_de_service/VERIFICATION_NOTES_DE_SERVICE.md](downloads/notes_de_service/VERIFICATION_NOTES_DE_SERVICE.md) | Modalités, coefficients, NS locales |
| [downloads/convocation/Convocation_Epreuves_Anonymisee.md](downloads/convocation/Convocation_Epreuves_Anonymisee.md) | Créneaux et consignes jour J |

## Maintenance

Après ajout de PDF dans `*/pdf_version/` :

```bash
bash scripts/pdf_to_markdown.sh
python3 scripts/update_pdf_refs.py
```

Prérequis : `pdftotext` (paquet `poppler-utils`).

Les NS BO `09`–`12` sont des **bulletins officiels PDF** complets (liens « Télécharger le BO » sur education.gouv.fr) ; rechercher le NOR cible (`MENE2523743N`, etc.) dans le PDF ou le markdown associé.
