# Annales bac — session 2026 (candidat individuel J60)

**102 sujets métropole** (2021–2025) + **75 sujets E3C** (HG / LVA anglais) + **documents officiels Eduscol** (**183 PDF**, ~130 Mo).

Sources principales :
- [Sujetdebac.fr](https://www.sujetdebac.fr/annales/metropole/) — sujets et corrigés métropole (épreuves terminales nationales)
- [Eduscol /5199](https://eduscol.education.gouv.fr/5199/annales-des-epreuves-du-baccalaureat-des-voies-generale-et-technologique) — hub officiel (page dynamique)
- [Eduscol /5706](https://eduscol.education.gouv.fr/5706/les-epreuves-terminales-du-baccalaureat-general) — notes de service consolidées

Script de mise à jour : `scripts/telecharger_annales_bac.py` et `scripts/telecharger_e3c_annexes.py`

---

## Contenu par matière (fiches `downloads/fiches/`)

| Dossier | Épreuve convocation | Annales téléchargées | Remarque |
|---------|---------------------|----------------------|----------|
| `08_francais/` | Français anticipé écrit + oral | Métropole **2021–2025** (sujet + corrigé) | Même format que l’épreuve nationale de français de 1re |
| `09_philo/` | Philo terminale | Métropole **2021–2025** + NS consolidée Eduscol | |
| `10_pc/` | Spé PC finale | Métropole **2021–2025** (2 sujets/session) + NS Eduscol | Individuel : écrit seul (sans TP 1 h) |
| `11_maths/` | Spé maths finale | Métropole **2021–2025** (2 sujets/session) + NS Eduscol | |
| `05_nsi/` | NSI ponctuelle (QCM 1re) | Métropole spé NSI **2021–2025** + NS ponctuelle spé abandonnée + NS SI | Les finales NSI aident sur les thèmes ; l’épreuve réelle = **QCM banque nationale** |
| `01_hg/` | HG ponctuelle | Spé HGGSP métropole **2021–2025** + NS ponctuelle HG + échantillon **E3C HG** | Pas d’annales nationales HG « ponctuelle » publiques ; HGGSP/E3C = entraînement analyse |
| `02_es/` | ES ponctuelle | Spé SES métropole **2021–2025** | Proche des compétences éco ; sujets réels = banque académique |
| `06_lva_lvb_ecrit/` | LVA/LVB écrit | NS ponctuelle LV + grilles Eduscol + **E3C anglais** (2021) + hébreu **2024** | LVA = anglais |
| `04_lvb_oral/` | LVB oral (hébreu) | Sujet écrit **2024** (Eduscol, même dossier que `06`) | Peu d’annales publiques ; compléter via `dec.gt-bcg@ac-grenoble.fr` |
| `07_lva_oral/` | LVA oral (anglais) | Voir `06_lva_anglais_e3c/` + grilles Eduscol | Oral = axes culturels + dossier candidat |
| `03_emc/` | EMC oral ponctuel | — | Pas d’annales nationales ; voir NS BO ci-dessous |
| `12_grand_oral/` | Grand oral | NS consolidée Eduscol uniquement | Pas de « sujet » national : 2 questions sur vos 2 spé |
| `14_eps/` | EPS | — | **Déjà passée** — pas de téléchargement |

---

## Fichiers officiels Eduscol (sous-dossiers `eduscol_officiel/`)

| Fichier | Matière |
|---------|---------|
| `ns_ponctuelle_hg_juin2025.pdf` | HG ponctuelle |
| `ns_ponctuelle_lv_juin2025.pdf` | LVA + LVB écrit |
| `02_ns_ponctuelle_specialite_abandonnee_1re_juin2025.pdf` | NSI (spé abandonnée) |
| `voie-gphilodoc-consolidepdf-102099.pdf` | Philo |
| `nds-consolidee-definition-epreuve-bac-physique-chimie-102096.pdf` | PC |
| `nds-consolidee-definition-epreuve-bac-maths-102105.pdf` | Maths |
| `voie-ggrand-oraldoc-consolidepdf-102120.pdf` | Grand oral |

---

## EMC — documents à consulter (non téléchargés automatiquement)

- NS ponctuelle EMC : [BO MENE2531481N](https://www.education.gouv.fr/bo/2025/Hebdo48/MENE2531481N) (accès navigateur si Cloudflare)
- Grille type : [Académie de Paris — EMC ponctuelle 2024](https://pia.ac-paris.fr/portail/jcms/p2_3605535/bac-2024-epreuve-ponctuelle-emc-grille-d-aide-a-l-evaluation-2024)

---

## LVB hébreu

- Sujet métropole **2024** : [Eduscol document 63577](https://eduscol.education.gouv.fr/document/63577/download) ? `06_lva_lvb_ecrit/2024/hebreu_lvb_sujet_2024.pdf`
- Autres sessions : demander au jury / académie (`dec.gt-bcg@ac-grenoble.fr`)

---

## Nommage des PDF métropole

Exemple : `philosophie-2024-metropole-sujet-officiel.pdf`, `philosophie-2024-metropole-corrige-officiel.pdf`

Rapports techniques : `RAPPORT_TELECHARGEMENT.txt`, `RAPPORT_E3C.txt`
