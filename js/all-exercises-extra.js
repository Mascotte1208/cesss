/* =========================================================
   EXERCICES PROGRESSIFS — TOUS LES CHAPITRES
   Complète automatiquement chaque chapitre jusqu'à 4
   exercices, sans remplacer les questions déjà rédigées.
   ========================================================= */

(function () {
    var niveaux = ['Comprendre', 'S’entraîner', 'Type CESS'];

    function texte(value) {
        return String(value || '').replace(/^\d+\.\s*/, '').trim();
    }

    function notionsDe(data) {
        var notions = [];

        Object.keys(data || {}).forEach(function (annee) {
            (data[annee] || []).forEach(function (chapitre) {
                (chapitre.matieres || []).forEach(function (notion) {
                    if (notion && notions.indexOf(notion) === -1) {
                        notions.push(notion);
                    }
                });
            });
        });

        return notions;
    }

    function optionsAvecBonneReponse(bonne, pool, decalage) {
        var options = [bonne];

        for (var i = 0; i < pool.length && options.length < 4; i++) {
            if (pool[i] !== bonne && options.indexOf(pool[i]) === -1) {
                options.push(pool[i]);
            }
        }

        while (options.length < 4) {
            options.push('Une notion extérieure à ce chapitre ' + options.length);
        }

        var position = decalage % 4;
        var valeur = options.shift();
        options.splice(position, 0, valeur);

        return {
            options: options,
            correct: position
        };
    }

    function questionSupplementaire(chapitre, pool, numero) {
        var notions = Array.isArray(chapitre.matieres) && chapitre.matieres.length
            ? chapitre.matieres
            : [texte(chapitre.titre)];

        var bonne = notions[numero % notions.length];
        var choix = optionsAvecBonneReponse(
            bonne,
            pool.filter(function (notion) {
                return notions.indexOf(notion) === -1;
            }),
            numero
        );

        var niveau = niveaux[numero % niveaux.length];
        var titre = texte(chapitre.titre);
        var question;

        if (niveau === 'Comprendre') {
            question = 'Quelle notion est directement liée au chapitre « ' + titre + ' » ?';
        } else if (niveau === 'S’entraîner') {
            question = 'Quelle notion faut-il mobiliser pour résoudre un exercice sur « ' + titre + ' » ?';
        } else {
            question = 'Dans une question de type CESS portant sur « ' + titre + ' », quel élément doit apparaître dans le raisonnement ?';
        }

        return {
            niveau: niveau,
            question: question,
            options: choix.options,
            correct: choix.correct,
            correction: 'La réponse attendue est « ' + bonne + ' ». Cette notion fait partie des éléments essentiels du chapitre « ' + titre + ' ».'
        };
    }

    function completer(data) {
        var pool = notionsDe(data);

        Object.keys(data || {}).forEach(function (annee) {
            (data[annee] || []).forEach(function (chapitre) {
                chapitre.exercices = Array.isArray(chapitre.exercices)
                    ? chapitre.exercices
                    : [];

                chapitre.exercices.forEach(function (exercice, index) {
                    if (!exercice.niveau) {
                        exercice.niveau = niveaux[index % niveaux.length];
                    }
                });

                var numero = chapitre.exercices.length;

                while (chapitre.exercices.length < 4) {
                    chapitre.exercices.push(
                        questionSupplementaire(chapitre, pool, numero)
                    );
                    numero++;
                }
            });
        });
    }

    if (typeof CHAPITRES !== 'undefined') {
        completer(CHAPITRES);
    }

    if (typeof GEO_CHAPITRES !== 'undefined') {
        completer(GEO_CHAPITRES);
    }
})();
