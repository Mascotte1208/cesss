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
   CHARGEMENT DE L'ETAT
   ========================================================= */

(function loadState() {

    try {

        var saved = localStorage.getItem(CESS_DBKEY);

        if (saved) {
            var parsed = JSON.parse(saved);

            if (parsed && typeof parsed === 'object') {
                cessState = {
                    progress: parsed.progress || {},
                    results: Array.isArray(parsed.results) ? parsed.results : [],
                    mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : [],
                    streak: Number(parsed.streak || 0),
                    theme: parsed.theme === 'dark' ? 'dark' : 'light'
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


/* =========================================================
   DONNEES DES MATIERES
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
            'Impossible de sauvegarder les données.',
            error
        );

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


/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(id) {

    var target = document.getElementById(id);

    if (!target) {
        console.warn('Vue introuvable :', id);
        return;
    }

    var views = document.querySelectorAll('.view');

    for (var i = 0; i < views.length; i++) {
        views[i].classList.remove('active');
    }

    target.classList.add('active');

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
                if (Object.prototype.hasOwnProperty.call(chapter, key)) {
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


/* =========================================================
   CHAPITRE PAR ID
   ========================================================= */

function findChapter(id) {

    var all = allChaps('maths').concat(
        allChaps('geo')
    );

    for (var i = 0; i < all.length; i++) {

        if (String(all[i].id) === String(id)) {
            return all[i];
        }

    }

    return null;
}


/* =========================================================
   MELANGE
   ========================================================= */

function shuffle(array) {

    var copy = Array.isArray(array)
        ? array.slice()
        : [];

    for (var i = copy.length - 1; i > 0; i--) {

        var j = Math.floor(
            Math.random() * (i + 1)
        );

        var temp = copy[i];

        copy[i] = copy[j];
        copy[j] = temp;
    }

    return copy;
}


/* =========================================================
   POURCENTAGE
   ========================================================= */

function pctSubject(subject) {

    var chapters = allChaps(subject);

    if (!chapters.length) {
        return 0;
    }

    var done = 0;

    for (var i = 0; i < chapters.length; i++) {

        if (
            Number(
                cessState.progress[chapters[i].id] || 0
            ) >= 100
        ) {
            done++;
        }

    }

    return Math.round(
        done / chapters.length * 100
    );
}


/* =========================================================
   ACCUEIL
   ========================================================= */

function renderHome() {

    var stats = document.getElementById('homeStats');

    if (!stats) {
        return;
    }

    var mathsCount = allChaps('maths').length;
    var geoCount = allChaps('geo').length;

    var total = mathsCount + geoCount;

    stats.innerHTML = [

        ['📚', total, 'Chapitres'],

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

        return `
            <div class="stat">
                <b>${item[0]} ${item[1]}</b>
                <span>${item[2]}</span>
            </div>
        `;

    }).join('');


    var progress = document.getElementById(
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
        document.getElementById('priorities');

    if (priorities) {

        var chapters = allChaps('maths')
            .concat(allChaps('geo'))
            .filter(function (chapter) {

                return Number(
                    cessState.progress[chapter.id] || 0
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
                        <div class="priority">

                            <span>
                                ${chapter.icone || '📘'}
                                ${chapter.titre || 'Chapitre'}
                            </span>

                            <b>
                                ${chapter.annee || ''}
                            </b>

                        </div>
                    `;

                }).join('');

        }

    }

}


/* =========================================================
   MATIERE
   ========================================================= */

function renderSubject(subject) {

    if (!CESS_SUBJECTS[subject]) {
        return;
    }

    var data =
        CESS_SUBJECTS[subject].getData();

    var totalElement = document.getElementById(
        subject === 'maths'
            ? 'mathsTotal'
            : 'geoTotal'
    );

    var yearsElement = document.getElementById(
        subject === 'maths'
            ? 'mathYears'
            : 'geoYears'
    );

    var contentElement = document.getElementById(
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
        chaptersAll.length + ' chapitres';


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

            for (var i = 0; i < chapters.length; i++) {

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

            var percentage =
                chapters.length
                    ? Math.round(
                        done / chapters.length * 100
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

                var done =
                    Number(
                        cessState.progress[
                            chapter.id
                        ] || 0
                    ) >= 100;

                return `
                    <article class="chapter">

                        <span
                            style="font-size:30px">
                            ${chapter.icone || '📘'}
                        </span>

                        <div class="chapter-main">

                            <h3>
                                ${chapter.titre || 'Chapitre'}
                            </h3>

                            <p>
                                ${chapter.desc || ''}
                            </p>

                        </div>

                        <span
                            class="badge ${done ? 'done' : ''}">

                            ${
                                done
                                    ? '✓ Maîtrisé'
                                    : 'À revoir'
                            }

                        </span>

                        <button
                            type="button"
                            onclick="openChapter('${chapter.id}')">

                            Ouvrir

                        </button>

                    </article>
                `;

            }).join('')}

        </div>
    `;

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


    var content =
        document.createElement('div');

    content.className = 'detail';


    var objectives =
        Array.isArray(chapter.objectifs)
            ? chapter.objectifs
            : [];


    var matieres =
        Array.isArray(chapter.matieres)
            ? chapter.matieres
            : [];


    var subject =
        chapter.matiere || 'maths';


    var subjectInfo =
        CESS_SUBJECTS[subject] ||
        CESS_SUBJECTS.maths;


    content.innerHTML = `

        <div class="eyebrow">

            ${subjectInfo.icon}
            ${subjectInfo.label}
            · ${chapter.annee || ''}

        </div>


        <h2>
            ${chapter.icone || ''}
            ${chapter.titre || 'Chapitre'}
        </h2>


        <p>
            ${chapter.desc || ''}
        </p>


        ${
            matieres.length
                ? `
                    <h3>
                        📚 À savoir
                    </h3>

                    <ul>
                        ${matieres.map(function (item) {
                            return `<li>${item}</li>`;
                        }).join('')}
                    </ul>
                `
                : ''
        }


        <div class="course">
            ${chapter.cours || ''}
        </div>


        <h3>
            🎯 Objectifs
        </h3>


        <ul>

            ${
                objectives.length
                    ? objectives.map(function (item) {
                        return `<li>${item}</li>`;
                    }).join('')
                    : '<li>Aucun objectif renseigné.</li>'
            }

        </ul>


        <div class="detail-actions">

            <button
                type="button"
                class="success"
                onclick="markDone('${chapter.id}')">

                ✓ Marquer maîtrisé

            </button>


            <button
                type="button"
                class="primary"
                onclick="quizChapter('${chapter.id}')">

                🎯 Faire le quiz

            </button>


            <button
                type="button"
                class="close"
                onclick="this.closest('.detail').remove()">

                Fermer

            </button>

        </div>

    `;


    var host =
        document.getElementById(
            subject === 'geo'
                ? 'geoContent'
                : 'mathContent'
        );


    if (host) {

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

    cessState.progress[id] = 100;

    cessSave();

    renderHome();

    renderSubject(
        chapter.matiere || 'maths'
    );

}


/* =========================================================
   QUESTIONS
   ========================================================= */

function flattenQuestions(filter) {

    filter = filter || 'all';

    var chapters =
        allChaps('maths').concat(
            allChaps('geo')
        );

    var questions = [];


    for (var i = 0; i < chapters.length; i++) {

        var chapter = chapters[i];

        if (!Array.isArray(chapter.exercices)) {
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
                !Array.isArray(question.options) ||
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
                    chapter.matiere || ''

            });

        }

    }


    if (
        filter === 'maths' ||
        filter === 'geo'
    ) {

        questions =
            questions.filter(function (q) {

                return q.matiere === filter;

            });

    }


    if (filter === 'mistakes') {

        questions =
            questions.filter(function (q) {

                return cessState.mistakes.indexOf(q.id) !== -1;

            });

    }


    return questions;
}


/* =========================================================
   QUIZ
   ========================================================= */

function startQuiz(mode) {

    var questions = [];


    if (mode === 'truefalse') {

        questions = [

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
                    'La densité de population est le nombre d’habitants par km².',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '4e'
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

            var emptyPanel =
                document.getElementById(
                    'gamePanel'
                );

            if (emptyPanel) {

                emptyPanel.innerHTML = `
                    <div class="empty">
                        Aucune erreur enregistrée
                        pour le moment.<br><br>
                        Fais d'abord un quiz.
                    </div>
                `;

            }

            showView('games');

            return;
        }


        if (!questions.length) {

            var noPanel =
                document.getElementById(
                    'gamePanel'
                );

            if (noPanel) {

                noPanel.innerHTML = `
                    <div class="empty">
                        Aucune question disponible
                        pour ce mode.
                    </div>
                `;

            }

            showView('games');

            return;
        }

    }


    cessQuizState = {
        qs: shuffle(questions).slice(0, 10),
        index: 0,
        score: 0,
        mode: mode,
        recorded: false
    };


    showView('games');

    renderQuiz();

}


/* =========================================================
   QUIZ D'UN CHAPITRE
   ========================================================= */

function quizChapter(id) {

    var questions =
        flattenQuestions('all')
            .filter(function (question) {

                return question.id.indexOf(
                    id + '_'
                ) === 0;

            });


    if (!questions.length) {

        alert(
            'Aucune question disponible pour ce chapitre.'
        );

        return;
    }


    cessQuizState = {

        qs: shuffle(questions),

        index: 0,

        score: 0,

        mode: 'chapter',

        recorded: false

    };


    showView('games');

    renderQuiz();

}


/* =========================================================
   AFFICHAGE DU QUIZ
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
        !cessQuizState ||
        cessQuizState.index >=
        cessQuizState.qs.length
    ) {

        var score =
            cessQuizState
                ? cessQuizState.score
                : 0;

        var total =
            cessQuizState
                ? cessQuizState.qs.length
                : 0;

        var percentage =
            total
                ? Math.round(
                    score / total * 100
                )
                : 0;


        if (
            cessQuizState &&
            !cessQuizState.recorded
        ) {

            cessState.results.push({

                date: Date.now(),

                score: score,

                total: total,

                mode: cessQuizState.mode

            });

            cessQuizState.recorded = true;

            cessSave();

        }


        panel.innerHTML = `

            <div class="result">

                <b>
                    ${percentage}%
                </b>

                <p>
                    ${score}
                    bonne(s) réponse(s)
                    sur
                    ${total}
                </p>

                <button
                    type="button"
                    class="primary"
                    onclick="startQuiz('${cessQuizState ? cessQuizState.mode : 'mixed'}')">

                    Rejouer

                </button>

            </div>

        `;

        return;
    }


    var question =
        cessQuizState.qs[
            cessQuizState.index
        ];


    var options =
        Array.isArray(question.options)
            ? question.options
            : [];


    panel.innerHTML = `

        <div class="quiz-meta">

            <span>
                Question
                ${cessQuizState.index + 1}
                /
                ${cessQuizState.qs.length}
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


        <div class="question">
            ${question.question}
        </div>


        <div class="options">

            ${options.map(function (option, index) {

                return `
                    <button
                        type="button"
                        onclick="answerQuiz(${index})">

                        ${option}

                    </button>
                `;

            }).join('')}

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


    if (
        index ===
        Number(question.correct)
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

    cessSave();

    renderQuiz();

}


/* =========================================================
   CAPITALes
   ========================================================= */

function startCapitals() {

    var capitals = null;


    if (
        typeof CAPITALES !== 'undefined' &&
        Array.isArray(CAPITALES)
    ) {

        capitals = CAPITALES;

    }


    if (
        !capitals ||
        !capitals.length
    ) {

        var panel =
            document.getElementById(
                'gamePanel'
            );

        if (panel) {

            panel.innerHTML = `
                <div class="empty">
                    Le jeu des capitales
                    n'est pas disponible
                    dans les données actuelles.
                </div>
            `;

        }

        showView('games');

        return;
    }


    var questions =
        shuffle(capitals)
            .slice(0, 10)
            .map(function (item, index) {

                var correctCapital =
                    item.capitale ||
                    item.capital ||
                    '';


                var country =
                    item.pays ||
                    item.country ||
                    '';


                var others =
                    shuffle(
                        capitals.filter(function (other) {

                            return (
                                other !== item
                            );

                        })
                    )
                    .slice(0, 3)
                    .map(function (other) {

                        return (
                            other.capitale ||
                            other.capital ||
                            ''
                        );

                    });


                var options =
                    shuffle(
                        [correctCapital]
                            .concat(others)
                    );


                return {

                    id:
                        'capital_' + index,

                    question:
                        'Quelle est la capitale de ' +
                        country +
                        ' ?',

                    options:
                        options,

                    correct:
                        options.indexOf(
                            correctCapital
                        ),

                    matiere:
                        'geo',

                    annee:
                        '—'

                };

            });


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

    cessMemoMode = mode;


    var buttons =
        document.querySelectorAll(
            '.memo-tabs button'
        );


    for (var i = 0; i < buttons.length; i++) {

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
   MEMO
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


    var yearSelect =
        document.getElementById(
            'memoYear'
        );


    var term =
        search
            ? String(search.value || '')
                .toLowerCase()
                .trim()
            : '';


    var year =
        yearSelect
            ? yearSelect.value
            : 'all';


    /* -----------------------------------------------------
       VOCABULAIRE
       ----------------------------------------------------- */

    if (
        cessMemoMode === 'vocab'
    ) {

        var vocabulary = [];


        if (
            typeof GEO_VOCAB_DATA !== 'undefined' &&
            Array.isArray(GEO_VOCAB_DATA)
        ) {

            vocabulary =
                GEO_VOCAB_DATA;

        } else if (
            typeof GEO_VOCAB !== 'undefined'
        ) {

            if (
                Array.isArray(GEO_VOCAB)
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


        var filteredVocabulary =
            vocabulary.filter(function (item) {

                item = item || {};


                var text = [

                    item.terme || '',
                    item.mot || '',
                    item.definition || '',
                    item.def || '',
                    item.exemple || '',
                    item.categorie || '',
                    item.theme || ''

                ].join(' ').toLowerCase();


                var matchesTerm =
                    text.indexOf(term) !== -1;


                var itemYear =
                    item.niveau ||
                    item.annee ||
                    '';


                var matchesYear =
                    year === 'all' ||
                    itemYear === year;


                return (
                    matchesTerm &&
                    matchesYear
                );

            });


        if (!filteredVocabulary.length) {

            box.innerHTML = `
                <div class="empty">
                    Aucun mot trouvé.
                </div>
            `;

            return;
        }


        box.innerHTML =
            filteredVocabulary
                .map(function (item) {

                    return `

                        <article class="memo-card">

                            <div class="top">

                                <h3>
                                    ${
                                        item.terme ||
                                        item.mot ||
                                        'Terme'
                                    }
                                </h3>

                                <span class="badge">

                                    ${
                                        item.niveau ||
                                        item.annee ||
                                        '—'
                                    }

                                    ·

                                    ${
                                        item.categorie ||
                                        item.theme ||
                                        'Géographie'
                                    }

                                </span>

                            </div>


                            <p>
                                ${
                                    item.definition ||
                                    item.def ||
                                    ''
                                }
                            </p>


                            ${
                                item.exemple
                                    ? `
                                        <p class="exemple">
                                            📌
                                            ${item.exemple}
                                        </p>
                                    `
                                    : ''
                            }

                        </article>

                    `;

                }).join('');


        return;
    }


    /* -----------------------------------------------------
       FORMULES
       ----------------------------------------------------- */

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


            if (Array.isArray(list)) {

                formulas =
                    formulas.concat(list);

            }

        }

    }


    formulas =
        formulas.filter(function (formula) {

            formula = formula || {};


            var text = [

                formula.titre || '',
                formula.definition || '',
                formula.exemple || '',
                formula.categorie || ''

            ].join(' ').toLowerCase();


            var matchesTerm =
                text.indexOf(term) !== -1;


            var matchesYear =
                year === 'all' ||
                formula.annee === year;


            return (
                matchesTerm &&
                matchesYear
            );

        });


    if (!formulas.length) {

        box.innerHTML = `
            <div class="empty">
                Aucune formule trouvée.
            </div>
        `;

        return;
    }


    box.innerHTML =
        formulas.map(function (formula) {

            return `

                <article class="memo-card">

                    <div class="top">

                        <h3>
                            ${
                                formula.icone ||
                                '📐'
                            }

                            ${formula.titre || ''}
                        </h3>

                        <span class="badge">

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

                    </div>


                    <p>
                        ${
                            formula.definition ||
                            ''
                        }
                    </p>


                    ${
                        formula.exemple
                            ? `
                                <p class="exemple">
                                    📌
                                    ${formula.exemple}
                                </p>
                            `
                            : ''
                    }

                </article>

            `;

        }).join('');

}


/* =========================================================
   EXAMEN
   ========================================================= */

function startExam(subject) {

    var questions =
        flattenQuestions(subject);


    if (!questions.length) {

        var empty =
            document.getElementById(
                'examPanel'
            );


        if (empty) {

            empty.innerHTML = `
                <div class="empty">
                    Aucune question disponible
                    pour cet examen.
                </div>
            `;

        }

        showView('exam');

        return;
    }


    cessExamState = {

        qs:
            shuffle(questions)
                .slice(0, 15),

        index: 0,

        score: 0,

        subject: subject

    };


    showView('exam');

    renderExam();

}


/* =========================================================
   AFFICHAGE EXAMEN
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

        var percentage =
            cessExamState.qs.length
                ? Math.round(
                    cessExamState.score /
                    cessExamState.qs.length *
                    100
                )
                : 0;


        panel.innerHTML = `

            <div class="result">

                <b>
                    ${percentage}%
                </b>

                <p>
                    ${cessExamState.score}
                    /
                    ${cessExamState.qs.length}
                    réponses correctes.
                </p>

                <button
                    type="button"
                    class="primary"
                    onclick="startExam('${cessExamState.subject}')">

                    Recommencer

                </button>

            </div>

        `;

        return;
    }


    var question =
        cessExamState.qs[
            cessExamState.index
        ];


    var options =
        Array.isArray(question.options)
            ? question.options
            : [];


    panel.innerHTML = `

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


        <div class="question">

            ${question.question}

        </div>


        <div class="options">

            ${options.map(function (option, index) {

                return `

                    <button
                        type="button"
                        onclick="answerExam(${index})">

                        ${option}

                    </button>

                `;

            }).join('')}

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


    if (
        index ===
        Number(question.correct)
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

    cessSave();

    renderExam();

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


    var subjects = [
        'maths',
        'geo'
    ];


    var rows =
        subjects.map(function (subject) {

            var global =
                pctSubject(subject);


            var years = [
                '3e',
                '4e',
                '5e',
                '6e'
            ];


            var data =
                CESS_SUBJECTS[
                    subject
                ].getData();


            var yearRows =
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


                    var percentage =
                        chapters.length
                            ? Math.round(
                                done /
                                chapters.length *
                                100
                            )
                            : 0;


                    return `

                        <div class="progress-row">

                            <div class="progress-label">

                                <span>
                                    ${year}
                                </span>

                                <span>
                                    ${percentage}%
                                </span>

                            </div>

                            <div class="bar">

                                <i
                                    style="
                                        width:${percentage}%
                                    ">
                                </i>

                            </div>

                        </div>

                    `;

                }).join('');


            return `

                <div class="panel">

                    <h2>

                        ${
                            CESS_SUBJECTS[
                                subject
                            ].icon
                        }

                        ${
                            CESS_SUBJECTS[
                                subject
                            ].label
                        }

                    </h2>


                    <div class="progress-row">

                        <div class="progress-label">

                            <span>
                                Progression globale
                            </span>

                            <span>
                                ${global}%
                            </span>

                        </div>


                        <div class="bar">

                            <i
                                style="
                                    width:${global}%
                                ">
                            </i>

                        </div>

                    </div>


                    ${yearRows}

                </div>

            `;

        }).join('');


    container.innerHTML = `

        <div class="grid2">

            ${rows}

        </div>


        <div
            class="panel"
            style="margin-top:20px">

            <h2>
                🏆 Historique
            </h2>

            <p>

                Quiz réalisés :
                <b>
                    ${cessState.results.length}
                </b>

                ·

                Erreurs enregistrées :
                <b>
                    ${cessState.mistakes.length}
                </b>

            </p>

        </div>

    `;

}


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    function () {

        if (
            cessState.theme === 'dark'
        ) {

            document.body.classList.add(
                'dark'
            );

        }


        renderHome();

        renderSubject('maths');

        renderSubject('geo');

        renderMemo();

        renderProgress();

    }
);
