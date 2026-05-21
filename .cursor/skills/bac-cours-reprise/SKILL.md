---
name: bac-cours-reprise
description: >-
  Builds long, pedagogical markdown study courses from official French
  baccalauréat BO programmes for adults who left school after 5e, under
  downloads/cours/. Teaches step by step with examples, not bullet summaries.
  Use whenever the user mentions cours, leçons, révision contenu, reprise
  scolaire, downloads/cours, chapitres programme, notions bac, or bacV5 lessons.
disable-model-invocation: true
---

# Bac — cours markdown (reprise après 5e)

Produce **real lessons** in `downloads/cours/`: someone who stopped after **5e** must be able to **learn the chapter from the file alone**, without guessing what abbreviations mean.

**Not acceptable:** a checklist of notions, three tables, and three exercise lines. That is a **fiche**, not a cours.

Compose with [bac-programmes](../bac-programmes/SKILL.md) and [reference.md](reference.md) (notation + **standard pédagogique**).

## Workflow

```
- [ ] 1. Matière + BO (bac-programmes)
- [ ] 2. TOC chapitres/notions (md ou PDF)
- [ ] 3. README matière à jour
- [ ] 4. Rédiger cours : respecter reference.md § Standard pédagogique
- [ ] 5. Auto-contrôle qualité (checklist ci-dessous) avant de marquer « rédigé »
- [ ] 6. Liens notions proches + README statuts
```

## File d’attente

| P | Matière | Cible |
|---|---------|--------|
| 1–3, 6 | HG, ES, EMC, NSI | **rédigé** = cours complets |
| 4–5, 7–13 | LV, français, philo, spé, GO… | squelette jusqu’à demande |

Ordre : date convocation, puis coefficient. Voir tableau détaillé dans [reference.md](reference.md).

## Standard pédagogique (obligatoire pour « rédigé »)

Lire et appliquer **[reference.md — Standard pédagogique](reference.md#standard-pédagogique-un-cours-rédigé)** en entier.

Résumé non négociable :

| Critère | Minimum |
|---------|---------|
| Longueur corps **## Cours** | **≥ 120 lignes** (HG chapitre majeur **≥ 180**) |
| Paragraphes | Chaque `###` contient des **phrases explicatives**, pas seulement des puces |
| Structure par `###` | Accroche → explication → **exemple guidé pas à pas** → encadré résumé → **erreurs fréquentes** |
| Prérequis | Rappel **concret** niveau 5e + pont vers le chapitre (recalculer si lacune) |
| Glossaire | **8–15 termes** avec définition + **exemple** pour chaque terme clé |
| Exercices | **≥ 6** répartis découverte / entraînement / type bac, avec **corrigé ou indication** |
| Épreuve | Section dédiée : format, pièges QCM/rédaction, lien BO |
| Ton | Tutoiement ou vouvoiement **cohérent** ; phrases courtes ; une idée par paragraphe |

### Anti-patterns (refuser et réécrire)

- Liste de 5 puces sous un titre = fin du « cours ».
- Tableau sans texte qui explique **comment lire** le tableau.
- « Comme en seconde », « on suppose que », « il est évident que ».
- Jargon BO sans traduction immédiate.
- Moins de 3 sous-parties dans **## Cours**.

### Gabarit structurel

```markdown
# [Titre BO]
> Programme : … · Fiche : … · Coeff : …

## Introduction
[2–4 paragraphes : pourquoi ce chapitre, où il va, lien épreuve]

## Prérequis (niveau 5e)
[Rappels recalculés ; « si tu bloques sur X, relis … »]

## Glossaire
[Table + phrase d’exemple par terme important]

## Cours
### 1. [Première idée — titre parlant]
…
> **En résumé :** …
> **Erreur fréquente :** …

### 2. …
[au moins 4 sections ### pour un chapitre ; 3 pour une rubrique NSI]

## Notions proches
## À retenir pour l'épreuve
## Exercices
### Découverte …
**Corrigé / indication :** …
## Sources
```

**Squelette :** titres de sections vides + statut `squelette` dans le README.

## Contrôle qualité avant « rédigé »

```
[ ] ≥ 120 lignes dans ## Cours (+ Introduction)
[ ] Aucun ### sans au moins un paragraphe de 3+ phrases
[ ] ≥ 1 exemple guidé pas à pas (numéroté)
[ ] ≥ 6 exercices avec corrigés
[ ] Prérequis 5e uniquement (pas CM2, pas lycée implicite)
[ ] Lien explicite format épreuve (NS / fiche)
```

## README matière

Tableau `Chapitre | Fichier | Statut` + liens BO pdf/md + fiche.

## Gemini

Ne pas rédiger le cours. `gemini-browser-verify` seulement si TOC BO illisible.

## Test prompts

1. Réécrire un chapitre HG **≥ 180 lignes**, public 5e, avec corrigés.
2. NSI rubrique 1 : conversion binaire **montrée** sur 13₁₀ pas à pas.
3. ES thème climat : modèle + débat société, **pas** une liste de mots-clés.
