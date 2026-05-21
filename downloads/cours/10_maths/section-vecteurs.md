# Maths — Vecteurs, droites et plans dans l'espace
> Programme : `downloads/programmes/markdown_version/07_mathematiques_specialite_terminale_BO2019.md`

## Introduction

En **géométrie de l’espace**, on utilise des **vecteurs** pour décrire déplacements, directions de droites et de plans. C’est l’outil du programme **Algèbre et géométrie** en terminale.

Tu connais déjà les **coordonnées** sur une droite (5e) et dans le plan (collège). Ici : **(x,y,z)**, produit scalaire, équations de droites et plans. Épreuve **17/06** (4 h, coeff. **16**) : orthogonalité, distance point-plan, intersection droite-plan.

## Prérequis (niveau 5e)

- Pythagore : a²+b²=c² dans un triangle rectangle.
- Coordonnées dans le plan (abscisse, ordonnée).
- [mathematiques-base.md](../00_fondations/mathematiques-base.md).

**Pont :** distance entre A(1,2) et B(4,6) dans le plan : √((4−1)²+(6−2)²).

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Vecteur u** | Déplacement (direction + sens + norme) | AB⃗ |
| **Coordonnées (x,y,z)** | Composantes dans un repère orthonormé | u(1,2,−1) |
| **Norme ‖u‖** | Longueur √(x²+y²+z²) | ‖u‖ |
| **Colinéaires** | Même direction (parallèles) | u = k v |
| **Produit scalaire u·v** | x₁x₂+y₁y₂+z₁z₂ | u·v=0 ⟺ orthogonal |
| **Vecteur directeur d'une droite** | Indique la direction de la droite | u⃗ |
| **Vecteur normal à un plan** | Perpendiculaire au plan | n⃗ |
| **Équation cartésienne du plan** | ax+by+cz+d=0 | n=(a,b,c) |
| **Repère orthonormé** | Axes perpendiculaires, même échelle | (O,i,j,k) |
| **Projection orthogonale** | « Ombre » perpendiculaire | foot d’un point sur plan |

## Cours

### 1. Vecteur et coordonnées

**AB⃗** de A(x_A,y_A,z_A) vers B(x_B,y_B,z_B) a coordonnées **(x_B−x_A, y_B−y_A, z_B−z_A)**. **Addition** : coordonnée par coordonnée. **λu** multiplie chaque composante.

**Exemple guidé — A(1,0,2), B(3,−1,5)**

1. AB⃗ = (2, −1, 3).
2. ‖AB⃗‖ = √(4+1+9) = √14.

> **En résumé :** vecteur = différence de points.
> **Erreur fréquente :** inverser B−A et A−B.

### 2. Colinéarité et droite

Droite passant par A avec **vecteur directeur u⃗** : point M sur la droite ⟺ AM⃗ colinéaire à u⃗ ⟺ AM⃗ = t u⃗ (**représentation paramétrique**).

**Exemple guidé — droite paramétrique**

1. A(0,0,0), u(1,2,0) → M(t) = (t, 2t, 0).

> **En résumé :** « t » parcourt la droite.
> **Erreur fréquente :** confondre point et vecteur dans l’équation.

### 3. Produit scalaire

**u·v = x₁x₂ + y₁y₂ + z₁z₂**. **u·v = ‖u‖‖v‖ cos θ**. Si **u·v = 0**, vecteurs **orthogonaux**.

**Exemple guidé — angle droit ?**

1. u(1,1,0), v(1,−1,2) → u·v = 1−1+0 = 0 → **orthogonaux**.

> **En résumé :** produit scalaire = test d’orthogonalité sans angle.
> **Erreur fréquente :** multiplier composantes avec + au lieu de produit scalaire.

### 4. Plan : vecteur normal et équation

Plan **P** d’équation **ax+by+cz+d=0** a **n⃗(a,b,c)** normal. Plan passant par A et orthogonal à n : **n·AM⃗ = 0**.

**Exemple guidé — plan z=2**

1. 0x+0y+1z−2=0 → normal (0,0,1), plan horizontal.

> **En résumé :** coefficients de x,y,z = composantes d’un normal.
> **Erreur fréquente :** oublier de normaliser n (pas obligatoire pour équation).

### 5. Distance point-plan

Distance de M₀(x₀,y₀,z₀) au plan ax+by+cz+d=0 :

**d = |ax₀+by₀+cz₀+d| / √(a²+b²+c²)**.

**Exemple guidé — M₀(0,0,0), plan x=3**

1. d = |−3|/1 = **3**.

> **En résumé :** numérateur = remplacer point ; dénominateur = ‖n‖.
> **Erreur fréquente :** oublier valeur absolue.

### 6. Intersection droite-plan

Remplacer paramétriques de la droite dans l’équation du plan → **t**. Si impossible (0=5) : droite **parallèle** au plan (hors intersection). Si identité : droite **dans** le plan.

**Exemple guidé — intersection**

1. Droite M(t)=(t,0,1), plan z=2 → 1=2 impossible → parallèle strict (pas dans plan).

> **En résumé :** substitution de t.
> **Erreur fréquente :** conclure « pas d’intersection » sans distinguer parallèle/inclus.

### 7. Configurations type bac

Montrer qu’un vecteur est **combinaison linéaire** de deux non colinéaires du plan ; trouver **base** ; problème de **cube** unité (sommets, diagonales, plans de symétrie).

> **En résumé :** figure 3D + repère = traduire en algèbre.
> **Erreur fréquente :** mélanger repère non orthonormé et formule distance.

## Notions proches

- [section-limites-derivees.md](section-limites-derivees.md) — vecteur vitesse
- [../09_pc/section-ondes.md](../09_pc/section-ondes.md) — vecteurs en physique

## À retenir pour l'épreuve

- **17/06** : repère orthonormé ; vérifier orthogonalité par produit scalaire nul.
- Rédaction : nommer **u⃗**, **n⃗**, donner équations.

## Exercices

### Découverte 1 — Norme

u(3,4,0). ‖u‖ ?

**Corrigé :** **5**.

### Découverte 2 — Produit scalaire

u(1,0,1), v(1,0,−1). u·v ?

**Corrigé :** **0**.

### Entraînement 3 — Équation plan

Plan passant par (0,0,0) avec n(0,1,0)

**Corrigé :** **y=0** (plan xz).

### Entraînement 4 — Distance

Point (1,2,3) au plan x+y+z−6=0

**Corrigé :** |1+2+3−6|/√3 = **3/√3 = √3**.

### Type bac 5 — Paramétrique

Droite : (1+t, 2−t, t). Vecteur directeur ?

**Corrigé :** **(1, −1, 1)**.

### Type bac 6 — Cube

Dans un cube ABCDEFGH, exprimer AC⃗ en fonction de AB⃗ et AD⃗ (repère adapté).

**Corrigé (indication) :** AC⃗ = AB⃗ + AD⃗ + AE⃗ selon construction (ou coordonnées si A origine).

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

- BO `07_mathematiques_specialite_terminale_BO2019` — Géométrie espace
- Fiche `11_maths_finale.md`
