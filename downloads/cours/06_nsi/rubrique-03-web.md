# Rubrique 3 — Web (homme-machine)
> Programme : `downloads/programmes/markdown_version/08_nsi_specialite_premiere_BO2019.md` · Fiche : `downloads/fiches/05_nsi_ponctuelle.md` · Coeff : 8

## Introduction

Quand tu ouvres un site dans ton navigateur, tu ne « vois » pas l’informatique interne : tu cliques, tu lis, tu remplis parfois un formulaire. Pourtant, derrière l’écran, plusieurs acteurs coopèrent : ton **ordinateur (client)**, le **serveur** qui héberge le site, et des **langages** qui décrivent la page (HTML), sa présentation (CSS), et les échanges (HTTP).

Cette rubrique compte pour environ **6 questions** sur **42** au bac NSI (QCM, 2 h). On y vérifie surtout que tu sais **qui fait quoi** : structure d’une page, rôle du serveur, différence GET/POST, idée des cookies — sans devenir développeur web professionnel.

Le Web est l’exemple le plus visible de l’**interaction homme-machine** du programme : tu es l’humain, le navigateur et le serveur sont les machines qui traduisent tes actions en requêtes et en pages affichées.

## Prérequis (niveau 5e)

Tu dois connaître :

- un **navigateur** (Chrome, Firefox…) = programme pour afficher des pages ;
- une **URL** = adresse d’une ressource, souvent en `https://…` ;
- la différence entre **lire** une page et **envoyer** une information (formulaire de recherche, connexion).

**Pont :** si « protocole » te fait peur, pense à une **langue commune** : HTTP est la langue standard pour demander une page et recevoir une réponse, comme le français pour parler entre client et serveur.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Client** | Machine/programme qui **demande** une ressource | Ton navigateur sur ton PC |
| **Serveur** | Machine/programme qui **répond** avec des fichiers ou du contenu généré | Serveur d’eduscol qui envoie une page HTML |
| **URL** | Adresse d’une ressource sur le Web | `https://eduscol.education.gouv.fr` |
| **HTML** | Langage de **structure** (titres, paragraphes, liens, formulaires) | `<h1>Titre</h1>` |
| **CSS** | Langage de **mise en forme** (couleurs, tailles, mise en page) | `color: red;` sur les titres |
| **HTTP** | Protocole des échanges Web (requête → réponse) | GET pour récupérer une page |
| **GET** | Méthode HTTP : demander une ressource ; paramètres souvent **dans l’URL** | `/recherche?q=bac` |
| **POST** | Méthode HTTP : envoyer des données **dans le corps** de la requête | Formulaire de mot de passe |
| **Paramètre** | Couple nom=valeur envoyé au serveur | `q=bac` |
| **Formulaire** | Zone HTML pour saisir et envoyer des données | Champ texte + bouton Envoyer |
| **Cookie** | Petit fichier/texte stocké par le **navigateur** pour un site | « Reste connecté » |
| **Session (côté serveur)** | État mémorisé **sur le serveur** pour un visiteur | Panier sur un site marchand |
| **JavaScript** | Langage exécuté **dans le navigateur** (interactivité) | Menu qui s’ouvre au clic |
| **HTTPS** | HTTP **sécurisé** (chiffrement) | Cadenas dans la barre d’adresse |

## Cours

### 1. HTML : la structure d’une page

HTML (HyperText Markup Language) ne « dessine » pas joliment : il **organise** le contenu. Les balises entourent des morceaux de texte : titre, paragraphe, lien, image, formulaire. Le navigateur **interprète** ces balises pour afficher la page.

Une page minimale contient souvent : déclaration `<!DOCTYPE html>`, balise `<html>`, section `<head>` (titre de l’onglet), section `<body>` (ce que tu vois).

**Exemple guidé — repérer les éléments**

```html
<!DOCTYPE html>
<html>
  <head><title>Mon bac NSI</title></head>
  <body>
    <h1>Révisions</h1>
    <p>Liens utiles : <a href="https://eduscol.education.gouv.fr">Eduscol</a>.</p>
  </body>
</html>
```

1. `<title>` → texte de l’**onglet** du navigateur.
2. `<h1>` → **titre principal** visible sur la page.
3. `<p>` → **paragraphe**.
4. `<a href="…">` → **lien** cliquable vers l’URL indiquée.

> **En résumé :** HTML = squelette sémantique de la page ; chaque balise a un rôle précis.
> **Erreur fréquente :** croire que HTML gère les couleurs « par défaut » comme un logiciel de dessin — c’est plutôt le rôle du **CSS**.

### 2. CSS : séparer contenu et apparence

CSS (Cascading Style Sheets) décrit **comment** afficher les éléments HTML : couleur, taille de police, marges, disposition en colonnes. Séparer HTML et CSS permet de changer le design sans réécrire tout le texte.

Au bac, on te demande surtout le **principe** : HTML = structure, CSS = présentation. Un QCM peut montrer une règle simple :

```css
h1 { color: navy; font-size: 24px; }
```

Tous les `<h1>` deviennent bleu marine, 24 px.

**Exemple guidé — qui fait quoi ?**

Énoncé : « Mettre le titre en rouge et centré. »  
- Solution **HTML seul** : mauvaise habitude (balises obsolètes de style mélangées au texte).  
- Solution **CSS** : une règle sur `h1` → `color: red; text-align: center;` — le HTML garde `<h1>Mon titre</h1>`.

> **En résumé :** HTML = quoi afficher ; CSS = comment l’afficher.
> **Erreur fréquente :** répondre qu’un lien `<a>` est défini en CSS — le lien est **HTML** ; le CSS peut seulement en changer la couleur soulignée.

### 3. Formulaires : envoyer des données au serveur

Un **formulaire** HTML regroupe des champs (`input`, `textarea`, `select`) et un bouton d’envoi. Deux attributs importants sur `<form>` :

- **`action`** : URL (ou chemin) qui **reçoit** les données ;
- **`method`** : **`get`** ou **`post`** (méthodes HTTP).

Avec **GET**, les paramètres apparaissent souvent **dans la barre d’adresse** après `?`. Avec **POST**, ils voyagent plutôt dans le **corps** de la requête (mieux pour mots de passe — le bac insiste sur l’idée, pas sur tous les détails de sécurité).

**Exemple guidé — recherche en GET**

```html
<form action="/recherche" method="get">
  <input name="q" type="text">
  <button type="submit">Envoyer</button>
</form>
```

1. Tu tapes `bac` et tu cliques Envoyer.
2. Le navigateur envoie une requête vers `/recherche` avec le paramètre **`q=bac`**.
3. URL possible : `https://site.fr/recherche?q=bac` — le paramètre est **visible**.

> **En résumé :** formulaire = pont homme → serveur ; GET = paramètres souvent visibles dans l’URL.
> **Erreur fréquente :** penser que le serveur « lit le HTML du formulaire » — c’est le navigateur qui **construit la requête HTTP** à partir des champs `name`.

### 4. Client, serveur et HTTP : le voyage d’une page

Quand tu saisis une URL ou cliques sur un lien :

1. Le **navigateur (client)** prépare une **requête HTTP** (souvent GET).
2. La requête traverse le **réseau** jusqu’au **serveur** qui héberge le site.
3. Le serveur renvoie une **réponse HTTP** : code (200 = OK), en-têtes, **corps** (souvent du HTML).
4. Le navigateur **affiche** le HTML, charge CSS/images, peut exécuter du **JavaScript**.

Le serveur **ne voit pas ton écran** : il envoie des fichiers et du texte. C’est le client qui affiche. Si le serveur est en panne, tu obtiens une erreur (404 page introuvable, 500 erreur serveur…).

**Exemple guidé — ordre des étapes (QCM)**

Proposition A : « Le serveur affiche directement la page sur ton moniteur. » → **Faux**.  
Proposition B : « Le navigateur envoie HTTP, reçoit HTML, puis affiche. » → **Vrai**.

> **En résumé :** client = demandeur + affichage ; serveur = fournisseur de la réponse HTTP.
> **Erreur fréquente :** attribuer au serveur le rôle du navigateur (rendu graphique local).

### 5. Cookies, sessions et pièges QCM

Un **cookie** est stocké par le **navigateur** sur la machine du **client**, associé à un site. Il peut mémoriser une préférence de langue ou un identifiant de session **fourni par le serveur**.

Une **session côté serveur** est un état gardé **sur le serveur** (fichiers temporaires, base de données) : le panier d’achat, ton profil connecté. Le cookie peut contenir un **numéro de session** pour que le serveur te reconnaisse — ce n’est **pas** la même chose que « tout est dans le cookie ».

**Exemple guidé — distinguer**

Affirmation 1 : « Les cookies remplacent le serveur. » → **Faux**.  
Affirmation 2 : « Le serveur peut utiliser un identifiant en cookie pour retrouver une session serveur. » → **Vrai** (schéma simplifié courant au bac).

> **En résumé :** cookie = stockage client lié au site ; session serveur = état côté serveur, souvent liée via un id.
> **Erreur fréquente :** QCM qui mélange « session » et « cookie » comme synonymes — précise **où** l’information est stockée.

### 6. JavaScript et pages dynamiques (aperçu)

**JavaScript** s’exécute **dans le navigateur** après réception du HTML. Il peut modifier la page sans recharger tout le site (menu, validation d’un champ, affichage d’un message). Ce n’est **pas** du Python serveur : le bac demande surtout de savoir **où** le code tourne (client vs serveur).

Une page **dynamique** est souvent générée **côté serveur** (Python, PHP…) à partir d’une base de données, puis envoyée en HTML au client. Le QCM peut opposer « page statique » (fichier HTML fixe) et « contenu construit par le serveur à chaque requête ».

**Exemple guidé — qui exécute quoi ?**

1. Le serveur envoie du HTML + un fichier `.js`.
2. Le navigateur affiche le HTML.
3. Le navigateur **exécute** le JavaScript localement.

Le serveur n’« voit » pas le résultat graphique de ton clic — il ne recevra une nouvelle requête que si le script envoie une requête HTTP (formulaire, fetch…).

> **En résumé :** JavaScript = client ; génération HTML depuis base = souvent serveur.
> **Erreur fréquente :** dire que JavaScript remplace HTML — il **complète** l’interaction côté client.

## Notions proches

- [rubrique-04-architectures-systemes.md](rubrique-04-architectures-systemes.md) — réseau, TCP/IP, DNS
- [rubrique-02-tables.md](rubrique-02-tables.md) — données derrière un site dynamique
- [rubrique-05-programmation.md](rubrique-05-programmation.md) — logique côté serveur (aperçu)

## À retenir pour l’épreuve

- **42 Q**, ~**6 Q** ici : HTML/CSS, client-serveur, GET/POST, cookies.
- Savoir lire un **mini extrait HTML** (titre, lien, formulaire).
- Pièges : HTML vs CSS ; GET visible dans l’URL ; cookie ≠ session serveur seule ; qui envoie HTTP (le **client**).
- **HTTPS** = confidentialité sur le réseau (cadenas), pas « pas de virus ».

## Exercices

### Découverte

**1.** Dans l’exemple §1, quelle balise crée le lien cliquable vers Eduscol ?  
**Corrigé :** `<a href="https://eduscol.education.gouv.fr">…</a>`.

**2.** Où le navigateur affiche-t-il le texte « Mon bac NSI » de l’exemple ?  
**Corrigé :** dans l’**onglet** (balise `<title>` dans `<head>`), pas comme gros titre dans le corps — le gros titre visible est `<h1>Révisions</h1>`.

### Entraînement

**3.** `method="get"` sur un formulaire : où peut apparaître `q=bac` après envoi ?  
**Corrigé :** dans l’**URL** (paramètres après `?`), visible dans la barre d’adresse.

**4.** Qui envoie la requête HTTP quand tu charges une page ?  
**Corrigé :** le **client** (navigateur).

**5.** On veut changer la couleur de tous les paragraphes. HTML ou CSS ?  
**Corrigé :** **CSS** (règle sur `p { … }`).

### Type bac

**6.** QCM : « Le serveur web dessine les boutons à la place du navigateur. » Vrai ou faux ?  
**Corrigé :** **Faux** — le serveur envoie du contenu (HTML…) ; le **navigateur** affiche.

**7.** Un cookie contient le mot de passe en clair pour toujours. Bonne pratique ?  
**Corrigé :** **Non** — mauvaise pratique ; les mots de passe ne doivent pas être stockés ainsi côté client (énoncé piège éthique/sécurité).

**8.** Différence principale GET / POST pour le bac ?  
**Corrigé :** GET = paramètres souvent **dans l’URL** ; POST = données plutôt dans le **corps** de la requête (formulaires sensibles).

## Sources

- BO NSI 1re — Interactions homme-machine sur le Web
- [nsi_7_rubriques.md](../../syntheses/nsi_7_rubriques.md)
- NS ponctuelle spé abandonnée 1re
