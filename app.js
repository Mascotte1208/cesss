/* =========================================================
   CARNET CESS
   APPLICATION PRINCIPALE
   VERSION COMPATIBLE AVEC style.css v4
   ========================================================= */


/* =========================================================
   ETAT
   ========================================================= */

var CESS_DBKEY = 'carnetCESSv5';


var cessState = {
    progress: {},
    results: [],
    mistakes: [],
    streak: 0,
    theme: 'light'
};


var cessSelectedYear = {
    maths: '3e',
    geo: '3e'
};


var cessMemoMode = 'formules';

var cessQuizState = null;

var cessExamState = null;


/* =========================================================
   CHARGEMENT
   ========================================================= */

(function loadState() {

    try {

        var saved =
            localStorage.getItem(CESS_DBKEY);

        if (!saved) {
            return;
        }

        var parsed =
            JSON.parse(saved);

        if (!parsed || typeof parsed !== 'object') {
            return;
        }

        cessState = {
            progress:
                parsed.progress || {},

            results:
                Array.isArray(parsed.results)
                    ? parsed.results
                    : [],

            mistakes:
                Array.isArray(parsed.mistakes)
                    ? parsed.mistakes
                    : [],

            streak:
                Number(parsed.streak || 0),

            theme:
                parsed.theme === 'dark'
                    ? 'dark'
                    : 'light'
        };

    } catch (error) {

        console.warn(
            'Impossible de charger les données.',
            error
        );

    }

})();


/* =========================================================
   MATIERES
   ========================================================= */

var CESS_SUBJECTS = {

    maths: {
        label: 'Mathématiques',
        icon: '📐',

        getData: function () {

            if (
                typeof CHAPITRES !== 'undefined' &&
                CHAPITRES &&
                typeof CHAPITRES === 'object'
            ) {
                return CHAPITRES;
            }

            return {};
        }
    },


    geo: {
        label: 'Géographie',
        icon: '🌍',

        getData: function () {

            if (
                typeof GEO_CHAPITRES !== 'undefined' &&
                GEO_CHAPITRES &&
                typeof GEO_CHAPITRES === 'object'
            ) {
                return GEO_CHAPITRES;
            }

            return {};
        }
    }

};


/* =========================================================
   SAUVEGARDE
   ========================================================= */

function cessSave() {

    try {

        localStorage.setItem(
            CESS_DBKEY,
            JSON.stringify(cessState)
        );

    } catch (error) {

        console.warn(
            'Impossible de sauvegarder.',
            error
        );

    }

}


/* =========================================================
   THEME
   ========================================================= */

function applyTheme() {

    if (cessState.theme === 'dark') {

        document.body.classList.add('dark');

    } else {

        document.body.classList.remove('dark');

    }


    var icon =
        document.getElementById('themeIcon');

    var text =
        document.getElementById('themeText');


    if (icon) {

        icon.textContent =
            cessState.theme === 'dark'
                ? '☀️'
                : '🌙';

    }


    if (text) {

        text.textContent =
            cessState.theme === 'dark'
                ? 'Mode clair'
                : 'Mode sombre';

    }

}


function toggleTheme() {

    cessState.theme =
        cessState.theme === 'dark'
            ? 'light'
            : 'dark';

    applyTheme();

    cessSave();

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(id) {

    var target =
        document.getElementById(id);

    if (!target) {

        console.warn(
            'Vue introuvable :',
            id
        );

        return;
    }


    var views =
        document.querySelectorAll('.view');


    for (
        var i = 0;
        i < views.length;
        i++
    ) {

        views[i].classList.remove('active');

    }


    target.classList.add('active');


    var navItems =
        document.querySelectorAll(
            '.nav-item'
        );


    for (
        var j = 0;
        j < navItems.length;
        j++
    ) {

        navItems[j].classList.remove(
            'active'
        );

        if (
            navItems[j].getAttribute(
                'data-view'
            ) === id
        ) {

            navItems[j].classList.add(
                'active'
            );

        }

    }


    try {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    } catch (error) {

        window.scrollTo(0, 0);

    }


    if (id === 'home') {
        renderHome();
    }

    if (id === 'maths') {
        renderSubject('maths');
    }

    if (id === 'geo') {
        renderSubject('geo');
    }

    if (id === 'memo') {
        renderMemo();
    }

    if (id === 'progress') {
        renderProgress();
    }

}


/* =========================================================
   CHAPITRES
   ========================================================= */

function allChaps(subject) {

    var subjectInfo =
        CESS_SUBJECTS[subject];

    if (!subjectInfo) {
        return [];
    }


    var data =
        subjectInfo.getData();


    if (
        !data ||
        typeof data !== 'object'
    ) {
        return [];
    }


    var result = [];

    var years =
        Object.keys(data);


    for (
        var i = 0;
        i < years.length;
        i++
    ) {

        var year =
            years[i];

        var chapters =
            data[year];


        if (!Array.isArray(chapters)) {
            continue;
        }


        for (
            var j = 0;
            j < chapters.length;
            j++
        ) {

            var chapter =
                chapters[j];


            if (
                !chapter ||
                typeof chapter !== 'object'
            ) {
                continue;
            }


            var copy = {};


            for (
                var key in chapter
            ) {

                if (
                    Object.prototype.hasOwnProperty.call(
                        chapter,
                        key
                    )
                ) {

                    copy[key] =
                        chapter[key];

                }

            }


            copy.annee =
                chapter.annee ||
                chapter.niveau ||
                year;

            copy.matiere =
                subject;


            result.push(copy);

        }

    }


    return result;

}


/* =========================================================
   TROUVER UN CHAPITRE
   ========================================================= */

function findChapter(id) {

    var chapters =
        allChaps('maths')
            .concat(
                allChaps('geo')
            );


    for (
        var i = 0;
        i < chapters.length;
        i++
    ) {

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
   MELANGE
   ========================================================= */

function shuffle(array) {

    var copy =
        Array.isArray(array)
            ? array.slice()
            : [];


    for (
        var i = copy.length - 1;
        i > 0;
        i--
    ) {

        var j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        var temp =
            copy[i];

        copy[i] =
            copy[j];

        copy[j] =
            temp;

    }


    return copy;

}


/* =========================================================
   POURCENTAGE
   ========================================================= */

function pctSubject(subject) {

    var chapters =
        allChaps(subject);


    if (!chapters.length) {
        return 0;
    }


    var done = 0;


    for (
        var i = 0;
        i < chapters.length;
        i++
    ) {

        if (
            Number(
                cessState.progress[
                    chapters[i].id
                ] || 0
            ) >= 100
        ) {

            done++;

        }

    }


    return Math.round(
        done /
        chapters.length *
        100
    );

}


/* =========================================================
   ACCUEIL
   ========================================================= */

function renderHome() {

    var maths =
        allChaps('maths').length;

    var geo =
        allChaps('geo').length;

    var total =
        maths + geo;


    var mathsPct =
        pctSubject('maths');

    var geoPct =
        pctSubject('geo');


    var stats =
        document.getElementById(
            'homeStats'
        );


    if (stats) {

        stats.innerHTML = [

            {
                icon: '📚',
                value: total,
                label: 'Chapitres'
            },

            {
                icon: '📐',
                value: mathsPct + '%',
                label: 'Maîtrise Maths'
            },

            {
                icon: '🌍',
                value: geoPct + '%',
                label: 'Maîtrise Géo'
            },

            {
                icon: '🎯',
                value: cessState.results.length,
                label: 'Quiz réalisés'
            }

        ].map(function (item) {

            return `
                <div class="home-stat">

                    <span class="home-stat-icon">
                        ${item.icon}
                    </span>

                    <strong class="home-stat-value">
                        ${item.value}
                    </strong>

                    <span class="home-stat-label">
                        ${item.label}
                    </span>

                </div>
            `;

        }).join('');

    }


    var mathBar =
        document.getElementById(
            'homeMathProgress'
        );


    if (mathBar) {
        mathBar.style.width =
            mathsPct + '%';
    }


    var mathLabel =
        document.getElementById(
            'homeMathLabel'
        );


    if (mathLabel) {
        mathLabel.textContent =
            mathsPct + '% maîtrisé';
    }


    var geoBar =
        document.getElementById(
            'homeGeoProgress'
        );


    if (geoBar) {
        geoBar.style.width =
            geoPct + '%';
    }


    var geoLabel =
        document.getElementById(
            'homeGeoLabel'
        );


    if (geoLabel) {
        geoLabel.textContent =
            geoPct + '% maîtrisé';
    }


    renderHomeProgress();

    renderPriorities();

}


/* =========================================================
   PROGRESSION ACCUEIL
   ========================================================= */

function renderHomeProgress() {

    var box =
        document.getElementById(
            'subjectProgress'
        );


    if (!box) {
        return;
    }


    box.innerHTML = [

        'maths',
        'geo'

    ].map(function (subject) {

        var pct =
            pctSubject(subject);


        return `
            <div class="progress-row">

                <div class="progress-row-name">
                    ${CESS_SUBJECTS[subject].icon}
                    ${CESS_SUBJECTS[subject].label}
                </div>

                <div class="progress-row-bar">
                    <span
                        style="width:${pct}%">
                    </span>
                </div>

                <div class="progress-row-value">
                    ${pct}%
                </div>

            </div>
        `;

    }).join('');

}


/* =========================================================
   PRIORITES
   ========================================================= */

function renderPriorities() {

    var box =
        document.getElementById(
            'priorities'
        );


    if (!box) {
        return;
    }


    var chapters =
        allChaps('maths')
            .concat(
                allChaps('geo')
            )
            .filter(function (chapter) {

                return Number(
                    cessState.progress[
                        chapter.id
                    ] || 0
                ) < 100;

            })
            .slice(0, 6);


    if (!chapters.length) {

        box.innerHTML = `
            <div class="empty-state">
                🎉 Tous les chapitres sont maîtrisés !
            </div>
        `;

        return;

    }


    box.innerHTML = `
        <div class="simple-list">

            ${
                chapters.map(function (chapter) {

                    return `
                        <div class="simple-list-item">

                            <span class="simple-list-icon">
                                ${chapter.icone || '📘'}
                            </span>

                            <div class="simple-list-main">

                                <strong>
                                    ${chapter.titre || 'Chapitre'}
                                </strong>

                                <small>
                                    ${chapter.annee || ''}
                                    ·
                                    ${
                                        chapter.matiere === 'maths'
                                            ? 'Maths'
                                            : 'Géo'
                                    }
                                </small>

                            </div>

                            <button
                                type="button"
                                class="simple-list-action"
                                onclick="openChapter('${chapter.id}')">

                                Ouvrir →

                            </button>

                        </div>
                    `;

                }).join('')
            }

        </div>
    `;

}


/* =========================================================
   AFFICHAGE MATIERE
   ========================================================= */

function renderSubject(subject) {

    var info =
        CESS_SUBJECTS[subject];


    if (!info) {
        return;
    }


    var data =
        info.getData();


    var total =
        document.getElementById(
            subject === 'maths'
                ? 'mathsTotal'
                : 'geoTotal'
        );


    var yearsBox =
        document.getElementById(
            subject === 'maths'
                ? 'mathYears'
                : 'geoYears'
        );


    var content =
        document.getElementById(
            subject === 'maths'
                ? 'mathContent'
                : 'geoContent'
        );


    if (
        !total ||
        !yearsBox ||
        !content
    ) {
        return;
    }


    var chaptersAll =
        allChaps(subject);


    total.textContent =
        chaptersAll.length +
        ' chapitres';


    var years =
        [
            '3e',
            '4e',
            '5e',
            '6e'
        ];


    yearsBox.innerHTML =
        years.map(function (year) {

            var chapters =
                Array.isArray(data[year])
                    ? data[year]
                    : [];


            var done = 0;


            for (
                var i = 0;
                i < chapters.length;
                i++
            ) {

                if (
                    Number(
                        cessState.progress[
                            chapters[i].id
                        ] || 0
                    ) >= 100
                ) {

                    done++;

                }

            }


            var pct =
                chapters.length
                    ? Math.round(
                        done /
                        chapters.length *
                        100
                    )
                    : 0;


            var active =
                cessSelectedYear[subject] === year
                    ? 'active'
                    : '';


            return `
                <button
                    type="button"
                    class="year-button ${active}"
                    onclick="
                        cessSelectedYear['${subject}']='${year}';
                        renderSubject('${subject}');
                    ">

                    ${year}

                    <span>
                        · ${chapters.length}
                    </span>

                </button>
            `;

        }).join('');


    var selected =
        cessSelectedYear[subject];


    var chapters =
        Array.isArray(data[selected])
            ? data[selected]
            : [];


    if (!chapters.length) {

        content.innerHTML = `
            <div class="panel">

                <div class="empty-state">
                    Aucun chapitre disponible
                    pour cette année.
                </div>

            </div>
        `;

        return;

    }


    var domainGroups = {};


    for (
        var k = 0;
        k < chapters.length;
        k++
    ) {

        var chapter =
            chapters[k];


        var domain =
            chapter.categorie ||
            chapter.domaine ||
            chapter.theme ||
            'Programme';


        if (!domainGroups[domain]) {
            domainGroups[domain] = [];
        }


        domainGroups[domain].push(
            chapter
        );

    }


    var domains =
        Object.keys(
            domainGroups
        );


    content.innerHTML = `

        <div class="domain-grid">

            ${
                domains.map(function (domain) {

                    var list =
                        domainGroups[domain];


                    return `
                        <article class="domain-card">

                            <div class="domain-header">

                                <div class="domain-icon">
                                    ${domainIcon(domain)}
                                </div>

                                <div class="domain-title">

                                    <strong>
                                        ${domain}
                                    </strong>

                                    <small>
                                        ${list.length}
                                        chapitre(s)
                                    </small>

                                </div>

                                <span class="domain-count">
                                    ${list.length}
                                </span>

                            </div>


                            <div class="chapter-list">

                                ${
                                    list.map(function (chapter) {

                                        var pct =
                                            Number(
                                                cessState.progress[
                                                    chapter.id
                                                ] || 0
                                            );


                                        var statusClass =
                                            pct >= 100
                                                ? 'status-done'
                                                : pct > 0
                                                    ? 'status-progress'
                                                    : 'status-new';


                                        var statusText =
                                            pct >= 100
                                                ? '✓'
                                                : pct > 0
                                                    ? pct + '%'
                                                    : '•';


                                        return `
                                            <button
                                                type="button"
                                                class="chapter-item"
                                                onclick="openChapter('${chapter.id}')">

                                                <span class="chapter-icon">
                                                    ${chapter.icone || '📘'}
                                                </span>

                                                <span class="chapter-main">

                                                    <strong>
                                                        ${chapter.titre || 'Chapitre'}
                                                    </strong>

                                                    <small>
                                                        ${chapter.desc || ''}
                                                    </small>

                                                </span>

                                                <span
                                                    class="chapter-status ${statusClass}">

                                                    ${statusText}

                                                </span>

                                            </button>
                                        `;

                                    }).join('')
                                }

                            </div>

                        </article>
                    `;

                }).join('')
            }

        </div>

    `;

}


/* =========================================================
   ICONE DOMAINE
   ========================================================= */

function domainIcon(domain) {

    var text =
        String(
            domain || ''
        ).toLowerCase();


    if (
        text.indexOf('algèbre') !== -1 ||
        text.indexOf('algebre') !== -1
    ) {
        return '🔢';
    }


    if (
        text.indexOf('géométr') !== -1 ||
        text.indexOf('geometr') !== -1
    ) {
        return '📐';
    }


    if (
        text.indexOf('trigo') !== -1
    ) {
        return '📐';
    }


    if (
        text.indexOf('fonction') !== -1
    ) {
        return '📈';
    }


    if (
        text.indexOf('stat') !== -1
    ) {
        return '📊';
    }


    if (
        text.indexOf('risque') !== -1 ||
        text.indexOf('volcan') !== -1
    ) {
        return '🌋';
    }


    if (
        text.indexOf('climat') !== -1
    ) {
        return '🌡️';
    }


    if (
        text.indexOf('population') !== -1
    ) {
        return '👥';
    }


    if (
        text.indexOf('mobil') !== -1 ||
        text.indexOf('transport') !== -1
    ) {
        return '🚆';
    }


    if (
        text.indexOf('énergie') !== -1 ||
        text.indexOf('energie') !== -1
    ) {
        return '⚡';
    }


    return '📚';

}


/* =========================================================
   OUVRIR CHAPITRE
   ========================================================= */

function openChapter(id) {

    var chapter =
        findChapter(id);


    if (!chapter) {

        console.warn(
            'Chapitre introuvable :',
            id
        );

        return;

    }


    var subject =
        chapter.matiere ||
        (
            String(id).indexOf('geo') === 0
                ? 'geo'
                : 'maths'
        );


    showView(subject);


    var content =
        document.getElementById(
            subject === 'geo'
                ? 'geoContent'
                : 'mathContent'
        );


    if (!content) {
        return;
    }


    var pct =
        Number(
            cessState.progress[
                chapter.id
            ] || 0
        );


    var objectives =
        Array.isArray(
            chapter.objectifs
        )
            ? chapter.objectifs
            : [];


    var matieres =
        Array.isArray(
            chapter.matieres
        )
            ? chapter.matieres
            : [];


    var exercises =
        Array.isArray(
            chapter.exercices
        )
            ? chapter.exercices
            : [];


    var topics =
        matieres.length
            ? matieres
            : objectives;


    content.innerHTML = `

        <div class="chapter-top">

            <div class="chapter-breadcrumb">

                <button
                    type="button"
                    onclick="renderSubject('${subject}')">

                    ← ${CESS_SUBJECTS[subject].label}

                </button>

                <span>›</span>

                <span>
                    ${chapter.annee || ''}
                </span>

            </div>


            <div class="chapter-hero">

                <div>

                    <div class="chapter-title-row">

                        <div class="chapter-big-icon">
                            ${chapter.icone || '📘'}
                        </div>

                        <div class="chapter-title">

                            <h1>
                                ${chapter.titre || 'Chapitre'}
                            </h1>

                            <p>
                                ${chapter.desc || ''}
                            </p>

                        </div>

                    </div>

                </div>


                <div class="chapter-progress-box">

                    <span class="chapter-progress-number">
                        ${pct}%
                    </span>

                    <span class="chapter-progress-label">
                        progression
                    </span>

                </div>

            </div>

        </div>


        <div class="chapter-layout">

            <div>


                <div class="content-card">

                    <div class="course-content">

                        ${
                            chapter.cours ||
                            '<p>Aucun cours renseigné.</p>'
                        }

                    </div>

                </div>


                ${
                    exercises.length
                        ? `

                            <div class="content-card">

                                <h2>
                                    🎯 Exercices
                                </h2>

                                <div
                                    class="exercise-list"
                                    style="margin-top:18px">

                                    ${
                                        exercises.map(
                                            function (exercise, index) {

                                                return `
                                                    <div
                                                        class="exercise-card">

                                                        <div class="exercise-number">
                                                            Exercice ${index + 1}
                                                        </div>

                                                        <div class="exercise-question">
                                                            ${exercise.question || ''}
                                                        </div>

                                                        ${
                                                            Array.isArray(
                                                                exercise.options
                                                            ) &&
                                                            exercise.options.length
                                                                ? `
                                                                    <div class="exercise-options">

                                                                        ${
                                                                            exercise.options.map(
                                                                                function (option, optionIndex) {

                                                                                    return `
                                                                                        <button
                                                                                            type="button"
                                                                                            class="exercise-option"
                                                                                            onclick="
                                                                                                answerExercise(
                                                                                                    this,
                                                                                                    ${optionIndex},
                                                                                                    ${Number(exercise.correct || 0)},
                                                                                                    '${escapeForAttribute(exercise.correction || '')}'
                                                                                                );
                                                                                            ">

                                                                                            ${option}

                                                                                        </button>
                                                                                    `;

                                                                                }
                                                                            ).join('')
                                                                        }

                                                                    </div>
                                                                `
                                                                : ''
                                                        }

                                                    </div>
                                                `;

                                            }
                                        ).join('')
                                    }

                                </div>

                            </div>

                        `
                        : ''
                }


                <div class="content-card">

                    <div class="chapter-footer">

                        <div>

                            <strong>
                                ${
                                    pct >= 100
                                        ? '✓ Chapitre maîtrisé'
                                        : 'Chapitre à réviser'
                                }
                            </strong>

                            <p style="font-size:11px;margin-top:4px">
                                ${
                                    pct >= 100
                                        ? 'Tu peux continuer vers le chapitre suivant.'
                                        : 'Marque-le comme maîtrisé lorsque tu es prêt.'
                                }
                            </p>

                        </div>


                        <button
                            type="button"
                            class="mark-button ${pct >= 100 ? 'done' : ''}"
                            onclick="markDone('${chapter.id}')">

                            ${
                                pct >= 100
                                    ? '✓ Maîtrisé'
                                    : '✓ Marquer maîtrisé'
                            }

                        </button>

                    </div>

                </div>


            </div>


            <aside class="chapter-sidebar">


                <div class="chapter-sidebar-card">

                    <h3>
                        🎯 Objectifs
                    </h3>

                    <div class="goal-list">

                        ${
                            objectives.length
                                ? objectives.map(function (item) {

                                    return `
                                        <div class="goal-item">

                                            <span>
                                                ✓
                                            </span>

                                            <span>
                                                ${item}
                                            </span>

                                        </div>
                                    `;

                                }).join('')
                                : `
                                    <div class="goal-item">
                                        <span>•</span>
                                        <span>
                                            Aucun objectif renseigné.
                                        </span>
                                    </div>
                                `
                        }

                    </div>

                </div>


                <div class="chapter-sidebar-card">

                    <h3>
                        📚 À savoir
                    </h3>

                    <div class="topic-list">

                        ${
                            topics.length
                                ? topics.map(function (topic) {

                                    return `
                                        <div class="topic-item">
                                            ${topic}
                                        </div>
                                    `;

                                }).join('')
                                : `
                                    <div class="topic-item">
                                        Voir le cours.
                                    </div>
                                `
                        }

                    </div>

                </div>


                <div class="chapter-sidebar-card">

                    <h3>
                        🎯 Entraînement
                    </h3>

                    <button
                        type="button"
                        class="button primary"
                        style="width:100%"
                        onclick="quizChapter('${chapter.id}')">

                        Faire le quiz

                    </button>

                </div>


            </aside>

        </div>

    `;


    try {

        content.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    } catch (error) {

        content.scrollIntoView();

    }

}


/* =========================================================
   SECURITE ATTRIBUT
   ========================================================= */

function escapeForAttribute(value) {

    return String(value || '')
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/\r/g, '')
        .replace(/\n/g, ' ');

}


/* =========================================================
   EXERCICE DE CHAPITRE
   ========================================================= */

function answerExercise(
    button,
    selected,
    correct,
    correction
) {

    var card =
        button.closest(
            '.exercise-card'
        );


    if (!card) {
        return;
    }


    var buttons =
        card.querySelectorAll(
            '.exercise-option'
        );


    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].disabled = true;

    }


    if (
        selected === correct
    ) {

        button.classList.add(
            'correct'
        );

    } else {

        button.classList.add(
            'wrong'
        );


        if (buttons[correct]) {

            buttons[correct].classList.add(
                'correct'
            );

        }

    }


    if (correction) {

        var existing =
            card.querySelector(
                '.correction'
            );


        if (!existing) {

            var div =
                document.createElement(
                    'div'
                );

            div.className =
                'correction';

            div.textContent =
                correction;

            card.appendChild(div);

        }

    }

}


/* =========================================================
   MARQUER MAITRISE
   ========================================================= */

function markDone(id) {

    var chapter =
        findChapter(id);


    if (!chapter) {
        return;
    }


    cessState.progress[id] =
        100;


    cessSave();


    renderHome();

    renderSubject(
        chapter.matiere ||
        'maths'
    );


    if (
        document.getElementById(
            'progress'
        ).classList.contains('active')
    ) {

        renderProgress();

    }


    openChapter(id);

}


/* =========================================================
   QUESTIONS
   ========================================================= */

function flattenQuestions(filter) {

    filter =
        filter || 'all';


    var chapters =
        allChaps('maths')
            .concat(
                allChaps('geo')
            );


    var questions = [];


    for (
        var i = 0;
        i < chapters.length;
        i++
    ) {

        var chapter =
            chapters[i];


        if (
            !Array.isArray(
                chapter.exercices
            )
        ) {
            continue;
        }


        for (
            var j = 0;
            j < chapter.exercices.length;
            j++
        ) {

            var question =
                chapter.exercices[j];


            if (
                !question ||
                !Array.isArray(
                    question.options
                ) ||
                !question.options.length
            ) {
                continue;
            }


            questions.push({

                id:
                    chapter.id +
                    '_' +
                    j,

                question:
                    question.question ||
                    '',

                options:
                    question.options,

                correct:
                    Number(
                        question.correct || 0
                    ),

                correction:
                    question.correction ||
                    '',

                chapter:
                    chapter.titre ||
                    '',

                annee:
                    chapter.annee ||
                    '',

                matiere:
                    chapter.matiere ||
                    ''

            });

        }

    }


    if (
        filter === 'maths' ||
        filter === 'geo'
    ) {

        questions =
            questions.filter(
                function (q) {

                    return q.matiere === filter;

                }
            );

    }


    if (
        filter === 'mistakes'
    ) {

        questions =
            questions.filter(
                function (q) {

                    return (
                        cessState.mistakes.indexOf(
                            q.id
                        ) !== -1
                    );

                }
            );

    }


    return questions;

}


/* =========================================================
   VRAI / FAUX
   ========================================================= */

function trueFalseQuestions() {

    return [

        {
            id: 'tf_1',
            question:
                'Deux triangles isométriques ont leurs côtés homologues de même longueur.',
            options: ['Vrai', 'Faux'],
            correct: 0,
            matiere: 'maths',
            annee: '3e'
        },

        {
            id: 'tf_2',
            question:
                'Des triangles semblables ont toujours leurs côtés homologues égaux.',
            options: ['Vrai', 'Faux'],
            correct: 1,
            matiere: 'maths',
            annee: '3e'
        },

        {
            id: 'tf_3',
            question:
                'Le théorème de Pythagore s’utilise dans un triangle rectangle.',
            options: ['Vrai', 'Faux'],
            correct: 0,
            matiere: 'maths',
            annee: '3e'
        },

        {
            id: 'tf_4',
            question:
                'sin(α) = opposé / hypoténuse dans un triangle rectangle.',
            options: ['Vrai', 'Faux'],
            correct: 0,
            matiere: 'maths',
            annee: '3e'
        },

        {
            id: 'tf_5',
            question:
                'La fonction affine s’écrit f(x)=mx+p.',
            options: ['Vrai', 'Faux'],
            correct: 0,
            matiere: 'maths',
            annee: '4e'
        },

        {
            id: 'tf_6',
            question:
                'La médiane est une mesure de tendance centrale.',
            options: ['Vrai', 'Faux'],
            correct: 0,
            matiere: 'maths',
            annee: '4e'
        },

        {
            id: 'tf_7',
            question:
                'Un aléa est un phénomène dangereux potentiel.',
            options: ['Vrai', 'Faux'],
            correct: 0,
            matiere: 'geo',
            annee: '3e'
        },

        {
            id: 'tf_8',
            question:
                'La densité de population mesure le nombre d’habitants par unité de surface.',
            options: ['Vrai', 'Faux'],
            correct: 0,
            matiere: 'geo',
            annee: '3e'
        },

        {
            id: 'tf_9',
            question:
                'Les énergies fossiles sont renouvelables.',
            options: ['Vrai', 'Faux'],
            correct: 1,
            matiere: 'geo',
            annee: '5e'
        },

        {
            id: 'tf_10',
            question:
                'Un conflit d’usage peut apparaître lorsque plusieurs acteurs veulent utiliser le même espace.',
            options: ['Vrai', 'Faux'],
            correct: 0,
            matiere: 'geo',
            annee: '6e'
        }

    ];

}


/* =========================================================
   DEMARRER QUIZ
   ========================================================= */

function startQuiz(mode) {

    var questions = [];


    if (
        mode === 'truefalse'
    ) {

        questions =
            trueFalseQuestions();

    } else {

        questions =
            flattenQuestions(
                mode === 'mixed'
                    ? 'all'
                    : mode
            );


        if (
            mode === 'mistakes' &&
            !questions.length
        ) {

            var empty =
                document.getElementById(
                    'gamePanel'
                );


            if (empty) {

                empty.innerHTML = `

                    <div class="quiz-start-icon">
                        🔁
                    </div>

                    <h2>
                        Aucune erreur
                    </h2>

                    <p>
                        Fais d'abord un quiz
                        pour enregistrer tes erreurs.
                    </p>

                `;

            }


            showView('games');

            return;

        }


        if (!questions.length) {

            var no =
                document.getElementById(
                    'gamePanel'
                );


            if (no) {

                no.innerHTML = `

                    <div class="quiz-start-icon">
                        📚
                    </div>

                    <h2>
                        Aucune question
                    </h2>

                    <p>
                        Aucune question disponible
                        pour ce mode.
                    </p>

                `;

            }


            showView('games');

            return;

        }

    }


    cessQuizState = {

        qs:
            shuffle(
                questions
            ).slice(0, 10),

        index: 0,

        score: 0,

        mode: mode,

        recorded: false

    };


    showView('games');

    renderQuiz();

}


/* =========================================================
   QUIZ CHAPITRE
   ========================================================= */

function quizChapter(id) {

    var questions =
        flattenQuestions('all')
            .filter(
                function (question) {

                    return (
                        question.id.indexOf(
                            id + '_'
                        ) === 0
                    );

                }
            );


    if (!questions.length) {

        alert(
            'Aucune question disponible pour ce chapitre.'
        );

        return;

    }


    cessQuizState = {

        qs:
            shuffle(
                questions
            ),

        index: 0,

        score: 0,

        mode: 'chapter',

        recorded: false

    };


    showView('games');

    renderQuiz();

}


/* =========================================================
   AFFICHAGE QUIZ
   ========================================================= */

function renderQuiz() {

    var panel =
        document.getElementById(
            'gamePanel'
        );


    if (!panel) {
        return;
    }


    if (
        !cessQuizState
    ) {

        panel.innerHTML = `

            <div class="quiz-start-icon">
                🎯
            </div>

            <h2>
                Choisis un quiz
            </h2>

            <p>
                Les questions apparaîtront ici.
            </p>

        `;

        return;

    }


    if (
        cessQuizState.index >=
        cessQuizState.qs.length
    ) {

        var total =
            cessQuizState.qs.length;

        var score =
            cessQuizState.score;

        var pct =
            total
                ? Math.round(
                    score /
                    total *
                    100
                )
                : 0;


        if (
            !cessQuizState.recorded
        ) {

            cessState.results.push({

                date: Date.now(),

                score: score,

                total: total,

                mode:
                    cessQuizState.mode

            });


            cessQuizState.recorded =
                true;


            cessSave();

        }


        panel.innerHTML = `

            <div class="quiz-start-icon">
                ${
                    pct >= 80
                        ? '🏆'
                        : pct >= 50
                            ? '👍'
                            : '💪'
                }
            </div>

            <h2>
                ${pct}% de réussite
            </h2>

            <p>
                ${score} bonne(s) réponse(s)
                sur ${total}.
            </p>

            <div
                style="
                    display:flex;
                    gap:8px;
                    justify-content:center;
                    flex-wrap:wrap;
                    margin-top:20px;
                ">

                <button
                    type="button"
                    class="button primary"
                    onclick="
                        startQuiz(
                            '${cessQuizState.mode === 'chapter'
                                ? 'mixed'
                                : cessQuizState.mode}'
                        )
                    ">

                    Rejouer

                </button>


                <button
                    type="button"
                    class="button secondary"
                    onclick="showView('home')">

                    Accueil

                </button>

            </div>

        `;

        renderHome();

        return;

    }


    var question =
        cessQuizState.qs[
            cessQuizState.index
        ];


    var totalQuestions =
        cessQuizState.qs.length;


    var progressPct =
        Math.round(
            cessQuizState.index /
            totalQuestions *
            100
        );


    var options =
        Array.isArray(
            question.options
        )
            ? question.options
            : [];


    panel.innerHTML = `

        <div class="quiz-question-card">

            <div class="quiz-progress">

                <span
                    style="width:${progressPct}%">
                </span>

            </div>


            <div class="quiz-meta">

                <span>
                    Question
                    ${cessQuizState.index + 1}
                    /
                    ${totalQuestions}
                </span>

                <span>
                    ${
                        question.matiere === 'maths'
                            ? '📐 Maths'
                            : '🌍 Géo'
                    }

                    ·

                    ${question.annee || ''}
                </span>

            </div>


            <div class="quiz-question">

                ${question.question}

            </div>


            <div class="quiz-options">

                ${
                    options.map(
                        function (option, index) {

                            return `

                                <button
                                    type="button"
                                    class="quiz-option"
                                    onclick="answerQuiz(${index})">

                                    ${option}

                                </button>

                            `;

                        }
                    ).join('')
                }

            </div>

        </div>

    `;

}


/* =========================================================
   REPONSE QUIZ
   ========================================================= */

function answerQuiz(index) {

    if (!cessQuizState) {
        return;
    }


    var question =
        cessQuizState.qs[
            cessQuizState.index
        ];


    var buttons =
        document.querySelectorAll(
            '.quiz-option'
        );


    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].disabled =
            true;

    }


    if (
        index ===
        Number(question.correct)
    ) {

        cessQuizState.score++;


        if (buttons[index]) {

            buttons[index].classList.add(
                'correct'
            );

        }

    } else {

        if (buttons[index]) {

            buttons[index].classList.add(
                'wrong'
            );

        }


        if (
            buttons[
                Number(question.correct)
            ]
        ) {

            buttons[
                Number(question.correct)
            ].classList.add(
                'correct'
            );

        }


        if (
            cessState.mistakes.indexOf(
                question.id
            ) === -1
        ) {

            cessState.mistakes.push(
                question.id
            );

        }

    }


    cessQuizState.index++;


    cessSave();


    setTimeout(
        function () {

            renderQuiz();

        },
        350
    );

}


/* =========================================================
   CAPITALES
   ========================================================= */

function startCapitals() {

    var capitals = [];


    if (
        typeof CAPITALES !== 'undefined' &&
        Array.isArray(CAPITALES)
    ) {

        capitals =
            CAPITALES;

    }


    if (!capitals.length) {

        var panel =
            document.getElementById(
                'gamePanel'
            );


        if (panel) {

            panel.innerHTML = `

                <div class="quiz-start-icon">
                    🌍
                </div>

                <h2>
                    Capitales indisponibles
                </h2>

                <p>
                    Les données de capitales
                    ne sont pas disponibles.
                </p>

            `;

        }


        showView('games');

        return;

    }


    var selected =
        shuffle(
            capitals
        ).slice(0, 10);


    var questions =
        selected.map(
            function (item, index) {

                var correct =
                    item.capitale ||
                    item.capital ||
                    '';


                var country =
                    item.pays ||
                    item.country ||
                    '';


                var others =
                    shuffle(
                        capitals.filter(
                            function (other) {

                                return (
                                    other !== item
                                );

                            }
                        )
                    )
                    .slice(0, 3)
                    .map(
                        function (other) {

                            return (
                                other.capitale ||
                                other.capital ||
                                ''
                            );

                        }
                    );


                var options =
                    shuffle(
                        [correct]
                            .concat(
                                others
                            )
                    );


                return {

                    id:
                        'capital_' +
                        index,

                    question:
                        'Quelle est la capitale de ' +
                        country +
                        ' ?',

                    options:
                        options,

                    correct:
                        options.indexOf(
                            correct
                        ),

                    matiere:
                        'geo',

                    annee:
                        '—'

                };

            }
        );


    cessQuizState = {

        qs: questions,

        index: 0,

        score: 0,

        mode: 'capitales',

        recorded: false

    };


    showView('games');

    renderQuiz();

}


/* =========================================================
   REVISION RAPIDE
   ========================================================= */

function quickRevision() {

    startQuiz('mixed');

}


/* =========================================================
   MEMO
   ========================================================= */

function memoTab(mode, button) {

    cessMemoMode =
        mode;


    var buttons =
        document.querySelectorAll(
            '.memo-tab'
        );


    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].classList.remove(
            'active'
        );

    }


    if (button) {

        button.classList.add(
            'active'
        );

    }


    renderMemo();

}


/* =========================================================
   RENDER MEMO
   ========================================================= */

function renderMemo() {

    var box =
        document.getElementById(
            'memoContent'
        );


    if (!box) {
        return;
    }


    var search =
        document.getElementById(
            'memoSearch'
        );


    var year =
        document.getElementById(
            'memoYear'
        );


    var term =
        search
            ? String(
                search.value || ''
            )
                .toLowerCase()
                .trim()
            : '';


    var selectedYear =
        year
            ? year.value
            : 'all';


    /* =====================================================
       VOCABULAIRE
       ===================================================== */

    if (
        cessMemoMode === 'vocab'
    ) {

        var vocabulary = [];


        if (
            typeof GEO_VOCAB !== 'undefined'
        ) {

            if (
                Array.isArray(
                    GEO_VOCAB
                )
            ) {

                vocabulary =
                    GEO_VOCAB;

            } else if (
                GEO_VOCAB &&
                typeof GEO_VOCAB === 'object'
            ) {

                vocabulary =
                    Object.values(
                        GEO_VOCAB
                    ).flat();

            }

        }


        var filtered =
            vocabulary.filter(
                function (item) {

                    item =
                        item || {};


                    var text =
                        [

                            item.mot,
                            item.terme,
                            item.def,
                            item.definition,
                            item.theme,
                            item.categorie

                        ]
                            .filter(Boolean)
                            .join(' ')
                            .toLowerCase();


                    var matchesText =
                        !term ||
                        text.indexOf(term) !== -1;


                    var itemYear =
                        item.annee ||
                        item.niveau ||
                        '';


                    var matchesYear =
                        selectedYear === 'all' ||
                        itemYear === selectedYear;


                    return (
                        matchesText &&
                        matchesYear
                    );

                }
            );


        if (!filtered.length) {

            box.innerHTML = `

                <div class="empty-state">
                    Aucun mot trouvé.
                </div>

            `;

            return;

        }


        box.innerHTML =
            filtered.map(
                function (item) {

                    return `

                        <article class="memo-card">

                            <strong>
                                ${
                                    item.mot ||
                                    item.terme ||
                                    'Terme'
                                }
                            </strong>

                            <p>
                                ${
                                    item.def ||
                                    item.definition ||
                                    ''
                                }
                            </p>

                            <span class="memo-tag">

                                ${
                                    item.annee ||
                                    item.niveau ||
                                    '—'
                                }

                                ·

                                ${
                                    item.theme ||
                                    item.categorie ||
                                    'Géographie'
                                }

                            </span>

                        </article>

                    `;

                }
            ).join('');


        return;

    }


    /* =====================================================
       FORMULES
       ===================================================== */

    var formulas = [];


    if (
        typeof FORMULES_DATA !== 'undefined' &&
        FORMULES_DATA &&
        typeof FORMULES_DATA === 'object'
    ) {

        var categories =
            Object.keys(
                FORMULES_DATA
            );


        for (
            var c = 0;
            c < categories.length;
            c++
        ) {

            var list =
                FORMULES_DATA[
                    categories[c]
                ];


            if (
                Array.isArray(list)
            ) {

                formulas =
                    formulas.concat(
                        list
                    );

            }

        }

    }


    var filteredFormulas =
        formulas.filter(
            function (formula) {

                formula =
                    formula || {};


                var text =
                    [

                        formula.titre,
                        formula.definition,
                        formula.exemple,
                        formula.categorie

                    ]
                        .filter(Boolean)
                        .join(' ')
                        .toLowerCase();


                var matchesText =
                    !term ||
                    text.indexOf(term) !== -1;


                var matchesYear =
                    selectedYear === 'all' ||
                    formula.annee === selectedYear;


                return (
                    matchesText &&
                    matchesYear
                );

            }
        );


    if (!filteredFormulas.length) {

        box.innerHTML = `

            <div class="empty-state">
                Aucune formule trouvée.
            </div>

        `;

        return;

    }


    box.innerHTML =
        filteredFormulas.map(
            function (formula) {

                return `

                    <article class="memo-card">

                        <strong>

                            ${
                                formula.icone ||
                                '📐'
                            }

                            ${formula.titre || ''}

                        </strong>

                        <p>
                            ${
                                formula.definition ||
                                ''
                            }
                        </p>

                        ${
                            formula.exemple
                                ? `
                                    <p>
                                        📌
                                        ${formula.exemple}
                                    </p>
                                `
                                : ''
                        }

                        <span class="memo-tag">

                            ${
                                formula.annee ||
                                '—'
                            }

                            ·

                            ${
                                formula.categorie ||
                                'Maths'
                            }

                        </span>

                    </article>

                `;

            }
        ).join('');

}


/* =========================================================
   EXAMEN
   ========================================================= */

function startExam(subject) {

    var questions =
        flattenQuestions(
            subject
        );


    if (!questions.length) {

        var empty =
            document.getElementById(
                'examPanel'
            );


        if (empty) {

            empty.innerHTML = `

                <div class="quiz-start-icon">
                    📚
                </div>

                <h2>
                    Aucune question disponible
                </h2>

                <p>
                    Il n'y a pas encore assez
                    de questions pour cet examen.
                </p>

            `;

        }


        showView('exam');

        return;

    }


    cessExamState = {

        qs:
            shuffle(
                questions
            ).slice(0, 15),

        index: 0,

        score: 0,

        subject:
            subject,

        recorded: false

    };


    showView('exam');

    renderExam();

}


/* =========================================================
   RENDER EXAMEN
   ========================================================= */

function renderExam() {

    var panel =
        document.getElementById(
            'examPanel'
        );


    if (
        !panel ||
        !cessExamState
    ) {
        return;
    }


    if (
        cessExamState.index >=
        cessExamState.qs.length
    ) {

        var total =
            cessExamState.qs.length;

        var pct =
            total
                ? Math.round(
                    cessExamState.score /
                    total *
                    100
                )
                : 0;


        if (
            !cessExamState.recorded
        ) {

            cessState.results.push({

                date: Date.now(),

                score:
                    cessExamState.score,

                total:
                    total,

                mode:
                    'exam-' +
                    cessExamState.subject

            });


            cessExamState.recorded =
                true;


            cessSave();

        }


        panel.innerHTML = `

            <div class="quiz-start-icon">
                ${
                    pct >= 80
                        ? '🏆'
                        : pct >= 50
                            ? '👍'
                            : '💪'
                }
            </div>

            <h2>
                ${pct}% de réussite
            </h2>

            <p>
                ${cessExamState.score}
                /
                ${total}
                réponses correctes.
            </p>

            <button
                type="button"
                class="button primary"
                style="margin-top:20px"
                onclick="
                    startExam(
                        '${cessExamState.subject}'
                    )
                ">

                Recommencer

            </button>

        `;


        renderHome();

        return;

    }


    var question =
        cessExamState.qs[
            cessExamState.index
        ];


    var options =
        Array.isArray(
            question.options
        )
            ? question.options
            : [];


    var progressPct =
        Math.round(
            cessExamState.index /
            cessExamState.qs.length *
            100
        );


    panel.innerHTML = `

        <div class="quiz-question-card">

            <div class="quiz-progress">

                <span
                    style="width:${progressPct}%">
                </span>

            </div>


            <div class="quiz-meta">

                <span>
                    Examen
                    ${
                        cessExamState.subject === 'maths'
                            ? 'Maths'
                            : 'Géographie'
                    }
                </span>

                <span>
                    Question
                    ${cessExamState.index + 1}
                    /
                    ${cessExamState.qs.length}
                </span>

            </div>


            <div class="quiz-question">

                ${question.question}

            </div>


            <div class="quiz-options">

                ${
                    options.map(
                        function (option, index) {

                            return `

                                <button
                                    type="button"
                                    class="quiz-option"
                                    onclick="
                                        answerExam(${index})
                                    ">

                                    ${option}

                                </button>

                            `;

                        }
                    ).join('')
                }

            </div>

        </div>

    `;

}


/* =========================================================
   REPONSE EXAMEN
   ========================================================= */

function answerExam(index) {

    if (!cessExamState) {
        return;
    }


    var question =
        cessExamState.qs[
            cessExamState.index
        ];


    var buttons =
        document.querySelectorAll(
            '#examPanel .quiz-option'
        );


    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].disabled =
            true;

    }


    if (
        index ===
        Number(question.correct)
    ) {

        cessExamState.score++;


        if (buttons[index]) {

            buttons[index].classList.add(
                'correct'
            );

        }

    } else {

        if (buttons[index]) {

            buttons[index].classList.add(
                'wrong'
            );

        }


        if (
            buttons[
                Number(question.correct)
            ]
        ) {

            buttons[
                Number(question.correct)
            ].classList.add(
                'correct'
            );

        }


        if (
            cessState.mistakes.indexOf(
                question.id
            ) === -1
        ) {

            cessState.mistakes.push(
                question.id
            );

        }

    }


    cessExamState.index++;


    cessSave();


    setTimeout(
        function () {

            renderExam();

        },
        350
    );

}


/* =========================================================
   PROGRESSION
   ========================================================= */

function renderProgress() {

    var container =
        document.getElementById(
            'progressContent'
        );


    if (!container) {
        return;
    }


    var mathsPct =
        pctSubject('maths');


    var geoPct =
        pctSubject('geo');


    var totalChapters =
        allChaps('maths').length +
        allChaps('geo').length;


    var mastered =
        allChaps('maths')
            .concat(
                allChaps('geo')
            )
            .filter(
                function (chapter) {

                    return Number(
                        cessState.progress[
                            chapter.id
                        ] || 0
                    ) >= 100;

                }
            ).length;


    var totalQuizzes =
        cessState.results.length;


    container.innerHTML = `

        <div class="progress-overview">

            <div class="progress-big-card">

                <strong>
                    ${mathsPct}%
                </strong>

                <span>
                    Maîtrise Maths
                </span>

            </div>


            <div class="progress-big-card">

                <strong>
                    ${geoPct}%
                </strong>

                <span>
                    Maîtrise Géo
                </span>

            </div>


            <div class="progress-big-card">

                <strong>
                    ${mastered}/${totalChapters}
                </strong>

                <span>
                    Chapitres maîtrisés
                </span>

            </div>

        </div>


        <div class="progress-section">

            <div class="section-heading">

                <span class="eyebrow">
                    Détail
                </span>

                <h2>
                    Mes matières
                </h2>

            </div>


            ${renderProgressRows('maths')}

            ${renderProgressRows('geo')}

        </div>


        <div
            class="progress-section"
            style="margin-top:18px">

            <div class="section-heading">

                <span class="eyebrow">
                    Historique
                </span>

                <h2>
                    Mes entraînements
                </h2>

            </div>

            <div class="simple-list">

                <div class="simple-list-item">

                    <span class="simple-list-icon">
                        🎯
                    </span>

                    <div class="simple-list-main">

                        <strong>
                            ${totalQuizzes}
                            quiz réalisés
                        </strong>

                        <small>
                            Quiz, capitales et examens.
                        </small>

                    </div>

                </div>


                <div class="simple-list-item">

                    <span class="simple-list-icon">
                        🔁
                    </span>

                    <div class="simple-list-main">

                        <strong>
                            ${cessState.mistakes.length}
                            erreur(s)
                        </strong>

                        <small>
                            À revoir dans « Mes erreurs ».
                        </small>

                    </div>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   LIGNES PROGRESSION
   ========================================================= */

function renderProgressRows(subject) {

    var data =
        CESS_SUBJECTS[
            subject
        ].getData();


    var years =
        [
            '3e',
            '4e',
            '5e',
            '6e'
        ];


    return years.map(
        function (year) {

            var chapters =
                Array.isArray(
                    data[year]
                )
                    ? data[year]
                    : [];


            if (!chapters.length) {
                return '';
            }


            var done = 0;


            for (
                var i = 0;
                i < chapters.length;
                i++
            ) {

                if (
                    Number(
                        cessState.progress[
                            chapters[i].id
                        ] || 0
                    ) >= 100
                ) {

                    done++;

                }

            }


            var pct =
                Math.round(
                    done /
                    chapters.length *
                    100
                );


            return `

                <div class="progress-row">

                    <div class="progress-row-name">

                        ${CESS_SUBJECTS[subject].icon}

                        ${CESS_SUBJECTS[subject].label}
                        · ${year}

                    </div>


                    <div class="progress-row-bar">

                        <span
                            style="width:${pct}%">
                        </span>

                    </div>


                    <div class="progress-row-value">

                        ${pct}%

                    </div>

                </div>

            `;

        }
    ).join('');

}


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    function () {

        applyTheme();

        renderHome();

        renderSubject('maths');

        renderSubject('geo');

        renderMemo();

        renderProgress();

    }
);
