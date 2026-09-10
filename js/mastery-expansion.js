/* =========================================================
   APPROFONDISSEMENT GLOBAL — MATHS, GÉOGRAPHIE, BIOLOGIE
   Ajoute des repères de compréhension et porte chaque chapitre
   à 12 exercices variés, sans supprimer le contenu existant.
   ========================================================= */

(function () {
    'use strict';

    var bioApprofondi = {
        bio4_biodiversite: [
            'La biodiversité se décrit à trois niveaux complémentaires : diversité des écosystèmes, diversité des espèces et diversité génétique au sein d’une espèce. Une espèce regroupe, dans le modèle biologique, des individus capables de se reproduire entre eux et d’avoir une descendance fertile. Ce critère a des limites pour les fossiles et les organismes asexués.',
            'La classification phylogénétique cherche des caractères dérivés partagés. Plus deux espèces partagent un ancêtre commun récent, plus leur parenté est étroite. Un arbre ne classe donc pas les êtres vivants du “moins évolué” au “plus évolué” : toutes les espèces actuelles ont une histoire évolutive aussi longue.',
            'Pour exploiter une matrice de caractères, repérer les innovations, former des groupes emboîtés puis placer les ancêtres communs hypothétiques. La ressemblance seule ne suffit pas : l’aile d’un insecte et celle d’un oiseau ont la même fonction, mais des origines différentes.'
        ],
        bio4_reproduction: [
            'Les testicules produisent les spermatozoïdes et la testostérone; les ovaires produisent les ovocytes, les œstrogènes et la progestérone. Au cours d’un cycle, la maturation folliculaire précède généralement l’ovulation. Après celle-ci, le corps jaune sécrète surtout de la progestérone et prépare l’endomètre à une éventuelle nidation.',
            'La fécondation a normalement lieu dans une trompe. Le zygote se divise pendant son trajet vers l’utérus, devient embryon puis s’implante dans l’endomètre. Le placenta permet des échanges entre les circulations maternelle et fœtale sans mélange direct normal des deux sangs.',
            'Pour lire un graphique hormonal, décrire d’abord chaque courbe, repérer l’ovulation et les règles, puis expliquer les relations. Une corrélation temporelle doit être complétée par un mécanisme de régulation hormonale.'
        ],
        bio4_sexualite: [
            'Une contraception vise à éviter une grossesse; seule une méthode barrière comme le préservatif réduit aussi fortement le risque de nombreuses IST. Pilule, implant, anneau et patch utilisent des hormones selon des modalités différentes; le dispositif intra-utérin peut être hormonal ou au cuivre.',
            'Le dépistage est important car une infection peut être asymptomatique. La vaccination prévient certaines infections, notamment liées au papillomavirus et à l’hépatite B. Un antibiotique traite certaines infections bactériennes, jamais une infection virale.',
            'Le consentement doit être libre, éclairé, spécifique, réversible et exprimé par une personne en capacité de décider. En situation réelle, une information médicale personnalisée doit venir d’un professionnel de santé ou d’un centre de planning familial.'
        ],
        bio4_division: [
            'Le cycle cellulaire comprend l’interphase, durant laquelle la cellule croît et réplique son ADN, puis la division. Après réplication, un chromosome possède deux chromatides sœurs reliées au centromère. La quantité d’ADN double, mais le nombre de chromosomes ne double pas tant que les chromatides restent réunies.',
            'La mitose produit deux cellules filles génétiquement proches et conserve le nombre de chromosomes. La méiose enchaîne deux divisions après une seule réplication : elle réduit la ploïdie et produit quatre cellules haploïdes. Crossing-over et répartition aléatoire des chromosomes homologues créent de la diversité.',
            'Dans un exercice, suivre séparément nombre de chromosomes, nombre de chromatides et quantité d’ADN. Dessiner une paire de chromosomes homologues avec des couleurs distinctes évite de confondre homologues et chromatides sœurs.'
        ],
        bio4_genetique: [
            'L’ADN est organisé en chromosomes et un gène correspond à une séquence contribuant à un produit fonctionnel. Les allèles sont des versions d’un même gène. Le génotype décrit les allèles possédés; le phénotype observable résulte du génotype, de l’environnement et de leurs interactions.',
            'Un individu diploïde possède généralement deux allèles d’un gène autosomique, un hérité de chaque parent. Dominant ne signifie ni fréquent, ni avantageux, ni “plus fort” : cela décrit seulement le phénotype d’un hétérozygote dans un modèle donné.',
            'Pour analyser un arbre familial, proposer un mode de transmission, traduire chaque phénotype en génotypes possibles, puis vérifier tous les croisements. Une seule famille peut être insuffisante pour conclure avec certitude.'
        ],
        bio4_nerveux: [
            'Un neurone reçoit, intègre et transmet de l’information. Le message est électrique le long de la membrane et généralement chimique au niveau d’une synapse. Un neurotransmetteur libéré par la cellule présynaptique se fixe sur des récepteurs de la cellule postsynaptique.',
            'Dans un arc réflexe, un récepteur détecte le stimulus, un neurone sensitif conduit le message vers la moelle épinière, un centre nerveux l’intègre et un neurone moteur commande l’effecteur. Le cerveau reçoit aussi l’information, mais la réponse réflexe peut commencer avant la perception consciente.',
            'La vitesse de réaction dépend du trajet, des synapses, de l’attention et de l’état physiologique. Pour interpréter une expérience, distinguer temps de réaction, vitesse du message et précision de la mesure.'
        ],
        bio4_hormones: [
            'Une glande endocrine libère une hormone dans le sang. Seules les cellules possédant le récepteur adapté répondent au signal. L’action hormonale est souvent plus lente et durable qu’un message nerveux, même si les deux systèmes coopèrent.',
            'Après un repas, l’augmentation de la glycémie stimule notamment l’insuline, qui favorise l’entrée et le stockage du glucose. À jeun, le glucagon favorise sa remise à disposition. Ce rétrocontrôle négatif ramène la variable vers une zone compatible avec le fonctionnement cellulaire.',
            'Une boucle de régulation complète précise la variable, le capteur, le centre de commande, le signal, les organes effecteurs et la réponse. “L’hormone baisse la glycémie” est insuffisant sans mécanisme.'
        ],
        bio5_adn: [
            'Un nucléotide d’ADN contient un désoxyribose, un phosphate et une base. Les deux brins antiparallèles sont associés par complémentarité : A avec T, C avec G. L’ordre des bases constitue l’information; le squelette sucre-phosphate assure la continuité du brin.',
            'La réplication est semi-conservative : chaque molécule fille conserve un brin ancien et reçoit un brin nouveau. Une hélicase sépare les brins et des ADN polymérases assemblent des nucléotides complémentaires. Des systèmes de correction limitent les erreurs sans les supprimer totalement.',
            'Pour construire un brin complémentaire, respecter simultanément complémentarité et orientation 5’–3’. Chromatine et chromosome désignent le même support à des degrés de condensation différents.'
        ],
        bio5_proteines: [
            'La transcription copie l’information d’un gène en ARN messager. Chez les eucaryotes, l’ARN est maturé avant de quitter le noyau. Au ribosome, la traduction lit les codons de l’ARNm; des ARN de transfert apportent les acides aminés correspondants.',
            'Le code génétique est redondant : plusieurs codons peuvent désigner le même acide aminé. Il est aussi presque universel. Un codon d’initiation fixe le cadre de lecture et un codon stop termine la traduction. La séquence obtenue se replie pour former une protéine fonctionnelle.',
            'Dans un exercice de séquence, identifier le brin fourni, transcrire dans le bon sens, découper en triplets puis utiliser la table du code génétique pour l’ARN, donc avec U et non T.'
        ],
        bio5_mendel: [
            'La première loi de Mendel s’explique par la séparation des deux allèles lors de la formation des gamètes. Pour un croisement Aa × Aa avec dominance complète, les génotypes attendus sont 1 AA : 2 Aa : 1 aa et les phénotypes 3 dominants : 1 récessif.',
            'Un test-cross croise un individu au phénotype dominant avec un homozygote récessif afin d’inférer son génotype. Deux gènes indépendants peuvent être étudiés par produit des probabilités; des gènes liés nécessitent un modèle tenant compte de leur position chromosomique.',
            'Toujours définir les symboles, écrire les génotypes parentaux, déterminer les gamètes, construire l’échiquier et distinguer probabilité théorique et fréquence réellement observée sur un petit effectif.'
        ],
        bio5_mutations: [
            'Une substitution remplace une base; une insertion ou une délétion ajoute ou retire des bases. Dans une séquence codante, l’effet peut être silencieux, faux-sens, non-sens ou provoquer un décalage du cadre de lecture. L’effet dépend donc davantage du contexte que du simple nombre de bases modifiées.',
            'Une mutation germinale peut être transmise; une mutation somatique reste dans une lignée de cellules de l’individu. Le cancer résulte d’une accumulation de modifications affectant notamment prolifération, réparation de l’ADN et mort cellulaire.',
            'Comparer une séquence témoin et une séquence mutée exige de localiser la différence, déterminer son type, traduire si nécessaire, puis relier prudemment le changement moléculaire au phénotype.'
        ],
        bio5_metabolisme: [
            'Une enzyme abaisse l’énergie d’activation sans modifier le bilan de la réaction. Son site actif reconnaît certains substrats et facilite leur transformation. L’enzyme est régénérée, mais son activité peut être modulée par concentration, température, pH, inhibiteurs ou activateurs.',
            'La vitesse augmente avec le substrat jusqu’à saturation des sites actifs. Une température excessive ou un pH extrême peut modifier la structure de la protéine et réduire son activité. L’ATP couple réactions libérant de l’énergie et processus consommateurs comme synthèse, transport actif ou mouvement.',
            'Sur un graphique expérimental, identifier variables indépendante et dépendante, comparer au témoin, décrire la tendance, proposer un mécanisme et ne pas extrapoler au-delà des valeurs mesurées.'
        ],
        bio5_immunite: [
            'Peau, muqueuses et sécrétions constituent des barrières. Si elles sont franchies, inflammation et phagocytose offrent une réponse innée rapide. L’immunité adaptative repose sur la sélection de lymphocytes reconnaissant spécifiquement un antigène.',
            'Les lymphocytes B peuvent produire des plasmocytes sécréteurs d’anticorps; les lymphocytes T auxiliaires coordonnent la réponse et les T cytotoxiques détruisent certaines cellules infectées. Des cellules mémoire rendent une réponse ultérieure plus rapide et intense.',
            'Un vaccin présente un antigène ou une information permettant de le produire sans provoquer la maladie ciblée dans les conditions normales d’utilisation. Il prépare la mémoire; il ne remplace pas un traitement d’une infection déjà installée.'
        ],
        bio5_microbes: [
            'Une bactérie est une cellule procaryote capable de se multiplier seule dans un milieu favorable. Un virus contient un génome dans une capside et dépend d’une cellule hôte. Les champignons microscopiques sont eucaryotes. Beaucoup de microorganismes participent aux microbiotes, fermentations et cycles de matière.',
            'La chaîne infectieuse comprend agent, réservoir, porte de sortie, transmission, porte d’entrée et hôte sensible. Une mesure de prévention est d’autant plus pertinente qu’elle coupe un maillon identifié : hygiène, ventilation, vaccination, préservatif ou isolement selon la voie.',
            'L’usage inutile ou incorrect d’antibiotiques sélectionne les bactéries résistantes déjà présentes; il ne “rend” pas directement le patient résistant. Culture, antibiogramme et surveillance guident une utilisation raisonnée.'
        ],
        bio6_evolution: [
            'Une population contient des variations dues notamment aux mutations et à la recombinaison. Si une variation héréditaire modifie le succès reproducteur dans un environnement, sa fréquence peut changer par sélection naturelle. Les individus ne développent pas un caractère parce qu’ils en ont besoin.',
            'Fossiles, anatomie comparée, biogéographie, embryologie et séquences moléculaires fournissent des preuves convergentes de l’évolution. Une homologie traduit une origine commune, même lorsque les fonctions actuelles diffèrent.',
            'Une adaptation est un caractère héritable devenu fréquent parce qu’il a augmenté le succès reproducteur dans un contexte passé. Elle n’est ni parfaite ni définitivement avantageuse : le milieu et les compromis évolutifs comptent.'
        ],
        bio6_population: [
            'La fréquence allélique mesure la proportion d’un allèle dans le pool génétique. Mutation, sélection, dérive génétique et flux génique la modifient. La dérive est un changement aléatoire particulièrement marqué dans les petites populations, par exemple après un goulot d’étranglement.',
            'Le flux génique tend à rapprocher les populations en échangeant des allèles; la sélection divergente et l’isolement peuvent au contraire accentuer les différences. La spéciation suppose l’installation d’un isolement reproductif durable.',
            'Dans un modèle de Hardy-Weinberg, p + q = 1 et p² + 2pq + q² = 1 sous des hypothèses strictes. L’écart entre observation et modèle signale qu’au moins une condition mérite examen, sans identifier seul la cause.'
        ],
        bio6_ecologie: [
            'La variation d’effectif dépend des naissances, décès, immigrations et émigrations. Une croissance exponentielle suppose un taux constant sans limitation; la croissance logistique ralentit à l’approche d’une capacité limite dépendante des ressources et du milieu.',
            'Compétition, prédation, parasitisme et mutualisme influencent les populations. Certains facteurs dépendent de la densité, comme la transmission de nombreuses infections; d’autres, comme une tempête, peuvent agir indépendamment de celle-ci.',
            'Lire une courbe exige de nommer axes et unités, repérer phases et ruptures, quantifier des variations puis relier chaque tendance à une hypothèse testable. Une coïncidence entre deux courbes ne démontre pas seule une causalité.'
        ],
        bio6_cycles: [
            'Dans le cycle du carbone, photosynthèse, respiration, décomposition, dissolution océanique, sédimentation et combustion relient les réservoirs. Les combustibles fossiles transfèrent rapidement vers l’atmosphère du carbone stocké sur de très longues durées.',
            'L’azote atmosphérique doit être fixé en formes assimilables. Bactéries fixatrices, nitrifiantes et dénitrifiantes assurent des transformations majeures; producteurs, consommateurs et décomposeurs déplacent l’azote dans la biosphère. Un excès d’engrais favorise eutrophisation et pollution des eaux.',
            'Le cycle de l’eau associe évaporation, transpiration, condensation, précipitation, infiltration et ruissellement. Un schéma rigoureux distingue réservoirs, flux, changements d’état, temps de résidence et perturbations humaines.'
        ],
        bio6_impacts: [
            'Les principales pressions sur la biodiversité sont changement d’usage des terres et des mers, surexploitation, changement climatique, pollutions et espèces exotiques envahissantes. Elles interagissent souvent et agissent du gène à l’écosystème.',
            'La conservation peut protéger des habitats, reconnecter des fragments, réglementer les prélèvements, restaurer des processus ou conserver du matériel génétique. Une aire protégée n’est efficace que si objectifs, moyens, continuités écologiques et populations locales sont pris en compte.',
            'Évaluer une solution suppose des indicateurs avant/après, un site témoin si possible, une durée adaptée, les coûts, les effets indirects et l’équité entre acteurs. Une action visible n’est pas nécessairement la plus efficace.'
        ],
        bio6_biotech: [
            'La PCR amplifie une région ciblée par cycles de dénaturation, fixation d’amorces et élongation. Le séquençage détermine l’ordre des nucléotides. Ces techniques servent au diagnostic, à la recherche, à la médecine légale et à l’étude de la biodiversité.',
            'Un OGM possède un génome modifié par intervention technique. L’édition génomique peut cibler une séquence précise; la thérapie génique vise à ajouter, corriger ou moduler une fonction dans des cellules. Efficacité, effets hors cible, transmission germinale et accès équitable doivent être distingués.',
            'Une analyse bioéthique sépare les faits établis, les incertitudes, les bénéfices, les risques, les personnes concernées et les valeurs en conflit. Dire qu’une technique est possible ne suffit pas à dire qu’elle est souhaitable.'
        ],
        bio6_sante: [
            'L’homéostasie maintient des variables comme température, glycémie ou pH dans des plages fonctionnelles grâce à des régulations. Les systèmes nerveux, endocrinien, immunitaire, circulatoire, respiratoire, digestif et rénal forment un réseau interdépendant.',
            'L’incidence compte les nouveaux cas pendant une période; la prévalence compte les cas présents à un moment ou sur une période. Un facteur de risque est associé à une probabilité accrue, mais l’association peut être influencée par hasard, biais ou facteur de confusion.',
            'Pour évaluer une étude, examiner échantillon, groupe témoin, durée, mesure de l’exposition et de l’effet, taille de l’association, incertitude et plausibilité du mécanisme. Corrélation et causalité ne sont jamais synonymes.'
        ]
    };

    function sansNumero(titre) {
        return String(titre || '').replace(/^\d+\.\s*/, '');
    }

    function liste(items) {
        return '<ul>' + items.map(function (item) { return '<li>' + item + '</li>'; }).join('') + '</ul>';
    }

    function approfondissementCommun(chapitre, matiere) {
        var notions = chapitre.matieres || [];
        var titre = sansNumero(chapitre.titre);
        var chaine = notions.slice(0, 5).join(' → ');
        var texte;

        if (matiere === 'maths') {
            texte = 'Pour maîtriser <strong>' + titre + '</strong>, relie les objets du chapitre dans une chaîne de raisonnement : <strong>' + chaine + '</strong>. Une solution complète distingue les données, l’inconnue, les conditions d’application, le calcul et la conclusion. Vérifie le domaine de définition, les unités, le signe et l’ordre de grandeur. Une formule doit être comprise comme une relation entre grandeurs : isole d’abord la variable recherchée, puis remplace par les valeurs. Compare enfin, lorsque c’est possible, une lecture graphique, une résolution algébrique et une vérification numérique.';
        } else if (matiere === 'geo') {
            texte = 'L’étude de <strong>' + titre + '</strong> mobilise plusieurs échelles et une chaîne explicative : <strong>' + chaine + '</strong>. Décris d’abord la répartition ou l’évolution avec des valeurs et des lieux précis; explique ensuite les facteurs naturels, économiques, politiques, sociaux et historiques; termine par les conséquences, les acteurs et les réponses possibles. Une carte ou un graphique doit toujours être situé, daté, sourcé et confronté à ses limites. Évite les causalités uniques : un territoire résulte généralement de facteurs qui se combinent.';
        } else {
            texte = 'Pour comprendre <strong>' + titre + '</strong>, relie les niveaux d’organisation et les étapes du mécanisme : <strong>' + chaine + '</strong>. Distingue structure, fonction, transformation et régulation. Dans une expérience, formule une hypothèse, identifie la variable modifiée, la variable mesurée et les facteurs contrôlés, puis compare au témoin. Une conclusion répond à la question avec les données observées; elle ne doit pas dépasser ce que le protocole permet réellement d’affirmer.';
        }

        return '<h4>🔹 Comprendre plutôt que réciter</h4><p>' + texte + '</p>' +
            '<h4>🔹 Démarche de maîtrise</h4>' + liste([
                'Je définis chaque notion avec mes propres mots et un exemple.',
                'Je relie au moins trois notions par une phrase de cause, de conséquence ou de condition.',
                'Je sais exploiter un document, un schéma, un tableau ou un graphique lié au chapitre.',
                'Je justifie chaque étape et je vérifie que ma conclusion répond exactement à la question.'
            ]) +
            '<h4>🔹 Entraînement type CESS</h4><p>Prépare une réponse structurée en trois temps : observation précise, mobilisation du cours, conclusion argumentée. Recommence ensuite avec une donnée modifiée afin de vérifier que tu sais transférer la méthode et pas seulement reproduire un exemple.</p>';
    }

    function enrichirCours(data, matiere) {
        Object.keys(data || {}).forEach(function (annee) {
            (data[annee] || []).forEach(function (chapitre) {
                if (chapitre.cours.indexOf('Comprendre plutôt que réciter') === -1) {
                    chapitre.cours += approfondissementCommun(chapitre, matiere);
                }

                if (matiere === 'bio' && bioApprofondi[chapitre.id] && chapitre.cours.indexOf('Approfondissement scientifique complet') === -1) {
                    var blocs = bioApprofondi[chapitre.id];
                    chapitre.cours += '<h4>🔹 Approfondissement scientifique complet</h4>' +
                        '<p>' + blocs[0] + '</p><p>' + blocs[1] + '</p>' +
                        '<h4>🔹 Méthode et transfert</h4><p>' + blocs[2] + '</p>';
                }
            });
        });
    }

    function melangerOptions(bonne, distracteurs, position) {
        var opts = [bonne];
        distracteurs.forEach(function (d) {
            if (d && opts.indexOf(d) === -1 && opts.length < 4) opts.push(d);
        });
        while (opts.length < 4) opts.push('Aucune justification liée au chapitre');
        var value = opts.shift();
        var correct = position % 4;
        opts.splice(correct, 0, value);
        return { options: opts, correct: correct };
    }

    function construireExercice(chapitre, pool, numero, matiere) {
        var notions = chapitre.matieres || [sansNumero(chapitre.titre)];
        var notion = notions[numero % notions.length];
        var autre = notions[(numero + 1) % notions.length] || notion;
        var horsChapitre = pool.filter(function (n) { return notions.indexOf(n) === -1; });
        var modes = ['Définition', 'Lien logique', 'Méthode', 'Application', 'Erreur à éviter', 'Document', 'Transfert', 'Synthèse'];
        var mode = modes[numero % modes.length];
        var question, bonne, correction;

        if (mode === 'Définition') {
            question = 'Dans « ' + sansNumero(chapitre.titre) + ' », quelle notion faut-il savoir définir précisément ?';
            bonne = notion;
            correction = '« ' + notion + ' » appartient au vocabulaire central du chapitre. Une bonne définition indique sa nature et son rôle, puis ajoute un exemple.';
        } else if (mode === 'Lien logique') {
            question = 'Quel couple de notions doit être mis en relation pour expliquer le chapitre, et pas seulement récité ?';
            bonne = notion + ' ↔ ' + autre;
            correction = 'Le lien entre « ' + notion + ' » et « ' + autre + ' » doit être formulé avec une cause, une conséquence, une condition ou un mécanisme.';
        } else if (mode === 'Méthode') {
            question = matiere === 'maths' ? 'Quelle démarche produit la solution la plus rigoureuse ?' : matiere === 'geo' ? 'Quelle démarche convient pour analyser un document géographique ?' : 'Quelle démarche convient pour analyser une expérience ?';
            bonne = matiere === 'maths' ? 'Données → propriété → calcul → vérification → conclusion' : matiere === 'geo' ? 'Identifier → décrire avec données → expliquer → nuancer' : 'Hypothèse → variables et témoin → résultats → conclusion';
            correction = 'Cette démarche sépare les observations, les connaissances mobilisées et la conclusion, ce qui rend le raisonnement vérifiable.';
        } else if (mode === 'Application') {
            question = 'Dans une situation nouvelle portant sur « ' + sansNumero(chapitre.titre) + ' », quel premier réflexe est le plus utile ?';
            bonne = 'Repérer les données et choisir la notion « ' + notion + ' » si ses conditions sont réunies';
            correction = 'On commence par identifier ce qui est donné et demandé. La notion « ' + notion + ' » n’est mobilisée qu’après vérification de ses conditions.';
        } else if (mode === 'Erreur à éviter') {
            question = 'Quelle pratique faut-il éviter dans une réponse sur « ' + sansNumero(chapitre.titre) + ' » ?';
            bonne = 'Affirmer une conclusion sans donnée ni justification';
            correction = 'Une affirmation correcte mais non justifiée ne démontre pas la maîtrise. Il faut citer une donnée, une propriété ou un mécanisme.';
        } else if (mode === 'Document') {
            question = 'Avant d’interpréter un graphique ou un tableau lié à « ' + sansNumero(chapitre.titre) + ' », que faut-il vérifier ?';
            bonne = 'Le titre, les axes, les unités, la source et la période';
            correction = 'Ces éléments déterminent ce que le document mesure et empêchent des comparaisons trompeuses.';
        } else if (mode === 'Transfert') {
            question = 'Comment vérifier que la notion « ' + notion + ' » est réellement comprise ?';
            bonne = 'L’utiliser dans un exemple différent et justifier chaque étape';
            correction = 'Le transfert à une situation différente distingue la compréhension de la mémorisation mécanique.';
        } else {
            question = 'Quelle structure convient à une réponse de synthèse sur « ' + sansNumero(chapitre.titre) + ' » ?';
            bonne = 'Définir → relier les mécanismes → appuyer par un exemple → conclure';
            correction = 'Cette structure donne une réponse complète, organisée et directement reliée au problème posé.';
        }

        var choix = melangerOptions(bonne, [
            horsChapitre[(numero * 3) % Math.max(1, horsChapitre.length)],
            'Réciter le titre sans expliquer',
            'Choisir une réponse uniquement parce qu’elle paraît familière'
        ], numero + chapitre.id.length);

        return {
            niveau: numero < 6 ? 'Comprendre' : numero < 9 ? 'S’entraîner' : 'Type CESS',
            question: question,
            options: choix.options,
            correct: choix.correct,
            correction: correction
        };
    }

    function enrichirExercices(data, matiere) {
        var pool = [];
        Object.keys(data || {}).forEach(function (annee) {
            (data[annee] || []).forEach(function (chapitre) {
                (chapitre.matieres || []).forEach(function (notion) {
                    if (pool.indexOf(notion) === -1) pool.push(notion);
                });
            });
        });

        Object.keys(data || {}).forEach(function (annee) {
            (data[annee] || []).forEach(function (chapitre) {
                chapitre.exercices = chapitre.exercices || [];
                while (chapitre.exercices.length < 12) {
                    chapitre.exercices.push(construireExercice(chapitre, pool, chapitre.exercices.length, matiere));
                }
            });
        });
    }

    if (typeof CHAPITRES !== 'undefined') {
        enrichirCours(CHAPITRES, 'maths');
        enrichirExercices(CHAPITRES, 'maths');
    }
    if (typeof GEO_CHAPITRES !== 'undefined') {
        enrichirCours(GEO_CHAPITRES, 'geo');
        enrichirExercices(GEO_CHAPITRES, 'geo');
    }
    if (typeof BIO_CHAPITRES !== 'undefined') {
        enrichirCours(BIO_CHAPITRES, 'bio');
        enrichirExercices(BIO_CHAPITRES, 'bio');
    }
})();
