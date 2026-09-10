/* Français — parcours 3e à 6e secondaire, en complément de la bibliothèque. */
(function () {
    if (typeof CESS_LIBRARY_DATA === 'undefined') return;

    var programme = {
        '3e': [
            ['Comprendre un texte', ['idée principale', 'informations explicites', 'inférences', 'vocabulaire en contexte']],
            ['Récit et narration', ['narrateur', 'point de vue', 'schéma narratif', 'temps du récit']],
            ['Grammaire de la phrase', ['classes de mots', 'fonctions', 'proposition', 'accord']],
            ['Conjugaison et valeurs des temps', ['présent', 'imparfait', 'passé simple', 'futur']],
            ['Argumenter simplement', ['thèse', 'argument', 'exemple', 'connecteur logique']],
            ['Écrire et réviser', ['planification', 'paragraphe', 'cohérence', 'orthographe']]
        ],
        '4e': [
            ['Genres littéraires', ['roman', 'théâtre', 'poésie', 'nouvelle']],
            ['Analyse du récit', ['personnage', 'espace', 'temps', 'registre']],
            ['Phrase complexe', ['coordination', 'subordination', 'relative', 'complétive']],
            ['Argumentation et débat', ['opinion', 'justification', 'objection', 'conclusion']],
            ['Médias et information', ['fait', 'opinion', 'source', 'désinformation']],
            ['Produire un texte structuré', ['introduction', 'développement', 'conclusion', 'réécriture']]
        ],
        '5e': [
            ['Lire des textes littéraires', ['mouvement littéraire', 'contexte', 'interprétation', 'citation']],
            ['Poésie et procédés', ['versification', 'figure de style', 'image', 'rythme']],
            ['Théâtre et argumentation', ['scène', 'didascalie', 'conflit', 'double énonciation']],
            ['Écrire pour convaincre', ['thèse', 'arguments', 'contre-argument', 'nuance']],
            ['Synthétiser des documents', ['sélection', 'reformulation', 'comparaison', 'référence']],
            ['Langue et style', ['modalisation', 'connecteurs', 'ponctuation', 'registre']]
        ],
        '6e': [
            ['Dissertation et problématique', ['problématique', 'plan dialectique', 'transition', 'conclusion']],
            ['Analyse littéraire', ['axe de lecture', 'procédé', 'interprétation', 'citation intégrée']],
            ['Écriture argumentative', ['thèse', 'concession', 'réfutation', 'synthèse']],
            ['Oral et présentation', ['voix', 'structure', 'interaction', 'support visuel']],
            ['Culture littéraire francophone', ['genres', 'auteurs', 'courants', 'réception']],
            ['Atelier CESS : dossier et réécriture', ['consigne', 'brouillon', 'autoévaluation', 'version finale']]
        ]
    };

    function safe(value) {
        return String(value || '').replace(/[&<>]/g, function (character) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[character];
        });
    }

    var data = {};
    Object.keys(programme).forEach(function (year) {
        data[year] = programme[year].map(function (item, index) {
            var title = item[0];
            var notions = item[1];
            return {
                id: 'francais_' + year + '_' + (index + 1),
                titre: (index + 1) + '. ' + title,
                desc: 'Notions clés : ' + notions.join(', ') + '.',
                annee: year,
                icone: '✍️',
                color: '#d17b85',
                matieres: notions,
                objectifs: ['Comprendre et analyser avec précision', 'Produire une réponse structurée et justifiée'],
                cours: '<h4>Notions essentielles</h4><p>Ce chapitre développe : <strong>' + safe(title) + '</strong>. Retrouve et définis les notions suivantes : ' + notions.map(safe).join(', ') + '.</p><h4>Lire et analyser</h4><p>Appuie toujours ton interprétation sur un indice précis du texte : une citation courte, un procédé, une formulation ou l’organisation du document.</p><h4>Écrire et réviser</h4><p>Prépare un plan, rédige des paragraphes reliés par des connecteurs, puis relis ton texte en vérifiant le sens, la structure, les accords et la ponctuation.</p><h4>Tâche type CESS</h4><p>Rédige une réponse organisée : annonce ton idée, justifie-la avec deux éléments précis, prends en compte une nuance puis conclus en répondant directement à la consigne.</p>',
                exercices: []
            };
        });
    });

    CESS_LIBRARY_DATA.francais = {
        label: 'Français',
        icon: '✍️',
        color: '#d17b85',
        category: 'Fondamentales',
        status: 'Matière centrale',
        data: data
    };
})();

