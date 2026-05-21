#!/usr/bin/env python3
"""Inject ## Méthode annales et entraînement before ## Sources if missing."""

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1] / "downloads" / "cours"

BLOCKS = {
    "01_hg": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/01_ns_ponctuelle_histoire-geographie_juin2025.md` |
| **Fiche** | `downloads/fiches/01_hg_ponctuelle.md` |
| **Annales** | [`downloads/annales/markdown_version/01_hg_ponctuelle/`](../../annales/markdown_version/01_hg_ponctuelle/) · PDF : `annales/pdf_version/01_hg_ponctuelle/` |
| **Liens** | `downloads/ressources/LIENS_ENTRAINEMENT.md` |

**Format officiel (fin de cycle, coeff. 6, 2 h) :** Partie 1 = questions **(A)** du programme (10 pts) · Partie 2 = document(s) liés aux sujets **(B)** au choix (10 pts).

**Limite annales :** les sujets E3C du repo sont proches du contenu HG mais le format **ponctuel 2024+** (A/B) peut différer — compléter par la banque académie juin.

**Méthode sur une annale du repo :**
1. Ouvrir un sujet dans `01_hg_ponctuelle/e3c/` (ex. 2024) + son corrigé si présent.
2. Repérer : questions courtes (type A) vs analyse de document (type B).
3. Partie A : réponse **4–8 lignes** — date + acteur + conséquence ; carto = légende obligatoire.
4. Partie B : **présenter** le doc puis **2–3 arguments** liés au sujet B du chapitre BO que tu révises.
5. Chronométrer : ~45 min A, ~1 h B, 15 min relecture.

**Entraînement :** 1 sujet E3C/semaine dans le repo + banque J60 (`dec.gt-bcg@ac-grenoble.fr`) · croiser avec les **points de passage** BO du chapitre.

**Grille :** 10 + 10 = /20 — clarté, précision factuelle, argumentation (NS HG juin 2025).
""",
    "02_es": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/11_ns_ponctuelle_es_janvier2026.md` |
| **Fiche** | `downloads/fiches/02_es_ponctuelle.md` |
| **Annales** | [`downloads/annales/markdown_version/02_es_ponctuelle/`](../../annales/markdown_version/02_es_ponctuelle/) (E3C + doc. Eduscol) |
| **Liens** | `downloads/ressources/LIENS_ENTRAINEMENT.md` |

**Format (coeff. 6, 2 h) :** questions sur **documents** (graphiques, textes) + mobilisation des **3 thèmes** ; démarche scientifique + **débat** dans la société.

**Méthode sur une annale du repo :**
1. Choisir un sujet `02_es_ponctuelle/e3c/` aligné sur le thème du cours (climat / énergie / vivant).
2. Décrire le document (titre, variables, tendance, unités SI).
3. Répondre en **2 temps** : fait scientifique → enjeu sociétal (comme à l’épreuve).
4. Conclure par une **nuance** (incertitude, limites du modèle).

**Entraînement :** annales markdown du repo + banque nationale juin (académie).

**Grille :** maîtrise des connaissances + analyse du doc + argumentation (/20, NS ES).
""",
    "03_emc": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/10_ns_ponctuelle_emc_decembre2025.md` |
| **Fiche** | `downloads/fiches/03_emc_ponctuelle.md` |
| **Annales** | [`downloads/annales/03_emc_ponctuelle/LIENS_OFFICIELS.md`](../../annales/03_emc_ponctuelle/LIENS_OFFICIELS.md) (pas de sujets PDF publics) |
| **Liens** | `downloads/ressources/LIENS_ENTRAINEMENT.md` |

**Format (coeff. 2, oral ~1 h) :** présentation + échange ; définitions et **exemples concrets** obligatoires.

**Méthode :**
1. Préparer **5 définitions** oralables (30 s chacune).
2. Pour chaque notion : **exemple d’actualité** (presse, institution).
3. Anticiper 3 questions du jury : « en quoi est-ce un enjeu ? » « limite ? »

**Entraînement :** sujets types EMC académie · enregistrer un oral de 10 min.

**Grille :** clarté, exactitude, prise de parole (/20).
""",
    "04_lva": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/03_ns_ponctuelle_langues_vivantes_juin2025.md` |
| **Fiches** | `06_lva_lvb_ecrit.md` · `07_lva_oral.md` |
| **Annales écrit** | [`downloads/annales/markdown_version/06_lva_lvb_ecrit/`](../../annales/markdown_version/06_lva_lvb_ecrit/) |
| **Annales oral** | [`downloads/annales/07_lva_oral/LIENS_OFFICIELS.md`](../../annales/07_lva_oral/LIENS_OFFICIELS.md) |
| **Grilles** | Eduscol /4764 |

**Format écrit (03/06, 1h30, coeff. 6) :** CO + CE + EE sur un **même thème** · oral (08/06) : axe culturel + entretien.

**Limite :** E3C anglais du repo **sans audio CO** — entraîner CO à part (radio, annales académie).

**Méthode sur annale écrite du repo :** lire un sujet `06_lva_lvb_ecrit/` → simuler CE + EE (CO à l’oral séparément).

**Entraînement :** sujets markdown repo + audio CO externe + banque académie.

**Grille :** critères par compétence (/20 global selon NS).
""",
    "05_lvb": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/03_ns_ponctuelle_langues_vivantes_juin2025.md` |
| **Annales écrit** | [`downloads/annales/markdown_version/06_lva_lvb_ecrit/`](../../annales/markdown_version/06_lva_lvb_ecrit/) (hébreu 2024 si présent) |
| **Annales oral** | [`downloads/annales/04_lvb_oral/LIENS_OFFICIELS.md`](../../annales/04_lvb_oral/LIENS_OFFICIELS.md) |
| **Fiches** | `06_lva_lvb_ecrit.md` · `04_lvb_oral.md` |

**Format :** écrit 03/06 (1h30) · oral 29/05 (hébreu, **RTL**, B1 visé).

**Méthode :** même découpage CO/CE/EE ; vocabulaire **thématique** en hébreu ; utiliser un sujet hébreu du repo pour CE/EE.

**Entraînement :** annales repo + banque académie · podcasts B1.

**Grille :** intelligibilité + tâches réalisées (/20).
""",
    "06_nsi": """## Méthode annales et entraînement

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
""",
    "07_francais": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/08_ns_francais_anticipe_consolidee.md` |
| **Fiche** | `downloads/fiches/08_francais.md` |
| **Annales** | [`downloads/annales/markdown_version/08_francais/`](../../annales/markdown_version/08_francais/) (métropole 2021–2025) |
| **Œuvres** | `downloads/ressources/programme_oeuvres_francais_2025-2026.md` |

**Écrit (11/06, 4 h, coeff. 5) :** **commentaire** (texte hors œuvres) **ou** **dissertation** (1 sujet / 3, œuvre + parcours).

**Méthode sur annale du repo :**
1. Ouvrir un sujet `08_francais/2024/` (ou autre année).
2. Choisir en 15 min : commentaire ou dissertation (selon vos œuvres).
3. Rédiger au brouillon : plan visible ; citations courtes.

**Entraînement :** 1 sujet métropole du repo tous les 15 jours + checklist œuvres.

**Grille :** /20 — analyse, argumentation, style (NS français).
""",
    "08_philo": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/07_ns_philosophie_consolidee.md` |
| **Fiche** | `downloads/fiches/09_philo.md` |
| **Annales** | [`downloads/annales/markdown_version/09_philo/`](../../annales/markdown_version/09_philo/) (métropole 2021–2025 + NS) |
| **Auteurs** | `downloads/syntheses/philo_notions_auteurs.md` |

**Format (15/06, 4 h, coeff. 8) :** **3 sujets** — 2 dissertations + 1 explication de texte (auteur au programme).

**Méthode sur annale du repo :**
1. Prendre un sujet métropole dont la **notion** correspond au cours.
2. Dissertation : analyse des termes (15 min) → plan → rédaction avec **2 auteurs/partie**.
3. Explication de texte (autre annale) : mouvement → idée directrice → difficultés.

**Entraînement :** 1 plan/30 min sur sujets `09_philo/` · corrigés dans le repo si disponibles.

**Grille :** /20 — compréhension, argumentation, réflexion personnelle.
""",
    "09_pc": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/06_ns_epreuve_finale_pc.md` |
| **Annales** | [`downloads/annales/markdown_version/10_pc/`](../../annales/markdown_version/10_pc/) |
| **Fiche** | `downloads/fiches/10_pc_finale.md` |

**Format (16/06, 4 h, coeff. 16) :** exercices **PC** · calculatrice selon NS · **sans TP pratique** (individuel).

**Méthode sur annale du repo :**
1. Sujet `10_pc/2024/` (ou 2023) : repérer chapitre (ondes, chimie, transformations).
2. Par exercice : schéma → loi(s) → calcul **avec unités** → phrase-conclusion.
3. Comparer au corrigé markdown du repo.

**Entraînement :** 1 sujet/2 semaines · exercices « type bac » de ce cours d’abord.

**Grille :** démarche, exactitude, clarté (/20).
""",
    "10_maths": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/05_ns_epreuve_finale_maths.md` |
| **Annales** | [`downloads/annales/markdown_version/11_maths/`](../../annales/markdown_version/11_maths/) |
| **Fiche** | `downloads/fiches/11_maths_finale.md` |

**Format (17/06, 4 h, coeff. 16) :** exercices rédigés ; **Python** possible ; calculatrice selon NS.

**Méthode sur annale du repo :**
1. Choisir un sujet métropole contenant le chapitre révisé (ex. suites, dérivées).
2. Rédiger toutes les étapes ; vérifier avec le corrigé du repo.
3. Noter les exercices « ratés » → revenir au § correspondant de ce cours.

**Entraînement :** annales `11_maths/` + exercices type bac de ce fichier.

**Grille :** rigueur, complétude (/20).
""",
    "11_grand_oral": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/04_ns_grand_oral_consolidee.md` |
| **Annales** | [`downloads/annales/markdown_version/12_grand_oral/`](../../annales/markdown_version/12_grand_oral/) (NS ; pas de sujet type public) |
| **Fiche** | `downloads/fiches/12_grand_oral.md` |

**Format (22/06, 20 min, coeff. 10) :** exposé + échange sur **2 questions** (PC + maths, checklist).

**Méthode :** croiser ce cours avec annales PC/Maths déjà faites ; préparer **plan** + **exemple chiffré** issu d’un exercice d’annale.

**Entraînement :** simulation enregistrée · NS dans `12_grand_oral/`.

**Grille :** /20 — voir NS Grand oral.
""",
    "12_eoc": """## Méthode annales et entraînement

| Référence | Fichier |
|-----------|---------|
| **NS** | `downloads/notes_de_service/markdown_version/09_ns_candidats_individuels_modalites_aout2025.md` |
| **Fiche** | `downloads/fiches/13_eoc.md` |

**EOC (09/07, si autorisé) :** rattrapage **2e groupe** — **pas** un nouveau programme ; reprendre les lacunes des épreuves du 1er groupe.

**Méthode :** identifier les notes < 10 ; réviser **fiche + cours** de ces matières uniquement ; refaire **1 sujet type** par matière concernée.

**Entraînement :** sujets de la session ou banque académie (selon convocation EOC).
""",
    "00_fondations": """## Méthode annales et entraînement

Ces fondations servent **toutes** les épreuves : lecture (français, philo, HG docs), calculs (ES, PC, maths), unités (ES, PC).

**Annales :** index [`downloads/annales/README.md`](../../annales/README.md) — une fois les prérequis maîtrisés ici, attaquer les sujets markdown de la matière.

**Entraînement transversal :**
- Refaire les exercices de ce fichier avant d’ouvrir `downloads/annales/markdown_version/…`
- Voir `downloads/ressources/LIENS_ENTRAINEMENT.md`
""",
}


def subject_key(path: Path) -> str:
    parts = path.parts
    for p in parts:
        if p in BLOCKS:
            return p
    return ""


def upsert_block(text: str, block: str) -> tuple[str, bool]:
    """Insert or replace Méthode annales section."""
    if "## Méthode annales" in text and "downloads/annales" in text:
        return text, False
    if "## Méthode annales" in text:
        text = re.sub(
            r"## Méthode annales et entraînement.*?(?=\n## )",
            block.rstrip() + "\n\n",
            text,
            count=1,
            flags=re.S,
        )
        return text, True
    if "## Sources" in text:
        return text.replace("## Sources", block + "\n\n## Sources", 1), True
    return text.rstrip() + "\n\n" + block + "\n", True


def main():
    updated = skipped = 0
    for md in sorted(ROOT.rglob("*.md")):
        if md.name == "README.md":
            continue
        key = subject_key(md)
        if not key or key not in BLOCKS:
            continue
        text = md.read_text(encoding="utf-8")
        new_text, changed = upsert_block(text, BLOCKS[key])
        if changed:
            md.write_text(new_text, encoding="utf-8")
            updated += 1
        else:
            skipped += 1
    print(f"Updated: {updated}, unchanged: {skipped}")


if __name__ == "__main__":
    main()
