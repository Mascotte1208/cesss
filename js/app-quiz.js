/* =========================================================
   CARNET CESS — QUIZ & CHRONOMÈTRE
   Déroulement d'un quiz, jeu des capitales, et chronomètre
   partagé par les quiz.
   ========================================================= */

// =========================================================
// CHRONOMÈTRE
// =========================================================

var quizTimer = null;
var quizTimeLeft = 0;
var quizTimeLimit = 0;


/* Évite de reproposer trop vite les mêmes questions. */
function selectFreshQuestions(questions, count, mode) {
    var key = 'carnetCESS_recent_' + mode;
    var recent = [];

    try {
        recent = JSON.parse(localStorage.getItem(key) || '[]');
    } catch (error) {
        recent = [];
    }

    var recentMap = {};
    recent.forEach(function (id) {
        recentMap[String(id)] = true;
    });

    var fresh = shuffle(questions.filter(function (question) {
        return !recentMap[String(question.id)];
    }));

    var fallback = shuffle(questions.filter(function (question) {
        return recentMap[String(question.id)];
    }));

    var selected = fresh.concat(fallback).slice(0, count);
    var selectedIds = selected.map(function (question) {
        return String(question.id);
    });

    try {
        localStorage.setItem(
            key,
            JSON.stringify(selectedIds.concat(recent).slice(0, 60))
        );
    } catch (error) {
        // Le quiz fonctionne aussi si le stockage est indisponible.
    }

    return selected;
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

    if (mode === 'bio') {
        filter = 'bio';
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
            { id: 'tf_8', question: 'Une fonction croissante a une dérivée positive.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'maths', annee: '6e' },
            { id: 'tf_9', question: 'Multiplier une inéquation par un nombre négatif inverse son sens.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'maths', annee: '3e' },
            { id: 'tf_10', question: 'La solution d’un système de deux équations est toujours un nombre unique.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'maths', annee: '3e' },
            { id: 'tf_11', question: 'Une réduction de 20 % correspond à un coefficient multiplicateur de 0,8.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'maths', annee: '3e' },
            { id: 'tf_12', question: 'Le discriminant permet d’étudier les solutions d’une équation du second degré.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'maths', annee: '4e' },
            { id: 'tf_13', question: 'Dans une combinaison, l’ordre des éléments compte.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'maths', annee: '5e' },
            { id: 'tf_14', question: 'La contraposée d’une implication lui est logiquement équivalente.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'maths', annee: '5e' },
            { id: 'tf_15', question: 'Une probabilité conditionnelle peut être supérieure à 1.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'maths', annee: '6e' },
            { id: 'tf_16', question: 'Une primitive de f a pour dérivée f.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'maths', annee: '6e' },
            { id: 'tf_17', question: 'Un aléa naturel devient un risque même sans population ni bien exposé.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'geo', annee: '3e' },
            { id: 'tf_18', question: 'La densité correspond au nombre d’habitants par unité de surface.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'geo', annee: '3e' },
            { id: 'tf_19', question: 'La météo et le climat désignent exactement la même chose.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'geo', annee: '4e' },
            { id: 'tf_20', question: 'L’adaptation climatique cherche à limiter les conséquences du changement climatique.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'geo', annee: '4e' },
            { id: 'tf_21', question: 'Le PIB par habitant suffit toujours à mesurer toutes les dimensions du développement.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'geo', annee: '5e' },
            { id: 'tf_22', question: 'Une chaîne de valeur peut répartir la production entre plusieurs continents.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'geo', annee: '5e' },
            { id: 'tf_23', question: 'L’Union européenne, la zone euro et l’espace Schengen ont exactement les mêmes membres.', options: ['Vrai', 'Faux'], correct: 1, matiere: 'geo', annee: '6e' },
            { id: 'tf_24', question: 'Un SIG permet de superposer plusieurs couches de données géographiques.', options: ['Vrai', 'Faux'], correct: 0, matiere: 'geo', annee: '6e' }
        ];
        var questions = selectFreshQuestions(tfQuestions, 12, mode);
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
        selectFreshQuestions(questions, 15, mode);


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
                        : (q.matiere === 'bio'
                            ? '🧬 Biologie'
                            : '📐 Mathématiques')}
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

var CESS_CAPITALS =
    typeof CESS_CAPITALS_DATA !== 'undefined'
        ? CESS_CAPITALS_DATA
        : [];


function showCapitalLevels() {
    var panel =
        document.getElementById('gamePanel');

    if (!panel) {
        return;
    }

    var niveaux = [
        ['Facile', '⭐', 'Capitales les plus connues'],
        ['Moyen', '⭐⭐', 'Pays de difficulté intermédiaire'],
        ['Expert', '⭐⭐⭐', 'Petits États et capitales difficiles']
    ];

    panel.innerHTML = `
        <div class="quiz-start">
            <button class="back-button" onclick="renderGamePanel()" type="button">
                ← Retour aux jeux
            </button>
            <span class="eyebrow">195 pays disponibles</span>
            <h2>🌍 Choisis ton niveau</h2>
            <p>Chaque partie propose 15 pays et évite ceux joués récemment.</p>
            <div class="game-grid capital-level-grid">
                ${niveaux.map(function (niveau) {
                    return `
                        <button
                            class="game-card"
                            onclick="startCapitals('${niveau[0]}')"
                            type="button">
                            <span>${niveau[1]}</span>
                            <strong>${niveau[0]}</strong>
                            <small>${niveau[2]}</small>
                        </button>
                    `;
                }).join('')}
                <button class="game-card" onclick="startCapitals('all')" type="button">
                    <span>🌐</span>
                    <strong>Tous les pays</strong>
                    <small>Les trois niveaux mélangés</small>
                </button>
            </div>
        </div>
    `;
}


function startCapitals(level) {

    level = level || 'all';

    var paysDisponibles =
        level === 'all'
            ? CESS_CAPITALS
            : CESS_CAPITALS.filter(function (item) {
                return item[3] === level;
            });

    var banque =
        paysDisponibles.map(function (item) {
            return {
                id: 'capital_' + item[0],
                data: item
            };
        });

    var selection =
        selectFreshQuestions(
            banque,
            15,
            'capitales_' + level
        );

    var questions =
        selection.map(function (entry) {

            var item = entry.data;

            var wrong =
                shuffle(
                    CESS_CAPITALS.filter(
                        function (other) {
                            return other[1] !== item[1];
                        }
                    )
                )
                .slice(0, 3)
                .map(function (other) {
                    return other[1];
                });

            var options =
                shuffle(wrong.concat([item[1]]));

            return {
                id: entry.id,
                question:
                    'Quelle est la capitale de ' +
                    item[0] +
                    ' ?',
                options: options,
                correct: options.indexOf(item[1]),
                correction:
                    item[0] +
                    ' a pour capitale ' +
                    item[1] +
                    '.',
                matiere: 'geo',
                region: item[2],
                niveau: item[3]
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

