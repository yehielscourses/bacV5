# Référence — notation BO + standard pédagogique

Profil : candidat individuel J60, session 2026 — [bac-programmes/reference.md](../bac-programmes/reference.md).

---

## Standard pédagogique : un cours rédigé

Un cours sert à **apprendre**. Le lecteur n’a pas le lycée en tête : chaque notion nouvelle passe par **mots simples → exemple → résumé → exercice**.

### Longueur indicative

| Type de fichier | Lignes min. (fichier entier) | Sections ### dans Cours |
|-----------------|------------------------------|-------------------------|
| HG chapitre terminale | 180–350 | 5–8 |
| HG géographie thème | 150–250 | 4–6 |
| HG rappel 1re | 100–180 | 3–5 |
| ES thème | 150–280 | 4–6 |
| EMC domaine | 120–200 | 3–5 |
| NSI rubrique | 120–200 | 4–5 |
| Fondations 5e | 150+ | 5+ |

Un fichier de 40–60 lignes = **squelette**, pas « rédigé ».

### Structure obligatoire des sections

**## Introduction** (nouveau, avant prérequis)

- Situer le chapitre dans l’histoire / la géo / la science.
- Dire ce que le lecteur saura en fin de lecture.
- Une phrase sur l’**épreuve** (coeff, format, type de questions).

**## Prérequis (niveau 5e)**

- Liste courte puis **rappel recalculé** (ex. relire une date, refaire une division).
- Lien : « Si tu ne te souviens plus de …, fais l’exercice 1 avant de continuer. »

**## Glossaire**

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|

8–15 entrées pour un chapitre ; chaque terme **utilisé plus bas** doit y figurer.

**Chaque `###` dans ## Cours**

1. **Accroche** (1 paragraphe) : pourquoi on apprend ça maintenant.
2. **Explication** (2–4 paragraphes) : développement progressif, analogies du quotidien.
3. **Exemple guidé** : étapes numérotées, résultat visible.
4. Encadré :

```markdown
> **En résumé :** 2–3 phrases.
> **Erreur fréquente :** ce que les candidats confondent.
```

**## Exercices**

- **Découverte** (2–3) : une notion isolée, corrigé détaillé.
- **Entraînement** (2–3) : combinaison de notions, corrigé ou indication.
- **Type bac** (1–2) : formulation proche épreuve, corrigé rédigé.

### Contre-exemple (à ne jamais livrer comme « rédigé »)

```markdown
### 1. Binaire
| Décimal | Binaire |
| 0 | 0 |
Conversion : divisions par 2.
```

Il manque : pourquoi le binaire existe, démonstration sur un nombre, hex expliqué, piège QCM, corrigés.

### Bon extrait (niveau attendu)

```markdown
### 2. Convertir un nombre décimal en binaire

Prenons **13**. On divise par 2 et on note les **restes** :

1. 13 ÷ 2 = 6 reste **1**
2. 6 ÷ 2 = 3 reste **0**
3. 3 ÷ 2 = 1 reste **1**
4. 1 ÷ 2 = 0 reste **1**

On lit les restes **de bas en haut** : 13₁₀ = **1101₂**.

Vérification : 1×8 + 1×4 + 0×2 + 1×1 = 8+4+1 = 13.

> **En résumé :** divisions successives par 2, restes lus à l'envers.
> **Erreur fréquente :** lire les restes de haut en bas.
```

---

## File d’attente épreuves

| P | Matière | Date | Coeff |
|---|---------|------|-------|
| 1 | HG | 26/05 | 6 |
| 2 | ES | 26/05 | 6 |
| 3 | EMC | 28/05 | 2 |
| 6 | NSI | 05/06 | 8 |

---

## Arborescence `downloads/cours/`

| Dossier | Programme BO | Fiche |
|---------|--------------|-------|
| `00_fondations/` | Rappels **5e** | transversal |
| `01_hg/` | `00_*` + `01_*` HG | `01_hg_ponctuelle` |
| `02_es/` | `00b_*` + `02_*` ES | `02_es_ponctuelle` |
| `03_emc/` | `03_emc_*` | `03_emc_ponctuelle` |
| `04_lva/` · `05_lvb/` | `09_langues_*` | fiches 04–07 |
| `06_nsi/` | `08_nsi_*` | `05_nsi_ponctuelle` |
| `07_francais/` · `08_philo/` · `09_pc/` · `10_maths/` · `11_grand_oral/` · `12_eoc/` · `13_eps/` | voir BO | fiches associées |

Nommage : `NN-slug/`, `1re/` `terminale/`, `chapitre-NN-slug.md`, `notion-slug.md`, `cluster-slug.md` si fusion.

---

## Notation par matière (découpage)

### HG

Thème → chapitre (hist.) ; thème → questions (géo.). **(A)** / **(B)** NS HG. Clusters : chronologie+acteurs ; carto+échelles.

### ES

Thèmes 1–3 terminale ; colonnes savoir / méthode / débat en `###` séparés si utile.

### EMC

2 domaines minimum par axe ; oral 1h → exemples concrets + définitions oralables.

### NSI

6 fichiers rubriques ; histoire transversale dans chaque rubrique (repère 1936, évolution matérielle).

### Philo · Français · Spé

17 notions ; œuvres checklist ; fondations avant maths/PC.

---

## Fusion `cluster-*.md`

Si 2+ sections BO partagent le même outil : un fichier **long** plutôt que deux fiches courtes.

---

## Extraction TOC

Lire `downloads/programmes/markdown_version/` ou PDF. Gemini seulement si frontière chapitre ambiguë.
