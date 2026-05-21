# Maths — Limites et dérivées
> Programme : `07_mathematiques_specialite_terminale_BO2019` · Fiche : `downloads/fiches/11_maths_finale.md` · Coeff : 16 · Épreuve : **17/06**, 4 h

## Introduction

L’**analyse** étudie comment une grandeur **varie** : vitesse instantanée, pente d’une courbe, optimisation. En terminale, on formalise avec les **limites** (comportement quand x « tend » vers une valeur) et la **dérivée** (taux de variation).

Tu repars du niveau **5e** : pente d’une droite, vitesse moyenne. L’épreuve **17 juin** (4 h, coeff. **16**) comporte QCM, exercices de courbes et démonstrations courtes. Ce cours construit la dérivée comme **limite d’un taux d’accroissement**.

## Prérequis (niveau 5e)

- Fonction = machine qui à x associe f(x) (tableau, graphique).
- Pente : (y₂−y₁)/(x₂−x₁).
- [mathematiques-base.md](../00_fondations/mathematiques-base.md).

**Pont :** tracer y = 2x + 1 sur [-2 ; 3] avant la section tangente.

## Glossaire

| Terme | Définition simple | Exemple |
|-------|-------------------|---------|
| **Limite en +∞** | Valeur approchée quand x grandit | 1/x → 0 |
| **Limite en a** | Comportement près de x = a | (x²−1)/(x−1) → 2 en 1 |
| **Continuité** | Pas de « saut » sur l’intervalle | polynôme |
| **Dérivée f'(a)** | Pente de la tangente en a | f'(2) |
| **Taux d’accroissement** | [f(a+h)−f(a)]/h | avant limite h→0 |
| **Fonction dérivée** | x ↦ f'(x) | f(x)=x² → f'(x)=2x |
| **Variation** | Croissance / décroissance | f'>0 → f croît |
| **Extremum local** | Max ou min local | f' s’annule et change de signe |
| **Tangente** | Droite qui « effleure » la courbe | y = f'(a)(x−a)+f(a) |
| **Équation du second degré** | ax²+bx+c=0 | discriminant Δ |

## Cours

### 1. Limite : idée sans mystère

Quand x **augmente sans borne**, 1/x devient **arbitrairement petit** : on note lim_{x→+∞} 1/x = 0. Quand x **tend vers 2**, (x²−4)/(x−2) = x+2 tend vers **4** (forme indéterminée 0/0 qu’on **factorise**).

**Exemple guidé — lim (x²−9)/(x−3) en 3**

1. Factoriser : (x−3)(x+3)/(x−3) = x+3 pour x≠3.
2. Limite = **6**.

> **En résumé :** simplifier algébriquement avant de « remplacer ».
> **Erreur fréquente :** remplacer x=3 dans 0/0 sans transformer.

### 2. Limites de références

| f(x) | x→+∞ | x→−∞ |
|------|------|------|
| x^n (n≥1) | +∞ | selon n pair/impair |
| e^x | +∞ | 0 |
| ln x (x>0) | +∞ | — |

Polynôme : limite = **terme de plus haut degré**. Rationnelle P/Q : comparer degrés.

**Exemple guidé — (2x²+1)/(x²−5) en +∞**

1. Diviser num et dén par x² → rapport des coeff dominants → **2**.

> **En résumé :** « degré supérieur » gagne en +∞.
> **Erreur fréquente :** oublier le signe pour x→−∞ avec x³.

### 3. Continuité (intuition bac)

f **continue** en a si lim_{x→a} f(x) = f(a). Les fonctions usuelles (polynômes, exp, ln sur leur domaine) sont continues. **Théorème des valeurs intermédiaires** : si f continue sur [a,b] et f(a)·f(b)<0, il existe c avec f(c)=0 (utile pour racines).

> **En résumé :** continuité = pas de trou ni de saut.
> **Erreur fréquente :** appliquer TVI sans vérifier continuité sur l’intervalle.

### 4. Taux d’accroissement → dérivée

**Taux** entre a et a+h : τ = [f(a+h)−f(a)]/h. **Dérivée** : f'(a) = lim_{h→0} τ.

**Exemple guidé — f(x)=x² en a=3**

1. τ = [(3+h)²−9]/h = (6h+h²)/h = 6+h.
2. h→0 → f'(3) = **6**. Tangente : y = 6(x−3)+9 = 6x−9.

> **En résumé :** dérivée = pente instantanée.
> **Erreur fréquente :** oublier la limite h→0 (rester au taux moyen).

### 5. Formules de dérivation

(u+v)' = u'+v' ; (ku)' = ku' ; (x^n)' = nx^{n−1} ; (e^x)' = e^x ; (ln x)' = 1/x ; (u∘v)' = u'(v)×v' (**chaîne**).

**Exemple guidé — f(x)=(2x+1)³**

1. u=2x+1, f=u³ → f' = 3u²×2 = **6(2x+1)²**.

> **En résumé :** dériver couche par couche.
> **Erreur fréquente :** (uv)' ≠ u'v' (formule produit : u'v+uv').

### 6. Variations et extremums

Si f'(x)>0 sur I, f **croissante** sur I. Si f' s’annule en a en passant + à − → **maximum local**. Tableau de signes de f' → tableau de variations de f.

**Exemple guidé — f(x)=x³−3x**

1. f'(x)=3x²−3 = 3(x−1)(x+1).
2. f' > 0 sur ]−∞,−1[ et ]1,+∞[ ; f' < 0 sur ]−1,1[ → max en −1, min en 1.

> **En résumé :** f' = signe de la pente.
> **Erreur fréquente :** conclure max dès que f'(a)=0 sans changement de signe.

### 7. Tangente et problèmes type bac

Équation tangente en a : **y = f'(a)(x−a)+f(a)**. Problèmes : **optimiser** une aire, **vitesse** v(t)=x'(t), **modèle** exponentiel.

**Exemple guidé — rectangle d’aire 100, minimiser périmètre**

1. x·y=100 → y=100/x ; P=2(x+100/x) ; dériver, chercher extremum (exercice classique → carré côté √100).

> **En résumé :** modéliser → dériver → interpréter.
> **Erreur fréquente :** oublier le domaine (x>0).

## Notions proches

- [section-integrales.md](section-integrales.md) — primitive, aire
- [section-suites.md](section-suites.md) — limites discrètes

## À retenir pour l'épreuve

- **17/06, 4 h, coeff. 16** : justifier limites ; tableau de variations complet.
- QCM : formes indéterminées, dérivée de e^{u}.

## Exercices

### Découverte 1 — Limite

lim_{x→2} (x²−4)/(x−2)

**Corrigé :** x+2 → **4**.

### Découverte 2 — Dérivée

f(x)=5x²−3x. f'(x) ?

**Corrigé :** **10x−3**.

### Entraînement 3 — Tangente

f(x)=x², tangente en 1.

**Corrigé :** f'(1)=2 → y = **2x−1**.

### Entraînement 4 — Variations

f(x)=−x³+3x. f'(x) et sens de variation.

**Corrigé :** f'(x)=−3x²+3 = −3(x−1)(x+1) ; croît sur ]−1,1[, décroît ailleurs.

### Type bac 5 — Limite rationnelle

lim_{x→+∞} (3x²−x+1)/(x²+2)

**Corrigé :** **3**.

### Type bac 6 — Optimisation (indication)

Aire rectangle fixée 36 cm². Minimiser le périmètre.

**Corrigé :** x·y=36, P=2(x+36/x), P'=2(1−36/x²)=0 → x=6, y=6 → **carré 6×6**, P_min=24 cm.

## Sources

- BO `07_mathematiques_specialite_terminale_BO2019` — Analyse
- Fiche `11_maths_finale.md`
