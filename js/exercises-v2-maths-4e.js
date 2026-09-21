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
        '4e_polynomes_2deg': [
            {question: "Calculer le discriminant Δ de l'équation 3x² - 2x - 1 = 0.", options: ["16", "4", "-8", "8"], correct: 0, correction: "Δ = b² - 4ac = (-2)² - 4×3×(-1) = 4 + 12 = 16.", niveau: "Comprendre", contentVersion: 1},
            {question: "La hauteur (en mètres) d'un ballon lancé verticalement est donnée par h(t) = -5t² + 20t, où t est le temps en secondes. Après combien de secondes le ballon retombe-t-il au sol (autre qu'à t = 0) ?", options: ["4 s", "2 s", "5 s", "20 s"], correct: 0, correction: "h(t) = 0 ⇔ -5t(t - 4) = 0 ⇔ t = 0 ou t = 4. Le ballon retombe au sol après 4 secondes.", niveau: "Type CESS", contentVersion: 1}
        ],
        '4e_vecteurs': [
            {question: "Calculer la norme du vecteur u = (3, 4).", options: ["5", "7", "12", "1"], correct: 0, correction: "||u|| = √(3² + 4²) = √25 = 5.", niveau: "Comprendre", contentVersion: 1},
            {question: "Soit u = (2, -1) et v = (3, 4). Calculer u·v.", options: ["2", "6", "10", "-2"], correct: 0, correction: "u·v = xᵤxᵥ + yᵤyᵥ = 2×3 + (-1)×4 = 6 - 4 = 2.", niveau: "Comprendre", contentVersion: 1},
            {question: "Les vecteurs u = (2, 3) et v = (-3, 2) sont-ils orthogonaux ?", options: ["Oui, car u·v = 0", "Non, car u·v = 13", "Oui, car ||u|| = ||v||", "Non, car les vecteurs sont colinéaires"], correct: 0, correction: "u·v = 2×(-3) + 3×2 = -6 + 6 = 0. Le produit scalaire est nul donc u et v sont orthogonaux.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Sachant AB = (3, -2) et BC = (-1, 5), calculer AC à l'aide de la relation de Chasles.", options: ["(2, 3)", "(4, -7)", "(-2, -3)", "(2, -3)"], correct: 0, correction: "D'après Chasles, AC = AB + BC = (3 + (-1) ; -2 + 5) = (2 ; 3).", niveau: "S'entraîner", contentVersion: 1},
            {question: "Une force F = (4, 3) (en newtons) déplace un objet selon le vecteur d = (2, 5) (en mètres). Calculer le travail W = F·d de cette force.", options: ["23 J", "8 J", "15 J", "20 J"], correct: 0, correction: "W = F·d = 4×2 + 3×5 = 8 + 15 = 23 joules.", niveau: "Type CESS", contentVersion: 1}
        ],
        '4e_statistiques': [
            {question: "Quel est le mode de la série 5, 7, 7, 8, 9, 7 ?", options: ["7", "8", "9", "5"], correct: 0, correction: "La valeur 7 apparaît trois fois, plus souvent que les autres : c'est le mode.", niveau: "Comprendre", contentVersion: 1},
            {question: "Quelle est la médiane de la série 10, 12, 14, 16 ?", options: ["13", "12", "14", "26"], correct: 0, correction: "L'effectif est pair : la médiane est la moyenne des deux valeurs centrales, (12 + 14)/2 = 13.", niveau: "Comprendre", contentVersion: 1},
            {question: "Quelle est la variance de la série 2, 4, 6, 8 ?", options: ["5", "20", "2,5", "4,47"], correct: 0, correction: "Moyenne = (2+4+6+8)/4 = 5. V = [(2-5)² + (4-5)² + (6-5)² + (8-5)²]/4 = (9+1+1+9)/4 = 5.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Quel est l'écart-type (arrondi au centième) de la série 3, 5, 7 ?", options: ["1,63", "2,67", "8", "1,41"], correct: 0, correction: "Moyenne = 5. V = [(-2)² + 0² + 2²]/3 = 8/3 ≈ 2,67. σ = √2,67 ≈ 1,63.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Dans une classe, 2 élèves ont obtenu 12/20, 5 élèves ont obtenu 14/20 et 3 élèves ont obtenu 16/20. Quelle est la moyenne pondérée de la classe ?", options: ["14,2", "14", "14,67", "13,5"], correct: 0, correction: "x̄ = Σ(nᵢxᵢ)/Σnᵢ = (2×12 + 5×14 + 3×16)/10 = 142/10 = 14,2.", niveau: "Type CESS", contentVersion: 1},
            {question: "Une boîte à moustaches donne Min = 2, Q1 = 5, Médiane = 8, Q3 = 12, Max = 20. Quel pourcentage des données se situe entre Q1 et Q3 ?", options: ["50 %", "25 %", "75 %", "100 %"], correct: 0, correction: "Par définition, l'intervalle interquartile [Q1 ; Q3] contient toujours 50 % des données centrales.", niveau: "Type CESS", contentVersion: 1}
        ],
        '4e_fonctions_ref': [
            {question: "Dans f(x) = -4x + 7, quelle est l'ordonnée à l'origine ?", options: ["7", "-4", "-7", "4"], correct: 0, correction: "Dans f(x) = mx + p, p est l'ordonnée à l'origine : ici p = 7.", niveau: "Comprendre", contentVersion: 1},
            {question: "Quelle est la valeur minimale de f(x) = 2(x + 1)² - 3 ?", options: ["-3", "1", "-1", "3"], correct: 0, correction: "a = 2 > 0 donc la parabole a un minimum, atteint au sommet : k = -3.", niveau: "Comprendre", contentVersion: 1},
            {question: "Calculer la pente de la droite passant par A(1, 2) et B(4, 11).", options: ["3", "9", "1/3", "-3"], correct: 0, correction: "m = (yB - yA)/(xB - xA) = (11 - 2)/(4 - 1) = 9/3 = 3.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Quel est le sommet de la parabole f(x) = x² - 6x + 5 ?", options: ["S(3, -4)", "S(-3, -4)", "S(3, 4)", "S(6, 5)"], correct: 0, correction: "x² - 6x + 5 = (x - 3)² - 9 + 5 = (x - 3)² - 4, donc h = 3 et k = -4 : S(3 ; -4).", niveau: "S'entraîner", contentVersion: 1},
            {question: "Une entreprise a un coût C(x) = 2x + 50 et un revenu R(x) = 7x, où x est le nombre d'unités vendues. Combien d'unités faut-il vendre pour atteindre le seuil de rentabilité (R(x) = C(x)) ?", options: ["10", "25", "7", "50"], correct: 0, correction: "R(x) = C(x) ⇔ 7x = 2x + 50 ⇔ 5x = 50 ⇔ x = 10 unités.", niveau: "Type CESS", contentVersion: 1},
            {question: "La trajectoire d'un ballon est donnée par h(t) = -t² + 6t (hauteur en m, t en s). Quelle est la hauteur maximale atteinte ?", options: ["9 m", "3 m", "6 m", "18 m"], correct: 0, correction: "h(t) = -(t² - 6t) = -(t - 3)² + 9. Le maximum, 9 m, est atteint pour t = 3 s.", niveau: "Type CESS", contentVersion: 1}
        ],
        '4e_geo_espace': [
            {question: "Calculer la distance entre A(0, 0, 0) et B(3, 4, 0) dans un repère orthonormé de l'espace.", options: ["5", "7", "25", "3"], correct: 0, correction: "d = √(3² + 4² + 0²) = √25 = 5.", niveau: "Comprendre", contentVersion: 1},
            {question: "Une droite est parallèle à un plan sans y être contenue. Combien de points ont-ils en commun ?", options: ["0", "1", "Une infinité", "Cela dépend du plan"], correct: 0, correction: "Par définition, une droite parallèle à un plan (et non contenue dans celui-ci) ne le rencontre en aucun point.", niveau: "Comprendre", contentVersion: 1},
            {question: "Calculer la distance entre M(1, 1, 1) et N(3, 3, 3).", options: ["2√3 (≈ 3,46)", "6", "√6", "12"], correct: 0, correction: "d = √(2² + 2² + 2²) = √12 = 2√3 ≈ 3,46.", niveau: "S'entraîner", contentVersion: 1},
            {question: "On coupe un cube par un plan parallèle à l'une de ses faces. Quelle est la forme de la section obtenue ?", options: ["Un carré", "Un triangle", "Un cercle", "Un hexagone"], correct: 0, correction: "Un plan parallèle à une face d'un cube coupe les quatre arêtes latérales à la même hauteur : la section est un carré identique à la face.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Une antenne verticale a sa base en A(0, 0, 0) et son sommet en S(0, 0, 12). Un hauban relie S à un point d'ancrage au sol B(3, 4, 0). Quelle est la longueur du hauban (en m) ?", options: ["13 m", "17 m", "15 m", "25 m"], correct: 0, correction: "Longueur = √((3-0)² + (4-0)² + (0-12)²) = √(9 + 16 + 144) = √169 = 13 m.", niveau: "Type CESS", contentVersion: 1},
            {question: "Dans une pièce cubique, une arête horizontale du plafond à l'avant et l'arête verticale du mur arrière-gauche ne se coupent pas et ne sont pas parallèles. Comment qualifie-t-on ces deux droites ?", options: ["Gauches", "Parallèles", "Sécantes", "Confondues"], correct: 0, correction: "Deux droites qui ne sont ni sécantes ni parallèles (non coplanaires) sont dites gauches.", niveau: "Type CESS", contentVersion: 1}
        ],
        '4e_trigo_cercle': [
            {question: "Si cos(α) = 0,8 et α est un angle aigu, que vaut sin(α) ?", options: ["0,6", "0,36", "0,64", "0,8"], correct: 0, correction: "sin²(α) = 1 - cos²(α) = 1 - 0,64 = 0,36, donc sin(α) = √0,36 = 0,6 (α aigu).", niveau: "Comprendre", contentVersion: 1},
            {question: "Sachant sin(α) = 0,6 et cos(α) = 0,8, calculer tan(α).", options: ["0,75", "1,33", "0,48", "1,4"], correct: 0, correction: "tan(α) = sin(α)/cos(α) = 0,6/0,8 = 0,75.", niveau: "Comprendre", contentVersion: 1},
            {question: "Calculer l'aire d'un triangle dont deux côtés mesurent 6 cm et 8 cm et forment un angle de 30° entre eux.", options: ["12 cm²", "24 cm²", "48 cm²", "6 cm²"], correct: 0, correction: "Aire = (1/2)×a×b×sin(C) = 0,5×6×8×sin(30°) = 0,5×48×0,5 = 12 cm².", niveau: "S'entraîner", contentVersion: 1},
            {question: "Dans un triangle, a = 10 cm, l'angle A = 30° et l'angle B = 45°. Calculer b à l'aide de la loi des sinus.", options: ["14,14 cm", "7,07 cm", "10 cm", "20 cm"], correct: 0, correction: "a/sin(A) = b/sin(B) ⇒ b = a×sin(B)/sin(A) = 10×sin(45°)/sin(30°) ≈ 10×0,7071/0,5 ≈ 14,14 cm.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Un terrain triangulaire a deux côtés de 5 km et 7 km, formant entre eux un angle de 60°. Calculer la longueur (arrondie au centième) du troisième côté avec Al-Kashi.", options: ["6,24 km", "8,60 km", "39 km", "12 km"], correct: 0, correction: "a² = 5² + 7² - 2×5×7×cos(60°) = 25 + 49 - 35 = 39, donc a = √39 ≈ 6,24 km.", niveau: "Type CESS", contentVersion: 1},
            {question: "Deux randonneurs partent d'un même point : l'un marche 4 km, l'autre 6 km, en formant un angle de 50° entre leurs trajets. Quelle distance (arrondie au dixième) les sépare-t-elle à l'arrivée ?", options: ["4,6 km", "7,2 km", "2,3 km", "10 km"], correct: 0, correction: "d² = 4² + 6² - 2×4×6×cos(50°) ≈ 16 + 36 - 30,86 ≈ 21,14, donc d ≈ √21,14 ≈ 4,6 km.", niveau: "Type CESS", contentVersion: 1}
        ],
        '4e_droites_cercles': [
            {question: "Quelle est l'équation cartésienne du cercle de centre (-1, 4) et de rayon 5 ?", options: ["(x + 1)² + (y - 4)² = 25", "(x - 1)² + (y + 4)² = 25", "(x + 1)² + (y - 4)² = 5", "(x - 1)² + (y - 4)² = 25"], correct: 0, correction: "Un cercle de centre (a ; b) et de rayon r vérifie (x - a)² + (y - b)² = r² ; ici (x - (-1))² + (y - 4)² = 5², soit (x + 1)² + (y - 4)² = 25.", niveau: "Comprendre", contentVersion: 1},
            {question: "La droite d'équation 2x - 3y + 6 = 0 a pour pente...", options: ["2/3", "-2/3", "3/2", "-3"], correct: 0, correction: "2x - 3y + 6 = 0 ⇔ y = (2/3)x + 2. La pente est donc 2/3.", niveau: "Comprendre", contentVersion: 1},
            {question: "Pour la droite d'équation 3x - 4y + 5 = 0, un vecteur directeur est...", options: ["(4, 3)", "(3, 4)", "(3, -4)", "(-3, 4)"], correct: 0, correction: "Pour une droite ax + by + c = 0, un vecteur directeur est (-b ; a) ; ici (-(-4) ; 3) = (4 ; 3).", niveau: "Comprendre", contentVersion: 1},
            {question: "Le cercle de centre C(3, 1) passe par le point P(6, 5). Quelle est son équation cartésienne ?", options: ["(x - 3)² + (y - 1)² = 25", "(x - 3)² + (y - 1)² = 5", "(x - 3)² + (y - 1)² = 9", "(x + 3)² + (y + 1)² = 25"], correct: 0, correction: "r = CP = √((6-3)² + (5-1)²) = √(9+16) = √25 = 5, donc l'équation est (x - 3)² + (y - 1)² = 25 (r² = 25).", niveau: "S'entraîner", contentVersion: 1},
            {question: "Le cercle a pour équation (x - 1)² + (y + 2)² = 13. Le point A(4, -1) appartient-il à ce cercle ?", options: ["Non, car (4-1)² + (-1+2)² = 10 ≠ 13", "Oui, car (4-1)² + (-1+2)² = 13", "Non, car (4-1)² + (-1+2)² = 16", "Oui, car A vérifie x² + y² = 13"], correct: 0, correction: "En remplaçant : (4-1)² + (-1+2)² = 9 + 1 = 10, qui est différent de 13. Le point n'appartient donc pas au cercle.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Quelle est l'équation cartésienne de la droite passant par A(1, 2) et B(3, 8) ?", options: ["3x - y - 1 = 0", "3x + y - 1 = 0", "x - 3y + 5 = 0", "3x - y - 5 = 0"], correct: 0, correction: "m = (8-2)/(3-1) = 3. Avec A(1,2) : y - 2 = 3(x - 1) ⇒ y = 3x - 1 ⇒ 3x - y - 1 = 0.", niveau: "S'entraîner", contentVersion: 1},
            {question: "Une antenne relais couvre une zone circulaire d'équation (x - 5)² + (y - 2)² = 100 (coordonnées en km). Une maison se trouve au point (13, 8). Est-elle couverte par l'antenne ?", options: ["Oui, exactement à la limite de portée, car (13-5)² + (8-2)² = 100", "Non, car (13-5)² + (8-2)² est supérieur à 100", "Oui, car la maison est au centre de la zone", "Non, car il faudrait un rayon d'au moins 200 km"], correct: 0, correction: "(13-5)² + (8-2)² = 64 + 36 = 100, ce qui correspond exactement à r² = 100. La maison est donc sur le cercle, à la limite de la zone couverte.", niveau: "Type CESS", contentVersion: 1},
            {question: "Deux rues sont modélisées par les droites d1 : 2x - y + 1 = 0 et d2 : 2x - y - 5 = 0. Que peut-on dire de la position relative de ces deux rues ?", options: ["Elles sont parallèles et ne se croisent jamais (même pente 2, ordonnées différentes)", "Elles sont perpendiculaires", "Elles sont sécantes en un seul point", "Elles sont confondues (la même rue)"], correct: 0, correction: "En isolant y : d1 donne y = 2x + 1 et d2 donne y = 2x - 5. Les deux droites ont la même pente (2) mais des ordonnées à l'origine différentes : elles sont donc strictement parallèles et ne se coupent jamais.", niveau: "Type CESS", contentVersion: 1}
        ]
    };

    ['4e'].forEach(function (year) {
        (CHAPITRES[year] || []).forEach(function (chapitre) {
            var nouveaux = NOUVEAUX_EXERCICES[chapitre.id];
            if (!nouveaux) return;
            chapitre.exercices = (chapitre.exercices || []).filter(function (e) { return !isGeneric(e.question); });
            nouveaux.forEach(function (ex) { chapitre.exercices.push(ex); });
        });
    });
})();
