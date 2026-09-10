/* Mini-jeux transversaux : rapides, sobres et réutilisables dans toutes les matières. */
var cessMiniGame = null;

function startSprintGame() {
    var questions = flattenQuestions('all');
    if (!questions.length) return;
    cessQuizState = {
        mode: 'sprint',
        questions: selectFreshQuestions(questions, 10, 'sprint'),
        index: 0,
        score: 0,
        answered: false
    };
    renderQuizQuestion();
}

function startAssociationGame() {
    var cards = [];
    Object.keys(CESS_SUBJECTS).forEach(function (subject) {
        allChaps(subject).forEach(function (chapter) {
            (chapter.matieres || []).slice(0, 3).forEach(function (notion) {
                cards.push({ subject: subject, label: CESS_SUBJECTS[subject].label, icon: CESS_SUBJECTS[subject].icon, notion: notion, chapter: chapter.titre });
            });
        });
    });
    if (!cards.length) return;
    cessMiniGame = { mode: 'association', cards: selectFreshQuestions(cards.map(function (card, index) { card.id = 'assoc_' + index + '_' + card.notion; return card; }), 10, 'association'), index: 0, score: 0 };
    renderAssociationGame();
}

function renderAssociationGame() {
    var panel = document.getElementById('gamePanel');
    if (!panel || !cessMiniGame) return;
    if (cessMiniGame.index >= cessMiniGame.cards.length) return finishMiniGame();
    var card = cessMiniGame.cards[cessMiniGame.index];
    var choices = Object.keys(CESS_SUBJECTS).filter(function (key) { return key !== card.subject; }).sort(function () { return Math.random() - .5; }).slice(0, 3);
    choices.push(card.subject);
    choices = shuffle(choices);
    panel.innerHTML = '<div class="quiz-question-card"><div class="quiz-meta"><span>Association ' + (cessMiniGame.index + 1) + ' / ' + cessMiniGame.cards.length + '</span><strong>' + cessMiniGame.score + ' point' + (cessMiniGame.score > 1 ? 's' : '') + '</strong></div>' +
        '<p class="eyebrow">À quelle matière rattacher cette notion ?</p><h2 style="margin:12px 0 20px">' + escapeHtml(card.notion) + '</h2><div class="quiz-options">' + choices.map(function (key) { return '<button class="quiz-option" type="button" onclick="answerAssociation(\'' + key + '\')">' + (CESS_SUBJECTS[key].icon || '📘') + ' ' + escapeHtml(CESS_SUBJECTS[key].label) + '</button>'; }).join('') + '</div><div id="miniFeedback"></div></div>';
}

function answerAssociation(answer) {
    if (!cessMiniGame) return;
    var card = cessMiniGame.cards[cessMiniGame.index];
    var good = answer === card.subject;
    if (good) cessMiniGame.score++;
    var feedback = document.getElementById('miniFeedback');
    if (feedback) feedback.innerHTML = '<div class="quiz-feedback ' + (good ? 'good' : 'bad') + '"><strong>' + (good ? '✓ Bonne association' : '✗ À revoir') + '</strong><p>Cette notion appartient à « ' + escapeHtml(card.chapter) + ' » en ' + escapeHtml(card.label) + '.</p><button class="button primary" type="button" onclick="nextMiniGame()">' + (cessMiniGame.index + 1 === cessMiniGame.cards.length ? 'Voir le résultat' : 'Suivant →') + '</button></div>';
    document.querySelectorAll('.quiz-option').forEach(function (button) { button.disabled = true; });
}

function startDetectiveGame() {
    var chapters = [];
    Object.keys(CESS_SUBJECTS).forEach(function (subject) { chapters = chapters.concat(allChaps(subject)); });
    cessMiniGame = { mode: 'detective', cards: selectFreshQuestions(chapters.map(function (chapter) { return { id: 'doc_' + chapter.id, chapter: chapter }; }), 8, 'detective'), index: 0, score: 0 };
    renderDetectiveGame();
}

function renderDetectiveGame() {
    var panel = document.getElementById('gamePanel');
    if (!panel || !cessMiniGame) return;
    if (cessMiniGame.index >= cessMiniGame.cards.length) return finishMiniGame();
    var chapter = cessMiniGame.cards[cessMiniGame.index].chapter;
    cessMiniGame.notions = (chapter.matieres || []).slice(0, 3).join(', ');
    panel.innerHTML = '<div class="quiz-question-card"><div class="quiz-meta"><span>Document ' + (cessMiniGame.index + 1) + ' / ' + cessMiniGame.cards.length + '</span><strong>' + cessMiniGame.score + ' point' + (cessMiniGame.score > 1 ? 's' : '') + '</strong></div><p class="eyebrow">Détective de document</p><h2 style="margin:12px 0">Avant d’utiliser un document sur « ' + escapeHtml(chapter.titre) + ' », que faut-il vérifier en priorité ?</h2><div class="quiz-options"><button class="quiz-option" type="button" onclick="answerDetective(true)">Le titre, la source, la date, les unités et le contexte</button><button class="quiz-option" type="button" onclick="answerDetective(false)">Seulement si le document confirme mon opinion</button><button class="quiz-option" type="button" onclick="answerDetective(false)">La couleur ou la mise en page avant tout</button><button class="quiz-option" type="button" onclick="answerDetective(false)">Rien : un document est toujours neutre</button></div><div id="miniFeedback"></div></div>';
}

function answerDetective(good) {
    if (!cessMiniGame) return;
    if (good) cessMiniGame.score++;
    var feedback = document.getElementById('miniFeedback');
    if (feedback) feedback.innerHTML = '<div class="quiz-feedback ' + (good ? 'good' : 'bad') + '"><strong>' + (good ? '✓ Bonne démarche' : '✗ Attention aux sources') + '</strong><p>Une analyse fiable commence par le contexte et les informations vérifiables. Notions du chapitre : ' + escapeHtml(cessMiniGame.notions || '') + '.</p><button class="button primary" type="button" onclick="nextMiniGame()">' + (cessMiniGame.index + 1 === cessMiniGame.cards.length ? 'Voir le résultat' : 'Suivant →') + '</button></div>';
    document.querySelectorAll('.quiz-option').forEach(function (button) { button.disabled = true; });
}

function nextMiniGame() { cessMiniGame.index++; cessMiniGame.mode === 'association' ? renderAssociationGame() : renderDetectiveGame(); }

function finishMiniGame() {
    var panel = document.getElementById('gamePanel');
    var total = cessMiniGame.cards.length;
    var percentage = total ? Math.round(cessMiniGame.score / total * 100) : 0;
    cessState.results.push({ date: new Date().toISOString(), mode: cessMiniGame.mode, score: cessMiniGame.score, total: total, percentage: percentage });
    cessSave();
    panel.innerHTML = '<div class="quiz-result"><div class="result-circle">' + percentage + '%</div><h2>' + (percentage >= 70 ? 'Bien joué !' : 'Continue, tu progresses !') + '</h2><p>' + cessMiniGame.score + ' / ' + total + ' bonnes réponses</p><div class="result-actions"><button class="button primary" type="button" onclick="renderGamePanel()">← Tous les jeux</button><button class="button secondary" type="button" onclick="showView(\'progress\')">📊 Voir ma progression</button></div></div>';
}
