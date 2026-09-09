/* =========================================================
   CARNET CESS
   APP.JS — VERSION COMPATIBLE AVEC LE NOUVEL INDEX.HTML
   ========================================================= */

/* =========================================================
   ETAT
   ========================================================= */

const DBKEY = 'carnetCESSv4';

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
            ...state,
            ...parsed,
            progress: parsed.progress || {},
            results: parsed.results || [],
            mistakes: parsed.mistakes || [],
            streak: parsed.streak || 0
        };
    }
} catch (error) {
    console.warn('Impossible de charger les données sauvegardées.', error);
}

let selectedYear = {
    maths: '3e',
    geo: '3e'
};

let memoMode = 'formules';

let quizState = null;

let examState = null;


/* =========================================================
   MATIERES
   ========================================================= */

const SUBJECTS = {

    maths: {
        label: 'Mathématiques',
        icon: '📐',

        data: function () {
            return typeof CHAPITRES !== 'undefined'
                ? CHAPITRES
                : {};
        }
    },

    geo: {
        label: 'Géographie',
        icon: '🌍',

        data: function () {
            return typeof GEO_CHAPITRES !== 'undefined'
                ? GEO_CHAPITRES
                : {};
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
    }

    catch (error) {
        console.warn(
            'Impossible de sauvegarder les données.',
            error
        );
    }
}


/* =========================================================
   NAVIGATION PRINCIPALE
   ========================================================= */

function showView(id) {

    const target = document.getElementById(id);

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


    switch (id) {

        case 'home':
            renderHome();
            break;

        case 'maths':
            renderSubject('maths');
            break;

        case 'geo':
            renderSubject('geo');
            break;

        case 'memo':
            renderMemo();
            break;

        case 'games':

            if (!quizState) {

                const panel =
                    document.getElementById('gamePanel');

                if (panel) {

                    panel.innerHTML = `
                        <div class="empty">
                            Choisis un jeu pour commencer.
                        </div>
                    `;

                }

            }

            break;

        case 'exam':
            break;

        case 'progress':
            renderProgress();
            break;

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
   CHAPITRES
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

    Object.keys(data).forEach(function (annee) {

        const chapters = data[annee];

        if (!Array.isArray(chapters)) {
            return;
        }

        chapters.forEach(function (chapter) {

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
   TROUVER UN CHAPITRE
   ========================================================= */

function findChapter(id) {

    return allChaps('maths')
        .concat(allChaps('geo'))
        .find(function (chapter) {

            return chapter.id === id;

        });

}


/* =========================================================
   MELANGE
   ========================================================= */

function shuffle(array) {

    return [...array].sort(function () {

        return Math.random() - 0.5;

    });

}


/* =========================================================
   POURCENTAGE
   ========================================================= */

function pctSubject(subject) {

    const chapters = allChaps(subject);

    if (!chapters.length) {
        return 0;
    }

    const done = chapters.filter(function (chapter) {

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

                <b>
                    ${item[0]}
                    ${item[1]}
                </b>

                <span>
                    ${item[2]}
                </span>

            </div>
        `;

    }).join('');


    const subjectProgress =
        document.getElementById(
            'subjectProgress'
        );


    if (subjectProgress) {

        subjectProgress.innerHTML =
            ['maths', 'geo']
                .map(function (subject) {

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

                })
                .join('');

    }


    const priorities =
        document.getElementById(
            'priorities'
        );


    if (priorities) {

        const chapters =
            allChaps('maths')
                .concat(allChaps('geo'))
                .filter(function (chapter) {

                    return Number(
                        state.progress[chapter.id] || 0
                    ) < 100;

                })
                .slice(0, 5);


        if (!chapters.length) {

            priorities.innerHTML = `
                <div class="empty">
                    🎉 Tous les chapitres sont maîtrisés !
                </div>
            `;

        }

        else {

            priorities.innerHTML =
                chapters.map(function (chapter) {

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

                }).join('');

        }

    }

}


/* =========================================================
   AFFICHAGE MATIERE
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


    const chapters =
        allChaps(subject);


    totalElement.textContent =
        chapters.length +
        ' chapitres';


    const years =
        ['3e', '4e', '5e', '6e'];


    yearsElement.innerHTML =
        years.map(function (year) {

            const yearChapters =
                Array.isArray(data[year])
                    ? data[year]
                    : [];


            const done =
                yearChapters.filter(
                    function (chapter) {

                        return Number(
                            state.progress[
                                chapter.id
                            ] || 0
                        ) >= 100;

                    }
                ).length;


            const percentage =
                yearChapters.length
                    ? Math.round(
                        done /
                        yearChapters.length *
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

                    <b>
                        ${year} année
                    </b>

                    <small>
                        ${yearChapters.length}
                        chapitres
                        ·
                        ${percentage}%
                        maîtrisé
                    </small>

                </button>
            `;

        }).join('');


    const selectedChapters =
        Array.isArray(
            data[selectedYear[subject]]
        )
            ? data[selectedYear[subject]]
            : [];


    if (!selectedChapters.length) {

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

            ${selectedChapters
                .map(function (chapter) {

                    const done =
                        Number(
                            state.progress[
                                chapter.id
                            ] || 0
                        ) >= 100;


                    return `

                        <article class="chapter">

                            <span
                                style="
                                    font-size:30px
                                "
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
                                class="
                                    badge
                                    ${done ? 'done' : ''}
                                "
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

        console.warn(
            'Chapitre introuvable :',
            id
        );

        return;

    }


    const host =
        document.getElementById(
            chapter.matiere === 'maths'
                ? 'mathContent'
                : 'geoContent'
        );


    if (!host) {
        return;
    }


    const oldDetail =
        host.querySelector(
            '.chapter-detail'
        );


    if (oldDetail) {
        oldDetail.remove();
    }


    const detail =
        document.createElement('article');


    detail.className =
        'chapter-detail panel';


    const objectives =
        Array.isArray(chapter.objectifs)
            ? chapter.objectifs
            : [];


    const matieres =
        Array.isArray(chapter.matieres)
            ? chapter.matieres
            : [];


    const done =
        Number(
            state.progress[chapter.id] || 0
        ) >= 100;


    detail.innerHTML = `

        <div class="section-head">

            <div>

                <span class="eyebrow">
                    ${SUBJECTS[chapter.matiere].icon}
                    ${SUBJECTS[chapter.matiere].label}
                    · ${chapter.annee}
                </span>

                <h2>
                    ${chapter.icone || '📘'}
                    ${chapter.titre}
                </h2>

                <p>
                    ${chapter.desc || ''}
                </p>

            </div>

        </div>


        ${
            matieres.length
                ? `
                    <div class="chapter-info">

                        <h3>
                            📚 À retenir
                        </h3>

                        <ul>
                            ${matieres.map(
                                function (item) {
                                    return `
                                        <li>
                                            ${item}
                                        </li>
                                    `;
                                }
                            ).join('')}
                        </ul>

                    </div>
                `
                : ''
        }


        <div class="course">

            ${chapter.cours || ''}

        </div>


        <div class="chapter-info">

            <h3>
                🎯 Objectifs
            </h3>

            <ul>

                ${
                    objectives.length
                        ? objectives.map(
                            function (item) {

                                return `
                                    <li>
                                        ${item}
                                    </li>
                                `;

                            }
                        ).join('')
                        : `
                            <li>
                                Aucun objectif renseigné.
                            </li>
                        `
                }

            </ul>

        </div>


        <div class="detail-actions">

            <button
                type="button"
                class="success"
                onclick="
                    markDone('${chapter.id}')
                "
            >
                ${
                    done
                        ? '✓ Déjà maîtrisé'
                        : '✓ Marquer maîtrisé'
                }
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
                    this.closest('.chapter-detail').remove()
                "
            >
                Fermer
            </button>

        </div>

    `;


    host.prepend(detail);


    detail.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

}


/* =========================================================
   MARQUER UN CHAPITRE
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


    setTimeout(function () {

        const host =
            document.getElementById(
                chapter.matiere === 'maths'
                    ? 'mathContent'
                    : 'geoContent'
            );


        if (host) {

            const detail =
                document.createElement(
                    'div'
                );

            detail.className =
                'empty';

            detail.innerHTML = `
                ✅
                <strong>
                    ${chapter.titre}
                </strong>
                est maintenant marqué
                comme maîtrisé.
            `;

            host.prepend(detail);

        }

    }, 100);

}


/* =========================================================
   QUESTIONS
   ========================================================= */

function flattenQuestions(filter) {

    filter =
        filter || 'all';


    const chapters =
        allChaps('maths')
            .concat(allChaps('geo'));


    let questions = [];


    chapters.forEach(function (chapter) {

        if (!Array.isArray(
            chapter.exercices
        )) {
            return;
        }


        chapter.exercices.forEach(
            function (question, index) {

                if (
                    !Array.isArray(
                        question.options
                    ) ||
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


    if (
        filter === 'maths' ||
        filter === 'geo'
    ) {

        return questions.filter(
            function (question) {

                return question.matiere === filter;

            }
        );

    }


    if (filter === 'mistakes') {

        return questions.filter(
            function (question) {

                return state.mistakes.includes(
                    question.id
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

    let questions = [];


    if (mode === 'truefalse') {

        questions = buildTrueFalseQuestions();

    }

    else if (mode === 'mistakes') {

        questions =
            flattenQuestions(
                'mistakes'
            );


        if (!questions.length) {

            const panel =
                document.getElementById(
                    'gamePanel'
                );


            if (panel) {

                panel.innerHTML = `
                    <div class="empty">
                        🧠
                        <br><br>
                        Aucune erreur enregistrée
                        pour le moment.
                        <br><br>
                        Fais d'abord un quiz !
                    </div>
                `;

            }

            showView('games');

            return;

        }

    }

    else {

        const filter =
            mode === 'mixed'
                ? 'all'
                : mode;


        questions =
            flattenQuestions(
                filter
            );

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

        showView('games');

        return;

    }


    quizState = {

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
   VRAI / FAUX
   ========================================================= */

function buildTrueFalseQuestions() {

    const questions = [];


    allChaps('maths')
        .concat(
            allChaps('geo')
        )
        .forEach(function (chapter) {

            if (
                !Array.isArray(
                    chapter.exercices
                )
            ) {
                return;
            }


            chapter.exercices
                .forEach(
                    function (exercise, index) {

                        if (
                            !exercise.question
                        ) {
                            return;
                        }


                        const statement =
                            exercise.question;


                        const answer =
                            index % 2 === 0;


                        questions.push({

                            id:
                                'tf_' +
                                chapter.id +
                                '_' +
                                index,

                            question:
                                statement,

                            options:
                                [
                                    'Vrai',
                                    'Faux'
                                ],

                            correct:
                                answer
                                    ? 0
                                    : 1,

                            matiere:
                                chapter.matiere,

                            annee:
                                chapter.annee,

                            chapter:
                                chapter.titre

                        });

                    }
                );

        });


    return questions;

}


/* =========================================================
   QUIZ D'UN CHAPITRE
   ========================================================= */

function quizChapter(id) {

    const questions =
        flattenQuestions(
            'all'
        ).filter(function (question) {

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

        if (!quizState) {

            panel.innerHTML = `
                <div class="empty">
                    Choisis un jeu pour commencer.
                </div>
            `;

            return;

        }


        const score =
            quizState.score;


        const total =
            quizState.qs.length;


        const percentage =
            total
                ? Math.round(
                    score /
                    total *
                    100
                )
                : 0;


        if (!quizState.recorded) {

            state.results.push({

                date:
                    Date.now(),

                score:
                    score,

                total:
                    total,

                mode:
                    quizState.mode

            });


            quizState.recorded = true;


            save();

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
                    onclick="
                        startQuiz('${quizState.mode}')
                    "
                >
                    Rejouer
                </button>

                <button
                    type="button"
                    class="secondary"
                    onclick="
                        quizState=null;
                        showView('games')
                    "
                >
                    Retour aux jeux
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
                ·
                ${question.annee}
            </span>

        </div>


        <div class="question">

            ${question.question}

        </div>


        <div class="options">

            ${
                options
                    .map(function (option, index) {

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

                    })
                    .join('')
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


    if (
        index ===
        question.correct
    ) {

        quizState.score++;

    }

    else {

        if (
            !state.mistakes.includes(
                question.id
            )
        ) {

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
   JEU DES CAPITALES
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


        showView('games');

        return;

    }


    const questions =
        shuffle(
            CAPITALES
        )
        .slice(0, 10)
        .map(function (
            capital,
            index
        ) {

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

function memoTab(
    mode,
    button
) {

    memoMode =
        mode;


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
   MEMO — FORMULES / VOCABULAIRE
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


    /* -------------------------
       VOCABULAIRE
       ------------------------- */

    if (memoMode === 'vocab') {

        let vocabulary = [];


        if (
            typeof GEO_VOCAB_DATA !==
                'undefined' &&
            Array.isArray(
                GEO_VOCAB_DATA
            )
        ) {

            vocabulary =
                GEO_VOCAB_DATA;

        }

        else if (
            typeof GEO_VOCAB !==
                'undefined'
        ) {

            if (
                Array.isArray(
                    GEO_VOCAB
                )
            ) {

                vocabulary =
                    GEO_VOCAB;

            }

            else if (
                typeof GEO_VOCAB ===
                'object'
            ) {

                vocabulary =
                    Object.values(
                        GEO_VOCAB
                    ).flat();

            }

        }


        const filtered =
            vocabulary.filter(
                function (item) {

                    const text =
                        (
                            item.terme ||
                            item.mot ||
                            ''
                        ) +
                        ' ' +
                        (
                            item.definition ||
                            item.def ||
                            ''
                        ) +
                        ' ' +
                        (
                            item.exemple ||
                            ''
                        ) +
                        ' ' +
                        (
                            item.categorie ||
                            item.theme ||
                            ''
                        );


                    const matchesTerm =
                        text
                            .toLowerCase()
                            .includes(
                                term
                            );


                    const matchesYear =
                        year === 'all' ||
                        (
                            item.niveau ||
                            item.annee
                        ) === year;


                    return (
                        matchesTerm &&
                        matchesYear
                    );

                }
            );


        box.innerHTML =
            filtered.length

                ? filtered
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

                    })
                    .join('')

                : `
                    <div class="empty">
                        Aucun mot trouvé.
                    </div>
                `;


        return;

    }


    /* -------------------------
       FORMULES
       ------------------------- */

    let formulas = [];


    if (
        typeof FORMULES_DATA !==
        'undefined'
    ) {

        Object.values(
            FORMULES_DATA
        ).forEach(function (list) {

            if (
                Array.isArray(list)
            ) {

                formulas.push(
                    ...list
                );

            }

        });

    }


    formulas =
        formulas.filter(
            function (formula) {

                const text =
                    (
                        formula.titre ||
                        ''
                    ) +
                    ' ' +
                    (
                        formula.definition ||
                        ''
                    ) +
                    ' ' +
                    (
                        formula.exemple ||
                        ''
                    ) +
                    ' ' +
                    (
                        formula.categorie ||
                        ''
                    );


                const matchesTerm =
                    text
                        .toLowerCase()
                        .includes(
                            term
                        );


                const matchesYear =
                    year === 'all' ||
                    formula.annee === year ||
                    !formula.annee;


                return (
                    matchesTerm &&
                    matchesYear
                );

            }
        );


    box.innerHTML =
        formulas.length

            ? formulas
                .map(function (formula) {

                    return `

                        <article class="memo-card">

                            <div class="top">

                                <h3>
                                    ${
                                        formula.icone ||
                                        '📐'
                                    }

                                    ${formula.titre}

                                </h3>

                                <span class="badge">

                                    ${
                                        formula.annee ||
                                        'Toutes'
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

                })
                .join('')

            : `
                <div class="empty">
                    Aucune formule trouvée.
                </div>
            `;

}


/* =========================================================
   EXAMENS
   ========================================================= */

function startExam(subject) {

    const questions =
        flattenQuestions(
            subject
        );


    if (!questions.length) {

        showView('exam');


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
            shuffle(
                questions
            ).slice(0, 15),

        index:
            0,

        score:
            0,

        subject:
            subject

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
                    type="button"
                    class="primary"
                    onclick="
                        startExam('${examState.subject}')
                    "
                >
                    Recommencer
                </button>

                <button
                    type="button"
                    class="secondary"
                    onclick="
                        examState=null;
                        showView('exam')
                    "
                >
                    Retour
                </button>

            </div>

        `;

        return;

    }


    const question =
        examState.qs[
            examState.index
        ];


    const options =
        Array.isArray(
            question.options
        )
            ? question.options
            : [];


    if (!options.length) {

        examState.index++;

        renderExam();

        return;

    }


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
                options
                    .map(function (
                        option,
                        index
                    ) {

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

                    })
                    .join('')
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


    if (
        index ===
        question.correct
    ) {

        examState.score++;

    }

    else {

        if (
            !state.mistakes.includes(
                question.id
            )
        ) {

            state.mistakes.push(
                question.id
            );

        }

    }


    examState.index++;


    save();


    renderExam();

}


/* =========================================================
   SUIVI
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


    const rows =
        subjects.map(
            function (subject) {

                const global =
                    pctSubject(
                        subject
                    );


                const years =
                    ['3e', '4e', '5e', '6e'];


                const yearRows =
                    years.map(
                        function (year) {

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

                        }
                    ).join('');


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

            }
        ).join('');


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
   INITIALISATION
   ========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    function () {

        if (
            state.theme === 'dark'
        ) {

            document.body.classList.add(
                'dark'
            );

        }


        renderHome();

        renderSubject(
            'maths'
        );

        renderSubject(
            'geo'
        );

        renderMemo();


        console.log(
            'Carnet CESS chargé correctement.'
        );

    }
);
