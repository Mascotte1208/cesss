/* =========================================================
   CARNET CESS
   APPLICATION PRINCIPALE
   ========================================================= */

const DBKEY = 'carnetCESSv3';


/* =========================================================
   ETAT
   ========================================================= */

let state;

try {

    state =
        JSON.parse(
            localStorage.getItem(DBKEY) || 'null'
        ) || {

            progress: {},
            results: [],
            mistakes: [],
            streak: 0,
            theme: 'light'

        };

} catch (error) {

    console.warn(
        'Impossible de lire LocalStorage.',
        error
    );

    state = {

        progress: {},
        results: [],
        mistakes: [],
        streak: 0,
        theme: 'light'

    };

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

        data: function () {

            return (
                typeof CHAPITRES !== 'undefined'
                    ? CHAPITRES
                    : {}
            );

        }

    },

    geo: {

        label: 'Géographie',

        icon: '🌍',

        data: function () {

            return (
                typeof GEO_CHAPITRES !== 'undefined'
                    ? GEO_CHAPITRES
                    : {}
            );

        }

    }

};


/* =========================================================
   SAUVEGARDE
   ========================================================= */

function save() {

    try {

        localStorage.setItem(
            DBKEY,
            JSON.stringify(state)
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

function toggleTheme() {

    document.body.classList.toggle('dark');

    state.theme =
        document.body.classList.contains('dark')
            ? 'dark'
            : 'light';

    save();

}


/* Restaurer le thème */

if (state.theme === 'dark') {

    document.body.classList.add('dark');

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(id) {

    const target =
        document.getElementById(id);

    if (!target) {

        console.warn(
            'Vue introuvable :',
            id
        );

        return;

    }


    document
        .querySelectorAll('.view')
        .forEach(function (view) {

            view.classList.remove('active');

        });


    target.classList.add('active');


    window.scrollTo({

        top: 0,

        behavior: 'smooth'

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


    if (id === 'progress') {

        renderProgress();

    }

}


/* =========================================================
   CHAPITRES
   ========================================================= */

function allChaps(subject) {

    const data =
        SUBJECTS[subject].data();


    if (!data || typeof data !== 'object') {

        return [];

    }


    return Object
        .entries(data)
        .flatMap(function (entry) {

            const annee = entry[0];

            const arr = entry[1];

            if (!Array.isArray(arr)) {

                return [];

            }


            return arr.map(function (chapter) {

                return {

                    ...chapter,

                    annee: annee,

                    matiere: subject

                };

            });

        });

}


/* =========================================================
   PROGRESSION
   ========================================================= */

function pctSubject(subject) {

    const chapters =
        allChaps(subject);


    if (!chapters.length) {

        return 0;

    }


    const done =
        chapters.filter(function (chapter) {

            return (
                Number(
                    state.progress[chapter.id] || 0
                ) >= 100
            );

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
        document.getElementById(
            'homeStats'
        );


    if (!homeStats) {

        return;

    }


    const mathsCount =
        allChaps('maths').length;


    const geoCount =
        allChaps('geo').length;


    const total =
        mathsCount + geoCount;


    homeStats.innerHTML = [

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
            state.results.length,
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


    const subjectProgress =
        document.getElementById(
            'subjectProgress'
        );


    if (subjectProgress) {

        subjectProgress.innerHTML = [

            'maths',

            'geo'

        ].map(function (subject) {

            const percentage =
                pctSubject(subject);


            return `

                <div class="progress-row">

                    <div class="progress-label">

                        <span>
                            ${SUBJECTS[subject].icon}
                            ${SUBJECTS[subject].label}
                        </span>

                        <span>
                            ${percentage}%
                        </span>

                    </div>

                    <div class="bar">

                        <i
                            style="width:${percentage}%">
                        </i>

                    </div>

                </div>

            `;

        }).join('');

    }


    const priorities =
        document.getElementById(
            'priorities'
        );


    if (priorities) {

        const chapters =
            allChaps('maths')
                .concat(
                    allChaps('geo')
                )
                .filter(function (chapter) {

                    return (
                        Number(
                            state.progress[chapter.id] || 0
                        ) < 100
                    );

                })
                .slice(0, 5);


        priorities.innerHTML =

            chapters.length

                ? chapters.map(function (chapter) {

                    return `

                        <div class="priority">

                            <span>
                                ${chapter.icone || '📘'}
                                ${chapter.titre}
                            </span>

                            <b>
                                ${chapter.annee}
                            </b>

                        </div>

                    `;

                }).join('')

                : `

                    <div class="empty">
                        🎉 Tout est marqué comme maîtrisé !
                    </div>

                `;

    }

}


/* =========================================================
   AFFICHAGE D'UNE MATIERE
   ========================================================= */

function renderSubject(subject) {

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


    if (
        !totalElement ||
        !yearsElement ||
        !contentElement
    ) {

        return;

    }


    totalElement.textContent =
        allChaps(subject).length +
        ' chapitres';


    const years = [
        '3e',
        '4e',
        '5e',
        '6e'
    ];


    yearsElement.innerHTML =
        years.map(function (year) {

            const chapters =
                Array.isArray(data[year])
                    ? data[year]
                    : [];


            const done =
                chapters.filter(function (chapter) {

                    return (
                        Number(
                            state.progress[
                                chapter.id
                            ] || 0
                        ) >= 100
                    );

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

                    <b>
                        ${year} année
                    </b>

                    <small>
                        ${chapters.length} chapitres
                        · ${percentage}% maîtrisé
                    </small>

                </button>

            `;

        }).join('');


    const chapters =
        Array.isArray(
            data[selectedYear[subject]]
        )
            ? data[selectedYear[subject]]
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

                const done =
                    Number(
                        state.progress[
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
   RECHERCHE CHAPITRE
   ========================================================= */

function findChapter(id) {

    return allChaps('maths')
        .concat(
            allChaps('geo')
        )
        .find(function (chapter) {

            return chapter.id === id;

        });

}


/* =========================================================
   OUVRIR CHAPITRE
   ========================================================= */

function openChapter(id) {

    const chapter =
        findChapter(id);


    if (!chapter) {

        console.warn(
            'Chapitre introuvable :',
            id
        );

        return;

    }


    const content =
        document.createElement('div');


    content.className =
        'detail';


    const objectives =
        Array.isArray(
            chapter.objectifs
        )
            ? chapter.objectifs
            : [];


    const subjects =
        Array.isArray(
            chapter.matieres
        )
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
            subjects.length
                ? `

                    <h3>
                        📚 À savoir
                    </h3>

                    <ul>

                        ${subjects.map(function (item) {

                            return `
                                <li>
                                    ${item}
                                </li>
                            `;

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

                        return `
                            <li>
                                ${item}
                            </li>
                        `;

                    }).join('')

                    : `
                        <li>
                            Aucun objectif renseigné.
                        </li>
                    `
            }

        </ul>


        <div class="detail-actions">

            <button
                class="success"
                onclick="
                    markDone('${chapter.id}')
                "
            >
                ✓ Marquer maîtrisé
            </button>


            <button
                class="primary"
                onclick="
                    quizChapter('${chapter.id}')
                "
            >
                🎯 Faire le quiz
            </button>


            <button
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


    if (!host) {

        return;

    }


    host.prepend(content);


    content.scrollIntoView({

        behavior: 'smooth',

        block: 'start'

    });

}


/* =========================================================
   MARQUER COMME MAITRISE
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


    renderSubject(
        chapter.matiere
    );

}


/* =========================================================
   QUESTIONS
   ========================================================= */

function flattenQuestions(
    filter = 'all'
) {

    const chapters =
        allChaps('maths')
            .concat(
                allChaps('geo')
            );


    let questions = [];


    chapters.forEach(function (chapter) {

        if (
            !Array.isArray(
                chapter.exercices
            )
        ) {

            return;

        }


        chapter.exercices.forEach(
            function (question, index) {

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
                        chapter.matiere

                });

            }
        );

    });


    if (filter === 'mistakes') {

        return questions.filter(
            function (question) {

                return state.mistakes.includes(
                    question.id
                );

            }
        );

    }


    if (
        filter === 'maths' ||
        filter === 'geo'
    ) {

        return questions.filter(
            function (question) {

                return (
                    question.matiere === filter
                );

            }
        );

    }


    return questions;

}


/* =========================================================
   DEMARRER QUIZ
   ========================================================= */

function startQuiz(mode) {

    let questions;


    if (mode === 'truefalse') {

        questions =
            flattenQuestions('all')
                .map(function (question) {

                    const correctAnswer =
                        question.options[
                            question.correct
                        ];


                    const isTrue =
                        Math.random() > 0.5;


                    return {

                        ...question,

                        question:
                            isTrue

                                ? question.question

                                : 'Vrai ou faux : ' +
                                  question.question,

                        options: [
                            'Vrai',
                            'Faux'
                        ],

                        correct:
                            isTrue
                                ? 0
                                : 1

                    };

                });

    } else {

        questions =
            flattenQuestions(
                mode === 'mixed'
                    ? 'all'
                    : mode
            );

    }


    if (
        mode === 'mistakes' &&
        !questions.length
    ) {

        const panel =
            document.getElementById(
                'gamePanel'
            );


        if (panel) {

            panel.innerHTML = `

                <div class="empty">

                    Aucune erreur enregistrée
                    pour le moment.

                    <br><br>

                    Fais d'abord un quiz !

                </div>

            `;

        }

        return;

    }


    if (!questions.length) {

        const panel =
            document.getElementById(
                'gamePanel'
            );


        if (panel) {

            panel.innerHTML = `

                <div class="empty">

                    Aucune question disponible
                    pour ce mode.

                </div>

            `;

        }

        return;

    }


    questions =
        shuffle(questions)
            .slice(0, 10);


    quizState = {

        qs: questions,

        index: 0,

        score: 0,

        mode: mode

    };


    showView('games');


    renderQuiz();

}


/* =========================================================
   QUIZ CHAPITRE
   ========================================================= */

function quizChapter(id) {

    let questions =
        flattenQuestions('all')
            .filter(function (question) {

                return question.id.startsWith(
                    id + '_'
                );

            });


    if (!questions.length) {

        alert(
            'Aucune question disponible pour ce chapitre.'
        );

        return;

    }


    quizState = {

        qs:
            shuffle(questions),

        index: 0,

        score: 0,

        mode: 'chapter'

    };


    showView('games');


    renderQuiz();

}


/* =========================================================
   AFFICHAGE QUIZ
   ========================================================= */

function renderQuiz() {

    const panel =
        document.getElementById(
            'gamePanel'
        );


    if (!panel) {

        return;

    }


    if (
        !quizState ||
        quizState.index >=
            quizState.qs.length
    ) {

        const score =
            quizState
                ? quizState.score
                : 0;


        const total =
            quizState
                ? quizState.qs.length
                : 0;


        const percentage =
            total
                ? Math.round(
                    score / total * 100
                )
                : 0;


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
                    class="primary"
                    onclick="
                        startQuiz('${
                            quizState &&
                            quizState.mode === 'chapter'
                                ? 'mixed'
                                : (
                                    quizState
                                        ? quizState.mode
                                        : 'mixed'
                                )
                        }')
                    "
                >
                    Rejouer
                </button>

            </div>

        `;

        return;

    }


    const question =
        quizState.qs[
            quizState.index
        ];


    const options =
        Array.isArray(
            question.options
        )
            ? question.options
            : [];


    panel.innerHTML = `

        <div class="quiz-meta">

            <span>
                Question
                ${quizState.index + 1}
                /
                ${quizState.qs.length}
            </span>

            <span>

                ${
                    question.matiere === 'maths'
                        ? '📐 Maths'
                        : '🌍 Géo'
                }

                · ${question.annee}

            </span>

        </div>


        <div class="question">

            ${question.question}

        </div>


        <div class="options">

            ${
                options.map(function (option, index) {

                    return `

                        <button
                            onclick="
                                answerQuiz(${index})
                            "
                        >
                            ${option}
                        </button>

                    `;

                }).join('')
            }

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
        quizState.qs[
            quizState.index
        ];


    if (index === question.correct) {

        quizState.score++;

    } else {

        state.mistakes.push(
            question.id
        );


        state.mistakes =
            [...new Set(
                state.mistakes
            )];

    }


    quizState.index++;


    state.results.push({

        date: Date.now(),

        score: quizState.score,

        total: quizState.index,

        mode: quizState.mode

    });


    save();


    renderQuiz();

}


/* =========================================================
   CAPITALS
   ========================================================= */

function startCapitals() {

    if (
        typeof CAPITALES === 'undefined' ||
        !Array.isArray(CAPITALES) ||
        !CAPITALES.length
    ) {

        const panel =
            document.getElementById(
                'gamePanel'
            );


        if (panel) {

            panel.innerHTML = `

                <div class="empty">

                    Le jeu des capitales
                    n'est pas disponible.

                </div>

            `;

        }

        return;

    }


    const questions =
        shuffle(CAPITALES)
            .slice(0, 10)
            .map(function (capital, index) {

                const others =
                    shuffle(
                        CAPITALES.filter(
                            function (item) {

                                return (
                                    item.capitale !==
                                    capital.capitale
                                );

                            }
                        )
                    )
                    .slice(0, 3)
                    .map(function (item) {

                        return item.capitale;

                    });


                const options =
                    shuffle([
                        capital.capitale,
                        ...others
                    ]);


                return {

                    id:
                        'capital_' +
                        index,

                    question:
                        'Quelle est la capitale de ' +
                        capital.pays +
                        ' ?',

                    options:
                        options,

                    correct:
                        options.indexOf(
                            capital.capitale
                        ),

                    matiere:
                        'geo',

                    annee:
                        '—'

                };

            });


    quizState = {

        qs: questions,

        index: 0,

        score: 0,

        mode: 'capitales'

    };


    showView('games');


    renderQuiz();

}


/* =========================================================
   REVISION RAPIDE
   ========================================================= */

function quickRevision() {

    showView('games');

    startQuiz('mixed');

}


/* =========================================================
   MEMO
   ========================================================= */

function memoTab(mode, button) {

    memoMode = mode;


    document
        .querySelectorAll(
            '.memo-tabs button'
        )
        .forEach(function (item) {

            item.classList.remove(
                'active'
            );

        });


    if (button) {

        button.classList.add(
            'active'
        );

    }


    renderMemo();

}


/* =========================================================
   RENDU MEMO
   ========================================================= */

function renderMemo() {

    const box =
        document.getElementById(
            'memoContent'
        );


    if (!box) {

        return;

    }


    const searchElement =
        document.getElementById(
            'memoSearch'
        );


    const yearElement =
        document.getElementById(
            'memoYear'
        );


    const term =
        (
            searchElement
                ? searchElement.value
                : ''
        )
        .toLowerCase()
        .trim();


    const year =
        yearElement
            ? yearElement.value
            : 'all';


    /* =====================================================
       VOCABULAIRE
       ===================================================== */

    if (memoMode === 'vocab') {

        const vocabulary =
            typeof GEO_VOCAB !== 'undefined' &&
            Array.isArray(GEO_VOCAB)

                ? GEO_VOCAB

                : [];


        const filtered =
            vocabulary.filter(
                function (item) {

                    const text = `

                        ${item.mot || ''}
                        ${item.def || ''}
                        ${item.theme || ''}

                    `.toLowerCase();


                    return (

                        (
                            year === 'all' ||
                            item.annee === year
                        )

                        &&

                        text.includes(term)

                    );

                }
            );


        box.innerHTML =

            filtered.length

                ? filtered.map(function (item) {

                    return `

                        <article class="memo-card">

                            <div class="top">

                                <h3>
                                    ${item.mot}
                                </h3>

                                <span class="badge">

                                    ${item.annee}

                                    ·

                                    ${item.theme}

                                </span>

                            </div>

                            <p>
                                ${item.def}
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

    const formulasData =
        typeof FORMULES_DATA !== 'undefined'
            ? FORMULES_DATA
            : {};


    let formulas = [];


    Object
        .values(formulasData)
        .forEach(function (list) {

            if (Array.isArray(list)) {

                formulas.push(
                    ...list
                );

            }

        });


    formulas =
        formulas.filter(
            function (formula) {

                const text = `

                    ${formula.titre || ''}
                    ${formula.definition || ''}
                    ${formula.exemple || ''}
                    ${formula.categorie || ''}

                `.toLowerCase();


                return text.includes(term);

            }
        );


    box.innerHTML =

        formulas.length

            ? formulas.map(function (formula) {

                return `

                    <article class="memo-card">

                        <div class="top">

                            <h3>

                                ${formula.icone || '📐'}

                                ${formula.titre}

                            </h3>

                            <span class="badge">

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


                        <div class="formula">

                            ${
                                formula.exemple ||
                                ''
                            }

                        </div>

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
   EXAMEN
   ========================================================= */

function startExam(subject) {

    const questions =
        flattenQuestions(subject);


    if (!questions.length) {

        const panel =
            document.getElementById(
                'examPanel'
            );


        if (panel) {

            panel.innerHTML = `

                <div class="empty">

                    Aucune question disponible
                    pour cet examen.

                </div>

            `;

        }

        return;

    }


    examState = {

        qs:
            shuffle(questions)
                .slice(0, 15),

        index: 0,

        score: 0,

        subject: subject,

        start: Date.now()

    };


    showView('exam');


    renderExam();

}


/* =========================================================
   AFFICHAGE EXAMEN
   ========================================================= */

function renderExam() {

    const panel =
        document.getElementById(
            'examPanel'
        );


    if (!panel || !examState) {

        return;

    }


    if (
        examState.index >=
        examState.qs.length
    ) {

        const percentage =
            examState.qs.length

                ? Math.round(
                    examState.score /
                    examState.qs.length *
                    100
                )

                : 0;


        panel.innerHTML = `

            <div class="result">

                <b>
                    ${percentage}%
                </b>

                <p>

                    ${examState.score}
                    /
                    ${examState.qs.length}
                    réponses correctes.

                </p>


                <button
                    class="primary"
                    onclick="
                        startExam('${examState.subject}')
                    "
                >
                    Recommencer
                </button>

            </div>

        `;

        return;

    }


    const question =
        examState.qs[
            examState.index
        ];


    panel.innerHTML = `

        <div class="quiz-meta">

            <span>

                Examen

                ${
                    examState.subject === 'maths'
                        ? 'Maths'
                        : 'Géographie'
                }

            </span>

            <span>

                Question

                ${examState.index + 1}

                /

                ${examState.qs.length}

            </span>

        </div>


        <div class="question">

            ${question.question}

        </div>


        <div class="options">

            ${
                question.options
                    .map(function (option, index) {

                        return `

                            <button
                                onclick="
                                    answerExam(${index})
                                "
                            >
                                ${option}
                            </button>

                        `;

                    }).join('')
            }

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
        examState.qs[
            examState.index
        ];


    if (index === question.correct) {

        examState.score++;

    } else {

        state.mistakes.push(
            question.id
        );


        state.mistakes =
            [...new Set(
                state.mistakes
            )];

    }


    examState.index++;


    save();


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


    const subjects = [
        'maths',
        'geo'
    ];


    const rows =
        subjects.map(function (subject) {

            const global =
                pctSubject(subject);


            const years = [
                '3e',
                '4e',
                '5e',
                '6e'
            ];


            const yearRows =
                years.map(function (year) {

                    const chapters =
                        Array.isArray(
                            SUBJECTS[
                                subject
                            ].data()[year]
                        )

                            ? SUBJECTS[
                                subject
                            ].data()[year]

                            : [];


                    const done =
                        chapters.filter(
                            function (chapter) {

                                return (
                                    Number(
                                        state.progress[
                                            chapter.id
                                        ] || 0
                                    ) >= 100
                                );

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

                }).join('');


            return `

                <div class="panel">

                    <h2>

                        ${SUBJECTS[subject].icon}

                        ${SUBJECTS[subject].label}

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
            style="margin-top:20px"
        >

            <h2>
                🏆 Historique
            </h2>

            <p>

                Quiz réalisés :

                <b>
                    ${state.results.length}
                </b>

                ·

                Erreurs enregistrées :

                <b>
                    ${state.mistakes.length}
                </b>

            </p>

        </div>

    `;

}


/* =========================================================
   MELANGE
   ========================================================= */

function shuffle(array) {

    return [...array]
        .sort(
            function () {

                return Math.random() - 0.5;

            }
        );

}


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    function () {

        renderHome();

        renderSubject('maths');

        renderSubject('geo');

        renderMemo();

    }
);
