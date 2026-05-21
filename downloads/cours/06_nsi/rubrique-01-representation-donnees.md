# Rubrique 1 — Représentation des données
> Programme : `downloads/programmes/markdown_version/08_nsi_specialite_premiere_BO2019.md` · Fiche : `downloads/fiches/05_nsi_ponctuelle.md` · Coeff : 8

## Introduction

Tout ce qu’un ordinateur « sait », ce sont des **nombres** stockés sous forme de **0 et 1**. Avant d’apprendre Python ou le Web, il faut comprendre comment on **code** l’information : texte, nombres, vrai/faux.

Cette rubrique compte pour environ **6 questions** sur 42 au bac NSI (QCM, 2 h, **sans calculatrice**). Les conversions binaire / décimal / hexadécimal reviennent souvent : on les travaille **à la main** sur de petits nombres.

## Prérequis (niveau 5e)

Tu dois être à l’aise avec :

- les **nombres entiers** et la division euclidienne (quotient + reste) ;
- la multiplication par **2** et par **10** ;
- l’idée de **code** : A=1, B=2 (chiffrement par décalage) — pas besoin d’informatique avant.

**Pont :** si la division avec reste te bloque, refais : 17 ÷ 5 = 3 reste **2**. Le reste est ce qu’on note à chaque étape en binaire.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Bit** | Plus petite unité : 0 ou 1 | Une ampoule allumée = 1, éteinte = 0 |
| **Octet** | Groupe de **8 bits** | Une lettre en ASCII ≈ 1 octet |
| **Binaire (base 2)** | Écriture avec chiffres 0 et 1 seulement | 5 en décimal = 101 en binaire |
| **Décimal (base 10)** | Écriture habituelle | 13, 255 |
| **Hexadécimal (base 16)** | Chiffres 0–9 puis A–F | FF₁₆ = 255₁₀ |
| **Booléen** | Vrai ou Faux en informatique | `age >= 18` → True ou False |
| **Encodage** | Règle pour transformer texte → nombres | ASCII : « A » → 65 |

## Cours

### 1. Pourquoi l’ordinateur utilise le binaire

Un circuit électronique est facile à construire en deux états stables : **courant faible / courant fort**, interprétés comme 0 et 1. Stocker du 0–9 demanderait dix états fiables — beaucoup plus difficile.

Toute information (photo, son, texte) est finalement une **longue suite de bits**. Plus il y a de bits, plus on peut représenter des choses fines (couleurs, nuances de son).

> **En résumé :** le matériel impose le binaire ; tout le reste est du codage par-dessus.
> **Erreur fréquente :** croire que l’ordinateur « comprend » les lettres — il ne manipule que des nombres.

### 2. Lire et écrire de petits nombres en binaire

En **décimal**, chaque position vaut une puissance de 10 (unités, dizaines, centaines…).  
En **binaire**, chaque position vaut une puissance de **2** :

| Position (droite → gauche) | Valeur |
|----------------------------|--------|
| 1re | 1 |
| 2e | 2 |
| 3e | 4 |
| 4e | 8 |

Exemple : **101**₂ = 1×4 + 0×2 + 1×1 = **5**₁₀.

**Exemple guidé — décimal → binaire : convertir 13**

1. 13 ÷ 2 = 6, reste **1** → on note 1
2. 6 ÷ 2 = 3, reste **0** → on note 0
3. 3 ÷ 2 = 1, reste **1** → on note 1
4. 1 ÷ 2 = 0, reste **1** → on note 1

On lit les restes **de bas en haut** : **1101**₂.

**Vérification :** 8 + 4 + 0 + 1 = 13.

**Exemple guidé — binaire → décimal : convertir 1010₂**

Positions : 8, 4, 2, 1 → 1×8 + 0×4 + 1×2 + 0×1 = **10**₁₀.

> **En résumé :** vers le binaire = divisions par 2 ; vers le décimal = addition des puissances de 2 là où il y a un 1.
> **Erreur fréquente :** lire les restes de haut en bas au lieu de bas en haut.

### 3. L’hexadécimal : compacter les octets

Huit bits = un **octet** → 256 valeurs possibles (0 à 255). Écrire `11111111` est long. En **hexadécimal**, un symbole représente **4 bits** :

| Hex | Binaire | Décimal |
|-----|---------|---------|
| 0 | 0000 | 0 |
| 9 | 1001 | 9 |
| A | 1010 | 10 |
| F | 1111 | 15 |

**FF**₁₆ = 15×16 + 15 = **255**₁₀ = un octet « plein ».

Les informaticiens utilisent l’hex pour lire la mémoire, les couleurs web (`#FF0000` = rouge), les adresses.

> **En résumé :** 1 chiffre hex = 4 bits ; 2 chiffres hex = 1 octet.
> **Erreur fréquente :** confondre B (binaire) et B (hex) — au bac, le contexte ou l’indice ₂ / ₁₆ le précise.

### 4. Texte et booléens

**Texte (simplifié ASCII) :** chaque caractère a un numéro. « A » = 65₁₀ = 1000001₂. Une phrase = une suite d’octets.

**Booléen :** réponse à une question oui/non. En Python : `True`, `False`. Exemple : « l’âge est-il ≥ 18 ? » — on compare et on obtient un booléen, pas un nombre pour compter des personnes.

> **En résumé :** texte = table de correspondance caractère ↔ nombre ; booléen = résultat de test logique.
> **Erreur fréquente :** penser que True vaut 1 « tout le temps » sans test — il faut lire l’énoncé du QCM.

### 5. Types Python utiles (aperçu rubrique suivante)

- **tuple** : suite immuable `(1, 2, 3)`
- **liste** : `[1, 2, 3]` modifiable
- **dict** : `{"nom": "Alice", "age": 17}` — clé → valeur

Ils servent à structurer des données ; la rubrique 2 (tables) les utilise sur des fichiers CSV.

## Notions proches

- [rubrique-02-tables.md](rubrique-02-tables.md) — données en colonnes
- [rubrique-05-programmation.md](rubrique-05-programmation.md) — variables et types en Python

## À retenir pour l’épreuve

- **42 Q**, **7 rubriques × 6 Q** environ ; ici ~6 Q sur représentation des données.
- **Calculatrice interdite** : entraînement sur 0–255, conversions courtes.
- Formules de base : **1 octet = 8 bits** ; **FF hex = 255** ; divisions par 2 pour décimal → binaire.
- QCM piège : confondre bit / octet / caractère ; mauvais sens de lecture des restes.

## Exercices

### Découverte

**1.** Écris en binaire : 0, 1, 2, 3, 4.  
**Corrigé :** 0, 1, 10, 11, 100.

**2.** Combien vaut 111₂ en décimal ?  
**Corrigé :** 4 + 2 + 1 = **7**.

### Entraînement

**3.** Convertis **25**₁₀ en binaire (montre les divisions).  
**Corrigé :** 25→12 r1, 12→6 r0, 6→3 r0, 3→1 r1, 1→0 r1 → **11001**₂.

**4.** Convertis **1010**₂ en décimal.  
**Corrigé :** **10**.

**5.** Combien d’**octets** pour stocker 4 caractères ASCII (simplification 1 caractère = 1 octet) ?  
**Corrigé :** **4 octets** = 32 bits.

### Type bac

**6.** Un QCM propose : « 1010₂ en décimal vaut 8 ». Vrai ou faux ? Justifie.  
**Corrigé :** **Faux** — vaut **10** (8+2).

## Sources

- BO NSI 1re — Représentation des données
- [nsi_7_rubriques.md](../../syntheses/nsi_7_rubriques.md)
- NS ponctuelle spé abandonnée 1re
