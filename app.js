```javascript
/* =========================================================
   CARNET CESS
   APP.JS — VERSION STABLE
   Compatible avec :
   - index.html
   - maths-data.js
   - geo-data.js
   - geo-vocab.js
   ========================================================= */

const DBKEY = 'carnetCESSv4';

/* =========================================================
   ETAT
   ========================================================= */

let state = {
    progress: {},
    results: [],
    mistakes: [],
    streak: 0,
    theme: 'light'
};

try {
    const saved = localStorage.getItem(DBKEY);
    if (saved) {
        const parsed = JSON.parse(saved);

        state = {
            progress: parsed.progress || {},
            results: Array.isArray(parsed.results) ? parsed.results : [],
            mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : [],
            streak: Number(parsed.streak || 0),
            theme: parsed.theme || 'light'
        };
    }
} catch (e) {
    console.warn('Erreur LocalStorage :', e);
}

let selectedYear = {
    maths: '3e',
    geo: '3e'
};

let memoMode = 'formules';

let quizState = null;
let examState = null;


/* =========================================================
   DONNEES
   ========================================================= */

const SUBJECTS = {

    maths: {
        label: 'Mathématiques',
        icon: '📐',

        data: function() {
            if (typeof CHAPITRES !== 'undefined') {
                return CHAPITRES;
            }

            console.error('CHAPITRES introuvable. Vérifie maths-data.js');
            return {};
        }
    },

    geo: {
        label: 'Géographie',
        icon: '🌍',

        data: function() {
            if (typeof GEO_CHAPITRES !== 'undefined') {
                return GEO_CHAPITRES;
            }

            console.error('GEO_CHAPITRES introuvable. Vérifie geo-data.js');
            return {};
        }
    }
};


/* =========================================================
   SAUVEGARDE
   ========================================================= */

function save() {

    try {
        localStorage.setItem(DBKEY, JSON.stringify(state));
    } catch (e) {
        console.warn('Impossible de sauvegarder :', e);
    }
}


/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {

    document.body.classList.toggle('dark');

    state.theme =
        document.body.classList.contains('dark')
            ? 'dark'
            : 'light';

    save();
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(id) {

    const target = document.getElementById(id);

    if (!target) {
        console.error('Vue introuvable :', id);
        return;
    }

    document.querySelectorAll('.view').forEach(function(view) {
        view.classList.remove('active');
    });

    target.classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


    /* RENDU DE LA PAGE */

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
        renderGameMenu();
    }

    if (id === 'exam') {
        renderExamMenu();
    }

    if (id === 'progress') {
        renderProgress();
    }
}


/* =========================================================
   RECUPERER TOUS LES CHAPITRES
   ========================================================= */

function allChaps(subject) {

    if (!SUBJECTS[subject]) {
        return [];
    }

    const data = SUBJECTS[subject].data();

    if (!data || typeof data !== 'object') {
        return [];
    }

    const result = [];

    Object.keys(data).forEach(function(annee) {

        const chapters = data[annee];

        if (!Array.isArray(chapters)) {
            return;
        }

        chapters.forEach(function(chapter) {

            result.push({
                ...chapter,
                annee: annee,
                matiere: subject
            });

        });

    });

    return result;
}


/* =========================================================
   CHAPITRE
   ========================================================= */

function findChapter(id) {

    return allChaps('maths')
        .concat(allChaps('geo'))
        .find(function(chapter) {
            return chapter.id === id;
        });
}


/* =========================================================
   PROGRESSION
   ========================================================= */

function pctSubject(subject) {

    const chapters = allChaps(subject);

    if (!chapters.length) {
        return 0;
    }

    const done = chapters.filter(function(chapter) {

        return Number(
            state.progress[chapter.id] || 0
        ) >= 100;

    }).length;

    return Math.round(
        done / chapters.length * 100
    );
}


/* =========================================================
   ACCUEIL
   ========================================================= */

function renderHome() {

    const homeStats =
        document.getElementById('homeStats');

    if (!homeStats) {
        return;
    }


    const mathsCount =
        allChaps('maths').length;

    const geoCount =
        allChaps('geo').length;

    const total =
        mathsCount + geoCount;


    homeStats.innerHTML = `

        <div class="stat">
            <b>📚 ${total}</b>
            <span>Chapitres</span>
        </div>

        <div class="stat">
            <b>📐 ${pctSubject('maths')}%</b>
            <span>Maîtrise Maths</span>
        </div>

        <div class="stat">
            <b>🌍 ${pctSubject('geo')}%</b>
            <span>Maîtrise Géo</span>
        </div>

        <div class="stat">
            <b>🎯 ${state.results.length}</b>
            <span>Quiz réalisés</span>
        </div>

    `;


    const subjectProgress =
        document.getElementById('subjectProgress');

    if (subjectProgress) {

        subjectProgress.innerHTML = `

            <div class="progress-row">

                <div class="progress-label">
                    <span>📐 Mathématiques</span>
                    <span>${pctSubject('maths')}%</span>
                </div>

                <div class="bar">
                    <i style="width:${pctSubject('maths')}%"></i>
                </div>

            </div>


            <div class="progress-row">

                <div class="progress-label">
                    <span>🌍 Géographie</span>
                    <span>${pctSubject('geo')}%</span>
                </div>

                <div class="bar">
                    <i style="width:${pctSubject('geo')}%"></i>
                </div>

            </div>

        `;
    }


    const priorities =
        document.getElementById('priorities');

    if (priorities) {

        const chapters =
            allChaps('maths')
                .concat(allChaps('geo'))
                .filter(function(chapter) {

                    return Number(
                        state.progress[chapter.id] || 0
                    ) < 100;

                })
                .slice(0, 6);


        if (!chapters.length) {

            priorities.innerHTML =
                `<div class="empty">
                    🎉 Tout est maîtrisé !
                </div>`;

        } else {

            priorities.innerHTML =
                chapters.map(function(chapter) {

                    return `

                        <div class="priority">

                            <span>
                                ${chapter.icone || '📘'}
                                ${chapter.titre}
                            </span>

                            <b>${chapter.annee}</b>

                        </div>

                    `;

                }).join('');
        }
    }
}


/* =========================================================
   RENDU MATIERE
   ========================================================= */

function renderSubject(subject) {

    if (!SUBJECTS[subject]) {
        console.error('Matière inconnue :', subject);
        return;
    }


    const data =
        SUBJECTS[subject].data();


    const totalElement =
        document.getElementById(
            subject === 'maths'
                ? 'mathsTotal'
                : 'geoTotal'
        );


    const yearsElement =
        document.getElementById(
            subject === 'maths'
                ? 'mathYears'
                : 'geoYears'
        );


    const contentElement =
        document.getElementById(
            subject === 'maths'
                ? 'mathContent'
                : 'geoContent'
        );


    if (!yearsElement || !contentElement) {

        console.error(
            'Elements HTML manquants pour',
            subject
        );

        return;
    }


    const allChapters =
        allChaps(subject);


    if (totalElement) {

        totalElement.textContent =
            allChapters.length +
            ' chapitres';

    }


    /* =====================================================
       ANNEES
       ===================================================== */

    const years = ['3e', '4e', '5e', '6e'];


    yearsElement.innerHTML = years.map(function(year) {

        const chapters =
            Array.isArray(data[year])
                ? data[year]
                : [];


        const done =
            chapters.filter(function(chapter) {

                return Number(
                    state.progress[chapter.id] || 0
                ) >= 100;

            }).length;


        const percentage =
            chapters.length
                ? Math.round(
                    done /
                    chapters.length *
                    100
                )
                : 0;


        return `

            <button
                type="button"
                class="year-card ${
                    selectedYear[subject] === year
                        ? 'active'
                        : ''
                }"
                onclick="
                    selectedYear['${subject}']='${year}';
                    renderSubject('${subject}');
                "
            >

                <b>${year} année</b>

                <small>
                    ${chapters.length}
                    chapitre${chapters.length > 1 ? 's' : ''}
                    · ${percentage}% maîtrisé
                </small>

            </button>

        `;

    }).join('');


    /* =====================================================
       CHAPITRES DE L'ANNEE
       ===================================================== */

    const chapters =
        Array.isArray(data[selectedYear[subject]])
            ? data[selectedYear[subject]]
            : [];


    if (!chapters.length) {

        contentElement.innerHTML = `

            <div class="empty">

                Aucun chapitre disponible
                pour ${selectedYear[subject]}.

            </div>

        `;

        return;
    }


    contentElement.innerHTML = `

        <div class="chapter-list">

            ${chapters.map(function(chapter) {

                const done =
                    Number(
                        state.progress[chapter.id] || 0
                    ) >= 100;


                return `

                    <article class="chapter">

                        <span
                            style="font-size:30px"
                        >
                            ${chapter.icone || '📘'}
                        </span>


                        <div class="chapter-main">

                            <h3>
                                ${chapter.titre}
                            </h3>

                            <p>
                                ${chapter.desc || ''}
                            </p>

                        </div>


                        <span
                            class="badge ${
                                done ? 'done' : ''
                            }"
                        >
                            ${
                                done
                                    ? '✓ Maîtrisé'
                                    : 'À revoir'
                            }
                        </span>


                        <button
                            type="button"
                            onclick="
                                openChapter('${chapter.id}')
                            "
                        >
                            Ouvrir
                        </button>

                    </article>

                `;

            }).join('')}

        </div>

    `;
}


/* =========================================================
   OUVRIR UN CHAPITRE
   ========================================================= */

function openChapter(id) {

    const chapter =
        findChapter(id);


    if (!chapter) {

        console.error(
            'Chapitre introuvable :',
            id
        );

        return;
    }


    const content =
        document.createElement('article');


    content.className = 'detail';


    const objectives =
        Array.isArray(chapter.objectifs)
            ? chapter.objectifs
            : [];


    const matieres =
        Array.isArray(chapter.matieres)
            ? chapter.matieres
            : [];


    content.innerHTML = `

        <div class="eyebrow">

            ${SUBJECTS[chapter.matiere].icon}

            ${SUBJECTS[chapter.matiere].label}

            · ${chapter.annee}

        </div>


        <h2>
            ${chapter.icone || ''}
            ${chapter.titre}
        </h2>


        <p>
            ${chapter.desc || ''}
        </p>


        ${
            matieres.length
                ? `

                    <h3>📚 À savoir</h3>

                    <ul>
                        ${matieres.map(function(item) {
                            return `<li>${item}</li>`;
                        }).join('')}
                    </ul>

                `
                : ''
        }


        <div class="course">

            ${chapter.cours || ''}

        </div>


        ${
            objectives.length
                ? `

                    <h3>🎯 Objectifs</h3>

                    <ul>
                        ${objectives.map(function(item) {
                            return `<li>${item}</li>`;
                        }).join('')}
                    </ul>

                `
                : ''
        }


        <div class="detail-actions">

            <button
                type="button"
                class="success"
                onclick="
                    markDone('${chapter.id}')
                "
            >
                ✓ Marquer maîtrisé
            </button>


            <button
                type="button"
                class="primary"
                onclick="
                    quizChapter('${chapter.id}')
                "
            >
                🎯 Faire le quiz
            </button>


            <button
                type="button"
                class="close"
                onclick="
                    this.closest('.detail').remove()
                "
            >
                Fermer
            </button>

        </div>

    `;


    const host =
        document.getElementById(
            chapter.matiere === 'maths'
                ? 'mathContent'
                : 'geoContent'
        );


    if (host) {

        host.prepend(content);

        content.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }
}


/* =========================================================
   MAITRISE
   ========================================================= */

function markDone(id) {

    const chapter =
        findChapter(id);


    if (!chapter) {
        return;
    }


    state.progress[id] = 100;

    save();

    renderHome();

    renderSubject(chapter.matiere);
}


/* =========================================================
   QUIZ : QUESTIONS
   ========================================================= */

function flattenQuestions(filter) {

    filter = filter || 'all';


    let questions = [];


    allChaps('maths')
        .concat(allChaps('geo'))
        .forEach(function(chapter) {

            if (!Array.isArray(chapter.exercices)) {
                return;
            }


            chapter.exercices.forEach(
                function(question, index) {

                    if (
                        !Array.isArray(question.options) ||
                        !question.options.length
                    ) {
                        return;
                    }


                    questions.push({

                        ...question,

                        id:
                            chapter.id +
                            '_' +
                            index,

                        chapter:
                            chapter.titre,

                        annee:
                            chapter.annee,

                        matiere:
                            chapter.matiere,

                        correct:
                            typeof question.correct === 'number'
                                ? question.correct
                                : 0

                    });

                }
            );

        });


    if (filter === 'mistakes') {

        return questions.filter(function(question) {

            return state.mistakes.includes(
                question.id
            );

        });

    }


    if (
        filter === 'maths' ||
        filter === 'geo'
    ) {

        return questions.filter(function(question) {

            return question.matiere === filter;

        });

    }


    return questions;
}


/* =========================================================
   QUIZ
   ========================================================= */

function startQuiz(mode) {

    let questions =
        flattenQuestions(
            mode === 'maths' || mode === 'geo'
                ? mode
                : 'all'
        );


    if (mode === 'mistakes') {
        questions = flattenQuestions('mistakes');
    }


    if (mode === 'truefalse') {

        questions = [

            {
                id: 'tf1',
                question:
                    'Deux triangles isométriques ont leurs côtés homologues de même longueur.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Triangles isométriques'
            },

            {
                id: 'tf2',
                question:
                    'Des triangles semblables ont toujours leurs côtés de même longueur.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Triangles semblables'
            },

            {
                id: 'tf3',
                question:
                    'Le théorème de Thalès permet de travailler avec des rapports de longueurs.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Théorème de Thalès'
            },

            {
                id: 'tf4',
                question:
                    '√(a²) = |a| pour tout réel a.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Racines carrées'
            },

            {
                id: 'tf5',
                question:
                    'Un zéro d’une fonction correspond à une intersection avec l’axe des abscisses.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Fonctions'
            }

        ];
    }


    if (mode === 'mixed') {
        questions = flattenQuestions('all');
    }


    if (!questions.length) {

        showView('games');

        const panel =
            document.getElementById('gamePanel');

        if (panel) {

            panel.innerHTML = `

                <div class="empty">

                    Aucune question disponible
                    pour le moment.

                </div>

            `;
        }

        return;
    }


    questions =
        shuffle(questions).slice(
            0,
            Math.min(10, questions.length)
        );


    quizState = {

        questions: questions,

        index: 0,

        score: 0

    };


    showView('games');

    renderQuiz();
}


/* =========================================================
   MELANGE
   ========================================================= */

function shuffle(array) {

    return [...array].sort(
        () => Math.random() - 0.5
    );
}


/* =========================================================
   QUIZ CHAPITRE
   ========================================================= */

function quizChapter(id) {

    const chapter =
        findChapter(id);


    if (!chapter) {
        return;
    }


    let questions =
        Array.isArray(chapter.exercices)
            ? chapter.exercices
            : [];


    questions =
        questions
            .filter(function(question) {

                return (
                    Array.isArray(question.options) &&
                    question.options.length
                );

            })
            .map(function(question, index) {

                return {

                    ...question,

                    id:
                        chapter.id +
                        '_' +
                        index,

                    chapter:
                        chapter.titre,

                    annee:
                        chapter.annee,

                    matiere:
                        chapter.matiere

                };

            });


    if (!questions.length) {

        alert(
            'Aucune question disponible pour ce chapitre.'
        );

        return;
    }


    quizState = {

        questions: shuffle(questions),

        index: 0,

        score: 0

    };


    showView('games');

    renderQuiz();
}


/* =========================================================
   RENDU QUIZ
   ========================================================= */

function renderQuiz() {

    const panel =
        document.getElementById('gamePanel');


    if (!panel || !quizState) {
        return;
    }


    if (
        quizState.index >=
        quizState.questions.length
    ) {

        const total =
            quizState.questions.length;


        state.results.push({

            date:
                new Date().toISOString(),

            score:
                quizState.score,

            total:
                total

        });


        save();


        panel.innerHTML = `

            <div class="quiz-result">

                <h2>🎉 Quiz terminé !</h2>

                <p>
                    Score :
                    <strong>
                        ${quizState.score}/${total}
                    </strong>
                </p>

                <button
                    type="button"
                    class="primary"
                    onclick="startQuiz('mixed')"
                >
                    🔄 Recommencer
                </button>

                <button
                    type="button"
                    onclick="showView('home')"
                >
                    Retour à l'accueil
                </button>

            </div>

        `;

        renderHome();

        return;
    }


    const question =
        quizState.questions[
            quizState.index
        ];


    panel.innerHTML = `

        <div class="quiz">

            <div class="quiz-header">

                <span>
                    Question
                    ${quizState.index + 1}
                    /
                    ${quizState.questions.length}
                </span>

                <span>
                    Score :
                    ${quizState.score}
                </span>

            </div>


            <div class="quiz-question">

                <span class="badge">
                    ${question.annee || ''}
                </span>

                <p>
                    ${question.question}
                </p>

            </div>


            <div class="quiz-options">

                ${question.options.map(
                    function(option, index) {

                        return `

                            <button
                                type="button"
                                onclick="
                                    answerQuiz(${index})
                                "
                            >
                                ${option}
                            </button>

                        `;

                    }
                ).join('')}

            </div>

        </div>

    `;
}


/* =========================================================
   REPONSE QUIZ
   ========================================================= */

function answerQuiz(index) {

    if (!quizState) {
        return;
    }


    const question =
        quizState.questions[
            quizState.index
        ];


    if (index === question.correct) {

        quizState.score++;

    } else {

        if (!state.mistakes.includes(question.id)) {

            state.mistakes.push(
                question.id
            );

        }

    }


    quizState.index++;

    save();

    renderQuiz();
}


/* =========================================================
   MENU JEUX
   ========================================================= */

function renderGameMenu() {

    const panel =
        document.getElementById('gamePanel');


    if (!panel) {
        return;
    }


    if (quizState) {
        return;
    }


    panel.innerHTML = `

        <div class="grid2">

            <div class="panel">

                <h2>🎯 Quiz mixte</h2>

                <p>
                    Questions Maths + Géographie.
                </p>

                <button
                    type="button"
                    class="primary"
                    onclick="startQuiz('mixed')"
                >
                    Commencer
                </button>

            </div>


            <div class="panel">

                <h2>✓ Vrai / Faux</h2>

                <p>
                    Test rapide de connaissances.
                </p>

                <button
                    type="button"
                    class="primary"
                    onclick="startQuiz('truefalse')"
                >
                    Commencer
                </button>

            </div>


            <div class="panel">

                <h2>📐 Quiz Maths</h2>

                <button
                    type="button"
                    onclick="startQuiz('maths')"
                >
                    Maths
                </button>

            </div>


            <div class="panel">

                <h2>🌍 Quiz Géo</h2>

                <button
                    type="button"
                    onclick="startQuiz('geo')"
                >
                    Géographie
                </button>

            </div>

        </div>

    `;
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

    memoMode = mode;


    document
        .querySelectorAll('.memo-tabs button')
        .forEach(function(btn) {

            btn.classList.remove('active');

        });


    if (button) {
        button.classList.add('active');
    }


    renderMemo();
}


/* =========================================================
   MEMO
   ========================================================= */

function renderMemo() {

    const box =
        document.getElementById('memoContent');


    if (!box) {
        return;
    }


    const search =
        document.getElementById('memoSearch');


    const year =
        document.getElementById('memoYear');


    const term =
        search
            ? search.value.toLowerCase().trim()
            : '';


    const selected =
        year
            ? year.value
            : 'all';


    /* =====================================================
       VOCABULAIRE
       ===================================================== */

    if (memoMode === 'vocab') {

        let vocabulary = [];


        if (
            typeof GEO_VOCAB !== 'undefined' &&
            Array.isArray(GEO_VOCAB)
        ) {

            vocabulary = GEO_VOCAB;

        }


        const filtered =
            vocabulary.filter(function(item) {

                const text = (

                    item.mot ||
                    item.terme ||
                    ''

                ) + ' ' + (

                    item.def ||
                    item.definition ||
                    ''

                ) + ' ' + (

                    item.theme ||
                    item.categorie ||
                    ''

                );


                const matchesSearch =
                    text
                        .toLowerCase()
                        .includes(term);


                const itemYear =
                    item.annee ||
                    item.niveau ||
                    '';


                const matchesYear =
                    selected === 'all' ||
                    itemYear === selected;


                return (
                    matchesSearch &&
                    matchesYear
                );

            });


        box.innerHTML =
            filtered.length

                ? filtered.map(function(item) {

                    return `

                        <article class="memo-card">

                            <div class="top">

                                <h3>
                                    ${item.mot || item.terme}
                                </h3>

                                <span class="badge">
                                    ${
                                        item.annee ||
                                        item.niveau ||
                                        ''
                                    }
                                </span>

                            </div>

                            <p>
                                ${
                                    item.def ||
                                    item.definition ||
                                    ''
                                }
                            </p>

                        </article>

                    `;

                }).join('')

                : `
                    <div class="empty">
                        Aucun mot trouvé.
                    </div>
                `;


        return;
    }


    /* =====================================================
       FORMULES
       ===================================================== */

    let formulas = [];


    if (
        typeof FORMULES_DATA !== 'undefined'
    ) {

        Object.values(
            FORMULES_DATA
        ).forEach(function(list) {

            if (Array.isArray(list)) {

                formulas.push(...list);

            }

        });

    }


    const filtered =
        formulas.filter(function(formula) {

            const text = (

                formula.titre ||
                ''

            ) + ' ' + (

                formula.definition ||
                ''

            ) + ' ' + (

                formula.exemple ||
                ''

            );


            const matchesSearch =
                text
                    .toLowerCase()
                    .includes(term);


            const matchesYear =
                selected === 'all' ||
                !formula.annee ||
                formula.annee === selected;


            return (
                matchesSearch &&
                matchesYear
            );

        });


    box.innerHTML =
        filtered.length

            ? filtered.map(function(formula) {

                return `

                    <article class="memo-card">

                        <h3>
                            ${formula.titre || 'Formule'}
                        </h3>

                        <div class="formula">
                            ${
                                formula.formule ||
                                formula.expression ||
                                ''
                            }
                        </div>

                        ${
                            formula.definition
                                ? `<p>${formula.definition}</p>`
                                : ''
                        }

                    </article>

                `;

            }).join('')

            : `
                <div class="empty">
                    Aucune formule trouvée.
                </div>
            `;
}


/* =========================================================
   EXAMENS
   ========================================================= */

function renderExamMenu() {

    const panel =
        document.getElementById('examPanel');


    if (!panel) {
        return;
    }


    if (
        typeof EXAMENS_CESS === 'undefined' ||
        !Array.isArray(EXAMENS_CESS)
    ) {

        panel.innerHTML = `

            <div class="empty">

                Aucun examen disponible.

            </div>

        `;

        return;
    }


    panel.innerHTML = `

        <div class="grid2">

            ${
                EXAMENS_CESS.map(function(exam, index) {

                    return `

                        <div class="panel">

                            <h2>
                                📝
                                ${
                                    exam.titre ||
                                    exam.nom ||
                                    'Examen'
                                }
                            </h2>

                            <p>
                                ${
                                    exam.desc ||
                                    exam.description ||
                                    ''
                                }
                            </p>

                            <button
                                type="button"
                                class="primary"
                                onclick="
                                    startExam(${index})
                                "
                            >
                                Commencer
                            </button>

                        </div>

                    `;

                }).join('')
            }

        </div>

    `;
}


/* =========================================================
   DEMARRER EXAMEN
   ========================================================= */

function startExam(index) {

    if (
        typeof EXAMENS_CESS === 'undefined' ||
        !EXAMENS_CESS[index]
    ) {
        return;
    }


    const exam =
        EXAMENS_CESS[index];


    const questions =
        Array.isArray(exam.questions)
            ? exam.questions
            : (
                Array.isArray(exam.exercices)
                    ? exam.exercices
                    : []
            );


    if (!questions.length) {

        alert(
            'Cet examen ne contient pas encore de questions.'
        );

        return;
    }


    examState = {

        questions: questions,

        index: 0,

        score: 0

    };


    showView('exam');

    renderExam();
}


/* =========================================================
   RENDU EXAMEN
   ========================================================= */

function renderExam() {

    const panel =
        document.getElementById('examPanel');


    if (!panel || !examState) {
        return;
    }


    if (
        examState.index >=
        examState.questions.length
    ) {

        panel.innerHTML = `

            <div class="quiz-result">

                <h2>🏁 Examen terminé</h2>

                <p>
                    Score :
                    <strong>
                        ${examState.score}/
                        ${examState.questions.length}
                    </strong>
                </p>

                <button
                    type="button"
                    class="primary"
                    onclick="
                        examState=null;
                        renderExamMenu();
                    "
                >
                    Retour aux examens
                </button>

            </div>

        `;

        return;
    }


    const question =
        examState.questions[
            examState.index
        ];


    const options =
        Array.isArray(question.options)
            ? question.options
            : [];


    panel.innerHTML = `

        <div class="quiz">

            <div class="quiz-header">

                <span>
                    Question
                    ${examState.index + 1}
                    /
                    ${examState.questions.length}
                </span>

                <span>
                    Score :
                    ${examState.score}
                </span>

            </div>


            <div class="quiz-question">

                <p>
                    ${
                        question.question ||
                        question.enonce ||
                        ''
                    }
                </p>

            </div>


            <div class="quiz-options">

                ${
                    options.map(
                        function(option, index) {

                            return `

                                <button
                                    type="button"
                                    onclick="
                                        answerExam(${index})
                                    "
                                >
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

    if (!examState) {
        return;
    }


    const question =
        examState.questions[
            examState.index
        ];


    if (
        typeof question.correct === 'number' &&
        index === question.correct
    ) {

        examState.score++;

    }


    examState.index++;

    renderExam();
}


/* =========================================================
   PROGRESSION
   ========================================================= */

function renderProgress() {

    const container =
        document.getElementById(
            'progressContent'
        );


    if (!container) {
        return;
    }


    const subjects =
        ['maths', 'geo'];


    container.innerHTML = `

        <div class="grid2">

            ${
                subjects.map(function(subject) {

                    const global =
                        pctSubject(subject);


                    const years =
                        ['3e', '4e', '5e', '6e'];


                    return `

                        <div class="panel">

                            <h2>
                                ${
                                    SUBJECTS[subject].icon
                                }
                                ${
                                    SUBJECTS[subject].label
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
                                        "
                                    ></i>

                                </div>

                            </div>


                            ${
                                years.map(function(year) {

                                    const chapters =
                                        Array.isArray(
                                            SUBJECTS[subject]
                                                .data()[year]
                                        )
                                            ? SUBJECTS[subject]
                                                .data()[year]
                                            : [];


                                    const done =
                                        chapters.filter(
                                            function(chapter) {

                                                return Number(
                                                    state.progress[
                                                        chapter.id
                                                    ] || 0
                                                ) >= 100;

                                            }
                                        ).length;


                                    const percentage =
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
                                                    "
                                                ></i>

                                            </div>

                                        </div>

                                    `;

                                }).join('')
                            }

                        </div>

                    `;

                }).join('')
            }

        </div>


        <div
            class="panel"
            style="margin-top:20px"
        >

            <h2>🏆 Historique</h2>

            <p>

                Quiz réalisés :
                <b>${state.results.length}</b>

                ·

                Erreurs :
                <b>${state.mistakes.length}</b>

            </p>

        </div>

    `;
}


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    function() {

        /* thème */

        if (
            state.theme === 'dark'
        ) {

            document.body.classList.add('dark');

        }


        /* affichage initial */

        renderHome();

        renderSubject('maths');

        renderSubject('geo');

        renderMemo();

        renderExamMenu();


        /* accueil */

        showView('home');

    }
);
```
