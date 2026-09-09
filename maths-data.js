// =========================================================
// DONNÉES MATHÉMATIQUES - CESS
// VERSION COMPLÈTE AVEC TOUS LES EXERCICES
// =========================================================

var CHAPITRES = {

    // =====================================================
    // 3e
    // =====================================================

    '3e': [

        // =====================================================
        // 3e — FONCTIONS
        // =====================================================

        {
            id: '3e_fonctions',
            titre: "1. Approche graphique d'une fonction",
            desc: 'UAA3 — Comprendre les machines, les graphiques et les tableaux',
            niveau: '3e',
            icone: '📈',
            color: '#3182ce',

            cours: `
                <h4>🔹 C'est quoi une fonction ?</h4>
                <p>Une fonction est comme une <b>machine à transformer les nombres</b>. On introduit un nombre (x), la machine applique une règle, et un nombre sort (y ou f(x)).</p>

                <h4>🔹 Vocabulaire essentiel</h4>
                <ul>
                    <li><b>Antécédent (x)</b> : le nombre qui entre dans la machine.</li>
                    <li><b>Image (y ou f(x))</b> : le nombre qui sort.</li>
                    <li><b>Domaine (dom f)</b> : tous les x qu'on peut mettre dans la machine.</li>
                    <li><b>Ensemble image (Im f)</b> : tous les résultats possibles.</li>
                </ul>

                <h4>🔹 Image et antécédent</h4>
                <p>Si <b>y = f(x)</b>, alors <b>y</b> est l'<b>image</b> de <b>x</b> et <b>x</b> est un <b>antécédent</b> de <b>y</b>.</p>
                <p><em>Une valeur peut avoir plusieurs antécédents.</em></p>

                <h4>🔹 Lecture graphique</h4>
                <ul>
                    <li><b>Image de a :</b> partir de a sur l'axe x, rejoindre la courbe, puis lire y.</li>
                    <li><b>Antécédent de b :</b> partir de b sur l'axe y et lire toutes les abscisses des intersections.</li>
                    <li><b>Zéro d'une fonction :</b> là où la courbe coupe l'axe des x (f(x) = 0).</li>
                    <li><b>Ordonnée à l'origine :</b> là où elle coupe l'axe des y (x = 0).</li>
                    <li>Une courbe qui monte de gauche à droite est <b>croissante</b>, qui descend est <b>décroissante</b>.</li>
                </ul>

                <h4>🔹 Domaine et ensemble image</h4>
                <p>Le <b>domaine</b> rassemble les abscisses autorisées. L'<b>ensemble image</b> rassemble les ordonnées obtenues.</p>
                <div class="astuce">💡 Pour un problème concret, les contraintes du contexte peuvent réduire le domaine.</div>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Toujours regarder les axes et l'échelle.</li>
                    <li>Pour une image, lire verticalement ; pour un antécédent, horizontalement.</li>
                    <li>Chercher toutes les intersections si plusieurs antécédents sont possibles.</li>
                    <li>Respecter les unités et les bornes du problème.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre image et antécédent.</li>
                        <li>⚠️ Lire une courbe sans tenir compte de l'échelle.</li>
                        <li>⚠️ Oublier de vérifier le domaine de définition.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je sais lire une image</li>
                        <li>☐ Je sais trouver tous les antécédents</li>
                        <li>☐ Je sais déterminer un domaine</li>
                        <li>☐ Je sais trouver les zéros</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Comprendre la notion de machine et de fonction',
                'Lire une image et un antécédent sur un graphique',
                'Distinguer une fonction d\'une simple relation',
                'Déterminer le domaine et l\'ensemble image'
            ],

            matieres: [
                'Vocabulaire : antécédents, images',
                'Lecture graphique (axe x, axe y)',
                'Tableaux de valeurs et de variations',
                'Fonction ou relation ?'
            ],

            exercices: [
                {
                    question: "Qu'est-ce qu'une fonction ?",
                    options: [
                        'Une relation qui donne au plus une image par antécédent',
                        'Une relation qui donne plusieurs images',
                        'Une machine qui additionne',
                        'Un tableau de valeurs'
                    ],
                    correct: 0,
                    correction: 'Une fonction associe à chaque x au plus un seul y.'
                },
                {
                    question: 'Que signifie f(2) = 3 ?',
                    options: [
                        "L'image de 2 est 3",
                        "L'antécédent de 2 est 3",
                        'La fonction est croissante',
                        'Le domaine est [2,3]'
                    ],
                    correct: 0,
                    correction: "f(2)=3 se lit : l'image de 2 par f est 3."
                },
                {
                    question: "Comment trouve-t-on le zéro d'une fonction graphiquement ?",
                    options: [
                        'Intersection avec l’axe des abscisses',
                        'Intersection avec l’axe des ordonnées',
                        'Le sommet de la courbe',
                        'Le point le plus bas'
                    ],
                    correct: 0,
                    correction: 'Le zéro est l’abscisse du point d’intersection avec l’axe des x.'
                },
                {
                    question: 'Une fonction est représentée par une courbe qui coupe l\'axe des x en -2 et 5. Quels sont les zéros de la fonction ?',
                    options: [
                        'x = -2 et x = 5',
                        'x = 2 et x = -5',
                        'x = 0 et x = 3',
                        'x = -5 et x = 2'
                    ],
                    correct: 0,
                    correction: 'Les zéros sont les abscisses où la courbe coupe l\'axe des x : -2 et 5.'
                },
                {
                    question: 'Si f(3) = 8, alors l\'image de 3 est...',
                    options: [
                        '8',
                        '3',
                        'f(8)',
                        '11'
                    ],
                    correct: 0,
                    correction: 'f(3) = 8 signifie que l\'image de 3 est 8.'
                },
                {
                    question: 'Sur un graphique, l\'ordonnée à l\'origine est le point où la courbe coupe...',
                    options: [
                        'L\'axe des ordonnées (x = 0)',
                        'L\'axe des abscisses (y = 0)',
                        'Le point le plus haut',
                        'Le point le plus bas'
                    ],
                    correct: 0,
                    correction: 'L\'ordonnée à l\'origine est la valeur de f(x) lorsque x = 0, donc l\'intersection avec l\'axe des y.'
                },
                {
                    question: 'Une fonction est décroissante si...',
                    options: [
                        'Sa courbe descend de gauche à droite',
                        'Sa courbe monte de gauche à droite',
                        'Sa courbe est horizontale',
                        'Sa courbe est verticale'
                    ],
                    correct: 0,
                    correction: 'Une fonction décroissante descend lorsqu\'on lit de gauche à droite.'
                }
            ]
        },

        // =====================================================
        // 3e — POLYNÔMES
        // =====================================================

        {
            id: '3e_algebre_polynomes',
            titre: '2. Polynômes & Factorisation',
            desc: 'UAA5 — Calculs, identités remarquables et méthodes de factorisation',
            niveau: '3e',
            icone: '🔢',
            color: '#e53e3e',

            cours: `
                <h4>🔹 C'est quoi un polynôme ?</h4>
                <p>Un polynôme est une somme de termes (ex : <b>2x² - 5x + 3</b>). Chaque terme est un produit d'un coefficient et d'une partie littérale.</p>

                <h4>🔹 Identités remarquables</h4>
                <div class="formule">
                    <p><b>(a + b)² = a² + 2ab + b²</b> (Carré d'une somme)</p>
                    <p><b>(a - b)² = a² - 2ab + b²</b> (Carré d'une différence)</p>
                    <p><b>a² - b² = (a - b)(a + b)</b> (Différence de carrés)</p>
                </div>

                <h4>🔹 Factoriser = transformer une somme en produit</h4>
                <p><b>Exemple :</b> 3x + 6 = 3(x + 2) — facteur commun 3.</p>
                <p><b>Méthode des rectangles :</b> pour x² + 5x + 6, on cherche deux nombres qui multipliés donnent 6 et additionnés donnent 5 : 2 et 3.</p>
                <p>Donc x² + 5x + 6 = (x + 2)(x + 3).</p>

                <h4>🔹 Règle du produit nul</h4>
                <div class="formule">
                    <p><b>AB = 0 ⇔ A = 0 ou B = 0</b></p>
                </div>
                <p>Un produit est nul si et seulement si au moins un de ses facteurs est nul.</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Mettre tout sous forme utile.</li>
                    <li>Chercher d'abord un facteur commun.</li>
                    <li>Reconnaître une identité remarquable.</li>
                    <li>Factoriser complètement avant le produit nul.</li>
                    <li>Vérifier en redéveloppant.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Arrêter la factorisation trop tôt.</li>
                        <li>⚠️ Appliquer le produit nul à une expression non factorisée.</li>
                        <li>⚠️ Erreur de signe dans une identité.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je connais les 3 identités remarquables</li>
                        <li>☐ Je sais mettre en évidence un facteur commun</li>
                        <li>☐ Je sais factoriser complètement</li>
                        <li>☐ Je sais utiliser le produit nul</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Maîtriser les produits remarquables',
                'Factoriser une expression algébrique',
                'Résoudre des équations grâce au produit nul'
            ],

            matieres: [
                'Identités remarquables',
                'Mise en évidence',
                'Méthode des rectangles',
                'Règle du produit nul'
            ],

            exercices: [
                {
                    question: 'Factoriser : x² - 9',
                    options: [
                        '(x-3)(x+3)',
                        '(x-3)²',
                        '(x+3)²',
                        'x²-9'
                    ],
                    correct: 0,
                    correction: 'a² - b² = (a-b)(a+b)'
                },
                {
                    question: 'Factoriser : x² + 5x + 6',
                    options: [
                        '(x+2)(x+3)',
                        '(x+1)(x+6)',
                        '(x-2)(x-3)',
                        'Impossible'
                    ],
                    correct: 0,
                    correction: '2×3=6 et 2+3=5'
                },
                {
                    question: 'Résoudre 2x² - 8x = 0',
                    options: [
                        'x = 0 ou x = 4',
                        'x = 2 ou x = -4',
                        'x = 0 ou x = -4',
                        'x = 2 ou x = 4'
                    ],
                    correct: 0,
                    correction: '2x(x-4)=0 donc x=0 ou x=4'
                },
                {
                    question: 'Factoriser : x² - 16',
                    options: [
                        '(x-4)(x+4)',
                        '(x-4)²',
                        '(x+4)²',
                        'x² - 16'
                    ],
                    correct: 0,
                    correction: 'a² - b² = (a-b)(a+b) → x² - 16 = (x-4)(x+4)'
                },
                {
                    question: 'Factoriser : 4x² - 12x',
                    options: [
                        '4x(x-3)',
                        '4x(3-x)',
                        'x(4x-12)',
                        '4x(x+3)'
                    ],
                    correct: 0,
                    correction: '4x² - 12x = 4x(x-3)'
                },
                {
                    question: 'Résoudre : x² - 25 = 0',
                    options: [
                        'x = 5 ou x = -5',
                        'x = 5',
                        'x = -5',
                        'x = 0 ou x = 25'
                    ],
                    correct: 0,
                    correction: 'x² - 25 = (x-5)(x+5) = 0 → x = 5 ou x = -5'
                },
                {
                    question: 'Développer : (2x+3)²',
                    options: [
                        '4x² + 12x + 9',
                        '4x² + 9',
                        '4x² + 6x + 9',
                        '2x² + 6x + 3'
                    ],
                    correct: 0,
                    correction: '(2x+3)² = 4x² + 12x + 9'
                }
            ]
        },

        // =====================================================
        // 3e — PYTHAGORE
        // =====================================================

        {
            id: '3e_pythagore',
            titre: '3. Théorème de Pythagore',
            desc: 'UAA2 — Le triangle rectangle et ses propriétés',
            niveau: '3e',
            icone: '📐',
            color: '#805ad5',

            cours: `
                <h4>🔹 Le théorème</h4>
                <p>Dans un triangle <b>rectangle</b>, le carré de l'hypoténuse (côté le plus long) est égal à la somme des carrés des deux autres côtés.</p>
                <div class="formule" style="text-align:center;font-size:21px;">
                    <b>a² + b² = c²</b>
                </div>

                <h4>🔹 Calcul d'une longueur</h4>
                <ul>
                    <li>Si les deux petits côtés sont connus : <b>c = √(a² + b²)</b></li>
                    <li>Si l'hypoténuse et un côté sont connus : <b>b = √(c² - a²)</b></li>
                </ul>
                <p><b>Exemple :</b> côtés 3 et 4 → 3² + 4² = 25 → hypoténuse = √25 = 5.</p>

                <h4>🔹 Diagonale d'un carré</h4>
                <div class="formule">
                    <p><b>d = a√2</b> (où a est le côté du carré)</p>
                </div>

                <h4>🔹 Réciproque du théorème</h4>
                <p>Si dans un triangle, le carré du plus grand côté est égal à la somme des carrés des deux autres côtés, alors ce triangle est <b>rectangle</b>.</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Faire un schéma.</li>
                    <li>Repérer l'angle droit.</li>
                    <li>Nommer l'hypoténuse.</li>
                    <li>Écrire la formule avant les nombres.</li>
                    <li>Conserver une valeur exacte puis arrondir si demandé.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Prendre le mauvais côté comme hypoténuse.</li>
                        <li>⚠️ Oublier la racine carrée.</li>
                        <li>⚠️ Arrondir trop tôt dans les calculs.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je repère l'hypoténuse correctement</li>
                        <li>☐ Je calcule un côté manquant</li>
                        <li>☐ Je prouve qu'un triangle est rectangle avec la réciproque</li>
                        <li>☐ Je résous un problème concret</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Utiliser le théorème pour calculer une longueur',
                'Utiliser la réciproque pour prouver qu\'un triangle est rectangle'
            ],

            matieres: [
                'Triangle rectangle, hypoténuse',
                'Diagonale d’un carré',
                'Nombres irrationnels (√2)'
            ],

            exercices: [
                {
                    question: 'Quel est le théorème de Pythagore ?',
                    options: [
                        'a² + b² = c²',
                        'a + b = c',
                        'a × b = c',
                        'a² = b² + c²'
                    ],
                    correct: 0,
                    correction: 'Dans un triangle rectangle, a² + b² = c²'
                },
                {
                    question: "Quelle est la diagonale d'un carré de côté 1 ?",
                    options: [
                        '√2',
                        '2',
                        '√3',
                        '1'
                    ],
                    correct: 0,
                    correction: 'd² = 1² + 1² = 2 → d = √2'
                },
                {
                    question: 'Un triangle a pour côtés 5, 12 et 13. Est-il rectangle ?',
                    options: [
                        'Oui, car 13² = 5² + 12²',
                        'Non, car 13² ≠ 5² + 12²',
                        'Oui, car 5² = 13² + 12²',
                        'On ne peut pas savoir'
                    ],
                    correct: 0,
                    correction: '13² = 169 et 5² + 12² = 25 + 144 = 169 → le triangle est rectangle.'
                },
                {
                    question: 'Un triangle rectangle a une hypoténuse de 10 cm et un côté de 6 cm. Que vaut l\'autre côté ?',
                    options: [
                        '8 cm',
                        '4 cm',
                        '12 cm',
                        '16 cm'
                    ],
                    correct: 0,
                    correction: 'a² + 6² = 10² → a² = 100 - 36 = 64 → a = 8 cm'
                },
                {
                    question: 'Un carré a une diagonale de 10 cm. Quelle est la longueur de son côté ?',
                    options: [
                        '5√2 cm',
                        '10√2 cm',
                        '5 cm',
                        '10 cm'
                    ],
                    correct: 0,
                    correction: 'd = a√2 → 10 = a√2 → a = 10/√2 = 5√2 cm'
                },
                {
                    question: 'Les côtés d\'un triangle mesurent 9, 12 et 15. Est-il rectangle ?',
                    options: [
                        'Oui, car 15² = 9² + 12²',
                        'Non, car 15² ≠ 9² + 12²',
                        'Oui, car 9² = 15² + 12²',
                        'On ne peut pas savoir'
                    ],
                    correct: 0,
                    correction: '15² = 225 et 9² + 12² = 81 + 144 = 225 → triangle rectangle.'
                }
            ]
        },

        // =====================================================
        // 3e — THALÈS
        // =====================================================

        {
            id: '3e_thales',
            titre: '4. Théorème de Thalès',
            desc: 'UAA1 — Les projections parallèles et les proportions',
            niveau: '3e',
            icone: '📐',
            color: '#319795',

            cours: `
                <h4>🔹 Le théorème</h4>
                <p>Quand deux droites parallèles coupent deux droites sécantes, elles déterminent des segments de longueurs <b>proportionnelles</b>.</p>
                <div class="formule" style="text-align:center;font-size:18px;">
                    <b>AB/AC = AD/AE = BD/CE</b>
                </div>

                <h4>🔹 Configuration</h4>
                <p>Deux droites sécantes sont coupées par deux parallèles. Les triangles correspondants sont semblables.</p>

                <h4>🔹 Calcul d'une longueur</h4>
                <p>On écrit les rapports de côtés homologues dans le même ordre, puis on utilise le produit en croix.</p>

                <h4>🔹 Réciproque de Thalès</h4>
                <p>Une égalité cohérente de rapports, avec les alignements nécessaires, permet de conclure au <b>parallélisme</b>.</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Marquer les parallèles sur le schéma.</li>
                    <li>Repérer les côtés correspondants.</li>
                    <li>Écrire les rapports dans le même ordre.</li>
                    <li>Faire le produit en croix.</li>
                    <li>Conclure avec une phrase géométrique.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Mélanger les correspondances de côtés.</li>
                        <li>⚠️ Oublier les alignements.</li>
                        <li>⚠️ Écrire des rapports avec des côtés non homologues.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je reconnais une configuration de Thalès</li>
                        <li>☐ Je calcule une longueur avec Thalès</li>
                        <li>☐ Je sais utiliser la réciproque</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Reconnaître une configuration de Thalès',
                'Calculer une longueur grâce aux rapports',
                'Partager un segment en parties égales'
            ],

            matieres: [
                'Projections parallèles',
                'Proportions',
                'Théorème des milieux'
            ],

            exercices: [
                {
                    question: 'Dans une configuration de Thalès, si AB/AC = AD/AE, que peut-on en déduire ?',
                    options: [
                        'BD // CE',
                        'AB // CD',
                        'AC // DE',
                        'AB // DE'
                    ],
                    correct: 0,
                    correction: 'D’après Thalès, BD // CE'
                },
                {
                    question: 'Si 4/10 = 6/x, que vaut x ?',
                    options: [
                        '15',
                        '12',
                        '8',
                        '20'
                    ],
                    correct: 0,
                    correction: '4x = 60 donc x = 15'
                },
                {
                    question: 'Dans une configuration de Thalès, on a AB/AC = 3/5 et AE = 10. Que vaut AD ?',
                    options: [
                        '6',
                        '8',
                        '12',
                        '15'
                    ],
                    correct: 0,
                    correction: 'AB/AC = AD/AE → 3/5 = AD/10 → AD = 6'
                },
                {
                    question: 'Deux droites sécantes sont coupées par deux parallèles. Les rapports des côtés correspondants sont...',
                    options: [
                        'Égaux',
                        'Différents',
                        'Inverses',
                        'Nuls'
                    ],
                    correct: 0,
                    correction: 'D\'après le théorème de Thalès, les rapports des côtés correspondants sont égaux.'
                },
                {
                    question: 'Pour utiliser la réciproque de Thalès, il faut vérifier que...',
                    options: [
                        'Les rapports sont égaux',
                        'Les rapports sont différents',
                        'Les droites sont perpendiculaires',
                        'Les droites sont sécantes'
                    ],
                    correct: 0,
                    correction: 'La réciproque de Thalès permet de prouver que deux droites sont parallèles si les rapports sont égaux.'
                }
            ]
        },

        // =====================================================
        // 3e — TRIGONOMÉTRIE RECTANGLE
        // =====================================================

        {
            id: '3e_trigo_rect',
            titre: '5. Trigonométrie du triangle rectangle',
            desc: 'UAA2 — Sinus, cosinus, tangente pour calculer des distances',
            niveau: '3e',
            icone: '📐',
            color: '#e88a00',

            cours: `
                <h4>🔹 SOH CAH TOA</h4>
                <p>Pour un angle aigu α dans un triangle rectangle :</p>
                <div class="formule">
                    <p><b>SOH</b> : <b>sin(α)</b> = <b>O</b>pposé / <b>H</b>ypoténuse</p>
                    <p><b>CAH</b> : <b>cos(α)</b> = <b>A</b>djacent / <b>H</b>ypoténuse</p>
                    <p><b>TOA</b> : <b>tan(α)</b> = <b>O</b>pposé / <b>A</b>djacent</p>
                </div>

                <h4>🔹 Calcul d'un angle</h4>
                <p>Pour retrouver un angle, utiliser <b>arcsin</b>, <b>arccos</b> ou <b>arctan</b> sur la calculatrice.</p>

                <h4>🔹 Distance inaccessible</h4>
                <p>Construire un triangle rectangle à partir d'une distance mesurable et d'un angle de visée.</p>
                <p><b>Exemple :</b> Hauteur = Distance × tan(angle).</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Nommer l'angle étudié.</li>
                    <li>Identifier les 3 côtés (opposé, adjacent, hypoténuse).</li>
                    <li>Choisir le rapport qui utilise les données.</li>
                    <li>Isoler l'inconnue.</li>
                    <li>Vérifier l'unité de la calculatrice (degrés ou radians).</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre adjacent et opposé.</li>
                        <li>⚠️ Calculatrice en radians au lieu de degrés.</li>
                        <li>⚠️ Arrondir avant la dernière étape.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je connais SOH-CAH-TOA</li>
                        <li>☐ Je calcule une longueur avec sinus, cosinus ou tangente</li>
                        <li>☐ Je calcule un angle avec arcsin, arccos ou arctan</li>
                        <li>☐ Je modélise une distance inaccessible</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Identifier opposé, adjacent, hypoténuse',
                'Choisir la bonne formule (sin, cos, tan)',
                'Calculer un côté ou un angle'
            ],

            matieres: [
                'SOH CAH TOA',
                'Distances inaccessibles',
                'Pente et inclinaison'
            ],

            exercices: [
                {
                    question: 'Que vaut sin(30°) ?',
                    options: [
                        '0.5',
                        '0.707',
                        '1',
                        '0.866'
                    ],
                    correct: 0,
                    correction: 'sin(30°) = 1/2 = 0.5'
                },
                {
                    question: 'Si tan(α) = 0.5, que vaut α ?',
                    options: [
                        '≈ 26.6°',
                        '≈ 30°',
                        '≈ 45°',
                        '≈ 60°'
                    ],
                    correct: 0,
                    correction: 'α = arctan(0.5) ≈ 26.6°'
                },
                {
                    question: 'Dans un triangle rectangle, si cos(α) = 0,8, que vaut sin(α) ?',
                    options: [
                        '0,6',
                        '0,2',
                        '0,8',
                        '0,4'
                    ],
                    correct: 0,
                    correction: 'sin²(α) + cos²(α) = 1 → sin²(α) = 1 - 0,64 = 0,36 → sin(α) = 0,6'
                },
                {
                    question: 'Si tan(α) = 1, que vaut α ?',
                    options: [
                        '45°',
                        '30°',
                        '60°',
                        '90°'
                    ],
                    correct: 0,
                    correction: 'tan(45°) = 1'
                },
                {
                    question: 'Pour calculer la hauteur d\'un arbre, on mesure une distance de 15 m et un angle d\'élévation de 40°. Quelle formule utilise-t-on ?',
                    options: [
                        'h = 15 × tan(40°)',
                        'h = 15 × sin(40°)',
                        'h = 15 × cos(40°)',
                        'h = 15 / tan(40°)'
                    ],
                    correct: 0,
                    correction: 'tan(α) = opposé/adjacent → tan(40°) = h/15 → h = 15 × tan(40°)'
                }
            ]
        }

    ],


    // =====================================================
    // 4e
    // =====================================================

    '4e': [

        // =====================================================
        // 4e — ÉQUATIONS 2ND DEGRÉ
        // =====================================================

        {
            id: '4e_polynomes_2deg',
            titre: '1. Équations du 2e degré',
            desc: 'UAA5 — Discriminant, racines et paraboles',
            niveau: '4e',
            icone: '🔢',
            color: '#e53e3e',

            cours: `
                <h4>🔹 La forme générale</h4>
                <div class="formule" style="text-align:center;font-size:19px;">
                    <b>ax² + bx + c = 0</b>
                </div>

                <h4>🔹 Le discriminant Δ</h4>
                <div class="formule" style="text-align:center;font-size:18px;">
                    <b>Δ = b² - 4ac</b>
                </div>
                <ul>
                    <li>Si <b>Δ > 0</b> : deux solutions réelles distinctes</li>
                    <li>Si <b>Δ = 0</b> : une solution réelle double</li>
                    <li>Si <b>Δ < 0</b> : aucune solution réelle</li>
                </ul>

                <h4>🔹 Les solutions</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>x₁ = (-b - √Δ)/2a</b> et <b>x₂ = (-b + √Δ)/2a</b>
                </div>

                <h4>🔹 Le sommet de la parabole</h4>
                <p>Pour f(x) = ax² + bx + c, le sommet a pour abscisse :</p>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>x<sub>S</sub> = -b/(2a)</b>
                </div>
                <p>et pour ordonnée : <b>y<sub>S</sub> = f(x<sub>S</sub>)</b>.</p>

                <h4>🔹 Forme canonique</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>f(x) = a(x - h)² + k</b>
                </div>
                <p>Le sommet est <b>S(h, k)</b>.</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Mettre l'équation sous la forme ax² + bx + c = 0.</li>
                    <li>Identifier a, b, c avec leurs signes.</li>
                    <li>Calculer Δ = b² - 4ac.</li>
                    <li>Choisir le bon cas selon le signe de Δ.</li>
                    <li>Vérifier les solutions en les remplaçant.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Erreur de signe sur b.</li>
                        <li>⚠️ Oublier le 2a au dénominateur.</li>
                        <li>⚠️ Confondre les zéros et le sommet.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je calcule Δ correctement</li>
                        <li>☐ Je résous selon le signe de Δ</li>
                        <li>☐ Je trouve le sommet de la parabole</li>
                        <li>☐ Je lis le rôle de a (concavité)</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Calculer le discriminant',
                'Résoudre une équation du second degré',
                'Étudier le signe d’un trinôme'
            ],

            matieres: [
                'Discriminant',
                'Formule de résolution',
                'Racines et sommet de la parabole'
            ],

            exercices: [
                {
                    question: 'Quelle est la formule du discriminant Δ ?',
                    options: [
                        'b² - 4ac',
                        'b² + 4ac',
                        'a² - 4bc',
                        'c² - 4ab'
                    ],
                    correct: 0,
                    correction: 'Δ = b² - 4ac'
                },
                {
                    question: 'Résoudre x² - 4 = 0',
                    options: [
                        'x = 2 ou x = -2',
                        'x = 2',
                        'x = -2',
                        'x = 4'
                    ],
                    correct: 0,
                    correction: 'x² = 4 → x = ±2'
                },
                {
                    question: 'Pour 2x² - 5x - 3 = 0, que vaut Δ ?',
                    options: [
                        '49',
                        '25',
                        '81',
                        '36'
                    ],
                    correct: 0,
                    correction: 'Δ = (-5)² - 4×2×(-3) = 25 + 24 = 49'
                },
                {
                    question: 'Pour x² - 4x + 3 = 0, que vaut le discriminant Δ ?',
                    options: [
                        '4',
                        '8',
                        '16',
                        '0'
                    ],
                    correct: 0,
                    correction: 'Δ = b² - 4ac = (-4)² - 4×1×3 = 16 - 12 = 4'
                },
                {
                    question: 'Résoudre : x² - 5x + 6 = 0',
                    options: [
                        'x = 2 ou x = 3',
                        'x = -2 ou x = -3',
                        'x = 1 ou x = 6',
                        'x = 2 ou x = -3'
                    ],
                    correct: 0,
                    correction: 'Δ = 25 - 24 = 1 → x = (5 ± 1)/2 → x = 3 ou x = 2'
                },
                {
                    question: 'Le sommet de la parabole f(x) = x² - 4x + 3 a pour abscisse...',
                    options: [
                        '2',
                        '-2',
                        '4',
                        '-4'
                    ],
                    correct: 0,
                    correction: 'xS = -b/(2a) = 4/2 = 2'
                }
            ]
        },

        // =====================================================
        // 4e — VECTEURS
        // =====================================================

        {
            id: '4e_vecteurs',
            titre: '2. Calcul vectoriel',
            desc: 'UAA3 — Vecteurs et produit scalaire',
            niveau: '4e',
            icone: '➡️',
            color: '#805ad5',

            cours: `
                <h4>🔹 Coordonnées d'un vecteur</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>AB = (x<sub>B</sub> - x<sub>A</sub>, y<sub>B</sub> - y<sub>A</sub>)</b>
                </div>

                <h4>🔹 Relation de Chasles</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>AB + BC = AC</b>
                </div>

                <h4>🔹 Produit scalaire</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>u·v = x₁x₂ + y₁y₂ = ||u|| × ||v|| × cos(θ)</b>
                </div>

                <h4>🔹 Orthogonalité</h4>
                <p>Deux vecteurs <b>non nuls</b> sont orthogonaux si et seulement si <b>u·v = 0</b>.</p>

                <h4>🔹 Norme d'un vecteur</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>||u|| = √(x² + y²)</b>
                </div>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Calculer les coordonnées des vecteurs.</li>
                    <li>Utiliser Chasles pour relier des points.</li>
                    <li>Pour une perpendicularité, chercher un produit scalaire nul.</li>
                    <li>Pour un angle, diviser par le produit des normes.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre coordonnées d'un point et d'un vecteur.</li>
                        <li>⚠️ Oublier de soustraire dans le bon ordre.</li>
                        <li>⚠️ Orthogonalité = produit scalaire nul, pas produit des normes.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je calcule un vecteur</li>
                        <li>☐ J'utilise la relation de Chasles</li>
                        <li>☐ Je teste l'orthogonalité</li>
                        <li>☐ Je calcule un angle entre deux vecteurs</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Calculer un produit scalaire',
                'Déterminer si deux vecteurs sont orthogonaux',
                'Utiliser la relation de Chasles'
            ],

            matieres: [
                'Relation de Chasles',
                'Produit scalaire géométrique',
                'Applications physiques (travail, force)'
            ],

            exercices: [
                {
                    question: 'Que représente le produit scalaire de deux vecteurs ?',
                    options: [
                        'Un nombre réel',
                        'Un vecteur',
                        'Une distance',
                        'Un angle'
                    ],
                    correct: 0,
                    correction: 'Le produit scalaire est un nombre réel'
                },
                {
                    question: 'Que vaut le produit scalaire de deux vecteurs orthogonaux ?',
                    options: [
                        '0',
                        '1',
                        'Le produit de leurs normes',
                        '-1'
                    ],
                    correct: 0,
                    correction: 'Il est nul.'
                },
                {
                    question: 'Si A(1,2) et B(5,5), que vaut AB ?',
                    options: [
                        '(4,3)',
                        '(3,4)',
                        '(6,7)',
                        '(5,5)'
                    ],
                    correct: 0,
                    correction: 'AB = (5-1, 5-2) = (4,3)'
                }
            ]
        },

        // =====================================================
        // 4e — STATISTIQUES
        // =====================================================

        {
            id: '4e_statistiques',
            titre: '3. Statistiques',
            desc: 'UAA1 — Moyenne, médiane, variance et graphiques',
            niveau: '4e',
            icone: '📊',
            color: '#d69e2e',

            cours: `
                <h4>🔹 Paramètres de position</h4>
                <ul>
                    <li><b>Moyenne</b> : <b>x̄ = Σxi / n</b> (somme divisée par l'effectif total).</li>
                    <li><b>Médiane</b> : valeur centrale après classement ; si l'effectif est pair, moyenne des deux valeurs centrales.</li>
                    <li><b>Mode</b> : valeur la plus fréquente.</li>
                </ul>

                <h4>🔹 Paramètres de dispersion</h4>
                <ul>
                    <li><b>Variance (V)</b> : <b>V = Σ(xi - x̄)² / n</b> (moyenne des carrés des écarts à la moyenne).</li>
                    <li><b>Écart-type (σ)</b> : <b>σ = √V</b> (racine carrée de la variance).</li>
                </ul>

                <h4>🔹 Boîte à moustaches</h4>
                <p>Elle visualise 5 valeurs : <b>minimum, Q1, médiane (Q2), Q3, maximum</b>.</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Classer les données par ordre croissant.</li>
                    <li>Construire le tableau valeurs/effectifs si nécessaire.</li>
                    <li>Calculer le centre (moyenne, médiane, mode).</li>
                    <li>Calculer la dispersion (variance, écart-type).</li>
                    <li>Interpréter dans les unités du problème.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Ne pas classer les données avant de chercher la médiane.</li>
                        <li>⚠️ Diviser par le mauvais effectif.</li>
                        <li>⚠️ Confondre variance et écart-type.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je calcule une moyenne</li>
                        <li>☐ Je trouve une médiane</li>
                        <li>☐ Je calcule la dispersion (variance, écart-type)</li>
                        <li>☐ Je lis une boîte à moustaches</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Calculer moyenne, médiane, mode',
                'Calculer variance et écart-type',
                'Interpréter une boîte à moustaches'
            ],

            matieres: [
                'Tableaux de fréquences',
                'Diagrammes, histogrammes',
                'Quartiles et écart-type'
            ],

            exercices: [
                {
                    question: 'Quelle est la médiane de 3, 5, 7, 9, 11 ?',
                    options: [
                        '7',
                        '6',
                        '8',
                        '5'
                    ],
                    correct: 0,
                    correction: 'La valeur centrale est 7.'
                },
                {
                    question: 'Quelle est la moyenne de 4, 6, 8, 10, 12 ?',
                    options: [
                        '8',
                        '7',
                        '9',
                        '6'
                    ],
                    correct: 0,
                    correction: '(4+6+8+10+12)/5 = 8'
                }
            ]
        },

        // =====================================================
        // 4e — FONCTIONS DE RÉFÉRENCE
        // =====================================================

        {
            id: '4e_fonctions_ref',
            titre: '4. Fonctions de référence',
            desc: 'UAA4 — Fonction affine, quadratique et leurs paramètres',
            niveau: '4e',
            icone: '📈',
            color: '#3182ce',

            cours: `
                <h4>🔹 La fonction affine</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>f(x) = mx + p</b>
                </div>
                <ul>
                    <li><b>m</b> est la pente (croissante si m > 0, décroissante si m < 0).</li>
                    <li><b>p</b> est l'ordonnée à l'origine.</li>
                </ul>

                <h4>🔹 Calcul de la pente</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>m = (y₂ - y₁)/(x₂ - x₁)</b>
                </div>

                <h4>🔹 La fonction quadratique</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>f(x) = a(x - h)² + k</b> (forme canonique)
                </div>
                <ul>
                    <li>Le sommet est <b>S(h, k)</b>.</li>
                    <li>L'axe de symétrie est <b>x = h</b>.</li>
                    <li>Si <b>a > 0</b> : parabole tournée vers le haut (minimum).</li>
                    <li>Si <b>a < 0</b> : parabole tournée vers le bas (maximum).</li>
                    <li>|<b>a</b>| contrôle l'ouverture de la parabole.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Trouver la pente m avec deux points.</li>
                    <li>Utiliser un point pour trouver p.</li>
                    <li>Lire le sommet dans la forme canonique.</li>
                    <li>Interpréter le signe de a.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Signe de h dans la forme canonique (x - h).</li>
                        <li>⚠️ Confondre p et f(1).</li>
                        <li>⚠️ Oublier l'effet de a sur l'ouverture.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je trouve une équation affine</li>
                        <li>☐ Je calcule une pente</li>
                        <li>☐ Je lis un sommet dans la forme canonique</li>
                        <li>☐ J'interprète une parabole</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Reconnaître une fonction affine ou quadratique',
                'Identifier pente et ordonnée à l’origine',
                'Trouver le sommet d’une parabole'
            ],

            matieres: [
                'Fonction affine',
                'Fonction quadratique',
                'Forme canonique'
            ],

            exercices: [
                {
                    question: 'Dans f(x) = 3x + 2, que représente 3 ?',
                    options: [
                        'La pente',
                        'L’ordonnée à l’origine',
                        'Le sommet',
                        'Le discriminant'
                    ],
                    correct: 0,
                    correction: 'Dans mx+p, m est la pente.'
                },
                {
                    question: 'Quel est le sommet de f(x) = -2(x-3)² + 5 ?',
                    options: [
                        'S(3,5)',
                        'S(-3,5)',
                        'S(3,-5)',
                        'S(-3,-5)'
                    ],
                    correct: 0,
                    correction: 'Dans a(x-h)²+k, le sommet est (h,k).'
                }
            ]
        },

        // =====================================================
        // 4e — GÉOMÉTRIE DANS L'ESPACE
        // =====================================================

        {
            id: '4e_geo_espace',
            titre: '5. Géométrie dans l’espace',
            desc: 'UAA2 — Représenter et construire dans l’espace',
            niveau: '4e',
            icone: '📦',
            color: '#38a169',

            cours: `
                <h4>🔹 Perspective cavalière</h4>
                <p>Les parallèles restent parallèles sur le dessin ; la profondeur est représentée selon une convention.</p>

                <h4>🔹 Positions relatives des droites</h4>
                <ul>
                    <li><b>Sécantes</b> : elles se coupent en un point.</li>
                    <li><b>Parallèles</b> : elles ne se coupent pas et sont coplanaires.</li>
                    <li><b>Gauches</b> : elles ne se coupent pas et ne sont pas coplanaires.</li>
                </ul>

                <h4>🔹 Positions relatives d'une droite et d'un plan</h4>
                <ul>
                    <li>La droite est <b>contenue</b> dans le plan.</li>
                    <li>La droite est <b>parallèle</b> au plan (sans être contenue).</li>
                    <li>La droite est <b>sécante</b> au plan (elle le coupe en un point).</li>
                </ul>

                <h4>🔹 Section plane</h4>
                <p>La <b>section</b> est l'intersection d'un solide et d'un plan.</p>
                <p>Le <b>point de percée</b> est l'intersection d'une droite et d'un plan.</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Identifier les faces concernées.</li>
                    <li>Chercher les points communs.</li>
                    <li>Utiliser alignements et parallélismes.</li>
                    <li>Ne jamais conclure uniquement à partir de la perspective.</li>
                </ol>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre géométrie plane et spatiale.</li>
                        <li>⚠️ Déduire une propriété uniquement du dessin.</li>
                        <li>⚠️ Oublier que deux droites gauches existent dans l'espace.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je distingue droites parallèles et gauches</li>
                        <li>☐ Je classe une droite et un plan</li>
                        <li>☐ Je construis une section plane</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Représenter un objet de l’espace en perspective cavalière',
                'Identifier les positions relatives de deux droites, de deux plans, d’une droite et d’un plan',
                'Construire un point de percée ou une section plane simple'
            ],

            matieres: [
                'Perspective cavalière et perspective centrale',
                'Positions relatives (droites, plans)',
                'Point de percée et section plane'
            ],

            exercices: [
                {
                    question: 'Deux droites de l’espace qui ne sont ni sécantes ni parallèles sont dites…',
                    options: [
                        'Gauches',
                        'Orthogonales',
                        'Confondues',
                        'Coplanaires'
                    ],
                    correct: 0,
                    correction: 'On les appelle des droites gauches.'
                },
                {
                    question: 'Que représente l’intersection de deux plans sécants ?',
                    options: [
                        'Une droite',
                        'Un point',
                        'Un plan',
                        'Un segment'
                    ],
                    correct: 0,
                    correction: 'Deux plans sécants se coupent suivant une droite.'
                }
            ]
        },

        // =====================================================
        // 4e — TRIGONOMÉTRIE AVANCÉE
        // =====================================================

        {
            id: '4e_trigo_cercle',
            titre: '6. Trigonométrie avancée',
            desc: 'UAA3 — Le cercle trigonométrique et ses relations',
            niveau: '4e',
            icone: '⭕',
            color: '#d69e2e',

            cours: `
                <h4>🔹 Le cercle trigonométrique</h4>
                <p>C’est un cercle de <b>rayon 1</b> centré à l’origine. Pour un angle α, le point correspondant sur le cercle a pour coordonnées <b>(cos α, sin α)</b>.</p>

                <h4>🔹 La relation fondamentale</h4>
                <div class="formule" style="text-align:center;font-size:19px;">
                    <b>sin²(α) + cos²(α) = 1</b>
                </div>
                <p>Et aussi : <b>tan(α) = sin(α) / cos(α)</b>.</p>

                <h4>🔹 Résoudre un triangle quelconque</h4>
                <ul>
                    <li><b>Aire d’un triangle</b> : <b>Aire = (1/2) × a × b × sin(C)</b></li>
                    <li><b>Relation des sinus</b> : <b>a/sin(A) = b/sin(B) = c/sin(C)</b></li>
                    <li><b>Théorème d’Al-Kashi</b> : <b>a² = b² + c² - 2bc·cos(A)</b></li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Deux côtés + angle compris → penser à Al-Kashi.</li>
                    <li>Un côté et son angle opposé → penser à la loi des sinus.</li>
                    <li>Deux côtés + angle compris → aire avec sinus.</li>
                    <li>Vérifier la calculatrice (degrés/radians).</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Mauvais angle dans Al-Kashi.</li>
                        <li>⚠️ Confondre côtés et angles opposés.</li>
                        <li>⚠️ Signe incorrect dans -2ab cos C.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je connais la relation fondamentale</li>
                        <li>☐ Je sais choisir Al-Kashi</li>
                        <li>☐ Je sais utiliser la loi des sinus</li>
                        <li>☐ Je calcule une aire avec sinus</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Placer un angle et ses nombres trigonométriques sur le cercle trigonométrique',
                'Utiliser la relation fondamentale sin²+cos²=1',
                'Calculer une aire, une longueur ou un angle dans un triangle quelconque'
            ],

            matieres: [
                'Cercle trigonométrique',
                'Relation fondamentale et tan = sin/cos',
                'Aire d’un triangle, relation des sinus, Al-Kashi'
            ],

            exercices: [
                {
                    question: 'Que vaut sin²(α) + cos²(α) pour tout angle α ?',
                    options: [
                        '1',
                        '0',
                        '2',
                        'Cela dépend de α'
                    ],
                    correct: 0,
                    correction: 'C’est la relation fondamentale de la trigonométrie : elle est toujours vraie.'
                },
                {
                    question: 'Si sin(α) = 0,6, que vaut cos²(α) ?',
                    options: [
                        '0,64',
                        '0,36',
                        '0,4',
                        '1,36'
                    ],
                    correct: 0,
                    correction: 'cos²(α) = 1 - sin²(α) = 1 - 0,36 = 0,64'
                }
            ]
        }

    ],


    // =====================================================
    // 5e
    // =====================================================

    '5e': [

        // =====================================================
        // 5e — LIMITES
        // =====================================================

        {
            id: '5e_limites',
            titre: '1. Limites de fonctions',
            desc: "UAA1 — Comportement d'une fonction aux bornes de son domaine",
            niveau: '5e',
            icone: '📈',
            color: '#3182ce',

            cours: `
                <h4>🔹 L'idée intuitive</h4>
                <p>La limite décrit ce que devient f(x) quand x se rapproche d'une valeur ou de l'infini.</p>

                <h4>🔹 Les formes indéterminées</h4>
                <p>Ce sont les cas où on ne peut pas conclure directement : <b>0/0</b>, <b>∞/∞</b>, <b>∞ - ∞</b>, <b>0 × ∞</b>.</p>
                <p>Pour les lever : factoriser, simplifier, rationaliser ou comparer les termes dominants.</p>

                <h4>🔹 Asymptotes</h4>
                <ul>
                    <li><b>Horizontale</b> : si f(x) → L quand x → ∞, alors y = L est une asymptote horizontale.</li>
                    <li><b>Verticale</b> : si f(x) → ±∞ quand x → a, alors x = a est une asymptote verticale.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Identifier la forme (0/0, ∞/∞, etc.).</li>
                    <li>Transformer avant de calculer si nécessaire.</li>
                    <li>Pour les polynômes rationnels, comparer les degrés.</li>
                    <li>Conclure sur l'asymptote.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Dire que 0/0 = 0 (c'est une forme indéterminée).</li>
                        <li>⚠️ Confondre limite et valeur de la fonction.</li>
                        <li>⚠️ Oublier de distinguer limite à gauche et à droite.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je reconnais une limite</li>
                        <li>☐ Je traite 0/0</li>
                        <li>☐ Je traite ∞/∞</li>
                        <li>☐ Je trouve les asymptotes</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Calculer une limite en un point ou en l’infini',
                'Lever une forme indéterminée',
                'Déterminer les asymptotes d’une fonction'
            ],

            matieres: [
                'Limites finies et infinies',
                'Formes indéterminées',
                'Asymptotes horizontales et verticales'
            ],

            exercices: [
                {
                    question: "Quelle est la limite de f(x) = 1/x quand x → +∞ ?",
                    options: [
                        '0',
                        '+∞',
                        '1',
                        'Elle n’existe pas'
                    ],
                    correct: 0,
                    correction: '1/x devient de plus en plus petit : la limite est 0.'
                },
                {
                    question: '0/0 est une forme...',
                    options: [
                        'Indéterminée',
                        'Toujours nulle',
                        'Toujours infinie',
                        'Impossible à rencontrer'
                    ],
                    correct: 0,
                    correction: '0/0 ne permet pas de conclure directement.'
                },
                {
                    question: 'Quelle est la limite de f(x) = (x² - 1)/(x - 1) quand x → 1 ?',
                    options: [
                        '2',
                        '0',
                        '1',
                        '∞'
                    ],
                    correct: 0,
                    correction: 'Factoriser : (x-1)(x+1)/(x-1) = x+1 → limite = 2'
                },
                {
                    question: 'La droite x = 2 est une asymptote verticale si...',
                    options: [
                        'f(x) → ±∞ quand x → 2',
                        'f(x) → 2 quand x → ∞',
                        'f(x) = 2',
                        'f(x) → 0 quand x → 2'
                    ],
                    correct: 0,
                    correction: 'Une asymptote verticale est une droite x = a où la fonction tend vers ±∞.'
                },
                {
                    question: 'Quelle est la limite de f(x) = 1/x² quand x → 0 ?',
                    options: [
                        '+∞',
                        '0',
                        '1',
                        '-∞'
                    ],
                    correct: 0,
                    correction: '1/x² devient très grand quand x s\'approche de 0 → +∞'
                }
            ]
        },

        // =====================================================
        // 5e — INTRODUCTION À LA DÉRIVÉE
        // =====================================================

        {
            id: '5e_derivees_intro',
            titre: '2. Introduction à la dérivée',
            desc: "UAA1 — Nombre dérivé, tangente et taux de variation",
            niveau: '5e',
            icone: '📐',
            color: '#e53e3e',

            cours: `
                <h4>🔹 Le taux de variation moyen</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>τ = [f(b) - f(a)] / (b - a)</b>
                </div>
                <p>C'est la pente de la sécante entre deux points.</p>

                <h4>🔹 Le nombre dérivé</h4>
                <p>La dérivée <b>f'(a)</b> est la limite du taux moyen quand b tend vers a : c'est la <b>pente de la tangente</b>.</p>

                <h4>🔹 Équation de la tangente</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>y = f'(a)(x - a) + f(a)</b>
                </div>

                <h4>🔹 Dérivées usuelles</h4>
                <ul>
                    <li><b>(k)' = 0</b></li>
                    <li><b>(x)' = 1</b></li>
                    <li><b>(x²)' = 2x</b></li>
                    <li><b>(xⁿ)' = n·xⁿ⁻¹</b></li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Calculer f(a).</li>
                    <li>Calculer f'(a).</li>
                    <li>Reporter dans la formule de la tangente.</li>
                    <li>Interpréter le signe de la pente.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre taux moyen et nombre dérivé.</li>
                        <li>⚠️ Oublier f(a) dans l'équation de la tangente.</li>
                        <li>⚠️ Confondre tangente et sécante.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je calcule un taux de variation moyen</li>
                        <li>☐ Je connais les dérivées de base</li>
                        <li>☐ Je construis une tangente</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Calculer un taux de variation moyen',
                'Comprendre le lien entre dérivée et tangente',
                'Dériver une fonction polynomiale simple'
            ],

            matieres: [
                'Taux de variation',
                'Nombre dérivé',
                'Règles de dérivation de base'
            ],

            exercices: [
                {
                    question: 'Le nombre dérivé f’(a) représente géométriquement...',
                    options: [
                        'La pente de la tangente en a',
                        'La valeur de f en a',
                        'L’aire sous la courbe',
                        'Le zéro de la fonction'
                    ],
                    correct: 0,
                    correction: 'f’(a) est la pente de la tangente au point a.'
                },
                {
                    question: 'Quelle est la dérivée de x³ ?',
                    options: [
                        '3x²',
                        'x²',
                        '3x',
                        'x³'
                    ],
                    correct: 0,
                    correction: "(xⁿ)’ = n·xⁿ⁻¹, donc (x³)’ = 3x²"
                },
                {
                    question: 'Quelle est la dérivée de f(x) = x⁵ ?',
                    options: [
                        '5x⁴',
                        'x⁴',
                        '5x⁵',
                        '4x⁵'
                    ],
                    correct: 0,
                    correction: '(xⁿ)\' = n·xⁿ⁻¹ → (x⁵)\' = 5x⁴'
                },
                {
                    question: 'Le nombre dérivé f\'(a) représente la pente de...',
                    options: [
                        'La tangente en a',
                        'La sécante en a',
                        'La courbe entière',
                        'La droite verticale'
                    ],
                    correct: 0,
                    correction: 'f\'(a) est la pente de la tangente à la courbe au point d\'abscisse a.'
                }
            ]
        },

        // =====================================================
        // 5e — NOMBRES COMPLEXES
        // =====================================================

        {
            id: '5e_complexes',
            titre: '3. Nombres complexes',
            desc: 'UAA3 — Forme algébrique, module et opérations',
            niveau: '5e',
            icone: 'ℂ',
            color: '#805ad5',

            cours: `
                <h4>🔹 Pourquoi les complexes ?</h4>
                <p>Pour donner un sens à √(-1). On pose <b>i² = -1</b>, et tout nombre complexe s'écrit <b>z = a + bi</b>.</p>

                <h4>🔹 Forme algébrique</h4>
                <ul>
                    <li><b>a</b> est la partie réelle.</li>
                    <li><b>b</b> est la partie imaginaire.</li>
                </ul>

                <h4>🔹 Le module</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>|z| = √(a² + b²)</b>
                </div>
                <p>C'est la distance entre le point z et l'origine dans le plan complexe.</p>

                <h4>🔹 Le conjugué</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>\\bar{z} = a - bi</b>
                </div>

                <h4>🔹 Opérations</h4>
                <ul>
                    <li><b>Addition</b> : (a+bi) + (c+di) = (a+c) + (b+d)i</li>
                    <li><b>Multiplication</b> : (a+bi)(c+di) = (ac-bd) + (ad+bc)i</li>
                    <li><b>Division</b> : multiplier par le conjugué du dénominateur.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Développer en remplaçant i² par -1.</li>
                    <li>Regrouper réel et imaginaire.</li>
                    <li>Utiliser le conjugué pour une division.</li>
                    <li>Calculer le module avec Pythagore.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier i² = -1.</li>
                        <li>⚠️ Confondre conjugué et opposé.</li>
                        <li>⚠️ Laisser un dénominateur complexe.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je manipule i</li>
                        <li>☐ Je multiplie des complexes</li>
                        <li>☐ Je calcule un module</li>
                        <li>☐ Je divise par le conjugué</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Écrire un nombre complexe sous forme algébrique',
                'Calculer le module d’un complexe',
                'Additionner et multiplier des complexes'
            ],

            matieres: [
                'Forme algébrique a + bi',
                'Module et plan complexe',
                'Opérations sur les complexes'
            ],

            exercices: [
                {
                    question: 'Que vaut i² ?',
                    options: [
                        '-1',
                        '1',
                        '0',
                        'i'
                    ],
                    correct: 0,
                    correction: 'Par définition, i² = -1.'
                },
                {
                    question: 'Quel est le module de z = 3 + 4i ?',
                    options: [
                        '5',
                        '7',
                        '25',
                        '12'
                    ],
                    correct: 0,
                    correction: '|z| = √(3² + 4²) = √25 = 5'
                }
            ]
        },

        // =====================================================
        // 5e — GÉOMÉTRIE ANALYTIQUE
        // =====================================================

        {
            id: '5e_geo_analytique',
            titre: '4. Géométrie analytique plane',
            desc: 'UAA4 — Droites et cercles dans un repère',
            niveau: '5e',
            icone: '📐',
            color: '#0e7c86',

            cours: `
                <h4>🔹 L'équation d'une droite</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>y = mx + p</b>
                </div>
                <p>La pente : <b>m = (y₂ - y₁)/(x₂ - x₁)</b></p>

                <h4>🔹 Distance entre deux points</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>d(A,B) = √[(x<sub>B</sub> - x<sub>A</sub>)² + (y<sub>B</sub> - y<sub>A</sub>)²]</b>
                </div>

                <h4>🔹 L'équation d'un cercle</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>(x - a)² + (y - b)² = r²</b>
                </div>
                <p>Centre C(a, b), rayon r.</p>

                <h4>🔹 Positions relatives</h4>
                <ul>
                    <li><b>Parallèles</b> : mêmes pentes.</li>
                    <li><b>Perpendiculaires</b> : produit des pentes = -1 (lorsque les pentes existent).</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Calculer m.</li>
                    <li>Trouver p avec un point.</li>
                    <li>Reconnaître le centre et rayon d'un cercle.</li>
                    <li>Tester une appartenance par substitution.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Erreur de signe dans le centre du cercle.</li>
                        <li>⚠️ Confondre pente et ordonnée à l'origine.</li>
                        <li>⚠️ Oublier la racine carrée pour la distance.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je trouve une équation de droite</li>
                        <li>☐ Je calcule une distance</li>
                        <li>☐ Je reconnais un cercle</li>
                        <li>☐ Je teste une appartenance</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Calculer la pente d’une droite',
                'Calculer la distance entre deux points',
                'Écrire l’équation d’un cercle'
            ],

            matieres: [
                'Équation de droite',
                'Distance dans le plan',
                'Équation du cercle'
            ],

            exercices: [
                {
                    question: 'Quelle est l’équation d’un cercle de centre (0,0) et de rayon 3 ?',
                    options: [
                        'x² + y² = 9',
                        'x² + y² = 3',
                        'x + y = 9',
                        '(x-3)² + y² = 0'
                    ],
                    correct: 0,
                    correction: '(x-a)²+(y-b)²=r² avec a=b=0 et r=3 donne x²+y²=9.'
                }
            ]
        },

        // =====================================================
        // 5e — STATISTIQUE À DEUX VARIABLES
        // =====================================================

        {
            id: '5e_stat_2var',
            titre: '5. Statistique à deux variables',
            desc: 'UAA — Nuage de points, ajustement et corrélation',
            niveau: '5e',
            icone: '📊',
            color: '#3182ce',

            cours: `
                <h4>🔹 Étudier deux caractères à la fois</h4>
                <p>Quand on mesure deux grandeurs sur les mêmes individus, on obtient une <b>série statistique à deux variables</b>, représentée par un <b>nuage de points</b>.</p>

                <h4>🔹 Le point moyen</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>G(x̄, ȳ)</b>
                </div>
                <p>où x̄ et ȳ sont les moyennes des deux séries.</p>

                <h4>🔹 La droite de Mayer</h4>
                <p>Partager les points en deux groupes, calculer les deux points moyens, puis prendre la droite qui les relie.</p>

                <h4>🔹 Le coefficient de corrélation</h4>
                <ul>
                    <li>r proche de <b>1</b> : liaison linéaire positive forte.</li>
                    <li>r proche de <b>-1</b> : liaison linéaire négative forte.</li>
                    <li>r proche de <b>0</b> : liaison linéaire faible.</li>
                </ul>
                <div class="astuce">💡 Attention : corrélation ≠ causalité !</div>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Tracer le nuage avant d’interpréter.</li>
                    <li>Calculer les moyennes.</li>
                    <li>Pour Mayer, obtenir deux points moyens.</li>
                    <li>Interpréter r avec prudence.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre corrélation et pente.</li>
                        <li>⚠️ Croire que corrélation = causalité.</li>
                        <li>⚠️ Oublier les valeurs atypiques (outliers).</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je lis un nuage de points</li>
                        <li>☐ Je calcule le point moyen</li>
                        <li>☐ Je construis la droite de Mayer</li>
                        <li>☐ J'interprète le coefficient de corrélation</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Représenter un nuage de points et calculer le point moyen',
                'Déterminer l’équation d’une droite d’ajustement',
                'Interpréter un coefficient de corrélation'
            ],

            matieres: [
                'Nuage de points, point moyen',
                'Ajustement linéaire',
                'Coefficient de corrélation'
            ],

            exercices: [
                {
                    question: 'Le point moyen d’un nuage de points a pour coordonnées…',
                    options: [
                        '(x̄, ȳ), les moyennes des deux séries',
                        'Le point le plus fréquent',
                        'L’origine du repère',
                        'Le premier point du tableau'
                    ],
                    correct: 0,
                    correction: 'G(x̄, ȳ) est calculé à partir des moyennes de chaque variable.'
                },
                {
                    question: 'Un coefficient de corrélation proche de 0 signifie…',
                    options: [
                        'Pas de lien linéaire entre les deux variables',
                        'Une corrélation parfaite',
                        'Une relation de cause à effet certaine',
                        'Une erreur de calcul'
                    ],
                    correct: 0,
                    correction: 'Plus le coefficient est proche de 0, plus le nuage est dispersé sans tendance linéaire claire.'
                }
            ]
        },

        // =====================================================
        // 5e — FONCTIONS TRIGONOMÉTRIQUES
        // =====================================================

        {
            id: '5e_fonctions_trigo',
            titre: '6. Fonctions trigonométriques',
            desc: 'UAA5 — Sinus, cosinus et tangente comme fonctions',
            niveau: '5e',
            icone: '〜',
            color: '#805ad5',

            cours: `
                <h4>🔹 Du triangle au réel</h4>
                <p>En 4e, sin/cos/tan étaient définis pour des angles. En 5e, on les voit comme des <b>fonctions réelles</b>.</p>

                <h4>🔹 Conversion degrés ↔ radians</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>π rad = 180°</b> donc <b>θ rad = θ° × π/180</b>
                </div>

                <h4>🔹 La sinusoïde</h4>
                <p>Pour f(x) = A·sin(ωx + φ) + D :</p>
                <ul>
                    <li><b>|A|</b> est l'<b>amplitude</b></li>
                    <li><b>2π/|ω|</b> est la <b>période</b></li>
                    <li><b>D</b> est la translation verticale</li>
                    <li><b>φ</b> est le déphasage</li>
                </ul>

                <h4>🔹 Équations trigonométriques</h4>
                <p>Pour sin x = a et cos x = a, utiliser les angles de référence et toutes les solutions sur l'intervalle demandé.</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Vérifier degrés/radians.</li>
                    <li>Lire amplitude et période séparément.</li>
                    <li>Ramener à un angle de référence.</li>
                    <li>Donner toutes les solutions demandées.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Mélanger degrés et radians.</li>
                        <li>⚠️ Oublier la période.</li>
                        <li>⚠️ Donner une seule solution.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je convertis les angles</li>
                        <li>☐ Je lis amplitude/période</li>
                        <li>☐ Je comprends le déphasage</li>
                        <li>☐ Je résous une équation trigonométrique</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Convertir des degrés en radians et réciproquement',
                'Reconnaître amplitude, période et déphasage',
                'Résoudre une équation trigonométrique simple'
            ],

            matieres: [
                'Radian, fonctions sin/cos/tan sur ℝ',
                'Amplitude, période, déphasage',
                'Équations trigonométriques'
            ],

            exercices: [
                {
                    question: 'Combien de radians correspondent à 180° ?',
                    options: [
                        'π',
                        '2π',
                        'π/2',
                        '360'
                    ],
                    correct: 0,
                    correction: 'π radians équivalent à 180°.'
                },
                {
                    question: 'Quelle est la période de la fonction sinus ?',
                    options: [
                        '2π',
                        'π',
                        'π/2',
                        '1'
                    ],
                    correct: 0,
                    correction: 'sin(x) reprend les mêmes valeurs toutes les 2π unités.'
                },
                {
                    question: 'Dans f(x) = 3·sin(2x), quelle est l’amplitude ?',
                    options: [
                        '3',
                        '2',
                        '6',
                        '1'
                    ],
                    correct: 0,
                    correction: 'Dans A·sin(ωx), A est l’amplitude : ici A = 3.'
                }
            ]
        }

    ],


    // =====================================================
    // 6e
    // =====================================================

    '6e': [

        // =====================================================
        // 6e — DÉRIVÉES
        // =====================================================

        {
            id: '6e_derivees',
            titre: '1. Dérivées et étude de fonctions',
            desc: 'UAA1 — Règles de dérivation, croissance et extrema',
            niveau: '6e',
            icone: '📐',
            color: '#e53e3e',

            cours: `
                <h4>🔹 Règles de dérivation</h4>
                <ul>
                    <li><b>(u + v)' = u' + v'</b></li>
                    <li><b>(u × v)' = u'v + uv'</b> (règle du produit)</li>
                    <li><b>(u / v)' = (u'v - uv')/v²</b> (règle du quotient, v≠0)</li>
                </ul>

                <h4>🔹 Signe de la dérivée</h4>
                <ul>
                    <li>Si <b>f'(x) > 0</b>, f est <b>croissante</b>.</li>
                    <li>Si <b>f'(x) < 0</b>, f est <b>décroissante</b>.</li>
                    <li>Si <b>f'(x) = 0</b>, point critique (extremum possible).</li>
                </ul>

                <h4>🔹 Tableau de variation</h4>
                <p>Il résume le signe de f' et le sens de variation de f.</p>

                <h4>🔹 Extrema locaux</h4>
                <p>Un point où f'=0 est critique, mais il faut étudier le signe de f' pour conclure à un maximum/minimum.</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Déterminer le domaine.</li>
                    <li>Calculer f'(x).</li>
                    <li>Résoudre f'(x) = 0.</li>
                    <li>Faire le tableau de signes de f'.</li>
                    <li>Conclure sur variations et extrema.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier le domaine de définition.</li>
                        <li>⚠️ Confondre extrema et point d'inflexion.</li>
                        <li>⚠️ Erreur dans la règle du quotient (v² au dénominateur).</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je dérive un produit</li>
                        <li>☐ Je dérive un quotient</li>
                        <li>☐ Je construis un tableau de variation</li>
                        <li>☐ Je reconnais un extremum</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Appliquer les règles de dérivation',
                'Étudier le signe d’une dérivée',
                'Construire un tableau de variation et trouver les extrema'
            ],

            matieres: [
                'Dérivée d’un produit, d’un quotient',
                'Tableau de variation',
                'Extrema locaux'
            ],

            exercices: [
                {
                    question: 'Si f’(x) > 0 sur un intervalle, alors f est...',
                    options: [
                        'Croissante',
                        'Décroissante',
                        'Constante',
                        'Négative'
                    ],
                    correct: 0,
                    correction: 'Une dérivée positive signale une fonction croissante.'
                },
                {
                    question: 'Quelle est la dérivée de u×v ?',
                    options: [
                        "u'v + uv'",
                        "u'v'",
                        "u'v - uv'",
                        "(u'v)/(uv')"
                    ],
                    correct: 0,
                    correction: "Règle du produit : (uv)' = u'v + uv'"
                }
            ]
        },

        // =====================================================
        // 6e — INTÉGRALES
        // =====================================================

        {
            id: '6e_integrales',
            titre: '2. Intégrales',
            desc: "UAA2 — Primitives, calcul d'aires et intégrale définie",
            niveau: '6e',
            icone: '∫',
            color: '#805ad5',

            cours: `
                <h4>🔹 La primitive</h4>
                <p>F est une primitive de f si <b>F' = f</b>. C'est l'opération inverse de la dérivation.</p>

                <h4>🔹 Primitives usuelles</h4>
                <ul>
                    <li><b>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C</b> (pour n ≠ -1)</li>
                    <li><b>∫ k dx = kx + C</b></li>
                    <li><b>∫ 1/x dx = ln|x| + C</b></li>
                </ul>

                <h4>🔹 L'intégrale définie</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>∫ₐᵇ f(x) dx = F(b) - F(a)</b>
                </div>

                <h4>🔹 Calcul d'aires</h4>
                <p>Si f ≥ 0, l'intégrale donne l'aire sous la courbe. Si f change de signe, l'intégrale est algébrique et l'aire géométrique demande de séparer les zones.</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Trouver une primitive F.</li>
                    <li>Appliquer les bornes.</li>
                    <li>Calculer F(b) - F(a).</li>
                    <li>Vérifier le signe.</li>
                    <li>Séparer les intervalles si la courbe traverse l'axe.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier +C pour une primitive.</li>
                        <li>⚠️ Inverser les bornes.</li>
                        <li>⚠️ Confondre aire géométrique et intégrale algébrique.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je connais les primitives usuelles</li>
                        <li>☐ Je calcule une intégrale définie</li>
                        <li>☐ Je calcule une aire sous la courbe</li>
                        <li>☐ Je gère un changement de signe</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Calculer une primitive simple',
                'Calculer une intégrale définie',
                'Interpréter l’intégrale comme une aire'
            ],

            matieres: [
                'Primitives usuelles',
                'Intégrale définie',
                'Calcul d’aires'
            ],

            exercices: [
                {
                    question: 'Quelle est une primitive de f(x) = x ?',
                    options: [
                        'x²/2',
                        'x²',
                        '2x',
                        '1'
                    ],
                    correct: 0,
                    correction: "∫x dx = x²/2 + C"
                },
                {
                    question: '∫ₐᵇ f(x) dx représente géométriquement...',
                    options: [
                        "L'aire entre la courbe et l'axe des x",
                        'La pente de la tangente',
                        'Le zéro de f',
                        'La moyenne de f'
                    ],
                    correct: 0,
                    correction: "C'est l'aire algébrique sous la courbe entre a et b."
                }
            ]
        },

        // =====================================================
        // 6e — PROBABILITÉS
        // =====================================================

        {
            id: '6e_probabilites',
            titre: '3. Probabilités',
            desc: 'UAA3 — Probabilités conditionnelles et lois de probabilité',
            niveau: '6e',
            icone: '🎲',
            color: '#d69e2e',

            cours: `
                <h4>🔹 Probabilité conditionnelle</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>P(A|B) = P(A ∩ B) / P(B)</b> avec P(B) > 0
                </div>

                <h4>🔹 Événements indépendants</h4>
                <p>A et B sont indépendants si <b>P(A ∩ B) = P(A) × P(B)</b>.</p>

                <h4>🔹 Loi binomiale</h4>
                <p>Pour n épreuves indépendantes de probabilité de succès p :</p>
                <div class="formule" style="text-align:center;font-size:16px;">
                    <b>P(X = k) = C(n,k) × pᵏ × (1-p)ⁿ⁻ᵏ</b>
                </div>
                <p><b>E(X) = np</b> (espérance de la loi binomiale)</p>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Dessiner un arbre de probabilité.</li>
                    <li>Multiplier le long d'un chemin.</li>
                    <li>Additionner les chemins disjoints.</li>
                    <li>Identifier n, p, k avant la binomiale.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier que P(B) > 0 pour la conditionnelle.</li>
                        <li>⚠️ Confondre indépendant et incompatible.</li>
                        <li>⚠️ Oublier le coefficient C(n,k) dans la binomiale.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je calcule une probabilité conditionnelle</li>
                        <li>☐ Je teste l'indépendance</li>
                        <li>☐ Je lis un arbre de probabilité</li>
                        <li>☐ Je calcule une probabilité binomiale</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Calculer une probabilité conditionnelle',
                'Vérifier l’indépendance de deux événements',
                'Reconnaître une situation binomiale'
            ],

            matieres: [
                'Probabilité conditionnelle',
                'Indépendance',
                'Loi binomiale'
            ],

            exercices: [
                {
                    question: 'Deux événements A et B sont indépendants si...',
                    options: [
                        'P(A ∩ B) = P(A) × P(B)',
                        'P(A ∩ B) = P(A) + P(B)',
                        'P(A|B) = 1',
                        'P(A) = P(B)'
                    ],
                    correct: 0,
                    correction: "C'est la définition de l'indépendance."
                }
            ]
        },

        // =====================================================
        // 6e — SUITES
        // =====================================================

        {
            id: '6e_suites',
            titre: '4. Suites numériques',
            desc: 'UAA4 — Suites arithmétiques et géométriques',
            niveau: '6e',
            icone: '🔢',
            color: '#0e7c86',

            cours: `
                <h4>🔹 Suite arithmétique</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>u<sub>n+1</sub> = u<sub>n</sub> + r</b>
                </div>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>u<sub>n</sub> = u<sub>0</sub> + n·r</b>
                </div>
                <p>Somme : <b>S<sub>n</sub> = (n+1) × (u<sub>0</sub> + u<sub>n</sub>)/2</b></p>

                <h4>🔹 Suite géométrique</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>u<sub>n+1</sub> = q·u<sub>n</sub></b>
                </div>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>u<sub>n</sub> = u<sub>0</sub> × qⁿ</b>
                </div>

                <h4>🔹 Limite d'une suite géométrique</h4>
                <ul>
                    <li>Si <b>|q| < 1</b>, alors u<sub>n</sub> → 0.</li>
                    <li>Si <b>q > 1</b> et u<sub>0</sub> > 0, alors u<sub>n</sub> → +∞.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Calculer la différence ou le quotient de termes consécutifs.</li>
                    <li>Identifier r ou q.</li>
                    <li>Faire attention à l'indice de départ.</li>
                    <li>Pour une limite, étudier |q|.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Mauvais indice (u₀ vs u₁).</li>
                        <li>⚠️ Confondre arithmétique et géométrique.</li>
                        <li>⚠️ Oublier la condition |q| < 1 pour la convergence.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je reconnais une suite</li>
                        <li>☐ Je calcule un terme</li>
                        <li>☐ Je calcule une somme</li>
                        <li>☐ J'étudie une limite</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Reconnaître une suite arithmétique ou géométrique',
                'Calculer le terme général',
                'Étudier la limite d’une suite géométrique'
            ],

            matieres: [
                'Suite arithmétique',
                'Suite géométrique',
                'Limites de suites'
            ],

            exercices: [
                {
                    question: 'Dans une suite arithmétique de raison r, on a...',
                    options: [
                        'u_(n+1) = u_n + r',
                        'u_(n+1) = u_n × r',
                        'u_(n+1) = u_n - r²',
                        'u_(n+1) = r/u_n'
                    ],
                    correct: 0,
                    correction: 'On ajoute la raison r à chaque étape.'
                },
                {
                    question: 'Une suite géométrique de raison q = 0.5 tend vers...',
                    options: [
                        '0',
                        '+∞',
                        '1',
                        '-∞'
                    ],
                    correct: 0,
                    correction: '|q| < 1 donc la suite tend vers 0.'
                }
            ]
        },

        // =====================================================
        // 6e — LOIS DE PROBABILITÉS
        // =====================================================

        {
            id: '6e_lois_proba',
            titre: '5. Lois de probabilités',
            desc: 'UAA2 — Lois binomiale et normale',
            niveau: '6e',
            icone: '🎲',
            color: '#e53e3e',

            cours: `
                <h4>🔹 Variable aléatoire</h4>
                <p>Une <b>variable aléatoire</b> associe un nombre à chaque résultat possible.</p>

                <h4>🔹 Espérance</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>E(X) = Σ x<sub>i</sub> × P(X = x<sub>i</sub>)</b>
                </div>
                <p>C'est la moyenne théorique.</p>

                <h4>🔹 Variance et écart-type</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>V(X) = E(X²) - E(X)²</b>
                </div>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>σ = √V</b>
                </div>

                <h4>🔹 La loi normale</h4>
                <p>C'est la courbe en cloche centrée sur µ.</p>
                <ul>
                    <li>≈ <b>68%</b> dans µ ± σ</li>
                    <li>≈ <b>95%</b> dans µ ± 2σ</li>
                    <li>≈ <b>99.7%</b> dans µ ± 3σ</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Vérifier ΣP = 1.</li>
                    <li>Calculer E(X).</li>
                    <li>Calculer E(X²) si besoin.</li>
                    <li>Pour une normale, identifier µ et σ avant d'interpréter.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier que ΣP = 1.</li>
                        <li>⚠️ Confondre variance et écart-type.</li>
                        <li>⚠️ Appliquer la règle des 68-95-99.7 à des lois non normales.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je construis une loi de probabilité</li>
                        <li>☐ Je calcule E(X)</li>
                        <li>☐ Je calcule V et σ</li>
                        <li>☐ Je comprends la loi normale</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Reconnaître une situation modélisée par une loi binomiale ou normale',
                'Calculer une espérance mathématique et un écart-type',
                'Utiliser une table ou un outil informatique pour une loi normale'
            ],

            matieres: [
                'Variable aléatoire, espérance, écart-type',
                'Loi binomiale',
                'Loi normale'
            ],

            exercices: [
                {
                    question: 'La loi binomiale modélise…',
                    options: [
                        'Le nombre de succès dans des épreuves indépendantes à deux issues',
                        'Une mesure continue quelconque',
                        'Le hasard pur sans probabilité',
                        'Uniquement les jeux de cartes'
                    ],
                    correct: 0,
                    correction: 'C’est le modèle du schéma de Bernoulli répété n fois.'
                },
                {
                    question: 'La courbe de la loi normale est…',
                    options: [
                        'Symétrique en forme de cloche',
                        'Toujours croissante',
                        'Une droite',
                        'Toujours nulle'
                    ],
                    correct: 0,
                    correction: 'La loi normale a une courbe en cloche symétrique autour de la moyenne.'
                }
            ]
        },

        // =====================================================
        // 6e — EXPONENTIELLES ET LOGARITHMES
        // =====================================================

        {
            id: '6e_exp_log',
            titre: '6. Fonctions exponentielles et logarithmes',
            desc: 'UAA4 — Croissance exponentielle et logarithmique',
            niveau: '6e',
            icone: '📈',
            color: '#d69e2e',

            cours: `
                <h4>🔹 La fonction exponentielle</h4>
                <ul>
                    <li><b>e⁰ = 1</b></li>
                    <li><b>e^(a+b) = e^a × e^b</b></li>
                    <li><b>e^(-x) = 1/e^x</b></li>
                    <li><b>(e^x)' = e^x</b></li>
                </ul>

                <h4>🔹 La fonction logarithme népérien</h4>
                <ul>
                    <li><b>ln(1) = 0</b></li>
                    <li><b>ln(a×b) = ln(a) + ln(b)</b></li>
                    <li><b>ln(a/b) = ln(a) - ln(b)</b></li>
                    <li><b>(ln x)' = 1/x</b> (pour x > 0)</li>
                </ul>

                <h4>🔹 Réciprocité</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>ln(e^x) = x</b> et <b>e^(ln x) = x</b> (pour x > 0)
                </div>

                <h4>🔹 Équations</h4>
                <ul>
                    <li>e^u = e^v ⇒ u = v</li>
                    <li>ln u = ln v ⇒ u = v (si u,v > 0)</li>
                    <li>Pour e^u = k, k doit être positif.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Vérifier le domaine de ln (x > 0).</li>
                    <li>Prendre ln des deux côtés d'une équation exponentielle.</li>
                    <li>Ne jamais écrire ln(a+b) = ln a + ln b.</li>
                    <li>Vérifier les solutions.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier le domaine de ln (x > 0).</li>
                        <li>⚠️ Confondre ln(a+b) et ln(a) + ln(b).</li>
                        <li>⚠️ Oublier les valeurs absolues pour ln(a/b).</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je connais les propriétés de e</li>
                        <li>☐ Je connais celles de ln</li>
                        <li>☐ Je résous une équation exponentielle ou logarithmique</li>
                        <li>☐ Je vérifie le domaine</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Utiliser les propriétés des exponentielles et des logarithmes',
                'Résoudre une équation exponentielle ou logarithmique simple',
                'Comparer les croissances des fonctions'
            ],

            matieres: [
                'Fonction exponentielle et logarithme',
                'Réciprocité eˣ / ln(x)',
                'Équations exponentielles et logarithmiques'
            ],

            exercices: [
                {
                    question: 'Que vaut ln(eˣ) ?',
                    options: [
                        'x',
                        'eˣ',
                        '1',
                        '0'
                    ],
                    correct: 0,
                    correction: 'ln et exp sont des fonctions réciproques : ln(eˣ) = x.'
                },
                {
                    question: 'Résoudre eˣ = 5',
                    options: [
                        'x = ln(5)',
                        'x = 5',
                        'x = e⁵',
                        'x = 1/5'
                    ],
                    correct: 0,
                    correction: 'On applique le logarithme des deux côtés : x = ln(5).'
                }
            ]
        },

        // =====================================================
        // 6e — GÉOMÉTRIE ANALYTIQUE DE L'ESPACE
        // =====================================================

        {
            id: '6e_geo_analytique_espace',
            titre: '7. Géométrie analytique de l’espace',
            desc: 'UAA5 — Droites et plans dans un repère 3D',
            niveau: '6e',
            icone: '🧊',
            color: '#38a169',

            cours: `
                <h4>🔹 Se repérer dans l’espace</h4>
                <p>Un point de l’espace a <b>trois coordonnées (x, y, z)</b>.</p>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>A(x, y, z)</b>
                </div>

                <h4>🔹 Distance dans l’espace</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>AB = √[(x<sub>B</sub>-x<sub>A</sub>)² + (y<sub>B</sub>-y<sub>A</sub>)² + (z<sub>B</sub>-z<sub>A</sub>)²]</b>
                </div>

                <h4>🔹 Équation d’un plan</h4>
                <div class="formule" style="text-align:center;font-size:17px;">
                    <b>ax + by + cz + d = 0</b>
                </div>
                <p>Le vecteur <b>n = (a, b, c)</b> est un <b>vecteur normal</b> au plan.</p>

                <h4>🔹 Positions relatives</h4>
                <ul>
                    <li>Une droite peut être <b>contenue</b>, <b>parallèle</b> ou <b>sécante</b> à un plan.</li>
                    <li>Deux droites peuvent être <b>sécantes</b>, <b>parallèles</b> ou <b>gauches</b>.</li>
                </ul>

                <h4>🔹 Méthode pas à pas</h4>
                <ol>
                    <li>Calculer un vecteur directeur.</li>
                    <li>Tester l'appartenance par substitution.</li>
                    <li>Utiliser le vecteur normal pour les perpendicularités.</li>
                    <li>Ne pas confondre vecteur directeur et vecteur normal.</li>
                </ol>
                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Confondre vecteur directeur et vecteur normal.</li>
                        <li>⚠️ Oublier la 3e coordonnée dans les calculs.</li>
                        <li>⚠️ Confondre position dans l'espace et position dans le plan.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je calcule une distance 3D</li>
                        <li>☐ Je teste si un point appartient à un plan</li>
                        <li>☐ Je lis un vecteur normal</li>
                        <li>☐ Je raisonne sur les positions relatives</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Déterminer les équations d’une droite ou d’un plan dans l’espace',
                'Reconnaître les positions relatives de droites et de plans',
                'Calculer une distance entre deux points de l’espace'
            ],

            matieres: [
                'Repère et vecteurs de l’espace',
                'Équations de droites et de plans',
                'Positions relatives, distances'
            ],

            exercices: [
                {
                    question: 'Combien de coordonnées a un point dans l’espace ?',
                    options: [
                        '3',
                        '2',
                        '4',
                        '1'
                    ],
                    correct: 0,
                    correction: 'Dans l’espace, un point a trois coordonnées (x, y, z).'
                },
                {
                    question: 'Une équation cartésienne de plan a la forme…',
                    options: [
                        'ax + by + cz + d = 0',
                        'ax + b = 0',
                        'y = mx + p',
                        'x² + y² = r²'
                    ],
                    correct: 0,
                    correction: 'C’est la forme générale de l’équation cartésienne d’un plan.'
                }
            ]
        }

    ],


    // =====================================================
    // TRANSVERSAL
    // =====================================================

    'transversal': [

        // =====================================================
        // MÉTHODE DE RÉSOLUTION
        // =====================================================

        {
            id: 'trans_methode',
            titre: 'Méthode de résolution CESS',
            desc: 'Apprendre à structurer sa réponse pour maximiser les points',
            niveau: 'Transversal',
            icone: '📝',
            color: '#6b46c1',

            cours: `
                <h4>🔹 Étape 1 : Comprendre</h4>
                <p>Souligner <b>données</b>, <b>inconnue</b>, <b>unités</b> et <b>conditions</b>.</p>

                <h4>🔹 Étape 2 : Modéliser</h4>
                <p>Faire un <b>schéma</b>, <b>tableau</b>, <b>arbre</b> ou <b>graphique</b> selon le problème.</p>

                <h4>🔹 Étape 3 : Choisir</h4>
                <p>Identifier le <b>théorème</b> ou <b>outil adapté</b> avant de calculer.</p>

                <h4>🔹 Étape 4 : Calculer</h4>
                <p>Écrire la <b>formule</b>, <b>remplacer</b>, <b>calculer</b> puis <b>arrondir à la fin</b>.</p>

                <h4>🔹 Étape 5 : Conclure</h4>
                <p>Répondre avec <b>unité</b> et <b>phrase complète</b> ; vérifier la cohérence.</p>

                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Donner uniquement la réponse.</li>
                        <li>⚠️ Oublier une unité.</li>
                        <li>⚠️ Arrondir trop tôt.</li>
                        <li>⚠️ Ne pas vérifier le domaine ou la faisabilité.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je sais identifier l'outil adapté</li>
                        <li>☐ Je sais rédiger une formule</li>
                        <li>☐ Je sais conclure avec une phrase</li>
                        <li>☐ Je sais vérifier un résultat</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Structurer une réponse en 5 étapes',
                'Identifier l\'outil mathématique adapté',
                'Vérifier la cohérence du résultat'
            ],

            matieres: [
                'Analyse de l\'énoncé',
                'Choix du théorème',
                'Rédaction d\'une conclusion'
            ],

            exercices: [
                {
                    question: 'Un résultat de longueur vaut -4 cm. Que faire ?',
                    options: ['Rechercher l\'erreur', 'Accepter le résultat', 'Arrondir', 'Ignorer'],
                    correct: 0,
                    correction: 'Une longueur ne peut pas être négative : il faut rechercher l\'erreur de modèle ou de calcul.'
                },
                {
                    question: 'Une probabilité calculée vaut 1,3. Que faire ?',
                    options: ['Corriger le calcul', 'Accepter', 'Multiplier par 2', 'Ignorer'],
                    correct: 0,
                    correction: 'Une probabilité appartient à [0,1]. Il faut corriger le calcul.'
                }
            ]
        },

        // =====================================================
        // PIÈGES FRÉQUENTS
        // =====================================================

        {
            id: 'trans_pieges',
            titre: 'Pièges fréquents au CESS',
            desc: 'Signes, domaines, unités et calculatrice',
            niveau: 'Transversal',
            icone: '⚠️',
            color: '#e53e3e',

            cours: `
                <h4>🔹 Signes</h4>
                <p>Un seul signe faux peut contaminer tout le calcul. Entourer les valeurs négatives dans les expressions complexes.</p>

                <h4>🔹 Domaines</h4>
                <ul>
                    <li>Pour une fraction : <b>dénominateur ≠ 0</b></li>
                    <li>Pour ln(x) : <b>x > 0</b></li>
                    <li>Pour une racine réelle : <b>radicande ≥ 0</b></li>
                    <li>Pour une probabilité : <b>0 ≤ P ≤ 1</b></li>
                </ul>

                <h4>🔹 Unités</h4>
                <p>Une longueur, une aire et un volume ne s'expriment pas dans les mêmes unités.</p>

                <h4>🔹 Calculatrice</h4>
                <p>Vérifier <b>degrés/radians</b>, <b>parenthèses</b>, <b>notation scientifique</b> et <b>mode d'arrondi</b>.</p>

                <div class="astuce">💡 Réflexe examen : écris toujours la relation avant de remplacer par les nombres.</div>

                <h4>🔹 Pièges classiques</h4>
                <div class="piege">
                    <ul>
                        <li>⚠️ Oublier les restrictions de domaine.</li>
                        <li>⚠️ Mélanger degrés et radians.</li>
                        <li>⚠️ Confondre aire et longueur.</li>
                        <li>⚠️ Oublier les parenthèses à la calculatrice.</li>
                    </ul>
                </div>

                <h4>🔹 Check-list</h4>
                <div class="checklist">
                    <ul>
                        <li>☐ Je vérifie le domaine de définition</li>
                        <li>☐ Je vérifie les unités</li>
                        <li>☐ Je vérifie la calculatrice (degrés/radians)</li>
                        <li>☐ Je vérifie l'ordre de grandeur du résultat</li>
                    </ul>
                </div>
            `,

            objectifs: [
                'Identifier les pièges fréquents',
                'Vérifier les domaines de définition',
                'Maîtriser l\'utilisation de la calculatrice'
            ],

            matieres: [
                'Gestion des signes',
                'Domaines de définition',
                'Conversions d\'unités',
                'Mode degrés/radians'
            ],

            exercices: [
                {
                    question: 'ln(x-2) : quelle est la condition ?',
                    options: ['x > 2', 'x ≥ 2', 'x ≠ 2', 'x < 2'],
                    correct: 0,
                    correction: 'ln(x-2) est défini si x-2 > 0, donc x > 2.'
                },
                {
                    question: '1/(x-3) : quelle est la condition ?',
                    options: ['x ≠ 3', 'x ≥ 3', 'x > 3', 'x < 3'],
                    correct: 0,
                    correction: 'Le dénominateur ne peut pas être nul, donc x ≠ 3.'
                },
                {
                    question: '√(5-2x) : quelle est la condition ?',
                    options: ['x ≤ 2.5', 'x ≥ 2.5', 'x > 2.5', 'x < 2.5'],
                    correct: 0,
                    correction: '5-2x ≥ 0 → -2x ≥ -5 → x ≤ 2.5'
                }
            ]
        }

    ]

};


// =========================================================
// FORMULES — COMPLÈTES
// =========================================================

var FORMULES_DATA = {

    algebre: [
        { id: 'alg_1', annee: '3e', titre: 'Carré somme', definition: '(a+b)² = a² + 2ab + b²', exemple: '(x+3)² = x² + 6x + 9', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_2', annee: '3e', titre: 'Carré différence', definition: '(a-b)² = a² - 2ab + b²', exemple: '(x-3)² = x² - 6x + 9', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_3', annee: '3e', titre: 'Différence de carrés', definition: 'a² - b² = (a-b)(a+b)', exemple: 'x² - 9 = (x-3)(x+3)', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_4', annee: '3e', titre: 'Produit nul', definition: 'AB = 0 ⇔ A = 0 ou B = 0', exemple: '(x-3)(x+3)=0 → x=3 ou x=-3', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_5', annee: '4e', titre: 'Discriminant', definition: 'Δ = b² - 4ac', exemple: 'Pour x² + 2x - 3, Δ = 16', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_6', annee: '4e', titre: 'Racines du 2nd degré', definition: 'x = (-b ± √Δ)/2a', exemple: 'x = (-2 ± 4)/2 → 1 ou -3', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_7', annee: '4e', titre: 'Somme et produit des racines', definition: 'S = x₁+x₂ = -b/a ; P = x₁×x₂ = c/a', exemple: 'x²-5x+6=0 : S=5, P=6', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_8', annee: '4e', titre: 'Forme canonique', definition: 'f(x) = a(x-h)² + k', exemple: 'Sommet S(h,k)', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_9', annee: '4e', titre: 'Sommet d\'une parabole', definition: 'x<sub>S</sub> = -b/(2a)', exemple: 'Pour f(x)=2x²-8x+3, x<sub>S</sub>=2', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_10', annee: '6e', titre: 'Dérivée — Produit', definition: "(uv)' = u'v + uv'", exemple: "(x²·x)' = 3x²", icone: '📐', categorie: 'Analyse' },
        { id: 'alg_11', annee: '6e', titre: 'Dérivée — Quotient', definition: "(u/v)' = (u'v - uv')/v²", exemple: 'Utile pour les fonctions rationnelles', icone: '📐', categorie: 'Analyse' }
    ],

    geometrie: [
        { id: 'geo_1', annee: '3e', titre: 'Théorème de Pythagore', definition: 'a² + b² = c² (triangle rectangle)', exemple: '3² + 4² = 5²', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_2', annee: '3e', titre: 'Diagonale d\'un carré', definition: 'd = a√2', exemple: 'Carré de côté 1 → diagonale √2', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_3', annee: '3e', titre: 'Théorème de Thalès', definition: 'AB/AC = AD/AE = BD/CE (si BD // CE)', exemple: 'Calculer une longueur inconnue', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_4', annee: '3e', titre: 'SOH — Sinus', definition: 'sin(α) = opposé / hypoténuse', exemple: 'sin(30°) = 0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'geo_5', annee: '3e', titre: 'CAH — Cosinus', definition: 'cos(α) = adjacent / hypoténuse', exemple: 'cos(60°) = 0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'geo_6', annee: '3e', titre: 'TOA — Tangente', definition: 'tan(α) = opposé / adjacent', exemple: 'tan(45°) = 1', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'geo_7', annee: '4e', titre: 'Relation fondamentale', definition: 'sin²(α) + cos²(α) = 1', exemple: 'Vraie pour tout angle α', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'geo_8', annee: '4e', titre: 'Théorème d\'Al-Kashi', definition: 'a² = b² + c² - 2bc·cos(A)', exemple: 'Généralise Pythagore', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_9', annee: '4e', titre: 'Relation des sinus', definition: 'a/sin(A) = b/sin(B) = c/sin(C)', exemple: 'Utile pour un triangle sans angle droit', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_10', annee: '4e', titre: 'Aire d\'un triangle', definition: 'Aire = (1/2) × a × b × sin(C)', exemple: 'a=5, b=6, C=90° → Aire = 15', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_11', annee: '5e', titre: 'Distance entre deux points', definition: 'd = √[(x₂-x₁)² + (y₂-y₁)²]', exemple: 'A(0,0), B(3,4) → d = 5', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_12', annee: '5e', titre: 'Équation du cercle', definition: '(x-a)² + (y-b)² = r²', exemple: 'Centre (0,0), rayon 3 → x²+y²=9', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_13', annee: '5e', titre: 'Équation d\'une droite', definition: 'y = mx + p, m = (y₂-y₁)/(x₂-x₁)', exemple: 'A(0,1), B(2,5) → m=2, y=2x+1', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_14', annee: '5e', titre: 'Radian ↔ degré', definition: 'π rad = 180°', exemple: 'π/2 rad = 90°', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'geo_15', annee: '5e', titre: 'Amplitude et période', definition: 'f(x)=A·sin(ωx) : amplitude=|A|, période=2π/ω', exemple: 'f(x)=3·sin(2x) → amplitude 3, période π', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'geo_16', annee: '6e', titre: 'Distance dans l\'espace 3D', definition: 'd = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]', exemple: 'Pythagore en 3D', icone: '🧊', categorie: 'Géométrie de l\'espace' },
        { id: 'geo_17', annee: '6e', titre: 'Équation cartésienne d\'un plan', definition: 'ax + by + cz + d = 0', exemple: 'Vecteur normal n=(a,b,c)', icone: '🧊', categorie: 'Géométrie de l\'espace' }
    ],

    analyse: [
        { id: 'ana_1', annee: '5e', titre: 'Dérivée d\'une puissance', definition: "(xⁿ)' = n·xⁿ⁻¹", exemple: "(x³)' = 3x²", icone: '📈', categorie: 'Analyse' },
        { id: 'ana_2', annee: '5e', titre: 'Nombre dérivé', definition: "f'(a) = lim (f(a+h)-f(a))/h", exemple: 'Pente de la tangente', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_3', annee: '5e', titre: 'Équation de la tangente', definition: "y = f'(a)(x-a) + f(a)", exemple: 'Tangente au point a', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_4', annee: '5e', titre: 'Taux de variation moyen', definition: "τ = [f(b)-f(a)]/(b-a)", exemple: 'Pente de la sécante', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_5', annee: '6e', titre: 'Primitive d\'une puissance', definition: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C', exemple: '∫x dx = x²/2 + C', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_6', annee: '6e', titre: 'Intégrale définie', definition: '∫ₐᵇ f(x)dx = F(b) - F(a)', exemple: 'Aire sous la courbe', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_7', annee: '6e', titre: 'Exponentielle — dérivée', definition: "(e^x)' = e^x", exemple: 'Sa dérivée est elle-même', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_8', annee: '6e', titre: 'Logarithme — dérivée', definition: "(ln x)' = 1/x", exemple: 'Pour x > 0', icone: '📈', categorie: 'Analyse' }
    ],

    vecteurs: [
        { id: 'vec_1', annee: '4e', titre: 'Produit scalaire', definition: 'u·v = ||u|| × ||v|| × cos(α)', exemple: 'Orthogonaux → u·v = 0', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_2', annee: '4e', titre: 'Relation de Chasles', definition: 'AB + BC = AC', exemple: 'Décomposer un vecteur', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_3', annee: '4e', titre: 'Norme d\'un vecteur', definition: '||u|| = √(x² + y²)', exemple: '||(3,4)|| = 5', icone: '➡️', categorie: 'Vecteurs' }
    ],

    statistiques: [
        { id: 'stat_1', annee: '4e', titre: 'Moyenne', definition: 'x̄ = Σxi / n', exemple: '(4+6+8)/3 = 6', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_2', annee: '4e', titre: 'Médiane', definition: 'Valeur centrale après classement', exemple: '3,5,7,9,11 → médiane 7', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_3', annee: '4e', titre: 'Variance', definition: 'V = Σ(xi - x̄)² / n', exemple: 'Moyenne des écarts au carré', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_4', annee: '4e', titre: 'Écart-type', definition: 'σ = √V', exemple: 'Mesure la dispersion', icone: '📊', categorie: 'Statistiques' }
    ],

    stat2var: [
        { id: 's2v_1', annee: '5e', titre: 'Point moyen', definition: 'G(x̄, ȳ)', exemple: 'La droite passe par G', icone: '📊', categorie: 'Statistique à 2 variables' },
        { id: 's2v_2', annee: '5e', titre: 'Coefficient de corrélation', definition: 'r ∈ [-1,1]', exemple: '|r| proche de 1 = alignés', icone: '📊', categorie: 'Statistique à 2 variables' }
    ],

    probabilites: [
        { id: 'proba_1', annee: '6e', titre: 'Probabilité conditionnelle', definition: 'P(A|B) = P(A∩B) / P(B)', exemple: 'Probabilité de A sachant B', icone: '🎲', categorie: 'Probabilités' },
        { id: 'proba_2', annee: '6e', titre: 'Indépendance', definition: 'P(A∩B) = P(A) × P(B)', exemple: 'Indépendants', icone: '🎲', categorie: 'Probabilités' },
        { id: 'proba_3', annee: '6e', titre: 'Espérance', definition: 'E(X) = Σ xi × P(X=xi)', exemple: 'Valeur moyenne théorique', icone: '🎲', categorie: 'Probabilités' },
        { id: 'proba_4', annee: '6e', titre: 'Loi binomiale', definition: 'P(X=k) = C(n,k) × pᵏ × (1-p)ⁿ⁻ᵏ', exemple: 'k succès sur n essais', icone: '🎲', categorie: 'Probabilités' },
        { id: 'proba_5', annee: '6e', titre: 'Espérance binomiale', definition: 'E(X) = n×p', exemple: 'Valeur moyenne attendue', icone: '🎲', categorie: 'Probabilités' }
    ],

    suites: [
        { id: 'suite_1', annee: '6e', titre: 'Arithmétique — terme', definition: 'uₙ = u₀ + n×r', exemple: 'u₀=2, r=3 → u₅=17', icone: '🔢', categorie: 'Suites' },
        { id: 'suite_2', annee: '6e', titre: 'Géométrique — terme', definition: 'uₙ = u₀ × qⁿ', exemple: 'u₀=1, q=2 → u₅=32', icone: '🔢', categorie: 'Suites' },
        { id: 'suite_3', annee: '6e', titre: 'Somme arithmétique', definition: 'Sₙ = n × (u₀+uₙ₋₁)/2', exemple: 'Somme des n premiers termes', icone: '🔢', categorie: 'Suites' },
        { id: 'suite_4', annee: '6e', titre: 'Somme géométrique', definition: 'Sₙ = u₀ × (1-qⁿ)/(1-q)', exemple: 'Pour q ≠ 1', icone: '🔢', categorie: 'Suites' }
    ],

    expoLog: [
        { id: 'explog_1', annee: '6e', titre: 'Exponentielle — produit', definition: 'eˣ⁺ʸ = eˣ × eʸ', exemple: 'e³ × e² = e⁵', icone: '📈', categorie: 'Exponentielles / Logarithmes' },
        { id: 'explog_2', annee: '6e', titre: 'Logarithme — produit', definition: 'ln(a×b) = ln(a) + ln(b)', exemple: 'ln(6) = ln(2)+ln(3)', icone: '📈', categorie: 'Exponentielles / Logarithmes' },
        { id: 'explog_3', annee: '6e', titre: 'Réciprocité exp/log', definition: 'ln(eˣ) = x et e^(ln x) = x', exemple: 'Résoudre les équations', icone: '📈', categorie: 'Exponentielles / Logarithmes' },
        { id: 'explog_4', annee: '6e', titre: 'Exponentielle — zéro', definition: 'e⁰ = 1', exemple: 'Toute exponentielle vaut 1 en 0', icone: '📈', categorie: 'Exponentielles / Logarithmes' },
        { id: 'explog_5', annee: '6e', titre: 'Logarithme — un', definition: 'ln(1) = 0', exemple: 'Le logarithme de 1 vaut 0', icone: '📈', categorie: 'Exponentielles / Logarithmes' }
    ],

    complexes: [
        { id: 'comp_1', annee: '5e', titre: 'Module', definition: '|z| = √(a² + b²)', exemple: '|3+4i| = 5', icone: 'ℂ', categorie: 'Nombres complexes' },
        { id: 'comp_2', annee: '5e', titre: 'Unité imaginaire', definition: 'i² = -1', exemple: 'Base des complexes', icone: 'ℂ', categorie: 'Nombres complexes' },
        { id: 'comp_3', annee: '5e', titre: 'Conjugué', definition: '\\bar{z} = a - bi', exemple: '\\overline{3+4i} = 3-4i', icone: 'ℂ', categorie: 'Nombres complexes' },
        { id: 'comp_4', annee: '5e', titre: 'Division', definition: 'Multiplier par le conjugué', exemple: '(1+i)/(2-i)', icone: 'ℂ', categorie: 'Nombres complexes' }
    ]

};


// =========================================================
// COULEURS
// =========================================================

var CAT_COLOR = {
    algebre: '--rouge',
    geometrie: '--bleu',
    trigonometrie: '--ambre',
    analyse: '--violet',
    vecteurs: '--teal',
    statistiques: '--ambre',
    complexes: '--vert'
};

var CAT_COLOR_LIGHT = {
    algebre: '--rouge-clair',
    geometrie: '--bleu-clair',
    trigonometrie: '--ambre-clair',
    analyse: '--violet-clair',
    vecteurs: '--teal-clair',
    statistiques: '--ambre-clair',
    complexes: '--vert-clair'
};

var ANNEE_COLOR = {
    '3e': { c: '#1c5fa8', l: '#e8f0fe' },
    '4e': { c: '#6b46c1', l: '#f1ebfb' },
    '5e': { c: '#0e7c86', l: '#e4f5f6' },
    '6e': { c: '#c81e2c', l: '#fdecea' }
};

var ANNEE_DESC = {
    '3e': 'Fonctions, Algèbre, Géométrie, Trigonométrie…',
    '4e': 'Fonctions de référence, 2nd degré, Vecteurs…',
    '5e': 'Analyse, Complexes, Géométrie analytique…',
    '6e': 'Dérivées, Intégrales, Probabilités, Suites…'
};
