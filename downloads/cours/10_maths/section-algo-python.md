# Maths — Algorithmique et Python
> Programme : `07_mathematiques_specialite_terminale_BO2019` · Fiche : `downloads/fiches/11_maths_finale.md` · Coeff : 16 · Épreuve : **17/06**, 4 h

## Introduction

Le programme maths demande d’utiliser **Python** (ou pseudo-code) pour **expérimenter** : suites, dichotomie, lois, graphes. Ce n’est pas NSI : pas de réseau ni de bases de données — des **boucles**, **conditions**, **listes** pour vérifier une conjecture.

Tu as peut-être vu un pseudo-code en **5e** (répéter, « si… alors »). Épreuve **17/06** : question « compléter l’algorithme », trace d’exécution, ou programme court sur **suite** / **probabilité simulée**.

## Prérequis (niveau 5e)

- Ordre des opérations ; notion de variable (« boîte » qui stocke un nombre).
- [section-suites.md](section-suites.md) : u_{n+1}, récurrence.
- [mathematiques-base.md](../00_fondations/mathematiques-base.md).

**Pont :** exécuter à la main une boucle « pour i de 1 à 3, afficher i ».

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Variable** | Nom qui stocke une valeur | n = 5 |
| **Affectation** | Changer la valeur | n = n + 1 |
| **Boucle for** | Répéter pour i dans une plage | for i in range(10) |
| **Boucle while** | Répéter tant que condition | while n > 0 |
| **Condition if** | Branchement | if x > 0: |
| **Liste** | Suite ordonnée de valeurs | [1, 3, 5] |
| **append** | Ajouter en fin de liste | L.append(x) |
| **Fonction def** | Bloc réutilisable | def f(x): return x**2 |
| **range(a,b)** | entiers de a à b−1 | range(0,5) → 0..4 |
| **Indentation** | Blocs en Python (4 espaces) | sous if/for |
| **Dichotomie** | Couper un intervalle en deux pour chercher | zéro de f |
| **Simulation** | Tirages aléatoires répétés | estimer une proba |

## Cours

### 1. Premiers pas Python (calculatrice améliorée)

```python
x = 3
y = x * x + 1   # y vaut 10
print(y)
```

**Exemple guidé — trace**

1. x=3 → y=10 → affiche 10.

> **En résumé :** = affecte ; print affiche.
> **Erreur fréquente :** = vs == (test d’égalité).

### 2. Boucle for et suite explicite

```python
for n in range(0, 6):
    u = 2 * n + 1
    print(n, u)
```

Affiche les 6 premiers termes de u_n = 2n+1.

**Exemple guidé — que fait range(0,6) ?**

1. Valeurs 0,1,2,3,4,5 → **6 tours**.

> **En résumé :** range(borne_sup) exclut la borne sup.
> **Erreur fréquente :** range(6) ≠ 1..6 mais 0..5.

### 3. Suite par récurrence

```python
u = 100          # u0
for n in range(10):
    u = 0.9 * u + 5
    print(u)
```

Modèle : u_{n+1} = 0,9 u_n + 5.

**Exemple guidé — interpréter**

1. Chaque tour : nouvelle valeur remplace l’ancienne → termes successifs.

> **En résumé :** une variable u suffit si on n’a pas besoin de tout l’historique.
> **Erreur fréquente :** réinitialiser u=100 **dans** la boucle.

### 4. Liste pour stocker tous les termes

```python
L = [100]
for k in range(10):
    L.append(0.9 * L[-1] + 5)
print(L)
```

**L[-1]** = dernier élément.

> **En résumé :** liste = mémoire de la suite.
> **Erreur fréquente :** indices : premier indice **0**.

### 5. Condition et compteur

```python
compte = 0
for i in range(1000):
    if i % 2 == 0:
        compte += 1
```

Compte les entiers pairs entre 0 et 999.

**Exemple guidé — %**

1. i % 2 == 0 ⟺ i pair.

> **En résumé :** if filtre ; compte accumule.
> **Erreur fréquente :** = au lieu de == dans if.

### 6. Dichotomie (zéro d’une fonction)

Si f continue, f(a)·f(b)<0, il existe c dans [a,b] avec f(c)≈0. Algorithme : couper en milieu, garder le sous-intervale où le signe change.

```python
def f(x):
    return x**3 - x - 2

a, b = 1, 2
for _ in range(20):
    m = (a + b) / 2
    if f(a) * f(m) <= 0:
        b = m
    else:
        a = m
print((a+b)/2)  # approximation
```

> **En résumé :** 20 itérations → précision ~ (b−a)/2^20.
> **Erreur fréquente :** oublier f(a)·f(b)<0 au départ.

### 7. Simulation probabiliste

```python
import random
succes = 0
N = 10000
for _ in range(N):
    if random.random() < 0.3:
        succes += 1
print(succes / N)   # proche de 0.3
```

> **En résumé :** grande N → estimation de p.
> **Erreur fréquente :** N trop petit → résultat instable.

### 8. Lire une question bac sur l’algo

On te demande souvent : **compléter** 2 lignes, **nombre de tours**, **valeur finale** de u. Méthode : **tableau de trace** à la main sur petit exemple.

**Exemple guidé — trace while**

```python
n = 3
while n > 0:
    n = n - 1
print(n)
```

1. n=3→2→1→0 → boucle stop → affiche **0**.

> **En résumé :** trace papier = corrigé fiable.
> **Erreur fréquente :** off-by-one (un tour de trop ou de moins).

## Notions proches

- [section-suites.md](section-suites.md)
- [section-probabilites.md](section-probabilites.md)
- [../06_nsi/rubrique-05-programmation.md](../06_nsi/rubrique-05-programmation.md) — NSI (plus large)

## À retenir pour l'épreuve

- **17/06** : Python autorisé selon convocation ; savoir **tracer** sans machine.
- Indentation compte en Python.

## Exercices

### Découverte 1 — Trace

x=1 ; x=x+2 ; print(x). Résultat ?

**Corrigé :** **3**.

### Découverte 2 — range

len(list(range(2,8))) ?

**Corrigé :** **6** (2,3,4,5,6,7).

### Entraînement 3 — Récurrence

u0=1, u_{n+1}=2u_n. Valeur après boucle `for _ in range(3): u=2*u` partant u=1 ?

**Corrigé :** 1→2→4→8 → **8**.

### Entraînement 4 — Compteur

Combien de i dans range(5) vérifient i**2 < 10 ?

**Corrigé :** i=0,1,2,3 → **4** valeurs.

### Type bac 5 — Compléter

Compléter pour afficher la somme 1+2+…+n (n donné) :

```python
S = 0
for k in range(1, n+1):
    S = ___ 
print(S)
```

**Corrigé :** `S = S + k` ou `S += k`.

### Type bac 6 — Dichotomie

Expliquer en 2 phrases le rôle de `if f(a)*f(m) <= 0` dans la dichotomie.

**Corrigé :** on garde l’intervalle [a,m] où le signe en a est opposé ou nul à celui en m, donc où se trouve encore un changement de signe (zéro).

## Sources

- BO `07_mathematiques_specialite_terminale_BO2019` — Algorithmique
- Fiche `11_maths_finale.md` ; documentation Python 3
