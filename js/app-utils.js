/* =========================================================
   CARNET CESS — UTILITAIRES
   Fonctions génériques sans dépendance sur l'affichage :
   sécurité HTML, mélange de tableau, accès aux chapitres.
   ========================================================= */

/* =========================================================
   UTILITAIRES
   ========================================================= */

function escapeHtml(value) {
    if (value === null || value === undefined) {
        return '';
    }

    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function shuffle(array) {
    var copy = Array.isArray(array)
        ? array.slice()
        : [];

    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }

    return copy;
}

function getChapterProgress(id) {
    return Number(
        cessState.progress[id] || 0
    );
}

function allChaps(subject) {
    var subjectData = CESS_SUBJECTS[subject];

    if (!subjectData) {
        return [];
    }

    var data = subjectData.getData();

    if (!data || typeof data !== 'object') {
        return [];
    }

    var result = [];
    var years = Object.keys(data);

    for (var i = 0; i < years.length; i++) {
        var year = years[i];
        var chapters = data[year];

        if (!Array.isArray(chapters)) {
            continue;
        }

        for (var j = 0; j < chapters.length; j++) {
            var chapter = chapters[j];

            if (!chapter || typeof chapter !== 'object') {
                continue;
            }

            var copy = {};

            for (var key in chapter) {
                if (
                    Object.prototype.hasOwnProperty.call(
                        chapter,
                        key
                    )
                ) {
                    copy[key] = chapter[key];
                }
            }

            copy.annee = chapter.annee || year;
            copy.matiere = subject;

            result.push(copy);
        }
    }

    return result;
}

function findChapter(id) {
    var chapters = [];

    Object.keys(CESS_SUBJECTS).forEach(function (subject) {
        chapters = chapters.concat(allChaps(subject));
    });

    for (var i = 0; i < chapters.length; i++) {
        if (
            String(chapters[i].id) ===
            String(id)
        ) {
            return chapters[i];
        }
    }

    return null;
}

/* =========================================================
   DÉCOUPAGE DU COURS EN SECTIONS
   Le champ "cours" d'un chapitre est un bloc HTML avec des
   titres <h4>. Cette fonction le découpe en sections
   {title, body} pour permettre un sommaire cliquable et un
   affichage en accordéon, sans changer les données sources.
   ========================================================= */

function parseCoursSections(cours) {
    if (!cours) return [];
    var html = String(cours), sections = [], stack = [];
    var tags = /<!--[\s\S]*?-->|<\/?([a-z][a-z0-9:-]*)\b(?:"[^"]*"|'[^']*'|[^'">])*>/gi;
    var voidTags = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
    var currentTitle = '', bodyStart = 0, headingStart = -1, match;
    function append(end) {
        var body = html.slice(bodyStart, end).trim();
        if (currentTitle || body) sections.push({title: currentTitle || 'Introduction', body: body});
    }
    while ((match = tags.exec(html))) {
        if (!match[1]) continue;
        var name = match[1].toLowerCase(), closing = /^<\//.test(match[0]);
        if (!closing) {
            if (name === 'h4' && stack.length === 0) {
                append(match.index);
                headingStart = tags.lastIndex;
            }
            if (!voidTags.test(name) && !/\/\s*>$/.test(match[0])) stack.push(name);
        } else {
            if (name === 'h4' && stack.length === 1 && stack[0] === 'h4' && headingStart >= 0) {
                currentTitle = html.slice(headingStart, match.index).trim();
                bodyStart = tags.lastIndex;
                headingStart = -1;
            }
            var index = stack.lastIndexOf(name);
            if (index >= 0) stack.length = index;
        }
    }
    append(html.length);
    return sections;
}

/* Regroupe les nombreux petits panneaux historiques en grands chapitres
   de lecture. Le contenu source reste intact : seuls les titres et leur
   présentation sont réorganisés. */
function groupCoursSections(sections, subject) {
    if (!Array.isArray(sections) || !sections.length) {
        return [];
    }

    /* Les chapitres d'Histoire approfondis possèdent déjà les six parties
       éditoriales validées. Elles restent distinctes et dans l'ordre prévu. */
    if (subject === 'histoire') {
        var historyOrder = [
            { match: /^Notions et acteurs$/i, icon: '♜' },
            { match: /^Contexte et évolutions$/i, icon: '⌛' },
            { match: /^Repères et documents$/i, icon: '▧' },
            { match: /^Méthode historique$/i, icon: '⌕' },
            { match: /^Pièges à éviter$/i, icon: '!' },
            { match: /^Synthèse CESS$/i, icon: '✓' }
        ];
        var canonicalHistory = historyOrder.every(function (expected) {
            return sections.some(function (section) {
                return expected.match.test(String(section.title || '').replace(/<[^>]*>/g, ' ').trim());
            });
        });
        if (canonicalHistory && sections.length === historyOrder.length) {
            return historyOrder.map(function (expected) {
                var section = sections.find(function (candidate) {
                    return expected.match.test(String(candidate.title || '').replace(/<[^>]*>/g, ' ').trim());
                });
                return { title: String(section.title || '').replace(/<[^>]*>/g, ' ').trim(), icon: expected.icon, body: section.body };
            });
        }
    }

    var groups = [
        { title: 'Notions essentielles', icon: '◆', match: /essentiel|d[eé]finition|vocabulaire|rep[eè]re|th[eé]or[eè]me|c.est quoi|notion|introduction/i, items: [] },
        { title: 'Comprendre le cours', icon: '◎', match: /comprendre|m[eé]canisme|fonctionnement|principe|explication|le cours|propri[eé]t[eé]/i, items: [] },
        { title: 'Formules et applications', icon: '∑', match: /formule|calcul|exemple|application|cas |diagonale|r[eé]ciproque|relation|loi /i, items: [] },
        { title: 'Méthode et raisonnement', icon: '→', match: /m[eé]thode|d[eé]marche|raisonnement|observer|exp[eé]riment|document|r[eé]soudre|pas [àa] pas/i, items: [] },
        { title: 'Pièges et erreurs à éviter', icon: '!', match: /pi[eè]ge|erreur|attention|confusion/i, items: [] },
        { title: 'Synthèse et vérification', icon: '✓', match: /check|synth[eè]se|objectif|retenir|bilan|entra[iî]nement|approfond|connexion|lien|niveau examen|transfert|aller plus loin|cess/i, items: [] }
    ];

    sections.forEach(function (section, index) {
        var plainTitle = String(section.title || '').replace(/<[^>]*>/g, ' ').trim();
        var target = null;
        for (var i = 0; i < groups.length; i++) {
            if (groups[i].match.test(plainTitle)) {
                target = groups[i];
                break;
            }
        }
        if (!target) {
            target = index < Math.ceil(sections.length / 2) ? groups[1] : groups[groups.length - 1];
        }
        target.items.push(section);
    });

    var subjectLabels = {
        histoire: ['Notions et acteurs', 'Contexte et évolutions', 'Repères et documents', 'Méthode historique', 'Pièges à éviter', 'Synthèse CESS'],
        francais: ['Notions essentielles', 'Textes et procédés', 'Exemples et outils', 'Méthode de français', 'Pièges à éviter', 'Synthèse CESS'],
        geo: ['Notions essentielles', 'Comprendre le territoire', 'Repères, cartes et applications', 'Méthode géographique', 'Pièges à éviter', 'Synthèse CESS'],
        bio: ['Notions essentielles', 'Mécanismes du vivant', 'Schémas et applications', 'Démarche scientifique', 'Pièges à éviter', 'Synthèse CESS'],
        chimie: ['Notions essentielles', 'Comprendre la transformation', 'Relations et applications', 'Démarche expérimentale', 'Pièges à éviter', 'Synthèse CESS'],
        physique: ['Notions essentielles', 'Comprendre le phénomène', 'Lois et applications', 'Démarche scientifique', 'Pièges à éviter', 'Synthèse CESS'],
        maths: ['Notions essentielles', 'Comprendre la méthode', 'Formules et applications', 'Raisonnement pas à pas', 'Pièges à éviter', 'Synthèse CESS'],
        anglais: ['Key vocabulary', 'Understand the context', 'Examples and language tools', 'Communication method', 'Common mistakes', 'Key takeaways'],
        neerlandais: ['Kernwoorden', 'Context begrijpen', 'Voorbeelden en taalhulpen', 'Communicatiemethode', 'Veelgemaakte fouten', 'Samenvatting'],
        latin: ['Notions et vocabulaire', 'Comprendre le texte', 'Formes et traductions', 'Méthode de version', 'Pièges à éviter', 'Synthèse'],
        numerique: ['Notions numériques', 'Comprendre le système', 'Outils et applications', 'Méthode de projet', 'Risques à éviter', 'Synthèse'],
        sciences_sociales: ['Notions et acteurs', 'Comprendre la société', 'Données et situations', 'Méthode d’analyse', 'Biais à éviter', 'Synthèse CESS'],
        sciences_economiques: ['Notions et acteurs', 'Comprendre le mécanisme', 'Données et applications', 'Méthode économique', 'Pièges à éviter', 'Synthèse CESS'],
        epc: ['Notions et valeurs', 'Comprendre le débat', 'Arguments et situations', 'Méthode de réflexion', 'Biais à éviter', 'Synthèse citoyenne']
    };
    var subjectIcons = {
        histoire: ['♜', '⌛', '▧', '⌕', '!', '✓'], francais: ['Aa', '❝', '✦', '✎', '!', '✓'],
        maths: ['◇', 'ƒ', '∑', '→', '!', '✓'], geo: ['◎', '⌖', '▦', '↗', '!', '✓'],
        bio: ['◉', '♧', '⌬', '⚗', '!', '✓'], chimie: ['⚛', '⚗', '∑', '⌁', '!', '✓'],
        physique: ['●', 'ϟ', '∑', '→', '!', '✓'], anglais: ['A', '◌', '❝', '↗', '!', '✓'],
        neerlandais: ['N', '◌', '❝', '↗', '!', '✓'], latin: ['L', '❦', 'Aa', '✎', '!', '✓'],
        numerique: ['01', '⌘', '{}', '→', '!', '✓'], sciences_sociales: ['◉', '♙', '▥', '⌕', '!', '✓'],
        sciences_economiques: ['€', '↗', '▥', '⌕', '!', '✓'], epc: ['⚖', '◈', '❝', '⌕', '!', '✓']
    };
    var labels = subjectLabels[subject] || null;
    var icons = subjectIcons[subject] || subjectIcons.maths;

    return groups.filter(function (group) {
        return group.items.length;
    }).map(function (group) {
        var originalIndex = groups.indexOf(group);
        return {
            title: labels ? labels[originalIndex] : group.title,
            icon: icons[originalIndex] || group.icon,
            body: group.items.map(function (item) {
                return '<section class="bplus-subsection"><h4>' + item.title + '</h4>' + item.body + '</section>';
            }).join('')
        };
    });
}

function pctSubject(subject) {
    var chapters = allChaps(subject);

    if (!chapters.length) {
        return 0;
    }

    var done = 0;

    for (var i = 0; i < chapters.length; i++) {
        if (
            getChapterProgress(chapters[i].id) >= 100
        ) {
            done++;
        }
    }

    return Math.round(
        done / chapters.length * 100
    );
}
