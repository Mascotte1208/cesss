/* =========================================================
   EXERCICES SUPPLEMENTAIRES — GEOGRAPHIE 3e
   Ajoutés séparément pour garder geo-data.js lisible.
   ========================================================= */

(function () {
    if (typeof GEO_CHAPITRES === 'undefined' || !Array.isArray(GEO_CHAPITRES['3e'])) {
        return;
    }

    var exercicesSupplementaires = {
    "geo3_repères": [
        {
            "niveau": "Comprendre",
            "question": "À quelle échelle étudie-t-on le réseau de transports d'une commune ?",
            "options": [
                "À l'échelle locale",
                "À l'échelle mondiale",
                "À l'échelle continentale",
                "À l'échelle planétaire"
            ],
            "correct": 0,
            "correction": "Une commune et son réseau de transports relèvent d'abord de l'échelle locale."
        },
        {
            "niveau": "S’entraîner",
            "question": "Des travailleurs habitent en périphérie et se rendent chaque jour vers le centre-ville. Quel élément géographique observe-t-on ?",
            "options": [
                "Un flux de personnes",
                "Une frontière naturelle",
                "Un biome",
                "Une ressource non renouvelable"
            ],
            "correct": 0,
            "correction": "Les déplacements quotidiens constituent un flux de personnes entre la périphérie et le centre."
        },
        {
            "niveau": "Type CESS",
            "question": "Une ville concentre les emplois et les services tandis que les communes voisines en dépendent. Quel modèle décrit cette organisation ?",
            "options": [
                "Centre et périphérie",
                "Climat et biome",
                "Latitude et longitude",
                "Relief et hydrographie"
            ],
            "correct": 0,
            "correction": "La ville joue le rôle de centre dominant et les communes dépendantes forment sa périphérie."
        }
    ],
    "geo3_cartes": [
        {
            "niveau": "Comprendre",
            "question": "Quel élément d'une carte explique la signification des couleurs et des symboles ?",
            "options": [
                "La légende",
                "L'échelle",
                "Le titre",
                "La source"
            ],
            "correct": 0,
            "correction": "La légende donne la signification des figurés, couleurs et symboles employés."
        },
        {
            "niveau": "S’entraîner",
            "question": "Sur une carte au 1:100 000, 1 cm représente quelle distance réelle ?",
            "options": [
                "1 km",
                "100 km",
                "100 m",
                "10 km"
            ],
            "correct": 0,
            "correction": "100 000 cm correspondent à 1 000 m, soit 1 km."
        },
        {
            "niveau": "Type CESS",
            "question": "Deux cartes présentent des données différentes sur le même territoire. Quelle vérification est prioritaire avant de les comparer ?",
            "options": [
                "Leur date, leur source et leur échelle",
                "La beauté de leurs couleurs",
                "Le nombre de villes dessinées",
                "La taille de leur titre"
            ],
            "correct": 0,
            "correction": "Une comparaison valable exige de contrôler la date, la source, l'échelle et la nature des données."
        }
    ],
    "geo3_climats": [
        {
            "niveau": "S’entraîner",
            "question": "Pourquoi les hivers sont-ils généralement plus doux près de l'océan qu'à l'intérieur des continents ?",
            "options": [
                "L'océan limite les écarts de température",
                "La latitude change chaque saison",
                "Les villes bloquent le froid",
                "L'altitude y est toujours plus élevée"
            ],
            "correct": 0,
            "correction": "L'eau se réchauffe et se refroidit lentement : l'influence océanique réduit les amplitudes thermiques."
        },
        {
            "niveau": "Type CESS",
            "question": "Un diagramme climatique montre des températures élevées toute l'année et des précipitations abondantes chaque mois. Quel climat indique-t-il ?",
            "options": [
                "Équatorial",
                "Méditerranéen",
                "Polaire",
                "Continental froid"
            ],
            "correct": 0,
            "correction": "La chaleur constante et les pluies abondantes toute l'année caractérisent le climat équatorial."
        }
    ],
    "geo3_population": [
        {
            "niveau": "Comprendre",
            "question": "Comment calcule-t-on la densité de population ?",
            "options": [
                "Population divisée par superficie",
                "Superficie divisée par population",
                "Naissances moins décès",
                "Population multipliée par superficie"
            ],
            "correct": 0,
            "correction": "La densité est le nombre d'habitants divisé par la superficie, généralement en habitants par km²."
        },
        {
            "niveau": "S’entraîner",
            "question": "Un territoire compte 600 000 habitants sur 3 000 km². Quelle est sa densité ?",
            "options": [
                "200 hab./km²",
                "20 hab./km²",
                "2 000 hab./km²",
                "180 hab./km²"
            ],
            "correct": 0,
            "correction": "600 000 ÷ 3 000 = 200 habitants par km²."
        },
        {
            "niveau": "Type CESS",
            "question": "Une région fertile, bien reliée aux villes et offrant de nombreux emplois est très peuplée. Quelle explication est la plus complète ?",
            "options": [
                "Des facteurs naturels et humains se combinent",
                "Seul le climat explique la population",
                "Seule la superficie compte",
                "La densité dépend uniquement des frontières"
            ],
            "correct": 0,
            "correction": "La répartition résulte de plusieurs facteurs : ressources, accessibilité, histoire, activités économiques et conditions naturelles."
        }
    ],
    "geo3_urbanisation": [
        {
            "niveau": "Comprendre",
            "question": "Que désigne l'urbanisation ?",
            "options": [
                "L'augmentation de la population vivant en ville",
                "La disparition des centres urbains",
                "La baisse des fonctions urbaines",
                "Le retour général à la campagne"
            ],
            "correct": 0,
            "correction": "L'urbanisation correspond à l'augmentation de la part et du nombre d'habitants vivant dans les espaces urbains."
        },
        {
            "niveau": "S’entraîner",
            "question": "Quel équipement correspond à une fonction de commandement métropolitaine ?",
            "options": [
                "Le siège d'une grande entreprise",
                "Un champ agricole isolé",
                "Une réserve naturelle",
                "Une carrière de pierre"
            ],
            "correct": 0,
            "correction": "Les sièges sociaux, institutions et services supérieurs renforcent les fonctions de commandement d'une métropole."
        },
        {
            "niveau": "Type CESS",
            "question": "Une grande ville attire les sièges sociaux, universités et liaisons internationales. Quel processus cela illustre-t-il ?",
            "options": [
                "La métropolisation",
                "La désertification",
                "La transition démographique",
                "La continentalité"
            ],
            "correct": 0,
            "correction": "La concentration des populations et fonctions stratégiques dans les grandes villes caractérise la métropolisation."
        }
    ],
    "geo3_etalement": [
        {
            "niveau": "S’entraîner",
            "question": "Quel aménagement réduit le plus la dépendance automobile dans une zone périurbaine ?",
            "options": [
                "Une ligne de transport public reliée au centre",
                "Un nouveau parking éloigné",
                "Une autoroute supplémentaire uniquement",
                "La suppression des pistes cyclables"
            ],
            "correct": 0,
            "correction": "Un transport public efficace offre une alternative à la voiture pour les déplacements quotidiens."
        },
        {
            "niveau": "Type CESS",
            "question": "Des logements sont construits loin du centre, sur d'anciennes terres agricoles. Quelles conséquences faut-il associer ?",
            "options": [
                "Consommation d'espace et déplacements plus longs",
                "Retour de la biodiversité et baisse des trajets",
                "Densification du centre et disparition des routes",
                "Réduction automatique des émissions"
            ],
            "correct": 0,
            "correction": "L'étalement consomme des sols, allonge souvent les déplacements et augmente les besoins en infrastructures."
        }
    ],
    "geo3_biomes": [
        {
            "niveau": "Comprendre",
            "question": "Qu'est-ce qu'un biome ?",
            "options": [
                "Un grand ensemble écologique lié notamment au climat et à la végétation",
                "Une frontière politique",
                "Un réseau de transport",
                "Une unité de monnaie"
            ],
            "correct": 0,
            "correction": "Un biome est un vaste ensemble caractérisé par son climat, sa végétation et les espèces qui y vivent."
        },
        {
            "niveau": "S’entraîner",
            "question": "Quelle pression humaine favorise directement la déforestation tropicale ?",
            "options": [
                "L'extension des terres agricoles",
                "La baisse de la température polaire",
                "La rotation de la Terre",
                "L'érosion glaciaire"
            ],
            "correct": 0,
            "correction": "L'ouverture de terres pour l'agriculture et l'élevage constitue une cause majeure de déforestation."
        },
        {
            "niveau": "Type CESS",
            "question": "Dans une région sèche, le surpâturage détruit la végétation et expose les sols. Quel risque augmente ?",
            "options": [
                "La désertification",
                "La métropolisation",
                "La continentalité",
                "La densification urbaine"
            ],
            "correct": 0,
            "correction": "La disparition du couvert végétal fragilise les sols et peut accélérer la désertification."
        }
    ],
    "geo3_ressources": [
        {
            "niveau": "Comprendre",
            "question": "Le pétrole est classé comme ressource…",
            "options": [
                "Non renouvelable à l'échelle humaine",
                "Renouvelable chaque année",
                "Inépuisable",
                "Sans usage énergétique"
            ],
            "correct": 0,
            "correction": "Le pétrole se forme sur des millions d'années et ses stocks sont limités à l'échelle humaine."
        },
        {
            "niveau": "S’entraîner",
            "question": "Des agriculteurs, une ville et une industrie utilisent la même réserve d'eau. Quelle notion décrit leurs intérêts concurrents ?",
            "options": [
                "Un conflit d'usage",
                "Une transition démographique",
                "Une métropolisation",
                "Un changement d'échelle"
            ],
            "correct": 0,
            "correction": "Plusieurs acteurs qui convoitent une même ressource peuvent entrer en conflit d'usage."
        },
        {
            "niveau": "Type CESS",
            "question": "Quelle politique combine le mieux sécurité d'approvisionnement et durabilité énergétique ?",
            "options": [
                "Réduire la consommation et diversifier les sources renouvelables",
                "Dépendre d'une seule énergie importée",
                "Augmenter toutes les consommations",
                "Épuiser rapidement les stocks disponibles"
            ],
            "correct": 0,
            "correction": "La sobriété, l'efficacité et la diversification des renouvelables réduisent à la fois les risques et les impacts."
        }
    ]
};

    GEO_CHAPITRES['3e'].forEach(function (chapitre) {
        var ajouts = exercicesSupplementaires[chapitre.id];

        if (!Array.isArray(ajouts) || !ajouts.length) {
            return;
        }

        chapitre.exercices = Array.isArray(chapitre.exercices)
            ? chapitre.exercices.concat(ajouts)
            : ajouts.slice();
    });
})();
