/* =========================================================
   CARNET CESS — NAVIGATION & THÈME
   Changement de vue (page) et bascule du thème clair/sombre.
   ========================================================= */

/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(id) {
    var librarySubject = CESS_SUBJECTS[id] && CESS_SUBJECTS[id].library ? id : null;
    if (librarySubject) id = 'library';
    if (typeof stopExamTimer === 'function') stopExamTimer();
    var target = document.getElementById(id);

    if (!target) {
        console.warn('Vue introuvable :', id);
        return;
    }

    var views =
        document.querySelectorAll('.view');

    for (var i = 0; i < views.length; i++) {
        views[i].classList.remove('active');
    }

    target.classList.add('active');
    if (typeof stopMiniGame === 'function') stopMiniGame();
    if (typeof quizTimer !== 'undefined' && quizTimer) { clearInterval(quizTimer); quizTimer = null; }

    var navButtons =
        document.querySelectorAll('.nav-item, .mobile-nav button, .topbar-nav button');

    for (var n = 0; n < navButtons.length; n++) {
        navButtons[n].classList.remove('active');
        if (navButtons[n].getAttribute('data-view') === ((typeof CESS_SUBJECTS !== 'undefined' && CESS_SUBJECTS[id]) ? 'library' : id)) {
            navButtons[n].classList.add('active');
        }
    }

    try {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } catch (error) {
        window.scrollTo(0, 0);
    }

    if (id === 'home') {
        renderHome();
    }

    if (id === 'maths') {
        renderSubject('maths');
    }

    if (id === 'geo') {
        renderSubject('geo');
    }

    if (id === 'bio') {
        renderSubject('bio');
    }

    if (id === 'library') {
        if (librarySubject) renderLibrarySubject(librarySubject); else renderLibrary();
    }

    if (id === 'memo') {
        renderMemo();
    }

    if (id === 'games') {
        renderGamePanel();
    }

    if (id === 'exam') {
        renderExamPanel();
    }

    if (id === 'progress') {
        renderProgress();
    }

    if (id === 'flashcards') {
        if (typeof initFlashcards === 'function') {
            initFlashcards(typeof flashcardSubject !== 'undefined' ? flashcardSubject : 'maths');
        }
    }
}



/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {
    document.body.classList.toggle('dark');

    cessState.theme =
        document.body.classList.contains('dark')
            ? 'dark'
            : 'light';

    cessSave();
}

function applyTheme() {
    if (cessState.theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

