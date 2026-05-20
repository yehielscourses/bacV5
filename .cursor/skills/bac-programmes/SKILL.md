---
name: bac-programmes
description: >-
  Maps a French baccalauréat général convocation to official teaching programmes
  by exam typology (évaluation ponctuelle vs épreuve terminale). Use for candidat
  individuel, convocation, jury schedule, spécialités, LVA/LVB, session 2026.
disable-model-invocation: true
---

# Bac général — programmes d'enseignement

## Règle d'or (ordre obligatoire)

Pour **chaque ligne** de convocation :

1. **Typologie réglementaire** (Eduscol /5694 si CANDIDAT INDIVIDUEL)
2. **Programme BO + niveau** (1re / T / cycle)
3. **PDF** à télécharger

**Interdit :** déduire la typologie depuis le libellé seul (« HG écrite » ≠ automatiquement « épreuve terminale nationale » pour un individuel).

## Étape 0 — Statut

Si la convocation indique **CANDIDAT INDIVIDUEL** → workflow **obligatoire** :
- Navigateur + Google : `site:eduscol.education.gouv.fr candidats individuels`
- Lire https://eduscol.education.gouv.fr/5694/candidats-individuels-au-baccalaureat-general-et-au-baccalaureat-technologique
- Recoupement Gemini : skill **`gemini-browser-verify`** (≥2 rounds, questions neutres) — **Eduscol prime**

## Deux familles d'épreuves (individuel)

| Famille | Part de la note | Exemples sur convocation type |
|---------|-----------------|-------------------------------|
| **Évaluations ponctuelles** | 40 % (remplace CC scolaire) | HG, ES, EMC, LVA, LVB, spé **abandonnée**, EPS |
| **Épreuves terminales** | 60 % | Anticipées français ; finales **2 spé** + philo + GO |

**EOC (09/07)** = **2e groupe / rattrapage** après résultats du 1er groupe — **pas** une évaluation ponctuelle, **pas** un programme à télécharger.

## Typologie → programme (individuel)

| Typologie | Coeff. (Eduscol) | Programme | Indice convocation |
|-----------|------------------|-----------|-------------------|
| Ponctuelle HG | 6 | Choix inscr. : **1re+T** (fin cycle) ou **T** seule (fin T) | Mai, 2h, pas juin spé |
| Ponctuelle ES | 6 | Idem | Mai, 2h |
| Ponctuelle EMC (oral) | 2 | EMC terminal | Oral ~1h |
| Ponctuelle LVA / LVB | 6 chacune | LV **1re–T** (BO 2019) | Écrit/oral juin |
| Ponctuelle spé **1re seule** | 8 | Programme spé **première** | Spé écrit **hors 16–18/06**, souvent **2h** |
| Anticipée français écrit/oral | 5+5 | Français **première** | 4h écrit ; 50 min oral |
| Finale spé conservée (×2) | 16 chacune | Spé **terminale** | **16–17/06**, 3h30–4h |
| Finale philo | 8 | Philo **terminale** | 15/06, 4h |
| Finale Grand oral | 10 | **2 spé T** conservées (fiche 2 questions) | 22/06 |
| Ponctuelle EPS | (arrêté EPS) | EPS | Souvent **manquante** sur convocation |
| EOC | Rattrapage | Aucun PDF dédié | 09/07 si autorisé |

**Heuristique spé :** écrit **16–18 juin** → finale (T) ; **avant** → ponctuelle spé abandonnée (1re).

**Grand oral :** uniquement les **2 spé finales** (ex. PC + Maths), pas la spé ponctuelle (NSI).

**Choix ponctuelles (inscription 1re) :** modalité **fin de cycle** = réviser **1re + T** pour HG/ES/LV ; modalité **fin de chaque année** = réviser le niveau de l’éval passée cette année. La convocation ne dit pas le choix → le signaler.

## Étape 1 — Profil + tableau livrable

Colonnes obligatoires :

`Convocation` | `Typologie` | `Coeff.` | `Programme (niveau BO)` | `PDF` | `Hypothèse`

Voir [reference.md](reference.md) et `downloads/programmes/TABLEAU_PROGRAMMES.md`.

## Compter

- **N** = créneaux convocation (souvent 15)
- **Ponctuelles** + **terminales** + **EOC** (conditionnel) — ne pas fusionner
- **P** = PDF distincts (~11)

## Pièges (checklist)

- [ ] HG/ES/LV traités comme **épreuves terminales nationales** (faux pour **individuel**)
- [ ] 3 écrits spé = 3 **finales** (faux : 2 finales + 1 ponctuelle 1re)
- [ ] NSI 05/06 avec PDF **terminale**
- [ ] EOC = « contrôle continu » ou programmes 06+07 sans préciser **rattrapage**
- [ ] Oublier **choix 1/2** pour le périmètre HG/ES/LV ponctuelles
- [ ] EPS obligatoire Eduscol mais **absente** convocation
- [ ] « candidat libre » ≠ libellé **CANDIDAT INDIVIDUEL**
- [ ] Programmes **rentrée 2026-2027** pour session **2026**

## Téléchargement

`downloads/programmes/` — `NN_matiere_niveau_BOannée.pdf` — numérotation continue.

## Sources

| Sujet | URL |
|-------|-----|
| **Individuels (prioritaire)** | /5694/candidats-individuels-au-baccalaureat-general-et-au-baccalaureat-technologique |
| HG / ES / EMC / LV / spé | pages /5799, /5790, /5787, /5811, /5817, /5829, /5823 |
| Hub T | /5418/cycle-terminal-de-la-voie-generale |
