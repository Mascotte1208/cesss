/* Ajoute une entrée Jeux à l'accueil sans modifier le moteur de quiz existant. */
(function () {
    if (typeof renderHome !== 'function') return;

    var renderHomeBase = renderHome;

    renderHome = function () {
        renderHomeBase();

        var subjects = document.getElementById('homeSubjects');
        if (!subjects || subjects.querySelector('.games-card')) return;

        var gameCard = document.createElement('div');
        gameCard.className = 'subject-card games-card';
        gameCard.setAttribute('role', 'button');
        gameCard.setAttribute('tabindex', '0');
        gameCard.setAttribute('aria-label', 'Ouvrir Jeux et quiz');
        gameCard.innerHTML = [
            '<div class="subject-card-top">',
            '  <div class="subject-icon">🎮</div>',
            '  <span class="subject-arrow">→</span>',
            '</div>',
            '<h3>Jeux & quiz</h3>',
            '<p>Révise autrement avec des sessions courtes et ciblées.</p>',
            '<div class="game-note">Ludique dans son contenu, sobre dans son design.</div>',
            '<div class="subject-card-footer">',
            '  <span>Entraînement</span>',
            '  <button type="button">Jouer →</button>',
            '</div>'
        ].join('');

        function openGames(event) {
            if (event && event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
            if (event && event.type === 'keydown') event.preventDefault();
            showView('games');
        }

        gameCard.addEventListener('click', openGames);
        gameCard.addEventListener('keydown', openGames);
        subjects.appendChild(gameCard);
    };
})();
