/* =========================================================
   CHAPITRES COMPLEMENTAIRES — MATHS & GEOGRAPHIE
   Cours, objectifs et notions. Les exercices progressifs
   sont complétés par all-exercises-extra.js.
   ========================================================= */

(function () {
    function liste(items) {
        return '<ul>' + items.map(function (item) {
            return '<li>' + item + '</li>';
        }).join('') + '</ul>';
    }

    function creerChapitre(definition) {
        return {
            id: definition.id,
            titre: definition.titre,
            desc: definition.desc,
            niveau: definition.annee,
            icone: definition.icone,
            color: definition.color,
            cours:
                '<h4>🔹 Notions essentielles</h4>' +
                '<p>' + definition.intro + '</p>' +
                liste(definition.notions) +
                '<h4>🔹 Comprendre le mécanisme</h4>' +
                '<p>' + definition.mecanisme + '</p>' +
                '<h4>🔹 Méthode pas à pas</h4>' +
                liste(definition.methode) +
                '<h4>🔹 Exemple d’application</h4>' +
                '<p>' + definition.exemple + '</p>' +
                '<h4>🔹 Pièges classiques</h4>' +
                '<div class="piege">' + liste(definition.pieges) + '</div>' +
                '<h4>🔹 Check-list</h4>' +
                '<div class="checklist">' + liste(definition.checklist) + '</div>',
            objectifs: definition.objectifs,
            matieres: definition.notions,
            exercices: []
        };
    }

    function ajouter(data, annee, definitions) {
        if (!data || !Array.isArray(data[annee])) {
            return;
        }

        definitions.forEach(function (definition) {
            var existe = data[annee].some(function (chapitre) {
                return chapitre.id === definition.id;
            });

            if (!existe) {
                data[annee].push(creerChapitre(definition));
            }
        });
    }

    var maths = {
        '3e': [
            {
                id: '3e_equations_inequations',
                titre: '6. Équations et inéquations du premier degré',
                desc: 'Isoler une inconnue et représenter un ensemble de solutions.',
                annee: '3e', icone: '⚖️', color: '#315bea',
                notions: ['Équation du premier degré', 'Inéquation', 'Ensemble solution', 'Droite graduée'],
                intro: 'Une équation exprime une égalité contenant une inconnue. Une inéquation compare deux expressions avec <, >, ≤ ou ≥.',
                mecanisme: 'On effectue la même opération dans les deux membres. Dans une inéquation, multiplier ou diviser par un nombre négatif inverse le sens du signe.',
                methode: ['Réduire chaque membre.', 'Regrouper les termes en x.', 'Isoler x.', 'Vérifier et écrire l’ensemble solution.'],
                exemple: '3x − 5 = 10 donne 3x = 15, donc x = 5. Pour −2x > 6, on obtient x < −3.',
                pieges: ['Oublier de changer le sens après une division négative.', 'Modifier un seul membre.', 'Confondre une solution et l’ensemble des solutions.'],
                checklist: ['Je sais isoler x.', 'Je vérifie une égalité.', 'Je représente une inéquation sur une droite.'],
                objectifs: ['Résoudre une équation du premier degré', 'Résoudre et représenter une inéquation', 'Vérifier une solution']
            },
            {
                id: '3e_systemes',
                titre: '7. Systèmes de deux équations',
                desc: 'Résoudre deux équations à deux inconnues et interpréter la solution.',
                annee: '3e', icone: '🔀', color: '#315bea',
                notions: ['Système', 'Substitution', 'Élimination', 'Point d’intersection'],
                intro: 'Un système cherche les valeurs qui vérifient simultanément deux équations.',
                mecanisme: 'La substitution remplace une inconnue par une expression. L’élimination combine les équations pour faire disparaître une inconnue.',
                methode: ['Choisir substitution ou élimination.', 'Trouver une première inconnue.', 'Calculer la seconde.', 'Vérifier dans les deux équations.'],
                exemple: 'x + y = 7 et x − y = 1. En additionnant : 2x = 8, donc x = 4 puis y = 3.',
                pieges: ['Vérifier une seule équation.', 'Perdre un signe pendant l’élimination.', 'Oublier que la solution est un couple.'],
                checklist: ['J’écris la solution (x ; y).', 'Je contrôle les deux équations.', 'Je sais interpréter graphiquement.'],
                objectifs: ['Résoudre par substitution', 'Résoudre par élimination', 'Interpréter un point d’intersection']
            },
            {
                id: '3e_proportionnalite',
                titre: '8. Proportionnalité, pourcentages et intérêts',
                desc: 'Modéliser les évolutions et résoudre des situations courantes.',
                annee: '3e', icone: '💶', color: '#315bea',
                notions: ['Proportionnalité', 'Pourcentage', 'Coefficient multiplicateur', 'Intérêt simple'],
                intro: 'Les pourcentages décrivent une part ou une évolution. Un coefficient multiplicateur permet d’appliquer directement une hausse ou une baisse.',
                mecanisme: 'Une hausse de t % correspond au coefficient 1 + t/100 ; une baisse correspond à 1 − t/100.',
                methode: ['Identifier la valeur initiale.', 'Transformer le taux en coefficient.', 'Effectuer le produit.', 'Contrôler si le résultat doit augmenter ou diminuer.'],
                exemple: 'Après une remise de 20 %, un prix de 75 € devient 75 × 0,80 = 60 €.',
                pieges: ['Additionner directement deux pourcentages successifs.', 'Confondre pourcentage et valeur.', 'Utiliser 20 au lieu de 0,20.'],
                checklist: ['Je distingue hausse et baisse.', 'Je sais retrouver une valeur initiale.', 'J’indique l’unité.'],
                objectifs: ['Calculer une proportion', 'Appliquer et retrouver un pourcentage', 'Résoudre un problème d’intérêt']
            }
        ],
        '4e': [
            {
                id: '4e_droites_cercles',
                titre: '7. Droites, équations cartésiennes et cercle',
                desc: 'Décrire algébriquement des objets géométriques du plan.',
                annee: '4e', icone: '⭕', color: '#315bea',
                notions: ['Équation de droite', 'Pente', 'Vecteur directeur', 'Équation de cercle'],
                intro: 'Une équation cartésienne traduit une figure géométrique par une relation entre x et y.',
                mecanisme: 'Une droite peut s’écrire ax + by + c = 0. Un cercle de centre (a ; b) et de rayon r vérifie (x − a)² + (y − b)² = r².',
                methode: ['Identifier les données géométriques.', 'Choisir la forme d’équation.', 'Remplacer les paramètres.', 'Tester un point.'],
                exemple: 'Le cercle de centre (2 ; −1) et de rayon 3 a pour équation (x − 2)² + (y + 1)² = 9.',
                pieges: ['Confondre pente et ordonnée à l’origine.', 'Oublier le carré du rayon.', 'Mal gérer le signe des coordonnées du centre.'],
                checklist: ['Je reconnais une équation de droite.', 'Je détermine une pente.', 'Je construis l’équation d’un cercle.'],
                objectifs: ['Déterminer une équation de droite', 'Étudier la position de deux droites', 'Déterminer une équation de cercle']
            }
        ],
        '5e': [
            {
                id: '5e_combinatoire',
                titre: '7. Dénombrement et combinatoire',
                desc: 'Compter méthodiquement des possibilités sans les énumérer.',
                annee: '5e', icone: '🧮', color: '#315bea',
                notions: ['Principe multiplicatif', 'Permutation', 'Arrangement', 'Combinaison'],
                intro: 'Le dénombrement permet de calculer le nombre de choix possibles en tenant compte ou non de l’ordre et des répétitions.',
                mecanisme: 'On multiplie les nombres de choix successifs. Si l’ordre ne compte pas, on utilise les combinaisons.',
                methode: ['Déterminer si l’ordre compte.', 'Vérifier si les répétitions sont permises.', 'Choisir la formule.', 'Contrôler sur un petit exemple.'],
                exemple: 'Choisir 2 élèves parmi 5 sans ordre donne C(5,2) = 10 groupes.',
                pieges: ['Utiliser une permutation quand l’ordre ne compte pas.', 'Oublier les répétitions possibles.', 'Confondre n et k.'],
                checklist: ['Je sais si l’ordre compte.', 'Je reconnais une combinaison.', 'Je justifie la formule choisie.'],
                objectifs: ['Appliquer le principe multiplicatif', 'Distinguer arrangements et combinaisons', 'Résoudre un problème de dénombrement']
            },
            {
                id: '5e_logique_preuve',
                titre: '8. Logique, démonstration et raisonnement',
                desc: 'Construire une preuve claire et reconnaître les raisonnements valides.',
                annee: '5e', icone: '🧠', color: '#315bea',
                notions: ['Implication', 'Équivalence', 'Contraposée', 'Raisonnement par l’absurde'],
                intro: 'Une démonstration part d’hypothèses et enchaîne des arguments justifiés jusqu’à une conclusion.',
                mecanisme: 'La contraposée de « si P alors Q » est « si non Q alors non P ». Elle est logiquement équivalente à l’implication initiale.',
                methode: ['Identifier hypothèses et conclusion.', 'Choisir une propriété adaptée.', 'Justifier chaque étape.', 'Relire la conclusion exacte.'],
                exemple: 'Pour montrer que si n² est pair alors n est pair, on peut démontrer la contraposée : si n est impair, n² est impair.',
                pieges: ['Confondre réciproque et contraposée.', 'Utiliser un exemple comme preuve générale.', 'Supposer ce qu’il faut démontrer.'],
                checklist: ['Je distingue implication et équivalence.', 'Je cite les propriétés utilisées.', 'Ma conclusion répond à la question.'],
                objectifs: ['Lire une implication', 'Construire une démonstration', 'Utiliser la contraposée ou l’absurde']
            }
        ],
        '6e': [
            {
                id: '6e_probabilites_conditionnelles',
                titre: '8. Probabilités conditionnelles et arbres',
                desc: 'Étudier des événements dépendants et appliquer la formule de Bayes.',
                annee: '6e', icone: '🌳', color: '#315bea',
                notions: ['Probabilité conditionnelle', 'Arbre pondéré', 'Indépendance', 'Formule de Bayes'],
                intro: 'Une probabilité conditionnelle mesure la probabilité d’un événement A sachant qu’un événement B est réalisé.',
                mecanisme: 'P(A|B) = P(A ∩ B) / P(B). Sur un arbre, on multiplie le long d’une branche et on additionne les branches compatibles.',
                methode: ['Définir les événements.', 'Construire l’arbre.', 'Calculer les intersections.', 'Normaliser pour une probabilité conditionnelle.'],
                exemple: 'Si P(B)=0,4 et P(A∩B)=0,1, alors P(A|B)=0,1/0,4=0,25.',
                pieges: ['Confondre P(A|B) et P(B|A).', 'Additionner au lieu de multiplier sur une branche.', 'Oublier le dénominateur.'],
                checklist: ['Je définis les événements.', 'Mes branches totalisent 1.', 'Je vérifie que la probabilité est entre 0 et 1.'],
                objectifs: ['Calculer une probabilité conditionnelle', 'Utiliser un arbre pondéré', 'Reconnaître l’indépendance']
            },
            {
                id: '6e_modelisation',
                titre: '9. Modélisation de problèmes réels',
                desc: 'Traduire une situation, choisir un modèle et discuter ses limites.',
                annee: '6e', icone: '🛠️', color: '#315bea',
                notions: ['Variable', 'Hypothèse', 'Modèle', 'Validation'],
                intro: 'Modéliser consiste à simplifier une situation réelle pour la décrire avec des objets mathématiques.',
                mecanisme: 'Un modèle dépend d’hypothèses. Sa qualité se juge en comparant ses résultats aux données et au domaine où il reste valable.',
                methode: ['Définir les variables et unités.', 'Formuler les hypothèses.', 'Choisir une relation.', 'Calculer, interpréter et valider.'],
                exemple: 'Une croissance à taux constant peut être modélisée par une exponentielle, mais ce modèle cesse souvent d’être réaliste à long terme.',
                pieges: ['Oublier les unités.', 'Confondre résultat mathématique et réalité.', 'Extrapoler trop loin.'],
                checklist: ['Mes variables sont définies.', 'Mes hypothèses sont explicites.', 'Je critique la validité du résultat.'],
                objectifs: ['Traduire une situation en modèle', 'Choisir une fonction adaptée', 'Interpréter et critiquer un résultat']
            }
        ]
    };

    var geo = {
        '3e': [
            {
                id: 'geo3_risques',
                titre: '9. Risques naturels et catastrophes',
                desc: 'Comprendre aléas, vulnérabilité, prévention et résilience.',
                annee: '3e', icone: '🌋', color: '#16a579',
                notions: ['Aléa', 'Enjeu', 'Vulnérabilité', 'Risque', 'Résilience'],
                intro: 'Un phénomène naturel devient un risque lorsqu’il menace des populations, des biens ou des activités vulnérables.',
                mecanisme: 'Le risque résulte de la rencontre entre un aléa et des enjeux exposés. La prévention réduit l’exposition ou la vulnérabilité.',
                methode: ['Localiser l’aléa.', 'Identifier les enjeux.', 'Évaluer la vulnérabilité.', 'Comparer les mesures de prévention.'],
                exemple: 'Un séisme identique peut provoquer peu de dégâts dans une région préparée et une catastrophe dans une ville très vulnérable.',
                pieges: ['Confondre aléa et risque.', 'Penser qu’une catastrophe est uniquement naturelle.', 'Oublier les inégalités de vulnérabilité.'],
                checklist: ['Je localise le phénomène.', 'J’identifie les populations exposées.', 'Je propose une mesure adaptée.'],
                objectifs: ['Distinguer aléa et risque', 'Analyser la vulnérabilité', 'Comparer prévention et adaptation']
            },
            {
                id: 'geo3_transition_demo',
                titre: '10. Transition démographique et vieillissement',
                desc: 'Lire l’évolution d’une population et ses conséquences territoriales.',
                annee: '3e', icone: '👥', color: '#16a579',
                notions: ['Natalité', 'Mortalité', 'Accroissement naturel', 'Transition démographique', 'Vieillissement'],
                intro: 'La transition démographique décrit le passage de taux de natalité et de mortalité élevés à des taux faibles.',
                mecanisme: 'La mortalité baisse généralement avant la natalité, ce qui provoque une phase de forte croissance démographique.',
                methode: ['Lire natalité et mortalité.', 'Calculer l’accroissement naturel.', 'Identifier la phase.', 'Relier la structure par âge aux besoins.'],
                exemple: 'Une population vieillissante nécessite davantage de soins et peut connaître une diminution de la population active.',
                pieges: ['Confondre accroissement naturel et migration.', 'Interpréter un taux sans période.', 'Oublier la structure par âge.'],
                checklist: ['Je distingue taux et effectif.', 'Je lis une pyramide des âges.', 'Je relie population et territoire.'],
                objectifs: ['Expliquer la transition démographique', 'Lire une pyramide des âges', 'Analyser les effets du vieillissement']
            }
        ],
        '4e': [
            {
                id: 'geo4_climat',
                titre: '8. Changement climatique et adaptation',
                desc: 'Étudier les causes, impacts, politiques d’atténuation et d’adaptation.',
                annee: '4e', icone: '🌡️', color: '#16a579',
                notions: ['Effet de serre', 'Atténuation', 'Adaptation', 'Vulnérabilité climatique'],
                intro: 'Le changement climatique actuel est principalement lié à l’augmentation des gaz à effet de serre d’origine humaine.',
                mecanisme: 'L’atténuation agit sur les causes en réduisant les émissions ; l’adaptation limite les conséquences déjà présentes ou futures.',
                methode: ['Identifier la source.', 'Observer l’évolution.', 'Localiser les impacts.', 'Distinguer atténuation et adaptation.'],
                exemple: 'Isoler les bâtiments réduit les émissions ; créer des îlots de fraîcheur aide les villes à supporter les canicules.',
                pieges: ['Confondre météo et climat.', 'Présenter un seul impact mondial.', 'Opposer adaptation et atténuation.'],
                checklist: ['Je m’appuie sur des données.', 'Je précise l’échelle.', 'Je distingue cause, impact et réponse.'],
                objectifs: ['Expliquer l’effet de serre', 'Analyser des impacts territoriaux', 'Comparer adaptation et atténuation']
            },
            {
                id: 'geo4_belgique_etude',
                titre: '9. Étude territoriale de la Belgique',
                desc: 'Relier population, réseaux, activités et organisation institutionnelle.',
                annee: '4e', icone: '🇧🇪', color: '#16a579',
                notions: ['Régions', 'Densité', 'Réseau urbain', 'Mobilité', 'Aménagement'],
                intro: 'Le territoire belge est fortement urbanisé, dense et organisé autour de réseaux reliant villes, ports et espaces transfrontaliers.',
                mecanisme: 'Les décisions d’aménagement mobilisent plusieurs niveaux de pouvoir et doivent coordonner logement, mobilité, économie et environnement.',
                methode: ['Localiser les trois Régions.', 'Identifier les pôles urbains.', 'Analyser les réseaux.', 'Comparer les dynamiques territoriales.'],
                exemple: 'Le port d’Anvers-Bruges relie la Belgique aux flux mondiaux et influence les transports et activités logistiques.',
                pieges: ['Confondre Région et Communauté.', 'Réduire la Belgique à Bruxelles.', 'Oublier les relations transfrontalières.'],
                checklist: ['Je localise les Régions.', 'Je cite des pôles précis.', 'Je relie acteurs, réseaux et aménagement.'],
                objectifs: ['Décrire l’organisation territoriale belge', 'Analyser les réseaux urbains', 'Comprendre les enjeux d’aménagement']
            }
        ],
        '5e': [
            {
                id: 'geo5_inegalites',
                titre: '9. Inégalités de développement et indicateurs',
                desc: 'Comparer les territoires avec plusieurs indicateurs et changer d’échelle.',
                annee: '5e', icone: '📊', color: '#16a579',
                notions: ['PIB par habitant', 'IDH', 'Indice de Gini', 'Pauvreté', 'Inégalités territoriales'],
                intro: 'Le développement ne se résume pas à la richesse : il concerne aussi la santé, l’éducation et les conditions de vie.',
                mecanisme: 'Chaque indicateur mesure une dimension. Leur croisement révèle des écarts entre pays mais aussi à l’intérieur des territoires.',
                methode: ['Identifier l’indicateur.', 'Lire l’unité et la date.', 'Comparer plusieurs territoires.', 'Nuancer avec un second indicateur.'],
                exemple: 'Deux pays au PIB par habitant proche peuvent avoir des IDH différents si l’accès aux soins ou à l’éducation varie.',
                pieges: ['Utiliser un seul indicateur.', 'Confondre richesse totale et richesse par habitant.', 'Masquer les inégalités internes.'],
                checklist: ['Je cite la source et la date.', 'Je compare plusieurs indicateurs.', 'Je nuance selon l’échelle.'],
                objectifs: ['Lire les indicateurs de développement', 'Comparer les inégalités', 'Construire une analyse nuancée']
            },
            {
                id: 'geo5_industrie_chain',
                titre: '10. Espaces industriels et chaînes de production',
                desc: 'Suivre un produit, ses acteurs et ses flux de l’échelle locale au monde.',
                annee: '5e', icone: '🏭', color: '#16a579',
                notions: ['Chaîne de valeur', 'Sous-traitance', 'Délocalisation', 'Logistique', 'Flux'],
                intro: 'La production d’un bien est souvent répartie entre plusieurs territoires spécialisés et reliés par des flux.',
                mecanisme: 'Les entreprises choisissent leurs localisations selon les coûts, compétences, marchés, infrastructures et risques.',
                methode: ['Identifier les étapes.', 'Localiser les acteurs.', 'Tracer les flux.', 'Évaluer les effets économiques, sociaux et environnementaux.'],
                exemple: 'Un smartphone peut être conçu dans un pays, utiliser des minerais d’autres continents, être assemblé ailleurs et vendu mondialement.',
                pieges: ['Confondre lieu d’assemblage et origine complète.', 'Oublier les services.', 'Ignorer les coûts environnementaux.'],
                checklist: ['Je suis toutes les étapes.', 'Je localise les flux.', 'J’identifie gagnants, dépendances et impacts.'],
                objectifs: ['Analyser une chaîne de valeur', 'Expliquer les choix de localisation', 'Évaluer les impacts territoriaux']
            }
        ],
        '6e': [
            {
                id: 'geo6_union_europeenne',
                titre: '7. Union européenne et territoires',
                desc: 'Comprendre intégration, frontières, mobilités et politiques territoriales.',
                annee: '6e', icone: '🇪🇺', color: '#16a579',
                notions: ['Intégration européenne', 'Espace Schengen', 'Disparités régionales', 'Politique de cohésion'],
                intro: 'L’Union européenne organise un espace d’échanges et de coopération marqué par d’importantes disparités régionales.',
                mecanisme: 'Les politiques de cohésion financent des projets destinés à réduire les écarts et à améliorer les connexions entre territoires.',
                methode: ['Localiser l’espace étudié.', 'Identifier les flux.', 'Comparer les indicateurs.', 'Évaluer une politique territoriale.'],
                exemple: 'Une infrastructure transfrontalière peut améliorer l’accessibilité d’une région périphérique et renforcer les échanges.',
                pieges: ['Confondre UE, Europe et zone euro.', 'Supposer que toutes les frontières ont disparu.', 'Oublier les disparités internes.'],
                checklist: ['Je distingue les ensembles européens.', 'Je mobilise plusieurs échelles.', 'J’analyse les effets d’une politique.'],
                objectifs: ['Comprendre l’intégration européenne', 'Analyser les disparités régionales', 'Évaluer la politique de cohésion']
            },
            {
                id: 'geo6_sig',
                titre: '8. Géographie numérique, données et SIG',
                desc: 'Collecter, représenter et critiquer des données spatiales.',
                annee: '6e', icone: '🛰️', color: '#16a579',
                notions: ['Donnée géolocalisée', 'Couche', 'SIG', 'Télédétection', 'Biais cartographique'],
                intro: 'Un système d’information géographique associe des données à des localisations et permet de superposer plusieurs couches.',
                mecanisme: 'La qualité d’une analyse dépend de la source, de la date, de la résolution et du mode de représentation des données.',
                methode: ['Formuler la question.', 'Choisir les données.', 'Vérifier source et résolution.', 'Croiser les couches et interpréter.'],
                exemple: 'Superposer population, zones inondables et routes permet d’identifier les quartiers les plus exposés et difficiles à évacuer.',
                pieges: ['Prendre la carte pour la réalité.', 'Comparer des données de dates incompatibles.', 'Ignorer les valeurs absentes.'],
                checklist: ['Je vérifie la source.', 'Je justifie les couches.', 'Je distingue corrélation et causalité.'],
                objectifs: ['Comprendre le fonctionnement d’un SIG', 'Évaluer la qualité de données spatiales', 'Construire une analyse cartographique']
            }
        ]
    };

    if (typeof CHAPITRES !== 'undefined') {
        Object.keys(maths).forEach(function (annee) {
            ajouter(CHAPITRES, annee, maths[annee]);
        });
    }

    if (typeof GEO_CHAPITRES !== 'undefined') {
        Object.keys(geo).forEach(function (annee) {
            ajouter(GEO_CHAPITRES, annee, geo[annee]);
        });
    }
})();
