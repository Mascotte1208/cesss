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
        '6e',
        'transversal'
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
        <div class="subject-exercise-launch"><button class="button primary" type="button" onclick="openSubjectExercises('${subject}')">✎ Exercices de la matière</button></div>
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

function bplusDifficulty(year) {
    return ({'3e':'Fondamental','4e':'Intermédiaire','5e':'Avancé','6e':'Type CESS'})[year] || 'Transversal';
}

function bplusExerciseHtml(chapter, exercices) {
    if (!exercices.length) {
        return '<div class="empty-state">Aucun exercice disponible pour ce chapitre.</div>';
    }
    return '<div class="exercise-list">' + exercices.map(function (exercise, index) {
        var options = Array.isArray(exercise.options) ? exercise.options : [];
        return '<article class="exercise-card">' +
            '<div class="exercise-meta-row"><div class="exercise-number">Exercice ' + (index + 1) + '</div>' +
            (exercise.niveau ? '<span class="exercise-level">' + escapeHtml(exercise.niveau) + '</span>' : '') + '</div>' +
            '<div class="exercise-question">' + escapeHtml(exercise.question || 'Question') + '</div>' +
            (options.length ? '<div class="exercise-options">' + options.map(function (option, optionIndex) {
                return '<button class="exercise-option" onclick="answerChapterExercise(this,\'' + chapter.id + '\',' + index + ',' + optionIndex + ')">' + escapeHtml(option) + '</button>';
            }).join('') + '</div>' : '') +
            '<div class="exercise-feedback"></div></article>';
    }).join('') + '</div>';
}

function openChapterBplus(id) {
    var chapter = findChapter(id);
    if (!chapter) {
        alert('Impossible de trouver ce chapitre.');
        return;
    }

    var subject = chapter.matiere || 'maths';
    var subjectInfo = CESS_SUBJECTS[subject] || CESS_SUBJECTS.maths;
    var objectives = Array.isArray(chapter.objectifs) ? chapter.objectifs : [];
    var matieres = Array.isArray(chapter.matieres) ? chapter.matieres : [];
    var exercices = Array.isArray(chapter.exercices) ? chapter.exercices : [];
    var progress = getChapterProgress(chapter.id);
    var rawSections = parseCoursSections(chapter.cours);
    var coursSections = groupCoursSections(rawSections);
    var words = String(chapter.cours || '').replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length;
    var minutes = Math.max(1, Math.ceil(words / 180));
    var safeTitle = escapeHtml(chapter.titre || 'Chapitre');

    var chips = coursSections.map(function (section, index) {
        return '<button type="button" data-index="' + index + '" onclick="jumpToCoursSection(this)">' + section.icon + ' ' + escapeHtml(section.title) + '</button>';
    }).join('');

    var courseHtml = coursSections.length ? coursSections.map(function (section, index) {
        var open = index === 0;
        return '<section class="cours-section bplus-accordion' + (open ? ' open' : '') + '" data-index="' + index + '">' +
            '<button type="button" class="cours-section-header bplus-accordion-button" aria-expanded="' + open + '" onclick="toggleCoursSection(this)">' +
            '<span class="bplus-section-number">' + (index + 1) + '</span><span><small>' + section.icon + ' PARTIE ' + (index + 1) + '</small>' + escapeHtml(section.title) + '</span><span class="cours-chevron">' + (open ? '▾' : '▸') + '</span></button>' +
            '<div class="cours-section-body bplus-accordion-body" style="display:' + (open ? 'block' : 'none') + '">' + section.body + '</div></section>';
    }).join('') : '<section class="bplus-paper">' + (chapter.cours || '<p>Le cours sera bientôt disponible.</p>') + '</section>';

    var exercisesHtml = '';


    var content = document.createElement('div');
    content.className = 'detail bplus-detail bplus-' + subject;
    content.innerHTML = '<div class="bplus-breadcrumb"><button onclick="returnToSubject(\'' + subject + '\')">← ' + escapeHtml(subjectInfo.label) + '</button><span>/</span><span>' + escapeHtml(chapter.annee || '') + '</span><span>/</span><span>' + safeTitle + '</span></div>' +
        '<header class="bplus-header">' +
          '<div class="bplus-badges"><span class="bplus-badge accent">' + escapeHtml(chapter.annee || '') + ' secondaire</span><span class="bplus-badge">' + escapeHtml(subjectInfo.label) + '</span><span class="bplus-badge warm">' + bplusDifficulty(chapter.annee) + '</span><span class="bplus-badge">≈ ' + minutes + ' min de lecture</span></div>' +
          '<div class="bplus-heading"><div class="bplus-icon">' + (chapter.icone || '📘') + '</div><div><p class="bplus-kicker">FICHE DE RÉVISION</p><h1>' + safeTitle + '</h1><p class="bplus-lead">' + escapeHtml(chapter.desc || '') + '</p></div></div>' +
          '<div class="bplus-meta"><div><small>PARCOURS</small><strong>' + escapeHtml(chapter.annee || '') + ' · ' + escapeHtml(subjectInfo.label) + '</strong></div><div><small>OBJECTIFS</small><strong>' + escapeHtml(objectives.slice(0, 2).join(' · ') || 'Comprendre et appliquer le chapitre') + '</strong></div><div><small>FORMAT</small><strong>Cours · synthèse</strong></div></div>' +
        '</header>' +
        ((matieres.length || objectives.length) ? '<aside class="bplus-prerequisites"><span>✓</span><div><strong>Avant de commencer</strong><p>' + escapeHtml((matieres.slice(0, 4).concat(objectives.slice(0, 1))).join(' · ')) + '</p></div></aside>' : '') +
        '<nav class="bplus-chips" aria-label="Sommaire du chapitre"><span>Sommaire</span>' + chips + '</nav>' +
        '<div class="bplus-layout"><main class="bplus-reading"><div class="bplus-intro"><p class="bplus-kicker">COURS STRUCTURÉ</p><h2>Comprendre et retenir</h2><p>Ouvre une partie à la fois pour avancer sans surcharger la page. Les exercices sont regroupés dans l’espace d’entraînement de la matière.</p></div><div class="cours-sections">' + courseHtml + '</div>' +
          '<div class="bplus-print"><button class="button primary" onclick="printChapter(\'' + chapter.id + '\')" type="button">🖨️ Imprimer ou enregistrer en PDF</button></div></main>' +
          '<aside class="bplus-rail"><section><small>PROGRESSION</small><strong class="bplus-score">' + progress + '%</strong><div class="progress-line"><span style="width:' + progress + '%"></span></div><button class="button primary" onclick="markDone(\'' + chapter.id + '\')">✓ Marquer comme lu</button></section>' +
          '<section><small>ENTRAÎNEMENT</small><h3>Exercices de la matière</h3><p>Choisis une série par année, chapitre ou niveau.</p><button class="button secondary" onclick="openSubjectExercises(\'' + subject + '\')">✎ Ouvrir les exercices</button></section></aside></div>';

    var hosts = {maths:'mathContent', geo:'geoContent', bio:'bioContent'};
    var host = document.getElementById(subjectInfo.library ? 'libraryContent' : (hosts[subject] || 'mathContent'));
    if (!host) return;
    var previous = host.querySelector('.detail');
    if (previous) previous.remove();
    host.prepend(content);
    if (typeof window.enhancePremiumSheet === 'function') {
        window.enhancePremiumSheet(id);
    }
    try { content.scrollIntoView({behavior:'smooth', block:'start'}); } catch (error) { content.scrollIntoView(); }
}

function openChapter(id) {

    return openChapterBplus(id);

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

                        ✓ Marquer comme lu

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


    var contentHosts = {
        maths: 'mathContent',
        geo: 'geoContent',
        bio: 'bioContent'
    };

    var host = document.getElementById(
        contentHosts[subject] || 'mathContent'
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

    if (button.disabled) return;
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

    if (good) button.classList.add('correct');
    else {
        button.classList.add('wrong');
        if (buttons[correct]) buttons[correct].classList.add('correct');
    }
    if (feedback) feedback.innerHTML = feedbackMarkup(good, exercise.correction, '', '', null);

}



/* =========================================================
   MAITRISE
   ========================================================= */

function markDone(id) {
    if (!findChapter(id)) return;
    cessState.readChapters = cessState.readChapters || {};
    cessState.readChapters[id] = true;
    cessSave();
    openChapter(id);
}

function flattenQuestions(filter) {

    filter = filter || 'all';

    var chapters = [];

    Object.keys(CESS_SUBJECTS).forEach(function (subject) {
        chapters = chapters.concat(allChaps(subject));
    });

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


    if (CESS_SUBJECTS[filter]) {
        questions = questions.filter(function (q) {
            return q.matiere === filter;
        });
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
 var chapter=findChapter(id);if(!chapter){alert('Chapitre introuvable.');return;}
 var subject=chapter.matiere||'maths',info=CESS_SUBJECTS[subject]||{},title=escapeHtml(chapter.titre||'Chapitre'),description=escapeHtml(chapter.desc||'');
 var content='<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>'+title+' - Carnet CESS</title><style>@page{margin:18mm}body{font-family:Georgia,serif;color:#17233a;max-width:820px;margin:auto;line-height:1.65;font-size:12pt}h1{font-size:30pt;line-height:1.08;margin:0 0 10px;border-bottom:2px solid #a94f39;padding-bottom:12px}h2,h3{color:#17233a;break-after:avoid}.meta{font-family:Arial,sans-serif;color:#6d625a;margin-bottom:24px}.formule,.astuce,.piege,.checklist,.retenir,.important,blockquote{padding:12px 15px;margin:14px 0;border-left:4px solid #a94f39;background:#fbede6;break-inside:avoid}.exemple,.example,.checklist{border-color:#477358;background:#edf4ec}.piege,.warning,.erreur{border-color:#a64035;background:#fbefec}table{width:100%;border-collapse:collapse;margin:14px 0}th,td{border:1px solid #d8cec5;padding:8px;text-align:left}th{background:#f5efe7}img,svg{max-width:100%}.footer{margin-top:30px;border-top:1px solid #d8cec5;padding-top:10px;font:10pt Arial,sans-serif;color:#746b65;text-align:center}</style></head><body><h1>'+title+'</h1><div class="meta"><strong>'+escapeHtml(info.label||subject)+'</strong> · '+escapeHtml(chapter.annee||'')+(description?' · '+description:'')+'</div>'+(chapter.cours||'<p>Contenu indisponible.</p>')+'<div class="footer">Fiche générée depuis Carnet CESS · '+escapeHtml(info.label||subject)+'</div></body></html>';
 var win=window.open('','_blank');if(!win){alert('Autorise les fenêtres contextuelles pour imprimer cette fiche.');return;}win.document.write(content);win.document.close();win.focus();win.print();
}

