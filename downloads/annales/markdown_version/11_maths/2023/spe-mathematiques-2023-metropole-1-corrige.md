# spe-mathematiques-2023-metropole-1-corrige

> Source : `../../../pdf_version/11_maths/2023/spe-mathematiques-2023-metropole-1-corrige.pdf` — conversion Markdown (texte + visuels utiles).
> Stratégie : [STRATEGIE_MARKDOWN.md](../../../STRATEGIE_MARKDOWN.md)

---

## Page 1

Mathématiques - Métropole 1 - 2023
Merci d’adresser vos éventuelles remarques à anthony.le.bihan@icloud.com. Je ne réponds pas aux questions.


Exercice 1 (5 points)
   D’après les données, on peut à l’avance établir l’arbre pondéré suivant :




   On sait de plus que p(G ∩ D) = 0, 002 et p(D) = 0, 082.
                                                                       p(G ∩ D)   0, 2
   1. Par définition d’une probabilité conditionnelle : pG (D) =                =      = 0, 01 . La réponse est B.
                                                                         p(G)     20
   2. Puisque (G, Ḡ) forme un système complet d’événements (ou une partition de l’univers), la formule des
      probabilités totales nous dit que :

              p(D) = p(D ∩ G) + p(D ∩ Ḡ) =⇒ p(D ∩ Ḡ) = p(D) − p(D ∩ G) = 0, 082 − 0, 002 = 0, 08

      La réponse est B.
                                                                                                    p(G ∩ D)   0, 2
   3. On cherche pD (G). Par définition d’une probabilité conditionnelle : pD (G) =                          =      =
                                                                                                      p(D)     8, 2
      0, 0244 ≃ 0, 024. La réponse est B.
                                                                                        
                                                                                        n k
   4. D’après le cours sur les lois binomiales, si X ∼ B(50; 0, 082), alors p(X = k) =    p (1 − p)n−k . Ici, en
                                                                                        k
      utilisant les événements contraires :

                         P (X > 2) = 1 − P (X ≤ 2) = 1 − P (X = 0) − P (X = 1) − P (X = 2)

      car X(Ω) = {0, 1, 2, . . . , 50}. Arrivé ici, il y a 2 possibilités. Soit on utilise la calculatrice et :
      — fonction de partition pour X = 0, X = 1 et X = 2
      — fonction de répartition pour X ≤ 2
      Dans les deux cas, on trouve P (X > 2) ≃ 0, 78858 ≃ 0, 789. Ainsi,

                    P (X > 2) = 1 − (1 − 0, 082)50 − 50 × 0, 082 × (1 − 0, 082)49 = 0, 78858 ≃ 0, 789

      La réponse est B.
   5. On cherche désormais n tel que p(X = 0) > 0, 4 où X ∼ B(n; 0, 082). Or,
                                         
                                         n
                           P (X = 0) =       × 0, 0820 × (1 − 0, 082)n = (1 − 0, 082)n
                                         0

      On doit donc résoudre : (1 − 0, 082)n > 0, 4.

                                   (1 − 0, 082)n > 0, 4 ⇐⇒ n log(1 − 0, 082) > log(0, 4)


                                                            1

---

## Page 2

*(Suite de la page précédente — le document continue ici.)*

par application de la fonction log, strictement croissante sur R+
                                                                    ∗ . Ainsi,

                                                  log(0, 4)
       n log(0, 918) > log(0, 4) ⇐⇒ n <                            changement du sens de l’inégalité car log(0,918)<0
                                                 log(0, 918)

    Après calculs, n < 10, 7 ⇐⇒ n ≤ 10. La réponse est C.


Exercice 2

                                       f     :    ]0; +∞[ →                R
                                                      x   7→          x2 − 8 ln(x)
  1. Par le cours sur les limites de fonctions usuelles, on sait que lim x2 = 0 et lim ln(x) = −∞ donc par
                                                                               x→0             x→0
    opérations sur les limites
                                             lim f (x) = 0 − 8 × (−∞) = +∞
                                             x→0

                                                                   ln(x)
  2. Par le cours sur les croissances comparées, lim                     = 0. Donc, par opérations sur les limites
                                                       x→+∞          x2
                                           lim f (x) = +∞ × (1 − 8 × 0) = +∞
                                       x→+∞


  3. f est dérivable sur ]0; +∞[ donc en dérivant terme à terme l’expression première de f , il vient que

                                                            8   2x2  8  2x2 − 8x   2(x2 − 4)
                        ∀x ∈]0; +∞[,       f 0 (x) = 2x −     =     − =          =
                                                            x    x   x      x          x

  4. On étudie successivement le signe du numérateur et du dénominateur de f 0 pour en déduire son signe :


                                 x          0                          2                 +∞

                          2(x2 − 4)                     −              0         +

                                 x          0           +                        +

                            f 0 (x)                     −              0         +

                                           +∞                                            +∞
                             f (x)
                                                                     f (2)


    Avec f (2) = 4 − 8 ln(2) = 4(1 − ln(4)) ≃ −1, 54.
  5. On sait que :
     — f est continue sur ]0; 2]
     — f est strictement décroissante sur ]0; 2]
     — [f (2), f (0)[= [4 − 8 ln(2); +∞[ et donc 0 ∈ [f (2), f (0)[
     d’après le corollaire du théorème des valeurs intermédiaires, l’équation f (x) = 0 admet une unique
     solution sur ]0; 2].
  6. A partir des 2 questions précédentes, on peut déduire le tableau de signe de f :


                    x            0                      α                        β                   +∞

                  f (x)                     +           0              −         0         +




                                                               2

---

## Page 3

7. On a finalement ∀x ∈]0; +∞[, gk (x) = f (x)+k. On peut tout simplement retracer le tableau de variations
     de gk à partir de celui de f :


                              x          0                    2                 +∞

                             f (x)      +∞                                      +∞
                                                             f (2)

                            gk (x)      +∞                                      +∞
                                                           f (2) + k


     Il suffit juste de ”décaler de k”. Et on veut donc gk positive c’est-à-dire f (2) + k ≥ 0 ⇐⇒ k ≥ −f (2).
     La plus petite valeur de k telle que gk reste positive est 8 ln(2) − 4.


Exercice 3
Première modélisation
  1. u1 = 0, 9 × 3 + 1, 3 = 4 et u2 = 0, 9 × 4 + 1, 3 = 4, 9. Au 2ème mois de la FAQ, la modélisation prévoit
     400 questions et au 3ème mois elle en prévoit 490.
                                                      100
  2. Notons, ∀n ∈ N, H(n) la propriété ”un = 13 −          × 0, 9n ”.
                                                       9
     Initialisation : u0 = 3 et 13 − 100
                                      9 × 0, 9 = 13 − 10 = 3. Donc H(1) est vraie.
     Hérédité : soit N ∈ N. Supposons que H(N ) est vraie, i.e. uN = 13 − 100 9 × 0, 9 . Montrons H(N + 1).
                                                                                      N

     On part de la définition de la suite
                                                     
                                          100                         100                        100
     uN +1 = 0, 9uN +1, 3 = 0, 9× 13 −         × 0, 9N +1, 3 = 11, 7−      ×0, 9N +1 +1, 3 = 13−     ×0, 9N +1
                                           9                           9                          9

     C’est H(N + 1) !
     Conclusion : on a prouvé que ∀n ∈ N, H(n) est vraie.
     La propriété est démontrée par principe de récurrence.
                       100                        100                        10
  3. un+1 − un = −         × (0, 9n+1 − 0, 9n ) =     × 0, 9n × (1 − 0, 9) =    × 0, 9n = 0, 9n−1 ≥ 0. Ainsi, la
                        9                          9                          9
     suite (un ) est croissante.
  4. Ce programme renvoie le premier rang N tel que uN > p. Dans le cas présent,
                         100                  100
     un > 8, 5 ⇐⇒ 13−        ×0, 9n > 8, 5 ⇐⇒     ×0, 9n < 4, 5 ⇐⇒ 0, 9n < 4, 5×0, 09 ⇐⇒ 0, 9n < 0, 405
                          9                    9

                                                       ∗,
     Par application du log strictement croissant sur R+

                                                                  log(0, 405)
                           n log(0, 9) < log(0, 405) ⇐⇒ n >                   ⇐⇒ n > 8, 57
                                                                   log(0, 9)

     Le programme renvoie donc N = 9.

Une autre modélisation
  1. v1 = 9 − 6 = 3, 00 et v2 = 9 − 6e−0,19 ≃ 4, 04.
  2. On cherche n tel que vn = 8, 5 :

                                                   0, 5                                        ln(12)
       9 − 6e−0,19(n−1) = 8, 5 ⇐⇒ e−0,19(n−1) =         ⇐⇒ −0, 19(n − 1) = − ln(12) ⇐⇒ n = 1 +
                                                    6                                           0, 19
     On trouve après calculs n = 15.




                                                       3

---

## Page 4

Comparaison des deux modèles
  1. Il s’agit de comparer les questions A.4. et B.2. . La première modélisation dépasse les 850 questions au
     9ème mois alors que la deuxième ne les dépasse qu’au 15ème mois. La première modélisation conduit
     donc à la modification la plus prématurée.
  2. Il s’agit en fait de calculer les limites des deux suites (un ) et (vn ). Le cours sur les suites géométriques
     nous assure que pour −1 < q < 1, lim q n = 0. Donc par opérations sur les limites
                                         n→+∞

                                                              100
                                             lim un = 13 −        × 0 = 13
                                           n→+∞                9
     De plus, on sait que lim exp(−n) = 0 donc par opérations sur les limites :
                           n→+∞

                                                lim vn = 9 − 6 × 0 = 9
                                              n→+∞

     La 1ère modélisation prévoit le plus de questions : au maximum 1300 alors que la 2ème modélisation
     n’en prévoit que 900.


Exercice 4
                    
        0      1        1
  1. E 0, C 1 et G 1.
        1      0        1
                                                    
                                                    0
  2. Il faut un point appartenant et (EC) : on a E 0. Il faut également un vecteur directeur de (EC) : on
                                                    1
                    
              1−0          1
        −−→
     a EC 1 − 0 =  1 . Une représentation paramètre de (EC) est donc
              0−1         −1
                                                     
                                  x = 0 + 1t          x =t
                                     y = 0 + 1t =⇒       y =t              t∈R
                                     z = 1 − 1t          z =1−t
                                                     
                                        
            1−1          0             0−1        −1
     −−→                        −−→                                                                 −−→
  3. GB 0 − 1 = −1 et GD 1 − 1 =  0  sont 2 vecteurs directeurs du plan (GBD) et EC est
            0−1         −1             0−1        −1
     un vecteur directeur de la droite (EC). Or,
                                   −−→ −−→
                                   GB · EC = 1 × 0 − 1 × 1 + (−1) × (−1) = 0
     De même,
                                  −−→ −−→
                                  GD · EC = 1 × (−1) + 0 × 1 + (−1) × (−1) = 0
            −−→                   −−→ −−→
     Ainsi, EC est orthogonal à GB et GD donc (EC) est orthogonal au plan (GBD).
                             
                              a
 4a. Un vecteur normal −  →
                          n  b  suffit généralement à caractériser un plan. Dans ce cas, l’équation cartésienne
                              c
     du plan est de la forme ax + by + cz + d = 0 avec d ∈ R.
                                               −−→
     Puisque (EC) est orthogonale à (BDG), EC est un vecteur normal à (BCG). Donc l’équation cartésienne
     de (BDG) est de la forme 1x + 1y − 1z + d = 0. Il reste à déterminer d. On sait qu’un point qui appartient
     au plan vérifie les coordonnées du plan. Or, B ∈ (BDG) donc
                            xB + yB − zB + d = 0 =⇒ 1 + 0 + 0 + d = 0 =⇒ d = −1
     Donc une équation cartésienne de (BDG) est x + y − z − 1 = 0.
 4b. I est l’intersection de (BDG) est de (EC). Il vérifie à la fois l’équation cartésienne de (BDG) et l’équation
     paramétrique de (EC). Ainsi,

                                                  tB + tB + tB − 2 = 0
                                                                                       
     
        xB + yB − zB − 1 = 0                
                                                                                        
                                                                                           3tB = 2
     
                         xB = tB
                                             
                                                                  xB = tB
                                                                                         
                                                                                             xB = tB                 2
                                         =⇒                                         =⇒                       =⇒ tB =
     
                         y B  = tB          
                                                                  y B   = tB            
                                                                                            y B  = tB               3
                          zB = 1 − tB                              zB = 1 − tB               zB = 1 − t B
                                                                                       


                                                       4

---

## Page 5

         
                                          2 2 1
   Les coordonnées de I sont donc I        ; ;   .
                                          3 3 3
                                                                                         
                                                                           2/3 − 0      2/3
                                                           −→          −→ 
4c. Un schéma permet de se rendre compte que d(E; GBD) = ||EI||EI. Or, EI 2/3 − 0 =  2/3 
                                                                           1/3 − 1     −2/3
    Donc,                                s     2     √
                                                2     2 3     2
                                    EI = 3 ×        =     =√
                                                3      3       3
5a. Pour montrer que BDG est équilatéral, il suffit de montrer que ses
                                                                      3 côtés sont de même
                                                                                          longueur.
                                                                                                    On
                                                                   −1            √ −−→      0
                                                              −−→
    calcule donc la norme des vecteurs associés aux 3 côtés : GD  0  de norme 2, GB −1 de norme
                                                                   −1                     −1
                
    √             1             √                                       √
           −−→
      2 et DB −1 de norme 2. Donc BDG est équilatéral de côté 2.
                  0
5b. Géométriquement, on a :
                                                 ABDG = 2ABJG
   Or, BJG est un triangle rectangle en J grâce aux propriétés sur les triangles équilatéraux. Donc en
   appliquant le théorème de Pythagore dans BJG, on trouve :
                                                                      r          r
                         2      2      2
                                                    p
                                                         2        2
                                                                            1      3
                       JG + JB = BG =⇒ JG = BG − JB = 2 − =
                                                                            2      2
                      √        √
   car JB = DB/2 = 2/2 = 1/ 2. Donc l’aire du triangle BJG est :
                                            √
                                JG × JB       3
                        ABJG =           =         (moitié de l’aire d’un rectangle)
                                   2         4
   Et donc,                                                   √
                                                               3
                                                     ABDG =
                                                              2
 6. Le tétraèdre EGBD a pour base BDG et pour hauteur relative EI. Donc,
                                                          √
                                      1                     3×2        1
                               VEBD = ABDG × EI =          √     √ =
                                      3                3× 2× 3         3




                                                      5
