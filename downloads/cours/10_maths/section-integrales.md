# Maths — Intégrales et primitives
> Programme : `downloads/programmes/markdown_version/07_mathematiques_specialite_terminale_BO2019.md`

## Introduction

La **dérivée** mesure une vitesse de changement ; l’**intégrale** fait l’**inverse** : aire sous une courbe, cumul d’une quantité. En physique, intégrer une vitesse donne une distance.

Tu connais déjà l’**aire d’un rectangle** (5e). Ici, on approche l’aire sous une courbe par des rectangles, puis on définit ∫_a^b f(x) dx. Épreuve **17/06** (4 h, coeff. **16**) : calcul de primitives, aires, parfois interprétation d’une EDO simple.

## Prérequis (niveau 5e)

- Aire rectangle = L×l.
- [section-limites-derivees.md](section-limites-derivees.md) : dérivée, tangente.
- Fonction positive = courbe au-dessus de l’axe.

**Pont :** estimer l’aire sous y=x entre 0 et 2 en comptant des carreaux sur papier millimétré.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Primitive F** | F' = f sur un intervalle | f(x)=2x → F=x²+C |
| **Constante C** | Toutes les primitives diffèrent de C | x²+7 |
| **Intégrale ∫_a^b f** | Aire algébrique sous la courbe | aire ≥ 0 si f≥0 |
| **Linéarité** | ∫(af+bg) = a∫f + b∫g | — |
| **Relation Chasles** | ∫_a^c = ∫_a^b + ∫_b^c | morceaux |
| **Intégration par parties** | ∫ u'v = [uv] − ∫ uv' | ∫ x e^x dx |
| **Valeur moyenne** | (1/(b−a))∫_a^b f | température moyenne |
| **EDO y'=ay** | Solutions Ce^{ax} | modèle exponentiel |

## Cours

### 1. Primitive : opération inverse

Si f(x)=2x, une primitive est F(x)=x² (car (x²)'=2x). **Toute** primitive : x²+C. Notation : ∫ f(x) dx = F(x)+C.

**Exemple guidé — vérifier**

1. F(x)=x³/3 → F'(x)=x² = f(x) ✓

> **En résumé :** primitive = antidérivée.
> **Erreur fréquente :** oublier +C en calcul général.

### 2. Tableau de primitives usuelles

| f(x) | Primitive |
|------|-----------|
| x^n (n≠−1) | x^{n+1}/(n+1)+C |
| 1/x | ln|x|+C |
| e^x | e^x+C |
| cos x | sin x+C |
| sin x | −cos x+C |

**Exemple guidé — ∫ (3x² − 1/x) dx**

1. = x³ − ln|x| + C.

> **En résumé :** linéarité + table.
> **Erreur fréquente :** ∫ 1/x = x (faux).

### 3. Intégrale définie et aire

**∫_a^b f(x) dx** = F(b)−F(a) si f continue (théorème fondamental). Si f≥0, résultat = **aire** sous la courbe.

**Exemple guidé — ∫_0^2 x dx**

1. Primitive x²/2 → [x²/2]_0^2 = 2 − 0 = **2** (aire triangle sous y=x).

> **En résumé :** F(b)−F(a).
> **Erreur fréquente :** inverser a et b (résultat opposé).

### 4. Aire entre deux courbes

Aire entre f et g (f≥g) : ∫_a^b (f(x)−g(x)) dx.

**Exemple guidé — y=x et y=x² entre 0 et 1**

1. Sur [0,1], x ≥ x² → ∫_0^1 (x−x²)dx = [x²/2−x³/3]_0^1 = 1/2−1/3 = **1/6**.

> **En résumé :** intégrer (haute − basse).
> **Erreur fréquente :** ne pas repérer qui est au-dessus.

### 5. Intégration par parties (IP)

∫_a^b u'(x)v(x) dx = [u v]_a^b − ∫_a^b u(x)v'(x) dx. Choix : u' simple, v facile à primitive.

**Exemple guidé — ∫ x e^x dx**

1. u'=1, v=e^x → x e^x − ∫ e^x dx = e^x(x−1)+C.

> **En résumé :** transformer l’intégrale difficile.
> **Erreur fréquente :** mauvais choix u/v (plus compliqué).

### 6. Valeur moyenne et interprétation

Moyenne de f sur [a,b] : μ = (1/(b−a))∫_a^b f(x) dx. Exemple : vitesse moyenne = distance totale / durée.

> **En résumé :** μ « niveau constant » donnant même intégrale.
> **Erreur fréquente :** moyenne arithmétique de f(a) et f(b) au lieu de l’intégrale.

### 7. Lien EDO y'=ay (aperçu)

Solution de y'=ay : **y = Ce^{ax}**. Condition initiale y(0)=y₀ → C=y₀. Modèle de croissance/décroissance continue.

**Exemple guidé — y'=−0,1y, y(0)=100**

1. y = 100 e^{-0,1t}.

> **En résumé :** intégrale ↔ cumul ; EDO ↔ évolution continue.
> **Erreur fréquente :** signe de a dans l’exposant.

## Notions proches

- [section-limites-derivees.md](section-limites-derivees.md)
- [section-probabilites.md](section-probabilites.md) — lois continues

## À retenir pour l'épreuve

- **17/06** : primitive + bornes ; aire signée si f change de signe.
- Toujours **schéma** pour aire entre courbes.

## Exercices

### Découverte 1 — Primitive

Primitive de f(x)=4x³

**Corrigé :** **x⁴+C**.

### Découverte 2 — Définie

∫_1^3 2x dx

**Corrigé :** [x²]_1^3 = 9−1 = **8**.

### Entraînement 3 — Aire

∫_0^π sin x dx

**Corrigé :** [−cos x]_0^π = (−(−1))−(−1) = **2**.

### Entraînement 4 — IP

∫ ln x dx (indication : u'=1, v=ln x)

**Corrigé :** x ln x − x + C.

### Type bac 5 — Entre courbes

Aire entre y=√x et y=x sur [0,1]

**Corrigé :** ∫_0^1 (√x−x)dx = [2x^{3/2}/3 − x²/2]_0^1 = 2/3−1/2 = **1/6**.

### Type bac 6 — Moyenne

Valeur moyenne de f(x)=x² sur [0,3]

**Corrigé :** (1/3)∫_0^3 x² dx = (1/3)[x³/3]_0^3 = **3**.

## Méthode annales et entraînement

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


## Sources

- BO `07_mathematiques_specialite_terminale_BO2019` — Intégration
- Fiche `11_maths_finale.md`
