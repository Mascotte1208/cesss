/* =========================================================
   CARNET CESS — MATIÈRES & CHAPITRES
   Liste des chapitres par matière, ouverture d'un chapitre,
   exercices, marquage "maîtrisé", extraction des questions
   et impression PDF d'une fiche.
   ========================================================= */

/* =========================================================
   MATIERES
   ========================================================= */

function renderSubject(subject) {

    if (!CESS_SUBJECTS[subject]) {
        return;
    }

    var data =
        CESS_SUBJECTS[subject].getData();

    var elementIds = {
        maths: ['mathsTotal', 'mathYears', 'mathContent'],
        geo: ['geoTotal', 'geoYears', 'geoContent'],
        bio: ['bioTotal', 'bioYears', 'bioContent']
    };

    var ids = elementIds[subject];

    if (!ids) {
        return;
    }

    var totalElement =
        document.getElementById(ids[0]);

    var yearsElement =
        document.getElementById(ids[1]);

    var contentElement =
        document.getElementById(ids[2]);

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

    var coursSections =
        parseCoursSections(chapter.cours);


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

                📖 Cours & objectifs

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

                    <div class="chapter-overview-grid">

                        ${
                            matieres.length
                                ? `
                                    <section class="chapter-overview-card">
                                        <span class="chapter-overview-icon">📚</span>
                                        <div>
                                            <h3>À savoir</h3>
                                            <ul>
                                                ${matieres.map(function (item) {
                                                    return `
                                                        <li>
                                                            ${escapeHtml(item)}
                                                        </li>
                                                    `;
                                                }).join('')}
                                            </ul>
                                        </div>
                                    </section>
                                `
                                : ''
                        }

                        ${
                            objectives.length
                                ? `
                                    <section class="chapter-overview-card">
                                        <span class="chapter-overview-icon">🎯</span>
                                        <div>
                                            <h3>Objectifs</h3>
                                            <ul>
                                                ${objectives.map(function (item) {
                                                    return `
                                                        <li>
                                                            ${escapeHtml(item)}
                                                        </li>
                                                    `;
                                                }).join('')}
                                            </ul>
                                        </div>
                                    </section>
                                `
                                : ''
                        }

                    </div>

                    <div class="content-card course-content">

                        <h3>📖 Cours</h3>

                        ${
                            coursSections.length
                                ? `
                                    <div class="cours-sections">
                                        ${coursSections.map(function (section, index) {
                                            return `
                                                <div class="cours-section" data-index="${index}">

                                                    <button
                                                        type="button"
                                                        class="cours-section-header"
                                                        data-index="${index}"
                                                        aria-expanded="false"
                                                        onclick="toggleCoursSection(this)">
                                                        <span>${section.title}</span>
                                                        <span class="cours-chevron">▸</span>
                                                    </button>

                                                    <div
                                                        class="cours-section-body"
                                                        style="display:none">
                                                        ${section.body}
                                                    </div>

                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                `
                                : `
                                    <div>
                                        ${
                                            chapter.cours ||
                                            '<p>Le cours sera bientôt disponible.</p>'
                                        }
                                    </div>
                                `
                        }

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

                                                    <div class="exercise-meta-row">
                                                        <div class="exercise-number">
                                                            Exercice ${index + 1}
                                                        </div>
                                                        ${exercise.niveau
                                                            ? `
                                                                <span class="exercise-level">
                                                                    ${escapeHtml(exercise.niveau)}
                                                                </span>
                                                            `
                                                            : ''
                                                        }
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
   SOMMAIRE / ACCORDÉON DU COURS
   ========================================================= */

function toggleCoursSection(button) {

    var section =
        button.closest('.cours-section');

    if (!section) {
        return;
    }

    var body =
        section.querySelector('.cours-section-body');

    if (!body) {
        return;
    }

    var isOpen =
        body.style.display !== 'none';

    var container =
        section.closest('.cours-sections');

    if (container) {
        var sections =
            container.querySelectorAll('.cours-section');

        for (var i = 0; i < sections.length; i++) {
            var otherBody =
                sections[i].querySelector('.cours-section-body');

            var otherHeader =
                sections[i].querySelector('.cours-section-header');

            var otherChevron =
                sections[i].querySelector('.cours-chevron');

            if (otherBody) {
                otherBody.style.display = 'none';
            }

            sections[i].classList.remove('open');

            if (otherHeader) {
                otherHeader.setAttribute('aria-expanded', 'false');
            }

            if (otherChevron) {
                otherChevron.textContent = '▸';
            }
        }
    }

    if (!isOpen) {
        body.style.display = 'block';
        section.classList.add('open');
        button.setAttribute('aria-expanded', 'true');

        var chevron =
            section.querySelector('.cours-chevron');

        if (chevron) {
            chevron.textContent = '▾';
        }
    }
}

function jumpToCoursSection(button) {

    var index =
        button.getAttribute('data-index');

    var detail =
        button.closest('.detail');

    if (!detail) {
        return;
    }

    var section =
        detail.querySelector(
            '.cours-section[data-index="' + index + '"]'
        );

    if (!section) {
        return;
    }

    var header =
        section.querySelector('.cours-section-header');

    if (header) {
        toggleCoursSection(header);
    }

    try {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } catch (error) {
        section.scrollIntoView();
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
            .concat(allChaps('geo'))
            .concat(allChaps('bio'));

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

