// =========================================================
// DONNÉES DU PROGRAMME DE GÉOGRAPHIE
// Édition CESS - Enrichie
// =========================================================

var GEO_CHAPITRES = {

    // =====================================================
    // 3e
    // =====================================================

    '3e': [

        {
            id: 'geo3_risques',
            titre: "1. Risques naturels & technologiques",
            desc: "UAA2 - Les aléas, la vulnérabilité et la gestion des risques.",
            niveau: '3e',
            icone: '🌋',
            color: '#c0392b',

            cours: `
                <h4>🔹 Lire les risques — L'exemple de Mocoa</h4>

                <p>
                    En avril 2017, une coulée de boue a tué plus de
                    300 personnes à Mocoa (Colombie). Ce n'est pas
                    seulement un phénomène naturel, c'est un
                    <b>risque</b>.
                </p>

                <p>
                    <b>
                        Risque = Aléa × Vulnérabilité
                    </b>
                </p>

                <p>
                    Exemple : pluies torrentielles + construction
                    en zone exposée.
                </p>

                <br>

                <h4>🔹 Les types d'aléas</h4>

                <ul>
                    <li>
                        <b>Naturels :</b>
                        séismes, volcans, inondations, cyclones,
                        sécheresses.
                    </li>

                    <li>
                        <b>Technologiques :</b>
                        rupture de barrage, accident nucléaire,
                        pollution industrielle.
                    </li>
                </ul>

                <br>

                <h4>🔹 Vulnérabilité et résilience</h4>

                <p>
                    La <b>vulnérabilité</b> est la fragilité d'un
                    territoire : densité de population, qualité
                    des bâtiments, préparation des populations...
                </p>

                <p>
                    La <b>résilience</b> est la capacité d'un
                    territoire à se relever après une catastrophe :
                    plans d'évacuation, assurances, reconstruction...
                </p>
            `,

            objectifs: [
                'Distinguer aléa, risque et vulnérabilité',
                'Expliquer la répartition de la population à risque',
                'Lire une carte des aléas et la croiser avec la densité'
            ],

            matieres: [
                'Aléas naturels et technologiques',
                'Vulnérabilité et résilience',
                'Gestion du risque et aménagement'
            ],

            exercices: [
                {
                    question: 'Un aléa est...',
                    options: [
                        'Un phénomène dangereux potentiel',
                        'Un dégât causé',
                        'La population touchée',
                        'Une zone inondable'
                    ],
                    correct: 0,
                    correction:
                        "L'aléa est le phénomène dangereux potentiel."
                },

                {
                    question: "La vulnérabilité d'un territoire dépend...",
                    options: [
                        'De sa densité de population et de ses infrastructures',
                        'De son climat uniquement',
                        'De sa latitude',
                        'De son PIB'
                    ],
                    correct: 0,
                    correction:
                        "La vulnérabilité est liée notamment aux enjeux humains et aux infrastructures."
                }
            ]
        },


        {
            id: 'geo3_volcans',
            titre: "2. Séismes & Volcans",
            desc: "UAA2 - La tectonique des plaques et les zones à risque.",
            niveau: '3e',
            icone: '🌍',
            color: '#e53e3e',

            cours: `
                <h4>🔹 La tectonique des plaques</h4>

                <p>
                    La plupart des séismes et des volcans se situent
                    aux <b>frontières des plaques tectoniques</b> :
                    zones de convergence, divergence ou coulissage.
                </p>

                <br>

                <h4>🔹 Le Cercle de feu du Pacifique</h4>

                <p>
                    Il entoure l'océan Pacifique et correspond à
                    de nombreuses zones de forte activité tectonique.
                    Le Japon, l'Indonésie et le Chili sont notamment
                    très exposés.
                </p>

                <br>

                <h4>🔹 Le vocabulaire sismique</h4>

                <ul>
                    <li>
                        <b>Épicentre :</b>
                        point en surface situé au-dessus du foyer
                        du séisme et où les effets peuvent être
                        particulièrement importants.
                    </li>

                    <li>
                        <b>Magnitude :</b>
                        mesure de l'énergie libérée par un séisme.
                    </li>

                    <li>
                        <b>Tsunami :</b>
                        série de vagues pouvant être provoquée par
                        un déplacement brutal du fond marin,
                        notamment lors d'un séisme sous-marin.
                    </li>

                    <li>
                        <b>Nuée ardente :</b>
                        nuage très chaud de gaz, cendres et matériaux
                        volcaniques se déplaçant rapidement sur les
                        pentes d'un volcan.
                    </li>
                </ul>
            `,

            objectifs: [
                'Expliquer les séismes par la tectonique des plaques',
                'Utiliser le vocabulaire : épicentre, magnitude, tsunami',
                'Comparer la localisation des séismes et des volcans'
            ],

            matieres: [
                'Tectonique des plaques',
                'Zones de subduction et de divergence',
                'Volcanisme effusif et explosif'
            ],

            exercices: [
                {
                    question:
                        'À quoi est principalement liée la répartition des séismes et des volcans ?',

                    options: [
                        'Aux frontières des plaques',
                        "À la proximité de l'équateur",
                        "À l'altitude",
                        'Aux grands fleuves'
                    ],

                    correct: 0,

                    correction:
                        'Les plaques tectoniques expliquent une grande partie de leur localisation.'
                },

                {
                    question:
                        'Un tsunami peut être causé par...',

                    options: [
                        'Un séisme sous-marin',
                        'Une tempête uniquement',
                        'Une variation de température',
                        'Un courant marin normal'
                    ],

                    correct: 0,

                    correction:
                        "Un tsunami peut notamment être provoqué par un séisme sous-marin entraînant un déplacement brutal de l'eau."
                }
            ]
        },


        {
            id: 'geo3_climats',
            titre: "3. Climats & Bioclimats",
            desc: "UAA1 - Les climats et les milieux naturels.",
            niveau: '3e',
            icone: '🌡️',
            color: '#38a169',

            cours: `
                <h4>🔹 Facteurs climatiques</h4>

                <ul>
                    <li>
                        <b>Latitude :</b>
                        la température moyenne varie selon la distance
                        à l'équateur.
                    </li>

                    <li>
                        <b>Altitude :</b>
                        la température diminue généralement avec
                        l'altitude.
                    </li>

                    <li>
                        <b>Continentalité :</b>
                        l'éloignement de la mer augmente généralement
                        les écarts de température.
                    </li>

                    <li>
                        <b>Courants marins :</b>
                        ils influencent les températures des régions
                        côtières.
                    </li>
                </ul>

                <br>

                <h4>🔹 Les grands types de climats</h4>

                <ul>
                    <li>
                        <b>Équatorial :</b>
                        chaud et humide toute l'année.
                    </li>

                    <li>
                        <b>Tropical :</b>
                        alternance entre saison sèche et saison humide.
                    </li>

                    <li>
                        <b>Désertique :</b>
                        très faibles précipitations.
                    </li>

                    <li>
                        <b>Méditerranéen :</b>
                        étés chauds et secs, hivers plus doux et humides.
                    </li>

                    <li>
                        <b>Océanique :</b>
                        températures relativement modérées et
                        précipitations régulières.
                    </li>

                    <li>
                        <b>Continental :</b>
                        écarts de température plus importants entre
                        les saisons.
                    </li>

                    <li>
                        <b>Polaire :</b>
                        températures très faibles une grande partie
                        de l'année.
                    </li>
                </ul>
            `,

            objectifs: [
                'Identifier les facteurs climatiques',
                'Relier climat et paysage naturel',
                'Lire un diagramme ombrothermique'
            ],

            matieres: [
                'Facteurs du climat',
                'Zones climatiques et biomes',
                'Cartes climatiques'
            ],

            exercices: [
                {
                    question:
                        'Quel climat caractérise principalement la Belgique ?',

                    options: [
                        'Océanique',
                        'Méditerranéen',
                        'Désertique',
                        'Tropical'
                    ],

                    correct: 0,

                    correction:
                        'La Belgique connaît un climat tempéré de type océanique.'
                },

                {
                    question:
                        "Quel facteur climatique est directement lié à la hauteur d'un lieu ?",

                    options: [
                        "L'altitude",
                        'La longitude',
                        'La continentalité',
                        'La population'
                    ],

                    correct: 0,

                    correction:
                        "L'altitude influence notamment la température."
                }
            ]
        },


        {
            id: 'geo3_fonctions',
            titre: "4. Les fonctions du territoire",
            desc: "UAA3 - Logement, emploi, transport, tourisme.",
            niveau: '3e',
            icone: '🏙️',
            color: '#3182ce',

            cours: `
                <h4>🔹 Qu'est-ce qu'une fonction ?</h4>

                <p>
                    Une fonction est un usage du territoire :
                    <b>
                        logement, santé, emploi, tourisme,
                        loisir, transport, information...
                    </b>
                </p>

                <p>
                    Ces fonctions sont inégalement réparties
                    dans l'espace.
                </p>

                <br>

                <h4>🔹 Les facteurs de localisation</h4>

                <p>
                    Une activité peut s'installer dans un lieu
                    en raison de différents <b>atouts</b> :
                    main-d'œuvre, transports, proximité des clients,
                    ressources, espace disponible...
                </p>

                <p>
                    Elle peut également être limitée par des
                    <b>contraintes</b> :
                    coût du terrain, réglementation, nuisances,
                    accessibilité...
                </p>

                <br>

                <h4>🔹 L'étalement urbain</h4>

                <p>
                    La croissance des villes vers les périphéries
                    peut créer des <b>migrations pendulaires</b>
                    entre le domicile et le lieu de travail.
                </p>

                <p>
                    Cela peut augmenter les
                    <b>distances-temps</b> et les déplacements.
                </p>
            `,

            objectifs: [
                "Identifier les fonctions d'un territoire",
                'Analyser les facteurs de localisation',
                'Comprendre le rôle des infrastructures de transport'
            ],

            matieres: [
                'Fonctions du territoire',
                'Facteurs de localisation',
                'Réseaux de transport'
            ],

            exercices: [
                {
                    question:
                        'La fonction "santé" correspond notamment à...',

                    options: [
                        'Les hôpitaux et cliniques',
                        'Les bureaux et entreprises',
                        'Les parcs et jardins',
                        'Les routes et autoroutes'
                    ],

                    correct: 0,

                    correction:
                        'Les hôpitaux et cliniques participent à la fonction santé.'
                }
            ]
        }

    ],


    // =====================================================
    // 4e
    // =====================================================

    '4e': [

        {
            id: 'geo4_eau',
            titre: "1. L'accès à l'eau",
            desc: "UAA1 - L'inégale répartition de l'eau et le stress hydrique.",
            niveau: '4e',
            icone: '💧',
            color: '#1d4ed8',

            cours: `
                <h4>🔹 L'eau, une ressource vitale</h4>

                <p>
                    L'eau douce représente une faible partie de
                    l'ensemble de l'eau présente sur Terre et sa
                    disponibilité varie fortement selon les régions.
                </p>

                <p>
                    Certaines régions connaissent un
                    <b>stress hydrique</b> lorsque les ressources
                    disponibles sont insuffisantes par rapport
                    aux besoins.
                </p>

                <br>

                <h4>🔹 Le bassin hydrographique</h4>

                <p>
                    Le <b>bassin versant</b> d'un cours d'eau est
                    l'ensemble du territoire dont les eaux
                    s'écoulent vers ce cours d'eau.
                </p>

                <p>
                    Les territoires situés en amont et en aval
                    peuvent dépendre de la même ressource, ce qui
                    peut provoquer des tensions ou nécessiter une
                    coopération.
                </p>

                <br>

                <h4>🔹 L'exemple de Mexico</h4>

                <p>
                    Mexico dépend fortement des eaux souterraines.
                    Le pompage important des nappes peut contribuer
                    à l'affaissement du sol.
                </p>

                <br>

                <h4>🔹 Gérer la ressource</h4>

                <p>
                    La gestion de l'eau nécessite des infrastructures
                    et des politiques adaptées :
                    barrages, réseaux, traitement des eaux,
                    économies d'eau, protection des nappes...
                </p>
            `,

            objectifs: [
                "Décrire la répartition de la ressource en eau",
                'Expliquer le concept de stress hydrique',
                "Analyser les conflits d'usage de l'eau"
            ],

            matieres: [
                'Bassins hydrographiques et nappes aquifères',
                'Stress hydrique',
                "Gestion de l'eau et aménagements"
            ],

            exercices: [
                {
                    question:
                        'Une nappe aquifère est...',

                    options: [
                        "Une réserve d'eau souterraine",
                        'Un fleuve',
                        'Un lac de barrage',
                        'Une usine de dessalement'
                    ],

                    correct: 0,

                    correction:
                        "Une nappe aquifère est une réserve d'eau souterraine."
                },

                {
                    question:
                        'Pourquoi Mexico connaît-elle un problème lié aux eaux souterraines ?',

                    options: [
                        'À cause notamment du pompage important des nappes',
                        'Parce que la ville est située sur un océan',
                        'Parce qu’il ne pleut jamais',
                        'À cause uniquement des glaciers'
                    ],

                    correct: 0,

                    correction:
                        "Le pompage important des nappes peut provoquer un affaissement du sol."
                }
            ]
        },


        {
            id: 'geo4_nourriture',
            titre: "2. L'accès à la nourriture",
            desc: "UAA1 - Les systèmes agricoles et la sécurité alimentaire.",
            niveau: '4e',
            icone: '🌾',
            color: '#d69e2e',

            cours: `
                <h4>🔹 Les types d'agriculture</h4>

                <ul>
                    <li>
                        <b>Vivrière :</b>
                        production destinée principalement à
                        nourrir la famille ou la population locale.
                    </li>

                    <li>
                        <b>Commerciale :</b>
                        production destinée à la vente.
                    </li>

                    <li>
                        <b>Intensive :</b>
                        recherche de rendements élevés grâce à
                        des investissements importants.
                    </li>

                    <li>
                        <b>Extensive :</b>
                        production réalisée sur de grandes superficies
                        avec des rendements généralement plus faibles.
                    </li>
                </ul>

                <br>

                <h4>🔹 La sécurité alimentaire</h4>

                <p>
                    La sécurité alimentaire suppose que les personnes
                    puissent avoir accès à une nourriture suffisante,
                    saine et nutritive.
                </p>

                <p>
                    Elle dépend notamment de la production,
                    des revenus, des transports, des marchés,
                    des conditions politiques et des conflits.
                </p>

                <br>

                <h4>🔹 Les contraintes</h4>

                <p>
                    Parmi les contraintes figurent la pauvreté,
                    les sécheresses, certaines conséquences du
                    changement climatique, le gaspillage et
                    les conflits.
                </p>
            `,

            objectifs: [
                'Différencier les systèmes agricoles',
                'Comprendre les enjeux de la sécurité alimentaire',
                'Mettre en évidence des contraintes'
            ],

            matieres: [
                'Agriculture vivrière et commerciale',
                'Agriculture intensive et extensive',
                'Sécurité alimentaire'
            ],

            exercices: [
                {
                    question:
                        "L'agriculture vivrière...",

                    options: [
                        'Nourrit principalement la famille ou la population locale',
                        "Est toujours destinée à l'exportation",
                        'Utilise obligatoirement beaucoup de machines',
                        'Nécessite toujours de très grands espaces'
                    ],

                    correct: 0,

                    correction:
                        "L'agriculture vivrière vise principalement l'autoconsommation ou l'alimentation locale."
                }
            ]
        }

    ],


    // =====================================================
    // 5e
    // =====================================================

    '5e': [

        {
            id: 'geo5_energie',
            titre: "1. L'énergie",
            desc: "Les ressources énergétiques et leur répartition.",
            niveau: '5e',
            icone: '⚡',
            color: '#f59e0b',

            cours: `
                <h4>🔹 Les énergies fossiles</h4>

                <p>
                    Le charbon, le pétrole et le gaz naturel
                    sont des ressources fossiles.
                    Elles sont limitées et leur combustion
                    émet notamment du dioxyde de carbone.
                </p>

                <br>

                <h4>🔹 Les énergies renouvelables</h4>

                <p>
                    Elles utilisent des ressources qui se
                    renouvellent à l'échelle humaine :
                    soleil, vent, eau, biomasse...
                </p>

                <br>

                <h4>🔹 Les enjeux</h4>

                <p>
                    La transition énergétique cherche à réduire
                    la dépendance aux ressources fossiles et
                    à diversifier les sources d'énergie.
                </p>
            `,

            objectifs: [
                'Distinguer énergie fossile et énergie renouvelable',
                'Identifier les principaux enjeux énergétiques',
                'Comprendre les différences entre les ressources'
            ],

            matieres: [
                'Énergies fossiles',
                'Énergies renouvelables',
                'Transition énergétique'
            ],

            exercices: [
                {
                    question:
                        'Laquelle est une énergie renouvelable ?',

                    options: [
                        "L'énergie solaire",
                        'Le pétrole',
                        'Le charbon',
                        'Le gaz naturel'
                    ],

                    correct: 0,

                    correction:
                        "L'énergie solaire provient d'une source renouvelable."
                }
            ]
        },


        {
            id: 'geo5_mondialisation',
            titre: "2. Mondialisation & flux",
            desc: "Les échanges et l'interdépendance entre les territoires.",
            niveau: '5e',
            icone: '🌐',
            color: '#2563eb',

            cours: `
                <h4>🔹 La mondialisation</h4>

                <p>
                    La mondialisation correspond à l'intensification
                    des échanges et des interdépendances entre
                    les territoires.
                </p>

                <br>

                <h4>🔹 Les flux</h4>

                <p>
                    Les flux peuvent concerner des personnes,
                    des marchandises, des capitaux ou des informations.
                </p>

                <br>

                <h4>🔹 Les FTN</h4>

                <p>
                    Une <b>firme transnationale</b> possède ou contrôle
                    des activités dans plusieurs pays.
                </p>

                <br>

                <h4>🔹 Les pôles</h4>

                <p>
                    Certains territoires concentrent davantage
                    les activités économiques, les sièges sociaux,
                    les infrastructures et les échanges.
                </p>
            `,

            objectifs: [
                'Définir la mondialisation',
                'Identifier différents types de flux',
                'Comprendre le rôle des firmes transnationales'
            ],

            matieres: [
                'Mondialisation',
                'Flux',
                'FTN',
                'Pôles et réseaux'
            ],

            exercices: [
                {
                    question:
                        'Un flux peut être...',

                    options: [
                        'Un déplacement de marchandises ou de personnes',
                        'Uniquement un fleuve',
                        'Uniquement une frontière',
                        'Uniquement une montagne'
                    ],

                    correct: 0,

                    correction:
                        'Un flux correspond à un déplacement entre deux territoires.'
                }
            ]
        },


        {
            id: 'geo5_migrations',
            titre: "3. Migrations",
            desc: "Les mobilités humaines et les facteurs de départ et d'attraction.",
            niveau: '5e',
            icone: '🧳',
            color: '#8b5cf6',

            cours: `
                <h4>🔹 Les migrations</h4>

                <p>
                    Une migration correspond au déplacement d'une
                    personne ou d'un groupe vers un autre territoire
                    avec l'intention de s'y installer pour une
                    certaine durée.
                </p>

                <br>

                <h4>🔹 Les facteurs de départ</h4>

                <p>
                    On parle de facteurs <b>push</b> :
                    conflit, pauvreté, chômage, insécurité,
                    catastrophe...
                </p>

                <br>

                <h4>🔹 Les facteurs d'attraction</h4>

                <p>
                    On parle de facteurs <b>pull</b> :
                    emploi, études, sécurité, meilleures conditions
                    de vie...
                </p>
            `,

            objectifs: [
                'Définir une migration',
                'Identifier les facteurs push',
                'Identifier les facteurs pull'
            ],

            matieres: [
                'Migrations',
                'Push',
                'Pull',
                'Mobilités humaines'
            ],

            exercices: [
                {
                    question:
                        'Un facteur pull est...',

                    options: [
                        'Un facteur qui attire vers un territoire',
                        'Un facteur qui oblige à partir',
                        'Une frontière',
                        'Une catastrophe naturelle'
                    ],

                    correct: 0,

                    correction:
                        'Un facteur pull attire une personne vers un territoire.'
                }
            ]
        }

    ],


    // =====================================================
    // 6e
    // =====================================================

    '6e': [

        {
            id: 'geo6_developpement',
            titre: "1. Développement durable",
            desc: "Les dimensions économique, sociale et environnementale.",
            niveau: '6e',
            icone: '♻️',
            color: '#16a34a',

            cours: `
                <h4>🔹 Le développement durable</h4>

                <p>
                    Le développement durable cherche à répondre
                    aux besoins actuels tout en prenant en compte
                    les besoins des générations futures.
                </p>

                <br>

                <h4>🔹 Les trois dimensions</h4>

                <ul>
                    <li>
                        <b>Économique :</b>
                        production, emploi, revenus...
                    </li>

                    <li>
                        <b>Sociale :</b>
                        santé, éducation, logement, égalité...
                    </li>

                    <li>
                        <b>Environnementale :</b>
                        ressources, biodiversité, climat,
                        pollution...
                    </li>
                </ul>

                <br>

                <h4>🔹 Les ODD</h4>

                <p>
                    Les Objectifs de développement durable
                    constituent un ensemble d'objectifs visant
                    notamment à réduire les inégalités et à
                    protéger l'environnement.
                </p>

                <br>

                <h4>🔹 Économie circulaire</h4>

                <p>
                    Elle cherche notamment à limiter le gaspillage
                    des ressources en favorisant la réduction,
                    la réutilisation, la réparation et le recyclage.
                </p>
            `,

            objectifs: [
                'Définir le développement durable',
                'Identifier ses trois dimensions',
                'Comprendre les ODD',
                "Comprendre le principe de l'économie circulaire"
            ],

            matieres: [
                'Développement durable',
                'ODD',
                'Économie circulaire'
            ],

            exercices: [
                {
                    question:
                        'Le développement durable repose notamment sur...',

                    options: [
                        'Les dimensions économique, sociale et environnementale',
                        'La seule croissance économique',
                        'Les énergies fossiles uniquement',
                        'Le PIB uniquement'
                    ],

                    correct: 0,

                    correction:
                        'Le développement durable prend en compte les dimensions économique, sociale et environnementale.'
                }
            ]
        },


        {
            id: 'geo6_amenagement_territoire',
            titre: "2. Aménagement du territoire",
            desc: "UAA3 - Conflits d'usage et gestion des fonctions.",
            niveau: '6e',
            icone: '🏙️',
            color: '#1d4ed8',

            cours: `
                <h4>🔹 Le conflit d'usage</h4>

                <p>
                    Lorsqu'un territoire doit remplir plusieurs
                    fonctions — logement, industrie, loisirs,
                    transport, agriculture... — des conflits
                    d'usage peuvent apparaître.
                </p>

                <br>

                <h4>🔹 L'exemple de la clinique du MontLégia</h4>

                <p>
                    Le regroupement des activités hospitalières
                    sur un même site peut permettre de rationaliser
                    certains services et infrastructures.
                </p>

                <p>
                    Un tel choix doit cependant tenir compte de
                    la mobilité, de l'accessibilité, des contraintes
                    urbanistiques et des conséquences pour les
                    habitants et les riverains.
                </p>

                <br>

                <h4>🔹 Plan d'affectation du sol</h4>

                <p>
                    Un document d'affectation du sol définit les
                    usages possibles de différentes parties du
                    territoire : habitat, activités économiques,
                    espaces verts, infrastructures...
                </p>
            `,

            objectifs: [
                "Identifier les fonctions et conflits d'usage",
                "Analyser la pertinence d'un aménagement",
                'Comprendre les outils de gestion du territoire'
            ],

            matieres: [
                "Conflits d'usage",
                "Schéma d'aménagement",
                "Plan d'affectation du sol"
            ],

            exercices: [
                {
                    question:
                        "Un conflit d'usage survient quand...",

                    options: [
                        'Deux fonctions ou acteurs revendiquent le même espace',
                        'Il y a uniquement un tremblement de terre',
                        'Le climat change automatiquement',
                        'Une autoroute est toujours construite'
                    ],

                    correct: 0,

                    correction:
                        "Un conflit d'usage apparaît lorsque plusieurs acteurs ou fonctions veulent utiliser le même espace de manière différente."
                }
            ]
        },


        {
            id: 'geo6_geopolitique',
            titre: "3. Géopolitique et conflits",
            desc: "Puissance, ressources et tensions.",
            niveau: '6e',
            icone: '🕊️',
            color: '#c0392b',

            cours: `
                <h4>🔹 La notion de puissance</h4>

                <p>
                    Un État peut exercer une influence grâce à
                    différents moyens : militaires, économiques,
                    diplomatiques, politiques ou culturels.
                </p>

                <br>

                <h4>🔹 Les tensions</h4>

                <ul>
                    <li>
                        Contrôle des ressources :
                        eau, énergie, terres, minerais...
                    </li>

                    <li>
                        Frontières contestées.
                    </li>

                    <li>
                        Rivalités entre acteurs.
                    </li>

                    <li>
                        Contrôle de territoires stratégiques.
                    </li>
                </ul>

                <br>

                <h4>🔹 La géographie prospective</h4>

                <p>
                    La prospective cherche à imaginer différents
                    scénarios d'évolution des territoires afin
                    d'anticiper les besoins, les transformations
                    et les éventuels conflits.
                </p>
            `,

            objectifs: [
                'Comprendre la notion de puissance',
                'Identifier les sources de tensions',
                'Se projeter dans le futur grâce à la prospective'
            ],

            matieres: [
                'Puissance et influence',
                'Ressources et conflits',
                'Géographie prospective'
            ],

            exercices: [
                {
                    question:
                        'La géopolitique étudie notamment...',

                    options: [
                        'Les rivalités de pouvoir sur les territoires',
                        'Uniquement les climats',
                        'Uniquement les systèmes agricoles',
                        'Uniquement les statistiques'
                    ],

                    correct: 0,

                    correction:
                        'La géopolitique analyse notamment les rapports de force et les rivalités de pouvoir dans l’espace.'
                }
            ]
        },


        {
            id: 'geo6_essai',
            titre: "4. L'argumentation géographique",
            desc: "UAA - Méthodologie de l'examen.",
            niveau: '6e',
            icone: '📝',
            color: '#805ad5',

            cours: `
                <h4>🔹 Structurer un texte argumentatif</h4>

                <p>
                    Pour construire une réponse géographique
                    argumentée, il faut organiser clairement
                    ses idées.
                </p>

                <ul>
                    <li>
                        <b>Introduction :</b>
                        présentation claire du sujet.
                    </li>

                    <li>
                        <b>Développement :</b>
                        arguments géographiques précis,
                        exemples et explications.
                    </li>

                    <li>
                        <b>Conclusion :</b>
                        synthèse de la réponse.
                    </li>
                </ul>

                <br>

                <h4>🔹 Utiliser un vocabulaire précis</h4>

                <p>
                    Il faut utiliser les notions adaptées au sujet,
                    par exemple <b>atout</b>, <b>contrainte</b>,
                    <b>fonction</b>, <b>distance-temps</b>,
                    <b>spécialisation</b> ou <b>accessibilité</b>.
                </p>

                <br>

                <h4>🔹 Justifier</h4>

                <p>
                    Une affirmation géographique doit être expliquée
                    et, lorsque c'est possible, accompagnée d'un
                    exemple précis.
                </p>
            `,

            objectifs: [
                'Structurer un texte argumentatif',
                'Justifier avec des exemples géographiques',
                'Maîtriser le vocabulaire spécifique'
            ],

            matieres: [
                'Méthodologie',
                'Argumentation',
                'Atouts / Contraintes'
            ],

            exercices: [
                {
                    question:
                        "Pour un aéroport, une contrainte peut être...",

                    options: [
                        'Les nuisances sonores',
                        "La proximité d'une autoroute",
                        "La main-d'œuvre disponible",
                        "Une bonne accessibilité"
                    ],

                    correct: 0,

                    correction:
                        "Les nuisances sonores peuvent constituer une contrainte pour les riverains et l'environnement."
                }
            ]
        }

    ]

};


// =========================================================
// JEU DES CAPITALES
// =========================================================

var CAPITALES = [

    {
        pays: "France",
        capitale: "Paris",
        continent: "Europe"
    },

    {
        pays: "Belgique",
        capitale: "Bruxelles",
        continent: "Europe"
    },

    {
        pays: "Allemagne",
        capitale: "Berlin",
        continent: "Europe"
    },

    {
        pays: "Espagne",
        capitale: "Madrid",
        continent: "Europe"
    },

    {
        pays: "Italie",
        capitale: "Rome",
        continent: "Europe"
    },

    {
        pays: "Portugal",
        capitale: "Lisbonne",
        continent: "Europe"
    },

    {
        pays: "Pays-Bas",
        capitale: "Amsterdam",
        continent: "Europe"
    },

    {
        pays: "Royaume-Uni",
        capitale: "Londres",
        continent: "Europe"
    },

    {
        pays: "Irlande",
        capitale: "Dublin",
        continent: "Europe"
    },

    {
        pays: "Suisse",
        capitale: "Berne",
        continent: "Europe"
    },

    {
        pays: "Autriche",
        capitale: "Vienne",
        continent: "Europe"
    },

    {
        pays: "Pologne",
        capitale: "Varsovie",
        continent: "Europe"
    },

    {
        pays: "Suède",
        capitale: "Stockholm",
        continent: "Europe"
    },

    {
        pays: "Norvège",
        capitale: "Oslo",
        continent: "Europe"
    },

    {
        pays: "Danemark",
        capitale: "Copenhague",
        continent: "Europe"
    },

    {
        pays: "Finlande",
        capitale: "Helsinki",
        continent: "Europe"
    },

    {
        pays: "Grèce",
        capitale: "Athènes",
        continent: "Europe"
    },

    {
        pays: "Turquie",
        capitale: "Ankara",
        continent: "Europe/Asie"
    },

    {
        pays: "Russie",
        capitale: "Moscou",
        continent: "Europe/Asie"
    },

    {
        pays: "Ukraine",
        capitale: "Kiev",
        continent: "Europe"
    },

    {
        pays: "États-Unis",
        capitale: "Washington",
        continent: "Amérique"
    },

    {
        pays: "Canada",
        capitale: "Ottawa",
        continent: "Amérique"
    },

    {
        pays: "Mexique",
        capitale: "Mexico",
        continent: "Amérique"
    },

    {
        pays: "Brésil",
        capitale: "Brasilia",
        continent: "Amérique"
    },

    {
        pays: "Argentine",
        capitale: "Buenos Aires",
        continent: "Amérique"
    },

    {
        pays: "Chili",
        capitale: "Santiago",
        continent: "Amérique"
    },

    {
        pays: "Colombie",
        capitale: "Bogota",
        continent: "Amérique"
    },

    {
        pays: "Pérou",
        capitale: "Lima",
        continent: "Amérique"
    },

    {
        pays: "Chine",
        capitale: "Pékin",
        continent: "Asie"
    },

    {
        pays: "Japon",
        capitale: "Tokyo",
        continent: "Asie"
    },

    {
        pays: "Corée du Sud",
        capitale: "Séoul",
        continent: "Asie"
    },

    {
        pays: "Inde",
        capitale: "New Delhi",
        continent: "Asie"
    },

    {
        pays: "Thaïlande",
        capitale: "Bangkok",
        continent: "Asie"
    },

    {
        pays: "Vietnam",
        capitale: "Hanoï",
        continent: "Asie"
    },

    {
        pays: "Indonésie",
        capitale: "Jakarta",
        continent: "Asie"
    },

    {
        pays: "Australie",
        capitale: "Canberra",
        continent: "Océanie"
    },

    {
        pays: "Nouvelle-Zélande",
        capitale: "Wellington",
        continent: "Océanie"
    },

    {
        pays: "Égypte",
        capitale: "Le Caire",
        continent: "Afrique"
    },

    {
        pays: "Maroc",
        capitale: "Rabat",
        continent: "Afrique"
    },

    {
        pays: "Algérie",
        capitale: "Alger",
        continent: "Afrique"
    },

    {
        pays: "Tunisie",
        capitale: "Tunis",
        continent: "Afrique"
    },

    {
        pays: "Sénégal",
        capitale: "Dakar",
        continent: "Afrique"
    },

    {
        pays: "Afrique du Sud",
        capitale: "Pretoria",
        continent: "Afrique"
    },

    {
        pays: "Nigeria",
        capitale: "Abuja",
        continent: "Afrique"
    },

    {
        pays: "Kenya",
        capitale: "Nairobi",
        continent: "Afrique"
    },

    {
        pays: "Éthiopie",
        capitale: "Addis-Abeba",
        continent: "Afrique"
    }

];


// =========================================================
// EXAMEN BLANC TYPE CESS
// =========================================================

var EXAMENS_CESS = [

    {
        id: 'cess_aeroports',

        titre: "Les aéroports wallons (CRL et LGG)",

        exercices: [

            {
                question:
                    "Q1. Tableau Atouts/Contraintes pour CRL",

                type: 'texte',

                options: [],

                correct: 0,

                correction:
                    "Voir la grille de correction."
            },

            {
                question:
                    "Q2. Rédigez un texte argumentatif sur la spécialisation des aéroports wallons en utilisant les mots atout et contrainte.",

                type: 'texte',

                options: [],

                correct: 0,

                correction:
                    "Le texte doit comporter une introduction, un développement, une conclusion et utiliser les mots clés."
            }

        ]

    }

];
