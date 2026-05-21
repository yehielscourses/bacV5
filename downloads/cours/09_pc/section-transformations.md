# PC — Constitution et transformations de la matière
> Programme : `downloads/programmes/markdown_version/06_physique-chimie_specialite_terminale_BO2019.md`

## Introduction

Ce chapitre couvre le thème BO **« Constitution et transformations de la matière »** : analyser un mélange (pH, titrage, spectro), suivre une **réaction dans le temps** (cinétique), prévoir l’**état final** (équilibre, piles), et la **radioactivité**. C’est le cœur de la spé PC au bac.

L’épreuve écrite du **16 juin** (4 heures, coefficient **16**) mélange QCM, questions courtes et exercices type « situation » (santé, environnement, énergie). Tu dois savoir **modéliser** (équation de réaction), **calculer** (concentration, vitesse, constante K) et **interpréter** un graphique (titrage, décroissance).

À la fin de ce cours, tu sauras lire un titrage acide-base, utiliser pH et équivalence, et expliquer pourquoi une réaction peut s’arrêter avant d’être « totale ».

## Prérequis (niveau 5e)

- [unites-et-grandeurs.md](../00_fondations/unites-et-grandeurs.md) : mol, L, conversions mL → L.
- [mathematiques-base.md](../00_fondations/mathematiques-base.md) : fractions, pourcentages, équations simples.
- Notion de **mélange** (eau + sel), **masse** et **volume**.

**Pont :** si log₁₀ te bloque, refais exercice 1 (pH) avec la calculatrice (`log`) avant la section titrage.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Espèce chimique** | Entité chimique présente (ion, molécule) | H₃O⁺, Cl⁻ |
| **Couple acide/base** | Acide et base conjugués liés par H⁺ | HCl / Cl⁻ |
| **pH** | Mesure d’acidité : pH = −log([H₃O⁺]/c°) | pH = 3 → acide |
| **Titrage** | Dosage par ajout progressif d’un réactif connu | Acide titré par base |
| **Équivalence** | Volume où réactifs en proportions stœchio | saut de pH |
| **Vitesse volumique** | Variation de concentration par unité de temps | mol·L⁻¹·s⁻¹ |
| **Catalyseur** | Accélère sans être consommé | enzyme |
| **Équilibre chimique** | Réactions directe et inverse à même vitesse | Qr → K |
| **Quotient Qr** | Indicateur d’évolution du système | comparer à K |
| **Constante K** | Valeur de Qr à l’équilibre (dépend de T) | K(T) |
| **Pile** | Système qui convertit énergie chimique → électrique | Daniell |
| **Radioactivité** | Désintégration spontanée de noyaux | datation C14 |
| **Demi-vie** | Temps pour diviser par 2 l’activité ou N | t₁/₂ |
| **Loi de Beer-Lambert** | Absorbance ∝ concentration | dosage colorimétrique |

## Cours

### 1. Acide-base : transfert d’ion H⁺

Une transformation **acide-base** modélise un transfert de **H⁺** entre un **couple** (acide AH / base A⁻). L’**eau** est amphotère : H₂O peut donner ou recevoir H⁺.

**Exemple guidé — équation HCl dans l’eau**

1. Couple : H₃O⁺/H₂O et Cl⁻/HCl (simplifié : HCl + H₂O → Cl⁻ + H₃O⁺).
2. L’acide **fort** HCl est quasi totalement dissocié → pH bas.

> **En résumé :** acide-base = jeu de couples et H₃O⁺ en solution aqueuse.
> **Erreur fréquente :** écrire H⁺ seul en solution (on note H₃O⁺).

### 2. pH et concentration en H₃O⁺

Avec c° = 1 mol·L⁻¹ : **pH = −log([H₃O⁺]/c°)**. Chaque **unité de pH** correspond à un facteur **10** sur [H₃O⁺]. pH = 7 : neutre à 25 °C ; pH < 7 acide ; pH > 7 basique.

**Exemple guidé — [H₃O⁺] = 1,0×10⁻³ mol·L⁻¹**

1. pH = −log(10⁻³) = **3,0**.
2. Inverse : pH = 5 → [H₃O⁺] = **10⁻⁵ mol·L⁻¹**.

> **En résumé :** pH petit = acide fort ; une dilution ×10 change le pH d’environ 1 unité (acide fort).
> **Erreur fréquente :** pH négatif ou > 14 sans vérifier la concentration réelle.

### 3. Titrage acide-base et équivalence

On verse une **solution titrante** (concentration connue) dans l’espèce à doser. À l’**équivalence**, les quantités de matière sont dans les proportions de l’équation **équilibrée**. Suivi **pH-métrique** : courbe avec palier et **saut brutal** au point équivalent.

**Exemple guidé — calcul à l’équivalence**

Équation : HA + OH⁻ → A⁻ + H₂O. À l’équivalence : n(HA) = n(OH⁻) donc **Cₐ Vₐ = Cᵦ Vₑ**.

1. Cₐ = 0,10 mol·L⁻¹, Vₐ = 20 mL = 0,020 L → n = 0,0020 mol.
2. Si Cᵦ = 0,20 mol·L⁻¹ : Vₑ = 0,0020/0,20 = **0,010 L = 10 mL**.

> **En résumé :** à l’équivalence, stœchiométrie = égalité des quantités en mol.
> **Erreur fréquente :** confondre **équivalence** (titrage) et **équilibre** (réaction limitée).

### 4. Suivi conductimétrique (idée)

La **conductivité** de la solution dépend des ions présents. Au cours d’un titrage, la pente de σ en fonction du volume peut changer à l’équivalence. On justifie qualitativement avec les **conductivités ioniques molaires**.

> **En résumé :** autre méthode de repérage du point équivalent.
> **Erreur fréquente :** croire que la conductivité diminue toujours pendant un titrage.

### 5. Cinétique : vitesse volumique et facteurs

La **vitesse volumique** de disparition d’un réactif : v = −d[c]/dt (mol·L⁻¹·s⁻¹). Elle dépend souvent de **T**, des **concentrations**, et d’un **catalyseur**. Le **temps de demi-réaction** t₁/₂ est le temps pour diviser par 2 une concentration.

**Exemple guidé — lecture graphique**

1. Sur [c](t), tangente à t₀ : pente = −v au instant considéré.
2. Facteur 2 sur T (règle empirique en TP) : vitesse souvent multipliée (ordre de grandeur).

> **En résumé :** cinétique = comment vite ; thermodynamique (section suivante) = jusqu’où.
> **Erreur fréquente :** confondre réaction **lente** et réaction **non totale**.

### 6. Équilibre chimique et quotient Qr

Pour une réaction **non totale**, l’état final est un **équilibre dynamique** : vitesses directe et inverse égales. Le **quotient de réaction** Qr évolue spontanément vers **K(T)** à l’équilibre. Si Qr < K : réaction directe favorisée ; si Qr > K : sens inverse.

**Exemple guidé — critère d’évolution (qualitatif)**

1. On calcule Qr avec les concentrations initiales.
2. On compare à K : Qr < K → évolution vers produits.

> **En résumé :** K caractérise l’équilibre ; Qr décrit l’état actuel.
> **Erreur fréquente :** penser que K change quand on ajoute un réactif (K dépend surtout de T).

### 7. Piles et oxydoréduction (aperçu épreuve)

Une **pile** convertit une réaction redox spontanée en courant. Sens du courant, polarité, quantité d’électricité liée aux **électrons** échangés (Faraday en exercices avancés). Lien avec Qr et potentiels (programme : fonctionnement qualitatif et quantitatif ciblé).

> **En résumé :** pile = réaction redox utile + circulation charges.
> **Erreur fréquente :** inverser anode/cathode sans le sens de la réaction spontanée.

### 8. Radioactivité et loi de décroissance

Population de noyaux N(t) suit souvent **N = N₀ e^(−λt)** avec **constante radioactive** λ. **Demi-vie** t₁/₂ = ln(2)/λ. Applications : **datation**, médecine (irradiation), protection (distance, écran, temps).

**Exemple guidé — après 2 demi-vies**

1. N = N₀ × (1/2)² = **N₀/4**.
2. Graphique ln(N) vs t : droite de pente −λ.

> **En résumé :** décroissance exponentielle ; t₁/₂ indépendant de N₀.
> **Erreur fréquente :** penser que « plus il reste de noyaux, plus ça disparaît vite » (faux en modèle exponentiel continu).

## Notions proches

- [section-chimie-introduction.md](section-chimie-introduction.md) — structure, Lewis, tableau périodique
- [section-ondes.md](section-ondes.md) — ondes (autre thème BO)
- [../00_fondations/unites-et-grandeurs.md](../00_fondations/unites-et-grandeurs.md)

## À retenir pour l'épreuve

- **16/06, 4 h, coeff. 16** : QCM + exercices longs ; **sécurité** et **unités** comptent.
- Toujours : **équation équilibrée** → **tableau d’avancement** ou **mol** → **conclusion**.
- Pièges : équivalence ≠ équilibre ; pH et log ; volume en **L**.

## Exercices

### Découverte 1 — pH

pH = 4. [H₃O⁺] en mol·L⁻¹ ?

**Corrigé :** **10⁻⁴ mol·L⁻¹**.

### Découverte 2 — Équivalence

Cₐ Vₐ = Cᵦ Vₑ avec Cₐ=0,05, Vₐ=40 mL, Cᵦ=0,10. Vₑ ?

**Corrigé :** 0,05×0,040 = 0,10×Vₑ → Vₑ = **0,020 L = 20 mL**.

### Entraînement 3 — Dilution

On dilue ×10 une solution pH = 2 (acide fort). Nouveau pH ?

**Corrigé :** [H₃O⁺] ÷10 → pH augmente de 1 → **pH = 3**.

### Entraînement 4 — Demi-vie

t₁/₂ = 30 min. Fraction restante après 1 h ?

**Corrigé :** 2 demi-vies → **1/4** de N₀.

### Type bac 5 — Titrage (rédaction)

20,0 mL d’acide 0,100 mol·L⁻¹ titré par NaOH 0,100 mol·L⁻¹. Volume à l’équivalence et pH qualitatif avant équivalence.

**Corrigé :** Vₑ = **20,0 mL** (mêmes C et stœchio 1:1) ; avant équivalence, excès d’acide → pH < 7.

### Type bac 6 — Qr et K

À 25 °C, K = 10 pour A ⇌ B. Initialement [A]=0,50, [B]=0. Qr initial ? Sens d’évolution ?

**Corrigé :** Qr = [B]/[A] = 0 → Qr < K → **évolution vers B**.

## Méthode annales et entraînement

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


## Sources

- BO `06_physique-chimie_specialite_terminale_BO2019` — thème 1
- Fiche `10_pc_finale.md`
