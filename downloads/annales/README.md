# Annales — alignées sur **vos** épreuves (bac G 2026, candidat individuel J60)

Dernière vérification : voir **`VERIFICATION_ANNALES.md`** (script `scripts/verifier_annales.py`).

## Règle

Chaque dossier = une ligne de **convocation**, pas une spécialité « proche ».

| Dossier | Épreuve | Contenu | Limite connue |
|---------|---------|---------|---------------|
| `01_hg_ponctuelle/` | HG tronc commun, 2 h | NS Eduscol + E3C **Histoire-Géo général** (1re + T) | E3C ? format ponctuel 2024 (questions A/B) ; sujets juin = académie |
| `02_es_ponctuelle/` | **Enseignement scientifique**, 2 h | E3C **Enseignement scientifique** + doc. Eduscol 56670 | OK discipline ; sujets juin = banque nationale |
| `03_emc_ponctuelle/` | EMC oral 1 h | `LIENS_OFFICIELS.md` | Aucune annale PDF publique |
| `04_lvb_oral/` | LVB oral | `LIENS_OFFICIELS.md` | Pas de sujets oraux en ligne |
| `05_nsi_ponctuelle/` | NSI **QCM** 1re | NS format 42 Q + cadre EDS | Pas de banque QCM publique |
| `06_lva_lvb_ecrit/` | LVA/LVB écrit 1h30 (CO+CE+EE) | NS LV, grilles, E3C anglais, hébreu 2024 | E3C **sans** CO audio ; ? copie exacte ponctuelle |
| `07_lva_oral/` | LVA oral | `LIENS_OFFICIELS.md` | — |
| `08_francais/` | Français anticipé écrit | Métropole 2021–2025 | Oral : pas d’annales ici |
| `09_philo/` | Philo terminale | Métropole 2021–2025 + NS | OK |
| `10_pc/` | PC finale écrit | Métropole 2021–2025 + NS | Individuel : sans TP pratique |
| `11_maths/` | Maths finale | Métropole 2021–2025 + NS | OK |
| `12_grand_oral/` | Grand oral | NS consolidée | 2 questions perso (PC + maths) |

## Retiré (erreurs corrigées)

- ~~SES~~ (sciences éco-sociales) — **pas** l’enseignement scientifique
- ~~HGGSP~~ — **pas** HG tronc commun
- ~~Finales écrites NSI~~ — **pas** le QCM ponctuel

## Commandes

```bash
python3 scripts/telecharger_annales_bac.py   # telechargement
python3 scripts/verifier_annales.py            # controle automatique
```

Contact banque académique : `dec.gt-bcg@ac-grenoble.fr`
