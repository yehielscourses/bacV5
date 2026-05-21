# Rubrique 4 — Architectures matérielles et systèmes
> Programme : `downloads/programmes/markdown_version/08_nsi_specialite_premiere_BO2019.md` · Fiche : `downloads/fiches/05_nsi_ponctuelle.md` · Coeff : 8

## Introduction

Écrire un programme en Python, c’est décrire une suite d’instructions. Mais pour qu’elles **s’exécutent vraiment**, il faut une **machine** : processeur, mémoire, disque, réseau — et entre les deux, un **système d’exploitation** (Windows, Linux, Android…) qui coordonne tout.

Cette rubrique compte pour environ **6 questions** sur **42** au bac NSI (QCM, 2 h). On y teste ta compréhension des **couches** (matériel, OS, applications, réseau), de la différence **RAM / disque**, du rôle des **processus**, et de notions de **sécurité** (pare-feu, mises à jour, hameçonnage).

Tu n’as pas besoin de monter un PC : il faut savoir **expliquer avec tes mots** qui fait quoi, et repérer les affirmations fausses dans un QCM.

## Prérequis (niveau 5e)

Tu dois connaître :

- un **ordinateur** = boîtier avec écran, clavier, « unité centrale » ;
- **Internet** = réseau mondial reliant des machines ;
- qu’un **programme** (appli, jeu, navigateur) s’**installe** et se **lance**.

**Pont :** la **RAM**, c’est la mémoire de travail rapide mais **effacée à l’arrêt** ; le **disque** (ou SSD), c’est l’armoire où les fichiers **restent** même éteint. Si tu fermes un document sans enregistrer, tu perds ce qui n’était que en RAM.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Matériel (hardware)** | Composants physiques : CPU, RAM, disque, carte réseau | Processeur Intel, AMD… |
| **Logiciel (software)** | Programmes et données exécutables | Windows, Firefox, ton script Python |
| **OS (système d’exploitation)** | Logiciel qui gère le matériel pour les autres programmes | Windows 11, Ubuntu, Android |
| **Processus** | Programme **en cours d’exécution** | Firefox ouvert = un processus |
| **CPU (processeur)** | Unité qui exécute les instructions une par une (très vite) | Cœurs multiples = plusieurs tâches en parallèle apparent |
| **RAM** | Mémoire vive, **rapide**, **volatile** (perdue à l’arrêt) | Fichier ouvert non sauvegardé |
| **Disque / SSD** | Stockage **durable**, plus lent que la RAM | Fichiers dans « Documents » |
| **Pilote (driver)** | Logiciel du OS pour parler à un périphérique | Pilote imprimante |
| **Paquet (réseau)** | Bloc de données envoyé sur le réseau | Message découpé en morceaux sur Internet |
| **TCP/IP** | Famille de protocoles d’Internet | Adresse IP + règles de transmission |
| **DNS** | Système qui traduit un **nom** de site en **adresse IP** | `eduscol.education.gouv.fr` → adresse numérique |
| **Pare-feu (firewall)** | Filtre les connexions réseau autorisées / bloquées | Bloquer un port suspect |
| **Malware** | Logiciel malveillant (virus, rançongiciel…) | Pièce jointe infectée |
| **Phishing (hameçonnage)** | Message trompeur pour voler identifiants | Faux mail « banque » |

## Cours

### 1. Des couches : du transistor à ton navigateur

On peut décrire un ordinateur en **couches** qui se superposent :

| Couche | Rôle | Exemple |
|--------|------|---------|
| **Matériel** | Exécuter et stocker physiquement | CPU, RAM, SSD, Wi-Fi |
| **Système d’exploitation** | Gérer fichiers, processus, accès matériel | Linux, Windows |
| **Applications** | Tâches visibles pour l’utilisateur | Navigateur, traitement de texte |
| **Réseau** | Relier les machines (Internet) | TCP/IP, DNS |

Quand tu lances Firefox, l’**application** demande au **OS** d’allouer de la **RAM** et d’utiliser la **carte réseau**. L’OS parle au **matériel** via des **pilotes**. Tu ne programmes pas directement le processeur en bac — tu comprends **qui appelle qui**.

**Exemple guidé — où est stocké un fichier « Enregistrer sous » ?**

1. Pendant l’édition : contenu surtout en **RAM** (rapide).
2. Tu cliques Enregistrer : le OS écrit sur le **disque/SSD** → **durable**.
3. Coupure de courant avant enregistrement : RAM perdue → modifications **perdues**.

> **En résumé :** matériel exécute ; OS coordonne ; applications servent l’utilisateur ; réseau relie les machines.
> **Erreur fréquente :** croire que fermer une fenêtre supprime le fichier du disque — souvent seul le processus s’arrête ; le fichier enregistré reste sur le disque.

### 2. Processeur, RAM et disque : trois rôles différents

Le **CPU** exécute les instructions (calculs, choix, accès mémoire). Il est très rapide mais ne stocke pas tout ton fichier Word.

La **RAM** garde temporairement les programmes ouverts et leurs données pour un accès rapide. Elle est **volatile** : éteindre l’ordinateur **vide** la RAM.

Le **disque** (ou **SSD**, plus rapide, sans pièces mobiles) garde OS, applications installées et tes fichiers **même à l’arrêt**. C’est plus lent que la RAM, mais **persistant**.

**Exemple guidé — classer les affirmations**

A. « La RAM conserve les photos après extinction. » → **Faux**.  
B. « Le SSD conserve le système d’exploitation. » → **Vrai** (tant qu’on ne formate pas).  
C. « Le CPU stocke 10 000 photos en permanence. » → **Faux** — il **calcule** ; le stockage massif est disque/SSD/cloud.

> **En résumé :** CPU = exécution ; RAM = travail temporaire ; disque/SSD = archive durable.
> **Erreur fréquente :** QCM qui dit « mémoire » sans préciser — demande-toi : **RAM** (volatile) ou **stockage** (durable) ?

### 3. Système d’exploitation et processus

L’**OS** est l’intermédiaire obligatoire entre tes applications et le matériel. Il gère :

- les **fichiers** (arborescence, droits) ;
- les **processus** (lancement, arrêt, partage du processeur) ;
- la **mémoire** (qui utilise combien de RAM) ;
- les **périphériques** (écran, clavier, réseau).

Un **processus** = un programme **actif**. Tu peux en avoir **plusieurs en même temps** (musique + navigateur + éditeur). Sur un seul cœur de CPU, l’OS **alterne** très vite entre processus : illusion de **parallélisme**. Sur plusieurs cœurs, certains processus tournent **vraiment** en parallèle.

**Exemple guidé — plantage d’une application**

1. Un jeu plante (erreur interne).
2. Souvent, seul le **processus** du jeu s’arrête.
3. L’**OS** continue : tu peux encore fermer d’autres fenêtres, voire redémarrer l’appli.

Un plantage **total** (écran bleu, freeze complet) peut toucher l’OS — plus rare sur systèmes récents stables.

Le **gestionnaire de tâches** (ou moniteur système) liste les processus actifs : tu peux en **forcer l’arrêt** si une application ne répond plus. C’est une action sur le **processus**, pas sur le fichier enregistré sur le disque.

**Exemple guidé — fermer vs supprimer**

1. Tu forces la fermeture de l’éditeur de texte → le **processus** s’arrête.
2. Ton document **enregistré** hier reste dans « Documents » sur le **disque**.
3. Modifications **non enregistrées** depuis l’ouverture étaient en **RAM** → **perdues**.

> **En résumé :** OS = chef d’orchestre ; processus = programme en cours ; plantage d’une app ≠ toujours tout l’ordinateur.
> **Erreur fréquente :** penser que chaque onglet du navigateur est toujours un processus séparé — selon le navigateur, ce peut être des **threads** dans un même processus (détail au-delà du bac, mais piège possible : « un onglet = toujours un OS différent » est trop simpliste).

### 4. Réseau : paquets, IP et DNS

Internet envoie les données en **paquets** : morceaux étiquetés, qui peuvent prendre des chemins différents puis être **reassemblés**. Le modèle **TCP/IP** assure que les paquets arrivent (TCP) et les adresse (IP).

Chaque machine connectée a une **adresse IP** (série de nombres). Les humains préfèrent des **noms** (`www.example.fr`). Le **DNS** (Domain Name System) traduit le nom en IP, comme un **annuaire**.

**Exemple guidé — que se passe-t-il quand tu tapes une URL ?**

1. Le navigateur extrait le **nom de domaine**.
2. Requête **DNS** → obtient une **adresse IP**.
3. Connexion au serveur via le réseau (paquets TCP/IP).
4. Échange HTTP (rubrique Web) pour recevoir la page.

Si le DNS est en panne, le nom ne se résout pas — même si le serveur du site fonctionne.

> **En résumé :** réseau = paquets + IP ; DNS = nom → adresse.
> **Erreur fréquente :** confondre **URL** (adresse web complète) et **adresse IP** (identifiant machine sur le réseau).

### 5. Sécurité de base et repères culturels

La sécurité au bac reste **pratique** : mots de passe robustes, **mises à jour** du OS et des applications (correctifs de failles), **pare-feu** pour filtrer le réseau, méfiance face au **phishing** (faux mails, fausses pages de connexion).

Un **virus** ou **rançongiciel** est un **logiciel malveillant** : il faut une action souvent humaine (ouvrir une pièce jointe, installer un programme trompeur). Le pare-feu **ne remplace pas** la prudence : il limite certains accès réseau.

**Loi de Moore** (repère historique simplifié) : observation que la **densité de transistors** sur les puces tend à doubler environ tous les **deux ans** (ordre de grandeur — aujourd’hui le rythme ralentit). Idée pour le QCM : le matériel **évolue** rapidement dans l’histoire de l’informatique.

**Exemple guidé — repérer le phishing**

Mail : « Votre compte sera supprimé, cliquez ici et entrez votre mot de passe. » Lien vers `paypa1.com` (chiffre 1 au lieu de l).  
→ **Hameçonnage** : urgence + URL trompeuse. Bonne réaction : **ne pas cliquer**, passer par le site officiel en tapant l’URL toi-même.

> **En résumé :** sécurité = mises à jour + mots de passe + prudence + pare-feu ; phishing = tromperie humaine.
> **Erreur fréquente :** croire qu’un antivirus garantit 100 % de protection — il **aide**, il ne remplace pas le bon sens.

### 6. Modèle d’architecture et évolution du matériel

Le programme distingue les **rôles** des composants (CPU, mémoire, entrées/sorties) sans te faire dessiner un schéma de carte mère. L’idée **von Neumann** (simplifiée) : le **programme** et les **données** sont stockés dans la même mémoire — le CPU lit des instructions et des nombres au même endroit.

Les machines **multiprocesseur** (plusieurs cœurs) exécutent vraiment plusieurs fils d’exécution en parallèle ; cela ne supprime pas le rôle de l’OS pour répartir le travail.

**Exemple guidé — QCM sur Moore**

Affirmation : « La loi de Moore dit que la vitesse de connexion Internet double tous les deux ans. » → **Faux** (confusion avec l’évolution de la **densité de transistors** / puissance des puces, repère historique du matériel).

Affirmation : « Un smartphone actuel a plus de puissance qu’un ordinateur de bureau des années 1990. » → **Vrai** en ordre de grandeur (culture numérique courante au bac).

> **En résumé :** architecture = qui stocke, qui calcule, qui relie ; Moore = évolution des puces, pas du Web.
> **Erreur fréquente :** confondre **cœurs du processeur** et **onglets du navigateur** comme preuve de « plusieurs ordinateurs ».

## Notions proches

- [rubrique-03-web.md](rubrique-03-web.md) — HTTP, client-serveur
- [rubrique-01-representation-donnees.md](rubrique-01-representation-donnees.md) — bits, stockage
- [rubrique-05-programmation.md](rubrique-05-programmation.md) — programme exécuté par le CPU via l’OS

## À retenir pour l’épreuve

- **42 Q**, ~**6 Q** : RAM vs disque, rôle OS, processus, DNS, sécurité.
- **Calculatrice interdite** — peu de calculs ici, surtout du raisonnement.
- Pièges : « mémoire » ambiguë ; serveur web confondu avec OS ; pare-feu ≠ antivirus.
- Repère : **Moore** = évolution matérielle ; **Turing** plutôt en rubrique 6.

## Exercices

### Découverte

**1.** Où sont les fichiers **enregistrés** quand l’ordinateur est éteint ?  
**Corrigé :** sur le **disque / SSD** (stockage durable), pas en RAM.

**2.** Que fait le DNS en une phrase ?  
**Corrigé :** il traduit un **nom de domaine** en **adresse IP**.

### Entraînement

**3.** Classe : volatile ou durable ? (a) RAM (b) SSD (c) document ouvert non sauvegardé.  
**Corrigé :** (a) volatile ; (b) durable ; (c) surtout **volatile** (RAM) jusqu’à Enregistrer.

**4.** Un seul jeu plante, le reste fonctionne. Que s’est-il passé ?  
**Corrigé :** plantage du **processus** du jeu ; l’**OS** tourne encore.

**5.** Pourquoi mettre à jour le système d’exploitation ?  
**Corrigé :** corriger des **failles de sécurité** et des bugs (réponse attendue type bac).

### Type bac

**6.** QCM : « Le pare-feu empêche tous les virus sans antivirus. » Vrai ou faux ?  
**Corrigé :** **Faux** — le pare-feu **filtre le réseau** ; un virus peut arriver par USB, mail, etc.

**7.** « Plusieurs processus en parallèle sur un seul cœur » : comment l’OS y arrive-t-il ?  
**Corrigé :** en **alternant** rapidement l’exécution (partage du temps processeur) — illusion de simultanéité.

**8.** Un mail urgent demande ton mot de passe bancaire par lien inconnu. Quel risque ?  
**Corrigé :** **phishing / hameçonnage** — vol d’identifiants.

## Sources

- BO NSI 1re — Architectures matérielles et systèmes d’exploitation
- [nsi_7_rubriques.md](../../syntheses/nsi_7_rubriques.md)
- NS ponctuelle spé abandonnée 1re
