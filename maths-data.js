/* =========================================================
   CARNET CESS
   APPLICATION
   Interface : Accueil → Matière → Domaine → Chapitre
   ========================================================= */

const DBKEY = "carnetCESS_interface_v4";


/* =========================================================
   ETAT
   ========================================================= */

let state;

try {

    state = JSON.parse(
        localStorage.getItem(DBKEY) || "null"
    );

} catch (error) {

    state = null;
}


if (!state) {

    state = {
        progress: {},
        results: [],
        mistakes: [],
        streak: 0,
        theme: "light"
    };
}


let selectedYear = {
    maths: "3e",
    geo: "3e"
};


let currentSubject = null;
let currentChapter = null;
let currentChapterTab = "cours";

let memoMode = "formules";

let quizState = null;
let examState = null;


/* =========================================================
   DONNEES
   ========================================================= */

const SUBJECTS = {

    maths: {
        label: "Mathématiques",
        icon: "📐",

        data: function () {

            return typeof CHAPITRES !== "undefined"
                ? CHAPITRES
                : {};

        }
    },


    geo: {
        label: "Géographie",
        icon: "🌍",

        data: function () {

            return typeof GEO_CHAPITRES !== "undefined"
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

    } catch (error) {

        console.warn(
            "Impossible de sauvegarder.",
            error
        );
    }
}


/* =========================================================
   THEME
   ========================================================= */

function applyTheme() {

    document.body.classList.toggle(
        "dark",
        state.theme === "dark"
    );

    const icon = document.getElementById("themeIcon");
    const label = document.getElementById("themeLabel");

    if (icon) {

        icon.textContent =
            state.theme === "dark"
                ? "☀️"
                : "🌙";
    }

    if (label) {

        label.textContent =
            state.theme === "dark"
                ? "Mode clair"
                : "Mode sombre";
    }
}


function toggleTheme() {

    state.theme =
        state.theme === "dark"
            ? "light"
            : "dark";

    applyTheme();
    save();
}


/* =========================================================
   NAVIGATION PRINCIPALE
   ========================================================= */

function showView(id) {

    const target =
        document.getElementById(id);

    if (!target) {

        console.warn(
            "Vue introuvable :",
            id
        );

        return;
    }


    document
        .querySelectorAll(".view")
        .forEach(function (view) {

            view.classList.remove("active");

        });


    target.classList.add("active");


    document
        .querySelectorAll(".nav-item")
        .forEach(function (button) {

            button.classList.toggle(
                "active",
                button.dataset.view === id
            );

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    switch (id) {

        case "home":
            renderHome();
            break;

        case "maths":
            renderSubject("maths");
            break;

        case "geo":
            renderSubject("geo");
            break;

        case "memo":
            renderMemo();
            break;

        case "games":
            renderQuizHome();
            break;

        case "exam":
            renderExamHome();
            break;

        case "progress":
            renderProgress();
            break;

        case "chapter":
            renderChapter();
            break;
    }
}


/* =========================================================
   CHAPITRES
   ========================================================= */

function allChaps(subject) {

    const data =
        SUBJECTS[subject].data();

    if (!data || typeof data !== "object") {
        return [];
    }


    return Object.entries(data)
        .flatMap(function (entry) {

            const year = entry[0];
            const chapters = entry[1];

            if (!Array.isArray(chapters)) {
                return [];
            }


            return chapters.map(function (chapter) {

                return {
                    ...chapter,
                    annee: year,
                    matiere: subject
                };

            });

        });
}


function findChapter(id) {

    return [
        ...allChaps("maths"),
        ...allChaps("geo")
    ].find(function (chapter) {

        return chapter.id === id;

    });
}


/* =========================================================
   PROGRESSION
   ========================================================= */

function chapterProgress(id) {

    return Number(
        state.progress[id] || 0
    );
}


function pctSubject(subject) {

    const chapters =
        allChaps(subject);

    if (!chapters.length) {
        return 0;
    }


    const total =
        chapters.reduce(
            function (sum, chapter) {

                return sum +
                    chapterProgress(chapter.id);

            },
            0
        );


    return Math.round(
        total / chapters.length
    );
}


function setChapterProgress(id, value) {

    state.progress[id] =
        Math.max(
            0,
            Math.min(
                100,
                Number(value)
            )
        );

    save();
}


/* =========================================================
   ACCUEIL
   ========================================================= */

function renderHome() {

    const maths =
        allChaps("maths");

    const geo =
        allChaps("geo");

    const total =
        maths.length + geo.length;

    const mathsPct =
        pctSubject("maths");

    const geoPct =
        pctSubject("geo");


    const stats =
        document.getElementById(
            "homeStats"
        );


    if (stats) {

        stats.innerHTML = [

            [
                "📚",
                total,
                "Chapitres"
            ],

            [
                "📐",
                mathsPct + "%",
                "Maîtrise Maths"
            ],

            [
                "🌍",
                geoPct + "%",
                "Maîtrise Géo"
            ],

            [
                "🎯",
                state.results.length,
                "Quiz réalisés"
            ]

        ].map(function (item) {

            return `
                <div class="home-stat">

                    <span class="home-stat-icon">
                        ${item[0]}
                    </span>

                    <strong class="home-stat-value">
                        ${item[1]}
                    </strong>

                    <span class="home-stat-label">
                        ${item[2]}
                    </span>

                </div>
            `;

        }).join("");

    }


    const mathBar =
        document.getElementById(
            "homeMathProgress"
        );

    const geoBar =
        document.getElementById(
            "homeGeoProgress"
        );


    if (mathBar) {
        mathBar.style.width =
            mathsPct + "%";
    }

    if (geoBar) {
        geoBar.style.width =
            geoPct + "%";
    }


    const mathText =
        document.getElementById(
            "homeMathText"
        );

    const geoText =
        document.getElementById(
            "homeGeoText"
        );


    if (mathText) {
        mathText.textContent =
            mathsPct + "% maîtrisé";
    }

    if (geoText) {
        geoText.textContent =
            geoPct + "% maîtrisé";
    }


    renderContinue();
    renderPriorities();
}


/* =========================================================
   CONTINUER
   ========================================================= */

function renderContinue() {

    const container =
        document.getElementById(
            "continueList"
        );

    if (!container) {
        return;
    }


    const chapters = [
        ...allChaps("maths"),
        ...allChaps("geo")
    ]
        .filter(function (chapter) {

            return chapterProgress(
                chapter.id
            ) > 0 &&
            chapterProgress(
                chapter.id
            ) < 100;

        })
        .sort(function (a, b) {

            return chapterProgress(a.id) -
                chapterProgress(b.id);

        })
        .slice(0, 4);


    if (!chapters.length) {

        container.innerHTML = `
            <div class="empty-state">
                Aucun chapitre en cours.<br>
                Choisis une matière pour commencer.
            </div>
        `;

        return;
    }


    container.innerHTML = `
        <div class="simple-list">

            ${chapters.map(function (chapter) {

                return `
                    <div class="simple-list-item">

                        <div class="simple-list-icon">
                            ${chapter.icone || "📘"}
                        </div>

                        <div class="simple-list-main">

                            <strong>
                                ${escapeHTML(chapter.titre)}
                            </strong>

                            <small>
                                ${chapterProgress(chapter.id)}%
                                · ${SUBJECTS[chapter.matiere].label}
                            </small>

                        </div>

                        <button
                            type="button"
                            class="simple-list-action"
                            onclick="openChapter('${chapter.id}')">

                            Reprendre →

                        </button>

                    </div>
                `;

            }).join("")}

        </div>
    `;
}


/* =========================================================
   PRIORITES
   ========================================================= */

function renderPriorities() {

    const container =
        document.getElementById(
            "priorityList"
        );

    if (!container) {
        return;
    }


    const chapters = [
        ...allChaps("maths"),
        ...allChaps("geo")
    ]
        .sort(function (a, b) {

            return chapterProgress(a.id) -
                chapterProgress(b.id);

        })
        .slice(0, 5);


    if (!chapters.length) {

        container.innerHTML = `
            <div class="empty-state">
                Aucun chapitre disponible.
            </div>
        `;

        return;
    }


    container.innerHTML = `
        <div class="simple-list">

            ${chapters.map(function (chapter) {

                const pct =
                    chapterProgress(
                        chapter.id
                    );

                return `
                    <div class="simple-list-item">

                        <div class="simple-list-icon">
                            ${chapter.icone || "📘"}
                        </div>

                        <div class="simple-list-main">

                            <strong>
                                ${escapeHTML(chapter.titre)}
                            </strong>

                            <small>
                                ${pct === 0
                                    ? "Pas encore commencé"
                                    : pct + "% maîtrisé"}
                            </small>

                        </div>

                        <button
                            type="button"
                            class="simple-list-action"
                            onclick="openChapter('${chapter.id}')">

                            Voir →

                        </button>

                    </div>
                `;

            }).join("")}

        </div>
    `;
}


/* =========================================================
   PAGE MATIERE
   ========================================================= */

function renderSubject(subject) {

    currentSubject =
        subject;

    const data =
        SUBJECTS[subject].data();

    const container =
        document.getElementById(
            subject === "maths"
                ? "mathSubjectContent"
                : "geoSubjectContent"
        );


    if (!container) {
        return;
    }


    const years =
        Object.keys(data);


    const total =
        allChaps(subject).length;


    const counter =
        document.getElementById(
            subject === "maths"
                ? "mathsTotal"
                : "geoTotal"
        );


    if (counter) {

        counter.textContent =
            total + " chapitres · " +
            pctSubject(subject) +
            "% maîtrisé";

    }


    const activeYear =
        selectedYear[subject] ||
        years[0];


    if (!years.includes(activeYear)) {
        selectedYear[subject] =
            years[0];
    }


    const chapters =
        data[selectedYear[subject]] || [];


    const yearButtons =
        years.map(function (year) {

            const active =
                year === selectedYear[subject]
                    ? "active"
                    : "";

            const count =
                Array.isArray(data[year])
                    ? data[year].length
                    : 0;


            return `
                <button
                    type="button"
                    class="year-button ${active}"
                    onclick="selectYear('${subject}', '${year}')">

                    ${year.toUpperCase()}
                    · ${count}

                </button>
            `;

        }).join("");


    const domains =
        groupByDomain(
            chapters,
            subject
        );


    container.innerHTML = `

        <div class="year-selector">
            ${yearButtons}
        </div>

        <div class="domain-grid">

            ${domains.map(function (domain) {

                return renderDomainCard(
                    domain,
                    subject
                );

            }).join("")}

        </div>
    `;


    const backButton =
        document.getElementById(
            subject === "maths"
                ? "mathBack"
                : "geoBack"
        );

    if (backButton) {
        backButton.classList.add(
            "hidden"
        );
    }
}


/* =========================================================
   ANNEE
   ========================================================= */

function selectYear(subject, year) {

    selectedYear[subject] =
        year;

    renderSubject(subject);
}


/* =========================================================
   DOMAINES
   ========================================================= */

function groupByDomain(chapters, subject) {

    const groups = {};


    chapters.forEach(function (chapter) {

        let domain;


        if (chapter.domaine) {

            domain =
                chapter.domaine;

        } else if (chapter.theme) {

            domain =
                chapter.theme;

        } else {

            domain =
                inferDomain(
                    chapter.titre,
                    subject
                );
        }


        if (!groups[domain]) {

            groups[domain] = [];

        }


        groups[domain].push(
            chapter
        );

    });


    return Object.entries(groups)
        .map(function (entry) {

            return {
                name: entry[0],
                chapters: entry[1]
            };

        });
}


function inferDomain(title, subject) {

    const t =
        String(title)
            .toLowerCase();


    if (subject === "geo") {

        if (
            t.includes("risque") ||
            t.includes("séisme") ||
            t.includes("volcan")
        ) {
            return "Risques";
        }

        if (
            t.includes("eau") ||
            t.includes("énergie") ||
            t.includes("nourrir")
        ) {
            return "Ressources";
        }

        if (
            t.includes("population") ||
            t.includes("migration") ||
            t.includes("urban")
        ) {
            return "Populations & territoires";
        }

        if (
            t.includes("mondial") ||
            t.includes("mobilité") ||
            t.includes("réseau")
        ) {
            return "Mondialisation";
        }

        return "Géographie";
    }


    if (
        t.includes("fonction") ||
        t.includes("dérivée") ||
        t.includes("limite")
    ) {
        return "Fonctions";
    }


    if (
        t.includes("polynôme") ||
        t.includes("équation") ||
        t.includes("factor") ||
        t.includes("calcul")
    ) {
        return "Algèbre";
    }


    if (
        t.includes("stat") ||
        t.includes("probabil")
    ) {
        return "Statistiques & probabilités";
    }


    if (
        t.includes("triangle") ||
        t.includes("pythagore") ||
        t.includes("thalès") ||
        t.includes("géométr") ||
        t.includes("vecteur") ||
        t.includes("trigonom")
    ) {
        return "Géométrie";
    }


    return "Autres";
}


/* =========================================================
   CARTE DOMAINE
   ========================================================= */

function renderDomainCard(domain, subject) {

    const icon =
        domainIcon(
            domain
        );


    const chapters =
        domain.chapters;


    const done =
        chapters.filter(function (chapter) {

            return chapterProgress(
                chapter.id
            ) >= 100;

        }).length;


    return `
        <article class="domain-card">

            <div class="domain-header">

                <div class="domain-icon">
                    ${icon}
                </div>

                <div class="domain-title">

                    <strong>
                        ${escapeHTML(domain.name)}
                    </strong>

                    <small>
                        ${chapters.length}
                        ${chapters.length > 1
                            ? "chapitres"
                            : "chapitre"}
                    </small>

                </div>

                <span class="domain-count">
                    ${done}/${chapters.length}
                </span>

            </div>


            <div class="chapter-list">

                ${chapters.map(function (chapter) {

                    const pct =
                        chapterProgress(
                            chapter.id
                        );


                    let status =
                        "Pas commencé";

                    let statusClass =
                        "status-new";


                    if (pct >= 100) {

                        status =
                            "✓ Maîtrisé";

                        statusClass =
                            "status-done";

                    } else if (pct > 0) {

                        status =
                            pct + "%";

                        statusClass =
                            "status-progress";
                    }


                    return `
                        <button
                            type="button"
                            class="chapter-item"
                            onclick="openChapter('${chapter.id}')">

                            <span class="chapter-icon">
                                ${chapter.icone || "📘"}
                            </span>

                            <span class="chapter-main">

                                <strong>
                                    ${escapeHTML(chapter.titre)}
                                </strong>

                                <small>
                                    ${escapeHTML(
                                        chapter.desc || ""
                                    )}
                                </small>

                            </span>

                            <span class="chapter-status ${statusClass}">
                                ${status}
                            </span>

                        </button>
                    `;

                }).join("")}

            </div>

        </article>
    `;
}


function domainIcon(domain) {

    const d =
        domain.toLowerCase();


    if (
        d.includes("algèbre") ||
        d.includes("algebre")
    ) {
        return "Σ";
    }

    if (
        d.includes("fonction")
    ) {
        return "📈";
    }

    if (
        d.includes("géométr") ||
        d.includes("geometr")
    ) {
        return "△";
    }

    if (
        d.includes("stat")
    ) {
        return "📊";
    }

    if (
        d.includes("risque")
    ) {
        return "🌋";
    }

    if (
        d.includes("ressource")
    ) {
        return "💧";
    }

    if (
        d.includes("population") ||
        d.includes("territoire")
    ) {
        return "👥";
    }

    if (
        d.includes("mondial")
    ) {
        return "🌐";
    }

    return "📚";
}


/* =========================================================
   OUVERTURE CHAPITRE
   ========================================================= */

function openChapter(id) {

    const chapter =
        findChapter(id);


    if (!chapter) {

        console.warn(
            "Chapitre introuvable :",
            id
        );

        return;
    }


    currentChapter =
        chapter;

    currentChapterTab =
        "cours";


    showView("chapter");
}


/* =========================================================
   PAGE CHAPITRE
   ========================================================= */

function renderChapter() {

    if (!currentChapter) {
        return;
    }


    const chapter =
        currentChapter;


    const pct =
        chapterProgress(
            chapter.id
        );


    const container =
        document.getElementById(
            "chapterContent"
        );


    if (!container) {
        return;
    }


    const subject =
        SUBJECTS[
            chapter.matiere
        ];


    container.innerHTML = `

        <div class="chapter-top">

            <div class="chapter-breadcrumb">

                <button
                    type="button"
                    onclick="backToSubject('${chapter.matiere}')">

                    ${subject.icon}
                    ${subject.label}

                </button>

                <span>›</span>

                <span>${chapter.annee.toUpperCase()}</span>

            </div>


            <div class="chapter-hero">

                <div>

                    <div class="chapter-title-row">

                        <div class="chapter-big-icon">
                            ${chapter.icone || "📘"}
                        </div>

                        <div class="chapter-title">

                            <h1>
                                ${escapeHTML(chapter.titre)}
                            </h1>

                            <p>
                                ${escapeHTML(
                                    chapter.desc || ""
                                )}
                            </p>

                        </div>

                    </div>

                </div>


                <div class="chapter-progress-box">

                    <strong
                        class="chapter-progress-number"
                        id="chapterProgressNumber">

                        ${pct}%

                    </strong>

                    <span class="chapter-progress-label">
                        progression
                    </span>

                </div>

            </div>


            <div class="chapter-tabs">

                <button
                    type="button"
                    class="chapter-tab ${currentChapterTab === "cours" ? "active" : ""}"
                    onclick="chapterTab('cours')">

                    📖 Cours

                </button>

                <button
                    type="button"
                    class="chapter-tab ${currentChapterTab === "retenir" ? "active" : ""}"
                    onclick="chapterTab('retenir')">

                    🧠 À retenir

                </button>

                <button
                    type="button"
                    class="chapter-tab ${currentChapterTab === "exercices" ? "active" : ""}"
                    onclick="chapterTab('exercices')">

                    ✏️ Exercices

                </button>

                <button
                    type="button"
                    class="chapter-tab ${currentChapterTab === "quiz" ? "active" : ""}"
                    onclick="chapterTab('quiz')">

                    📝 Quiz

                </button>

            </div>

        </div>


        ${renderChapterBody(chapter)}

    `;
}


/* =========================================================
   ONGLET CHAPITRE
   ========================================================= */

function chapterTab(tab) {

    currentChapterTab =
        tab;

    renderChapter();
}


/* =========================================================
   CORPS CHAPITRE
   ========================================================= */

function renderChapterBody(chapter) {

    if (
        currentChapterTab ===
        "cours"
    ) {

        return renderCourse(
            chapter
        );
    }


    if (
        currentChapterTab ===
        "retenir"
    ) {

        return renderRemember(
            chapter
        );
    }


    if (
        currentChapterTab ===
        "exercices"
    ) {

        return renderExercises(
            chapter
        );
    }


    if (
        currentChapterTab ===
        "quiz"
    ) {

        return renderChapterQuiz(
            chapter
        );
    }


    return "";
}


/* =========================================================
   COURS
   ========================================================= */

function renderCourse(chapter) {

    return `

        <div class="chapter-layout">

            <div>

                <article class="content-card course-content">

                    ${chapter.cours || `
                        <p>
                            Le cours détaillé de ce chapitre
                            sera ajouté prochainement.
                        </p>
                    `}

                </article>


                ${renderGoals(
                    chapter
                )}


                ${renderChapterFooter(
                    chapter
                )}

            </div>


            <aside class="chapter-sidebar">

                ${renderTopicSidebar(
                    chapter
                )}

            </aside>

        </div>

    `;
}


/* =========================================================
   OBJECTIFS
   ========================================================= */

function renderGoals(chapter) {

    const goals =
        Array.isArray(
            chapter.objectifs
        )
            ? chapter.objectifs
            : [];


    if (!goals.length) {
        return "";
    }


    return `

        <article class="content-card">

            <span class="eyebrow">
                Objectifs
            </span>

            <h2>
                🎯 Ce que tu dois savoir faire
            </h2>

            <div class="goal-list" style="margin-top:15px">

                ${goals.map(function (goal) {

                    return `
                        <div class="goal-item">

                            <span>✓</span>

                            <span>
                                ${escapeHTML(goal)}
                            </span>

                        </div>
                    `;

                }).join("")}

            </div>

        </article>

    `;
}


/* =========================================================
   SIDEBAR TOPICS
   ========================================================= */

function renderTopicSidebar(chapter) {

    const topics =
        Array.isArray(
            chapter.matieres
        )
            ? chapter.matieres
            : [];


    let html = "";


    if (topics.length) {

        html += `

            <div class="chapter-sidebar-card">

                <h3>
                    📌 Au programme
                </h3>

                <div class="topic-list">

                    ${topics.map(function (topic) {

                        return `
                            <div class="topic-item">
                                ${escapeHTML(topic)}
                            </div>
                        `;

                    }).join("")}

                </div>

            </div>

        `;
    }


    html += `

        <div class="chapter-sidebar-card">

            <h3>
                📊 Mon avancement
            </h3>

            <p style="
                font-size:11px;
                margin-bottom:12px;
            ">
                ${chapterProgress(chapter.id)}%
                de ce chapitre travaillé.
            </p>

            <button
                type="button"
                class="button primary wide"
                onclick="markDone('${chapter.id}')">

                ${chapterProgress(chapter.id) >= 100
                    ? "✓ Chapitre maîtrisé"
                    : "✓ Marquer comme maîtrisé"}

            </button>

        </div>

    `;


    return html;
}


/* =========================================================
   A RETENIR
   ========================================================= */

function renderRemember(chapter) {

    const topics =
        Array.isArray(
            chapter.matieres
        )
            ? chapter.matieres
            : [];


    const goals =
        Array.isArray(
            chapter.objectifs
        )
            ? chapter.objectifs
            : [];


    return `

        <div class="chapter-layout">

            <div>

                <article class="content-card">

                    <span class="eyebrow">
                        Fiche express
                    </span>

                    <h2>
                        🧠 L'essentiel à connaître
                    </h2>

                    <div class="goal-list"
                         style="margin-top:17px">

                        ${topics.map(function (topic) {

                            return `
                                <div class="goal-item">

                                    <span>•</span>

                                    <span>
                                        ${escapeHTML(topic)}
                                    </span>

                                </div>
                            `;

                        }).join("")}

                    </div>

                </article>


                <article class="content-card">

                    <span class="eyebrow">
                        Objectifs
                    </span>

                    <h2>
                        🎯 Avant de passer à la suite
                    </h2>

                    <div class="goal-list"
                         style="margin-top:17px">

                        ${goals.map(function (goal) {

                            return `
                                <div class="goal-item">

                                    <span>✓</span>

                                    <span>
                                        ${escapeHTML(goal)}
                                    </span>

                                </div>
                            `;

                        }).join("")}

                    </div>

                </article>


                ${renderChapterFooter(
                    chapter
                )}

            </div>


            <aside class="chapter-sidebar">

                <div class="chapter-sidebar-card">

                    <h3>
                        💡 Méthode
                    </h3>

                    <div class="topic-list">

                        <div class="topic-item">
                            Lis le cours.
                        </div>

                        <div class="topic-item">
                            Apprends les notions essentielles.
                        </div>

                        <div class="topic-item">
                            Fais les exercices.
                        </div>

                        <div class="topic-item">
                            Termine par le quiz.
                        </div>

                    </div>

                </div>

            </aside>

        </div>

    `;
}


/* =========================================================
   EXERCICES
   ========================================================= */

function renderExercises(chapter) {

    const exercises =
        Array.isArray(
            chapter.exercices
        )
            ? chapter.exercices
            : [];


    if (!exercises.length) {

        return `
            <div class="content-card">

                <h2>
                    ✏️ Exercices
                </h2>

                <div class="empty-state">
                    Les exercices de ce chapitre
                    seront ajoutés prochainement.
                </div>

            </div>
        `;
    }


    return `

        <div class="chapter-layout">

            <div>

                <article class="content-card">

                    <span class="eyebrow">
                        Entraînement
                    </span>

                    <h2>
                        ✏️ Exercices
                    </h2>

                    <div
                        class="exercise-list"
                        style="margin-top:17px">

                        ${exercises.map(function (
                            exercise,
                            index
                        ) {

                            return renderExercise(
                                exercise,
                                index
                            );

                        }).join("")}

                    </div>

                </article>


                ${renderChapterFooter(
                    chapter
                )}

            </div>


            <aside class="chapter-sidebar">

                <div class="chapter-sidebar-card">

                    <h3>
                        📝 Conseils
                    </h3>

                    <div class="topic-list">

                        <div class="topic-item">
                            Cherche d'abord seul.
                        </div>

                        <div class="topic-item">
                            Vérifie ensuite la correction.
                        </div>

                        <div class="topic-item">
                            Refais les questions ratées.
                        </div>

                    </div>

                </div>

            </aside>

        </div>

    `;
}


/* =========================================================
   EXERCICE
   ========================================================= */

function renderExercise(exercise, index) {

    const options =
        Array.isArray(
            exercise.options
        )
            ? exercise.options
            : [];


    return `

        <div
            class="exercise-card"
            data-exercise="${index}">

            <div class="exercise-number">
                Exercice ${index + 1}
            </div>

            <div class="exercise-question">
                ${escapeHTML(
                    exercise.question || ""
                )}
            </div>

            <div class="exercise-options">

                ${options.map(function (
                    option,
                    optionIndex
                ) {

                    return `
                        <button
                            type="button"
                            class="exercise-option"
                            onclick="answerExercise(
                                this,
                                ${index},
                                ${optionIndex}
                            )">

                            ${escapeHTML(option)}

                        </button>
                    `;

                }).join("")}

            </div>

            <div
                class="correction hidden"
                id="correction-${index}">

                <strong>
                    Correction
                </strong>

                <div style="margin-top:4px">
                    ${escapeHTML(
                        exercise.correction || ""
                    )}
                </div>

            </div>

        </div>

    `;
}


/* =========================================================
   REPONSE EXERCICE
   ========================================================= */

function answerExercise(
    button,
    exerciseIndex,
    optionIndex
) {

    if (!currentChapter) {
        return;
    }


    const exercise =
        currentChapter.exercices[
            exerciseIndex
        ];


    if (!exercise) {
        return;
    }


    const card =
        button.closest(
            ".exercise-card"
        );


    if (!card) {
        return;
    }


    card
        .querySelectorAll(
            ".exercise-option"
        )
        .forEach(function (option) {

            option.disabled = true;

        });


    if (
        Number(exercise.correct) ===
        optionIndex
    ) {

        button.classList.add(
            "correct"
        );

        setChapterProgress(
            currentChapter.id,
            Math.max(
                chapterProgress(
                    currentChapter.id
                ),
                50
            )
        );

    } else {

        button.classList.add(
            "wrong"
        );


        const correctButton =
            card.querySelectorAll(
                ".exercise-option"
            )[
                Number(exercise.correct)
            ];


        if (correctButton) {

            correctButton.classList.add(
                "correct"
            );
        }


        state.mistakes.push({
            chapter:
                currentChapter.id,

            question:
                exercise.question,

            date:
                Date.now()
        });


        save();
    }


    const correction =
        document.getElementById(
            "correction-" +
            exerciseIndex
        );


    if (correction) {

        correction.classList.remove(
            "hidden"
        );
    }
}


/* =========================================================
   FOOTER CHAPITRE
   ========================================================= */

function renderChapterFooter(chapter) {

    const done =
        chapterProgress(
            chapter.id
        ) >= 100;


    return `

        <div class="chapter-footer">

            <button
                type="button"
                class="back-button"
                onclick="backToSubject('${chapter.matiere}')">

                ← Retour aux chapitres

            </button>

            <button
                type="button"
                class="mark-button ${done ? "done" : ""}"
                onclick="markDone('${chapter.id}')">

                ${done
                    ? "✓ Chapitre maîtrisé"
                    : "Marquer comme maîtrisé"}

            </button>

        </div>

    `;
}


/* =========================================================
   MARQUER TERMINE
   ========================================================= */

function markDone(id) {

    setChapterProgress(
        id,
        100
    );


    if (
        currentChapter &&
        currentChapter.id === id
    ) {

        renderChapter();

    }


    renderHome();
}


/* =========================================================
   RETOUR MATIERE
   ========================================================= */

function backToSubject(subject) {

    showView(
        subject
    );
}


/* =========================================================
   QUIZ GENERAL
   ========================================================= */

function renderQuizHome() {

    const container =
        document.getElementById(
            "quizContent"
        );

    if (!container) {
        return;
    }


    const chapters =
        [
            ...allChaps("maths"),
            ...allChaps("geo")
        ];


    let totalQuestions = 0;


    chapters.forEach(function (chapter) {

        if (
            Array.isArray(
                chapter.exercices
            )
        ) {

            totalQuestions +=
                chapter.exercices.length;

        }

    });


    container.innerHTML = `

        <div class="quiz-start">

            <div class="quiz-start-icon">
                🎮
            </div>

            <h2>
                Quiz rapide
            </h2>

            <p>
                ${totalQuestions}
                questions disponibles
                dans tes chapitres.
            </p>

            <button
                type="button"
                class="button primary"
                style="margin-top:20px"
                onclick="startQuiz()">

                Lancer le quiz

            </button>

        </div>

    `;
}


function flattenQuestions() {

    const questions = [];


    [
        ...allChaps("maths"),
        ...allChaps("geo")
    ].forEach(function (chapter) {

        if (
            !Array.isArray(
                chapter.exercices
            )
        ) {
            return;
        }


        chapter.exercices.forEach(
            function (question) {

                questions.push({
                    ...question,
                    chapter:
                        chapter
                });

            }
        );

    });


    return questions;
}


function startQuiz() {

    const questions =
        shuffle(
            flattenQuestions()
        ).slice(0, 10);


    if (!questions.length) {
        return;
    }


    quizState = {

        questions:
            questions,

        index:
            0,

        score:
            0,

        answered:
            false

    };


    showView(
        "games"
    );


    renderQuiz();
}


/* =========================================================
   QUIZ
   ========================================================= */

function renderQuiz() {

    if (!quizState) {

        renderQuizHome();
        return;

    }


    const container =
        document.getElementById(
            "quizContent"
        );


    if (!container) {
        return;
    }


    if (
        quizState.index >=
        quizState.questions.length
    ) {

        renderQuizResult();
        return;
    }


    const q =
        quizState.questions[
            quizState.index
        ];


    const percent =
        Math.round(
            (
                quizState.index /
                quizState.questions.length
            ) * 100
        );


    container.innerHTML = `

        <div class="quiz-question-card">

            <div class="quiz-progress">

                <span
                    style="width:${percent}%">
                </span>

            </div>


            <div class="quiz-meta">

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
                ${escapeHTML(
                    q.question || ""
                )}
            </div>


            <div class="quiz-options">

                ${(q.options || [])
                    .map(function (
                        option,
                        index
                    ) {

                        return `
                            <button
                                type="button"
                                class="quiz-option"
                                onclick="answerQuiz(${index})">

                                ${escapeHTML(option)}

                            </button>
                        `;

                    }).join("")}

            </div>

        </div>

    `;
}


function answerQuiz(index) {

    if (
        !quizState ||
        quizState.answered
    ) {
        return;
    }


    quizState.answered =
        true;


    const q =
        quizState.questions[
            quizState.index
        ];


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        function (button, i) {

            button.disabled =
                true;


            if (
                i ===
                Number(q.correct)
            ) {

                button.classList.add(
                    "correct"
                );
            }

        }
    );


    if (
        index ===
        Number(q.correct)
    ) {

        quizState.score++;

    } else {

        if (buttons[index]) {

            buttons[index]
                .classList.add(
                    "wrong"
                );

        }


        state.mistakes.push({

            chapter:
                q.chapter.id,

            question:
                q.question,

            date:
                Date.now()

        });

        save();
    }


    setTimeout(
        function () {

            quizState.index++;
            quizState.answered =
                false;

            renderQuiz();

        },
        900
    );
}


/* =========================================================
   RESULTAT QUIZ
   ========================================================= */

function renderQuizResult() {

    const container =
        document.getElementById(
            "quizContent"
        );


    const total =
        quizState.questions.length;


    const score =
        quizState.score;


    const percent =
        Math.round(
            score /
            total *
            100
        );


    state.results.push({

        score:
            score,

        total:
            total,

        percent:
            percent,

        date:
            Date.now()

    });


    save();


    container.innerHTML = `

        <div class="quiz-start">

            <div class="quiz-start-icon">
                ${percent >= 70
                    ? "🎉"
                    : "💪"}
            </div>

            <h2>
                Quiz terminé !
            </h2>

            <p>
                Tu as obtenu
                <strong>
                    ${score} / ${total}
                </strong>
                soit
                <strong>
                    ${percent}%
                </strong>.
            </p>

            <div
                style="
                    margin-top:20px;
                    font-size:34px;
                    font-weight:900;
                    color:var(--primary);
                ">

                ${percent}%

            </div>

            <button
                type="button"
                class="button primary"
                style="margin-top:20px"
                onclick="startQuiz()">

                Recommencer

            </button>

        </div>

    `;


    quizState =
        null;
}


/* =========================================================
   REVISION RAPIDE
   ========================================================= */

function quickRevision() {

    showView(
        "games"
    );

    startQuiz();
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
            ".memo-tab"
        )
        .forEach(function (tab) {

            tab.classList.toggle(
                "active",
                tab.dataset.mode === mode
            );

        });


    renderMemo();
}


function renderMemo() {

    const container =
        document.getElementById(
            "memoContent"
        );


    if (!container) {
        return;
    }


    const search =
        String(
            document.getElementById(
                "memoSearch"
            )?.value || ""
        )
        .toLowerCase()
        .trim();


    if (
        memoMode ===
        "formules"
    ) {

        renderFormulesMemo(
            container,
            search
        );

    } else {

        renderVocabMemo(
            container,
            search
        );
    }
}


/* =========================================================
   FORMULES
   ========================================================= */

function renderFormulesMemo(
    container,
    search
) {

    const formulas =
        typeof FORMULES_DATA !== "undefined"
            ? FORMULES_DATA
            : [];


    let list =
        Array.isArray(formulas)
            ? formulas
            : Object.values(formulas || {});


    if (search) {

        list =
            list.filter(function (item) {

                return JSON.stringify(
                    item
                )
                    .toLowerCase()
                    .includes(search);

            });

    }


    if (!list.length) {

        container.innerHTML = `
            <div class="content-card">
                <div class="empty-state">
                    Aucune formule trouvée.
                </div>
            </div>
        `;

        return;
    }


    container.innerHTML = `

        <div class="memo-grid">

            ${list.map(function (formula) {

                const title =
                    formula.titre ||
                    formula.nom ||
                    formula.name ||
                    "Formule";


                const value =
                    formula.formule ||
                    formula.expression ||
                    formula.valeur ||
                    "";


                const description =
                    formula.desc ||
                    formula.description ||
                    "";


                return `

                    <article class="memo-card">

                        <strong>
                            ${escapeHTML(title)}
                        </strong>

                        <p>
                            ${escapeHTML(
                                value
                            )}
                        </p>

                        ${description
                            ? `
                                <p>
                                    ${escapeHTML(
                                        description
                                    )}
                                </p>
                              `
                            : ""}

                    </article>

                `;

            }).join("")}

        </div>
    `;
}


/* =========================================================
   VOCABULAIRE
   ========================================================= */

function renderVocabMemo(
    container,
    search
) {

    const vocab =
        typeof GEO_VOCAB !== "undefined"
            ? GEO_VOCAB
            : [];


    const list =
        vocab.filter(function (item) {

            if (!search) {
                return true;
            }


            return (
                String(
                    item.mot || ""
                )
                    .toLowerCase()
                    .includes(search)

                ||

                String(
                    item.def || ""
                )
                    .toLowerCase()
                    .includes(search)

                ||

                String(
                    item.theme || ""
                )
                    .toLowerCase()
                    .includes(search)
            );

        });


    if (!list.length) {

        container.innerHTML = `
            <div class="content-card">
                <div class="empty-state">
                    Aucun mot trouvé.
                </div>
            </div>
        `;

        return;
    }


    container.innerHTML = `

        <div class="memo-grid">

            ${list.map(function (item) {

                return `

                    <article class="memo-card">

                        <strong>
                            ${escapeHTML(
                                item.mot || ""
                            )}
                        </strong>

                        <p>
                            ${escapeHTML(
                                item.def || ""
                            )}
                        </p>

                        ${
                            item.theme
                                ? `
                                    <span class="memo-tag">
                                        ${escapeHTML(
                                            item.theme
                                        )}
                                    </span>
                                  `
                                : ""
                        }

                    </article>

                `;

            }).join("")}

        </div>

    `;
}


/* =========================================================
   EXAMENS
   ========================================================= */

function renderExamHome() {

    const container =
        document.getElementById(
            "examContent"
        );


    if (!container) {
        return;
    }


    const exams =
        typeof EXAMENS_CESS !== "undefined"
            ? EXAMENS_CESS
            : [];


    if (!Array.isArray(exams) ||
        !exams.length) {

        container.innerHTML = `
            <div class="content-card">
                <div class="empty-state">
                    Aucun examen disponible pour le moment.
                </div>
            </div>
        `;

        return;
    }


    container.innerHTML = `

        <div class="exam-list">

            ${exams.map(function (
                exam,
                index
            ) {

                return `

                    <article class="exam-card">

                        <div class="exam-icon">
                            📝
                        </div>

                        <h3>
                            ${escapeHTML(
                                exam.titre ||
                                exam.nom ||
                                "Examen CESS"
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                exam.desc ||
                                "Examen d'entraînement."
                            )}
                        </p>

                        <button
                            type="button"
                            class="button primary"
                            onclick="startExam(${index})">

                            Commencer

                        </button>

                    </article>

                `;

            }).join("")}

        </div>

    `;
}


/* =========================================================
   EXAMEN
   ========================================================= */

function startExam(index) {

    const exams =
        typeof EXAMENS_CESS !== "undefined"
            ? EXAMENS_CESS
            : [];


    const exam =
        exams[index];


    if (!exam) {
        return;
    }


    const questions =
        exam.questions ||
        exam.exercices ||
        [];


    examState = {

        exam:
            exam,

        questions:
            questions,

        index:
            0,

        score:
            0,

        answered:
            false

    };


    showView(
        "exam"
    );


    renderExamQuestion();
}


function renderExamQuestion() {

    const container =
        document.getElementById(
            "examContent"
        );


    if (!examState) {

        renderExamHome();
        return;

    }


    if (
        examState.index >=
        examState.questions.length
    ) {

        renderExamResult();
        return;
    }


    const question =
        examState.questions[
            examState.index
        ];


    container.innerHTML = `

        <div class="quiz-question-card">

            <div class="quiz-meta">

                <span>
                    ${escapeHTML(
                        examState.exam.titre ||
                        "Examen"
                    )}
                </span>

                <span>
                    ${examState.index + 1}
                    /
                    ${examState.questions.length}
                </span>

            </div>


            <div class="quiz-question">
                ${escapeHTML(
                    question.question || ""
                )}
            </div>


            <div class="quiz-options">

                ${(question.options || [])
                    .map(function (
                        option,
                        index
                    ) {

                        return `
                            <button
                                type="button"
                                class="quiz-option"
                                onclick="answerExam(${index})">

                                ${escapeHTML(option)}

                            </button>
                        `;

                    }).join("")}

            </div>

        </div>

    `;
}


function answerExam(index) {

    if (
        !examState ||
        examState.answered
    ) {
        return;
    }


    examState.answered =
        true;


    const question =
        examState.questions[
            examState.index
        ];


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        function (button, i) {

            button.disabled =
                true;


            if (
                i ===
                Number(question.correct)
            ) {

                button.classList.add(
                    "correct"
                );
            }

        }
    );


    if (
        index ===
        Number(question.correct)
    ) {

        examState.score++;

    } else if (buttons[index]) {

        buttons[index]
            .classList.add(
                "wrong"
            );
    }


    setTimeout(
        function () {

            examState.index++;
            examState.answered =
                false;

            renderExamQuestion();

        },
        900
    );
}


function renderExamResult() {

    const container =
        document.getElementById(
            "examContent"
        );


    const total =
        examState.questions.length;


    const score =
        examState.score;


    const percent =
        total
            ? Math.round(
                score /
                total *
                100
            )
            : 0;


    container.innerHTML = `

        <div class="quiz-start">

            <div class="quiz-start-icon">
                📝
            </div>

            <h2>
                Examen terminé
            </h2>

            <p>
                Résultat :
                <strong>
                    ${score} / ${total}
                </strong>
            </p>

            <div
                style="
                    margin-top:20px;
                    font-size:34px;
                    font-weight:900;
                    color:var(--primary);
                ">

                ${percent}%

            </div>

            <button
                type="button"
                class="button primary"
                style="margin-top:20px"
                onclick="renderExamHome()">

                Retour aux examens

            </button>

        </div>

    `;


    examState =
        null;
}


/* =========================================================
   PROGRESSION
   ========================================================= */

function renderProgress() {

    const container =
        document.getElementById(
            "progressContent"
        );


    if (!container) {
        return;
    }


    const mathsPct =
        pctSubject("maths");

    const geoPct =
        pctSubject("geo");


    const chapters = [
        ...allChaps("maths"),
        ...allChaps("geo")
    ];


    const mastered =
        chapters.filter(function (
            chapter
        ) {

            return chapterProgress(
                chapter.id
            ) >= 100;

        }).length;


    const inProgress =
        chapters.filter(function (
            chapter
        ) {

            const pct =
                chapterProgress(
                    chapter.id
                );

            return pct > 0 &&
                pct < 100;

        }).length;


    container.innerHTML = `

        <div class="progress-overview">

            <div class="progress-big-card">

                <strong>
                    ${mastered}
                </strong>

                <span>
                    Chapitres maîtrisés
                </span>

            </div>


            <div class="progress-big-card">

                <strong>
                    ${inProgress}
                </strong>

                <span>
                    Chapitres en cours
                </span>

            </div>


            <div class="progress-big-card">

                <strong>
                    ${state.results.length}
                </strong>

                <span>
                    Quiz réalisés
                </span>

            </div>

        </div>


        <div class="progress-section">

            <span class="eyebrow">
                Matières
            </span>

            <h2>
                Vue d'ensemble
            </h2>


            <div style="margin-top:15px">

                ${renderProgressRow(
                    "📐 Mathématiques",
                    mathsPct
                )}

                ${renderProgressRow(
                    "🌍 Géographie",
                    geoPct
                )}

            </div>

        </div>


        <div
            class="progress-section"
            style="margin-top:18px">

            <span class="eyebrow">
                Chapitres
            </span>

            <h2>
                Ton parcours
            </h2>

            <div style="margin-top:15px">

                ${chapters.map(function (
                    chapter
                ) {

                    return renderProgressRow(
                        chapter.titre,
                        chapterProgress(
                            chapter.id
                        ),
                        "openChapter('" +
                        chapter.id +
                        "')"
                    );

                }).join("")}

            </div>

        </div>

    `;
}


function renderProgressRow(
    name,
    percent,
    onclick
) {

    return `

        <div
            class="progress-row"
            ${onclick
                ? `onclick="${onclick}"`
                : ""}>

            <div class="progress-row-name">
                ${escapeHTML(name)}
            </div>

            <div class="progress-row-bar">

                <span
                    style="width:${percent}%">
                </span>

            </div>

            <div class="progress-row-value">
                ${percent}%
            </div>

        </div>

    `;
}


/* =========================================================
   UTILITAIRES
   ========================================================= */

function shuffle(array) {

    return [...array].sort(
        function () {

            return Math.random() - .5;

        }
    );
}


function escapeHTML(value) {

    return String(
        value ?? ""
    )
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   MODAL
   ========================================================= */

function closeModal() {

    const modal =
        document.getElementById(
            "modal"
        );


    if (modal) {

        modal.classList.add(
            "hidden"
        );
    }
}


function closeModalOnEscape(event) {

    if (
        event.key ===
        "Escape"
    ) {

        closeModal();

    }
}


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
    "keydown",
    closeModalOnEscape
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        applyTheme();

        renderHome();

    }
);
