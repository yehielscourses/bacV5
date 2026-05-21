# spe-mathematiques-2024-metropole-1-corrige

> Source : `../../../pdf_version/11_maths/2024/spe-mathematiques-2024-metropole-1-corrige.pdf` — conversion Markdown (texte + visuels utiles).
> Stratégie : [STRATEGIE_MARKDOWN.md](../../../STRATEGIE_MARKDOWN.md)

---

## Page 1

CORRIGE – BAC SPE MATHS METROPOLE 2024 JOUR 1
Exercice 1 : Vrai ou faux (fonctions et suites)
    1.
                                                      5𝑥
Affirmation 1 : Pour tout 𝑥 ∈ ℝ, 𝑓 (𝑥 ) = 5𝑥𝑒 −𝑥 = 𝑒 𝑥 .
          𝑥
Or, lim 𝑒 𝑥 = 0 par croissance comparée, donc lim 𝑓(𝑥 ) = 0 par produit.
   𝑥→+∞                                            𝑥→+∞

Donc, 𝐶𝑓 admet pour asymptote horizontale en +∞ la droite d’équation 𝑥 = 0, soit l’axe des
abscisses. Donc l’affirmation est vraie.


Affirmation 2 : 𝑓 est dérivable sur ℝ comme produit de fonctions dérivables sur ℝ.
Pour tout 𝑥 ∈ ℝ, 𝑓 ′ (𝑥 ) = 5𝑒 −𝑥 − 5𝑥𝑒 −𝑥 .
Donc, pour tout 𝑥 ∈ ℝ, 𝑓 ′ (𝑥 ) + 𝑓 (𝑥 ) = 5𝑒 −𝑥 − 5𝑥𝑒 −𝑥 + 5𝑥𝑒 −𝑥
D’où : pour tout 𝑥 ∈ ℝ, 𝑓 ′ (𝑥 ) + 𝑓 (𝑥 ) = 5𝑒 −𝑥 . Donc 𝑓 est solution de (𝐸).
Ainsi, l’affirmation est vraie.


    2.

Affirmation 3 : On pose : pour tout 𝑛 ∈ ℕ, 𝑢𝑛 = −1, 𝑣𝑛 = cos⁡(𝑛) et 𝑤𝑛 = 1.
Pour tout 𝑛 ∈ ℕ, −1 ≤ cos(𝑛) ≤ 1, donc 𝑢𝑛 ≤ 𝑣𝑛 ≤ 𝑤𝑛 .
Pourtant, la suite (𝑣𝑛 ) n’admet pas de limite en +∞. C’est un contre-exemple.
Donc, l’affirmation est fausse.


Affirmation 4 : On a supposé que la suite (𝑢𝑛 ) est croissante. Ainsi, pour tout 𝑛 ∈ ℕ, 𝑢0 ≤ 𝑢𝑛 .
De même, comme la suite (𝑤𝑛 ) est décroissante, on a : pour tout 𝑛 ∈ ℕ, 𝑤𝑛 ≤ 𝑤0 .
Ainsi, on a : pour tout 𝑛 ∈ ℕ, 𝑢0 ≤ 𝑢𝑛 ≤ 𝑣𝑛 ≤ 𝑤𝑛 ≤ 𝑤0 ,⁡donc pour tout 𝑛 ∈ ℕ, 𝑢0 ≤ 𝑣𝑛 ≤ 𝑤𝑛 .
Donc, l’affirmation est vraie.

---

## Page 2

Exercices 2 : Probabilités
D’après l’énoncé : 𝑃(𝐼 ) = 0,6⁡; 𝑃(𝑀) = 0,3⁡; 𝑃(𝐺 ) = 0,1⁡; 𝑃𝐼 (𝑆) = 0,75⁡; 𝑃𝑀 (𝑆) = 0,9 et
𝑃𝐺 (𝑆) = 0,8.

    1. 𝑃𝐼 (𝑆̅) = 1 − 𝑃𝐼 (𝑆) = 1 − 0,75 = 0,25⁡; 𝑃𝑀 (𝑆)̅ = 1 −
       𝑃𝑀 (𝑆) = 1 − 0,9 = 0,1 et 𝑃𝐺 (𝑆̅) = 1 − 𝑃𝐺 (𝑆) = 1 −
       0,8 = 0,2.
On peut donc compléter l’arbre pondéré comme ceci :
    2. On cherche 𝑃(𝐼 ∩ 𝑆).
𝑃(𝐼 ∩ 𝑆) = 𝑃(𝐼 )𝑃𝐼 (𝑆) donc 𝑃(𝐼 ∩ 𝑆) = 0,6 × 0,75 = 0,45.
La probabilité que la client ait réalisé son achat sur Internet et
qu’il soit satisfait du service client et de 0,45.
    3. 𝐼, 𝑀 et 𝐺 forment un système complet d’événements.
Donc, d’après la formule des probabilités totales :
𝑃(𝑆) = 𝑃 (𝐼 ∩ 𝑆) + 𝑃(𝑀 ∩ 𝑆) + 𝑃(𝐺 ∩ 𝑆) = 𝑃(𝐼 ∩ 𝑆) + 𝑃𝑀 (𝑆)𝑃(𝑀) + 𝑃𝐺 (𝑆)𝑃(𝐺).
𝑃(𝑆) = 0,45 + 0,9 × 0,3 + 0,8 × 0,1⁡⁡⁡⁡⁡⁡𝑷(𝑺) = 𝟎, 𝟖.
    4. On cherche 𝑃𝑆 (𝐼 ).
          𝑃(𝐼∩𝑆)                0,45
𝑃𝑆 (𝐼 ) = 𝑃(𝑆) ⁡⁡⁡⁡⁡⁡⁡⁡⁡ 𝑃𝑆 (𝐼 ) = 0,8 ⁡⁡⁡⁡⁡ 𝑃𝑆 (𝐼) ≈ 0,563 à 10−3 près.

La probabilité que le client ait fait son achat sur Internet sachant qu’il est satisfait du service
client est d’environ 0,563.
    5.
         a. Appeler un client pour savoir s’il est satisfait du service client est une épreuve de
            Bernoulli dont le succès est « le client est satisfait » de probabilité 𝑃(𝑆) = 0,8.
            On répète 30 fois cette épreuve de façon identique et indépendante (on suppose
            que le choix du client est assimilable à un tirage avec remise). On a donc un schéma
            de Bernoulli de paramètres 𝑛 = 30 et 𝑝 = 0,8.
            La variable aléatoire 𝑿 qui compte le nombre de succès (le nombre de clients
            satisfaits sur la journée) suit donc la loi binomiale 𝓑(𝟑𝟎⁡; 𝟎, 𝟖).

         b. On cherche 𝑃(𝑋 ≥ 25).
𝑃(𝑋 ≥ 25) = 1 − 𝑃(𝑋 < 25) = 1 − 𝑃 (𝑋 ≤ 24).
D’après la calculatrice, 𝑃(𝑋 ≥ 25) ≈ 0,428.
La probabilité qu’au moins 25 clients soient satisfaits dans un échantillon de 30 clients
contactés sur une même journée est d’environ 0,428.

---

## Page 3

6. Soit 𝑛 la taille minimale de l’échantillon et 𝑌 la variable aléatoire qui, sur ces 𝑛 clients
      contactés en une journée, compte le nombre de clients non satisfaits.
Appeler un client pour savoir s’il est satisfait du service client est une épreuve de Bernoulli
dont le succès est « le client n’est pas satisfait » de probabilité 𝑃(𝑆̅) = 1 − 𝑃(𝑆) = 0,2.
On répète 𝑛 fois cette épreuve de façon identique et indépendante (on suppose que le choix
du client est assimilable à un tirage avec remise). On a donc un schéma de Bernoulli de
paramètres 𝑛 et 𝑝 = 0,2.

La variable aléatoire 𝑌 qui compte le nombre de succès (le nombre de clients non satisfaits sur
la journée) suit donc la loi binomiale ℬ(𝑛⁡; 0,2).
On cherche 𝑛 tel que 𝑃(𝑌 ≥ 1) ≥ 0,99
𝑃 (𝑌 ≥ 1) = 1 − 𝑃 (𝑌 < 1) = 1 − 𝑃 (𝑌 = 0).

Comme 𝑌 suit ℬ(𝑛⁡; 0,2), on a : 𝑃 (𝑌 ≥ 1) = 1 − (𝑛0)0,20 (1 − 0,2)𝑛−0 = 1 − 0,8𝑛 .

On cherche donc 𝑛 tel que 1 − 0,8𝑛 ≥ 0,99.
Pour tout 𝑛 ∈ ℕ, 1 − 0,8𝑛 ≥ 0,99 ⇔ 0,8𝑛 ≤ 0,01 ⇔ ln(0,8𝑛 ) ≤ ln⁡(0,01) car la fonction ln
est croissante sur ℝ∗ + .
                                   ln(0,01)
⇔ 𝑛 ln(0,8) ≤ ln(0,01) ⇔ 𝑛 ≥ ln(0,8) car ln(0,8) < 0 car 0,8 < 1.

                        ln(0,01)
D’après la calculatrice, ln(0,8) = 20,64. Donc, 𝑛 étant entier, il faut 𝑛 ≥ 21.

Il faut donc appeler au minimum 21 clients sur une même journée pour que la probabilité
qu’au moins l’un d’entre eux ne soit pas satisfait soit supérieure ou égale à 0,99.
   7.
        a. Par linéarité de l’espérance, on a : 𝐸 (𝑇) = 𝐸 (𝑇1 + 𝑇2 ) = 𝐸 (𝑇1 ) + 𝐸(𝑇2 )

Donc, 𝐸 (𝑇) = 4 + 3⁡⁡⁡⁡⁡⁡𝑬(𝑻) = 𝟕.
Les variables aléatoires 𝑇1 et 𝑇2 sont indépendantes donc 𝑉 (𝑇) = 𝑉 (𝑇1 + 𝑇2 ) = 𝑉 (𝑇1 ) +
𝑉 (𝑇2 ).
D’où 𝑉(𝑇) = 2 + 1⁡⁡⁡⁡⁡𝑽(𝑻) = 𝟑.
        b. On cherche 𝑃(5 ≤ 𝑇 ≤ 9) = 𝑃(−2 ≤ 𝑇 − 𝐸 (𝑇) ≤ 2) = 𝑃(|𝑇 − 𝐸 (𝑇)| ≤ 2).

Ainsi, 𝑃 (5 ≤ 𝑇 ≤ 9) = 1 − 𝑃 (|𝑇 − 𝐸 (𝑇)| > 2) = 1 − 𝑃(|𝑇 − 𝐸 (𝑇)| ≥ 3) car 𝑇 − 𝐸(𝑇) ne
prend que des valeurs entières.
                                                                             𝑉(𝑇)
D’après l’inégalité de Bienaymé-Tchebychev, on a : 𝑃(|𝑇 − 𝐸 (𝑇)| ≥ 3) ≤ 32
                               1                                     2
D’où : 𝑃 (|𝑇 − 𝐸 (𝑇)| ≥ 3) ≤ 3. Ainsi, on a bien : 𝑃(5 ≤ 𝑇 ≤ 9) ≥ 3.

---

## Page 4

La probabilité que le téléviseur soit reçu entre 5 et 9 jours après la commande est supérieure
           𝟐
ou égale à 𝟑.

![Page 4 — carte / document visuel](../../../assets/11_maths/2024/spe-mathematiques-2024-metropole-1-corrige/page-04.png)

---

## Page 5

Exercice 3 : Géométrie dans l’espace
    1.
                                         ⃗⃗⃗⃗⃗ et 𝐶𝐴
         a. Calculons les coordonnées de 𝐶𝐷       ⃗⃗⃗⃗⃗ .

⃗⃗⃗⃗⃗ ⁡(𝑥𝐴 − 𝑥𝐶 ⁡; 𝑦𝐴 − 𝑦𝐶 ⁡; 𝑧𝐴 − 𝑧𝐶 ) = (5⁡; 5⁡; −10) et de même ⃗⃗⃗⃗⃗
𝐶𝐴                                                                 𝐶𝐷(𝑥𝐷 − 𝑥𝐶 ⁡; 𝑦𝐷 − 𝑦𝐶 ⁡; 𝑧𝐷 −
                  25
𝑧𝐶 ) = (0⁡; 0⁡;⁡− 2 ).

Ces deux vecteurs ne sont pas colinéaires.

D’une part : 𝑛       ⃗⃗⃗⃗⃗ = 1 × 5 − 1 × 5 + 0 × (−10) = 0 donc ces deux vecteurs sont
             ⃗⃗⃗⃗1 . 𝐶𝐴
orthogonaux.
                                                       25
               ⃗⃗⃗⃗1 . ⃗⃗⃗⃗⃗
D’autre part : 𝑛       𝐶𝐷 = 1 × 0 − 1 × 0 + 0 × (− 2 ) = 0 donc ces deux vecteurs sont
orthogonaux.
Ainsi, ⃗⃗⃗⃗                                                                 ⃗⃗⃗⃗𝟏 ⁡est un
       𝑛1 est orthogonal à deux vecteurs non colinéaires du plan (𝐶𝐴𝐷) donc 𝒏
vecteur normal au plan (𝑪𝑨𝑫).
                    𝑛1 est normal au plan (𝐶𝐴𝐷), ce plan a pour équation cartésienne 𝑥 −
         b. Comme ⃗⃗⃗⃗
            𝑦 + 𝑑 = 0.
On sait que le point 𝐶 appartient au plan (𝐶𝐴𝐷) donc 𝑥𝐶 − 𝑦𝐶 + 𝑑 = 0 d’où 𝑑 = 0.

Ainsi, le plan (𝑪𝑨𝑫) a pour équation cartésienne 𝒙 − 𝒚 = 𝟎.
    2.
         a. On sait que ce point 𝐻 appartient à 𝒟 et à (𝐶𝐴𝐷) donc ses coordonées vérifient le
                                    5
                            𝑥𝐻 = 2 𝑡
                                        5
            système :   𝑦𝐻 = 5 − 2 𝑡 . On déduit de la troisième équation que 𝑥𝐻 = 𝑦𝐻 . Soit,
                           𝑧𝐻 = 0
                       {𝑥𝐻 − 𝑦𝐻 = 0
                                                                5         5
            par substitution avec les deux premières équations : 𝑡 = 5 − 𝑡⁡d’où 𝑡 = 1.
                                                                  2         2
                                                                                5     5
On reporte cela dans les deux premières équations, ce qui donne : 𝑥𝐻 = 2 × 1 = 2 et 𝑦𝐻 =
    5         5                             5   5
5 − 2 × 1 = 2. Donc, on a bien 𝐻 (2 ⁡; 2 ⁡ ; 0).
                          5 5
         b. On a : ⃗⃗⃗⃗⃗⃗
                   𝐻𝐵 (− ⁡;⁡ ⁡; 0). On remarque que les coordonnées de ⃗⃗⃗⃗⃗⃗
                                                                       𝐻𝐵 et ⃗⃗⃗⃗
                                                                              𝑛1 sont
                            2   2
            proportionnelles donc ces deux vecteurs sont colinéaires.
De plus, 𝐻 appartient au plan (𝐶𝐴𝐷) d’après la question précédente. Ainsi, 𝐻 est bien le
projeté orthogonal de 𝐵 sur le plan (𝐶𝐴𝐷).
    3.
                          5     5
         a. On a : ⃗⃗⃗⃗⃗⃗                  ⃗⃗⃗⃗⃗⃗ (− 5 ⁡; 5 ⁡; 0). Ces deux vecteurs ne sont pas
                   𝐴𝐻 (− 2 ⁡;⁡− 2 ⁡; 0) et 𝐻𝐵        2 2
            colinéaires car leurs coordonnées ne sont pas proportionnelles, ils définissent donc
            bien un plan.

---

## Page 6

5      5    5   5
⃗⃗⃗⃗⃗⃗ 𝐻𝐵 = − 2 × (− 2) − 2 × 2 + 0 = 0 donc ⃗⃗⃗⃗⃗⃗
𝐴𝐻 . ⃗⃗⃗⃗⃗⃗                                  𝐴𝐻⁡et ⃗⃗⃗⃗⃗⃗
                                                    𝐻𝐵 sont orthogonaux, donc le triangle
𝐴𝐻𝐵 est rectangle en 𝐻.
        b. En prenant 𝐴𝐻 comme base du triangle 𝐴𝐻𝐵, on aura pour hauteur issue de 𝐵 𝐻𝐵
           étant donné que 𝐴𝐻𝐵 est rectangle en 𝐻.

                  𝐴𝐻×𝐻𝐵                               5 2                5 2        5               5 2   5 2
Donc, 𝒜𝐴𝐻𝐵 =                    . Or, 𝐴𝐻 = √(− 2) + (− 2) + 0² =                         et 𝐻𝐵 = √(− 2) + (2) + 02
                       2                                                            √2
             5                           1       5        5                    25
d’où 𝐻𝐵 =        .⁡Donc : 𝒜𝐴𝐻𝐵 = 2 ×                  ×        ⁡⁡⁡⁡⁡𝒜𝐴𝐻𝐵 = 4 .
            √2                                   √2       √2

                                                          𝟐𝟓
L’aire du triangle 𝑨𝑯𝑩 est bien égale à 𝟒 .

   4.
                  ⃗⃗⃗⃗⃗ (0⁡; 0⁡; 10)
        a. On a : 𝐶𝑂
                    5           5                                      5        5
⃗⃗⃗⃗⃗ . ⃗⃗⃗⃗⃗⃗
𝐶𝑂                                                 ⃗⃗⃗⃗⃗ . ⃗⃗⃗⃗⃗⃗
        𝐴𝐻 = 0 × (− 2) + 0 × (− 2) + 10 × 0 = 0 et 𝐶𝑂      𝐵𝐻 = 0 × (− 2) + 0 × 2 + 10 × 0 =
0. Donc (𝑪𝑶) est bien la hauteur du tétraèdre 𝑨𝑩𝑪𝑯 issue de 𝑪.
                           1
        b. 𝑉𝐴𝐵𝐶𝐻 = 3 𝒜𝐴𝐻𝐵 × 𝐶𝑂. Or, 𝐶𝑂 = √02 + 02 + 10² = 10
                  1        25                              𝟏𝟐𝟓
Donc, 𝑉𝐴𝐵𝐶𝐻 = 3 × 4 × 10⁡⁡⁡⁡⁡⁡⁡⁡𝑽𝑨𝑩𝑪𝑯 = 𝟔 .

   5. Notons 𝑑 la distance recherchée.
                  1
On a : 𝑉𝐴𝐵𝐶𝐻 = 3 𝒜𝐴𝐵𝐶 × 𝑑.

Or, 𝐴𝐵𝐶 est rectangle en 𝐵, donc en prenant 𝐴𝐵 comme base, on aura 𝐵𝐶 pour hauteur issue
                                                                𝐵𝐶
de 𝐶 du triangle 𝐴𝐵𝐶. Ainsi, 𝒜𝐴𝐵𝐶 = 𝐴𝐵 × 2 .

Or, on a : ⃗⃗⃗⃗⃗
           𝐴𝐵(−5⁡; 0⁡; 0) et ⃗⃗⃗⃗⃗
                             𝐵𝐶 (0⁡;⁡−5⁡; 10), donc 𝐴𝐶 = √(−5)2 + 02 + 0² = 5 et 𝐵𝐶 =
                                                                5√125
√02 + (−5)2 + 10² = √125,⁡d’où 𝒜𝐴𝐵𝐶 =                                     .
                                                                     2

            3𝑉                     125       2            √125  √25×5
Ainsi : 𝑑 = 𝒜𝐴𝐵𝐶𝐻 = 3 × 6 × 5√125 =                            = 5 = √5. La distance du point 𝑯 au plan
                 𝐴𝐵𝐶                                       5
(𝑨𝑩𝑪) est égale à √𝟓 (soit environ 2,24).

---

## Page 7

Exercice 4 : Fonctions
                                    Partie A : étude de la fonction 𝒇

    1.
                                                                                   1
         a. lim (𝑥 − 2) = −2 et lim ln(𝑥 ) = −∞, donc, par produit, lim 2 ln(𝑥 ) = −∞. Donc,
            𝑥→0                      𝑥→0                                     𝑥→0
            par somme, lim 𝑓 (𝑥 ) = −∞.
                              𝑥→0
                                                                                          1
 lim (𝑥 − 2) = +∞ par somme et lim ln(𝑥) = +∞, d’où par produit lim 2 ln(𝑥) = +∞,
𝑥→+∞                                       𝑥→+∞                                    𝑥→+∞
donc par somme, lim 𝑓(𝑥) = +∞.
                       𝑥→+∞

         b. On a admis que 𝑓 est dérivable sur ]0⁡;⁡+∞[.
                                            𝟏     𝟐𝒙+𝟏
Pour tout 𝑥 ∈⁡]0⁡;⁡+∞[, 𝒇′ (𝒙) = 𝟏 + 𝟐𝒙 =                .
                                                   𝟐𝒙
                                                                     1
         c. Pour tout 𝑥 ∈ ]0⁡;⁡+∞[, 2𝑥 + 1 > 0 ⇔ 𝑥 > − 2 et 2𝑥 > 0 ⇔ 𝑥 > 0.

Donc, pour tout 𝑥 ∈⁡]0⁡;⁡+∞[, 𝑓 ′ (𝑥 ) > 0 donc 𝒇 est strictement croissante sur ]𝟎⁡;⁡+∞[.

         d. On a admis que 𝑓 est deux fois dérivable sur ]0⁡;⁡+∞[.
                                           1
Pour tout 𝑥 ∈⁡]0⁡;⁡+∞[, 𝑓 ′′ (𝑥 ) = − 2𝑥 2.

Pour tout 𝑥 ∈⁡]0⁡;⁡+∞[, 𝑓 ′′ (𝑥 ) ≤ 0⁡car 2𝑥 2 > 0, donc 𝒇 est concave sur ]𝟎⁡;⁡+∞[.


    2.
         a. On a le tableau de variations suivant :

         𝑥              0                                    𝛼                                +∞
 Variations de 𝑓        |                                                                     +∞
                        |                                    0
                        | −∞


Sur ]0⁡;⁡+∞[, 𝑓 est continue (car dérivable) et strictement croissante.
D’autre part : lim 𝑓 (𝑥 ) = −∞, lim 𝑓(𝑥 ) = +∞ et 0 ∈⁡] − ∞⁡;⁡ +∞[.
               𝑥→0                  𝑥→+∞

Donc, d’après le corollaire du théorème des valeurs intermédiaires, l’équation 𝒇(𝒙) = 𝟎
admet une unique solution 𝜶⁡sur ]𝟎⁡;⁡+∞[.
                   1                                             1       1
𝑓 (1) = 1 − 2 + 2 ln(1) = −1 < 0 et 𝑓(2) = 2 − 2 + 2 ln(2) = 2 ln(2) > 0 car 2 > 1.

Donc : 𝑓(1) ≤ 0 ≤ 𝑓 (2)⁡donc 𝑓 (1) ≤ 𝑓 (𝛼 ) ≤ 𝑓(2) donc 1 ≤ 𝛼 ≤ 2 car 𝑓 est croissante sur
]0⁡;⁡+∞[. Donc 𝜶 ∈ [𝟏⁡; 𝟐].
         b. D’après le tableau de variations de la question précédente, on peut déduire la
            tableau de signe suivant :

---

## Page 8

*(Suite de la page précédente — le document continue ici.)*

𝒙                     0                                                𝜶                                       +∞
 Signe de 𝒇(𝒙)                |                        -                       0                           +

                                                           1                           1
         c. On a 𝑓(𝛼 ) = 0 donc 𝛼 − 2 + 2 ln(𝛼 ) = 0 d’où 2 ln(𝛼) = 2 − 𝛼

Ainsi, 𝐥𝐧(𝜶) = 𝟐(𝟐 − 𝜶).


                                              Partie B : étude de la fonction 𝒈
                                                               7               1                       1       1
    1. Pour tout 𝑥 ∈⁡]0⁡; 1], 𝑔′(𝑥) = −2 × 8 𝑥 + 1 − 4 × 2𝑥⁡ln⁡(𝑥) − 4 𝑥² × 𝑥
                          7           1            1                   1               1   1
         𝑔′ (𝑥 ) = − 4 𝑥 − 4 𝑥 + 1 − 2 𝑥 ln(𝑥 ) = 𝑥 (𝑥 − 2 + 2 𝑥 ln (𝑥))
                                                           𝟏
         Pour tout 𝑥 ∈]0⁡; 1], 𝒈′(𝒙) = 𝒙𝒇(𝒙).
    2.
                                          1                1           1
         a. Pour tout 𝑥 ∈⁡]0⁡; 𝛼 [, 0 < 𝑥 < 𝛼 donc 𝑥 > 𝛼 car la fonction inverse est décroissante
              sur ]0⁡;⁡+∞[. Comme la fonction 𝑓 est croissante sur ]0⁡;⁡+∞[, pour tout 𝑥 ∈
                      1           1                                                        𝟏
              ⁡]0⁡; 𝛼 [, 𝑓 (𝑥) > 𝑓(𝛼). Comme 𝑓(𝛼 ) = 0,⁡on a bien 𝒇 (𝒙) > 𝟎.
                                                                                               1
         b. Pour tout𝑥 ∈⁡]0⁡; 1], 𝑥 > 0, donc 𝑔′(𝑥) est du signe de 𝑥.

Ainsi, on a le tableau suivant :
                                                                           1
          𝑥                   0                                                                                         1
                                                                           𝛼
                  1           |                        +                   0                       -
 Signe de 𝑓 (𝑥)
 Signe de 𝑔′(𝑥)               |                        +                   0                       -
 Variations de 𝑔              |
                              |
                              |


                                                   Partie C : un calcul d’aire
    1.
                                                                                                       7
         a. Soit ℎ la fonction définie sur ]0⁡; 1] par ℎ(𝑥 ) = 𝑔(𝑥 ) − (− 8 𝑥 2 + 𝑥)

Il suffit d’étudier le signe de ℎ(𝑥).
                                               7               1                   7
Pour tout 𝑥 ∈⁡]0⁡; 1], ℎ(𝑥) = − 8 𝑥² + 𝑥 − 4 𝑥²⁡ln⁡(𝑥) + 8 𝑥² − 𝑥
              1                                                                                                    1
ℎ(𝑥) = − 4 𝑥 2 ln(𝑥). Or, pour tout 𝑥 ∈⁡]0⁡; 1], 𝑥² ≥ 0 et ln(𝑥) ≤ 0 donc, comme − 4 < 0, ℎ
est positive sur ]0⁡; 1], donc 𝑪𝒈 est au-dessus de 𝓟 sur ]𝟎⁡; 𝟏].
                                                                   1
         b. Calculons, en intégrant par parties ∫1 𝑥 2 ln(𝑥) 𝑑𝑥
                                                                   𝛼

---

## Page 9

Première méthode :
                                                                                                            𝑥3               1
On pose : 𝑢′ (𝑥 ) = 𝑥² et 𝑣 (𝑥 ) = ln⁡(𝑥). On a donc 𝑢(𝑥 ) = 3 et 𝑣 ′ (𝑥 ) = 𝑥.
                                                    1
            1                     𝑥3                         1 𝑥3                1                      1            1 𝑥2
Ainsi : ∫1 𝑥 2 ln(𝑥) 𝑑𝑥 = [ 3 ln(𝑥 )] 1 − ∫1 3 × 𝑥 𝑑𝑥 = − 3𝛼3 ln(𝛼 ) − ∫1 3 𝑑𝑥
        𝛼                                           𝛼        𝛼                                                       𝛼

                                                         1
 1                  1                               𝑥3               12−6𝛼             1            1
∫1 𝑥 2 ln(𝑥 ) 𝑑𝑥 = 3𝛼3 2(2 − 𝛼 ) − [ 9 ] 1 =                          9𝛼3
                                                                                     − 9 + 9𝛼3
 𝛼                                                       𝛼

            𝟏                     −𝜶𝟑 −𝟔𝜶+𝟏𝟑
Donc : ∫𝟏 𝒙𝟐 𝐥𝐧(𝒙) 𝒅𝒙 =
         𝜶                                𝟗𝜶𝟑

Autre méthode plus compliquée :
                                                                                                                                 𝑥
On pose : 𝑢′ (𝑥 ) = ln(𝑥) et 𝑣 (𝑥 ) = 𝑥². On a donc 𝑣 ′ (𝑥 ) = 2𝑥 et 𝑢(𝑥 ) = ∫1 ln(𝑡)𝑑𝑡.

On intègre par parties cette nouvelle intégrale. On pose 𝛽 ′ (𝑡) = 1 et 𝛾 (𝑡) = ln(𝑡). Ainsi :
                      1
𝛽 (𝑡) = 𝑡 et 𝛾 ′ (𝑡) = .𝑡
                                                                                               𝑥𝑡
Ainsi, pour tout 𝑥 ∈⁡]0⁡;⁡+∞[, 𝑢(𝑥 ) = [𝑡 ln(𝑡)]1𝑥 − ∫1 𝑡 𝑑𝑡 = 𝑥 ln(𝑥 ) − [𝑡]1𝑥

𝑢(𝑥 ) = 𝑥 ln(𝑥 ) − 𝑥 + 1.
On en déduit l’intégrale que l’on cherchait précédemment :
 1                                                                           1
∫1 𝑥 2 ln(𝑥 ) 𝑑𝑥 = [𝑥 2 (𝑥 ln(𝑥 ) − 𝑥 + 1)]11 − ∫1 2𝑥(𝑥 ln(𝑥 ) − 𝑥 + 1)𝑑𝑥
 𝛼                                                               𝛼           𝛼

 1                          1 2           1                  1                             1                             1
∫1 𝑥 2 ln(𝑥 ) 𝑑𝑥 = − (𝛼 ) (− 𝛼 ln(𝛼 ) − 𝛼 + 1) − 2 ∫1 𝑥 2 ln(𝑥 ) 𝑑𝑥 − 2 ∫1 (𝑥 − 𝑥 2 )𝑑𝑥
 𝛼                                                                                         𝛼                             𝛼

                                                                                                             1
                1                     2                      1               1              𝑥2          𝑥3
Donc, 3 ∫1 𝑥 2 ln(𝑥 ) 𝑑𝑥 = 𝛼3 (2 − 𝛼 ) + 𝛼3 − 𝛼2 − 2 [ 2 − 3 ] 1
                𝛼                                                                                            𝛼

        1                     1       4         2        1           1                  2           1            2
Ainsi, ∫1 𝑥 2 ln(𝑥 ) 𝑑𝑥 = 3 (𝛼3 − 𝛼2 + 𝛼3 − 𝛼2 − 1 + 3 + 𝛼2 − 3𝛼3 ) =
       𝛼
1
 (12−6𝛼+3−3𝛼−3𝛼3 +2𝛼3 +3𝛼−2)
3
            3𝛼3

 𝟏                  −𝜶𝟑 −𝟔𝜶+𝟏𝟑
∫𝟏 𝒙𝟐 𝐥𝐧(𝒙) 𝒅𝒙 =            𝟗𝜶𝟑
                                          .
 𝜶


     2. L’aire 𝒜⁡est comprise entre 𝐶𝑔 et 𝒫 et est donc égale à l’intégrale de la différence des
        fonctions qu’elles représentent (on fait la différence de leurs intégrales respectives).
                                                                                       1
Ainsi, cela revient à calculer l’intégrale de ℎ entre 𝛼2 et 1
        1               1         1                                      1       1
𝒜 = ∫1 ℎ(𝑥 )𝑑𝑥 = ∫1 − 4 𝑥²ln⁡(𝑥)𝑑𝑥 = − 4 ∫1 𝑥²ln⁡(𝑥)𝑑𝑥
       𝛼2               𝛼2                                                   𝛼2

                                                                             −𝜶𝟑 −𝟔𝜶+𝟏𝟑
Ainsi, d’après la question précédente, 𝓐 = −                                                        .
                                                                                     𝟑𝟔𝜶𝟑
