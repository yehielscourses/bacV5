# PC — Ondes et signaux
> Programme : `downloads/programmes/markdown_version/06_physique-chimie_specialite_terminale_BO2019.md`

## Introduction

Le thème BO **« Ondes et signaux »** décrit comment l’énergie et l’information se propagent : sons, lumière, ondes radio, circuits RC. Tu y retrouves des notions de **5e** (vitesse = distance / temps) poussées jusqu’à la **diffraction**, les **interférences**, l’**effet Doppler**, l’**optique** et les **photons**.

À l’épreuve **16/06** (4 h, coeff. **16**), les exercices peuvent proposer un graphique de signal, un schéma de lunette, ou un calcul de décalage Doppler (radar, astronmie). Ce cours relie chaque formule à une **image concrète** (salle de concert, trous de Young, sirène qui passe).

## Prérequis (niveau 5e)

- v = d / t ; fréquence = « nombre par seconde ».
- [unites-et-grandeurs.md](../00_fondations/unites-et-grandeurs.md) : Hz, m, s, log pour décibels.
- Lumière : ombre, miroir (repères collège).

**Pont :** si sin/cos sur la calculatrice te bloquent pour Young, fais l’exercice 1 (période / longueur d’onde) d’abord.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Onde progressive** | Perturbation qui se propage | vague, son |
| **Célérité c** | Vitesse de propagation de l’onde | c ≈ 3×10⁸ m/s (lumière vide) |
| **Période T** | Durée d’un cycle | T = 1/f |
| **Fréquence f** | Cycles par seconde (Hz) | f = 440 Hz (La) |
| **Longueur d’onde λ** | Distance parcourue pendant une période | λ = c/f |
| **Niveau sonore L** | L = 10 log(I/I₀) (dB) | 60 dB conversation |
| **Diffraction** | Onde qui contourne un obstacle / fente | tache élargie |
| **Interférences** | Superposition constructive/destructive | irisations savon |
| **Interfrange i** | Distance entre franges brillantes | Young |
| **Effet Doppler** | Décalage de fréquence si source bouge | sirène |
| **Lentille convergente** | Concentre les rayons | loupe |
| **Photon** | « Grain » de lumière, énergie E = hf | effet photoélectrique |
| **Circuit RC** | Condensateur + résistance, charge/décharge | flash photo |
| **Temps caractéristique τ** | Ordre de grandeur du régime transitoire | τ = RC |

## Cours

### 1. Onde périodique : λ, T, c

Une onde **sinusoïdale** est décrite par **T** (temps d’un cycle) et **λ** (distance d’un cycle). Lien fondamental : **λ = c × T = c/f**.

**Exemple guidé — son dans l’air**

1. f = 1 000 Hz, c ≈ 340 m/s → λ = 340/1000 = **0,34 m**.
2. T = 1/f = **1,0 ms**.

> **En résumé :** λ, T, c, f se déduisent deux à deux.
> **Erreur fréquente :** utiliser c_lumière pour un exercice de son.

### 2. Intensité sonore et décibels

L’intensité **I** (W/m²) mesure la puissance par surface. **Niveau** L = 10 log(I/I₀) avec I₀ = 10⁻¹² W/m². +10 dB ≈ intensité ×10.

**Exemple guidé — de 40 dB à 50 dB**

1. +10 dB → I multipliée par **10** (pas « +10 fois le volume ressenti » linéairement).

> **En résumé :** dB = échelle logarithmique ; +10 dB = ×10 en I.
> **Erreur fréquente :** additionner des dB comme des pourcentages sans règle.

### 3. Diffraction

La diffraction est nette si la taille de l’**ouverture** a est du même ordre que **λ** (a ≈ λ). Angle caractéristique θ ≈ λ/a (ordre de grandeur). Conséquence : on ne peut pas focaliser une onde en un point infini petit si λ est grande.

**Exemple guidé — fente et laser**

1. λ = 633 nm, a = 0,10 mm = 10⁻⁴ m → θ ≈ 6,33×10⁻⁶ rad (petit angle, tache élargie en m).

> **En résumé :** grande λ ou petite ouverture → diffraction visible.
> **Erreur fréquente :** oublier les unités (nm → m).

### 4. Interférences (deux sources cohérentes)

Deux ondes **en phase** : interférences **constructives** si différence de chemin = kλ ; **destructives** si (k+½)λ. **Young** : deux fentes → franges ; interfrange **i = λD/a** (D distance écran-fentes, a écartement).

**Exemple guidé — ordre de grandeur Young**

1. λ = 600 nm, D = 2 m, a = 0,3 mm → i = 600×10⁻⁹ × 2 / (0,3×10⁻³) ≈ **4 mm**.

> **En résumé :** chemins différents → motifs fixes ; i mesurable.
> **Erreur fréquente :** sources non cohérentes → pas de franges stables.

### 5. Effet Doppler (émetteur mobile, observateur fixe)

Fréquence reçue **f' = f / (1 − v/c)** (émetteur qui **s’approche**, v << c). Son **plus aigu** à l’approche. Applications : radar, mesure de vitesse sanguine, redshift en astro.

**Exemple guidé — sirène**

1. f = 500 Hz, v = 10 m/s vers toi, c = 340 m/s → f' ≈ 500/(1−10/340) ≈ **515 Hz**.

> **En résumé :** mouvement relatif → décalage de fréquence.
> **Erreur fréquente :** mélanger signe (s’éloigne → grave).

### 6. Optique : lunette afocale (schéma)

**Lunette** : objectif + oculaire, image intermédiaire réelle, observation « à l’infini » en afocal. **Grossissement** G = f_objectif / f_oculaire (modèle mince).

**Exemple guidé — G**

1. f_obj = 800 mm, f_oc = 20 mm → G = **40** (l’objet paraît 40× plus large en angle).

> **En résumé :** schéma de rayons + formule G pour exercices type bac.
> **Erreur fréquente :** confondre grossissement et agrandissement linéaire sur écran.

### 7. Photon et effet photoélectrique

Énergie **E = h f** (h constante de Planck). **Effet photoélectrique** : éjection d’électrons si lumière de fréquence suffisante ; seuil lié au **travail d’extraction**. Cellule photovoltaïque : rendement η = P_élec / P_lumière.

> **En résumé :** lumière = onde + aspect particule selon l’expérience.
> **Erreur fréquente :** croire que plus d’intensité suffit sans fréquence minimale.

### 8. Circuit RC (dynamique)

Charge du condensateur : tension **u_C = E(1 − e^(−t/τ))** avec **τ = R×C**. **Régime transitoire** puis **stationnaire**. Capteurs capacitifs : variation de C modifie τ.

**Exemple guidé — τ**

1. R = 10 kΩ, C = 100 μF → τ = 10⁴ × 10⁻⁴ = **1 s** (ordre de temps de charge).

> **En résumé :** τ est l’échelle de temps du circuit.
> **Erreur fréquente :** oublier μF → F (×10⁻⁶).

## Notions proches

- [section-transformations.md](section-transformations.md) — chimie
- [../10_maths/section-limites-derivees.md](../10_maths/section-limites-derivees.md) — exponentielle, ln

## À retenir pour l'épreuve

- **16/06** : schémas propres, légendes, **SI**.
- Formules à maîtriser : λ=c/f, L=10log(I/I₀), i=λD/a, Doppler 1D, τ=RC.
- QCM : pièges d’unités et de sens (approche / éloignement).

## Exercices

### Découverte 1 — λ et f

c = 3,0×10⁸ m/s, f = 6,0×10¹⁴ Hz. Calculer λ.

**Corrigé :** λ = c/f = **5,0×10⁻⁷ m = 500 nm**.

### Découverte 2 — dB

I₂ = 10 I₁. Différence de niveau en dB ?

**Corrigé :** L₂−L₁ = 10 log(10) = **10 dB**.

### Entraînement 3 — Young

λ = 500 nm, D = 1,5 m, a = 0,25 mm. i ?

**Corrigé :** i = 500×10⁻⁹×1,5/(0,25×10⁻³) = **3,0×10⁻³ m = 3,0 mm**.

### Entraînement 4 — RC

R = 4,7 kΩ, C = 47 μF. τ ?

**Corrigé :** τ = 4700×47×10⁻⁶ ≈ **0,22 s**.

### Type bac 5 — Doppler

Source f = 2,00 kHz, v = 34 m/s vers observateur, c = 340 m/s. f' ?

**Corrigé :** f' = 2000/(1−34/340) = 2000/0,9 ≈ **2,22 kHz**.

### Type bac 6 — Interprétation graphique

Sur un graphique u_C(t) de charge, expliquer comment lire τ.

**Corrigé :** τ = temps pour atteindre ≈ **63 %** de E (1−e⁻¹) ; ou tangente à l’origine coupe l’asymptote à t = τ.

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

- BO `06_physique-chimie_specialite_terminale_BO2019` — thème 4
- Fiche `10_pc_finale.md`
