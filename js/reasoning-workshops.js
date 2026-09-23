(function(){var tasks=[
  {
    "id": "3e_pythagore",
    "question": "Une échelle de 5 m atteint une hauteur de 4 m contre un mur vertical. Le sol est horizontal. Détermine la distance du pied de l’échelle au mur et explique pourquoi le théorème choisi s’applique.",
    "correction": "Le mur et le sol forment un angle droit ; l’échelle est l’hypoténuse. Si x est la distance cherchée, x² + 4² = 5². Donc x² = 9 et x = 3 m, car une longueur est positive. Vérification : 3² + 4² = 25. La conclusion dépend des hypothèses de verticalité du mur et d’horizontalité du sol.",
    "criteria": [
      "Triangle rectangle justifié",
      "Équation et racine positive",
      "Conclusion avec unité"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  },
  {
    "id": "4e_statistiques",
    "question": "Les durées quotidiennes de trajet de cinq élèves sont 10, 10, 15, 20 et 95 minutes. Calcule moyenne et médiane. Explique laquelle décrit le mieux un trajet typique dans cet échantillon, sans généraliser à toute l’école.",
    "correction": "La somme vaut 150 minutes, donc la moyenne vaut 30 minutes. La liste est ordonnée ; la valeur centrale est 15 minutes. La médiane décrit ici mieux le centre des trajets observés, car la durée de 95 minutes tire la moyenne vers le haut. La moyenne reste correcte et utile pour d’autres objectifs, comme un temps total. Cinq élèves ne constituent pas nécessairement un échantillon représentatif.",
    "criteria": [
      "Deux calculs exacts",
      "Effet de la valeur extrême",
      "Limite de généralisation"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  },
  {
    "id": "5e_logique_preuve",
    "question": "Un élève affirme : « Si un entier est divisible par 4, alors il est pair ; donc tout entier pair est divisible par 4. » Distingue l’implication et sa réciproque. Réfute la conclusion par un contre-exemple et écris la contraposée de la première implication.",
    "correction": "Si n = 4k, alors n = 2(2k) : l’implication est vraie. Sa réciproque est fausse : 6 est pair mais non divisible par 4. La contraposée correcte est : si un entier n’est pas pair, alors il n’est pas divisible par 4. Un seul contre-exemple réfute une affirmation universelle ; vérifier quelques cas favorables ne la démontre pas.",
    "criteria": [
      "Implication et réciproque",
      "Contre-exemple valide",
      "Contraposée"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  },
  {
    "id": "6e_probabilites_conditionnelles",
    "question": "Dans un groupe fictif de 200 personnes, 40 pratiquent la natation. Parmi ces 40, 30 pratiquent aussi le vélo. Parmi les 160 autres, 80 pratiquent le vélo. Calcule P(vélo sachant natation) et P(natation sachant vélo). Explique pourquoi les dénominateurs diffèrent.",
    "correction": "P(V|N) = 30/40 = 0,75. Il y a 30 + 80 = 110 cyclistes ; P(N|V) = 30/110 = 3/11, soit environ 0,273. Le groupe de référence est celui imposé par la condition : nageurs dans le premier cas, cyclistes dans le second. L’intersection compte les mêmes 30 personnes mais les populations de référence ne sont pas les mêmes.",
    "criteria": [
      "Populations de référence",
      "Deux probabilités",
      "Différence expliquée"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  },
  {
    "id": "geo3_cartes",
    "question": "Sur une carte au 1:25 000, deux points sont distants de 6 cm en ligne droite. Calcule la distance réelle. Explique pourquoi cette mesure ne donne pas nécessairement la longueur du trajet à pied.",
    "correction": "1 cm représente 25 000 cm, soit 250 m. Donc 6 cm représentent 1 500 m, soit 1,5 km. Il s’agit d’une distance en ligne droite sur la représentation plane. Le trajet suit un réseau et peut contourner des obstacles ; le relief peut encore modifier la longueur. Il faut distinguer échelle, distance mesurée et itinéraire accessible.",
    "criteria": [
      "Conversion",
      "Résultat avec unité",
      "Distance et itinéraire distingués"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  },
  {
    "id": "geo4_eau",
    "question": "À partir du tableau fictif, calcule la variation du prélèvement total entre les deux années. Explique pourquoi cela ne suffit pas à conclure que la ressource est devenue durablement disponible.",
    "correction": "Les prélèvements passent de 60 + 20 + 20 = 100 à 50 + 25 + 25 = 100 millions de m³ par an : total inchangé. La répartition entre usages change. Pour juger la disponibilité, il faut aussi connaître les apports, les réserves, la saisonnalité, la qualité de l’eau et les besoins des milieux. Une stabilité des prélèvements ne prouve pas un équilibre avec la recharge.",
    "criteria": [
      "Sommes et unités",
      "Répartition distinguée du total",
      "Données manquantes"
    ],
    "options": [],
    "niveau": "Raisonnement guidé",
    "support": {
      "caption": "Données fictives — prélèvements annuels, millions de m³",
      "headers": [
        "Usage",
        "Année 1",
        "Année 2"
      ],
      "rows": [
        [
          "Agriculture",
          "60",
          "50"
        ],
        [
          "Industrie",
          "20",
          "25"
        ],
        [
          "Ménages",
          "20",
          "25"
        ]
      ]
    }
  },
  {
    "id": "geo5_inegalites",
    "question": "Compare les territoires fictifs A et B dans le tableau. Peut-on les classer sans nuance du « plus développé » au « moins développé » ? Construis une réponse avec deux indicateurs et une limite.",
    "correction": "A possède un revenu moyen plus élevé, mais B une espérance de vie plus grande. Le classement dépend donc de la dimension étudiée. Le revenu moyen ne renseigne pas à lui seul sur sa répartition. Il faudrait connaître notamment les inégalités et l’accès aux services ; on ne peut calculer un indice composite complet avec ces deux valeurs. Les unités, la même année de référence et la comparabilité sont nécessaires.",
    "criteria": [
      "Deux indicateurs comparés",
      "Classement nuancé",
      "Limite de la moyenne"
    ],
    "options": [],
    "niveau": "Raisonnement guidé",
    "support": {
      "caption": "Données fictives — même année et définitions comparables",
      "headers": [
        "Territoire",
        "Revenu moyen annuel (unités monétaires)",
        "Espérance de vie (années)"
      ],
      "rows": [
        [
          "A",
          "30 000",
          "72"
        ],
        [
          "B",
          "20 000",
          "79"
        ]
      ]
    }
  },
  {
    "id": "geo6_sig",
    "question": "Deux couches cartographiques d’une même commune représentent les logements en 2024 et les zones inondées lors d’un événement en 2010. Explique l’intérêt de leur superposition et trois précautions avant de compter les logements exposés.",
    "correction": "La superposition localise des logements actuels dans l’emprise d’un événement passé. Il faut vérifier le système de coordonnées, la précision et la résolution des données, puis l’écart temporel et les modifications du territoire. L’emprise de 2010 ne constitue pas à elle seule la carte de tous les événements futurs. Le comptage mesure une intersection selon ces données, pas une probabilité individuelle d’inondation.",
    "criteria": [
      "Intérêt de la superposition",
      "Trois précautions",
      "Exposition et probabilité distinguées"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  },
  {
    "id": "lib_chimie_4e_2",
    "question": "On veut préparer 100 mL de solution à 0,10 mol/L à partir d’une solution mère à 0,50 mol/L. Calcule le volume à prélever puis décris la préparation avec le matériel volumétrique approprié.",
    "correction": "La conservation du soluté donne C₁V₁ = C₂V₂ : V₁ = 0,10 × 100/0,50 = 20 mL. On prélève 20 mL avec une pipette jaugée et une propipette, puis on transfère dans une fiole jaugée de 100 mL. On ajoute le solvant, homogénéise et ajuste au trait avant une dernière homogénéisation. On ne doit pas simplement ajouter 100 mL de solvant. Les protections dépendent de la solution utilisée.",
    "criteria": [
      "Conservation et calcul",
      "Pipette et fiole",
      "Volume final et sécurité"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  },
  {
    "id": "lib_chimie_5e_3",
    "question": "Deux expériences utilisent la même masse d’un solide et le même volume d’acide à même concentration et température. Dans A, le solide est en un morceau ; dans B, il est en poudre. Le dégagement gazeux commence plus rapidement dans B. Propose une explication et une limite de cette observation.",
    "correction": "La poudre offre généralement une surface de contact plus grande : davantage de sites sont accessibles simultanément, ce qui peut accélérer la réaction. Il faut maintenir les autres variables et répéter les mesures. Le début plus rapide ne prouve pas que la quantité finale de gaz sera plus grande : celle-ci dépend des quantités initiales, de la stœchiométrie et de l’avancement final. Vitesse et bilan final sont distincts.",
    "criteria": [
      "Surface et vitesse reliées",
      "Variables contrôlées",
      "Vitesse distincte de quantité finale"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  },
  {
    "id": "lib_physique_4e_4",
    "question": "Une onde parcourt 12 m en 3 s et sa période vaut 0,50 s. Calcule sa célérité, sa fréquence et sa longueur d’onde. Précise les unités et explique ce qui se propage.",
    "correction": "v = 12/3 = 4 m/s. f = 1/T = 2 Hz. λ = v/f = 2 m. La période mesure un temps et la longueur d’onde une distance : elles ne se lisent pas sur le même type d’axe. Dans une onde mécanique, une perturbation et de l’énergie se propagent sans déplacement global de matière sur tout le trajet.",
    "criteria": [
      "Trois calculs",
      "Unités correctes",
      "Propagation expliquée"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  },
  {
    "id": "lib_physique_5e_5",
    "question": "Un objet de 2 kg descend de 3 m sans vitesse initiale. Prends g = 10 m/s². Calcule sa vitesse finale sans frottement. En réalité, elle vaut 6 m/s : quelle énergie mécanique a été dissipée et sous quelle forme peut-elle être transférée ?",
    "correction": "Sans frottement, mgh = mv²/2 donne v = √60 ≈ 7,75 m/s. L’énergie potentielle initiale vaut 60 J. Avec v = 6 m/s, l’énergie cinétique finale vaut 36 J. La différence de 24 J est dissipée, principalement en énergie interne des surfaces et de l’environnement. L’énergie totale n’est pas détruite ; c’est l’énergie mécanique du système choisi qui diminue.",
    "criteria": [
      "Bilan idéal",
      "Bilan réel",
      "Dissipation sans destruction"
    ],
    "options": [],
    "niveau": "Raisonnement guidé"
  }
];tasks.forEach(function(t){var ch=findChapter(t.id);if(!ch)throw Error("Chapitre absent : "+t.id);ch.exercices.push(t);});})();
