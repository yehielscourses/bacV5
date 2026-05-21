# Stratégie — annales en Markdown (images et graphiques)

Même principe que `downloads/programmes/` et `downloads/notes_de_service/` : **`pdf_version/`** + **`markdown_version/`**, avec traitement spécifique aux sujets d’examen.

## Problème

Les annales ne sont pas que du texte :

| Type de contenu | Matières concernées | `pdftotext` seul |
|-----------------|---------------------|------------------|
| Documents historiques, photos | HG, EMC (grilles), philo | Texte partiel, mise en page perdue |
| Cartes, croquis, fond de carte | HG géographie | **Insuffisant** (souvent image ou vectoriel) |
| Graphiques, tableaux de mesures | ES, PC, maths | Légendes parfois OK, courbes souvent perdues |
| Schémas (circuits, molécules) | PC | Idem |
| Extraits en langue (hébreu) | LVB | Texte extractible si police embarquée |

## Choix retenus (hybride PyMuPDF + pdftotext)

### 1. Texte

- **`pdftotext -layout`** pour le corps searchable (comme les autres dossiers).
- Séparateur `---` entre les pages PDF.

### 2. Images embarquées

- Extraction avec **PyMuPDF** (`page.get_images()` → fichiers `img-NNN.png` ou `.jpeg`).
- Insérées dans le `.md` **après le bloc texte de la page** concernée, avec légende `*[Image embarquée N — page P]*`.

### 3. Reproduction pleine page (graphiques / cartes)

Quand une page est **surtout visuelle** :

- critère : `len(texte) < 400` caractères **ou** au moins une image embarquée **ou** mots-clés (`carte`, `document`, `graphique`, `figure`, `schéma`, `croquis`) dans le texte de la page ;
- génération d’un **`page-PP.png`** (rendu 120 DPI, largeur max 1400 px) ;
- lien Markdown : `![Page P — reproduction fidèle](../assets/.../page-PP.png)`.

Cela couvre les cartes HG et les graphiques PC/maths/ES non extraits comme images séparées.

### 4. Ce qui n’est pas reproductible en MD

- **Compréhension orale LVA** (audio) : rappel en en-tête du sujet → consulter le PDF / centre d’examen.
- **QCM NSI** : texte des questions OK ; schémas rares → PDF si besoin.

### 5. Arborescence

```
downloads/annales/
├── pdf_version/          # miroir de tous les PDF (source officielle)
├── markdown_version/     # un .md par PDF
├── assets/               # images par sujet : assets/<chemin-sans-.pdf>/
│   └── 01_hg_ponctuelle/e3c/2021/foo/
│       ├── page-01.png
│       └── img-001.jpeg
└── (README, vérification, liens EMC/oral inchangés)
```

Chemin relatif dans le `.md` : `../pdf_version/...` et `../assets/...`.

### 6. Taille dépôt

- Pas de rendu systématique des 186 × toutes les pages : uniquement pages « visuelles » (règle ci-dessus).
- Images embarquées : format natif, pas de sur-échantillonnage.

## Commande

```bash
python3 scripts/pdf_annales_to_markdown.py
```
