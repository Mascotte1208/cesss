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
                    correction: 'L\'aléa est le phénomène, le risque est la rencontre avec des enjeux humains.'
                },
                {
                    question: 'La vulnérabilité d\'un territoire dépend...',
                    options: [
                        'De sa densité de population et de ses infrastructures',
                        'De son climat uniquement',
                        'De sa latitude',
                        'De son PIB'
                    ],
                    correct: 0,
                    correction: 'La vulnérabilité est liée aux enjeux humains.'
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
                        'À la proximité de l\'équateur',
                        'À l\'altitude',
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
                        'Réchauffer l\'Europe de l\'Ouest',
                        'Refroidir l\'Arctique',
                        'Assécher le Sahara',
                        'Créer des moussons'
                    ],
                    correct: 0,
                    correction: 'Le Gulf Stream apporte de la chaleur à l\'Europe occidentale.'
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
                'Identifier les fonctions d\'un territoire',
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
                <p>Mexico pompe excessivement ses nappes phréatiques, ce qui provoque l'affaissement du sol, des fuites et une contamination de l'eau.</p>
            `,
            objectifs: [
                'Décrire la répartition de la ressource en eau',
                'Expliquer le concept de stress hydrique',
                'Analyser les conflits d\'usage de l\'eau'
            ],
            matieres: [
                'Bassins hydrographiques et nappes aquifères',
                'Stress hydrique',
                'Gestion de l\'eau et aménagements'
            ],
            exercices: [
                {
                    question: 'Une nappe aquifère est...',
                    options: [
                        'Une nappe d\'eau souterraine',
                        'Un fleuve',
                        'Un lac de barrage',
                        'Une usine de dessalement'
                    ],
                    correct: 0,
                    correction: 'Une nappe aquifère est une réserve d\'eau souterraine.'
                },
                {
                    question: 'Pourquoi Mexico s\'enfonce-t-elle ?',
                    options: [
                        'Car elle puise trop d\'eau dans le sous-sol',
                        'Parce qu\'elle est sur une faille',
                        'Car elle est trop peuplée',
                        'Car il pleut trop'
                    ],
                    correct: 0,
                    correction: 'Le pompage excessif des nappes provoque l\'affaissement du sol.'
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
                    <li><b>Vivrière :</b> Nourrit la famille, souvent en Afrique/Asie.</li>
                    <li><b>Commerciale ou intensive :</b> Rendements élevés, usage d'engrais et pesticides, destinée à la vente (exportation).</li>
                    <li><b>Extensive :</b> Grands espaces, faibles rendements (élevage, céréales).</li>
                </ul>
                <br>
                <h4>🔹 La sécurité alimentaire</h4>
                <p>Elle est assurée quand chaque personne a accès à une nourriture suffisante, saine et nutritive. Elle dépend de la production, des revenus, des transports et des conflits.</p>
                <br>
                <h4>🔹 Les contraintes</h4>
                <p>Pauvreté, changement climatique (sécheresses), spéculation, gaspillage alimentaire.</p>
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
                    question: 'L\'agriculture vivrière...',
                    options: [
                        'Nourrit principalement la famille',
                        'Est destinée à l\'exportation',
                        'Utilise beaucoup d\'engrais',
                        'Nécessite de grands espaces'
                    ],
                    correct: 0,
                    correction: 'L\'agriculture vivrière est destinée à l\'auto-consommation.'
                }
            ]
        },

        {
            id: 'geo4_amenagement',
            titre: "3. Aménagement du territoire",
            desc: "UAA3 - Les fonctions d'un territoire et leur gestion.",
            niveau: '4e',
            icone: '🏗️',
            color: '#0e7c86',
            cours: `
                <h4>🔹 Les fonctions d'un territoire</h4>
                <p>Un territoire remplit des fonctions : <b>habiter, travailler, se soigner, se déplacer, se divertir</b>. L'aménagement du territoire organise ces fonctions.</p>
                <br>
                <h4>🔹 L'accessibilité</h4>
                <p>Elle se mesure par le <b>distance-temps</b> (le temps nécessaire pour se rendre à un service). Les réseaux de transport sont essentiels.</p>
                <br>
                <h4>🔹 L'exemple des aéroports wallons</h4>
                <p>L'aéroport de Charleroi (CRL) et celui de Liège (LGG) ont des spécialisations différentes (low-cost vs fret). Leur site présente des <b>atouts</b> (autoroutes, main-d'œuvre) et des <b>contraintes</b> (nuisances sonores, capacité des pistes).</p>
            `,
            objectifs: [
                'Identifier les fonctions d\'un territoire',
                'Analyser l\'accessibilité et les réseaux',
                'Comparer des aménagements (atouts/contraintes)'
            ],
            matieres: [
                'Fonctions du territoire',
                'Réseaux de transport',
                'Aménagement du territoire'
            ],
            exercices: [
                {
                    question: 'Le distance-temps est...',
                    options: [
                        'Le temps nécessaire pour se rendre à un service',
                        'La distance en kilomètres',
                        'Le coût du trajet',
                        'La vitesse maximale'
                    ],
                    correct: 0,
                    correction: 'Le distance-temps est un indicateur d\'accessibilité.'
                }
            ]
        }
    ],

    '5e': [
        {
            id: 'geo5_energie',
            titre: "1. Les ressources énergétiques",
            desc: "UAA1 - Énergies fossiles, renouvelables et flux mondiaux.",
            niveau: '5e',
            icone: '⚡',
            color: '#d69e2e',
            cours: `
                <h4>🔹 Énergies fossiles vs renouvelables</h4>
                <ul>
                    <li><b>Fossiles :</b> Pétrole, gaz, charbon. Non renouvelables, émetteurs de CO₂.</li>
                    <li><b>Renouvelables :</b> Solaire, éolien, hydraulique, biomasse, géothermie.</li>
                </ul>
                <br>
                <h4>🔹 Flux et mondialisation</h4>
                <p>La production d'énergie est inégalement répartie (Moyen-Orient, Russie, USA). Les <b>flux</b> de pétrole et de gaz (oléoducs, méthaniers, navires) relient les zones de production aux zones de consommation.</p>
                <br>
                <h4>🔹 L'exemple du Laos</h4>
                <p>Le Laos produit de l'hydroélectricité (barrage sur le Mékong) et exporte 90% de son électricité vers la Thaïlande. Ceci apporte des devises mais crée un risque (rupture de barrage) et des impacts environnementaux.</p>
            `,
            objectifs: [
                'Distinguer énergies fossiles et renouvelables',
                'Caractériser des flux énergétiques',
                'Comprendre les enjeux de la transition énergétique'
            ],
            matieres: [
                'Énergies fossiles et renouvelables',
                'Flux et mondialisation',
                'Transition énergétique'
            ],
            exercices: [
                {
                    question: 'Quelle énergie n\'est pas renouvelable ?',
                    options: [
                        'Le charbon',
                        'Le solaire',
                        'L\'éolien',
                        'L\'hydraulique'
                    ],
                    correct: 0,
                    correction: 'Le charbon est une énergie fossile épuisable.'
                }
            ]
        },

        {
            id: 'geo5_mondialisation',
            titre: "2. La mondialisation",
            desc: "UAA1 - Les flux et les acteurs de la mondialisation.",
            niveau: '5e',
            icone: '🌐',
            color: '#3182ce',
            cours: `
                <h4>🔹 Qu'est-ce que la mondialisation ?</h4>
                <p>Interdépendance croissante entre les territoires via des flux de marchandises, capitaux, informations et personnes.</p>
                <br>
                <h4>🔹 Les acteurs</h4>
                <ul>
                    <li>Firmes transnationales (FTN)</li>
                    <li>Organisations internationales (OMC, FMI, ONU)</li>
                    <li>États et régions</li>
                    <li>ONG (Organisations non gouvernementales)</li>
                </ul>
                <br>
                <h4>🔹 Les conséquences</h4>
                <p>Délocalisations, interdépendances, uniformisation culturelle, mais aussi inégalités et tensions géopolitiques.</p>
            `,
            objectifs: [
                'Définir la mondialisation',
                'Identifier les acteurs et les flux',
                'Évaluer les conséquences positives et négatives'
            ],
            matieres: [
                'Flux mondiaux',
                'Firmes transnationales',
                'Délocalisations'
            ],
            exercices: [
                {
                    question: 'Une firme transnationale est...',
                    options: [
                        'Une entreprise implantée dans plusieurs pays',
                        'Une entreprise locale',
                        'Une ONG',
                        'Un État'
                    ],
                    correct: 0,
                    correction: 'Une FTN a des activités dans plusieurs pays.'
                }
            ]
        },

        {
            id: 'geo5_migrations',
            titre: "3. Les migrations",
            desc: "UAA1 - Les flux de population et leurs causes.",
            niveau: '5e',
            icone: '🧳',
            color: '#805ad5',
            cours: `
                <h4>🔹 Types de migrations</h4>
                <ul>
                    <li><b>Économique :</b> Recherche d'un emploi ou de meilleures conditions de vie.</li>
                    <li><b>Contrainte :</b> Guerres, persécutions, catastrophes naturelles.</li>
                </ul>
                <br>
                <h4>🔹 Facteurs "push" et "pull"</h4>
                <p><b>Push :</b> pauvreté, conflits, chômage, catastrophes (repousse).<br>
                <b>Pull :</b> emplois, sécurité, études, liberté (attire).</p>
            `,
            objectifs: [
                'Différencier les types de migrations',
                'Analyser les facteurs push/pull',
                'Comprendre les enjeux migratoires'
            ],
            matieres: [
                'Migrations économiques et contraintes',
                'Facteurs push/pull',
                'Intégration et politiques migratoires'
            ],
            exercices: [
                {
                    question: 'Un facteur "push" est...',
                    options: [
                        'Un élément qui pousse à quitter son pays',
                        'Un élément qui attire vers un pays',
                        'Un visa',
                        'Une association'
                    ],
                    correct: 0,
                    correction: 'Les facteurs push sont des éléments négatifs qui poussent au départ.'
                }
            ]
        }
    ],

    '6e': [
        {
            id: 'geo6_durable',
            titre: "1. Développement durable",
            desc: "UAA - Les trois piliers et les ODD.",
            niveau: '6e',
            icone: '♻️',
            color: '#38a169',
            cours: `
                <h4>🔹 Les trois piliers</h4>
                <ul>
                    <li><b>Économique :</b> rentabilité et prospérité.</li>
                    <li><b>Social :</b> équité et bien-être des populations.</li>
                    <li><b>Environnemental :</b> préservation de la planète.</li>
                </ul>
                <br>
                <h4>🔹 Les ODD</h4>
                <p>17 Objectifs de Développement Durable adoptés par l'ONU en 2015 pour 2030. Ils visent à éradiquer la pauvreté, protéger la planète et assurer la prospérité pour tous.</p>
            `,
            objectifs: [
                'Connaître les trois piliers',
                'Relier les enjeux aux ODD',
                'Argumenter sur des choix durables'
            ],
            matieres: [
                'Piliers du développement durable',
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
                'Identifier les fonctions et conflits d\'usage',
                'Analyser la pertinence d\'un aménagement',
                'Comprendre les outils de gestion du territoire'
            ],
            matieres: [
                'Conflits d\'usage',
                'Schéma d\'aménagement',
                'Plan d\'affectation du sol'
            ],
            exercices: [
                {
                    question: 'Un conflit d\'usage survient quand...',
                    options: [
                        'Deux fonctions différentes se disputent le même espace',
                        'Il y a un tremblement de terre',
                        'Le climat change',
                        'Une autoroute est construite'
                    ],
                    correct: 0,
                    correction: 'Les conflits d\'usage surgissent lorsque différents acteurs veulent utiliser le même terrain.'
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
                        'La proximité d\'une autoroute',
                        'La main-d\'œuvre disponible',
                        'L\'espace disponible'
                    ],
                    correct: 0,
                    correction: 'Les nuisances sonores sont une contrainte pour l\'environnement et les riverains.'
                }
            ]
        }
    ]
};


// =========================================================
// JEU DES CAPITALES
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
// EXAMEN BLANC TYPE CESS
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


// =========================================================
// COMPATIBILITÉ AVEC app.js
// =========================================================
// Le reste du site utilise GEO_DATA sous forme de tableau.
// On transforme automatiquement GEO_CHAPITRES en tableau.

var GEO_DATA = [];

Object.keys(GEO_CHAPITRES).forEach(function(year) {

    GEO_CHAPITRES[year].forEach(function(chapter) {

        GEO_DATA.push({
            id: chapter.id,
            title: chapter.titre,
            description: chapter.desc,
            year: chapter.niveau,
            icon: chapter.icone,
            color: chapter.color,
            content: chapter.cours,
            objectifs: chapter.objectifs,
            matieres: chapter.matieres,
            exercices: chapter.exercices
        });

    });

});
