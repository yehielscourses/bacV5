# Rubrique 2 — Traitement de données en tables
> Programme : `downloads/programmes/markdown_version/08_nsi_specialite_premiere_BO2019.md` · Fiche : `downloads/fiches/05_nsi_ponctuelle.md` · Coeff : 8

## Introduction

Dans la vie quotidienne, on manipule souvent des **listes structurées** : un carnet de contacts, un tableau de notes, un fichier Excel de ventes. En informatique, on appelle cela des **données en table** : chaque **ligne** décrit un objet (une personne, une commande), chaque **colonne** un attribut (nom, âge, ville).

Au bac NSI, cette rubrique compte pour environ **6 questions** sur **42** (QCM, 2 h, **sans calculatrice**). On ne te demande pas de devenir expert Excel, mais de **comprendre** comment lire un fichier texte tabulé (CSV), filtrer, trier, fusionner deux tables, et lire un court extrait Python.

Ce chapitre s’appuie sur la rubrique 1 (nombres, types Python) et prépare la programmation (rubrique 5) : les listes et dictionnaires servent à représenter des lignes de données.

## Prérequis (niveau 5e)

Tu dois être à l’aise avec :

- un **tableau** à lignes et colonnes (comme en maths ou sur une feuille de classement) ;
- la **moyenne** d’une série de nombres (somme ÷ effectif) ;
- l’idée de **tri** : ranger du plus petit au plus grand (ou l’inverse).

**Pont :** si « fusionner deux listes » te semble flou, imagine deux cahiers : l’un liste les **élèves** (numéro, nom), l’autre les **notes** (numéro, note). Pour avoir nom + note sur la même ligne, il faut une **colonne commune** (ici le numéro d’élève). C’est exactement le principe de la fusion de tables.

Relis si besoin : [rubrique-01-representation-donnees.md](rubrique-01-representation-donnees.md) (types `list`, `dict`).

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Table** | Données organisées en lignes et colonnes | Feuille « clients » avec nom, âge, ville |
| **Ligne (enregistrement)** | Une entrée complète dans la table | `Alice,30,Lyon` |
| **Colonne (champ)** | Un type d’information répété pour chaque ligne | Tous les âges dans la colonne « age » |
| **En-tête** | Première ligne qui nomme les colonnes | `nom,age,ville` |
| **CSV** | Fichier texte : valeurs séparées par `,` ou `;` | Export d’un tableur « en CSV » |
| **Séparateur** | Caractère entre deux valeurs sur une ligne | Virgule `,` ou point-virgule `;` (souvent en France) |
| **Index** | Position d’une ligne (souvent à partir de **0** en Python) | 3e ligne de données → index **2** si l’en-tête est la ligne 0 |
| **Filtrer** | Garder seulement les lignes qui vérifient une condition | Âge > 20 |
| **Trier** | Réordonner les lignes selon une colonne | Ville par ordre alphabétique |
| **Agrégat** | Résultat calculé sur une colonne (moyenne, somme, compte) | Moyenne des âges = 27,5 |
| **Clé** | Colonne utilisée pour identifier ou joindre | `id_client` identique dans deux fichiers |
| **Fusion (jointure)** | Combiner deux tables sur une clé commune | Clients + commandes via `id_client` |
| **DictReader** | Lecteur CSV Python : chaque ligne → dictionnaire | `ligne["nom"]` au lieu de `ligne[0]` |

## Cours

### 1. Lire une table comme un humain (et comme un programme)

Une table, c’est d’abord une **grille lisible**. La première ligne sert souvent d’**en-tête** : elle donne le **nom** de chaque colonne. Les lignes suivantes sont les **données**. Une colonne contient toujours le **même type** d’information (des nombres dans « age », du texte dans « ville ») — mélanger types dans une même colonne complique les calculs.

En bac, on te montre surtout des fichiers **CSV** (Comma-Separated Values). Ce n’est pas un format magique : c’est du **texte brut**, ligne par ligne, avec un séparateur entre les valeurs. Un tableur peut l’ouvrir ; Python peut le lire sans Excel.

**Exemple guidé — lire le tableau suivant**

```text
nom,age,ville
Alice,30,Lyon
Bob,25,Paris
Clara,22,Lyon
```

1. **En-tête :** 3 colonnes → `nom`, `age`, `ville`.
2. **Lignes de données :** 3 personnes (Alice, Bob, Clara).
3. **Colonne « age » :** 30, 25, 22 → on peut calculer une moyenne : (30+25+22) ÷ 3 = **25,67** (arrondi 25,7).
4. **Filtre mental « ville = Lyon » :** Alice et Clara → **2 lignes**.

> **En résumé :** en-tête = noms des colonnes ; chaque autre ligne = un enregistrement ; une colonne = un attribut.
> **Erreur fréquente :** compter l’en-tête comme une ligne de données → il y a 3 lignes de données, pas 4.

### 2. Le format CSV : séparateurs et pièges

Un fichier `.csv` est une suite de lignes. Sur chaque ligne, les valeurs sont coupées par un **séparateur**. En anglais, c’est souvent la **virgule** `,`. En France, Excel exporte parfois avec **`;`** parce que les nombres décimaux utilisent la virgule (`3,5`). Au QCM, lis l’énoncé : il précise le séparateur.

Si une valeur contient elle-même une virgule (une adresse longue), on l’entoure de **guillemets** dans le fichier. Pour le bac, les exemples restent simples.

**Exemple guidé — même données avec `;`**

```text
nom;age;ville
Alice;30;Lyon
```

Le principe est identique : seul le caractère entre les champs change. Le programme Python utilise `csv.reader` ou `csv.DictReader` en indiquant `delimiter=';'` si besoin.

> **En résumé :** CSV = texte tabulaire ; le séparateur peut être `,` ou `;` selon l’export.
> **Erreur fréquente :** supposer que tout CSV utilise la virgule — vérifier l’énoncé ou la première ligne.

### 3. Filtrer, trier, calculer (sans code d’abord)

Avant Python, entraîne-toi **à la main** sur de petites tables (5–10 lignes). Trois opérations reviennent sans cesse :

- **Filtrer** : ne garder que les lignes où une condition est vraie. Exemple : `age >= 26` → seulement Alice (30).
- **Trier** : réordonner selon une colonne (alphabet sur `nom`, croissant sur `age`).
- **Agréger** : une valeur résumant la colonne — **moyenne**, **somme**, **nombre de lignes** (souvent après un filtre).

**Exemple guidé — filtre puis comptage**

Table d’origine (3 lignes). Condition : `ville == "Lyon"`.

1. Alice → Lyon → **gardée**
2. Bob → Paris → **écartée**
3. Clara → Lyon → **gardée**

Résultat : **2 lignes**. Si le QCM demande « combien après filtre », la réponse est **2**, pas « Lyon ».

> **En résumé :** filtre = sous-ensemble de lignes ; tri = nouvel ordre ; agrégat = un nombre (ou une statistique) sur une colonne.
> **Erreur fréquente :** calculer la moyenne sur toute la table alors que l’énoncé dit « parmi ceux de Lyon » — il faut filtrer d’abord.

### 4. Fusionner deux tables (jointure)

En réel, les données sont éclatées : un fichier **clients**, un fichier **commandes**. Pour analyser « combien Alice a dépensé », il faut **relier** les lignes qui parlent de la même personne. On utilise une **clé** : une colonne présente dans **les deux** tables avec la même signification (`id`, `email`, numéro élève…).

**Exemple guidé — fusion sur `id`**

Table A (clients) :

| id | nom |
|----|-----|
| 1 | Alice |
| 2 | Bob |

Table B (commandes) :

| id | montant |
|----|---------|
| 1 | 50 |
| 1 | 20 |
| 2 | 10 |

Pour `id = 1`, on associe Alice aux montants 50 et 20. La fusion **ne invente pas** de lignes : si un `id` de B n’existe pas dans A, selon le type de jointure la ligne peut être ignorée (jointure **interne** — cas le plus courant au bac).

> **En résumé :** fusion = aligner deux tables sur une colonne commune (clé).
> **Erreur fréquente :** fusionner sur des colonnes homonymes mais pas équivalentes (ex. « nom » écrit différemment : « Alice » / « alice »).

### 5. Lire un CSV en Python (aperçu bac)

Le programme officiel utilise **Python 3**. Le module `csv` évite de découper les lignes à la main.

```python
import csv

with open("data.csv", encoding="utf-8") as f:
    lecteur = csv.DictReader(f)  # première ligne = noms des colonnes
    for ligne in lecteur:
        if int(ligne["age"]) > 20:
            print(ligne["nom"], ligne["ville"])
```

**DictReader** : chaque ligne devient un **dictionnaire** (`dict`) : clé = nom de colonne, valeur = texte lue dans le fichier. Les nombres arrivent en **chaîne** `"30"` ; pour calculer, on fait `int(ligne["age"])`.

**Exemple guidé — trace sur Bob**

1. Ligne `Bob,25,Paris` → `{"nom": "Bob", "age": "25", "ville": "Paris"}` (simplifié).
2. `int("25") > 20` → vrai → affichage : `Bob Paris`.

> **En résumé :** `DictReader` + accès `ligne["nom_colonne"]` ; convertir les nombres avant de comparer ou moyenner.
> **Erreur fréquente :** oublier `int()` et comparer `"25" > 20` (comportement incorrect en Python 3).

### 6. Index et numérotation des lignes

En maths, la « première ligne de données » est souvent la ligne 1. En Python, les **index** de liste commencent à **0** : la première ligne de données du CSV (après l’en-tête) a l’index **0** dans un tableau chargé en mémoire.

Si un QCM dit « ligne 2 du fichier », vérifie s’il compte l’en-tête : ligne 2 du **fichier** peut être la **première** ligne de données (index 0 en Python). Note sur ta feuille : **fichier** (humain) vs **index** (programme).

**Exemple guidé — repérer l’index**

Fichier : ligne 1 = en-tête, ligne 2 = Alice, ligne 3 = Bob.

- Alice → **1re ligne de données** → index Python **0**
- Bob → **2e ligne de données** → index Python **1**

> **En résumé :** en Python, la première donnée est souvent à l’index 0 ; lis bien l’énoncé du QCM.
> **Erreur fréquente :** confondre « ligne 2 du fichier » et « index 2 » sans tenir compte de l’en-tête.

## Notions proches

- [rubrique-01-representation-donnees.md](rubrique-01-representation-donnees.md) — types et encodage
- [rubrique-05-programmation.md](rubrique-05-programmation.md) — boucles, conditions, fonctions
- [rubrique-06-algorithmique.md](rubrique-06-algorithmique.md) — parcourir une liste (recherche linéaire)

## À retenir pour l’épreuve

- **42 Q**, ~**6 Q** par rubrique ; ici : CSV, filtre, tri, fusion, petit script `csv`.
- **Calculatrice interdite** : moyennes et comptages restent simples.
- QCM piège : compter l’en-tête ; mauvais séparateur ; fusion sans clé commune ; oublier de filtrer avant une moyenne.
- Mots BO : **indexation**, **fusion de tables**, **fichier tabulé**.

## Exercices

### Découverte

**1.** Dans l’exemple du §1 (`nom,age,ville` + 3 personnes), combien de **colonnes** et de **lignes de données** ?  
**Corrigé :** **3 colonnes**, **3 lignes de données** (sans compter l’en-tête).

**2.** Quelle colonne sert de clé si on joint « élèves (numéro, nom) » et « notes (numéro, note) » ?  
**Corrigé :** la colonne **numéro** (identifiant commun).

### Entraînement

**3.** Filtre `age > 25` sur Alice(30), Bob(25), Clara(22). Qui reste ?  
**Corrigé :** **Alice** seule (30 > 25 ; Bob n’est pas strictement > 25 si l’énoncé dit > ; 25 > 25 est faux).

**4.** Moyenne des âges des personnes de **Lyon** (Alice 30, Clara 22).  
**Corrigé :** (30 + 22) ÷ 2 = **26**.

**5.** Après tri alphabétique sur `nom`, quel est le premier ?  
**Corrigé :** **Alice** (avant Bob, avant Clara).

### Type bac

**6.** Un QCM dit : « DictReader permet d’accéder à la colonne 2 par `ligne[2]` ». Vrai ou faux ?  
**Corrigé :** **Faux** — on accède par **nom** : `ligne["nom"]` (clé du dictionnaire).

**7.** Deux fichiers ont `id_client` et `client_id` pour la même donnée mais noms différents. Peut-on fusionner sans précaution ?  
**Corrigé :** **Non** — il faut la **même colonne** (nom et contenu cohérents) ; renommer ou choisir la bonne clé.

**8.** Trace : pour chaque ligne avec `ville == "Lyon"`, afficher `nom`. Résultat sur l’exemple §1 ?  
**Corrigé :** affiche **Alice** puis **Clara** (deux lignes).

## Sources

- BO NSI 1re — Traitement de données en tables
- [nsi_7_rubriques.md](../../syntheses/nsi_7_rubriques.md)
- NS ponctuelle spé abandonnée 1re
