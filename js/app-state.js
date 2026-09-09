/* =========================================================
   CARNET CESS — ÉTAT DE L'APPLICATION
   Toutes les données de progression, résultats et réglages
   de l'utilisateur, ainsi que le chargement/sauvegarde et
   le registre des matières disponibles.
   ========================================================= */

var CESS_DBKEY = 'carnetCESSv4';

var cessState = {
    progress: {},
    results: [],
    mistakes: [],
    streak: 0,
    theme: 'light'
};

var cessSelectedYear = {
    maths: '3e',
    geo: '3e'
};

var cessMemoMode = 'formules';
var cessQuizState = null;
var cessExamState = null;



/* ---------------------------------------------------------
   VERSION DES DONNÉES & MIGRATION
   -----------------------------------------------------------
   Le format de cessState peut évoluer avec le temps (ajout
   d'un nouveau champ, changement de structure...). Pour ne
   JAMAIS perdre les données déjà enregistrées chez un
   utilisateur, chaque évolution de structure doit :

     1. Incrémenter CESS_STATE_VERSION
     2. Ajouter une fonction "migrateVX_to_VY" ci-dessous
     3. L'ajouter dans le tableau CESS_MIGRATIONS

   La clé de stockage (CESS_DBKEY) ne doit PAS être renommée :
   c'est elle qui permet de retrouver les données existantes.
   --------------------------------------------------------- */

var CESS_STATE_VERSION = 1;

// Liste ordonnée des migrations à appliquer, dans l'ordre,
// depuis la version stockée jusqu'à CESS_STATE_VERSION.
// Exemple pour une future v2 :
//   function migrateV1_to_V2(data) {
//       data.badgesVus = data.badgesVus || [];
//       data.version = 2;
//       return data;
//   }
//   var CESS_MIGRATIONS = [migrateV1_to_V2];
var CESS_MIGRATIONS = [];

function applyMigrations(data) {
    var fromVersion = Number(data.version || 1);

    for (var v = fromVersion; v < CESS_STATE_VERSION; v++) {
        var migrate = CESS_MIGRATIONS[v - 1];
        if (typeof migrate === 'function') {
            data = migrate(data);
        }
    }

    data.version = CESS_STATE_VERSION;
    return data;
}

/* =========================================================
   CHARGEMENT / SAUVEGARDE
   ========================================================= */

(function loadState() {
    try {
        var saved = localStorage.getItem(CESS_DBKEY);

        if (saved) {
            var parsed = JSON.parse(saved);

            if (parsed && typeof parsed === 'object') {
                parsed = applyMigrations(parsed);

                cessState = {
                    progress: parsed.progress || {},
                    results: Array.isArray(parsed.results)
                        ? parsed.results
                        : [],
                    mistakes: Array.isArray(parsed.mistakes)
                        ? parsed.mistakes
                        : [],
                    streak: Number(parsed.streak || 0),
                    theme: parsed.theme === 'dark'
                        ? 'dark'
                        : 'light',
                    version: CESS_STATE_VERSION
                };
            }
        }
    } catch (error) {
        console.warn(
            'Impossible de charger les données sauvegardées.',
            error
        );
    }
})();

function cessSave() {
    try {
        cessState.version = CESS_STATE_VERSION;

        localStorage.setItem(
            CESS_DBKEY,
            JSON.stringify(cessState)
        );
    } catch (error) {
        console.warn(
            'Impossible de sauvegarder les données.',
            error
        );
    }
}



/* =========================================================
   MATIERES
   ========================================================= */

var CESS_SUBJECTS = {

    maths: {
        label: 'Mathématiques',
        icon: '📐',

        getData: function () {
            if (
                typeof CHAPITRES !== 'undefined' &&
                CHAPITRES &&
                typeof CHAPITRES === 'object'
            ) {
                return CHAPITRES;
            }

            return {};
        }
    },

    geo: {
        label: 'Géographie',
        icon: '🌍',

        getData: function () {
            if (
                typeof GEO_CHAPITRES !== 'undefined' &&
                GEO_CHAPITRES &&
                typeof GEO_CHAPITRES === 'object'
            ) {
                return GEO_CHAPITRES;
            }

            return {};
        }
    },

    bio: {
        label: 'Biologie',
        icon: '🧬',

        getData: function () {
            if (
                typeof BIO_CHAPITRES !== 'undefined' &&
                BIO_CHAPITRES &&
                typeof BIO_CHAPITRES === 'object'
            ) {
                return BIO_CHAPITRES;
            }

            return {};
        }
    }
};

