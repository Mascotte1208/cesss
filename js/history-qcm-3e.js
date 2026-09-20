(function () {
    if (typeof CESS_LIBRARY_DATA === 'undefined' || typeof findChapter !== 'function') return;
    var REPLACEMENTS = {
        'lib_histoire_3e_1': {
            2: {
                question: "Que distingue une source primaire d'une source secondaire, dans la méthode de l'historien ?",
                options: [
                    "Une source primaire est produite à l'époque des faits (lettre, loi, chronique), une source secondaire est écrite après coup pour les analyser (livre d'histoire, encyclopédie)",
                    "Une source primaire est toujours écrite, une source secondaire est toujours orale",
                    "Une source primaire est rédigée par un historien contemporain, une source secondaire par un témoin direct des faits",
                    "Une source primaire concerne uniquement l'Antiquité, une source secondaire uniquement le Moyen Âge"
                ],
                correct: 0,
                correction: "Une source primaire (chroniques, lettres, lois, traités) est produite au moment des faits ; une source secondaire (histoires, encyclopédies, synthèses) est écrite plus tard pour les analyser."
            },
            3: {
                question: "Dans la méthode de l'historien, à quelle question répond la critique externe d'une source ?",
                options: [
                    "Elle identifie qui a produit le document, sa nature, sa date et son lieu de production",
                    "Elle évalue l'intention de l'auteur et sa fiabilité",
                    "Elle compare uniquement la source à des sources archéologiques",
                    "Elle détermine dans quelle langue le document a été écrit"
                ],
                correct: 0,
                correction: "La critique externe répond aux questions qui ? quoi ? quand ? où ? (auteur, nature, date, lieu, destinataire) ; l'intention et la fiabilité relèvent, elles, de la critique interne."
            },
            4: {
                question: "Que signifie 'chronologie' dans la méthode de l'historien ?",
                options: [
                    "L'ordre dans lequel se déroulent les événements dans le temps, organisés en siècles, décennies et millénaires",
                    "La liste des sources utilisées pour rédiger une synthèse historique",
                    "La méthode qui consiste à croiser plusieurs types de documents",
                    "Le découpage de l'histoire en grandes périodes selon des ruptures majeures"
                ],
                correct: 0,
                correction: "La chronologie situe les événements dans le temps grâce au système de datation (siècles, décennies, millénaires, avant/après J.-C.)."
            },
            5: {
                question: "Que désignent ensemble la 'périodisation' et la 'causalité' en histoire ?",
                options: [
                    "Le découpage du temps en grandes périodes délimitées par des ruptures, et l'explication des liens de cause à conséquence entre les événements",
                    "Le classement des sources selon leur nature (écrite, orale, iconographique)",
                    "La vérification de l'identité de l'auteur d'un document",
                    "L'ordre chronologique strict des siècles et des millénaires"
                ],
                correct: 0,
                correction: "La périodisation découpe l'histoire en grandes périodes cohérentes, tandis que la causalité relie les faits par des rapports de cause à conséquence."
            },
            6: {
                question: "Que signifie la 'distinction fait/interprétation' en histoire ?",
                options: [
                    "Un fait est un événement établi et vérifié, tandis qu'une interprétation est l'explication qu'un historien en donne, qui peut varier",
                    "Un fait est ce que dit une source primaire, une interprétation est ce que dit une source secondaire",
                    "Un fait concerne les acteurs, une interprétation concerne uniquement les dates",
                    "Un fait est toujours contesté, une interprétation est toujours certaine"
                ],
                correct: 0,
                correction: "Un fait est un événement vérifié (par exemple une date), une interprétation est l'explication ou le sens que l'historien lui attribue, ce qui peut évoluer selon les analyses."
            },
            7: {
                question: "Quelle est la relation cause → conséquence correcte concernant les sources historiques ?",
                options: [
                    "Cause : les sources écrites manquent pour certaines périodes anciennes → Transformation : l'historien croise plusieurs types de sources (écrites, archéologiques, iconographiques, orales) → Conséquence : il obtient une image plus fiable et complète du passé",
                    "Cause : l'historien dispose de sources parfaites → Transformation : il n'a pas besoin de les critiquer → Conséquence : la vérité historique est connue avec certitude absolue",
                    "Cause : les sources orales sont toujours fiables → Transformation : l'historien les préfère aux sources écrites → Conséquence : les dates deviennent plus précises",
                    "Cause : les sources archéologiques sont abondantes pour l'Antiquité → Transformation : elles remplacent les sources écrites → Conséquence : la datation devient facile"
                ],
                correct: 0,
                correction: "Aucune source n'est parfaite : l'historien croise les différents types de sources pour compenser leurs limites respectives et approcher au mieux la réalité du passé."
            },
            8: {
                question: "Quelle est la relation cause → conséquence correcte pour la méthode de critique des sources ?",
                options: [
                    "Cause : un document reflète toujours un point de vue situé et peut comporter des silences → Transformation : l'historien applique la critique externe et interne (auteur, intention, fiabilité) → Conséquence : il peut évaluer la fiabilité du document avant de l'utiliser",
                    "Cause : un document est signé par son auteur → Transformation : il devient automatiquement une preuve fiable → Conséquence : l'historien peut l'utiliser sans vérification",
                    "Cause : l'historien manque de sources archéologiques → Transformation : il complète librement les informations manquantes → Conséquence : le récit historique devient complet",
                    "Cause : un document est ancien → Transformation : il devient automatiquement fiable → Conséquence : il n'a plus besoin d'être critiqué"
                ],
                correct: 0,
                correction: "Un document n'est jamais une preuve automatique de la vérité : il faut toujours le soumettre à la critique externe et interne avant de l'utiliser."
            },
            9: {
                question: "Quelle est la relation cause → conséquence correcte concernant le système de datation utilisé par l'historien ?",
                options: [
                    "Cause : les historiens ont besoin d'un repère commun pour situer les événements → Transformation : adoption du système de datation avant/après J.-C., organisé en siècles et millénaires → Conséquence : les événements de toutes les époques peuvent être comparés et ordonnés précisément",
                    "Cause : les siècles durent 1 000 ans → Transformation : les millénaires sont abandonnés → Conséquence : les dates deviennent plus simples à retenir",
                    "Cause : plus un chiffre avant J.-C. est petit, plus l'événement est ancien → Transformation : les historiens inversent l'échelle habituelle → Conséquence : la chronologie devient confuse",
                    "Cause : les décennies remplacent les siècles → Transformation : les historiens ne comptent plus en siècles → Conséquence : la datation devient impossible"
                ],
                correct: 0,
                correction: "Un siècle compte 100 ans et un millénaire 1 000 ans ; ce repère commun (avant/après J.-C.) permet de situer et comparer précisément les événements de toutes les époques."
            },
            10: {
                question: "Parmi ces repères temporels, lequel est le plus ancien ?",
                options: [
                    "500 av. J.-C.",
                    "100 av. J.-C.",
                    "50 apr. J.-C.",
                    "500 apr. J.-C."
                ],
                correct: 0,
                correction: "Plus le chiffre avant J.-C. est grand, plus l'événement est ancien : 500 av. J.-C. précède donc 100 av. J.-C., puis 50 et 500 apr. J.-C."
            },
            11: {
                question: "Quelle est une limite propre aux sources orales, par rapport aux autres types de sources ?",
                options: [
                    "La mémoire des témoins peut être sélective ou déformée avec le temps, ce qui rend la vérification totale impossible",
                    "Elles sont trop rares pour la période de l'Antiquité",
                    "Elles peuvent idéaliser ou déformer la réalité qu'elles représentent",
                    "Leur datation est souvent difficile et elles sont fragmentaires"
                ],
                correct: 0,
                correction: "Les sources orales (témoignages, traditions) offrent du vécu et des nuances, mais leur limite propre est la mémoire sélective, impossible à vérifier totalement."
            },
            12: {
                question: "Dans la méthode de critique des sources, quelle étape se déroule en premier ?",
                options: [
                    "La critique externe : identifier l'auteur, la nature, la date et le lieu du document",
                    "La critique interne : évaluer l'intention et la fiabilité de l'auteur",
                    "La contextualisation : relier le document au contexte général",
                    "La comparaison systématique avec des sources archéologiques"
                ],
                correct: 0,
                correction: "La méthode commence par la critique externe (qui ? quoi ? quand ? où ?) avant de passer à la critique interne (intention, fiabilité, point de vue, silences)."
            },
            13: {
                question: "Selon la critique interne, que doit rechercher l'historien pour évaluer une source ?",
                options: [
                    "Son intention, sa fiabilité, le point de vue de l'auteur et les silences du document",
                    "Uniquement la date et le lieu de production du document",
                    "Uniquement le type de support (papier, pierre, support numérique)",
                    "Le nombre de copies existantes du document à travers l'histoire"
                ],
                correct: 0,
                correction: "La critique interne porte sur l'intention de l'auteur, sa fiabilité, son point de vue et les silences du document, au-delà des seules données matérielles (critique externe)."
            }
        },
        'lib_histoire_3e_2': {
            1: {
                question: "Que désignent les 'héritages romains' dans le passage de l'Antiquité au Moyen Âge ?",
                options: [
                    "Les éléments de la civilisation romaine (droit, langue, christianisme, institutions) conservés par les royaumes germaniques et l'Empire byzantin après la chute de Rome",
                    "Les territoires conquis par Charlemagne au VIIIe siècle",
                    "Les traditions apportées par les peuples germaniques dans l'Empire romain",
                    "Les réformes religieuses menées par le pape Léon III en 800"
                ],
                correct: 0,
                correction: "Après 476, les royaumes germaniques et l'Empire byzantin conservent en partie le droit, la culture et les institutions héritées de Rome."
            },
            2: {
                question: "Que désigne la 'christianisation' dans ce chapitre ?",
                options: [
                    "La diffusion et l'adoption progressive du christianisme par les peuples et les royaumes, comme lors du baptême de Clovis en 496",
                    "La division de l'Empire romain en deux parties par Théodose en 395",
                    "La construction de la cathédrale d'Aix-la-Chapelle par Charlemagne",
                    "Le partage de l'empire carolingien entre les trois fils de Louis le Pieux"
                ],
                correct: 0,
                correction: "La christianisation désigne la diffusion du christianisme, illustrée par le baptême de Clovis à Reims en 496, qui scelle l'alliance entre la royauté franque et l'Église."
            },
            3: {
                question: "Que désignent les 'royaumes germaniques' apparus après 476 ?",
                options: [
                    "Les États fondés en Europe occidentale par des peuples comme les Wisigoths, les Vandales, les Ostrogoths ou les Francs, sur les anciens territoires romains",
                    "Les provinces administrées par les missi dominici de Charlemagne",
                    "Les territoires de l'Empire byzantin conservés après 1453",
                    "Les régions converties au christianisme orthodoxe par Constantinople"
                ],
                correct: 0,
                correction: "Après la chute de l'Empire romain d'Occident, l'Europe occidentale se divise en royaumes germaniques (Wisigoths, Vandales, Ostrogoths, Burgondes, Francs, Anglo-Saxons)."
            },
            4: {
                question: "Que désignent la 'féodalité' et la 'seigneurie', qui se développent à la fin de cette période ?",
                options: [
                    "Un système où un seigneur accorde protection et une terre à un vassal en échange de services, structurant peu à peu le pouvoir local",
                    "Le système d'administration par comtes et missi dominici mis en place par Charlemagne",
                    "L'organisation religieuse hiérarchique entre le pape et les évêques",
                    "Le partage territorial de l'empire carolingien entre les héritiers de Louis le Pieux"
                ],
                correct: 0,
                correction: "La féodalité et la seigneurie reposent sur un lien de dépendance personnelle : un seigneur protège un vassal et lui accorde un fief en échange de services."
            },
            5: {
                question: "Que désigne l'expression 'essor urbain' évoquée dans ce chapitre ?",
                options: [
                    "Le développement progressif des villes, lié à la reprise du commerce et de l'artisanat à la fin du haut Moyen Âge",
                    "L'installation de la capitale impériale à Aix-la-Chapelle par Charlemagne",
                    "La fondation de nouveaux royaumes germaniques après la chute de Rome",
                    "La division de l'Empire romain en deux capitales, Rome et Constantinople"
                ],
                correct: 0,
                correction: "L'essor urbain désigne le développement des villes grâce à la reprise du commerce et de l'artisanat, phénomène qui s'accentue à la fin de la période étudiée."
            },
            6: {
                question: "Quelle est la relation cause → conséquence correcte concernant la chute de l'Empire romain d'Occident ?",
                options: [
                    "Cause : l'instabilité politique, la crise économique et la pression des peuples germaniques et des Huns affaiblissent l'Empire → Transformation : Odoacre dépose le dernier empereur, Romulus Augustule, en 476 → Conséquence : l'Europe occidentale se divise en royaumes germaniques",
                    "Cause : l'Empire romain d'Occident est trop riche → Transformation : Rome décide de se diviser volontairement en deux → Conséquence : Constantinople devient l'unique capitale de l'Empire",
                    "Cause : le baptême de Clovis en 496 → Transformation : les Francs envahissent l'Italie → Conséquence : Romulus Augustule est déposé en 476",
                    "Cause : les Ottomans prennent Constantinople → Transformation : l'Empire d'Occident s'effondre → Conséquence : Odoacre devient empereur romain"
                ],
                correct: 0,
                correction: "La chute de 476 résulte d'un long processus (crises internes, pressions germaniques et hunniques) et aboutit à la division de l'Occident en royaumes germaniques ; ce n'est pas un événement soudain ni lié à 1453."
            },
            7: {
                question: "Quelle est la relation cause → conséquence correcte concernant l'Empire byzantin ?",
                options: [
                    "Cause : Théodose divise l'Empire romain en deux en 395 → Transformation : l'Empire d'Orient se maintient autour de Constantinople en conservant le droit romain et la culture grecque → Conséquence : il survit près de 1 000 ans, jusqu'à sa chute face aux Ottomans en 1453",
                    "Cause : la chute de Rome en 476 → Transformation : Constantinople est fondée par Odoacre → Conséquence : l'Empire byzantin disparaît immédiatement",
                    "Cause : le baptême de Clovis en 496 → Transformation : l'Empire byzantin adopte le christianisme catholique romain → Conséquence : il fusionne avec l'Empire carolingien",
                    "Cause : Charlemagne est couronné empereur en 800 → Transformation : l'Empire byzantin cesse d'exister → Conséquence : Constantinople devient franque"
                ],
                correct: 0,
                correction: "En 395, Théodose divise l'Empire ; l'Empire d'Orient (byzantin) conserve le droit romain, la culture grecque et le christianisme orthodoxe, et survit jusqu'à la prise de Constantinople par les Ottomans en 1453."
            },
            8: {
                question: "Quelle est la relation cause → conséquence correcte concernant les royaumes germaniques ?",
                options: [
                    "Cause : après la chute de l'Empire romain d'Occident, des peuples germaniques s'installent sur ses anciens territoires → Transformation : ils fondent des royaumes distincts (Wisigoths en Espagne, Ostrogoths en Italie, Francs en Gaule...) → Conséquence : les Francs deviennent progressivement le royaume dominant en Europe occidentale",
                    "Cause : les Vandales conquièrent Constantinople → Transformation : ils fondent l'Empire byzantin → Conséquence : Byzance domine toute l'Europe occidentale",
                    "Cause : Clovis se convertit au christianisme en 496 → Transformation : les Wisigoths sont aussitôt chassés d'Espagne → Conséquence : les Burgondes deviennent le royaume dominant",
                    "Cause : les Ostrogoths envahissent la Gaule → Transformation : ils fondent le royaume franc → Conséquence : Ravenne devient la capitale des Francs"
                ],
                correct: 0,
                correction: "Après 476, plusieurs peuples germaniques fondent des royaumes distincts sur les anciens territoires romains ; ce sont les Francs, et non les Vandales, les Ostrogoths ou les Burgondes, qui deviennent dominants."
            },
            9: {
                question: "Quelle est la relation cause → conséquence correcte concernant Clovis et les Mérovingiens ?",
                options: [
                    "Cause : Clovis remporte des victoires militaires (Soissons en 486, Vouillé en 507) et unifie les Francs → Transformation : il se convertit au christianisme et se fait baptiser à Reims en 496 → Conséquence : une alliance durable s'installe entre la royauté franque et l'Église catholique",
                    "Cause : Clovis est couronné empereur par le pape Léon III → Transformation : il fonde l'Empire carolingien → Conséquence : Aix-la-Chapelle devient sa capitale",
                    "Cause : Clovis perd la bataille de Vouillé contre les Wisigoths → Transformation : les Francs perdent le contrôle de la Gaule → Conséquence : les Wisigoths dominent désormais la Gaule",
                    "Cause : le traité de Verdun partage le royaume franc → Transformation : Clovis reçoit la Francie occidentale → Conséquence : la France et l'Allemagne sont fondées par Clovis"
                ],
                correct: 0,
                correction: "Clovis unifie les Francs par ses victoires (Soissons 486, Vouillé 507) puis se convertit et se fait baptiser à Reims en 496, scellant l'alliance entre la royauté franque et l'Église catholique."
            },
            10: {
                question: "Parmi ces événements liés à la chute de l'Empire romain d'Occident, lequel s'est produit en premier ?",
                options: [
                    "Le sac de Rome par les Wisigoths d'Alaric (410)",
                    "La déposition de Romulus Augustule par Odoacre (476)",
                    "Le baptême de Clovis à Reims (496)",
                    "La chute de Constantinople, prise par les Ottomans (1453)"
                ],
                correct: 0,
                correction: "Le sac de Rome par Alaric a lieu en 410, avant la déposition de Romulus Augustule en 476, le baptême de Clovis en 496 et la prise de Constantinople en 1453."
            },
            11: {
                question: "Pour étudier la chute de l'Empire romain d'Occident, pourquoi doit-on rester prudent avec un texte écrit par un auteur romain de l'époque ?",
                options: [
                    "Parce que cet auteur peut exagérer la menace 'barbare' ou dramatiser les événements selon son propre point de vue, sans être neutre",
                    "Parce qu'aucun texte écrit n'existe pour cette période",
                    "Parce que les auteurs romains ne savaient pas écrire correctement le latin",
                    "Parce que seuls les documents archéologiques sont acceptés par les historiens pour cette période"
                ],
                correct: 0,
                correction: "Comme toute source, un texte romain de l'époque reflète un point de vue situé (celui d'un vaincu face aux invasions) : l'historien doit en tenir compte avant de l'utiliser."
            },
            12: {
                question: "Parmi ces événements, lequel s'est produit en premier dans l'histoire de l'Empire byzantin ?",
                options: [
                    "La division de l'Empire romain par Théodose (395)",
                    "La chute de l'Empire romain d'Occident (476)",
                    "La prise de Constantinople par les Ottomans (1453)",
                    "Le couronnement de Charlemagne comme empereur d'Occident (800)"
                ],
                correct: 0,
                correction: "Théodose divise l'Empire en 395, avant la chute de l'Occident en 476, le couronnement de Charlemagne en 800 et la prise de Constantinople en 1453."
            },
            13: {
                question: "Pourquoi une pièce de monnaie byzantine est-elle une source intéressante mais limitée pour l'historien ?",
                options: [
                    "Parce qu'elle donne une image directe de l'époque (portrait de l'empereur, symboles) mais fournit peu d'informations détaillées sur les événements",
                    "Parce qu'elle raconte en détail les causes politiques des événements, comme le ferait un texte de loi",
                    "Parce qu'elle est un témoignage oral transmis de génération en génération",
                    "Parce qu'elle est un texte donnant l'avis personnel détaillé d'un moine byzantin"
                ],
                correct: 0,
                correction: "Comme toute source iconographique, une pièce de monnaie offre une image directe de l'époque mais reste limitée : elle ne détaille pas les causes ou le déroulement des événements."
            }
        },
        'lib_histoire_3e_3': {
            1: {
                question: "Que désigne l'expression 'Église et pouvoirs' dans ce chapitre ?",
                options: [
                    "Le rôle de l'Église comme institution politique, économique et culturelle majeure, parfois en conflit avec les pouvoirs royaux et impériaux",
                    "Le système d'hommage et de fief liant un vassal à son suzerain",
                    "La division de la société médiévale en trois ordres complémentaires",
                    "L'appel à la croisade lancé par le pape Urbain II en 1095"
                ],
                correct: 0,
                correction: "L'Église médiévale est une puissance politique, économique et culturelle majeure, comme le montre la querelle des investitures qui l'oppose aux empereurs."
            },
            2: {
                question: "Que désigne une 'monarchie féodale' au Moyen Âge ?",
                options: [
                    "Un royaume dans lequel le roi exerce son autorité par un réseau de liens vassaliques avec de grands seigneurs, plutôt que par une administration centralisée directe",
                    "Un royaume entièrement gouverné par le pape et les évêques",
                    "Une ville dirigée par des marchands et des artisans organisés en corporations",
                    "Un empire où tous les paysans possèdent librement leurs propres terres"
                ],
                correct: 0,
                correction: "Dans une monarchie féodale, le roi gouverne notamment à travers ses liens de vassalité avec les grands seigneurs, plutôt que par une administration centralisée."
            },
            3: {
                question: "Que désignent les 'croisades' évoquées dans ce chapitre ?",
                options: [
                    "Des expéditions militaires chrétiennes vers la Terre sainte, lancées à partir de 1095 à l'appel du pape Urbain II pour reprendre Jérusalem",
                    "Des réformes religieuses menées par saint Bernard pour réorganiser les monastères cisterciens",
                    "Des révoltes paysannes contre le paiement de la dîme à l'Église",
                    "Des conciles organisés par la papauté pour régler la querelle des investitures"
                ],
                correct: 0,
                correction: "Les croisades (1096-1291) sont des expéditions militaires chrétiennes vers la Terre sainte, lancées après l'appel d'Urbain II au concile de Clermont en 1095."
            },
            4: {
                question: "Que désigne le développement des 'villes' évoqué dans ce chapitre ?",
                options: [
                    "La croissance de centres urbains où se concentrent le commerce et l'artisanat, en marge du monde seigneurial et paysan",
                    "Les territoires accordés par un seigneur à son vassal en échange de services",
                    "Les monastères fondés par les ordres bénédictins et cisterciens",
                    "Les États latins d'Orient créés après la prise de Jérusalem en 1099"
                ],
                correct: 0,
                correction: "Les villes médiévales se développent comme des centres de commerce et d'artisanat, en dehors du cadre habituel de la seigneurie rurale."
            },
            5: {
                question: "Que recouvrent les 'métiers et commerce' liés à l'essor urbain médiéval ?",
                options: [
                    "Les activités artisanales et commerciales, stimulées notamment par les échanges avec l'Orient rapportés par les croisades",
                    "Les corvées et redevances que les paysans doivent à leur seigneur",
                    "Les impôts payés par le clergé à l'Église romaine",
                    "Le service militaire de 40 jours dû par le vassal à son suzerain"
                ],
                correct: 0,
                correction: "Les croisades stimulent le commerce avec l'Orient (soieries, épices, sucre), ce qui favorise le développement des métiers et du commerce dans les villes."
            },
            6: {
                question: "Que désigne la 'culture médiévale' évoquée dans ce chapitre ?",
                options: [
                    "L'ensemble des savoirs, arts et idées de l'époque, marqués par le monopole culturel de l'Église et enrichis par les contacts avec l'Orient lors des croisades",
                    "Le système de défense des châteaux forts contre les invasions",
                    "L'organisation politique fondée sur le fief et l'hommage vassalique",
                    "Le paiement de la dîme et du champart par les paysans"
                ],
                correct: 0,
                correction: "La culture médiévale est marquée par le monopole culturel du clergé, seul à savoir lire et écrire, et enrichie par la transmission du savoir grec et arabe via les croisades."
            },
            7: {
                question: "Quelle est la relation cause → conséquence correcte concernant la naissance de la féodalité ?",
                options: [
                    "Cause : le pouvoir central s'affaiblit face aux invasions (Vikings, Sarrasins, Hongrois) → Transformation : les populations cherchent la protection de seigneurs locaux, scellée par l'hommage et l'octroi d'un fief → Conséquence : un système hiérarchique de dépendance personnelle (vassal/suzerain) structure la société",
                    "Cause : l'Église impose la dîme aux paysans → Transformation : les paysans deviennent vassaux directs du pape → Conséquence : la féodalité remplace entièrement le clergé",
                    "Cause : les croisades sont lancées en 1095 → Transformation : les seigneurs partent combattre en Terre sainte → Conséquence : la féodalité apparaît alors en Europe",
                    "Cause : le roi centralise tout le pouvoir militaire → Transformation : plus personne n'a besoin de protection locale → Conséquence : les fiefs disparaissent aussitôt"
                ],
                correct: 0,
                correction: "La féodalité naît du besoin de protection face aux invasions dans un contexte de pouvoir central affaibli, et se traduit par des liens hiérarchiques de dépendance (hommage, fief) entre vassal et suzerain."
            },
            8: {
                question: "Quelle est la relation cause → conséquence correcte concernant les trois ordres de la société médiévale ?",
                options: [
                    "Cause : l'Église présente la société comme un ordre voulu par Dieu, avec des fonctions complémentaires → Transformation : la population est divisée en trois ordres (oratores, bellatores, laboratores) aux droits et devoirs différents → Conséquence : cette vision légitime les inégalités, notamment le poids des impôts sur les paysans",
                    "Cause : les paysans refusent de payer la dîme → Transformation : l'Église crée trois ordres pour les punir → Conséquence : les paysans deviennent membres de la noblesse",
                    "Cause : les nobles perdent le droit de porter les armes → Transformation : les paysans deviennent bellatores → Conséquence : la société médiévale devient égalitaire",
                    "Cause : le clergé doit payer des impôts → Transformation : il rejoint l'ordre des laboratores → Conséquence : l'Église perd toute son influence"
                ],
                correct: 0,
                correction: "L'Église justifie la division en trois ordres (ceux qui prient, ceux qui combattent, ceux qui travaillent) comme un équilibre voulu par Dieu, ce qui légitime les inégalités, notamment fiscales, entre ces ordres."
            },
            9: {
                question: "Quelle est la relation cause → conséquence correcte concernant le monde paysan et le seigneur ?",
                options: [
                    "Cause : le seigneur possède des monopoles (four, moulin, pressoir banal) et exige des redevances (cens, corvées, dîme, champart) → Transformation : les paysans, serfs ou vilains, doivent y consacrer une grande partie de leur travail et de leurs récoltes → Conséquence : la vie paysanne reste dure et soumise au pouvoir seigneurial",
                    "Cause : les serfs peuvent librement quitter la terre du seigneur → Transformation : ils deviennent chevaliers → Conséquence : le servage disparaît dès le haut Moyen Âge",
                    "Cause : les vilains n'ont aucune obligation envers le seigneur → Transformation : ils cessent de payer le cens → Conséquence : les seigneurs s'appauvrissent rapidement",
                    "Cause : le seigneur paie une redevance à ses paysans → Transformation : les paysans deviennent propriétaires du domaine → Conséquence : le ban seigneurial disparaît"
                ],
                correct: 0,
                correction: "Le ban seigneurial (four, moulin, pressoir banal) et les redevances (cens, corvées, dîme, champart) pèsent sur les paysans, serfs ou vilains, rendant leur vie dure et dépendante du seigneur."
            },
            10: {
                question: "Dans la cérémonie qui lie un vassal à son seigneur, que se passe-t-il en premier ?",
                options: [
                    "Le vassal met ses mains dans celles du seigneur et lui prête serment de fidélité (l'hommage)",
                    "Le seigneur remet symboliquement le fief au vassal (l'investiture)",
                    "Le vassal accomplit son service militaire de 40 jours",
                    "Le vassal paie l'aide financière prévue dans les quatre cas prévus"
                ],
                correct: 0,
                correction: "La cérémonie commence par l'hommage (le vassal met ses mains dans celles du seigneur et prête serment), avant l'investiture, où le seigneur remet symboliquement le fief."
            },
            11: {
                question: "Pourquoi un acte de donation de fief rédigé par un moine du XIe siècle doit-il être utilisé avec prudence par l'historien ?",
                options: [
                    "Parce qu'il reflète le point de vue de l'Église et peut ne pas mentionner tous les détails de l'accord réel entre le seigneur et son vassal",
                    "Parce qu'aucun document écrit ne subsiste sur la féodalité",
                    "Parce que les moines ne savaient pas écrire au Moyen Âge",
                    "Parce que ce type de document est une source archéologique peu fiable"
                ],
                correct: 0,
                correction: "Un tel acte, rédigé par un clerc, exprime un point de vue situé (celui de l'Église) et peut passer sous silence certains aspects de l'accord réel ; il doit donc être soumis à la critique interne."
            },
            12: {
                question: "Parmi ces ordres religieux, lequel a été fondé le premier ?",
                options: [
                    "Les Bénédictins (529)",
                    "Les Cisterciens (1098)",
                    "Les Franciscains (1209)",
                    "Les Dominicains (1216)"
                ],
                correct: 0,
                correction: "L'ordre des Bénédictins est fondé par saint Benoît en 529, avant les Cisterciens (1098), les Franciscains (1209) et les Dominicains (1216)."
            },
            13: {
                question: "Pourquoi un texte religieux justifiant les trois ordres de la société doit-il être analysé avec du recul par l'historien ?",
                options: [
                    "Parce qu'il exprime le point de vue de l'Église, qui cherche à légitimer les inégalités sociales comme voulues par Dieu, plutôt qu'à décrire objectivement la réalité",
                    "Parce qu'il s'agit d'une source archéologique difficile à dater",
                    "Parce qu'il a été rédigé par un paysan analphabète",
                    "Parce qu'il ne mentionne jamais ni le clergé ni la noblesse"
                ],
                correct: 0,
                correction: "Ce type de texte, produit par l'Église, défend une vision qui légitime l'ordre social existant : l'historien doit donc en analyser l'intention avant de le considérer comme une description neutre."
            }
        },
        'lib_histoire_3e_4': {
            1: {
                question: "Quel rôle joue l'invention de l'imprimerie par Gutenberg (vers 1450) dans la Renaissance ?",
                options: [
                    "Elle permet la diffusion rapide et à grande échelle des idées humanistes et des textes antiques redécouverts",
                    "Elle finance les artistes italiens grâce au mécénat des Médicis",
                    "Elle organise le retour aux valeurs de l'Antiquité gréco-romaine",
                    "Elle représente le style pictural caractéristique des peintures de Léonard de Vinci"
                ],
                correct: 0,
                correction: "L'imprimerie à caractères mobiles, inventée par Gutenberg vers 1450, permet la diffusion rapide des idées nouvelles, dont celles de l'humanisme."
            },
            2: {
                question: "Que désigne la 'redécouverte de l'Antiquité' à la Renaissance ?",
                options: [
                    "Le retour à l'étude des œuvres et des valeurs de l'Antiquité gréco-romaine, qui inspire les artistes et les penseurs de l'époque",
                    "L'invention de l'imprimerie à caractères mobiles par Gutenberg",
                    "Le financement des artistes par les princes et banquiers italiens",
                    "La critique de l'Église par l'ironie, développée par Érasme"
                ],
                correct: 0,
                correction: "La Renaissance représente un retour aux valeurs et aux œuvres de l'Antiquité gréco-romaine, étudiées à nouveau par les humanistes."
            },
            3: {
                question: "Que désigne l'humanisme à la Renaissance ?",
                options: [
                    "Un courant de pensée qui place l'être humain au centre de la réflexion et encourage l'étude des textes antiques grecs et latins",
                    "Un style pictural caractérisé par des contours adoucis, comme le sfumato de Léonard de Vinci",
                    "Un mécénat organisé par les banquiers Médicis pour financer les artistes de Florence",
                    "Une technique d'imprimerie inventée par Gutenberg vers 1450"
                ],
                correct: 0,
                correction: "L'humanisme est le courant de pensée qui place l'homme au centre de la réflexion et étudie les textes antiques grecs et latins (studia humanitatis)."
            },
            4: {
                question: "Que caractérisent les 'arts de la Renaissance' ?",
                options: [
                    "La recherche du réalisme et de la beauté idéale du corps humain, inspirée de l'Antiquité, chez des artistes comme Léonard de Vinci, Michel-Ange ou Raphaël",
                    "Le développement du commerce et des villes italiennes comme Florence, Venise et Rome",
                    "La critique de la corruption de l'Église par les humanistes comme Érasme",
                    "La diffusion rapide des textes grâce à l'imprimerie de Gutenberg"
                ],
                correct: 0,
                correction: "Les artistes de la Renaissance cherchent à représenter le monde avec réalisme et à exprimer la beauté idéale du corps humain, en s'inspirant de l'Antiquité."
            },
            5: {
                question: "Que désignent les 'nouveaux savoirs' développés à la Renaissance ?",
                options: [
                    "Les connaissances issues de l'étude des textes antiques et des progrès scientifiques et techniques de l'époque, diffusées grâce à l'imprimerie",
                    "Les techniques de sculpture monumentale développées par Michel-Ange",
                    "Le financement des œuvres d'art par le mécénat des princes italiens",
                    "Le retour au style architectural gothique du Moyen Âge"
                ],
                correct: 0,
                correction: "Les nouveaux savoirs de la Renaissance résultent de l'étude des textes antiques et des progrès de l'époque, diffusés rapidement grâce à l'imprimerie."
            },
            6: {
                question: "Quelle est la relation cause → conséquence correcte concernant la naissance de la Renaissance ?",
                options: [
                    "Cause : le développement du commerce et des villes italiennes permet l'essor d'un riche mécénat (comme celui des Médicis) → Transformation : artistes et intellectuels redécouvrent les textes et valeurs de l'Antiquité gréco-romaine → Conséquence : un mouvement culturel centré sur l'être humain, l'humanisme, se diffuse depuis l'Italie vers toute l'Europe",
                    "Cause : l'imprimerie est interdite par l'Église → Transformation : les idées antiques disparaissent totalement → Conséquence : la Renaissance ne peut donc pas naître en Italie",
                    "Cause : Charlemagne restaure l'Empire d'Occident → Transformation : il fonde les universités italiennes → Conséquence : la Renaissance commence dès le VIIIe siècle",
                    "Cause : les croisades rapportent des richesses d'Orient → Transformation : Léonard de Vinci peint la Joconde → Conséquence : Gutenberg invente ensuite l'imprimerie"
                ],
                correct: 0,
                correction: "C'est le commerce et le mécénat des villes italiennes qui permettent la redécouverte de l'Antiquité et la diffusion de l'humanisme depuis l'Italie du XIVe siècle."
            },
            7: {
                question: "Quelle est la relation cause → conséquence correcte concernant les grands artistes de la Renaissance ?",
                options: [
                    "Cause : le mécénat des princes et banquiers italiens finance les artistes → Transformation : des peintres et sculpteurs comme Léonard de Vinci ou Michel-Ange développent de nouvelles techniques (sfumato, perspective) → Conséquence : l'art de la Renaissance produit des œuvres majeures encore célèbres aujourd'hui",
                    "Cause : Gutenberg peint la Joconde → Transformation : Léonard de Vinci invente l'imprimerie → Conséquence : Michel-Ange sculpte le plafond de la Sixtine",
                    "Cause : Érasme critique l'Église dans l'Éloge de la folie → Transformation : Michel-Ange peint la Naissance de Vénus → Conséquence : Botticelli sculpte le David",
                    "Cause : Dürer diffuse la Renaissance en Allemagne → Transformation : il peint l'École d'Athènes → Conséquence : Raphaël devient graveur en Allemagne"
                ],
                correct: 0,
                correction: "Le mécénat finance les artistes, qui développent des techniques nouvelles (comme le sfumato de Léonard de Vinci) et produisent des œuvres majeures encore célèbres."
            },
            8: {
                question: "Quelle différence essentielle existe entre l'humanisme et l'art de la Renaissance, tels que décrits dans ce chapitre ?",
                options: [
                    "L'humanisme est un courant de pensée centré sur l'étude des textes antiques et la place de l'homme, tandis que l'art de la Renaissance en est l'expression visuelle, à travers la peinture et la sculpture",
                    "L'humanisme concerne uniquement l'Allemagne, tandis que l'art de la Renaissance concerne uniquement l'Italie",
                    "L'humanisme est apparu après l'art de la Renaissance, au XVIIe siècle",
                    "L'humanisme critique uniquement l'Église, tandis que l'art de la Renaissance ne s'intéresse qu'à la religion"
                ],
                correct: 0,
                correction: "L'humanisme est un courant intellectuel (étude des textes antiques, place de l'homme), tandis que l'art de la Renaissance en est l'expression visuelle, dans la peinture et la sculpture notamment."
            },
            9: {
                question: "Quelle différence peut-on établir entre Léonard de Vinci et Michel-Ange, tels que présentés dans ce chapitre ?",
                options: [
                    "Léonard de Vinci est connu pour la technique du sfumato en peinture (La Joconde), tandis que Michel-Ange est célèbre pour la sculpture monumentale et la peinture du plafond de la Sixtine",
                    "Léonard de Vinci a peint le plafond de la Sixtine, tandis que Michel-Ange a peint La Joconde",
                    "Léonard de Vinci et Michel-Ange sont tous deux des humanistes allemands du XVIIe siècle",
                    "Léonard de Vinci a inventé l'imprimerie, tandis que Michel-Ange a fondé le mécénat des Médicis"
                ],
                correct: 0,
                correction: "Léonard de Vinci (1452-1519) invente le sfumato et peint La Joconde ; Michel-Ange (1475-1564) est célèbre pour ses sculptures monumentales (David) et le plafond de la chapelle Sixtine."
            },
            10: {
                question: "Parmi ces étapes de la Renaissance, laquelle s'est produite en premier ?",
                options: [
                    "La naissance du mouvement en Italie, au XIVe siècle",
                    "L'invention de l'imprimerie par Gutenberg, vers 1450",
                    "La diffusion de la Renaissance dans toute l'Europe, aux XVe-XVIe siècles",
                    "La rédaction de l'Éloge de la folie par Érasme, en 1509"
                ],
                correct: 0,
                correction: "La Renaissance naît en Italie au XIVe siècle, avant l'invention de l'imprimerie (vers 1450), sa diffusion en Europe (XVe-XVIe s.) et l'Éloge de la folie d'Érasme (1509)."
            },
            11: {
                question: "Pourquoi un tableau de Botticelli est-il une source intéressante mais limitée pour comprendre la Renaissance ?",
                options: [
                    "Parce qu'il illustre directement les goûts artistiques et les thèmes (mythologie antique) de l'époque, mais ne donne pas d'informations précises sur le contexte économique ou politique",
                    "Parce qu'il s'agit d'un témoignage oral transmis par les artisans florentins",
                    "Parce qu'il a été écrit en latin par un humaniste anonyme",
                    "Parce qu'il a été entièrement détruit peu après sa création"
                ],
                correct: 0,
                correction: "Comme toute source iconographique, un tableau donne une image directe des goûts et des thèmes d'une époque, mais reste limité pour connaître le contexte économique ou politique précis."
            },
            12: {
                question: "Parmi ces artistes et humanistes, lequel est né en premier ?",
                options: [
                    "Botticelli (1445)",
                    "Léonard de Vinci (1452)",
                    "Michel-Ange (1475)",
                    "Raphaël (1483)"
                ],
                correct: 0,
                correction: "Botticelli naît en 1445, avant Léonard de Vinci (1452), Michel-Ange (1475) et Raphaël (1483)."
            },
            13: {
                question: "Pourquoi une lettre écrite par un mécène comme un Médicis à un artiste est-elle une source utile pour l'historien, mais avec des limites ?",
                options: [
                    "Parce qu'elle renseigne sur les commandes et le financement des œuvres, mais reflète surtout le point de vue et les intérêts du commanditaire, pas nécessairement ceux de l'artiste",
                    "Parce qu'elle est une source archéologique difficile à dater précisément",
                    "Parce qu'elle a été rédigée plusieurs siècles après les faits qu'elle décrit",
                    "Parce qu'elle ne mentionne jamais le nom d'un artiste ou d'une œuvre"
                ],
                correct: 0,
                correction: "Une lettre de mécène renseigne sur le financement des œuvres, mais exprime le point de vue du commanditaire : elle doit être croisée avec d'autres sources pour connaître le point de vue de l'artiste."
            }
        },
        'lib_histoire_3e_5': {
            1: {
                question: "Quelles étaient les principales motivations des explorations européennes à partir du XVe siècle ?",
                options: [
                    "Trouver de nouvelles routes maritimes vers l'Asie pour le commerce des épices, grâce aux progrès techniques et au soutien des monarchies ibériques",
                    "Fuir les persécutions religieuses en Europe pour s'installer définitivement en Amérique",
                    "Reconquérir Constantinople, prise par les Ottomans en 1453",
                    "Établir des colonies anglaises sur la côte est de l'Amérique du Nord"
                ],
                correct: 0,
                correction: "Les explorations sont motivées par la recherche de nouvelles routes vers l'Asie (épices, soieries), les progrès techniques (caravelle, boussole, astrolabe) et le soutien des monarchies portugaise et espagnole."
            },
            2: {
                question: "Que désignent les 'routes maritimes' recherchées par les explorateurs européens ?",
                options: [
                    "Des itinéraires en mer, contournant l'Afrique ou traversant l'Atlantique, permettant d'atteindre l'Asie sans passer par les routes terrestres fermées par les Ottomans",
                    "Les circuits terrestres traversant l'Empire ottoman pour rejoindre l'Inde",
                    "Les traités partageant le monde entre le Portugal et l'Espagne",
                    "Les colonies fondées en Amérique du Nord par les Britanniques"
                ],
                correct: 0,
                correction: "Les Européens cherchent de nouvelles routes maritimes vers l'Asie après la fermeture des routes terrestres par les Ottomans en 1453."
            },
            3: {
                question: "Que désigne la 'conquête des Amériques' menée par les Espagnols au XVIe siècle ?",
                options: [
                    "La destruction des empires aztèque (par Cortès, 1519-1521) et inca (par Pizarre, 1532-1533) et leur soumission à la domination coloniale espagnole",
                    "L'établissement de treize colonies britanniques autonomes sur la côte est de l'Amérique du Nord",
                    "Le premier tour du monde réalisé par l'expédition de Magellan et Elcano",
                    "Le partage du monde entre le Portugal et l'Espagne décidé par le pape en 1494"
                ],
                correct: 0,
                correction: "La conquête des Amériques désigne la destruction des empires aztèque et inca par Cortès et Pizarre, aboutissant à la domination coloniale espagnole."
            },
            4: {
                question: "Que désignent les 'échanges colombiens' qui suivent la découverte de l'Amérique ?",
                options: [
                    "Les transferts de produits entre les deux continents, comme l'introduction de la pomme de terre, du maïs ou du cacao en Europe, et l'arrivée de l'or et de l'argent américains",
                    "Le commerce triangulaire d'esclaves africains organisé uniquement au XIXe siècle",
                    "Le traité de Tordesillas partageant le monde entre deux puissances",
                    "Les assemblées représentatives élues dans les colonies britanniques"
                ],
                correct: 0,
                correction: "Les échanges colombiens désignent les transferts entre continents : produits alimentaires américains (pomme de terre, maïs, cacao...) vers l'Europe, et or/argent américains exploités par les Européens."
            },
            5: {
                question: "Que recouvrent les 'violences et domination' exercées lors de la colonisation des Amériques ?",
                options: [
                    "La destruction des empires amérindiens, la chute démographique catastrophique liée aux épidémies, et la mise en place de la traite négrière pour remplacer la main-d'œuvre",
                    "L'introduction de nouveaux aliments comme la tomate et le tabac en Europe",
                    "Le développement du commerce atlantique et de l'inflation en Europe",
                    "L'autonomie locale accordée aux treize colonies britanniques"
                ],
                correct: 0,
                correction: "La colonisation entraîne la destruction des empires amérindiens, une catastrophe démographique due aux épidémies, et le développement de la traite négrière pour remplacer la main-d'œuvre décimée."
            },
            6: {
                question: "Quelle est la relation cause → conséquence correcte concernant les grandes découvertes géographiques ?",
                options: [
                    "Cause : les Ottomans ferment les routes terrestres vers l'Asie et les progrès techniques (caravelle, boussole, astrolabe) rendent la navigation possible → Transformation : les monarchies portugaise et espagnole financent des expéditions maritimes → Conséquence : de nouvelles routes et continents sont atteints (Amérique en 1492, Inde par mer en 1498)",
                    "Cause : Christophe Colomb découvre l'Amérique en 1492 → Transformation : les Ottomans prennent ensuite Constantinople → Conséquence : les routes terrestres vers l'Asie se ferment",
                    "Cause : Magellan effectue le premier tour du monde → Transformation : Vasco de Gama atteint ensuite l'Inde → Conséquence : le Portugal prend Ceuta en 1415",
                    "Cause : le traité de Tordesillas partage le monde en 1494 → Transformation : Bartolomeu Dias double ensuite le cap de Bonne-Espérance → Conséquence : Colomb atteint les Caraïbes"
                ],
                correct: 0,
                correction: "La fermeture des routes terrestres par les Ottomans et les progrès techniques poussent les monarchies ibériques à financer des expéditions maritimes, qui atteignent l'Amérique (1492) puis l'Inde par mer (1498)."
            },
            7: {
                question: "Quelle est la relation cause → conséquence correcte concernant les conséquences des découvertes pour les peuples amérindiens ?",
                options: [
                    "Cause : les Européens apportent des maladies (variole, rougeole) auxquelles les Amérindiens ne sont pas immunisés → Transformation : une catastrophe démographique s'abat sur les populations amérindiennes (50 à 90 % décimées) → Conséquence : les Européens développent la traite négrière pour remplacer cette main-d'œuvre décimée",
                    "Cause : les Amérindiens envahissent l'Europe → Transformation : ils y apportent la peste → Conséquence : l'Empire aztèque conquiert Madrid",
                    "Cause : l'or et l'argent américains restent entièrement en Amérique → Transformation : l'Europe s'appauvrit → Conséquence : le commerce atlantique disparaît",
                    "Cause : les Européens introduisent la pomme de terre en Amérique → Transformation : la population amérindienne augmente fortement → Conséquence : les empires aztèque et inca se renforcent"
                ],
                correct: 0,
                correction: "Les épidémies apportées par les Européens déciment 50 à 90 % des Amérindiens ; pour remplacer cette main-d'œuvre, les Européens développent la traite négrière transatlantique."
            },
            8: {
                question: "Quelle est la relation cause → conséquence correcte concernant les colonies anglaises en Amérique du Nord au XVIIIe siècle ?",
                options: [
                    "Cause : les treize colonies possèdent chacune une assemblée représentative élue et sont influencées par les idées des Lumières (Locke, Montesquieu) → Transformation : elles développent une forte autonomie locale tout en restant soumises à la métropole britannique pour le commerce et la fiscalité → Conséquence : un précédent démocratique s'installe dans ces colonies",
                    "Cause : les colonies anglaises sont dirigées directement par le pape → Transformation : elles adoptent le catholicisme comme religion officielle → Conséquence : elles rompent tout lien avec l'Angleterre dès 1700",
                    "Cause : les treize colonies comptent 25 millions d'habitants → Transformation : elles dominent économiquement l'Europe → Conséquence : l'Angleterre en dépend entièrement",
                    "Cause : Cortès conquiert les colonies anglaises → Transformation : l'Espagne prend le contrôle de l'Amérique du Nord → Conséquence : les Lumières influencent alors les colons espagnols"
                ],
                correct: 0,
                correction: "Grâce à leurs assemblées élues et à l'influence des Lumières, les treize colonies (environ 2,5 millions d'habitants) développent une autonomie locale, tout en restant soumises à la métropole britannique pour le commerce et la fiscalité."
            },
            9: {
                question: "Quelle différence peut-on établir entre les conséquences des grandes découvertes pour les Européens et pour les peuples amérindiens ?",
                options: [
                    "Pour les Européens, les découvertes apportent un enrichissement économique et de nouveaux aliments, tandis que pour les Amérindiens, elles provoquent une catastrophe démographique et la destruction de leurs empires",
                    "Pour les Européens comme pour les Amérindiens, les découvertes n'ont eu aucune conséquence économique ou démographique",
                    "Pour les Européens, les découvertes provoquent une chute démographique de 90 %, tandis que les Amérindiens s'enrichissent grâce à l'or",
                    "Pour les Européens et les Amérindiens, les découvertes entraînent uniquement la diffusion du protestantisme"
                ],
                correct: 0,
                correction: "Les découvertes enrichissent économiquement les Européens (or, argent, nouveaux aliments) alors qu'elles provoquent une catastrophe démographique et politique pour les Amérindiens."
            },
            10: {
                question: "Parmi ces événements des grandes découvertes, lequel s'est produit en premier ?",
                options: [
                    "Le Portugal prend Ceuta en Afrique du Nord (1415)",
                    "Christophe Colomb atteint les Caraïbes (1492)",
                    "Vasco de Gama atteint l'Inde par voie maritime (1498)",
                    "Cortès conquiert l'Empire aztèque (1519-1521)"
                ],
                correct: 0,
                correction: "La prise de Ceuta par le Portugal en 1415 marque le début des explorations, avant le voyage de Colomb (1492), celui de Vasco de Gama (1498) et la conquête de Cortès (1519-1521)."
            },
            11: {
                question: "Pourquoi le journal de bord de Christophe Colomb doit-il être utilisé avec prudence par l'historien ?",
                options: [
                    "Parce qu'il reflète le point de vue et les croyances de Colomb lui-même, qui pensait par exemple être arrivé en Asie, et non une description neutre des faits",
                    "Parce qu'il s'agit d'une source archéologique très fragmentaire",
                    "Parce qu'il a été rédigé plusieurs siècles après le voyage par un historien anonyme",
                    "Parce qu'il ne mentionne jamais aucun lieu ni aucune date"
                ],
                correct: 0,
                correction: "Le journal de Colomb reflète son propre point de vue et ses croyances de l'époque (il pensait être arrivé en Asie) : c'est une source primaire à soumettre à la critique interne."
            },
            12: {
                question: "Parmi ces conquêtes espagnoles, laquelle a eu lieu en premier ?",
                options: [
                    "La conquête de l'Empire aztèque par Cortès (1519-1521)",
                    "La conquête de l'Empire inca par Pizarre (1532-1533)",
                    "L'installation des treize colonies anglaises (XVIIIe siècle)",
                    "La fondation du calvinisme par Jean Calvin (après 1533)"
                ],
                correct: 0,
                correction: "Cortès conquiert l'Empire aztèque en 1519-1521, avant que Pizarre ne conquière l'Empire inca en 1532-1533."
            },
            13: {
                question: "Pourquoi un registre de traite négrière tenu par un marchand européen est-il une source utile mais limitée pour étudier les conséquences des découvertes ?",
                options: [
                    "Parce qu'il donne des informations chiffrées sur le commerce, mais reflète le point de vue du marchand et ne rend pas compte de l'expérience vécue par les personnes réduites en esclavage",
                    "Parce qu'il s'agit d'une source orale transmise uniquement par tradition africaine",
                    "Parce qu'il a été rédigé par des historiens du XXe siècle sans lien avec les faits",
                    "Parce qu'il ne contient aucune information chiffrée ni aucune date"
                ],
                correct: 0,
                correction: "Un registre de traite est une source écrite primaire utile pour les chiffres du commerce, mais elle exprime le point de vue du marchand et passe sous silence l'expérience des personnes déportées."
            }
        },
        'lib_histoire_3e_6': {
            1: {
                question: "Que représentent Luther et Calvin dans ce chapitre ?",
                options: [
                    "Deux grands réformateurs protestants du XVIe siècle : Luther, à l'origine des 95 thèses (1517) et de la doctrine du salut par la foi seule, et Calvin, fondateur du calvinisme fondé sur la prédestination",
                    "Deux papes ayant organisé le Concile de Trente pour réformer l'Église catholique",
                    "Deux rois ayant signé l'Édit de Nantes pour mettre fin aux guerres de religion en France",
                    "Deux fondateurs de la Compagnie de Jésus chargés de lutter contre le protestantisme"
                ],
                correct: 0,
                correction: "Luther (95 thèses en 1517, sola fide) et Calvin (prédestination, Genève) sont les deux grands réformateurs protestants présentés dans ce chapitre."
            },
            2: {
                question: "Que désigne la 'Réforme catholique' (ou Contre-Réforme) évoquée dans ce chapitre ?",
                options: [
                    "La réaction de l'Église catholique face au succès du protestantisme, à travers une réforme interne (Concile de Trente) et une lutte contre les protestants",
                    "Le mouvement lancé par Luther en 1517 contre la vente des indulgences",
                    "La rupture de Henri VIII avec Rome pour fonder l'Église d'Angleterre",
                    "L'édit signé par Henri IV accordant la liberté de culte aux protestants"
                ],
                correct: 0,
                correction: "Face au succès du protestantisme, l'Église catholique réagit par une réforme interne (Concile de Trente, 1545-1563) et une lutte contre les protestants : c'est la Contre-Réforme."
            },
            3: {
                question: "Que désignent les 'guerres de religion' en France évoquées dans ce chapitre ?",
                options: [
                    "Une série de conflits civils meurtriers entre catholiques et protestants (huguenots), de 1562 à 1598, marqués notamment par le massacre de la Saint-Barthélemy (1572)",
                    "Les guerres menées par les Ottomans contre les puissances catholiques en Méditerranée",
                    "Les conquêtes espagnoles des empires aztèque et inca au XVIe siècle",
                    "Les croisades organisées contre les musulmans pour reprendre Jérusalem"
                ],
                correct: 0,
                correction: "Les guerres de religion (1562-1598) sont des guerres civiles entre catholiques et protestants français, dont le massacre de la Saint-Barthélemy (1572) est un épisode majeur."
            },
            4: {
                question: "Que représente l'Édit de Nantes (1598) en matière de 'tolérance et coexistence' religieuse ?",
                options: [
                    "Le premier exemple de tolérance religieuse organisée par l'État en Europe, accordant aux protestants la liberté de culte dans certaines villes",
                    "La reconnaissance officielle du calvinisme comme seule religion d'État en France",
                    "L'interdiction totale de toute pratique catholique sur le territoire français",
                    "La fondation de la Compagnie de Jésus pour encadrer les relations entre catholiques et protestants"
                ],
                correct: 0,
                correction: "L'Édit de Nantes (1598) accorde aux protestants la liberté de culte et des droits civils dans certaines villes : c'est le premier exemple de tolérance religieuse organisée par l'État en Europe."
            },
            5: {
                question: "Quelle est la relation cause → conséquence correcte concernant les causes de la Réforme protestante ?",
                options: [
                    "Cause : la vente des indulgences et la corruption du clergé scandalisent une partie des chrétiens → Transformation : des réformateurs comme Luther, aidés par la diffusion rapide de l'imprimerie, critiquent l'Église et proposent un retour aux textes bibliques → Conséquence : un mouvement de Réforme religieuse remet en cause l'autorité de l'Église romaine",
                    "Cause : le Concile de Trente réforme l'Église catholique → Transformation : Luther rédige ensuite ses 95 thèses en réaction → Conséquence : la vente des indulgences commence alors",
                    "Cause : l'imprimerie est interdite par Luther → Transformation : les idées réformatrices ne peuvent plus se diffuser → Conséquence : l'Église catholique reste incontestée",
                    "Cause : Henri VIII rompt avec Rome pour des raisons religieuses → Transformation : le pape autorise alors la vente des indulgences → Conséquence : le protestantisme disparaît en Angleterre"
                ],
                correct: 0,
                correction: "La vente des indulgences et la corruption du clergé provoquent un scandale ; des réformateurs comme Luther, aidés par l'imprimerie, remettent en cause l'autorité de l'Église romaine : c'est la Réforme."
            },
            6: {
                question: "Quelle est la relation cause → conséquence correcte concernant les grandes réformes de Luther et Calvin ?",
                options: [
                    "Cause : Luther rédige ses 95 thèses contre les indulgences en 1517 et développe l'idée du salut par la foi seule → Transformation : ses idées se diffusent grâce à l'imprimerie et inspirent d'autres réformateurs comme Calvin ou Zwingli → Conséquence : plusieurs Églises protestantes distinctes (luthérienne, calviniste, zwinglienne) s'implantent en Europe",
                    "Cause : Calvin devient roi d'Angleterre → Transformation : il rompt avec Rome → Conséquence : il fonde l'Église anglicane",
                    "Cause : Zwingli fonde la Compagnie de Jésus → Transformation : il combat le protestantisme → Conséquence : il devient cardinal à Rome",
                    "Cause : Luther signe l'Édit de Nantes → Transformation : il accorde la liberté de culte aux protestants → Conséquence : les guerres de religion cessent en Allemagne"
                ],
                correct: 0,
                correction: "Les 95 thèses de Luther (1517) se diffusent grâce à l'imprimerie et inspirent d'autres réformateurs (Calvin, Zwingli), donnant naissance à plusieurs Églises protestantes distinctes en Europe."
            },
            7: {
                question: "Quelle est la relation cause → conséquence correcte concernant la Contre-Réforme catholique ?",
                options: [
                    "Cause : le protestantisme rencontre un succès croissant en Europe → Transformation : l'Église catholique réagit par le Concile de Trente, la fondation des Jésuites (1540) et l'Inquisition romaine → Conséquence : l'Église catholique se réforme et lutte activement contre la diffusion du protestantisme",
                    "Cause : Luther fonde la Compagnie de Jésus → Transformation : il en devient le chef → Conséquence : il dirige ensuite l'Inquisition romaine",
                    "Cause : le Concile de Trente supprime totalement les indulgences → Transformation : le protestantisme disparaît → Conséquence : l'Église catholique n'a alors plus besoin de se réformer",
                    "Cause : Calvin est nommé pape → Transformation : il organise le Concile de Trente → Conséquence : le calvinisme devient la religion officielle catholique"
                ],
                correct: 0,
                correction: "Face au succès du protestantisme, l'Église catholique réagit par le Concile de Trente, la fondation des Jésuites (1540, Ignace de Loyola) et l'Inquisition romaine : c'est la Contre-Réforme."
            },
            8: {
                question: "Quelle est la relation cause → conséquence correcte concernant les guerres de religion en France ?",
                options: [
                    "Cause : le conflit entre catholiques et protestants (huguenots) dégénère en violences, comme le massacre de la Saint-Barthélemy (1572) → Transformation : Henri IV, devenu roi, abjure le protestantisme en 1593 puis cherche à pacifier le royaume → Conséquence : il signe l'Édit de Nantes en 1598, accordant la liberté de culte aux protestants",
                    "Cause : Henri IV signe l'Édit de Nantes en 1598 → Transformation : le massacre de la Saint-Barthélemy éclate ensuite en 1572 → Conséquence : Henri III est assassiné en 1589",
                    "Cause : Louis XIV accorde la liberté de culte aux protestants → Transformation : les huguenots quittent la France en masse → Conséquence : l'Édit de Nantes est alors signé en 1598",
                    "Cause : les protestants massacrent les catholiques à Wassy en 1562 → Transformation : Henri IV se convertit au protestantisme → Conséquence : la France devient un pays protestant"
                ],
                correct: 0,
                correction: "Après des décennies de violences (Saint-Barthélemy, 1572), Henri IV abjure le protestantisme (1593) puis signe l'Édit de Nantes (1598), accordant la liberté de culte aux protestants."
            },
            9: {
                question: "Quelle différence peut-on établir entre la Réforme protestante et la Contre-Réforme catholique ?",
                options: [
                    "La Réforme protestante conteste l'autorité de l'Église romaine et propose de nouvelles doctrines (Luther, Calvin), tandis que la Contre-Réforme est la réponse de l'Église catholique pour se réformer de l'intérieur et lutter contre le protestantisme",
                    "La Réforme protestante et la Contre-Réforme catholique désignent exactement le même mouvement religieux",
                    "La Réforme protestante a été lancée par le pape, tandis que la Contre-Réforme a été lancée par Luther",
                    "La Réforme protestante concerne uniquement la France, tandis que la Contre-Réforme concerne uniquement l'Angleterre"
                ],
                correct: 0,
                correction: "La Réforme protestante conteste l'autorité de Rome, tandis que la Contre-Réforme (Concile de Trente, Jésuites) est la réponse catholique pour se réformer et combattre le protestantisme."
            },
            10: {
                question: "Parmi ces événements liés à la Réforme, lequel s'est produit en premier ?",
                options: [
                    "Luther affiche ses 95 thèses contre les indulgences (1517)",
                    "La fondation de la Compagnie de Jésus (1540)",
                    "L'ouverture du Concile de Trente (1545)",
                    "Le massacre de la Saint-Barthélemy (1572)"
                ],
                correct: 0,
                correction: "Luther publie ses 95 thèses en 1517, avant la fondation des Jésuites (1540), l'ouverture du Concile de Trente (1545) et le massacre de la Saint-Barthélemy (1572)."
            },
            11: {
                question: "Pourquoi le texte des 95 thèses de Luther doit-il être analysé avec la méthode de critique interne par l'historien ?",
                options: [
                    "Parce qu'il exprime le point de vue engagé de Luther contre l'Église, et non une description neutre de la situation religieuse de l'époque",
                    "Parce qu'il s'agit d'une source archéologique fragmentaire difficile à dater",
                    "Parce qu'il a été rédigé par le pape pour défendre les indulgences",
                    "Parce qu'il ne contient aucune critique de l'Église catholique"
                ],
                correct: 0,
                correction: "Les 95 thèses sont un texte écrit par Luther pour dénoncer les indulgences : elles expriment un point de vue engagé qu'il faut analyser avec la critique interne, et non une description neutre."
            },
            12: {
                question: "Parmi ces réformateurs, lequel est né en premier ?",
                options: [
                    "Martin Luther (1483)",
                    "Zwingli (1484)",
                    "Henri VIII (1491)",
                    "Jean Calvin (1509)"
                ],
                correct: 0,
                correction: "Martin Luther naît en 1483, juste avant Zwingli (1484), puis Henri VIII (1491) et enfin Jean Calvin (1509)."
            },
            13: {
                question: "Pourquoi un texte rédigé par un cardinal catholique décrivant Calvin doit-il être utilisé avec prudence par l'historien ?",
                options: [
                    "Parce que l'auteur, opposé au protestantisme, peut présenter Calvin de façon négative ou déformée, selon son propre point de vue religieux",
                    "Parce qu'il s'agit d'une source orale transmise uniquement en Suisse alémanique",
                    "Parce qu'aucun document sur Calvin n'a été conservé jusqu'à aujourd'hui",
                    "Parce qu'il a été rédigé par Calvin lui-même pour faire son propre éloge"
                ],
                correct: 0,
                correction: "Un cardinal catholique, opposé à la Réforme, peut décrire Calvin de façon partiale : l'historien doit tenir compte du point de vue et de l'intention de l'auteur (critique interne)."
            }
        }
    };
    Object.keys(REPLACEMENTS).forEach(function (id) {
        var chapter = findChapter(id);
        if (!chapter) return;
        var repl = REPLACEMENTS[id];
        Object.keys(repl).forEach(function (idxStr) {
            var i = Number(idxStr);
            var ex = chapter.exercices[i];
            if (!ex) return;
            var r = repl[idxStr];
            ex.question = r.question;
            ex.options = r.options;
            ex.correct = r.correct;
            ex.correction = r.correction;
            ex.contentVersion = (ex.contentVersion || 0) + 1;
        });
    });
})();
