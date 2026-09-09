/* =========================================================
   CARNET CESS — POINT D'ENTRÉE
   Ce fichier doit être chargé EN DERNIER : il suppose que
   tous les autres fichiers js/app-*.js sont déjà chargés.
   ========================================================= */

/* =========================================================
   INITIALISATION
   ========================================================= */

function initCESS() {

    applyTheme();

    renderHome();

    renderGamePanel();

    renderExamPanel();

    if (
        typeof CHAPITRES === 'undefined'
    ) {
        console.warn(
            'CHAPITRES n’est pas chargé.'
        );
    }

    if (
        typeof GEO_CHAPITRES === 'undefined'
    ) {
        console.warn(
            'GEO_CHAPITRES n’est pas chargé.'
        );
    }

    if (
        typeof FLASHCARDS_DATA === 'undefined'
    ) {
        console.warn(
            'FLASHCARDS_DATA n’est pas chargé.'
        );
    }

    console.log(
        'Carnet CESS chargé correctement.'
    );
}


if (
    document.readyState ===
    'loading'
) {

    document.addEventListener(
        'DOMContentLoaded',
        initCESS
    );

} else {

    initCESS();

}
