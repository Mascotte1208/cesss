// =========================================================
// DONNÉES DU PROGRAMME DE GÉOGRAPHIE (Édition CESS - Enrichie)
// =========================================================

var GEO_CHAPITRES = {
    '3e': [
        {
            id: 'geo3_risques',
            titre: "1. Risques naturels & technologiques",
            desc: "UAA2 - Les aléas, la vulnérabilité et la gestion des risques.",
            niveau: '3e',
            icone: '🌋',
            color: '#c0392b',
            cours: `
                <h4>🔹 Lire les risques (L'exemple de Mocoa)</h4>
                <p>En avril 2017, une coulée de boue a tué plus de 300 personnes à Mocoa (Colombie). Ce n'est pas seulement un phénomène naturel, c'est un <b>risque</b>.</p>
                <p><b>Risque = Aléa (pluies torrentielles) × Vulnérabilité (construction en zone inondable)</b></p>
                <br>
                <h4>🔹 Les types d'aléas</h4>
                <ul>
                    <li><b>Naturels :</b> Séismes, volcans, inondations, cyclones, sécheresses.</li>
                    <li><b>Technologiques :</b> Rupture de barrage, accident nucléaire, pollution industrielle.</li>
                </ul>
                <br>
                <h4>🔹 La vulnérabilité et la résilience</h4>
                <p>La <b>vulnérabilité</b> est la fragilité d'un territoire (densité, qualité des bâtiments). La <b>résilience</b> est la capacité à se relever après une catastrophe (plans d'évacuation, assurances).</p>
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
                    correction: "L'aléa est le phénomène, le risque est la rencontre avec des enjeux humains."
                },
                {
                    question: 'La vulnérabilité d’un territoire dépend...',
                    options: [
                        'De sa densité de population et de ses infrastructures',
                        'De son climat uniquement',
                        'De sa latitude',
                        'De son PIB'
                    ],
                    correct: 0,
                    correction: "La vulnérabilité est liée aux enjeux humains."
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
                <p>La plupart des séismes et des volcans se situent aux <b>frontières des plaques tectoniques</b> (zones de convergence, divergence ou coulissage).</p>
                <br>
                <h4>🔹 Le Cercle de feu du Pacifique</h4>
                <p>Il entoure l'océan Pacifique et correspond à la subduction de la plaque Pacifique. Le Japon, l'Indonésie et le Chili sont très exposés.</p>
                <br>
                <h4>🔹 Le vocabulaire sismique</h4>
                <ul>
                    <li><b>Épicentre :</b> Point en surface où le séisme est le plus violent.</li>
                    <li><b>Magnitude :</b> Échelle de Richter (force du séisme).</li>
                    <li><b>Tsunami :</b> Vague géante provoquée par un séisme sous-marin.</li>
                    <li><b>Nuée ardente :</b> Nuage de gaz et de cendres brûlantes qui dévale un volcan.</li>
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
                    question: 'À quoi est liée la répartition des séismes et volcans ?',
                    options: [
                        'Aux frontières des plaques',
                        "À la proximité de l'équateur",
                        "À l'altitude",
                        'Aux grands fleuves'
                    ],
                    correct: 0,
                    correction: 'Les plaques tectoniques expliquent leur localisation.'
                },
                {
                    question: 'Un tsunami est causé par...',
                    options: [
                        'Un séisme sous-marin',
                        'Une éruption volcanique',
                        'Une tempête',
                        'Un glissement de terrain'
                    ],
                    correct: 0,
                    correction: 'Un tsunami est généralement provoqué par un séisme sous-marin.'
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
                    <li><b>Latitude :</b> Plus on s'éloigne de l'équateur, plus il fait froid.</li>
                    <li><b>Altitude :</b> Plus on monte, plus il fait froid.</li>
                    <li><b>Continentalité :</b> À l'intérieur des terres, écarts de température plus grands.</li>
                    <li><b>Courants marins :</b> Le Gulf Stream réchauffe l'Europe de l'Ouest.</li>
                </ul>
                <br>
                <h4>🔹 Les grands types de climats</h4>
                <ul>
                    <li><b>Équatorial :</b> Chaud et humide toute l'année (forêt dense).</li>
                    <li><b>Tropical :</b> Alternance saison sèche/humide (savane).</li>
                    <li><b>Désertique :</b> Très sec, grandes amplitudes.</li>
                    <li><b>Méditerranéen :</b> Étés chauds et secs, hivers doux et pluvieux.</li>
                    <li><b>Océanique :</b> Doux et humide (Belgique).</li>
                    <li><b>Continental :</b> Hivers froids, étés chauds.</li>
                    <li><b>Polaire :</b> Très froid toute l'année.</li>
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
                    question: 'Quel climat caractérise la Belgique ?',
                    options: [
                        'Océanique',
                        'Méditerranéen',
                        'Continental',
                        'Tropical'
                    ],
                    correct: 0,
                    correction: 'La Belgique a un climat océanique, doux et humide.'
                },
                {
                    question: 'Le Gulf Stream a pour effet de...',
                    options: [
                        "Réchauffer l'Europe de l'Ouest",
                        "Refroidir l'Arctique",
                        'Assécher le Sahara',
                        'Créer des moussons'
                    ],
                    correct: 0,
                    correction: "Le Gulf Stream apporte de la chaleur à l'Europe occidentale."
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
                <p>Une fonction est un usage du territoire : <b>logement, santé, emploi, tourisme, loisir, transport, information...</b> Ces fonctions sont inégalement réparties.</p>
                <br>
                <h4>🔹 Les facteurs de localisation</h4>
                <p>Pourquoi une activité s'installe-t-elle ici ? À cause d'<b>atouts</b> (main-d'œuvre, transports, proximité) ou de <b>contraintes</b> (coût du terrain, réglementations).</p>
                <br>
                <h4>🔹 L'étalement urbain</h4>
                <p>La croissance des villes en périphérie crée des <b>migrations pendulaires</b> (domicile-travail) et allonge les <b>distances-temps</b>.</p>
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
                    question: 'La fonction "santé" correspond à...',
                    options: [
                        'Les hôpitaux et cliniques',
                        'Les bureaux et entreprises',
                        'Les parcs et jardins',
                        'Les routes et autoroutes'
                    ],
                    correct: 0,
                    correction: 'La fonction santé est exercée par les hôpitaux.'
                }
            ]
        }
    ],

    '4e': [
        {
            id: 'geo4_eau',
            titre: "1. L'accès à l'eau",
            desc: "UAA1 - L'inégale répartition de l'eau et le stress hydrique.",
            niveau: '4e',
            icone: '💧',
            color: '#1d4ed8',
            cours: `
                <h4>🔹 L'eau, une ressource vitale inégalement répartie</h4>
                <p>L'eau douce ne représente que 2,5% de l'eau totale. Elle est inégalement répartie : certains pays sont en situation de <b>stress hydrique</b>.</p>
                <br>
                <h4>🔹 Le bassin hydrographique</h4>
                <p>Le bassin versant d'un fleuve est l'ensemble des terres qui alimentent ce fleuve. Les pays en amont (source) et en aval (embouchure) dépendent du même cours d'eau, ce qui crée des tensions.</p>
                <br>
                <h4>🔹 L'exemple de Mexico</h4>
                <p>Mexico pompe excessivement les nappes phréatiques, ce qui provoque un affaissement progressif du sol et des problèmes d'approvisionnement.</p>
            `,
            objectifs: [
                "Comprendre l'inégale répartition de l'eau",
                'Identifier les situations de stress hydrique',
                "Analyser les conflits liés à l'eau"
            ],
            matieres: [
                "Ressource en eau",
                'Stress hydrique',
                'Bassins hydrographiques',
                'Conflits liés à l’eau'
            ],
            exercices: [
                {
                    question: 'Le stress hydrique apparaît lorsque...',
                    options: [
                        "La demande en eau dépasse les ressources disponibles",
                        "Il pleut trop",
                        "Un fleuve déborde",
                        "La température diminue"
                    ],
                    correct: 0,
                    correction: "Le stress hydrique correspond à une situation où les besoins en eau sont supérieurs aux ressources disponibles."
                }
            ]
        },

        {
            id: 'geo4_agriculture',
            titre: "2. Agriculture & alimentation",
            desc: "UAA1 - Systèmes agricoles, rendements et sécurité alimentaire.",
            niveau: '4e',
            icone: '🌾',
            color: '#65a30d',
            cours: `
                <h4>🔹 Les systèmes agricoles</h4>
                <p>L'agriculture varie selon le milieu, les techniques utilisées, les investissements et les besoins des populations.</p>
                <br>
                <h4>🔹 Agriculture vivrière</h4>
                <p>Elle vise principalement à nourrir la population locale. Les productions sont souvent destinées à l'autoconsommation.</p>
                <br>
                <h4>🔹 Agriculture commerciale</h4>
                <p>Elle produit pour vendre sur les marchés nationaux ou internationaux. Elle peut être spécialisée dans certaines cultures d'exportation.</p>
                <br>
                <h4>🔹 Sécurité alimentaire</h4>
                <p>Un territoire connaît la sécurité alimentaire lorsque sa population dispose d'un accès suffisant à une alimentation sûre et nutritive.</p>
            `,
            objectifs: [
                'Distinguer agriculture vivrière et commerciale',
                'Comparer différents systèmes agricoles',
                'Comprendre les enjeux de la sécurité alimentaire'
            ],
            matieres: [
                'Agriculture vivrière',
                'Agriculture commerciale',
                'Rendements',
                'Sécurité alimentaire'
            ],
            exercices: [
                {
                    question: 'Une agriculture vivrière sert principalement à...',
                    options: [
                        'Nourrir la population locale',
                        'Exporter toute la production',
                        'Produire uniquement pour l’industrie',
                        'Produire de l’énergie'
                    ],
                    correct: 0,
                    correction: "L'agriculture vivrière vise principalement l'alimentation de la population locale."
                }
            ]
        },

        {
            id: 'geo4_population',
            titre: "3. Population & migrations",
            desc: "UAA2 - Répartition de la population, croissance et mobilités.",
            niveau: '4e',
            icone: '👥',
            color: '#9333ea',
            cours: `
                <h4>🔹 La répartition de la population</h4>
                <p>La population mondiale est très inégalement répartie. Les fortes densités se concentrent notamment dans les plaines, les littoraux et les régions urbanisées.</p>
                <br>
                <h4>🔹 La croissance démographique</h4>
                <p>La croissance d'une population dépend du solde naturel et du solde migratoire.</p>
                <br>
                <h4>🔹 Les migrations</h4>
                <p>Une migration est un déplacement durable d'une personne. Elle peut être volontaire ou forcée, nationale ou internationale.</p>
                <br>
                <h4>🔹 Facteurs de départ et d'attraction</h4>
                <p>Les populations peuvent quitter un territoire à cause de conflits, de difficultés économiques ou de catastrophes. Elles peuvent être attirées par l'emploi, la sécurité ou de meilleures conditions de vie.</p>
            `,
            objectifs: [
                'Analyser la répartition de la population',
                'Comprendre les facteurs des migrations',
                'Distinguer solde naturel et solde migratoire'
            ],
            matieres: [
                'Densité de population',
                'Croissance démographique',
                'Migrations',
                'Facteurs de départ et d’attraction'
            ],
            exercices: [
                {
                    question: 'Une migration est...',
                    options: [
                        'Un déplacement durable de population',
                        'Un déplacement touristique d'une journée',
                        'Une variation de température',
                        'Une croissance économique'
                    ],
                    correct: 0,
                    correction: 'Une migration correspond à un déplacement durable d’une personne ou d’une population.'
                }
            ]
        }
    ],

    '5e': [
        {
            id: 'geo5_urbanisation',
            titre: "1. Urbanisation & métropolisation",
            desc: "UAA2 - Croissance urbaine, métropoles et organisation des espaces.",
            niveau: '5e',
            icone: '🌆',
            color: '#7c3aed',
            cours: `
                <h4>🔹 L'urbanisation</h4>
                <p>L'urbanisation correspond à l'augmentation de la population vivant dans les villes et à l'extension des espaces urbains.</p>
                <br>
                <h4>🔹 La métropolisation</h4>
                <p>La métropolisation désigne la concentration des populations, des activités de commandement et des richesses dans les grandes villes.</p>
                <br>
                <h4>🔹 Les métropoles</h4>
                <p>Une métropole exerce une influence importante sur un territoire grâce à ses fonctions économiques, politiques, culturelles et de transport.</p>
                <br>
                <h4>🔹 Étalement urbain</h4>
                <p>L'étalement urbain correspond à l'extension de la ville vers les espaces périphériques. Il augmente souvent les déplacements domicile-travail.</p>
            `,
            objectifs: [
                "Définir urbanisation et métropolisation",
                'Identifier les fonctions métropolitaines',
                "Analyser l'organisation d'une métropole"
            ],
            matieres: [
                'Urbanisation',
                'Métropolisation',
                'Fonctions de commandement',
                'Étalement urbain'
            ],
            exercices: [
                {
                    question: 'La métropolisation correspond à...',
                    options: [
                        'La concentration des fonctions importantes dans les grandes villes',
                        'La disparition des villes',
                        'La diminution des transports',
                        'La baisse de la population urbaine'
                    ],
                    correct: 0,
                    correction: 'La métropolisation renforce le poids des grandes villes et leurs fonctions de commandement.'
                }
            ]
        },

        {
            id: 'geo5_industrie',
            titre: "2. Espaces industriels",
            desc: "UAA3 - Localisation, mondialisation et transformations industrielles.",
            niveau: '5e',
            icone: '🏭',
            color: '#475569',
            cours: `
                <h4>🔹 Les facteurs de localisation industrielle</h4>
                <p>Les industries recherchent différents atouts : main-d'œuvre, matières premières, énergie, transports, proximité des marchés ou infrastructures.</p>
                <br>
                <h4>🔹 La mondialisation</h4>
                <p>La production industrielle est organisée à l'échelle mondiale. Une entreprise peut concevoir un produit dans un pays, produire ses composants dans plusieurs autres et vendre sur différents marchés.</p>
                <br>
                <h4>🔹 Les délocalisations</h4>
                <p>Une délocalisation consiste à déplacer une activité productive vers un autre territoire, notamment pour réduire certains coûts ou se rapprocher d'un marché.</p>
            `,
            objectifs: [
                'Identifier les facteurs de localisation industrielle',
                'Comprendre les chaînes de production mondialisées',
                'Analyser les effets des délocalisations'
            ],
            matieres: [
                'Localisation industrielle',
                'Mondialisation',
                'Délocalisation',
                'Chaînes de production'
            ],
            exercices: [
                {
                    question: 'Une entreprise choisit une localisation industrielle notamment selon...',
                    options: [
                        'Les transports et la proximité des marchés',
                        'La couleur des bâtiments',
                        'La latitude uniquement',
                        'La superficie du pays uniquement'
                    ],
                    correct: 0,
                    correction: 'Les transports, les marchés, la main-d’œuvre et les infrastructures font partie des facteurs de localisation.'
                }
            ]
        },

        {
            id: 'geo5_transports',
            titre: "3. Transports & mobilités",
            desc: "UAA3 - Réseaux, flux et accessibilité des territoires.",
            niveau: '5e',
            icone: '🚆',
            color: '#0284c7',
            cours: `
                <h4>🔹 Les réseaux</h4>
                <p>Un réseau de transport relie différents lieux grâce à des infrastructures et des axes de circulation.</p>
                <br>
                <h4>🔹 Les flux</h4>
                <p>Les flux correspondent aux déplacements de personnes, de marchandises, de capitaux ou d'informations entre différents territoires.</p>
                <br>
                <h4>🔹 L'accessibilité</h4>
                <p>L'accessibilité mesure la facilité avec laquelle un lieu peut être atteint depuis d'autres territoires.</p>
                <br>
                <h4>🔹 Les pôles</h4>
                <p>Les grands ports, aéroports, gares et plateformes logistiques jouent un rôle majeur dans l'organisation des échanges.</p>
            `,
            objectifs: [
                'Lire et analyser un réseau de transport',
                'Identifier les principaux flux',
                "Comprendre l'importance de l'accessibilité"
            ],
            matieres: [
                'Réseaux',
                'Flux',
                'Accessibilité',
                'Pôles de transport'
            ],
            exercices: [
                {
                    question: 'Un flux géographique est...',
                    options: [
                        'Un déplacement entre deux lieux',
                        'Une frontière politique',
                        'Une montagne',
                        'Une zone climatique'
                    ],
                    correct: 0,
                    correction: 'Un flux correspond à une circulation entre différents lieux.'
                }
            ]
        }
    ],

    '6e': [
        {
            id: 'geo6_developpement',
            titre: "1. Développement durable",
            desc: "UAA1 - Ressources, environnement et développement durable.",
            niveau: '6e',
            icone: '🌱',
            color: '#16a34a',
            cours: `
                <h4>🔹 Le développement durable</h4>
                <p>Le développement durable cherche à répondre aux besoins actuels tout en permettant aux générations futures de répondre aux leurs.</p>
                <br>
                <h4>🔹 Les trois piliers</h4>
                <ul>
                    <li><b>Économique :</b> produire et créer des richesses.</li>
                    <li><b>Social :</b> répondre aux besoins des populations et réduire les inégalités.</li>
                    <li><b>Environnemental :</b> préserver les ressources et les écosystèmes.</li>
                </ul>
                <br>
                <h4>🔹 Les ODD</h4>
                <p>Les Objectifs de développement durable regroupent des objectifs internationaux visant notamment à lutter contre la pauvreté, protéger l'environnement et améliorer les conditions de vie.</p>
                <br>
                <h4>🔹 Économie circulaire</h4>
                <p>L'économie circulaire cherche à réduire le gaspillage en favorisant la réutilisation, la réparation, le recyclage et une utilisation plus efficace des ressources.</p>
            `,
            objectifs: [
                'Définir le développement durable',
                'Identifier les trois piliers',
                'Comprendre les ODD',
                "Expliquer le principe de l'économie circulaire"
            ],
            matieres: [
                'Développement durable',
                'ODD',
                'Économie circulaire'
            ],
            exercices: [
                {
                    question: 'Le développement durable repose sur...',
                    options: [
                        'Trois piliers : économique, social, environnemental',
                        'Deux piliers : économie et politique',
                        'Le PIB uniquement',
                        'Les énergies fossiles'
                    ],
                    correct: 0,
                    correction: 'Les trois piliers sont économique, social et environnemental.'
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
                <p>Lorsqu'un territoire doit remplir plusieurs fonctions (logement, industrie, loisirs), il existe des <b>conflits d'usage</b> entre les acteurs.</p>
                <br>
                <h4>🔹 L'exemple de la clinique du MontLégia (Liège)</h4>
                <p>Le CHC a regroupé ses trois cliniques en un seul site (MontLégia) pour rationaliser. Ce choix a tenu compte des contraintes urbanistiques, de la mobilité, mais a des conséquences pour les patients et les riverains.</p>
                <br>
                <h4>🔹 Plan d'affectation du sol</h4>
                <p>Document qui définit les usages autorisés des sols (zone d'habitat, zone industrielle, zone verte). Il encadre l'aménagement.</p>
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
                    question: "Un conflit d'usage survient quand...",
                    options: [
                        'Deux fonctions différentes se disputent le même espace',
                        'Il y a un tremblement de terre',
                        'Le climat change',
                        'Une autoroute est construite'
                    ],
                    correct: 0,
                    correction: "Les conflits d'usage surgissent lorsque différents acteurs veulent utiliser le même terrain."
                }
            ]
        },

        {
            id: 'geo6_geopolitique',
            titre: "3. Géopolitique et conflits",
            desc: "UAA - Puissance, ressources et tensions.",
            niveau: '6e',
            icone: '🕊️',
            color: '#c0392b',
            cours: `
                <h4>🔹 La notion de puissance</h4>
                <p>Un État est puissant s'il dispose d'influence militaire, économique, diplomatique et culturelle.</p>
                <br>
                <h4>🔹 Les tensions</h4>
                <ul>
                    <li>Contrôle des ressources (eau, énergie, terres rares)</li>
                    <li>Frontières contestées</li>
                    <li>Rivalités idéologiques</li>
                </ul>
                <br>
                <h4>🔹 La géographie prospective</h4>
                <p>Elle tente d'imaginer les territoires de demain pour anticiper les conflits et les besoins.</p>
            `,
            objectifs: [
                'Comprendre la notion de puissance',
                'Identifier les sources de tensions',
                'Se projeter dans le futur (prospective)'
            ],
            matieres: [
                'Puissance et influence',
                'Ressources et conflits',
                'Géographie prospective'
            ],
            exercices: [
                {
                    question: 'La géopolitique étudie...',
                    options: [
                        'Les rivalités de pouvoir sur un territoire',
                        'Les climats',
                        'Les systèmes agricoles',
                        'Les statistiques'
                    ],
                    correct: 0,
                    correction: 'La géopolitique analyse les rapports de force liés au territoire.'
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
                <p>Pour réussir l'examen (voir Question 2 du Jury CESS) :</p>
                <ul>
                    <li><b>Introduction :</b> Annonce claire du sujet.</li>
                    <li><b>Développement :</b> 2 à 3 arguments géographiques (atouts, contraintes).</li>
                    <li><b>Conclusion :</b> Synthèse et ouverture.</li>
                </ul>
                <br>
                <h4>🔹 Utiliser le vocabulaire précis</h4>
                <p>Utiliser les mots <b>"Atout"</b> et <b>"Contrainte"</b>, et justifier avec des faits précis (localisation, distance-temps, spécialisation).</p>
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
                    question: 'Pour un aéroport, une contrainte est...',
                    options: [
                        'Les nuisances sonores',
                        "La proximité d'une autoroute",
                        "La main-d'œuvre disponible",
                        "L'espace disponible"
                    ],
                    correct: 0,
                    correction: "Les nuisances sonores sont une contrainte pour l'environnement et les riverains."
                }
            ]
        }
    ]
};


// =========================================================
// JEU DES CAPITALES (Enrichi)
// =========================================================

var CAPITALES = [
    { pays: "France", capitale: "Paris", continent: "Europe" },
    { pays: "Belgique", capitale: "Bruxelles", continent: "Europe" },
    { pays: "Allemagne", capitale: "Berlin", continent: "Europe" },
    { pays: "Espagne", capitale: "Madrid", continent: "Europe" },
    { pays: "Italie", capitale: "Rome", continent: "Europe" },
    { pays: "Portugal", capitale: "Lisbonne", continent: "Europe" },
    { pays: "Pays-Bas", capitale: "Amsterdam", continent: "Europe" },
    { pays: "Royaume-Uni", capitale: "Londres", continent: "Europe" },
    { pays: "Irlande", capitale: "Dublin", continent: "Europe" },
    { pays: "Suisse", capitale: "Berne", continent: "Europe" },
    { pays: "Autriche", capitale: "Vienne", continent: "Europe" },
    { pays: "Pologne", capitale: "Varsovie", continent: "Europe" },
    { pays: "Suède", capitale: "Stockholm", continent: "Europe" },
    { pays: "Norvège", capitale: "Oslo", continent: "Europe" },
    { pays: "Danemark", capitale: "Copenhague", continent: "Europe" },
    { pays: "Finlande", capitale: "Helsinki", continent: "Europe" },
    { pays: "Grèce", capitale: "Athènes", continent: "Europe" },
    { pays: "Turquie", capitale: "Ankara", continent: "Europe/Asie" },
    { pays: "Russie", capitale: "Moscou", continent: "Europe/Asie" },
    { pays: "Ukraine", capitale: "Kiev", continent: "Europe" },
    { pays: "États-Unis", capitale: "Washington", continent: "Amérique" },
    { pays: "Canada", capitale: "Ottawa", continent: "Amérique" },
    { pays: "Mexique", capitale: "Mexico", continent: "Amérique" },
    { pays: "Brésil", capitale: "Brasilia", continent: "Amérique" },
    { pays: "Argentine", capitale: "Buenos Aires", continent: "Amérique" },
    { pays: "Chili", capitale: "Santiago", continent: "Amérique" },
    { pays: "Colombie", capitale: "Bogota", continent: "Amérique" },
    { pays: "Pérou", capitale: "Lima", continent: "Amérique" },
    { pays: "Chine", capitale: "Pékin", continent: "Asie" },
    { pays: "Japon", capitale: "Tokyo", continent: "Asie" },
    { pays: "Corée du Sud", capitale: "Séoul", continent: "Asie" },
    { pays: "Inde", capitale: "New Delhi", continent: "Asie" },
    { pays: "Thaïlande", capitale: "Bangkok", continent: "Asie" },
    { pays: "Vietnam", capitale: "Hanoï", continent: "Asie" },
    { pays: "Indonésie", capitale: "Jakarta", continent: "Asie" },
    { pays: "Australie", capitale: "Canberra", continent: "Océanie" },
    { pays: "Nouvelle-Zélande", capitale: "Wellington", continent: "Océanie" },
    { pays: "Égypte", capitale: "Le Caire", continent: "Afrique" },
    { pays: "Maroc", capitale: "Rabat", continent: "Afrique" },
    { pays: "Algérie", capitale: "Alger", continent: "Afrique" },
    { pays: "Tunisie", capitale: "Tunis", continent: "Afrique" },
    { pays: "Sénégal", capitale: "Dakar", continent: "Afrique" },
    { pays: "Afrique du Sud", capitale: "Pretoria", continent: "Afrique" },
    { pays: "Nigeria", capitale: "Abuja", continent: "Afrique" },
    { pays: "Kenya", capitale: "Nairobi", continent: "Afrique" },
    { pays: "Éthiopie", capitale: "Addis-Abeba", continent: "Afrique" }
];


// =========================================================
// EXAMEN BLANC TYPE CESS (Question 2)
// =========================================================

var EXAMENS_CESS = [
    {
        id: 'cess_aeroports',
        titre: "Les aéroports wallons (CRL et LGG)",
        exercices: [
            {
                question: "Q1. Tableau Atouts/Contraintes pour CRL",
                type: 'texte',
                options: [],
                correct: 0,
                correction: "Voir la grille de correction."
            },
            {
                question: "Q2. Rédigez un texte argumentatif sur la spécialisation des aéroports wallons en utilisant les mots atout et contrainte.",
                type: 'texte',
                options: [],
                correct: 0,
                correction: "Le texte doit comporter une introduction, un développement, une conclusion et utiliser les mots clés."
            }
        ]
    }
];
