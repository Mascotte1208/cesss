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

// =========================================================
// CHRONOMÈTRE
// =========================================================

var quizTimer = null;
var quizTimeLeft = 0;
var quizTimeLimit = 0;


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
        document.querySelectorAll('.nav-item');

    for (var n = 0; n < navButtons.length; n++) {
        navButtons[n].classList.remove('active');
        if (navButtons[n].getAttribute('data-view') === id) {
            navButtons[n].classList.add('active');
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

    if (id === 'games') {
        renderGamePanel();
    }

    if (id === 'exam') {
        renderExamPanel();
    }

    if (id === 'progress') {
        renderProgress();
    }

    if (id === 'flashcards') {
        if (typeof initFlashcards === 'function') {
            initFlashcards('maths');
        }
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

        return '<div class="home-stat">' +
            '<span class="home-stat-icon">' + item[0] + '</span>' +
            '<span class="home-stat-value">' + item[1] + '</span>' +
            '<span class="home-stat-label">' + item[2] + '</span>' +
            '</div>';

    }).join('');


    // Matières sur l'accueil
    var subjects = document.getElementById('homeSubjects');
    if (subjects) {
        subjects.innerHTML = ['maths', 'geo'].map(function(subject) {
            var pct = pctSubject(subject);
            var totalChaps = allChaps(subject).length;
            var done = 0;
            var chaps = allChaps(subject);
            for (var i = 0; i < chaps.length; i++) {
                if (getChapterProgress(chaps[i].id) >= 100) done++;
            }
            var cardClass = subject === 'maths' ? 'maths-card' : 'geo-card';
            var icon = subject === 'maths' ? '📐' : '🌍';
            var label = subject === 'maths' ? 'Mathématiques' : 'Géographie';

            return `
                <div class="subject-card ${cardClass}">
                    <div class="subject-card-top">
                        <div class="subject-icon">${icon}</div>
                        <span class="subject-arrow">→</span>
                    </div>
                    <h3>${label}</h3>
                    <p>${done}/${totalChaps} chapitres maîtrisés</p>
                    <div class="progress-line"><span style="width:${pct}%"></span></div>
                    <div class="subject-card-footer">
                        <span>${pct}% terminé</span>
                        <button onclick="showView('${subject}')">Continuer →</button>
                    </div>
                </div>
            `;
        }).join('');
    }


    var priorities =
        document.getElementById(
            'homePriorities'
        );

    if (priorities) {

        var chapters =
            allChaps('maths')
                .concat(allChaps('geo'))
                .filter(function (chapter) {
                    return getChapterProgress(
                        chapter.id
                    ) < 100 && getChapterProgress(chapter.id) > 0;
                })
                .slice(0, 5);

        if (!chapters.length) {

            priorities.innerHTML =
                '<div class="empty-state">🎉 Tout est maîtrisé !</div>';

        } else {

            priorities.innerHTML =
                '<div class="simple-list">' +
                chapters.map(function (chapter) {

                    return `
                        <div class="simple-list-item">
                            <div class="simple-list-icon">${chapter.icone || '📘'}</div>
                            <div class="simple-list-main">
                                <strong>${escapeHtml(chapter.titre || 'Chapitre')}</strong>
                                <small>${escapeHtml(chapter.matiere || '')} · ${escapeHtml(chapter.annee || '')}</small>
                            </div>
                            <button class="simple-list-action" onclick="openChapter('${chapter.id}')">Reprendre</button>
                        </div>
                    `;

                }).join('') +
                '</div>';
        }
    }


    // Activité récente
    var activity = document.getElementById('homeActivity');
    if (activity) {
        var recent = cessState.results.slice(-5).reverse();
        if (!recent.length) {
            activity.innerHTML = '<div class="empty-state">Aucune activité récente. Lance un quiz !</div>';
        } else {
            activity.innerHTML = '<div class="simple-list">' +
                recent.map(function(r) {
                    var date = new Date(r.date);
                    return `
                        <div class="simple-list-item">
                            <div class="simple-list-icon">📝</div>
                            <div class="simple-list-main">
                                <strong>${escapeHtml(r.mode || 'Quiz')}</strong>
                                <small>${r.score}/${r.total} · ${date.toLocaleDateString('fr-BE')}</small>
                            </div>
                            <span style="font-size:11px;font-weight:850;color:var(--primary)">${r.percentage || 0}%</span>
                        </div>
                    `;
                }).join('') +
                '</div>';
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
                    class="year-button ${active}"
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
            <div class="empty-state">
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

                var statusClass = done ? 'status-done' : (progress > 0 ? 'status-progress' : 'status-new');
                var statusText = done ? '✓ Maîtrisé' : (progress > 0 ? progress + '%' : 'À revoir');

                return `
                    <button
                        class="chapter-item"
                        onclick="openChapter('${chapter.id}')"
                        type="button">

                        <span class="chapter-icon">
                            ${chapter.icone || '📘'}
                        </span>

                        <div class="chapter-main">

                            <strong>
                                ${escapeHtml(
                                    chapter.titre ||
                                    'Chapitre'
                                )}
                            </strong>

                            <small>
                                ${escapeHtml(
                                    chapter.desc ||
                                    ''
                                )}
                            </small>

                        </div>

                        <span class="chapter-status ${statusClass}">
                            ${statusText}
                        </span>

                    </button>
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

        <div class="chapter-top">

            <div class="chapter-breadcrumb">
                <button onclick="showView('${subject}')">← ${subjectInfo.label}</button>
                <span>· ${chapter.annee}</span>
                <span>· ${chapter.titre}</span>
            </div>

            <div class="chapter-hero">

                <div class="chapter-title-row">

                    <div class="chapter-big-icon">
                        ${chapter.icone || '📘'}
                    </div>

                    <div class="chapter-title">

                        <h1>
                            ${escapeHtml(
                                chapter.titre ||
                                'Chapitre'
                            )}
                        </h1>

                        <p>
                            ${escapeHtml(
                                chapter.desc || ''
                            )}
                        </p>

                    </div>

                </div>


                <div class="chapter-progress-box">

                    <span class="chapter-progress-number">
                        ${progress}%
                    </span>

                    <span class="chapter-progress-label">
                        Maîtrise du chapitre
                    </span>

                    <div class="progress-line" style="margin-top:10px">
                        <span style="width:${progress}%"></span>
                    </div>

                </div>

            </div>

        </div>


        <div class="chapter-tabs">

            <button
                type="button"
                class="chapter-tab active"
                onclick="switchChapterTab('course', this)">

                📖 Cours

            </button>

            <button
                type="button"
                class="chapter-tab"
                onclick="switchChapterTab('remember', this)">

                🧠 Objectifs

            </button>

            <button
                type="button"
                class="chapter-tab"
                onclick="switchChapterTab('exercise', this)">

                🎯 Exercices

            </button>

        </div>


        <div class="chapter-layout">

            <div>

                <div
                    class="chapter-tab-content"
                    data-tab="course">

                    ${
                        matieres.length
                            ? `
                                <div class="content-card">

                                    <h3>📚 À savoir</h3>

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

                        <h3>📖 Cours</h3>

                        <div>
                            ${
                                chapter.cours ||
                                '<p>Le cours sera bientôt disponible.</p>'
                            }
                        </div>

                        <!-- BOUTON IMPRESSION PDF -->
                        <div style="margin-top:20px;padding:15px;background:var(--primary-soft);border-radius:10px;text-align:center;">
                            <button class="button primary" onclick="printChapter('${chapter.id}')" type="button">
                                📄 Télécharger ce chapitre en PDF
                            </button>
                        </div>

                    </div>

                </div>


                <div
                    class="chapter-tab-content"
                    data-tab="remember"
                    style="display:none">

                    <div class="content-card">

                        <h3>🎯 Objectifs du chapitre</h3>

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

                </div>


                <div
                    class="chapter-tab-content"
                    data-tab="exercise"
                    style="display:none">

                    ${
                        exercices.length
                            ? `
                                <div class="exercise-list">

                                    ${exercices.map(
                                        function (
                                            exercise,
                                            index
                                        ) {

                                            var options = Array.isArray(exercise.options) ? exercise.options : [];

                                            return `
                                                <div
                                                    class="exercise-card">

                                                    <div class="exercise-number">
                                                        Exercice ${index + 1}
                                                    </div>

                                                    <div class="exercise-question">
                                                        ${escapeHtml(
                                                            exercise.question ||
                                                            'Question'
                                                        )}
                                                    </div>

                                                    ${
                                                        options.length
                                                            ? `
                                                                <div class="exercise-options">
                                                                    ${options.map(
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
                                <div class="empty-state">
                                    Aucun exercice disponible
                                    pour ce chapitre.
                                </div>
                            `
                    }

                </div>

            </div>


            <div class="chapter-sidebar">

                <div class="chapter-sidebar-card">

                    <h3>📌 Progression</h3>

                    <div class="progress-line">
                        <span style="width:${progress}%"></span>
                    </div>

                    <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:11px;color:var(--text-soft)">
                        <span>${progress}% maîtrisé</span>
                        <span>${progress >= 100 ? '✅' : '📖'}</span>
                    </div>

                    <button
                        class="button primary"
                        style="width:100%;margin-top:12px"
                        onclick="markDone('${chapter.id}')">

                        ✓ Marquer maîtrisé

                    </button>

                </div>


                ${
                    exercices.length
                        ? `
                            <div class="chapter-sidebar-card">

                                <h3>🎯 Quiz du chapitre</h3>

                                <p style="font-size:11px;color:var(--text-soft)">
                                    ${exercices.length} exercices disponibles
                                </p>

                                <button
                                    class="button secondary"
                                    style="width:100%;margin-top:10px"
                                    onclick="quizChapter('${chapter.id}')">

                                    🎯 Lancer le quiz

                                </button>

                            </div>
                        `
                        : ''
                }

            </div>

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
            '.chapter-tab'
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
            contents[j].style.display = 'block';
        } else {
            contents[j].style.display = 'none';
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
        card.querySelectorAll('.exercise-option');

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
            '<div class="correction" style="border-color:var(--green);background:var(--green-soft);color:var(--green)">✓ Bonne réponse !' +
            (
                exercise.correction
                    ? '<p style="margin-top:5px;color:var(--text-soft)">' +
                        exercise.correction +
                      '</p>'
                    : ''
            ) +
            '</div>';

    } else {

        button.classList.add('wrong');

        if (buttons[correct]) {
            buttons[correct].classList.add(
                'correct'
            );
        }

        feedback.innerHTML =
            '<div class="correction" style="border-color:var(--red);background:var(--red-soft);color:var(--red)">✗ Pas tout à fait.' +
            (
                exercise.correction
                    ? '<p style="margin-top:5px;color:var(--text-soft)">' +
                        exercise.correction +
                      '</p>'
                    : ''
            ) +
            '</div>';
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
        var box =
            detail.querySelector(
                '.chapter-progress-box'
            );

        if (box) {
            box.innerHTML = `
                <span class="chapter-progress-number">
                    100%
                </span>
                <span class="chapter-progress-label">
                    ✅ Chapitre maîtrisé !
                </span>
                <div class="progress-line" style="margin-top:10px">
                    <span style="width:100%"></span>
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

    if (mode === 'truefalse') {
        // Questions Vrai/Faux spécifiques
        var tfQuestions = [
            { id: 'tf_1', question: 'Un triangle isométrique a des côtés de même longueur.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'maths', annee: '3e' },
            { id: 'tf_2', question: 'La racine carrée de 16 est 4.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'maths', annee: '3e' },
            { id: 'tf_3', question: '(a+b)² = a² + b²', options: ['Vrai', 'Faux'], correct: 1, matiere: 'maths', annee: '3e' },
            { id: 'tf_4', question: 'La Belgique a un climat méditerranéen.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'geo', annee: '3e' },
            { id: 'tf_5', question: 'Les séismes se produisent aux frontières des plaques.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'geo', annee: '3e' },
            { id: 'tf_6', question: 'Le développement durable a 3 piliers.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'geo', annee: '6e' },
            { id: 'tf_7', question: 'Le cosinus est opposé/hypoténuse.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'maths', annee: '3e' },
            { id: 'tf_8', question: 'Une fonction croissante a une dérivée positive.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'maths', annee: '6e' }
        ];
        var questions = shuffle(tfQuestions).slice(0, 10);
        cessQuizState = {
            mode: mode,
            questions: questions,
            index: 0,
            score: 0,
            answered: false
        };
        renderQuizQuestion();
        return;
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
                <div class="empty-state">
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

        <div class="quiz-question-card">

            <div class="quiz-meta">

                <span>
                    Question
                    ${state.index + 1}
                    / ${total}
                </span>

                <span id="quizTimer" style="font-weight:850;font-size:13px;color:var(--text-soft);">
                    ⏱️ ${formatTime(30)}
                </span>

                <strong>
                    ${state.score}
                    point${state.score > 1 ? 's' : ''}
                </strong>

            </div>


            <div class="quiz-progress">

                <span
                    style="
                        width:${
                            (
                                state.index /
                                total
                            ) * 100
                        }%
                    ">
                </span>

            </div>


            <div class="quiz-question">

                <div class="eyebrow">
                    ${q.matiere === 'geo'
                        ? '🌍 Géographie'
                        : '📐 Mathématiques'}
                </div>

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
                                class="quiz-option"
                                onclick="
                                    answerQuiz(
                                        ${index}
                                    )
                                ">

                                <span class="option-letter">
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

        </div>

    `;

    // Démarrer le chronomètre
    startQuizTimer(30);
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
            '.quiz-option'
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

            <div style="
                margin-top:15px;
                padding:15px;
                border-radius:10px;
                background:${good ? 'var(--green-soft)' : 'var(--red-soft)'};
                border:1px solid ${good ? 'var(--green)' : 'var(--red)'};
            ">

                <strong style="color:${good ? 'var(--green)' : 'var(--red)'}">
                    ${good ? '✓ Bonne réponse !' : '✗ Mauvaise réponse'}
                </strong>

                ${
                    q.correction
                        ? `
                            <p style="margin-top:8px;color:var(--text-soft)">
                                ${escapeHtml(
                                    q.correction
                                )}
                            </p>
                        `
                        : ''
                }

                <button
                    class="button primary"
                    style="margin-top:12px"
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

    // Arrêter le chronomètre
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
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

            <div class="result-circle">
                ${percentage}%
            </div>

            <h2>
                ${message}
            </h2>

            <p>
                ${score} / ${total} bonnes réponses
            </p>

            <div class="result-actions">

                <button
                    class="button primary"
                    onclick="replayQuiz()">

                    🔄 Recommencer

                </button>

                <button
                    class="button secondary"
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
    ['Irlande', 'Dublin']
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

    showView('games');
    renderQuizQuestion();
}


/* =========================================================
   MEMO
   ========================================================= */

function setMemoMode(mode) {
    cessMemoMode = mode;

    var tabs = document.querySelectorAll('.memo-tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        if (tabs[i].getAttribute('data-mode') === mode) {
            tabs[i].classList.add('active');
        }
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
            <div class="empty-state">
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
            <div class="empty-state">
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
                    item.definition ||
                    item.description ||
                    item.desc ||
                    '';

                return `

                    <div class="memo-card">

                        <strong>
                            ${escapeHtml(
                                title
                            )}
                        </strong>

                        ${
                            formula
                                ? `
                                    <div class="memo-example">
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

                        <span class="memo-tag">
                            ${escapeHtml(
                                item.annee ||
                                ''
                            )}
                            ${item.categorie ? ' · ' + escapeHtml(item.categorie) : ''}
                        </span>

                    </div>

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
            : null;


    if (!vocab) {

        content.innerHTML = `
            <div class="empty-state">
                Le vocabulaire n'est pas
                disponible.
            </div>
        `;

        return;
    }


    var items =
        Array.isArray(vocab)
            ? vocab.slice()
            : [];


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
            <div class="empty-state">
                Aucun mot trouvé.
            </div>
        `;

        return;
    }


    content.innerHTML = `

        <div class="memo-grid">

            ${items.map(function (item) {

                var term =
                    item.mot ||
                    item.terme ||
                    item.term ||
                    'Terme';

                var definition =
                    item.def ||
                    item.definition ||
                    '';

                return `

                    <div class="memo-card">

                        <strong>
                            ${escapeHtml(
                                term
                            )}
                        </strong>

                        <p>
                            ${escapeHtml(
                                definition
                            )}
                        </p>

                        <span class="memo-tag">
                            ${escapeHtml(
                                item.annee ||
                                ''
                            )}
                            ${item.theme ? ' · ' + escapeHtml(item.theme) : ''}
                        </span>

                    </div>

                `;

            }).join('')}

        </div>

    `;
}


/* =========================================================
   EXAMENS
   ========================================================= */

function renderExamPanel() {
    var panel = document.getElementById('examPanel');
    if (!panel) return;

    panel.innerHTML = `
        <div class="exam-list">
            <div class="exam-card">
                <div class="exam-icon">📐</div>
                <h3>Examen blanc Maths</h3>
                <p>15 questions aléatoires de mathématiques</p>
                <button class="button primary" onclick="startExam('maths')">Commencer →</button>
            </div>
            <div class="exam-card">
                <div class="exam-icon">🌍</div>
                <h3>Examen blanc Géographie</h3>
                <p>15 questions aléatoires de géographie</p>
                <button class="button primary" onclick="startExam('geo')">Commencer →</button>
            </div>
        </div>
    `;
}


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
                <div class="empty-state">
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

        <div class="quiz-question-card">

            <div class="quiz-meta">

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

                <span
                    style="
                        width:${
                            (
                                state.index /
                                state.questions.length
                            ) * 100
                        }%
                    ">
                </span>

            </div>


            <div class="quiz-question">

                <div class="eyebrow">
                    ${
                        state.subject === 'geo'
                            ? '🌍 Géographie'
                            : '📐 Mathématiques'
                    }
                </div>

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
                                class="quiz-option"
                                onclick="
                                    answerExam(
                                        ${index}
                                    )
                                ">

                                <span class="option-letter">
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
            '.quiz-option'
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

            <div style="
                margin-top:15px;
                padding:15px;
                border-radius:10px;
                background:${good ? 'var(--green-soft)' : 'var(--red-soft)'};
                border:1px solid ${good ? 'var(--green)' : 'var(--red)'};
            ">

                <strong style="color:${good ? 'var(--green)' : 'var(--red)'}">
                    ${good ? '✓ Bonne réponse !' : '✗ Mauvaise réponse'}
                </strong>

                ${
                    q.correction
                        ? `
                            <p style="margin-top:8px;color:var(--text-soft)">
                                ${escapeHtml(
                                    q.correction
                                )}
                            </p>
                        `
                        : ''
                }

                <button
                    class="button primary"
                    style="margin-top:12px"
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

            <div class="result-circle">
                ${percentage}%
            </div>

            <h2>
                Examen terminé
            </h2>

            <p>
                ${score} / ${total} bonnes réponses
            </p>

            <div class="result-actions">

                <button
                    class="button primary"
                    onclick="
                        startExam(
                            '${state.subject}'
                        )
                    ">

                    🔄 Recommencer

                </button>

                <button
                    class="button secondary"
                    onclick="showView('progress')">

                    📊 Voir ma progression

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


    var streak = cessState.streak || 0;


    // Badges
    var badgesHtml = `
        <div class="panel" style="margin-top:18px;">
            <h2>🏆 Succès débloqués</h2>
            <div id="badgesContainer"></div>
        </div>
    `;


    content.innerHTML = `

        <div class="progress-overview">

            <div class="progress-big-card">
                <strong>${overall}%</strong>
                <span>Progression globale</span>
            </div>

            <div class="progress-big-card">
                <strong>${mastered}/${total}</strong>
                <span>Chapitres maîtrisés</span>
            </div>

            <div class="progress-big-card">
                <strong>${quizRate}%</strong>
                <span>Réussite aux quiz</span>
            </div>

        </div>


        <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px">

            <div class="panel">

                <h2>📐 Mathématiques</h2>

                <div class="progress-row">
                    <div class="progress-row-name">Progression</div>
                    <div class="progress-row-bar"><span style="width:${pctSubject('maths')}%"></span></div>
                    <div class="progress-row-value">${pctSubject('maths')}%</div>
                </div>

                <div style="margin-top:10px;font-size:11px;color:var(--text-soft)">
                    ${maths.filter(function(c){return getChapterProgress(c.id)>=100}).length}/${maths.length} chapitres
                </div>

            </div>


            <div class="panel">

                <h2>🌍 Géographie</h2>

                <div class="progress-row">
                    <div class="progress-row-name">Progression</div>
                    <div class="progress-row-bar"><span style="width:${pctSubject('geo')}%"></span></div>
                    <div class="progress-row-value">${pctSubject('geo')}%</div>
                </div>

                <div style="margin-top:10px;font-size:11px;color:var(--text-soft)">
                    ${geo.filter(function(c){return getChapterProgress(c.id)>=100}).length}/${geo.length} chapitres
                </div>

            </div>

        </div>


        <div class="panel">

            <h2>🔥 Série en cours</h2>

            <p style="font-size:13px;color:var(--text-soft)">
                ${streak > 0 ? '🔥 ' + streak + ' jour' + (streak > 1 ? 's' : '') + ' de suite !' : '📖 Continue tes révisions quotidiennes !'}
            </p>

        </div>

        <!-- STATISTIQUES DÉTAILLÉES PAR CHAPITRE -->
        <div class="panel" style="margin-top:18px">
            <h2>📊 Progression par chapitre</h2>
            <div style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;">
    `;

    all.forEach(function(chapter) {
        var progress = getChapterProgress(chapter.id);
        var pct = progress > 0 ? progress : 0;
        var color = pct >= 100 ? 'var(--green)' : (pct > 0 ? 'var(--primary)' : 'var(--text-light)');

        content.innerHTML += `
            <div style="
                background:var(--paper-soft);
                border:1px solid var(--line);
                border-radius:10px;
                padding:12px 15px;
            ">
                <div style="display:flex;align-items:center;gap:8px;font-size:11px;">
                    <span>${chapter.icone || '📘'}</span>
                    <span style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                        ${escapeHtml(chapter.titre || '')}
                    </span>
                    <span style="font-weight:850;color:${color};">${pct}%</span>
                </div>
                <div class="progress-line" style="margin-top:6px;">
                    <span style="width:${pct}%;background:${color};"></span>
                </div>
            </div>
        `;
    });

    content.innerHTML += `
            </div>
        </div>

        ${badgesHtml}

        <div class="panel" style="margin-top:18px">

            <h2>📝 Historique des quiz</h2>

            ${
                cessState.results.length
                    ? `
                        <div style="margin-top:12px">

                            ${cessState.results
                                .slice()
                                .reverse()
                                .slice(0, 20)
                                .map(
                                    function (
                                        result
                                    ) {

                                        var date =
                                            new Date(
                                                result.date
                                            );

                                        return `
                                            <div style="
                                                display:flex;
                                                align-items:center;
                                                justify-content:space-between;
                                                padding:10px 0;
                                                border-bottom:1px solid var(--line);
                                                font-size:12px;
                                            ">

                                                <span style="color:var(--text-soft)">
                                                    ${escapeHtml(
                                                        result.mode || 'Quiz'
                                                    )}
                                                </span>

                                                <strong>
                                                    ${result.score}/${result.total}
                                                </strong>

                                                <span style="
                                                    font-weight:850;
                                                    color:${result.percentage >= 70 ? 'var(--green)' : 'var(--red)'}
                                                ">
                                                    ${result.percentage || 0}%
                                                </span>

                                                <small style="color:var(--text-light)">
                                                    ${date.toLocaleDateString(
                                                        'fr-BE'
                                                    )}
                                                </small>

                                            </div>
                                        `;

                                    }
                                )
                                .join('')}

                        </div>
                    `
                    : `
                        <div class="empty-state">
                            Aucun quiz réalisé pour
                            le moment.
                        </div>
                    `
            }

        </div>

    `;

    // Afficher les badges
    renderBadges();
}


/* =========================================================
   GAME PANEL
   ========================================================= */

function renderGamePanel() {
    var panel = document.getElementById('gamePanel');
    if (!panel) return;

    panel.innerHTML = `
        <div class="game-grid">
            <button class="game-card" onclick="startQuiz('mixed')">
                <span>🎯</span>
                <strong>Quiz express</strong>
                <small>10 questions mélangées</small>
            </button>
            <button class="game-card" onclick="startQuiz('truefalse')">
                <span>⚡</span>
                <strong>Vrai / Faux</strong>
                <small>Répondre très vite</small>
            </button>
            <button class="game-card" onclick="startCapitals()">
                <span>🌍</span>
                <strong>Jeu des capitales</strong>
                <small>Teste tes connaissances</small>
            </button>
            <button class="game-card" onclick="startQuiz('mistakes')">
                <span>🧠</span>
                <strong>Mes erreurs</strong>
                <small>Rejouer les questions ratées</small>
            </button>
            <button class="game-card" onclick="startQuiz('maths')">
                <span>📐</span>
                <strong>Défi Maths</strong>
                <small>Questions de mathématiques</small>
            </button>
            <button class="game-card" onclick="startQuiz('geo')">
                <span>🌍</span>
                <strong>Défi Géo</strong>
                <small>Questions de géographie</small>
            </button>
        </div>
    `;
}


/* =========================================================
   IMPRESSION PDF
   ========================================================= */

function printChapter(id) {
    var chapter = findChapter(id);
    if (!chapter) {
        alert('Chapitre introuvable.');
        return;
    }

    var content = `
        <html>
        <head>
            <title>${chapter.titre} - CESS</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: auto; line-height: 1.6; }
                h1 { color: #1a3a5c; }
                h2 { color: #2a5f8f; margin-top: 25px; }
                .formule { background: #f0f4ff; padding: 10px; border-left: 4px solid #315bea; margin: 10px 0; }
                .astuce { background: #fff8e1; padding: 10px; border-left: 4px solid #ffc107; margin: 10px 0; }
                .piege { background: #fce4ec; padding: 10px; border-left: 4px solid #d32f2f; margin: 10px 0; }
                .checklist { background: #e8f5e9; padding: 10px; border-left: 4px solid #2e7d32; margin: 10px 0; }
                ul, ol { padding-left: 20px; }
                table { width: 100%; border-collapse: collapse; margin: 10px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background: #f0f4ff; }
                .footer { margin-top: 30px; border-top: 2px solid #ddd; padding-top: 10px; font-size: 12px; color: #999; text-align: center; }
            </style>
        </head>
        <body>
            <h1>${chapter.titre}</h1>
            <p><strong>Année :</strong> ${chapter.annee || ''}</p>
            <p><strong>Description :</strong> ${chapter.desc || ''}</p>

            ${chapter.cours || ''}

            <div class="footer">
                Fiche générée depuis le Carnet CESS — Révision Mathématiques & Géographie
            </div>
        </body>
        </html>
    `;

    var win = window.open('', '_blank');
    win.document.write(content);
    win.document.close();
    win.print();
}


/* =========================================================
   SYSTÈME DE BADGES
   ========================================================= */

var BADGES = {
    first_quiz: { id: 'first_quiz', nom: 'Premier pas', description: 'Terminer un quiz', icone: '🎯' },
    five_quizzes: { id: 'five_quizzes', nom: 'Entraîné', description: 'Terminer 5 quiz', icone: '💪' },
    twenty_quizzes: { id: 'twenty_quizzes', nom: 'Accro', description: 'Terminer 20 quiz', icone: '🔥' },
    perfect_score: { id: 'perfect_score', nom: 'Parfait !', description: 'Obtenir 100% à un quiz', icone: '⭐' },
    maths_champion: { id: 'maths_champion', nom: 'Champion Maths', description: 'Maîtriser tous les chapitres de maths', icone: '📐' },
    geo_champion: { id: 'geo_champion', nom: 'Champion Géo', description: 'Maîtriser tous les chapitres de géographie', icone: '🌍' },
    ten_streak: { id: 'ten_streak', nom: 'Série en cours', description: '10 jours de révision consécutifs', icone: '📅' },
    master_all: { id: 'master_all', nom: 'Maître CESS', description: 'Maîtriser tous les chapitres', icone: '👑' }
};

function getBadges() {
    var unlocked = [];
    var results = cessState.results || [];
    var mathsChaps = allChaps('maths');
    var geoChaps = allChaps('geo');
    var allChapsTotal = mathsChaps.concat(geoChaps);

    if (results.length >= 1) unlocked.push('first_quiz');
    if (results.length >= 5) unlocked.push('five_quizzes');
    if (results.length >= 20) unlocked.push('twenty_quizzes');

    for (var i = 0; i < results.length; i++) {
        if (results[i].percentage >= 100) {
            unlocked.push('perfect_score');
            break;
        }
    }

    var mathsDone = 0;
    for (var m = 0; m < mathsChaps.length; m++) {
        if (getChapterProgress(mathsChaps[m].id) >= 100) mathsDone++;
    }
    if (mathsDone === mathsChaps.length && mathsChaps.length > 0) unlocked.push('maths_champion');

    var geoDone = 0;
    for (var g = 0; g < geoChaps.length; g++) {
        if (getChapterProgress(geoChaps[g].id) >= 100) geoDone++;
    }
    if (geoDone === geoChaps.length && geoChaps.length > 0) unlocked.push('geo_champion');

    if (cessState.streak >= 10) unlocked.push('ten_streak');

    if (mathsDone === mathsChaps.length && geoDone === geoChaps.length && allChapsTotal.length > 0) unlocked.push('master_all');

    return unlocked.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}

function renderBadges() {
    var container = document.getElementById('badgesContainer');
    if (!container) return;

    var unlocked = getBadges();

    var html = `
        <div style="display:flex;flex-wrap:wrap;gap:12px;padding:10px 0;">
    `;

    for (var key in BADGES) {
        if (BADGES.hasOwnProperty(key)) {
            var badge = BADGES[key];
            var isUnlocked = unlocked.indexOf(key) !== -1;

            html += `
                <div style="
                    background:${isUnlocked ? 'var(--primary-soft)' : 'var(--paper-soft)'};
                    border:2px solid ${isUnlocked ? 'var(--primary)' : 'var(--line)'};
                    border-radius:12px;
                    padding:12px 16px;
                    text-align:center;
                    min-width:100px;
                    opacity:${isUnlocked ? 1 : 0.4};
                    transition:0.3s;
                ">
                    <div style="font-size:28px;">${badge.icone}</div>
                    <div style="font-size:11px;font-weight:850;margin-top:4px;color:${isUnlocked ? 'var(--text)' : 'var(--text-light)'};">
                        ${badge.nom}
                    </div>
                    <div style="font-size:8px;color:var(--text-light);">${badge.description}</div>
                    ${!isUnlocked ? '<div style="font-size:8px;color:var(--text-light);margin-top:4px;">🔒 Verrouillé</div>' : '<div style="font-size:8px;color:var(--green);margin-top:4px;">✅ Débloqué</div>'}
                </div>
            `;
        }
    }

    html += `
        </div>
    `;

    container.innerHTML = html;
}


/* =========================================================
   CHRONOMÈTRE
   ========================================================= */

function startQuizTimer(seconds) {
    // Arrêter l'ancien timer s'il existe
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }

    quizTimeLimit = seconds || 30;
    quizTimeLeft = quizTimeLimit;
    updateTimerDisplay();

    quizTimer = setInterval(function() {
        quizTimeLeft--;
        updateTimerDisplay();

        if (quizTimeLeft <= 0) {
            clearInterval(quizTimer);
            quizTimer = null;
            alert('⏰ Temps écoulé !');
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    var el = document.getElementById('quizTimer');
    if (el) {
        el.textContent = '⏱️ ' + formatTime(quizTimeLeft);
        el.style.color = quizTimeLeft < 10 ? 'var(--red)' : 'var(--text-soft)';
    }
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;
    return String(minutes).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
}


/* =========================================================
   INITIALISATION
   ========================================================= */

function initCESS() {

    applyTheme();

    renderHome();

    renderGamePanel();

    renderExamPanel();

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

    if (
        typeof FLASHCARDS_DATA === 'undefined'
    ) {
        console.warn(
            'FLASHCARDS_DATA n’est pas chargé.'
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
