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
        subjects.innerHTML = ['maths', 'geo', 'bio'].map(function(subject) {
            var pct = pctSubject(subject);
            var totalChaps = allChaps(subject).length;
            var done = 0;
            var chaps = allChaps(subject);
            for (var i = 0; i < chaps.length; i++) {
                if (getChapterProgress(chaps[i].id) >= 100) done++;
            }
            var cardClass = subject === 'maths' ? 'maths-card' : (subject === 'geo' ? 'geo-card' : 'bio-card');
            var icon = subject === 'maths' ? '📐' : (subject === 'geo' ? '🌍' : '🧬');
            var label = subject === 'maths' ? 'Mathématiques' : (subject === 'geo' ? 'Géographie' : 'Biologie');

            return `
                <div class="subject-card ${cardClass}">
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
                '<div class="empty-state">🎉 Tout est maîtrisé !</div>';

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


    var maths =
        allChaps('maths');

    var geo =
        allChaps('geo');

    var bio =
        allChaps('bio');

    var all =
        maths.concat(geo).concat(bio);


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

            <div class="panel">

                <h2>📐 Mathématiques</h2>

                <div class="progress-row">
                    <div class="progress-row-name">Progression</div>
                    <div class="progress-row-bar"><span style="width:${pctSubject('maths')}%"></span></div>
                    <div class="progress-row-value">${pctSubject('maths')}%</div>
                </div>

                <div style="margin-top:10px;font-size:11px;color:var(--text-soft)">
                    ${maths.filter(function(c){return getChapterProgress(c.id)>=100}).length}/${maths.length} chapitres
                </div>

            </div>


            <div class="panel">

                <h2>🌍 Géographie</h2>

                <div class="progress-row">
                    <div class="progress-row-name">Progression</div>
                    <div class="progress-row-bar"><span style="width:${pctSubject('geo')}%"></span></div>
                    <div class="progress-row-value">${pctSubject('geo')}%</div>
                </div>

                <div style="margin-top:10px;font-size:11px;color:var(--text-soft)">
                    ${geo.filter(function(c){return getChapterProgress(c.id)>=100}).length}/${geo.length} chapitres
                </div>

            </div>


            <div class="panel">

                <h2>🧬 Biologie</h2>

                <div class="progress-row">
                    <div class="progress-row-name">Progression</div>
                    <div class="progress-row-bar"><span style="width:${pctSubject('bio')}%"></span></div>
                    <div class="progress-row-value">${pctSubject('bio')}%</div>
                </div>

                <div style="margin-top:10px;font-size:11px;color:var(--text-soft)">
                    ${bio.filter(function(c){return getChapterProgress(c.id)>=100}).length}/${bio.length} chapitres
                </div>

            </div>

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

function renderGamePanel() {
    var panel = document.getElementById('gamePanel');
    if (!panel) return;

    panel.innerHTML = `
        <div class="game-grid">
            <button class="game-card" onclick="startQuiz('mixed')">
                <span>🎯</span>
                <strong>Quiz express</strong>
                <small>15 questions variées</small>
            </button>
            <button class="game-card" onclick="startQuiz('truefalse')">
                <span>⚡</span>
                <strong>Vrai / Faux</strong>
                <small>12 affirmations variées</small>
            </button>
            <button class="game-card" onclick="showCapitalLevels()">
                <span>🌍</span>
                <strong>Jeu des capitales</strong>
                <small>195 pays · 3 niveaux</small>
            </button>
            <button class="game-card" onclick="startQuiz('mistakes')">
                <span>🧠</span>
                <strong>Mes erreurs</strong>
                <small>Rejouer les questions ratées</small>
            </button>
            <button class="game-card" onclick="startQuiz('maths')">
                <span>📐</span>
                <strong>Défi Maths</strong>
                <small>Questions de mathématiques</small>
            </button>
            <button class="game-card" onclick="startQuiz('geo')">
                <span>🌍</span>
                <strong>Défi Géo</strong>
                <small>Questions de géographie</small>
            </button>
            <button class="game-card" onclick="startQuiz('bio')">
                <span>🧬</span>
                <strong>Défi Biologie</strong>
                <small>Questions sur le vivant</small>
            </button>
        </div>
    `;
}
