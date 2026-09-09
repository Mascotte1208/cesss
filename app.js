aujourd’hui 13:25
index (7).html
Fichier
geo-vocab (3).js
JavaScript
geo-data (3).js
JavaScript
app (4).js
JavaScript
style (4).css
Fichier
voila maintenant a quoi ca ressemle 
Modifier

Voilà à quoi je verrais la nouvelle interface : un vrai tableau de bord de révision, avec une navigation claire, des cartes de matières, les chapitres, les exercices, le mémo, les jeux, les examens et le suivi — le tout cohérent sur ordinateur et téléphone.

Je peux aussi l’adapter à un style plus proche de ton site actuel (mêmes couleurs et même identité visuelle) si tu veux.

😎 Parfait ! On part donc sur cette direction pour la V2 : beaucoup plus propre, moderne et surtout avec des interfaces vraiment remplies et utiles.

La prochaine étape logique est de transformer cette maquette en vrai code pour ton site, en gardant tes contenus Maths + Géographie actuels.

aujourd’hui 13:43
okay 

🚀 On y va !

Je vais partir sur la V2 complète : interfaces mieux remplies, navigation cohérente, chapitres plus riches, exercices/quiz, mémos, examens, progression et version mobile — tout en conservant tes données de cours actuelles.

Je te fournirai les fichiers un par un, entièrement, prêts à copier-coller sur GitHub.

aujourd’hui 13:43
oui

Parfait. 🔥 On passe maintenant à la vraie V2.

J’ai repris la structure actuelle et surtout corrigé le gros problème que j’avais identifié : ton style.css était déjà pensé pour une interface beaucoup plus moderne, alors que index.html et app.js utilisaient encore l’ancienne structure. Les nouveaux fichiers sont donc conçus pour fonctionner ensemble.

Tu ne touches pas à tes fichiers de données. Garde :

maths-data.js
geo-data.js
geo-vocab.js

Ils contiennent toujours tes cours, exercices, vocabulaire et données de capitales.

Tu remplaces uniquement les 3 fichiers suivants, entièrement.

1️⃣ index.html
<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<meta name="theme-color" content="#101a2d">
<meta name="description" content="Carnet CESS — plateforme de révision Maths et Géographie">

<title>Carnet CESS — Révision</title>

<link
    rel="icon"
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='50' font-size='50'%3E🎓%3C/text%3E%3C/svg%3E"
>

<link rel="stylesheet" href="style.css?v=20260910">
</head>

<body>

<div class="app-shell">

    <!-- =====================================================
         SIDEBAR
         ===================================================== -->

    <aside class="sidebar">

        <button
            class="brand"
            onclick="showView('home')"
            type="button"
        >
            <span class="brand-icon">🎓</span>

            <span class="brand-text">
                <strong>Carnet CESS</strong>
                <small>Réviser · comprendre · réussir</small>
            </span>
        </button>


        <nav
            class="main-nav"
            aria-label="Navigation principale"
        >

            <button
                class="nav-item active"
                data-view="home"
                onclick="showView('home')"
                type="button"
            >
                <span>⌂</span>
                <span>Accueil</span>
            </button>

            <button
                class="nav-item"
                data-view="maths"
                onclick="showView('maths')"
                type="button"
            >
                <span>📐</span>
                <span>Mathématiques</span>
            </button>

            <button
                class="nav-item"
                data-view="geo"
                onclick="showView('geo')"
                type="button"
            >
                <span>🌍</span>
                <span>Géographie</span>
            </button>

            <button
                class="nav-item"
                data-view="memo"
                onclick="showView('memo')"
                type="button"
            >
                <span>📚</span>
                <span>Mémo</span>
            </button>

            <button
                class="nav-item"
                data-view="games"
                onclick="showView('games')"
                type="button"
            >
                <span>🎮</span>
                <span>Jeux & quiz</span>
            </button>

            <button
                class="nav-item"
                data-view="exam"
                onclick="showView('exam')"
                type="button"
            >
                <span>📝</span>
                <span>Examens</span>
            </button>

            <button
                class="nav-item"
                data-view="progress"
                onclick="showView('progress')"
                type="button"
            >
                <span>📊</span>
                <span>Ma progression</span>
            </button>

        </nav>


        <div class="sidebar-bottom">

            <div class="sidebar-tip">

                <span>💡</span>

                <div>
                    <strong>Conseil</strong>

                    <small>
                        Travaille un peu chaque jour et
                        reviens sur tes erreurs.
                    </small>
                </div>

            </div>


            <button
                id="themeButton"
                class="theme-button"
                onclick="toggleTheme()"
                type="button"
            >
                🌙
                <span>Mode sombre</span>
            </button>

        </div>

    </aside>


    <!-- =====================================================
         CONTENU PRINCIPAL
         ===================================================== -->

    <main class="main-content">


        <!-- =================================================
             ACCUEIL
             ================================================= -->

        <section
            id="home"
            class="view active"
        >

            <div class="welcome">

                <div class="welcome-main">

                    <span class="eyebrow">
                        CESS · ESPACE DE RÉVISION
                    </span>

                    <h1>
                        Ton espace de révision,
                        <br>
                        <em>enfin bien organisé.</em>
                    </h1>

                    <p>
                        Retrouve tes cours, objectifs,
                        exercices, formules, vocabulaire,
                        quiz et examens blancs dans une
                        seule interface.
                    </p>


                    <div class="welcome-actions">

                        <button
                            class="button primary"
                            onclick="showView('maths')"
                            type="button"
                        >
                            📐 Commencer les maths
                        </button>

                        <button
                            class="button secondary"
                            onclick="showView('geo')"
                            type="button"
                        >
                            🌍 Ouvrir la géographie
                        </button>

                    </div>

                </div>


                <div class="daily-card">

                    <div class="daily-icon">
                        ⚡
                    </div>

                    <span class="eyebrow">
                        Révision rapide
                    </span>

                    <h3>
                        Une petite session ?
                    </h3>

                    <p id="dailyText">
                        Prépare une série de questions
                        en quelques secondes.
                    </p>

                    <button
                        class="text-button"
                        onclick="quickRevision()"
                        type="button"
                    >
                        Lancer une session →
                    </button>

                </div>

            </div>


            <div
                id="homeStats"
                class="home-stats"
            ></div>


            <section class="home-section">

                <div class="section-heading">

                    <span class="eyebrow">
                        Tes matières
                    </span>

                    <h2>
                        Continuer à apprendre
                    </h2>

                </div>


                <div
                    id="homeSubjects"
                    class="subject-cards"
                ></div>

            </section>


            <div class="home-grid">

                <section class="panel">

                    <div class="panel-header">

                        <span class="eyebrow">
                            Priorités
                        </span>

                        <h2>
                            À revoir
                        </h2>

                    </div>

                    <div id="homePriorities"></div>

                </section>


                <section class="panel">

                    <div class="panel-header">

                        <span class="eyebrow">
                            Activité
                        </span>

                        <h2>
                            Dernières sessions
                        </h2>

                    </div>

                    <div id="homeActivity"></div>

                </section>

            </div>

        </section>



        <!-- =================================================
             MATHS
             ================================================= -->

        <section
            id="maths"
            class="view"
        >

            <div class="page-header">

                <div class="page-header-main">

                    <span class="eyebrow">
                        Matière
                    </span>

                    <h1>
                        📐 Mathématiques
                    </h1>

                    <p>
                        Choisis une année, parcours les
                        domaines et ouvre un chapitre pour
                        travailler le cours et les exercices.
                    </p>

                </div>

                <span
                    id="mathsTotal"
                    class="page-counter"
                ></span>

            </div>


            <div
                id="mathYears"
                class="year-selector"
            ></div>


            <div id="mathContent"></div>

        </section>



        <!-- =================================================
             GEOGRAPHIE
             ================================================= -->

        <section
            id="geo"
            class="view"
        >

            <div class="page-header">

                <div class="page-header-main">

                    <span class="eyebrow">
                        Matière
                    </span>

                    <h1>
                        🌍 Géographie
                    </h1>

                    <p>
                        Retrouve ton programme par année,
                        travaille les notions et entraîne-toi
                        sur les questions disponibles.
                    </p>

                </div>

                <span
                    id="geoTotal"
                    class="page-counter"
                ></span>

            </div>


            <div
                id="geoYears"
                class="year-selector"
            ></div>


            <div id="geoContent"></div>

        </section>



        <!-- =================================================
             MEMO
             ================================================= -->

        <section
            id="memo"
            class="view"
        >

            <div class="page-header">

                <div class="page-header-main">

                    <span class="eyebrow">
                        Mémo CESS
                    </span>

                    <h1>
                        📚 Formules & vocabulaire
                    </h1>

                    <p>
                        Une bibliothèque rapide pour
                        retrouver une définition, une formule
                        ou une notion importante.
                    </p>

                </div>

            </div>


            <div class="memo-tabs">

                <button
                    class="memo-tab active"
                    data-mode="formules"
                    onclick="setMemoMode('formules')"
                    type="button"
                >
                    📐 Formules
                </button>

                <button
                    class="memo-tab"
                    data-mode="vocab"
                    onclick="setMemoMode('vocab')"
                    type="button"
                >
                    🌍 Vocabulaire
                </button>

            </div>


            <div class="search-box">

                <span>⌕</span>

                <input
                    id="memoSearch"
                    type="search"
                    placeholder="Rechercher une notion, une formule, un mot…"
                    oninput="renderMemo()"
                >

            </div>


            <div class="memo-filter">

                <select
                    id="memoYear"
                    onchange="renderMemo()"
                >

                    <option value="all">
                        Toutes les années
                    </option>

                    <option value="3e">3e</option>
                    <option value="4e">4e</option>
                    <option value="5e">5e</option>
                    <option value="6e">6e</option>

                </select>

            </div>


            <div id="memoContent"></div>

        </section>



        <!-- =================================================
             JEUX
             ================================================= -->

        <section
            id="games"
            class="view"
        >

            <div class="page-header">

                <div class="page-header-main">

                    <span class="eyebrow">
                        Entraînement
                    </span>

                    <h1>
                        🎮 Jeux & quiz
                    </h1>

                    <p>
                        Des sessions courtes pour mémoriser,
                        te tester et revenir sur tes erreurs.
                    </p>

                </div>

            </div>


            <div class="panel">

                <div id="gamePanel"></div>

            </div>

        </section>



        <!-- =================================================
             EXAMENS
             ================================================= -->

        <section
            id="exam"
            class="view"
        >

            <div class="page-header">

                <div class="page-header-main">

                    <span class="eyebrow">
                        Examen blanc
                    </span>

                    <h1>
                        📝 Simule ton examen
                    </h1>

                    <p>
                        Teste tes connaissances avec une
                        série de questions et retrouve tes
                        points faibles ensuite.
                    </p>

                </div>

            </div>


            <div id="examPanel"></div>

        </section>



        <!-- =================================================
             PROGRESSION
             ================================================= -->

        <section
            id="progress"
            class="view"
        >

            <div class="page-header">

                <div class="page-header-main">

                    <span class="eyebrow">
                        Suivi
                    </span>

                    <h1>
                        📊 Ma progression
                    </h1>

                    <p>
                        Visualise les chapitres maîtrisés,
                        les sessions réalisées et les années
                        où tu dois encore progresser.
                    </p>

                </div>

            </div>


            <div id="progressContent"></div>

        </section>

    </main>



    <!-- =====================================================
         NAVIGATION MOBILE
         ===================================================== -->

    <nav
        class="mobile-nav"
        aria-label="Navigation mobile"
    >

        <button
            data-view="home"
            onclick="showView('home')"
            type="button"
        >
            <span>⌂</span>
            <small>Accueil</small>
        </button>

        <button
            data-view="maths"
            onclick="showView('maths')"
            type="button"
        >
            <span>📐</span>
            <small>Maths</small>
        </button>

        <button
            data-view="geo"
            onclick="showView('geo')"
            type="button"
        >
            <span>🌍</span>
            <small>Géo</small>
        </button>

        <button
            data-view="games"
            onclick="showView('games')"
            type="button"
        >
            <span>🎮</span>
            <small>Quiz</small>
        </button>

        <button
            data-view="progress"
            onclick="showView('progress')"
            type="button"
        >
            <span>📊</span>
            <small>Suivi</small>
        </button>

    </nav>

</div>



<!-- =========================================================
     DONNEES
     ========================================================= -->

<script src="maths-data.js?v=20260910"></script>
<script src="geo-data.js?v=20260910"></script>
<script src="geo-vocab.js?v=20260910"></script>

<!-- =========================================================
     APPLICATION
     ========================================================= -->

<script src="app.js?v=20260910"></script>

</body>
</html>
2️⃣ app.js
/* =========================================================
   CARNET CESS — V2
   Interface + navigation + progression + quiz + examens
   ========================================================= */

var CESS_DBKEY = 'carnetCESSv4';

var cessState = {
    progress: {},
    results: [],
    mistakes: [],
    activity: [],
    streak: 0,
    theme: 'light'
};

var cessSelectedYear = {
    maths: '3e',
    geo: '3e'
};

var cessMemoMode = 'formules';
var cessCurrentChapter = null;
var cessChapterTab = 'cours';
var cessQuizState = null;
var cessExamState = null;


/* =========================================================
   MATIERES
   ========================================================= */

var CESS_SUBJECTS = {

    maths: {

        label: 'Mathématiques',
        short: 'Maths',
        icon: '📐',
        accent: 'primary',

        getData: function () {

            return (
                typeof CHAPITRES !== 'undefined' &&
                CHAPITRES
            )
                ? CHAPITRES
                : {};

        }

    },

    geo: {

        label: 'Géographie',
        short: 'Géo',
        icon: '🌍',
        accent: 'green',

        getData: function () {

            return (
                typeof GEO_CHAPITRES !== 'undefined' &&
                GEO_CHAPITRES
            )
                ? GEO_CHAPITRES
                : {};

        }

    }

};


/* =========================================================
   UTILITAIRES
   ========================================================= */

function esc(value) {

    return String(
        value == null ? '' : value
    )
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

}


function shuffle(arr) {

    var copy = Array.isArray(arr)
        ? arr.slice()
        : [];

    for (
        var i = copy.length - 1;
        i > 0;
        i--
    ) {

        var j = Math.floor(
            Math.random() * (i + 1)
        );

        var tmp = copy[i];

        copy[i] = copy[j];
        copy[j] = tmp;

    }

    return copy;

}


function formatDate(timestamp) {

    if (!timestamp) {
        return '';
    }

    try {

        return new Intl.DateTimeFormat(
            'fr-BE',
            {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }
        ).format(
            new Date(timestamp)
        );

    } catch (error) {

        return '';

    }

}


/* =========================================================
   SAUVEGARDE
   ========================================================= */

function saveState() {

    try {

        localStorage.setItem(
            CESS_DBKEY,
            JSON.stringify(cessState)
        );

    } catch (error) {

        console.warn(
            'Impossible de sauvegarder.',
            error
        );

    }

}


(function loadState() {

    try {

        var raw =
            localStorage.getItem(
                CESS_DBKEY
            );

        if (!raw) {
            return;
        }

        var parsed =
            JSON.parse(raw);

        if (
            !parsed ||
            typeof parsed !== 'object'
        ) {
            return;
        }

        cessState.progress =
            parsed.progress || {};

        cessState.results =
            Array.isArray(parsed.results)
                ? parsed.results
                : [];

        cessState.mistakes =
            Array.isArray(parsed.mistakes)
                ? parsed.mistakes
                : [];

        cessState.activity =
            Array.isArray(parsed.activity)
                ? parsed.activity
                : [];

        cessState.streak =
            Number(parsed.streak || 0);

        cessState.theme =
            parsed.theme === 'dark'
                ? 'dark'
                : 'light';

    } catch (error) {

        console.warn(
            'Etat sauvegardé illisible.',
            error
        );

    }

})();


function recordActivity(
    type,
    label,
    detail
) {

    cessState.activity.unshift({

        type: type,

        label: label,

        detail: detail || '',

        date: Date.now()

    });

    cessState.activity =
        cessState.activity.slice(0, 12);

    saveState();

}


/* =========================================================
   DONNEES
   ========================================================= */

function dataFor(subject) {

    if (!CESS_SUBJECTS[subject]) {
        return {};
    }

    return CESS_SUBJECTS[
        subject
    ].getData();

}


function allChaps(subject) {

    var data =
        dataFor(subject);

    var output = [];

    Object.keys(
        data || {}
    ).forEach(function (year) {

        if (
            !Array.isArray(
                data[year]
            )
        ) {
            return;
        }

        data[year].forEach(
            function (chapter) {

                if (
                    !chapter ||
                    typeof chapter !== 'object'
                ) {
                    return;
                }

                var copy = {};

                Object.keys(
                    chapter
                ).forEach(function (key) {

                    copy[key] =
                        chapter[key];

                });

                copy.annee =
                    chapter.annee ||
                    chapter.niveau ||
                    year;

                copy.matiere =
                    subject;

                output.push(copy);

            }
        );

    });

    return output;

}


function findChapter(id) {

    var chapters =
        allChaps('maths')
            .concat(
                allChaps('geo')
            );

    for (
        var i = 0;
        i < chapters.length;
        i++
    ) {

        if (
            String(chapters[i].id) ===
            String(id)
        ) {

            return chapters[i];

        }

    }

    return null;

}


function progressOf(chapter) {

    return Math.max(
        0,
        Math.min(
            100,
            Number(
                cessState.progress[
                    chapter.id
                ] || 0
            )
        )
    );

}


function subjectStats(subject) {

    var chapters =
        allChaps(subject);

    var done =
        chapters.filter(
            function (chapter) {

                return (
                    progressOf(chapter) >=
                    100
                );

            }
        ).length;

    var started =
        chapters.filter(
            function (chapter) {

                var p =
                    progressOf(chapter);

                return (
                    p > 0 &&
                    p < 100
                );

            }
        ).length;

    var avg =
        chapters.length
            ? Math.round(
                chapters.reduce(
                    function (
                        total,
                        chapter
                    ) {

                        return (
                            total +
                            progressOf(
                                chapter
                            )
                        );

                    },
                    0
                ) / chapters.length
            )
            : 0;

    var questions =
        flattenQuestions(subject).length;

    return {

        total: chapters.length,

        done: done,

        started: started,

        avg: avg,

        questions: questions

    };

}


function yearStats(
    subject,
    year
) {

    var data =
        dataFor(subject);

    var chapters =
        Array.isArray(
            data[year]
        )
            ? data[year]
            : [];

    var done =
        chapters.filter(
            function (chapter) {

                return (
                    progressOf(chapter) >=
                    100
                );

            }
        ).length;

    var avg =
        chapters.length
            ? Math.round(
                chapters.reduce(
                    function (
                        total,
                        chapter
                    ) {

                        return (
                            total +
                            progressOf(
                                chapter
                            )
                        );

                    },
                    0
                ) / chapters.length
            )
            : 0;

    return {

        total: chapters.length,

        done: done,

        avg: avg

    };

}


function pctGlobal() {

    var chapters =
        allChaps('maths')
            .concat(
                allChaps('geo')
            );

    if (!chapters.length) {
        return 0;
    }

    return Math.round(
        chapters.reduce(
            function (
                total,
                chapter
            ) {

                return (
                    total +
                    progressOf(chapter)
                );

            },
            0
        ) / chapters.length
    );

}


/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {

    document.body.classList.toggle(
        'dark'
    );

    cessState.theme =
        document.body.classList.contains(
            'dark'
        )
            ? 'dark'
            : 'light';

    saveState();

    updateThemeButton();

}


function updateThemeButton() {

    var button =
        document.getElementById(
            'themeButton'
        );

    if (!button) {
        return;
    }

    if (
        cessState.theme === 'dark'
    ) {

        button.innerHTML =
            '☀️ <span>Mode clair</span>';

    } else {

        button.innerHTML =
            '🌙 <span>Mode sombre</span>';

    }

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(id) {

    var target =
        document.getElementById(id);

    if (!target) {
        return;
    }

    document
        .querySelectorAll('.view')
        .forEach(function (view) {

            view.classList.remove(
                'active'
            );

        });


    target.classList.add(
        'active'
    );


    document
        .querySelectorAll(
            '[data-view]'
        )
        .forEach(function (button) {

            button.classList.toggle(
                'active',
                button.getAttribute(
                    'data-view'
                ) === id
            );

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

    if (id === 'games') {
        renderGamesHome();
    }

    if (id === 'exam') {
        renderExamHome();
    }

    if (id === 'progress') {
        renderProgress();
    }


    window.scrollTo(
        0,
        0
    );

}


function setYear(
    subject,
    year
) {

    cessSelectedYear[
        subject
    ] = year;

    renderSubject(
        subject
    );

}


/* =========================================================
   ACCUEIL
   ========================================================= */

function renderHome() {

    var maths =
        subjectStats('maths');

    var geo =
        subjectStats('geo');

    var total =
        maths.total +
        geo.total;

    var done =
        maths.done +
        geo.done;

    var global =
        pctGlobal();

    var stats =
        document.getElementById(
            'homeStats'
        );

    if (stats) {

        stats.innerHTML = [

            [
                '📚',
                total,
                'Chapitres'
            ],

            [
                '🏆',
                done,
                'Maîtrisés'
            ],

            [
                '🎯',
                cessState.results.length,
                'Quiz réalisés'
            ],

            [
                '📈',
                global + '%',
                'Progression globale'
            ]

        ]
            .map(function (item) {

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

            })
            .join('');

    }


    var subjects =
        document.getElementById(
            'homeSubjects'
        );

    if (subjects) {

        subjects.innerHTML =
            renderSubjectHomeCard(
                'maths',
                maths
            ) +
            renderSubjectHomeCard(
                'geo',
                geo
            );

    }


    var priorities =
        document.getElementById(
            'homePriorities'
        );

    if (priorities) {

        var todo =
            allChaps('maths')
                .concat(
                    allChaps('geo')
                )
                .filter(
                    function (chapter) {

                        return (
                            progressOf(
                                chapter
                            ) < 100
                        );

                    }
                )
                .sort(
                    function (a, b) {

                        return (
                            progressOf(a) -
                            progressOf(b)
                        );

                    }
                )
                .slice(0, 5);


        if (!todo.length) {

            priorities.innerHTML =
                '<div class="empty-state">🎉 Tous les chapitres sont maîtrisés.</div>';

        } else {

            priorities.innerHTML =
                '<div class="simple-list">' +

                todo.map(
                    function (chapter) {

                        return `

                            <div class="simple-list-item">

                                <span class="simple-list-icon">
                                    ${chapter.icone || '📘'}
                                </span>

                                <div class="simple-list-main">

                                    <strong>
                                        ${esc(
                                            chapter.titre ||
                                            'Chapitre'
                                        )}
                                    </strong>

                                    <small>
                                        ${esc(
                                            chapter.annee
                                        )}
                                        ·
                                        ${progressOf(
                                            chapter
                                        )}%
                                        parcouru
                                    </small>

                                </div>

                                <button
                                    class="simple-list-action"
                                    onclick="openChapter('${esc(chapter.id)}')"
                                    type="button"
                                >
                                    Ouvrir →
                                </button>

                            </div>

                        `;

                    }
                ).join('') +

                '</div>';

        }

    }


    var activity =
        document.getElementById(
            'homeActivity'
        );

    if (activity) {

        var items =
            cessState.activity.slice(
                0,
                5
            );

        if (!items.length) {

            activity.innerHTML =
                '<div class="empty-state">Ton activité apparaîtra ici après tes premières révisions.</div>';

        } else {

            activity.innerHTML =
                '<div class="simple-list">' +

                items.map(
                    function (item) {

                        var icon =
                            item.type === 'quiz'
                                ? '🎯'
                                : item.type === 'chapter'
                                    ? '📖'
                                    : '📝';

                        return `

                            <div class="simple-list-item">

                                <span class="simple-list-icon">
                                    ${icon}
                                </span>

                                <div class="simple-list-main">

                                    <strong>
                                        ${esc(
                                            item.label
                                        )}
                                    </strong>

                                    <small>
                                        ${esc(
                                            item.detail
                                        )}
                                        ·
                                        ${formatDate(
                                            item.date
                                        )}
                                    </small>

                                </div>

                            </div>

                        `;

                    }
                ).join('') +

                '</div>';

        }

    }


    var daily =
        document.getElementById(
            'dailyText'
        );

    if (daily) {

        daily.textContent =
            flattenQuestions('all').length +
            ' questions sont prêtes pour une session rapide.';

    }

}


function renderSubjectHomeCard(
    subject,
    stats
) {

    var info =
        CESS_SUBJECTS[
            subject
        ];

    return `

        <article
            class="subject-card ${
                subject === 'geo'
                    ? 'geo-card'
                    : 'maths-card'
            }"
        >

            <div class="subject-card-top">

                <span class="subject-icon">
                    ${info.icon}
                </span>

                <span class="subject-arrow">
                    →
                </span>

            </div>

            <h3>
                ${info.label}
            </h3>

            <p>
                ${stats.total}
                chapitres ·
                ${stats.questions}
                questions disponibles
            </p>

            <div class="progress-line">

                <span
                    style="width:${stats.avg}%"
                ></span>

            </div>

            <div class="subject-card-footer">

                <span>
                    ${stats.avg}% maîtrisé
                </span>

                <button
                    onclick="showView('${subject}')"
                    type="button"
                >
                    Voir les cours →
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   MATIERE
   ========================================================= */

function renderSubject(
    subject
) {

    var data =
        dataFor(subject);

    var info =
        CESS_SUBJECTS[
            subject
        ];

    var years = [
        '3e',
        '4e',
        '5e',
        '6e'
    ];

    var total =
        document.getElementById(
            subject === 'maths'
                ? 'mathsTotal'
                : 'geoTotal'
        );

    var yearsBox =
        document.getElementById(
            subject === 'maths'
                ? 'mathYears'
                : 'geoYears'
        );

    var content =
        document.getElementById(
            subject === 'maths'
                ? 'mathContent'
                : 'geoContent'
        );


    if (
        !yearsBox ||
        !content
    ) {
        return;
    }


    if (total) {

        total.textContent =
            allChaps(subject).length +
            ' chapitres · ' +
            subjectStats(subject).avg +
            '% maîtrisé';

    }


    yearsBox.innerHTML =
        years.map(
            function (year) {

                var stats =
                    yearStats(
                        subject,
                        year
                    );

                var active =
                    cessSelectedYear[
                        subject
                    ] === year
                        ? 'active'
                        : '';

                return `

                    <button
                        class="year-button ${active}"
                        onclick="setYear('${subject}','${year}')"
                        type="button"
                    >

                        <strong>
                            ${year}
                        </strong>

                        <small>
                            ${stats.total}
                            chapitres ·
                            ${stats.avg}%
                        </small>

                    </button>

                `;

            }
        ).join('');


    var selected =
        cessSelectedYear[
            subject
        ];


    var chapters =
        Array.isArray(
            data[selected]
        )
            ? data[selected]
            : [];


    var stats =
        yearStats(
            subject,
            selected
        );


    if (!chapters.length) {

        content.innerHTML = `

            <div class="content-card">

                <div class="empty-state">
                    Aucun chapitre disponible
                    pour ${selected}.
                </div>

            </div>

        `;

        return;

    }


    var groups = {};


    chapters.forEach(
        function (chapter) {

            var key =
                chapter.domaine ||
                chapter.domain ||
                chapter.categorie ||
                chapter.theme ||
                'Programme';

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(
                chapter
            );

        }
    );


    var keys =
        Object.keys(groups);


    var domainHTML =
        keys.length > 1

            ? `

                <div class="domain-grid">

                    ${keys.map(
                        function (key) {

                            var list =
                                groups[key];

                            var average =
                                Math.round(
                                    list.reduce(
                                        function (
                                            total,
                                            chapter
                                        ) {

                                            return (
                                                total +
                                                progressOf(
                                                    chapter
                                                )
                                            );

                                        },
                                        0
                                    ) /
                                    list.length
                                );

                            return `

                                <section class="domain-card">

                                    <div class="domain-header">

                                        <span class="domain-icon">
                                            ${
                                                list[0].icone ||
                                                info.icon
                                            }
                                        </span>

                                        <div class="domain-title">

                                            <strong>
                                                ${esc(key)}
                                            </strong>

                                            <small>
                                                ${list.length}
                                                chapitre${
                                                    list.length > 1
                                                        ? 's'
                                                        : ''
                                                }
                                            </small>

                                        </div>

                                        <span class="domain-count">
                                            ${average}%
                                        </span>

                                    </div>

                                    <div class="chapter-list">

                                        ${
                                            list
                                                .map(
                                                    renderChapterItem
                                                )
                                                .join('')
                                        }

                                    </div>

                                </section>

                            `;

                        }
                    ).join('')}

                </div>

            `

            : `

                <div class="content-card">

                    <div class="chapter-list">

                        ${
                            chapters
                                .map(
                                    renderChapterItem
                                )
                                .join('')
                        }

                    </div>

                </div>

            `;


    content.innerHTML = `

        <div class="year-summary">

            <div>

                <strong>
                    ${selected}
                </strong>

                <span>
                    ${stats.total}
                    chapitres
                </span>

            </div>

            <div>

                <strong>
                    ${stats.done}/${stats.total}
                </strong>

                <span>
                    maîtrisés
                </span>

            </div>

            <div>

                <strong>
                    ${stats.avg}%
                </strong>

                <span>
                    progression
                </span>

            </div>

        </div>

        ${domainHTML}

    `;

}


function renderChapterItem(
    chapter
) {

    var p =
        progressOf(chapter);

    var status;


    if (p >= 100) {

        status =
            '<span class="chapter-status status-done">✓ Maîtrisé</span>';

    } else if (p > 0) {

        status =
            '<span class="chapter-status status-progress">' +
            p +
            '%</span>';

    } else {

        status =
            '<span class="chapter-status status-new">Nouveau</span>';

    }


    return `

        <button
            class="chapter-item"
            onclick="openChapter('${esc(chapter.id)}')"
            type="button"
        >

            <span class="chapter-icon">
                ${chapter.icone || '📘'}
            </span>

            <span class="chapter-main">

                <strong>
                    ${esc(
                        chapter.titre ||
                        'Chapitre'
                    )}
                </strong>

                <small>
                    ${esc(
                        chapter.desc ||
                        'Cours et exercices'
                    )}
                </small>

            </span>

            ${status}

            <span>
                →
            </span>

        </button>

    `;

}


/* =========================================================
   CHAPITRE
   ========================================================= */

function openChapter(id) {

    var chapter =
        findChapter(id);

    if (!chapter) {
        return;
    }

    cessCurrentChapter =
        chapter;

    cessChapterTab =
        'cours';

    renderChapterModal();

}


function closeChapter() {

    var modal =
        document.getElementById(
            'chapterModal'
        );

    if (modal) {
        modal.remove();
    }

    cessCurrentChapter =
        null;

}


function chapterTab(tab) {

    cessChapterTab =
        tab;

    renderChapterModal();

}


function renderChapterModal() {

    if (!cessCurrentChapter) {
        return;
    }


    var chapter =
        cessCurrentChapter;

    var p =
        progressOf(chapter);

    var info =
        CESS_SUBJECTS[
            chapter.matiere
        ];


    var old =
        document.getElementById(
            'chapterModal'
        );

    if (old) {
        old.remove();
    }


    var modal =
        document.createElement(
            'div'
        );

    modal.id =
        'chapterModal';

    modal.className =
        'modal';


    var objectives =
        Array.isArray(
            chapter.objectifs
        )
            ? chapter.objectifs
            : [];


    var matieres =
        Array.isArray(
            chapter.matieres
        )
            ? chapter.matieres
            : [];


    var exercises =
        Array.isArray(
            chapter.exercices
        )
            ? chapter.exercices
            : [];


    var topics =
        matieres.length
            ? matieres
            : objectives;


    var body = '';


    if (
        cessChapterTab ===
        'cours'
    ) {

        body = `

            <div class="chapter-layout">

                <div>

                    <article
                        class="content-card course-content"
                    >

                        <h3>
                            📖 Cours
                        </h3>

                        ${
                            chapter.cours ||
                            '<p>Le cours détaillé n’est pas renseigné dans les données de ce chapitre.</p>'
                        }

                    </article>

                </div>

                ${renderChapterSidebar(
                    chapter,
                    objectives,
                    topics
                )}

            </div>

        `;

    } else if (
        cessChapterTab ===
        'retenir'
    ) {

        body = `

            <div class="chapter-layout">

                <div>

                    <article class="content-card">

                        <div class="section-heading">

                            <span class="eyebrow">
                                L’essentiel
                            </span>

                            <h2>
                                À retenir
                            </h2>

                        </div>

                        <div class="goal-list">

                            ${
                                objectives.length

                                    ? objectives.map(
                                        function (item) {

                                            return `

                                                <div class="goal-item">

                                                    <span>
                                                        ✓
                                                    </span>

                                                    <span>
                                                        ${esc(item)}
                                                    </span>

                                                </div>

                                            `;

                                        }
                                    ).join('')

                                    : `
                                        <div class="empty-state">
                                            Aucun objectif renseigné.
                                        </div>
                                    `
                            }

                        </div>

                    </article>


                    ${
                        matieres.length

                            ? `

                                <article class="content-card">

                                    <div class="section-heading">

                                        <span class="eyebrow">
                                            Notions
                                        </span>

                                        <h2>
                                            Mots-clés
                                        </h2>

                                    </div>

                                    <div class="topic-list">

                                        ${
                                            matieres.map(
                                                function (item) {

                                                    return `
                                                        <div class="topic-item">
                                                            ${esc(item)}
                                                        </div>
                                                    `;

                                                }
                                            ).join('')
                                        }

                                    </div>

                                </article>

                            `

                            : ''
                    }

                </div>

                ${renderChapterSidebar(
                    chapter,
                    objectives,
                    topics
                )}

            </div>

        `;

    } else {

        body = `

            <div class="chapter-layout">

                <div>

                    <article class="content-card">

                        <div class="section-heading">

                            <span class="eyebrow">
                                Entraînement
                            </span>

                            <h2>
                                Exercices du chapitre
                            </h2>

                        </div>

                        ${renderExercises(
                            exercises
                        )}

                    </article>

                </div>

                ${renderChapterSidebar(
                    chapter,
                    objectives,
                    topics
                )}

            </div>

        `;

    }


    modal.innerHTML = `

        <div class="modal-box chapter-modal-box">

            <button
                class="modal-close"
                onclick="closeChapter()"
                aria-label="Fermer"
                type="button"
            >
                ×
            </button>


            <div class="chapter-top">

                <div class="chapter-breadcrumb">

                    <button
                        onclick="closeChapter()"
                        type="button"
                    >
                        ← Retour
                    </button>

                    <span>›</span>

                    <span>
                        ${info.icon}
                        ${info.short}
                    </span>

                    <span>›</span>

                    <span>
                        ${esc(
                            chapter.annee
                        )}
                    </span>

                </div>


                <div class="chapter-hero">

                    <div>

                        <div class="chapter-title-row">

                            <span class="chapter-big-icon">
                                ${
                                    chapter.icone ||
                                    info.icon
                                }
                            </span>

                            <div class="chapter-title">

                                <span class="eyebrow">
                                    ${info.label}
                                    ·
                                    ${esc(
                                        chapter.annee
                                    )}
                                </span>

                                <h1>
                                    ${esc(
                                        chapter.titre ||
                                        'Chapitre'
                                    )}
                                </h1>

                                <p>
                                    ${esc(
                                        chapter.desc ||
                                        ''
                                    )}
                                </p>

                            </div>

                        </div>

                    </div>


                    <div class="chapter-progress-box">

                        <span class="chapter-progress-number">
                            ${p}%
                        </span>

                        <span class="chapter-progress-label">
                            progression
                        </span>

                        <div class="progress-line">

                            <span
                                style="width:${p}%"
                            ></span>

                        </div>

                    </div>

                </div>


                <div class="chapter-tabs">

                    <button
                        class="chapter-tab ${
                            cessChapterTab ===
                            'cours'
                                ? 'active'
                                : ''
                        }"
                        onclick="chapterTab('cours')"
                        type="button"
                    >
                        📖 Cours
                    </button>

                    <button
                        class="chapter-tab ${
                            cessChapterTab ===
                            'retenir'
                                ? 'active'
                                : ''
                        }"
                        onclick="chapterTab('retenir')"
                        type="button"
                    >
                        ⭐ À retenir
                    </button>

                    <button
                        class="chapter-tab ${
                            cessChapterTab ===
                            'exercices'
                                ? 'active'
                                : ''
                        }"
                        onclick="chapterTab('exercices')"
                        type="button"
                    >
                        🎯 Exercices
                        (${exercises.length})
                    </button>

                </div>

            </div>


            ${body}


            <div class="chapter-footer">

                <span>

                    ${
                        p >= 100

                            ? '✓ Chapitre maîtrisé'

                            : 'Continue à t’entraîner pour le maîtriser.'
                    }

                </span>


                <div class="footer-actions">

                    <button
                        class="button secondary"
                        onclick="closeChapter()"
                        type="button"
                    >
                        Fermer
                    </button>

                    <button
                        class="button primary"
                        onclick="markDone('${esc(chapter.id)}')"
                        type="button"
                    >
                        ${
                            p >= 100
                                ? '✓ Maîtrisé'
                                : '✓ Marquer maîtrisé'
                        }
                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    modal.addEventListener(
        'click',
        function (event) {

            if (
                event.target ===
                modal
            ) {

                closeChapter();

            }

        }
    );

}


function renderChapterSidebar(
    chapter,
    objectives,
    topics
) {

    return `

        <aside class="chapter-sidebar">

            <div class="chapter-sidebar-card">

                <h3>
                    🎯 Objectifs
                </h3>

                <div class="goal-list">

                    ${
                        objectives.length

                            ? objectives
                                .slice(0, 5)
                                .map(
                                    function (item) {

                                        return `

                                            <div class="goal-item">

                                                <span>
                                                    ✓
                                                </span>

                                                <span>
                                                    ${esc(item)}
                                                </span>

                                            </div>

                                        `;

                                    }
                                )
                                .join('')

                            : `
                                <div class="empty-state">
                                    Aucun objectif.
                                </div>
                            `
                    }

                </div>

            </div>


            ${
                topics.length

                    ? `

                        <div class="chapter-sidebar-card">

                            <h3>
                                📌 À connaître
                            </h3>

                            <div class="topic-list">

                                ${
                                    topics
                                        .slice(0, 8)
                                        .map(
                                            function (item) {

                                                return `
                                                    <div class="topic-item">
                                                        ${esc(item)}
                                                    </div>
                                                `;

                                            }
                                        )
                                        .join('')
                                }

                            </div>

                        </div>

                    `

                    : ''
            }

        </aside>

    `;

}


/* =========================================================
   EXERCICES
   ========================================================= */

function renderExercises(
    exercises
) {

    if (!exercises.length) {

        return `

            <div class="empty-state">
                Aucun exercice à choix multiple
                n’est renseigné pour ce chapitre.
            </div>

        `;

    }


    return `

        <div class="exercise-list">

            ${
                exercises.map(
                    function (
                        question,
                        index
                    ) {

                        var options =
                            Array.isArray(
                                question.options
                            )
                                ? question.options
                                : [];


                        if (!options.length) {

                            return `

                                <div class="exercise-card">

                                    <span class="exercise-number">
                                        Exercice ${index + 1}
                                    </span>

                                    <div class="exercise-question">
                                        ${esc(
                                            question.question ||
                                            ''
                                        )}
                                    </div>

                                    <div class="correction">
                                        ${esc(
                                            question.correction ||
                                            'Voir la correction du sujet.'
                                        )}
                                    </div>

                                </div>

                            `;

                        }


                        return `

                            <div
                                class="exercise-card"
                                data-exercise="${index}"
                            >

                                <span class="exercise-number">
                                    Exercice ${index + 1}
                                </span>

                                <div class="exercise-question">
                                    ${esc(
                                        question.question ||
                                        ''
                                    )}
                                </div>


                                <div class="exercise-options">

                                    ${
                                        options.map(
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
                                                                ${index},
                                                                ${optionIndex},
                                                                ${Number(
                                                                    question.correct ||
                                                                    0
                                                                )}
                                                            )
                                                        "
                                                        type="button"
                                                    >
                                                        ${esc(option)}
                                                    </button>

                                                `;

                                            }
                                        ).join('')
                                    }

                                </div>


                                <div
                                    class="correction hidden"
                                    id="corr-${index}"
                                >
                                    💡
                                    ${esc(
                                        question.correction ||
                                        ''
                                    )}
                                </div>

                            </div>

                        `;

                    }
                ).join('')
            }

        </div>

    `;

}


function answerChapterExercise(
    button,
    qIndex,
    choice,
    correct
) {

    var card =
        button.closest(
            '.exercise-card'
        );

    if (!card) {
        return;
    }

    if (
        card.getAttribute(
            'data-answered'
        ) === '1'
    ) {
        return;
    }


    card.setAttribute(
        'data-answered',
        '1'
    );


    var buttons =
        card.querySelectorAll(
            '.exercise-option'
        );


    buttons.forEach(
        function (
            current,
            index
        ) {

            current.disabled =
                true;

            if (
                index ===
                correct
            ) {

                current.classList.add(
                    'correct'
                );

            }

        }
    );


    if (
        choice !==
        correct
    ) {

        button.classList.add(
            'wrong'
        );

    }


    var correction =
        card.querySelector(
            '.correction'
        );

    if (correction) {

        correction.classList.remove(
            'hidden'
        );

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


    cessState.progress[id] =
        100;


    recordActivity(
        'chapter',
        chapter.titre ||
            'Chapitre',
        'Chapitre marqué comme maîtrisé'
    );


    saveState();


    if (cessCurrentChapter) {

        renderChapterModal();

    }


    renderHome();

    renderSubject(
        chapter.matiere
    );

}


/* =========================================================
   QUESTIONS
   ========================================================= */

function flattenQuestions(
    filter
) {

    var chapters;


    if (
        filter === 'maths' ||
        filter === 'geo'
    ) {

        chapters =
            allChaps(filter);

    } else {

        chapters =
            allChaps('maths')
                .concat(
                    allChaps('geo')
                );

    }


    var output = [];


    chapters.forEach(
        function (chapter) {

            if (
                !Array.isArray(
                    chapter.exercices
                )
            ) {
                return;
            }


            chapter.exercices.forEach(
                function (
                    question,
                    index
                ) {

                    if (
                        !question ||
                        !Array.isArray(
                            question.options
                        ) ||
                        !question.options.length
                    ) {
                        return;
                    }


                    output.push({

                        id:
                            String(
                                chapter.id
                            ) +
                            '_' +
                            index,

                        question:
                            question.question ||
                            '',

                        options:
                            question.options,

                        correct:
                            Number(
                                question.correct ||
                                0
                            ),

                        correction:
                            question.correction ||
                            '',

                        chapter:
                            chapter.titre ||
                            '',

                        annee:
                            chapter.annee ||
                            '',

                        matiere:
                            chapter.matiere,

                        chapterId:
                            chapter.id

                    });

                }
            );

        }
    );


    if (
        filter ===
        'mistakes'
    ) {

        output =
            output.filter(
                function (question) {

                    return (
                        cessState.mistakes.indexOf(
                            question.id
                        ) !== -1
                    );

                }
            );

    }


    return output;

}


/* =========================================================
   VRAI / FAUX
   ========================================================= */

function trueFalseQuestions() {

    return [

        [
            'Deux triangles isométriques ont leurs côtés homologues de même longueur.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '3e'
        ],

        [
            'Des triangles semblables ont toujours leurs côtés homologues égaux.',
            'Vrai',
            'Faux',
            1,
            'maths',
            '3e'
        ],

        [
            'Le théorème de Pythagore s’utilise dans un triangle rectangle.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '3e'
        ],

        [
            'sin(α) = opposé / hypoténuse dans un triangle rectangle.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '3e'
        ],

        [
            'La fonction affine s’écrit f(x)=mx+p.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '4e'
        ],

        [
            'La médiane est une mesure de tendance centrale.',
            'Vrai',
            'Faux',
            0,
            'maths',
            '4e'
        ],

        [
            'Un aléa est un phénomène dangereux potentiel.',
            'Vrai',
            'Faux',
            0,
            'geo',
            '3e'
        ],

        [
            'La densité de population est le nombre d’habitants par km².',
            'Vrai',
            'Faux',
            0,
            'geo',
            '4e'
        ],

        [
            'Les énergies fossiles sont renouvelables.',
            'Vrai',
            'Faux',
            1,
            'geo',
            '5e'
        ],

        [
            'Un conflit d’usage peut apparaître lorsque plusieurs acteurs veulent utiliser le même espace.',
            'Vrai',
            'Faux',
            0,
            'geo',
            '6e'
        ]

    ].map(
        function (
            item,
            index
        ) {

            return {

                id:
                    'tf_' +
                    index,

                question:
                    item[0],

                options: [
                    item[1],
                    item[2]
                ],

                correct:
                    item[3],

                matiere:
                    item[4],

                annee:
                    item[5],

                chapter:
                    'Vrai / Faux'

            };

        }
    );

}


/* =========================================================
   JEUX
   ========================================================= */

function startQuiz(
    mode
) {

    var questions;


    if (
        mode ===
        'truefalse'
    ) {

        questions =
            trueFalseQuestions();

    } else if (
        mode ===
        'mistakes'
    ) {

        questions =
            flattenQuestions(
                'mistakes'
            );

    } else {

        questions =
            flattenQuestions(
                mode ===
                'mixed'
                    ? 'all'
                    : mode
            );

    }


    if (!questions.length) {

        renderGamesMessage(
            mode === 'mistakes'
                ? 'Aucune erreur enregistrée pour le moment.'
                : 'Aucune question disponible pour ce mode.'
        );

        showView(
            'games'
        );

        return;

    }


    cessQuizState = {

        qs:
            shuffle(
                questions
            ).slice(0, 10),

        index:
            0,

        score:
            0,

        mode:
            mode,

        recorded:
            false

    };


    showView(
        'games'
    );

    renderQuiz();

}


function quizChapter(
    id
) {

    var questions =
        flattenQuestions(
            'all'
        ).filter(
            function (question) {

                return (
                    question.chapterId ===
                    id
                );

            }
        );


    if (!questions.length) {

        alert(
            'Aucune question à choix multiple pour ce chapitre.'
        );

        return;

    }


    cessQuizState = {

        qs:
            shuffle(
                questions
            ),

        index:
            0,

        score:
            0,

        mode:
            'chapter',

        chapterId:
            id,

        recorded:
            false

    };


    closeChapter();

    showView(
        'games'
    );

    renderQuiz();

}


function startCapitals() {

    var capitals =
        typeof CAPITALES !==
            'undefined' &&
        Array.isArray(
            CAPITALES
        )
            ? CAPITALES
            : [];


    if (!capitals.length) {

        renderGamesMessage(
            'Le jeu des capitales n’est pas disponible dans les données actuelles.'
        );

        showView(
            'games'
        );

        return;

    }


    var questions =
        shuffle(
            capitals
        )
            .slice(0, 10)
            .map(
                function (
                    item,
                    index
                ) {

                    var correct =
                        item.capitale ||
                        item.capital ||
                        '';

                    var country =
                        item.pays ||
                        item.country ||
                        '';


                    var others =
                        shuffle(
                            capitals.filter(
                                function (
                                    other
                                ) {

                                    return (
                                        other !==
                                        item
                                    );

                                }
                            )
                        )
                            .slice(0, 3)
                            .map(
                                function (
                                    other
                                ) {

                                    return (
                                        other.capitale ||
                                        other.capital ||
                                        ''
                                    );

                                }
                            );


                    var options =
                        shuffle(
                            [
                                correct
                            ].concat(
                                others
                            )
                        );


                    return {

                        id:
                            'capital_' +
                            index,

                        question:
                            'Quelle est la capitale de ' +
                            country +
                            ' ?',

                        options:
                            options,

                        correct:
                            options.indexOf(
                                correct
                            ),

                        matiere:
                            'geo',

                        annee:
                            '—',

                        chapter:
                            'Capitales'

                    };

                }
            );


    cessQuizState = {

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


    showView(
        'games'
    );

    renderQuiz();

}


function quickRevision() {

    startQuiz(
        'mixed'
    );

}


function renderGamesHome() {

    var panel =
        document.getElementById(
            'gamePanel'
        );

    if (!panel) {
        return;
    }


    if (
        cessQuizState &&
        cessQuizState.active
    ) {

        renderQuiz();

        return;

    }


    panel.innerHTML = `

        <div class="quiz-start">

            <div class="quiz-start-icon">
                🎮
            </div>

            <span class="eyebrow">
                Entraînement
            </span>

            <h2>
                Choisis ton mode
            </h2>

            <p>
                Fais une courte session, travaille tes
                erreurs ou prépare-toi avec un quiz
                par matière.
            </p>


            <div class="game-grid">

                <button
                    class="game-card"
                    onclick="startQuiz('mixed')"
                    type="button"
                >
                    <span>🔀</span>
                    <strong>Quiz mixte</strong>
                    <small>10 questions variées</small>
                </button>


                <button
                    class="game-card"
                    onclick="startQuiz('maths')"
                    type="button"
                >
                    <span>📐</span>
                    <strong>Quiz Maths</strong>
                    <small>Questions de maths</small>
                </button>


                <button
                    class="game-card"
                    onclick="startQuiz('geo')"
                    type="button"
                >
                    <span>🌍</span>
                    <strong>Quiz Géo</strong>
                    <small>Questions de géographie</small>
                </button>


                <button
                    class="game-card"
                    onclick="startQuiz('truefalse')"
                    type="button"
                >
                    <span>✅</span>
                    <strong>Vrai / Faux</strong>
                    <small>Révision express</small>
                </button>


                <button
                    class="game-card"
                    onclick="startQuiz('mistakes')"
                    type="button"
                >
                    <span>🔁</span>
                    <strong>Mes erreurs</strong>
                    <small>Revoir les questions ratées</small>
                </button>


                <button
                    class="game-card"
                    onclick="startCapitals()"
                    type="button"
                >
                    <span>🗺️</span>
                    <strong>Capitales</strong>
                    <small>Tester ta mémoire</small>
                </button>

            </div>

        </div>

    `;

}


function renderGamesMessage(
    text
) {

    var panel =
        document.getElementById(
            'gamePanel'
        );

    if (!panel) {
        return;
    }


    panel.innerHTML = `

        <div class="quiz-start">

            <div class="quiz-start-icon">
                ℹ️
            </div>

            <h2>
                Pas encore
            </h2>

            <p>
                ${esc(text)}
            </p>

            <button
                class="button primary"
                onclick="renderGamesHome()"
                type="button"
            >
                Retour aux jeux
            </button>

        </div>

    `;

}


/* =========================================================
   AFFICHAGE QUIZ
   ========================================================= */

function renderQuiz() {

    var panel =
        document.getElementById(
            'gamePanel'
        );

    if (
        !panel ||
        !cessQuizState
    ) {
        return;
    }


    var state =
        cessQuizState;


    if (
        state.index >=
        state.qs.length
    ) {

        var total =
            state.qs.length;

        var score =
            state.score;

        var percentage =
            total
                ? Math.round(
                    score /
                    total *
                    100
                )
                : 0;


        if (
            !state.recorded
        ) {

            cessState.results.push({

                date:
                    Date.now(),

                score:
                    score,

                total:
                    total,

                mode:
                    state.mode

            });


            recordActivity(
                'quiz',
                'Quiz terminé',
                score +
                    '/' +
                    total +
                    ' · ' +
                    percentage +
                    '%'
            );


            state.recorded =
                true;

            saveState();

        }


        var message =
            percentage >= 80
                ? 'Excellent travail !'
                : percentage >= 60
                    ? 'Bonne session. Continue comme ça !'
                    : 'Session terminée. Reprends les chapitres les plus difficiles.';


        panel.innerHTML = `

            <div class="quiz-result">

                <div class="result-circle">
                    ${percentage}%
                </div>

                <span class="eyebrow">
                    Session terminée
                </span>

                <h2>
                    ${score}
                    bonne${
                        score > 1
                            ? 's'
                            : ''
                    }
                    réponse${
                        score > 1
                            ? 's'
                            : ''
                    }
                    sur
                    ${total}
                </h2>

                <p>
                    ${message}
                </p>

                <div class="result-actions">

                    <button
                        class="button secondary"
                        onclick="renderGamesHome()"
                        type="button"
                    >
                        Autres jeux
                    </button>

                    <button
                        class="button primary"
                        onclick="replayQuiz()"
                        type="button"
                    >
                        Rejouer
                    </button>

                </div>

            </div>

        `;

        return;

    }


    var question =
        state.qs[
            state.index
        ];


    var percentage =
        Math.round(
            state.index /
            state.qs.length *
            100
        );


    panel.innerHTML = `

        <div class="quiz-question-card">

            <button
                class="back-button"
                onclick="renderGamesHome()"
                type="button"
            >
                ← Quitter le quiz
            </button>


            <div class="quiz-progress">

                <span
                    style="width:${percentage}%"
                ></span>

            </div>


            <div class="quiz-meta">

                <span>
                    Question
                    ${state.index + 1}
                    /
                    ${state.qs.length}
                </span>

                <span>
                    ${
                        question.matiere ===
                        'maths'
                            ? '📐 Maths'
                            : '🌍 Géo'
                    }
                    ·
                    ${esc(
                        question.annee ||
                        ''
                    )}
                </span>

            </div>


            <div class="quiz-question">

                ${esc(
                    question.question
                )}

            </div>


            <div class="quiz-options">

                ${
                    question.options.map(
                        function (
                            option,
                            index
                        ) {

                            return `

                                <button
                                    class="quiz-option"
                                    onclick="answerQuiz(${index})"
                                    type="button"
                                >

                                    <span class="option-letter">
                                        ${
                                            String.fromCharCode(
                                                65 + index
                                            )
                                        }
                                    </span>

                                    ${esc(
                                        option
                                    )}

                                </button>

                            `;

                        }
                    ).join('')
                }

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


function answerQuiz(
    index
) {

    if (!cessQuizState) {
        return;
    }


    var question =
        cessQuizState.qs[
            cessQuizState.index
        ];


    if (
        index ===
        Number(
            question.correct
        )
    ) {

        cessQuizState.score++;

    } else {

        if (
            cessState.mistakes.indexOf(
                question.id
            ) === -1
        ) {

            cessState.mistakes.push(
                question.id
            );

        }

    }


    cessQuizState.index++;

    saveState();

    renderQuiz();

}


/* =========================================================
   MEMO
   ========================================================= */

function setMemoMode(
    mode
) {

    cessMemoMode =
        mode;

    renderMemo();

}


function renderMemo() {

    var box =
        document.getElementById(
            'memoContent'
        );

    if (!box) {
        return;
    }


    var search =
        document.getElementById(
            'memoSearch'
        );

    var year =
        document.getElementById(
            'memoYear'
        );


    var term =
        search
            ? String(
                search.value ||
                ''
            )
                .toLowerCase()
                .trim()
            : '';


    var selectedYear =
        year
            ? year.value
            : 'all';


    document
        .querySelectorAll(
            '.memo-tab'
        )
        .forEach(
            function (button) {

                button.classList.toggle(
                    'active',
                    button.getAttribute(
                        'data-mode'
                    ) ===
                    cessMemoMode
                );

            }
        );


    /* =====================================================
       VOCABULAIRE
       ===================================================== */

    if (
        cessMemoMode ===
        'vocab'
    ) {

        var vocabulary =
            typeof GEO_VOCAB !==
                'undefined' &&
            Array.isArray(
                GEO_VOCAB
            )
                ? GEO_VOCAB
                : [];


        var filtered =
            vocabulary.filter(
                function (item) {

                    var text = [

                        item.mot,

                        item.terme,

                        item.def,

                        item.definition,

                        item.theme,

                        item.categorie

                    ]
                        .join(' ')
                        .toLowerCase();


                    var matchText =
                        text.indexOf(
                            term
                        ) !== -1;


                    var itemYear =
                        item.annee ||
                        item.niveau ||
                        '';


                    var matchYear =
                        selectedYear ===
                            'all' ||
                        itemYear ===
                            selectedYear;


                    return (
                        matchText &&
                        matchYear
                    );

                }
            );


        if (!filtered.length) {

            box.innerHTML =
                '<div class="empty-state">Aucun terme trouvé.</div>';

            return;

        }


        box.innerHTML = `

            <div class="memo-grid">

                ${
                    filtered.map(
                        function (item) {

                            return `

                                <article class="memo-card">

                                    <strong>
                                        🌍
                                        ${esc(
                                            item.mot ||
                                            item.terme ||
                                            'Terme'
                                        )}
                                    </strong>

                                    <p>
                                        ${esc(
                                            item.def ||
                                            item.definition ||
                                            ''
                                        )}
                                    </p>

                                    <span class="memo-tag">
                                        ${esc(
                                            item.annee ||
                                            item.niveau ||
                                            ''
                                        )}
                                        ·
                                        ${esc(
                                            item.theme ||
                                            item.categorie ||
                                            'Géographie'
                                        )}
                                    </span>

                                </article>

                            `;

                        }
                    ).join('')
                }

            </div>

        `;

        return;

    }


    /* =====================================================
       FORMULES
       ===================================================== */

    var formulas = [];


    if (
        typeof FORMULES_DATA !==
            'undefined' &&
        FORMULES_DATA &&
        typeof FORMULES_DATA ===
            'object'
    ) {

        Object.keys(
            FORMULES_DATA
        ).forEach(
            function (key) {

                if (
                    Array.isArray(
                        FORMULES_DATA[key]
                    )
                ) {

                    formulas =
                        formulas.concat(
                            FORMULES_DATA[key]
                        );

                }

            }
        );

    }


    formulas =
        formulas.filter(
            function (formula) {

                var text = [

                    formula.titre,

                    formula.definition,

                    formula.exemple,

                    formula.categorie

                ]
                    .join(' ')
                    .toLowerCase();


                return (

                    text.indexOf(
                        term
                    ) !== -1

                    &&

                    (
                        selectedYear ===
                            'all' ||
                        formula.annee ===
                            selectedYear
                    )

                );

            }
        );


    if (!formulas.length) {

        box.innerHTML =
            '<div class="empty-state">Aucune formule trouvée.</div>';

        return;

    }


    box.innerHTML = `

        <div class="memo-grid">

            ${
                formulas.map(
                    function (formula) {

                        return `

                            <article class="memo-card">

                                <strong>

                                    ${
                                        formula.icone ||
                                        '📐'
                                    }

                                    ${esc(
                                        formula.titre ||
                                        'Formule'
                                    )}

                                </strong>


                                <p>
                                    ${esc(
                                        formula.definition ||
                                        ''
                                    )}
                                </p>


                                ${
                                    formula.exemple

                                        ? `

                                            <div class="memo-example">

                                                📌
                                                ${esc(
                                                    formula.exemple
                                                )}

                                            </div>

                                        `

                                        : ''
                                }


                                <span class="memo-tag">

                                    ${esc(
                                        formula.annee ||
                                        ''
                                    )}

                                    ·

                                    ${esc(
                                        formula.categorie ||
                                        'Maths'
                                    )}

                                </span>

                            </article>

                        `;

                    }
                ).join('')
            }

        </div>

    `;

}


/* =========================================================
   EXAMENS
   ========================================================= */

function renderExamHome() {

    var box =
        document.getElementById(
            'examPanel'
        );

    if (!box) {
        return;
    }


    var special =
        typeof EXAMENS_CESS !==
            'undefined' &&
        Array.isArray(
            EXAMENS_CESS
        )
            ? EXAMENS_CESS
            : [];


    box.innerHTML = `

        <div class="exam-list">


            <article class="exam-card">

                <div class="exam-icon">
                    📐
                </div>

                <h3>
                    Examen blanc Maths
                </h3>

                <p>
                    Jusqu’à 15 questions tirées
                    de tes exercices de mathématiques.
                </p>

                <button
                    class="button primary"
                    onclick="startExam('maths')"
                    type="button"
                >
                    Commencer →
                </button>

            </article>


            <article class="exam-card">

                <div class="exam-icon">
                    🌍
                </div>

                <h3>
                    Examen blanc Géo
                </h3>

                <p>
                    Jusqu’à 15 questions tirées
                    de tes exercices de géographie.
                </p>

                <button
                    class="button primary"
                    onclick="startExam('geo')"
                    type="button"
                >
                    Commencer →
                </button>

            </article>


        </div>


        ${
            special.length

                ? `

                    <div class="content-card exam-special">

                        <div class="section-heading">

                            <span class="eyebrow">
                                Sujets présents dans tes données
                            </span>

                            <h2>
                                📝 Sujets CESS
                            </h2>

                        </div>


                        ${
                            special.map(
                                function (subject) {

                                    return `

                                        <details>

                                            <summary>
                                                ${esc(
                                                    subject.titre ||
                                                    subject.id
                                                )}
                                            </summary>


                                            ${
                                                Array.isArray(
                                                    subject.exercices
                                                )

                                                    ? `

                                                        <div class="special-list">

                                                            ${
                                                                subject.exercices.map(
                                                                    function (
                                                                        question
                                                                    ) {

                                                                        return `

                                                                            <div>

                                                                                <strong>
                                                                                    ${esc(
                                                                                        question.question ||
                                                                                        ''
                                                                                    )}
                                                                                </strong>

                                                                                <p>
                                                                                    ${esc(
                                                                                        question.correction ||
                                                                                        ''
                                                                                    )}
                                                                                </p>

                                                                            </div>

                                                                        `;

                                                                    }
                                                                ).join('')
                                                            }

                                                        </div>

                                                    `

                                                    : ''
                                            }

                                        </details>

                                    `;

                                }
                            ).join('')
                        }

                    </div>

                `

                : ''
        }

    `;

}


function startExam(
    subject
) {

    var questions =
        flattenQuestions(
            subject
        );


    if (!questions.length) {

        var panel =
            document.getElementById(
                'examPanel'
            );

        if (panel) {

            panel.innerHTML = `

                <div class="empty-state">

                    Aucune question disponible
                    pour cet examen.

                </div>

            `;

        }

        return;

    }


    cessExamState = {

        qs:
            shuffle(
                questions
            ).slice(0, 15),

        index:
            0,

        score:
            0,

        subject:
            subject,

        recorded:
            false

    };


    showView(
        'exam'
    );

    renderExam();

}


function renderExam() {

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
        state.qs.length
    ) {

        var total =
            state.qs.length;

        var percentage =
            total
                ? Math.round(
                    state.score /
                    total *
                    100
                )
                : 0;


        if (
            !state.recorded
        ) {

            cessState.results.push({

                date:
                    Date.now(),

                score:
                    state.score,

                total:
                    total,

                mode:
                    'exam-' +
                    state.subject

            });


            recordActivity(
                'exam',
                'Examen ' +
                    CESS_SUBJECTS[
                        state.subject
                    ].short,
                state.score +
                    '/' +
                    total +
                    ' · ' +
                    percentage +
                    '%'
            );


            state.recorded =
                true;

            saveState();

        }


        panel.innerHTML = `

            <div class="quiz-result">

                <div class="result-circle">
                    ${percentage}%
                </div>

                <span class="eyebrow">
                    Examen terminé
                </span>

                <h2>
                    ${state.score}
                    /
                    ${total}
                </h2>

                <p>

                    ${
                        percentage >= 80

                            ? 'Très bon résultat.'

                            : percentage >= 60

                                ? 'Résultat correct, continue à travailler les points faibles.'

                                : 'Utilise tes erreurs pour cibler tes prochaines révisions.'
                    }

                </p>


                <div class="result-actions">

                    <button
                        class="button secondary"
                        onclick="renderExamHome()"
                        type="button"
                    >
                        Retour
                    </button>

                    <button
                        class="button primary"
                        onclick="startExam('${state.subject}')"
                        type="button"
                    >
                        Recommencer
                    </button>

                </div>

            </div>

        `;

        return;

    }


    var question =
        state.qs[
            state.index
        ];


    var percentage =
        Math.round(
            state.index /
            state.qs.length *
            100
        );


    panel.innerHTML = `

        <div class="quiz-question-card">

            <button
                class="back-button"
                onclick="renderExamHome()"
                type="button"
            >
                ← Quitter l’examen
            </button>


            <div class="quiz-progress">

                <span
                    style="width:${percentage}%"
                ></span>

            </div>


            <div class="quiz-meta">

                <span>
                    Examen
                    ${CESS_SUBJECTS[
                        state.subject
                    ].short}
                </span>

                <span>
                    Question
                    ${state.index + 1}
                    /
                    ${state.qs.length}
                </span>

            </div>


            <div class="quiz-question">

                ${esc(
                    question.question
                )}

            </div>


            <div class="quiz-options">

                ${
                    question.options.map(
                        function (
                            option,
                            index
                        ) {

                            return `

                                <button
                                    class="quiz-option"
                                    onclick="answerExam(${index})"
                                    type="button"
                                >

                                    <span class="option-letter">
                                        ${
                                            String.fromCharCode(
                                                65 + index
                                            )
                                        }
                                    </span>

                                    ${esc(
                                        option
                                    )}

                                </button>

                            `;

                        }
                    ).join('')
                }

            </div>

        </div>

    `;

}


function answerExam(
    index
) {

    if (!cessExamState) {
        return;
    }


    var question =
        cessExamState.qs[
            cessExamState.index
        ];


    if (
        index ===
        Number(
            question.correct
        )
    ) {

        cessExamState.score++;

    } else {

        if (
            cessState.mistakes.indexOf(
                question.id
            ) === -1
        ) {

            cessState.mistakes.push(
                question.id
            );

        }

    }


    cessExamState.index++;

    saveState();

    renderExam();

}


/* =========================================================
   PROGRESSION
   ========================================================= */

function renderProgress() {

    var box =
        document.getElementById(
            'progressContent'
        );

    if (!box) {
        return;
    }


    var global =
        pctGlobal();


    var all =
        allChaps('maths')
            .concat(
                allChaps('geo')
            );


    var done =
        all.filter(
            function (chapter) {

                return (
                    progressOf(chapter) >=
                    100
                );

            }
        ).length;


    box.innerHTML = `

        <div class="progress-overview">

            <div class="progress-big-card">

                <strong>
                    ${global}%
                </strong>

                <span>
                    Progression globale
                </span>

            </div>


            <div class="progress-big-card">

                <strong>
                    ${done}/${all.length}
                </strong>

                <span>
                    Chapitres maîtrisés
                </span>

            </div>


            <div class="progress-big-card">

                <strong>
                    ${cessState.results.length}
                </strong>

                <span>
                    Sessions réalisées
                </span>

            </div>

        </div>


        <div class="progress-section">

            <div class="section-heading">

                <span class="eyebrow">
                    Vue détaillée
                </span>

                <h2>
                    Progression par matière
                </h2>

            </div>


            ${
                [
                    'maths',
                    'geo'
                ]
                    .map(
                        renderProgressSubject
                    )
                    .join('')
            }

        </div>


        <div class="progress-section progress-history">

            <div class="section-heading">

                <span class="eyebrow">
                    Historique
                </span>

                <h2>
                    Dernières sessions
                </h2>

            </div>

            ${renderHistory()}

        </div>

    `;

}


function renderProgressSubject(
    subject
) {

    var info =
        CESS_SUBJECTS[
            subject
        ];

    var stats =
        subjectStats(
            subject
        );


    var years = [
        '3e',
        '4e',
        '5e',
        '6e'
    ];


    return `

        <div class="progress-subject">

            <div class="progress-subject-head">

                <strong>
                    ${info.icon}
                    ${info.label}
                </strong>

                <span>
                    ${stats.avg}%
                </span>

            </div>


            <div class="progress-row-bar">

                <span
                    style="width:${stats.avg}%"
                ></span>

            </div>


            ${
                years.map(
                    function (year) {

                        var statsYear =
                            yearStats(
                                subject,
                                year
                            );


                        if (!statsYear.total) {
                            return '';
                        }


                        return `

                            <div class="progress-row">

                                <span class="progress-row-name">
                                    ${year}
                                </span>

                                <div class="progress-row-bar">

                                    <span
                                        style="width:${statsYear.avg}%"
                                    ></span>

                                </div>

                                <span class="progress-row-value">
                                    ${statsYear.avg}%
                                </span>

                            </div>

                        `;

                    }
                ).join('')
            }

        </div>

    `;

}


function renderHistory() {

    if (!cessState.results.length) {

        return `

            <div class="empty-state">
                Aucune session enregistrée.
            </div>

        `;

    }


    return `

        <div class="history-list">

            ${
                cessState.results
                    .slice()
                    .reverse()
                    .slice(0, 10)
                    .map(
                        function (result) {

                            var percentage =
                                result.total
                                    ? Math.round(
                                        result.score /
                                        result.total *
                                        100
                                    )
                                    : 0;


                            return `

                                <div class="history-item">

                                    <span>
                                        🎯
                                    </span>

                                    <div>

                                        <strong>
                                            ${esc(
                                                result.mode ||
                                                'Session'
                                            )}
                                        </strong>

                                        <small>
                                            ${result.score}
                                            /
                                            ${result.total}
                                            ·
                                            ${formatDate(
                                                result.date
                                            )}
                                        </small>

                                    </div>

                                    <b>
                                        ${percentage}%
                                    </b>

                                </div>

                            `;

                        }
                    ).join('')
            }

        </div>

    `;

}


/* =========================================================
   INITIALISATION
   ========================================================= */

function init() {

    if (
        cessState.theme ===
        'dark'
    ) {

        document.body.classList.add(
            'dark'
        );

    }


    updateThemeButton();

    renderHome();

    renderSubject(
        'maths'
    );

    renderSubject(
        'geo'
    );

    renderMemo();

    renderGamesHome();

    renderExamHome();

    renderProgress();


    document.addEventListener(
        'keydown',
        function (event) {

            if (
                event.key ===
                'Escape' &&
                cessCurrentChapter
            ) {

                closeChapter();

            }

        }
    );

}


document.addEventListener(
    'DOMContentLoaded',
    init
);
3️⃣ style.css
:root{
--bg:#f5f7fb;
--bg-soft:#eef2f8;
--paper:#fff;
--paper-soft:#f8fafc;
--text:#172033;
--text-soft:#667085;
--text-light:#98a2b3;
--line:#e4e8ef;
--primary:#315bea;
--primary-dark:#2447c7;
--primary-soft:#eaf0ff;
--green:#16a579;
--green-soft:#e8f8f2;
--orange:#f59e42;
--orange-soft:#fff3e6;
--red:#e85d5d;
--red-soft:#ffeded;
--shadow-sm:0 2px 8px rgba(15,23,42,.05);
--shadow:0 10px 30px rgba(15,23,42,.07);
--shadow-lg:0 20px 55px rgba(15,23,42,.12);
--radius:16px;
--radius-lg:24px;
--sidebar:245px
}

body.dark{
--bg:#0f141d;
--bg-soft:#151c27;
--paper:#192230;
--paper-soft:#202a38;
--text:#f5f7fa;
--text-soft:#a9b3c1;
--text-light:#778394;
--line:#2b3544;
--primary-soft:#1e2c55;
--green-soft:#17382f;
--orange-soft:#3d2d1c;
--red-soft:#3e2226;
--shadow-sm:0 2px 8px rgba(0,0,0,.18);
--shadow:0 12px 30px rgba(0,0,0,.22);
--shadow-lg:0 20px 55px rgba(0,0,0,.32)
}

*{
box-sizing:border-box;
margin:0;
padding:0
}

html{
scroll-behavior:smooth
}

body{
min-height:100vh;
background:var(--bg);
color:var(--text);
font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
line-height:1.55
}

button,
input,
select{
font:inherit
}

button{
cursor:pointer
}

button:focus-visible,
input:focus-visible,
select:focus-visible{
outline:3px solid rgba(49,91,234,.22);
outline-offset:2px
}

p{
color:var(--text-soft)
}


/* =========================================================
   SIDEBAR
   ========================================================= */

.sidebar{
position:fixed;
z-index:100;
inset:0 auto 0 0;
width:var(--sidebar);
display:flex;
flex-direction:column;
padding:22px 14px;
background:linear-gradient(180deg,#101a2d,#0c1525);
color:#fff
}

.brand{
display:flex;
align-items:center;
gap:11px;
width:100%;
padding:7px 10px 20px;
border:0;
background:transparent;
color:#fff;
text-align:left
}

.brand-icon{
width:38px;
height:38px;
display:grid;
place-items:center;
border-radius:11px;
background:rgba(255,255,255,.1);
font-size:20px
}

.brand-text{
min-width:0
}

.brand-text strong{
display:block;
font-size:15px
}

.brand-text small{
display:block;
margin-top:2px;
color:rgba(255,255,255,.55);
font-size:10px
}

.main-nav{
display:flex;
flex-direction:column;
gap:4px;
margin-top:12px
}

.nav-item{
width:100%;
display:flex;
align-items:center;
gap:12px;
padding:11px 12px;
border:0;
border-radius:10px;
background:transparent;
color:rgba(255,255,255,.65);
font-size:13px;
font-weight:650;
text-align:left;
transition:.18s
}

.nav-item:hover{
background:rgba(255,255,255,.07);
color:#fff
}

.nav-item.active{
background:linear-gradient(
135deg,
rgba(49,91,234,.95),
rgba(55,91,220,.75)
);
color:#fff;
box-shadow:0 8px 20px rgba(0,0,0,.18)
}

.nav-item span:first-child{
width:20px;
text-align:center
}

.sidebar-bottom{
margin-top:auto
}

.sidebar-tip{
display:flex;
gap:10px;
padding:13px;
border-radius:13px;
background:rgba(255,255,255,.055);
margin-bottom:10px
}

.sidebar-tip strong,
.sidebar-tip small{
display:block
}

.sidebar-tip strong{
font-size:11px
}

.sidebar-tip small{
margin-top:3px;
color:rgba(255,255,255,.48);
font-size:10px;
line-height:1.4
}

.theme-button{
width:100%;
display:flex;
align-items:center;
gap:9px;
padding:10px 12px;
border:1px solid rgba(255,255,255,.08);
border-radius:10px;
background:rgba(255,255,255,.035);
color:rgba(255,255,255,.7);
font-size:11px;
font-weight:650
}

.theme-button:hover{
background:rgba(255,255,255,.08);
color:#fff
}


/* =========================================================
   MAIN
   ========================================================= */

.main-content{
min-height:100vh;
margin-left:var(--sidebar);
padding:38px 44px 70px
}

.view{
display:none;
width:100%;
max-width:1180px;
margin:0 auto
}

.view.active{
display:block
}


/* =========================================================
   TEXT
   ========================================================= */

.eyebrow{
display:inline-flex;
color:var(--primary);
font-size:10px;
font-weight:850;
letter-spacing:.13em;
text-transform:uppercase
}

h1,
h2,
h3,
h4{
color:var(--text);
line-height:1.15
}

h1{
margin-top:7px;
font-size:clamp(30px,4vw,45px);
letter-spacing:-.04em
}

h2{
margin-top:5px;
font-size:21px;
letter-spacing:-.025em
}

h3{
font-size:17px
}


/* =========================================================
   BUTTONS
   ========================================================= */

.button{
min-height:43px;
padding:0 17px;
border-radius:11px;
border:1px solid var(--line);
font-size:12px;
font-weight:850;
transition:.18s
}

.button:hover{
transform:translateY(-1px)
}

.button.primary{
background:var(--primary);
border-color:var(--primary);
color:#fff;
box-shadow:0 8px 18px rgba(49,91,234,.2)
}

.button.primary:hover{
background:var(--primary-dark)
}

.button.secondary{
background:var(--paper);
color:var(--text)
}


/* =========================================================
   HOME
   ========================================================= */

.welcome{
display:grid;
grid-template-columns:minmax(0,1fr) 330px;
gap:22px;
margin-bottom:25px
}

.welcome-main{
min-height:300px;
display:flex;
flex-direction:column;
justify-content:center;
padding:42px;
border-radius:var(--radius-lg);
background:
radial-gradient(
circle at 80% 20%,
rgba(49,91,234,.12),
transparent 35%
),
var(--paper);
border:1px solid var(--line);
box-shadow:var(--shadow-sm)
}

.welcome-main h1{
font-size:clamp(38px,5vw,58px)
}

.welcome-main p{
max-width:650px;
margin-top:16px;
font-size:15px
}

.welcome-actions{
display:flex;
flex-wrap:wrap;
gap:10px;
margin-top:25px
}

.daily-card{
display:flex;
flex-direction:column;
justify-content:center;
padding:29px;
border-radius:var(--radius-lg);
background:
linear-gradient(
145deg,
var(--primary-soft),
var(--paper)
);
border:1px solid var(--line);
box-shadow:var(--shadow-sm)
}

.daily-icon{
width:48px;
height:48px;
display:grid;
place-items:center;
margin-bottom:17px;
border-radius:14px;
background:var(--primary);
color:#fff;
font-size:21px
}

.daily-card h3{
margin-top:8px
}

.daily-card p{
margin-top:8px;
font-size:12px
}

.text-button{
width:fit-content;
margin-top:20px;
border:0;
background:transparent;
color:var(--primary);
font-size:12px;
font-weight:850
}

.home-stats{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:12px;
margin-bottom:35px
}

.home-stat{
padding:18px;
border-radius:var(--radius);
background:var(--paper);
border:1px solid var(--line)
}

.home-stat-icon{
font-size:17px
}

.home-stat-value{
display:block;
margin-top:8px;
font-size:23px;
font-weight:900;
letter-spacing:-.04em
}

.home-stat-label{
display:block;
margin-top:2px;
color:var(--text-soft);
font-size:11px
}

.home-section{
margin-bottom:35px
}

.section-heading{
margin-bottom:14px
}

.subject-cards{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:16px
}

.subject-card{
padding:24px;
border-radius:var(--radius-lg);
border:1px solid var(--line);
background:var(--paper);
box-shadow:var(--shadow-sm);
transition:.2s
}

.subject-card:hover{
transform:translateY(-3px);
box-shadow:var(--shadow)
}

.maths-card{
background:
linear-gradient(
145deg,
rgba(49,91,234,.09),
var(--paper) 55%
)
}

.geo-card{
background:
linear-gradient(
145deg,
rgba(22,165,121,.09),
var(--paper) 55%
)
}

.subject-card-top{
display:flex;
justify-content:space-between;
align-items:center
}

.subject-icon{
width:47px;
height:47px;
display:grid;
place-items:center;
border-radius:13px;
background:var(--primary);
color:#fff;
font-size:20px
}

.geo-card .subject-icon{
background:var(--green)
}

.subject-arrow{
color:var(--text-light);
font-size:20px
}

.subject-card h3{
margin-top:20px;
font-size:20px
}

.subject-card p{
margin-top:6px;
min-height:38px;
font-size:12px
}

.progress-line{
height:7px;
margin-top:20px;
overflow:hidden;
border-radius:99px;
background:var(--bg-soft)
}

.progress-line span{
display:block;
width:0;
height:100%;
border-radius:inherit;
background:var(--primary);
transition:width .4s
}

.geo-card .progress-line span{
background:var(--green)
}

.subject-card-footer{
display:flex;
justify-content:space-between;
align-items:center;
margin-top:13px;
color:var(--text-soft);
font-size:11px
}

.subject-card-footer button{
border:0;
background:transparent;
color:var(--primary);
font-weight:850
}

.home-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:18px
}

.panel,
.content-card,
.progress-section{
padding:23px;
border-radius:var(--radius-lg);
background:var(--paper);
border:1px solid var(--line);
box-shadow:var(--shadow-sm)
}

.panel-header{
margin-bottom:18px
}

.panel-header h2{
font-size:18px
}

.empty-state{
text-align:center;
padding:25px 15px;
color:var(--text-light);
font-size:12px
}

.simple-list{
display:flex;
flex-direction:column;
gap:9px
}

.simple-list-item{
display:flex;
align-items:center;
gap:11px;
padding:11px;
border-radius:11px;
background:var(--paper-soft);
border:1px solid var(--line)
}

.simple-list-icon{
width:34px;
height:34px;
display:grid;
place-items:center;
flex:0 0 auto;
border-radius:9px;
background:var(--primary-soft)
}

.simple-list-main{
min-width:0;
flex:1
}

.simple-list-main strong,
.simple-list-main small{
display:block;
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis
}

.simple-list-main strong{
font-size:11px
}

.simple-list-main small{
margin-top:2px;
color:var(--text-soft);
font-size:10px
}

.simple-list-action{
border:0;
background:transparent;
color:var(--primary);
font-size:11px;
font-weight:850
}


/* =========================================================
   PAGES
   ========================================================= */

.page-header{
display:flex;
justify-content:space-between;
align-items:flex-end;
gap:20px;
margin-bottom:28px
}

.page-header-main{
max-width:750px
}

.page-header p{
margin-top:10px;
max-width:680px;
font-size:13px
}

.page-counter{
padding:9px 13px;
border:1px solid var(--line);
border-radius:99px;
background:var(--paper);
color:var(--text-soft);
font-size:11px;
font-weight:850
}


/* =========================================================
   YEARS
   ========================================================= */

.year-selector{
display:flex;
flex-wrap:wrap;
gap:9px;
margin-bottom:20px
}

.year-button{
min-width:78px;
padding:10px 14px;
border:1px solid var(--line);
border-radius:10px;
background:var(--paper);
color:var(--text-soft);
font-size:12px;
font-weight:850;
text-align:left
}

.year-button small{
display:block;
font-size:9px;
font-weight:600;
opacity:.75
}

.year-button:hover{
border-color:var(--primary);
color:var(--primary)
}

.year-button.active{
background:var(--primary);
border-color:var(--primary);
color:#fff
}

.year-summary{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:12px;
margin-bottom:18px
}

.year-summary>div{
padding:16px 18px;
border:1px solid var(--line);
border-radius:var(--radius);
background:var(--paper)
}

.year-summary strong,
.year-summary span{
display:block
}

.year-summary strong{
font-size:22px
}

.year-summary span{
margin-top:3px;
color:var(--text-soft);
font-size:10px
}


/* =========================================================
   DOMAINS
   ========================================================= */

.domain-grid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px
}

.domain-card{
padding:20px;
border:1px solid var(--line);
border-radius:var(--radius);
background:var(--paper);
box-shadow:var(--shadow-sm)
}

.domain-header{
display:flex;
align-items:center;
gap:12px;
margin-bottom:15px
}

.domain-icon{
width:42px;
height:42px;
display:grid;
place-items:center;
border-radius:11px;
background:var(--primary-soft);
font-size:18px
}

.domain-title{
flex:1
}

.domain-title strong,
.domain-title small{
display:block
}

.domain-title strong{
font-size:14px
}

.domain-title small{
margin-top:2px;
color:var(--text-soft);
font-size:10px
}

.domain-count{
color:var(--text-light);
font-size:10px;
font-weight:750
}


/* =========================================================
   CHAPTER LIST
   ========================================================= */

.chapter-list{
display:flex;
flex-direction:column;
gap:7px
}

.chapter-item{
width:100%;
display:flex;
align-items:center;
gap:10px;
padding:11px;
border:1px solid var(--line);
border-radius:11px;
background:var(--paper-soft);
text-align:left;
color:var(--text);
transition:.18s
}

.chapter-item:hover{
border-color:rgba(49,91,234,.35);
background:var(--primary-soft);
transform:translateX(2px)
}

.chapter-icon{
width:32px;
height:32px;
display:grid;
place-items:center;
flex:0 0 auto;
border-radius:8px;
background:var(--paper);
font-size:14px
}

.chapter-main{
min-width:0;
flex:1
}

.chapter-main strong,
.chapter-main small{
display:block;
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis
}

.chapter-main strong{
font-size:11px
}

.chapter-main small{
margin-top:2px;
color:var(--text-soft);
font-size:9px
}

.chapter-status{
flex:0 0 auto;
font-size:10px;
font-weight:850
}

.status-done{
color:var(--green)
}

.status-progress{
color:var(--primary)
}

.status-new{
color:var(--text-light)
}


/* =========================================================
   MEMO
   ========================================================= */

.memo-tabs{
display:flex;
gap:5px;
margin-bottom:12px;
padding:5px;
border:1px solid var(--line);
border-radius:12px;
background:var(--paper-soft)
}

.memo-tab{
padding:10px 15px;
border:0;
border-radius:8px;
background:transparent;
color:var(--text-soft);
font-size:11px;
font-weight:850
}

.memo-tab.active{
background:var(--paper);
color:var(--primary);
box-shadow:var(--shadow-sm)
}

.search-box{
display:flex;
align-items:center;
gap:9px;
margin-bottom:9px;
padding:0 13px;
height:45px;
border:1px solid var(--line);
border-radius:12px;
background:var(--paper)
}

.search-box span{
color:var(--text-light)
}

.search-box input{
width:100%;
border:0;
outline:0;
background:transparent;
color:var(--text);
font-size:12px
}

.memo-filter{
margin-bottom:18px
}

.memo-filter select{
padding:9px 12px;
border:1px solid var(--line);
border-radius:10px;
background:var(--paper);
color:var(--text);
font-size:11px
}

.memo-grid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:11px
}

.memo-card{
padding:17px;
border:1px solid var(--line);
border-radius:13px;
background:var(--paper)
}

.memo-card strong{
display:block;
font-size:12px
}

.memo-card p{
margin-top:6px;
font-size:11px
}

.memo-tag{
display:inline-flex;
margin-top:11px;
padding:4px 7px;
border-radius:6px;
background:var(--primary-soft);
color:var(--primary);
font-size:8px;
font-weight:850
}

.memo-example{
margin-top:9px;
padding:9px;
border-radius:8px;
background:var(--paper-soft);
color:var(--text-soft);
font-size:10px
}


/* =========================================================
   QUIZ
   ========================================================= */

.quiz-start{
max-width:800px;
margin:10px auto;
padding:25px;
text-align:center
}

.quiz-start-icon{
font-size:42px
}

.quiz-start h2{
margin-top:13px
}

.quiz-start p{
margin-top:8px;
font-size:12px
}

.game-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:10px;
margin-top:22px
}

.game-card{
min-height:120px;
padding:17px;
border:1px solid var(--line);
border-radius:13px;
background:var(--paper-soft);
color:var(--text);
text-align:left;
transition:.18s
}

.game-card:hover{
transform:translateY(-2px);
border-color:var(--primary);
background:var(--primary-soft)
}

.game-card span{
display:block;
font-size:22px
}

.game-card strong,
.game-card small{
display:block
}

.game-card strong{
margin-top:10px;
font-size:12px
}

.game-card small{
margin-top:3px;
color:var(--text-soft);
font-size:9px
}

.quiz-question-card{
max-width:780px;
margin:10px auto;
padding:25px;
border:1px solid var(--line);
border-radius:var(--radius-lg);
background:var(--paper);
box-shadow:var(--shadow-sm)
}

.back-button{
display:block;
margin-bottom:15px;
border:0;
background:transparent;
color:var(--primary);
font-size:12px;
font-weight:850
}

.quiz-progress{
height:6px;
overflow:hidden;
border-radius:99px;
background:var(--bg-soft)
}

.quiz-progress span{
display:block;
height:100%;
background:var(--primary)
}

.quiz-meta{
display:flex;
justify-content:space-between;
margin-top:13px;
color:var(--text-soft);
font-size:10px;
font-weight:850
}

.quiz-question{
margin-top:25px;
font-size:21px;
line-height:1.3
}

.quiz-options{
display:grid;
gap:9px;
margin-top:22px
}

.quiz-option{
width:100%;
display:flex;
align-items:center;
padding:14px;
border:1px solid var(--line);
border-radius:11px;
background:var(--paper-soft);
color:var(--text);
text-align:left;
font-size:12px
}

.quiz-option:hover{
border-color:var(--primary)
}

.option-letter{
display:inline-grid;
place-items:center;
width:25px;
height:25px;
margin-right:9px;
flex:0 0 auto;
border-radius:7px;
background:var(--bg-soft);
color:var(--primary);
font-size:10px;
font-weight:900
}

.quiz-result{
max-width:620px;
margin:30px auto;
padding:38px;
border:1px solid var(--line);
border-radius:var(--radius-lg);
background:var(--paper);
text-align:center;
box-shadow:var(--shadow)
}

.result-circle{
width:105px;
height:105px;
display:grid;
place-items:center;
margin:0 auto 18px;
border:8px solid var(--primary-soft);
border-radius:50%;
color:var(--primary);
font-size:27px;
font-weight:900
}

.quiz-result h2{
margin-top:9px
}

.quiz-result p{
margin-top:8px;
font-size:12px
}

.result-actions{
display:flex;
justify-content:center;
gap:9px;
margin-top:23px
}


/* =========================================================
   EXAMENS
   ========================================================= */

.exam-list{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px
}

.exam-card{
padding:22px;
border:1px solid var(--line);
border-radius:var(--radius-lg);
background:var(--paper);
box-shadow:var(--shadow-sm)
}

.exam-icon{
width:43px;
height:43px;
display:grid;
place-items:center;
border-radius:11px;
background:var(--orange-soft);
font-size:18px
}

.exam-card h3{
margin-top:15px
}

.exam-card p{
margin-top:7px;
font-size:11px
}

.exam-card button{
margin-top:17px
}

.exam-special{
margin-top:18px
}

.exam-special details{
padding:12px 0;
border-top:1px solid var(--line)
}

.exam-special summary{
cursor:pointer;
font-size:12px;
font-weight:850
}

.special-list{
display:grid;
gap:9px;
margin-top:12px
}

.special-list>div{
padding:12px;
border-radius:10px;
background:var(--paper-soft)
}

.special-list strong{
font-size:11px
}

.special-list p{
margin-top:5px;
font-size:10px
}


/* =========================================================
   PROGRESSION
   ========================================================= */

.progress-overview{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:13px;
margin-bottom:20px
}

.progress-big-card{
padding:22px;
border:1px solid var(--line);
border-radius:var(--radius);
background:var(--paper)
}

.progress-big-card strong,
.progress-big-card span{
display:block
}

.progress-big-card strong{
font-size:29px
}

.progress-big-card span{
margin-top:3px;
color:var(--text-soft);
font-size:10px
}

.progress-subject{
padding:17px 0;
border-bottom:1px solid var(--line)
}

.progress-subject:last-child{
border-bottom:0
}

.progress-subject-head{
display:flex;
justify-content:space-between;
margin-bottom:8px;
font-size:12px
}

.progress-subject-head span{
color:var(--primary);
font-weight:900
}

.progress-row{
display:grid;
grid-template-columns:80px 1fr 45px;
align-items:center;
gap:12px;
padding:11px 0;
border-top:1px solid var(--line)
}

.progress-row-name{
font-size:11px;
font-weight:850
}

.progress-row-bar{
height:7px;
overflow:hidden;
border-radius:99px;
background:var(--bg-soft)
}

.progress-row-bar span{
display:block;
height:100%;
background:var(--primary)
}

.progress-row-value{
color:var(--text-soft);
font-size:10px;
font-weight:850;
text-align:right
}

.progress-history{
margin-top:18px
}

.history-list{
display:flex;
flex-direction:column;
gap:8px
}

.history-item{
display:flex;
align-items:center;
gap:10px;
padding:11px;
border:1px solid var(--line);
border-radius:10px;
background:var(--paper-soft)
}

.history-item>span{
font-size:16px
}

.history-item div{
flex:1;
min-width:0
}

.history-item strong,
.history-item small{
display:block
}

.history-item strong{
font-size:11px
}

.history-item small{
margin-top:2px;
color:var(--text-soft);
font-size:9px
}

.history-item b{
color:var(--primary);
font-size:11px
}


/* =========================================================
   CHAPITRE
   ========================================================= */

.modal{
position:fixed;
z-index:500;
inset:0;
display:grid;
place-items:center;
padding:20px;
background:rgba(7,14,27,.62);
backdrop-filter:blur(5px)
}

.modal-box{
position:relative;
width:min(1120px,100%);
max-height:92vh;
overflow:auto;
padding:28px;
border-radius:var(--radius-lg);
background:var(--paper);
box-shadow:var(--shadow-lg)
}

.modal-close{
position:absolute;
top:12px;
right:15px;
width:32px;
height:32px;
border:0;
border-radius:50%;
background:var(--bg-soft);
color:var(--text-soft);
font-size:20px
}

.chapter-top{
margin-bottom:25px
}

.chapter-breadcrumb{
display:flex;
align-items:center;
gap:7px;
margin-bottom:15px;
color:var(--text-soft);
font-size:11px
}

.chapter-breadcrumb button{
border:0;
background:transparent;
color:var(--primary);
font-weight:850
}

.chapter-hero{
display:grid;
grid-template-columns:minmax(0,1fr) 240px;
gap:20px;
padding:28px;
border-radius:var(--radius-lg);
border:1px solid var(--line);
background:
radial-gradient(
circle at 90% 10%,
rgba(49,91,234,.1),
transparent 35%
),
var(--paper);
box-shadow:var(--shadow-sm)
}

.chapter-title-row{
display:flex;
align-items:flex-start;
gap:14px
}

.chapter-big-icon{
width:55px;
height:55px;
display:grid;
place-items:center;
flex:0 0 auto;
border-radius:15px;
background:var(--primary);
color:#fff;
font-size:23px
}

.chapter-title h1{
margin-top:0;
font-size:clamp(27px,4vw,39px)
}

.chapter-title p{
margin-top:7px;
font-size:12px
}

.chapter-progress-box{
align-self:center;
padding:18px;
border-radius:14px;
background:var(--paper-soft);
border:1px solid var(--line)
}

.chapter-progress-number{
display:block;
color:var(--primary);
font-size:27px;
font-weight:900
}

.chapter-progress-label{
display:block;
margin-top:2px;
color:var(--text-soft);
font-size:10px
}

.chapter-tabs{
display:flex;
gap:4px;
margin-top:20px;
padding:5px;
border:1px solid var(--line);
border-radius:12px;
background:var(--paper-soft)
}

.chapter-tab{
flex:1;
padding:11px 10px;
border:0;
border-radius:8px;
background:transparent;
color:var(--text-soft);
font-size:11px;
font-weight:850
}

.chapter-tab.active{
background:var(--paper);
color:var(--primary);
box-shadow:var(--shadow-sm)
}

.chapter-layout{
display:grid;
grid-template-columns:minmax(0,1fr) 280px;
gap:18px;
margin-top:18px
}

.content-card+.content-card{
margin-top:15px
}

.course-content h3,
.course-content h4{
margin:20px 0 8px
}

.course-content h3:first-child,
.course-content h4:first-child{
margin-top:0
}

.course-content p{
margin:9px 0;
font-size:13px
}

.course-content ul,
.course-content ol{
margin:10px 0 10px 20px;
color:var(--text-soft);
font-size:13px
}

.course-content li{
margin:5px 0
}

.course-content b,
.course-content strong{
color:var(--text)
}

.goal-list{
display:flex;
flex-direction:column;
gap:8px
}

.goal-item{
display:flex;
align-items:flex-start;
gap:9px;
padding:10px;
border-radius:10px;
background:var(--paper-soft);
font-size:11px
}

.goal-item span:first-child{
color:var(--green);
font-weight:900
}

.chapter-sidebar-card{
padding:19px;
border:1px solid var(--line);
border-radius:var(--radius);
background:var(--paper);
box-shadow:var(--shadow-sm)
}

.chapter-sidebar-card+.chapter-sidebar-card{
margin-top:13px
}

.chapter-sidebar-card h3{
margin-bottom:13px;
font-size:13px
}

.topic-list{
display:flex;
flex-direction:column;
gap:7px
}

.topic-item{
padding:8px 9px;
border-radius:8px;
background:var(--paper-soft);
color:var(--text-soft);
font-size:10px
}

.exercise-list{
display:flex;
flex-direction:column;
gap:12px
}

.exercise-card{
padding:18px;
border:1px solid var(--line);
border-radius:13px;
background:var(--paper-soft)
}

.exercise-number{
color:var(--primary);
font-size:10px;
font-weight:900;
text-transform:uppercase
}

.exercise-question{
margin-top:6px;
color:var(--text);
font-size:13px;
font-weight:750
}

.exercise-options{
display:grid;
gap:7px;
margin-top:13px
}

.exercise-option{
width:100%;
padding:10px 12px;
border:1px solid var(--line);
border-radius:9px;
background:var(--paper);
color:var(--text-soft);
text-align:left;
font-size:11px
}

.exercise-option:hover{
border-color:var(--primary)
}

.exercise-option.correct{
border-color:var(--green);
background:var(--green-soft);
color:var(--green)
}

.exercise-option.wrong{
border-color:var(--red);
background:var(--red-soft);
color:var(--red)
}

.exercise-option:disabled{
cursor:default
}

.correction{
margin-top:10px;
padding:11px;
border-radius:9px;
background:var(--primary-soft);
color:var(--text-soft);
font-size:11px
}

.hidden{
display:none!important
}

.chapter-footer{
display:flex;
justify-content:space-between;
align-items:center;
gap:10px;
margin-top:20px;
padding-top:18px;
border-top:1px solid var(--line);
color:var(--text-soft);
font-size:11px
}

.footer-actions{
display:flex;
gap:8px
}


/* =========================================================
   MOBILE
   ========================================================= */

.mobile-nav{
display:none
}


@media(max-width:1050px){

:root{
--sidebar:215px
}

.main-content{
padding-left:25px;
padding-right:25px
}

.welcome{
grid-template-columns:1fr
}

.chapter-layout{
grid-template-columns:1fr
}

.chapter-sidebar{
display:grid;
grid-template-columns:1fr 1fr;
gap:12px
}

.chapter-sidebar-card+.chapter-sidebar-card{
margin-top:0
}

}


@media(max-width:780px){

:root{
--sidebar:0px
}

.sidebar{
display:none
}

.main-content{
margin-left:0;
padding:22px 17px 90px
}

.welcome-main{
min-height:auto;
padding:27px
}

.daily-card{
padding:23px
}

.home-stats{
grid-template-columns:repeat(2,1fr)
}

.subject-cards,
.home-grid,
.domain-grid,
.memo-grid,
.exam-list{
grid-template-columns:1fr
}

.page-header{
align-items:flex-start
}

.page-counter{
display:none
}

.chapter-hero{
grid-template-columns:1fr
}

.chapter-progress-box{
width:100%
}

.chapter-tabs{
overflow-x:auto
}

.chapter-tab{
min-width:100px
}

.progress-overview{
grid-template-columns:1fr
}

.progress-row{
grid-template-columns:1fr;
gap:6px
}

.progress-row-value{
text-align:left
}

.chapter-sidebar{
display:block
}

.chapter-sidebar-card+.chapter-sidebar-card{
margin-top:13px
}

.game-grid{
grid-template-columns:1fr 1fr
}

.result-actions{
flex-direction:column
}

.result-actions .button{
width:100%
}

.mobile-nav{
position:fixed;
z-index:200;
left:10px;
right:10px;
bottom:10px;
display:grid;
grid-template-columns:repeat(5,1fr);
padding:7px;
border:1px solid var(--line);
border-radius:17px;
background:rgba(255,255,255,.92);
box-shadow:var(--shadow-lg);
backdrop-filter:blur(16px)
}

body.dark .mobile-nav{
background:rgba(25,34,48,.94)
}

.mobile-nav button{
display:flex;
flex-direction:column;
align-items:center;
gap:2px;
padding:7px 2px;
border:0;
border-radius:10px;
background:transparent;
color:var(--text-soft)
}

.mobile-nav button span{
font-size:16px
}

.mobile-nav button small{
font-size:8px;
font-weight:850
}

}


@media(max-width:500px){

.main-content{
padding-left:13px;
padding-right:13px
}

h1{
font-size:31px
}

.welcome-main h1{
font-size:38px
}

.welcome-actions{
flex-direction:column
}

.welcome-actions .button{
width:100%
}

.home-stats{
gap:8px
}

.home-stat{
padding:14px
}

.subject-card,
.panel,
.content-card{
padding:18px
}

.chapter-title-row{
flex-direction:column
}

.chapter-big-icon{
width:46px;
height:46px
}

.game-grid{
grid-template-columns:1fr
}

.year-summary{
grid-template-columns:1fr
}

.modal{
padding:8px
}

.modal-box{
padding:20px 15px
}

}
Ce que cette version change concrètement
Accueil beaucoup plus rempli : statistiques, matières, priorités et activité.
Maths/Géo : sélection 3e → 6e, progression par année et regroupement par domaine quand les données le permettent.
Chaque chapitre s'ouvre dans une vraie interface avec :
📖 Cours
⭐ À retenir
🎯 Exercices
objectifs
notions
progression
Mémo avec recherche + filtre par année.
Jeux avec quiz mixte, Maths, Géo, Vrai/Faux, erreurs et capitales.
Examens blancs Maths/Géo + affichage des sujets CESS présents dans tes données.
Suivi beaucoup plus complet.
Mode sombre.
Interface mobile avec barre de navigation inférieure.
Et j'ai aussi supprimé le problème du favicon 404 en mettant un favicon directement dans index.html.

Tes données géographiques actuelles contiennent notamment les chapitres enrichis, leurs cours/objectifs/exercices ainsi qu'un jeu de capitales et un sujet CESS ; cette V2 les exploite au lieu de les remplacer.

Ordre sur GitHub :

remplace index.html
remplace app.js
remplace style.css
ne touche pas à maths-data.js, geo-data.js, geo-vocab.js
attends quelques secondes que GitHub Pages se redéploie
recharge avec Ctrl + F5

J'ai également vérifié la syntaxe JavaScript du nouveau app.js avant de te le donner.
