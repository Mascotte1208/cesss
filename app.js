```javascript
/* =========================================================
   CARNET CESS
   APPLICATION PRINCIPALE
   VERSION STABLE
   ========================================================= */

var CESS_DBKEY = 'carnetCESSv4';

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
   CHARGEMENT / SAUVEGARDE
   ========================================================= */

(function loadState() {
    try {
        var saved = localStorage.getItem(CESS_DBKEY);

        if (saved) {
            var parsed = JSON.parse(saved);

            if (parsed && typeof parsed === 'object') {
                cessState = {
                    progress: parsed.progress || {},
                    results: Array.isArray(parsed.results)
                        ? parsed.results
                        : [],
                    mistakes: Array.isArray(parsed.mistakes)
                        ? parsed.mistakes
                        : [],
                    streak: Number(parsed.streak || 0),
                    theme: parsed.theme === 'dark'
                        ? 'dark'
                        : 'light'
                };
            }
        }
    } catch (error) {
        console.warn(
            'Impossible de charger les données sauvegardées.',
            error
        );
    }
})();

function cessSave() {
    try {
        localStorage.setItem(
            CESS_DBKEY,
            JSON.stringify(cessState)
        );
    } catch (error) {
        console.warn(
            'Impossible de sauvegarder les données.',
            error
        );
    }
}


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
        .concat(allChaps('geo'));

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


/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(id) {
    var target = document.getElementById(id);

    if (!target) {
        console.warn('Vue introuvable :', id);
        return;
    }

    var views =
        document.querySelectorAll('.view');

    for (var i = 0; i < views.length; i++) {
        views[i].classList.remove('active');
    }

    target.classList.add('active');

    var navButtons =
        document.querySelectorAll('nav button');

    for (var n = 0; n < navButtons.length; n++) {
        navButtons[n].classList.remove('active');
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
   THEME
   ========================================================= */

function toggleTheme() {
    document.body.classList.toggle('dark');

    cessState.theme =
        document.body.classList.contains('dark')
            ? 'dark'
            : 'light';

    cessSave();
}

function applyTheme() {
    if (cessState.theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}


/* =========================================================
   ACCUEIL
   ========================================================= */

function renderHome() {
    var stats =
        document.getElementById('homeStats');

    if (!stats) {
        return;
    }

    var mathsCount =
        allChaps('maths').length;

    var geoCount =
        allChaps('geo').length;

    var total =
        mathsCount + geoCount;

    stats.innerHTML = [
        [
            '📚',
            total,
            'Chapitres'
        ],
        [
            '📐',
            pctSubject('maths') + '%',
            'Maîtrise Maths'
        ],
        [
            '🌍',
            pctSubject('geo') + '%',
            'Maîtrise Géo'
        ],
        [
            '🎯',
            cessState.results.length,
            'Quiz réalisés'
        ]
    ].map(function (item) {

        return '<div class="stat">' +
            '<b>' + item[0] + ' ' + item[1] + '</b>' +
            '<span>' + item[2] + '</span>' +
            '</div>';

    }).join('');


    var progress =
        document.getElementById(
            'subjectProgress'
        );

    if (progress) {

        progress.innerHTML = [
            'maths',
            'geo'
        ].map(function (subject) {

            var percentage =
                pctSubject(subject);

            return `
                <div class="progress-row">

                    <div class="progress-label">
                        <span>
                            ${CESS_SUBJECTS[subject].icon}
                            ${CESS_SUBJECTS[subject].label}
                        </span>

                        <span>
                            ${percentage}%
                        </span>
                    </div>

                    <div class="bar">
                        <i style="width:${percentage}%"></i>
                    </div>

                </div>
            `;

        }).join('');
    }


    var priorities =
        document.getElementById(
            'priorities'
        );

    if (priorities) {

        var chapters =
            allChaps('maths')
                .concat(allChaps('geo'))
                .filter(function (chapter) {
                    return getChapterProgress(
                        chapter.id
                    ) < 100;
                })
                .slice(0, 6);

        if (!chapters.length) {

            priorities.innerHTML =
                '<div class="empty">🎉 Tout est maîtrisé !</div>';

        } else {

            priorities.innerHTML =
                chapters.map(function (chapter) {

                    return `
                        <button
                            type="button"
                            class="priority"
                            onclick="openChapter('${chapter.id}')">

                            <span>
                                ${chapter.icone || '📘'}
                                ${escapeHtml(
                                    chapter.titre ||
                                    'Chapitre'
                                )}
                            </span>

                            <b>
                                ${escapeHtml(
                                    chapter.annee || ''
                                )}
                            </b>

                        </button>
                    `;

                }).join('');
        }
    }
}


/* =========================================================
   REVISION RAPIDE
   ========================================================= */

function quickRevision() {
    var questions =
        flattenQuestions('all');

    if (!questions.length) {
        alert(
            'Aucune question disponible pour le moment.'
        );
        return;
    }

    showView('games');

    startQuiz('mixed');
}


/* =========================================================
   MATIERES
   ========================================================= */

function renderSubject(subject) {

    if (!CESS_SUBJECTS[subject]) {
        return;
    }

    var data =
        CESS_SUBJECTS[subject].getData();

    var totalElement =
        document.getElementById(
            subject === 'maths'
                ? 'mathsTotal'
                : 'geoTotal'
        );

    var yearsElement =
        document.getElementById(
            subject === 'maths'
                ? 'mathYears'
                : 'geoYears'
        );

    var contentElement =
        document.getElementById(
            subject === 'maths'
                ? 'mathContent'
                : 'geoContent'
        );

    if (
        !totalElement ||
        !yearsElement ||
        !contentElement
    ) {
        return;
    }

    var chaptersAll =
        allChaps(subject);

    totalElement.textContent =
        chaptersAll.length +
        ' chapitres';


    var years = [
        '3e',
        '4e',
        '5e',
        '6e'
    ];

    yearsElement.innerHTML =
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
                    getChapterProgress(
                        chapters[i].id
                    ) >= 100
                ) {
                    done++;
                }
            }

            var percentage =
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
                    class="year-card ${active}"
                    onclick="
                        cessSelectedYear['${subject}']='${year}';
                        renderSubject('${subject}');
                    ">

                    <b>${year}</b>

                    <small>
                        ${chapters.length}
                        chapitres ·
                        ${percentage}%
                        maîtrisé
                    </small>

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

        contentElement.innerHTML = `
            <div class="empty">
                Aucun chapitre disponible
                pour cette année.
            </div>
        `;

        return;
    }


    contentElement.innerHTML = `
        <div class="chapter-list">

            ${chapters.map(function (chapter) {

                var progress =
                    getChapterProgress(
                        chapter.id
                    );

                var done =
                    progress >= 100;

                return `
                    <article class="chapter">

                        <span
                            style="font-size:30px">
                            ${chapter.icone || '📘'}
                        </span>

                        <div class="chapter-main">

                            <h3>
                                ${escapeHtml(
                                    chapter.titre ||
                                    'Chapitre'
                                )}
                            </h3>

                            <p>
                                ${escapeHtml(
                                    chapter.desc ||
                                    ''
                                )}
                            </p>

                            <div class="mini-progress">
                                <i
                                    style="
                                        width:${progress}%
                                    ">
                                </i>
                            </div>

                        </div>

                        <span
                            class="badge ${
                                done
                                    ? 'done'
                                    : ''
                            }">

                            ${
                                done
                                    ? '✓ Maîtrisé'
                                    : progress > 0
                                        ? progress + '%'
                                        : 'À revoir'
                            }

                        </span>

                        <button
                            type="button"
                            onclick="
                                openChapter('${chapter.id}')
                            ">

                            Ouvrir

                        </button>

                    </article>
                `;

            }).join('')}

        </div>
    `;
}


/* =========================================================
   CHAPITRE
   ========================================================= */

function openChapter(id) {

    var chapter =
        findChapter(id);

    if (!chapter) {
        alert(
            'Impossible de trouver ce chapitre.'
        );
        return;
    }

    var subject =
        chapter.matiere || 'maths';

    var subjectInfo =
        CESS_SUBJECTS[subject] ||
        CESS_SUBJECTS.maths;

    var objectives =
        Array.isArray(chapter.objectifs)
            ? chapter.objectifs
            : [];

    var matieres =
        Array.isArray(chapter.matieres)
            ? chapter.matieres
            : [];

    var exercices =
        Array.isArray(chapter.exercices)
            ? chapter.exercices
            : [];

    var progress =
        getChapterProgress(chapter.id);


    var content =
        document.createElement('div');

    content.className =
        'detail';


    content.innerHTML = `

        <div class="detail-top">

            <div>

                <div class="eyebrow">
                    ${subjectInfo.icon}
                    ${subjectInfo.label}
                    · ${escapeHtml(
                        chapter.annee || ''
                    )}
                </div>

                <h2>
                    ${chapter.icone || ''}
                    ${escapeHtml(
                        chapter.titre ||
                        'Chapitre'
                    )}
                </h2>

                <p>
                    ${escapeHtml(
                        chapter.desc || ''
                    )}
                </p>

            </div>

            <button
                type="button"
                class="close"
                onclick="
                    this.closest('.detail').remove()
                ">

                ✕

            </button>

        </div>


        <div class="chapter-progress-box">

            <div>
                <strong>
                    Progression
                </strong>

                <span>
                    ${progress}%
                </span>
            </div>

            <div class="bar">
                <i
                    style="
                        width:${progress}%
                    ">
                </i>
            </div>

        </div>


        <div class="chapter-tabs">

            <button
                type="button"
                class="active"
                onclick="
                    switchChapterTab(
                        'course',
                        this
                    )
                ">

                📖 Cours

            </button>

            <button
                type="button"
                onclick="
                    switchChapterTab(
                        'remember',
                        this
                    )
                ">

                🧠 À retenir

            </button>

            <button
                type="button"
                onclick="
                    switchChapterTab(
                        'exercise',
                        this
                    )
                ">

                🎯 Exercices

            </button>

        </div>


        <div
            class="chapter-tab-content active"
            data-tab="course">

            ${
                matieres.length
                    ? `
                        <div class="content-card">

                            <h3>
                                📚 À savoir
                            </h3>

                            <ul>
                                ${matieres.map(
                                    function (item) {
                                        return `
                                            <li>
                                                ${escapeHtml(
                                                    item
                                                )}
                                            </li>
                                        `;
                                    }
                                ).join('')}
                            </ul>

                        </div>
                    `
                    : ''
            }


            <div class="content-card course-content">

                <h3>
                    📖 Cours
                </h3>

                <div>
                    ${
                        chapter.cours ||
                        '<p>Le cours sera bientôt disponible.</p>'
                    }
                </div>

            </div>

        </div>


        <div
            class="chapter-tab-content"
            data-tab="remember">

            <div class="content-card">

                <h3>
                    🧠 Objectifs
                </h3>

                ${
                    objectives.length
                        ? `
                            <ul>
                                ${objectives.map(
                                    function (item) {
                                        return `
                                            <li>
                                                ${escapeHtml(
                                                    item
                                                )}
                                            </li>
                                        `;
                                    }
                                ).join('')}
                            </ul>
                        `
                        : `
                            <p>
                                Aucun objectif
                                renseigné.
                            </p>
                        `
                }

            </div>


            <div class="content-card">

                <h3>
                    ⭐ Les points essentiels
                </h3>

                <p>
                    Relis les notions importantes
                    du cours puis teste-toi avec
                    les exercices.
                </p>

            </div>

        </div>


        <div
            class="chapter-tab-content"
            data-tab="exercise">

            ${
                exercices.length
                    ? `
                        <div class="exercise-list">

                            ${exercices.map(
                                function (
                                    exercise,
                                    index
                                ) {

                                    return `
                                        <div
                                            class="exercise-card">

                                            <span>
                                                Exercice
                                                ${index + 1}
                                            </span>

                                            <h3>
                                                ${escapeHtml(
                                                    exercise.question ||
                                                    'Question'
                                                )}
                                            </h3>

                                            ${
                                                Array.isArray(
                                                    exercise.options
                                                )
                                                    ? `
                                                        <div>
                                                            ${exercise.options.map(
                                                                function (
                                                                    option,
                                                                    optionIndex
                                                                ) {

                                                                    return `
                                                                        <button
                                                                            type="button"
                                                                            onclick="
                                                                                answerChapterExercise(
                                                                                    this,
                                                                                    '${chapter.id}',
                                                                                    ${index},
                                                                                    ${optionIndex}
                                                                                )
                                                                            ">

                                                                            ${escapeHtml(
                                                                                option
                                                                            )}

                                                                        </button>
                                                                    `;

                                                                }
                                                            ).join('')}
                                                        </div>
                                                    `
                                                    : ''
                                            }

                                            <div
                                                class="exercise-feedback">
                                            </div>

                                        </div>
                                    `;

                                }
                            ).join('')}

                        </div>
                    `
                    : `
                        <div class="empty">
                            Aucun exercice disponible
                            pour ce chapitre.
                        </div>
                    `
            }

        </div>


        <div class="detail-actions">

            <button
                type="button"
                class="success"
                onclick="
                    markDone('${chapter.id}')
                ">

                ✓ Marquer maîtrisé

            </button>

            ${
                exercices.length
                    ? `
                        <button
                            type="button"
                            class="primary"
                            onclick="
                                quizChapter(
                                    '${chapter.id}'
                                )
                            ">

                            🎯 Faire le quiz

                        </button>
                    `
                    : ''
            }

        </div>

    `;


    var host =
        document.getElementById(
            subject === 'geo'
                ? 'geoContent'
                : 'mathContent'
        );

    if (!host) {
        return;
    }

    var previous =
        host.querySelector('.detail');

    if (previous) {
        previous.remove();
    }

    host.prepend(content);

    try {
        content.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } catch (error) {
        content.scrollIntoView();
    }
}


function switchChapterTab(
    tab,
    button
) {

    var detail =
        button.closest('.detail');

    if (!detail) {
        return;
    }

    var buttons =
        detail.querySelectorAll(
            '.chapter-tabs button'
        );

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(
            'active'
        );
    }

    button.classList.add('active');


    var contents =
        detail.querySelectorAll(
            '.chapter-tab-content'
        );

    for (
        var j = 0;
        j < contents.length;
        j++
    ) {

        if (
            contents[j].getAttribute(
                'data-tab'
            ) === tab
        ) {
            contents[j].classList.add(
                'active'
            );
        } else {
            contents[j].classList.remove(
                'active'
            );
        }
    }
}


/* =========================================================
   EXERCICE DANS CHAPITRE
   ========================================================= */

function answerChapterExercise(
    button,
    chapterId,
    exerciseIndex,
    optionIndex
) {

    var chapter =
        findChapter(chapterId);

    if (!chapter) {
        return;
    }

    var exercise =
        Array.isArray(chapter.exercices)
            ? chapter.exercices[exerciseIndex]
            : null;

    if (!exercise) {
        return;
    }

    var card =
        button.closest('.exercise-card');

    if (!card) {
        return;
    }

    var buttons =
        card.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    var feedback =
        card.querySelector(
            '.exercise-feedback'
        );

    var correct =
        Number(exercise.correct || 0);

    var good =
        optionIndex === correct;

    if (good) {

        button.classList.add('correct');

        feedback.innerHTML =
            '<strong>✓ Bonne réponse !</strong>' +
            (
                exercise.correction
                    ? '<p>' +
                        exercise.correction +
                      '</p>'
                    : ''
            );

    } else {

        button.classList.add('wrong');

        if (buttons[correct]) {
            buttons[correct].classList.add(
                'correct'
            );
        }

        feedback.innerHTML =
            '<strong>✗ Pas tout à fait.</strong>' +
            (
                exercise.correction
                    ? '<p>' +
                        exercise.correction +
                      '</p>'
                    : ''
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

    cessState.progress[id] = 100;

    cessSave();

    renderHome();

    renderSubject(
        chapter.matiere || 'maths'
    );

    var detail =
        document.querySelector(
            '.detail'
        );

    if (detail) {
        var message =
            detail.querySelector(
                '.chapter-progress-box'
            );

        if (message) {
            message.innerHTML = `
                <div>
                    <strong>
                        ✓ Chapitre maîtrisé
                    </strong>

                    <span>
                        100%
                    </span>
                </div>

                <div class="bar">
                    <i style="width:100%"></i>
                </div>
            `;
        }
    }
}


/* =========================================================
   QUESTIONS
   ========================================================= */

function flattenQuestions(filter) {

    filter = filter || 'all';

    var chapters =
        allChaps('maths')
            .concat(allChaps('geo'));

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
                    String(chapter.id) +
                    '_' +
                    j,

                question:
                    question.question || '',

                options:
                    question.options,

                correct:
                    typeof question.correct === 'number'
                        ? question.correct
                        : 0,

                correction:
                    question.correction || '',

                chapter:
                    chapter.titre || '',

                annee:
                    chapter.annee || '',

                matiere:
                    chapter.matiere || '',

                chapterId:
                    chapter.id

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


    if (filter === 'mistakes') {

        questions =
            questions.filter(
                function (q) {

                    return (
                        cessState.mistakes
                            .indexOf(q.id) !== -1
                    );

                }
            );
    }


    return questions;
}


/* =========================================================
   QUIZ
   ========================================================= */

function startQuiz(mode) {

    var filter = 'all';

    if (mode === 'maths') {
        filter = 'maths';
    }

    if (mode === 'geo') {
        filter = 'geo';
    }

    if (mode === 'mistakes') {
        filter = 'mistakes';
    }


    var questions =
        flattenQuestions(filter);

    if (!questions.length) {

        var panel =
            document.getElementById(
                'gamePanel'
            );

        if (panel) {
            panel.innerHTML = `
                <div class="empty">
                    ${
                        mode === 'mistakes'
                            ? 'Tu n’as pas encore d’erreurs à revoir.'
                            : 'Aucune question disponible.'
                    }
                </div>
            `;
        }

        return;
    }


    questions =
        shuffle(questions)
            .slice(0, 10);


    cessQuizState = {
        mode: mode,
        questions: questions,
        index: 0,
        score: 0,
        answered: false
    };


    renderQuizQuestion();
}


function quizChapter(id) {

    var chapter =
        findChapter(id);

    if (!chapter) {
        return;
    }

    var questions = [];

    if (
        Array.isArray(
            chapter.exercices
        )
    ) {

        for (
            var i = 0;
            i < chapter.exercices.length;
            i++
        ) {

            var q =
                chapter.exercices[i];

            if (
                q &&
                Array.isArray(q.options) &&
                q.options.length
            ) {

                questions.push({

                    id:
                        String(chapter.id) +
                        '_' +
                        i,

                    question:
                        q.question || '',

                    options:
                        q.options,

                    correct:
                        typeof q.correct === 'number'
                            ? q.correct
                            : 0,

                    correction:
                        q.correction || '',

                    chapter:
                        chapter.titre || '',

                    annee:
                        chapter.annee || '',

                    matiere:
                        chapter.matiere || '',

                    chapterId:
                        chapter.id

                });
            }
        }
    }


    if (!questions.length) {
        alert(
            'Ce chapitre ne contient pas encore d’exercices.'
        );
        return;
    }


    cessQuizState = {

        mode: 'chapter',

        chapterId: chapter.id,

        questions:
            shuffle(questions),

        index: 0,

        score: 0,

        answered: false

    };


    showView('games');

    renderQuizQuestion();
}


function renderQuizQuestion() {

    var panel =
        document.getElementById(
            'gamePanel'
        );

    if (!panel || !cessQuizState) {
        return;
    }

    var state =
        cessQuizState;

    if (
        state.index >=
        state.questions.length
    ) {
        finishQuiz();
        return;
    }


    var q =
        state.questions[state.index];

    var total =
        state.questions.length;

    panel.innerHTML = `

        <div class="quiz-header">

            <span>
                Question
                ${state.index + 1}
                / ${total}
            </span>

            <strong>
                ${state.score}
                point${state.score > 1 ? 's' : ''}
            </strong>

        </div>


        <div class="quiz-progress">

            <i
                style="
                    width:${
                        (
                            state.index /
                            total
                        ) * 100
                    }%
                ">
            </i>

        </div>


        <div class="quiz-question">

            <span class="eyebrow">
                ${q.matiere === 'geo'
                    ? '🌍 Géographie'
                    : '📐 Mathématiques'}
            </span>

            <h2>
                ${escapeHtml(
                    q.question
                )}
            </h2>

        </div>


        <div class="quiz-options">

            ${q.options.map(
                function (option, index) {

                    return `
                        <button
                            type="button"
                            onclick="
                                answerQuiz(
                                    ${index}
                                )
                            ">

                            <span>
                                ${String.fromCharCode(
                                    65 + index
                                )}
                            </span>

                            ${escapeHtml(
                                option
                            )}

                        </button>
                    `;

                }
            ).join('')}

        </div>


        <div
            id="quizFeedback"
            class="quiz-feedback">
        </div>

    `;
}


function answerQuiz(optionIndex) {

    if (!cessQuizState) {
        return;
    }

    if (cessQuizState.answered) {
        return;
    }

    cessQuizState.answered = true;


    var state =
        cessQuizState;

    var q =
        state.questions[state.index];

    var correct =
        Number(q.correct || 0);

    var good =
        optionIndex === correct;


    var panel =
        document.getElementById(
            'gamePanel'
        );

    if (!panel) {
        return;
    }


    var buttons =
        panel.querySelectorAll(
            '.quiz-options button'
        );

    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].disabled = true;

        if (i === correct) {
            buttons[i].classList.add(
                'correct'
            );
        }

        if (
            i === optionIndex &&
            !good
        ) {
            buttons[i].classList.add(
                'wrong'
            );
        }
    }


    if (good) {

        state.score++;

    } else {

        if (
            cessState.mistakes.indexOf(
                q.id
            ) === -1
        ) {
            cessState.mistakes.push(
                q.id
            );
        }
    }


    var feedback =
        document.getElementById(
            'quizFeedback'
        );

    if (feedback) {

        feedback.innerHTML = `

            <div class="${
                good
                    ? 'good'
                    : 'bad'
            }">

                <strong>
                    ${
                        good
                            ? '✓ Bonne réponse !'
                            : '✗ Mauvaise réponse'
                    }
                </strong>

                ${
                    q.correction
                        ? `
                            <p>
                                ${escapeHtml(
                                    q.correction
                                )}
                            </p>
                        `
                        : ''
                }

                <button
                    type="button"
                    onclick="nextQuizQuestion()">

                    ${
                        state.index + 1 >=
                        state.questions.length
                            ? 'Voir le résultat'
                            : 'Question suivante →'
                    }

                </button>

            </div>

        `;
    }

    cessSave();
}


function nextQuizQuestion() {

    if (!cessQuizState) {
        return;
    }

    cessQuizState.index++;
    cessQuizState.answered = false;

    renderQuizQuestion();
}


function finishQuiz() {

    var state =
        cessQuizState;

    if (!state) {
        return;
    }

    var total =
        state.questions.length;

    var score =
        state.score;

    var percentage =
        total
            ? Math.round(
                score / total * 100
            )
            : 0;


    cessState.results.push({

        date:
            new Date().toISOString(),

        mode:
            state.mode,

        score:
            score,

        total:
            total,

        percentage:
            percentage

    });


    if (percentage >= 70) {
        cessState.streak++;
    } else {
        cessState.streak = 0;
    }


    cessSave();


    var panel =
        document.getElementById(
            'gamePanel'
        );

    if (!panel) {
        return;
    }


    var message =
        percentage >= 80
            ? 'Excellent ! 🎉'
            : percentage >= 60
                ? 'Bien joué ! 💪'
                : 'Continue tes révisions ! 📚';


    panel.innerHTML = `

        <div class="quiz-result">

            <span class="result-icon">
                ${
                    percentage >= 80
                        ? '🏆'
                        : percentage >= 60
                            ? '⭐'
                            : '📚'
                }
            </span>

            <h2>
                ${message}
            </h2>

            <div class="result-score">
                ${score} / ${total}
            </div>

            <p>
                ${percentage}% de réussite
            </p>

            <div class="result-actions">

                <button
                    type="button"
                    class="primary"
                    onclick="replayQuiz()">

                    🔄 Recommencer

                </button>

                <button
                    type="button"
                    onclick="showView('progress')">

                    📊 Voir ma progression

                </button>

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


/* =========================================================
   CAPITALES
   ========================================================= */

var CESS_CAPITALS = [

    ['France', 'Paris'],
    ['Belgique', 'Bruxelles'],
    ['Allemagne', 'Berlin'],
    ['Espagne', 'Madrid'],
    ['Italie', 'Rome'],
    ['Portugal', 'Lisbonne'],
    ['Royaume-Uni', 'Londres'],
    ['Pays-Bas', 'Amsterdam'],
    ['Suisse', 'Berne'],
    ['Autriche', 'Vienne'],
    ['Pologne', 'Varsovie'],
    ['Grèce', 'Athènes'],
    ['Norvège', 'Oslo'],
    ['Suède', 'Stockholm'],
    ['Finlande', 'Helsinki'],
    ['Danemark', 'Copenhague'],
    ['Irlande', 'Dublin'],
    ['Roumanie', 'Bucarest'],
    ['Hongrie', 'Budapest'],
    ['Tchéquie', 'Prague']

];


function startCapitals() {

    var questions =
        shuffle(CESS_CAPITALS)
            .slice(0, 10)
            .map(function (item, index) {

                var wrong =
                    shuffle(
                        CESS_CAPITALS
                            .filter(
                                function (other) {
                                    return (
                                        other[1] !==
                                        item[1]
                                    );
                                }
                            )
                    )
                    .slice(0, 3)
                    .map(
                        function (other) {
                            return other[1];
                        }
                    );

                var options =
                    shuffle(
                        wrong.concat([
                            item[1]
                        ])
                    );

                return {

                    id:
                        'capital_' +
                        index,

                    question:
                        'Quelle est la capitale de ' +
                        item[0] +
                        ' ?',

                    options:
                        options,

                    correct:
                        options.indexOf(
                            item[1]
                        ),

                    correction:
                        item[0] +
                        ' a pour capitale ' +
                        item[1] +
                        '.',

                    matiere:
                        'geo'

                };

            });


    cessQuizState = {

        mode:
            'capitales',

        questions:
            questions,

        index:
            0,

        score:
            0,

        answered:
            false

    };


    renderQuizQuestion();
}


/* =========================================================
   MEMO
   ========================================================= */

function memoTab(mode, button) {

    cessMemoMode = mode;

    var buttons =
        document.querySelectorAll(
            '.memo-tabs button'
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


function renderMemo() {

    var content =
        document.getElementById(
            'memoContent'
        );

    if (!content) {
        return;
    }

    var searchElement =
        document.getElementById(
            'memoSearch'
        );

    var yearElement =
        document.getElementById(
            'memoYear'
        );

    var search =
        searchElement
            ? searchElement.value
                .toLowerCase()
                .trim()
            : '';

    var year =
        yearElement
            ? yearElement.value
            : 'all';


    if (
        cessMemoMode ===
        'formules'
    ) {

        renderFormules(
            content,
            search,
            year
        );

    } else {

        renderVocabulaire(
            content,
            search,
            year
        );
    }
}


function renderFormules(
    content,
    search,
    year
) {

    var formulas =
        typeof FORMULES_DATA !== 'undefined'
            ? FORMULES_DATA
            : null;


    if (!formulas) {

        content.innerHTML = `
            <div class="empty">
                Les formules ne sont pas
                disponibles.
            </div>
        `;

        return;
    }


    var items = [];


    if (Array.isArray(formulas)) {

        items =
            formulas.map(function (item) {
                return item;
            });

    } else if (
        typeof formulas === 'object'
    ) {

        var keys =
            Object.keys(formulas);

        for (
            var i = 0;
            i < keys.length;
            i++
        ) {

            var key =
                keys[i];

            var value =
                formulas[key];

            if (
                Array.isArray(value)
            ) {

                for (
                    var j = 0;
                    j < value.length;
                    j++
                ) {

                    items.push(
                        value[j]
                    );

                }

            } else if (
                value &&
                typeof value === 'object'
            ) {

                items.push(
                    value
                );
            }
        }
    }


    items =
        items.filter(function (item) {

            var text =
                JSON.stringify(item)
                    .toLowerCase();

            var matchSearch =
                !search ||
                text.indexOf(search) !== -1;

            var matchYear =
                year === 'all' ||
                String(
                    item.annee ||
                    item.year ||
                    ''
                ) === year;

            return (
                matchSearch &&
                matchYear
            );

        });


    if (!items.length) {

        content.innerHTML = `
            <div class="empty">
                Aucune formule trouvée.
            </div>
        `;

        return;
    }


    content.innerHTML = `

        <div class="memo-grid">

            ${items.map(function (item) {

                var title =
                    item.titre ||
                    item.title ||
                    item.nom ||
                    'Formule';

                var formula =
                    item.formule ||
                    item.formula ||
                    item.expression ||
                    '';

                var description =
                    item.description ||
                    item.desc ||
                    '';

                return `

                    <article
                        class="memo-card">

                        <span>
                            ${escapeHtml(
                                item.annee ||
                                ''
                            )}
                        </span>

                        <h3>
                            ${escapeHtml(
                                title
                            )}
                        </h3>

                        ${
                            formula
                                ? `
                                    <div
                                        class="formula">
                                        ${escapeHtml(
                                            formula
                                        )}
                                    </div>
                                `
                                : ''
                        }

                        ${
                            description
                                ? `
                                    <p>
                                        ${escapeHtml(
                                            description
                                        )}
                                    </p>
                                `
                                : ''
                        }

                    </article>

                `;

            }).join('')}

        </div>

    `;
}


function renderVocabulaire(
    content,
    search,
    year
) {

    var vocab =
        typeof GEO_VOCAB !== 'undefined'
            ? GEO_VOCAB
            : (
                typeof GEO_VOCABULAIRE !== 'undefined'
                    ? GEO_VOCABULAIRE
                    : null
            );


    if (!vocab) {

        content.innerHTML = `
            <div class="empty">
                Le vocabulaire n'est pas
                disponible.
            </div>
        `;

        return;
    }


    var items =
        Array.isArray(vocab)
            ? vocab.slice()
            : Object.keys(vocab).map(
                function (key) {

                    var value =
                        vocab[key];

                    if (
                        value &&
                        typeof value === 'object'
                    ) {

                        var copy = {};

                        for (
                            var k in value
                        ) {

                            if (
                                Object.prototype
                                    .hasOwnProperty
                                    .call(
                                        value,
                                        k
                                    )
                            ) {
                                copy[k] =
                                    value[k];
                            }
                        }

                        copy.terme =
                            copy.terme ||
                            copy.term ||
                            key;

                        return copy;
                    }

                    return {
                        terme: key,
                        definition:
                            value
                    };

                }
            );


    items =
        items.filter(function (item) {

            var text =
                JSON.stringify(item)
                    .toLowerCase();

            var matchSearch =
                !search ||
                text.indexOf(search) !== -1;

            var matchYear =
                year === 'all' ||
                String(
                    item.annee ||
                    item.year ||
                    ''
                ) === year;

            return (
                matchSearch &&
                matchYear
            );

        });


    if (!items.length) {

        content.innerHTML = `
            <div class="empty">
                Aucun mot trouvé.
            </div>
        `;

        return;
    }


    content.innerHTML = `

        <div class="memo-grid">

            ${items.map(function (item) {

                var term =
                    item.terme ||
                    item.term ||
                    item.nom ||
                    'Terme';

                var definition =
                    item.definition ||
                    item.def ||
                    item.description ||
                    item.desc ||
                    '';

                return `

                    <article
                        class="memo-card vocab-card">

                        <span>
                            🌍 Vocabulaire
                        </span>

                        <h3>
                            ${escapeHtml(
                                term
                            )}
                        </h3>

                        <p>
                            ${escapeHtml(
                                definition
                            )}
                        </p>

                    </article>

                `;

            }).join('')}

        </div>

    `;
}


/* =========================================================
   EXAMENS
   ========================================================= */

function startExam(subject) {

    var questions =
        flattenQuestions(subject);

    if (!questions.length) {

        var panel =
            document.getElementById(
                'examPanel'
            );

        if (panel) {

            panel.innerHTML = `
                <div class="empty">
                    Aucun exercice disponible
                    pour cet examen.
                </div>
            `;

        }

        return;
    }


    questions =
        shuffle(questions)
            .slice(0, 15);


    cessExamState = {

        subject:
            subject,

        questions:
            questions,

        index:
            0,

        score:
            0,

        answered:
            false

    };


    renderExamQuestion();
}


function renderExamQuestion() {

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
        state.questions.length
    ) {

        finishExam();

        return;
    }


    var q =
        state.questions[
            state.index
        ];


    panel.innerHTML = `

        <div class="quiz-header">

            <span>
                Question
                ${state.index + 1}
                /
                ${state.questions.length}
            </span>

            <strong>
                ${state.score}
                point${state.score > 1 ? 's' : ''}
            </strong>

        </div>


        <div class="quiz-progress">

            <i
                style="
                    width:${
                        (
                            state.index /
                            state.questions.length
                        ) * 100
                    }%
                ">
            </i>

        </div>


        <div class="quiz-question">

            <span class="eyebrow">
                ${
                    state.subject === 'geo'
                        ? '🌍 Géographie'
                        : '📐 Mathématiques'
                }
            </span>

            <h2>
                ${escapeHtml(
                    q.question
                )}
            </h2>

        </div>


        <div class="quiz-options">

            ${q.options.map(
                function (
                    option,
                    index
                ) {

                    return `
                        <button
                            type="button"
                            onclick="
                                answerExam(
                                    ${index}
                                )
                            ">

                            <span>
                                ${String.fromCharCode(
                                    65 + index
                                )}
                            </span>

                            ${escapeHtml(
                                option
                            )}

                        </button>
                    `;

                }
            ).join('')}

        </div>


        <div
            id="examFeedback"
            class="quiz-feedback">
        </div>

    `;
}


function answerExam(optionIndex) {

    if (
        !cessExamState ||
        cessExamState.answered
    ) {
        return;
    }

    cessExamState.answered =
        true;


    var state =
        cessExamState;

    var q =
        state.questions[
            state.index
        ];

    var correct =
        Number(q.correct || 0);

    var good =
        optionIndex === correct;


    var panel =
        document.getElementById(
            'examPanel'
        );

    if (!panel) {
        return;
    }


    var buttons =
        panel.querySelectorAll(
            '.quiz-options button'
        );


    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].disabled =
            true;

        if (i === correct) {
            buttons[i].classList.add(
                'correct'
            );
        }

        if (
            i === optionIndex &&
            !good
        ) {

            buttons[i].classList.add(
                'wrong'
            );
        }
    }


    if (good) {

        state.score++;

    } else {

        if (
            cessState.mistakes.indexOf(
                q.id
            ) === -1
        ) {

            cessState.mistakes.push(
                q.id
            );
        }
    }


    var feedback =
        document.getElementById(
            'examFeedback'
        );

    if (feedback) {

        feedback.innerHTML = `

            <div class="${
                good
                    ? 'good'
                    : 'bad'
            }">

                <strong>
                    ${
                        good
                            ? '✓ Bonne réponse !'
                            : '✗ Mauvaise réponse'
                    }
                </strong>

                ${
                    q.correction
                        ? `
                            <p>
                                ${escapeHtml(
                                    q.correction
                                )}
                            </p>
                        `
                        : ''
                }

                <button
                    type="button"
                    onclick="nextExamQuestion()">

                    ${
                        state.index + 1 >=
                        state.questions.length
                            ? 'Voir le résultat'
                            : 'Question suivante →'
                    }

                </button>

            </div>

        `;
    }

    cessSave();
}


function nextExamQuestion() {

    if (!cessExamState) {
        return;
    }

    cessExamState.index++;
    cessExamState.answered =
        false;

    renderExamQuestion();
}


function finishExam() {

    var state =
        cessExamState;

    if (!state) {
        return;
    }

    var total =
        state.questions.length;

    var score =
        state.score;

    var percentage =
        total
            ? Math.round(
                score / total * 100
            )
            : 0;


    cessState.results.push({

        date:
            new Date().toISOString(),

        mode:
            'exam-' +
            state.subject,

        score:
            score,

        total:
            total,

        percentage:
            percentage

    });


    cessSave();


    var panel =
        document.getElementById(
            'examPanel'
        );

    if (!panel) {
        return;
    }


    panel.innerHTML = `

        <div class="quiz-result">

            <span class="result-icon">
                ${
                    percentage >= 80
                        ? '🏆'
                        : percentage >= 60
                            ? '⭐'
                            : '📚'
                }
            </span>

            <h2>
                Examen terminé
            </h2>

            <div class="result-score">
                ${score} / ${total}
            </div>

            <p>
                ${percentage}% de réussite
            </p>

            <div class="result-actions">

                <button
                    type="button"
                    class="primary"
                    onclick="
                        startExam(
                            '${state.subject}'
                        )
                    ">

                    🔄 Recommencer

                </button>

            </div>

        </div>

    `;
}


/* =========================================================
   PROGRESSION
   ========================================================= */

function renderProgress() {

    var content =
        document.getElementById(
            'progressContent'
        );

    if (!content) {
        return;
    }


    var maths =
        allChaps('maths');

    var geo =
        allChaps('geo');

    var all =
        maths.concat(geo);


    var mastered =
        all.filter(
            function (chapter) {
                return (
                    getChapterProgress(
                        chapter.id
                    ) >= 100
                );
            }
        ).length;


    var total =
        all.length;


    var overall =
        total
            ? Math.round(
                mastered /
                total *
                100
            )
            : 0;


    var correctAnswers = 0;
    var totalAnswers = 0;


    for (
        var i = 0;
        i < cessState.results.length;
        i++
    ) {

        correctAnswers +=
            Number(
                cessState.results[i].score ||
                0
            );

        totalAnswers +=
            Number(
                cessState.results[i].total ||
                0
            );
    }


    var quizRate =
        totalAnswers
            ? Math.round(
                correctAnswers /
                totalAnswers *
                100
            )
            : 0;


    content.innerHTML = `

        <div class="progress-summary">

            <div class="stat">
                <b>
                    ${overall}%
                </b>
                <span>
                    Progression globale
                </span>
            </div>

            <div class="stat">
                <b>
                    ${mastered}/${total}
                </b>
                <span>
                    Chapitres maîtrisés
                </span>
            </div>

            <div class="stat">
                <b>
                    ${cessState.results.length}
                </b>
                <span>
                    Quiz réalisés
                </span>
            </div>

            <div class="stat">
                <b>
                    ${quizRate}%
                </b>
                <span>
                    Réussite aux quiz
                </span>
            </div>

        </div>


        <div class="grid2">

            <div class="panel">

                <h2>
                    📐 Mathématiques
                </h2>

                <div class="progress-row">

                    <div class="progress-label">
                        <span>
                            Progression
                        </span>

                        <strong>
                            ${pctSubject('maths')}%
                        </strong>
                    </div>

                    <div class="bar">
                        <i
                            style="
                                width:${pctSubject('maths')}%
                            ">
                        </i>
                    </div>

                </div>

            </div>


            <div class="panel">

                <h2>
                    🌍 Géographie
                </h2>

                <div class="progress-row">

                    <div class="progress-label">
                        <span>
                            Progression
                        </span>

                        <strong>
                            ${pctSubject('geo')}%
                        </strong>
                    </div>

                    <div class="bar">
                        <i
                            style="
                                width:${pctSubject('geo')}%
                            ">
                        </i>
                    </div>

                </div>

            </div>

        </div>


        <div class="panel">

            <h2>
                📝 Historique des quiz
            </h2>

            ${
                cessState.results.length
                    ? `
                        <div class="history">

                            ${cessState.results
                                .slice()
                                .reverse()
                                .slice(0, 10)
                                .map(
                                    function (
                                        result
                                    ) {

                                        var date =
                                            new Date(
                                                result.date
                                            );

                                        return `
                                            <div
                                                class="history-row">

                                                <span>
                                                    ${escapeHtml(
                                                        result.mode
                                                    )}
                                                </span>

                                                <strong>
                                                    ${
                                                        result.score
                                                    } /
                                                    ${
                                                        result.total
                                                    }
                                                </strong>

                                                <b>
                                                    ${
                                                        result.percentage
                                                    }%
                                                </b>

                                                <small>
                                                    ${
                                                        date.toLocaleDateString(
                                                            'fr-BE'
                                                        )
                                                    }
                                                </small>

                                            </div>
                                        `;

                                    }
                                )
                                .join('')}

                        </div>
                    `
                    : `
                        <div class="empty">
                            Aucun quiz réalisé pour
                            le moment.
                        </div>
                    `
            }

        </div>

    `;
}


/* =========================================================
   INITIALISATION
   ========================================================= */

function initCESS() {

    applyTheme();

    renderHome();

    if (
        typeof CHAPITRES === 'undefined'
    ) {
        console.warn(
            'CHAPITRES n’est pas chargé.'
        );
    }

    if (
        typeof GEO_CHAPITRES === 'undefined'
    ) {
        console.warn(
            'GEO_CHAPITRES n’est pas chargé.'
        );
    }

    console.log(
        'Carnet CESS chargé correctement.'
    );
}


if (
    document.readyState ===
    'loading'
) {

    document.addEventListener(
        'DOMContentLoaded',
        initCESS
    );

} else {

    initCESS();

}
```
