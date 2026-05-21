# Annales — alignées sur **vos** épreuves (bac G 2026, candidat individuel J60)

Les dossiers reprennent la numérotation des fiches `downloads/fiches/`.  
**Une annale n’est conservée que si elle correspond à la même épreuve** (pas une spécialité « proche »).

| Dossier | Votre épreuve | Ce qui est dans le dossier | Ce qui a été **retiré** (erreur précédente) |
|---------|---------------|----------------------------|---------------------------------------------|
| `01_hg_ponctuelle/` | HG **tronc commun**, écrit 2 h, fin de cycle | NS Eduscol HG + sujets **E3C Histoire-Géo général** (2020–2021) | ~~Spé HGGSP~~ (géopolitique, autre programme) |
| `02_es_ponctuelle/` | **Enseignement scientifique**, écrit 2 h, fin de cycle | NS / doc. Eduscol + sujets **E3C Enseignement scientifique** (1re + T, 2020–2021) | ~~Spé SES~~ (sciences éco-sociales, autre matière) |
| `03_emc_ponctuelle/` | EMC **oral** ponctuel | Liens BO + grille (pas de sujets nationaux publics) | — |
| `04_lvb_oral/` | LVB hébreu oral | Sujet écrit 2024 (référence de niveau) | — |
| `05_nsi_ponctuelle/` | NSI **QCM** spé 1re abandonnée | NS Eduscol « EDS non poursuivi » + format 42 Q | ~~Finales écrites spé NSI~~ (3 h, autre épreuve) |
| `06_lva_lvb_ecrit/` | LVA anglais + LVB hébreu, écrit 1 h30 | NS LV + grilles + E3C anglais + sujet hébreu 2024 | — |
| `07_lva_oral/` | LVA oral | Grilles / renvoi vers `06` | — |
| `08_francais/` | Français anticipé **1re** | Annales métropole 2021–2025 | — |
| `09_philo/` | Philo **terminale** | Annales métropole 2021–2025 + NS | — |
| `10_pc/` | Spé **PC finale** (écrit seul si individuel) | Annales métropole 2021–2025 + NS | — |
| `11_maths/` | Spé **maths finale** | Annales métropole 2021–2025 + NS | — |
| `12_grand_oral/` | Grand oral (2 questions PC + maths) | NS consolidée | Pas d’« annale » nationale |

## Sources

- **Épreuves terminales** (français, philo, PC, maths) : [sujetdebac.fr — métropole](https://www.sujetdebac.fr/annales/metropole/)
- **Ponctuelles HG / ES / LV** : banques **E3C** (même discipline, avant le régime actuel) + [Eduscol /5694](https://eduscol.education.gouv.fr/5694/candidats-individuels-au-baccalaureat-general-et-au-baccalaureat-technologique)
- **Sujets réels juin 2026** (HG, ES, EMC, NSI, LV) : tirage **académique** — `dec.gt-bcg@ac-grenoble.fr`

## Mise à jour

```bash
python3 scripts/telecharger_annales_bac.py
```

Rapport : `RAPPORT_TELECHARGEMENT.txt`

## EMC (oral)

- [BO NS EMC — MENE2531481N](https://www.education.gouv.fr/bo/2025/Hebdo48/MENE2531481N)
- [Grille évaluation — Académie de Paris](https://pia.ac-paris.fr/portail/jcms/p2_3605535/bac-2024-epreuve-ponctuelle-emc-grille-d-aide-a-l-evaluation-2024)
