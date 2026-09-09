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
                        températures très basses et faibles précipitations.
                    </li>
                </ul>

                <br>

                <h4>🔹 Bioclimats</h4>

                <p>
                    Un <b>bioclimat</b> correspond à l'association
                    entre les conditions climatiques et les
                    caractéristiques d'un milieu naturel.
                </p>

                <p>
                    Les climats influencent notamment la végétation,
                    les sols, les activités humaines et la répartition
                    des populations.
                </p>
            `,

            objectifs: [
                'Identifier les principaux facteurs climatiques',
                'Reconnaître les grands types de climats',
                'Relier climat, végétation et activités humaines'
            ],

            matieres: [
                'Latitude et altitude',
                'Continentalité',
                'Grands climats',
                'Bioclimats'
            ],

            exercices: [
                {
                    question:
                        "Quel facteur explique notamment la diminution de la température avec l'altitude ?",

                    options: [
                        "L'altitude",
                        'La longitude',
                        'La population',
                        'Le PIB'
                    ],

                    correct: 0,

                    correction:
                        "La température diminue généralement lorsque l'altitude augmente."
                },

                {
                    question:
                        'Quel climat est caractérisé par des étés chauds et secs ?',

                    options: [
                        'Méditerranéen',
                        'Équatorial',
                        'Polaire',
                        'Océanique'
                    ],

                    correct: 0,

                    correction:
                        'Le climat méditerranéen connaît des étés chauds et secs.'
                }
            ]
        },


        {
            id: 'geo3_population',
            titre: "4. Population & Répartition",
            desc: "UAA1 - La répartition de la population mondiale.",
            niveau: '3e',
            icone: '👥',
            color: '#3182ce',

            cours: `
                <h4>🔹 Une population inégalement répartie</h4>

                <p>
                    La population mondiale est très inégalement
                    répartie sur la planète.
                </p>

                <p>
                    Les principales concentrations de population
                    se trouvent notamment en Asie orientale,
                    en Asie du Sud et dans certaines régions
                    d'Europe.
                </p>

                <br>

                <h4>🔹 Les foyers de population</h4>

                <ul>
                    <li>Asie orientale</li>
                    <li>Asie du Sud</li>
                    <li>Europe</li>
                </ul>

                <br>

                <h4>🔹 Les espaces faiblement peuplés</h4>

                <p>
                    Certains territoires présentent de très faibles
                    densités en raison de contraintes naturelles
                    ou de conditions difficiles : déserts,
                    hautes montagnes, régions polaires ou forêts
                    équatoriales.
                </p>

                <br>

                <h4>🔹 Densité de population</h4>

                <p>
                    La densité correspond au nombre d'habitants
                    par unité de surface.
                </p>

                <p>
                    <b>Densité = Population ÷ Superficie</b>
                </p>
            `,

            objectifs: [
                'Localiser les principaux foyers de population',
                'Identifier les espaces faiblement peuplés',
                'Calculer et interpréter une densité de population'
            ],

            matieres: [
                'Répartition mondiale',
                'Densité de population',
                'Foyers et déserts humains'
            ],

            exercices: [
                {
                    question:
                        'La densité de population correspond...',

                    options: [
                        "Au nombre d'habitants par unité de surface",
                        'Au nombre total de villes',
                        'Au PIB par habitant',
                        'À la superficie totale'
                    ],

                    correct: 0,

                    correction:
                        "La densité mesure le nombre d'habitants rapporté à une unité de surface."
                }
            ]
        },


        {
            id: 'geo3_urbanisation',
            titre: "5. Urbanisation & Métropolisation",
            desc: "UAA1 - La croissance urbaine et les métropoles.",
            niveau: '3e',
            icone: '🏙️',
            color: '#805ad5',

            cours: `
                <h4>🔹 L'urbanisation</h4>

                <p>
                    L'<b>urbanisation</b> désigne l'augmentation
                    de la population vivant dans les villes ainsi
                    que l'extension des espaces urbains.
                </p>

                <br>

                <h4>🔹 La métropolisation</h4>

                <p>
                    La <b>métropolisation</b> correspond au renforcement
                    du poids des grandes villes et métropoles dans
                    l'organisation des territoires.
                </p>

                <p>
                    Les métropoles concentrent souvent les fonctions
                    de commandement : sièges d'entreprises,
                    institutions, universités, transports,
                    services spécialisés et activités culturelles.
                </p>

                <br>

                <h4>🔹 Des contrastes urbains</h4>

                <p>
                    Les villes présentent des contrastes importants
                    entre quartiers centraux, espaces périphériques,
                    zones d'activités et quartiers résidentiels.
                </p>
            `,

            objectifs: [
                "Définir l'urbanisation",
                'Expliquer la métropolisation',
                'Identifier les fonctions de commandement des métropoles'
            ],

            matieres: [
                'Urbanisation',
                'Métropolisation',
                'Fonctions urbaines',
                'Contrastes socio-spatiaux'
            ],

            exercices: [
                {
                    question:
                        'La métropolisation correspond principalement...',

                    options: [
                        'Au renforcement du poids des grandes villes',
                        'À la disparition des villes',
                        'À la baisse de la population urbaine',
                        'À la diminution des transports'
                    ],

                    correct: 0,

                    correction:
                        'La métropolisation renforce le rôle des grandes villes dans les réseaux et les territoires.'
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
            titre: "1. L'eau : une ressource à gérer",
            desc: "UAA2 - Disponibilité, usages et gestion de l'eau.",
            niveau: '4e',
            icone: '💧',
            color: '#3182ce',

            cours: `
                <h4>🔹 Une ressource inégalement disponible</h4>

                <p>
                    L'eau douce est une ressource indispensable
                    mais sa disponibilité varie fortement selon
                    les régions du monde.
                </p>

                <p>
                    Les précipitations, les ressources souterraines,
                    les cours d'eau et les infrastructures expliquent
                    en partie ces différences.
                </p>

                <br>

                <h4>🔹 Les usages de l'eau</h4>

                <ul>
                    <li><b>Agriculture :</b> irrigation et élevage.</li>
                    <li><b>Industrie :</b> production et refroidissement.</li>
                    <li><b>Population :</b> eau potable et usages domestiques.</li>
                    <li><b>Énergie :</b> notamment hydroélectricité.</li>
                </ul>

                <br>

                <h4>🔹 Le stress hydrique</h4>

                <p>
                    Le <b>stress hydrique</b> apparaît lorsque les
                    besoins en eau deviennent importants par rapport
                    aux ressources disponibles.
                </p>

                <br>

                <h4>🔹 Le bassin versant</h4>

                <p>
                    Un <b>bassin versant</b> est l'ensemble du territoire
                    dont les eaux s'écoulent vers un même cours d'eau
                    ou un même exutoire.
                </p>
            `,

            objectifs: [
                "Expliquer l'inégale disponibilité de l'eau",
                'Identifier les principaux usages de la ressource',
                'Comprendre le stress hydrique et la gestion de l’eau'
            ],

            matieres: [
                'Ressource en eau',
                'Bassin versant',
                'Stress hydrique',
                'Gestion de la ressource'
            ],

            exercices: [
                {
                    question:
                        'Le stress hydrique correspond à...',

                    options: [
                        'Une situation où la demande en eau est importante par rapport aux ressources disponibles',
                        'Une région où il pleut tous les jours',
                        'Une rivière très longue',
                        'Une réserve de pétrole'
                    ],

                    correct: 0,

                    correction:
                        "Le stress hydrique apparaît lorsque les besoins sont élevés par rapport aux ressources disponibles."
                },

                {
                    question:
                        "Qu'est-ce qu'un bassin versant ?",

                    options: [
                        "Un territoire dont les eaux s'écoulent vers un même exutoire",
                        'Une zone uniquement agricole',
                        'Une nappe phréatique',
                        'Un barrage'
                    ],

                    correct: 0,

                    correction:
                        "Le bassin versant regroupe les territoires dont les eaux convergent vers un même cours d'eau ou exutoire."
                }
            ]
        },


        {
            id: 'geo4_nourriture',
            titre: "2. Nourrir les hommes",
            desc: "UAA2 - Agriculture, alimentation et sécurité alimentaire.",
            niveau: '4e',
            icone: '🌾',
            color: '#d69e2e',

            cours: `
                <h4>🔹 Produire pour nourrir</h4>

                <p>
                    Les systèmes agricoles sont très variés selon
                    les milieux, les techniques utilisées,
                    les marchés et les besoins des populations.
                </p>

                <br>

                <h4>🔹 Agriculture vivrière</h4>

                <p>
                    L'<b>agriculture vivrière</b> vise principalement
                    à produire pour nourrir les populations locales.
                </p>

                <br>

                <h4>🔹 Agriculture commerciale</h4>

                <p>
                    L'agriculture commerciale produit en grande partie
                    pour la vente sur les marchés nationaux ou
                    internationaux.
                </p>

                <br>

                <h4>🔹 Agriculture intensive</h4>

                <p>
                    L'<b>agriculture intensive</b> recherche des
                    rendements élevés grâce à l'utilisation importante
                    de facteurs de production : mécanisation,
                    irrigation, engrais ou produits phytosanitaires.
                </p>

                <br>

                <h4>🔹 Sécurité alimentaire</h4>

                <p>
                    La sécurité alimentaire dépend de la disponibilité
                    de nourriture, de son accessibilité et de la
                    capacité des populations à se nourrir durablement.
                </p>
            `,

            objectifs: [
                'Distinguer agriculture vivrière et commerciale',
                'Expliquer les caractéristiques de l’agriculture intensive',
                'Comprendre les enjeux de la sécurité alimentaire'
            ],

            matieres: [
                'Agriculture vivrière',
                'Agriculture commerciale',
                'Agriculture intensive',
                'Sécurité alimentaire'
            ],

            exercices: [
                {
                    question:
                        "L'agriculture vivrière est principalement destinée à...",

                    options: [
                        'Nourrir les populations locales',
                        'Exporter toutes les productions',
                        'Produire uniquement des fleurs',
                        'Alimenter les transports'
                    ],

                    correct: 0,

                    correction:
                        "L'agriculture vivrière vise principalement l'alimentation des populations locales."
                }
            ]
        },


        {
            id: 'geo4_amenagement',
            titre: "3. Aménager les territoires",
            desc: "UAA3 - Accessibilité, services et inégalités territoriales.",
            niveau: '4e',
            icone: '🛣️',
            color: '#dd6b20',

            cours: `
                <h4>🔹 Aménager un territoire</h4>

                <p>
                    Aménager consiste à organiser et transformer
                    l'espace afin de répondre aux besoins des
                    populations et des activités.
                </p>

                <br>

                <h4>🔹 Accessibilité</h4>

                <p>
                    L'<b>accessibilité</b> désigne la facilité avec
                    laquelle une population peut atteindre un lieu,
                    un service ou une activité.
                </p>

                <p>
                    Elle dépend notamment des réseaux de transport,
                    de la distance et du temps nécessaire pour se
                    déplacer.
                </p>

                <br>

                <h4>🔹 Distance-temps</h4>

                <p>
                    La <b>distance-temps</b> mesure le temps nécessaire
                    pour rejoindre un lieu.
                </p>

                <p>
                    Deux lieux peuvent être éloignés en kilomètres
                    mais proches en distance-temps si les transports
                    sont rapides.
                </p>

                <br>

                <h4>🔹 Inégalités territoriales</h4>

                <p>
                    Les territoires n'ont pas tous le même accès
                    aux emplois, aux soins, à l'éducation,
                    aux commerces ou aux transports.
                </p>
            `,

            objectifs: [
                'Définir aménagement du territoire et accessibilité',
                'Utiliser la notion de distance-temps',
                'Identifier des inégalités territoriales'
            ],

            matieres: [
                'Aménagement',
                'Accessibilité',
                'Distance-temps',
                'Services'
            ],

            exercices: [
                {
                    question:
                        'La distance-temps correspond...',

                    options: [
                        'Au temps nécessaire pour rejoindre un lieu',
                        'À la distance mesurée uniquement en kilomètres',
                        'À la superficie du territoire',
                        'Au nombre de routes'
                    ],

                    correct: 0,

                    correction:
                        "La distance-temps prend en compte le temps nécessaire pour se déplacer."
                }
            ]
        },


        {
            id: 'geo4_transports',
            titre: "4. Mobilités & Réseaux",
            desc: "UAA3 - Déplacements, réseaux et accessibilité.",
            niveau: '4e',
            icone: '🚆',
            color: '#319795',

            cours: `
                <h4>🔹 Les mobilités</h4>

                <p>
                    Une mobilité est un déplacement d'une personne
                    entre deux lieux.
                </p>

                <p>
                    Les mobilités peuvent être quotidiennes,
                    touristiques, professionnelles ou liées
                    aux migrations.
                </p>

                <br>

                <h4>🔹 Les réseaux</h4>

                <p>
                    Les réseaux de transport relient les territoires
                    entre eux. Ils comprennent notamment les routes,
                    les voies ferrées, les ports et les aéroports.
                </p>

                <br>

                <h4>🔹 Les nœuds</h4>

                <p>
                    Certains lieux concentrent les connexions :
                    ce sont des <b>nœuds</b> ou pôles de transport.
                </p>

                <p>
                    Une bonne connexion aux réseaux peut renforcer
                    l'attractivité d'un territoire.
                </p>
            `,

            objectifs: [
                'Identifier différents types de mobilités',
                'Comprendre le rôle des réseaux',
                "Expliquer l'importance des nœuds de transport"
            ],

            matieres: [
                'Mobilités',
                'Réseaux',
                'Nœuds',
                'Accessibilité'
            ],

            exercices: [
                {
                    question:
                        'Un réseau de transport sert principalement à...',

                    options: [
                        'Relier différents territoires',
                        'Empêcher les déplacements',
                        'Réduire toutes les villes',
                        'Supprimer les échanges'
                    ],

                    correct: 0,

                    correction:
                        'Les réseaux de transport permettent de relier les territoires et de faciliter les mobilités.'
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
            titre: "1. Énergie & Développement",
            desc: "UAA3 - Ressources énergétiques et transitions.",
            niveau: '5e',
            icone: '⚡',
            color: '#ecc94b',

            cours: `
                <h4>🔹 Les ressources énergétiques</h4>

                <p>
                    Les sociétés utilisent différentes sources
                    d'énergie pour se déplacer, produire,
                    se chauffer et faire fonctionner les activités.
                </p>

                <br>

                <h4>🔹 Énergies fossiles</h4>

                <p>
                    Le <b>pétrole</b>, le <b>gaz</b> et le
                    <b>charbon</b> sont des énergies fossiles.
                    Elles proviennent de ressources formées sur
                    des temps géologiques très longs.
                </p>

                <p>
                    Leur utilisation produit notamment des émissions
                    de gaz à effet de serre.
                </p>

                <br>

                <h4>🔹 Énergies renouvelables</h4>

                <p>
                    Les énergies renouvelables utilisent des ressources
                    qui se renouvellent à l'échelle humaine :
                    soleil, vent, eau, biomasse ou géothermie.
                </p>

                <br>

                <h4>🔹 Transition énergétique</h4>

                <p>
                    La transition énergétique vise à transformer
                    les systèmes de production et de consommation
                    d'énergie afin de réduire les impacts
                    environnementaux et de répondre aux besoins futurs.
                </p>
            `,

            objectifs: [
                'Distinguer énergies fossiles et renouvelables',
                'Identifier les enjeux énergétiques',
                'Comprendre la notion de transition énergétique'
            ],

            matieres: [
                'Énergies fossiles',
                'Énergies renouvelables',
                'Transition énergétique'
            ],

            exercices: [
                {
                    question:
                        'Le pétrole est une énergie...',

                    options: [
                        'Fossile',
                        'Renouvelable',
                        'Solaire',
                        'Éolienne'
                    ],

                    correct: 0,

                    correction:
                        'Le pétrole est une énergie fossile.'
                },

                {
                    question:
                        'Laquelle est une énergie renouvelable ?',

                    options: [
                        'Énergie solaire',
                        'Charbon',
                        'Pétrole',
                        'Gaz naturel'
                    ],

                    correct: 0,

                    correction:
                        "L'énergie solaire est renouvelable."
                }
            ]
        },


        {
            id: 'geo5_mondialisation',
            titre: "2. Mondialisation & Flux",
            desc: "UAA3 - Interdépendance des territoires et échanges.",
            niveau: '5e',
            icone: '🌐',
            color: '#4299e1',

            cours: `
                <h4>🔹 La mondialisation</h4>

                <p>
                    La <b>mondialisation</b> correspond à
                    l'intensification des échanges et des
                    interdépendances entre les territoires.
                </p>

                <br>

                <h4>🔹 Les flux</h4>

                <p>
                    Les <b>flux</b> sont des déplacements entre
                    territoires.
                </p>

                <ul>
                    <li>flux de marchandises ;</li>
                    <li>flux de capitaux ;</li>
                    <li>flux d'informations ;</li>
                    <li>flux de personnes.</li>
                </ul>

                <br>

                <h4>🔹 Les acteurs</h4>

                <p>
                    Les entreprises, les États, les organisations
                    internationales et les populations participent
                    à la mondialisation.
                </p>

                <br>

                <h4>🔹 Les FTN</h4>

                <p>
                    Une <b>firme transnationale</b> est une entreprise
                    qui possède ou contrôle des activités dans
                    plusieurs pays.
                </p>
            `,

            objectifs: [
                'Définir la mondialisation',
                'Identifier différents types de flux',
                'Reconnaître les principaux acteurs'
            ],

            matieres: [
                'Mondialisation',
                'Flux',
                'Interdépendance',
                'FTN'
            ],

            exercices: [
                {
                    question:
                        'Un flux est...',

                    options: [
                        'Un déplacement entre territoires',
                        'Une frontière',
                        'Une montagne',
                        'Une ressource naturelle'
                    ],

                    correct: 0,

                    correction:
                        'Un flux est un déplacement de personnes, de marchandises, de capitaux ou d’informations.'
                }
            ]
        },


        {
            id: 'geo5_migrations',
            titre: "3. Migrations & Mobilités",
            desc: "UAA3 - Les migrations internationales et leurs facteurs.",
            niveau: '5e',
            icone: '🧳',
            color: '#667eea',

            cours: `
                <h4>🔹 Migration</h4>

                <p>
                    Une migration est le déplacement d'une personne
                    ou d'un groupe qui implique un changement
                    de lieu de résidence.
                </p>

                <br>

                <h4>🔹 Facteurs de départ : Push</h4>

                <p>
                    Les facteurs <b>push</b> poussent les personnes
                    à quitter leur territoire :
                    conflits, chômage, pauvreté, catastrophes,
                    persécutions...
                </p>

                <br>

                <h4>🔹 Facteurs d'attraction : Pull</h4>

                <p>
                    Les facteurs <b>pull</b> attirent les migrants
                    vers un territoire :
                    emploi, sécurité, études, meilleures conditions
                    de vie ou regroupement familial.
                </p>

                <br>

                <h4>🔹 Des mobilités variées</h4>

                <p>
                    Les migrations peuvent être temporaires ou
                    permanentes, volontaires ou contraintes,
                    internes ou internationales.
                </p>
            `,

            objectifs: [
                'Définir une migration',
                'Distinguer facteurs push et pull',
                'Identifier différents types de mobilités'
            ],

            matieres: [
                'Migrations',
                'Mobilités',
                'Facteurs push/pull',
                'Migrations internationales'
            ],

            exercices: [
                {
                    question:
                        'Un facteur pull est...',

                    options: [
                        "Un élément qui attire vers un territoire",
                        'Un élément qui détruit une ville',
                        'Une frontière',
                        'Un réseau routier'
                    ],

                    correct: 0,

                    correction:
                        "Un facteur pull est un élément qui attire une personne vers un territoire."
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
            desc: "UAA - Développement, ressources et durabilité.",
            niveau: '6e',
            icone: '🌱',
            color: '#38a169',

            cours: `
                <h4>🔹 Développement durable</h4>

                <p>
                    Le <b>développement durable</b> cherche à répondre
                    aux besoins actuels tout en permettant aux
                    générations futures de répondre aux leurs.
                </p>

                <br>

                <h4>🔹 Trois dimensions</h4>

                <ul>
                    <li>
                        <b>Économique :</b>
                        produire et créer des richesses.
                    </li>

                    <li>
                        <b>Sociale :</b>
                        améliorer les conditions de vie et réduire
                        les inégalités.
                    </li>

                    <li>
                        <b>Environnementale :</b>
                        préserver les ressources et les milieux.
                    </li>
                </ul>

                <br>

                <h4>🔹 Des choix difficiles</h4>

                <p>
                    Les politiques d'aménagement doivent souvent
                    arbitrer entre plusieurs objectifs :
                    développement économique, besoins sociaux
                    et protection de l'environnement.
                </p>
            `,

            objectifs: [
                'Définir le développement durable',
                'Identifier ses trois dimensions',
                'Comprendre les arbitrages entre différents objectifs'
            ],

            matieres: [
                'Développement durable',
                'Économie',
                'Société',
                'Environnement'
            ],

            exercices: [
                {
                    question:
                        'Le développement durable cherche à concilier...',

                    options: [
                        'Économie, société et environnement',
                        'Uniquement économie et industrie',
                        'Uniquement environnement',
                        'Uniquement croissance démographique'
                    ],

                    correct: 0,

                    correction:
                        'Le développement durable cherche à articuler les dimensions économique, sociale et environnementale.'
                }
            ]
        },


        {
            id: 'geo6_territoires',
            titre: "2. Territoires & Fonctions",
            desc: "UAA - Usages des territoires et organisation spatiale.",
            niveau: '6e',
            icone: '🗺️',
            color: '#805ad5',

            cours: `
                <h4>🔹 Un territoire possède plusieurs fonctions</h4>

                <p>
                    Un territoire peut accueillir différentes
                    fonctions : logement, emploi, commerce,
                    tourisme, transport, agriculture, loisirs,
                    services ou production.
                </p>

                <br>

                <h4>🔹 Des fonctions qui se complètent</h4>

                <p>
                    Certaines fonctions sont complémentaires.
                    Par exemple, un centre urbain peut concentrer
                    des commerces, des services et des emplois.
                </p>

                <br>

                <h4>🔹 Des conflits d'usage</h4>

                <p>
                    Un <b>conflit d'usage</b> apparaît lorsque
                    plusieurs acteurs souhaitent utiliser le même
                    espace de manière différente.
                </p>

                <p>
                    Exemple : développement d'une infrastructure
                    de transport contre préservation d'un espace
                    naturel.
                </p>
            `,

            objectifs: [
                'Identifier différentes fonctions territoriales',
                'Comprendre les conflits d’usage',
                'Analyser les acteurs et leurs intérêts'
            ],

            matieres: [
                'Fonctions du territoire',
                'Usages',
                'Acteurs',
                'Conflits d’usage'
            ],

            exercices: [
                {
                    question:
                        "Un conflit d'usage apparaît lorsque...",

                    options: [
                        'Plusieurs acteurs revendiquent des usages différents du même espace',
                        'Un territoire est vide',
                        'Il n’existe aucune activité',
                        'La population diminue'
                    ],

                    correct: 0,

                    correction:
                        "Un conflit d'usage oppose plusieurs usages ou intérêts sur un même espace."
                }
            ]
        },


        {
            id: 'geo6_puissance',
            titre: "3. Puissance & Géopolitique",
            desc: "UAA - Rivalités, ressources et influence des États.",
            niveau: '6e',
            icone: '🌎',
            color: '#c53030',

            cours: `
                <h4>🔹 La puissance</h4>

                <p>
                    La <b>puissance</b> correspond à la capacité
                    d'un État ou d'un acteur à exercer une influence
                    sur d'autres territoires ou acteurs.
                </p>

                <br>

                <h4>🔹 Plusieurs formes de puissance</h4>

                <ul>
                    <li>
                        <b>Économique :</b>
                        richesse, commerce, entreprises.
                    </li>

                    <li>
                        <b>Militaire :</b>
                        forces armées et capacités de défense.
                    </li>

                    <li>
                        <b>Diplomatique :</b>
                        capacité à influencer les relations
                        internationales.
                    </li>

                    <li>
                        <b>Culturelle :</b>
                        langue, culture, médias et influence.
                    </li>
                </ul>

                <br>

                <h4>🔹 Ressources et tensions</h4>

                <p>
                    Les ressources naturelles peuvent être au cœur
                    de rivalités entre acteurs.
                </p>

                <ul>
                    <li>
                        Contrôle des ressources.
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
