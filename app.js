// =========================================================
// APP.JS - Logique principale
// =========================================================

// ---- État utilisateur ----
var USER_DATA = {
    progress: {},
    quizResults: {},
    revisions: {},
    streak: 0
};

var favorisFormules = [];
var currentTab = 'dashboard';
var currentMatiere = 'maths';

var currentQuiz = {
    index: 0,
    questions: [],
    answers: [],
    score: 0,
    total: 0
};

var currentExamen = {
    index: 0,
    questions: [],
    answers: [],
    score: 0,
    total: 0,
    timer: null,
    timeLeft: 0,
    niveau: '3e'
};

// ---- Fusion des matières ----
var MATIERES = {
    maths: typeof CHAPITRES !== 'undefined' ? CHAPITRES : {},
    geographie: typeof GEO_CHAPITRES !== 'undefined' ? GEO_CHAPITRES : {}
};

var MATIERE_INFO = {
    maths: {
        nom: 'Mathématiques',
        icone: '📐'
    },
    geographie: {
        nom: 'Géographie',
        icone: '🌍'
    }
};

// =========================================================
// QUESTIONS DE QUIZ
// =========================================================

var QUESTIONS_QUIZ = [];

function buildQuestionsQuiz() {
    QUESTIONS_QUIZ = [];

    for (var matiere in MATIERES) {
        if (!Object.prototype.hasOwnProperty.call(MATIERES, matiere)) {
            continue;
        }

        var matiereData = MATIERES[matiere] || {};

        for (var annee in matiereData) {
            if (!Object.prototype.hasOwnProperty.call(matiereData, annee)) {
                continue;
            }

            var chaps = Array.isArray(matiereData[annee])
                ? matiereData[annee]
                : [];

            for (var c = 0; c < chaps.length; c++) {
                var chap = chaps[c];

                if (!chap || !Array.isArray(chap.exercices)) {
                    continue;
                }

                for (var e = 0; e < chap.exercices.length; e++) {
                    var ex = chap.exercices[e];

                    if (!ex) {
                        continue;
                    }

                    if (!Array.isArray(ex.options)) {
                        continue;
                    }

                    QUESTIONS_QUIZ.push({
                        id: 'q' + QUESTIONS_QUIZ.length,
                        matiere: matiere,
                        annee: annee,
                        chapitre: chap.id,
                        question: ex.question || '',
                        options: ex.options,
                        correct: Number(ex.correct),
                        correction: ex.correction || ''
                    });
                }
            }
        }
    }
}

// =========================================================
// LOCAL STORAGE
// =========================================================

function loadUserData() {
    try {
        var saved = localStorage.getItem('cesMathData');

        if (saved) {
            var parsed = JSON.parse(saved);

            if (parsed && typeof parsed === 'object') {
                for (var key in parsed) {
                    if (Object.prototype.hasOwnProperty.call(parsed, key)) {
                        USER_DATA[key] = parsed[key];
                    }
                }
            }
        }

        if (!USER_DATA.progress || typeof USER_DATA.progress !== 'object') {
            USER_DATA.progress = {};
        }

        if (!USER_DATA.quizResults || typeof USER_DATA.quizResults !== 'object') {
            USER_DATA.quizResults = {};
        }

        if (!USER_DATA.revisions || typeof USER_DATA.revisions !== 'object') {
            USER_DATA.revisions = {};
        }

        var favs = localStorage.getItem('cesMathFavoris');

        if (favs) {
            var parsedFavs = JSON.parse(favs);

            if (Array.isArray(parsedFavs)) {
                favorisFormules = parsedFavs;
            }
        }
    } catch (e) {
        console.warn(
            'Impossible de charger les données sauvegardées :',
            e
        );
    }
}

function saveUserData() {
    try {
        localStorage.setItem(
            'cesMathData',
            JSON.stringify(USER_DATA)
        );

        localStorage.setItem(
            'cesMathFavoris',
            JSON.stringify(favorisFormules)
        );
    } catch (e) {
        console.warn(
            'Impossible de sauvegarder les données :',
            e
        );
    }
}

// =========================================================
// NAVIGATION
// =========================================================

function showTab(tab) {
    currentTab = tab;

    var tabs = [
        'dashboard',
        'cours',
        'formules',
        'entrainer',
        'suivi'
    ];

    for (var i = 0; i < tabs.length; i++) {
        var el = document.getElementById(tabs[i]);

        if (el) {
            el.classList.add('hidden');
        }

        var navName =
            'nav' +
            tabs[i].charAt(0).toUpperCase() +
            tabs[i].slice(1);

        var navEl = document.getElementById(navName);

        if (navEl) {
            navEl.classList.remove('active');
        }
    }

    var target = document.getElementById(tab);

    if (target) {
        target.classList.remove('hidden');
    }

    var navTarget =
        document.getElementById(
            'nav' +
            tab.charAt(0).toUpperCase() +
            tab.slice(1)
        );

    if (navTarget) {
        navTarget.classList.add('active');
    }

    if (tab === 'dashboard') {
        renderDashboard();
    }

    if (tab === 'cours') {
        renderMatiereSelector();
    }

    if (tab === 'formules') {
        renderFormules();
    }

    if (tab === 'entrainer') {
        updateQuizChapitres();
    }

    if (tab === 'suivi') {
        renderSuivi();
    }
}

function goHome() {
    showTab('dashboard');
}

// =========================================================
// THÈME
// =========================================================

function toggleTheme() {
    document.body.classList.toggle('dark');

    var isDark = document.body.classList.contains('dark');

    var btn = document.getElementById('themeBtn');

    if (btn) {
        btn.textContent = isDark
            ? '☀️ Mode clair'
            : '🌙 Mode sombre';
    }

    try {
        localStorage.setItem(
            'cesMathTheme',
            isDark ? 'dark' : 'light'
        );
    } catch (e) {
        console.warn('Impossible de sauvegarder le thème.', e);
    }
}

function loadTheme() {
    try {
        var theme = localStorage.getItem('cesMathTheme');

        if (theme === 'dark') {
            document.body.classList.add('dark');

            var btn = document.getElementById('themeBtn');

            if (btn) {
                btn.textContent = '☀️ Mode clair';
            }
        }
    } catch (e) {
        console.warn('Impossible de charger le thème.', e);
    }
}

// =========================================================
// MATIÈRE ET COURS
// =========================================================

function renderMatiereSelector() {
    var choixMatiere = document.getElementById('choixMatiere');
    var choixAnnee = document.getElementById('choixAnnee');
    var contenuAnnee = document.getElementById('contenuAnnee');

    if (!choixMatiere || !choixAnnee || !contenuAnnee) {
        return;
    }

    choixMatiere.classList.remove('hidden');
    choixAnnee.classList.add('hidden');
    contenuAnnee.classList.add('hidden');

    var html = '';

    var matieres = [
        'maths',
        'geographie'
    ];

    for (var i = 0; i < matieres.length; i++) {
        var m = matieres[i];
        var info = MATIERE_INFO[m];

        var col =
            m === 'maths'
                ? {
                    c: '#1d4ed8',
                    l: '#e8f0fe'
                }
                : {
                    c: '#0e7c86',
                    l: '#e4f5f6'
                };

        html += `
            <div
                class="annee-card"
                style="--tab-color:${col.c}; --tab-color-light:${col.l};"
                onclick="showMatiere('${m}')"
            >
                <span class="annee-icon">${info.icone}</span>

                <div class="annee-info">
                    <h3>${escapeHtml(info.nom)}</h3>
                    <p>Choisissez cette matière pour voir les chapitres.</p>
                </div>
            </div>
        `;
    }

    choixMatiere.innerHTML = html;
}

function showMatiere(matiere) {
    if (!MATIERES[matiere]) {
        return;
    }

    currentMatiere = matiere;

    var choixMatiere =
        document.getElementById('choixMatiere');

    var choixAnnee =
        document.getElementById('choixAnnee');

    var contenuAnnee =
        document.getElementById('contenuAnnee');

    if (!choixMatiere || !choixAnnee || !contenuAnnee) {
        return;
    }

    choixMatiere.classList.add('hidden');
    contenuAnnee.classList.add('hidden');
    choixAnnee.classList.remove('hidden');

    var html = '';

    var annees = [
        '3e',
        '4e',
        '5e',
        '6e'
    ];

    for (var i = 0; i < annees.length; i++) {
        var a = annees[i];

        var col =
            typeof ANNEE_COLOR !== 'undefined' &&
            ANNEE_COLOR[a]
                ? ANNEE_COLOR[a]
                : {
                    c: '#1d4ed8',
                    l: '#e8f0fe'
                };

        var desc =
            matiere === 'maths' &&
            typeof ANNEE_DESC !== 'undefined' &&
            ANNEE_DESC[a]
                ? ANNEE_DESC[a]
                : 'Chapitres de géographie';

        html += `
            <div
                class="annee-card"
                style="--tab-color:${col.c}; --tab-color-light:${col.l};"
                onclick="showAnnee('${a}')"
            >
                <span class="annee-icon">${a}</span>

                <div class="annee-info">
                    <h3>${a} Année</h3>
                    <p>${escapeHtml(desc)}</p>
                </div>
            </div>
        `;
    }

    choixAnnee.innerHTML = html;
}

function showAnnee(annee) {
    var container =
        document.getElementById('contenuAnnee');

    if (!container) {
        return;
    }

    var chapitres =
        MATIERES[currentMatiere] &&
        Array.isArray(MATIERES[currentMatiere][annee])
            ? MATIERES[currentMatiere][annee]
            : [];

    var choixAnnee =
        document.getElementById('choixAnnee');

    if (choixAnnee) {
        choixAnnee.classList.add('hidden');
    }

    container.classList.remove('hidden');

    if (chapitres.length === 0) {
        container.innerHTML = `
            <div style="text-align:center;padding:40px;color:var(--ink-soft);">
                Aucun chapitre pour le moment.
            </div>
        `;

        return;
    }

    var info = MATIERE_INFO[currentMatiere];

    var html = `
        <div class="page-header" style="margin-bottom:15px;">
            <h3 style="font-family:var(--font-head);font-size:18px;">
                ${info.icone}
                ${escapeHtml(info.nom)}
                — ${annee}e Année
            </h3>

            <button
                type="button"
                class="ghost-btn"
                onclick="showMatiere('${currentMatiere}')"
            >
                ← Retour aux années
            </button>
        </div>

        <div class="chapitre-list">
    `;

    for (var i = 0; i < chapitres.length; i++) {
        var chap = chapitres[i];

        var progress =
            Number(USER_DATA.progress[chap.id]) || 0;

        var status =
            progress >= 100
                ? 'statut-revise'
                : progress > 0
                    ? 'statut-cours'
                    : 'statut-vu';

        var label =
            progress >= 100
                ? '✅ Révisé'
                : progress > 0
                    ? '⏳ En cours'
                    : '📖 Non vu';

        html += `
            <div
                class="chapitre-row"
                onclick="openChapitre('${chap.id}')"
            >
                <div class="chap-left">
                    <span class="chap-icon">
                        ${chap.icone || '📘'}
                    </span>

                    <span class="chap-title">
                        ${escapeHtml(chap.titre || '')}
                    </span>
                </div>

                <span class="chap-status ${status}">
                    ${label}
                </span>
            </div>
        `;
    }

    html += '</div>';

    container.innerHTML = html;
}

function findChapitre(chapitreId) {
    for (var matiere in MATIERES) {
        if (!Object.prototype.hasOwnProperty.call(MATIERES, matiere)) {
            continue;
        }

        var matiereData = MATIERES[matiere] || {};

        for (var annee in matiereData) {
            if (!Object.prototype.hasOwnProperty.call(matiereData, annee)) {
                continue;
            }

            var chaps = matiereData[annee];

            if (!Array.isArray(chaps)) {
                continue;
            }

            for (var i = 0; i < chaps.length; i++) {
                if (chaps[i].id === chapitreId) {
                    return chaps[i];
                }
            }
        }
    }

    return null;
}

function openChapitre(chapitreId) {
    var found = findChapitre(chapitreId);

    if (!found) {
        return;
    }

    var backdrop =
        document.createElement('div');

    backdrop.className = 'modal-backdrop';

    backdrop.onclick = function (e) {
        if (e.target === backdrop) {
            closeModal(backdrop);
        }
    };

    var card =
        document.createElement('div');

    card.className = 'modal-card';

    var objectifs =
        Array.isArray(found.objectifs)
            ? found.objectifs
            : [];

    var matieres =
        Array.isArray(found.matieres)
            ? found.matieres
            : [];

    var html = `
        <div class="modal-head">
            <button
                type="button"
                class="modal-close"
                onclick="closeModal(this.closest('.modal-backdrop'))"
            >
                ✕
            </button>

            <h2 class="modal-h2">
                ${found.icone || '📘'}
                ${escapeHtml(found.titre || '')}
            </h2>

            <p class="modal-desc">
                ${escapeHtml(found.desc || '')}
            </p>
        </div>

        <div class="modal-body">

            <div class="cours-block">
                ${found.cours || '<p>Contenu de cours non disponible.</p>'}
            </div>

            <h3>🎯 Objectifs</h3>
            <ul>
    `;

    for (var o = 0; o < objectifs.length; o++) {
        html += `
            <li>${escapeHtml(objectifs[o])}</li>
        `;
    }

    html += `
            </ul>

            <h3>📝 Matières</h3>

            <ul>
    `;

    for (var m = 0; m < matieres.length; m++) {
        html += `
            <li>${escapeHtml(matieres[m])}</li>
        `;
    }

    html += `
            </ul>

            <div class="modal-actions">

                <button
                    type="button"
                    class="primary-btn"
                    onclick="startChapitreQuiz('${found.id}')"
                >
                    🎯 Faire le quiz
                </button>

                <button
                    type="button"
                    class="ghost-btn"
                    onclick="markChapitreDone('${found.id}', this)"
                >
                    ✅ Marquer comme révisé
                </button>

            </div>
        </div>
    `;

    card.innerHTML = html;

    backdrop.appendChild(card);
    document.body.appendChild(backdrop);
}

function closeModal(backdrop) {
    if (backdrop && backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
    }
}

function markChapitreDone(chapitreId, btn) {
    USER_DATA.progress[chapitreId] = 100;

    USER_DATA.revisions[chapitreId] =
        (USER_DATA.revisions[chapitreId] || 0) + 1;

    saveUserData();

    renderDashboard();

    var backdrop =
        btn
            ? btn.closest('.modal-backdrop')
            : document.querySelector('.modal-backdrop');

    closeModal(backdrop);

    if (currentTab === 'cours') {
        var matiere = currentMatiere;
        var annee = '3e';

        for (var m in MATIERES) {
            if (!Object.prototype.hasOwnProperty.call(MATIERES, m)) {
                continue;
            }

            for (var a in MATIERES[m]) {
                if (!Object.prototype.hasOwnProperty.call(MATIERES[m], a)) {
                    continue;
                }

                var chaps = MATIERES[m][a] || [];

                for (var i = 0; i < chaps.length; i++) {
                    if (chaps[i].id === chapitreId) {
                        matiere = m;
                        annee = a;
                    }
                }
            }
        }

        showMatiere(matiere);
        showAnnee(annee);
    }
}

function startChapitreQuiz(chapitreId) {
    var questions =
        QUESTIONS_QUIZ.filter(function (q) {
            return q.chapitre === chapitreId;
        });

    if (questions.length === 0) {
        alert('Aucune question disponible pour ce chapitre.');
        return;
    }

    currentQuiz.questions = shuffle(questions);
    currentQuiz.index = 0;
    currentQuiz.score = 0;
    currentQuiz.total =
        currentQuiz.questions.length;

    closeModal(
        document.querySelector('.modal-backdrop')
    );

    showTab('entrainer');

    renderQuiz();
}

// =========================================================
// DASHBOARD
// =========================================================

function renderDashboard() {
    var total = 0;
    var revisites = 0;

    for (var matiere in MATIERES) {
        if (!Object.prototype.hasOwnProperty.call(MATIERES, matiere)) {
            continue;
        }

        for (var annee in MATIERES[matiere]) {
            if (!Object.prototype.hasOwnProperty.call(MATIERES[matiere], annee)) {
                continue;
            }

            var chaps =
                MATIERES[matiere][annee] || [];

            total += chaps.length;

            for (var c = 0; c < chaps.length; c++) {
                if (
                    Number(USER_DATA.progress[chaps[c].id]) >= 100
                ) {
                    revisites++;
                }
            }
        }
    }

    var globalProgress =
        document.getElementById('globalProgress');

    if (globalProgress) {
        globalProgress.textContent =
            total > 0
                ? Math.round((revisites / total) * 100)
                : 0;
    }

    var progHtml = '';

    var matieres = [
        'maths',
        'geographie'
    ];

    for (var i = 0; i < matieres.length; i++) {
        var m = matieres[i];

        var chapsM = [];

        for (var annee in MATIERES[m]) {
            if (
                Object.prototype.hasOwnProperty.call(
                    MATIERES[m],
                    annee
                )
            ) {
                chapsM =
                    chapsM.concat(
                        MATIERES[m][annee] || []
                    );
            }
        }

        var doneM = 0;

        for (var c = 0; c < chapsM.length; c++) {
            if (
                Number(USER_DATA.progress[chapsM[c].id]) >= 100
            ) {
                doneM++;
            }
        }

        var percent =
            chapsM.length > 0
                ? Math.round((doneM / chapsM.length) * 100)
                : 0;

        var progressColor =
            percent >= 80
                ? 'var(--vert)'
                : percent >= 50
                    ? 'var(--ambre)'
                    : 'var(--bleu)';

        progHtml += `
            <div class="progress-item">

                <div class="progress-label">
                    <span>
                        ${MATIERE_INFO[m].icone}
                        ${escapeHtml(MATIERE_INFO[m].nom)}
                    </span>

                    <span>${percent}%</span>
                </div>

                <div class="progress-bar">
                    <div
                        class="progress-fill"
                        style="width:${percent}%;background:${progressColor};"
                    ></div>
                </div>

            </div>
        `;
    }

    var progressionMatieres =
        document.getElementById(
            'progressionMatieres'
        );

    if (progressionMatieres) {
        progressionMatieres.innerHTML =
            progHtml;
    }

    var urgents = [];

    for (var matiere2 in MATIERES) {
        if (
            !Object.prototype.hasOwnProperty.call(
                MATIERES,
                matiere2
            )
        ) {
            continue;
        }

        for (var annee2 in MATIERES[matiere2]) {
            if (
                !Object.prototype.hasOwnProperty.call(
                    MATIERES[matiere2],
                    annee2
                )
            ) {
                continue;
            }

            var chaps2 =
                MATIERES[matiere2][annee2] || [];

            for (var c2 = 0; c2 < chaps2.length; c2++) {
                var p =
                    Number(
                        USER_DATA.progress[chaps2[c2].id]
                    ) || 0;

                if (p < 30) {
                    urgents.push(chaps2[c2]);
                }
            }
        }
    }

    var urgentHtml =
        urgents.length === 0
            ? `
                <div style="color:var(--vert);font-weight:800;">
                    🎉 Tout est en bonne voie !
                </div>
            `
            : '';

    for (
        var u = 0;
        u < Math.min(3, urgents.length);
        u++
    ) {
        urgentHtml += `
            <div class="urgent-item">
                <span>
                    ${urgents[u].icone || '📘'}
                    ${escapeHtml(urgents[u].titre || '')}
                </span>

                <b>
                    ${Number(USER_DATA.progress[urgents[u].id]) || 0}%
                </b>
            </div>
        `;
    }

    var chapitresUrgents =
        document.getElementById(
            'chapitresUrgents'
        );

    if (chapitresUrgents) {
        chapitresUrgents.innerHTML =
            urgentHtml;
    }

    renderFormulesDuJour();
    renderSuivi();
}

function renderFormulesDuJour() {
    var container =
        document.getElementById(
            'formulesDuJour'
        );

    if (!container) {
        return;
    }

    if (
        typeof FORMULES_DATA === 'undefined' ||
        !FORMULES_DATA
    ) {
        container.innerHTML =
            '<p>Aucune formule disponible.</p>';
        return;
    }

    var allFormules = [];

    for (var cat in FORMULES_DATA) {
        if (
            Object.prototype.hasOwnProperty.call(
                FORMULES_DATA,
                cat
            )
        ) {
            allFormules =
                allFormules.concat(
                    FORMULES_DATA[cat] || []
                );
        }
    }

    var selected =
        shuffle(allFormules).slice(0, 3);

    var html = '';

    for (var i = 0; i < selected.length; i++) {
        var f = selected[i];

        html += `
            <div class="formule-mini">
                <b>
                    ${f.icone || '📐'}
                    ${escapeHtml(f.titre || '')}
                </b>

                ${f.definition || ''}
            </div>
        `;
    }

    container.innerHTML =
        html ||
        '<p>Aucune formule disponible.</p>';
}

// =========================================================
// SUIVI
// =========================================================

function renderSuivi() {
    var totalChapitres = 0;
    var revisites = 0;

    for (var matiere in MATIERES) {
        if (!Object.prototype.hasOwnProperty.call(MATIERES, matiere)) {
            continue;
        }

        for (var annee in MATIERES[matiere]) {
            if (
                !Object.prototype.hasOwnProperty.call(
                    MATIERES[matiere],
                    annee
                )
            ) {
                continue;
            }

            var chaps =
                MATIERES[matiere][annee] || [];

            totalChapitres += chaps.length;

            for (var c = 0; c < chaps.length; c++) {
                if (
                    Number(USER_DATA.progress[chaps[c].id]) >= 100
                ) {
                    revisites++;
                }
            }
        }
    }

    var statsRevisites =
        document.getElementById(
            'statsRevisites'
        );

    if (statsRevisites) {
        statsRevisites.textContent =
            totalChapitres > 0
                ? Math.round(
                    (revisites / totalChapitres) * 100
                ) + '%'
                : '0%';
    }

    var statsQuizTotal =
        document.getElementById(
            'statsQuizTotal'
        );

    if (statsQuizTotal) {
        statsQuizTotal.textContent =
            Object.keys(
                USER_DATA.quizResults || {}
            ).length;
    }

    var meilleur = 0;

    for (
        var key in USER_DATA.quizResults
    ) {
        if (
            Object.prototype.hasOwnProperty.call(
                USER_DATA.quizResults,
                key
            )
        ) {
            var score =
                Number(
                    USER_DATA.quizResults[key]
                ) || 0;

            if (score > meilleur) {
                meilleur = score;
            }
        }
    }

    var statsMeilleur =
        document.getElementById(
            'statsMeilleur'
        );

    if (statsMeilleur) {
        statsMeilleur.textContent =
            meilleur + '%';
    }

    var statsSerie =
        document.getElementById(
            'statsSerie'
        );

    if (statsSerie) {
        statsSerie.textContent =
            USER_DATA.streak || 0;
    }

    var badges = getBadges();

    var badgeHtml = '';

    for (var b = 0; b < badges.length; b++) {
        badgeHtml += `
            <div class="badge-item ${
                badges[b].unlocked
                    ? 'unlocked'
                    : 'locked'
            }">
                ${badges[b].icon}
                ${badges[b].name}
            </div>
        `;
    }

    var badgeDisplay =
        document.getElementById(
            'badgeDisplay'
        );

    if (badgeDisplay) {
        badgeDisplay.innerHTML =
            badgeHtml;
    }

    var favorisList =
        document.getElementById(
            'favorisList'
        );

    if (!favorisList) {
        return;
    }

    if (favorisFormules.length === 0) {
        favorisList.innerHTML =
            '<div class="fav-empty">Aucun favori pour l’instant — étoilez une formule.</div>';

        return;
    }

    var favorisHtml = '';

    for (var fIndex = 0; fIndex < favorisFormules.length; fIndex++) {
        var favori = findFormule(
            favorisFormules[fIndex]
        );

        if (favori) {
            favorisHtml += `
                <div>
                    ${favori.icone || '📐'}
                    ${escapeHtml(favori.titre || '')}
                </div>
            `;
        }
    }

    favorisList.innerHTML =
        favorisHtml ||
        '<div class="fav-empty">Aucun favori pour l’instant — étoilez une formule.</div>';
}

function getBadges() {
    var total = 0;
    var revisites = 0;

    for (var matiere in MATIERES) {
        if (!Object.prototype.hasOwnProperty.call(MATIERES, matiere)) {
            continue;
        }

        for (var annee in MATIERES[matiere]) {
            if (
                !Object.prototype.hasOwnProperty.call(
                    MATIERES[matiere],
                    annee
                )
            ) {
                continue;
            }

            var chaps =
                MATIERES[matiere][annee] || [];

            total += chaps.length;

            for (var c = 0; c < chaps.length; c++) {
                if (
                    Number(USER_DATA.progress[chaps[c].id]) >= 100
                ) {
                    revisites++;
                }
            }
        }
    }

    return [
        {
            id: 'apprenti',
            name: 'Apprenti — 3 chapitres',
            icon: '🥉',
            unlocked: revisites >= 3
        },
        {
            id: 'expert',
            name: 'Expert — 10 chapitres',
            icon: '🥇',
            unlocked: revisites >= 10
        },
        {
            id: 'streak',
            name: 'Série de 10 bonnes réponses',
            icon: '🔥',
            unlocked:
                Number(USER_DATA.streak) >= 10
        }
    ];
}

// =========================================================
// FORMULES
// =========================================================

function findFormule(id) {
    if (
        typeof FORMULES_DATA === 'undefined' ||
        !FORMULES_DATA
    ) {
        return null;
    }

    for (var categorie in FORMULES_DATA) {
        if (
            !Object.prototype.hasOwnProperty.call(
                FORMULES_DATA,
                categorie
            )
        ) {
            continue;
        }

        var formules =
            FORMULES_DATA[categorie] || [];

        for (var i = 0; i < formules.length; i++) {
            if (formules[i].id === id) {
                return formules[i];
            }
        }
    }

    return null;
}

function renderFormules() {
    var searchInput =
        document.getElementById(
            'formuleSearch'
        );

    var search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : '';

    var list =
        document.getElementById(
            'formulesList'
        );

    if (!list) {
        return;
    }

    if (
        typeof FORMULES_DATA === 'undefined' ||
        !FORMULES_DATA
    ) {
        list.innerHTML =
            '<div style="text-align:center;padding:40px;color:var(--ink-soft);">Aucune formule disponible.</div>';

        return;
    }

    var html = '';
    var total = 0;

    for (var categorie in FORMULES_DATA) {
        if (
            !Object.prototype.hasOwnProperty.call(
                FORMULES_DATA,
                categorie
            )
        ) {
            continue;
        }

        var formules =
            FORMULES_DATA[categorie] || [];

        for (var i = 0; i < formules.length; i++) {
            var f = formules[i];

            var titre =
                String(f.titre || '');

            var definition =
                String(f.definition || '');

            if (
                search &&
                titre
                    .toLowerCase()
                    .indexOf(search) === -1 &&
                definition
                    .toLowerCase()
                    .indexOf(search) === -1
            ) {
                continue;
            }

            total++;

            var estFavori =
                favorisFormules.indexOf(f.id) !== -1;

            var colorVar =
                typeof CAT_COLOR !== 'undefined' &&
                CAT_COLOR[categorie]
                    ? CAT_COLOR[categorie]
                    : '--bleu';

            var colorLight =
                typeof CAT_COLOR_LIGHT !== 'undefined' &&
                CAT_COLOR_LIGHT[categorie]
                    ? CAT_COLOR_LIGHT[categorie]
                    : '--bleu-clair';

            html += `
                <div
                    class="formule-card"
                    data-cat="${escapeHtml(categorie)}"
                >
                    <div class="formule-header">

                        <span class="formule-icon">
                            ${f.icone || '📐'}
                        </span>

                        <span class="formule-title">
                            ${escapeHtml(titre)}
                        </span>

                        <span
                            class="formule-categorie"
                            style="
                                background:var(${colorLight});
                                color:var(${colorVar});
                            "
                        >
                            ${escapeHtml(f.categorie || categorie)}
                        </span>

                    </div>

                    <div class="formule-definition">
                        ${definition}
                    </div>

                    <div class="formule-math">
                        ${f.exemple || ''}
                    </div>

                    <div class="formule-actions">
                        <button
                            type="button"
                            onclick="toggleFavoriFormule('${escapeHtml(f.id)}')"
                        >
                            ${estFavori ? '⭐' : '☆'}
                            Favori
                        </button>
                    </div>
                </div>
            `;
        }
    }

    var formulesCount =
        document.getElementById(
            'formulesCount'
        );

    if (formulesCount) {
        formulesCount.textContent =
            total;
    }

    list.innerHTML =
        total === 0
            ? '<div style="text-align:center;padding:40px;color:var(--ink-soft);">Aucune formule trouvée.</div>'
            : html;
}

function rechercherFormule() {
    renderFormules();
}

function filtrerFormules(categorie, btn) {
    var search =
        document.getElementById(
            'formuleSearch'
        );

    if (search) {
        search.value = '';
    }

    var pills =
        document.querySelectorAll(
            '.filtres-pills .pill'
        );

    for (var i = 0; i < pills.length; i++) {
        pills[i].classList.remove('active');
    }

    if (btn) {
        btn.classList.add('active');
    }

    renderFormules();

    var cards =
        document.querySelectorAll(
            '#formulesList .formule-card'
        );

    for (var c = 0; c < cards.length; c++) {
        cards[c].style.display =
            categorie === 'all' ||
            cards[c].getAttribute('data-cat') === categorie
                ? 'block'
                : 'none';
    }
}

function toggleFavoriFormule(id) {
    var index =
        favorisFormules.indexOf(id);

    if (index !== -1) {
        favorisFormules.splice(index, 1);
    } else {
        favorisFormules.push(id);
    }

    saveUserData();
    renderFormules();
    renderSuivi();
}

// =========================================================
// QUIZ
// =========================================================

function updateQuizChapitres() {
    var anneeSelect =
        document.getElementById(
            'quizAnnee'
        );

    var chapitreSelect =
        document.getElementById(
            'quizChapitre'
        );

    if (!anneeSelect || !chapitreSelect) {
        return;
    }

    var annee =
        anneeSelect.value;

    chapitreSelect.innerHTML =
        '<option value="all">Tous les chapitres</option>';

    for (var matiere in MATIERES) {
        if (
            !Object.prototype.hasOwnProperty.call(
                MATIERES,
                matiere
            )
        ) {
            continue;
        }

        var chaps =
            MATIERES[matiere][annee] || [];

        for (var i = 0; i < chaps.length; i++) {
            chapitreSelect.innerHTML += `
                <option value="${escapeHtml(chaps[i].id)}">
                    ${chaps[i].icone || '📘'}
                    ${escapeHtml(chaps[i].titre || '')}
                </option>
            `;
        }
    }
}

function startQuiz() {
    var anneeElement =
        document.getElementById(
            'quizAnnee'
        );

    var chapitreElement =
        document.getElementById(
            'quizChapitre'
        );

    if (!anneeElement || !chapitreElement) {
        return;
    }

    var annee =
        anneeElement.value;

    var chapitre =
        chapitreElement.value;

    var questions =
        QUESTIONS_QUIZ.filter(function (q) {
            if (
                annee !== 'all' &&
                q.annee !== annee
            ) {
                return false;
            }

            if (
                chapitre !== 'all' &&
                q.chapitre !== chapitre
            ) {
                return false;
            }

            return true;
        });

    if (questions.length === 0) {
        alert(
            'Aucune question disponible pour cette sélection.'
        );
        return;
    }

    currentQuiz.questions =
        shuffle(questions);

    currentQuiz.index = 0;
    currentQuiz.score = 0;
    currentQuiz.total =
        currentQuiz.questions.length;

    renderQuiz();
}

function renderQuiz() {
    var container =
        document.getElementById(
            'quizContent'
        );

    if (!container) {
        return;
    }

    if (
        currentQuiz.index >=
        currentQuiz.total
    ) {
        showQuizResult();
        return;
    }

    var q =
        currentQuiz.questions[
            currentQuiz.index
        ];

    var html = `
        <div class="quiz-question">

            <div class="quiz-topline">
                <span>
                    Question
                    ${currentQuiz.index + 1}
                    /
                    ${currentQuiz.total}
                </span>

                <span>
                    Score :
                    ${currentQuiz.score}
                </span>
            </div>

            <div class="question-text">
                ${q.question}
            </div>

            <div class="quiz-options">
    `;

    for (var i = 0; i < q.options.length; i++) {
        html += `
            <button
                type="button"
                onclick="answerQuiz(${i})"
            >
                ${String.fromCharCode(65 + i)}.
                ${q.options[i]}
            </button>
        `;
    }

    html += `
            </div>

            <div id="quizFeedback"></div>

        </div>
    `;

    container.innerHTML =
        html;
}

function answerQuiz(index) {
    var q =
        currentQuiz.questions[
            currentQuiz.index
        ];

    if (!q) {
        return;
    }

    var isCorrect =
        index === Number(q.correct);

    var buttons =
        document.querySelectorAll(
            '#quizContent .quiz-options button'
        );

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add('locked');

        if (
            i === Number(q.correct)
        ) {
            buttons[i].classList.add('correct');
        }

        if (
            i === index &&
            !isCorrect
        ) {
            buttons[i].classList.add('wrong');
        }
    }

    if (isCorrect) {
        currentQuiz.score++;
        USER_DATA.streak =
            Number(USER_DATA.streak || 0) + 1;
    } else {
        USER_DATA.streak = 0;
    }

    saveUserData();

    var feedback =
        isCorrect
            ? `
                <div class="quiz-result correct">
                    ✅ Bonne réponse !
                </div>
            `
            : `
                <div class="quiz-result wrong">
                    ❌ Pas tout à fait.
                    <br>
                    <small>
                        ${q.correction || ''}
                    </small>
                </div>
            `;

    var feedbackContainer =
        document.getElementById(
            'quizFeedback'
        );

    if (!feedbackContainer) {
        return;
    }

    feedbackContainer.innerHTML =
        feedback +
        `
            <button
                type="button"
                class="primary-btn"
                onclick="nextQuizQuestion()"
                style="margin-top:12px;"
            >
                Question suivante →
            </button>
        `;
}

function nextQuizQuestion() {
    currentQuiz.index++;
    renderQuiz();
}

function showQuizResult() {
    var percent =
        currentQuiz.total > 0
            ? Math.round(
                (currentQuiz.score /
                    currentQuiz.total) *
                100
            )
            : 0;

    USER_DATA.quizResults[
        'quiz_' + new Date().getTime()
    ] = percent;

    saveUserData();

    var container =
        document.getElementById(
            'quizContent'
        );

    if (container) {
        container.innerHTML = `
            <div
                class="panel"
                style="text-align:center;"
            >
                <h2>Quiz terminé !</h2>

                <h1
                    style="
                        font-family:var(--font-head);
                    "
                >
                    ${percent}%
                </h1>

                <p>
                    ${currentQuiz.score}
                    /
                    ${currentQuiz.total}
                    bonnes réponses
                </p>

                <button
                    type="button"
                    class="primary-btn"
                    onclick="startQuiz()"
                >
                    Refaire
                </button>
            </div>
        `;
    }

    renderSuivi();
}

// =========================================================
// DÉFI DU JOUR
// =========================================================

function startDefiJour() {
    var questions =
        shuffle(
            QUESTIONS_QUIZ.slice()
        ).slice(0, 5);

    if (questions.length === 0) {
        alert(
            'Aucune question disponible.'
        );
        return;
    }

    currentQuiz.questions =
        questions;

    currentQuiz.index = 0;
    currentQuiz.score = 0;
    currentQuiz.total =
        questions.length;

    showTab('entrainer');
    renderQuiz();
}

// =========================================================
// EXAMEN
// =========================================================

function startExamen(niveau) {
    var maxQuestions =
        niveau === 'complet'
            ? 50
            : niveau === '6e'
                ? 30
                : niveau === '5e'
                    ? 25
                    : 20;

    var questions =
        QUESTIONS_QUIZ.filter(
            function (q) {
                return (
                    q.annee === niveau ||
                    niveau === 'complet'
                );
            }
        );

    questions =
        shuffle(questions)
            .slice(0, maxQuestions);

    if (questions.length < 3) {
        alert(
            'Pas assez de questions disponibles pour cet examen.'
        );
        return;
    }

    currentExamen.questions =
        questions;

    currentExamen.index = 0;
    currentExamen.score = 0;
    currentExamen.total =
        questions.length;

    var examenContent =
        document.getElementById(
            'examenContent'
        );

    if (!examenContent) {
        return;
    }

    examenContent.innerHTML = `
        <div
            class="quiz-topline"
            style="margin-bottom:8px;"
        >
            <span>
                Question
                <span id="examenProgress">
                    1
                </span>
                /
                ${currentExamen.total}
            </span>

            <span>
                Score :
                <span id="examenScore">
                    0
                </span>
            </span>
        </div>

        <div id="examenQuestion"></div>
    `;

    renderExamenQuestion();
}

function renderExamenQuestion() {
    if (
        currentExamen.index >=
        currentExamen.total
    ) {
        finishExamen();
        return;
    }

    var q =
        currentExamen.questions[
            currentExamen.index
        ];

    var progress =
        document.getElementById(
            'examenProgress'
        );

    var score =
        document.getElementById(
            'examenScore'
        );

    if (progress) {
        progress.textContent =
            currentExamen.index + 1;
    }

    if (score) {
        score.textContent =
            currentExamen.score;
    }

    var html = `
        <div class="quiz-question">

            <div class="question-text">
                ${q.question}
            </div>

            <div class="quiz-options">
    `;

    for (var i = 0; i < q.options.length; i++) {
        html += `
            <button
                type="button"
                onclick="answerExamen(${i})"
            >
                ${String.fromCharCode(65 + i)}.
                ${q.options[i]}
            </button>
        `;
    }

    html += `
            </div>

            <div id="examenFeedback"></div>

        </div>
    `;

    var container =
        document.getElementById(
            'examenQuestion'
        );

    if (container) {
        container.innerHTML =
            html;
    }
}

function answerExamen(index) {
    var q =
        currentExamen.questions[
            currentExamen.index
        ];

    if (!q) {
        return;
    }

    var isCorrect =
        index === Number(q.correct);

    var buttons =
        document.querySelectorAll(
            '#examenQuestion .quiz-options button'
        );

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add('locked');

        if (
            i === Number(q.correct)
        ) {
            buttons[i].classList.add('correct');
        }

        if (
            i === index &&
            !isCorrect
        ) {
            buttons[i].classList.add('wrong');
        }
    }

    if (isCorrect) {
        currentExamen.score++;
    }

    var score =
        document.getElementById(
            'examenScore'
        );

    if (score) {
        score.textContent =
            currentExamen.score;
    }

    var feedback =
        document.getElementById(
            'examenFeedback'
        );

    if (feedback) {
        feedback.innerHTML = `
            <div
                class="quiz-result ${
                    isCorrect
                        ? 'correct'
                        : 'wrong'
                }"
            >
                ${
                    isCorrect
                        ? '✅ Bonne réponse !'
                        : '❌ Mauvaise réponse.'
                }

                ${
                    !isCorrect && q.correction
                        ? `<br><small>${q.correction}</small>`
                        : ''
                }
            </div>

            <button
                type="button"
                class="primary-btn"
                onclick="nextExamenQuestion()"
                style="margin-top:12px;"
            >
                Question suivante →
            </button>
        `;
    }
}

function nextExamenQuestion() {
    currentExamen.index++;
    renderExamenQuestion();
}

function finishExamen() {
    var percent =
        currentExamen.total > 0
            ? Math.round(
                (currentExamen.score /
                    currentExamen.total) *
                100
            )
            : 0;

    USER_DATA.quizResults[
        'exam_' + new Date().getTime()
    ] = percent;

    saveUserData();

    var container =
        document.getElementById(
            'examenContent'
        );

    if (container) {
        container.innerHTML = `
            <div
                class="panel"
                style="text-align:center;"
            >
                <h2>Examen terminé !</h2>

                <h1
                    style="
                        font-family:var(--font-head);
                    "
                >
                    ${percent}%
                </h1>

                <p>
                    ${currentExamen.score}
                    /
                    ${currentExamen.total}
                    bonnes réponses
                </p>
            </div>
        `;
    }

    renderSuivi();
}

// =========================================================
// JEU DES CAPITALES
// =========================================================

var currentCapitales = {
    index: 0,
    questions: [],
    score: 0,
    total: 0
};

function startJeuCapitales() {
    if (
        typeof CAPITALES === 'undefined' ||
        !Array.isArray(CAPITALES) ||
        CAPITALES.length === 0
    ) {
        alert(
            'Données des capitales non chargées.'
        );
        return;
    }

    var selected =
        shuffle(
            CAPITALES.slice()
        ).slice(0, 10);

    currentCapitales.questions =
        selected;

    currentCapitales.index = 0;
    currentCapitales.score = 0;
    currentCapitales.total =
        selected.length;

    showTab('entrainer');

    renderCapitalesQuestion();
}

function renderCapitalesQuestion() {
    var container =
        document.getElementById(
            'quizContent'
        );

    if (!container) {
        return;
    }

    if (
        currentCapitales.index >=
        currentCapitales.total
    ) {
        showCapitalesResult();
        return;
    }

    var q =
        currentCapitales.questions[
            currentCapitales.index
        ];

    var options = [
        q.capitale
    ];

    var autres =
        CAPITALES.filter(
            function (c) {
                return (
                    c.capitale !==
                    q.capitale
                );
            }
        );

    autres =
        shuffle(autres);

    for (
        var i = 0;
        i < 3 && i < autres.length;
        i++
    ) {
        options.push(
            autres[i].capitale
        );
    }

    options =
        shuffle(options);

    var correctIndex =
        options.indexOf(
            q.capitale
        );

    var html = `
        <div class="quiz-question">

            <div
                class="quiz-topline"
                style="margin-bottom:10px;"
            >
                <span>
                    Question
                    ${currentCapitales.index + 1}
                    /
                    ${currentCapitales.total}
                </span>

                <span>
                    Score :
                    ${currentCapitales.score}
                </span>
            </div>

            <div class="question-text">
                Quelle est la capitale de
                <b>${escapeHtml(q.pays)}</b> ?
            </div>

            <div class="quiz-options">
    `;

    for (var j = 0; j < options.length; j++) {
        html += `
            <button
                type="button"
                onclick="answerCapitale(
                    ${j},
                    ${correctIndex},
                    '${escapeJsString(q.capitale)}'
                )"
            >
                ${String.fromCharCode(65 + j)}.
                ${escapeHtml(options[j])}
            </button>
        `;
    }

    html += `
            </div>

            <div id="quizFeedback"></div>

        </div>
    `;

    container.innerHTML =
        html;
}

function answerCapitale(
    index,
    correctIndex,
    bonneReponse
) {
    var isCorrect =
        index === correctIndex;

    var buttons =
        document.querySelectorAll(
            '#quizContent .quiz-options button'
        );

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add('locked');

        if (i === correctIndex) {
            buttons[i].classList.add('correct');
        }

        if (
            i === index &&
            !isCorrect
        ) {
            buttons[i].classList.add('wrong');
        }
    }

    if (isCorrect) {
        currentCapitales.score++;

        USER_DATA.streak =
            Number(USER_DATA.streak || 0) + 1;
    } else {
        USER_DATA.streak = 0;
    }

    saveUserData();

    var feedback =
        isCorrect
            ? `
                <div class="quiz-result correct">
                    ✅ Bonne réponse !
                </div>
            `
            : `
                <div class="quiz-result wrong">
                    ❌ La capitale est
                    <b>${escapeHtml(bonneReponse)}</b>
                </div>
            `;

    var feedbackContainer =
        document.getElementById(
            'quizFeedback'
        );

    if (feedbackContainer) {
        feedbackContainer.innerHTML =
            feedback +
            `
                <button
                    type="button"
                    class="primary-btn"
                    onclick="nextCapitale()"
                    style="margin-top:12px;"
                >
                    Question suivante →
                </button>
            `;
    }
}

function nextCapitale() {
    currentCapitales.index++;
    renderCapitalesQuestion();
}

function showCapitalesResult() {
    var percent =
        currentCapitales.total > 0
            ? Math.round(
                (currentCapitales.score /
                    currentCapitales.total) *
                100
            )
            : 0;

    USER_DATA.quizResults[
        'capitales_' +
        new Date().getTime()
    ] = percent;

    saveUserData();

    var container =
        document.getElementById(
            'quizContent'
        );

    if (container) {
        container.innerHTML = `
            <div
                class="panel"
                style="text-align:center;"
            >
                <h2>
                    🌍 Jeu des Capitales terminé !
                </h2>

                <h1
                    style="
                        font-family:var(--font-head);
                        font-size:42px;
                    "
                >
                    ${percent}%
                </h1>

                <p
                    style="
                        margin:12px 0;
                        color:var(--ink-soft);
                    "
                >
                    ${currentCapitales.score}
                    /
                    ${currentCapitales.total}
                    bonnes réponses
                </p>

                <button
                    type="button"
                    class="primary-btn"
                    onclick="startJeuCapitales()"
                >
                    Rejouer
                </button>

                <button
                    type="button"
                    class="ghost-btn"
                    style="margin-left:8px;"
                    onclick="showTab('entrainer')"
                >
                    Retour
                </button>
            </div>
        `;
    }

    renderSuivi();
}

// =========================================================
// EXAMEN BLANC CESS
// =========================================================

var currentCessExam = {
    index: 0,
    questions: [],
    score: 0,
    total: 0
};

function startExamenCess() {
    if (
        typeof EXAMENS_CESS === 'undefined' ||
        !Array.isArray(EXAMENS_CESS) ||
        EXAMENS_CESS.length === 0
    ) {
        alert(
            'Données de l’examen non chargées.'
        );
        return;
    }

    var questions = [];

    for (
        var i = 0;
        i < EXAMENS_CESS.length;
        i++
    ) {
        var exam =
            EXAMENS_CESS[i];

        if (
            !exam ||
            !Array.isArray(exam.exercices)
        ) {
            continue;
        }

        for (
            var j = 0;
            j < exam.exercices.length;
            j++
        ) {
            var exercice =
                exam.exercices[j];

            questions.push({
                titre:
                    exam.titre || 'Examen CESS',
                type:
                    exercice.type || '',
                question:
                    exercice.question || '',
                correction:
                    exercice.correction || ''
            });
        }
    }

    if (questions.length === 0) {
        alert(
            'Aucune question disponible dans l’examen CESS.'
        );
        return;
    }

    currentCessExam.questions =
        questions;

    currentCessExam.index = 0;
    currentCessExam.score = 0;
    currentCessExam.total =
        questions.length;

    showTab('entrainer');

    renderCessQuestion();
}

function renderCessQuestion() {
    var container =
        document.getElementById(
            'quizContent'
        );

    if (!container) {
        return;
    }

    if (
        currentCessExam.index >=
        currentCessExam.total
    ) {
        showCessResult();
        return;
    }

    var q =
        currentCessExam.questions[
            currentCessExam.index
        ];

    var html = `
        <div class="quiz-question">

            <div
                class="quiz-topline"
                style="margin-bottom:10px;"
            >
                <span>
                    Question
                    ${currentCessExam.index + 1}
                    /
                    ${currentCessExam.total}
                </span>

                <span>
                    Score :
                    ${currentCessExam.score}
                </span>
            </div>

            <div
                style="
                    font-size:13px;
                    color:var(--muted);
                    margin-bottom:5px;
                "
            >
                ${escapeHtml(q.titre)}
            </div>

            <div class="question-text">
                ${q.question}
            </div>

            <textarea
                id="cessResponse"
                rows="8"
                style="
                    width:100%;
                    padding:12px;
                    border:2px solid var(--paper-line-strong);
                    border-radius:10px;
                    background:var(--paper);
                    font-size:14px;
                "
                placeholder="Écrivez votre réponse ici..."
            ></textarea>

            <div style="margin-top:12px;">

                <button
                    type="button"
                    class="primary-btn"
                    onclick="submitCessAnswer()"
                >
                    📤 Valider ma réponse
                </button>

            </div>

        </div>
    `;

    container.innerHTML =
        html;
}

function submitCessAnswer() {
    var q =
        currentCessExam.questions[
            currentCessExam.index
        ];

    if (!q) {
        return;
    }

    var responseElement =
        document.getElementById(
            'cessResponse'
        );

    var response =
        responseElement
            ? responseElement.value.trim()
            : '';

    var question =
        document.querySelector(
            '.quiz-question'
        );

    if (!question) {
        return;
    }

    var oldFeedback =
        question.querySelector(
            '.cess-feedback'
        );

    if (oldFeedback) {
        oldFeedback.remove();
    }

    var oldButton =
        question.querySelector(
            '.cess-next-btn'
        );

    if (oldButton) {
        oldButton.remove();
    }

    var validateButton =
        question.querySelector(
            '.primary-btn'
        );

    if (validateButton) {
        validateButton.style.display =
            'none';
    }

    var feedback =
        document.createElement('div');

    feedback.className =
        'cess-feedback';

    feedback.style.cssText = `
        margin-top:10px;
        padding:12px;
        border-radius:9px;
        background:var(--rouge-clair);
        color:var(--rouge);
        border-left:4px solid var(--rouge);
    `;

    feedback.innerHTML = `
        <b>
            Exemple de structure attendue :
        </b>

        <br>

        ${q.correction || 'Aucune correction détaillée disponible.'}

        <br><br>

        <span style="font-size:12px;">
            Votre réponse :
            ${
                response
                    ? escapeHtml(
                        response.substring(
                            0,
                            100
                        )
                    ) +
                    (
                        response.length > 100
                            ? '...'
                            : ''
                    )
                    : '(Vide)'
            }
        </span>
    `;

    var btn =
        document.createElement(
            'button'
        );

    btn.type = 'button';
    btn.className =
        'primary-btn cess-next-btn';
    btn.style.marginTop =
        '10px';
    btn.textContent =
        'Question suivante →';

    btn.onclick =
        nextCessQuestion;

    question.appendChild(
        feedback
    );

    question.appendChild(
        btn
    );
}

function nextCessQuestion() {
    currentCessExam.index++;
    renderCessQuestion();
}

function showCessResult() {
    var container =
        document.getElementById(
            'quizContent'
        );

    if (!container) {
        return;
    }

    container.innerHTML = `
        <div
            class="panel"
            style="text-align:center;"
        >
            <h2>
                🔴 Examen blanc terminé !
            </h2>

            <p
                style="
                    margin:12px 0;
                    font-size:16px;
                "
            >
                Vous avez complété toutes
                les questions.
                La correction détaillée
                était affichée après
                chaque réponse.
            </p>

            <button
                type="button"
                class="primary-btn"
                onclick="startExamenCess()"
            >
                Recommencer
            </button>

            <button
                type="button"
                class="ghost-btn"
                style="margin-left:8px;"
                onclick="showTab('entrainer')"
            >
                Retour
            </button>
        </div>
    `;

    renderSuivi();
}

// =========================================================
// UTILITAIRES
// =========================================================

function shuffle(array) {
    var copy =
        Array.isArray(array)
            ? array.slice()
            : [];

    for (
        var i = copy.length - 1;
        i > 0;
        i--
    ) {
        var j =
            Math.floor(
                Math.random() * (i + 1)
            );

        var temp =
            copy[i];

        copy[i] =
            copy[j];

        copy[j] =
            temp;
    }

    return copy;
}

function escapeHtml(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeJsString(value) {
    return String(value == null ? '' : value)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/\r/g, '\\r')
        .replace(/\n/g, '\\n');
}

function startRevision() {
    showTab('cours');
}

// =========================================================
// INITIALISATION
// =========================================================

function initApp() {
    loadUserData();
    loadTheme();
    buildQuestionsQuiz();
    showTab('dashboard');
}

// Démarrer l'application
if (
    document.readyState === 'loading'
) {
    document.addEventListener(
        'DOMContentLoaded',
        initApp
    );
} else {
    initApp();
}
