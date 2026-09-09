/* =========================================================
   CARNET CESS
   APPLICATION PRINCIPALE - VERSION COMPLETE CORRIGEE
   ========================================================= */

const DBKEY = 'carnetCESSv3';

/* =========================================================
   ETAT
   ========================================================= */

let state;
try {
    state = JSON.parse(localStorage.getItem(DBKEY) || 'null') || {
        progress: {},
        results: [],
        mistakes: [],
        streak: 0,
        theme: 'light'
    };
} catch (error) {
    console.warn('Impossible de lire LocalStorage.', error);
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
        data: function() {
            return typeof CHAPITRES !== 'undefined' ? CHAPITRES : {};
        }
    },
    geo: {
        label: 'Géographie',
        icon: '🌍',
        data: function() {
            return typeof GEO_CHAPITRES !== 'undefined' ? GEO_CHAPITRES : {};
        }
    }
};

/* =========================================================
   SAUVEGARDE
   ========================================================= */

function save() {
    try {
        localStorage.setItem(DBKEY, JSON.stringify(state));
    } catch (error) {
        console.warn('Impossible de sauvegarder.', error);
    }
}

/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {
    document.body.classList.toggle('dark');
    state.theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    save();
}

if (state.theme === 'dark') {
    document.body.classList.add('dark');
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(id) {
    const target = document.getElementById(id);
    if (!target) {
        console.warn('Vue introuvable :', id);
        return;
    }

    document.querySelectorAll('.view').forEach(function(view) {
        view.classList.remove('active');
    });

    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch(id) {
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
        case 'progress':
            renderProgress();
            break;
    }
}

/* =========================================================
   CHAPITRES
   ========================================================= */

function allChaps(subject) {
    const data = SUBJECTS[subject].data();
    if (!data || typeof data !== 'object') {
        return [];
    }

    return Object.entries(data).flatMap(function(entry) {
        const annee = entry[0];
        const arr = entry[1];
        if (!Array.isArray(arr)) return [];
        return arr.map(function(chapter) {
            return { ...chapter, annee: annee, matiere: subject };
        });
    });
}

/* =========================================================
   PROGRESSION
   ========================================================= */

function pctSubject(subject) {
    const chapters = allChaps(subject);
    if (!chapters.length) return 0;

    const done = chapters.filter(function(chapter) {
        return Number(state.progress[chapter.id] || 0) >= 100;
    }).length;

    return Math.round(done / chapters.length * 100);
}

function findChapter(id) {
    return allChaps('maths').concat(allChaps('geo')).find(function(chapter) {
        return chapter.id === id;
    });
}

function shuffle(array) {
    return [...array].sort(function() {
        return Math.random() - 0.5;
    });
}

/* =========================================================
   ACCUEIL
   ========================================================= */

function renderHome() {
    const homeStats = document.getElementById('homeStats');
    if (!homeStats) return;

    const mathsCount = allChaps('maths').length;
    const geoCount = allChaps('geo').length;
    const total = mathsCount + geoCount;

    homeStats.innerHTML = [
        ['📚', total, 'Chapitres'],
        ['📐', pctSubject('maths') + '%', 'Maîtrise Maths'],
        ['🌍', pctSubject('geo') + '%', 'Maîtrise Géo'],
        ['🎯', state.results.length, 'Quiz réalisés']
    ].map(function(item) {
        return `
            <div class="stat">
                <b>${item[0]} ${item[1]}</b>
                <span>${item[2]}</span>
            </div>
        `;
    }).join('');

    const subjectProgress = document.getElementById('subjectProgress');
    if (subjectProgress) {
        subjectProgress.innerHTML = ['maths', 'geo'].map(function(subject) {
            const percentage = pctSubject(subject);
            return `
                <div class="progress-row">
                    <div class="progress-label">
                        <span>${SUBJECTS[subject].icon} ${SUBJECTS[subject].label}</span>
                        <span>${percentage}%</span>
                    </div>
                    <div class="bar">
                        <i style="width:${percentage}%"></i>
                    </div>
                </div>
            `;
        }).join('');
    }

    const priorities = document.getElementById('priorities');
    if (priorities) {
        const chapters = allChaps('maths')
            .concat(allChaps('geo'))
            .filter(function(chapter) {
                return Number(state.progress[chapter.id] || 0) < 100;
            })
            .slice(0, 5);

        priorities.innerHTML = chapters.length
            ? chapters.map(function(chapter) {
                return `
                    <div class="priority">
                        <span>${chapter.icone || '📘'} ${chapter.titre}</span>
                        <b>${chapter.annee}</b>
                    </div>
                `;
            }).join('')
            : `<div class="empty">🎉 Tout est marqué comme maîtrisé !</div>`;
    }
}

/* =========================================================
   AFFICHAGE D'UNE MATIERE
   ========================================================= */

function renderSubject(subject) {
    const data = SUBJECTS[subject].data();
    const totalElement = document.getElementById(subject === 'maths' ? 'mathsTotal' : 'geoTotal');
    const yearsElement = document.getElementById(subject === 'maths' ? 'mathYears' : 'geoYears');
    const contentElement = document.getElementById(subject === 'maths' ? 'mathContent' : 'geoContent');

    if (!totalElement || !yearsElement || !contentElement) return;

    const allChapters = allChaps(subject);
    totalElement.textContent = allChapters.length + ' chapitres';

    const years = ['3e', '4e', '5e', '6e'];
    yearsElement.innerHTML = years.map(function(year) {
        const chapters = Array.isArray(data[year]) ? data[year] : [];
        const done = chapters.filter(function(chapter) {
            return Number(state.progress[chapter.id] || 0) >= 100;
        }).length;
        const percentage = chapters.length ? Math.round(done / chapters.length * 100) : 0;

        return `
            <button class="year-card ${selectedYear[subject] === year ? 'active' : ''}"
                    onclick="selectedYear['${subject}']='${year}'; renderSubject('${subject}');">
                <b>${year} année</b>
                <small>${chapters.length} chapitres · ${percentage}% maîtrisé</small>
            </button>
        `;
    }).join('');

    const chapters = Array.isArray(data[selectedYear[subject]]) ? data[selectedYear[subject]] : [];

    if (!chapters.length) {
        contentElement.innerHTML = `<div class="empty">Aucun chapitre disponible pour cette année.</div>`;
        return;
    }

    contentElement.innerHTML = `
        <div class="chapter-list">
            ${chapters.map(function(chapter) {
                const done = Number(state.progress[chapter.id] || 0) >= 100;
                return `
                    <article class="chapter">
                        <span style="font-size:30px">${chapter.icone || '📘'}</span>
                        <div class="chapter-main">
                            <h3>${chapter.titre}</h3>
                            <p>${chapter.desc || ''}</p>
                        </div>
                        <span class="badge ${done ? 'done' : ''}">${done ? '✓ Maîtrisé' : 'À revoir'}</span>
                        <button onclick="openChapter('${chapter.id}')">Ouvrir</button>
                    </article>
                `;
            }).join('')}
        </div>
    `;
}

/* =========================================================
   OUVRIR CHAPITRE
   ========================================================= */

function openChapter(id) {
    const chapter = findChapter(id);
    if (!chapter) {
        console.warn('Chapitre introuvable :', id);
        return;
    }

    const content = document.createElement('div');
    content.className = 'detail';

    const objectives = Array.isArray(chapter.objectifs) ? chapter.objectifs : [];
    const matieres = Array.isArray(chapter.matieres) ? chapter.matieres : [];

    content.innerHTML = `
        <div class="eyebrow">
            ${SUBJECTS[chapter.matiere].icon}
            ${SUBJECTS[chapter.matiere].label}
            · ${chapter.annee}
        </div>
        <h2>${chapter.icone || ''} ${chapter.titre}</h2>
        <p>${chapter.desc || ''}</p>
        
        ${matieres.length ? `
            <h3>📚 À savoir</h3>
            <ul>${matieres.map(function(item) {
                return `<li>${item}</li>`;
            }).join('')}</ul>
        ` : ''}
        
        <div class="course">${chapter.cours || ''}</div>
        
        <h3>🎯 Objectifs</h3>
        <ul>
            ${objectives.length
                ? objectives.map(function(item) {
                    return `<li>${item}</li>`;
                }).join('')
                : '<li>Aucun objectif renseigné.</li>'
            }
        </ul>
        
        <div class="detail-actions">
            <button class="success" onclick="markDone('${chapter.id}')">✓ Marquer maîtrisé</button>
            <button class="primary" onclick="quizChapter('${chapter.id}')">🎯 Faire le quiz</button>
            <button class="close" onclick="this.closest('.detail').remove()">Fermer</button>
        </div>
    `;

    const host = document.getElementById(chapter.matiere === 'maths' ? 'mathContent' : 'geoContent');
    if (host) {
        host.prepend(content);
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/* =========================================================
   MARQUER COMME MAITRISE
   ========================================================= */

function markDone(id) {
    const chapter = findChapter(id);
    if (!chapter) return;

    state.progress[id] = 100;
    save();
    renderHome();
    renderSubject(chapter.matiere);
}

/* =========================================================
   QUESTIONS
   ========================================================= */

function flattenQuestions(filter) {
    filter = filter || 'all';
    const chapters = allChaps('maths').concat(allChaps('geo'));
    let questions = [];

    chapters.forEach(function(chapter) {
        if (!Array.isArray(chapter.exercices)) return;

        chapter.exercices.forEach(function(question, index) {
            if (!Array.isArray(question.options) || question.options.length === 0) return;
            
            questions.push({
                ...question,
                id: chapter.id + '_' + index,
                chapter: chapter.titre,
                annee: chapter.annee,
                matiere: chapter.matiere,
                correct: typeof question.correct === 'number' ? question.correct : 0
            });
        });
    });

    if (filter === 'mistakes') {
        return questions.filter(function(question) {
            return state.mistakes.includes(question.id);
        });
    }

    if (filter === 'maths' || filter === 'geo') {
        return questions.filter(function(question) {
            return question.matiere === filter;
        });
    }

    return questions;
}

/* =========================================================
   DEMARRER QUIZ - VERSION CORRIGEE AVEC VRAI/FAUX
   ========================================================= */

function startQuiz(mode) {
    let questions;

    if (mode === 'truefalse') {
        // =====================================================
        // VRAIES QUESTIONS VRAI/FAUX
        // =====================================================
        questions = [
            // === MATHS 3e ===
            {
                id: 'tf_maths_1',
                question: 'Deux triangles isométriques ont leurs côtés homologues de même longueur.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Triangles isométriques'
            },
            {
                id: 'tf_maths_2',
                question: 'Le critère CAC signifie Côté-Angle-Côté pour prouver que deux triangles sont isométriques.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Triangles isométriques'
            },
            {
                id: 'tf_maths_3',
                question: 'Des triangles semblables ont leurs côtés homologues égaux.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Triangles semblables'
            },
            {
                id: 'tf_maths_4',
                question: 'Le théorème de Thalès s\'applique uniquement avec des droites perpendiculaires.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Théorème de Thalès'
            },
            {
                id: 'tf_maths_5',
                question: '√(a²) = |a| pour tout nombre réel a.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Racines carrées'
            },
            {
                id: 'tf_maths_6',
                question: '√75 = 5√3 après simplification.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Racines carrées'
            },
            {
                id: 'tf_maths_7',
                question: '(a-b)² = a² - 2ab + b² est une identité remarquable.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Polynômes'
            },
            {
                id: 'tf_maths_8',
                question: 'a² - b² = (a-b)² est une identité remarquable correcte.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Polynômes'
            },
            {
                id: 'tf_maths_9',
                question: 'f(2)=3 signifie que l\'image de 2 par la fonction f est 3.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Fonctions'
            },
            {
                id: 'tf_maths_10',
                question: 'Un zéro d\'une fonction correspond à l\'intersection avec l\'axe des ordonnées.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Fonctions'
            },
            {
                id: 'tf_maths_11',
                question: 'Dans f(x)=mx+p, si m>0, la fonction est croissante.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Fonctions du premier degré'
            },
            {
                id: 'tf_maths_12',
                question: 'L\'ordonnée à l\'origine d\'une fonction du premier degré est donnée par m.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Fonctions du premier degré'
            },
            {
                id: 'tf_maths_13',
                question: 'sin(α) = opposé / hypoténuse.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Trigonométrie'
            },
            {
                id: 'tf_maths_14',
                question: 'cos(α) = opposé / adjacent.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Trigonométrie'
            },
            {
                id: 'tf_maths_15',
                question: 'tan(α) = opposé / adjacent.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '3e',
                chapter: 'Trigonométrie'
            },
            // === MATHS 4e ===
            {
                id: 'tf_maths_16',
                question: 'La fonction inverse f(x)=1/x est définie pour toutes les valeurs de x.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'maths',
                annee: '4e',
                chapter: 'Fonctions de référence'
            },
            {
                id: 'tf_maths_17',
                question: 'La fonction carré f(x)=x² est une fonction de référence.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '4e',
                chapter: 'Fonctions de référence'
            },
            {
                id: 'tf_maths_18',
                question: 'La variance est un indicateur de dispersion.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '4e',
                chapter: 'Statistiques'
            },
            {
                id: 'tf_maths_19',
                question: 'L\'étendue d\'une série se calcule par maximum + minimum.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'maths',
                annee: '4e',
                chapter: 'Statistiques'
            },
            {
                id: 'tf_maths_20',
                question: 'La médiane est une mesure de tendance centrale.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'maths',
                annee: '4e',
                chapter: 'Statistiques'
            },
            // === GEOGRAPHIE 3e ===
            {
                id: 'tf_geo_1',
                question: 'Un aléa est un phénomène dangereux potentiel.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '3e',
                chapter: 'Risques naturels'
            },
            {
                id: 'tf_geo_2',
                question: 'La vulnérabilité d\'un territoire dépend uniquement de son climat.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'geo',
                annee: '3e',
                chapter: 'Risques naturels'
            },
            {
                id: 'tf_geo_3',
                question: 'La Belgique a un climat de type océanique.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '3e',
                chapter: 'Climats'
            },
            {
                id: 'tf_geo_4',
                question: 'Les séismes se produisent principalement aux frontières des plaques tectoniques.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '3e',
                chapter: 'Séismes et volcans'
            },
            {
                id: 'tf_geo_5',
                question: 'L\'épicentre d\'un séisme est le point situé à l\'intérieur de la Terre.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'geo',
                annee: '3e',
                chapter: 'Séismes et volcans'
            },
            {
                id: 'tf_geo_6',
                question: 'Une fonction du territoire est un usage de l\'espace (logement, emploi, transport...).',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '3e',
                chapter: 'Fonctions du territoire'
            },
            // === GEOGRAPHIE 4e ===
            {
                id: 'tf_geo_7',
                question: 'Le stress hydrique est une situation où les ressources en eau sont suffisantes.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'geo',
                annee: '4e',
                chapter: 'Accès à l\'eau'
            },
            {
                id: 'tf_geo_8',
                question: 'L\'agriculture vivrière est destinée à nourrir la population locale.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '4e',
                chapter: 'Accès à la nourriture'
            },
            {
                id: 'tf_geo_9',
                question: 'La densité de population est le nombre d\'habitants par km².',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '4e',
                chapter: 'Population'
            },
            // === GEOGRAPHIE 5e ===
            {
                id: 'tf_geo_10',
                question: 'Les énergies fossiles sont des énergies renouvelables.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'geo',
                annee: '5e',
                chapter: 'Énergie'
            },
            {
                id: 'tf_geo_11',
                question: 'La mondialisation correspond à l\'intensification des échanges entre territoires.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '5e',
                chapter: 'Mondialisation'
            },
            {
                id: 'tf_geo_12',
                question: 'Un facteur pull est un facteur qui attire les migrants vers un territoire.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '5e',
                chapter: 'Migrations'
            },
            {
                id: 'tf_geo_13',
                question: 'Un facteur push est un facteur qui attire les migrants.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'geo',
                annee: '5e',
                chapter: 'Migrations'
            },
            // === GEOGRAPHIE 6e ===
            {
                id: 'tf_geo_14',
                question: 'Le développement durable repose sur 3 piliers : économique, social et environnemental.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '6e',
                chapter: 'Développement durable'
            },
            {
                id: 'tf_geo_15',
                question: 'Un conflit d\'usage survient lorsque plusieurs acteurs veulent utiliser le même espace.',
                options: ['Vrai', 'Faux'],
                correct: 0,
                matiere: 'geo',
                annee: '6e',
                chapter: 'Aménagement du territoire'
            },
            {
                id: 'tf_geo_16',
                question: 'La géopolitique étudie uniquement les climats.',
                options: ['Vrai', 'Faux'],
                correct: 1,
                matiere: 'geo',
                annee: '6e',
                chapter: 'Géopolitique'
            }
        ];

        questions = shuffle(questions).slice(0, 10);

    } else if (mode === 'mistakes') {
        questions = flattenQuestions('all').filter(function(q) {
            return state.mistakes.includes(q.id);
        });
        if (!questions.length) {
            const panel = document.getElementById('gamePanel');
            if (panel) {
                panel.innerHTML = '<div class="empty">Aucune erreur enregistrée pour le moment.<br><br>Fais d\'abord un quiz !</div>';
            }
            return;
        }
        questions = shuffle(questions).slice(0, 10);

    } else {
        questions = flattenQuestions(mode === 'mixed' ? 'all' : mode);
        if (!questions.length) {
            const panel = document.getElementById('gamePanel');
            if (panel) {
                panel.innerHTML = '<div class="empty">Aucune question disponible pour ce mode.</div>';
            }
            return;
        }
        questions = shuffle(questions).slice(0, 10);
    }

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
    let questions = flattenQuestions('all').filter(function(question) {
        return question.id.startsWith(id + '_');
    });

    if (!questions.length) {
        alert('Aucune question disponible pour ce chapitre.');
        return;
    }

    quizState = {
        qs: shuffle(questions),
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
    const panel = document.getElementById('gamePanel');
    if (!panel) return;

    if (!quizState || quizState.index >= quizState.qs.length) {
        const score = quizState ? quizState.score : 0;
        const total = quizState ? quizState.qs.length : 0;
        const percentage = total ? Math.round(score / total * 100) : 0;

        panel.innerHTML = `
            <div class="result">
                <b>${percentage}%</b>
                <p>${score} bonne(s) réponse(s) sur ${total}</p>
                <button class="primary" onclick="startQuiz('${quizState && quizState.mode === 'chapter' ? 'mixed' : (quizState ? quizState.mode : 'mixed')}')">
                    Rejouer
                </button>
            </div>
        `;
        return;
    }

    const question = quizState.qs[quizState.index];
    const options = Array.isArray(question.options) ? question.options : [];

    if (options.length === 0) {
        quizState.index++;
        renderQuiz();
        return;
    }

    panel.innerHTML = `
        <div class="quiz-meta">
            <span>Question ${quizState.index + 1} / ${quizState.qs.length}</span>
            <span>${question.matiere === 'maths' ? '📐 Maths' : '🌍 Géo'} · ${question.annee}</span>
        </div>
        <div class="question">${question.question}</div>
        <div class="options">
            ${options.map(function(option, index) {
                return `<button onclick="answerQuiz(${index})">${option}</button>`;
            }).join('')}
        </div>
    `;
}

/* =========================================================
   REPONSE QUIZ
   ========================================================= */

function answerQuiz(index) {
    if (!quizState) return;

    const question = quizState.qs[quizState.index];

    if (index === question.correct) {
        quizState.score++;
    } else {
        state.mistakes.push(question.id);
        state.mistakes = [...new Set(state.mistakes)];
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
    if (typeof CAPITALES === 'undefined' || !Array.isArray(CAPITALES) || !CAPITALES.length) {
        const panel = document.getElementById('gamePanel');
        if (panel) {
            panel.innerHTML = '<div class="empty">Le jeu des capitales n\'est pas disponible.</div>';
        }
        return;
    }

    const questions = shuffle(CAPITALES).slice(0, 10).map(function(capital, index) {
        const others = shuffle(CAPITALES.filter(function(item) {
            return item.capitale !== capital.capitale;
        })).slice(0, 3).map(function(item) {
            return item.capitale;
        });

        const options = shuffle([capital.capitale, ...others]);

        return {
            id: 'capital_' + index,
            question: 'Quelle est la capitale de ' + capital.pays + ' ?',
            options: options,
            correct: options.indexOf(capital.capitale),
            matiere: 'geo',
            annee: '—'
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

    document.querySelectorAll('.memo-tabs button').forEach(function(item) {
        item.classList.remove('active');
    });

    if (button) {
        button.classList.add('active');
    }

    renderMemo();
}

/* =========================================================
   RENDU MEMO
   ========================================================= */

function renderMemo() {
    const box = document.getElementById('memoContent');
    if (!box) return;

    const searchElement = document.getElementById('memoSearch');
    const yearElement = document.getElementById('memoYear');

    const term = (searchElement ? searchElement.value : '').toLowerCase().trim();
    const year = yearElement ? yearElement.value : 'all';

    if (memoMode === 'vocab') {
        let vocabulary = [];
        if (typeof GEO_VOCAB_DATA !== 'undefined' && Array.isArray(GEO_VOCAB_DATA)) {
            vocabulary = GEO_VOCAB_DATA;
        } else if (typeof GEO_VOCAB !== 'undefined' && typeof GEO_VOCAB === 'object') {
            vocabulary = Object.values(GEO_VOCAB).flat();
        }

        const filtered = vocabulary.filter(function(item) {
            const text = (item.terme || item.mot || '') + ' ' + 
                        (item.definition || item.def || '') + ' ' + 
                        (item.exemple || '') + ' ' + 
                        (item.categorie || item.theme || '');
            return text.toLowerCase().includes(term);
        });

        box.innerHTML = filtered.length
            ? filtered.map(function(item) {
                return `
                    <article class="memo-card">
                        <div class="top">
                            <h3>${item.terme || item.mot || 'Terme'}</h3>
                            <span class="badge">${item.niveau || item.annee || '—'} · ${item.categorie || item.theme || 'Géographie'}</span>
                        </div>
                        <p>${item.definition || item.def || ''}</p>
                        ${item.exemple ? `<p class="exemple">📌 ${item.exemple}</p>` : ''}
                    </article>
                `;
            }).join('')
            : `<div class="empty">Aucun mot trouvé.</div>`;

        return;
    }

    let formulas = [];
    if (typeof FORMULES_DATA !== 'undefined') {
        Object.values(FORMULES_DATA).forEach(function(list) {
            if (Array.isArray(list)) {
                formulas.push(...list);
            }
        });
    }

    formulas = formulas.filter(function(formula) {
        const text = (formula.titre || '') + ' ' + 
                    (formula.definition || '') + ' ' + 
                    (formula.explication || '') + ' ' + 
                    (formula.categorie || '');
        return text.toLowerCase().includes(term);
    });

    box.innerHTML = formulas.length
        ? formulas.map(function(formula) {
            return `
                <article class="memo-card">
                    <div class="top">
                        <h3>${formula.icone || '📐'} ${formula.titre}</h3>
                        <span class="badge">${formula.categorie || 'Maths'}</span>
                    </div>
                    <p>${formula.definition || ''}</p>
                    ${formula.explication ? `<div class="formula">${formula.explication}</div>` : ''}
                </article>
            `;
        }).join('')
        : `<div class="empty">Aucune formule trouvée.</div>`;
}

/* =========================================================
   EXAMEN
   ========================================================= */

function startExam(subject) {
    const questions = flattenQuestions(subject);

    if (!questions.length) {
        const panel = document.getElementById('examPanel');
        if (panel) {
            panel.innerHTML = `
                <div class="empty">
                    Aucune question disponible pour cet examen.
                </div>
            `;
        }
        return;
    }

    examState = {
        qs: shuffle(questions).slice(0, 15),
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
    const panel = document.getElementById('examPanel');
    if (!panel || !examState) return;

    if (examState.index >= examState.qs.length) {
        const percentage = examState.qs.length ? Math.round(examState.score / examState.qs.length * 100) : 0;

        panel.innerHTML = `
            <div class="result">
                <b>${percentage}%</b>
                <p>${examState.score} / ${examState.qs.length} réponses correctes.</p>
                <button class="primary" onclick="startExam('${examState.subject}')">Recommencer</button>
            </div>
        `;
        return;
    }

    const question = examState.qs[examState.index];
    const options = Array.isArray(question.options) ? question.options : [];

    if (options.length === 0) {
        examState.index++;
        renderExam();
        return;
    }

    panel.innerHTML = `
        <div class="quiz-meta">
            <span>Examen ${examState.subject === 'maths' ? 'Maths' : 'Géographie'}</span>
            <span>Question ${examState.index + 1} / ${examState.qs.length}</span>
        </div>
        <div class="question">${question.question}</div>
        <div class="options">
            ${options.map(function(option, index) {
                return `<button onclick="answerExam(${index})">${option}</button>`;
            }).join('')}
        </div>
    `;
}

/* =========================================================
   REPONSE EXAMEN
   ========================================================= */

function answerExam(index) {
    if (!examState) return;

    const question = examState.qs[examState.index];

    if (index === question.correct) {
        examState.score++;
    } else {
        state.mistakes.push(question.id);
        state.mistakes = [...new Set(state.mistakes)];
    }

    examState.index++;
    save();
    renderExam();
}

/* =========================================================
   PROGRESSION
   ========================================================= */

function renderProgress() {
    const container = document.getElementById('progressContent');
    if (!container) return;

    const subjects = ['maths', 'geo'];

    const rows = subjects.map(function(subject) {
        const global = pctSubject(subject);
        const years = ['3e', '4e', '5e', '6e'];

        const yearRows = years.map(function(year) {
            const chapters = Array.isArray(SUBJECTS[subject].data()[year]) 
                ? SUBJECTS[subject].data()[year] 
                : [];
            
            const done = chapters.filter(function(chapter) {
                return Number(state.progress[chapter.id] || 0) >= 100;
            }).length;
            
            const percentage = chapters.length ? Math.round(done / chapters.length * 100) : 0;

            return `
                <div class="progress-row">
                    <div class="progress-label">
                        <span>${year}</span>
                        <span>${percentage}%</span>
                    </div>
                    <div class="bar">
                        <i style="width:${percentage}%"></i>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="panel">
                <h2>${SUBJECTS[subject].icon} ${SUBJECTS[subject].label}</h2>
                <div class="progress-row">
                    <div class="progress-label">
                        <span>Progression globale</span>
                        <span>${global}%</span>
                    </div>
                    <div class="bar">
                        <i style="width:${global}%"></i>
                    </div>
                </div>
                ${yearRows}
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="grid2">${rows}</div>
        <div class="panel" style="margin-top:20px">
            <h2>🏆 Historique</h2>
            <p>Quiz réalisés : <b>${state.results.length}</b> · Erreurs enregistrées : <b>${state.mistakes.length}</b></p>
        </div>
    `;
}

/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener('DOMContentLoaded', function() {
    renderHome();
    renderSubject('maths');
    renderSubject('geo');
    renderMemo();
});
