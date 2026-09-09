/* =========================================================
   BIOLOGIE — 3e À 6e — SCIENCES DE BASE ET GÉNÉRALES
   ========================================================= */

var BIO_CHAPITRES = {};

(function () {
    var definitions = {
  "3e": [
    [
      "bio3_cellule",
      "1. La cellule et le microscope",
      "🔬",
      "Commun",
      [
        "théorie cellulaire",
        "microscope",
        "membrane",
        "cytoplasme",
        "noyau",
        "organites"
      ],
      "La cellule est l’unité structurale et fonctionnelle du vivant. L’observation microscopique permet de comparer cellules animales, végétales et microbiennes.",
      "Préparer une lame, régler du faible au fort grossissement, observer puis réaliser un dessin scientifique légendé."
    ],
    [
      "bio3_organisation",
      "2. Niveaux d’organisation du vivant",
      "🧩",
      "Commun",
      [
        "cellule",
        "tissu",
        "organe",
        "système",
        "organisme",
        "spécialisation"
      ],
      "Chez les organismes pluricellulaires, les cellules spécialisées coopèrent dans des tissus, organes et systèmes.",
      "Relier la forme d’une cellule à sa fonction et replacer chaque structure dans son niveau d’organisation."
    ],
    [
      "bio3_nutrition",
      "3. Alimentation, digestion et nutriments",
      "🍎",
      "Commun",
      [
        "aliments",
        "nutriments",
        "enzymes digestives",
        "absorption intestinale",
        "villosités",
        "équilibre alimentaire"
      ],
      "La digestion transforme les aliments en nutriments absorbables, ensuite distribués aux cellules.",
      "Suivre le trajet d’un aliment, distinguer transformations mécaniques et chimiques, puis expliquer l’absorption."
    ],
    [
      "bio3_respiration",
      "4. Respiration et échanges gazeux",
      "🫁",
      "Commun",
      [
        "ventilation",
        "alvéoles",
        "dioxygène",
        "dioxyde de carbone",
        "diffusion",
        "respiration cellulaire"
      ],
      "La ventilation renouvelle l’air des poumons et les alvéoles assurent les échanges entre air et sang.",
      "Comparer air inspiré et expiré et relier les échanges pulmonaires aux besoins énergétiques des cellules."
    ],
    [
      "bio3_circulation",
      "5. Circulation, sang et excrétion",
      "❤️",
      "Commun",
      [
        "cœur",
        "vaisseaux",
        "sang",
        "double circulation",
        "reins",
        "urine"
      ],
      "Le système circulatoire transporte gaz, nutriments, déchets et signaux; les reins régulent le milieu intérieur.",
      "Lire un schéma de circulation, distinguer artères, veines et capillaires, puis suivre l’élimination d’un déchet."
    ],
    [
      "bio3_photosynthese",
      "6. Photosynthèse et respiration végétale",
      "🌿",
      "Commun",
      [
        "chloroplaste",
        "chlorophylle",
        "lumière",
        "glucose",
        "photosynthèse",
        "respiration"
      ],
      "Les végétaux chlorophylliens utilisent lumière, eau et dioxyde de carbone pour produire de la matière organique.",
      "Interpréter une expérience contrôlée montrant le rôle de la lumière ou du dioxyde de carbone."
    ],
    [
      "bio3_ecosysteme",
      "7. Écosystèmes et transferts d’énergie",
      "🌱",
      "Commun",
      [
        "biotope",
        "biocénose",
        "producteur",
        "consommateur",
        "décomposeur",
        "réseau trophique"
      ],
      "Un écosystème associe un milieu et des êtres vivants reliés par des flux de matière et d’énergie.",
      "Construire un réseau trophique, prévoir l’effet d’une perturbation et distinguer matière recyclée et énergie dissipée."
    ]
  ],
  "4e": [
    [
      "bio4_biodiversite",
      "1. Biodiversité et classification",
      "🦋",
      "Commun",
      [
        "espèce",
        "caractère",
        "classification",
        "parenté",
        "biodiversité génétique",
        "biodiversité spécifique"
      ],
      "La classification scientifique traduit des parentés à partir de caractères partagés et emboîtés.",
      "Comparer des caractères, construire des groupes emboîtés et distinguer ressemblance et parenté."
    ],
    [
      "bio4_reproduction",
      "2. Reproduction humaine",
      "👶",
      "Commun",
      [
        "gamètes",
        "fécondation",
        "cycle ovarien",
        "grossesse",
        "placenta",
        "naissance"
      ],
      "La reproduction sexuée réunit deux gamètes et produit un nouvel individu génétiquement original.",
      "Ordonner les étapes de la gamétogenèse à la naissance et relier cycles ovarien et utérin."
    ],
    [
      "bio4_sexualite",
      "3. Sexualité responsable et santé",
      "🛡️",
      "Commun",
      [
        "contraception",
        "préservatif",
        "IST",
        "dépistage",
        "consentement",
        "prévention"
      ],
      "La santé sexuelle repose sur l’information scientifique, la prévention, le consentement et l’accès aux soins.",
      "Comparer les moyens contraceptifs sans les confondre avec la protection contre les infections."
    ],
    [
      "bio4_division",
      "4. Cycle cellulaire, mitose et méiose",
      "♻️",
      "Sciences générales",
      [
        "cycle cellulaire",
        "chromosome",
        "réplication",
        "mitose",
        "méiose",
        "brassage génétique"
      ],
      "La mitose conserve l’information génétique; la méiose produit des gamètes haploïdes et crée de la diversité.",
      "Comparer nombre de divisions, cellules produites, nombre de chromosomes et rôle biologique."
    ],
    [
      "bio4_genetique",
      "5. Introduction à l’hérédité",
      "🧬",
      "Commun",
      [
        "ADN",
        "gène",
        "allèle",
        "chromosome",
        "génotype",
        "phénotype"
      ],
      "Les caractères dépendent de l’expression de gènes et de l’environnement. Les allèles sont des versions d’un gène.",
      "Passer d’un caryotype ou arbre familial à une hypothèse simple de transmission."
    ],
    [
      "bio4_nerveux",
      "6. Système nerveux et organes des sens",
      "🧠",
      "Commun",
      [
        "neurone",
        "message nerveux",
        "synapse",
        "récepteur sensoriel",
        "réflexe",
        "cerveau"
      ],
      "Le système nerveux reçoit des informations, les traite et commande des réponses rapides.",
      "Analyser un arc réflexe et distinguer récepteur, centre nerveux et effecteur."
    ],
    [
      "bio4_hormones",
      "7. Régulation hormonale et homéostasie",
      "⚗️",
      "Sciences générales",
      [
        "hormone",
        "glande endocrine",
        "organe cible",
        "glycémie",
        "rétrocontrôle",
        "homéostasie"
      ],
      "Les hormones coordonnent à distance des organes et participent au maintien de paramètres internes stables.",
      "Lire un graphique hormonal et construire une boucle simple de rétrocontrôle."
    ]
  ],
  "5e": [
    [
      "bio5_adn",
      "1. ADN, chromosomes et réplication",
      "🧬",
      "Commun",
      [
        "nucléotide",
        "double hélice",
        "complémentarité",
        "chromatine",
        "chromosome",
        "réplication"
      ],
      "L’ADN porte l’information génétique dans sa séquence de nucléotides et se copie avant une division.",
      "Construire le brin complémentaire et expliquer le caractère semi-conservatif de la réplication."
    ],
    [
      "bio5_proteines",
      "2. Expression des gènes et protéines",
      "🏗️",
      "Commun",
      [
        "transcription",
        "ARN messager",
        "codon",
        "traduction",
        "ribosome",
        "protéine"
      ],
      "L’information d’un gène est transcrite en ARN puis traduite en séquence d’acides aminés.",
      "Utiliser le code génétique pour passer d’une séquence d’ARN à une chaîne polypeptidique."
    ],
    [
      "bio5_mendel",
      "3. Génétique mendélienne",
      "🫛",
      "Commun",
      [
        "dominant",
        "récessif",
        "homozygote",
        "hétérozygote",
        "échiquier de croisement",
        "arbre généalogique"
      ],
      "Les modèles mendéliens prédisent la transmission de certains caractères contrôlés par un gène.",
      "Définir les allèles, écrire les génotypes, construire le croisement et interpréter les proportions."
    ],
    [
      "bio5_mutations",
      "4. Mutations et maladies génétiques",
      "⚠️",
      "Commun",
      [
        "mutation ponctuelle",
        "insertion",
        "délétion",
        "mutagène",
        "cancer",
        "diagnostic génétique"
      ],
      "Une mutation modifie l’ADN; ses effets dépendent de sa position, du type de cellule et de la protéine concernée.",
      "Comparer séquences normale et mutée puis relier la modification à ses conséquences possibles."
    ],
    [
      "bio5_metabolisme",
      "5. Enzymes, métabolisme et ATP",
      "⚡",
      "Sciences générales",
      [
        "enzyme",
        "substrat",
        "site actif",
        "température",
        "pH",
        "ATP"
      ],
      "Les enzymes accélèrent des réactions spécifiques; l’ATP assure des transferts d’énergie dans la cellule.",
      "Analyser l’effet d’un facteur sur une activité enzymatique avec témoin et variables contrôlées."
    ],
    [
      "bio5_immunite",
      "6. Immunité et vaccination",
      "💉",
      "Commun",
      [
        "barrière",
        "inflammation",
        "phagocytose",
        "lymphocyte",
        "anticorps",
        "mémoire immunitaire"
      ],
      "L’immunité innée agit rapidement; l’immunité adaptative cible un antigène et construit une mémoire.",
      "Comparer réponse primaire et secondaire et expliquer le principe de la vaccination."
    ],
    [
      "bio5_microbes",
      "7. Microorganismes, infections et antibiotiques",
      "🦠",
      "Commun",
      [
        "bactérie",
        "virus",
        "champignon",
        "transmission",
        "antibiotique",
        "résistance"
      ],
      "Les microorganismes sont divers; certains sont utiles, d’autres pathogènes. Les antibiotiques n’agissent pas sur les virus.",
      "Identifier une voie de transmission et proposer une prévention fondée sur le cycle infectieux."
    ]
  ],
  "6e": [
    [
      "bio6_evolution",
      "1. Évolution : preuves et sélection naturelle",
      "🐦",
      "Commun",
      [
        "variation",
        "sélection naturelle",
        "adaptation",
        "fossile",
        "homologie",
        "ancêtre commun"
      ],
      "L’évolution correspond aux changements héréditaires des populations; la sélection favorise certains phénotypes dans un milieu donné.",
      "Relier variation héréditaire, succès reproducteur et modification des fréquences au fil des générations."
    ],
    [
      "bio6_population",
      "2. Génétique des populations et spéciation",
      "🧬",
      "Sciences générales",
      [
        "fréquence allélique",
        "dérive génétique",
        "flux génique",
        "sélection",
        "isolement reproductif",
        "spéciation"
      ],
      "Mutation, sélection, dérive et migrations modifient les fréquences alléliques et peuvent conduire à de nouvelles espèces.",
      "Comparer plusieurs mécanismes évolutifs et expliquer comment un isolement limite le flux génique."
    ],
    [
      "bio6_ecologie",
      "3. Dynamique des populations",
      "📈",
      "Sciences générales",
      [
        "population",
        "capacité limite",
        "croissance exponentielle",
        "croissance logistique",
        "compétition",
        "prédation"
      ],
      "La taille d’une population varie selon ressources, interactions, migrations, naissances et décès.",
      "Lire une courbe de croissance et identifier les facteurs dépendants ou indépendants de la densité."
    ],
    [
      "bio6_cycles",
      "4. Cycles du carbone, de l’azote et de l’eau",
      "🔄",
      "Commun",
      [
        "réservoir",
        "flux",
        "cycle du carbone",
        "cycle de l’azote",
        "cycle de l’eau",
        "activité humaine"
      ],
      "La matière circule entre atmosphère, hydrosphère, sols et êtres vivants grâce à des processus biologiques et géologiques.",
      "Construire un schéma de cycle et repérer les flux modifiés par les activités humaines."
    ],
    [
      "bio6_impacts",
      "5. Impacts humains et conservation",
      "🌍",
      "Commun",
      [
        "fragmentation",
        "pollution",
        "surexploitation",
        "espèce invasive",
        "restauration",
        "service écosystémique"
      ],
      "Les activités humaines modifient les habitats et la biodiversité; prévention, restauration et gestion durable réduisent les impacts.",
      "Analyser une situation avec indicateurs, acteurs, causes, conséquences et solutions évaluables."
    ],
    [
      "bio6_biotech",
      "6. Biotechnologies et bioéthique",
      "🧪",
      "Sciences générales",
      [
        "PCR",
        "séquençage",
        "OGM",
        "édition génomique",
        "thérapie génique",
        "bioéthique"
      ],
      "Les biotechnologies utilisent ou modifient le vivant pour diagnostiquer, produire ou soigner, avec bénéfices, risques et choix éthiques.",
      "Distinguer fonctionnement scientifique, efficacité, risque et jugement éthique dans une argumentation."
    ],
    [
      "bio6_sante",
      "7. Physiologie intégrée, épidémiologie et santé",
      "🏥",
      "Commun",
      [
        "homéostasie",
        "facteur de risque",
        "incidence",
        "prévalence",
        "corrélation",
        "causalité"
      ],
      "La santé dépend d’interactions entre physiologie, comportements, environnement et déterminants sociaux.",
      "Interpréter une étude de santé, comparer groupes et distinguer corrélation statistique et causalité."
    ]
  ]
};

    function list(items) {
        return '<ul>' + items.map(function (item) {
            return '<li>' + item + '</li>';
        }).join('') + '</ul>';
    }

    Object.keys(definitions).forEach(function (annee) {
        BIO_CHAPITRES[annee] = definitions[annee].map(function (d) {
            return {
                id: d[0],
                titre: d[1],
                icone: d[2],
                parcours: d[3],
                niveau: annee,
                color: '#8b5cf6',
                desc: d[3] + ' — ' + d[5],
                matieres: d[4],
                objectifs: [
                    'Définir et relier les notions essentielles',
                    'Interpréter des observations, expériences ou documents',
                    'Construire une explication biologique rigoureuse',
                    'Mobiliser les acquis dans une situation nouvelle'
                ],
                cours:
                    '<h4>🔹 Notions essentielles</h4>' + list(d[4]) +
                    '<h4>🔹 Cours</h4><p>' + d[5] + '</p>' +
                    '<h4>🔹 Méthode scientifique</h4><p>' + d[6] + '</p>' +
                    '<h4>🔹 Approfondissement</h4><p>Relier les mécanismes aux niveaux moléculaire, cellulaire, organique et environnemental. En sciences générales, justifier les modèles avec des données quantitatives et discuter leurs limites.</p>' +
                    '<h4>🔹 Pièges classiques</h4><div class="piege">' +
                        list(['Confondre observation et interprétation.', 'Réciter une définition sans expliquer le mécanisme.', 'Conclure sans témoin, donnée ou argument scientifique.']) +
                    '</div>' +
                    '<h4>🔹 Check-list</h4><div class="checklist">' +
                        list(['Je maîtrise le vocabulaire.', 'Je sais annoter ou construire un schéma.', 'Je peux analyser une expérience.', 'Je sais justifier ma conclusion.']) +
                    '</div>',
                exercices: []
            };
        });
    });
})();
