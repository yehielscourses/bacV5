# Maths — Probabilités
> Programme : `07_mathematiques_specialite_terminale_BO2019` · Fiche : `downloads/fiches/11_maths_finale.md` · Coeff : 16 · Épreuve : **17/06**, 4 h

## Introduction

Les **probabilités** quantifient l’**incertitude** : météo, génétique, sondages, jeux. Depuis la **5e**, tu as vu « une chance sur six » au dé. En terminale : **lois** (binomiale, normale), **espérance**, **variance**, **intervalles de confiance**.

Épreuve **17/06** (4 h, coeff. **16**) : exercices sur dé, urne, ou variable aléatoire X ~ B(n,p). Ce cours relie **dénombrement** ([section-combinatoire.md](section-combinatoire.md)) et **calcul**.

## Prérequis (niveau 5e)

- Fraction « favorable / total » sur dés équilibrés.
- [mathematiques-base.md](../00_fondations/mathematiques-base.md) : fractions, %.
- [section-combinatoire.md](section-combinatoire.md) : combinaisons (lien).

**Pont :** lancer 2 dés, probabilité que la somme soit 7 (tableau 36 cas).

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Univers Ω** | Ensemble des issues possibles | {1,2,3,4,5,6} |
| **Événement** | Sous-ensemble de Ω | « obtenir pair » |
| **Probabilité P** | Nombre entre 0 et 1, P(Ω)=1 | P(6)=1/6 |
| **Événements incompatibles** | Ne peuvent pas ensemble | 1 et 2 sur un dé |
| **Probabilité conditionnelle** | P(A|B) = P(A∩B)/P(B) | tirage sans remise |
| **Indépendance** | P(A∩B)=P(A)P(B) | deux pièces |
| **Variable aléatoire X** | Nombre associé à chaque issue | gain au jeu |
| **Loi binomiale B(n,p)** | n épreuves indép., succès p | 10 lancers pièce |
| **Espérance E(X)** | Moyenne théorique | E= np pour B |
| **Variance V(X)** | Dispersion | V=np(1−p) |
| **Loi normale** | Cloche, paramètres μ, σ | taille, erreur |
| **Intervalle de confiance** | Fourchette pour un paramètre | sondage |

## Cours

### 1. Probabilité sur univers fini

Si toutes les issues **équiprobables** : P(A) = |A|/|Ω|. **Addition** : si A et B incompatibles, P(A∪B)=P(A)+P(B).

**Exemple guidé — carte**

1. Jeu 52 cartes, P(as) = 4/52 = **1/13**.

> **En résumé :** dénombrer correctement Ω.
> **Erreur fréquente :** oublier « sans remise » (Ω change à chaque tirage).

### 2. Probabilité conditionnelle et arbre

**P(A|B)** = probabilité de A sachant B. **Formule des probabilités totales** sur un arbre pondéré.

**Exemple guidé — urne**

1. 3 rouges, 2 bleues. Tirage sans remise : P(2e rouge | 1re rouge) = 2/4.

> **En résumé :** arbre = méthode visuelle fiable.
> **Erreur fréquente :** multiplier des probas non conditionnées.

### 3. Indépendance

A et B **indépendants** si P(A∩B)=P(A)P(B). Deux tirages **avec remise** souvent indépendants.

**Exemple guidé — deux pièces**

1. P(2 Pile) = (1/2)² = **1/4**.

> **En résumé :** indépendance = information sur l’un n’affecte pas l’autre.
> **Erreur fréquente :** supposer indépendance sans remise.

### 4. Variable aléatoire et loi

X prend valeurs x_i avec probabilités p_i. **Σ p_i = 1**. **E(X) = Σ x_i p_i**.

**Exemple guidé — dé truqué ?**

1. E(X)=3,5 pour dé équitable (moyenne 1+…+6)/6 → repère.

> **En résumé :** loi = tableau valeurs / probas.
> **Erreur fréquente :** espérance = valeur la plus probable (faux en général).

### 5. Loi binomiale B(n,p)

n **épreuves** indépendantes, succès probabilité p. P(X=k) = C(n,k) p^k (1−p)^{n−k}. **E(X)=np**, **V(X)=np(1−p)**.

**Exemple guidé — 10 pièces, 3 Pile**

1. P(X=3) = C(10,3)(1/2)^10.

> **En résumé :** « nombre de succès » → binomiale si conditions OK.
> **Erreur fréquente :** utiliser B sans indépendance ni même p.

### 6. Loi normale (intuition)

Grande population, variable « somme de petits effets » → **cloche**. Paramètres **μ** (centre), **σ** (dispersion). Calculatrice : P(μ−σ ≤ X ≤ μ+σ) ≈ 68 % (règle empirique).

**Exemple guidé — standardisation**

1. Si X ~ N(μ,σ²), alors Z=(X−μ)/σ ~ N(0,1) pour lire tables/calculatrice.

> **En résumé :** normale = modèle continu fréquent.
> **Erreur fréquente :** confondre σ et σ².

### 7. Intervalle de confiance (sondage)

Au niveau terminale : IC pour une **proportion** p̂ ± erreur (formule programme avec n). Interprétation : « au niveau 95 %, la vraie proportion est dans… » (langage prudent).

> **En résumé :** IC = marge d’incertitude sur un estimateur.
> **Erreur fréquente :** dire « 95 % que p est dans l’intervalle » pour un p fixe (interprétation bayésienne incorrecte au programme).

## Notions proches

- [section-combinatoire.md](section-combinatoire.md)
- [section-suites.md](section-suites.md)

## À retenir pour l'épreuve

- **17/06** : arbre ou formule ; vérifier **modèle** (binomiale ?).
- Calculatrice : loi binomiale et normale.

## Exercices

### Découverte 1 — Dé

P(somme=7) avec 2 dés équilibrés

**Corrigé :** 6 cas favorables / 36 = **1/6**.

### Découverte 2 — Espérance

X : 0 avec proba 0,5, 10 avec proba 0,5. E(X) ?

**Corrigé :** **5**.

### Entraînement 3 — Binomiale

B(5,0,2), P(X=1) ?

**Corrigé :** C(5,1)×0,2×0,8⁴ ≈ **0,41**.

### Entraînement 4 — Conditionnelle

P(A)=0,3, P(B|A)=0,5. P(A∩B) ?

**Corrigé :** **0,15**.

### Type bac 5 — Urne

3 blanches, 1 noire, tirages sans remise de 2. P(2 blanches) ?

**Corrigé :** (3/4)×(2/3) = **1/2**.

### Type bac 6 — Interprétation

100 lancers, 40 succès. Estimer p avec IC programme (indication).

**Corrigé :** p̂=0,40 ; utiliser formule IC terminale avec n=100 (voir fiche formules).

## Sources

- BO `07_mathematiques_specialite_terminale_BO2019` — Probabilités
- Fiche `11_maths_finale.md`
