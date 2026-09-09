// =========================================================
// DONNÉES DU PROGRAMME DE GÉOGRAPHIE - VERSION ENRICHIE
// Édition CESS - Cours complet + exercices + pièges + check-lists
// =========================================================

var GEO_CHAPITRES = {

    // =====================================================
    // 3e — GRANDS REPÈRES GÉOGRAPHIQUES (NOUVEAU)
    // =====================================================

    '3e': [

        {
            id: 'geo3_repères',
            titre: "1. Les grands repères géographiques",
            desc: "UAA1 - Localisation, échelle, territoire et flux.",
            niveau: '3e',
            icone: '🌍',
            color: '#3182ce',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Espace géographique :</b> portion de la surface terrestre étudiée par les géographes.</li>
                    <li><b>Échelle :</b> rapport entre une distance sur une carte et la distance réelle.</li>
                    <li><b>Territoire :</b> espace approprié, organisé et transformé par des sociétés.</li>
                    <li><b>Localisation :</b> position d'un lieu sur la Terre (coordonnées, région, pays).</li>
                    <li><b>Flux :</b> circulation de personnes, marchandises, capitaux ou informations.</li>
                    <li><b>Centre / Périphérie :</b> opposition entre espaces dominants et espaces dépendants.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Lire une situation géographique commence par la <b>localisation</b>. On identifie où se trouve le phénomène, à quelle échelle il agit et quels espaces sont reliés.</p>
                <p>Une même question peut être étudiée à plusieurs échelles : locale, régionale, nationale, continentale et mondiale. Changer d'échelle peut faire apparaître des causes ou des conséquences différentes.</p>
                <p>Un territoire possède des <b>acteurs</b>, des <b>fonctions</b>, des <b>réseaux</b> et des <b>dynamiques</b>.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Localiser avant d'expliquer.</li>
                    <li>Comparer les échelles.</li>
                    <li>Repérer les centres, périphéries, axes et discontinuités.</li>
                    <li>Identifier les flux et les acteurs.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Une métropole peut dominer à l'échelle nationale tout en étant seulement un nœud parmi d'autres à l'échelle mondiale.</li>
                    <li>Une frontière peut être une séparation politique mais aussi un espace d'échanges.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Localiser le phénomène.</li>
                    <li>Déterminer l'échelle d'analyse.</li>
                    <li>Décrire l'organisation de l'espace.</li>
                    <li>Identifier les flux.</li>
                    <li>Expliquer les dynamiques.</li>
                </ol>
                <div class="astuce">💡 Réflexe géographe : toujours préciser l'échelle avant d'expliquer un phénomène.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre localisation et description.</li>
                        <li>⚠️ Oublier de préciser l'échelle.</li>
                        <li>⚠️ Confondre centre et périphérie.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je sais localiser un phénomène</li>
                        <li>☐ Je sais changer d'échelle</li>
                        <li>☐ Je sais identifier un flux</li>
                        <li>☐ Je sais distinguer centre et périphérie</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Maîtriser les notions d\'espace, d\'échelle et de territoire',
                'Comprendre l\'importance de la localisation',
                'Identifier les flux et les acteurs'
            ],

            matieres: [
                'Espace géographique',
                'Échelle',
                'Territoire',
                'Localisation',
                'Flux',
                'Centre / Périphérie'
            ],

            exercices: [
                {
                    question: 'À quoi sert le changement d\'échelle en géographie ?',
                    options: [
                        'Il permet d\'observer un phénomène sous plusieurs angles',
                        'Il permet de changer de sujet',
                        'Il rend les cartes plus belles',
                        'Il supprime les détails inutiles'
                    ],
                    correct: 0,
                    correction: 'Changer d\'échelle permet d\'observer un phénomène sous plusieurs angles et de faire apparaître des causes ou des conséquences différentes.'
                }
            ]
        },


        // =====================================================
        // 3e — LIRE UNE CARTE (NOUVEAU)
        // =====================================================

        {
            id: 'geo3_cartes',
            titre: "2. Lire et analyser une carte",
            desc: "UAA1 - Les éléments d'une carte et leur interprétation.",
            niveau: '3e',
            icone: '🗺️',
            color: '#2b6cb0',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Titre :</b> indique le sujet de la carte.</li>
                    <li><b>Légende :</b> explique les symboles et les couleurs.</li>
                    <li><b>Orientation :</b> repère le nord.</li>
                    <li><b>Échelle :</b> rapport entre la carte et la réalité.</li>
                    <li><b>Source :</b> origine des données.</li>
                    <li><b>Figurés :</b> points, lignes, surfaces qui représentent l'information.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Une carte est une représentation simplifiée et construite de l'espace. Elle sélectionne des informations afin de répondre à une question.</p>
                <p>Une bonne lecture distingue <b>ce que montre la carte</b> de <b>ce qu'on peut expliquer</b> grâce à ses informations.</p>
                <p>L'échelle indique le rapport entre une distance sur la carte et la distance réelle. Une carte à <b>petite échelle</b> couvre un grand espace avec moins de détails ; une carte à <b>grande échelle</b> montre un espace plus restreint avec davantage de détails.</p>

                <h4>🔹 Méthode d'analyse d'une carte</h4>
                <ol>
                    <li>Lire le titre, la date et la source.</li>
                    <li>Identifier l'espace représenté et l'échelle.</li>
                    <li>Lire toute la légende.</li>
                    <li>Décrire les grandes structures spatiales.</li>
                    <li>Localiser avec des repères précis.</li>
                    <li>Comparer les espaces.</li>
                    <li>Expliquer avec des facteurs géographiques.</li>
                    <li>Conclure en répondant à la problématique.</li>
                </ol>
                <div class="astuce">💡 Toujours décrire avant d'interpréter.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Lire la carte sans regarder la légende.</li>
                        <li>⚠️ Confondre petite et grande échelle.</li>
                        <li>⚠️ Interpréter sans décrire d'abord.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je sais lire le titre, la légende et l'échelle</li>
                        <li>☐ Je sais décrire une carte</li>
                        <li>☐ Je sais comparer des espaces</li>
                        <li>☐ Je sais interpréter une carte</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Identifier les éléments d\'une carte',
                'Comprendre l\'importance de l\'échelle',
                'Analyser une carte en 8 étapes'
            ],

            matieres: [
                'Titre',
                'Légende',
                'Orientation',
                'Échelle',
                'Source',
                'Figurés',
                'Localisation'
            ],

            exercices: [
                {
                    question: 'Une carte montre de fortes concentrations autour de plusieurs grandes villes et peu de population dans certaines régions. Que faut-il faire avant de donner une explication ?',
                    options: [
                        'Décrire précisément la répartition et localiser les concentrations et les espaces peu peuplés',
                        'Donner directement une explication économique',
                        'Ignorer les régions vides',
                        'Se concentrer uniquement sur les villes'
                    ],
                    correct: 0,
                    correction: 'Il faut d\'abord décrire précisément la répartition et localiser les concentrations et les espaces peu peuplés. Ensuite seulement, on cherche des facteurs physiques, historiques, économiques ou politiques.'
                }
            ]
        },


        // =====================================================
        // 3e — CLIMATS (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo3_climats',
            titre: "3. Climats & Bioclimats",
            desc: "UAA1 - Les climats et les milieux naturels.",
            niveau: '3e',
            icone: '🌡️',
            color: '#38a169',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Climat :</b> caractéristiques moyennes de l'atmosphère sur une longue période.</li>
                    <li><b>Météo :</b> état de l'atmosphère à court terme.</li>
                    <li><b>Latitude :</b> distance par rapport à l'équateur.</li>
                    <li><b>Altitude :</b> hauteur par rapport au niveau de la mer.</li>
                    <li><b>Continentalité :</b> influence de l'éloignement des océans.</li>
                    <li><b>Biome :</b> grande formation écologique liée au climat.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Le <b>temps météorologique</b> décrit l'état de l'atmosphère à court terme ; le <b>climat</b> correspond aux caractéristiques moyennes de l'atmosphère sur une longue période.</p>
                <p>Les climats dépendent notamment de la <b>latitude</b>, de l'<b>altitude</b>, de la <b>distance à la mer</b>, des circulations atmosphériques et océaniques, ainsi que du relief.</p>
                <p>On distingue notamment des climats : équatorial, tropical, désertique, océanique, continental, méditerranéen, polaire et montagnard.</p>
                <p>Le <b>changement climatique</b> actuel est principalement lié à l'augmentation des gaz à effet de serre dus aux activités humaines.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li><b>Latitude :</b> l'énergie solaire reçue varie avec la position.</li>
                    <li><b>Altitude :</b> la température diminue généralement avec l'altitude.</li>
                    <li><b>Continentalité :</b> les contrastes thermiques augmentent loin des océans.</li>
                    <li>Les océans et courants redistribuent de la chaleur.</li>
                    <li>La végétation dépend du climat mais aussi des sols et des activités humaines.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Forêt équatoriale : chaude et humide.</li>
                    <li>Savane : saison sèche et saison humide.</li>
                    <li>Désert : très aride.</li>
                    <li>Forêts tempérées : moyennes latitudes.</li>
                    <li>Taïga et toundra : hautes latitudes.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Identifier température + précipitations + saisonnalité.</li>
                    <li>Expliquer par les facteurs climatiques (latitude, altitude, etc.).</li>
                    <li>Relier au biome et aux activités humaines.</li>
                </ol>
                <div class="astuce">💡 Un climat ne s'explique jamais par un seul facteur.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre météo et climat.</li>
                        <li>⚠️ Réduire le climat à la seule latitude.</li>
                        <li>⚠️ Oublier l'impact de l'altitude.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je connais les grands types de climats</li>
                        <li>☐ Je sais expliquer les facteurs climatiques</li>
                        <li>☐ Je relie climat et biome</li>
                        <li>☐ Je comprends le changement climatique</li>
                    </ul>
                </div>
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
                'Biomes'
            ],

            exercices: [
                {
                    question: "Quel facteur explique notamment la diminution de la température avec l'altitude ?",
                    options: [
                        "L'altitude",
                        'La longitude',
                        'La population',
                        'Le PIB'
                    ],
                    correct: 0,
                    correction: "La température diminue généralement lorsque l'altitude augmente."
                },
                {
                    question: 'Quel climat est caractérisé par des étés chauds et secs ?',
                    options: [
                        'Méditerranéen',
                        'Équatorial',
                        'Polaire',
                        'Océanique'
                    ],
                    correct: 0,
                    correction: 'Le climat méditerranéen connaît des étés chauds et secs.'
                }
            ]
        },


        // =====================================================
        // 3e — POPULATION (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo3_population',
            titre: "4. Population & Répartition",
            desc: "UAA1 - La répartition de la population mondiale.",
            niveau: '3e',
            icone: '👥',
            color: '#3182ce',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Densité :</b> nombre d'habitants par unité de surface (hab./km²).</li>
                    <li><b>Solde naturel :</b> natalité - mortalité.</li>
                    <li><b>Natalité :</b> nombre de naissances pour 1000 habitants.</li>
                    <li><b>Mortalité :</b> nombre de décès pour 1000 habitants.</li>
                    <li><b>Fécondité :</b> nombre moyen d'enfants par femme.</li>
                    <li><b>Transition démographique :</b> passage d'une natalité et mortalité élevées à faibles.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>La population mondiale est très inégalement répartie. Les fortes concentrations se trouvent notamment en Asie orientale, en Asie du Sud et en Europe.</p>
                <p>La <b>densité de population</b> correspond au nombre d'habitants rapporté à une surface. La répartition dépend de facteurs physiques (climat, relief, eau) mais aussi historiques, économiques, politiques et technologiques.</p>
                <p>La <b>transition démographique</b> décrit le passage d'un régime caractérisé par une natalité et une mortalité élevées vers un régime où les deux deviennent faibles, avec une phase intermédiaire de forte croissance naturelle.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Disponibilité de l'eau.</li>
                    <li>Fertilité des sols.</li>
                    <li>Climat et relief.</li>
                    <li>Histoire du peuplement.</li>
                    <li>Emplois, infrastructures et urbanisation.</li>
                    <li>Politiques et conflits.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Toujours préciser l'unité : habitants/km².</li>
                    <li>Ne pas confondre population totale et densité.</li>
                    <li>Distinguer facteurs physiques et humains.</li>
                </ol>
                <div class="astuce">💡 Une densité élevée ne signifie pas toujours une surpopulation.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre population totale et densité.</li>
                        <li>⚠️ Oublier de préciser l'unité.</li>
                        <li>⚠️ Réduire la répartition à un seul facteur.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je sais calculer une densité</li>
                        <li>☐ Je localise les principaux foyers de population</li>
                        <li>☐ J'explique les facteurs de répartition</li>
                        <li>☐ Je comprends la transition démographique</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Localiser les principaux foyers de population',
                'Identifier les espaces faiblement peuplés',
                'Calculer et interpréter une densité de population'
            ],

            matieres: [
                'Répartition mondiale',
                'Densité de population',
                'Foyers et déserts humains',
                'Transition démographique'
            ],

            exercices: [
                {
                    question: 'La densité de population correspond...',
                    options: [
                        "Au nombre d'habitants par unité de surface",
                        'Au nombre total de villes',
                        'Au PIB par habitant',
                        'À la superficie totale'
                    ],
                    correct: 0,
                    correction: "La densité mesure le nombre d'habitants rapporté à une unité de surface."
                }
            ]
        },


        // =====================================================
        // 3e — URBANISATION (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo3_urbanisation',
            titre: "5. Urbanisation & Métropolisation",
            desc: "UAA1 - La croissance urbaine et les métropoles.",
            niveau: '3e',
            icone: '🏙️',
            color: '#805ad5',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Urbanisation :</b> augmentation de la population vivant dans les villes et extension des espaces urbains.</li>
                    <li><b>Taux d'urbanisation :</b> pourcentage de la population vivant en ville.</li>
                    <li><b>Métropole :</b> grande ville qui concentre des fonctions de commandement.</li>
                    <li><b>Métropolisation :</b> concentration des fonctions majeures dans les grandes villes.</li>
                    <li><b>Mégalopole :</b> vaste région urbaine continue.</li>
                    <li><b>Ville mondiale :</b> métropole influente à l'échelle internationale.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>L'<b>urbanisation</b> correspond à l'augmentation de la population vivant dans des espaces urbains et à l'extension des espaces bâtis.</p>
                <p>La <b>métropolisation</b> désigne la concentration des populations, des emplois qualifiés, des fonctions de commandement et des activités stratégiques dans les grandes villes.</p>
                <p>Les métropoles concentrent des sièges d'entreprises, des universités, des services supérieurs, des infrastructures de transport et des fonctions politiques ou culturelles.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Exode rural et croissance naturelle.</li>
                    <li>Concentration des emplois et services.</li>
                    <li>Attractivité des réseaux de transport.</li>
                    <li>Hausse des prix fonciers et spécialisation des espaces.</li>
                    <li>Création de périphéries et d'axes métropolitains.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>New York, Londres, Paris, Tokyo : villes mondiales.</li>
                    <li>Métropoles des pays émergents en forte croissance.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Distinguer population, fonctions, extension spatiale et connexions.</li>
                    <li>Identifier les échelles d'influence.</li>
                </ol>
                <div class="astuce">💡 Une métropole peut dominer à l'échelle nationale mais être secondaire à l'échelle mondiale.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre urbanisation et métropolisation.</li>
                        <li>⚠️ Oublier les périphéries dans l'analyse.</li>
                        <li>⚠️ Réduire la métropole à sa taille démographique.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis l'urbanisation</li>
                        <li>☐ Je définis la métropolisation</li>
                        <li>☐ Je connais des exemples de métropoles</li>
                        <li>☐ J'explique les fonctions des métropoles</li>
                    </ul>
                </div>
            `,

            objectifs: [
                "Définir l'urbanisation",
                'Expliquer la métropolisation',
                'Identifier les fonctions de commandement des métropoles'
            ],

            matieres: [
                'Urbanisation',
                'Métropolisation',
                'Fonctions urbaines'
            ],

            exercices: [
                {
                    question: 'La métropolisation correspond principalement...',
                    options: [
                        'Au renforcement du poids des grandes villes',
                        'À la disparition des villes',
                        'À la baisse de la population urbaine',
                        'À la diminution des transports'
                    ],
                    correct: 0,
                    correction: 'La métropolisation renforce le rôle des grandes villes dans les réseaux et les territoires.'
                }
            ]
        },


        // =====================================================
        // 3e — ÉTALEMENT URBAIN (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo3_etalement',
            titre: "6. Étalement urbain & mobilités",
            desc: "UAA1 - L'extension des villes et les migrations pendulaires.",
            niveau: '3e',
            icone: '🚗',
            color: '#6b46c1',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Périurbanisation :</b> extension de l'habitat et des activités vers les périphéries.</li>
                    <li><b>Suburbanisation :</b> développement des banlieues.</li>
                    <li><b>Étalement urbain :</b> extension de la ville vers les espaces périphériques.</li>
                    <li><b>Navetteur :</b> personne qui effectue des déplacements quotidiens entre domicile et travail.</li>
                    <li><b>Mobilité pendulaire :</b> déplacement régulier entre le domicile et le lieu de travail ou d'études.</li>
                    <li><b>Artificialisation :</b> transformation des sols naturels ou agricoles en surfaces urbaines.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>L'<b>étalement urbain</b> correspond à l'extension de la ville vers les espaces périphériques. Il peut être lié à la recherche de logements plus grands, au prix du foncier, à l'usage de la voiture et au développement des infrastructures.</p>
                <p>La périurbanisation transforme des espaces ruraux ou agricoles en espaces résidentiels et mixtes. Les déplacements domicile-travail deviennent souvent plus longs.</p>
                <p>Les conséquences sont environnementales, sociales et économiques : consommation d'espace, dépendance automobile, congestion, émissions, fragmentation des milieux.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Prix et disponibilité du foncier.</li>
                    <li>Automobile et routes.</li>
                    <li>Recherche d'espace résidentiel.</li>
                    <li>Localisation des emplois.</li>
                    <li>Politiques d'aménagement.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Périphéries des grandes agglomérations.</li>
                    <li>Axes routiers et ferroviaires reliant les communes périphériques au centre.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Identifier les causes de l'étalement.</li>
                    <li>Décrire les formes spatiales.</li>
                    <li>Analyser les mobilités.</li>
                    <li>Identifier les impacts.</li>
                    <li>Proposer des solutions.</li>
                </ol>
                <div class="astuce">💡 L'étalement urbain n'est pas inéluctable : des politiques d'aménagement peuvent le limiter.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre étalement et densification.</li>
                        <li>⚠️ Oublier les conséquences environnementales.</li>
                        <li>⚠️ Réduire l'étalement à un seul facteur.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis l'étalement urbain</li>
                        <li>☐ J'identifie ses causes</li>
                        <li>☐ Je connais ses conséquences</li>
                        <li>☐ Je sais analyser un exemple</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Définir l\'étalement urbain et identifier ses causes',
                'Expliquer les conséquences de l\'étalement urbain',
                'Analyser un exemple d\'étalement urbain en Belgique'
            ],

            matieres: [
                'Étalement urbain',
                'Migrations pendulaires',
                'Distance-temps',
                'Périurbanisation'
            ],

            exercices: [
                {
                    question: 'L\'étalement urbain désigne...',
                    options: [
                        'L\'extension des villes vers les périphéries',
                        'La concentration des populations dans les centres-villes',
                        'La diminution de la population urbaine',
                        'La construction de gratte-ciel'
                    ],
                    correct: 0,
                    correction: 'L\'étalement urbain est l\'extension des villes vers les espaces périphériques.'
                },
                {
                    question: 'Une conséquence de l\'étalement urbain est...',
                    options: [
                        'L\'augmentation des migrations pendulaires',
                        'La réduction des distances-temps',
                        'La diminution de la consommation d\'espace',
                        'La baisse des émissions de CO2'
                    ],
                    correct: 0,
                    correction: 'L\'étalement urbain entraîne une augmentation des déplacements domicile-travail.'
                }
            ]
        },


        // =====================================================
        // 3e — MILIEUX & BIOMES (NOUVEAU)
        // =====================================================

        {
            id: 'geo3_biomes',
            titre: "7. Milieux & Biomes",
            desc: "UAA1 - Les grandes formations écologiques et leur dynamique.",
            niveau: '3e',
            icone: '🌳',
            color: '#2f855a',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Milieu :</b> ensemble des éléments naturels et des sociétés qui les transforment.</li>
                    <li><b>Biome :</b> grande formation écologique liée à des conditions climatiques et biologiques.</li>
                    <li><b>Biodiversité :</b> variété des êtres vivants dans un milieu.</li>
                    <li><b>Désertification :</b> dégradation des terres en zones arides.</li>
                    <li><b>Déforestation :</b> disparition des forêts.</li>
                    <li><b>Toundra :</b> biome froid avec pergélisol.</li>
                    <li><b>Taïga :</b> forêt boréale de conifères.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Un <b>milieu</b> associe des éléments naturels et les sociétés qui les utilisent et les transforment. Un <b>biome</b> est une grande formation écologique liée à des conditions climatiques et biologiques caractéristiques.</p>
                <p>Les forêts tropicales sont chaudes et très humides ; les savanes connaissent une alternance de saison humide et de saison sèche ; les déserts ont une très faible disponibilité en eau ; les milieux tempérés sont généralement plus favorables à une grande diversité d'activités ; la taïga et la toundra sont adaptées au froid.</p>
                <p>Les biomes sont dynamiques. Déforestation, agriculture, urbanisation, exploitation minière et changement climatique peuvent modifier leur fonctionnement.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Climat → végétation dominante.</li>
                    <li>Ressources → activités humaines.</li>
                    <li>Activités → transformations du milieu.</li>
                    <li>Transformations → risques et nouvelles politiques de gestion.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Amazonie et autres forêts tropicales.</li>
                    <li>Sahel et savanes.</li>
                    <li>Sahara et autres déserts.</li>
                    <li>Taïga boréale.</li>
                    <li>Toundra arctique.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Identifier le biome.</li>
                    <li>Relier climat et végétation.</li>
                    <li>Identifier les activités humaines.</li>
                    <li>Analyser les transformations.</li>
                    <li>Proposer des solutions de gestion.</li>
                </ol>
                <div class="astuce">💡 Toujours relier milieu naturel et sociétés.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Présenter la nature comme indépendante des usages humains.</li>
                        <li>⚠️ Oublier que les biomes sont dynamiques.</li>
                        <li>⚠️ Confondre biome et écosystème local.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je connais les grands biomes</li>
                        <li>☐ Je relie climat et biome</li>
                        <li>☐ J'identifie les pressions humaines</li>
                        <li>☐ Je comprends les dynamiques des milieux</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Identifier les grands biomes',
                'Relier climat, végétation et activités humaines',
                'Comprendre les dynamiques des milieux'
            ],

            matieres: [
                'Milieu',
                'Biome',
                'Biodiversité',
                'Désertification',
                'Déforestation'
            ],

            exercices: [
                {
                    question: 'Pourquoi une même activité agricole ne peut-elle pas être pratiquée de la même manière partout ?',
                    options: [
                        'Parce que les conditions climatiques, les sols et l\'eau varient',
                        'Parce que les agriculteurs sont différents',
                        'Parce que les machines sont différentes',
                        'Parce que les gouvernements l\'interdisent'
                    ],
                    correct: 0,
                    correction: 'Les conditions climatiques, les sols, l\'eau disponible, le relief et les contraintes biologiques varient. Les techniques et les productions doivent donc être adaptées au milieu.'
                }
            ]
        },


        // =====================================================
        // 3e — RESSOURCES NATURELLES (NOUVEAU)
        // =====================================================

        {
            id: 'geo3_ressources',
            titre: "8. Ressources naturelles de base",
            desc: "UAA1 - Les ressources, leur disponibilité et leur gestion.",
            niveau: '3e',
            icone: '⛏️',
            color: '#d69e2e',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Ressource :</b> élément du milieu rendu utile par une société.</li>
                    <li><b>Ressource renouvelable :</b> peut se reconstituer à l'échelle humaine.</li>
                    <li><b>Ressource non renouvelable :</b> se constitue beaucoup plus lentement (échelle géologique).</li>
                    <li><b>Rareté :</b> disponibilité limitée d'une ressource.</li>
                    <li><b>Eau douce :</b> ressource essentielle aux sociétés.</li>
                    <li><b>Énergie :</b> ressource nécessaire aux activités humaines.</li>
                    <li><b>Conflit d'usage :</b> opposition entre différents usages d'une même ressource.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Une <b>ressource</b> est un élément du milieu rendu utile par une société. Une ressource renouvelable peut se reconstituer à l'échelle humaine si son exploitation reste compatible avec sa capacité de renouvellement ; une ressource non renouvelable se constitue beaucoup plus lentement.</p>
                <p>L'eau, les sols, les forêts, les minerais et les sources d'énergie sont essentiels aux sociétés mais leur disponibilité et leur accessibilité sont inégales.</p>
                <p>Les tensions viennent notamment de la rareté locale, de la concurrence entre usages, des inégalités d'accès, de la pollution et des transformations environnementales.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Disponibilité physique.</li>
                    <li>Accès technique et financier.</li>
                    <li>Répartition spatiale.</li>
                    <li>Consommation et demande.</li>
                    <li>Gouvernance et conflits d'usage.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Bassins fluviaux partagés entre plusieurs États.</li>
                    <li>Régions minières.</li>
                    <li>Espaces forestiers soumis à des pressions.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Identifier la ressource.</li>
                    <li>Analyser sa disponibilité.</li>
                    <li>Identifier les usages.</li>
                    <li>Identifier les acteurs.</li>
                    <li>Analyser les tensions.</li>
                    <li>Proposer une gestion durable.</li>
                </ol>
                <div class="astuce">💡 Une ressource n'est pas une ressource par elle-même : c'est la société qui la rend utile.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre ressource renouvelable et inépuisable.</li>
                        <li>⚠️ Oublier que l'accès dépend des infrastructures.</li>
                        <li>⚠️ Réduire les tensions à la seule rareté.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis une ressource</li>
                        <li>☐ Je distingue renouvelable et non renouvelable</li>
                        <li>☐ J'identifie les tensions liées aux ressources</li>
                        <li>☐ Je comprends la notion de conflit d'usage</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Distinguer ressources renouvelables et non renouvelables',
                'Identifier les tensions liées aux ressources',
                'Comprendre la notion de conflit d\'usage'
            ],

            matieres: [
                'Ressource',
                'Renouvelable',
                'Non renouvelable',
                'Rareté',
                'Eau douce',
                'Énergie',
                'Conflit d\'usage'
            ],

            exercices: [
                {
                    question: 'Explique la différence entre ressource renouvelable et ressource non renouvelable.',
                    options: [
                        'Une ressource renouvelable peut se reconstituer rapidement ; une non renouvelable a des stocks limités',
                        'Une ressource renouvelable est gratuite ; une non renouvelable est payante',
                        'Une ressource renouvelable est naturelle ; une non renouvelable est artificielle',
                        'Il n\'y a pas de différence'
                    ],
                    correct: 0,
                    correction: 'Une ressource renouvelable peut se reconstituer relativement rapidement si elle est gérée durablement ; une ressource non renouvelable possède des stocks limités à l\'échelle humaine.'
                }
            ]
        }

    ],


    // =====================================================
    // 4e
    // =====================================================

    '4e': [

        // =====================================================
        // 4e — EAU (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo4_eau',
            titre: "1. L'eau : une ressource à gérer",
            desc: "UAA2 - Disponibilité, usages et gestion de l'eau.",
            niveau: '4e',
            icone: '💧',
            color: '#3182ce',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Cycle de l'eau :</b> circulation de l'eau entre atmosphère, océans, sols, rivières et nappes.</li>
                    <li><b>Bassin versant :</b> ensemble des terres dont les eaux s'écoulent vers un même cours d'eau.</li>
                    <li><b>Stress hydrique :</b> situation où la disponibilité de l'eau est insuffisante par rapport aux besoins.</li>
                    <li><b>Accès à l'eau :</b> capacité à disposer d'une eau potable sûre et à proximité.</li>
                    <li><b>Irrigation :</b> apport artificiel d'eau aux cultures.</li>
                    <li><b>Conflit d'usage :</b> opposition entre différents usages de l'eau.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>L'eau circule entre atmosphère, océans, sols, végétation, rivières et nappes. Cette circulation forme le <b>cycle de l'eau</b>.</p>
                <p>Les ressources d'eau douce sont très inégalement réparties et leur accès dépend aussi des infrastructures, des revenus, de la qualité de l'eau et de la gouvernance.</p>
                <p>L'agriculture irriguée représente un usage majeur de l'eau dans de nombreuses régions. Les villes et les industries sont également de grands utilisateurs.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Climat → disponibilité.</li>
                    <li>Croissance démographique → demande.</li>
                    <li>Agriculture → irrigation.</li>
                    <li>Urbanisation → besoins urbains.</li>
                    <li>Pollution → diminution de la qualité.</li>
                    <li>Gestion → réduction des conflits et des pertes.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Bassins fluviaux transfrontaliers.</li>
                    <li>Régions arides dépendantes des aquifères.</li>
                    <li>Grandes métropoles confrontées à la sécurité de l'approvisionnement.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Ne pas confondre quantité d'eau présente et accès réel à une eau potable sûre.</li>
                    <li>Distinguer disponibilité physique et accès économique.</li>
                    <li>Identifier les acteurs et leurs intérêts.</li>
                </ol>
                <div class="astuce">💡 Une région peut avoir beaucoup d'eau et connaître un stress hydrique si l'accès est mal organisé.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre quantité disponible et accès réel.</li>
                        <li>⚠️ Oublier l'impact de la pollution.</li>
                        <li>⚠️ Réduire les tensions à la seule rareté physique.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je comprends le cycle de l'eau</li>
                        <li>☐ Je définis le stress hydrique</li>
                        <li>☐ J'identifie les usages de l'eau</li>
                        <li>☐ Je comprends les enjeux de gestion</li>
                    </ul>
                </div>
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
                    question: 'Le stress hydrique correspond à...',
                    options: [
                        'Une situation où la demande en eau est importante par rapport aux ressources disponibles',
                        'Une région où il pleut tous les jours',
                        'Une rivière très longue',
                        'Une réserve de pétrole'
                    ],
                    correct: 0,
                    correction: "Le stress hydrique apparaît lorsque les besoins sont élevés par rapport aux ressources disponibles."
                },
                {
                    question: "Qu'est-ce qu'un bassin versant ?",
                    options: [
                        "Un territoire dont les eaux s'écoulent vers un même exutoire",
                        'Une zone uniquement agricole',
                        'Une nappe phréatique',
                        'Un barrage'
                    ],
                    correct: 0,
                    correction: "Le bassin versant regroupe les territoires dont les eaux convergent vers un même cours d'eau ou exutoire."
                }
            ]
        },


        // =====================================================
        // 4e — NOURRIR LES HOMMES (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo4_nourriture',
            titre: "2. Nourrir les hommes",
            desc: "UAA2 - Agriculture, alimentation et sécurité alimentaire.",
            niveau: '4e',
            icone: '🌾',
            color: '#d69e2e',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Sécurité alimentaire :</b> situation où les populations disposent d'un accès suffisant à une alimentation sûre et adaptée.</li>
                    <li><b>Insécurité alimentaire :</b> situation où l'accès à une alimentation suffisante n'est pas garanti.</li>
                    <li><b>Agriculture vivrière :</b> agriculture destinée principalement à nourrir la famille ou la population locale.</li>
                    <li><b>Agriculture commerciale :</b> agriculture destinée à la vente sur les marchés.</li>
                    <li><b>Rendement :</b> quantité produite par unité de surface.</li>
                    <li><b>Intensification :</b> augmentation de la production par unité de surface.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Nourrir les hommes dépend de la production agricole, de la distribution, des revenus, des infrastructures, des politiques publiques et de la stabilité politique.</p>
                <p>L'agriculture vivrière vise principalement l'alimentation des producteurs et des populations proches ; l'agriculture commerciale produit pour les marchés nationaux ou internationaux.</p>
                <p>L'augmentation des rendements peut venir de semences, irrigation, engrais, mécanisation et organisation des filières, mais ces techniques peuvent aussi créer des pressions environnementales.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Disponibilité alimentaire.</li>
                    <li>Accès économique.</li>
                    <li>Stabilité des approvisionnements.</li>
                    <li>Qualité nutritionnelle.</li>
                    <li>Durabilité de la production.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Bassins céréaliers.</li>
                    <li>Régions d'agriculture intensive.</li>
                    <li>Cultures d'exportation tropicales.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Analyser un système alimentaire : produire → transformer → transporter → distribuer → consommer.</li>
                    <li>Identifier les acteurs à chaque étape.</li>
                </ol>
                <div class="astuce">💡 Une hausse de la production ne garantit pas la sécurité alimentaire si l'accès économique est insuffisant.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre production agricole et sécurité alimentaire.</li>
                        <li>⚠️ Oublier le rôle des infrastructures.</li>
                        <li>⚠️ Réduire l'agriculture à un seul type.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis la sécurité alimentaire</li>
                        <li>☐ Je distingue agriculture vivrière et commerciale</li>
                        <li>☐ J'identifie les facteurs de production</li>
                        <li>☐ Je comprends les enjeux alimentaires</li>
                    </ul>
                </div>
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
                    question: "L'agriculture vivrière est principalement destinée à...",
                    options: [
                        'Nourrir les populations locales',
                        'Exporter toutes les productions',
                        'Produire uniquement des fleurs',
                        'Alimenter les transports'
                    ],
                    correct: 0,
                    correction: "L'agriculture vivrière vise principalement l'alimentation des populations locales."
                }
            ]
        },


        // =====================================================
        // 4e — AMÉNAGEMENT (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo4_amenagement',
            titre: "3. Aménager les territoires",
            desc: "UAA3 - Accessibilité, services et inégalités territoriales.",
            niveau: '4e',
            icone: '🛣️',
            color: '#dd6b20',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Aménagement :</b> action d'organiser et de transformer l'espace.</li>
                    <li><b>Acteur :</b> personne, groupe ou institution qui agit sur un territoire.</li>
                    <li><b>Infrastructure :</b> équipement collectif (routes, écoles, hôpitaux, etc.).</li>
                    <li><b>Inégalité territoriale :</b> différence d'accès aux services et aux infrastructures.</li>
                    <li><b>Développement territorial :</b> amélioration des conditions de vie sur un territoire.</li>
                    <li><b>Planification :</b> organisation à long terme du territoire.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Aménager un territoire consiste à organiser et transformer l'espace afin de répondre à des objectifs économiques, sociaux, environnementaux ou politiques.</p>
                <p>Les acteurs sont multiples : pouvoirs publics, collectivités, entreprises, habitants, associations et organisations internationales.</p>
                <p>Un aménagement peut réduire certaines inégalités mais peut aussi produire des effets indésirables ou opposer des intérêts.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Diagnostic du territoire.</li>
                    <li>Objectifs.</li>
                    <li>Choix d'un projet.</li>
                    <li>Financement.</li>
                    <li>Mise en œuvre.</li>
                    <li>Évaluation et adaptation.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Transports collectifs.</li>
                    <li>Zones d'activités.</li>
                    <li>Rénovation urbaine.</li>
                    <li>Protection d'espaces naturels.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Identifier les acteurs et leurs intérêts.</li>
                    <li>Analyser les échelles concernées.</li>
                    <li>Identifier les contraintes.</li>
                    <li>Analyser les effets.</li>
                </ol>
                <div class="astuce">💡 Un aménagement peut provoquer des conflits parce que les acteurs n'ont pas toujours les mêmes intérêts.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier les acteurs dans l'analyse.</li>
                        <li>⚠️ Confondre aménagement et simple construction.</li>
                        <li>⚠️ Ignorer les conflits d'usage.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis l'aménagement</li>
                        <li>☐ J'identifie les acteurs du territoire</li>
                        <li>☐ Je comprends les inégalités territoriales</li>
                        <li>☐ J'analyse un projet d'aménagement</li>
                    </ul>
                </div>
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
                    question: 'Pourquoi les aménagements peuvent-ils provoquer des conflits ?',
                    options: [
                        'Parce que les acteurs n\'ont pas toujours les mêmes intérêts',
                        'Parce qu\'ils sont toujours mal faits',
                        'Parce qu\'ils coûtent trop cher',
                        'Parce qu\'ils sont inutiles'
                    ],
                    correct: 0,
                    correction: 'Les acteurs n\'ont pas toujours les mêmes intérêts : emploi contre protection environnementale, infrastructure contre paysage, logement contre terres agricoles, etc.'
                }
            ]
        },


        // =====================================================
        // 4e — MOBILITÉS (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo4_transports',
            titre: "4. Mobilités & Réseaux",
            desc: "UAA3 - Déplacements, réseaux et accessibilité.",
            niveau: '4e',
            icone: '🚆',
            color: '#319795',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Mobilité :</b> déplacement d'une personne entre deux lieux.</li>
                    <li><b>Réseau :</b> ensemble de lignes reliant différents lieux.</li>
                    <li><b>Nœud :</b> lieu où plusieurs réseaux se croisent.</li>
                    <li><b>Axe :</b> ligne qui relie plusieurs nœuds.</li>
                    <li><b>Hub :</b> nœud majeur où convergent et se redistribuent de nombreux flux.</li>
                    <li><b>Flux :</b> circulation de personnes, marchandises, capitaux ou informations.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Les réseaux organisent les circulations de personnes, marchandises, capitaux et informations. Un <b>nœud</b> concentre des connexions ; un <b>axe</b> relie plusieurs nœuds.</p>
                <p>Les transports réduisent certaines distances-temps et renforcent la mise en relation des territoires. Mais tous les territoires ne disposent pas du même niveau de connexion.</p>
                <p>Les mobilités quotidiennes, touristiques, professionnelles et migratoires répondent à des motivations différentes.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Accessibilité.</li>
                    <li>Distance-temps.</li>
                    <li>Coût du déplacement.</li>
                    <li>Infrastructure.</li>
                    <li>Attractivité des pôles.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Aéroports internationaux.</li>
                    <li>Ports.</li>
                    <li>Corridors ferroviaires et autoroutiers.</li>
                    <li>Réseaux numériques.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Sur une carte de flux : repérer les nœuds, les axes, les volumes et les directions.</li>
                    <li>Analyser les échelles de mobilité.</li>
                </ol>
                <div class="astuce">💡 Un hub est un nœud majeur où convergent et se redistribuent de nombreux flux.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre mobilité et migration.</li>
                        <li>⚠️ Oublier les flux numériques.</li>
                        <li>⚠️ Réduire les réseaux aux seuls transports.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis une mobilité</li>
                        <li>☐ Je comprends le rôle des réseaux</li>
                        <li>☐ J'identifie les nœuds et les axes</li>
                        <li>☐ Je sais lire une carte de flux</li>
                    </ul>
                </div>
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
                    question: 'Un réseau de transport sert principalement à...',
                    options: [
                        'Relier différents territoires',
                        'Empêcher les déplacements',
                        'Réduire toutes les villes',
                        'Supprimer les échanges'
                    ],
                    correct: 0,
                    correction: 'Les réseaux de transport permettent de relier les territoires et de faciliter les mobilités.'
                }
            ]
        },


        // =====================================================
        // 4e — MIGRATIONS (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo4_migrations',
            titre: "5. Migrations en Belgique",
            desc: "UAA2 - Les migrations à toutes les échelles.",
            niveau: '4e',
            icone: '🧳',
            color: '#667eea',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Migration :</b> déplacement d'une personne ou d'un groupe impliquant un changement de lieu de résidence.</li>
                    <li><b>Immigration :</b> entrée sur un territoire.</li>
                    <li><b>Émigration :</b> sortie d'un territoire.</li>
                    <li><b>Solde migratoire :</b> immigration - émigration.</li>
                    <li><b>Réfugié :</b> personne contrainte de quitter son pays et bénéficiant d'une protection internationale.</li>
                    <li><b>Demandeur de protection :</b> personne qui demande le statut de réfugié.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>La Belgique est un territoire d'immigration depuis plusieurs décennies, avec des profils migratoires liés à l'histoire économique, aux regroupements familiaux, aux études, au travail et aux crises internationales.</p>
                <p>Il faut distinguer <b>migration</b>, <b>immigration</b>, <b>émigration</b> et <b>statut juridique</b>.</p>
                <p>Les migrations transforment les territoires : démographie, travail, logements, écoles, services, cultures et relations entre territoires.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Facteurs de départ : emploi, revenus, conflits, persécutions, études, famille.</li>
                    <li>Facteurs d'attraction : sécurité, emploi, réseaux familiaux, services.</li>
                    <li>Politiques migratoires et frontières.</li>
                    <li>Réseaux diasporiques.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Grandes villes belges et régions industrielles historiques.</li>
                    <li>Mobilités européennes.</li>
                    <li>Accueil de personnes fuyant des crises internationales.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Toujours préciser : qui migre ? d'où ? vers où ? pourquoi ? dans quel cadre juridique ? avec quelles conséquences ?</li>
                </ol>
                <div class="astuce">💡 Un déplacement résulte souvent de plusieurs facteurs combinés.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Réduire les migrations à une seule cause.</li>
                        <li>⚠️ Confondre migrant économique et réfugié.</li>
                        <li>⚠️ Oublier les migrations internes.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis une migration</li>
                        <li>☐ Je distingue immigration et émigration</li>
                        <li>☐ J'identifie les facteurs push et pull</li>
                        <li>☐ Je comprends les impacts des migrations</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Identifier les différents types de migrations en Belgique',
                'Expliquer les facteurs d\'attraction et de départ',
                'Analyser les flux migratoires à différentes échelles'
            ],

            matieres: [
                'Migrations internes et internationales',
                'Flux migratoires',
                'Attractivité des territoires',
                'Facteurs push et pull'
            ],

            exercices: [
                {
                    question: 'Les migrations pendulaires sont...',
                    options: [
                        'Des déplacements quotidiens entre le domicile et le travail',
                        'Des migrations internationales',
                        'Des déplacements touristiques',
                        'Des migrations de retraités'
                    ],
                    correct: 0,
                    correction: 'Les migrations pendulaires sont des déplacements réguliers entre le domicile et le lieu de travail.'
                }
            ]
        },


        // =====================================================
        // 4e — BELGIQUE (NOUVEAU)
        // =====================================================

        {
            id: 'geo4_belgique',
            titre: "6. La Belgique — structure territoriale",
            desc: "UAA - L'organisation institutionnelle de la Belgique.",
            niveau: '4e',
            icone: '🇧🇪',
            color: '#1a365d',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>État fédéral :</b> État organisé en entités fédérées disposant de compétences propres.</li>
                    <li><b>Région :</b> entité fédérée compétente en matière territoriale.</li>
                    <li><b>Communauté :</b> entité fédérée compétente en matière liée aux personnes (langue, culture, enseignement).</li>
                    <li><b>Province :</b> subdivision administrative intermédiaire.</li>
                    <li><b>Commune :</b> échelon administratif local.</li>
                    <li><b>Compétence :</b> domaine d'action d'une institution.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>La Belgique est un <b>État fédéral</b>. Elle comprend <b>trois Régions</b> — Région flamande, Région wallonne et Région de Bruxelles-Capitale — et <b>trois Communautés</b> — flamande, française et germanophone.</p>
                <p>Les Régions exercent principalement des compétences liées au territoire, comme l'aménagement, le logement, l'environnement et une partie de la mobilité et de l'économie.</p>
                <p>Les Communautés exercent des compétences liées aux personnes, notamment l'enseignement, la culture et certaines matières sociales et linguistiques.</p>
                <p>Le territoire belge est également organisé en provinces et communes, avec une organisation institutionnelle particulière pour Bruxelles-Capitale.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Région = logique territoriale.</li>
                    <li>Communauté = logique liée aux personnes, langue et culture.</li>
                    <li>Commune = échelle locale.</li>
                    <li>Fédéral = compétences définies par la Constitution et les lois spéciales.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Bruxelles-Capitale comme région bilingue.</li>
                    <li>Communauté germanophone à l'est du pays.</li>
                    <li>Régions flamande et wallonne.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Pour une question institutionnelle belge, utiliser les termes exacts : 3 Régions + 3 Communautés.</li>
                    <li>Distinguer compétences territoriales et compétences liées aux personnes.</li>
                </ol>
                <div class="astuce">💡 La Région est fondée sur un territoire ; la Communauté est fondée sur la langue et la culture.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre Région et Communauté.</li>
                        <li>⚠️ Oublier la Communauté germanophone.</li>
                        <li>⚠️ Réduire Bruxelles à une Région unilingue.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je connais les 3 Régions et les 3 Communautés</li>
                        <li>☐ Je distingue leurs compétences</li>
                        <li>☐ Je comprends l'organisation fédérale</li>
                        <li>☐ Je sais expliquer le statut de Bruxelles</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Comprendre l\'organisation fédérale de la Belgique',
                'Distinguer Région et Communauté',
                'Identifier les compétences de chaque entité'
            ],

            matieres: [
                'État fédéral',
                'Région',
                'Communauté',
                'Province',
                'Commune',
                'Compétence'
            ],

            exercices: [
                {
                    question: 'Quelle est la différence essentielle entre Région et Communauté ?',
                    options: [
                        'La Région est fondée sur un territoire ; la Communauté est fondée sur la langue et la culture',
                        'La Région est plus grande que la Communauté',
                        'La Communauté est plus ancienne que la Région',
                        'Il n\'y a pas de différence'
                    ],
                    correct: 0,
                    correction: 'La Région est principalement fondée sur un territoire et ses politiques territoriales ; la Communauté est principalement liée aux personnes, à la langue, à la culture et à l\'enseignement.'
                }
            ]
        },


        // =====================================================
        // 4e — ÉNERGIE (NOUVEAU)
        // =====================================================

        {
            id: 'geo4_energie',
            titre: "7. Énergie — introduction",
            desc: "UAA - Sources d'énergie, mix énergétique et transition.",
            niveau: '4e',
            icone: '⚡',
            color: '#ecc94b',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Énergie primaire :</b> ressource énergétique disponible dans la nature (pétrole, gaz, solaire, etc.).</li>
                    <li><b>Énergie finale :</b> énergie livrée au consommateur (électricité, carburant).</li>
                    <li><b>Fossile :</b> énergie issue de ressources non renouvelables (pétrole, gaz, charbon).</li>
                    <li><b>Renouvelable :</b> énergie provenant d'une ressource qui se renouvelle à l'échelle humaine.</li>
                    <li><b>Mix énergétique :</b> combinaison de sources d'énergie d'un territoire.</li>
                    <li><b>Transition énergétique :</b> transformation des modes de production et de consommation d'énergie.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Les sociétés utilisent de l'énergie pour se déplacer, produire, chauffer, communiquer et transformer des matières.</p>
                <p>Les combustibles fossiles sont des ressources non renouvelables et leur combustion émet du CO2. Les renouvelables comprennent notamment l'éolien, le solaire, l'hydraulique et la biomasse, avec des caractéristiques différentes.</p>
                <p>Le <b>mix énergétique</b> désigne la combinaison de sources d'énergie d'un territoire. La <b>transition énergétique</b> vise notamment à réduire les émissions, améliorer l'efficacité et diversifier les sources.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Ressource disponible.</li>
                    <li>Technologies.</li>
                    <li>Coûts.</li>
                    <li>Sécurité d'approvisionnement.</li>
                    <li>Impacts environnementaux.</li>
                    <li>Politiques publiques.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Éolien offshore en mer du Nord.</li>
                    <li>Nucléaire historiquement important en Belgique.</li>
                    <li>Développement du solaire et de l'efficacité énergétique.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Toujours distinguer source d'énergie, mode de production, usage et impact.</li>
                    <li>Analyser le mix énergétique d'un territoire.</li>
                </ol>
                <div class="astuce">💡 On parle de mix énergétique parce qu'un territoire utilise plusieurs sources d'énergie.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre énergie primaire et énergie finale.</li>
                        <li>⚠️ Croire qu'une énergie renouvelable est toujours sans impact.</li>
                        <li>⚠️ Oublier que le mix énergétique varie selon les territoires.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je distingue énergies fossiles et renouvelables</li>
                        <li>☐ Je définis le mix énergétique</li>
                        <li>☐ Je comprends la transition énergétique</li>
                        <li>☐ J'identifie les enjeux énergétiques</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Distinguer énergies fossiles et renouvelables',
                'Comprendre la notion de mix énergétique',
                'Identifier les enjeux de la transition énergétique'
            ],

            matieres: [
                'Énergie primaire',
                'Énergie finale',
                'Fossile',
                'Renouvelable',
                'Mix énergétique',
                'Transition énergétique'
            ],

            exercices: [
                {
                    question: 'Pourquoi parle-t-on de mix énergétique ?',
                    options: [
                        'Parce qu\'un territoire utilise plusieurs sources d\'énergie',
                        'Parce qu\'il n\'y a qu\'une seule source d\'énergie',
                        'Parce que l\'énergie est mélangée',
                        'Parce que c\'est un terme marketing'
                    ],
                    correct: 0,
                    correction: 'Un territoire utilise plusieurs sources d\'énergie. Leur combinaison dépend des ressources, infrastructures, choix politiques, coûts et objectifs environnementaux.'
                }
            ]
        }

    ],


    // =====================================================
    // 5e
    // =====================================================

    '5e': [

        // =====================================================
        // 5e — ÉNERGIE (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo5_energie',
            titre: "1. Énergie & Développement",
            desc: "UAA3 - Ressources énergétiques et transitions.",
            niveau: '5e',
            icone: '⚡',
            color: '#ecc94b',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Développement :</b> amélioration des conditions de vie et des capacités d'une population.</li>
                    <li><b>IDH :</b> Indice de développement humain (santé, éducation, niveau de vie).</li>
                    <li><b>Transition énergétique :</b> transformation des modes de production et de consommation d'énergie.</li>
                    <li><b>Intensité énergétique :</b> quantité d'énergie nécessaire par unité de PIB.</li>
                    <li><b>Émissions :</b> rejets de gaz à effet de serre et de polluants.</li>
                    <li><b>Mix énergétique :</b> combinaison de sources d'énergie.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Le développement ne se limite pas à la croissance économique. Il comprend aussi la santé, l'éducation, les conditions de vie, les infrastructures et les possibilités offertes aux populations.</p>
                <p>La consommation d'énergie est liée au niveau de développement mais aussi aux structures économiques, aux technologies et aux modes de vie.</p>
                <p>La transition énergétique cherche à diminuer les émissions et la dépendance aux ressources fossiles grâce à l'efficacité énergétique, à l'électrification, aux renouvelables et à d'autres solutions selon les territoires.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Croissance économique ≠ développement automatique.</li>
                    <li>Efficacité énergétique réduit l'énergie nécessaire pour un même service.</li>
                    <li>Décarbonation du mix réduit les émissions si les nouvelles sources sont moins carbonées.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Pays fortement industrialisés.</li>
                    <li>Pays émergents à croissance énergétique rapide.</li>
                    <li>Territoires développant fortement les renouvelables.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Comparer : consommation totale, consommation par habitant, efficacité, émissions.</li>
                    <li>Distinguer quantité d'énergie et qualité des services énergétiques.</li>
                </ol>
                <div class="astuce">💡 Une consommation élevée peut générer des coûts environnementaux.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre croissance économique et développement.</li>
                        <li>⚠️ Réduire le développement à la seule énergie.</li>
                        <li>⚠️ Croire que plus d'énergie = toujours plus de développement.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis le développement</li>
                        <li>☐ Je comprends le lien énergie-développement</li>
                        <li>☐ J'identifie les enjeux de la transition énergétique</li>
                        <li>☐ Je compare les consommations énergétiques</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Distinguer énergies fossiles et renouvelables',
                'Identifier les enjeux énergétiques',
                'Comprendre la notion de transition énergétique'
            ],

            matieres: [
                'Énergies fossiles',
                'Énergies renouvelables',
                'Transition énergétique',
                'IDH'
            ],

            exercices: [
                {
                    question: 'Le pétrole est une énergie...',
                    options: [
                        'Fossile',
                        'Renouvelable',
                        'Solaire',
                        'Éolienne'
                    ],
                    correct: 0,
                    correction: 'Le pétrole est une énergie fossile.'
                },
                {
                    question: 'Laquelle est une énergie renouvelable ?',
                    options: [
                        'Énergie solaire',
                        'Charbon',
                        'Pétrole',
                        'Gaz naturel'
                    ],
                    correct: 0,
                    correction: "L'énergie solaire est renouvelable."
                }
            ]
        },


        // =====================================================
        // 5e — MONDIALISATION (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo5_mondialisation',
            titre: "2. Mondialisation & Flux",
            desc: "UAA3 - Interdépendance des territoires et échanges.",
            niveau: '5e',
            icone: '🌐',
            color: '#4299e1',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Mondialisation :</b> intensification des échanges et des interdépendances entre les territoires.</li>
                    <li><b>Flux :</b> déplacement de marchandises, capitaux, informations ou personnes.</li>
                    <li><b>Réseau :</b> ensemble de connexions entre des lieux.</li>
                    <li><b>Firme transnationale (FTN) :</b> entreprise implantée dans plusieurs pays.</li>
                    <li><b>Conteneurisation :</b> standardisation des transports maritimes.</li>
                    <li><b>Interface :</b> espace de contact et d'échanges.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>La mondialisation intensifie les échanges entre territoires. Elle concerne les marchandises, capitaux, informations, services, personnes et connaissances.</p>
                <p>Les chaînes de production sont souvent fragmentées entre plusieurs pays selon les coûts, compétences, marchés, infrastructures et stratégies des entreprises.</p>
                <p>Les ports, métropoles, détroits et grands axes forment des nœuds et interfaces majeurs de la mondialisation.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Division internationale du travail.</li>
                    <li>Spécialisation.</li>
                    <li>Logistique.</li>
                    <li>Numérisation.</li>
                    <li>Infrastructures.</li>
                    <li>Stratégies des FTN.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Grandes façades maritimes.</li>
                    <li>Détroits stratégiques.</li>
                    <li>Métropoles mondiales.</li>
                    <li>Corridors de transport.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Sur un schéma : pôles → axes → interfaces → périphéries → flux.</li>
                    <li>Identifier les acteurs et leurs rôles.</li>
                </ol>
                <div class="astuce">💡 Les ports sont des lieux majeurs de la mondialisation car ils mettent en relation les transports maritimes et terrestres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Réduire la mondialisation aux seuls échanges économiques.</li>
                        <li>⚠️ Oublier les flux numériques.</li>
                        <li>⚠️ Confondre mondialisation et uniformisation.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis la mondialisation</li>
                        <li>☐ J'identifie les différents flux</li>
                        <li>☐ Je comprends le rôle des FTN</li>
                        <li>☐ Je sais analyser une interface</li>
                    </ul>
                </div>
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
                    question: 'Un flux est...',
                    options: [
                        'Un déplacement entre territoires',
                        'Une frontière',
                        'Une montagne',
                        'Une ressource naturelle'
                    ],
                    correct: 0,
                    correction: 'Un flux est un déplacement de personnes, de marchandises, de capitaux ou d’informations.'
                }
            ]
        },


        // =====================================================
        // 5e — MIGRATIONS (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo5_migrations',
            titre: "3. Migrations & Mobilités internationales",
            desc: "UAA3 - Les migrations internationales et leurs facteurs.",
            niveau: '5e',
            icone: '🧳',
            color: '#667eea',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Migration internationale :</b> déplacement d'une personne d'un pays vers un autre.</li>
                    <li><b>Mobilité :</b> déplacement d'une personne entre différents lieux.</li>
                    <li><b>Diaspora :</b> dispersion d'une population à travers le monde.</li>
                    <li><b>Réfugié :</b> personne contrainte de quitter son pays et bénéficiant d'une protection internationale.</li>
                    <li><b>Facteur répulsif (push) :</b> élément qui pousse à quitter un territoire.</li>
                    <li><b>Facteur attractif (pull) :</b> élément qui attire vers un territoire.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Les migrations internationales relient des territoires de départ, de transit et d'arrivée. Elles peuvent être temporaires ou durables, choisies ou contraintes.</p>
                <p>Les motivations sont multiples : emploi, études, famille, sécurité, persécutions ou crises. Les parcours dépendent aussi des politiques migratoires, des réseaux et des coûts.</p>
                <p>Les migrations ont des effets sur les territoires de départ et d'arrivée : transferts d'argent, vieillissement ou départ de travailleurs, besoins de logements et services, diversification culturelle.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Facteurs de départ (push).</li>
                    <li>Facteurs d'attraction (pull).</li>
                    <li>Réseaux migratoires.</li>
                    <li>Politiques de frontière.</li>
                    <li>Coûts et risques du trajet.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Mobilités intra-européennes.</li>
                    <li>Migrations liées aux études.</li>
                    <li>Déplacements forcés liés aux conflits.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Distinguer causes, parcours et conséquences.</li>
                    <li>Identifier les échelles concernées.</li>
                </ol>
                <div class="astuce">💡 Une bonne réponse distingue toujours les facteurs push et pull.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Réduire les migrations à une seule cause.</li>
                        <li>⚠️ Confondre migrant économique et réfugié.</li>
                        <li>⚠️ Oublier les migrations temporaires.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je distingue push et pull</li>
                        <li>☐ J'identifie les différents types de migrants</li>
                        <li>☐ Je comprends les impacts des migrations</li>
                        <li>☐ Je sais analyser un flux migratoire</li>
                    </ul>
                </div>
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
                    question: 'Un facteur pull est...',
                    options: [
                        "Un élément qui attire vers un territoire",
                        'Un élément qui détruit une ville',
                        'Une frontière',
                        'Un réseau routier'
                    ],
                    correct: 0,
                    correction: "Un facteur pull est un élément qui attire une personne vers un territoire."
                }
            ]
        },


        // =====================================================
        // 5e — RESSOURCES (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo5_ressources',
            titre: "4. Ressources & Déforestation en zone intertropicale",
            desc: "UAA3 - Accès aux ressources et déforestation en zone intertropicale.",
            niveau: '5e',
            icone: '🌳',
            color: '#38a169',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Déforestation :</b> disparition des forêts.</li>
                    <li><b>Front pionnier :</b> espace où l'exploitation progresse sur des espaces auparavant moins transformés.</li>
                    <li><b>Plantation :</b> grande exploitation agricole spécialisée.</li>
                    <li><b>Agriculture commerciale :</b> agriculture destinée à la vente sur les marchés.</li>
                    <li><b>Biodiversité :</b> variété des êtres vivants.</li>
                    <li><b>Services écosystémiques :</b> bénéfices que les humains tirent des écosystèmes.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Les forêts intertropicales possèdent une très grande biodiversité et jouent un rôle important dans les cycles du carbone et de l'eau.</p>
                <p>La déforestation peut être liée à l'agriculture, à l'élevage, à l'exploitation du bois, aux infrastructures et à certaines activités minières.</p>
                <p>Les fronts pionniers sont des espaces où l'exploitation et la mise en valeur progressent sur des espaces auparavant moins transformés.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Demande mondiale.</li>
                    <li>Prix des produits agricoles ou forestiers.</li>
                    <li>Infrastructures.</li>
                    <li>Politiques foncières.</li>
                    <li>Contrôle des terres.</li>
                    <li>Marchés d'exportation.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Amazonie.</li>
                    <li>Bassin du Congo.</li>
                    <li>Asie du Sud-Est.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Analyser : acteurs → produit recherché → espace transformé → bénéfices → coûts → solutions.</li>
                </ol>
                <div class="astuce">💡 La déforestation est un enjeu à plusieurs échelles : locale, régionale et mondiale.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Réduire la déforestation à une seule cause.</li>
                        <li>⚠️ Oublier les acteurs locaux.</li>
                        <li>⚠️ Ignorer les solutions de gestion durable.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis la déforestation</li>
                        <li>☐ J'identifie les causes de la déforestation</li>
                        <li>☐ Je comprends les enjeux de la déforestation</li>
                        <li>☐ Je connais des exemples de fronts pionniers</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Distinguer les types de ressources',
                'Identifier les enjeux de la gestion des ressources',
                'Comprendre les liens entre mondialisation et déforestation'
            ],

            matieres: [
                'Ressources naturelles',
                'Gestion durable',
                'Déforestation',
                'Mondialisation'
            ],

            exercices: [
                {
                    question: 'La déforestation en zone intertropicale est liée...',
                    options: [
                        'À la mondialisation et à l\'agriculture commerciale',
                        'Uniquement aux feux naturels',
                        'À la diminution de la population',
                        'À la protection des forêts'
                    ],
                    correct: 0,
                    correction: 'La déforestation est liée à l\'exploitation commerciale et à la mondialisation.'
                }
            ]
        },


        // =====================================================
        // 5e — PUISSANCES (NOUVEAU)
        // =====================================================

        {
            id: 'geo5_puissance',
            titre: "5. Puissances mondiales & rapports de force",
            desc: "UAA - Les différentes formes de puissance et les rapports de force.",
            niveau: '5e',
            icone: '🌎',
            color: '#c53030',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Puissance :</b> capacité d'un acteur à agir sur les autres et à influencer les rapports de force.</li>
                    <li><b>Hard power :</b> puissance fondée sur la contrainte ou la capacité matérielle (militaire, économique).</li>
                    <li><b>Soft power :</b> puissance fondée sur l'attractivité et l'influence (culture, diplomatie).</li>
                    <li><b>Puissance économique :</b> capacité à produire, échanger et investir.</li>
                    <li><b>Puissance militaire :</b> capacité à défendre des intérêts par la force.</li>
                    <li><b>Influence :</b> capacité à orienter les décisions d'autres acteurs.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>La <b>puissance</b> est la capacité d'un acteur à agir sur les autres et à influencer les rapports de force.</p>
                <p>Elle peut être économique, militaire, diplomatique, technologique, culturelle ou scientifique. Le <b>hard power</b> repose notamment sur la contrainte ou la capacité matérielle ; le <b>soft power</b> sur l'attractivité et l'influence.</p>
                <p>Les rapports de force sont évolutifs. Ils dépendent des ressources, des alliances, des technologies et des choix politiques.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Taille et richesse du marché.</li>
                    <li>Technologies.</li>
                    <li>Forces armées.</li>
                    <li>Diplomatie.</li>
                    <li>Culture et image.</li>
                    <li>Contrôle de ressources ou infrastructures.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>États-Unis, Chine, Union européenne, Inde, Russie, Japon.</li>
                    <li>BRICS : groupe dont la composition s'est élargie ces dernières années.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Toujours préciser l'indicateur utilisé avant de comparer deux puissances.</li>
                    <li>Distinguer hard power et soft power.</li>
                </ol>
                <div class="astuce">💡 Une puissance ne se mesure pas uniquement à son armée.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Réduire la puissance à un seul indicateur.</li>
                        <li>⚠️ Confondre hard power et soft power.</li>
                        <li>⚠️ Oublier les acteurs non étatiques.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis la puissance</li>
                        <li>☐ Je distingue hard power et soft power</li>
                        <li>☐ J'identifie les différentes formes de puissance</li>
                        <li>☐ Je connais des exemples de puissances mondiales</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Comprendre la notion de puissance',
                'Distinguer hard power et soft power',
                'Identifier les différentes formes de puissance'
            ],

            matieres: [
                'Puissance',
                'Hard power',
                'Soft power',
                'Puissance économique',
                'Puissance militaire',
                'Influence'
            ],

            exercices: [
                {
                    question: 'Pourquoi une puissance ne se mesure-t-elle pas uniquement à son armée ?',
                    options: [
                        'Parce qu\'elle repose aussi sur l\'économie, la technologie, la diplomatie et la culture',
                        'Parce que l\'armée n\'est pas importante',
                        'Parce que seuls les États-Unis sont puissants',
                        'Parce que la puissance n\'existe pas'
                    ],
                    correct: 0,
                    correction: 'Une puissance repose aussi sur l\'économie, la technologie, la diplomatie, la culture, les infrastructures et la capacité à influencer les autres acteurs.'
                }
            ]
        },


        // =====================================================
        // 5e — ESPACES MARITIMES (NOUVEAU)
        // =====================================================

        {
            id: 'geo5_maritime',
            titre: "6. Espaces maritimes & façades littorales",
            desc: "UAA - Les mers et océans comme espaces de circulation et de puissance.",
            niveau: '5e',
            icone: '⛵',
            color: '#2b6cb0',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Littoral :</b> espace de contact entre terre et mer.</li>
                    <li><b>Façade maritime :</b> ensemble littoral organisé autour de ports, flux et arrière-pays.</li>
                    <li><b>ZEE (Zone économique exclusive) :</b> zone maritime pouvant aller jusqu'à 200 milles nautiques.</li>
                    <li><b>Détroit :</b> passage maritime étroit reliant deux mers.</li>
                    <li><b>Route maritime :</b> itinéraire emprunté par les navires.</li>
                    <li><b>Arrière-pays :</b> territoire intérieur relié à un port.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Les mers et océans sont des espaces de circulation, d'exploitation et de puissance. Les littoraux concentrent souvent populations, ports, industries et infrastructures.</p>
                <p>Une <b>façade maritime</b> associe un littoral organisé autour de grands ports, de flux et d'arrière-pays. Les détroits constituent des passages stratégiques.</p>
                <p>La <b>Zone économique exclusive</b> peut s'étendre jusqu'à 200 milles nautiques selon le droit de la mer ; elle confère à l'État côtier des droits souverains sur les ressources dans cette zone, sans équivaloir à une souveraineté territoriale complète.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Concentration des flux.</li>
                    <li>Port → arrière-pays.</li>
                    <li>Ressources halieutiques, énergétiques et minérales.</li>
                    <li>Contrôle des passages stratégiques.</li>
                    <li>Risques environnementaux.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Mer du Nord.</li>
                    <li>Façade d'Asie orientale.</li>
                    <li>Détroits comme Gibraltar, Malacca ou Ormuz.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Pour une carte maritime : ports + détroits + routes + ressources + tensions.</li>
                </ol>
                <div class="astuce">💡 Le littoral est l'espace de contact terre-mer ; la façade maritime est un littoral fortement organisé.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre littoral et façade maritime.</li>
                        <li>⚠️ Oublier que la ZEE n'est pas une souveraineté territoriale complète.</li>
                        <li>⚠️ Réduire les enjeux maritimes aux seules ressources.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je distingue littoral et façade maritime</li>
                        <li>☐ Je définis la ZEE</li>
                        <li>☐ J'identifie les routes maritimes stratégiques</li>
                        <li>☐ Je comprends les enjeux maritimes</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Comprendre l\'importance des espaces maritimes',
                'Distinguer littoral et façade maritime',
                'Identifier les enjeux des détroits et des ZEE'
            ],

            matieres: [
                'Littoral',
                'Façade maritime',
                'ZEE',
                'Détroit',
                'Route maritime',
                'Arrière-pays'
            ],

            exercices: [
                {
                    question: 'Quelle différence entre littoral et façade maritime ?',
                    options: [
                        'Le littoral est l\'espace de contact terre-mer ; la façade maritime est un littoral fortement organisé',
                        'Le littoral est plus grand que la façade maritime',
                        'La façade maritime est un type de climat',
                        'Il n\'y a pas de différence'
                    ],
                    correct: 0,
                    correction: 'Le littoral est l\'espace de contact entre terre et mer. Une façade maritime est un ensemble littoral fortement organisé par des ports, flux, activités et relations avec un vaste arrière-pays.'
                }
            ]
        },


        // =====================================================
        // 5e — MÉTROPOLISATION (NOUVEAU)
        // =====================================================

        {
            id: 'geo5_metropolisation',
            titre: "7. Métropolisation à l'échelle mondiale",
            desc: "UAA - Les métropoles mondiales et leurs fonctions.",
            niveau: '5e',
            icone: '🏙️',
            color: '#805ad5',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Métropolisation :</b> concentration des fonctions de commandement dans les grandes villes.</li>
                    <li><b>Ville mondiale :</b> métropole influente à l'échelle internationale.</li>
                    <li><b>Mégalopole :</b> vaste région urbaine continue.</li>
                    <li><b>Réseau urbain :</b> ensemble de villes reliées entre elles.</li>
                    <li><b>Fonction de commandement :</b> fonction de direction, de décision ou de contrôle.</li>
                    <li><b>Ségrégation :</b> séparation spatiale des groupes sociaux.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>À l'échelle mondiale, les grandes métropoles concentrent une part importante des fonctions de commandement : finance, décision politique, recherche, culture, services supérieurs.</p>
                <p>Les métropoles sont reliées entre elles par des flux de capitaux, d'informations, de personnes et de marchandises.</p>
                <p>La métropolisation produit des richesses mais peut accentuer les inégalités spatiales, les prix du logement, la congestion et les fragmentations urbaines.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Concentration des emplois qualifiés.</li>
                    <li>Attractivité internationale.</li>
                    <li>Réseaux de transport.</li>
                    <li>Innovation.</li>
                    <li>Immobilier et foncier.</li>
                    <li>Inégalités socio-spatiales.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>New York, Londres, Paris, Tokyo, Singapour.</li>
                    <li>Grandes régions métropolitaines émergentes en Asie, Afrique et Amérique latine.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Distinguer puissance métropolitaine et qualité de vie pour tous.</li>
                    <li>Analyser les flux et les réseaux.</li>
                </ol>
                <div class="astuce">💡 Une ville peut être à la fois très riche et très inégalitaire.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier les inégalités socio-spatiales.</li>
                        <li>⚠️ Réduire la métropole à sa taille démographique.</li>
                        <li>⚠️ Ignorer les flux et les réseaux.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis la métropolisation</li>
                        <li>☐ J'identifie les fonctions de commandement</li>
                        <li>☐ Je connais des exemples de villes mondiales</li>
                        <li>☐ Je comprends les inégalités urbaines</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Comprendre la métropolisation à l\'échelle mondiale',
                'Identifier les fonctions de commandement',
                'Analyser les inégalités urbaines'
            ],

            matieres: [
                'Métropolisation',
                'Ville mondiale',
                'Mégalopole',
                'Réseau urbain',
                'Fonction de commandement',
                'Ségrégation'
            ],

            exercices: [
                {
                    question: 'Comment une ville peut-elle être à la fois très riche et très inégalitaire ?',
                    options: [
                        'La concentration des activités produit de la richesse, mais les prix fonciers et l\'accès inégal aux services créent des écarts',
                        'Les riches quittent toujours la ville',
                        'Les pauvres ne viennent pas en ville',
                        'Les villes ne sont jamais inégalitaires'
                    ],
                    correct: 0,
                    correction: 'La concentration des activités et des revenus peut produire beaucoup de richesse, tandis que les prix fonciers, la segmentation du marché du travail et l\'accès inégal aux services créent des écarts entre quartiers et groupes sociaux.'
                }
            ]
        },


        // =====================================================
        // 5e — AGRICULTURE (NOUVEAU)
        // =====================================================

        {
            id: 'geo5_agriculture',
            titre: "8. Agriculture mondialisée",
            desc: "UAA - Les filières agricoles et l'agriculture d'exportation.",
            niveau: '5e',
            icone: '🌾',
            color: '#d69e2e',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Agriculture productiviste :</b> agriculture axée sur l'augmentation des rendements.</li>
                    <li><b>Agriculture d'exportation :</b> agriculture destinée aux marchés internationaux.</li>
                    <li><b>Filière :</b> ensemble des étapes de production, transformation et distribution.</li>
                    <li><b>Agrobusiness :</b> ensemble des activités économiques liées à l'agriculture.</li>
                    <li><b>Spécialisation :</b> concentration sur un type de production.</li>
                    <li><b>Marché mondial :</b> marché à l'échelle internationale.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>L'agriculture mondialisée relie producteurs, transformateurs, transporteurs, distributeurs et consommateurs éloignés.</p>
                <p>Certaines régions se spécialisent dans des productions destinées à l'exportation. Cette spécialisation peut créer des revenus mais augmente aussi la dépendance aux prix mondiaux.</p>
                <p>Les filières agricoles sont influencées par les entreprises, les États, les producteurs, les consommateurs et les normes.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Demande mondiale.</li>
                    <li>Prix.</li>
                    <li>Spécialisation.</li>
                    <li>Transport frigorifique et logistique.</li>
                    <li>Accords commerciaux.</li>
                    <li>Normes sanitaires et environnementales.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Soja, café, cacao, fruits tropicaux, céréales.</li>
                    <li>Grandes régions céréalières et agro-exportatrices.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Construire un schéma de filière : producteurs → transformation → transport → distribution → consommateurs.</li>
                    <li>Identifier les acteurs à chaque étape.</li>
                </ol>
                <div class="astuce">💡 L'agriculture d'exportation apporte des revenus mais crée une dépendance aux prix mondiaux.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier les intermédiaires dans la filière.</li>
                        <li>⚠️ Confondre agriculture vivrière et agriculture d'exportation.</li>
                        <li>⚠️ Ignorer les impacts environnementaux.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis l'agriculture d'exportation</li>
                        <li>☐ J'identifie les étapes d'une filière</li>
                        <li>☐ Je comprends les avantages et les risques de la spécialisation</li>
                        <li>☐ Je connais des exemples de productions mondialisées</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Comprendre l\'agriculture mondialisée',
                'Identifier les étapes d\'une filière agricole',
                'Analyser les avantages et les risques de l\'agriculture d\'exportation'
            ],

            matieres: [
                'Agriculture productiviste',
                'Agriculture d\'exportation',
                'Filière',
                'Agrobusiness',
                'Spécialisation',
                'Marché mondial'
            ],

            exercices: [
                {
                    question: 'Donne un avantage et un risque de l\'agriculture d\'exportation.',
                    options: [
                        'Avantage : revenus et insertion dans les marchés mondiaux. Risque : dépendance aux prix et pression sur les ressources',
                        'Avantage : elle nourrit tout le monde. Risque : elle pollue',
                        'Avantage : elle est toujours durable. Risque : elle est trop chère',
                        'Avantage : elle crée des emplois. Risque : elle n\'en crée pas assez'
                    ],
                    correct: 0,
                    correction: 'Avantage : revenus et insertion dans les marchés mondiaux. Risques : dépendance aux prix, pression sur les sols et l\'eau, concurrence avec les cultures alimentaires ou déforestation selon les systèmes.'
                }
            ]
        }

    ],


    // =====================================================
    // 6e
    // =====================================================

    '6e': [

        // =====================================================
        // 6e — DÉVELOPPEMENT DURABLE (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo6_developpement',
            titre: "1. Développement durable",
            desc: "UAA - Développement, ressources et durabilité.",
            niveau: '6e',
            icone: '🌱',
            color: '#38a169',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Développement durable :</b> développement qui concilie les dimensions économique, sociale et environnementale.</li>
                    <li><b>Durabilité :</b> capacité à maintenir un système dans le temps.</li>
                    <li><b>Transition :</b> passage d'un système à un autre.</li>
                    <li><b>ODD :</b> Objectifs de développement durable de l'ONU.</li>
                    <li><b>Empreinte écologique :</b> impact d'une activité sur l'environnement.</li>
                    <li><b>Justice spatiale :</b> répartition équitable des ressources et des services.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Le <b>développement durable</b> cherche à répondre aux besoins actuels tout en préservant la capacité des générations futures à répondre aux leurs.</p>
                <p>Il implique de prendre ensemble les dimensions <b>environnementale</b>, <b>sociale</b> et <b>économique</b>. Un projet durable ne consiste donc pas simplement à protéger la nature : il doit aussi considérer les besoins des populations et la viabilité économique.</p>
                <p>Les <b>Objectifs de développement durable</b> de l'ONU forment un cadre international de référence.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Diagnostiquer les impacts.</li>
                    <li>Comparer les intérêts des acteurs.</li>
                    <li>Évaluer les effets à court et long terme.</li>
                    <li>Chercher des compromis et des transitions.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Mobilité durable.</li>
                    <li>Gestion de l'eau.</li>
                    <li>Transition énergétique.</li>
                    <li>Agriculture durable.</li>
                    <li>Ville compacte et végétalisée.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Dans une argumentation, utiliser les trois piliers : environnement + social + économique.</li>
                </ol>
                <div class="astuce">💡 Un projet peut être économiquement intéressant et pourtant non durable.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Réduire le développement durable à la seule protection de l'environnement.</li>
                        <li>⚠️ Oublier la dimension sociale.</li>
                        <li>⚠️ Ignorer la dimension économique.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis le développement durable</li>
                        <li>☐ J'identifie ses trois dimensions</li>
                        <li>☐ Je connais les ODD</li>
                        <li>☐ Je sais analyser un projet durable</li>
                    </ul>
                </div>
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
                'Environnement',
                'ODD'
            ],

            exercices: [
                {
                    question: 'Le développement durable cherche à concilier...',
                    options: [
                        'Économie, société et environnement',
                        'Uniquement économie et industrie',
                        'Uniquement environnement',
                        'Uniquement croissance démographique'
                    ],
                    correct: 0,
                    correction: 'Le développement durable cherche à articuler les dimensions économique, sociale et environnementale.'
                }
            ]
        },


        // =====================================================
        // 6e — TERRITOIRES (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo6_territoires',
            titre: "2. Territoires & Fonctions",
            desc: "UAA - Usages des territoires et organisation spatiale.",
            niveau: '6e',
            icone: '🗺️',
            color: '#805ad5',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Territoire :</b> espace approprié, organisé et utilisé par des sociétés.</li>
                    <li><b>Fonction :</b> usage d'un territoire (logement, emploi, tourisme, etc.).</li>
                    <li><b>Centre :</b> espace polarisateur, lieu de concentration.</li>
                    <li><b>Périphérie :</b> espace dépendant ou moins dynamique.</li>
                    <li><b>Polarisation :</b> attraction exercée par un pôle.</li>
                    <li><b>Spécialisation :</b> concentration sur une activité.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Les territoires ont des fonctions différentes : résidentielles, industrielles, agricoles, touristiques, politiques, commerciales, logistiques, financières ou culturelles.</p>
                <p>Une fonction peut dominer un territoire sans être exclusive. Les territoires sont reliés par des flux et peuvent changer de fonction au cours du temps.</p>
                <p>La <b>polarisation</b> désigne l'attraction exercée par un pôle sur les espaces environnants.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Ressources.</li>
                    <li>Accessibilité.</li>
                    <li>Main-d'œuvre.</li>
                    <li>Marchés.</li>
                    <li>Décisions politiques.</li>
                    <li>Histoire et héritages spatiaux.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Métropoles de services.</li>
                    <li>Régions industrielles.</li>
                    <li>Espaces touristiques.</li>
                    <li>Régions agricoles.</li>
                    <li>Interfaces portuaires.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Identifier fonction dominante + fonctions secondaires + flux + acteurs.</li>
                </ol>
                <div class="astuce">💡 Une ville peut cumuler plusieurs fonctions : résidentielle, économique, culturelle, etc.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Réduire un territoire à une seule fonction.</li>
                        <li>⚠️ Oublier les flux entre territoires.</li>
                        <li>⚠️ Ignorer les héritages spatiaux.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis les fonctions d'un territoire</li>
                        <li>☐ Je distingue centre et périphérie</li>
                        <li>☐ Je comprends la polarisation</li>
                        <li>☐ J'identifie les flux entre territoires</li>
                    </ul>
                </div>
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
                    question: "Pourquoi une ville peut-elle cumuler plusieurs fonctions ?",
                    options: [
                        'Parce qu\'elle peut accueillir simultanément des habitants, des entreprises, des services et des institutions',
                        'Parce qu\'elle est toujours en centre-ville',
                        'Parce que les fonctions se succèdent dans le temps',
                        'Parce que les villes sont toutes identiques'
                    ],
                    correct: 0,
                    correction: 'Une ville peut accueillir simultanément des habitants, des entreprises, des services, des institutions, des commerces et des activités culturelles.'
                }
            ]
        },


        // =====================================================
        // 6e — PUISSANCE & GÉOPOLITIQUE (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo6_puissance',
            titre: "3. Puissance & Géopolitique",
            desc: "UAA - Rivalités, ressources et influence des États.",
            niveau: '6e',
            icone: '🌎',
            color: '#c53030',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Géopolitique :</b> étude des rivalités de pouvoir sur des territoires.</li>
                    <li><b>Puissance :</b> capacité d'un acteur à agir et à influencer les autres.</li>
                    <li><b>Territoire :</b> espace approprié par un acteur.</li>
                    <li><b>Frontière :</b> limite politique entre deux territoires.</li>
                    <li><b>Influence :</b> capacité à orienter les décisions d'autres acteurs.</li>
                    <li><b>Rapport de force :</b> rapport entre les capacités des acteurs.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>La <b>géopolitique</b> étudie les rivalités de pouvoir sur des territoires. Les acteurs peuvent être des États, organisations internationales, entreprises, groupes armés ou autres organisations.</p>
                <p>Les rivalités peuvent porter sur des frontières, ressources, routes stratégiques, zones d'influence ou positions géographiques.</p>
                <p>La puissance est multidimensionnelle. Les alliances et organisations internationales modifient les rapports de force.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Territoire convoité.</li>
                    <li>Ressource ou position stratégique.</li>
                    <li>Acteurs.</li>
                    <li>Intérêts divergents.</li>
                    <li>Moyens de pression.</li>
                    <li>Évolution du rapport de force.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Détroits stratégiques.</li>
                    <li>Rivalités autour des ressources.</li>
                    <li>Conflits territoriaux.</li>
                    <li>Sanctions économiques et alliances.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Dans une étude géopolitique : acteurs → intérêts → territoire → moyens → conséquences → scénarios.</li>
                </ol>
                <div class="astuce">💡 Une frontière peut être à la fois une séparation et un espace de contact.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Réduire la géopolitique aux seuls conflits armés.</li>
                        <li>⚠️ Oublier les acteurs non étatiques.</li>
                        <li>⚠️ Confondre frontière et limite naturelle.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis la géopolitique</li>
                        <li>☐ J'identifie les acteurs géopolitiques</li>
                        <li>☐ Je comprends les rivalités de pouvoir</li>
                        <li>☐ J'analyse un conflit territorial</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Comprendre la notion de puissance',
                'Identifier les sources de tensions',
                'Analyser les rivalités géopolitiques'
            ],

            matieres: [
                'Puissance et influence',
                'Ressources et conflits',
                'Géopolitique'
            ],

            exercices: [
                {
                    question: 'La géopolitique étudie notamment...',
                    options: [
                        'Les rivalités de pouvoir sur les territoires',
                        'Uniquement les climats',
                        'Uniquement les systèmes agricoles',
                        'Uniquement les statistiques'
                    ],
                    correct: 0,
                    correction: 'La géopolitique analyse notamment les rapports de force et les rivalités de pouvoir dans l’espace.'
                }
            ]
        },


        // =====================================================
        // 6e — ARGUMENTATION (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo6_essai',
            titre: "4. L'argumentation géographique",
            desc: "UAA - Méthodologie de l'examen.",
            niveau: '6e',
            icone: '📝',
            color: '#805ad5',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Thèse :</b> position défendue dans une argumentation.</li>
                    <li><b>Argument :</b> raison qui soutient la thèse.</li>
                    <li><b>Preuve :</b> élément qui confirme un argument.</li>
                    <li><b>Exemple :</b> cas concret illustrant un argument.</li>
                    <li><b>Nuance :</b> précision qui évite une généralisation excessive.</li>
                    <li><b>Conclusion :</b> synthèse de l'argumentation.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Une argumentation géographique répond à une question en construisant un raisonnement organisé. Il ne suffit pas d'aligner des connaissances.</p>
                <p>Un bon argument associe une <b>idée</b>, une <b>explication</b> et une <b>preuve</b>. La preuve peut être une donnée, une carte, un document, un exemple précis ou un mécanisme géographique.</p>
                <p>La conclusion répond clairement à la question et peut proposer une nuance ou une ouverture.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Comprendre la consigne.</li>
                    <li>Définir les termes.</li>
                    <li>Formuler une problématique.</li>
                    <li>Construire deux ou trois idées fortes.</li>
                    <li>Justifier par documents et connaissances.</li>
                    <li>Conclure.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Structure d'un paragraphe : idée → explication → preuve/exemple → lien avec la question.</li>
                    <li>Utiliser des connecteurs logiques.</li>
                </ol>
                <div class="astuce">💡 Formule utile : « On observe... parce que... ce qui entraîne... par exemple... »</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Aligner des connaissances sans les organiser.</li>
                        <li>⚠️ Oublier de justifier les affirmations.</li>
                        <li>⚠️ Conclure sans répondre à la question.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je structure une argumentation</li>
                        <li>☐ J'utilise des arguments et des preuves</li>
                        <li>☐ Je nuance mes affirmations</li>
                        <li>☐ Je conclus en répondant à la question</li>
                    </ul>
                </div>
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
                    question: "Pour un aéroport, une contrainte peut être...",
                    options: [
                        'Les nuisances sonores',
                        "La proximité d'une autoroute",
                        "La main-d'œuvre disponible",
                        "Une bonne accessibilité"
                    ],
                    correct: 0,
                    correction: "Les nuisances sonores peuvent constituer une contrainte pour les riverains et l'environnement."
                }
            ]
        },


        // =====================================================
        // 6e — ACTEURS (EXISTANT ENRICHI)
        // =====================================================

        {
            id: 'geo6_acteurs',
            titre: "5. Acteurs & Prospective",
            desc: "UAA - Analyser les acteurs et envisager l'avenir des territoires.",
            niveau: '6e',
            icone: '🔮',
            color: '#6b46c1',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Acteur :</b> personne, groupe ou organisation capable d'agir sur un territoire.</li>
                    <li><b>Gouvernance :</b> manière dont les décisions sont prises et les territoires sont gérés.</li>
                    <li><b>Prospective :</b> construction de scénarios plausibles sur des évolutions futures.</li>
                    <li><b>Scénario :</b> description plausible d'une évolution future.</li>
                    <li><b>Vulnérabilité :</b> fragilité d'un territoire face à un aléa.</li>
                    <li><b>Adaptation :</b> ajustement aux changements.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>Un <b>acteur géographique</b> est une personne, un groupe ou une organisation capable d'agir sur un territoire. Les acteurs ont des intérêts, des ressources et des contraintes.</p>
                <p>La prospective ne consiste pas à prédire exactement l'avenir. Elle construit plusieurs scénarios plausibles à partir des tendances, incertitudes et choix actuels.</p>
                <p>Une analyse prospective peut envisager un scénario tendanciel, un scénario de transition et un scénario de crise ou de rupture.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>Identifier les acteurs.</li>
                    <li>Analyser leurs ressources.</li>
                    <li>Repérer les tendances.</li>
                    <li>Identifier les incertitudes.</li>
                    <li>Construire plusieurs scénarios.</li>
                    <li>Évaluer les conséquences.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Adaptation des villes au changement climatique.</li>
                    <li>Transition énergétique.</li>
                    <li>Évolution des mobilités.</li>
                    <li>Gestion future de l'eau.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Toujours séparer : ce qui est observé aujourd'hui, ce qui est une tendance, ce qui est une hypothèse.</li>
                </ol>
                <div class="astuce">💡 On construit plusieurs scénarios car l'avenir dépend de décisions et d'incertitudes.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre prospective et prédiction.</li>
                        <li>⚠️ Oublier les acteurs dans l'analyse.</li>
                        <li>⚠️ Ne construire qu'un seul scénario.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ J'identifie les acteurs d'un territoire</li>
                        <li>☐ Je comprends la démarche prospective</li>
                        <li>☐ Je sais construire plusieurs scénarios</li>
                        <li>☐ J'analyse les vulnérabilités et les adaptations</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Identifier les acteurs d\'un territoire',
                'Analyser les intérêts et les pouvoirs des acteurs',
                'Comprendre la démarche prospective'
            ],

            matieres: [
                'Acteurs du territoire',
                'Intérêts et pouvoirs',
                'Gouvernance',
                'Prospective'
            ],

            exercices: [
                {
                    question: 'Un acteur du territoire est...',
                    options: [
                        'Une personne ou un groupe qui agit sur le territoire',
                        'Un phénomène naturel uniquement',
                        'Une frontière',
                        'Un climat'
                    ],
                    correct: 0,
                    correction: 'Un acteur est une personne, un groupe ou une institution qui agit sur un territoire.'
                },
                {
                    question: 'Pourquoi faut-il construire plusieurs scénarios en prospective ?',
                    options: [
                        'Parce que l\'avenir dépend de décisions et d\'incertitudes',
                        'Parce qu\'il faut toujours prévoir le pire',
                        'Parce que le futur est déjà écrit',
                        'Parce qu\'un seul scénario suffit'
                    ],
                    correct: 0,
                    correction: 'Plusieurs scénarios permettent de tester différentes trajectoires plutôt que de présenter une seule évolution comme certaine.'
                }
            ]
        },


        // =====================================================
        // 6e — GOUVERNANCE MONDIALE (NOUVEAU)
        // =====================================================

        {
            id: 'geo6_gouvernance',
            titre: "6. Organisations internationales & gouvernance mondiale",
            desc: "UAA - Coopération internationale, ONU et gouvernance globale.",
            niveau: '6e',
            icone: '🏛️',
            color: '#2b6cb0',

            cours: `
                <h4>🔹 Notions essentielles</h4>
                <ul>
                    <li><b>Gouvernance mondiale :</b> mécanismes de coopération, négociation et régulation entre acteurs à l'échelle mondiale.</li>
                    <li><b>Organisation internationale :</b> institution regroupant plusieurs États.</li>
                    <li><b>ONU :</b> Organisation des Nations Unies.</li>
                    <li><b>Coopération :</b> action de travailler ensemble.</li>
                    <li><b>Multilatéralisme :</b> coopération entre plusieurs États.</li>
                    <li><b>Souveraineté :</b> autorité suprême d'un État sur son territoire.</li>
                </ul>

                <h4>🔹 Cours</h4>
                <p>La <b>gouvernance mondiale</b> désigne les mécanismes de coopération, négociation et régulation entre États et autres acteurs à l'échelle mondiale.</p>
                <p>L'ONU joue un rôle central dans la coopération internationale, notamment par ses agences, programmes, opérations et cadres de négociation. D'autres organisations interviennent selon les domaines : commerce, santé, finance, climat, sécurité, etc.</p>
                <p>La gouvernance mondiale est limitée par les intérêts divergents des États, les rapports de puissance, les ressources disponibles et les règles institutionnelles.</p>

                <h4>🔹 Mécanismes à comprendre</h4>
                <ul>
                    <li>États.</li>
                    <li>Organisations internationales.</li>
                    <li>Entreprises.</li>
                    <li>ONG.</li>
                    <li>Collectivités et réseaux scientifiques.</li>
                    <li>Société civile.</li>
                </ul>

                <h4>🔹 Exemples à connaître</h4>
                <ul>
                    <li>Objectifs de développement durable.</li>
                    <li>Négociations climatiques.</li>
                    <li>Coopération sanitaire.</li>
                    <li>Aide humanitaire.</li>
                    <li>Régulation économique internationale.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Dans une réponse : identifier l'organisation, son domaine, ses moyens, ses limites et les acteurs concernés.</li>
                </ol>
                <div class="astuce">💡 La gouvernance mondiale est difficile car les acteurs ont des intérêts différents et les États conservent leur souveraineté.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Réduire la gouvernance mondiale à l'ONU.</li>
                        <li>⚠️ Oublier les acteurs non étatiques.</li>
                        <li>⚠️ Croire que la coopération est automatique.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je définis la gouvernance mondiale</li>
                        <li>☐ Je connais le rôle de l'ONU</li>
                        <li>☐ J'identifie les acteurs de la gouvernance mondiale</li>
                        <li>☐ Je comprends les limites de la coopération internationale</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Comprendre la gouvernance mondiale',
                'Identifier le rôle des organisations internationales',
                'Analyser les limites de la coopération internationale'
            ],

            matieres: [
                'Gouvernance mondiale',
                'Organisation internationale',
                'ONU',
                'Coopération',
                'Multilatéralisme',
                'Souveraineté'
            ],

            exercices: [
                {
                    question: 'Pourquoi la gouvernance mondiale est-elle difficile ?',
                    options: [
                        'Parce que les acteurs ont des intérêts différents et les États conservent leur souveraineté',
                        'Parce qu\'il n\'y a pas d\'organisations internationales',
                        'Parce que les États sont tous d\'accord',
                        'Parce que la gouvernance mondiale n\'existe pas'
                    ],
                    correct: 0,
                    correction: 'La gouvernance mondiale est difficile car les acteurs ont des intérêts différents, les États conservent leur souveraineté et les rapports de puissance influencent les négociations.'
                }
            ]
        }

    ],


    // =====================================================
    // TRANSVERSAL — MÉTHODOLOGIE
    // =====================================================

    'transversal': [

        {
            id: 'geo_methode',
            titre: "Méthodologie CESS — Géographie",
            desc: "Les réflexes du géographe et les méthodes d'analyse.",
            niveau: 'Transversal',
            icone: '📋',
            color: '#6b46c1',

            cours: `
                <h4>🔹 Les 10 réflexes du géographe</h4>
                <ol>
                    <li>Localiser précisément le phénomène.</li>
                    <li>Préciser l'échelle d'analyse.</li>
                    <li>Décrire les informations avant de les expliquer.</li>
                    <li>Identifier les concentrations, les vides, les axes et les interfaces.</li>
                    <li>Identifier les acteurs.</li>
                    <li>Chercher les causes et les mécanismes.</li>
                    <li>Distinguer conséquences positives et négatives.</li>
                    <li>Donner un exemple précis.</li>
                    <li>Nuancer les affirmations absolues.</li>
                    <li>Répondre explicitement à la question dans la conclusion.</li>
                </ol>

                <h4>🔹 Méthode d'analyse d'une carte</h4>
                <ol>
                    <li>Lire le titre, la date et la source.</li>
                    <li>Identifier l'espace représenté et l'échelle.</li>
                    <li>Lire toute la légende.</li>
                    <li>Décrire les grandes structures spatiales.</li>
                    <li>Localiser avec des repères précis.</li>
                    <li>Comparer les espaces.</li>
                    <li>Expliquer avec des facteurs géographiques.</li>
                    <li>Conclure en répondant à la problématique.</li>
                </ol>

                <h4>🔹 Méthode d'analyse d'un graphique</h4>
                <ol>
                    <li>Identifier le type de graphique, l'unité, la période et la source.</li>
                    <li>Repérer maximum, minimum, évolution, rupture et tendance.</li>
                    <li>Comparer les catégories ou périodes.</li>
                    <li>Donner des valeurs approximatives lorsque c'est pertinent.</li>
                    <li>Ne pas confondre corrélation et causalité.</li>
                    <li>Relier les observations à un mécanisme géographique.</li>
                </ol>

                <h4>🔹 Méthode du paragraphe argumenté</h4>
                <ol>
                    <li>Idée → explication → preuve/exemple → conséquence → lien avec la question.</li>
                    <li>Utiliser des connecteurs : d'abord, ensuite, cependant, en effet, donc, ainsi, contrairement à.</li>
                    <li>Éviter les listes de connaissances sans démonstration.</li>
                </ol>

                <h4>🔹 Check-list avant le CESS</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je sais lire une carte, un graphique et un tableau</li>
                        <li>☐ Je sais localiser et changer d'échelle</li>
                        <li>☐ Je sais expliquer un mécanisme avec des causes et des conséquences</li>
                        <li>☐ Je sais identifier les acteurs et leurs intérêts</li>
                        <li>☐ Je sais utiliser un exemple précis</li>
                        <li>☐ Je sais argumenter et nuancer</li>
                        <li>☐ Je connais les notions essentielles des 3e, 4e, 5e et 6e secondaire</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Maîtriser les méthodes d\'analyse géographique',
                'Savoir argumenter en géographie',
                'Se préparer aux épreuves du CESS'
            ],

            matieres: [
                'Méthode d\'analyse',
                'Argumentation',
                'Réflexes du géographe'
            ],

            exercices: [
                {
                    question: 'Quelle est la première étape de l\'analyse d\'une carte ?',
                    options: [
                        'Lire le titre, la date et la source',
                        'Décrire les structures spatiales',
                        'Expliquer les phénomènes',
                        'Conclure'
                    ],
                    correct: 0,
                    correction: 'Il faut toujours commencer par lire le titre, la date et la source de la carte.'
                }
            ]
        },

        {
            id: 'geo_definitions',
            titre: "Définitions essentielles — Géographie",
            desc: "Les notions fondamentales à maîtriser pour le CESS.",
            niveau: 'Transversal',
            icone: '📖',
            color: '#2b6cb0',

            cours: `
                <h4>🔹 Définitions essentielles à savoir</h4>

                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;font-size:13px;">
                        <tr style="background:var(--primary-soft);">
                            <th style="padding:10px 12px;text-align:left;border:1px solid var(--line);">Terme</th>
                            <th style="padding:10px 12px;text-align:left;border:1px solid var(--line);">Définition</th>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Densité</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Nombre d'habitants par unité de surface.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Urbanisation</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Croissance de la population et du fait urbains.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Métropolisation</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Concentration des fonctions majeures dans les grandes villes.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Mondialisation</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Intensification des relations et échanges entre territoires.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Flux</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Circulation de personnes, marchandises, capitaux, informations ou autres éléments.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Ressource</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Élément du milieu rendu utile par une société.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Développement durable</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Développement conciliant besoins actuels et capacité des générations futures.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Puissance</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Capacité d'un acteur à agir et à influencer les autres.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Géopolitique</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Étude des rivalités de pouvoir sur les territoires.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Prospective</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Construction de scénarios plausibles concernant des évolutions futures.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>ZEE</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Zone maritime pouvant aller jusqu'à 200 milles nautiques, dans laquelle l'État côtier dispose de droits sur les ressources selon le droit international.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Interface</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">Espace de contact et d'échanges entre deux ensembles.</td>
                        </tr>
                    </table>
                </div>

                <h4>🔹 Les grandes chaînes de raisonnement</h4>
                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;font-size:13px;">
                        <tr style="background:var(--primary-soft);">
                            <th style="padding:10px 12px;text-align:left;border:1px solid var(--line);">Thème</th>
                            <th style="padding:10px 12px;text-align:left;border:1px solid var(--line);">Chaîne à mémoriser</th>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Climat</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">latitude / altitude / océans / circulation → températures + précipitations → biome → activités et risques</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Population</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">natalité + mortalité + migrations → croissance / structure → densité et répartition → besoins et politiques</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Ville</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">attractivité → urbanisation → métropolisation / étalement → mobilités + impacts</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Ressource</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">disponibilité → accès → usages → conflits → gestion</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Mondialisation</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">spécialisation → réseaux → flux → interfaces → inégalités</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Géopolitique</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">acteur → intérêt → territoire → rapport de force → issue / gouvernance</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;border:1px solid var(--line);"><b>Développement durable</b></td>
                            <td style="padding:8px 12px;border:1px solid var(--line);">besoins → contraintes → acteurs → arbitrages → transition</td>
                        </tr>
                    </table>
                </div>
            `,

            objectifs: [
                'Maîtriser les définitions essentielles',
                'Comprendre les grandes chaînes de raisonnement',
                'Préparer les épreuves du CESS'
            ],

            matieres: [
                'Définitions',
                'Chaînes de raisonnement',
                'Notions essentielles'
            ],

            exercices: [
                {
                    question: 'Que signifie le sigle ZEE ?',
                    options: [
                        'Zone économique exclusive',
                        'Zone européenne d\'échanges',
                        'Zone écologique étendue',
                        'Zone d\'exploitation énergétique'
                    ],
                    correct: 0,
                    correction: 'La ZEE est la Zone économique exclusive, une zone maritime pouvant aller jusqu\'à 200 milles nautiques.'
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
// EXAMENS BLANCS
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
