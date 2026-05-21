# e3c-enseignement-scientifique-terminale-05472-sujet-officiel

> Source : `../../../../pdf_version/02_es_ponctuelle/e3c/2021/e3c-enseignement-scientifique-terminale-05472-sujet-officiel.pdf` — conversion Markdown (texte + visuels utiles).
> Stratégie : [STRATEGIE_MARKDOWN.md](../../../../STRATEGIE_MARKDOWN.md)

---

## Page 1

ÉVALUATIONS COMMUNES

      CLASSE :

      EC : ☐ EC1 ☐ EC2 ☒ EC3

      VOIE : ☒ Générale ☐ Technologique ☐ Toutes voies (LV)
      ENSEIGNEMENT : Enseignement scientifique
      DURÉE DE L’ÉPREUVE : --2h--
      Niveaux visés (LV) : LVA               LVB
      CALCULATRICE AUTORISÉE : ☒Oui ☐ Non

      DICTIONNAIRE AUTORISÉ :           ☐Oui ☒ Non



      ☐ Ce sujet contient des parties à rendre par le candidat avec sa copie. De ce fait, il ne peut être
      dupliqué et doit être imprimé pour chaque candidat afin d’assurer ensuite sa bonne numérisation.
      ☐ Ce sujet intègre des éléments en couleur. S’il est choisi par l’équipe pédagogique, il est
      nécessaire que chaque élève dispose d’une impression en couleur.

      ☐ Ce sujet contient des pièces jointes de type audio ou vidéo qu’il faudra télécharger et jouer le jour
      de l’épreuve.
      Nombre total de pages : 7




Page 1 / 7
                                                                            GTCENSC05472

---

## Page 2

Exercice 1 - Population de la France métropolitaine de 1946
      à 2050
      Sur 10 points


      Le tableau ci-dessous donne l’évolution de la population en France métropolitaine de
      1946 à 2013.
               Année       1946   1954   1962    1968   1975   1982    1990    1999   2006   2013
             Rang xi        0      8     16       22    29     36       44      53    60     67

             Population
             en millions   40,5   42,8   46,5    49,8   52,7   54,3    56 ,6   58,2   61,4   63,7
             yi

              Source INED ined.fr


      Afin de faire des prévisions, cette évolution est représentée par un nuage de points
      dans le but d’en faire un ajustement affine.
      Une équation de la droite d’ajustement du nuage est : y = 0,341x + 41,21
      1- Parmi les trois graphiques ci-dessous, quel est selon vous celui qui correspond à
      la droite d’ajustement trouvée ? Justifier.




               Graphique 1                      Graphique 2                    Graphique 3


      2- Après avoir déterminé le rang correspondant à l’année 2020, montrer, à l’aide de
      l’équation de la droite, que le modèle prévoit une population française de 66,4
      millions d’habitants à cette date.




Page 2 / 7
                                                                      GTCENSC05472

---

## Page 3

Le recensement effectué au cours de l’année 2020 montre que la population en
      France métropolitaine est de 64,9 millions d’habitants.

      3- Au-delà d’un écart supérieur à un million, ce modèle n’est pas valide. Conclure sur
      la validité du modèle en 2020. Justifier la réponse.
      Afin d’affiner les prévisions, il est envisagé de modifier le modèle précédent. Les
      relevés annuels de la population en France Métropolitaine de 2013 à 2020 sont
      donnés ci-dessous :

                           Année          2013 2014 2015 2016 2017 2018 2019 2020
                 Rang xi                   0       1     2      3       4     5      6      7
                 Population en millions
                 yi                       63,7     64   64,3   64,5   64,6   64,7   64,8   64,9

                source : ined.fr
      Une droite d’équation y = 0,163x + 63,87 correspond au nouveau modèle choisi pour
      les 30 années à venir.

      Nous souhaitons savoir à partir de quelle année la population en France
      métropolitaine dépassera, d’après le nouveau modèle, les 65,5 millions d’habitants.

                 Afin d’automatiser les calculs,
                 nous avons programmé la
                 fonction seuil_pop en langage
                 Python
                  ci-contre.


      4- Recopier parmi les quatre propositions suivantes celle qui correspond à la donnée
      manquante du programme :
                   Proposition a : pop = 0.163*n+0
                   Proposition b : pop = 0.163*n+63.87
                   Proposition c : pop = pop+1
                   Proposition d : pop = 0.163*pop+63.87

      5- À partir de quelle année la population en France métropolitaine dépassera-t-elle
      les 65,5 millions d’habitants ?


                                          Fin de l’exercice



Page 3 / 7
                                                                    GTCENSC05472

---

## Page 4

Exercice 2 - Réchauffement climatique et pêche au
             carrelet
             Sur 10 points


             La préfecture de Charente-Maritime annonce,
             fin 2020, la mise en vente de onze
             emplacements permettant la réalisation de
             pontons de pêche au carrelet sur 6 communes
             du littoral. La pêche au carrelet utilise un filet
             mis à l'eau à partir d’une cabane sur pilotis.
             Ces petites cabanes en bois perchées, construites sur les rochers ou la vase
             des zones côtières, font partie du patrimoine de Charente-Maritime et sont
             très recherchées. Elles transmettent souvent de génération en génération.
                                                                  D’après Franceinfo.fr / octobre 2020

             On cherche à comprendre les conséquences du réchauffement climatique sur
             le niveau marin et son impact sur le littoral, en particulier concernant la pêche
             au carrelet.


             Document 1 : variation du niveau des océans par dilatation thermique
             L’un des indicateurs du réchauffement climatique global est l’élévation du
             niveau marin. L’une des causes de cette augmentation est la dilatation
             thermique de l’eau.
             On peut modéliser les océans par un parallélépipède comme sur le schéma ci-
             dessous.




                  H= 300 à 500 m




Page 4 / 7
                                                                    GTCENSC05472

---

## Page 5

Seule la couche superficielle (de hauteur H = 300 à 500 m sur le schéma) est
             en fait sensible au réchauffement et donc impactée par cette dilatation
             thermique.
             On peut modéliser l’élévation du niveau marin (notée h sur le schéma) grâce à
             la formule suivante :
                                                                     h = a x H x DT
              avec a = coefficient de dilatation thermique et DT = variation de température



             Document 2 : scénarios du GIEC et projections climatiques
             Le 5ème rapport du GIEC (Groupe d'experts intergouvernemental sur l'évolution
             du climat) propose plusieurs scénarios, établis à l’aide de modélisations
             climatiques, en fonction du forçage radiatif estimé. Le scénario RCP 8.5
             (forçage de 8,5 W.m-2) est le plus pessimiste, mais c’est un scénario tout à fait
             envisageable car il correspond à la poursuite des émissions actuelles de gaz à
             effet de serre.
                          Augmentation moyenne du niveau marin (m)




                                                                                                Année

             Le graphique ci-dessous montre les prédictions de l’élévation du niveau marin
             (en m) dans le scénario RCP 8.5 d’ici à 2100.
             RCP (Representative Concentration Pathways) : profils représentatifs d'évolution de
             concentration de gaz à effet de serre

                                                                                      D’après Yale Climate connections.




Page 5 / 7
                                                                                      GTCENSC05472

---

## Page 6

1- Les scénarios RCP du GIEC prennent en compte les émissions anthropiques de
      gaz à effet de serre : citer deux des principaux gaz à effet de serre ainsi qu’une
      source liée à l’activité humaine pour chacun d’eux.

      2- Expliquer en quoi l’augmentation de la concentration des gaz à effet de serre
      provoque un réchauffement climatique.

      3- Dans le scénario RCP 8.5, on peut estimer qu’à l’horizon 2100, l’augmentation de
      la température moyenne des océans (DT) sera de l’ordre de 3°C. D’autre part, on
      considère que le coefficient de dilatation thermique des océans, dans la gamme des
      températures considérées, est a = 2,7x10-4 °C-1. On considère une hauteur H de la
      couche superficielle de l’océan de 500 m. Calculer l’élévation h du niveau marin en
      2100 selon le scénario RCP 8.5.

      4- Par lecture graphique, estimer le niveau d’élévation moyen prédit en 2100 par le
      scénario RCP 8.5.

      5- Indiquer si la dilatation thermique des océans est la seule cause de l’augmentation
      du niveau des océans. Justifier et proposer une autre cause possible.


      6- À partir de l’exploitation du document 3, discuter de la durabilité d’une cabane sur
      pilotis pour la pêche au carrelet dans le contexte du scénario RCP 8.5. Justifier.




Page 6 / 7
                                                                 GTCENSC05472

---

## Page 7

Document 3 : carte des terres émergées du littoral de Charente-Maritime en fonction
      de l’élévation du niveau marin.
                                                          Niveau actuel


                                                          Sur les cartes, les zones foncées
                                                          correspondent aux zones immergées
                                                          (sous l’eau) et les zones claires
                                                          correspondent aux terres émergées.




                                                          Le scénario RCP 8.5 prévoit une
                                                          augmentation de 3 m en 2250.


                                                                          D’après flood.firetree.net




                   Élévation de 1 m                          Élévation de 3 m en 2250
                                      Fin de l’exercice


Page 7 / 7
                                                             GTCENSC05472
