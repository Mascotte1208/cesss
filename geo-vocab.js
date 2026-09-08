// =========================================================
// GEO-VOCAB.JS
// Vocabulaire essentiel de géographie - CESS
// =========================================================

var GEO_VOCAB_CATEGORIES = {
    risques: {
        nom: "Risques & catastrophes",
        icone: "🌋"
    },
    population: {
        nom: "Population & migrations",
        icone: "👥"
    },
    villes: {
        nom: "Villes & urbanisation",
        icone: "🏙️"
    },
    ressources: {
        nom: "Ressources & environnement",
        icone: "🌱"
    },
    agriculture: {
        nom: "Agriculture & alimentation",
        icone: "🌾"
    },
    transports: {
        nom: "Transports & mobilités",
        icone: "🚆"
    },
    economie: {
        nom: "Économie & industrie",
        icone: "🏭"
    },
    geopolitique: {
        nom: "Géopolitique",
        icone: "🌍"
    },
    amenagement: {
        nom: "Aménagement du territoire",
        icone: "🗺️"
    },
    methodologie: {
        nom: "Méthodologie",
        icone: "📝"
    }
};


// =========================================================
// 3e
// =========================================================

var GEO_VOCAB_3E = [

    // RISQUES
    {
        id: "alea",
        terme: "Aléa",
        definition: "Phénomène potentiellement dangereux susceptible de se produire dans un territoire.",
        exemple: "Un séisme, une inondation ou une éruption volcanique.",
        categorie: "risques",
        niveau: "3e"
    },
    {
        id: "risque",
        terme: "Risque",
        definition: "Possibilité qu'un phénomène dangereux provoque des dommages sur une population ou un territoire.",
        exemple: "Le risque d'inondation dans une ville construite près d'un fleuve.",
        categorie: "risques",
        niveau: "3e"
    },
    {
        id: "vulnerabilite",
        terme: "Vulnérabilité",
        definition: "Degré de fragilité d'une population ou d'un territoire face à un danger.",
        exemple: "Des bâtiments fragiles augmentent la vulnérabilité lors d'un séisme.",
        categorie: "risques",
        niveau: "3e"
    },
    {
        id: "resilience",
        terme: "Résilience",
        definition: "Capacité d'une population ou d'un territoire à résister à une catastrophe et à se reconstruire.",
        exemple: "Une ville qui reconstruit rapidement ses infrastructures après une catastrophe.",
        categorie: "risques",
        niveau: "3e"
    },
    {
        id: "catastrophe",
        terme: "Catastrophe",
        definition: "Événement provoquant d'importants dégâts humains, matériels ou environnementaux.",
        exemple: "Un séisme destructeur provoquant de nombreuses victimes.",
        categorie: "risques",
        niveau: "3e"
    },

    // SEISMES / VOLCANS
    {
        id: "epicentre",
        terme: "Épicentre",
        definition: "Point situé à la surface de la Terre à la verticale du foyer d'un séisme.",
        exemple: "Les dégâts sont souvent importants à proximité de l'épicentre.",
        categorie: "risques",
        niveau: "3e"
    },
    {
        id: "magnitude",
        terme: "Magnitude",
        definition: "Mesure de l'énergie libérée par un séisme.",
        exemple: "Un séisme de magnitude élevée libère beaucoup d'énergie.",
        categorie: "risques",
        niveau: "3e"
    },
    {
        id: "tsunami",
        terme: "Tsunami",
        definition: "Série de vagues provoquée notamment par un déplacement brutal du fond marin.",
        exemple: "Un séisme sous-marin peut provoquer un tsunami.",
        categorie: "risques",
        niveau: "3e"
    },
    {
        id: "subduction",
        terme: "Subduction",
        definition: "Enfoncement d'une plaque tectonique sous une autre.",
        exemple: "Les zones de subduction sont souvent associées à des séismes et à un volcanisme important.",
        categorie: "risques",
        niveau: "3e"
    },
    {
        id: "plaque_tectonique",
        terme: "Plaque tectonique",
        definition: "Bloc rigide de la lithosphère se déplaçant lentement à la surface du globe.",
        exemple: "La rencontre de plaques peut provoquer des séismes.",
        categorie: "risques",
        niveau: "3e"
    },

    // CLIMATS
    {
        id: "climat",
        terme: "Climat",
        definition: "Ensemble des conditions atmosphériques moyennes observées sur une longue période dans une région.",
        exemple: "La Belgique possède un climat océanique.",
        categorie: "ressources",
        niveau: "3e"
    },
    {
        id: "latitude",
        terme: "Latitude",
        definition: "Distance angulaire d'un point par rapport à l'équateur.",
        exemple: "La température moyenne diminue généralement lorsque la latitude augmente.",
        categorie: "ressources",
        niveau: "3e"
    },
    {
        id: "altitude",
        terme: "Altitude",
        definition: "Hauteur d'un lieu par rapport au niveau moyen de la mer.",
        exemple: "La température diminue généralement avec l'altitude.",
        categorie: "ressources",
        niveau: "3e"
    },
    {
        id: "continentalite",
        terme: "Continentalité",
        definition: "Influence de l'éloignement de la mer sur le climat.",
        exemple: "Les régions continentales connaissent souvent de plus grands écarts de température.",
        categorie: "ressources",
        niveau: "3e"
    },
    {
        id: "courant_marin",
        terme: "Courant marin",
        definition: "Déplacement organisé de masses d'eau dans les océans.",
        exemple: "Le Gulf Stream contribue à adoucir le climat de l'Europe occidentale.",
        categorie: "ressources",
        niveau: "3e"
    },

    // TERRITOIRE
    {
        id: "fonction_territoire",
        terme: "Fonction du territoire",
        definition: "Usage ou activité principale attribué à une partie d'un territoire.",
        exemple: "Fonction résidentielle, industrielle, commerciale ou touristique.",
        categorie: "amenagement",
        niveau: "3e"
    },
    {
        id: "atout",
        terme: "Atout",
        definition: "Élément favorable à l'installation ou au développement d'une activité.",
        exemple: "La proximité d'une autoroute peut être un atout pour une entreprise.",
        categorie: "amenagement",
        niveau: "3e"
    },
    {
        id: "contrainte",
        terme: "Contrainte",
        definition: "Élément qui limite ou complique l'installation ou le développement d'une activité.",
        exemple: "Les risques d'inondation peuvent constituer une contrainte.",
        categorie: "amenagement",
        niveau: "3e"
    },
    {
        id: "migration_pendulaire",
        terme: "Migration pendulaire",
        definition: "Déplacement régulier entre le domicile et le lieu de travail ou d'étude.",
        exemple: "Une personne habitant en périphérie et travaillant en ville effectue une migration pendulaire.",
        categorie: "transports",
        niveau: "3e"
    },
    {
        id: "distance_temps",
        terme: "Distance-temps",
        definition: "Temps nécessaire pour parcourir une distance donnée.",
        exemple: "Une autoroute peut réduire la distance-temps entre deux villes.",
        categorie: "transports",
        niveau: "3e"
    }
];


// =========================================================
// 4e
// =========================================================

var GEO_VOCAB_4E = [

    // EAU
    {
        id: "eau_douce",
        terme: "Eau douce",
        definition: "Eau contenant peu de sels dissous, utilisable notamment pour les besoins humains après traitement si nécessaire.",
        exemple: "Les fleuves, lacs et nappes phréatiques contiennent de l'eau douce.",
        categorie: "ressources",
        niveau: "4e"
    },
    {
        id: "stress_hydrique",
        terme: "Stress hydrique",
        definition: "Situation dans laquelle les ressources en eau disponibles sont insuffisantes par rapport aux besoins.",
        exemple: "Certaines régions arides connaissent régulièrement un stress hydrique.",
        categorie: "ressources",
        niveau: "4e"
    },
    {
        id: "penurie_eau",
        terme: "Pénurie d'eau",
        definition: "Situation de manque d'eau disponible pour répondre aux besoins d'une population.",
        exemple: "Une sécheresse prolongée peut provoquer une pénurie d'eau.",
        categorie: "ressources",
        niveau: "4e"
    },
    {
        id: "bassin_versant",
        terme: "Bassin versant",
        definition: "Territoire dont les eaux s'écoulent vers un même cours d'eau ou un même point.",
        exemple: "Le bassin versant d'un fleuve comprend les territoires qui alimentent ce fleuve.",
        categorie: "ressources",
        niveau: "4e"
    },
    {
        id: "nappe_phreatique",
        terme: "Nappe phréatique",
        definition: "Réserve d'eau souterraine présente dans les roches du sous-sol.",
        exemple: "Une nappe phréatique peut être utilisée pour l'approvisionnement en eau potable.",
        categorie: "ressources",
        niveau: "4e"
    },

    // AGRICULTURE
    {
        id: "agriculture_vivriere",
        terme: "Agriculture vivrière",
        definition: "Agriculture destinée principalement à nourrir la population locale.",
        exemple: "Une famille produisant essentiellement des aliments pour sa propre consommation.",
        categorie: "agriculture",
        niveau: "4e"
    },
    {
        id: "agriculture_commerciale",
        terme: "Agriculture commerciale",
        definition: "Agriculture dont la production est principalement destinée à la vente.",
        exemple: "Une plantation produisant du café pour l'exportation.",
        categorie: "agriculture",
        niveau: "4e"
    },
    {
        id: "rendement",
        terme: "Rendement agricole",
        definition: "Quantité produite par unité de surface ou selon une unité de production.",
        exemple: "Une parcelle produisant beaucoup de céréales possède un rendement élevé.",
        categorie: "agriculture",
        niveau: "4e"
    },
    {
        id: "securite_alimentaire",
        terme: "Sécurité alimentaire",
        definition: "Situation dans laquelle une population dispose d'un accès suffisant à une alimentation sûre et nutritive.",
        exemple: "La sécurité alimentaire dépend notamment de la production, de l'accès aux aliments et de leur disponibilité.",
        categorie: "agriculture",
        niveau: "4e"
    },

    // POPULATION
    {
        id: "densite",
        terme: "Densité de population",
        definition: "Nombre moyen d'habitants par unité de surface.",
        exemple: "La densité se calcule généralement en habitants par km².",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "croissance_demographique",
        terme: "Croissance démographique",
        definition: "Augmentation ou diminution de la population d'un territoire au cours du temps.",
        exemple: "Une forte natalité peut entraîner une croissance démographique importante.",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "natalite",
        terme: "Natalité",
        definition: "Nombre de naissances enregistrées dans une population pendant une période donnée.",
        exemple: "Une baisse de la natalité peut ralentir la croissance démographique.",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "mortalite",
        terme: "Mortalité",
        definition: "Nombre de décès enregistrés dans une population pendant une période donnée.",
        exemple: "L'amélioration des soins peut contribuer à réduire la mortalité.",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "solde_naturel",
        terme: "Solde naturel",
        definition: "Différence entre le nombre de naissances et le nombre de décès.",
        exemple: "Solde naturel = naissances − décès.",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "solde_migratoire",
        terme: "Solde migratoire",
        definition: "Différence entre les entrées et les sorties de population liées aux migrations.",
        exemple: "Un territoire accueillant plus de migrants qu'il n'en perd possède un solde migratoire positif.",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "migration",
        terme: "Migration",
        definition: "Déplacement durable d'une personne ou d'une population d'un lieu vers un autre.",
        exemple: "Une personne quittant son pays pour s'installer durablement dans un autre pays est un migrant.",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "immigration",
        terme: "Immigration",
        definition: "Arrivée de personnes dans un territoire afin d'y vivre.",
        exemple: "L'arrivée de nouveaux habitants dans un pays constitue une immigration.",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "emigration",
        terme: "Émigration",
        definition: "Départ de personnes hors de leur territoire pour aller vivre ailleurs.",
        exemple: "Une personne quittant son pays pour s'installer à l'étranger émigre.",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "facteur_attraction",
        terme: "Facteur d'attraction",
        definition: "Élément qui encourage une population à s'installer dans un territoire.",
        exemple: "La présence d'emplois peut attirer des migrants.",
        categorie: "population",
        niveau: "4e"
    },
    {
        id: "facteur_repulsion",
        terme: "Facteur de répulsion",
        definition: "Élément qui pousse une population à quitter un territoire.",
        exemple: "Une guerre peut être un facteur de répulsion.",
        categorie: "population",
        niveau: "4e"
    }
];


// =========================================================
// 5e
// =========================================================

var GEO_VOCAB_5E = [

    // URBANISATION
    {
        id: "urbanisation",
        terme: "Urbanisation",
        definition: "Processus d'augmentation de la population urbaine et d'extension des espaces urbains.",
        exemple: "La croissance rapide des villes dans de nombreux pays est un phénomène d'urbanisation.",
        categorie: "villes",
        niveau: "5e"
    },
    {
        id: "urbanisation_diffuse",
        terme: "Urbanisation diffuse",
        definition: "Extension dispersée de l'habitat et des activités dans les espaces périphériques.",
        exemple: "La construction de maisons dispersées autour d'une ville.",
        categorie: "villes",
        niveau: "5e"
    },
    {
        id: "etalement_urbain",
        terme: "Étalement urbain",
        definition: "Extension de la ville vers les espaces périphériques.",
        exemple: "Des lotissements construits de plus en plus loin du centre-ville.",
        categorie: "villes",
        niveau: "5e"
    },
    {
        id: "metropolisation",
        terme: "Métropolisation",
        definition: "Concentration des populations, des richesses et des fonctions de commandement dans les grandes villes.",
        exemple: "Les grandes métropoles concentrent sièges sociaux, universités et institutions.",
        categorie: "villes",
        niveau: "5e"
    },
    {
        id: "metropole",
        terme: "Métropole",
        definition: "Grande ville exerçant une influence importante sur un territoire grâce à ses fonctions économiques, politiques et culturelles.",
        exemple: "Paris, Londres ou New York sont des métropoles mondiales.",
        categorie: "villes",
        niveau: "5e"
    },
    {
        id: "fonction_commandement",
        terme: "Fonction de commandement",
        definition: "Fonction permettant à une ville ou un territoire de prendre des décisions importantes.",
        exemple: "Sièges sociaux de grandes entreprises, institutions politiques ou financières.",
        categorie: "villes",
        niveau: "5e"
    },
    {
        id: "centre_peripherie",
        terme: "Centre / périphérie",
        definition: "Organisation spatiale opposant un espace central concentrant les activités à des espaces périphériques.",
        exemple: "Le centre d'une métropole concentre souvent davantage d'emplois et de services.",
        categorie: "villes",
        niveau: "5e"
    },

    // INDUSTRIE
    {
        id: "industrie",
        terme: "Industrie",
        definition: "Activité économique qui transforme des matières premières en produits.",
        exemple: "L'industrie automobile transforme différents matériaux en véhicules.",
        categorie: "economie",
        niveau: "5e"
    },
    {
        id: "localisation",
        terme: "Localisation",
        definition: "Choix du lieu où une activité ou une infrastructure est installée.",
        exemple: "Une entreprise peut choisir sa localisation en fonction des transports.",
        categorie: "economie",
        niveau: "5e"
    },
    {
        id: "delocalisation",
        terme: "Délocalisation",
        definition: "Transfert d'une activité productive d'un territoire vers un autre.",
        exemple: "Une entreprise peut déplacer une usine vers un pays où les coûts de production sont plus faibles.",
        categorie: "economie",
        niveau: "5e"
    },
    {
        id: "mondialisation",
        terme: "Mondialisation",
        definition: "Processus d'intensification des échanges et des relations entre les territoires du monde.",
        exemple: "Les produits sont conçus, fabriqués et vendus à l'échelle mondiale.",
        categorie: "economie",
        niveau: "5e"
    },
    {
        id: "chaine_production",
        terme: "Chaîne de production",
        definition: "Ensemble des étapes nécessaires à la fabrication et à la distribution d'un produit.",
        exemple: "Les composants d'un téléphone peuvent être produits dans plusieurs pays.",
        categorie: "economie",
        niveau: "5e"
    },

    // TRANSPORTS
    {
        id: "reseau",
        terme: "Réseau",
        definition: "Ensemble organisé de lieux et d'axes permettant des échanges ou des déplacements.",
        exemple: "Un réseau autoroutier relie différentes villes.",
        categorie: "transports",
        niveau: "5e"
    },
    {
        id: "flux",
        terme: "Flux",
        definition: "Déplacement de personnes, de marchandises, de capitaux ou d'informations entre différents lieux.",
        exemple: "Les échanges commerciaux internationaux créent d'importants flux de marchandises.",
        categorie: "transports",
        niveau: "5e"
    },
    {
        id: "mobilite",
        terme: "Mobilité",
        definition: "Possibilité et pratique de se déplacer d'un lieu à un autre.",
        exemple: "Les transports publics facilitent la mobilité des habitants.",
        categorie: "transports",
        niveau: "5e"
    },
    {
        id: "accessibilite",
        terme: "Accessibilité",
        definition: "Facilité avec laquelle un lieu peut être atteint depuis d'autres territoires.",
        exemple: "Une gare TGV améliore l'accessibilité d'une ville.",
        categorie: "transports",
        niveau: "5e"
    },
    {
        id: "hub",
        terme: "Hub",
        definition: "Nœud majeur d'un réseau où se concentrent et se redistribuent de nombreux flux.",
        exemple: "Un grand aéroport international peut fonctionner comme un hub.",
        categorie: "transports",
        niveau: "5e"
    },
    {
        id: "plateforme_logistique",
        terme: "Plateforme logistique",
        definition: "Lieu organisé pour recevoir, stocker, trier et redistribuer des marchandises.",
        exemple: "Une plateforme logistique située près d'une autoroute peut faciliter la distribution.",
        categorie: "transports",
        niveau: "5e"
    }
];


// =========================================================
// 6e
// =========================================================

var GEO_VOCAB_6E = [

    // DEVELOPPEMENT DURABLE
    {
        id: "developpement_durable",
        terme: "Développement durable",
        definition: "Mode de développement visant à répondre aux besoins actuels sans compromettre la capacité des générations futures à répondre aux leurs.",
        exemple: "Une politique combinant développement économique, justice sociale et protection de l'environnement.",
        categorie: "ressources",
        niveau: "6e"
    },
    {
        id: "pilier_economique",
        terme: "Pilier économique",
        definition: "Dimension du développement durable liée à la création de richesses et à la viabilité économique.",
        exemple: "Une activité doit pouvoir fonctionner économiquement sur le long terme.",
        categorie: "ressources",
        niveau: "6e"
    },
    {
        id: "pilier_social",
        terme: "Pilier social",
        definition: "Dimension du développement durable liée aux besoins humains, aux conditions de vie et aux inégalités.",
        exemple: "L'accès à l'éducation et aux soins relève du pilier social.",
        categorie: "ressources",
        niveau: "6e"
    },
    {
        id: "pilier_environnemental",
        terme: "Pilier environnemental",
        definition: "Dimension du développement durable liée à la protection des ressources naturelles et des écosystèmes.",
        exemple: "Réduire les émissions polluantes contribue au pilier environnemental.",
        categorie: "ressources",
        niveau: "6e"
    },
    {
        id: "odd",
        terme: "ODD",
        definition: "Objectifs de développement durable définis au niveau international pour répondre à différents enjeux sociaux, économiques et environnementaux.",
        exemple: "L'accès à l'eau potable fait partie des objectifs de développement durable.",
        categorie: "ressources",
        niveau: "6e"
    },
    {
        id: "economie_circulaire",
        terme: "Économie circulaire",
        definition: "Modèle économique visant à réduire le gaspillage des ressources grâce notamment au réemploi, à la réparation et au recyclage.",
        exemple: "Réparer un appareil plutôt que le jeter participe à l'économie circulaire.",
        categorie: "ressources",
        niveau: "6e"
    },
    {
        id: "empreinte_ecologique",
        terme: "Empreinte écologique",
        definition: "Indicateur permettant d'estimer la pression exercée par les activités humaines sur les ressources et les écosystèmes.",
        exemple: "Une consommation importante de ressources augmente l'empreinte écologique.",
        categorie: "ressources",
        niveau: "6e"
    },

    // AMENAGEMENT
    {
        id: "amenagement_territoire",
        terme: "Aménagement du territoire",
        definition: "Action organisée visant à transformer et organiser un territoire en fonction des besoins de la population et des activités.",
        exemple: "Construire une ligne de tram est un aménagement du territoire.",
        categorie: "amenagement",
        niveau: "6e"
    },
    {
        id: "conflit_usage",
        terme: "Conflit d'usage",
        definition: "Opposition entre plusieurs acteurs ou fonctions qui souhaitent utiliser un même espace de manière différente.",
        exemple: "Un projet industriel peut entrer en conflit avec la volonté de préserver un espace naturel.",
        categorie: "amenagement",
        niveau: "6e"
    },
    {
        id: "acteur",
        terme: "Acteur",
        definition: "Personne, groupe, entreprise ou institution qui intervient dans l'organisation d'un territoire.",
        exemple: "Les habitants, les entreprises et les pouvoirs publics sont des acteurs du territoire.",
        categorie: "amenagement",
        niveau: "6e"
    },
    {
        id: "affectation_sol",
        terme: "Plan d'affectation du sol",
        definition: "Document définissant les usages autorisés des différentes parties d'un territoire.",
        exemple: "Une zone peut être destinée à l'habitat, à l'industrie ou à la protection de la nature.",
        categorie: "amenagement",
        niveau: "6e"
    },

    // GEOPOLITIQUE
    {
        id: "geopolitique",
        terme: "Géopolitique",
        definition: "Étude des rivalités de pouvoir entre différents acteurs sur des territoires.",
        exemple: "Les tensions liées au contrôle d'une frontière relèvent de la géopolitique.",
        categorie: "geopolitique",
        niveau: "6e"
    },
    {
        id: "puissance",
        terme: "Puissance",
        definition: "Capacité d'un État ou d'un acteur à exercer une influence sur d'autres territoires ou acteurs.",
        exemple: "La puissance peut être économique, militaire, politique ou culturelle.",
        categorie: "geopolitique",
        niveau: "6e"
    },
    {
        id: "influence",
        terme: "Influence",
        definition: "Capacité à agir sur les décisions ou les comportements d'autres acteurs.",
        exemple: "Un État peut exercer une influence culturelle ou économique à l'étranger.",
        categorie: "geopolitique",
        niveau: "6e"
    },
    {
        id: "frontiere",
        terme: "Frontière",
        definition: "Limite séparant deux territoires politiques.",
        exemple: "Une frontière peut séparer deux États.",
        categorie: "geopolitique",
        niveau: "6e"
    },
    {
        id: "ressource_strategique",
        terme: "Ressource stratégique",
        definition: "Ressource considérée comme particulièrement importante pour l'économie, la sécurité ou la puissance d'un territoire.",
        exemple: "Le pétrole, le gaz ou certaines terres rares peuvent être des ressources stratégiques.",
        categorie: "geopolitique",
        niveau: "6e"
    },

    // METHODOLOGIE
    {
        id: "argument",
        terme: "Argument",
        definition: "Idée utilisée pour défendre une réponse ou démontrer un point de vue.",
        exemple: "La proximité d'un axe de transport peut être un argument expliquant la localisation d'une entreprise.",
        categorie: "methodologie",
        niveau: "6e"
    },
    {
        id: "exemple_geographique",
        terme: "Exemple géographique",
        definition: "Lieu, territoire, phénomène ou donnée précise permettant d'illustrer un argument.",
        exemple: "Citer Bruxelles pour illustrer une fonction de commandement.",
        categorie: "methodologie",
        niveau: "6e"
    },
    {
        id: "localisation_geographique",
        terme: "Localisation",
        definition: "Position précise d'un phénomène ou d'un territoire dans l'espace.",
        exemple: "Situer une ville à l'ouest de la Belgique.",
        categorie: "methodologie",
        niveau: "6e"
    },
    {
        id: "echelle",
        terme: "Échelle",
        definition: "Niveau spatial auquel on analyse un phénomène géographique.",
        exemple: "On peut étudier une migration à l'échelle locale, nationale ou mondiale.",
        categorie: "methodologie",
        niveau: "6e"
    },
    {
        id: "croquis",
        terme: "Croquis",
        definition: "Représentation cartographique simplifiée et organisée d'un espace ou d'un phénomène.",
        exemple: "Un croquis peut représenter les principales fonctions d'une métropole.",
        categorie: "methodologie",
        niveau: "6e"
    },
    {
        id: "legende",
        terme: "Légende",
        definition: "Ensemble des informations permettant de comprendre les figurés et les éléments représentés sur une carte.",
        exemple: "Une légende organisée par parties facilite la lecture d'un croquis.",
        categorie: "methodologie",
        niveau: "6e"
    }
];


// =========================================================
// REGROUPEMENT GLOBAL
// =========================================================

var GEO_VOCAB = {
    "3e": GEO_VOCAB_3E,
    "4e": GEO_VOCAB_4E,
    "5e": GEO_VOCAB_5E,
    "6e": GEO_VOCAB_6E
};


// =========================================================
// VERSION PLATE / COMPATIBILITÉ AVEC L'APPLICATION
// =========================================================

var GEO_VOCAB_DATA = [
    ...GEO_VOCAB_3E,
    ...GEO_VOCAB_4E,
    ...GEO_VOCAB_5E,
    ...GEO_VOCAB_6E
];


// =========================================================
// OUTILS DE RECHERCHE DU VOCABULAIRE
// =========================================================

function getGeoVocabByYear(annee) {
    return GEO_VOCAB[annee] || [];
}


function getGeoVocabByCategory(categorie) {
    return GEO_VOCAB_DATA.filter(function(item) {
        return item.categorie === categorie;
    });
}


function searchGeoVocab(search) {
    if (!search) {
        return GEO_VOCAB_DATA;
    }

    var terme = search
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    return GEO_VOCAB_DATA.filter(function(item) {

        var texte = (
            item.terme + " " +
            item.definition + " " +
            (item.exemple || "") + " " +
            item.categorie
        )
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

        return texte.includes(terme);
    });
}
