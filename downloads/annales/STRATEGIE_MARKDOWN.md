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

### 2. Images utiles (pas les bandeaux)

- **Ignorés** : bandeau « Évaluations communes » répété sur chaque page E3C (même fichier sur toutes les pages).
- **Extrait** : photos, cartes, graphiques (surface > ~6 % de la page, pas un simple logo).

### 3. Pas de capture pleine page

- **Aucun** `page-PP.png` : le texte reste en Markdown (`pdftotext`).
- **Uniquement** des fichiers `img-PP-NN.png` (ou `.jpeg`) pour photos, cartes, schémas, graphiques.
- Images embarquées (xref ou inline) ; sinon rendu **de la bbox** du visuel (pas de la page entière).
- Bandeaux E3C ignorés ; doublons dédupliqués (hash MD5).

Les pages coupées au milieu d’un document sont signalées : *(Suite de la page précédente)*.

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
│       ├── img-04-01.jpeg
│       └── img-08-02.png
└── (README, vérification, liens EMC/oral inchangés)
```

Chemin relatif dans le `.md` : `../pdf_version/...` et `../assets/...`.

### 6. Taille dépôt

- Pas de rendu pleine page : uniquement les zones visuelles extraites.
- Images embarquées : format natif, pas de sur-échantillonnage.

## Commande

```bash
python3 scripts/pdf_annales_to_markdown.py
```
