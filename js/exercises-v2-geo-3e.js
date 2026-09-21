(function () {
    if (typeof GEO_CHAPITRES === 'undefined') return;
    var GENERIC_PATTERNS = [
        /^Quelle notion est directement liée au chapitre/,
        /^Quelle notion faut-il mobiliser pour résoudre un exercice sur/,
        /^Dans une question de type CESS portant sur .* quel élément doit apparaître dans le raisonnement/,
        /^Quelle démarche produit la solution la plus rigoureuse/,
        /^Quelle démarche convient pour analyser un document géographique/,
        /^Quelle démarche convient pour analyser une expérience/,
        /^Quelle pratique faut-il éviter dans une réponse sur/,
        /^Avant d.interpréter un graphique ou un tableau lié à/,
        /^Quelle structure convient à une réponse de synthèse sur/,
        /^Dans « .* », quelle notion faut-il savoir définir précisément/,
        /^Quel couple de notions doit être mis en relation pour expliquer le chapitre/,
        /^Comment vérifier que la notion .* est réellement comprise/,
        /^Dans une situation nouvelle portant sur/
    ];
    function isGeneric(q) { return GENERIC_PATTERNS.some(function (p) { return p.test(q); }); }

    var NOUVEAUX_EXERCICES = {
        'geo3_repères': [
            {
                question: "Selon le cours, qu'est-ce qu'un territoire ?",
                options: [
                    "Un espace approprié, organisé et transformé par une société",
                    "Une portion de terre vierge, non exploitée par l'homme",
                    "Un synonyme géographique du mot « État »",
                    "Une carte représentant un pays"
                ],
                correct: 0,
                correction: "Le cours définit le territoire comme un espace approprié, organisé et transformé par des sociétés, et non comme un espace naturel vierge.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "D'après l'exemple du cours, comment évolue le rôle de Bruxelles selon l'échelle d'observation ?",
                options: [
                    "Elle reste la ville la plus dominante du monde à toutes les échelles",
                    "Elle domine à l'échelle belge mais devient un nœud parmi d'autres à l'échelle mondiale",
                    "Elle n'a aucune fonction internationale",
                    "Elle perd toute importance dès qu'on change d'échelle"
                ],
                correct: 1,
                correction: "Le cours précise qu'une métropole peut dominer à l'échelle nationale tout en étant seulement un nœud parmi d'autres à l'échelle mondiale, ce qui est le cas de Bruxelles.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Une frontière entre deux pays limite la souveraineté politique, mais chaque jour des travailleurs et des marchandises la traversent. Quelle double lecture géographique cela illustre-t-il ?",
                options: [
                    "Une frontière est uniquement une limite politique infranchissable",
                    "Une frontière empêche totalement les flux de circuler",
                    "Une frontière peut être à la fois une séparation politique et un espace d'échanges",
                    "Une frontière est une notion purement historique, sans effet actuel"
                ],
                correct: 2,
                correction: "Le cours indique explicitement qu'une frontière peut être une séparation politique mais aussi un espace d'échanges, comme le montrent les flux de travailleurs et de marchandises qui la traversent.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Que peut désigner le mot « flux » en géographie, selon le cours ?",
                options: [
                    "Uniquement le déplacement de personnes",
                    "La circulation de personnes, de marchandises, de capitaux ou d'informations",
                    "Une limite administrative entre deux territoires",
                    "Le nombre total d'habitants d'un territoire"
                ],
                correct: 1,
                correction: "Le cours définit le flux comme la circulation de personnes, de marchandises, de capitaux ou d'informations, une notion plus large qu'un simple déplacement humain.",
                niveau: "Comprendre",
                contentVersion: 1
            }
        ],
        'geo3_cartes': [
            {
                question: "Que représentent les figurés sur une carte ?",
                options: [
                    "Les points, lignes et surfaces qui représentent l'information",
                    "Le titre du document cartographique",
                    "La date de publication de la carte",
                    "Le nom de l'auteur de la carte"
                ],
                correct: 0,
                correction: "Le cours définit les figurés comme les points, lignes et surfaces qui représentent l'information sur une carte.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Par rapport à une carte à grande échelle, une carte à petite échelle...",
                options: [
                    "Couvre un espace plus vaste mais avec moins de détails",
                    "Couvre un espace plus restreint avec davantage de détails",
                    "Ne comporte jamais de légende",
                    "Représente obligatoirement le monde entier"
                ],
                correct: 0,
                correction: "Le cours précise qu'une carte à petite échelle couvre un grand espace avec moins de détails, tandis qu'une carte à grande échelle montre un espace plus restreint avec davantage de détails.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Sur une carte, un point représentant une ville de plus de 100 000 habitants est un exemple de...",
                options: [
                    "Figuré ponctuel",
                    "Figuré linéaire",
                    "Titre de la carte",
                    "Source de la carte"
                ],
                correct: 0,
                correction: "Un point qui localise une ville est un figuré ponctuel, l'un des types de figurés (points, lignes, surfaces) utilisés pour représenter l'information sur une carte.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Deux cartes représentant la même densité de population utilisent des classes de couleurs différentes, ce qui change fortement l'impression visuelle du lecteur. Que faut-il en conclure ?",
                options: [
                    "Une carte est une construction qui dépend des choix (classes, figurés) faits par son auteur",
                    "L'une des deux cartes est nécessairement fausse",
                    "La densité réelle de population a changé entre les deux cartes",
                    "La légende est inutile pour comprendre une carte"
                ],
                correct: 0,
                correction: "Le cours rappelle qu'une carte est une représentation simplifiée et construite de l'espace : le découpage en classes influence l'impression visuelle sans que la réalité représentée change, d'où l'importance de toujours lire la légende.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'geo3_climats': [
            {
                question: "Quelle est la différence entre météo et climat ?",
                options: [
                    "La météo décrit l'état de l'atmosphère à court terme, le climat correspond à des caractéristiques moyennes sur une longue période",
                    "Ce sont deux termes strictement synonymes",
                    "Le climat change chaque jour, la météo reste stable pendant des décennies",
                    "La météo ne concerne que les océans"
                ],
                correct: 0,
                correction: "Le cours distingue clairement la météo, état de l'atmosphère à court terme, du climat, qui correspond aux caractéristiques moyennes de l'atmosphère sur une longue période.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Quelle est, selon le cours, la principale cause du changement climatique actuel ?",
                options: [
                    "L'augmentation des gaz à effet de serre liée aux activités humaines",
                    "La position de la Terre par rapport au Soleil",
                    "Les variations naturelles de l'altitude des continents",
                    "La diminution de la continentalité"
                ],
                correct: 0,
                correction: "Le cours indique que le changement climatique actuel est principalement lié à l'augmentation des gaz à effet de serre dus aux activités humaines.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Quel biome se caractérise par une aridité très marquée toute l'année ?",
                options: [
                    "Le désert",
                    "La savane",
                    "La forêt équatoriale",
                    "La taïga"
                ],
                correct: 0,
                correction: "Le cours décrit le désert comme un milieu très aride, à l'inverse de la savane (alternance de saisons) ou de la forêt équatoriale (chaude et humide).",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Un diagramme climatique de Dakar montre des températures élevées toute l'année, une longue saison sèche et une courte saison des pluies. À quel type de climat cela correspond-il le plus probablement ?",
                options: [
                    "Tropical",
                    "Océanique",
                    "Polaire",
                    "Continental"
                ],
                correct: 0,
                correction: "Le cours cite le climat tropical parmi les grands types de climats et associe la savane à une alternance de saison sèche et de saison humide, ce qui correspond au profil décrit pour Dakar.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'geo3_population': [
            {
                question: "Comment appelle-t-on la différence entre le nombre de naissances et le nombre de décès dans une population ?",
                options: [
                    "Le solde naturel",
                    "La densité de population",
                    "La fécondité",
                    "Le solde migratoire"
                ],
                correct: 0,
                correction: "Le cours définit le solde naturel comme la différence entre la natalité et la mortalité.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Où se situent, selon le cours, les plus fortes concentrations de population dans le monde ?",
                options: [
                    "En Asie orientale, en Asie du Sud et en Europe",
                    "En Antarctique et au Sahara",
                    "Uniquement en Amérique du Nord",
                    "Dans les régions polaires"
                ],
                correct: 0,
                correction: "Le cours indique que les fortes concentrations de population se trouvent notamment en Asie orientale, en Asie du Sud et en Europe.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Le Sahara présente une très faible densité de population. Quel facteur explique le mieux cette situation, selon le cours ?",
                options: [
                    "Le manque de disponibilité en eau",
                    "Un excès de fertilité des sols",
                    "Une urbanisation trop importante",
                    "Une transition démographique déjà achevée"
                ],
                correct: 0,
                correction: "Le cours cite la disponibilité de l'eau parmi les facteurs physiques de répartition, et le Sahara illustre un « désert humain » lié à son aridité.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Un pays enregistre une mortalité en forte baisse alors que la natalité reste élevée, ce qui entraîne une croissance rapide de sa population. À quelle phase de la transition démographique correspond cette situation ?",
                options: [
                    "À la phase intermédiaire de forte croissance naturelle",
                    "À la phase finale où natalité et mortalité sont toutes deux faibles",
                    "Au régime initial où natalité et mortalité sont toutes deux élevées",
                    "À une phase de décroissance démographique"
                ],
                correct: 0,
                correction: "Le cours décrit la transition démographique comme un passage d'un régime à forte natalité et mortalité vers un régime où les deux sont faibles, avec une phase intermédiaire de forte croissance naturelle lorsque la mortalité baisse avant la natalité.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'geo3_urbanisation': [
            {
                question: "Que désigne le taux d'urbanisation ?",
                options: [
                    "Le pourcentage de la population vivant en ville",
                    "Le nombre total d'habitants d'une métropole",
                    "La superficie occupée par les villes d'un pays",
                    "Le nombre de fonctions de commandement d'une ville"
                ],
                correct: 0,
                correction: "Le cours définit le taux d'urbanisation comme le pourcentage de la population vivant en ville.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Parmi les villes citées comme exemples de villes mondiales dans le cours, laquelle en fait partie ?",
                options: [
                    "Tokyo",
                    "Bruxelles",
                    "Anvers",
                    "Liège"
                ],
                correct: 0,
                correction: "Le cours cite New York, Londres, Paris et Tokyo comme exemples de villes mondiales ; Bruxelles n'y est utilisée que comme exemple d'étude de cas comparatif.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Une vaste région urbaine continue regroupant plusieurs métropoles proches les unes des autres correspond à...",
                options: [
                    "Une mégalopole",
                    "Une périphérie",
                    "Un taux d'urbanisation",
                    "Une fonction de commandement"
                ],
                correct: 0,
                correction: "Le cours définit la mégalopole comme une vaste région urbaine continue, à distinguer de la métropole isolée.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Une métropole concentre des sièges d'entreprises, des universités et des connexions aériennes internationales, mais elle reste secondaire face à New York ou Londres à l'échelle mondiale. Que faut-il en conclure ?",
                options: [
                    "Son influence dépend de l'échelle d'observation : forte au niveau national, plus limitée au niveau mondial",
                    "Elle n'exerce aucune fonction de commandement",
                    "Elle ne peut pas être qualifiée de métropole",
                    "Le classement des villes mondiales ne dépend jamais de l'échelle"
                ],
                correct: 0,
                correction: "Le cours précise qu'une métropole peut dominer à l'échelle nationale mais être secondaire à l'échelle mondiale : l'analyse de la métropolisation doit toujours préciser l'échelle considérée.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'geo3_etalement': [
            {
                question: "Comment appelle-t-on la transformation de sols naturels ou agricoles en surfaces urbaines ?",
                options: [
                    "L'artificialisation",
                    "La suburbanisation",
                    "La densification",
                    "La mobilité pendulaire"
                ],
                correct: 0,
                correction: "Le cours définit l'artificialisation comme la transformation des sols naturels ou agricoles en surfaces urbaines.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Comment appelle-t-on une personne qui effectue chaque jour un déplacement entre son domicile et son lieu de travail ?",
                options: [
                    "Un navetteur",
                    "Un résident périurbain",
                    "Un aménageur",
                    "Un urbaniste"
                ],
                correct: 0,
                correction: "Le cours définit le navetteur comme une personne qui effectue des déplacements quotidiens entre domicile et travail.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Parmi les éléments suivants, lequel favorise le plus l'étalement urbain selon le cours ?",
                options: [
                    "La recherche de logements plus grands et l'usage de la voiture",
                    "La hausse durable du prix des carburants",
                    "La fermeture des axes routiers périphériques",
                    "La baisse de la population urbaine"
                ],
                correct: 0,
                correction: "Le cours indique que l'étalement urbain peut être lié à la recherche de logements plus grands, au prix du foncier, à l'usage de la voiture et au développement des infrastructures.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Une commune périurbaine belge voit son bâti s'étendre sur d'anciennes terres agricoles en vingt ans, tandis que les trajets domicile-travail vers la ville-centre s'allongent. Quelle politique d'aménagement permettrait le mieux de limiter ces effets, selon le cours ?",
                options: [
                    "Favoriser la densification et la mixité fonctionnelle plutôt que l'extension continue du bâti",
                    "Construire uniquement de nouvelles routes menant vers le centre",
                    "Supprimer les transports en commun périphériques existants",
                    "Encourager l'installation d'usines isolées en pleine campagne"
                ],
                correct: 0,
                correction: "Le cours précise que l'étalement urbain n'est pas inéluctable et que la densification et la mixité fonctionnelle peuvent limiter la consommation d'espace et l'allongement des déplacements.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'geo3_biomes': [
            {
                question: "Qu'est-ce que la biodiversité ?",
                options: [
                    "La variété des êtres vivants présents dans un milieu",
                    "La quantité de pluie tombant sur un territoire",
                    "La surface totale occupée par les forêts tropicales",
                    "Le nombre d'habitants d'une région"
                ],
                correct: 0,
                correction: "Le cours définit la biodiversité comme la variété des êtres vivants dans un milieu.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Quel biome se caractérise par un sol gelé en permanence (pergélisol) et un climat très froid ?",
                options: [
                    "La toundra",
                    "La savane",
                    "La forêt équatoriale",
                    "Le désert"
                ],
                correct: 0,
                correction: "Le cours définit la toundra comme un biome froid avec pergélisol.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "La taïga est principalement composée de...",
                options: [
                    "Forêts boréales de conifères",
                    "Forêts tropicales humides",
                    "Prairies sèches d'altitude",
                    "Zones désertiques sableuses"
                ],
                correct: 0,
                correction: "Le cours définit la taïga comme une forêt boréale de conifères, adaptée au froid, contrairement aux forêts tropicales chaudes et humides.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "En parcourant l'Afrique du Sahara vers l'équateur, les précipitations augmentent progressivement. Quel enchaînement de biomes observe-t-on le plus logiquement selon cette évolution des précipitations ?",
                options: [
                    "Désert, puis savane, puis forêt équatoriale",
                    "Toundra, puis taïga, puis désert",
                    "Forêt équatoriale, puis désert, puis toundra",
                    "Savane, puis toundra, puis désert"
                ],
                correct: 0,
                correction: "Le cours associe le désert à une très faible disponibilité en eau, la savane à une alternance de saisons sèche et humide, et la forêt équatoriale à un climat chaud et très humide : ces biomes se succèdent logiquement quand les précipitations augmentent.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'geo3_ressources': [
            {
                question: "Selon le cours, qu'est-ce qui transforme un élément du milieu en ressource ?",
                options: [
                    "Le fait qu'une société le rende utile pour ses besoins",
                    "Sa seule présence naturelle, indépendamment des sociétés",
                    "Son classement scientifique en minéral ou en végétal",
                    "Sa rareté absolue sur Terre"
                ],
                correct: 0,
                correction: "Le cours définit une ressource comme un élément du milieu rendu utile par une société : ce n'est pas la présence naturelle seule qui en fait une ressource.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Qu'est-ce que la rareté d'une ressource, selon le cours ?",
                options: [
                    "Sa disponibilité limitée",
                    "Son caractère totalement inépuisable",
                    "Sa présence uniquement dans les océans",
                    "Son absence totale d'utilité"
                ],
                correct: 0,
                correction: "Le cours définit la rareté comme la disponibilité limitée d'une ressource.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Un fleuve traverse plusieurs pays qui l'utilisent chacun pour l'irrigation et la production d'électricité. Quel exemple du cours cela illustre-t-il ?",
                options: [
                    "Un bassin fluvial partagé entre plusieurs États",
                    "Une ressource strictement locale, sans enjeu extérieur",
                    "Un territoire sans acteur identifiable",
                    "Une ressource inépuisable et sans aucun conflit d'usage"
                ],
                correct: 0,
                correction: "Le cours cite les bassins fluviaux partagés entre plusieurs États comme exemple typique de tensions autour d'une ressource commune.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Dans une région, l'accès à l'eau potable est limité non pas parce que l'eau est physiquement absente, mais parce que les infrastructures de distribution font défaut. Quel mécanisme explique le mieux cette situation, selon le cours ?",
                options: [
                    "L'accès technique et financier à la ressource, distinct de sa simple disponibilité physique",
                    "L'épuisement total de la ressource en eau",
                    "Le fait que l'eau soit devenue une ressource non renouvelable",
                    "L'absence totale de tout usage de l'eau dans la région"
                ],
                correct: 0,
                correction: "Le cours distingue la disponibilité physique d'une ressource de l'accès technique et financier à celle-ci, deux mécanismes différents pouvant expliquer une rareté d'usage.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'geo3_risques': [
            {
                question: "Qu'est-ce qu'un aléa, selon le cours sur les risques naturels ?",
                options: [
                    "Un phénomène naturel ou humain potentiellement dangereux",
                    "Une mesure de prévention mise en place par les autorités",
                    "La population exposée à un danger",
                    "La capacité d'une société à se reconstruire après une catastrophe"
                ],
                correct: 0,
                correction: "L'aléa désigne le phénomène (naturel ou humain) susceptible de causer des dommages ; il ne devient un risque qu'associé à des enjeux exposés.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Comment le cours définit-il un risque ?",
                options: [
                    "La rencontre entre un aléa et des enjeux exposés",
                    "Un phénomène naturel totalement indépendant des sociétés",
                    "Une catastrophe qui s'est déjà produite",
                    "Une mesure prise après une catastrophe pour reconstruire"
                ],
                correct: 0,
                correction: "Le cours indique que le risque résulte de la rencontre entre un aléa et des enjeux exposés.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Qu'est-ce que la résilience d'une société face à une catastrophe ?",
                options: [
                    "Sa capacité à faire face à l'événement et à se reconstruire",
                    "Le degré de destruction subi lors de l'événement",
                    "La probabilité qu'un aléa se produise",
                    "Le nombre de victimes causées par une catastrophe"
                ],
                correct: 0,
                correction: "La résilience désigne la capacité d'une société à faire face à un aléa et à se reconstruire après une catastrophe, dernière étape de la chaîne de gestion du risque.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Une usine chimique et un quartier résidentiel densément peuplé sont installés à proximité d'une zone inondable. Que représentent-ils dans l'analyse du risque ?",
                options: [
                    "Des enjeux exposés à l'aléa",
                    "L'aléa lui-même",
                    "Des mesures de prévention",
                    "La résilience du territoire"
                ],
                correct: 0,
                correction: "L'usine et le quartier sont des biens et des populations exposés à l'aléa d'inondation : ce sont donc des enjeux, dont la présence transforme l'aléa en risque.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Deux constructions identiques sont exposées au même aléa sismique, mais l'une respecte des normes antisismiques strictes et l'autre non. Quelle notion explique la différence de dégâts attendus ?",
                options: [
                    "La vulnérabilité",
                    "L'aléa",
                    "La résilience uniquement, sans lien avec la construction",
                    "L'absence totale de risque dans les deux cas"
                ],
                correct: 0,
                correction: "Une construction non renforcée est plus vulnérable au même aléa : la vulnérabilité, et non l'aléa, explique ici la différence de dégâts.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Parmi les étapes suivantes, laquelle appartient à la chaîne de gestion du risque décrite dans le cours ?",
                options: [
                    "La prévention",
                    "La spéculation foncière en zone à risque",
                    "L'ignorance délibérée de l'aléa",
                    "L'exportation des populations exposées"
                ],
                correct: 0,
                correction: "Le cours cite prévision, prévention, protection, préparation et reconstruction comme les étapes de la chaîne de gestion du risque ; la prévention en fait partie.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Un séisme de même magnitude touche deux villes : l'une dispose de bâtiments renforcés, de plans d'évacuation et de services de secours formés, l'autre non. Comment expliquer que la première subisse beaucoup moins de dégâts humains ?",
                options: [
                    "Sa vulnérabilité est plus faible grâce à la prévention et à la préparation",
                    "L'aléa y était en réalité moins intense",
                    "Le risque n'existait pas dans cette ville",
                    "La résilience n'a aucun effet sur les conséquences d'un séisme"
                ],
                correct: 0,
                correction: "Le cours donne cet exemple précis : un séisme identique provoque peu de dégâts dans une région préparée (vulnérabilité réduite par la prévention) et une catastrophe dans une ville très vulnérable.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Après une inondation majeure, une région reconstruit ses digues plus hautes, revoit les zones constructibles et forme la population aux gestes d'urgence. À quelles étapes de la gestion du risque ces mesures correspondent-elles principalement ?",
                options: [
                    "À la prévention et à la préparation face à de futurs aléas",
                    "À l'aléa lui-même",
                    "À la disparition totale du risque futur",
                    "À la suppression complète de la vulnérabilité"
                ],
                correct: 0,
                correction: "Rehausser les digues, limiter la construction en zone à risque et former la population sont des mesures de prévention et de préparation, deux maillons de la chaîne de gestion du risque.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'geo3_transition_demo': [
            {
                question: "Que mesure le taux de natalité ?",
                options: [
                    "Le nombre de naissances pour 1000 habitants",
                    "Le nombre de décès pour 1000 habitants",
                    "Le nombre moyen d'enfants par femme",
                    "La différence entre naissances et décès"
                ],
                correct: 0,
                correction: "Le taux de natalité correspond au nombre de naissances pour 1000 habitants, à ne pas confondre avec la mortalité ou l'accroissement naturel.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Comment calcule-t-on l'accroissement naturel d'une population ?",
                options: [
                    "En soustrayant le taux de mortalité du taux de natalité",
                    "En additionnant les taux de natalité et de mortalité",
                    "En divisant la population par sa superficie",
                    "En comptant uniquement les migrations"
                ],
                correct: 0,
                correction: "L'accroissement naturel se calcule en soustrayant la mortalité de la natalité ; il ne prend pas en compte les migrations, contrairement au solde migratoire.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Qu'est-ce que le vieillissement d'une population ?",
                options: [
                    "L'augmentation de la part des personnes âgées dans la population totale",
                    "La diminution du nombre total d'habitants",
                    "L'augmentation soudaine du taux de natalité",
                    "La baisse de la mortalité infantile uniquement"
                ],
                correct: 0,
                correction: "Le vieillissement correspond à l'augmentation de la part des personnes âgées dans une population, une conséquence possible de la fin de la transition démographique.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Dans un pays, le taux de mortalité baisse fortement grâce aux progrès médicaux, mais le taux de natalité reste élevé pendant plusieurs décennies. Quelle est la conséquence directe sur la population ?",
                options: [
                    "Une phase de forte croissance démographique",
                    "Une diminution immédiate de la population",
                    "Un vieillissement immédiat de la population",
                    "Une stabilité parfaite de la population"
                ],
                correct: 0,
                correction: "Le cours explique que la mortalité baisse généralement avant la natalité, ce qui provoque une phase de forte croissance démographique.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Une pyramide des âges présente une base large qui se rétrécit progressivement vers le sommet, indiquant beaucoup de naissances et une espérance de vie plus limitée. À quel profil démographique cela correspond-il le plus probablement, selon le cours ?",
                options: [
                    "Celui d'un pays d'Afrique subsaharienne, en début ou en cours de transition démographique",
                    "Celui d'une population fortement vieillie et en décroissance",
                    "Celui d'un pays où la natalité serait nulle",
                    "Celui d'un pays ayant déjà achevé toute transition démographique"
                ],
                correct: 0,
                correction: "Le cours propose de comparer les pyramides des âges de la Belgique et d'un pays d'Afrique subsaharienne : une base large correspond à une natalité encore élevée, typique d'un pays en cours de transition démographique.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Une population vieillissante, selon le cours, a notamment besoin de...",
                options: [
                    "Davantage de soins, alors que sa population active tend à diminuer",
                    "Moins d'infrastructures de santé",
                    "Une hausse automatique de la natalité",
                    "Aucune adaptation particulière de ses services publics"
                ],
                correct: 0,
                correction: "Le cours indique qu'une population vieillissante nécessite davantage de soins et peut connaître une diminution de la population active.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "La Belgique présente une pyramide des âges au sommet large et une base plus étroite, contrairement à un pays d'Afrique subsaharienne dont la pyramide est très évasée à la base. Quelle différence de phase de transition démographique cela traduit-il ?",
                options: [
                    "La Belgique est à un stade avancé de la transition (natalité et mortalité faibles), le pays subsaharien est plus tôt dans la transition",
                    "Les deux pays se trouvent exactement au même stade de la transition démographique",
                    "La Belgique connaît une forte croissance naturelle, contrairement au pays subsaharien",
                    "Le pays subsaharien a déjà achevé sa transition démographique"
                ],
                correct: 0,
                correction: "Une pyramide resserrée à la base traduit une natalité et une mortalité faibles (stade avancé de la transition), tandis qu'une base large traduit une natalité encore élevée (stade moins avancé), conformément à l'étude de cas du cours.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Un pays enregistre un taux de natalité de 10 pour 1000 et un taux de mortalité de 11 pour 1000 la même année. Que peut-on en déduire sur son accroissement naturel ?",
                options: [
                    "Il est négatif : la population diminue du seul fait des naissances et des décès",
                    "Il est fortement positif",
                    "Il est nul",
                    "Il ne peut pas être calculé avec ces données"
                ],
                correct: 0,
                correction: "L'accroissement naturel se calcule en soustrayant la mortalité de la natalité : 10 - 11 = -1 pour 1000, donc un accroissement naturel négatif.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ]
    };

    ['3e'].forEach(function (year) {
        (GEO_CHAPITRES[year] || []).forEach(function (chapitre) {
            var nouveaux = NOUVEAUX_EXERCICES[chapitre.id];
            if (!nouveaux) return;
            chapitre.exercices = (chapitre.exercices || []).filter(function (e) { return !isGeneric(e.question); });
            nouveaux.forEach(function (ex) { chapitre.exercices.push(ex); });
        });
    });
})();
