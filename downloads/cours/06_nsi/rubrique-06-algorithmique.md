# Rubrique 6 — Algorithmique
> Programme : `downloads/programmes/markdown_version/08_nsi_specialite_premiere_BO2019.md` · Fiche : `downloads/fiches/05_nsi_ponctuelle.md` · Coeff : 8

## Introduction

Un **algorithme**, c’est une recette **finie** et **précise** pour résoudre un problème : on sait ce qu’on met en **entrée**, ce qu’on veut en **sortie**, et chaque étape est assez claire pour être exécutée par une machine (ou tracée à la main sur un petit exemple).

Cette rubrique compte pour environ **6 questions** sur **42** au bac NSI (QCM, 2 h). On y voit la **spécification** (entrées, sorties, but), des **parcours** (recherche du maximum, recherche linéaire), des idées de **coût** (combien d’étapes si la liste grandit), un **tri simple**, et parfois la **récursivité** (fonction qui s’appelle elle-même avec un cas de base).

Tu n’as pas à prouver des théorèmes : tu dois **tracer** des algorithmes sur 3 à 5 valeurs et repérer les erreurs de logique dans les propositions du QCM.

## Prérequis (niveau 5e)

Tu dois savoir :

- suivre une **liste d’étapes** dans l’ordre (comme une recette ou un mode d’emploi) ;
- comparer des **nombres** (plus grand, plus petit, égal) ;
- utiliser les bases Python de la [rubrique-05-programmation.md](rubrique-05-programmation.md) : `for`, `if`, `def`, `return`.

**Pont :** si une trace de boucle te perd, refais un tableau « tour | variable | valeur » sur papier — c’est la méthode attendue au bac.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Algorithme** | Suite finie d’étapes pour atteindre un but | Recherche du plus grand nombre d’une liste |
| **Spécification** | Description entrées, sorties, objectif | Entrée : liste de notes ; sortie : la plus grande |
| **Entrée** | Donnée fournie au départ | `[4, 1, 9, 2]` |
| **Sortie** | Résultat produit | `9` |
| **Invariant** | Propriété vraie à chaque tour de boucle (idée) | « m est le max des éléments déjà vus » |
| **Trace** | Exécution pas à pas sur un petit exemple | Tableau des valeurs de `m` à chaque tour |
| **Recherche linéaire** | Parcourir jusqu’à trouver (ou finir) | Chercher 9 dans `[4,1,9,2]` |
| **Tri par sélection** | Chercher le minimum, le placer, répéter | Trier `[4,1,9]` → `[1,4,9]` |
| **Complexité (intuitive)** | Comment le nombre d’étapes grandit avec la taille n | Doubler la taille ≈ doubler les étapes (linéaire) |
| **O(n)** | Ordre de grandeur linéaire (langage courant au bac) | Parcourir toute la liste une fois |
| **Récursivité** | Fonction qui s’appelle elle-même | `fact(n)` appelle `fact(n-1)` |
| **Cas de base** | Condition d’arrêt de la récursion | `fact(0)` ou `fact(1)` renvoie 1 |
| **Pile d’appels** | Mémoire des appels de fonctions en attente | `fact(3)` attend `fact(2)`… |
| **Turing (repère)** | 1936 — modèle de calcul universel | Idée : tout algorithme calculable peut s’exprimer |

## Cours

### 1. Spécifier avant de coder

Avant d’écrire du Python, on clarifie :

- **Entrées** : quoi reçoit l’algorithme ? (liste, entier, texte…)
- **Sorties** : quoi doit-il renvoyer ou afficher ?
- **But** : quelle propriété doit tenir la sortie ? (ex. « la sortie est le maximum des entrées »)

Au QCM, une proposition peut être **fausse** parce qu’elle renvoie le **minimum** alors que l’énoncé demandait le **maximum** — même si le code « tourne ».

**Exemple guidé — valider une spécification**

Problème : « Plus grande note d’une liste non vide de nombres. »  
Entrée : `[12, 8, 15, 8]`  
Sortie attendue : **15**  
Proposition QCM : « L’algorithme renvoie la moyenne. » → **Faux** (mauvaise sortie).

> **En résumé :** entrée + sortie + but = boussole pour juger un algorithme au QCM.
> **Erreur fréquente :** confondre « le programme ne plante pas » et « le programme est **correct** ».

### 2. Maximum d’une liste : parcours et invariant

Idée : initialiser un candidat `m` au premier élément, parcourir le reste, **mettre à jour** `m` si on voit plus grand.

```python
def maximum(tab):
    m = tab[0]
    for x in tab[1:]:
        if x > m:
            m = x
    return m
```

**Invariant (intuition)** : après chaque tour, `m` est le maximum des éléments **déjà parcourus**.

**Exemple guidé — trace sur [4, 1, 9, 2]**

1. `m = 4` (premier élément)  
2. `x = 1` : 1 > 4 ? non → `m` reste 4  
3. `x = 9` : 9 > 4 ? oui → `m = 9`  
4. `x = 2` : 2 > 9 ? non → `m` reste 9  
5. **Sortie : 9**

Nombre de **comparaisons** `x > m` : **3** (une par élément après le premier).

> **En résumé :** un parcours linéaire suffit ; on retient le « champion » `m`.
> **Erreur fréquente :** initialiser `m` à 0 — faux si tous les nombres sont négatifs ; mieux vaut `tab[0]`.

### 3. Recherche linéaire et coût intuitif

**Recherche linéaire** : parcourir la liste de gauche à droite jusqu’à trouver la valeur cherchée (ou jusqu’à la fin).

Sur `[4, 1, 9, 2]`, chercher **9** : on teste 4 (non), 1 (non), 9 (oui) → **3 comparaisons** dans le meilleur cas pour cet exemple ; dans le **pire cas** (absent ou dernier), on teste **tous** les éléments → **n** comparaisons pour une liste de taille **n**.

On dit intuitivement que le coût est **linéaire** : si la taille **double**, le pire cas **double** aussi — notation courante **O(n)** au programme (sans démonstration formelle au bac).

**Exemple guidé — absent**

Chercher **7** dans `[4, 1, 9, 2]` : 4 comparaisons, résultat « **non trouvé** » (selon l’énoncé : `False`, `-1`, ou `None`).

> **En résumé :** recherche linéaire = simple ; coût proportionnel à la taille n dans le pire cas.
> **Erreur fréquente :** croire qu’on « divise par deux » la liste à chaque étape — c’est l’idée d’une **recherche dichotomique** sur liste **triée** (hors programme minimal, mais piège QCM possible).

### 4. Tri par sélection (idée)

Pour trier une liste en ordre croissant (version simple) :

1. Chercher l’**indice du minimum** dans la partie non triée.
2. **Échanger** ce minimum avec le premier de la partie non triée.
3. Réduire la partie non triée et **répéter**.

**Exemple guidé — deux premiers tours sur [4, 1, 9]**

État initial : `[4, 1, 9]`  
- Min global = 1 (indice 1) → échange positions 0 et 1 → `[1, 4, 9]`  
- Partie non triée à partir de l’indice 1 : `[4, 9]` ; min = 4 déjà en place → `[1, 4, 9]` **trié**.

Sur une liste de taille **n**, on fait environ **n²** comparaisons dans le pire cas (tri par sélection) — le bac demande surtout de **comprendre l’idée**, pas de recalculer n² à la main pour n = 1000.

> **En résumé :** tri par sélection = chercher le min, échanger, répéter.
> **Erreur fréquente :** oublier que chaque tour **réduit** la zone à trier — on ne retrie pas tout depuis le début avec la même règle mal appliquée.

### 5. Récursivité et cas de base

Une fonction **récursive** s’appelle elle-même avec un **argument plus petit** (ou plus simple), jusqu’à un **cas de base** qui **arrête** les appels.

**Factorielle** : n! = 1×2×…×n, avec 0! = 1.

```python
def fact(n):
    if n <= 1:
        return 1
    return n * fact(n - 1)
```

**Exemple guidé — trace `fact(4)`**

1. `fact(4)` = 4 × `fact(3)`  
2. `fact(3)` = 3 × `fact(2)`  
3. `fact(2)` = 2 × `fact(1)`  
4. `fact(1)` → cas de base → **1**  
5. Remontée : 2×1=2, 3×2=6, 4×6=**24**

Sans `if n <= 1`, les appels ne s’arrêtent jamais → **erreur** (dépassement de pile).

**Repère culturel** : en 1936, **Alan Turing** propose une machine abstraite capable de simuler tout calcul algorithmique — fondement théorique de l’informatique (question de culture numérique possible au bac).

> **En résumé :** récursion = cas de base + appel sur problème plus petit ; toujours vérifier l’arrêt.
> **Erreur fréquente :** oublier le cas de base ou le rendre inaccessible (`n-1` qui ne descend jamais vers 1).

### 6. Corriger et tester un algorithme

Avant l’épreuve, entraîne-toi à trouver **un contre-exemple** : une entrée petite où le résultat est faux. Exemple : algorithme « max » qui commence à `m = 0` sur `[-5, -2]` renvoie **0** au lieu de **-2**.

Un **jeu de tests** typique au bac :

1. liste d’**un seul** élément ;
2. liste **déjà triée** ;
3. liste avec **doublons** ;
4. valeurs **négatives** (si autorisées).

**Exemple guidé — détecter l’erreur**

Code : `m = 0` puis `for x in tab: if x > m: m = x` sur `tab = [-3, -1]`.  
Trace : aucun x > 0 → sortie **0** — **incorrect** ; le max est **-1**.

> **En résumé :** toujours tester des cas limites ; un seul contre-exemple invalide une proposition « toujours vrai » au QCM.
> **Erreur fréquente :** valider un algorithme seulement sur des exemples positifs `[1, 2, 3]`.

## Notions proches

- [rubrique-05-programmation.md](rubrique-05-programmation.md) — syntaxe Python des boucles et fonctions
- [rubrique-02-tables.md](rubrique-02-tables.md) — parcourir des lignes CSV
- [rubrique-01-representation-donnees.md](rubrique-01-representation-donnees.md) — représentation des nombres

## À retenir pour l’épreuve

- **42 Q**, ~**6 Q** : traces max, recherche, tri simple, `fact(n)`, spécification.
- Méthode : **tableau de trace** sur 3–5 valeurs.
- Pièges : mauvaise sortie ; `m` initialisé à 0 ; récursion sans cas de base ; confondre linéaire O(n) et « toujours une seule étape ».
- Mots BO : **spécification**, **invariant** (intuition), **complexité** (ordre de grandeur).

## Exercices

### Découverte

**1.** Sur `[4, 1, 9, 2]`, combien de comparaisons `x > m` dans `maximum` ?  
**Corrigé :** **3** (éléments 1, 9, 2 après le premier).

**2.** Entrée / sortie pour « chercher si 9 est dans la liste » ?  
**Corrigé :** entrée = liste + valeur 9 ; sortie = **vrai/faux** (ou position) selon l’énoncé.

### Entraînement

**3.** `fact(4)` vaut ?  
**Corrigé :** **24**.

**4.** Recherche linéaire de **2** dans `[4, 1, 9, 2]` : combien de tests avant succès ?  
**Corrigé :** **4** comparaisons (on teste 4, 1, 9, puis 2).

**5.** Après un tour de tri par sélection sur `[4, 1, 9]`, quelle liste ?  
**Corrigé :** **`[1, 4, 9]`** (minimum 1 placé en tête).

### Type bac

**6.** QCM : « `def fact(n): return n * fact(n+1)` avec `fact(1)` cas de base. » Problème ?  
**Corrigé :** l’appel **`n+1`** **agrandit** n → pas de convergence vers le cas de base → récursion incorrecte.

**7.** Spécification « renvoyer le minimum » mais code identique à `maximum` avec `if x > m`. Résultat sur `[3, 1, 2]` ?  
**Corrigé :** renvoie **3** (maximum), pas le minimum **1** → algorithme **incorrect** pour la spec.

**8.** Si une liste double de taille, le pire cas de la recherche linéaire fait environ combien de fois plus de comparaisons ?  
**Corrigé :** environ **2 fois plus** (comportement **linéaire** O(n)).

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

- BO NSI 1re — Algorithmique
- [nsi_7_rubriques.md](../../syntheses/nsi_7_rubriques.md)
- NS ponctuelle spé abandonnée 1re
