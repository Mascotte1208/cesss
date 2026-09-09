/* =========================================================
   CARNET CESS — V2
   Interface + navigation + progression + quiz + examens
   ========================================================= */

var CESS_DBKEY = 'carnetCESSv4';

var cessState = {
    progress: {},
    results: [],
    mistakes: [],
    activity: [],
    streak: 0,
    theme: 'light'
};

var cessSelectedYear = {
    maths: '3e',
    geo: '3e'
};

var cessMemoMode = 'formules';
var cessCurrentChapter = null;
var cessChapterTab = 'cours';
var cessQuizState = null;
var cessExamState = null;


/* =========================================================
   MATIERES
   ========================================================= */

var CESS_SUBJECTS = {

    maths: {

        label: 'Mathématiques',
        short: 'Maths',
        icon: '📐',
        accent: 'primary',

        getData: function () {

            return (
                typeof CHAPITRES !== 'undefined' &&
                CHAPITRES
            )
                ? CHAPITRES
                : {};

        }

    },

    geo: {

        label: 'Géographie',
        short: 'Géo',
        icon: '🌍',
        accent: 'green',

        getData: function () {

            return (
                typeof GEO_CHAPITRES !== 'undefined' &&
                GEO_CHAPITRES
            )
                ? GEO_CHAPITRES
                : {};

        }

    }

};


/* =========================================================
   UTILITAIRES
   ========================================================= */

function esc(value) {

    return String(
        value == null ? '' : value
    )
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

}


function shuffle(arr) {

    var copy = Array.isArray(arr)
        ? arr.slice()
        : [];

    for (
        var i = copy.length - 1;
        i > 0;
        i--
    ) {

        var j = Math.floor(
            Math.random() * (i + 1)
        );

        var tmp = copy[i];

        copy[i] = copy[j];
        copy[j] = tmp;

    }

    return copy;

}


function formatDate(timestamp) {

    if (!timestamp) {
        return '';
    }

    try {

        return new Intl.DateTimeFormat(
            'fr-BE',
            {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }
        ).format(
            new Date(timestamp)
        );

    } catch (error) {

        return '';

    }

}


/* =========================================================
   SAUVEGARDE
   ========================================================= */

function saveState() {

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


(function loadState() {

    try {

        var raw =
            localStorage.getItem(
                CESS_DBKEY
            );

        if (!raw) {
            return;
        }

        var parsed =
            JSON.parse(raw);

        if (
            !parsed ||
            typeof parsed !== 'object'
        ) {
            return;
        }

        cessState.progress =
            parsed.progress || {};

        cessState.results =
            Array.isArray(parsed.results)
                ? parsed.results
                : [];

        cessState.mistakes =
            Array.isArray(parsed.mistakes)
                ? parsed.mistakes
                : [];

        cessState.activity =
            Array.isArray(parsed.activity)
                ? parsed.activity
                : [];

        cessState.streak =
            Number(parsed.streak || 0);

        cessState.theme =
            parsed.theme === 'dark'
                ? 'dark'
                : 'light';

    } catch (error) {

        console.warn(
            'Etat sauvegardé illisible.',
            error
        );

    }

})();


function recordActivity(
    type,
    label,
    detail
) {

    cessState.activity.unshift({

        type: type,

        label: label,

        detail: detail || '',

        date: Date.now()

    });

    cessState.activity =
        cessState.activity.slice(0, 12);

    saveState();

}


/* =========================================================
   DONNEES
   ========================================================= */

function dataFor(subject) {

    if (!CESS_SUBJECTS[subject]) {
        return {};
    }

    return CESS_SUBJECTS[
        subject
    ].getData();

}


function allChaps(subject) {

    var data =
        dataFor(subject);

    var output = [];

    Object.keys(
        data || {}
    ).forEach(function (year) {

        if (
            !Array.isArray(
                data[year]
            )
        ) {
            return;
        }

        data[year].forEach(
            function (chapter) {

                if (
                    !chapter ||
                    typeof chapter !== 'object'
                ) {
                    return;
                }

                var copy = {};

                Object.keys(
                    chapter
                ).forEach(function (key) {

                    copy[key] =
                        chapter[key];

                });

                copy.annee =
                    chapter.annee ||
                    chapter.niveau ||
                    year;

                copy.matiere =
                    subject;

                output.push(copy);

            }
        );

    });

    return output;

}


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


function progressOf(chapter) {

    return Math.max(
        0,
        Math.min(
            100,
            Number(
                cessState.progress[
                    chapter.id
                ] || 0
            )
        )
    );

}


function subjectStats(subject) {

    var chapters =
        allChaps(subject);

    var done =
        chapters.filter(
            function (chapter) {

                return (
                    progressOf(chapter) >=
                    100
                );

            }
        ).length;

    var started =
        chapters.filter(
            function (chapter) {

                var p =
                    progressOf(chapter);

                return (
                    p > 0 &&
                    p < 100
                );

            }
        ).length;

    var avg =
        chapters.length
            ? Math.round(
                chapters.reduce(
                    function (
                        total,
                        chapter
                    ) {

                        return (
                            total +
                            progressOf(
                                chapter
                            )
                        );

                    },
                    0
                ) / chapters.length
            )
            : 0;

    var questions =
        flattenQuestions(subject).length;

    return {

        total: chapters.length,

        done: done,

        started: started,

        avg: avg,

        questions: questions

    };

}


function yearStats(
    subject,
    year
) {

    var data =
        dataFor(subject);

    var chapters =
        Array.isArray(
            data[year]
        )
            ? data[year]
            : [];

    var done =
        chapters.filter(
            function (chapter) {

                return (
                    progressOf(chapter) >=
                    100
                );

            }
        ).length;

    var avg =
        chapters.length
            ? Math.round(
                chapters.reduce(
                    function (
                        total,
                        chapter
                    ) {

                        return (
                            total +
                            progressOf(
                                chapter
                            )
                        );

                    },
                    0
                ) / chapters.length
            )
            : 0;

    return {

        total: chapters.length,

        done: done,

        avg: avg

    };

}


function pctGlobal() {

    var chapters =
        allChaps('maths')
            .concat(
                allChaps('geo')
            );

    if (!chapters.length) {
        return 0;
    }

    return Math.round(
        chapters.reduce(
            function (
                total,
                chapter
            ) {

                return (
                    total +
                    progressOf(chapter)
                );

            },
            0
        ) / chapters.length
    );

}


/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {

    document.body.classList.toggle(
        'dark'
    );

    cessState.theme =
        document.body.classList.contains(
            'dark'
        )
            ? 'dark'
            : 'light';

    saveState();

    updateThemeButton();

}


function updateThemeButton() {

    var button =
        document.getElementById(
            'themeButton'
        );

    if (!button) {
        return;
    }

    if (
        cessState.theme === 'dark'
    ) {

        button.innerHTML =
            '☀️ <span>Mode clair</span>';

    } else {

        button.innerHTML =
            '🌙 <span>Mode sombre</span>';

    }

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(id) {

    var target =
        document.getElementById(id);

    if (!target) {
        return;
    }

    document
        .querySelectorAll('.view')
        .forEach(function (view) {

            view.classList.remove(
                'active'
            );

        });


    target.classList.add(
        'active'
    );


    document
        .querySelectorAll(
            '[data-view]'
        )
        .forEach(function (button) {

            button.classList.toggle(
                'active',
                button.getAttribute(
                    'data-view'
                ) === id
            );

        });


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

    if (id === 'games') {
        renderGamesHome();
    }

    if (id === 'exam') {
        renderExamHome();
    }

    if (id === 'progress') {
        renderProgress();
    }


    window.scrollTo(
        0,
        0
    );

}


function setYear(
    subject,
    year
) {

    cessSelectedYear[
        subject
    ] = year;

    renderSubject(
        subject
    );

}


/* =========================================================
   ACCUEIL
   ========================================================= */

function renderHome() {

    var maths =
        subjectStats('maths');

    var geo =
        subjectStats('geo');

    var total =
        maths.total +
        geo.total;

    var done =
        maths.done +
        geo.done;

    var global =
        pctGlobal();

    var stats =
        document.getElementById(
            'homeStats'
        );

    if (stats) {

        stats.innerHTML = [

            [
                '📚',
                total,
                'Chapitres'
            ],

            [
                '🏆',
                done,
                'Maîtrisés'
            ],

            [
                '🎯',
                cessState.results.length,
                'Quiz réalisés'
            ],

            [
                '📈',
                global + '%',
                'Progression globale'
            ]

        ]
            .map(function (item) {

                return `

                    <div class="home-stat">

                        <span class="home-stat-icon">
                            ${item[0]}
                        </span>

                        <strong class="home-stat-value">
                            ${item[1]}
                        </strong>

                        <span class="home-stat-label">
                            ${item[2]}
                        </span>

                    </div>

                `;

            })
            .join('');

    }


    var subjects =
        document.getElementById(
            'homeSubjects'
        );

    if (subjects) {

        subjects.innerHTML =
            renderSubjectHomeCard(
                'maths',
                maths
            ) +
            renderSubjectHomeCard(
                'geo',
                geo
            );

    }


    var priorities =
        document.getElementById(
            'homePriorities'
        );

    if (priorities) {

        var todo =
            allChaps('maths')
                .concat(
                    allChaps('geo')
                )
                .filter(
                    function (chapter) {

                        return (
                            progressOf(
                                chapter
                            ) < 100
                        );

                    }
                )
                .sort(
                    function (a, b) {

                        return (
                            progressOf(a) -
                            progressOf(b)
                        );

                    }
                )
                .slice(0, 5);


        if (!todo.length) {

            priorities.innerHTML =
                '<div class="empty-state">🎉 Tous les chapitres sont maîtrisés.</div>';

        } else {

            priorities.innerHTML =
                '<div class="simple-list">' +

                todo.map(
                    function (chapter) {

                        return `

                            <div class="simple-list-item">

                                <span class="simple-list-icon">
                                    ${chapter.icone || '📘'}
                                </span>

                                <div class="simple-list-main">

                                    <strong>
                                        ${esc(
                                            chapter.titre ||
                                            'Chapitre'
                                        )}
                                    </strong>

                                    <small>
                                        ${esc(
                                            chapter.annee
                                        )}
                                        ·
                                        ${progressOf(
                                            chapter
                                        )}%
                                        parcouru
                                    </small>

                                </div>

                                <button
                                    class="simple-list-action"
                                    onclick="openChapter('${esc(chapter.id)}')"
                                    type="button"
                                >
                                    Ouvrir →
                                </button>

                            </div>

                        `;

                    }
                ).join('') +

                '</div>';

        }

    }


    var activity =
        document.getElementById(
            'homeActivity'
        );

    if (activity) {

        var items =
            cessState.activity.slice(
                0,
                5
            );

        if (!items.length) {

            activity.innerHTML =
                '<div class="empty-state">Ton activité apparaîtra ici après tes premières révisions.</div>';

        } else {

            activity.innerHTML =
                '<div class="simple-list">' +

                items.map(
                    function (item) {

                        var icon =
                            item.type === 'quiz'
                                ? '🎯'
                                : item.type === 'chapter'
                                    ? '📖'
                                    : '📝';

                        return `

                            <div class="simple-list-item">

                                <span class="simple-list-icon">
                                    ${icon}
                                </span>

                                <div class="simple-list-main">

                                    <strong>
                                        ${esc(
                                            item.label
                                        )}
                                    </strong>

                                    <small>
                                        ${esc(
                                            item.detail
                                        )}
                                        ·
                                        ${formatDate(
                                            item.date
                                        )}
                                    </small>

                                </div>

                            </div>

                        `;

                    }
                ).join('') +

                '</div>';

        }

    }


    var daily =
        document.getElementById(
            'dailyText'
        );

    if (daily) {

        daily.textContent =
            flattenQuestions('all').length +
            ' questions sont prêtes pour une session rapide.';

    }

}


function renderSubjectHomeCard(
    subject,
    stats
) {

    var info =
        CESS_SUBJECTS[
            subject
        ];

    return `

        <article
            class="subject-card ${
                subject === 'geo'
                    ? 'geo-card'
                    : 'maths-card'
            }"
        >

            <div class="subject-card-top">

                <span class="subject-icon">
                    ${info.icon}
                </span>

                <span class="subject-arrow">
                    →
                </span>

            </div>

            <h3>
                ${info.label}
            </h3>

            <p>
                ${stats.total}
                chapitres ·
                ${stats.questions}
                questions disponibles
            </p>

            <div class="progress-line">

                <span
                    style="width:${stats.avg}%"
                ></span>

            </div>

            <div class="subject-card-footer">

                <span>
                    ${stats.avg}% maîtrisé
                </span>

                <button
                    onclick="showView('${subject}')"
                    type="button"
                >
                    Voir les cours →
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   MATIERE
   ========================================================= */

function renderSubject(
    subject
) {

    var data =
        dataFor(subject);

    var info =
        CESS_SUBJECTS[
            subject
        ];

    var years = [
        '3e',
        '4e',
        '5e',
        '6e'
    ];

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
        !yearsBox ||
        !content
    ) {
        return;
    }


    if (total) {

        total.textContent =
            allChaps(subject).length +
            ' chapitres · ' +
            subjectStats(subject).avg +
            '% maîtrisé';

    }


    yearsBox.innerHTML =
        years.map(
            function (year) {

                var stats =
                    yearStats(
                        subject,
                        year
                    );

                var active =
                    cessSelectedYear[
                        subject
                    ] === year
                        ? 'active'
                        : '';

                return `

                    <button
                        class="year-button ${active}"
                        onclick="setYear('${subject}','${year}')"
                        type="button"
                    >

                        <strong>
                            ${year}
                        </strong>

                        <small>
                            ${stats.total}
                            chapitres ·
                            ${stats.avg}%
                        </small>

                    </button>

                `;

            }
        ).join('');


    var selected =
        cessSelectedYear[
            subject
        ];


    var chapters =
        Array.isArray(
            data[selected]
        )
            ? data[selected]
            : [];


    var stats =
        yearStats(
            subject,
            selected
        );


    if (!chapters.length) {

        content.innerHTML = `

            <div class="content-card">

                <div class="empty-state">
                    Aucun chapitre disponible
                    pour ${selected}.
                </div>

            </div>

        `;

        return;

    }


    var groups = {};


    chapters.forEach(
        function (chapter) {

            var key =
                chapter.domaine ||
                chapter.domain ||
                chapter.categorie ||
                chapter.theme ||
                'Programme';

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(
                chapter
            );

        }
    );


    var keys =
        Object.keys(groups);


    var domainHTML =
        keys.length > 1

            ? `

                <div class="domain-grid">

                    ${keys.map(
                        function (key) {

                            var list =
                                groups[key];

                            var average =
                                Math.round(
                                    list.reduce(
                                        function (
                                            total,
                                            chapter
                                        ) {

                                            return (
                                                total +
                                                progressOf(
                                                    chapter
                                                )
                                            );

                                        },
                                        0
                                    ) /
                                    list.length
                                );

                            return `

                                <section class="domain-card">

                                    <div class="domain-header">

                                        <span class="domain-icon">
                                            ${
                                                list[0].icone ||
                                                info.icon
                                            }
                                        </span>

                                        <div class="domain-title">

                                            <strong>
                                                ${esc(key)}
                                            </strong>

                                            <small>
                                                ${list.length}
                                                chapitre${
                                                    list.length > 1
                                                        ? 's'
                                                        : ''
                                                }
                                            </small>

                                        </div>

                                        <span class="domain-count">
                                            ${average}%
                                        </span>

                                    </div>

                                    <div class="chapter-list">

                                        ${
                                            list
                                                .map(
                                                    renderChapterItem
                                                )
                                                .join('')
                                        }

                                    </div>

                                </section>

                            `;

                        }
                    ).join('')}

                </div>

            `

            : `

                <div class="content-card">

                    <div class="chapter-list">

                        ${
                            chapters
                                .map(
                                    renderChapterItem
                                )
                                .join('')
                        }

                    </div>

                </div>

            `;


    content.innerHTML = `

        <div class="year-summary">

            <div>

                <strong>
                    ${selected}
                </strong>

                <span>
                    ${stats.total}
                    chapitres
                </span>

            </div>

            <div>

                <strong>
                    ${stats.done}/${stats.total}
                </strong>

                <span>
                    maîtrisés
                </span>

            </div>

            <div>

                <strong>
                    ${stats.avg}%
                </strong>

                <span>
                    progression
                </span>

            </div>

        </div>

        ${domainHTML}

    `;

}


function renderChapterItem(
    chapter
) {

    var p =
        progressOf(chapter);

    var status;


    if (p >= 100) {

        status =
            '<span class="chapter-status status-done">✓ Maîtrisé</span>';

    } else if (p > 0) {

        status =
            '<span class="chapter-status status-progress">' +
            p +
            '%</span>';

    } else {

        status =
            '<span class="chapter-status status-new">Nouveau</span>';

    }


    return `

        <button
            class="chapter-item"
            onclick="openChapter('${esc(chapter.id)}')"
            type="button"
        >

            <span class="chapter-icon">
                ${chapter.icone || '📘'}
            </span>

            <span class="chapter-main">

                <strong>
                    ${esc(
                        chapter.titre ||
                        'Chapitre'
                    )}
                </strong>

                <small>
                    ${esc(
                        chapter.desc ||
                        'Cours et exercices'
                    )}
                </small>

            </span>

            ${status}

            <span>
                →
            </span>

        </button>

    `;

}


/* =========================================================
   CHAPITRE
   ========================================================= */

function openChapter(id) {

    var chapter =
        findChapter(id);

    if (!chapter) {
        return;
    }

    cessCurrentChapter =
        chapter;

    cessChapterTab =
        'cours';

    renderChapterModal();

}


function closeChapter() {

    var modal =
        document.getElementById(
            'chapterModal'
        );

    if (modal) {
        modal.remove();
    }

    cessCurrentChapter =
        null;

}


function chapterTab(tab) {

    cessChapterTab =
        tab;

    renderChapterModal();

}


function renderChapterModal() {

    if (!cessCurrentChapter) {
        return;
    }


    var chapter =
        cessCurrentChapter;

    var p =
        progressOf(chapter);

    var info =
        CESS_SUBJECTS[
            chapter.matiere
        ];


    var old =
        document.getElementById(
            'chapterModal'
        );

    if (old) {
        old.remove();
    }


    var modal =
        document.createElement(
            'div'
        );

    modal.id =
        'chapterModal';

    modal.className =
        'modal';


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


    var body = '';


    if (
        cessChapterTab ===
        'cours'
    ) {

        body = `

            <div class="chapter-layout">

                <div>

                    <article
                        class="content-card course-content"
                    >

                        <h3>
                            📖 Cours
                        </h3>

                        ${
                            chapter.cours ||
                            '<p>Le cours détaillé n’est pas renseigné dans les données de ce chapitre.</p>'
                        }

                    </article>

                </div>

                ${renderChapterSidebar(
                    chapter,
                    objectives,
                    topics
                )}

            </div>

        `;

    } else if (
        cessChapterTab ===
        'retenir'
    ) {

        body = `

            <div class="chapter-layout">

                <div>

                    <article class="content-card">

                        <div class="section-heading">

                            <span class="eyebrow">
                                L’essentiel
                            </span>

                            <h2>
                                À retenir
                            </h2>

                        </div>

                        <div class="goal-list">

                            ${
                                objectives.length

                                    ? objectives.map(
                                        function (item) {

                                            return `

                                                <div class="goal-item">

                                                    <span>
                                                        ✓
                                                    </span>

                                                    <span>
                                                        ${esc(item)}
                                                    </span>

                                                </div>

                                            `;

                                        }
                                    ).join('')

                                    : `
                                        <div class="empty-state">
                                            Aucun objectif renseigné.
                                        </div>
                                    `
                            }

                        </div>

                    </article>


                    ${
                        matieres.length

                            ? `

                                <article class="content-card">

                                    <div class="section-heading">

                                        <span class="eyebrow">
                                            Notions
                                        </span>

                                        <h2>
                                            Mots-clés
                                        </h2>

                                    </div>

                                    <div class="topic-list">

                                        ${
                                            matieres.map(
                                                function (item) {

                                                    return `
                                                        <div class="topic-item">
                                                            ${esc(item)}
                                                        </div>
                                                    `;

                                                }
                                            ).join('')
                                        }

                                    </div>

                                </article>

                            `

                            : ''
                    }

                </div>

                ${renderChapterSidebar(
                    chapter,
                    objectives,
                    topics
                )}

            </div>

        `;

    } else {

        body = `

            <div class="chapter-layout">

                <div>

                    <article class="content-card">

                        <div class="section-heading">

                            <span class="eyebrow">
                                Entraînement
                            </span>

                            <h2>
                                Exercices du chapitre
                            </h2>

                        </div>

                        ${renderExercises(
                            exercises
                        )}

                    </article>

                </div>

                ${renderChapterSidebar(
                    chapter,
                    objectives,
                    topics
                )}

            </div>

        `;

    }


    modal.innerHTML = `

        <div class="modal-box chapter-modal-box">

            <button
                class="modal-close"
                onclick="closeChapter()"
                aria-label="Fermer"
                type="button"
            >
                ×
            </button>


            <div class="chapter-top">

                <div class="chapter-breadcrumb">

                    <button
                        onclick="closeChapter()"
                        type="button"
                    >
                        ← Retour
                    </button>

                    <span>›</span>

                    <span>
                        ${info.icon}
                        ${info.short}
                    </span>

                    <span>›</span>

                    <span>
                        ${esc(
                            chapter.annee
                        )}
                    </span>

                </div>


                <div class="chapter-hero">

                    <div>

                        <div class="chapter-title-row">

                            <span class="chapter-big-icon">
                                ${
                                    chapter.icone ||
                                    info.icon
                                }
                            </span>

                            <div class="chapter-title">

                                <span class="eyebrow">
                                    ${info.label}
                                    ·
                                    ${esc(
                                        chapter.annee
                                    )}
                                </span>

                                <h1>
                                    ${esc(
                                        chapter.titre ||
                                        'Chapitre'
                                    )}
                                </h1>

                                <p>
                                    ${esc(
                                        chapter.desc ||
                                        ''
                                    )}
                                </p>

                            </div>

                        </div>

                    </div>


                    <div class="chapter-progress-box">

                        <span class="chapter-progress-number">
                            ${p}%
                        </span>

                        <span class="chapter-progress-label">
                            progression
                        </span>

                        <div class="progress-line">

                            <span
                                style="width:${p}%"
                            ></span>

                        </div>

                    </div>

                </div>


                <div class="chapter-tabs">

                    <button
                        class="chapter-tab ${
                            cessChapterTab ===
                            'cours'
                                ? 'active'
                                : ''
                        }"
                        onclick="chapterTab('cours')"
                        type="button"
                    >
                        📖 Cours
                    </button>

                    <button
                        class="chapter-tab ${
                            cessChapterTab ===
                            'retenir'
                                ? 'active'
                                : ''
                        }"
                        onclick="chapterTab('retenir')"
                        type="button"
                    >
                        ⭐ À retenir
                    </button>

                    <button
                        class="chapter-tab ${
                            cessChapterTab ===
                            'exercices'
                                ? 'active'
                                : ''
                        }"
                        onclick="chapterTab('exercices')"
                        type="button"
                    >
                        🎯 Exercices
                        (${exercises.length})
                    </button>

                </div>

            </div>


            ${body}


            <div class="chapter-footer">

                <span>

                    ${
                        p >= 100

                            ? '✓ Chapitre maîtrisé'

                            : 'Continue à t’entraîner pour le maîtriser.'
                    }

                </span>


                <div class="footer-actions">

                    <button
                        class="button secondary"
                        onclick="closeChapter()"
                        type="button"
                    >
                        Fermer
                    </button>

                    <button
                        class="button primary"
                        onclick="markDone('${esc(chapter.id)}')"
                        type="button"
                    >
                        ${
                            p >= 100
                                ? '✓ Maîtrisé'
                                : '✓ Marquer maîtrisé'
                        }
                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    modal.addEventListener(
        'click',
        function (event) {

            if (
                event.target ===
                modal
            ) {

                closeChapter();

            }

        }
    );

}


function renderChapterSidebar(
    chapter,
    objectives,
    topics
) {

    return `

        <aside class="chapter-sidebar">

            <div class="chapter-sidebar-card">

                <h3>
                    🎯 Objectifs
                </h3>

                <div class="goal-list">

                    ${
                        objectives.length

                            ? objectives
                                .slice(0, 5)
                                .map(
                                    function (item) {

                                        return `

                                            <div class="goal-item">

                                                <span>
                                                    ✓
                                                </span>

                                                <span>
                                                    ${esc(item)}
                                                </span>

                                            </div>

                                        `;

                                    }
                                )
                                .join('')

                            : `
                                <div class="empty-state">
                                    Aucun objectif.
                                </div>
                            `
                    }

                </div>

            </div>


            ${
                topics.length

                    ? `

                        <div class="chapter-sidebar-card">

                            <h3>
                                📌 À connaître
                            </h3>

                            <div class="topic-list">

                                ${
                                    topics
                                        .slice(0, 8)
                                        .map(
                                            function (item) {

                                                return `
                                                    <div class="topic-item">
                                                        ${esc(item)}
                                                    </div>
                                                `;

                                            }
                                        )
                                        .join('')
                                }

                            </div>

                        </div>

                    `

                    : ''
            }

        </aside>

    `;

}


/* =========================================================
   EXERCICES
   ========================================================= */

function renderExercises(
    exercises
) {

    if (!exercises.length) {

        return `

            <div class="empty-state">
                Aucun exercice à choix multiple
                n’est renseigné pour ce chapitre.
            </div>

        `;

    }


    return `

        <div class="exercise-list">

            ${
                exercises.map(
                    function (
                        question,
                        index
                    ) {

                        var options =
                            Array.isArray(
                                question.options
                            )
                                ? question.options
                                : [];


                        if (!options.length) {

                            return `

                                <div class="exercise-card">

                                    <span class="exercise-number">
                                        Exercice ${index + 1}
                                    </span>

                                    <div class="exercise-question">
                                        ${esc(
                                            question.question ||
                                            ''
                                        )}
                                    </div>

                                    <div class="correction">
                                        ${esc(
                                            question.correction ||
                                            'Voir la correction du sujet.'
                                        )}
                                    </div>

                                </div>

                            `;

                        }


                        return `

                            <div
                                class="exercise-card"
                                data-exercise="${index}"
                            >

                                <span class="exercise-number">
                                    Exercice ${index + 1}
                                </span>

                                <div class="exercise-question">
                                    ${esc(
                                        question.question ||
                                        ''
                                    )}
                                </div>


                                <div class="exercise-options">

                                    ${
                                        options.map(
                                            function (
                                                option,
                                                optionIndex
                                            ) {

                                                return `

                                                    <button
                                                        class="exercise-option"
                                                        onclick="
                                                            answerChapterExercise(
                                                                this,
                                                                ${index},
                                                                ${optionIndex},
                                                                ${Number(
                                                                    question.correct ||
                                                                    0
                                                                )}
                                                            )
                                                        "
                                                        type="button"
                                                    >
                                                        ${esc(option)}
                                                    </button>

                                                `;

                                            }
                                        ).join('')
                                    }

                                </div>


                                <div
                                    class="correction hidden"
                                    id="corr-${index}"
                                >
                                    💡
                                    ${esc(
                                        question.correction ||
                                        ''
                                    )}
                                </div>

                            </div>

                        `;

                    }
                ).join('')
            }

        </div>

    `;

}


function answerChapterExercise(
    button,
    qIndex,
    choice,
    correct
) {

    var card =
        button.closest(
            '.exercise-card'
        );

    if (!card) {
        return;
    }

    if (
        card.getAttribute(
            'data-answered'
        ) === '1'
    ) {
        return;
    }


    card.setAttribute(
        'data-answered',
        '1'
    );


    var buttons =
        card.querySelectorAll(
            '.exercise-option'
        );


    buttons.forEach(
        function (
            current,
            index
        ) {

            current.disabled =
                true;

            if (
                index ===
                correct
            ) {

                current.classList.add(
                    'correct'
                );

            }

        }
    );


    if (
        choice !==
        correct
    ) {

        button.classList.add(
            'wrong'
        );

    }


    var correction =
        card.querySelector(
            '.correction'
        );

    if (correction) {

        correction.classList.remove(
            'hidden'
        );

    }

}


/* =========================================================
   MAITRISE
   ========================================================= */

function markDone(id) {

    var chapter =
        findChapter(id);

    if (!chapter) {
        return;
    }


    cessState.progress[id] =
        100;


    recordActivity(
        'chapter',
        chapter.titre ||
            'Chapitre',
        'Chapitre marqué comme maîtrisé'
    );


    saveState();


    if (cessCurrentChapter) {

        renderChapterModal();

    }


    renderHome();

    renderSubject(
        chapter.matiere
    );

}


/* =========================================================
   QUESTIONS
   ========================================================= */

function flattenQuestions(
    filter
) {

    var chapters;


    if (
        filter === 'maths' ||
        filter === 'geo'
    ) {

        chapters =
            allChaps(filter);

    } else {

        chapters =
            allChaps('maths')
                .concat(
                    allChaps('geo')
                );

    }


    var output = [];


    chapters.forEach(
        function (chapter) {

            if (
                !Array.isArray(
                    chapter.exercices
                )
            ) {
                return;
            }


            chapter.exercices.forEach(
                function (
                    question,
                    index
                ) {

                    if (
                        !question ||
                        !Array.isArray(
                            question.options
                        ) ||
                        !question.options.length
                    ) {
                        return;
                    }


                    output.push({

                        id:
                            String(
                                chapter.id
                            ) +
                            '_' +
                            index,

                        question:
                            question.question ||
                            '',

                        options:
                            question.options,

                        correct:
                            Number(
                                question.correct ||
                                0
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
                            chapter.matiere,

                        chapterId:
                            chapter.id

                    });

                }
            );

        }
    );


    if (
        filter ===
        'mistakes'
    ) {

        output =
            output.filter(
                function (question) {

                    return (
                        cessState.mistakes.indexOf(
                            question.id
                        ) !== -1
                    );

                }
            );

    }


    return output;

}


/* =========================================================
   VRAI / FAUX
   ========================================================= */

function trueFalseQuestions() {

    return [

        [
            'Deux triangles isométriques ont leurs côtés homologues de même longueur.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '3e'
        ],

        [
            'Des triangles semblables ont toujours leurs côtés homologues égaux.',
            'Vrai',
            'Faux',
            1,
            'maths',
            '3e'
        ],

        [
            'Le théorème de Pythagore s’utilise dans un triangle rectangle.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '3e'
        ],

        [
            'sin(α) = opposé / hypoténuse dans un triangle rectangle.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '3e'
        ],

        [
            'La fonction affine s’écrit f(x)=mx+p.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '4e'
        ],

        [
            'La médiane est une mesure de tendance centrale.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '4e'
        ],

        [
            'Un aléa est un phénomène dangereux potentiel.',
            'Vrai',
            'Faux',
            0,
            'geo',
            '3e'
        ],

        [
            'La densité de population est le nombre d’habitants par km².',
            'Vrai',
            'Faux',
            0,
            'geo',
            '4e'
        ],

        [
            'Les énergies fossiles sont renouvelables.',
            'Vrai',
            'Faux',
            1,
            'geo',
            '5e'
        ],

        [
            'Un conflit d’usage peut apparaître lorsque plusieurs acteurs veulent utiliser le même espace.',
            'Vrai',
            'Faux',
            0,
            'geo',
            '6e'
        ]

    ].map(
        function (
            item,
            index
        ) {

            return {

                id:
                    'tf_' +
                    index,

                question:
                    item[0],

                options: [
                    item[1],
                    item[2]
                ],

                correct:
                    item[3],

                matiere:
                    item[4],

                annee:
                    item[5],

                chapter:
                    'Vrai / Faux'

            };

        }
    );

}


/* =========================================================
   JEUX
   ========================================================= */

function startQuiz(
    mode
) {

    var questions;


    if (
        mode ===
        'truefalse'
    ) {

        questions =
            trueFalseQuestions();

    } else if (
        mode ===
        'mistakes'
    ) {

        questions =
            flattenQuestions(
                'mistakes'
            );

    } else {

        questions =
            flattenQuestions(
                mode ===
                'mixed'
                    ? 'all'
                    : mode
            );

    }


    if (!questions.length) {

        renderGamesMessage(
            mode === 'mistakes'
                ? 'Aucune erreur enregistrée pour le moment.'
                : 'Aucune question disponible pour ce mode.'
        );

        showView(
            'games'
        );

        return;

    }


    cessQuizState = {

        qs:
            shuffle(
                questions
            ).slice(0, 10),

        index:
            0,

        score:
            0,

        mode:
            mode,

        recorded:
            false

    };


    showView(
        'games'
    );

    renderQuiz();

}


function quizChapter(
    id
) {

    var questions =
        flattenQuestions(
            'all'
        ).filter(
            function (question) {

                return (
                    question.chapterId ===
                    id
                );

            }
        );


    if (!questions.length) {

        alert(
            'Aucune question à choix multiple pour ce chapitre.'
        );

        return;

    }


    cessQuizState = {

        qs:
            shuffle(
                questions
            ),

        index:
            0,

        score:
            0,

        mode:
            'chapter',

        chapterId:
            id,

        recorded:
            false

    };


    closeChapter();

    showView(
        'games'
    );

    renderQuiz();

}


function startCapitals() {

    var capitals =
        typeof CAPITALES !==
            'undefined' &&
        Array.isArray(
            CAPITALES
        )
            ? CAPITALES
            : [];


    if (!capitals.length) {

        renderGamesMessage(
            'Le jeu des capitales n’est pas disponible dans les données actuelles.'
        );

        showView(
            'games'
        );

        return;

    }


    var questions =
        shuffle(
            capitals
        )
            .slice(0, 10)
            .map(
                function (
                    item,
                    index
                ) {

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
                                function (
                                    other
                                ) {

                                    return (
                                        other !==
                                        item
                                    );

                                }
                            )
                        )
                            .slice(0, 3)
                            .map(
                                function (
                                    other
                                ) {

                                    return (
                                        other.capitale ||
                                        other.capital ||
                                        ''
                                    );

                                }
                            );


                    var options =
                        shuffle(
                            [
                                correct
                            ].concat(
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
                            '—',

                        chapter:
                            'Capitales'

                    };

                }
            );


    cessQuizState = {

        qs:
            questions,

        index:
            0,

        score:
            0,

        mode:
            'capitales',

        recorded:
            false

    };


    showView(
        'games'
    );

    renderQuiz();

}


function quickRevision() {

    startQuiz(
        'mixed'
    );

}


function renderGamesHome() {

    var panel =
        document.getElementById(
            'gamePanel'
        );

    if (!panel) {
        return;
    }


    if (
        cessQuizState &&
        cessQuizState.active
    ) {

        renderQuiz();

        return;

    }


    panel.innerHTML = `

        <div class="quiz-start">

            <div class="quiz-start-icon">
                🎮
            </div>

            <span class="eyebrow">
                Entraînement
            </span>

            <h2>
                Choisis ton mode
            </h2>

            <p>
                Fais une courte session, travaille tes
                erreurs ou prépare-toi avec un quiz
                par matière.
            </p>


            <div class="game-grid">

                <button
                    class="game-card"
                    onclick="startQuiz('mixed')"
                    type="button"
                >
                    <span>🔀</span>
                    <strong>Quiz mixte</strong>
                    <small>10 questions variées</small>
                </button>


                <button
                    class="game-card"
                    onclick="startQuiz('maths')"
                    type="button"
                >
                    <span>📐</span>
                    <strong>Quiz Maths</strong>
                    <small>Questions de maths</small>
                </button>


                <button
                    class="game-card"
                    onclick="startQuiz('geo')"
                    type="button"
                >
                    <span>🌍</span>
                    <strong>Quiz Géo</strong>
                    <small>Questions de géographie</small>
                </button>


                <button
                    class="game-card"
                    onclick="startQuiz('truefalse')"
                    type="button"
                >
                    <span>✅</span>
                    <strong>Vrai / Faux</strong>
                    <small>Révision express</small>
                </button>


                <button
                    class="game-card"
                    onclick="startQuiz('mistakes')"
                    type="button"
                >
                    <span>🔁</span>
                    <strong>Mes erreurs</strong>
                    <small>Revoir les questions ratées</small>
                </button>


                <button
                    class="game-card"
                    onclick="startCapitals()"
                    type="button"
                >
                    <span>🗺️</span>
                    <strong>Capitales</strong>
                    <small>Tester ta mémoire</small>
                </button>

            </div>

        </div>

    `;

}


function renderGamesMessage(
    text
) {

    var panel =
        document.getElementById(
            'gamePanel'
        );

    if (!panel) {
        return;
    }


    panel.innerHTML = `

        <div class="quiz-start">

            <div class="quiz-start-icon">
                ℹ️
            </div>

            <h2>
                Pas encore
            </h2>

            <p>
                ${esc(text)}
            </p>

            <button
                class="button primary"
                onclick="renderGamesHome()"
                type="button"
            >
                Retour aux jeux
            </button>

        </div>

    `;

}


/* =========================================================
   AFFICHAGE QUIZ
   ========================================================= */

function renderQuiz() {

    var panel =
        document.getElementById(
            'gamePanel'
        );

    if (
        !panel ||
        !cessQuizState
    ) {
        return;
    }


    var state =
        cessQuizState;


    if (
        state.index >=
        state.qs.length
    ) {

        var total =
            state.qs.length;

        var score =
            state.score;

        var percentage =
            total
                ? Math.round(
                    score /
                    total *
                    100
                )
                : 0;


        if (
            !state.recorded
        ) {

            cessState.results.push({

                date:
                    Date.now(),

                score:
                    score,

                total:
                    total,

                mode:
                    state.mode

            });


            recordActivity(
                'quiz',
                'Quiz terminé',
                score +
                    '/' +
                    total +
                    ' · ' +
                    percentage +
                    '%'
            );


            state.recorded =
                true;

            saveState();

        }


        var message =
            percentage >= 80
                ? 'Excellent travail !'
                : percentage >= 60
                    ? 'Bonne session. Continue comme ça !'
                    : 'Session terminée. Reprends les chapitres les plus difficiles.';


        panel.innerHTML = `

            <div class="quiz-result">

                <div class="result-circle">
                    ${percentage}%
                </div>

                <span class="eyebrow">
                    Session terminée
                </span>

                <h2>
                    ${score}
                    bonne${
                        score > 1
                            ? 's'
                            : ''
                    }
                    réponse${
                        score > 1
                            ? 's'
                            : ''
                    }
                    sur
                    ${total}
                </h2>

                <p>
                    ${message}
                </p>

                <div class="result-actions">

                    <button
                        class="button secondary"
                        onclick="renderGamesHome()"
                        type="button"
                    >
                        Autres jeux
                    </button>

                    <button
                        class="button primary"
                        onclick="replayQuiz()"
                        type="button"
                    >
                        Rejouer
                    </button>

                </div>

            </div>

        `;

        return;

    }


    var question =
        state.qs[
            state.index
        ];


    var percentage =
        Math.round(
            state.index /
            state.qs.length *
            100
        );


    panel.innerHTML = `

        <div class="quiz-question-card">

            <button
                class="back-button"
                onclick="renderGamesHome()"
                type="button"
            >
                ← Quitter le quiz
            </button>


            <div class="quiz-progress">

                <span
                    style="width:${percentage}%"
                ></span>

            </div>


            <div class="quiz-meta">

                <span>
                    Question
                    ${state.index + 1}
                    /
                    ${state.qs.length}
                </span>

                <span>
                    ${
                        question.matiere ===
                        'maths'
                            ? '📐 Maths'
                            : '🌍 Géo'
                    }
                    ·
                    ${esc(
                        question.annee ||
                        ''
                    )}
                </span>

            </div>


            <div class="quiz-question">

                ${esc(
                    question.question
                )}

            </div>


            <div class="quiz-options">

                ${
                    question.options.map(
                        function (
                            option,
                            index
                        ) {

                            return `

                                <button
                                    class="quiz-option"
                                    onclick="answerQuiz(${index})"
                                    type="button"
                                >

                                    <span class="option-letter">
                                        ${
                                            String.fromCharCode(
                                                65 + index
                                            )
                                        }
                                    </span>

                                    ${esc(
                                        option
                                    )}

                                </button>

                            `;

                        }
                    ).join('')
                }

            </div>

        </div>

    `;

}


function replayQuiz() {

    if (!cessQuizState) {
        return;
    }


    if (
        cessQuizState.mode ===
        'capitales'
    ) {

        startCapitals();

        return;

    }


    if (
        cessQuizState.mode ===
        'chapter'
    ) {

        quizChapter(
            cessQuizState.chapterId
        );

        return;

    }


    startQuiz(
        cessQuizState.mode
    );

}


function answerQuiz(
    index
) {

    if (!cessQuizState) {
        return;
    }


    var question =
        cessQuizState.qs[
            cessQuizState.index
        ];


    if (
        index ===
        Number(
            question.correct
        )
    ) {

        cessQuizState.score++;

    } else {

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

    saveState();

    renderQuiz();

}


/* =========================================================
   MEMO
   ========================================================= */

function setMemoMode(
    mode
) {

    cessMemoMode =
        mode;

    renderMemo();

}


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
                search.value ||
                ''
            )
                .toLowerCase()
                .trim()
            : '';


    var selectedYear =
        year
            ? year.value
            : 'all';


    document
        .querySelectorAll(
            '.memo-tab'
        )
        .forEach(
            function (button) {

                button.classList.toggle(
                    'active',
                    button.getAttribute(
                        'data-mode'
                    ) ===
                    cessMemoMode
                );

            }
        );


    /* =====================================================
       VOCABULAIRE
       ===================================================== */

    if (
        cessMemoMode ===
        'vocab'
    ) {

        var vocabulary =
            typeof GEO_VOCAB !==
                'undefined' &&
            Array.isArray(
                GEO_VOCAB
            )
                ? GEO_VOCAB
                : [];


        var filtered =
            vocabulary.filter(
                function (item) {

                    var text = [

                        item.mot,

                        item.terme,

                        item.def,

                        item.definition,

                        item.theme,

                        item.categorie

                    ]
                        .join(' ')
                        .toLowerCase();


                    var matchText =
                        text.indexOf(
                            term
                        ) !== -1;


                    var itemYear =
                        item.annee ||
                        item.niveau ||
                        '';


                    var matchYear =
                        selectedYear ===
                            'all' ||
                        itemYear ===
                            selectedYear;


                    return (
                        matchText &&
                        matchYear
                    );

                }
            );


        if (!filtered.length) {

            box.innerHTML =
                '<div class="empty-state">Aucun terme trouvé.</div>';

            return;

        }


        box.innerHTML = `

            <div class="memo-grid">

                ${
                    filtered.map(
                        function (item) {

                            return `

                                <article class="memo-card">

                                    <strong>
                                        🌍
                                        ${esc(
                                            item.mot ||
                                            item.terme ||
                                            'Terme'
                                        )}
                                    </strong>

                                    <p>
                                        ${esc(
                                            item.def ||
                                            item.definition ||
                                            ''
                                        )}
                                    </p>

                                    <span class="memo-tag">
                                        ${esc(
                                            item.annee ||
                                            item.niveau ||
                                            ''
                                        )}
                                        ·
                                        ${esc(
                                            item.theme ||
                                            item.categorie ||
                                            'Géographie'
                                        )}
                                    </span>

                                </article>

                            `;

                        }
                    ).join('')
                }

            </div>

        `;

        return;

    }


    /* =====================================================
       FORMULES
       ===================================================== */

    var formulas = [];


    if (
        typeof FORMULES_DATA !==
            'undefined' &&
        FORMULES_DATA &&
        typeof FORMULES_DATA ===
            'object'
    ) {

        Object.keys(
            FORMULES_DATA
        ).forEach(
            function (key) {

                if (
                    Array.isArray(
                        FORMULES_DATA[key]
                    )
                ) {

                    formulas =
                        formulas.concat(
                            FORMULES_DATA[key]
                        );

                }

            }
        );

    }


    formulas =
        formulas.filter(
            function (formula) {

                var text = [

                    formula.titre,

                    formula.definition,

                    formula.exemple,

                    formula.categorie

                ]
                    .join(' ')
                    .toLowerCase();


                return (

                    text.indexOf(
                        term
                    ) !== -1

                    &&

                    (
                        selectedYear ===
                            'all' ||
                        formula.annee ===
                            selectedYear
                    )

                );

            }
        );


    if (!formulas.length) {

        box.innerHTML =
            '<div class="empty-state">Aucune formule trouvée.</div>';

        return;

    }


    box.innerHTML = `

        <div class="memo-grid">

            ${
                formulas.map(
                    function (formula) {

                        return `

                            <article class="memo-card">

                                <strong>

                                    ${
                                        formula.icone ||
                                        '📐'
                                    }

                                    ${esc(
                                        formula.titre ||
                                        'Formule'
                                    )}

                                </strong>


                                <p>
                                    ${esc(
                                        formula.definition ||
                                        ''
                                    )}
                                </p>


                                ${
                                    formula.exemple

                                        ? `

                                            <div class="memo-example">

                                                📌
                                                ${esc(
                                                    formula.exemple
                                                )}

                                            </div>

                                        `

                                        : ''
                                }


                                <span class="memo-tag">

                                    ${esc(
                                        formula.annee ||
                                        ''
                                    )}

                                    ·

                                    ${esc(
                                        formula.categorie ||
                                        'Maths'
                                    )}

                                </span>

                            </article>

                        `;

                    }
                ).join('')
            }

        </div>

    `;

}


/* =========================================================
   EXAMENS
   ========================================================= */

function renderExamHome() {

    var box =
        document.getElementById(
            'examPanel'
        );

    if (!box) {
        return;
    }


    var special =
        typeof EXAMENS_CESS !==
            'undefined' &&
        Array.isArray(
            EXAMENS_CESS
        )
            ? EXAMENS_CESS
            : [];


    box.innerHTML = `

        <div class="exam-list">


            <article class="exam-card">

                <div class="exam-icon">
                    📐
                </div>

                <h3>
                    Examen blanc Maths
                </h3>

                <p>
                    Jusqu’à 15 questions tirées
                    de tes exercices de mathématiques.
                </p>

                <button
                    class="button primary"
                    onclick="startExam('maths')"
                    type="button"
                >
                    Commencer →
                </button>

            </article>


            <article class="exam-card">

                <div class="exam-icon">
                    🌍
                </div>

                <h3>
                    Examen blanc Géo
                </h3>

                <p>
                    Jusqu’à 15 questions tirées
                    de tes exercices de géographie.
                </p>

                <button
                    class="button primary"
                    onclick="startExam('geo')"
                    type="button"
                >
                    Commencer →
                </button>

            </article>


        </div>


        ${
            special.length

                ? `

                    <div class="content-card exam-special">

                        <div class="section-heading">

                            <span class="eyebrow">
                                Sujets présents dans tes données
                            </span>

                            <h2>
                                📝 Sujets CESS
                            </h2>

                        </div>


                        ${
                            special.map(
                                function (subject) {

                                    return `

                                        <details>

                                            <summary>
                                                ${esc(
                                                    subject.titre ||
                                                    subject.id
                                                )}
                                            </summary>


                                            ${
                                                Array.isArray(
                                                    subject.exercices
                                                )

                                                    ? `

                                                        <div class="special-list">

                                                            ${
                                                                subject.exercices.map(
                                                                    function (
                                                                        question
                                                                    ) {

                                                                        return `

                                                                            <div>

                                                                                <strong>
                                                                                    ${esc(
                                                                                        question.question ||
                                                                                        ''
                                                                                    )}
                                                                                </strong>

                                                                                <p>
                                                                                    ${esc(
                                                                                        question.correction ||
                                                                                        ''
                                                                                    )}
                                                                                </p>

                                                                            </div>

                                                                        `;

                                                                    }
                                                                ).join('')
                                                            }

                                                        </div>

                                                    `

                                                    : ''
                                            }

                                        </details>

                                    `;

                                }
                            ).join('')
                        }

                    </div>

                `

                : ''
        }

    `;

}


function startExam(
    subject
) {

    var questions =
        flattenQuestions(
            subject
        );


    if (!questions.length) {

        var panel =
            document.getElementById(
                'examPanel'
            );

        if (panel) {

            panel.innerHTML = `

                <div class="empty-state">

                    Aucune question disponible
                    pour cet examen.

                </div>

            `;

        }

        return;

    }


    cessExamState = {

        qs:
            shuffle(
                questions
            ).slice(0, 15),

        index:
            0,

        score:
            0,

        subject:
            subject,

        recorded:
            false

    };


    showView(
        'exam'
    );

    renderExam();

}


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


    var state =
        cessExamState;


    if (
        state.index >=
        state.qs.length
    ) {

        var total =
            state.qs.length;

        var percentage =
            total
                ? Math.round(
                    state.score /
                    total *
                    100
                )
                : 0;


        if (
            !state.recorded
        ) {

            cessState.results.push({

                date:
                    Date.now(),

                score:
                    state.score,

                total:
                    total,

                mode:
                    'exam-' +
                    state.subject

            });


            recordActivity(
                'exam',
                'Examen ' +
                    CESS_SUBJECTS[
                        state.subject
                    ].short,
                state.score +
                    '/' +
                    total +
                    ' · ' +
                    percentage +
                    '%'
            );


            state.recorded =
                true;

            saveState();

        }


        panel.innerHTML = `

            <div class="quiz-result">

                <div class="result-circle">
                    ${percentage}%
                </div>

                <span class="eyebrow">
                    Examen terminé
                </span>

                <h2>
                    ${state.score}
                    /
                    ${total}
                </h2>

                <p>

                    ${
                        percentage >= 80

                            ? 'Très bon résultat.'

                            : percentage >= 60

                                ? 'Résultat correct, continue à travailler les points faibles.'

                                : 'Utilise tes erreurs pour cibler tes prochaines révisions.'
                    }

                </p>


                <div class="result-actions">

                    <button
                        class="button secondary"
                        onclick="renderExamHome()"
                        type="button"
                    >
                        Retour
                    </button>

                    <button
                        class="button primary"
                        onclick="startExam('${state.subject}')"
                        type="button"
                    >
                        Recommencer
                    </button>

                </div>

            </div>

        `;

        return;

    }


    var question =
        state.qs[
            state.index
        ];


    var percentage =
        Math.round(
            state.index /
            state.qs.length *
            100
        );


    panel.innerHTML = `

        <div class="quiz-question-card">

            <button
                class="back-button"
                onclick="renderExamHome()"
                type="button"
            >
                ← Quitter l’examen
            </button>


            <div class="quiz-progress">

                <span
                    style="width:${percentage}%"
                ></span>

            </div>


            <div class="quiz-meta">

                <span>
                    Examen
                    ${CESS_SUBJECTS[
                        state.subject
                    ].short}
                </span>

                <span>
                    Question
                    ${state.index + 1}
                    /
                    ${state.qs.length}
                </span>

            </div>


            <div class="quiz-question">

                ${esc(
                    question.question
                )}

            </div>


            <div class="quiz-options">

                ${
                    question.options.map(
                        function (
                            option,
                            index
                        ) {

                            return `

                                <button
                                    class="quiz-option"
                                    onclick="answerExam(${index})"
                                    type="button"
                                >

                                    <span class="option-letter">
                                        ${
                                            String.fromCharCode(
                                                65 + index
                                            )
                                        }
                                    </span>

                                    ${esc(
                                        option
                                    )}

                                </button>

                            `;

                        }
                    ).join('')
                }

            </div>

        </div>

    `;

}


function answerExam(
    index
) {

    if (!cessExamState) {
        return;
    }


    var question =
        cessExamState.qs[
            cessExamState.index
        ];


    if (
        index ===
        Number(
            question.correct
        )
    ) {

        cessExamState.score++;

    } else {

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

    saveState();

    renderExam();

}


/* =========================================================
   PROGRESSION
   ========================================================= */

function renderProgress() {

    var box =
        document.getElementById(
            'progressContent'
        );

    if (!box) {
        return;
    }


    var global =
        pctGlobal();


    var all =
        allChaps('maths')
            .concat(
                allChaps('geo')
            );


    var done =
        all.filter(
            function (chapter) {

                return (
                    progressOf(chapter) >=
                    100
                );

            }
        ).length;


    box.innerHTML = `

        <div class="progress-overview">

            <div class="progress-big-card">

                <strong>
                    ${global}%
                </strong>

                <span>
                    Progression globale
                </span>

            </div>


            <div class="progress-big-card">

                <strong>
                    ${done}/${all.length}
                </strong>

                <span>
                    Chapitres maîtrisés
                </span>

            </div>


            <div class="progress-big-card">

                <strong>
                    ${cessState.results.length}
                </strong>

                <span>
                    Sessions réalisées
                </span>

            </div>

        </div>


        <div class="progress-section">

            <div class="section-heading">

                <span class="eyebrow">
                    Vue détaillée
                </span>

                <h2>
                    Progression par matière
                </h2>

            </div>


            ${
                [
                    'maths',
                    'geo'
                ]
                    .map(
                        renderProgressSubject
                    )
                    .join('')
            }

        </div>


        <div class="progress-section progress-history">

            <div class="section-heading">

                <span class="eyebrow">
                    Historique
                </span>

                <h2>
                    Dernières sessions
                </h2>

            </div>

            ${renderHistory()}

        </div>

    `;

}


function renderProgressSubject(
    subject
) {

    var info =
        CESS_SUBJECTS[
            subject
        ];

    var stats =
        subjectStats(
            subject
        );


    var years = [
        '3e',
        '4e',
        '5e',
        '6e'
    ];


    return `

        <div class="progress-subject">

            <div class="progress-subject-head">

                <strong>
                    ${info.icon}
                    ${info.label}
                </strong>

                <span>
                    ${stats.avg}%
                </span>

            </div>


            <div class="progress-row-bar">

                <span
                    style="width:${stats.avg}%"
                ></span>

            </div>


            ${
                years.map(
                    function (year) {

                        var statsYear =
                            yearStats(
                                subject,
                                year
                            );


                        if (!statsYear.total) {
                            return '';
                        }


                        return `

                            <div class="progress-row">

                                <span class="progress-row-name">
                                    ${year}
                                </span>

                                <div class="progress-row-bar">

                                    <span
                                        style="width:${statsYear.avg}%"
                                    ></span>

                                </div>

                                <span class="progress-row-value">
                                    ${statsYear.avg}%
                                </span>

                            </div>

                        `;

                    }
                ).join('')
            }

        </div>

    `;

}


function renderHistory() {

    if (!cessState.results.length) {

        return `

            <div class="empty-state">
                Aucune session enregistrée.
            </div>

        `;

    }


    return `

        <div class="history-list">

            ${
                cessState.results
                    .slice()
                    .reverse()
                    .slice(0, 10)
                    .map(
                        function (result) {

                            var percentage =
                                result.total
                                    ? Math.round(
                                        result.score /
                                        result.total *
                                        100
                                    )
                                    : 0;


                            return `

                                <div class="history-item">

                                    <span>
                                        🎯
                                    </span>

                                    <div>

                                        <strong>
                                            ${esc(
                                                result.mode ||
                                                'Session'
                                            )}
                                        </strong>

                                        <small>
                                            ${result.score}
                                            /
                                            ${result.total}
                                            ·
                                            ${formatDate(
                                                result.date
                                            )}
                                        </small>

                                    </div>

                                    <b>
                                        ${percentage}%
                                    </b>

                                </div>

                            `;

                        }
                    ).join('')
            }

        </div>

    `;

}


/* =========================================================
   INITIALISATION
   ========================================================= */

function init() {

    if (
        cessState.theme ===
        'dark'
    ) {

        document.body.classList.add(
            'dark'
        );

    }


    updateThemeButton();

    renderHome();

    renderSubject(
        'maths'
    );

    renderSubject(
        'geo'
    );

    renderMemo();

    renderGamesHome();

    renderExamHome();

    renderProgress();


    document.addEventListener(
        'keydown',
        function (event) {

            if (
                event.key ===
                'Escape' &&
                cessCurrentChapter
            ) {

                closeChapter();

            }

        }
    );

}


document.addEventListener(
    'DOMContentLoaded',
    init
);
