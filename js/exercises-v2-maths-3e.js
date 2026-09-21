(function () {
    if (typeof CHAPITRES === 'undefined') return;
    var GENERIC_PATTERNS = [
        /^Quelle notion est directement liée au chapitre/,
        /^Quelle notion faut-il mobiliser pour résoudre un exercice sur/,
        /^Dans une question de type CESS portant sur .* quel élément doit apparaître dans le raisonnement/,
        /^Quelle démarche produit la solution la plus rigoureuse/,
        /^Quelle démarche convient pour analyser un document géographique/,
        /^Quelle démarche convient pour analyser une expérience/,
        /^Quelle pratique faut-il éviter dans une réponse sur/,
        /^Avant d.interpréter un graphique ou un tableau lié à/,
        /^Quelle structure convient à une réponse de synthèse sur/,
        /^Dans « .* », quelle notion faut-il savoir définir précisément/,
        /^Quel couple de notions doit être mis en relation pour expliquer le chapitre/,
        /^Comment vérifier que la notion .* est réellement comprise/,
        /^Dans une situation nouvelle portant sur/
    ];
    function isGeneric(q) { return GENERIC_PATTERNS.some(function (p) { return p.test(q); }); }

    var NOUVEAUX_EXERCICES = {
        '3e_fonctions': [
            {question: "On donne la fonction f(x) = 2x − 3. Quel est l'antécédent de 7 ?", options: ["11", "2", "5", "-2"], correct: 2, correction: "f(x) = 7 ⟺ 2x − 3 = 7 ⟺ 2x = 10 ⟺ x = 5. L'antécédent de 7 est donc 5.", niveau: "S'entraîner", contentVersion: 1}
        ],
        '3e_algebre_polynomes': [
            {question: "Développer et réduire : (3x − 2)²", options: ["9x² - 6x + 4", "9x² - 12x + 4", "9x² - 12x - 4", "3x² - 12x + 4"], correct: 1, correction: "(3x − 2)² = (3x)² − 2·3x·2 + 2² = 9x² − 12x + 4.", niveau: "Comprendre", contentVersion: 1}
        ],
        '3e_pythagore': [
            {question: "Un triangle a pour côtés 7 cm, 9 cm et 12 cm. Est-il rectangle ?", options: ["Oui, car 12² = 7² + 9²", "Oui, car 7² = 9² + 12²", "On ne peut pas savoir sans angle mesuré", "Non, car 12² ≠ 7² + 9²"], correct: 3, correction: "12² = 144 et 7² + 9² = 130. Comme 144 ≠ 130, le triangle n'est pas rectangle (réciproque de Pythagore).", niveau: "S'entraîner", contentVersion: 1},
            {question: "Une échelle de 5 m est posée contre un mur vertical. Son pied est à 3 m du mur (le sol et le mur forment un angle droit). À quelle hauteur du mur l'échelle touche-t-elle le mur ?", options: ["8 m", "4 m", "2 m", "3,5 m"], correct: 1, correction: "Le mur, le sol et l'échelle forment un triangle rectangle d'hypoténuse 5 m. Hauteur = √(5² − 3²) = √(25 − 9) = √16 = 4 m.", niveau: "Type CESS", contentVersion: 1}
        ],
        '3e_thales': [
            {question: "Dans une configuration de Thalès, AB/AC = AD/AE. On donne AB = 4, AC = 6 et AD = 10. Que vaut AE ?", options: ["6,67", "12", "15", "9"], correct: 2, correction: "AB/AC = AD/AE ⟺ 4/6 = 10/AE ⟺ AE = 10 × 6/4 = 15.", niveau: "Comprendre", contentVersion: 1},
            {question: "Dans une configuration de Thalès, on a AB/AC = 8/12 et BD = 5. Que vaut CE ?", options: ["3,33", "6", "10", "7,5"], correct: 3, correction: "AB/AC = BD/CE ⟺ 8/12 = 5/CE ⟺ CE = 5 × 12/8 = 7,5.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Un piquet vertical de 1,5 m projette une ombre de 2 m. Au même moment, un arbre projette une ombre de 12 m. Quelle est la hauteur de l'arbre ? (les rayons du soleil sont parallèles)", options: ["16 m", "9 m", "1,5 m", "18 m"], correct: 1, correction: "Les rayons du soleil parallèles créent une configuration de Thalès : piquet/ombre piquet = arbre/ombre arbre. 1,5/2 = h/12 ⟹ h = 1,5 × 12/2 = 9 m.", niveau: "Type CESS", contentVersion: 1}
        ],
        '3e_trigo_rect': [
            {question: "Dans un triangle rectangle, sin(α) = 0,6. Que vaut cos(α) ?", options: ["0,4", "0,6", "0,8", "1,2"], correct: 2, correction: "sin²α + cos²α = 1 ⟹ cos²α = 1 − 0,36 = 0,64 ⟹ cos α = 0,8.", niveau: "Comprendre", contentVersion: 1},
            {question: "Un triangle rectangle a une hypoténuse de 12 cm et un angle aigu de 25°. Quelle est la longueur du côté opposé à cet angle ?", options: ["≈ 5,1 cm", "≈ 10,9 cm", "≈ 4,2 cm", "≈ 6,0 cm"], correct: 0, correction: "sin(25°) = opposé/hypoténuse ⟹ opposé = 12 × sin(25°) ≈ 12 × 0,423 ≈ 5,1 cm.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Du sommet d'une falaise haute de 40 m, un observateur voit un bateau avec un angle de dépression de 20°. À quelle distance horizontale le bateau se trouve-t-il du pied de la falaise ?", options: ["≈ 14,6 m", "≈ 42,6 m", "≈ 94,6 m", "≈ 110 m"], correct: 3, correction: "tan(20°) = 40/d ⟹ d = 40/tan(20°) ≈ 40/0,364 ≈ 110 m.", niveau: "Type CESS", contentVersion: 1}
        ],
        '3e_equations_inequations': [
            {question: "Résoudre : 4x − 7 = 9", options: ["4", "0,5", "-4", "16"], correct: 0, correction: "4x − 7 = 9 ⟺ 4x = 9 + 7 = 16 ⟺ x = 16/4 = 4.", niveau: "Comprendre", contentVersion: 1},
            {question: "Résoudre : 2x + 5 > 11", options: ["x < 3", "x > 3", "x > 8", "x > -3"], correct: 1, correction: "2x + 5 > 11 ⟺ 2x > 6 ⟺ x > 3.", niveau: "Comprendre", contentVersion: 1},
            {question: "Résoudre : −5x ≥ 20", options: ["x ≥ -4", "x ≤ 4", "x ≤ -4", "x ≥ 4"], correct: 2, correction: "En divisant les deux membres par −5 (un nombre négatif), le sens de l'inégalité s'inverse : −5x ≥ 20 ⟺ x ≤ 20/(−5) = −4.", niveau: "Comprendre", contentVersion: 1},
            {question: "Résoudre : 5x − 3 = 2x + 9", options: ["2", "-4", "6", "4"], correct: 3, correction: "5x − 3 = 2x + 9 ⟺ 5x − 2x = 9 + 3 ⟺ 3x = 12 ⟺ x = 4.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Résoudre : −4x + 7 < −1", options: ["x > 2", "x < 2", "x > -2", "x < -2"], correct: 0, correction: "−4x + 7 < −1 ⟺ −4x < −8. En divisant par −4 (négatif), le sens s'inverse : x > 2.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Résoudre : 3(x − 2) = 2x + 1", options: ["5", "7", "-7", "1"], correct: 1, correction: "3(x − 2) = 2x + 1 ⟺ 3x − 6 = 2x + 1 ⟺ x = 7.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Le périmètre d'un rectangle est de 54 cm. Sa longueur mesure le double de sa largeur augmentée de 3 cm. Quelle est la largeur du rectangle ?", options: ["9 cm", "7 cm", "8 cm", "15 cm"], correct: 2, correction: "Périmètre = 2 × (largeur + longueur) = 2 × (x + 2x + 3) = 6x + 6 = 54 ⟹ 6x = 48 ⟹ x = 8 cm.", niveau: "Type CESS", contentVersion: 1},
            {question: "Léa dispose de 50 € pour acheter des livres à 8 € pièce, sachant qu'elle doit garder au moins 6 € pour le bus. Combien de livres peut-elle acheter au maximum ?", options: ["6 livres", "4 livres", "5,5 livres", "5 livres"], correct: 3, correction: "8x + 6 ≤ 50 ⟺ 8x ≤ 44 ⟺ x ≤ 5,5. Le nombre de livres étant entier, elle peut en acheter au maximum 5.", niveau: "Type CESS", contentVersion: 1}
        ],
        '3e_systemes': [
            {question: "Résoudre par élimination : x + y = 10 et x − y = 2", options: ["x=6, y=4", "x=4, y=6", "x=8, y=2", "x=5, y=5"], correct: 0, correction: "En additionnant les deux équations : 2x = 12 ⟹ x = 6, puis y = 10 − 6 = 4.", niveau: "Comprendre", contentVersion: 1},
            {question: "Résoudre par substitution : y = 2x et x + y = 12", options: ["x=8, y=4", "x=4, y=8", "x=6, y=12", "x=3, y=6"], correct: 1, correction: "En substituant y = 2x dans x + y = 12 : x + 2x = 12 ⟹ 3x = 12 ⟹ x = 4, puis y = 2×4 = 8.", niveau: "Comprendre", contentVersion: 1},
            {question: "Dans le système 2x + y = 9 et y = 3, que vaut x ?", options: ["6", "4,5", "3", "12"], correct: 2, correction: "En remplaçant y par 3 : 2x + 3 = 9 ⟹ 2x = 6 ⟹ x = 3.", niveau: "Comprendre", contentVersion: 1},
            {question: "Résoudre par élimination : 2x + y = 11 et x + y = 7", options: ["x=3, y=4", "x=7, y=0", "x=2, y=3", "x=4, y=3"], correct: 3, correction: "En soustrayant la deuxième équation de la première : (2x+y) − (x+y) = 11 − 7 ⟹ x = 4, puis y = 7 − 4 = 3.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Résoudre : 3x + 2y = 16 et x + y = 6", options: ["x=4, y=2", "x=2, y=4", "x=6, y=0", "x=5, y=1"], correct: 0, correction: "De x + y = 6, on tire x = 6 − y. En remplaçant : 3(6−y) + 2y = 16 ⟹ 18 − y = 16 ⟹ y = 2, puis x = 4.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Résoudre : 2x + 3y = 13 et 4x − y = 5", options: ["x=3, y=2", "x=2, y=3", "x=1, y=1", "x=4, y=-1"], correct: 1, correction: "De 4x − y = 5, on tire y = 4x − 5. En substituant : 2x + 3(4x−5) = 13 ⟹ 14x − 15 = 13 ⟹ x = 2, puis y = 3.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Dans un magasin, 3 stylos et 2 cahiers coûtent 13 €, tandis que 2 stylos et 3 cahiers coûtent 12 €. Quel est le prix d'un stylo ?", options: ["2 €", "4 €", "3 €", "1,5 €"], correct: 2, correction: "3s + 2c = 13 et 2s + 3c = 12. En multipliant la première par 3 et la seconde par 2, puis en soustrayant : 5s = 15 ⟹ s = 3 €.", niveau: "Type CESS", contentVersion: 1},
            {question: "La somme des âges de Julie et de son frère est 28 ans. Julie a 4 ans de plus que son frère. Quel est l'âge de Julie ?", options: ["12 ans", "14 ans", "18 ans", "16 ans"], correct: 3, correction: "En posant f l'âge du frère : f + (f+4) = 28 ⟹ 2f = 24 ⟹ f = 12, donc Julie a 12 + 4 = 16 ans.", niveau: "Type CESS", contentVersion: 1}
        ],
        '3e_proportionnalite': [
            {question: "Une recette pour 4 personnes nécessite 200 g de farine. Quelle quantité faut-il pour 6 personnes ?", options: ["300 g", "250 g", "266 g", "150 g"], correct: 0, correction: "Le rapport farine/personnes est constant : 200/4 = 50 g par personne. Pour 6 personnes : 6 × 50 = 300 g.", niveau: "Comprendre", contentVersion: 1},
            {question: "Un article coûte 40 €. Il subit une hausse de 15 %. Quel est son nouveau prix ?", options: ["44 €", "46 €", "55 €", "34 €"], correct: 1, correction: "Une hausse de 15 % correspond au coefficient 1 + 15/100 = 1,15. Nouveau prix = 40 × 1,15 = 46 €.", niveau: "Comprendre", contentVersion: 1},
            {question: "Quel coefficient multiplicateur correspond à une baisse de 30 % ?", options: ["0,30", "1,30", "0,70", "0,03"], correct: 2, correction: "Une baisse de t % correspond au coefficient 1 − t/100 = 1 − 30/100 = 0,70.", niveau: "Comprendre", contentVersion: 1},
            {question: "Après une remise de 25 %, un article coûte 60 €. Quel était son prix avant la remise ?", options: ["75 €", "45 €", "85 €", "80 €"], correct: 3, correction: "Le prix après remise correspond à 0,75 × prix initial. Donc prix initial = 60 / 0,75 = 80 €.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Un prix subit une hausse de 10 % puis une baisse de 10 %. Par rapport au prix initial, le prix final est...", options: ["Inférieur de 1 % au prix initial", "Égal au prix initial", "Supérieur de 1 % au prix initial", "Inférieur de 10 % au prix initial"], correct: 0, correction: "Coefficient global = 1,10 × 0,90 = 0,99, soit une baisse de 1 % par rapport au prix initial : les pourcentages successifs ne s'additionnent pas.", niveau: "S'entraîner", contentVersion: 1},
            {question: "On place un capital de 2000 € à un taux d'intérêt simple de 3 % par an. Quel intérêt ce capital produit-il après 2 ans ?", options: ["60 €", "120 €", "180 €", "2060 €"], correct: 1, correction: "Intérêt simple : I = (C × t × n)/100 = (2000 × 3 × 2)/100 = 120 €.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Un robinet qui fuit laisse s'écouler 1,5 L d'eau en 4 minutes. À ce rythme, quel volume d'eau sera perdu en 180 minutes (3 heures) ?", options: ["45 L", "72 L", "67,5 L", "54 L"], correct: 2, correction: "Débit constant : 1,5/4 = 0,375 L par minute. En 180 minutes : 180 × 0,375 = 67,5 L.", niveau: "Type CESS", contentVersion: 1},
            {question: "Un capital de 1500 € est placé à intérêt simple au taux annuel de 4 %. Au bout de combien d'années aura-t-il rapporté 300 € d'intérêts ?", options: ["4 ans", "6 ans", "3 ans", "5 ans"], correct: 3, correction: "I = (C × t × n)/100 ⟹ 300 = (1500 × 4 × n)/100 = 60n ⟹ n = 5 ans.", niveau: "Type CESS", contentVersion: 1}
        ]
    };

    ['3e'].forEach(function (year) {
        (CHAPITRES[year] || []).forEach(function (chapitre) {
            var nouveaux = NOUVEAUX_EXERCICES[chapitre.id];
            if (!nouveaux) return;
            chapitre.exercices = (chapitre.exercices || []).filter(function (e) { return !isGeneric(e.question); });
            nouveaux.forEach(function (ex) { chapitre.exercices.push(ex); });
        });
    });
})();
