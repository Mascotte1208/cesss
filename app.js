/* =========================================================
   CARNET CESS
   APP.JS
   Interface Gaming × Carnet de révision
   ========================================================= */


/* =========================================================
   ÉTAT
   ========================================================= */

var USER_DATA = {
    progress: {},
    quizResults: {},
    revisions: {},
    streak: 0,
    xp: 0
};

var favorisFormules = [];

var currentTab = "dashboard";
var currentMatiere = "maths";
var currentAnnee = "3e";

var currentQuiz = {
    index: 0,
    questions: [],
    answers: [],
    score: 0,
    total: 0,
    answered: false
};

var currentExamen = {
    index: 0,
    questions: [],
    answers: [],
    score: 0,
    total: 0,
    timer: null,
    timeLeft: 0,
    niveau: "3e"
};

var currentCessExam = {
    index: 0,
    questions: [],
    score: 0,
    total: 0
};

var currentCapitales = {
    index: 0,
    questions: [],
    score: 0,
    total: 0
};

var activeFormulaCategory = "all";

var QUESTIONS_QUIZ = [];


/* =========================================================
   MATIÈRES
   ========================================================= */

var MATIERES = {
    maths: typeof CHAPITRES !== "undefined" ? CHAPITRES : {},
    geographie:
        typeof GEO_CHAPITRES !== "undefined"
            ? GEO_CHAPITRES
            : {}
};

var MATIERE_INFO = {
    maths: {
        nom: "Mathématiques",
        icone: "📐",
        description: "Algèbre, géométrie, analyse, statistiques et plus."
    },

    geographie: {
        nom: "Géographie",
        icone: "🌍",
        description: "Territoires, populations, ressources et mondialisation."
    }
};


/* =========================================================
   UTILITAIRES
   ========================================================= */

function escapeHtml(value) {
    if (value === null || value === undefined) return "";

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function shuffle(array) {
    var copy = array.slice();

    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }

    return copy;
}


function getChapterTitle(chapter) {
    return chapter && (chapter.titre || chapter.title)
        ? (chapter.titre || chapter.title)
        : "Chapitre";
}


function getChapterDescription(chapter) {
    return chapter && (chapter.desc || chapter.description)
        ? (chapter.desc || chapter.description)
        : "";
}


function getChapterIcon(chapter) {
    return chapter && chapter.icone
        ? chapter.icone
        : "📚";
}


function getChapterExercises(chapter) {
    if (!chapter) return [];

    return Array.isArray(chapter.exercices)
        ? chapter.exercices
        : [];
}


function getAllChapters(matiere) {
    var result = [];

    var data = MATIERES[matiere] || {};

    for (var annee in data) {

        var chapters = data[annee] || [];

        for (var i = 0; i < chapters.length; i++) {

            result.push({
                chapter: chapters[i],
                annee: annee,
                matiere: matiere
            });
        }
    }

    return result;
}


function getAllQuestions() {
    var questions = [];

    for (var matiere in MATIERES) {

        var data = MATIERES[matiere] || {};

        for (var annee in data) {

            var chapters = data[annee] || [];

            for (var c = 0; c < chapters.length; c++) {

                var chapter = chapters[c];
                var exercises = getChapterExercises(chapter);

                for (var e = 0; e < exercises.length; e++) {

                    var ex = exercises[e];

                    if (!ex || !ex.question) continue;

                    questions.push({
                        id:
                            "q_" +
                            matiere +
                            "_" +
                            annee +
                            "_" +
                            chapter.id +
                            "_" +
                            e,

                        matiere: matiere,
                        annee: annee,
                        chapitre: chapter.id,

                        chapitreTitre: getChapterTitle(chapter),

                        question: ex.question,

                        options:
                            Array.isArray(ex.options)
                                ? ex.options
                                : [],

                        correct:
                            typeof ex.correct === "number"
                                ? ex.correct
                                : 0,

                        correction:
                            ex.correction || ""
                    });
                }
            }
        }
    }

    return questions;
}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function loadUserData() {

    try {

        var saved = localStorage.getItem("cesMathData");

        if (saved) {

            var parsed = JSON.parse(saved);

            if (parsed && typeof parsed === "object") {

                for (var key in parsed) {
                    USER_DATA[key] = parsed[key];
                }
            }
        }


        var favs = localStorage.getItem("cesMathFavoris");

        if (favs) {

            var parsedFavs = JSON.parse(favs);

            if (Array.isArray(parsedFavs)) {
                favorisFormules = parsedFavs;
            }
        }

    } catch (error) {

        console.warn(
            "Impossible de charger les données sauvegardées.",
            error
        );
    }


    if (!USER_DATA.progress) {
        USER_DATA.progress = {};
    }

    if (!USER_DATA.quizResults) {
        USER_DATA.quizResults = {};
    }

    if (!USER_DATA.revisions) {
        USER_DATA.revisions = {};
    }

    if (typeof USER_DATA.streak !== "number") {
        USER_DATA.streak = 0;
    }

    if (typeof USER_DATA.xp !== "number") {
        USER_DATA.xp = 0;
    }
}


function saveUserData() {

    try {

        localStorage.setItem(
            "cesMathData",
            JSON.stringify(USER_DATA)
        );

        localStorage.setItem(
            "cesMathFavoris",
            JSON.stringify(favorisFormules)
        );

    } catch (error) {

        console.warn(
            "Impossible de sauvegarder les données.",
            error
        );
    }
}


/* =========================================================
   XP / NIVEAU
   ========================================================= */

function getLevel() {

    var xp = Number(USER_DATA.xp) || 0;

    return Math.floor(xp / 100) + 1;
}


function getLevelXP() {

    var xp = Number(USER_DATA.xp) || 0;

    return xp % 100;
}


function addXP(amount) {

    amount = Number(amount) || 0;

    USER_DATA.xp = (Number(USER_DATA.xp) || 0) + amount;

    saveUserData();

    updateHeaderStats();
}


function updateHeaderStats() {

    var xp = Number(USER_DATA.xp) || 0;
    var level = getLevel();
    var levelXP = getLevelXP();


    var headerXP = document.getElementById("headerXP");

    if (headerXP) {
        headerXP.textContent = xp;
    }


    var headerStreak =
        document.getElementById("headerStreak");

    if (headerStreak) {
        headerStreak.textContent =
            USER_DATA.streak || 0;
    }


    var sideLevel =
        document.getElementById("sideLevel");

    if (sideLevel) {
        sideLevel.textContent = level;
    }


    var sideXP =
        document.getElementById("sideXP");

    if (sideXP) {
        sideXP.textContent =
            levelXP + " / 100 XP";
    }


    var fill =
        document.getElementById("sideXPFill");

    if (fill) {
        fill.style.width =
            Math.min(levelXP, 100) + "%";
    }
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showTab(tab) {

    currentTab = tab;

    var tabs = [
        "dashboard",
        "cours",
        "formules",
        "entrainer",
        "suivi"
    ];


    for (var i = 0; i < tabs.length; i++) {

        var element =
            document.getElementById(tabs[i]);

        if (element) {
            element.classList.add("hidden");
        }


        var nav =
            document.getElementById(
                "nav" +
                tabs[i].charAt(0).toUpperCase() +
                tabs[i].slice(1)
            );

        if (nav) {
            nav.classList.remove("active");
        }
    }


    var target =
        document.getElementById(tab);

    if (target) {
        target.classList.remove("hidden");
    }


    var navTarget =
        document.getElementById(
            "nav" +
            tab.charAt(0).toUpperCase() +
            tab.slice(1)
        );

    if (navTarget) {
        navTarget.classList.add("active");
    }


    updateMobileNavigation(tab);


    if (tab === "dashboard") {
        renderDashboard();
    }

    if (tab === "cours") {
        renderMatiereSelector();
    }

    if (tab === "formules") {
        renderFormules();
    }

    if (tab === "entrainer") {
        updateQuizChapitres();
    }

    if (tab === "suivi") {
        renderSuivi();
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function updateMobileNavigation(tab) {

    var buttons = [
        "mobileDashboard",
        "mobileCours",
        "mobileFormules",
        "mobileEntrainer",
        "mobileSuivi"
    ];

    for (var i = 0; i < buttons.length; i++) {

        var element =
            document.getElementById(buttons[i]);

        if (element) {
            element.classList.remove("active");
        }
    }


    var map = {
        dashboard: "mobileDashboard",
        cours: "mobileCours",
        formules: "mobileFormules",
        entrainer: "mobileEntrainer",
        suivi: "mobileSuivi"
    };


    if (map[tab]) {

        var active =
            document.getElementById(map[tab]);

        if (active) {
            active.classList.add("active");
        }
    }
}


function goHome() {
    showTab("dashboard");
}


function toggleTheme() {

    document.body.classList.toggle("dark");

    var dark =
        document.body.classList.contains("dark");


    var button =
        document.getElementById("themeBtn");

    if (button) {
        button.textContent =
            dark ? "☀️" : "🌙";
    }


    localStorage.setItem(
        "cesTheme",
        dark ? "dark" : "light"
    );
}


function loadTheme() {

    var saved =
        localStorage.getItem("cesTheme");

    if (saved === "dark") {

        document.body.classList.add("dark");

        var button =
            document.getElementById("themeBtn");

        if (button) {
            button.textContent = "☀️";
        }
    }
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {

    updateHeaderStats();

    renderSubjectProgress();

    renderUrgentChapters();

    renderFormulesDuJour();

    updateGlobalProgress();

    renderSuivi();
}


function countChapters() {

    var total = 0;
    var completed = 0;


    for (var matiere in MATIERES) {

        var data = MATIERES[matiere] || {};

        for (var annee in data) {

            var chapters = data[annee] || [];

            total += chapters.length;


            for (var i = 0; i < chapters.length; i++) {

                if (
                    Number(
                        USER_DATA.progress[
                            chapters[i].id
                        ] || 0
                    ) >= 100
                ) {
                    completed++;
                }
            }
        }
    }


    return {
        total: total,
        completed: completed
    };
}


function updateGlobalProgress() {

    var stats = countChapters();

    var percent =
        stats.total > 0
            ? Math.round(
                stats.completed /
                stats.total *
                100
            )
            : 0;


    var element =
        document.getElementById("globalProgress");

    if (element) {
        element.textContent = percent;
    }


    var ring =
        document.querySelector(".progress-ring");

    if (ring) {

        ring.style.background =
            "conic-gradient(" +
            "var(--primary) " +
            (percent * 3.6) +
            "deg, " +
            "var(--line) " +
            (percent * 3.6) +
            "deg)";
    }
}


function renderSubjectProgress() {

    var container =
        document.getElementById(
            "progressionMatieres"
        );

    if (!container) return;


    var html = "";

    var matieres = [
        "maths",
        "geographie"
    ];


    for (var i = 0; i < matieres.length; i++) {

        var matiere = matieres[i];

        var info = MATIERE_INFO[matiere];

        var stats = {
            total: 0,
            completed: 0
        };


        var data = MATIERES[matiere] || {};


        for (var annee in data) {

            var chapters = data[annee] || [];

            stats.total += chapters.length;

            for (
                var c = 0;
                c < chapters.length;
                c++
            ) {

                if (
                    Number(
                        USER_DATA.progress[
                            chapters[c].id
                        ] || 0
                    ) >= 100
                ) {
                    stats.completed++;
                }
            }
        }


        var percent =
            stats.total > 0
                ? Math.round(
                    stats.completed /
                    stats.total *
                    100
                )
                : 0;


        html += `
            <article
                class="subject-card ${matiere === "maths" ? "maths" : "geo"}"
                onclick="showMatiere('${matiere}')"
            >

                <div class="subject-icon">
                    ${info.icone}
                </div>

                <h3>
                    ${escapeHtml(info.nom)}
                </h3>

                <p>
                    ${escapeHtml(info.description)}
                </p>

                <div class="subject-progress">

                    <div class="subject-progress-line">
                        <span>
                            ${stats.completed} / ${stats.total} chapitres
                        </span>

                        <span>
                            ${percent}%
                        </span>
                    </div>

                    <div class="subject-progress-bar">
                        <div
                            style="width:${percent}%"
                        ></div>
                    </div>

                </div>

            </article>
        `;
    }


    container.innerHTML = html;
}


function renderUrgentChapters() {

    var container =
        document.getElementById(
            "chapitresUrgents"
        );

    if (!container) return;


    var chapters = getAllChapters(
        currentMatiere
    );


    chapters.sort(function(a, b) {

        return (
            Number(
                USER_DATA.progress[a.chapter.id] || 0
            ) -
            Number(
                USER_DATA.progress[b.chapter.id] || 0
            )
        );
    });


    var selected = chapters.slice(0, 4);

    var html = "";


    if (selected.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                Aucun chapitre disponible.
            </div>
        `;

        return;
    }


    for (var i = 0; i < selected.length; i++) {

        var item = selected[i];

        var chapter = item.chapter;

        var progress =
            Number(
                USER_DATA.progress[chapter.id] || 0
            );


        html += `
            <div class="urgent-item">

                <div class="urgent-main">

                    <div class="urgent-icon">
                        ${getChapterIcon(chapter)}
                    </div>

                    <div>

                        <div class="urgent-title">
                            ${escapeHtml(
                                getChapterTitle(chapter)
                            )}
                        </div>

                        <div class="urgent-sub">
                            ${escapeHtml(item.annee)}
                            · ${progress}% maîtrisé
                        </div>

                    </div>

                </div>

                <button
                    class="urgent-action"
                    onclick="event.stopPropagation(); showAnnee('${item.annee}', '${item.matiere}')"
                >
                    Réviser →
                </button>

            </div>
        `;
    }


    container.innerHTML = html;
}


function startRevision() {

    var chapters = getAllChapters(
        currentMatiere
    );


    if (chapters.length === 0) {

        showTab("cours");

        return;
    }


    chapters.sort(function(a, b) {

        return (
            Number(
                USER_DATA.progress[a.chapter.id] || 0
            ) -
            Number(
                USER_DATA.progress[b.chapter.id] || 0
            )
        );
    });


    var next = chapters[0];


    showTab("cours");

    showMatiere(next.matiere);

    showAnnee(
        next.annee,
        next.matiere
    );
}


/* =========================================================
   COURS
   ========================================================= */

function renderMatiereSelector() {

    var container =
        document.getElementById(
            "choixMatiere"
        );

    if (!container) return;


    document
        .getElementById("choixAnnee")
        ?.classList.add("hidden");

    document
        .getElementById("contenuAnnee")
        ?.classList.add("hidden");


    var html = "";


    var matieres = [
        "maths",
        "geographie"
    ];


    for (var i = 0; i < matieres.length; i++) {

        var m = matieres[i];

        var info = MATIERE_INFO[m];


        html += `
            <button
                type="button"
                class="subject-choice ${
                    currentMatiere === m
                        ? "active"
                        : ""
                }"
                onclick="showMatiere('${m}')"
            >

                <div class="subject-choice-icon">
                    ${info.icone}
                </div>

                <div>

                    <strong>
                        ${escapeHtml(info.nom)}
                    </strong>

                    <span>
                        ${escapeHtml(info.description)}
                    </span>

                </div>

            </button>
        `;
    }


    container.innerHTML = html;
}


function showMatiere(matiere) {

    if (!MATIERES[matiere]) {
        matiere = "maths";
    }


    currentMatiere = matiere;


    var selector =
        document.getElementById(
            "choixMatiere"
        );

    var years =
        document.getElementById(
            "choixAnnee"
        );

    var content =
        document.getElementById(
            "contenuAnnee"
        );


    if (selector) {
        selector.classList.remove("hidden");
    }

    if (years) {
        years.classList.remove("hidden");
    }

    if (content) {
        content.classList.add("hidden");
    }


    if (selector) {
        renderMatiereSelector();
    }


    var html = "";

    var annees = [
        "3e",
        "4e",
        "5e",
        "6e"
    ];


    for (var i = 0; i < annees.length; i++) {

        var annee = annees[i];

        var count =
            (MATIERES[matiere][annee] || [])
                .length;


        var progress = 0;

        var chapters =
            MATIERES[matiere][annee] || [];


        for (
            var c = 0;
            c < chapters.length;
            c++
        ) {

            if (
                Number(
                    USER_DATA.progress[
                        chapters[c].id
                    ] || 0
                ) >= 100
            ) {
                progress++;
            }
        }


        var percent =
            count > 0
                ? Math.round(
                    progress /
                    count *
                    100
                )
                : 0;


        html += `
            <button
                type="button"
                class="year-card ${
                    currentAnnee === annee
                        ? "active"
                        : ""
                }"
                onclick="showAnnee('${annee}')"
            >

                <strong>
                    ${annee}
                </strong>

                <span>
                    ${count} chapitres · ${percent}%
                </span>

            </button>
        `;
    }


    if (years) {
        years.innerHTML = html;
    }
}


function showAnnee(annee, matiereOverride) {

    if (matiereOverride) {
        currentMatiere = matiereOverride;
    }


    currentAnnee = annee;


    var years =
        document.getElementById(
            "choixAnnee"
        );

    var content =
        document.getElementById(
            "contenuAnnee"
        );


    if (years) {
        years.classList.remove("hidden");
    }

    if (!content) return;


    content.classList.remove("hidden");


    var chapters =
        (
            MATIERES[currentMatiere] &&
            MATIERES[currentMatiere][annee]
        ) || [];


    var info =
        MATIERE_INFO[currentMatiere];


    var html = `

        <div class="course-header">

            <div class="course-title">

                <span class="eyebrow">
                    ${info.icone}
                    ${escapeHtml(info.nom)}
                </span>

                <h2>
                    ${escapeHtml(annee)} année
                </h2>

                <p>
                    ${chapters.length}
                    chapitres dans ton carnet.
                </p>

            </div>

            <button
                class="soft-btn"
                onclick="showTab('entrainer'); prepareQuiz('${annee}')"
            >
                🎮 S'entraîner
            </button>

        </div>

        <div class="chapter-grid">
    `;


    if (chapters.length === 0) {

        html += `
            <div class="paper-panel">
                Aucun chapitre disponible pour cette année.
            </div>
        `;

    } else {

        for (
            var i = 0;
            i < chapters.length;
            i++
        ) {

            var chapter = chapters[i];

            var progress =
                Number(
                    USER_DATA.progress[
                        chapter.id
                    ] || 0
                );


            html += `

                <article
                    class="chapter-card"
                    onclick="openChapter('${chapter.id}', '${currentMatiere}', '${annee}')"
                >

                    <div class="chapter-card-top">

                        <span class="chapter-number">
                            CHAPITRE ${i + 1}
                        </span>

                        <span>
                            ${getChapterIcon(chapter)}
                        </span>

                    </div>

                    <h3>
                        ${escapeHtml(
                            getChapterTitle(chapter)
                        )}
                    </h3>

                    <p>
                        ${escapeHtml(
                            getChapterDescription(chapter)
                        )}
                    </p>

                    <div class="chapter-meta">

                        <span class="chapter-tag">
                            ${progress}% maîtrisé
                        </span>

                        <span class="chapter-tag">
                            ${getChapterExercises(chapter).length}
                            exercice(s)
                        </span>

                    </div>

                </article>
            `;
        }
    }


    html += `
        </div>
    `;


    content.innerHTML = html;


    content.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function openChapter(id, matiere, annee) {

    var chapters =
        (
            MATIERES[matiere] &&
            MATIERES[matiere][annee]
        ) || [];


    var chapter = null;


    for (
        var i = 0;
        i < chapters.length;
        i++
    ) {

        if (chapters[i].id === id) {

            chapter = chapters[i];

            break;
        }
    }


    if (!chapter) return;


    var content =
        document.getElementById(
            "contenuAnnee"
        );

    if (!content) return;


    var progress =
        Number(
            USER_DATA.progress[id] || 0
        );


    var html = `

        <div class="course-detail">

            <div class="course-header">

                <div class="course-title">

                    <span class="eyebrow">
                        ${getChapterIcon(chapter)}
                        ${escapeHtml(annee)}
                    </span>

                    <h2>
                        ${escapeHtml(
                            getChapterTitle(chapter)
                        )}
                    </h2>

                    <p>
                        Progression :
                        <strong>${progress}%</strong>
                    </p>

                </div>

                <button
                    class="soft-btn"
                    onclick="markChapter('${id}')"
                >
                    ✓ Marquer comme révisé
                </button>

            </div>

    `;


    if (chapter.cours) {

        html += `
            <div class="course-body">
                ${chapter.cours}
            </div>
        `;
    }


    if (
        Array.isArray(chapter.objectifs) &&
        chapter.objectifs.length
    ) {

        html += `
            <h3>
                🎯 Objectifs
            </h3>

            <ul>
        `;


        for (
            var o = 0;
            o < chapter.objectifs.length;
            o++
        ) {

            html += `
                <li>
                    ${escapeHtml(
                        chapter.objectifs[o]
                    )}
                </li>
            `;
        }


        html += `
            </ul>
        `;
    }


    if (
        Array.isArray(chapter.matieres) &&
        chapter.matieres.length
    ) {

        html += `
            <h3>
                🧩 Notions clés
            </h3>

            <div class="chapter-meta">
        `;


        for (
            var m = 0;
            m < chapter.matieres.length;
            m++
        ) {

            html += `
                <span class="chapter-tag">
                    ${escapeHtml(
                        chapter.matieres[m]
                    )}
                </span>
            `;
        }


        html += `
            </div>
        `;
    }


    if (
        getChapterExercises(chapter).length
    ) {

        html += `
            <h3>
                🎮 Exercices disponibles
            </h3>

            <p>
                ${getChapterExercises(chapter).length}
                question(s) dans ce chapitre.
            </p>

            <button
                class="primary-btn"
                style="margin-top:15px"
                onclick="launchChapterQuiz('${id}', '${matiere}', '${annee}')"
            >
                Commencer les exercices →
            </button>
        `;
    }


    html += `
        </div>
    `;


    content.innerHTML = html;


    content.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function markChapter(id) {

    USER_DATA.progress[id] = 100;

    USER_DATA.revisions[id] =
        (USER_DATA.revisions[id] || 0) + 1;


    addXP(25);

    saveUserData();

    renderDashboard();


    alert(
        "Chapitre marqué comme révisé ! +25 XP ⭐"
    );
}


/* =========================================================
   FORMULES
   ========================================================= */

function getAllFormulas() {

    var all = [];

    if (
        typeof FORMULES_DATA === "undefined"
    ) {
        return all;
    }


    for (
        var categorie in FORMULES_DATA
    ) {

        var list =
            FORMULES_DATA[categorie] || [];


        for (
            var i = 0;
            i < list.length;
            i++
        ) {

            var formula = list[i];

            formula._categorie =
                categorie;

            all.push(formula);
        }
    }


    return all;
}


function renderFormules() {

    var container =
        document.getElementById(
            "formulesList"
        );

    if (!container) return;


    var searchInput =
        document.getElementById(
            "formuleSearch"
        );


    var search =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    var formulas =
        getAllFormulas();


    var html = "";

    var total = 0;


    for (
        var i = 0;
        i < formulas.length;
        i++
    ) {

        var f = formulas[i];


        if (
            activeFormulaCategory !== "all" &&
            f._categorie !==
                activeFormulaCategory
        ) {
            continue;
        }


        var searchable =
            (
                (f.titre || "") +
                " " +
                (f.definition || "") +
                " " +
                (f.exemple || "")
            ).toLowerCase();


        if (
            search &&
            searchable.indexOf(search) === -1
        ) {
            continue;
        }


        total++;


        var favorite =
            favorisFormules.indexOf(f.id) !== -1;


        html += `

            <article
                class="formula-card"
            >

                <button
                    class="favorite-formula ${
                        favorite ? "active" : ""
                    }"
                    onclick="toggleFavoriFormule('${f.id}')"
                    title="Ajouter aux favoris"
                >
                    ${favorite ? "⭐" : "☆"}
                </button>


                <small>
                    ${escapeHtml(
                        f.categorie ||
                        f._categorie ||
                        "Formule"
                    )}
                </small>


                <h3>
                    ${f.icone || "📐"}
                    ${escapeHtml(
                        f.titre || ""
                    )}
                </h3>


                <div class="formula-expression">
                    ${f.exemple || ""}
                </div>


                <p>
                    ${f.definition || ""}
                </p>

            </article>

        `;
    }


    var count =
        document.getElementById(
            "formulesCount"
        );

    if (count) {
        count.textContent = total;
    }


    container.innerHTML =
        total > 0
            ? html
            : `
                <div class="paper-panel">
                    Aucune formule trouvée.
                </div>
            `;
}


function rechercherFormule() {
    renderFormules();
}


function filtrerFormules(
    categorie,
    button
) {

    activeFormulaCategory =
        categorie;


    var pills =
        document.querySelectorAll(
            "#filtresFormules .pill"
        );


    for (
        var i = 0;
        i < pills.length;
        i++
    ) {
        pills[i].classList.remove(
            "active"
        );
    }


    if (button) {
        button.classList.add("active");
    }


    renderFormules();
}


function toggleFavoriFormule(id) {

    var index =
        favorisFormules.indexOf(id);


    if (index !== -1) {

        favorisFormules.splice(
            index,
            1
        );

    } else {

        favorisFormules.push(id);
    }


    saveUserData();

    renderFormules();

    renderSuivi();
}


function renderFormulesDuJour() {

    var container =
        document.getElementById(
            "formulesDuJour"
        );

    if (!container) return;


    var formulas =
        getAllFormulas();


    if (formulas.length === 0) {

        container.innerHTML =
            "<div>Aucune formule disponible.</div>";

        return;
    }


    var selected =
        shuffle(formulas).slice(0, 3);


    var html = "";


    for (
        var i = 0;
        i < selected.length;
        i++
    ) {

        var f = selected[i];


        html += `
            <div class="formula-mini">

                <small>
                    ${f.icone || "📐"}
                    ${escapeHtml(
                        f.categorie ||
                        "Maths"
                    )}
                </small>

                <strong>
                    ${escapeHtml(
                        f.titre || ""
                    )}
                </strong>

                <div>
                    ${f.exemple || ""}
                </div>

            </div>
        `;
    }


    container.innerHTML = html;
}


/* =========================================================
   QUIZ
   ========================================================= */

function buildQuestionsQuiz() {

    QUESTIONS_QUIZ =
        getAllQuestions();

    return QUESTIONS_QUIZ;
}


function updateQuizChapitres() {

    var yearSelect =
        document.getElementById(
            "quizAnnee"
        );

    var chapterSelect =
        document.getElementById(
            "quizChapitre"
        );


    if (!yearSelect || !chapterSelect) {
        return;
    }


    var annee =
        yearSelect.value;


    chapterSelect.innerHTML =
        `<option value="all">
            Tous les chapitres
        </option>`;


    for (
        var matiere in MATIERES
    ) {

        var chapters =
            MATIERES[matiere][annee] || [];


        for (
            var i = 0;
            i < chapters.length;
            i++
        ) {

            chapterSelect.innerHTML += `
                <option value="${escapeHtml(
                    chapters[i].id
                )}">
                    ${getChapterIcon(chapters[i])}
                    ${escapeHtml(
                        getChapterTitle(
                            chapters[i]
                        )
                    )}
                </option>
            `;
        }
    }
}


function prepareQuiz(annee) {

    var select =
        document.getElementById(
            "quizAnnee"
        );


    if (select) {
        select.value = annee;

        updateQuizChapitres();
    }
}


function startQuiz() {

    var yearSelect =
        document.getElementById(
            "quizAnnee"
        );

    var chapterSelect =
        document.getElementById(
            "quizChapitre"
        );


    var annee =
        yearSelect
            ? yearSelect.value
            : "3e";


    var chapitre =
        chapterSelect
            ? chapterSelect.value
            : "all";


    buildQuestionsQuiz();


    var questions =
        QUESTIONS_QUIZ.filter(
            function(q) {

                if (q.annee !== annee) {
                    return false;
                }

                if (
                    chapitre !== "all" &&
                    q.chapitre !== chapitre
                ) {
                    return false;
                }

                return true;
            }
        );


    if (questions.length === 0) {

        alert(
            "Aucune question disponible pour cette sélection."
        );

        return;
    }


    currentQuiz = {
        index: 0,
        questions:
            shuffle(questions),
        answers: [],
        score: 0,
        total: Math.min(
            questions.length,
            10
        ),
        answered: false
    };


    currentQuiz.questions =
        currentQuiz.questions.slice(
            0,
            currentQuiz.total
        );


    showTab("entrainer");

    renderQuizQuestion();
}


function launchChapterQuiz(
    id,
    matiere,
    annee
) {

    var chapters =
        (
            MATIERES[matiere] &&
            MATIERES[matiere][annee]
        ) || [];


    var chapter = null;


    for (
        var i = 0;
        i < chapters.length;
        i++
    ) {

        if (chapters[i].id === id) {

            chapter = chapters[i];

            break;
        }
    }


    if (!chapter) return;


    var exercises =
        getChapterExercises(chapter);


    var questions = [];


    for (
        var e = 0;
        e < exercises.length;
        e++
    ) {

        var ex = exercises[e];

        if (!ex.question) continue;


        questions.push({

            id:
                id + "_" + e,

            matiere:
                matiere,

            annee:
                annee,

            chapitre:
                id,

            chapitreTitre:
                getChapterTitle(
                    chapter
                ),

            question:
                ex.question,

            options:
                ex.options || [],

            correct:
                typeof ex.correct === "number"
                    ? ex.correct
                    : 0,

            correction:
                ex.correction || ""
        });
    }


    if (!questions.length) {

        alert(
            "Aucun exercice disponible."
        );

        return;
    }


    currentQuiz = {

        index: 0,

        questions:
            shuffle(questions),

        answers: [],

        score: 0,

        total: questions.length,

        answered: false
    };


    showTab("entrainer");

    renderQuizQuestion();
}


function renderQuizQuestion() {

    var container =
        document.getElementById(
            "quizContent"
        );


    if (!container) return;


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


    currentQuiz.answered = false;


    var percent =
        currentQuiz.index /
        currentQuiz.total *
        100;


    var html = `

        <div class="quiz-container">

            <div class="quiz-header">

                <strong>
                    Question
                    ${currentQuiz.index + 1}
                    /
                    ${currentQuiz.total}
                </strong>

                <span>
                    ⭐ ${currentQuiz.score}
                </span>

            </div>


            <div class="quiz-progress">

                <div
                    style="width:${percent}%"
                ></div>

            </div>


            <div
                class="chapter-tag"
                style="display:inline-block;margin-top:16px"
            >
                ${escapeHtml(
                    q.annee
                )}
                ·
                ${escapeHtml(
                    q.chapitreTitre
                )}
            </div>


            <div class="quiz-question">
                ${q.question}
            </div>


            <div
                class="quiz-options"
                id="quizOptions"
            >
    `;


    for (
        var i = 0;
        i < q.options.length;
        i++
    ) {

        html += `

            <button
                type="button"
                class="quiz-option"
                onclick="answerQuiz(${i})"
            >
                <b>
                    ${String.fromCharCode(
                        65 + i
                    )}.
                </b>
                ${escapeHtml(
                    q.options[i]
                )}
            </button>

        `;
    }


    html += `

            </div>


            <div
                id="quizFeedback"
                class="quiz-feedback hidden"
            ></div>


            <div class="quiz-footer">

                <span>
                    Score :
                    ${currentQuiz.score}
                </span>

                <button
                    id="quizNextBtn"
                    class="primary-btn"
                    style="display:none"
                    onclick="nextQuizQuestion()"
                >
                    Question suivante →
                </button>

            </div>

        </div>

    `;


    container.innerHTML = html;


    container.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function answerQuiz(choice) {

    if (currentQuiz.answered) {
        return;
    }


    currentQuiz.answered = true;


    var q =
        currentQuiz.questions[
            currentQuiz.index
        ];


    var correct =
        Number(q.correct);


    var options =
        document.querySelectorAll(
            "#quizOptions .quiz-option"
        );


    for (
        var i = 0;
        i < options.length;
        i++
    ) {

        options[i].disabled = true;


        if (i === correct) {
            options[i].classList.add(
                "correct"
            );
        }


        if (
            i === choice &&
            i !== correct
        ) {
            options[i].classList.add(
                "wrong"
            );
        }
    }


    var isCorrect =
        choice === correct;


    if (isCorrect) {

        currentQuiz.score++;

        USER_DATA.streak =
            (USER_DATA.streak || 0) + 1;

        addXP(10);

    } else {

        USER_DATA.streak = 0;
    }


    currentQuiz.answers.push({
        question: q.id,
        choice: choice,
        correct: isCorrect
    });


    var feedback =
        document.getElementById(
            "quizFeedback"
        );


    if (feedback) {

        feedback.classList.remove(
            "hidden"
        );


        feedback.innerHTML =
            isCorrect
                ? `
                    <strong>
                        ✅ Bonne réponse !
                    </strong>
                    <br>
                    +10 XP
                  `
                : `
                    <strong>
                        ❌ Pas tout à fait.
                    </strong>
                    <br>
                    ${q.correction || ""}
                  `;
    }


    var next =
        document.getElementById(
            "quizNextBtn"
        );

    if (next) {
        next.style.display =
            "inline-flex";
    }


    saveUserData();

    updateHeaderStats();
}


function nextQuizQuestion() {

    currentQuiz.index++;

    renderQuizQuestion();
}


function showQuizResult() {

    var container =
        document.getElementById(
            "quizContent"
        );

    if (!container) return;


    var percent =
        currentQuiz.total > 0
            ? Math.round(
                currentQuiz.score /
                currentQuiz.total *
                100
            )
            : 0;


    var key =
        "quiz_" +
        Date.now();


    USER_DATA.quizResults[key] =
        percent;


    if (percent >= 70) {

        USER_DATA.streak =
            (USER_DATA.streak || 0) + 1;

    }


    saveUserData();


    var message =
        percent >= 80
            ? "Excellent travail ! 🏆"
            : percent >= 60
                ? "Très bien, continue ! 💪"
                : "Encore quelques révisions et tu vas progresser ! 📖";


    container.innerHTML = `

        <div class="quiz-container">

            <div style="text-align:center">

                <div
                    style="font-size:55px"
                >
                    ${
                        percent >= 80
                            ? "🏆"
                            : percent >= 60
                                ? "⭐"
                                : "📖"
                    }
                </div>

                <h2
                    style="
                        margin-top:10px;
                        font-family:'Space Grotesk',sans-serif;
                    "
                >
                    ${message}
                </h2>

                <p
                    style="
                        margin-top:8px;
                        color:var(--text-soft);
                    "
                >
                    Tu as obtenu
                    <strong>
                        ${currentQuiz.score}
                        /
                        ${currentQuiz.total}
                    </strong>
                    bonnes réponses.
                </p>

                <h1
                    style="
                        margin-top:15px;
                        font-size:42px;
                        font-family:'Space Grotesk',sans-serif;
                    "
                >
                    ${percent}%
                </h1>


                <div
                    style="
                        display:flex;
                        justify-content:center;
                        gap:8px;
                        margin-top:20px;
                        flex-wrap:wrap;
                    "
                >

                    <button
                        class="primary-btn"
                        onclick="startQuiz()"
                    >
                        🔄 Rejouer
                    </button>

                    <button
                        class="soft-btn"
                        onclick="showTab('cours')"
                    >
                        📖 Retour aux cours
                    </button>

                </div>

            </div>

        </div>

    `;


    renderSuivi();
}


/* =========================================================
   DÉFI DU JOUR
   ========================================================= */

function startDefiJour() {

    buildQuestionsQuiz();


    if (QUESTIONS_QUIZ.length === 0) {

        alert(
            "Aucune question disponible."
        );

        return;
    }


    var questions =
        shuffle(
            QUESTIONS_QUIZ
        ).slice(0, 5);


    currentQuiz = {

        index: 0,

        questions: questions,

        answers: [],

        score: 0,

        total: questions.length,

        answered: false
    };


    showTab("entrainer");

    renderQuizQuestion();
}


/* =========================================================
   JEU DES CAPITALES
   ========================================================= */

function getCapitalQuestions() {

    return [

        {
            question:
                "Quelle est la capitale de la Belgique ?",

            options: [
                "Bruxelles",
                "Anvers",
                "Liège",
                "Gand"
            ],

            correct: 0
        },

        {
            question:
                "Quelle est la capitale de la France ?",

            options: [
                "Lyon",
                "Paris",
                "Marseille",
                "Lille"
            ],

            correct: 1
        },

        {
            question:
                "Quelle est la capitale de l'Allemagne ?",

            options: [
                "Munich",
                "Hambourg",
                "Berlin",
                "Francfort"
            ],

            correct: 2
        },

        {
            question:
                "Quelle est la capitale de l'Italie ?",

            options: [
                "Milan",
                "Rome",
                "Naples",
                "Turin"
            ],

            correct: 1
        },

        {
            question:
                "Quelle est la capitale de l'Espagne ?",

            options: [
                "Madrid",
                "Barcelone",
                "Séville",
                "Valence"
            ],

            correct: 0
        },

        {
            question:
                "Quelle est la capitale du Portugal ?",

            options: [
                "Porto",
                "Lisbonne",
                "Braga",
                "Faro"
            ],

            correct: 1
        },

        {
            question:
                "Quelle est la capitale des Pays-Bas ?",

            options: [
                "Rotterdam",
                "Utrecht",
                "Amsterdam",
                "La Haye"
            ],

            correct: 2
        },

        {
            question:
                "Quelle est la capitale de l'Autriche ?",

            options: [
                "Salzbourg",
                "Vienne",
                "Graz",
                "Innsbruck"
            ],

            correct: 1
        },

        {
            question:
                "Quelle est la capitale de la Suisse ?",

            options: [
                "Genève",
                "Zurich",
                "Berne",
                "Bâle"
            ],

            correct: 2
        },

        {
            question:
                "Quelle est la capitale de la Grèce ?",

            options: [
                "Athènes",
                "Thessalonique",
                "Sparte",
                "Patras"
            ],

            correct: 0
        }

    ];
}


function startJeuCapitales() {

    currentCapitales = {

        index: 0,

        questions:
            shuffle(
                getCapitalQuestions()
            ),

        score: 0,

        total: 10
    };


    showTab("entrainer");

    renderCapitalQuestion();
}


function renderCapitalQuestion() {

    var container =
        document.getElementById(
            "quizContent"
        );


    if (!container) return;


    if (
        currentCapitales.index >=
        currentCapitales.total
    ) {

        showCapitalResult();

        return;
    }


    var q =
        currentCapitales.questions[
            currentCapitales.index
        ];


    var percent =
        currentCapitales.index /
        currentCapitales.total *
        100;


    var html = `

        <div class="quiz-container">

            <div class="quiz-header">

                <strong>
                    🌍 Capitale
                    ${currentCapitales.index + 1}
                    /
                    ${currentCapitales.total}
                </strong>

                <span>
                    ⭐ ${currentCapitales.score}
                </span>

            </div>


            <div class="quiz-progress">
                <div
                    style="width:${percent}%"
                ></div>
            </div>


            <div class="quiz-question">
                ${q.question}
            </div>


            <div
                class="quiz-options"
                id="capitalOptions"
            >
    `;


    for (
        var i = 0;
        i < q.options.length;
        i++
    ) {

        html += `
            <button
                class="quiz-option"
                onclick="answerCapital(${i})"
            >
                ${escapeHtml(
                    q.options[i]
                )}
            </button>
        `;
    }


    html += `
            </div>

            <div
                id="capitalFeedback"
                class="quiz-feedback hidden"
            ></div>

            <div class="quiz-footer">

                <span>
                    Score :
                    ${currentCapitales.score}
                </span>

                <button
                    id="capitalNext"
                    class="primary-btn"
                    style="display:none"
                    onclick="nextCapital()"
                >
                    Suivant →
                </button>

            </div>

        </div>
    `;


    container.innerHTML = html;
}


function answerCapital(choice) {

    var q =
        currentCapitales.questions[
            currentCapitales.index
        ];


    var buttons =
        document.querySelectorAll(
            "#capitalOptions .quiz-option"
        );


    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].disabled = true;


        if (
            i === q.correct
        ) {
            buttons[i].classList.add(
                "correct"
            );
        }


        if (
            i === choice &&
            choice !== q.correct
        ) {
            buttons[i].classList.add(
                "wrong"
            );
        }
    }


    var correct =
        choice === q.correct;


    if (correct) {

        currentCapitales.score++;

        USER_DATA.streak =
            (USER_DATA.streak || 0) + 1;

        addXP(5);

    } else {

        USER_DATA.streak = 0;
    }


    var feedback =
        document.getElementById(
            "capitalFeedback"
        );


    if (feedback) {

        feedback.classList.remove(
            "hidden"
        );

        feedback.innerHTML =
            correct
                ? "✅ Bonne réponse ! +5 XP"
                : "❌ Mauvaise réponse.";
    }


    var next =
        document.getElementById(
            "capitalNext"
        );

    if (next) {
        next.style.display =
            "inline-flex";
    }


    saveUserData();

    updateHeaderStats();
}


function nextCapital() {

    currentCapitales.index++;

    renderCapitalQuestion();
}


function showCapitalResult() {

    var container =
        document.getElementById(
            "quizContent"
        );


    var percent =
        Math.round(
            currentCapitales.score /
            currentCapitales.total *
            100
        );


    container.innerHTML = `

        <div class="quiz-container">

            <div style="text-align:center">

                <div style="font-size:55px">
                    🌍
                </div>

                <h2
                    style="
                        font-family:'Space Grotesk',sans-serif;
                        margin-top:8px;
                    "
                >
                    Partie terminée !
                </h2>

                <h1
                    style="
                        font-size:42px;
                        margin-top:10px;
                        font-family:'Space Grotesk',sans-serif;
                    "
                >
                    ${percent}%
                </h1>

                <p
                    style="
                        color:var(--text-soft);
                        margin-top:5px;
                    "
                >
                    ${currentCapitales.score}
                    /
                    ${currentCapitales.total}
                    bonnes réponses
                </p>

                <div
                    style="
                        display:flex;
                        justify-content:center;
                        gap:8px;
                        margin-top:20px;
                    "
                >

                    <button
                        class="primary-btn"
                        onclick="startJeuCapitales()"
                    >
                        🔄 Rejouer
                    </button>

                    <button
                        class="soft-btn"
                        onclick="showTab('entrainer')"
                    >
                        Retour
                    </button>

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   EXAMEN BLANC PAR ANNÉE
   ========================================================= */

function startExamen(niveau) {

    buildQuestionsQuiz();


    var questions =
        QUESTIONS_QUIZ.filter(
            function(q) {

                if (niveau === "complet") {
                    return true;
                }

                return q.annee === niveau;
            }
        );


    if (!questions.length) {

        alert(
            "Aucune question disponible pour cet examen."
        );

        return;
    }


    var maxQuestions =
        niveau === "3e"
            ? 20
            : niveau === "4e" ||
              niveau === "5e"
                ? 25
                : niveau === "6e"
                    ? 30
                    : 50;


    questions =
        shuffle(questions).slice(
            0,
            Math.min(
                maxQuestions,
                questions.length
            )
        );


    currentExamen = {

        index: 0,

        questions: questions,

        answers: [],

        score: 0,

        total: questions.length,

        timer: null,

        timeLeft:
            niveau === "3e"
                ? 30 * 60
                : niveau === "4e" ||
                  niveau === "5e"
                    ? 40 * 60
                    : niveau === "6e"
                        ? 50 * 60
                        : 90 * 60,

        niveau: niveau
    };


    showTab("entrainer");

    renderExamenQuestion();
}


function renderExamenQuestion() {

    var container =
        document.getElementById(
            "examenContent"
        );


    if (!container) return;


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


    var percent =
        currentExamen.index /
        currentExamen.total *
        100;


    var html = `

        <div class="quiz-container">

            <div class="quiz-header">

                <strong>
                    Examen ${escapeHtml(
                        currentExamen.niveau
                    )}
                </strong>

                <span>
                    Question
                    ${currentExamen.index + 1}
                    /
                    ${currentExamen.total}
                </span>

            </div>


            <div class="quiz-progress">

                <div
                    style="width:${percent}%"
                ></div>

            </div>


            <div class="chapter-tag"
                style="
                    display:inline-block;
                    margin-top:15px;
                "
            >
                ${escapeHtml(q.chapitreTitre)}
            </div>


            <div class="quiz-question">
                ${q.question}
            </div>


            <div
                class="quiz-options"
                id="examOptions"
            >
    `;


    for (
        var i = 0;
        i < q.options.length;
        i++
    ) {

        html += `
            <button
                class="quiz-option"
                onclick="answerExamen(${i})"
            >
                ${String.fromCharCode(
                    65 + i
                )}.
                ${escapeHtml(
                    q.options[i]
                )}
            </button>
        `;
    }


    html += `

            </div>


            <div
                id="examFeedback"
                class="quiz-feedback hidden"
            ></div>


            <div class="quiz-footer">

                <span>
                    Score :
                    ${currentExamen.score}
                </span>

                <button
                    id="examNext"
                    class="primary-btn"
                    style="display:none"
                    onclick="nextExamen()"
                >
                    Continuer →
                </button>

            </div>

        </div>
    `;


    container.innerHTML = html;
}


function answerExamen(choice) {

    var q =
        currentExamen.questions[
            currentExamen.index
        ];


    var buttons =
        document.querySelectorAll(
            "#examOptions .quiz-option"
        );


    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].disabled = true;


        if (
            i === q.correct
        ) {
            buttons[i].classList.add(
                "correct"
            );
        }


        if (
            i === choice &&
            choice !== q.correct
        ) {
            buttons[i].classList.add(
                "wrong"
            );
        }
    }


    var correct =
        choice === q.correct;


    if (correct) {

        currentExamen.score++;

        addXP(8);

        USER_DATA.streak =
            (USER_DATA.streak || 0) + 1;

    } else {

        USER_DATA.streak = 0;
    }


    currentExamen.answers.push({
        question:
            q.id,
        choice:
            choice,
        correct:
            correct
    });


    var feedback =
        document.getElementById(
            "examFeedback"
        );


    if (feedback) {

        feedback.classList.remove(
            "hidden"
        );

        feedback.innerHTML =
            correct
                ? "✅ Correct"
                : "❌ Incorrect";
    }


    var next =
        document.getElementById(
            "examNext"
        );

    if (next) {
        next.style.display =
            "inline-flex";
    }


    saveUserData();

    updateHeaderStats();
}


function nextExamen() {

    currentExamen.index++;

    renderExamenQuestion();
}


function finishExamen() {

    var container =
        document.getElementById(
            "examenContent"
        );


    var percent =
        currentExamen.total > 0
            ? Math.round(
                currentExamen.score /
                currentExamen.total *
                100
            )
            : 0;


    USER_DATA.quizResults[
        "examen_" +
        Date.now()
    ] = percent;


    saveUserData();


    container.innerHTML = `

        <div class="quiz-container">

            <div style="text-align:center">

                <div style="font-size:55px">
                    ${
                        percent >= 60
                            ? "🏆"
                            : "📚"
                    }
                </div>

                <h2
                    style="
                        font-family:'Space Grotesk',sans-serif;
                        margin-top:10px;
                    "
                >
                    Examen terminé
                </h2>

                <h1
                    style="
                        font-size:44px;
                        margin-top:12px;
                        font-family:'Space Grotesk',sans-serif;
                    "
                >
                    ${percent}%
                </h1>

                <p
                    style="
                        color:var(--text-soft);
                        margin-top:5px;
                    "
                >
                    ${currentExamen.score}
                    /
                    ${currentExamen.total}
                    bonnes réponses
                </p>


                <div
                    style="
                        margin-top:20px;
                        display:flex;
                        justify-content:center;
                        gap:8px;
                        flex-wrap:wrap;
                    "
                >

                    <button
                        class="primary-btn"
                        onclick="startExamen('${currentExamen.niveau}')"
                    >
                        🔄 Refaire
                    </button>

                    <button
                        class="soft-btn"
                        onclick="showTab('suivi')"
                    >
                        🏆 Voir ma progression
                    </button>

                </div>

            </div>

        </div>
    `;


    renderSuivi();
}


/* =========================================================
   EXAMEN BLANC CESS
   ========================================================= */

function startExamenCess() {

    buildQuestionsQuiz();


    var questions =
        shuffle(
            QUESTIONS_QUIZ
        ).slice(0, 30);


    if (!questions.length) {

        alert(
            "Données de l'examen non chargées."
        );

        return;
    }


    currentCessExam = {

        index: 0,

        questions: questions,

        score: 0,

        total: questions.length
    };


    showTab("entrainer");

    renderCessQuestion();
}


function renderCessQuestion() {

    var container =
        document.getElementById(
            "quizContent"
        );


    if (!container) return;


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


    var percent =
        currentCessExam.index /
        currentCessExam.total *
        100;


    var html = `

        <div class="quiz-container">

            <div class="quiz-header">

                <strong>
                    🔴 Examen blanc CESS
                </strong>

                <span>
                    ${currentCessExam.index + 1}
                    /
                    ${currentCessExam.total}
                </span>

            </div>


            <div class="quiz-progress">
                <div
                    style="width:${percent}%"
                ></div>
            </div>


            <div
                class="chapter-tag"
                style="display:inline-block;margin-top:15px"
            >
                ${escapeHtml(
                    q.matiere === "maths"
                        ? "Mathématiques"
                        : "Géographie"
                )}
            </div>


            <div class="quiz-question">
                ${q.question}
            </div>


            <div
                class="quiz-options"
                id="cessOptions"
            >
    `;


    for (
        var i = 0;
        i < q.options.length;
        i++
    ) {

        html += `
            <button
                class="quiz-option"
                onclick="answerCess(${i})"
            >
                ${escapeHtml(
                    q.options[i]
                )}
            </button>
        `;
    }


    html += `

            </div>


            <div
                id="cessFeedback"
                class="quiz-feedback hidden"
            ></div>


            <div class="quiz-footer">

                <span>
                    Score :
                    ${currentCessExam.score}
                </span>

                <button
                    id="cessNext"
                    class="primary-btn"
                    style="display:none"
                    onclick="nextCessQuestion()"
                >
                    Continuer →
                </button>

            </div>

        </div>
    `;


    container.innerHTML = html;
}


function answerCess(choice) {

    var q =
        currentCessExam.questions[
            currentCessExam.index
        ];


    var buttons =
        document.querySelectorAll(
            "#cessOptions .quiz-option"
        );


    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].disabled = true;


        if (
            i === q.correct
        ) {

            buttons[i].classList.add(
                "correct"
            );
        }


        if (
            i === choice &&
            choice !== q.correct
        ) {

            buttons[i].classList.add(
                "wrong"
            );
        }
    }


    var correct =
        choice === q.correct;


    if (correct) {

        currentCessExam.score++;

        addXP(10);

    }


    var feedback =
        document.getElementById(
            "cessFeedback"
        );


    if (feedback) {

        feedback.classList.remove(
            "hidden"
        );


        feedback.innerHTML =
            correct
                ? "✅ Bonne réponse !"
                : `
                    ❌ Mauvaise réponse.
                    <br>
                    ${
                        q.correction || ""
                    }
                  `;
    }


    var next =
        document.getElementById(
            "cessNext"
        );


    if (next) {
        next.style.display =
            "inline-flex";
    }


    saveUserData();
}


function nextCessQuestion() {

    currentCessExam.index++;

    renderCessQuestion();
}


function showCessResult() {

    var container =
        document.getElementById(
            "quizContent"
        );


    var percent =
        currentCessExam.total > 0
            ? Math.round(
                currentCessExam.score /
                currentCessExam.total *
                100
            )
            : 0;


    container.innerHTML = `

        <div class="quiz-container">

            <div style="text-align:center">

                <div style="font-size:60px">
                    🏆
                </div>

                <h2
                    style="
                        margin-top:10px;
                        font-family:'Space Grotesk',sans-serif;
                    "
                >
                    Examen CESS terminé
                </h2>

                <h1
                    style="
                        margin-top:10px;
                        font-size:45px;
                        font-family:'Space Grotesk',sans-serif;
                    "
                >
                    ${percent}%
                </h1>

                <p
                    style="
                        color:var(--text-soft);
                        margin-top:5px;
                    "
                >
                    ${currentCessExam.score}
                    /
                    ${currentCessExam.total}
                    bonnes réponses
                </p>


                <button
                    class="primary-btn"
                    style="margin-top:20px"
                    onclick="startExamenCess()"
                >
                    🔄 Recommencer
                </button>

            </div>

        </div>
    `;


    renderSuivi();
}


/* =========================================================
   PROGRESSION
   ========================================================= */

function renderSuivi() {

    var stats =
        countChapters();


    var percent =
        stats.total > 0
            ? Math.round(
                stats.completed /
                stats.total *
                100
            )
            : 0;


    var revisites =
        document.getElementById(
            "statsRevisites"
        );

    if (revisites) {
        revisites.textContent =
            percent + "%";
    }


    var quizTotal =
        document.getElementById(
            "statsQuizTotal"
        );

    if (quizTotal) {

        quizTotal.textContent =
            Object.keys(
                USER_DATA.quizResults || {}
            ).length;
    }


    var best = 0;


    for (
        var key in USER_DATA.quizResults
    ) {

        var value =
            Number(
                USER_DATA.quizResults[key]
            ) || 0;


        if (value > best) {
            best = value;
        }
    }


    var bestElement =
        document.getElementById(
            "statsMeilleur"
        );


    if (bestElement) {
        bestElement.textContent =
            best + "%";
    }


    var streak =
        document.getElementById(
            "statsSerie"
        );


    if (streak) {
        streak.textContent =
            USER_DATA.streak || 0;
    }


    renderBadges();

    renderFavorites();

    updateHeaderStats();
}


function getBadges() {

    var stats =
        countChapters();


    return [

        {
            id: "apprenti",

            name:
                "Apprenti",

            description:
                "3 chapitres maîtrisés",

            icon:
                "🥉",

            unlocked:
                stats.completed >= 3
        },


        {
            id: "expert",

            name:
                "Expert",

            description:
                "10 chapitres maîtrisés",

            icon:
                "🥇",

            unlocked:
                stats.completed >= 10
        },


        {
            id: "quiz",

            name:
                "Quiz Master",

            description:
                "5 quiz réalisés",

            icon:
                "🧠",

            unlocked:
                Object.keys(
                    USER_DATA.quizResults || {}
                ).length >= 5
        },


        {
            id: "streak",

            name:
                "En feu",

            description:
                "10 bonnes réponses d'affilée",

            icon:
                "🔥",

            unlocked:
                Number(
                    USER_DATA.streak || 0
                ) >= 10
        },


        {
            id: "xp",

            name:
                "Collectionneur",

            description:
                "500 XP gagnés",

            icon:
                "⭐",

            unlocked:
                Number(
                    USER_DATA.xp || 0
                ) >= 500
        },


        {
            id: "cess",

            name:
                "Objectif CESS",

            description:
                "1000 XP gagnés",

            icon:
                "🎓",

            unlocked:
                Number(
                    USER_DATA.xp || 0
                ) >= 1000
        }

    ];
}


function renderBadges() {

    var container =
        document.getElementById(
            "badgeDisplay"
        );


    if (!container) return;


    var badges =
        getBadges();


    var html = "";


    for (
        var i = 0;
        i < badges.length;
        i++
    ) {

        var b = badges[i];


        html += `

            <div
                class="badge ${
                    b.unlocked
                        ? "unlocked"
                        : ""
                }"
            >

                <div class="badge-icon">
                    ${
                        b.unlocked
                            ? b.icon
                            : "🔒"
                    }
                </div>

                <strong>
                    ${escapeHtml(b.name)}
                </strong>

                <small>
                    ${escapeHtml(
                        b.description
                    )}
                </small>

            </div>

        `;
    }


    container.innerHTML = html;
}


function renderFavorites() {

    var container =
        document.getElementById(
            "favorisList"
        );


    if (!container) return;


    if (
        favorisFormules.length === 0
    ) {

        container.innerHTML = `
            <div
                style="
                    color:var(--text-light);
                    font-size:11px;
                "
            >
                Aucune formule favorite
                pour l'instant.
                <br><br>
                ⭐ Ajoute tes formules
                préférées depuis le mémo.
            </div>
        `;

        return;
    }


    var formulas =
        getAllFormulas();


    var html = "";


    for (
        var i = 0;
        i < favorisFormules.length;
        i++
    ) {

        var id =
            favorisFormules[i];


        var formula = null;


        for (
            var f = 0;
            f < formulas.length;
            f++
        ) {

            if (
                formulas[f].id === id
            ) {

                formula =
                    formulas[f];

                break;
            }
        }


        if (!formula) continue;


        html += `

            <div class="favorite-item">

                <strong>
                    ${formula.icone || "📐"}
                    ${escapeHtml(
                        formula.titre || ""
                    )}
                </strong>

                <span>
                    ⭐ Favori
                </span>

            </div>

        `;
    }


    container.innerHTML =
        html ||
        `
            <div
                style="
                    color:var(--text-light);
                    font-size:11px;
                "
            >
                Aucun favori disponible.
            </div>
        `;
}


/* =========================================================
   INITIALISATION
   ========================================================= */

function initApp() {

    loadUserData();

    loadTheme();

    buildQuestionsQuiz();

    updateQuizChapitres();

    updateHeaderStats();

    renderDashboard();

    renderMatiereSelector();

    renderFormules();

    renderSuivi();

    showTab("dashboard");
}


/* =========================================================
   DÉMARRAGE
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initApp
    );

} else {

    initApp();
}
