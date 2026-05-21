# Rubrique 5 — Langages et programmation (Python)
> Programme : `downloads/programmes/markdown_version/08_nsi_specialite_premiere_BO2019.md` · Fiche : `downloads/fiches/05_nsi_ponctuelle.md` · Coeff : 8

## Introduction

Un **algorithme**, c’est une méthode en étapes. Un **programme**, c’est cet algorithme écrit dans un **langage** que la machine peut exécuter. Au bac NSI, ce langage est **Python 3** : lisible, utilisé dans les exemples du BO et dans les QCM de **trace d’exécution** (que affiche ce script ?).

Cette rubrique compte pour environ **6 questions** sur **42** (QCM, 2 h). On te donne de petits extraits : variables, `if`, boucles `for` / `while`, fonctions `def`, parfois `import`. Tu dois **prédire la sortie** ligne par ligne, pas réécrire un projet entier.

Ce chapitre relie la rubrique 1 (types, booléens), la 2 (parcourir des données) et prépare la 6 (algorithmique structurée).

## Prérequis (niveau 5e)

Tu dois maîtriser :

- une **suite d’instructions** lues **dans l’ordre** (recette de cuisine : étape 1, 2, 3) ;
- une **variable** = nom qui désigne une valeur qui peut changer (`x = 3` puis `x = 5`) ;
- les opérations sur entiers : `+`, `-`, `*`, division entière et **reste** (`%` en Python).

**Pont :** l’**indentation** (décalage vers la droite) en Python remplace les accolades `{ }` d’autres langages. Tout ce qui dépend d’un `if` ou d’une boucle doit être **aligné** sous le `if` / `for`.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Variable** | Nom lié à une valeur en mémoire | `age = 17` |
| **Affectation** | Donner une valeur à une variable | `x = x + 1` |
| **Type** | Nature de la valeur : entier, texte… | `int`, `str`, `bool`, `list` |
| **int** | Entier relatif | `-3`, `0`, `42` |
| **float** | Nombre décimal | `3.14` |
| **str** | Chaîne de caractères (texte) | `"Lina"` |
| **bool** | Booléen `True` / `False` | `age >= 18` |
| **list** | Suite modifiable | `[1, 2, 3]` |
| **Condition** | Exécuter seulement si un test est vrai | `if`, `elif`, `else` |
| **Boucle for** | Répéter pour chaque élément | `for i in range(5):` |
| **Boucle while** | Répéter tant qu’une condition est vraie | `while n > 0:` |
| **Fonction** | Bloc nommé réutilisable | `def carre(n):` |
| **return** | Renvoyer une valeur depuis une fonction | `return n * n` |
| **Module** | Fichier de code importable | `import math` |
| **range(n)** | Entiers de `0` à `n-1` | `range(5)` → 0,1,2,3,4 |

## Cours

### 1. Variables, types et affectation

En Python, on **affecte** avec `=` : le nom à gauche, la valeur à droite. Le **type** suit la valeur : `3` est un `int`, `"bac"` un `str`, `3.5` un `float`. Un **test** avec `==` renvoie un **booléen** ; ne pas confondre avec `=` qui **modifie** la variable.

Les noms sont sensibles à la casse : `Age` et `age` sont différents. On peut **réaffecter** : `x = 1` puis `x = x + 2` → `x` vaut 3.

**Exemple guidé — trace ligne par ligne**

```python
a = 10
b = 3
a = a + b
print(a, b)
```

1. `a` ← 10  
2. `b` ← 3  
3. `a` ← 10 + 3 = **13**  
4. Affichage : **`13 3`** (deux valeurs séparées par un espace).

> **En résumé :** `=` affecte ; `==` compare ; les variables gardent leur dernière valeur.
> **Erreur fréquente :** écrire `if x = 5` au lieu de `if x == 5` → erreur de syntaxe en Python.

### 2. Conditions : if, elif, else

Une **condition** choisit quel bloc exécuter. Python teste l’expression après `if` : si elle est **vraie** (`True`), le bloc indenté sous `if` court ; sinon on passe à `elif` ou `else`.

Opérateurs utiles : `==`, `!=`, `<`, `>`, `<=`, `>=`, et `and`, `or`, `not`.

**Exemple guidé — majeur ou mineur**

```python
age = 17
if age >= 18:
    print("majeur")
else:
    print("mineur")
```

1. Test `17 >= 18` → **False**  
2. Bloc `else` → affiche **`mineur`**.

**Exemple guidé — elif**

```python
note = 14
if note >= 16:
    print("TB")
elif note >= 14:
    print("B")
else:
    print("AB")
```

`14 >= 16` faux ; `14 >= 14` **vrai** → affiche **`B`** (on ne teste pas le `else`).

> **En résumé :** un seul bloc `if` / `elif` / `else` est exécuté — le premier dont la condition est vraie.
> **Erreur fréquente :** penser que tous les `if` successifs s’exécutent — avec `elif`, seul le premier match compte.

### 3. Boucles : for et range

`for` parcourt une **séquence** : liste, chaîne, ou `range(n)`. **`range(5)`** produit 0, 1, 2, 3, 4 — **cinq** valeurs, en commençant à **0**. C’est la source n°1 de pièges QCM.

`for i in range(3):` répète le corps **3 fois** avec `i` = 0, puis 1, puis 2.

**Exemple guidé — somme des entiers 0 à 4**

```python
s = 0
for i in range(5):
    s = s + i
print(s)
```

| Tour | i | s avant | s après |
|------|---|---------|---------|
| 1 | 0 | 0 | 0 |
| 2 | 1 | 0 | 1 |
| 3 | 2 | 1 | 3 |
| 4 | 3 | 3 | 6 |
| 5 | 4 | 6 | **10** |

Affichage final : **`10`**.

> **En résumé :** `range(n)` → de 0 à n−1 ; compter les tours pour les traces QCM.
> **Erreur fréquente :** croire que `range(5)` va jusqu’à 5 inclus — la borne supérieure est **exclue**.

### 4. Boucle while et indentation

`while condition:` répète tant que la condition reste **vraie**. Il faut une **évolution** vers `False`, sinon boucle **infinie** (programme bloqué).

L’**indentation** (4 espaces courants) marque le corps du `while`, du `for`, du `if`. Une ligne mal alignée change tout le programme ou provoque une erreur.

**Exemple guidé — compter à rebours**

```python
n = 3
while n > 0:
    print(n)
    n = n - 1
print("fin")
```

1. `n=3` → affiche 3, `n` devient 2  
2. `n=2` → affiche 2, `n` devient 1  
3. `n=1` → affiche 1, `n` devient 0  
4. `n>0` faux → affiche **`fin`**

Sortie complète : `3`, `2`, `1`, `fin` (sur quatre lignes si quatre `print`).

> **En résumé :** `while` = répéter jusqu’à condition fausse ; vérifier que la variable évolue.
> **Erreur fréquente :** oublier de modifier `n` dans le corps → boucle infinie.

### 5. Fonctions et modules

Une **fonction** regroupe des instructions avec un nom :

```python
def carre(n):
    return n * n

print(carre(4))
```

Appel `carre(4)` : `n` vaut 4, retourne 16, affiche **`16`**.

Sans `return`, la fonction renvoie `None` (affichage vide ou erreur selon le QCM).

Un **module** est un fichier importé : `import math` puis `math.sqrt(9)` → 3.0. Le bac montre surtout des imports standards (`math`, `random`, `csv` en rubrique 2).

**Exemple guidé — fonction avec condition**

```python
def est_pair(n):
    return n % 2 == 0

print(est_pair(5), est_pair(8))
```

1. `5 % 2 == 0` → False  
2. `8 % 2 == 0` → True  
3. Affichage : **`False True`**

> **En résumé :** `def` + paramètres + `return` ; `%` donne le reste de la division euclidienne.
> **Erreur fréquente :** confondre `print` dans une fonction (affiche) et `return` (valeur utilisée ailleurs).

## Notions proches

- [rubrique-06-algorithmique.md](rubrique-06-algorithmique.md) — spécification, complexité, récursivité
- [rubrique-02-tables.md](rubrique-02-tables.md) — `csv`, parcours de fichiers
- [rubrique-01-representation-donnees.md](rubrique-01-representation-donnees.md) — booléens, listes, dict

## À retenir pour l’épreuve

- **42 Q**, ~**6 Q** : **trace** de scripts courts (5–15 lignes).
- Pièges : `=` vs `==` ; `range` borne exclue ; indentation ; `%` pour pair/impair ; `for` vs `while`.
- Pas de calculatrice : entiers petits, traces à la main.
- Lire les **types** : `"3" + 3` est une erreur ; `3 + 3` vaut 6.

## Exercices

### Découverte

**1.** Que affiche `print(2 + 3 * 4)` ?  
**Corrigé :** `2 + 12` = **`14`** (multiplication avant addition).

**2.** Après `x = 5` puis `x = x * 2`, quelle valeur de `x` ?  
**Corrigé :** **10**.

### Entraînement

**3.** Trace : `for i in range(3): print(i * 2)`  
**Corrigé :** affiche **0**, puis **2**, puis **4** (trois lignes).

**4.** Écris une fonction `est_pair(n)` qui renvoie `True` si `n` est pair.  
**Corrigé :**

```python
def est_pair(n):
    return n % 2 == 0
```

**5.** Que affiche ce code ?

```python
m = 1
for k in range(1, 4):
    m = m * k
print(m)
```

**Corrigé :** `range(1, 4)` → k = 1, 2, 3 ; m : 1×1=1, 1×2=2, 2×3=6 → affiche **`6`**.

### Type bac

**6.** QCM : `if x = 3: print(x)` — erreur ?  
**Corrigé :** **Oui** — il faut `==` pour comparer.

**7.** Trace complète :

```python
def mystere(a, b):
    if a > b:
        return a
    return b

print(mystere(7, 7))
```

**Corrigé :** `7 > 7` faux → second `return` → affiche **`7`**.

**8.** Combien de fois le corps de `for j in range(4):` s’exécute-t-il ?  
**Corrigé :** **4 fois** (j = 0, 1, 2, 3).

## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/02_ns_ponctuelle_specialite_abandonnee_1re_juin2025.md` |
| **Fiche** | `downloads/fiches/05_nsi_ponctuelle.md` |
| **Annales** | [`downloads/annales/markdown_version/05_nsi_ponctuelle/`](../../annales/markdown_version/05_nsi_ponctuelle/) (NS format + cadre EDS) |
| **Synthèse** | `downloads/syntheses/nsi_7_rubriques.md` |

**Format (05/06, 2 h, coeff. 8) :** **42 QCM** (7 rubriques × 6) · **1 pt** / bonne réponse → note × **20/42** · **sans calculatrice**.

**Limite :** pas de banque QCM publique — le repo donne la **NS** et le cadre, pas 42 Q types.

**Méthode :**
1. Après ce cours : faire **6 Q** type sur la rubrique (fiches ou QCM maison).
2. À l’épreuve : éliminer 2 réponses ; vérifier Python / binaire / SQL selon rubrique.
3. Chronométrer : 2 h pour 42 Q.

**Entraînement :** lire `05_nsi_ponctuelle/` + demander extraits banque à l’académie.

**Grille :** exactitude technique ; piège = hors programme 1re ou calculatrice interdite.


## Sources

- BO NSI 1re — Langages et programmation
- [nsi_7_rubriques.md](../../syntheses/nsi_7_rubriques.md)
- NS ponctuelle spé abandonnée 1re
