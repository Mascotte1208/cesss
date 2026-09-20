/* =========================================================
   CARNET CESS — RENDU DES PAGES GÉNÉRALES
   Accueil, révision rapide, mémo (formules/vocabulaire),
   progression et panneau de jeux.
   ========================================================= */

/* =========================================================
   ACCUEIL
   ========================================================= */

function renderHome() {
    var stats =
        document.getElementById('homeStats');

    if (!stats) {
        return;
    }

    var mathsCount =
        allChaps('maths').length;

    var geoCount =
        allChaps('geo').length;

    var bioCount =
        allChaps('bio').length;

    var total =
        mathsCount + geoCount + bioCount;

    stats.innerHTML = [
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
            cessState.results.length,
            'Quiz réalisés'
        ]
    ].map(function (item) {

        return '<div class="home-stat">' +
            '<span class="home-stat-icon">' + item[0] + '</span>' +
            '<span class="home-stat-value">' + item[1] + '</span>' +
            '<span class="home-stat-label">' + item[2] + '</span>' +
            '</div>';

    }).join('');


    // Matières sur l'accueil
    var subjects = document.getElementById('homeSubjects');
    if (subjects) {
        var homeKeys = learningProfile().subjects.length ? learningProfile().subjects : Object.keys(CESS_SUBJECTS);
        subjects.innerHTML = homeKeys.map(function(subject) {
            var pct = pctSubject(subject);
            var totalChaps = allChaps(subject).length;
            var done = 0;
            var chaps = allChaps(subject);
            for (var i = 0; i < chaps.length; i++) {
                if (getChapterProgress(chaps[i].id) >= 100) done++;
            }
            var info = CESS_SUBJECTS[subject] || {};
            var cardClass = subject + '-card';
            var icon = info.icon || '📘';
            var label = info.label || subject;

            return `
                <div class="subject-card ${cardClass}" style="border-top:4px solid ${info.color || 'var(--primary)'}">
                    <div class="subject-card-top">
                        <div class="subject-icon">${icon}</div>
                        <span class="subject-arrow">→</span>
                    </div>
                    <h3>${label}</h3>
                    <p>${done}/${totalChaps} chapitres maîtrisés</p>
                    <div class="progress-line"><span style="width:${pct}%"></span></div>
                    <div class="subject-card-footer">
                        <span>${pct}% terminé</span>
                        <button onclick="showView('${subject}')">Continuer →</button>
                    </div>
                </div>
            `;
        }).join('');
    }


    var priorities =
        document.getElementById(
            'homePriorities'
        );

    if (priorities) {

        var chapters =
            allChaps('maths')
                .concat(allChaps('geo'))
                .concat(allChaps('bio'))
                .filter(function (chapter) {
                    return getChapterProgress(
                        chapter.id
                    ) < 100 && getChapterProgress(chapter.id) > 0;
                })
                .slice(0, 5);

        if (!chapters.length) {

            priorities.innerHTML =
                '<div class="empty-state">Aucun chapitre en cours. Choisis une matière pour commencer.</div>';

        } else {

            priorities.innerHTML =
                '<div class="simple-list">' +
                chapters.map(function (chapter) {

                    return `
                        <div class="simple-list-item">
                            <div class="simple-list-icon">${chapter.icone || '📘'}</div>
                            <div class="simple-list-main">
                                <strong>${escapeHtml(chapter.titre || 'Chapitre')}</strong>
                                <small>${escapeHtml(chapter.matiere || '')} · ${escapeHtml(chapter.annee || '')}</small>
                            </div>
                            <button class="simple-list-action" onclick="openChapter('${chapter.id}')">Reprendre</button>
                        </div>
                    `;

                }).join('') +
                '</div>';
        }
    }


    // Activité récente
    var activity = document.getElementById('homeActivity');
    if (activity) {
        var recent = cessState.results.slice(-5).reverse();
        if (!recent.length) {
            activity.innerHTML = '<div class="empty-state">Aucune activité récente. Lance un quiz !</div>';
        } else {
            activity.innerHTML = '<div class="simple-list">' +
                recent.map(function(r) {
                    var date = new Date(r.date);
                    return `
                        <div class="simple-list-item">
                            <div class="simple-list-icon">📝</div>
                            <div class="simple-list-main">
                                <strong>${escapeHtml(r.mode || 'Quiz')}</strong>
                                <small>${r.score}/${r.total} · ${date.toLocaleDateString('fr-BE')}</small>
                            </div>
                            <span style="font-size:11px;font-weight:850;color:var(--primary)">${r.percentage || 0}%</span>
                        </div>
                    `;
                }).join('') +
                '</div>';
        }
    }
}



/* =========================================================
   REVISION RAPIDE
   ========================================================= */

function quickRevision() {
    var questions =
        flattenQuestions('all');

    if (!questions.length) {
        alert(
            'Aucune question disponible pour le moment.'
        );
        return;
    }

    showView('games');

    startQuiz('mixed');
}



/* =========================================================
   MEMO
   ========================================================= */

function setMemoMode(mode) {
    cessMemoMode = mode;

    var tabs = document.querySelectorAll('.memo-tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        if (tabs[i].getAttribute('data-mode') === mode) {
            tabs[i].classList.add('active');
        }
    }

    renderMemo();
}


function renderMemo() {

    var content =
        document.getElementById(
            'memoContent'
        );

    if (!content) {
        return;
    }

    var searchElement =
        document.getElementById(
            'memoSearch'
        );

    var yearElement =
        document.getElementById(
            'memoYear'
        );

    var search =
        searchElement
            ? searchElement.value
                .toLowerCase()
                .trim()
            : '';

    var year =
        yearElement
            ? yearElement.value
            : 'all';


    if (
        cessMemoMode ===
        'formules'
    ) {

        renderFormules(
            content,
            search,
            year
        );

    } else {

        renderVocabulaire(
            content,
            search,
            year
        );
    }
}


function renderFormules(
    content,
    search,
    year
) {

    var formulas =
        typeof FORMULES_DATA !== 'undefined'
            ? FORMULES_DATA
            : null;


    if (!formulas) {

        content.innerHTML = `
            <div class="empty-state">
                Les formules ne sont pas
                disponibles.
            </div>
        `;

        return;
    }


    var items = [];


    if (Array.isArray(formulas)) {

        items =
            formulas.map(function (item) {
                return item;
            });

    } else if (
        typeof formulas === 'object'
    ) {

        var keys =
            Object.keys(formulas);

        for (
            var i = 0;
            i < keys.length;
            i++
        ) {

            var key =
                keys[i];

            var value =
                formulas[key];

            if (
                Array.isArray(value)
            ) {

                for (
                    var j = 0;
                    j < value.length;
                    j++
                ) {

                    items.push(
                        value[j]
                    );

                }

            } else if (
                value &&
                typeof value === 'object'
            ) {

                items.push(
                    value
                );
            }
        }
    }


    items =
        items.filter(function (item) {

            var text =
                JSON.stringify(item)
                    .toLowerCase();

            var matchSearch =
                !search ||
                text.indexOf(search) !== -1;

            var matchYear =
                year === 'all' ||
                String(
                    item.annee ||
                    item.year ||
                    ''
                ) === year;

            return (
                matchSearch &&
                matchYear
            );

        });


    if (!items.length) {

        content.innerHTML = `
            <div class="empty-state">
                Aucune formule trouvée.
            </div>
        `;

        return;
    }


    content.innerHTML = `

        <div class="memo-grid">

            ${items.map(function (item) {

                var title =
                    item.titre ||
                    item.title ||
                    item.nom ||
                    'Formule';

                var formula =
                    item.formule ||
                    item.formula ||
                    item.expression ||
                    '';

                var description =
                    item.definition ||
                    item.description ||
                    item.desc ||
                    '';

                return `

                    <div class="memo-card">

                        <strong>
                            ${escapeHtml(
                                title
                            )}
                        </strong>

                        ${
                            formula
                                ? `
                                    <div class="memo-example">
                                        ${escapeHtml(
                                            formula
                                        )}
                                    </div>
                                `
                                : ''
                        }

                        ${
                            description
                                ? `
                                    <p>
                                        ${escapeHtml(
                                            description
                                        )}
                                    </p>
                                `
                                : ''
                        }

                        <span class="memo-tag">
                            ${escapeHtml(
                                item.annee ||
                                ''
                            )}
                            ${item.categorie ? ' · ' + escapeHtml(item.categorie) : ''}
                        </span>

                    </div>

                `;

            }).join('')}

        </div>

    `;
}


function renderVocabulaire(
    content,
    search,
    year
) {

    var vocab =
        typeof GEO_VOCAB !== 'undefined'
            ? GEO_VOCAB
            : null;


    if (!vocab) {

        content.innerHTML = `
            <div class="empty-state">
                Le vocabulaire n'est pas
                disponible.
            </div>
        `;

        return;
    }


    var items =
        Array.isArray(vocab)
            ? vocab.slice()
            : [];


    items =
        items.filter(function (item) {

            var text =
                JSON.stringify(item)
                    .toLowerCase();

            var matchSearch =
                !search ||
                text.indexOf(search) !== -1;

            var matchYear =
                year === 'all' ||
                String(
                    item.annee ||
                    item.year ||
                    ''
                ) === year;

            return (
                matchSearch &&
                matchYear
            );

        });


    if (!items.length) {

        content.innerHTML = `
            <div class="empty-state">
                Aucun mot trouvé.
            </div>
        `;

        return;
    }


    content.innerHTML = `

        <div class="memo-grid">

            ${items.map(function (item) {

                var term =
                    item.mot ||
                    item.terme ||
                    item.term ||
                    'Terme';

                var definition =
                    item.def ||
                    item.definition ||
                    '';

                return `

                    <div class="memo-card">

                        <strong>
                            ${escapeHtml(
                                term
                            )}
                        </strong>

                        <p>
                            ${escapeHtml(
                                definition
                            )}
                        </p>

                        <span class="memo-tag">
                            ${escapeHtml(
                                item.annee ||
                                ''
                            )}
                            ${item.theme ? ' · ' + escapeHtml(item.theme) : ''}
                        </span>

                    </div>

                `;

            }).join('')}

        </div>

    `;
}



/* =========================================================
   PROGRESSION
   ========================================================= */

function renderProgress() {

    var content =
        document.getElementById(
            'progressContent'
        );

    if (!content) {
        return;
    }


    var subjectKeys = learningProfile().subjects.length ? learningProfile().subjects : Object.keys(CESS_SUBJECTS);
    var all = subjectKeys.reduce(function(list,key){return list.concat(allChaps(key));},[]);


    var mastered =
        all.filter(
            function (chapter) {
                return (
                    getChapterProgress(
                        chapter.id
                    ) >= 100
                );
            }
        ).length;


    var total =
        all.length;


    var overall =
        total
            ? Math.round(
                mastered /
                total *
                100
            )
            : 0;


    var correctAnswers = 0;
    var totalAnswers = 0;


    for (
        var i = 0;
        i < cessState.results.length;
        i++
    ) {

        correctAnswers +=
            Number(
                cessState.results[i].score ||
                0
            );

        totalAnswers +=
            Number(
                cessState.results[i].total ||
                0
            );
    }


    var quizRate =
        totalAnswers
            ? Math.round(
                correctAnswers /
                totalAnswers *
                100
            )
            : 0;


    var streak = cessState.streak || 0;


    // Badges
    var badgesHtml = `
        <div class="panel" style="margin-top:18px;">
            <h2>🏆 Succès débloqués</h2>
            <div id="badgesContainer"></div>
        </div>
    `;


    content.innerHTML = `

        <div class="progress-overview">

            <div class="progress-big-card">
                <strong>${overall}%</strong>
                <span>Progression globale</span>
            </div>

            <div class="progress-big-card">
                <strong>${mastered}/${total}</strong>
                <span>Chapitres maîtrisés</span>
            </div>

            <div class="progress-big-card">
                <strong>${quizRate}%</strong>
                <span>Réussite aux quiz</span>
            </div>

        </div>


        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px;margin-bottom:18px">
            ${subjectKeys.map(function(key){
                var info=CESS_SUBJECTS[key]||{},chapters=allChaps(key),done=chapters.filter(function(ch){return getChapterProgress(ch.id)>=100;}).length,pct=pctSubject(key);
                return '<div class="panel"><h2>'+(info.icon||'📘')+' '+escapeHtml(info.label||key)+'</h2><div class="progress-row"><div class="progress-row-name">Progression</div><div class="progress-row-bar"><span style="width:'+pct+'%"></span></div><div class="progress-row-value">'+pct+'%</div></div><div style="margin-top:10px;font-size:13px;color:var(--text-soft)">'+done+'/'+chapters.length+' chapitres</div></div>';
            }).join('')}
        </div>

        <div class="panel">

            <h2>🔥 Série en cours</h2>

            <p style="font-size:13px;color:var(--text-soft)">
                ${streak > 0 ? '🔥 ' + streak + ' jour' + (streak > 1 ? 's' : '') + ' de suite !' : '📖 Continue tes révisions quotidiennes !'}
            </p>

        </div>

        <!-- STATISTIQUES DÉTAILLÉES PAR CHAPITRE -->
        <div class="panel" style="margin-top:18px">
            <h2>📊 Progression par chapitre</h2>
            <div style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;">
    `;

    all.forEach(function(chapter) {
        var progress = getChapterProgress(chapter.id);
        var pct = progress > 0 ? progress : 0;
        var color = pct >= 100 ? 'var(--green)' : (pct > 0 ? 'var(--primary)' : 'var(--text-light)');

        content.innerHTML += `
            <div style="
                background:var(--paper-soft);
                border:1px solid var(--line);
                border-radius:10px;
                padding:12px 15px;
            ">
                <div style="display:flex;align-items:center;gap:8px;font-size:11px;">
                    <span>${chapter.icone || '📘'}</span>
                    <span style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                        ${escapeHtml(chapter.titre || '')}
                    </span>
                    <span style="font-weight:850;color:${color};">${pct}%</span>
                </div>
                <div class="progress-line" style="margin-top:6px;">
                    <span style="width:${pct}%;background:${color};"></span>
                </div>
            </div>
        `;
    });

    content.innerHTML += `
            </div>
        </div>

        ${badgesHtml}

        <div class="panel" style="margin-top:18px">

            <h2>📝 Historique des quiz</h2>

            ${
                cessState.results.length
                    ? `
                        <div style="margin-top:12px">

                            ${cessState.results
                                .slice()
                                .reverse()
                                .slice(0, 20)
                                .map(
                                    function (
                                        result
                                    ) {

                                        var date =
                                            new Date(
                                                result.date
                                            );

                                        return `
                                            <div style="
                                                display:flex;
                                                align-items:center;
                                                justify-content:space-between;
                                                padding:10px 0;
                                                border-bottom:1px solid var(--line);
                                                font-size:12px;
                                            ">

                                                <span style="color:var(--text-soft)">
                                                    ${escapeHtml(
                                                        result.mode || 'Quiz'
                                                    )}
                                                </span>

                                                <strong>
                                                    ${result.score}/${result.total}
                                                </strong>

                                                <span style="
                                                    font-weight:850;
                                                    color:${result.percentage >= 70 ? 'var(--green)' : 'var(--red)'}
                                                ">
                                                    ${result.percentage || 0}%
                                                </span>

                                                <small style="color:var(--text-light)">
                                                    ${date.toLocaleDateString(
                                                        'fr-BE'
                                                    )}
                                                </small>

                                            </div>
                                        `;

                                    }
                                )
                                .join('')}

                        </div>
                    `
                    : `
                        <div class="empty-state">
                            Aucun quiz réalisé pour
                            le moment.
                        </div>
                    `
            }

        </div>

    `;

    // Afficher les badges
    renderBadges();
}



/* =========================================================
   GAME PANEL
   ========================================================= */

var cessGameTab = cessGameTab || 'start';

var GAME_SUBJECT_COLORS = {
    maths: { dark: '#174f98', soft: '#edf5ff' },
    geo: { dark: '#0f5d59', soft: '#e8f5f3' },
    bio: { dark: '#206947', soft: '#edf7f1' },
    francais: { dark: '#923438', soft: '#fdf0f1' },
    histoire: { dark: '#895a15', soft: '#fbf4e7' },
    chimie: { dark: '#57317f', soft: '#f3edfa' },
    physique: { dark: '#24516d', soft: '#eaf3f8' },
    anglais: { dark: '#214f78', soft: '#edf5fb' },
    neerlandais: { dark: '#93491e', soft: '#fff2e9' },
    latin: { dark: '#65472f', soft: '#f7f0e8' },
    numerique: { dark: '#1d5961', soft: '#eaf6f7' },
    sciences_sociales: { dark: '#743653', soft: '#faeef4' },
    sciences_economiques: { dark: '#285838', soft: '#edf7f0' },
    epc: { dark: '#493c7d', soft: '#f1effa' }
};

function setGameTab(tab) {
    cessGameTab = tab;
    renderGamePanel();
}

function renderGamePanel(){
if(typeof stopMiniGame==='function')stopMiniGame();if(typeof quizTimer!=='undefined'&&quizTimer){clearInterval(quizTimer);quizTimer=null;}var panel=document.getElementById('gamePanel');if(!panel)return;
var tab=cessGameTab||'start';

var startHtml='<div style="display:flex;flex-direction:column;gap:12px"><button class="game-card featured" type="button" onclick="startQuiz(\'mixed\')" style="display:flex;align-items:center;gap:14px;text-align:left"><span aria-hidden="true" style="font-size:24px">🎯</span><span><strong style="display:block">Quiz express</strong><small style="display:block;color:var(--text-soft)">15 questions de ton parcours</small><small class="game-meta">7 min · mixte</small></span></button><button class="game-card" type="button" onclick="startSprintGame()" style="display:flex;align-items:center;gap:14px;text-align:left"><span aria-hidden="true" style="font-size:24px">⏱️</span><span><strong style="display:block">Sprint 60 secondes</strong><small style="display:block;color:var(--text-soft)">Réponds vite et garde ton rythme</small><small class="game-meta">1 min · rapide</small></span></button><button class="game-card" type="button" onclick="startQuiz(\'mistakes\')" style="display:flex;align-items:center;gap:14px;text-align:left"><span aria-hidden="true" style="font-size:24px">🧠</span><span><strong style="display:block">Mes erreurs</strong><small style="display:block;color:var(--text-soft)">'+(cessState.mistakes.length?cessState.mistakes.length+' question'+(cessState.mistakes.length>1?'s':'')+' à revoir':'Aucune erreur à revoir')+'</small><small class="game-meta">personnalisé · prioritaire</small></span></button></div>';

var methodGames=[
    {icon:'↔',title:'Relier les notions',subtitle:'4 paires de ton parcours',meta:'3 min · mémoire',action:"startMatchingGame()"},
    {icon:'✎',title:'Phrase et formule à réparer',subtitle:'Langues, maths et sciences',meta:'5 min · précision',action:"startMini('repair')"},
    {icon:'⚗️',title:'Mission laboratoire',subtitle:'Variables, mesures, hypothèses',meta:'5 min · sciences',action:"startMini('lab')"},
    {icon:'🔗',title:'Chronologie express',subtitle:'Dates et événements historiques',meta:'5 min · repères',action:"startAssociationGame()"},
    {icon:'⛓️',title:'Causes et conséquences',subtitle:'Mécanismes historiques',meta:'12 questions',action:"startHistoryCauseGame()"},
    {icon:'🕵️',title:'Enquête sur les sources',subtitle:'Auteur, contexte, limites',meta:'10 questions',action:"startHistorySourceGame()"},
    {icon:'🔎',title:'Détective de document',subtitle:'Les bons réflexes d’analyse',meta:'5 min · méthode',action:"startDetectiveGame()"},
    {icon:'⚡',title:'Vrai / Faux',subtitle:'12 affirmations variées',meta:'4 min · vigilance',action:"startQuiz('truefalse')"}
];
var methodHtml='<div class="game-grid" style="grid-template-columns:repeat(2,1fr)">'+methodGames.map(function(g){
    return '<button class="game-card" type="button" onclick="'+g.action+'"><span aria-hidden="true">'+g.icon+'</span><strong>'+escapeHtml(g.title)+'</strong><small>'+escapeHtml(g.subtitle)+'</small><small class="game-meta">'+escapeHtml(g.meta)+'</small></button>';
}).join('')+'</div>';

var specialtyGames=[
    {icon:'🦴',title:'Mission Corps humain',subtitle:'36 questions',meta:'biologie',action:'showBodyGame()',color:GAME_SUBJECT_COLORS.bio},
    {icon:'🌍',title:'Jeu des capitales',subtitle:'195 pays · 3 niveaux',meta:'géographie',action:'showCapitalLevels()',color:GAME_SUBJECT_COLORS.geo},
    {icon:'⚛️',title:'Quel élément ?',subtitle:'Symboles et noms',meta:'chimie',action:"startChemistryGame('element')",color:GAME_SUBJECT_COLORS.chimie},
    {icon:'🧪',title:'Familles chimiques',subtitle:'Classer les éléments',meta:'chimie',action:"startChemistryGame('family')",color:GAME_SUBJECT_COLORS.chimie}
];
var subjectChips=Object.keys(CESS_SUBJECTS).filter(function(key){return allChaps(key).some(function(ch){return(ch.exercices||[]).length;});}).map(function(key){
    var info=CESS_SUBJECTS[key],count=allChaps(key).reduce(function(n,ch){return n+(ch.exercices||[]).length;},0);
    var color=GAME_SUBJECT_COLORS[key]||{dark:'var(--primary-dark)',soft:'var(--primary-soft)'};
    return '<button class="game-chip" type="button" onclick="startQuiz(\''+key+'\')"><span class="chip-icon" style="background:'+color.soft+';color:'+color.dark+'">'+(info.icon||'📘')+'</span><strong>'+escapeHtml(info.label)+'</strong><small>'+count+' questions</small></button>';
}).join('');
var subjectHtml='<div style="display:flex;flex-direction:column;gap:22px"><div><div class="game-section-title">JEUX SPÉCIALISÉS</div><div class="game-grid" style="grid-template-columns:repeat(2,1fr)">'+specialtyGames.map(function(g){
    return '<button class="game-card" type="button" onclick="'+g.action+'"><span aria-hidden="true" style="background:'+g.color.soft+';color:'+g.color.dark+';width:38px;height:38px;border-radius:50%;display:grid;place-items:center;font-size:17px">'+g.icon+'</span><strong>'+escapeHtml(g.title)+'</strong><small>'+escapeHtml(g.subtitle)+'</small><small class="game-meta">'+escapeHtml(g.meta)+'</small></button>';
}).join('')+'</div></div><div><div class="game-section-title">DÉFI PAR MATIÈRE — série complète et chronométrée</div><div class="game-chip-grid">'+subjectChips+'</div></div></div>';

panel.innerHTML='<div class="games-tabs" role="tablist"><button type="button" role="tab" class="games-tab '+(tab==='start'?'active':'')+'" aria-selected="'+(tab==='start')+'" onclick="setGameTab(\'start\')">🚀 Démarrer</button><button type="button" role="tab" class="games-tab '+(tab==='method'?'active':'')+'" aria-selected="'+(tab==='method')+'" onclick="setGameTab(\'method\')">🧩 Méthode</button><button type="button" role="tab" class="games-tab '+(tab==='subject'?'active':'')+'" aria-selected="'+(tab==='subject')+'" onclick="setGameTab(\'subject\')">📚 Matières</button></div>'+
(tab==='method'?methodHtml:tab==='subject'?subjectHtml:startHtml);
}
