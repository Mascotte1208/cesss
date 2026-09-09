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
    var chapters = allChaps('maths')
        .concat(allChaps('geo'))
        .concat(allChaps('bio'));

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
    if (!cours) {
        return [];
    }

    var parts = String(cours).split(
        /<h4>([\s\S]*?)<\/h4>/
    );

    // parts[0] = texte avant le premier <h4> (ignoré s'il est vide)
    var sections = [];

    for (var i = 1; i < parts.length; i += 2) {
        var title = (parts[i] || '').trim();
        var body = (parts[i + 1] || '').trim();

        if (title) {
            sections.push({
                title: title,
                body: body
            });
        }
    }

    return sections;
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

