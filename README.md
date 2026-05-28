# bac-lva-lvb-axes

Mini application web interactive pour reviser les 8 axes du programme de langues vivantes du cycle terminal, avec un focus LVA Anglais et LVB Hebreu.

Theme commun : **« Gestes fondateurs et mondes en mouvement »**.

## Fonctionnalites

- Diagnostic rapide de 7 questions avec recommandation personnalisee.
- Grille des 8 axes avec filtres par langue et difficulte.
- Fiche detaillee par axe :
  - resume,
  - description complete issue du programme officiel,
  - liste exhaustive des mots-cles,
  - problematiques adaptees a l'anglais et a l'hebreu,
  - flashcards,
  - quiz de 5 questions.
- Quiz global et quiz par axe.
- Mode examen blanc : 10 questions avec timer.
- Pages methodes et conseils :
  - strategies ecrit/oral,
  - structures types,
  - connecteurs et vocabulaire avance,
  - conseils LVA Anglais et LVB Hebreu.
- Systeme de points et barre de progression sauvegardes dans `localStorage`.
- Mode clair/sombre sauvegarde dans `localStorage`.
- Interface responsive avec animations fluides.
- Deploiement compatible GitHub Pages.

## Stack technique

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Lucide React
- React Router DOM v6
- Framer Motion
- localStorage
- gh-pages

## Structure

```text
src/
├── components/
│   ├── AxisCard.tsx
│   ├── Layout.tsx
│   ├── ProgressBar.tsx
│   └── QuizRunner.tsx
├── data/
│   ├── axes.json
│   └── quizzes.json
├── hooks/
│   ├── useLocalStorage.ts
│   ├── useProgress.ts
│   └── useTheme.ts
├── pages/
│   ├── AxisDetailPage.tsx
│   ├── AxesPage.tsx
│   ├── ConseilsPage.tsx
│   ├── HomePage.tsx
│   ├── MethodesPage.tsx
│   └── QuizExamPage.tsx
├── utils/
│   ├── axisHelpers.ts
│   └── types.ts
├── App.tsx
├── main.tsx
└── styles.css
```

## Installation locale

```bash
npm install
npm run dev
```

L'application est ensuite disponible sur l'URL affichee par Vite, en general `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Le dossier genere est `dist/`.

Pour previsualiser le build :

```bash
npm run preview
```

## Deploiement sur GitHub Pages

Le projet utilise :

- `base: "./"` dans `vite.config.ts`, afin que les assets fonctionnent sur GitHub Pages ;
- `HashRouter`, afin d'eviter les erreurs 404 au rechargement d'une route ;
- le paquet `gh-pages`.

### 1. Verifier le champ `homepage`

Dans `package.json`, adapter si besoin :

```json
"homepage": "https://<utilisateur>.github.io/<nom-du-repo>/"
```

Pour ce depot, la valeur configuree est :

```json
"homepage": "https://yehielscourses.github.io/bacV5/"
```

### 2. Deployer

```bash
npm run deploy
```

Cette commande :

1. lance `npm run build` ;
2. publie le contenu de `dist/` sur la branche `gh-pages`.

### 3. Activer GitHub Pages

Dans GitHub :

1. ouvrir **Settings** du depot ;
2. aller dans **Pages** ;
3. choisir la branche `gh-pages` ;
4. choisir le dossier `/ (root)` ;
5. enregistrer.

L'application sera accessible a l'adresse indiquee par GitHub Pages.

## Contenus pedagogiques inclus

Les 8 axes :

1. Identites et echanges
2. Espace prive et espace public
3. Art et pouvoir
4. Citoyennete et mondes virtuels
5. Fictions et realites
6. Innovations scientifiques et responsabilite
7. Diversite et inclusion
8. Territoire et memoire

Chaque axe contient :

- la description complete du programme officiel ;
- les mots-cles officiels ;
- des problematiques adaptees a LVA Anglais et LVB Hebreu ;
- un niveau de difficulte estime ;
- des flashcards ;
- un quiz de 5 questions.

## Scripts disponibles

```bash
npm run dev      # serveur de developpement
npm run build    # compilation TypeScript + build Vite
npm run preview  # previsualisation du build
npm run deploy   # build + publication GitHub Pages
```

## Notes

Ce depot conserve aussi les ressources bac historiques dans `downloads/`, `scripts/` et `a-imprimer/`. L'application web se trouve a la racine et dans `src/`.
