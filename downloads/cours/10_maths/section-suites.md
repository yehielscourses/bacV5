# Maths — Suites numériques
> Programme : `downloads/programmes/markdown_version/07_mathematiques_specialite_terminale_BO2019.md`

## Introduction

Une **suite** est une liste ordonnée de nombres u₀, u₁, u₂… Souvent définie par **récurrence** (u_{n+1} en fonction de u_n) ou **formule explicite** u_n = f(n). Les suites modélisent intérêts, populations, algorithmes.

Depuis la **5e**, tu connais les « suites » d’images (+3 à chaque étape). Au bac **17/06** (4 h, coeff. **16**), on étudie **limites**, **sens de variation**, suites **géométriques** (×q) et **arithmétiques** (+r), et parfois récurrence linéaire d’ordre 2.

## Prérequis (niveau 5e)

- Suite de nombres : terme suivant = précédent + 3.
- [mathematiques-base.md](../00_fondations/mathematiques-base.md) : puissances, pourcentages.
- Fonction : entrée → sortie (lien u_n = f(n)).

**Pont :** calculer u₁…u₅ pour u_{n+1}=2u_n+1, u₀=1.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Suite (u_n)** | Liste indexée par n ∈ ℕ | u₀, u₁, u₂… |
| **Suite arithmétique** | u_{n+1} = u_n + r | 2, 5, 8… r=3 |
| **Suite géométrique** | u_{n+1} = q u_n | 3, 6, 12… q=2 |
| **Raison r** | Constante ajoutée (arith.) | +3 |
| **Raison q** | Facteur multiplicatif (géom.) | ×2 |
| **Sens de variation** | Croissante / décroissante | u_{n+1}−u_n > 0 |
| **Majorée** | Tous les termes ≤ M | u_n ≤ 10 |
| **Limite ℓ** | Termes proches de ℓ pour n grand | 1/n → 0 |
| **Récurrence** | Définition du terme suivant | u_{n+1}=f(u_n) |
| **Suite adjacente** | une ↓, une ↑, écart → 0 | encadrement |
| **Raisonnement par récurrence** | Preuve pour tout n | initialisation + hérédité |

## Cours

### 1. Définir une suite

**Explicite** : u_n = 2n+1 → 1, 3, 5, 7… **Récurrence** : u₀ donné, u_{n+1} = 0,5 u_n + 10 (modèle avec apport constant).

**Exemple guidé — premiers termes**

1. u₀=100, u_{n+1}=0,9 u_n : 100 ; 90 ; 81 ; 72,9… (décote 10 %).

> **En résumé :** explicite = calcul direct ; récurrence = itération.
> **Erreur fréquente :** confondre n (rang) et u_n (valeur).

### 2. Arithmétique et géométrique

**Arithmétique** : u_n = u₀ + nr. **Géométrique** : u_n = u₀ q^n (q≠0).

**Exemple guidé — intérêt simple vs composé**

1. +100 €/an : arithmétique r=100.
2. +5 %/an : géométrique q=1,05.

> **En résumé :** + fixe → arithmétique ; × fixe → géométrique.
> **Erreur fréquente :** ajouter 5 % comme +0,05 au lieu de ×1,05.

### 3. Sens de variation

**Différence** u_{n+1}−u_n : >0 → croissante. Pour récurrence u_{n+1}=f(u_n), étudier f sur l’intervalle des valeurs atteintes.

**Exemple guidé — u_{n+1}=√(u_n+2), u₀=1**

1. Termes augmentent et se stabilisent vers ℓ vérifiant ℓ=√(ℓ+2) → ℓ=2.

> **En résumé :** point fixe ℓ = f(ℓ) pour limite conjecturée.
> **Erreur fréquente :** affirmer convergence sans justification (monotone bornée).

### 4. Limites de suites usuelles

1/n → 0 ; n → +∞ ; q^n si |q|<1 → 0, si q>1 → +∞. Comparer **croissances** : ln n << n << e^n.

**Exemple guidé — u_n = (2n+1)/(n−3)**

1. Diviser par n → rapport → **2** quand n→+∞.

> **En résumé :** mêmes techniques que limites de fonctions.
> **Erreur fréquente :** lim (n²+1)/(2n²−5) = 1/2 pas 0.

### 5. Théorème des gendarmes et minorants/majorants

Si v_n ≤ u_n ≤ w_n et v_n, w_n → ℓ, alors u_n → ℓ. Utile pour suites oscillantes bornées.

> **En résumé :** encadrer pour conclure.
> **Erreur fréquente :** encadrement qui ne se resserre pas.

### 6. Raisonnement par récurrence (preuve)

**Initialisation** : P(0) vraie. **Hérédité** : P(n) ⇒ P(n+1). Conclusion : P(n) pour tout n.

**Exemple guidé — somme 1+2+…+n = n(n+1)/2**

1. n=1 : OK.
2. Si somme_n = n(n+1)/2, ajouter (n+1) → formule (n+1)(n+2)/2.

> **En résumé :** deux étapes obligatoires.
> **Erreur fréquente :** oublier l’initialisation.

### 7. Suites et modélisation bac

Probabilités (marche aléatoire), algorithmes (complexité), physique discrète. Lien avec **limite** de fonction via u_n = f(n).

## Notions proches

- [section-limites-derivees.md](section-limites-derivees.md)
- [section-probabilites.md](section-probabilites.md)

## À retenir pour l'épreuve

- **17/06** : monotonie + bornée → convergence ; récurrence simple.
- Rédiger une récurrence : **initialisation**, **hérédité**, **conclusion**.

## Exercices

### Découverte 1 — Géométrique

u₀=3, q=2. u₄ ?

**Corrigé :** 3×2⁴ = **48**.

### Découverte 2 — Arithmétique

u₀=5, r=−2. u₃ ?

**Corrigé :** 5−6 = **−1**.

### Entraînement 3 — Limite

u_n = (5n+1)/(n+4). Limite ?

**Corrigé :** **5**.

### Entraînement 4 — Point fixe

u_{n+1} = 0,5 u_n + 4. Limite ℓ ?

**Corrigé :** ℓ = 0,5ℓ+4 → ℓ = **8**.

### Type bac 5 — Récurrence

Montrer par récurrence : 1+3+5+…+(2n−1) = n².

**Corrigé (indication) :** initialisation n=1 ; si somme des 2k−1 pour k≤n vaut n², ajouter (2n+1) donne (n+1)².

### Type bac 6 — Modèle

Capital C₀, intérêt 3 % par an composé. u_{n+1} = ?

**Corrigé :** **u_{n+1} = 1,03 u_n** ; u_n = C₀×1,03^n.

## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/05_ns_epreuve_finale_maths.md` |
| **Annales** | [`downloads/annales/markdown_version/11_maths/`](../../annales/markdown_version/11_maths/) |
| **Fiche** | `downloads/fiches/11_maths_finale.md` |

**Format (17/06, 4 h, coeff. 16) :** exercices rédigés ; **Python** possible ; calculatrice selon NS.

**Méthode sur annale du repo :**
1. Choisir un sujet métropole contenant le chapitre révisé (ex. suites, dérivées).
2. Rédiger toutes les étapes ; vérifier avec le corrigé du repo.
3. Noter les exercices « ratés » → revenir au § correspondant de ce cours.

**Entraînement :** annales `11_maths/` + exercices type bac de ce fichier.

**Grille :** rigueur, complétude (/20).


## Sources

- BO `07_mathematiques_specialite_terminale_BO2019` — Suites
- Fiche `11_maths_finale.md`
