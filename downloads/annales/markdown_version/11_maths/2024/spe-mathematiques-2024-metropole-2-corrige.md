# spe-mathematiques-2024-metropole-2-corrige

> Source : `../../../pdf_version/11_maths/2024/spe-mathematiques-2024-metropole-2-corrige.pdf` — conversion Markdown (texte + visuels utiles).
> Stratégie : [STRATEGIE_MARKDOWN.md](../../../STRATEGIE_MARKDOWN.md)

---

## Page 1

CORRIGE – BAC SPE MATHS METROPOLE 2024 JOUR 2
Exercice 1 : probabilités
D’après l’énoncé : 𝑃(𝑄) = 0,917, 𝑃𝑅 (𝑄) = 0,98 et 𝑃𝑅̅ (𝑄̅) = 0,65.
                                              ̅ ) = 𝟎, 𝟔𝟓.
   1. D’après l’énoncé, 𝑷(𝑸) = 𝟎, 𝟗𝟏𝟕 et 𝑷𝑹̅ (𝑸
   2.
      a. 𝑃(𝑅̅) = 1 − 𝑃 (𝑅) = 1 − 𝑥. 𝑃𝑅 (𝑄) = 0,98 donc 𝑃𝑅 (𝑄̅) = 1 − 𝑃𝑅 (𝑄) = 0,02.
          𝑃𝑅̅ (𝑄̅) = 0,65 donc 𝑃𝑅̅ (𝑄) = 1 − 𝑃𝑅̅ (𝑄̅) = 0,35. On a donc :

                                               0,98




                                               0,02
                                               0,35

                    1−𝑥

                                               0,65

       b. 𝑅 et 𝑅̅ forment un système complet d’événements.

Donc, d’après la formule des probabilités totales : 𝑃(𝑄) = 𝑃(𝑄 ∩ 𝑅) + 𝑃(𝑄 ∩ 𝑅̅ )

Donc : 𝑃(𝑄) = 𝑃𝑅 (𝑄)𝑃(𝑅) + 𝑃𝑅̅ (𝑄̅)𝑃(𝑅̅).
Ainsi, on a : 0,917 = 0,98𝑥 + 0,35(1 − 𝑥 ) = 0,63𝑥 + 0,35.
            0,567
Ainsi : 𝑥 = 0,63        𝒙 = 𝟎, 𝟗.

   3. On cherche 𝑃𝑄 (𝑅).
           𝑃(𝑅∩𝑄)       𝑃𝑅(𝑄)×𝑃(𝑅)
𝑃𝑄 (𝑅) =            =                . Or, 𝑃(𝑅) = 𝑥 = 0,9.
            𝑃(𝑄)            𝑃(𝑄)

                   0,98×0,9
Ainsi, 𝑃𝑄 (𝑅) =                        𝑃𝑄 (𝑅) ≈ 0,962 à 10−3 près.
                    0,917

La probabilité que l’étudiant interrogé ait réussi l’examen sachant qu’il a répondu « oui » à
la question est d’environ 0,962.

   4. Soit 𝑛 la note recherchée. 𝑛 est tel que 𝑃(𝑁 ≥ 𝑛) ≥ 0,65.
𝑃(𝑁 ≥ 𝑛) = 1 − 𝑃(𝑁 < 𝑛) = 1 − 𝑃(𝑁 ≤ 𝑛 − 1) car la variable aléatoire 𝑁 ne prend que des
valeurs entières.
Pour tout 𝑛 ∈ ℕ, 𝑃(𝑁 ≥ 𝑛) ≥ 0,65 ⇔ 1 − 𝑃(𝑁 ≤ 𝑛 − 1) ≥ 0,65 ⇔ 𝑃(𝑁 ≤ 𝑛 − 1) ≥ 0,35
D’après la calculatrice, 𝑃(𝑁 ≤ 10) ≈ 0,203 < 0,35 et 𝑃 (𝑁 ≤ 11) ≈ 0,351 ≥ 0,35.

---

## Page 2

Ainsi, il faut que 𝑛 − 1 = 11, donc que 𝑛 = 12, pour que 65% des étudiants soient
récompensés. Donc, la directrice doit récompenser les étudiants qui ont eu au moins 12/20.
   5. Par linéarité de l’espérance, 𝐸 (𝑆) = 𝐸 (𝑁1 ) + 𝐸 (𝑁2 ) + ⋯ + 𝐸(𝑁10 ). Or, ces 10
      variables aléatoires ont toutes la même loi, donc la même espérance.
Ainsi, 𝐸 (𝑁1 ) = 𝐸 (𝑁2 ) = ⋯ = 𝐸 (𝑁10 ), donc 𝐸 (𝑆) = 10𝐸(𝑁1 ).

Or, 𝑁1 suit la loi binomiale ℬ(𝑖, 𝑝) avec 𝑖 = 20 et 𝑝 = 0,615. Donc, 𝐸 (𝑁1 ) = 𝑖𝑝.
Ainsi, 𝐸 (𝑆) = 10𝑖𝑝 = 10 × 20 × 0,615          𝑬(𝑺) = 𝟏𝟐𝟑.
On sait que les variables aléatoires 𝑁1 , 𝑁2 , … , 𝑁10 sont indépendantes.
Ainsi, 𝑉 (𝑆) = 𝑉 (𝑁1 ) + 𝑉 (𝑁2 ) + ⋯ + 𝑉 (𝑁10 ). Or, les variables aléatoires 𝑁1 , 𝑁2 , … , 𝑁10
suivent toutes la même loi, donc ont toutes la même variance.
Donc, 𝑉 (𝑁1 ) = 𝑉 (𝑁2 ) = ⋯ = 𝑉(𝑁10 ), donc 𝑉 (𝑆) = 10𝑉(𝑁1 ). Comme 𝑁1 suit la loi binomiale
ℬ(𝑖, 𝑝), 𝑉 (𝑁1 ) = 𝑖𝑝(1 − 𝑝).
Ainsi, 𝑉 (𝑆) = 10𝑖𝑝(1 − 𝑝) = 10 × 20 × 0,615 × (1 − 0,615)          𝑽(𝑺) = 𝟒𝟕, 𝟑𝟓𝟓.
   6.
        a. 𝑴 représente la moyenne des notes des 10 étudiants interrogés au hasard.
                                                      𝑆      1
        b. Par linéarité de l’espérance, 𝐸 (𝑀) = 𝐸 (10) = 10 𝐸 (𝑆).
                1
Donc, 𝐸 (𝑀) = 10 × 123         𝑬(𝑴) = 𝟏𝟐, 𝟑.
                           𝑆        1                      47,355
D’autre part, 𝑉 (𝑀) = 𝑉 (10) = 102 𝑉(𝑆). Donc, 𝑉(𝑀 ) =                  𝑽(𝑴) = 𝟎, 𝟒𝟕𝟑 𝟓𝟓.
                                                             100

        c. On cherche 𝑃(10,3 < 𝑀 < 14,3)
𝑃 (10,3 < 𝑀 < 14,3) = 𝑃(10,3 − 𝐸 (𝑀 ) < 𝑀 − 𝐸 (𝑀) < 14,3 − 𝐸 (𝑀))
𝑃(10,3 < 𝑀 < 14,3) = 𝑃(−2 < 𝑀 − 𝐸 (𝑀) < 2) = 𝑃(|𝑀 − 𝐸 (𝑀)| < 2).
Donc, 𝑃 (10,3 < 𝑀 < 14,3) = 1 − 𝑃(|𝑀 − 𝐸 (𝑀)| ≥ 2).
                                                                             𝑉(𝑀)
Or, d’après l’inégalité de Bienaymé-Tchebychev, 𝑃 (|𝑀 − 𝐸 (𝑀)| ≥ 2) ≤              .
                                                                              22

Donc : 𝑃(|𝑀 − 𝐸 (𝑀)| ≥ 2) ≤ 0,118 387 5 ≤ 0,2. Donc, 1 − 𝑃(|𝑀 − 𝐸 (𝑀)| ≥ 2) ≥ 0,8.
Donc : 𝑃(10,3 < 𝑀 < 14,3) ≥ 0,8.
Ainsi, la probabilité que la moyenne des notes des dix étudiants pris au hasard soit
strictement comprise entre 10,3 et 14,3 est d’au moins 80%.

---

## Page 3

Exercice 2 : suites et fonctions
Partie A : étude d’un modèle discret

   1. Notons 𝑇𝐶𝑙 le taux de chlore dans l’eau après ajout des 15 mg de chlore, et 𝑇0 le taux
      de chlore initial. 𝑚𝐶𝑙 est la masse de chlore alors présente dans l’eau après l’ajout, et
      𝑚0 celle présente initialement. Soit 𝑉𝑝𝑖𝑠𝑐𝑖𝑛𝑒 le volume d’eau dans la piscine.
          𝑚𝐶𝑙
𝑇𝐶𝑙 = 𝑉             . Or, le volume d’eau dans la piscine reste constant au moment de l’ajout de
          𝑝𝑖𝑠𝑐𝑖𝑛𝑒

chlore.
On a, en notant 𝑚𝑎𝑗𝑜𝑢𝑡 = 15𝑔 la masse de chlore ajoutée, 𝑚𝐶𝑙 = 𝑚0 + 𝑚𝑎𝑗𝑜𝑢𝑡 .
                𝑚𝑎𝑗𝑜𝑢𝑡 +𝑚0            𝑚0          𝑚𝑎𝑗𝑜𝑢𝑡          𝑚
Donc, 𝑇𝐶𝑙 =                     =𝑉             + 𝑉𝑝𝑖𝑠𝑐𝑖𝑛𝑒 = 𝑇0 + 𝑉 𝑎𝑗𝑜𝑢𝑡 .
                     𝑉𝑝𝑖𝑠𝑐𝑖𝑛𝑒        𝑝𝑖𝑠𝑐𝑖𝑛𝑒                       𝑝𝑖𝑠𝑐𝑖𝑛𝑒

                         𝑚𝑎𝑗𝑜𝑢𝑡        15 000
Ainsi, 𝑇𝐶𝑙 − 𝑇0 = 𝑉                 = 50×1000 car 15𝑔 = 15 000𝑚𝑔.
                          𝑝𝑖𝑠𝑐𝑖𝑛𝑒


Donc, 𝑇𝐶𝑙 − 𝑇0 = 0,3 𝑚𝑔. 𝐿−1 . Ainsi, cet ajout fait bien augmenter le taux de chlore de 0,3
mg.L-1.
   2.
          a. Montrons par récurrence que pour tout 𝑛 ∈ ℕ, 𝑣𝑛 ≤ 𝑣𝑛+1 ≤ 4.
Initialisation : 𝑣0 = 0,7                𝑣1 = 0,92𝑣0 + 0,3 = 0,944, or 0,7 ≤ 0,944 ≤ 4, donc 𝑣0 ≤
𝑣1 ≤ 4.
Donc, la propriété est vraie pour 𝑛 = 0.
Hérédité : Soit 𝑛 ∈ ℕ tel que la propriété soit vraie au rang 𝑛. Montrons que la propriété est
vraie au range 𝑛 + 1.
D’après l’hypothèse de récurrence, 𝑣𝑛 ≤ 𝑣𝑛+1 ≤ 4.

On multiplie par 0,92 > 0. On a : 0,92𝑣𝑛 ≤ 0,92𝑣𝑛+1 ≤ 3,68
On ajoute 0,3. On a : 0,92𝑣𝑛 + 0,3 ≤ 0,92𝑣𝑛+1 + 0,3 ≤ 3,98.
Or : par définition, 0,92𝑣𝑛 + 0,3 = 𝑣𝑛+1 et 0,92𝑣𝑛+1 + 0,3 = 𝑣𝑛+2 . De plus, 3.98 ≤ 4.
Ainsi, 𝑣𝑛+1 ≤ 𝑣𝑛+2 ≤ 4.
Donc, la propriété est héréditaire.

Conclusion : la propriété est vraie pour 𝑛 = 0 et elle est héréditaire, donc, d’après le principe
de récurrence, elle est vraie pour tout 𝑛 ∈ ℕ.

Pour tout 𝒏 ∈ ℕ, 𝒗𝒏 ≤ 𝒗𝒏+𝟏 ≤ 𝟒.
          b. D’après la question précédente, pour tout 𝑛 ∈ ℕ, 𝑣𝑛 ≤ 𝑣𝑛+1 donc la suite (𝑣𝑛 ) est
             croissante. De plus, pour tout 𝑛 ∈ ℕ, 𝑣𝑛 ≤ 4. Donc la suite (𝑣𝑛 ) est majorée par 4.
             Donc, d’après le théorème de convergence des suites monotones, la suite (𝒗𝒏 )
             converge vers 𝒍 ≤ 𝟒.

---

## Page 4

Soit 𝑔 la fonction définie sur ℝ par 𝑔(𝑥 ) = 0,92𝑥 + 0,3.
La fonction 𝑔 est continue sur ℝ comme fonction affine.

Pour tout 𝑛 ∈ ℕ, 𝑣𝑛+1 = 0,92𝑣𝑛 + 0,3 = 𝑓(𝑣𝑛 ).
La suite (𝑣𝑛 ) converge vers 𝑙.
Donc, d’après le théorème du point fixe, 𝑙 est solution de l’équation 𝑓 (𝑥 ) = 𝑥.
                                                                           0,3
Pour tout 𝑥 ∈ ℝ, 𝑓 (𝑥 ) = 𝑥 ⇔ 0,92𝑥 + 0,3 = 𝑥 ⇔ 0,08𝑥 = 0,3 ⇔ 𝑥 =                 = 3,75.
                                                                           0,08

Ainsi, 𝒍 = 𝟑, 𝟕𝟓.

   3. D’après la question précédente, le taux de chlore va se stabiliser à long terme autour
      de 3,75 mg.L-1. Or, 3,75>3, donc le taux de chlore dans l’eau ne sera, à long terme, pas
      conforme aux exigences des piscinistes.
   4.




   5. Cette instruction renvoie le plus petit entier 𝑛 tel que 𝑣𝑛 > 3.
      D’après la calculatrice, 𝑣16 ≈ 2,95 ≤ 3 et 𝑣17 ≈ 3,01 > 3. Donc, cette instruction
      renvoie la valeur 17. Cela signifie que le taux de chlore dans l’eau dépassera 3 et sortira
      donc de l’intervalle préconisé par les piscinistes après 17 jours.
Partie B : étude d’un modèle continu
   1. Soit (𝐸𝐻 ) l’équation homogène associée à (𝐸 ). On a donc (𝐸𝐻 ) ∶ 𝑦 ′ = −0,08𝑦.
                                      (𝐸𝐻 ) ⇔ 𝑦 ′ + 0,08𝑦 = 0
      (𝐸𝐻 ) est de la forme 𝑦 ′ + 𝑎𝑦 = 0 avec 𝑎 = 0,08.
      Les solutions de (𝐸𝐻 ) sont de la forme 𝑥 ↦ 𝐶𝑒 −0,08𝑥 avec 𝐶 ∈ ℝ.

       On cherche maintenant une solution particulière constante, que l’on notera ℎ.
       ℎ est constante, donc, pour tout 𝑥 ∈ ℝ, ℎ′ (𝑥) = 0.
                                                                          𝑞
       ℎ est solution de (𝐸) donc, pour tout 𝑥 ∈ ℝ, ℎ′ (𝑥 ) = −0,08ℎ(𝑥 ) + .
                                                                                 50
                                             𝑞              𝑞
       Donc, pour tout 𝑥 ∈ ℝ, 0,08ℎ(𝑥 ) = 50       ℎ(𝑥 ) = 4 .

                                                                          𝑞
       Donc, l’ensemble des solutions de (𝐸 ) est 𝑆 = {𝑥 ↦ 𝐶𝑒 −0,08𝑥 + 4 | 𝐶 ∈ ℝ}.
                                                                                  𝒒
       𝑓 est solution de (𝐸) donc 𝒇 est de la forme 𝒇(𝒙) = 𝑪𝒆−𝟎,𝟎𝟖𝒙 +                 où 𝑪 est une
                                                                                  𝟒
       constante réelle.

---

## Page 5

2.
     a.   lim −0,08𝑥 = −∞ or lim 𝑒 𝑋 = 0 donc par composition, puis produit, on a :
          𝑥→+∞                    𝑋→−∞
                                                                𝒒
          lim 𝐶𝑒 −0,08𝑥 = 0. Donc, par somme, 𝐥𝐢𝐦 𝒇(𝒙) = .
          𝑥→+∞                                   𝒙→+∞           𝟒


     b. On cherche 𝐶 et 𝑞 telles que : 𝑓(0) = 0,7 et lim 𝑓(𝑥) = 2.
                                                         𝑥→+∞
                                 𝑞                   𝑞
          Or, on a : lim 𝑓(𝑥) = 4. Donc, on veut : 4 = 2, donc il faut que 𝒒 = 𝟖.
                   𝑥→+∞
                                                 𝑞         𝑞                        𝑞
          On a, d’autre part, 𝑓(0) = 𝐶𝑒 −0,08×0 + 4 = 𝐶 + 4 . On veut donc que 𝐶 + 4 = 0,7.
                           𝑞         8
          Donc, 𝐶 = 0,7 − 4 = 0,7 − 4     𝑪 = −𝟏, 𝟑.

---

## Page 6

Exercice 3 : fonctions
                                  Partie A : exploitation du graphique

   1. Pour trouver 𝑓(−1), il suffit de lire graphiquement l’ordonnée du point 𝐵, qui est le
      point d’abscisse -1 de 𝐶𝑓 . Ainsi, par lecture graphique, 𝒇(−𝟏) = −𝟐.

𝑓′(−1) est le coefficient directeur de la tangente à 𝐶𝑓 au point d’abscisse -1. C’est donc le
coefficient directeur de 𝑇. Or, 𝑇 passe par les points 𝐴 et 𝐵 qui sont distincts.
                       𝑦 −𝑦          −2+1
Ainsi, on a : 𝑓 ′ (−1) = 𝑥𝐵 −𝑥𝐴 = −1−0        𝒇′ (−𝟏) = 𝟏.
                          𝐵   𝐴

   2. On observe que la tangente à 𝐶𝑓 au point d’abscisse −1,4 est au-dessus de 𝐶𝑓 , donc 𝐶𝑓
      n’est pas convexe sur son ensemble de définition.
   3. Il semble que 𝐶𝑓 ne coupe qu’une seule fois l’axe des abscisses, ce qui signifie qu’il
      semble que l’équation 𝑓(𝑥 ) = 0 ait une unique solution. Par lecture graphique, on
      peut conjecturer que cette solution est environ égale à 0,1 à 10−1 près.
                                    Partie B : étude de la fonction 𝒇
   1.   lim 𝑥 + 2 = 0. Or, lim ln (𝑋) = −∞, donc par composition, lim ln(𝑥 + 2) = −∞.
        𝑥→−2                  𝑋→0                                             𝑥→−2
        lim 𝑥 2 + 2𝑥 − 1 = (−2)2 + 2 × (−2) − 1 = −1.
        𝑥→−2

Donc, par somme, 𝐥𝐢𝐦 𝒇(𝒙) = −∞.
                   𝒙→−𝟐

Ainsi, 𝐶𝑓 admet pour asymptote verticale la droite d’équation 𝑥 = −2.

   2. 𝑓 est dérivable sur ] − 2 ; +∞[ comme somme des fonctions dérivables ou composées
      de fonctions dérivables.
                                                         1                2𝑥(𝑥+2)+2(𝑥+2)+1
Pour tout 𝑥 ∈ ] − 2 ; +∞[, 𝑓 ′ (𝑥 ) = 2𝑥 + 2 + 𝑥+2           𝑓 ′ (𝑥 ) =         𝑥+2

                                         𝟐𝒙𝟐 +𝟔𝒙+𝟓
Pour tout 𝑥 ∈] − 2 ; +∞[, 𝒇′ (𝒙) =                   .
                                            𝒙+𝟐

   3. Pour tout 𝑥 ∈ ] − 2 ; +∞[, 𝑥 > −2 donc 𝑥 + 2 > 0.

Ainsi, 𝑓′(𝑥) est du signe de 2𝑥 2 + 6𝑥 + 5 sur ] − 2 ; +∞[.

Etudions le signe de 2𝑥 2 + 6𝑥 + 5.
Calcul du discriminant : Δ = 62 − 4 × 2 × 5 = 36 − 40 = −4. Δ < 0 donc aucune racine.

Comme 2 > 0, on a : pour tout 𝑥 ∈ ] − 2 ; +∞[, 2𝑥 2 + 6𝑥 + 5 > 0.
Donc, pour tout 𝑥 ∈ ] − 2 ; +∞[, 𝑓′(𝑥) > 0, donc 𝑓 est strictement croissante sur ] − 2 ; +∞[

---

## Page 7

On a donc :

        𝑥        −2                                                  𝛼                                    +∞
 Signe de 𝑓′(𝑥) |                                                    +
 Variations de 𝑓 |                                                                                        +∞
                 |                                                   0
                 |−∞


   4. Sur ] − 2 ; +∞[, la fonction 𝑓 est continue (car dérivable) et strictement croissante.
       lim 𝑓(𝑥) = −∞ , lim 𝑓(𝑥) = +∞ et 0 ∈ ] − ∞ ; +∞[.
        𝑥→−2                     𝑥→+∞

Donc, d’après le corollaire du théorème des valeurs intermédiaires, l’équation 𝒇(𝒙) = 𝟎
admet une unique solution 𝜶 sur ] − 𝟐 ; +∞[.
D’après la calculatrice, 𝑓 (0,117) ≈ −0,002 < 0 et 𝑓 (0,118) ≈ 0,000 4 > 0. Donc, comme 𝑓
est croissante sur ] − 2 ; +∞[, on en déduit que 0,117 ≤ 𝛼 ≤ 0,118, donc 𝜶 ≈ 𝟎, 𝟏𝟐 à 10−2
près.
   5. D’après le tableau de variations, on a le tableau de signe suivant :

        𝑥                −2                                          𝛼                                    +∞
 Signe de 𝑓(𝑥)           |                 −                         0                          +


   6. 𝑓′ est dérivable sur ] − 2 ; +∞[ comme quotient de fonctions dérivables sur ] −
      2 ; +∞[.
                                           (4𝑥+6)(𝑥+2)−(2𝑥 2+6𝑥+5)               2𝑥 2 +8𝑥+7
Pour tout 𝑥 ∈ ] − 2 ; +∞[, 𝑓 ′′ (𝑥 ) =                 (𝑥+2)2
                                                                             =    (𝑥+2)2
                                                                                            .

Pour tout 𝑥 ∈ ] − 2 ; +∞[, (𝑥 + 2)2 > 0, donc 𝑓′′(𝑥) est du signe de 2𝑥 2 + 8𝑥 + 7 sur ] −
2 ; +∞[.
Etudions le signe de 2𝑥 2 + 8𝑥 + 7 sur ] − 2 ; +∞[.
Calcul du discriminant : Δ = 82 − 4 × 2 × 7 = 64 − 56 = 8.                         Δ > 0 donc 2 racines que l’on
note 𝑥1 et 𝑥2 .
       −8+√8       −8+2√2             √2         −8−√8        −8−2√2                  √2
𝑥1 =           =              = −2 + 2 et 𝑥2 =            =              = −2 − 2 < −2.
         4           4                             4             4

2 > 0 donc, on a :

               𝑥                                                             √2
                                  −2                             −2+                                      +∞
                                                                             2
 Signe de 2𝑥 2 + 8𝑥 + 7                           −                      0                      +
 Signe de 𝑓′′(𝑥)                  |               −                      0                      +
                                                                                           √2
Ainsi, 𝑓′′ s’annule une unique fois en changeant de signe (en −2 + 2 ). Donc, 𝑪𝒇 admet un
                                                                √𝟐
unique point d’inflexion : le point d’abscisse −𝟐 + 𝟐 .

---

## Page 8

Partie C : une distance minimale
   1. Le point 𝑀 a pour coordonnées (𝑥 ; 𝑔(𝑥 )) et le point 𝐽 a pour coordonnées (0 ; 1).
             ⃗⃗⃗⃗⃗ (𝑥 ; 𝑔(𝑥) − 1).
      Ainsi, 𝐽𝑀
                                                           2
Ainsi, pour tout 𝑥 > −2, 𝐽𝑀 2 = (√𝑥 2 + (𝑔(𝑥 ) − 1)2 ) donc, 𝑱𝑴 = 𝒙𝟐 + [𝐥𝐧(𝒙 + 𝟐) − 𝟏]𝟐 .

   2.
        a. Pour tout 𝑥 ∈ ] − 2 ; +∞[, 𝑥 > −2 donc 𝑥 + 2 > 0, et 2 > 0 donc ℎ′(𝑥) est du signe
           de 𝑓(𝑥) sur ] − 2 ; +∞[.
On a donc :

        𝑥          −2                                      𝛼                                      +∞
 Signe de 𝑓(𝑥)     |                  −                    0                        +
 Signe de ℎ′(𝑥)    |                  −                    0                        +
 Variations de ℎ   |
                   |
                   |                                    ℎ(𝛼)


        b. D’après le tableau de variations, ℎ admet un minimum en 𝛼. Ainsi, 𝐽𝑀² est minimale
           lorsque 𝑥 = 𝛼. Comme la fonction racine carrée est croissante sur [0 ; +∞[, 𝑱𝑴
           est minimale pour 𝒙 = 𝜶.
   3.
        a. On sait que 𝑓(𝛼 ) = 0, donc 𝛼 2 + 2𝛼 − 1 + ln(𝛼 + 2) = 0.

Ainsi, 𝐥𝐧(𝜶 + 𝟐) = 𝟏 − 𝟐𝜶 − 𝜶².
        b. Le coefficient directeur de la tangente à 𝐶𝑔 au point d’abscisse 𝛼 et 𝑔′(𝛼).

La fonction 𝑔 est dérivable sur ] − 2 ; +∞[ comme composée de fonctions dérivables.
                                          1                    1
Pour tout 𝑥 ∈ ] − 2 ; +∞[, 𝑔 ′ (𝑥 ) = 𝑥+2. Donc, 𝑔′ (𝛼 ) = 𝛼+2.

La droite (𝐽𝑀𝛼 ) passe par les points 𝐽 et 𝑀𝛼 de coordonnées respectives (0 ; 1) et (𝛼 ; 𝑔(𝛼 )).
                                                 𝑦 −𝑦          1−𝑔(𝛼)        1−ln(𝛼+2)        1−1+2𝛼+𝛼2
Ainsi, le coefficient directeur de (𝐽𝑀𝛼 ) est 𝑥𝐽 −𝑥 𝑀𝛼 =                =−               =−
                                                  𝐽   𝑀𝛼           −𝛼           𝛼                 𝛼
d’après la question précédente.
Ce coefficient directeur vaut donc −(2 + 𝛼 ).
Ainsi, le produit des coefficients directeurs respectifs de la tangente à 𝐶𝑔 au point d’abscisse 𝛼
                                  1
et de (𝐽𝑀𝛼 ) vaut : −(2 + 𝛼 ) × 𝛼+2 = −1. Ainsi, la tangente à 𝑪𝒈 au point d’abscisse 𝜶 et la
droite (𝑱𝑴𝜶 ) sont perpendiculaires.

---

## Page 9

Exercice 4 : Vrai ou faux (géométrie dans l’espace)
Affirmation 1 :
     ⃗⃗⃗⃗⃗ (𝑥𝐶 − 𝑥𝐴 ; 𝑦𝐶 − 𝑦𝐴 ; 𝑧𝐶 − 𝑧𝐴 ) donc 𝐴𝐶
On a 𝐴𝐶                                        ⃗⃗⃗⃗⃗ (2 ; 4 ; 1)

De plus, ⃗⃗⃗⃗⃗
         𝐴𝐷(𝑥𝐷 − 𝑥𝐴 ; 𝑦𝐷 − 𝑦𝐴 ; 𝑧𝐷 − 𝑧𝐴 ) donc ⃗⃗⃗⃗⃗
                                               𝐴𝐷(−2 ; 0 ; 4)
Les coordonnées de ces deux vecteurs ne sont pas proportionnelles donc ils ne sont pas
colinéaires. Ainsi, les points 𝐴, 𝐶 et 𝐷 ne sont pas alignés et définissent donc un plan.
8𝑥𝐴 − 5𝑦𝐴 + 4𝑧𝐴 − 16 = 16 − 0 + 0 − 16 = 0 donc 𝐴 ∈ 𝒫.
8𝑥𝐶 − 5𝑦𝐶 + 4𝑧𝐶 − 16 = 32 − 20 + 4 − 16 = 0 donc 𝐶 ∈ 𝒫.
8𝑥𝐷 − 5𝑦𝐷 + 4𝑧𝐷 − 16 = 0 − 0 + 16 − 16 = 0 donc 𝐷 ∈ 𝒫.

Les points 𝐴, 𝐶 et 𝐷 (non alignés) appartiennent au plan 𝒫, donc ils définissent ce plan.
Ainsi, l’affirmation est vraie.


Affirmation 2 :
8𝑥𝐵 − 5𝑦𝐵 + 4𝑧𝐵 − 16 = 0 − 20 + 12 − 16 = −24 ≠ 0 donc 𝐵 ∉ 𝒫. Ainsi, le point 𝐵
n’appartient pas au plan défini par les points 𝐴, 𝐶 et 𝐷 (d’après l’affirmation 1). Ainsi, les points
𝐴, 𝐵, 𝐶 et 𝐷 ne sont pas coplanaires.
Donc, l’affirmation est fausse.


Affirmation 3 :

La droite (𝐴𝐶) a pour vecteur directeur le vecteur 𝐴𝐶  ⃗⃗⃗⃗⃗ de coordonnées (2 ; 4 ; 1) et passe par
le point 𝐴 de coordonnées (2 ; 0 ; 0). Ainsi, la droite (𝐴𝐶) a pour représentation paramétrique.
 𝑥 = 2 + 2𝑡
{ 𝑦 = 4𝑡 𝑡 ∈ ℝ
   𝑧=𝑡
La droite (𝐵𝐻) a pour vecteur directeur le vecteur ⃗⃗⃗⃗⃗⃗𝐵𝐻 de coordonnées (𝑥𝐻 − 𝑥𝐵 ; 𝑦𝐻 −
𝑦𝐵 ; 𝑧𝐻 − 𝑧𝐵 ), soit (−1 ; −3 ; −1) et passe par le point 𝐵 de coordonnées (0 ; 4 ; 3).
   𝑥 = −𝑡′
{𝑦 = 4 − 3𝑡′ 𝑡 ′ ∈ ℝ
  𝑧 = 3 − 𝑡′
Les droites (𝐴𝐶) et (𝐵𝐻) ne sont pas parallèles car leurs vecteurs directeurs ne sont pas
colinéaires.
Les droites (𝐴𝐶) et (𝐵𝐻) sont sécantes si et seulement si, le système suivant a une solution.

---

## Page 10

2 + 2𝑡 = −𝑡′     2 + 2𝑡 = −𝑡′     2 + 2𝑡 = 𝑡 − 3
{ 4𝑡 = 4 − 3𝑡′ ⇔ { 4𝑡 = 4 − 3𝑡′ ⇔ { 4𝑡 = 4 − 3𝑡′ par substitution.
   𝑡 = 3 − 𝑡′      −𝑡 ′ = 𝑡 − 3      𝑡′ = 3 − 𝑡
          𝑡 = −5
⇔{     4𝑡 = 4 − 3𝑡′
  𝑡′ = 3 − 𝑡 = 3 + 5 = 8
Vérifions la deuxième équation avec 𝑡 = −5 et 𝑡 ′ = 8.

D’une part : 4𝑡 = −20 et d’autre part 4 − 3𝑡 ′ = 4 − 24 = −20. Ainsi, la deuxième équation
est vérifiée, donc le système admet une solution. Ainsi, les droites (𝐴𝐶) et (𝐵𝐻) sont sécantes.
Ainsi, l’affirmation est vraie.


Affirmation 4 :
Vérifions si le point 𝐻 appartient au plan (𝐴𝐵𝐶).

𝑥𝐻 − 𝑦𝐻 + 2𝑧𝐻 − 2 = −1 − 1 + 4 − 2 = 0 donc 𝐻 ∈ (𝐴𝐵𝐶).
                        ⃗⃗⃗⃗⃗⃗ est normal au plan (𝐴𝐵𝐶).
Montrons que le vecteur 𝐷𝐻

On a : ⃗⃗⃗⃗⃗⃗
       𝐷𝐻(𝑥𝐻 − 𝑥𝐷 ; 𝑦𝐻 − 𝑦𝐷 ; 𝑧𝐻 − 𝑧𝐷 ) donc ⃗⃗⃗⃗⃗⃗
                                             𝐷𝐻(−1 ; 1 ; −2).
Par lecture sur l’équation cartésienne du plan (𝐴𝐵𝐶), le vecteur normal 𝑛⃗ au plan (𝐴𝐵𝐶) a
pour coordonnées (1 ; −1 ; 2). Donc, 𝐷𝐻⃗⃗⃗⃗⃗⃗ = −𝑛⃗.

Donc, le vecteur ⃗⃗⃗⃗⃗⃗
                 𝐷𝐻 est normal au plan (𝐴𝐵𝐶).
Ainsi, le point 𝐻 est le projeté orthogonal du point 𝐷 sur le plan (𝐴𝐵𝐶).
Donc, l’affirmation est vraie.
