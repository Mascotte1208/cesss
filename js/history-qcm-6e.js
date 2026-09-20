(function () {
    if (typeof CESS_LIBRARY_DATA === 'undefined' || typeof findChapter !== 'function') return;
    var REPLACEMENTS = {
        'lib_histoire_6e_1': {
            1: {
                question: "Laquelle de ces affirmations décrit correctement les origines de la construction européenne ?",
                options: [
                    "Elle naît après la Seconde Guerre mondiale, portée par des visionnaires comme Jean Monnet et Robert Schuman qui veulent rendre la guerre impossible entre États européens.",
                    "Elle naît au XIXe siècle sous l'impulsion de Napoléon III pour unifier les monnaies européennes.",
                    "Elle naît pendant la Guerre froide comme réponse militaire directe à la création du Pacte de Varsovie.",
                    "Elle naît en 1789 avec la Révolution française et l'idée d'États-Unis d'Europe."
                ],
                correct: 0,
                correction: "L'idée européenne naît des cendres de la Seconde Guerre mondiale : des visionnaires comme Jean Monnet, Robert Schuman, Konrad Adenauer et Alcide De Gasperi veulent rendre la guerre \"impensable et matériellement impossible\" entre pays européens."
            },
            2: {
                question: "Quelle est la relation cause → conséquence correcte concernant les origines de l'Union européenne ?",
                options: [
                    "Volonté de paix après 1945 → création de la CECA en 1951 pour mettre en commun charbon et acier → début de l'intégration économique européenne.",
                    "Crise pétrolière de 1973 → création de la CECA → adhésion immédiate de 12 pays.",
                    "Chute du mur de Berlin en 1989 → traité de Rome de 1957 → création de l'euro dès 1957.",
                    "Indépendance des colonies africaines → traité de Maastricht → naissance de l'UE en 1992."
                ],
                correct: 0,
                correction: "La volonté de reconstruction et de paix après 1945 mène à la CECA (1951), qui met en commun la production franco-allemande de charbon et d'acier : c'est le point de départ de l'intégration économique européenne."
            },
            3: {
                question: "Laquelle de ces affirmations sur les institutions européennes est correcte ?",
                options: [
                    "Le Parlement européen est élu au suffrage universel direct par les citoyens européens et partage le pouvoir législatif avec le Conseil de l'UE.",
                    "La Commission européenne est élue directement par les citoyens européens tous les 5 ans.",
                    "Le Conseil européen regroupe des ministres des finances qui votent les lois à la majorité qualifiée.",
                    "La Banque centrale européenne est chargée de proposer les lois européennes et de gérer le budget de l'UE."
                ],
                correct: 0,
                correction: "Le Parlement européen (705 députés) est élu au suffrage universel direct tous les 5 ans et codécide des lois avec le Conseil de l'UE, qui réunit les ministres nationaux."
            },
            4: {
                question: "Quelle est la relation cause → conséquence correcte concernant le fonctionnement des institutions européennes ?",
                options: [
                    "Besoin de partager la souveraineté et de décider en commun → équilibre entre Conseil (États), Parlement (citoyens) et Commission (initiative des lois) → adoption de politiques communes mais débats sur le déficit démocratique.",
                    "Besoin d'une monnaie unique → création du Parlement européen en 1979 → adoption immédiate de l'euro.",
                    "Volonté de la Commission d'être élue au suffrage universel → réforme de 2007 → suppression du Conseil européen.",
                    "Rivalité entre la France et l'Allemagne → création de la CJUE → dissolution du Conseil de l'UE."
                ],
                correct: 0,
                correction: "Le partage de souveraineté entre États membres impose un équilibre institutionnel (Conseil, Parlement, Commission), qui permet des politiques communes tout en alimentant un débat sur la distance démocratique."
            },
            5: {
                question: "Qu'est-ce que le réchauffement climatique, tel que défini dans le cours ?",
                options: [
                    "L'augmentation de la température moyenne de la surface terrestre, causée principalement par les émissions de gaz à effet de serre d'origine humaine depuis la révolution industrielle.",
                    "Une variation naturelle et cyclique du climat sans lien avec les activités humaines.",
                    "La diminution progressive de la couche d'ozone au-dessus de l'Antarctique.",
                    "Le refroidissement des océans provoqué par la fonte des glaciers polaires."
                ],
                correct: 0,
                correction: "Le réchauffement climatique est l'augmentation de la température moyenne de la surface terrestre, principalement causée par les émissions de gaz à effet de serre d'origine humaine depuis la révolution industrielle."
            },
            6: {
                question: "Quelle est la relation cause → conséquence correcte concernant le réchauffement climatique ?",
                options: [
                    "Combustion massive d'énergies fossiles → émissions de CO2 amplifiant l'effet de serre → hausse des températures, fonte des glaces et événements climatiques extrêmes.",
                    "Trou dans la couche d'ozone → augmentation des rayons UV → fonte des glaciers arctiques.",
                    "Multiplication des éruptions volcaniques depuis 1950 → refroidissement de l'atmosphère → baisse du niveau des mers.",
                    "Reforestation massive en Europe → absorption accrue de CO2 → hausse des températures mondiales."
                ],
                correct: 0,
                correction: "La combustion des énergies fossiles (charbon, pétrole, gaz) libère du CO2 et d'autres gaz à effet de serre qui amplifient l'effet de serre, provoquant la hausse des températures et ses conséquences (fonte des glaces, événements extrêmes)."
            },
            7: {
                question: "Au CESS, à quoi correspond une « question de mise en contexte » ?",
                options: [
                    "Une question qui demande de situer un document ou un événement avant, pendant et après, dans son contexte historique.",
                    "Une question qui demande uniquement de recopier le document mot pour mot.",
                    "Une question qui demande de comparer deux régimes politiques selon des critères identiques.",
                    "Une question qui demande de citer un document sans donner d'explication personnelle."
                ],
                correct: 0,
                correction: "La question de mise en contexte (« Situez ce document dans son contexte historique ») demande d'organiser la réponse en trois temps : avant, pendant, après."
            },
            8: {
                question: "Quelle est la conséquence si un candidat ne lit pas correctement le verbe de consigne (identifier, expliquer, comparer, justifier, critiquer) au CESS ?",
                options: [
                    "Il risque de répondre à côté de ce qui est demandé, même si ses connaissances sont correctes, et de perdre des points.",
                    "Il obtient automatiquement un bonus de points pour originalité.",
                    "Sa copie est annulée automatiquement par le jury.",
                    "Cela n'a aucune conséquence car seul le contenu factuel compte."
                ],
                correct: 0,
                correction: "La méthode historique du CESS insiste sur le fait de lire le verbe de consigne : mal l'identifier conduit à une réponse hors sujet, même avec de bonnes connaissances."
            },
            9: {
                question: "Selon la méthode CESS, quelle est la structure recommandée pour une réponse développée (plus de 10 lignes) ?",
                options: [
                    "Une introduction qui contextualise et annonce le plan, un développement en 2-3 parties argumentées (exemple + connaissance), puis une conclusion qui répond directement à la question.",
                    "Une seule longue partie sans introduction ni conclusion, listant un maximum de dates.",
                    "Une copie intégrale du document suivie d'un résumé du cours.",
                    "Une conclusion en premier, suivie de plusieurs contre-arguments sans lien avec la question."
                ],
                correct: 0,
                correction: "La structure attendue est : introduction (contextualisation + annonce du plan), développement en parties argumentées, conclusion qui répond clairement à la question posée."
            },
            10: {
                question: "Pourquoi une structure claire (introduction, développement, conclusion) améliore-t-elle la note d'une réponse développée au CESS ?",
                options: [
                    "Parce qu'elle permet au correcteur de suivre l'argumentation, de repérer les connaissances mobilisées et de vérifier qu'une réponse directe est donnée à la question.",
                    "Parce que le nombre de mots utilisés est le seul critère de correction.",
                    "Parce que la structure remplace la nécessité de citer des connaissances du cours.",
                    "Parce qu'une réponse structurée dispense de répondre à la question posée."
                ],
                correct: 0,
                correction: "Adopter une structure claire aide le correcteur à suivre le raisonnement et à identifier si la question posée reçoit bien une réponse argumentée, ce qui améliore significativement la note."
            },
            11: {
                question: "Laquelle de ces erreurs est explicitement déconseillée dans la méthode CESS ?",
                options: [
                    "Recopier intégralement un document au lieu de citer de courts extraits et d'en expliquer le sens.",
                    "Utiliser les connaissances du cours en complément du document proposé.",
                    "Conclure sa réponse par une phrase qui répond directement à la question posée.",
                    "Contextualiser un document en le situant avant, pendant et après l'événement."
                ],
                correct: 0,
                correction: "Il ne faut jamais recopier intégralement un document : il faut citer de courts extraits entre guillemets et en expliquer le sens, car les correcteurs notent la compréhension, pas la copie."
            },
            12: {
                question: "Quelle est la conséquence si un candidat ignore la consigne « à partir du document ET de vos connaissances » ?",
                options: [
                    "Il perd des points car il ne réalise qu'une partie du travail demandé, en n'utilisant pas les deux sources d'information exigées.",
                    "Il obtient la note maximale car citer le document sans le cours suffit.",
                    "Sa copie est totalement invalidée même si elle est correcte.",
                    "Cela améliore la crédibilité de sa réponse."
                ],
                correct: 0,
                correction: "« À partir du document ET de vos connaissances » signifie qu'il faut utiliser les deux : ne pas apporter de connaissances du cours fait perdre des points, même si le document est bien cité."
            },
            13: {
                question: "Quelle est la bonne chronologie des grandes étapes de la fédéralisation de la Belgique ?",
                options: [
                    "Fixation de la frontière linguistique (1962-1963) → première réforme de l'État reconnaissant Communautés et Régions (1970) → Belgique proclamée État fédéral dans la Constitution (1993).",
                    "Belgique proclamée État fédéral (1993) → fixation de la frontière linguistique (1962) → réforme de 1970.",
                    "Réforme de 1970 → indépendance de la Belgique (1830) → fixation de la frontière linguistique.",
                    "Crise de Louvain → traité de Maastricht (1992) → fixation de la frontière linguistique en 1963."
                ],
                correct: 0,
                correction: "La frontière linguistique est fixée en 1962-1963, la réforme de 1970 reconnaît Communautés et Régions, puis la Constitution qualifie la Belgique d'État fédéral en 1993."
            },
            14: {
                question: "Quelle est la relation cause → conséquence correcte concernant la fédéralisation de la Belgique ?",
                options: [
                    "Tensions linguistiques et communautaires entre Flamands et francophones → réformes successives de l'État transférant des compétences aux Communautés et Régions → la Belgique devient un État fédéral (1993).",
                    "Crise économique de 1929 → fixation de la frontière linguistique → dissolution des Communautés.",
                    "Adhésion à l'Union européenne → crise de Louvain → recentralisation du pouvoir en Belgique.",
                    "Indépendance du Congo (1960) → traité de Maastricht → suppression des Régions belges."
                ],
                correct: 0,
                correction: "Les tensions communautaires belges provoquent des réformes successives de l'État transférant des compétences, jusqu'à la reconnaissance de la Belgique comme État fédéral en 1993."
            },
            15: {
                question: "Comment les compétences sont-elles globalement réparties dans la Belgique fédérale ?",
                options: [
                    "Les Communautés gèrent surtout culture et enseignement ; les Régions gèrent économie, emploi, environnement et territoire ; le fédéral garde notamment défense, justice et sécurité sociale.",
                    "Les Régions gèrent l'enseignement et la culture, tandis que les Communautés gèrent l'économie et le territoire.",
                    "Le niveau fédéral gère exclusivement la culture et l'enseignement, sans intervention des Communautés.",
                    "Les Communautés et les Régions gèrent la défense nationale, tandis que le fédéral gère uniquement la culture."
                ],
                correct: 0,
                correction: "Les Communautés gèrent surtout culture, enseignement et matières personnalisables ; les Régions gèrent économie, emploi, environnement et territoire ; le fédéral conserve notamment défense, justice et sécurité sociale."
            },
            16: {
                question: "Quelle est la relation cause → conséquence correcte concernant la répartition des compétences entre Régions, Communautés et État fédéral ?",
                options: [
                    "Pluralité linguistique et besoins territoriaux différents → transferts progressifs de compétences par réformes de l'État → autonomie accrue des entités fédérées mais nécessité de coopération.",
                    "Unité linguistique du pays → centralisation totale du pouvoir → disparition des Régions.",
                    "Guerre froide → création des Communautés → suppression du niveau fédéral.",
                    "Traité de Rome (1957) → fusion des Régions et Communautés → suppression de la Constitution belge."
                ],
                correct: 0,
                correction: "La pluralité linguistique et les besoins territoriaux différents entraînent des transferts de compétences par réformes successives, ce qui accroît l'autonomie des entités tout en exigeant une coopération entre elles."
            }
        },
        'lib_histoire_6e_2': {
            2: {
                question: "Que désigne la politique d'« appeasement » (apaisement) menée par la France et le Royaume-Uni face à Hitler dans les années 1930 ?",
                options: [
                    "Une politique de concessions successives (comme les accords de Munich en 1938) espérant éviter la guerre en cédant à ses revendications territoriales.",
                    "Une alliance militaire immédiate entre la France, le Royaume-Uni et l'URSS contre l'Allemagne dès 1933.",
                    "Un blocus économique total de l'Allemagne dès l'arrivée d'Hitler au pouvoir.",
                    "Une intervention armée préventive en Rhénanie dès sa remilitarisation en 1936."
                ],
                correct: 0,
                correction: "La politique d'apaisement (appeasement) consiste, pour la France et le Royaume-Uni, à céder aux revendications successives d'Hitler pour éviter la guerre, ce qui encourage en réalité ses ambitions."
            },
            3: {
                question: "Quelle est la relation cause → conséquence correcte concernant les causes immédiates de la Seconde Guerre mondiale ?",
                options: [
                    "Arrivée d'Hitler au pouvoir (1933) et réarmement secret de l'Allemagne → expansion territoriale testant la résolution des démocraties → déclaration de guerre franco-britannique après l'invasion de la Pologne (1939).",
                    "Crash boursier de 1929 → invasion de la Pologne → fin immédiate de la guerre en 1939.",
                    "Révolution russe de 1917 → Anschluss de 1938 → alliance franco-allemande.",
                    "Traité de Versailles trop clément envers l'Allemagne → désarmement allemand → paix durable en Europe."
                ],
                correct: 0,
                correction: "L'arrivée d'Hitler au pouvoir (1933) et le réarmement secret de l'Allemagne mènent à une expansion territoriale qui teste la résolution des démocraties, jusqu'à la déclaration de guerre suite à l'invasion de la Pologne en 1939."
            },
            4: {
                question: "Comment peut-on résumer la première phase de la Seconde Guerre mondiale (1939-1942) ?",
                options: [
                    "Une phase de victoires allemandes rapides (Pologne, France, une grande partie de l'Europe) grâce à la stratégie de la Blitzkrieg.",
                    "Une phase de défaites allemandes continues aboutissant à la capitulation dès 1940.",
                    "Une phase de neutralité totale entre l'Allemagne et les Alliés jusqu'en 1942.",
                    "Une phase dominée par la victoire soviétique à Stalingrad dès 1939."
                ],
                correct: 0,
                correction: "La phase 1 (1939-1942) est marquée par les victoires allemandes rapides, obtenues grâce à la stratégie de guerre éclair (Blitzkrieg)."
            },
            5: {
                question: "Quelle est la relation cause → conséquence correcte concernant la Blitzkrieg (guerre éclair) ?",
                options: [
                    "Stratégie combinant chars, avions et infanterie motorisée → attaques rapides et coordonnées → défaite de la Pologne en 5 semaines et de la France en 6 semaines (1940).",
                    "Guerre de tranchées prolongée → victoire française rapide → occupation de l'Allemagne.",
                    "Blocus naval britannique → capitulation immédiate de l'Allemagne → fin de la guerre en 1940.",
                    "Résistance polonaise organisée → invasion soviétique de la France → armistice en 1939."
                ],
                correct: 0,
                correction: "La Blitzkrieg combine chars, avions et infanterie motorisée pour des attaques rapides et coordonnées, ce qui explique la défaite de la Pologne en 5 semaines et de la France en 6 semaines (mai-juin 1940)."
            },
            6: {
                question: "Que désigne le terme « Shoah » ?",
                options: [
                    "L'extermination systématique et délibérée d'environ six millions de Juifs d'Europe par le régime nazi entre 1941 et 1945.",
                    "La déportation des prisonniers de guerre alliés vers l'Allemagne pendant la Première Guerre mondiale.",
                    "L'expulsion des populations allemandes d'Europe de l'Est après 1945.",
                    "La persécution des opposants politiques en URSS sous Staline dans les années 1930."
                ],
                correct: 0,
                correction: "La Shoah (« catastrophe » en hébreu) est l'extermination systématique et délibérée d'environ six millions de Juifs par le régime nazi entre 1941 et 1945, le génocide le plus documenté de l'histoire."
            },
            7: {
                question: "Quelle est la relation cause → conséquence correcte concernant la Shoah ?",
                options: [
                    "Idéologie antisémite et lois de discrimination nazies (1933-1939) → exclusion puis mise en place de la « solution finale » à partir de 1941 → extermination d'environ six millions de Juifs d'Europe.",
                    "Défaite allemande de 1918 → Nuit de Cristal → indépendance d'Israël en 1933.",
                    "Traité de Versailles → création des camps de concentration en 1918 → fin de la discrimination des Juifs.",
                    "Invasion de la Pologne en 1939 → émancipation des Juifs d'Allemagne → fin du nazisme."
                ],
                correct: 0,
                correction: "Les lois de discrimination nazies (1933-1939, dont la Nuit de Cristal) exclut puis persécute les Juifs, avant la mise en œuvre de la « solution finale » à partir de 1941, aboutissant à l'extermination d'environ six millions de Juifs."
            },
            8: {
                question: "Comment peut-on caractériser la Belgique durant l'occupation allemande (1940-1944) ?",
                options: [
                    "Un pays envahi et occupé par l'Allemagne nazie du 10 mai 1940 à septembre 1944, marqué à la fois par la collaboration, la résistance et la persécution des Juifs.",
                    "Un pays resté totalement neutre et non occupé pendant toute la guerre.",
                    "Un pays allié de l'Allemagne nazie ayant déclaré la guerre à la France en 1940.",
                    "Un pays libéré dès 1941 grâce à un débarquement allié en Belgique."
                ],
                correct: 0,
                correction: "La Belgique est envahie et occupée du 10 mai 1940 au 4 septembre 1944 (libération de Bruxelles), période marquée par la collaboration, la résistance et la persécution des Juifs."
            },
            9: {
                question: "Quelle est la relation cause → conséquence correcte concernant la Belgique lors de l'invasion de 1940 ?",
                options: [
                    "Invasion allemande du 10 mai 1940 → capitulation du roi Léopold III le 28 mai tandis que le gouvernement poursuit la guerre depuis Londres → polémique politique durable sur l'attitude du roi (question royale).",
                    "Libération de la Belgique en 1940 → capitulation du gouvernement de Londres → fin de la polémique royale.",
                    "Indépendance du Congo belge → capitulation de Léopold III → fin de la Seconde Guerre mondiale.",
                    "Bataille de Berlin → invasion de la Belgique → abdication immédiate de Léopold III."
                ],
                correct: 0,
                correction: "Après l'invasion du 10 mai 1940, le roi Léopold III capitule le 28 mai alors que les ministres fuient à Londres pour continuer la guerre, ce qui alimente une polémique politique durable (la « question royale »)."
            },
            10: {
                question: "Que désigne l'expression « Guerre froide » ?",
                options: [
                    "Le conflit idéologique, politique et militaire opposant les États-Unis et l'URSS de 1947 à 1991, sans affrontement armé direct entre les deux superpuissances.",
                    "Un conflit armé direct entre les États-Unis et l'URSS ayant fait des millions de morts en Europe.",
                    "L'alliance militaire entre les États-Unis et l'URSS contre l'Allemagne nazie.",
                    "La guerre commerciale entre les pays européens après le traité de Rome de 1957."
                ],
                correct: 0,
                correction: "La Guerre froide désigne le conflit idéologique, politique et militaire entre USA et URSS, sans affrontement direct (« froide »), de 1947 à la chute de l'URSS en 1991."
            },
            11: {
                question: "Quelle est la relation cause → conséquence correcte à l'origine de la Guerre froide ?",
                options: [
                    "Opposition idéologique entre bloc capitaliste (USA) et bloc communiste (URSS) après 1945 → division de l'Europe en zones d'influence et course aux armements → conflit indirect marqué par des alliances militaires opposées (OTAN, Pacte de Varsovie).",
                    "Unification idéologique de l'Europe en 1945 → dissolution de l'OTAN → paix immédiate en Europe.",
                    "Indépendance des colonies africaines → création de l'URSS → fin du capitalisme américain.",
                    "Traité de Versailles de 1919 → alliance USA-URSS → disparition du communisme dès 1947."
                ],
                correct: 0,
                correction: "L'opposition idéologique entre le bloc capitaliste (USA, démocratie libérale) et le bloc communiste (URSS) après 1945 divise l'Europe en zones d'influence et débouche sur un conflit indirect (Guerre froide)."
            },
            12: {
                question: "Que visait la doctrine Truman, proclamée en 1947 ?",
                options: [
                    "Engager les États-Unis à soutenir tout pays menacé par l'expansion du communisme (politique dite d'endiguement).",
                    "Organiser le retrait total des troupes américaines d'Europe après la Seconde Guerre mondiale.",
                    "Créer une monnaie unique entre les États-Unis et l'Europe de l'Ouest.",
                    "Établir une alliance militaire entre les États-Unis et l'URSS contre la Chine."
                ],
                correct: 0,
                correction: "La doctrine Truman (1947) engage les États-Unis à soutenir tout pays menacé par le communisme ; elle s'accompagne du Plan Marshall d'aide économique à l'Europe de l'Ouest."
            },
            13: {
                question: "Quelle est la relation cause → conséquence correcte concernant le blocus de Berlin (1948-1949) ?",
                options: [
                    "L'URSS bloque les voies d'accès terrestres à Berlin-Ouest → les Occidentaux organisent un pont aérien pour ravitailler la ville → échec du blocus et symbole de la division de l'Allemagne et de l'Europe.",
                    "Les Occidentaux bloquent Berlin-Est → l'URSS organise un pont aérien → réunification immédiate de l'Allemagne.",
                    "Chute du mur de Berlin en 1948 → blocus américain → indépendance de Berlin-Ouest.",
                    "Traité de Rome de 1957 → blocus de Berlin → création de l'Union européenne."
                ],
                correct: 0,
                correction: "En 1948-1949, l'URSS bloque les voies d'accès à Berlin-Ouest ; les Occidentaux répondent par un pont aérien, ce qui fait échouer le blocus et symbolise la division de l'Europe en deux blocs."
            },
            14: {
                question: "Pourquoi la décolonisation s'accélère-t-elle après la Seconde Guerre mondiale ?",
                options: [
                    "Parce que la guerre affaiblit les puissances coloniales européennes et renforce les mouvements nationalistes dans les colonies, qui obtiennent leur indépendance entre 1945 et 1975.",
                    "Parce que les puissances coloniales décident volontairement d'abandonner toutes leurs colonies dès 1918.",
                    "Parce que l'ONU annexe directement toutes les colonies européennes en 1945.",
                    "Parce que la Guerre froide met immédiatement fin à toute forme de colonisation dans le monde."
                ],
                correct: 0,
                correction: "La Seconde Guerre mondiale affaiblit les empires coloniaux européens et renforce les mouvements nationalistes ; la plupart des colonies africaines et asiatiques deviennent indépendantes entre 1945 et 1975."
            },
            15: {
                question: "Quelle est la relation cause → conséquence correcte concernant l'indépendance de l'Inde et du Pakistan (1947) ?",
                options: [
                    "Mouvement nationaliste indien (mené notamment par Gandhi) et négociations avec le Royaume-Uni → indépendance obtenue en 1947 avec partition du territoire selon des critères religieux → partition sanglante ayant fait environ un million de morts.",
                    "Guerre civile chinoise → indépendance de l'Inde en 1947 → unification pacifique du sous-continent indien.",
                    "Colonisation française de l'Inde → indépendance négociée avec la France → absence de partition territoriale.",
                    "Révolte des Cipayes en 1857 → indépendance immédiate en 1900 → disparition du Pakistan."
                ],
                correct: 0,
                correction: "Le mouvement nationaliste indien (Gandhi) obtient l'indépendance négociée avec l'Angleterre en 1947, mais la partition du territoire entre Inde et Pakistan selon des critères religieux est sanglante (environ un million de morts)."
            },
            16: {
                question: "Comment peut-on caractériser le « nouvel ordre mondial » après 1991 ?",
                options: [
                    "Une période marquée par l'hyperpuissance américaine (« moment unipolaire »), mais aussi par de nouveaux conflits ethniques et nationaux et par l'accélération de la mondialisation.",
                    "Une période de paix mondiale totale sans plus aucun conflit armé.",
                    "Un monde bipolaire renforcé entre les États-Unis et la Russie communiste.",
                    "La disparition immédiate de toutes les organisations internationales comme l'ONU."
                ],
                correct: 0,
                correction: "Après 1991, les USA restent la seule superpuissance (« moment unipolaire »), mais ce nouvel ordre mondial est marqué par des conflits ethniques (ex-Yougoslavie, Rwanda) et l'accélération de la mondialisation."
            },
            17: {
                question: "Quelle est la relation cause → conséquence correcte concernant la fin de la Guerre froide ?",
                options: [
                    "Effondrement de l'URSS en 1991 → les États-Unis restent la seule superpuissance mondiale (« moment unipolaire ») → émergence de nouveaux conflits ethniques et accélération de la mondialisation.",
                    "Victoire soviétique dans la Guerre froide → domination communiste mondiale → disparition des États-Unis.",
                    "Réunification allemande de 1945 → fin de la Guerre froide → retour à un monde multipolaire équilibré.",
                    "Crise de Cuba de 1962 → effondrement de l'URSS → alliance militaire USA-Chine."
                ],
                correct: 0,
                correction: "L'effondrement de l'URSS (1991) laisse les États-Unis seule superpuissance mondiale, dans un contexte marqué par de nouveaux conflits ethniques et une mondialisation accélérée."
            },
            18: {
                question: "Que s'est-il passé le 11 septembre 2001 aux États-Unis ?",
                options: [
                    "Quatre avions ont été détournés par des membres d'Al-Qaïda ; deux se sont écrasés sur les tours jumelles de New York, un sur le Pentagone et un en Pennsylvanie.",
                    "Une attaque nucléaire nord-coréenne a visé la ville de New York.",
                    "Un coup d'État militaire a renversé le gouvernement américain à Washington.",
                    "Une cyberattaque russe a paralysé le système financier de Wall Street."
                ],
                correct: 0,
                correction: "Le 11 septembre 2001, quatre avions sont détournés par Al-Qaïda : deux s'écrasent sur les tours jumelles de New York, un sur le Pentagone, un en Pennsylvanie."
            },
            19: {
                question: "Quelle est la relation cause → conséquence correcte concernant les attentats du 11 septembre 2001 ?",
                options: [
                    "Attaques terroristes d'Al-Qaïda contre les États-Unis → intervention militaire américaine en Afghanistan (octobre 2001) pour renverser les Taliban → début d'une guerre de vingt ans et renforcement mondial des politiques antiterroristes.",
                    "Invasion de l'Irak en 2001 → attentats du 11 septembre → chute immédiate d'Al-Qaïda.",
                    "Chute des Taliban en 1999 → attentats du 11 septembre 2001 → retrait américain d'Afghanistan.",
                    "Guerre du Golfe de 1991 → attentats du 11 septembre → dissolution de l'ONU."
                ],
                correct: 0,
                correction: "Les attentats du 11 septembre 2001 provoquent l'intervention américaine en Afghanistan dès octobre 2001 (chute des Taliban), point de départ d'une guerre de 20 ans et d'un renforcement mondial des politiques antiterroristes."
            },
            20: {
                question: "Quel constat illustre la montée en puissance de la Chine depuis les années 2000 ?",
                options: [
                    "La Chine est devenue la deuxième économie mondiale (dès 2010) et un acteur technologique majeur, tout en restant un régime à parti unique sans transition démocratique.",
                    "La Chine est devenue une démocratie multipartite après la mort de Mao Zedong.",
                    "La Chine a perdu son siège permanent au Conseil de sécurité de l'ONU dans les années 2000.",
                    "La Chine a renoncé à toute ambition économique internationale depuis les années 1990."
                ],
                correct: 0,
                correction: "La Chine devient la 2e économie mondiale en 2010 (« usine du monde » puis innovateur technologique), tout en restant dirigée par le Parti communiste sans transition démocratique."
            },
            21: {
                question: "Quelle est la relation cause → conséquence correcte concernant la montée en puissance économique de la Chine ?",
                options: [
                    "Ouverture économique et industrialisation rapide de la Chine → la Chine devient « l'usine du monde » puis un innovateur technologique (IA, 5G, énergie solaire) → son PIB devient le 2e mondial dès 2010, renforçant son poids géopolitique.",
                    "Révolution culturelle de Mao → transition démocratique chinoise → chute du PIB chinois.",
                    "Guerre froide → indépendance de Taïwan → recul économique chinois.",
                    "Adhésion de la Chine à l'Union européenne → stagnation économique → perte du statut de puissance mondiale."
                ],
                correct: 0,
                correction: "L'ouverture économique et l'industrialisation de la Chine en font « l'usine du monde » puis un innovateur technologique, ce qui la propulse au rang de 2e économie mondiale dès 2010 et renforce son influence géopolitique."
            }
        },
        'lib_histoire_6e_3': {
            1: {
                question: "Que désigne la mondialisation contemporaine ?",
                options: [
                    "L'intensification des échanges économiques, culturels, humains et informationnels à l'échelle planétaire, accélérée depuis les années 1980-1990.",
                    "La fermeture progressive des frontières entre tous les pays du monde depuis 1945.",
                    "La disparition totale du commerce international au profit d'économies nationales autarciques.",
                    "L'unification politique de tous les États du monde sous un seul gouvernement mondial."
                ],
                correct: 0,
                correction: "La mondialisation désigne l'intensification des échanges économiques, culturels, humains et informationnels à l'échelle planétaire, accélérée depuis les années 1980-1990 grâce aux transports, communications et finance."
            },
            2: {
                question: "Quelle est la relation cause → conséquence correcte concernant l'essor du commerce mondial depuis 1950 ?",
                options: [
                    "Innovations dans les transports (conteneurisation) et libéralisation des échanges → fragmentation internationale de la production (chaînes de valeur mondiales) → multiplication par environ 30 des échanges commerciaux depuis 1950.",
                    "Crise pétrolière de 1973 → fermeture des frontières commerciales → chute du commerce mondial.",
                    "Décolonisation → disparition des firmes transnationales → recul des échanges internationaux.",
                    "Guerre froide → interdiction du commerce international → autarcie généralisée."
                ],
                correct: 0,
                correction: "La conteneurisation et la libéralisation des échanges permettent la fragmentation internationale de la production, ce qui multiplie par environ 30 les échanges commerciaux mondiaux depuis 1950."
            },
            3: {
                question: "Quel constat le cours établit-il sur les effets de la mondialisation sur les inégalités ?",
                options: [
                    "Elle a permis de sortir des centaines de millions de personnes de la pauvreté absolue (notamment en Asie), mais elle a aussi creusé des inégalités à l'intérieur des pays riches et entre pays.",
                    "Elle a supprimé toutes les inégalités économiques dans le monde depuis 1945.",
                    "Elle n'a eu aucun effet mesurable sur la pauvreté ou les inégalités mondiales.",
                    "Elle a uniquement appauvri les pays asiatiques tout en enrichissant l'Afrique."
                ],
                correct: 0,
                correction: "La mondialisation a sorti des centaines de millions de personnes de la pauvreté absolue (notamment en Chine et en Asie du Sud-Est), tout en creusant des inégalités à l'intérieur des pays riches et entre pays."
            },
            4: {
                question: "Quelle est la relation cause → conséquence correcte concernant les inégalités mondiales de richesse ?",
                options: [
                    "Répartition inégale des bénéfices de la croissance mondiale → concentration du capital et des revenus → selon Oxfam (2023), les 10% les plus riches détiennent environ 76% de la richesse mondiale.",
                    "Redistribution égalitaire des richesses depuis 1990 → disparition de la pauvreté → égalité parfaite en 2023.",
                    "Décolonisation → hausse générale des salaires → réduction totale des inégalités mondiales.",
                    "Crise financière de 2008 → nationalisation de toutes les entreprises → égalité des richesses en 2023."
                ],
                correct: 0,
                correction: "La répartition inégale des bénéfices de la croissance concentre le capital, si bien que selon Oxfam (2023), les 10% les plus riches détiennent environ 76% de la richesse mondiale."
            },
            5: {
                question: "Que désigne le phénomène de « recul démocratique » ou « illibéralisme » observé depuis les années 2010 ?",
                options: [
                    "Une montée des populismes autoritaires et un affaiblissement des normes démocratiques, touchant aussi bien des démocraties établies que des pays en développement.",
                    "Une progression continue et sans exception de la démocratie dans tous les pays du monde depuis 2010.",
                    "La disparition complète des élections libres dans l'ensemble des pays européens.",
                    "Le remplacement de toutes les démocraties occidentales par des régimes communistes."
                ],
                correct: 0,
                correction: "Depuis les années 2010, on observe un recul des normes démocratiques et une montée des populismes autoritaires (« illibéralisme »), touchant des pays en développement comme des démocraties établies."
            },
            6: {
                question: "Quelle est la relation cause → conséquence correcte concernant la montée du populisme depuis les années 2010 ?",
                options: [
                    "Défis identitaires (immigration, multiculturalisme) et diffusion de fausses informations sur les réseaux sociaux → discours populiste opposant « le vrai peuple » aux « élites » → progression de dirigeants populistes dans plusieurs démocraties.",
                    "Fin de la Guerre froide → disparition des réseaux sociaux → recul du populisme dans le monde.",
                    "Accords de Paris sur le climat → renforcement des institutions européennes → disparition des populismes.",
                    "Mondialisation économique → hausse générale du niveau de vie → disparition totale des inégalités."
                ],
                correct: 0,
                correction: "Les défis identitaires et la diffusion de fake news via les réseaux sociaux nourrissent un discours populiste opposant « le vrai peuple » aux « élites », ce qui favorise la progression de dirigeants populistes dans plusieurs pays."
            },
            7: {
                question: "Quel constat le cours fait-il sur les migrations contemporaines et la Belgique ?",
                options: [
                    "La Belgique a signé des accords de main-d'œuvre, notamment avec l'Italie, le Maroc et la Turquie, et les migrations combinent travail, famille, études et protection.",
                    "La Belgique a fermé totalement ses frontières à toute immigration depuis 1945.",
                    "Les migrations contemporaines concernent uniquement des déplacements à l'intérieur d'un même pays.",
                    "La Belgique n'a jamais signé d'accord de main-d'œuvre avec un autre pays."
                ],
                correct: 0,
                correction: "La Belgique signe des accords de main-d'œuvre notamment avec l'Italie, le Maroc et la Turquie ; les migrations contemporaines combinent travail, famille, études, protection et contraintes."
            },
            8: {
                question: "Quelle est la relation cause → conséquence correcte concernant les migrations contemporaines ?",
                options: [
                    "Inégalités et conflits dans certaines régions, combinés à des besoins de main-d'œuvre → mobilités encadrées par des accords et politiques des États → diversification sociale et débats sur l'intégration et la citoyenneté.",
                    "Excédent de main-d'œuvre en Europe → interdiction totale de l'immigration → homogénéité sociale accrue.",
                    "Paix mondiale généralisée → disparition des migrations → fermeture des frontières partout.",
                    "Traité de Maastricht → suppression des accords de main-d'œuvre → fin des diasporas."
                ],
                correct: 0,
                correction: "Les inégalités et conflits, combinés aux besoins de main-d'œuvre, produisent des mobilités encadrées par les États, ce qui diversifie les sociétés d'accueil et ouvre des débats sur l'intégration et la citoyenneté."
            },
            9: {
                question: "Qu'est-ce que le Pacte social de 1944 en Belgique ?",
                options: [
                    "Un accord entre partenaires sociaux qui structure la sécurité sociale belge d'après-guerre.",
                    "Un traité international créant l'Union européenne en 1944.",
                    "Une loi interdisant les syndicats en Belgique après la Seconde Guerre mondiale.",
                    "Un accord de paix mettant fin à l'occupation allemande de la Belgique en 1944."
                ],
                correct: 0,
                correction: "Le Pacte social et les institutions de 1944 structurent la sécurité sociale belge, dans le contexte de la reconstruction d'après-guerre."
            },
            10: {
                question: "Quelle est la relation cause → conséquence correcte concernant l'État social belge depuis 1944 ?",
                options: [
                    "Reconstruction d'après-guerre et mobilisations collectives (syndicales, féministes, antiracistes) → extension négociée des protections sociales et des droits → hausse du niveau de vie mais persistance de certaines inégalités.",
                    "Crise de 1929 → suppression de la sécurité sociale → baisse générale du niveau de vie.",
                    "Décolonisation du Congo → disparition des syndicats belges → recul des droits sociaux.",
                    "Traité de Rome de 1957 → fin des mobilisations sociales → égalité parfaite des revenus en Belgique."
                ],
                correct: 0,
                correction: "La reconstruction d'après-guerre et les mobilisations collectives (syndicales, féministes, antiracistes) permettent une extension négociée des droits et protections, avec une hausse du niveau de vie mais des inégalités persistantes."
            },
            11: {
                question: "Lequel de ces événements liés à la mondialisation économique a eu lieu en premier ?",
                options: [
                    "Le traité de Rome créant la CEE (1957)",
                    "Le Sommet de la Terre à Rio (1992)",
                    "La création de l'Organisation mondiale du commerce, OMC (1995)",
                    "La mise en circulation de l'euro (2002)"
                ],
                correct: 0,
                correction: "Le traité de Rome (1957), qui crée la CEE, est antérieur au Sommet de la Terre de Rio (1992), à la création de l'OMC (1995) et à la mise en circulation de l'euro (2002)."
            },
            12: {
                question: "Pour analyser un document économique (ex : rapport d'une organisation internationale) sur la mondialisation, quelle démarche de critique de source est correcte ?",
                options: [
                    "Identifier la nature du document, son auteur et sa date, s'interroger sur son intention, puis confronter ses informations aux connaissances du cours avant de l'utiliser comme preuve.",
                    "Accepter automatiquement les chiffres d'un rapport économique sans vérifier qui l'a publié ni dans quel but.",
                    "Rejeter systématiquement tout document produit par une organisation internationale car il serait nécessairement faux.",
                    "Considérer qu'un document statistique n'a besoin d'aucune critique car les chiffres parlent toujours d'eux-mêmes."
                ],
                correct: 0,
                correction: "La critique de source exige d'identifier nature, auteur, date, intention, informations utiles et silences d'un document, puis de le confronter aux connaissances, plutôt que de l'accepter ou de le rejeter sans analyse."
            },
            13: {
                question: "Laquelle de ces problématiques est correctement formulée pour un dossier sur la mondialisation depuis 1945 ?",
                options: [
                    "Dans quelle mesure la mondialisation a-t-elle à la fois rapproché les économies du monde et creusé de nouvelles inégalités ?",
                    "Quelle est la couleur du drapeau de l'Organisation mondiale du commerce ?",
                    "Combien de kilomètres sépare Bruxelles de New York ?",
                    "Quel est le nom du président actuel des États-Unis ?"
                ],
                correct: 0,
                correction: "Une bonne problématique transforme le thème en question ouverte et argumentable, reliant plusieurs aspects du sujet (ici interdépendance économique et inégalités), plutôt que d'appeler une simple réponse factuelle isolée."
            }
        },
        'lib_histoire_6e_4': {
            1: {
                question: "Quelle est la différence essentielle entre mémoire et histoire, selon le cours ?",
                options: [
                    "La mémoire est vécue, transmise et sélective, tandis que l'histoire construit une connaissance critique à partir de traces.",
                    "La mémoire et l'histoire désignent exactement la même démarche scientifique.",
                    "L'histoire est toujours subjective alors que la mémoire est parfaitement objective.",
                    "La mémoire est réservée aux historiens tandis que l'histoire appartient à tous les citoyens."
                ],
                correct: 0,
                correction: "La mémoire est vécue, transmise et sélective, alors que l'histoire construit une connaissance critique à partir de traces (sources, documents)."
            },
            2: {
                question: "Quelle est la relation cause → conséquence correcte concernant les usages du passé (mémoire, monuments, commémorations) ?",
                options: [
                    "Traumatismes collectifs et demandes de reconnaissance → institutionnalisation de la mémoire (monuments, musées, commémorations) et débats publics → transmission du passé mais aussi conflits sur le récit national.",
                    "Disparition des témoins → oubli total et immédiat des événements → absence de commémorations.",
                    "Unification des mémoires nationales → disparition des musées → fin des débats historiques.",
                    "Fin de la Seconde Guerre mondiale → interdiction des commémorations → absence de traces historiques."
                ],
                correct: 0,
                correction: "Les traumatismes collectifs et les demandes de reconnaissance mènent à l'institutionnalisation de la mémoire (monuments, musées, commémorations), qui transmet le passé tout en suscitant des conflits sur le récit national."
            },
            3: {
                question: "Que désigne l'expression « Moyen-Orient » dans le contexte des conflits géopolitiques contemporains ?",
                options: [
                    "Une région du sud-ouest de l'Asie (incluant notamment Israël, la Palestine, la Syrie, l'Irak et la péninsule arabique) marquée par des conflits territoriaux, religieux et pétroliers.",
                    "Une région d'Europe centrale ayant connu la partition de la Yougoslavie dans les années 1990.",
                    "Une zone d'Amérique latine où se sont déroulées les principales guerres civiles du XXe siècle.",
                    "Une région d'Afrique australe touchée par la décolonisation dans les années 1960."
                ],
                correct: 0,
                correction: "Le Moyen-Orient est une région du sud-ouest de l'Asie (Israël, Palestine, Syrie, Irak, péninsule arabique...) marquée par des conflits territoriaux, religieux et liés aux ressources pétrolières."
            },
            4: {
                question: "Que désigne la région des « Balkans », évoquée à propos des conflits des années 1990 ?",
                options: [
                    "Une région du sud-est de l'Europe (ex-Yougoslavie notamment) qui a connu des guerres marquées par l'éclatement d'un État multinational et des nationalismes exacerbés (Bosnie 1992-1995, Kosovo 1999).",
                    "Une région du Moyen-Orient où s'est déroulée la guerre du Golfe en 1991.",
                    "Une région d'Asie du Sud-Est ayant connu la décolonisation française dans les années 1950.",
                    "Une région d'Afrique du Nord touchée par le printemps arabe en 2011."
                ],
                correct: 0,
                correction: "Les Balkans (ex-Yougoslavie) ont connu dans les années 1990 des guerres liées à l'éclatement étatique et aux nationalismes, notamment en Bosnie (1992-1995) et au Kosovo (1999)."
            },
            5: {
                question: "Que désigne le terme « terrorisme », tel qu'utilisé dans le cours à propos des conflits contemporains ?",
                options: [
                    "L'usage de la violence par des groupes non étatiques contre des populations civiles ou symboliques pour créer la peur et atteindre des objectifs politiques ou idéologiques (ex : attentats d'Al-Qaïda du 11 septembre 2001).",
                    "Un conflit armé opposant officiellement deux États reconnus par l'ONU.",
                    "Une politique économique de sanctions commerciales entre deux pays.",
                    "Une alliance militaire défensive entre plusieurs États démocratiques."
                ],
                correct: 0,
                correction: "Le terrorisme désigne l'usage de la violence par des acteurs non étatiques contre des cibles civiles ou symboliques pour créer la peur et servir des objectifs politiques, comme les attentats du 11 septembre 2001."
            },
            6: {
                question: "Que désignent les « interventions internationales », telles qu'évoquées dans le cadre de la lutte contre le terrorisme après 2001 ?",
                options: [
                    "Des actions militaires ou diplomatiques menées par un ou plusieurs États ou par des organisations internationales sur le territoire d'un autre État, comme l'intervention américaine en Afghanistan dès octobre 2001.",
                    "Des accords commerciaux bilatéraux entre deux États voisins.",
                    "Des élections organisées uniquement à l'intérieur d'un seul pays sans acteur extérieur.",
                    "Des réformes constitutionnelles décidées uniquement par le parlement national."
                ],
                correct: 0,
                correction: "Les interventions internationales sont des actions militaires ou diplomatiques menées par des États ou organisations internationales sur le territoire d'un autre État, comme l'intervention américaine en Afghanistan dès octobre 2001."
            },
            7: {
                question: "Que désignent les « enjeux de mémoire » liés aux conflits contemporains ?",
                options: [
                    "Les débats et tensions autour de la manière de se souvenir, commémorer ou reconnaître officiellement des événements violents du passé (guerres, génocides, attentats).",
                    "Les techniques de mémorisation utilisées par les historiens pour apprendre les dates par cœur.",
                    "Les accords économiques signés entre anciens pays coloniaux et colonisés.",
                    "Les lois qui interdisent totalement de commémorer tout événement historique."
                ],
                correct: 0,
                correction: "Les enjeux de mémoire désignent les débats sur la façon de se souvenir et de commémorer des événements violents du passé, sachant que plusieurs mémoires peuvent coexister ou s'opposer."
            },
            8: {
                question: "Quelle est la relation cause → conséquence correcte concernant les attentats du 11 septembre 2001 et leurs suites ?",
                options: [
                    "Attentats terroristes d'Al-Qaïda (11 septembre 2001) → interventions militaires en Afghanistan (2001) puis en Irak (2003) et renforcement des politiques antiterroristes → tensions durables entre sécurité collective et libertés individuelles.",
                    "Guerre du Golfe de 1991 → attentats du 11 septembre 2001 → dissolution immédiate d'Al-Qaïda.",
                    "Chute de l'URSS en 1991 → attentats du 11 septembre → alliance militaire USA-Taliban.",
                    "Invasion de l'Irak en 2003 → attentats du 11 septembre 2001 → retrait américain d'Afghanistan en 2001."
                ],
                correct: 0,
                correction: "Les attentats du 11 septembre 2001 entraînent les interventions en Afghanistan (2001) puis en Irak (2003) et un renforcement des mesures antiterroristes, créant une tension durable entre protection collective et libertés démocratiques."
            },
            9: {
                question: "Quelle est la relation cause → conséquence correcte concernant la montée en puissance de la Chine sur le plan géopolitique ?",
                options: [
                    "Ouverture économique et industrialisation de la Chine → développement du rôle d'« usine du monde », innovation technologique et lancement des Routes de la soie → la Chine devient un acteur géopolitique majeur, avec des tensions autour de Taïwan et de la mer de Chine méridionale.",
                    "Révolution culturelle de Mao → adhésion de la Chine à l'OTAN → recul économique chinois.",
                    "Guerre froide → indépendance du Tibet → disparition du Parti communiste chinois.",
                    "Adhésion de la Chine à l'euro → stagnation du PIB chinois → perte d'influence internationale."
                ],
                correct: 0,
                correction: "L'ouverture économique de la Chine en fait l'« usine du monde » puis un innovateur technologique, avec le lancement des Routes de la soie : elle devient un acteur géopolitique majeur, avec des tensions sur Taïwan et la mer de Chine méridionale."
            },
            10: {
                question: "Lequel de ces événements liés au terrorisme international a eu lieu en premier ?",
                options: [
                    "Les attentats du 11 septembre 2001 aux États-Unis",
                    "La proclamation de l'État islamique (Daesh) en 2014",
                    "Les attentats de Paris au Bataclan en 2015",
                    "La mort d'Abou Bakr al-Baghdadi en 2019"
                ],
                correct: 0,
                correction: "Les attentats du 11 septembre 2001 précèdent la proclamation de Daesh (2014), les attentats de Paris (2015) et la mort d'al-Baghdadi (2019)."
            },
            11: {
                question: "Pour analyser un discours politique prononcé après les attentats du 11 septembre 2001, quelle démarche critique est correcte ?",
                options: [
                    "Identifier l'auteur, la date et le contexte du discours, s'interroger sur son intention (mobiliser, justifier une action), puis le confronter aux faits connus par ailleurs.",
                    "Considérer que tout discours officiel est automatiquement neutre et objectif.",
                    "Ignorer qui a prononcé le discours car seule la date de publication compte.",
                    "Rejeter systématiquement toute source politique car elle ne contiendrait jamais d'information utile."
                ],
                correct: 0,
                correction: "La critique d'un discours politique demande d'identifier auteur, date, contexte et intention, puis de confronter son contenu aux faits connus, plutôt que de l'accepter ou de le rejeter sans analyse."
            },
            12: {
                question: "Lequel de ces événements liés à la Chine contemporaine a eu lieu en premier ?",
                options: [
                    "La rétrocession de Hong Kong à la Chine par le Royaume-Uni (1997)",
                    "La Chine devient la deuxième économie mondiale (2010)",
                    "Xi Jinping devient dirigeant du Parti communiste chinois (2013)",
                    "L'adoption de la loi sur la sécurité nationale à Hong Kong (2020)"
                ],
                correct: 0,
                correction: "La rétrocession de Hong Kong par le Royaume-Uni à la Chine (1997) précède le moment où la Chine devient la 2e économie mondiale (2010), l'arrivée de Xi Jinping au pouvoir (2013) et la loi sur la sécurité nationale à Hong Kong (2020)."
            },
            13: {
                question: "Pour analyser une source officielle chinoise (communiqué du gouvernement) sur l'économie du pays, quelle démarche critique est correcte ?",
                options: [
                    "Repérer qu'il s'agit d'une source officielle qui peut valoriser les réussites et minimiser les difficultés, puis croiser ses informations avec des sources indépendantes et les connaissances du cours.",
                    "Considérer que toute statistique officielle est automatiquement fausse et ne mérite aucune analyse.",
                    "Accepter sans vérification tous les chiffres avancés par un gouvernement, quel qu'il soit.",
                    "Ignorer la nature officielle du document car seule sa longueur importerait pour l'évaluer."
                ],
                correct: 0,
                correction: "Une source officielle peut valoriser les réussites et minimiser les difficultés : il faut donc croiser ses informations avec des sources indépendantes et les connaissances du cours avant de l'utiliser."
            }
        },
        'lib_histoire_6e_5': {
            1: {
                question: "Comment le cours caractérise-t-il les réponses politiques et sociales face à l'urgence climatique ?",
                options: [
                    "Des réponses se développent à plusieurs échelles (internationale, européenne, nationale, individuelle) mais restent souvent insuffisantes par rapport aux objectifs climatiques fixés.",
                    "Toutes les réponses politiques mises en place depuis 1988 ont déjà permis d'atteindre les objectifs de l'Accord de Paris.",
                    "Seuls les individus agissent contre le changement climatique, sans aucune politique nationale ou internationale.",
                    "Les entreprises sont les seules actrices efficaces de la lutte contre le changement climatique."
                ],
                correct: 0,
                correction: "Face à l'urgence climatique, des réponses multiples se développent à différentes échelles (international, UE, national, entreprises, individus), mais elles restent souvent insuffisantes par rapport aux objectifs fixés."
            },
            2: {
                question: "Quelle est la relation cause → conséquence correcte concernant les réponses politiques face au changement climatique ?",
                options: [
                    "Prise de conscience de l'urgence climatique et pressions citoyennes (Fridays for Future) → adoption d'accords internationaux (Accord de Paris) et de politiques européennes (Green Deal) → engagements souvent non contraignants, alors que les émissions mondiales continuent globalement d'augmenter.",
                    "Accord de Paris de 2015 → suppression immédiate des énergies fossiles → fin du réchauffement climatique en 2020.",
                    "Création du GIEC en 1988 → interdiction mondiale des voitures → disparition des Gilets jaunes.",
                    "COP28 à Dubaï → nationalisation de toutes les entreprises pétrolières → neutralité carbone immédiate."
                ],
                correct: 0,
                correction: "La prise de conscience climatique et les mobilisations citoyennes mènent à des accords internationaux (Accord de Paris) et des politiques comme le Green Deal européen, mais ces engagements restent souvent non contraignants."
            },
            3: {
                question: "Que désignent les « émancipations » dans le contexte des sociétés depuis 1945 ?",
                options: [
                    "Les processus par lesquels des groupes (femmes, jeunes, minorités...) acquièrent davantage de droits, d'autonomie et de reconnaissance sociale.",
                    "Les traités économiques signés entre pays européens depuis 1957.",
                    "Les politiques de restriction des libertés individuelles mises en place après 1945.",
                    "Les accords militaires entre les États-Unis et l'URSS pendant la Guerre froide."
                ],
                correct: 0,
                correction: "Les émancipations désignent les processus par lesquels des groupes sociaux (femmes, jeunes, minorités) obtiennent davantage de droits, d'autonomie et de reconnaissance depuis 1945."
            },
            4: {
                question: "Que désignent les « féminismes », comme mouvements sociaux depuis 1945 ?",
                options: [
                    "Des mouvements sociaux et intellectuels revendiquant l'égalité des droits entre femmes et hommes et luttant contre les discriminations liées au genre.",
                    "Des partis politiques uniquement actifs dans les pays communistes pendant la Guerre froide.",
                    "Des organisations internationales chargées de réguler le commerce mondial.",
                    "Des mouvements exclusivement religieux nés au Moyen-Orient au XXe siècle."
                ],
                correct: 0,
                correction: "Les féminismes sont des mouvements sociaux et intellectuels qui revendiquent l'égalité des droits entre femmes et hommes et luttent contre les discriminations de genre."
            },
            5: {
                question: "Dans le contexte des transformations sociales depuis 1945, que désigne l'étude des « jeunesses » comme catégorie sociale ?",
                options: [
                    "L'analyse de la jeunesse comme groupe social ayant ses propres cultures, mobilisations et modes de vie, souvent moteur de contestations et de changements sociaux.",
                    "Une catégorie administrative désignant uniquement les enfants de moins de 10 ans.",
                    "Un terme réservé aux jeunes travailleurs des usines du XIXe siècle.",
                    "Une notion purement biologique sans dimension sociale ou historique."
                ],
                correct: 0,
                correction: "Étudier les « jeunesses » depuis 1945 consiste à analyser la jeunesse comme groupe social ayant ses propres cultures et mobilisations, souvent moteur de changements sociaux (ex : mouvements étudiants, mobilisations climatiques)."
            },
            6: {
                question: "Quel rôle les médias jouent-ils dans les transformations sociales depuis 1945, selon le cours ?",
                options: [
                    "Ils diffusent l'information et les idées à grande échelle, contribuant à la fois à l'émancipation des sociétés et, avec les réseaux sociaux, à la diffusion de fausses informations (fake news).",
                    "Ils n'ont eu aucune influence sur les sociétés depuis 1945.",
                    "Ils sont exclusivement contrôlés par les Nations Unies depuis 1945.",
                    "Ils ont disparu progressivement avec l'apparition d'Internet."
                ],
                correct: 0,
                correction: "Les médias diffusent l'information et les idées à grande échelle : ils favorisent l'émancipation des sociétés mais, avec les réseaux sociaux, amplifient aussi la diffusion de fausses informations (fake news)."
            },
            7: {
                question: "Laquelle de ces situations illustre une résistance sociale face à une transformation politique, selon le cours ?",
                options: [
                    "Le mouvement des Gilets jaunes en France, né en réaction à des mesures liées à la transition écologique (comme la taxe carbone).",
                    "La création du Parlement européen en 1979.",
                    "La signature du traité de Rome en 1957.",
                    "La chute du mur de Berlin en 1989."
                ],
                correct: 0,
                correction: "Le mouvement des Gilets jaunes en France illustre les résistances politiques et sociales que peuvent susciter certaines mesures de transition climatique, comme la taxe carbone."
            },
            8: {
                question: "Quelle est la relation cause → conséquence correcte concernant le réchauffement climatique ?",
                options: [
                    "Combustion massive d'énergies fossiles depuis la révolution industrielle → augmentation des gaz à effet de serre qui amplifient l'effet de serre → hausse des températures (+1,1°C depuis l'ère préindustrielle), fonte des glaces et événements extrêmes.",
                    "Réduction des émissions de CO2 depuis 1950 → refroidissement climatique → expansion des glaciers polaires.",
                    "Création du GIEC en 1988 → réchauffement climatique → disparition des énergies fossiles.",
                    "Signature de l'Accord de Paris en 2015 → réchauffement climatique → interdiction mondiale du charbon."
                ],
                correct: 0,
                correction: "La combustion massive d'énergies fossiles depuis la révolution industrielle augmente les gaz à effet de serre, amplifiant l'effet de serre et provoquant une hausse des températures (+1,1°C) avec ses conséquences observées."
            },
            9: {
                question: "Quelle est la relation cause → conséquence correcte concernant les mouvements sociaux climatiques (Fridays for Future, Extinction Rebellion) ?",
                options: [
                    "Constat de l'insuffisance des politiques climatiques → mobilisation de mouvements citoyens pour exiger une action plus forte → pression accrue sur les gouvernements, mais résistances sociales et économiques persistantes.",
                    "Signature du Protocole de Kyoto en 1997 → disparition des mouvements climatiques → fin des négociations internationales.",
                    "Green Deal européen → interdiction totale de tout mouvement social → neutralité carbone immédiate.",
                    "COP28 à Dubaï → dissolution du GIEC → arrêt des négociations climatiques mondiales."
                ],
                correct: 0,
                correction: "Face à l'insuffisance des politiques climatiques, des mouvements citoyens (Fridays for Future, Extinction Rebellion) se mobilisent pour exiger une action plus forte, ce qui accroît la pression sur les gouvernements malgré des résistances persistantes."
            },
            10: {
                question: "Lequel de ces événements liés au changement climatique a eu lieu en premier ?",
                options: [
                    "Création du GIEC par l'ONU (1988)",
                    "Sommet de la Terre à Rio (1992)",
                    "Sortie du film « Une Vérité qui Dérange » d'Al Gore (2006)",
                    "Rapport du GIEC annonçant des risques déjà très importants à +1,5°C (2018)"
                ],
                correct: 0,
                correction: "La création du GIEC en 1988 précède le Sommet de la Terre de Rio (1992), la sortie du film d'Al Gore (2006) et le rapport du GIEC de 2018."
            },
            11: {
                question: "Pour analyser un rapport du GIEC comme source sur le changement climatique, quelle démarche critique est correcte ?",
                options: [
                    "Reconnaître qu'il s'agit d'une synthèse scientifique internationale fiable car basée sur un consensus d'experts, tout en restant attentif à la manière dont ses conclusions sont ensuite utilisées politiquement.",
                    "Considérer que tout rapport scientifique est automatiquement faux car il vient d'une organisation internationale.",
                    "Ignorer la nature du document et se fier uniquement à sa longueur pour juger de sa fiabilité.",
                    "Accepter le rapport sans jamais vérifier de qui il émane ni dans quel but il a été rédigé."
                ],
                correct: 0,
                correction: "Le GIEC produit une synthèse scientifique fiable, basée sur un consensus d'experts ; il faut néanmoins rester attentif à l'usage politique qui peut être fait de ses conclusions, sans pour autant rejeter la source elle-même."
            },
            12: {
                question: "Lequel de ces événements liés aux réponses politiques face au changement climatique a eu lieu en premier ?",
                options: [
                    "Protocole de Kyoto (1997)",
                    "Accord de Paris (2015)",
                    "Lancement du Green Deal européen (2019)",
                    "COP28 à Dubaï (2023)"
                ],
                correct: 0,
                correction: "Le Protocole de Kyoto (1997) précède l'Accord de Paris (2015), le lancement du Green Deal européen (2019) et la COP28 de Dubaï (2023)."
            },
            13: {
                question: "Pour analyser un discours d'un dirigeant politique annonçant une mesure climatique, quelle démarche critique est correcte ?",
                options: [
                    "Identifier l'auteur, le contexte politique et l'intention du discours (convaincre, rassurer), puis vérifier si les engagements annoncés sont suivis d'effets concrets.",
                    "Considérer que toute annonce politique se réalise automatiquement telle qu'elle est formulée.",
                    "Ignorer qui prononce le discours car seul le sujet abordé compterait.",
                    "Rejeter systématiquement tout discours politique comme dépourvu de toute information utile."
                ],
                correct: 0,
                correction: "La critique d'un discours politique demande d'identifier auteur, contexte et intention, puis de vérifier si les engagements annoncés se traduisent réellement en actions concrètes."
            }
        },
        'lib_histoire_6e_6': {
            1: {
                question: "Que désigne une « problématique » dans une réponse structurée au CESS ?",
                options: [
                    "Une question directrice qui transforme le thème du sujet en interrogation ouverte, à laquelle toute la réponse doit répondre.",
                    "Une simple liste de dates à mémoriser sans lien entre elles.",
                    "Le titre du document fourni dans le dossier documentaire.",
                    "La conclusion finale de la réponse, formulée avant le développement."
                ],
                correct: 0,
                correction: "Une problématique transforme le thème en question directrice : c'est la question ouverte à laquelle toute la réponse développée doit répondre."
            },
            2: {
                question: "Que signifie « sélectionner des preuves » lors de l'analyse d'un dossier documentaire ?",
                options: [
                    "Choisir, parmi les informations disponibles dans les documents, celles qui sont pertinentes pour répondre à la problématique posée.",
                    "Recopier l'intégralité de tous les documents fournis dans le dossier.",
                    "Ignorer les documents et répondre uniquement avec ses connaissances personnelles.",
                    "Choisir uniquement les informations qui confirment une opinion préétablie, sans esprit critique."
                ],
                correct: 0,
                correction: "Sélectionner des preuves consiste à choisir, dans les documents, les informations pertinentes pour répondre à la problématique, et non à tout recopier ou à ignorer le dossier documentaire."
            },
            3: {
                question: "Que signifie « contextualiser » un document, dans la méthode du dossier documentaire ?",
                options: [
                    "Relier le document aux connaissances utiles du cours (époque, acteurs, enjeux) pour mieux comprendre et interpréter son contenu.",
                    "Traduire littéralement le document dans une autre langue.",
                    "Résumer le document en une seule phrase sans référence au cours.",
                    "Comparer deux documents sans jamais faire appel aux connaissances du cours."
                ],
                correct: 0,
                correction: "Contextualiser un document, c'est le relier aux connaissances utiles du cours (époque, acteurs, enjeux) afin de mieux comprendre et interpréter son contenu."
            },
            4: {
                question: "Que signifie « mettre en relation » des documents ou des faits, dans une réponse structurée ?",
                options: [
                    "Établir des liens explicites entre plusieurs documents, faits ou connaissances (causes, conséquences, comparaisons) plutôt que de les présenter isolément.",
                    "Présenter chaque document séparément sans jamais les comparer ni les relier.",
                    "Ranger les documents par ordre alphabétique de leur auteur.",
                    "Ignorer le contenu des documents pour se concentrer uniquement sur leur date de publication."
                ],
                correct: 0,
                correction: "Mettre en relation, c'est établir des liens explicites (causes, conséquences, comparaisons) entre documents, faits et connaissances, plutôt que de les juxtaposer sans les relier."
            },
            5: {
                question: "Qu'implique une « rédaction structurée » dans une réponse développée au CESS ?",
                options: [
                    "Organiser sa réponse en introduction, développement argumenté (avec preuves et connaissances) et conclusion, plutôt que d'exposer des idées de façon désordonnée.",
                    "Écrire uniquement des phrases courtes sans jamais développer d'arguments.",
                    "Recopier le document sans donner son propre point de vue.",
                    "Répondre uniquement par une liste de mots-clés sans phrases complètes."
                ],
                correct: 0,
                correction: "Une rédaction structurée organise la réponse en introduction, développement argumenté et conclusion, ce qui rend l'argumentation claire et démontrée."
            },
            6: {
                question: "Quelle est la relation cause → conséquence correcte concernant la lecture du verbe de consigne dans une question du CESS ?",
                options: [
                    "Nécessité d'identifier le verbe de consigne (identifier, comparer, expliquer, justifier, critiquer) → adaptation du type de réponse à la question posée → réponse pertinente qui répond réellement à ce qui est demandé.",
                    "Lecture rapide de la consigne → réponse identique quel que soit le verbe → note maximale garantie.",
                    "Absence de consigne au CESS → liberté totale de réponse → correction impossible.",
                    "Consigne longue → réponse obligatoirement courte → perte automatique de points."
                ],
                correct: 0,
                correction: "Identifier correctement le verbe de consigne permet d'adapter le type de réponse attendu, ce qui évite de répondre à côté de la question et fait perdre des points inutilement."
            },
            7: {
                question: "Quelle est la relation cause → conséquence correcte concernant la préparation d'une réponse développée au CESS ?",
                options: [
                    "Besoin de hiérarchiser des informations dispersées (documents + connaissances) → élaboration d'un brouillon puis d'un plan avant la rédaction → réponse démontrée, claire et nuancée, mieux valorisée par les correcteurs.",
                    "Absence de plan → réponse plus originale → meilleure note automatique.",
                    "Rédaction sans brouillon → gain de temps → suppression de la conclusion.",
                    "Structure imposée → interdiction d'utiliser des connaissances personnelles → perte de points."
                ],
                correct: 0,
                correction: "Face à la dispersion des informations, faire un brouillon puis un plan avant de rédiger permet d'obtenir une réponse démontrée, claire et nuancée, mieux valorisée par les correcteurs."
            },
            8: {
                question: "Quelle est la relation cause → conséquence correcte concernant les erreurs fréquentes au CESS ?",
                options: [
                    "Ignorer les consignes ou recopier intégralement un document → absence d'explication personnelle et de mobilisation des connaissances du cours → perte de points importante, même si le contenu recopié est correct.",
                    "Citer un document brièvement et l'expliquer → invalidation totale de la réponse.",
                    "Rédiger une courte conclusion → disqualification automatique de la copie.",
                    "Confondre deux dates proches → amélioration de la note finale."
                ],
                correct: 0,
                correction: "Recopier un document sans l'expliquer ou ignorer une partie de la consigne prive la réponse de connaissances personnelles, ce qui fait perdre des points même si les extraits recopiés sont exacts."
            },
            9: {
                question: "Quelle différence essentielle distingue la critique externe de la critique interne d'un document, selon la méthode du CESS ?",
                options: [
                    "La critique externe identifie la nature, l'auteur, la date et le destinataire du document, tandis que la critique interne examine son intention, ses arguments, son vocabulaire et ses silences.",
                    "La critique externe et la critique interne désignent exactement la même démarche d'analyse.",
                    "La critique interne s'occupe uniquement de la date de publication du document.",
                    "La critique externe consiste à juger si le contenu du document est vrai ou faux."
                ],
                correct: 0,
                correction: "La critique externe identifie nature, auteur, date, lieu et destinataire d'un document ; la critique interne examine son intention, ses arguments, son vocabulaire et ses silences."
            },
            10: {
                question: "Parmi ces grandes dates que tout candidat au CESS doit maîtriser, laquelle est la plus ancienne ?",
                options: [
                    "1789 (Révolution française)",
                    "1870-1871 (Guerre franco-prussienne)",
                    "1914-1918 (Première Guerre mondiale)",
                    "1933 (arrivée d'Hitler au pouvoir)"
                ],
                correct: 0,
                correction: "Parmi les grandes dates à maîtriser pour le CESS, 1789 (Révolution française) est la plus ancienne, suivie de 1870-1871, puis 1914-1918, puis 1933."
            },
            11: {
                question: "Quelle limite faut-il garder à l'esprit lorsqu'on utilise un document (source) comme preuve dans une réponse au CESS ?",
                options: [
                    "Une source fournit un point de vue situé (lié à son auteur, son époque et son intention) et ne représente jamais toute la réalité à elle seule.",
                    "Une source est toujours parfaitement neutre et représente l'entièreté de la réalité historique.",
                    "Une source n'a de valeur que si elle a été rédigée par un historien professionnel.",
                    "Une source perd toute valeur si elle exprime un point de vue subjectif."
                ],
                correct: 0,
                correction: "Une source fournit toujours un point de vue situé, jamais toute la réalité : il faut la confronter aux connaissances avant de l'utiliser comme preuve."
            },
            12: {
                question: "Parmi ces grandes dates de repère pour le CESS, laquelle est la plus ancienne ?",
                options: [
                    "1939-1945 (Seconde Guerre mondiale)",
                    "1947 (début de la Guerre froide)",
                    "1989 (chute du mur de Berlin)",
                    "1991 (fin de l'URSS)"
                ],
                correct: 0,
                correction: "Parmi ces repères, 1939-1945 (Seconde Guerre mondiale) est antérieur à 1947 (début de la Guerre froide), à 1989 (chute du mur de Berlin) et à 1991 (fin de l'URSS)."
            },
            13: {
                question: "Pourquoi est-il essentiel de citer brièvement un document plutôt que de le recopier intégralement dans une réponse développée ?",
                options: [
                    "Parce que les correcteurs évaluent la compréhension et l'explication du document par le candidat, et non sa capacité à le recopier.",
                    "Parce que la longueur des citations est le seul critère de notation au CESS.",
                    "Parce qu'il serait interdit par la loi de citer un document historique.",
                    "Parce qu'un document recopié intégralement obtiendrait automatiquement la meilleure note."
                ],
                correct: 0,
                correction: "Il faut citer de courts extraits entre guillemets et expliquer leur sens, car les correcteurs évaluent la compréhension du document, pas la capacité à le recopier intégralement."
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
