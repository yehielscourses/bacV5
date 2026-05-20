# Vérification Gemini — grilles d'évaluation (mai 2026)

**Conversation Gemini :** https://gemini.google.com/app/f2db7a465f7d43d1

## Sources primaires consultées

- [Eduscol /5664](https://eduscol.education.gouv.fr/5664/modalites-d-evaluation-de-langues-vivantes-aux-baccalaureats-general-et-technologique-et-attestation-de-langues) — PDF grilles LV
- [Eduscol /5670](https://eduscol.education.gouv.fr/5670/le-projet-d-evaluation-en-lycee-general-et-technologique) — Guide IGESR (extrait annexe HG p. 17-18)
- [BO ES MENE2534911N](https://www.education.gouv.fr/bo/2026/Hebdo3/MENE2534911N)
- [BO EMC MENE2531481N](https://www.education.gouv.fr/bo/2025/Hebdo48/MENE2531481N)
- NS ponctuelles LV : renvoie explicitement aux grilles Eduscol /5664

## Convergence

| Fait | Primaire | Gemini R1 | Gemini R2 | Conclusion |
|------|----------|-----------|-----------|------------|
| LV = grilles nationales CECRL | Oui (PDF + NS) | Oui | — | **Grilles dans `04_grilles_lva_lvb_competences.pdf`** |
| Grand oral = grille annexe 1 | Oui (NS PDF) | Oui | — | **Grille dans `12_grand_oral.md`** |
| HG = pas de grille à points par case dans NS | Oui | Oui (pas de grille) | Non (dit guide sans annexe) | **R2 faux** : Guide IGESR **Annexe 1** = tableaux capacités/attendus pour les **mêmes exercices** que la ponctuelle → `01_hg_grille_annexe1_guide_igesr.md` |
| ES ponctuelle = pas de grille nationale tabulaire | Oui (BO 2026) | Oui (barème sujet) | Oui | **Clé de correction du sujet** uniquement |
| EMC = pas de grille nationale ; oral séparé | Oui (BO 2025) | Faux (lié à HG) | Faux (lié à HG écrit) | **BO EMC** : oral 30+30 min, note /20 globale |
| NSI = QCM, pas grille qualitative | Oui | Oui | — | Barème `× 20/42` |
| Philo / maths écrit = pas de grille nationale | Oui | Oui | — | Correction globale ou barème par exercice sur sujet |

## Non résolu

- **Grilles académiques** pour HG/ES (commissions d’entente) : non publiées nationalement ; demander au rectorat Grenoble si copies locales existent.
- **EPS** : grilles d’établissement par APSA (référentiel national circulaire 2019-219).

## Piège corrigé (dossier précédent)

Le premier dépôt mélangeait **notes de service** (barèmes) et **grilles**. Les NS restent utiles pour les modalités ; les **grilles** sont surtout : PDF LV, annexe GO, annexe 1 HG (guide), critères français (guide).
