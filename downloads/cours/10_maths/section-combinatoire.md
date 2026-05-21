# Maths — Combinatoire et dénombrement
> Programme : `07_mathematiques_specialite_terminale_BO2019` · Fiche : `downloads/fiches/11_maths_finale.md` · Coeff : 16 · Épreuve : **17/06**, 4 h

## Introduction

**Combinatoire** = compter sans se tromper : codes, tirages, chemins, mots de passe. Toute probabilité sur univers fini commence par **|Ω|**.

Niveau **5e** : lister les cas (arbre). Ici : **arrangements**, **permutations**, **combinaisons** C(n,k). Épreuve **17/06** (coeff. **16**) : coefficient binomial, dénombrement d’issues, lien avec **binomiale**.

## Prérequis (niveau 5e)

- Multiplier des entiers ; factorielle n! = 1×2×…×n.
- Arbre à deux étapes (pile/face deux fois).

**Pont :** compter à la main les mains de 2 cartes dans un jeu de 4.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Factorielle n!** | Produit 1 à n | 4! = 24 |
| **Permutation** | Ordre de n objets distincts | n! ordres |
| **Arrangement A(n,k)** | k choisis parmi n, **ordre compte** | codes PIN |
| **Combinaison C(n,k)** | k parmi n, **ordre ne compte pas** | main de poker |
| **Coefficient binomial** | C(n,k) = n!/(k!(n−k)!) | ligne Pascal |
| **Principe additif** | A ou B exclus → \|A\|+\|B\| | — |
| **Principe multiplicatif** | A puis B → \|A\|×\|B\| | arbre |
| **Triangle de Pascal** | C(n,k)=C(n−1,k−1)+C(n−1,k) | récurrence |

## Cours

### 1. Principe multiplicatif

Si une tâche a **a** façons et une autre **b** façons indépendantes, ensemble **a×b** enchaînements.

**Exemple guidé — code 2 chiffres**

1. 10×10 = **100** codes (00 à 99, selon contraintes).

> **En résumé :** étapes indépendantes → produit.
> **Erreur fréquente :** compter deux fois un cas (pas exclus).

### 2. Permutations

n objets distincts : **n!** ordres.

**Exemple guidé — 4 livres sur une étagère**

1. 4! = **24** rangements.

> **En résumé :** tous les objets, ordre important.
> **Erreur fréquente :** diviser par k! alors qu’objets sont distincts.

### 3. Arrangements A(n,k)

Choisir **k** parmi **n** **avec ordre** : A(n,k) = n!/(n−k)!.

**Exemple guidé — podium 3 parmi 10**

1. A(10,3) = 10×9×8 = **720**.

> **En résumé :** « classement » sans répétition.
> **Erreur fréquente :** utiliser C quand l’ordre compte (ABC ≠ ACB).

### 4. Combinaisons C(n,k)

Choisir **k** parmi **n** **sans ordre** : C(n,k) = n!/(k!(n−k)!) = « k parmi n » sur calculatrice.

**Exemple guidé — loto simplifié**

1. Choisir 3 numéros parmi 10 : C(10,3) = 120.

**Exemple guidé — vérifier avec main**

1. C(4,2) = 6 paires dans {A,B,C,D} : AB, AC, AD, BC, BD, CD.

> **En résumé :** combinaison = sous-ensemble de taille k.
> **Erreur fréquente :** C(n,k) = C(n,n−k) oublié utile pour calcul.

### 5. Pascal et propriétés

C(n,0)=1 ; C(n,n)=1 ; C(n,k)=C(n−1,k−1)+C(n−1,k). Somme C(n,0)+…+C(n,n)=2^n.

**Exemple guidé — ligne n=4**

1. 1, 4, 6, 4, 1 ; somme = **16** = 2⁴.

> **En résumé :** Pascal = calcul rapide et lien probas.
> **Erreur fréquente :** dépasser k>n (C(n,k)=0).

### 6. Dénombrement et probabilités

P(événement) = (nb favorables)/(nb total) si **équiprobable**.

**Exemple guidé — 5 cartes, exactement 2 as**

1. Favorable : C(4,2)×C(48,3) ; total C(52,5) (modèle simplifié selon énoncé).

> **En résumé :** numérateur et dénominateur = dénombrements.
> **Erreur fréquente :** univers mal défini (avec/sans remise).

### 7. Chemins sur grille (type bac)

De (0,0) à (n,m) en ne montant que **droite** ou **haut** : nombre de chemins = C(n+m, n).

**Exemple guidé — 2 droites, 1 haut**

1. 3 pas dont 2 identiques « type » → C(3,2) = **3** chemins.

> **En résumé :** codage par séquence de R et H.
> **Erreur fréquente :** compter les diagonales interdites.

## Notions proches

- [section-probabilites.md](section-probabilites.md)
- [section-algo-python.md](section-algo-python.md) — boucles de comptage

## À retenir pour l'épreuve

- **17/06** : identifier **ordre oui/non** avant C ou A.
- Calculatrice : nCr, nPr.

## Exercices

### Découverte 1 — C(5,2)

**Corrigé :** 10.

### Découverte 2 — Multiplicatif

3 tee-shirts, 4 pantalons. Tenues ?

**Corrigé :** **12**.

### Entraînement 3 — Arrangement

Mots de 3 lettres distinctes parmi {A,B,C,D}

**Corrigé :** A(4,3)=**24**.

### Entraînement 4 — Chemin

Grille 2×2 (de coin à coin opposé, droite/haut seulement)

**Corrigé :** C(4,2)=**6**.

### Type bac 5 — Proba

Tirage simultané de 3 boules parmi 10 dont 4 rouges. P(3 rouges) ?

**Corrigé :** C(4,3)/C(10,3) = 4/120 = **1/30**.

### Type bac 6 — Dénombrement

Combien de nombres à 4 chiffres distincts avec chiffres 1–9 ?

**Corrigé :** 9×8×7×6 = **3024** (pas de 0).

## Sources

- BO `07_mathematiques_specialite_terminale_BO2019` — Combinatoire
- Fiche `11_maths_finale.md`
