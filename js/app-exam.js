/* =========================================================
   CARNET CESS — EXAMENS BLANCS
   ========================================================= */

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

