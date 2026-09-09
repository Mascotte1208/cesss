// =========================================================
// MATHS DATA — CESS
// Version complète renforcée
// =========================================================
//
// Structure compatible avec app.js
// - CHAPITRES['3e']
// - CHAPITRES['4e']
// - CHAPITRES['5e']
// - CHAPITRES['6e']
// - FORMULES_DATA
// =========================================================


var CHAPITRES = {

    // =====================================================
    // 3e
    // =====================================================

    '3e': [

        // -------------------------------------------------
        // 1. FONCTIONS
        // -------------------------------------------------

        {
            id:'3e_fonctions',
            titre:"1. Fonctions : images, antécédents & graphiques",
            desc:'Comprendre une fonction, lire un graphique et déterminer images, antécédents et zéros.',
            niveau:'3e',
            icone:'📈',
            color:'#3182ce',

            cours:`
                <h4>📌 Qu'est-ce qu'une fonction ?</h4>

                <p>
                    Une fonction associe à un nombre x un nombre unique
                    appelé son <b>image</b>.
                </p>

                <p style="text-align:center;font-size:20px;">
                    <b>y = f(x)</b>
                </p>

                <h4>🧠 Vocabulaire</h4>

                <ul>
                    <li><b>x</b> est un antécédent.</li>
                    <li><b>f(x)</b> est l'image de x.</li>
                    <li><b>f(a)=b</b> signifie que b est l'image de a.</li>
                </ul>

                <h4>📊 Lire un graphique</h4>

                <p>
                    Pour trouver une <b>image</b>, on part de x sur l'axe
                    horizontal et on rejoint la courbe.
                </p>

                <p>
                    Pour trouver un <b>antécédent</b>, on part de la valeur
                    sur l'axe vertical et on rejoint la courbe.
                </p>

                <h4>🎯 Zéro d'une fonction</h4>

                <p>
                    Un zéro est une valeur x telle que :
                </p>

                <p style="text-align:center;font-size:20px;">
                    <b>f(x)=0</b>
                </p>

                <p>
                    Graphiquement, le zéro correspond à une intersection
                    avec l'axe des abscisses.
                </p>

                <h4>📈 Variations</h4>

                <p>
                    Une fonction est <b>croissante</b> lorsqu'elle monte
                    lorsqu'on se déplace vers la droite.
                    Elle est <b>décroissante</b> lorsqu'elle descend.
                </p>
            `,

            objectifs:[
                'Comprendre la notion de fonction',
                'Lire une image',
                'Lire un antécédent',
                'Déterminer un zéro',
                'Lire un graphique',
                'Étudier les variations'
            ],

            matieres:[
                'Fonction',
                'Image',
                'Antécédent',
                'Zéro',
                'Lecture graphique',
                'Variations'
            ],

            exercices:[
                {
                    question:"Que signifie f(2)=5 ?",
                    options:[
                        "L'image de 2 est 5",
                        "L'antécédent de 2 est 5",
                        "Le zéro est 5",
                        "La fonction est égale à 2"
                    ],
                    correct:0,
                    correction:"f(2)=5 signifie que l'image de 2 par f est 5."
                },
                {
                    question:"Un zéro d'une fonction vérifie...",
                    options:[
                        "f(x)=0",
                        "f(x)=1",
                        "x=0 toujours",
                        "f(x)=x"
                    ],
                    correct:0,
                    correction:"Un zéro est une valeur de x pour laquelle f(x)=0."
                },
                {
                    question:"Graphiquement, un zéro correspond à...",
                    options:[
                        "Une intersection avec l'axe des abscisses",
                        "Une intersection avec l'axe des ordonnées",
                        "Le sommet de la courbe",
                        "Le point le plus haut"
                    ],
                    correct:0,
                    correction:"Les zéros sont les abscisses des points où la courbe coupe l'axe des abscisses."
                },
                {
                    question:"Si f(−3)=7, quelle est l'image de −3 ?",
                    options:["7","−3","4","10"],
                    correct:0,
                    correction:"L'image de −3 est 7."
                },
                {
                    question:"Si f(4)=−2, quel est un antécédent de −2 ?",
                    options:["4","−2","2","6"],
                    correct:0,
                    correction:"4 est un antécédent de −2."
                }
            ]
        },


        // -------------------------------------------------
        // 2. ANGLES
        // -------------------------------------------------

        {
            id:'3e_angles',
            titre:'2. Angles & parallélisme',
            desc:'Maîtriser les angles, les droites parallèles et les propriétés angulaires.',
            niveau:'3e',
            icone:'📐',
            color:'#2563eb',

            cours:`
                <h4>📐 Types d'angles</h4>

                <ul>
                    <li>Angle aigu : inférieur à 90°</li>
                    <li>Angle droit : 90°</li>
                    <li>Angle obtus : entre 90° et 180°</li>
                    <li>Angle plat : 180°</li>
                </ul>

                <h4>🔢 Angles complémentaires</h4>

                <p>
                    Deux angles sont complémentaires lorsque leur somme
                    vaut <b>90°</b>.
                </p>

                <h4>🔢 Angles supplémentaires</h4>

                <p>
                    Deux angles sont supplémentaires lorsque leur somme
                    vaut <b>180°</b>.
                </p>

                <h4>🔄 Angles opposés par le sommet</h4>

                <p>
                    Deux angles opposés par le sommet ont la même amplitude.
                </p>

                <h4>∥ Droites parallèles</h4>

                <p>
                    Lorsque deux droites parallèles sont coupées par une
                    sécante, on peut utiliser les propriétés des angles
                    correspondants et alternes-internes.
                </p>
            `,

            objectifs:[
                'Reconnaître les types d’angles',
                'Utiliser les angles complémentaires',
                'Utiliser les angles supplémentaires',
                'Reconnaître des angles opposés par le sommet',
                'Utiliser le parallélisme'
            ],

            matieres:[
                'Angles',
                'Angles complémentaires',
                'Angles supplémentaires',
                'Angles opposés par le sommet',
                'Droites parallèles'
            ],

            exercices:[
                {
                    question:"Un angle de 125° est...",
                    options:["Aigu","Droit","Obtus","Plat"],
                    correct:2,
                    correction:"125° est compris entre 90° et 180° : il est obtus."
                },
                {
                    question:"Deux angles complémentaires ont une somme de...",
                    options:["90°","180°","360°","45°"],
                    correct:0,
                    correction:"Des angles complémentaires ont une somme de 90°."
                },
                {
                    question:"Deux angles supplémentaires ont une somme de...",
                    options:["90°","180°","270°","360°"],
                    correct:1,
                    correction:"Des angles supplémentaires ont une somme de 180°."
                },
                {
                    question:"Deux angles opposés par le sommet sont...",
                    options:[
                        "De même amplitude",
                        "Toujours complémentaires",
                        "Toujours supplémentaires",
                        "Toujours droits"
                    ],
                    correct:0,
                    correction:"Deux angles opposés par le sommet ont la même amplitude."
                },
                {
                    question:"Un angle mesure 67°. Son supplémentaire mesure...",
                    options:["113°","123°","103°","67°"],
                    correct:0,
                    correction:"180−67=113°."
                }
            ]
        },


        // -------------------------------------------------
        // 3. TRIANGLES ISOMETRIQUES
        // -------------------------------------------------

        {
            id:'3e_triangles_isometriques',
            titre:'3. Triangles isométriques',
            desc:'Reconnaître, démontrer et exploiter l’isométrie de triangles.',
            niveau:'3e',
            icone:'🔺',
            color:'#4f46e5',

            cours:`
                <h4>📌 Définition</h4>

                <p>
                    Deux figures sont <b>isométriques</b> lorsqu'elles sont
                    superposables : les distances entre les points
                    correspondants sont conservées.
                </p>

                <h4>📐 Vocabulaire</h4>

                <ul>
                    <li>Côtés homologues</li>
                    <li>Angles homologues</li>
                    <li>Sommets homologues</li>
                </ul>

                <h4>🔵 Critère CCC</h4>

                <p>
                    Si les trois côtés homologues de deux triangles ont
                    la même longueur, alors les triangles sont isométriques.
                </p>

                <h4>🟢 Critère CAC</h4>

                <p>
                    Si deux côtés homologues ont la même longueur et que
                    l'angle compris entre ces deux côtés a la même amplitude,
                    les triangles sont isométriques.
                </p>

                <h4>🟡 Critère ACA</h4>

                <p>
                    Si deux angles homologues ont la même amplitude et
                    qu'un côté homologue adjacent est de même longueur,
                    les triangles sont isométriques.
                </p>

                <h4>🎯 Démonstration</h4>

                <ol>
                    <li>Identifier les deux triangles.</li>
                    <li>Relever les données.</li>
                    <li>Choisir le critère adapté.</li>
                    <li>Conclure.</li>
                    <li>Déduire les égalités de côtés ou d'angles.</li>
                </ol>
            `,

            objectifs:[
                'Définir deux figures isométriques',
                'Identifier les éléments homologues',
                'Utiliser CCC',
                'Utiliser CAC',
                'Utiliser ACA',
                'Construire une démonstration'
            ],

            matieres:[
                'Figures isométriques',
                'Côtés homologues',
                'Angles homologues',
                'CCC',
                'CAC',
                'ACA',
                'Démonstrations'
            ],

            exercices:[
                {
                    question:"CCC signifie...",
                    options:[
                        "Côté-Côté-Côté",
                        "Côté-Cercle-Côté",
                        "Cercle-Côté-Cercle",
                        "Côté-Côté-Cercle"
                    ],
                    correct:0,
                    correction:"CCC signifie Côté-Côté-Côté."
                },
                {
                    question:"Dans le critère CAC, l'angle doit être...",
                    options:[
                        "Compris entre les deux côtés",
                        "Toujours droit",
                        "Toujours opposé",
                        "N'importe où"
                    ],
                    correct:0,
                    correction:"Dans CAC, l'angle de même amplitude est compris entre les deux côtés homologues."
                },
                {
                    question:"Deux triangles ont leurs trois côtés homologues de même longueur. Quel critère utiliser ?",
                    options:["CCC","CAC","ACA","Thalès"],
                    correct:0,
                    correction:"Trois côtés homologues égaux correspondent au critère CCC."
                },
                {
                    question:"Deux triangles isométriques ont-ils leurs angles homologues de même amplitude ?",
                    options:["Oui","Non","Seulement un angle","Impossible à savoir"],
                    correct:0,
                    correction:"L'isométrie conserve les longueurs et les amplitudes des angles homologues."
                },
                {
                    question:"Quel est l'objectif d'une démonstration d'isométrie ?",
                    options:[
                        "Prouver que les deux triangles correspondent parfaitement",
                        "Calculer uniquement une aire",
                        "Calculer uniquement le périmètre",
                        "Tracer un cercle"
                    ],
                    correct:0,
                    correction:"Une fois l'isométrie démontrée, on peut déduire les égalités entre éléments homologues."
                }
            ]
        },


        // -------------------------------------------------
        // 4. TRIANGLES SEMBLABLES
        // -------------------------------------------------

        {
            id:'3e_triangles_semblables',
            titre:'4. Triangles semblables',
            desc:'Rapports de similitude, côtés homologues et calcul de longueurs.',
            niveau:'3e',
            icone:'🔺',
            color:'#6366f1',

            cours:`
                <h4>📌 Définition</h4>

                <p>
                    Deux triangles sont <b>semblables</b> lorsqu'ils ont
                    la même forme : leurs angles homologues ont la même
                    amplitude et leurs côtés homologues sont proportionnels.
                </p>

                <h4>📏 Proportionnalité</h4>

                <p style="text-align:center;font-size:19px;">
                    <b>
                    AB / A'B' = AC / A'C' = BC / B'C'
                    </b>
                </p>

                <h4>🎯 Facteur de similitude</h4>

                <p>
                    Si toutes les longueurs sont multipliées par un facteur k,
                    le triangle est agrandi ou réduit.
                </p>

                <p>
                    Exemple : si k=2, toutes les longueurs sont doublées.
                </p>

                <h4>🧠 Méthode</h4>

                <ol>
                    <li>Identifier les sommets homologues.</li>
                    <li>Associer les côtés correspondants.</li>
                    <li>Écrire les rapports dans le même ordre.</li>
                    <li>Résoudre la proportion.</li>
                    <li>Vérifier l'unité et la cohérence.</li>
                </ol>
            `,

            objectifs:[
                'Reconnaître deux triangles semblables',
                'Identifier les côtés homologues',
                'Utiliser les rapports de similitude',
                'Calculer une longueur',
                'Déterminer un facteur de similitude'
            ],

            matieres:[
                'Triangles semblables',
                'Côtés homologues',
                'Angles homologues',
                'Rapports',
                'Proportionnalité',
                'Facteur de similitude'
            ],

            exercices:[
                {
                    question:"Les côtés homologues de triangles semblables sont...",
                    options:[
                        "Proportionnels",
                        "Toujours égaux",
                        "Toujours perpendiculaires",
                        "Toujours parallèles"
                    ],
                    correct:0,
                    correction:"Les côtés homologues sont proportionnels."
                },
                {
                    question:"Un triangle de côté 5 cm est agrandi avec un facteur 3. Le côté correspondant mesure...",
                    options:["15 cm","8 cm","10 cm","12 cm"],
                    correct:0,
                    correction:"5×3=15 cm."
                },
                {
                    question:"6/9 se simplifie en...",
                    options:["2/3","3/2","1/3","6/3"],
                    correct:0,
                    correction:"6/9 = 2/3."
                },
                {
                    question:"Si 4/10 = 6/x, x vaut...",
                    options:["15","12","14","20"],
                    correct:0,
                    correction:"4x=60, donc x=15."
                },
                {
                    question:"Deux triangles semblables ont-ils forcément la même taille ?",
                    options:["Non","Oui","Seulement les triangles rectangles","Toujours"],
                    correct:0,
                    correction:"Ils ont la même forme mais peuvent avoir des tailles différentes."
                }
            ]
        },


        // -------------------------------------------------
        // 5. PYTHAGORE
        // -------------------------------------------------

        {
            id:'3e_pythagore',
            titre:'5. Théorème de Pythagore',
            desc:'Calculer des longueurs dans un triangle rectangle et utiliser la réciproque.',
            niveau:'3e',
            icone:'📐',
            color:'#805ad5',

            cours:`
                <h4>📌 Théorème</h4>

                <p>
                    Dans un triangle rectangle, le carré de l'hypoténuse
                    est égal à la somme des carrés des deux autres côtés.
                </p>

                <p style="text-align:center;font-size:22px;">
                    <b>a²+b²=c²</b>
                </p>

                <h4>📐 L'hypoténuse</h4>

                <p>
                    L'hypoténuse est le côté opposé à l'angle droit.
                    C'est toujours le plus grand côté du triangle rectangle.
                </p>

                <h4>🔢 Exemple</h4>

                <p>
                    Si les deux côtés de l'angle droit mesurent 3 cm et 4 cm :
                </p>

                <p>
                    c²=3²+4²=9+16=25
                </p>

                <p>
                    donc <b>c=5 cm</b>.
                </p>

                <h4>🔄 Réciproque</h4>

                <p>
                    Si, pour le plus grand côté c,
                    <b>a²+b²=c²</b>, alors le triangle est rectangle.
                </p>
            `,

            objectifs:[
                'Identifier l’hypoténuse',
                'Appliquer Pythagore',
                'Calculer une longueur',
                'Utiliser la réciproque',
                'Rédiger un calcul complet'
            ],

            matieres:[
                'Triangle rectangle',
                'Hypoténuse',
                'Théorème de Pythagore',
                'Réciproque',
                'Calcul de longueur'
            ],

            exercices:[
                {
                    question:"Dans un triangle rectangle de côtés 3 et 4, l'hypoténuse vaut...",
                    options:["5","6","7","12"],
                    correct:0,
                    correction:"3²+4²=9+16=25, donc c=5."
                },
                {
                    question:"L'hypoténuse est...",
                    options:[
                        "Le côté opposé à l'angle droit",
                        "Le plus petit côté",
                        "Toujours horizontal",
                        "Un angle"
                    ],
                    correct:0,
                    correction:"L'hypoténuse est le côté opposé à l'angle droit."
                },
                {
                    question:"Un triangle de côtés 6, 8 et 10 est-il rectangle ?",
                    options:["Oui","Non","Impossible","Seulement si 6 est l'hypoténuse"],
                    correct:0,
                    correction:"6²+8²=36+64=100=10². Le triangle est rectangle."
                },
                {
                    question:"La diagonale d'un carré de côté 1 vaut...",
                    options:["√2","2","√3","1"],
                    correct:0,
                    correction:"d²=1²+1²=2 donc d=√2."
                },
                {
                    question:"Si c=13 et b=5, alors a vaut...",
                    options:["12","8","18","10"],
                    correct:0,
                    correction:"a²=13²−5²=169−25=144, donc a=12."
                }
            ]
        },


        // -------------------------------------------------
        // 6. THALÈS
        // -------------------------------------------------

        {
            id:'3e_thales',
            titre:'6. Théorème de Thalès',
            desc:'Proportionnalité, configurations de Thalès et réciproque.',
            niveau:'3e',
            icone:'📏',
            color:'#319795',

            cours:`
                <h4>📌 Configuration</h4>

                <p>
                    Le théorème de Thalès s'utilise lorsqu'une configuration
                    contient notamment des droites parallèles coupant deux
                    droites sécantes.
                </p>

                <h4>📐 Théorème</h4>

                <p>
                    Les longueurs correspondantes sont proportionnelles.
                </p>

                <p style="text-align:center;font-size:19px;">
                    <b>
                    AM/AB = AN/AC = MN/BC
                    </b>
                </p>

                <h4>🧠 Méthode</h4>

                <ol>
                    <li>Repérer les parallèles.</li>
                    <li>Identifier les deux triangles.</li>
                    <li>Repérer les côtés homologues.</li>
                    <li>Écrire les rapports dans le même ordre.</li>
                    <li>Calculer la longueur recherchée.</li>
                </ol>

                <h4>🔄 Réciproque</h4>

                <p>
                    La réciproque permet de démontrer le parallélisme lorsque
                    les rapports correspondants sont égaux.
                </p>
            `,

            objectifs:[
                'Reconnaître une configuration de Thalès',
                'Écrire les rapports correctement',
                'Calculer une longueur',
                'Utiliser la réciproque',
                'Justifier le parallélisme'
            ],

            matieres:[
                'Configuration de Thalès',
                'Proportionnalité',
                'Rapports de longueurs',
                'Quatrième proportionnelle',
                'Réciproque de Thalès'
            ],

            exercices:[
                {
                    question:"Dans une configuration de Thalès, les rapports de longueurs sont...",
                    options:[
                        "Proportionnels",
                        "Toujours égaux à 1",
                        "Toujours perpendiculaires",
                        "Sans relation"
                    ],
                    correct:0,
                    correction:"Les rapports de longueurs homologues sont égaux."
                },
                {
                    question:"Si AM/AB=2/5 et AB=15 cm, AM vaut...",
                    options:["6 cm","8 cm","10 cm","12 cm"],
                    correct:0,
                    correction:"AM=15×2/5=6 cm."
                },
                {
                    question:"Quel élément est essentiel dans la configuration classique de Thalès ?",
                    options:[
                        "Des droites parallèles",
                        "Un angle droit",
                        "Un cercle",
                        "Un carré"
                    ],
                    correct:0,
                    correction:"La configuration classique repose sur des droites parallèles."
                },
                {
                    question:"Pour utiliser Thalès, les côtés comparés doivent être...",
                    options:[
                        "Homologues",
                        "Toujours perpendiculaires",
                        "Toujours égaux",
                        "De même orientation"
                    ],
                    correct:0,
                    correction:"Les rapports doivent comparer des segments homologues."
                }
            ]
        },


        // -------------------------------------------------
        // 7. TRIGONOMETRIE
        // -------------------------------------------------

        {
            id:'3e_trigonometrie',
            titre:'7. Trigonométrie du triangle rectangle',
            desc:'Sinus, cosinus, tangente et calcul de longueurs ou d’angles.',
            niveau:'3e',
            icone:'📐',
            color:'#e88a00',

            cours:`
                <h4>📌 Dans un triangle rectangle</h4>

                <p style="text-align:center;font-size:20px;">
                    <b>sin(α)=opposé/hypoténuse</b>
                </p>

                <p style="text-align:center;font-size:20px;">
                    <b>cos(α)=adjacent/hypoténuse</b>
                </p>

                <p style="text-align:center;font-size:20px;">
                    <b>tan(α)=opposé/adjacent</b>
                </p>

                <h4>🧠 SOH CAH TOA</h4>

                <ul>
                    <li>Sinus → Opposé / Hypoténuse</li>
                    <li>Cosinus → Adjacent / Hypoténuse</li>
                    <li>Tangente → Opposé / Adjacent</li>
                </ul>

                <h4>🎯 Calculer un angle</h4>

                <p>
                    Pour retrouver un angle, on utilise :
                </p>

                <ul>
                    <li>arcsin</li>
                    <li>arccos</li>
                    <li>arctan</li>
                </ul>

                <p>
                    Vérifie que ta calculatrice est en <b>degrés</b>
                    lorsque l'énoncé travaille en degrés.
                </p>
            `,

            objectifs:[
                'Identifier les trois côtés',
                'Choisir sinus, cosinus ou tangente',
                'Calculer une longueur',
                'Calculer un angle',
                'Utiliser correctement la calculatrice'
            ],

            matieres:[
                'Sinus',
                'Cosinus',
                'Tangente',
                'Triangle rectangle',
                'Calcul de longueur',
                'Calcul d’angle'
            ],

            exercices:[
                {
                    question:"sin(α) vaut...",
                    options:[
                        "opposé/hypoténuse",
                        "adjacent/hypoténuse",
                        "opposé/adjacent",
                        "hypoténuse/opposé"
                    ],
                    correct:0,
                    correction:"sin(α)=opposé/hypoténuse."
                },
                {
                    question:"cos(α) vaut...",
                    options:[
                        "adjacent/hypoténuse",
                        "opposé/hypoténuse",
                        "opposé/adjacent",
                        "hypoténuse/opposé"
                    ],
                    correct:0,
                    correction:"cos(α)=adjacent/hypoténuse."
                },
                {
                    question:"tan(α) vaut...",
                    options:[
                        "opposé/adjacent",
                        "adjacent/hypoténuse",
                        "opposé/hypoténuse",
                        "hypoténuse/adjacent"
                    ],
                    correct:0,
                    correction:"tan(α)=opposé/adjacent."
                },
                {
                    question:"Que vaut sin(30°) ?",
                    options:["0,5","0,25","0,866","1"],
                    correct:0,
                    correction:"sin(30°)=0,5."
                },
                {
                    question:"Pour trouver α avec tan(α)=0,75, on utilise...",
                    options:["arctan","arcsin","arccos","√"],
                    correct:0,
                    correction:"α=arctan(0,75)."
                }
            ]
        },


        // -------------------------------------------------
        // 8. RACINES CARREES
        // -------------------------------------------------

        {
            id:'3e_racines',
            titre:'8. Racines carrées',
            desc:'Carrés parfaits, simplification et calculs avec les racines.',
            niveau:'3e',
            icone:'√',
            color:'#059669',

            cours:`
                <h4>📌 Définition</h4>

                <p>
                    √a désigne la racine carrée principale de a :
                    c'est le nombre positif dont le carré vaut a.
                </p>

                <p style="text-align:center;font-size:20px;">
                    <b>(√a)²=a</b>
                </p>

                <h4>🔢 Carrés parfaits</h4>

                <p>
                    1, 4, 9, 16, 25, 36, 49, 64, 81...
                </p>

                <h4>🧩 Simplifier</h4>

                <p>
                    On recherche un carré parfait comme facteur.
                </p>

                <p>
                    Exemple :
                </p>

                <p style="text-align:center;">
                    √75 = √(25×3) = <b>5√3</b>
                </p>

                <h4>⚠️ Attention</h4>

                <p>
                    Pour tout réel a :
                    <b>√(a²)=|a|</b>.
                </p>
            `,

            objectifs:[
                'Comprendre une racine carrée',
                'Reconnaître les carrés parfaits',
                'Simplifier une racine',
                'Éviter les erreurs de signe'
            ],

            matieres:[
                'Racines carrées',
                'Carrés parfaits',
                'Simplification',
                'Valeur absolue'
            ],

            exercices:[
                {
                    question:"√49 vaut...",
                    options:["7","−7","49","14"],
                    correct:0,
                    correction:"La racine carrée principale de 49 est 7."
                },
                {
                    question:"√75 vaut...",
                    options:["5√3","3√5","15","25√3"],
                    correct:0,
                    correction:"75=25×3 donc √75=5√3."
                },
                {
                    question:"√(a²) vaut...",
                    options:["|a|","a","a²","−a"],
                    correct:0,
                    correction:"√(a²)=|a| pour tout réel a."
                },
                {
                    question:"√36 vaut...",
                    options:["6","−6","18","36"],
                    correct:0,
                    correction:"√36=6."
                }
            ]
        },


        // -------------------------------------------------
        // 9. POLYNOMES
        // -------------------------------------------------

        {
            id:'3e_polynomes',
            titre:'9. Polynômes, développement & factorisation',
            desc:'Développer, réduire, utiliser les identités remarquables et factoriser.',
            niveau:'3e',
            icone:'🔢',
            color:'#e53e3e',

            cours:`
                <h4>📌 Développer</h4>

                <p>
                    Développer transforme un produit en somme.
                </p>

                <p>
                    Exemple :
                    <b>3(x+2)=3x+6</b>
                </p>

                <h4>📌 Identités remarquables</h4>

                <p><b>(a+b)²=a²+2ab+b²</b></p>

                <p><b>(a−b)²=a²−2ab+b²</b></p>

                <p><b>a²−b²=(a−b)(a+b)</b></p>

                <h4>🧩 Factoriser</h4>

                <p>
                    Factoriser transforme une somme en produit.
                </p>

                <p>
                    Exemple :
                    <b>3x+6=3(x+2)</b>
                </p>

                <h4>🎯 Produit nul</h4>

                <p>
                    Si A×B=0 alors :
                    <b>A=0 ou B=0</b>.
                </p>
            `,

            objectifs:[
                'Développer une expression',
                'Réduire une expression',
                'Reconnaître les identités remarquables',
                'Factoriser',
                'Utiliser le produit nul'
            ],

            matieres:[
                'Développement',
                'Réduction',
                'Identités remarquables',
                'Mise en évidence',
                'Factorisation',
                'Produit nul'
            ],

            exercices:[
                {
                    question:"Développer (x+3)².",
                    options:[
                        "x²+6x+9",
                        "x²+3x+9",
                        "x²+9",
                        "x²−6x+9"
                    ],
                    correct:0,
                    correction:"(x+3)²=x²+6x+9."
                },
                {
                    question:"Factoriser x²−25.",
                    options:[
                        "(x−5)(x+5)",
                        "(x−5)²",
                        "(x+5)²",
                        "x(x−25)"
                    ],
                    correct:0,
                    correction:"x²−25=x²−5²=(x−5)(x+5)."
                },
                {
                    question:"Factoriser 3x+6.",
                    options:[
                        "3(x+2)",
                        "6(x+3)",
                        "3(x+6)",
                        "x(3+6)"
                    ],
                    correct:0,
                    correction:"Le facteur commun est 3."
                },
                {
                    question:"Résoudre (x−4)(x+2)=0.",
                    options:[
                        "x=4 ou x=−2",
                        "x=−4 ou x=2",
                        "x=6",
                        "x=−8"
                    ],
                    correct:0,
                    correction:"Un produit nul donne x−4=0 ou x+2=0."
                }
            ]
        },


        // -------------------------------------------------
        // 10. EQUATIONS
        // -------------------------------------------------

        {
            id:'3e_equations',
            titre:'10. Équations & inéquations',
            desc:'Résoudre des équations et inéquations du premier degré.',
            niveau:'3e',
            icone:'⚖️',
            color:'#be123c',

            cours:`
                <h4>⚖️ Équation</h4>

                <p>
                    Résoudre une équation consiste à rechercher les valeurs
                    de x qui rendent l'égalité vraie.
                </p>

                <h4>🧠 Méthode</h4>

                <ol>
                    <li>Développer si nécessaire.</li>
                    <li>Réduire les deux membres.</li>
                    <li>Regrouper les termes en x.</li>
                    <li>Regrouper les constantes.</li>
                    <li>Diviser par le coefficient de x.</li>
                    <li>Vérifier.</li>
                </ol>

                <h4>⚠️ Inéquations</h4>

                <p>
                    Lorsque l'on multiplie ou divise par un nombre négatif,
                    il faut <b>inverser le sens du signe</b>.
                </p>
            `,

            objectifs:[
                'Résoudre une équation',
                'Résoudre une inéquation',
                'Développer avant résolution',
                'Vérifier une solution',
                'Représenter une solution'
            ],

            matieres:[
                'Équations du premier degré',
                'Inéquations',
                'Produit nul',
                'Intervalles'
            ],

            exercices:[
                {
                    question:"Résoudre 2x+6=14.",
                    options:["x=4","x=5","x=8","x=10"],
                    correct:0,
                    correction:"2x=8 donc x=4."
                },
                {
                    question:"Résoudre 5x−10=0.",
                    options:["x=2","x=−2","x=5","x=10"],
                    correct:0,
                    correction:"5x=10 donc x=2."
                },
                {
                    question:"Résoudre 3x+1=10.",
                    options:["x=3","x=2","x=4","x=9"],
                    correct:0,
                    correction:"3x=9 donc x=3."
                },
                {
                    question:"Lorsqu'on divise une inéquation par −2, il faut...",
                    options:[
                        "Inverser le sens du signe",
                        "Garder le même signe",
                        "Supprimer le signe",
                        "Multiplier par 2"
                    ],
                    correct:0,
                    correction:"La division par un nombre négatif inverse le sens de l'inégalité."
                }
            ]
        },


        // -------------------------------------------------
        // 11. SYSTEMES
        // -------------------------------------------------

        {
            id:'3e_systemes',
            titre:'11. Systèmes de deux équations',
            desc:'Substitution, combinaison et problèmes à deux inconnues.',
            niveau:'3e',
            icone:'🧩',
            color:'#7e22ce',

            cours:`
                <h4>📌 Principe</h4>

                <p>
                    Un système contient deux équations avec généralement
                    deux inconnues x et y.
                </p>

                <h4>🔄 Substitution</h4>

                <ol>
                    <li>Isoler une inconnue.</li>
                    <li>Remplacer cette expression dans l'autre équation.</li>
                    <li>Résoudre l'équation obtenue.</li>
                    <li>Calculer la seconde inconnue.</li>
                    <li>Vérifier.</li>
                </ol>

                <h4>➕ Combinaison</h4>

                <p>
                    On peut additionner ou soustraire les équations
                    afin d'éliminer une inconnue.
                </p>

                <h4>🎯 Interprétation graphique</h4>

                <p>
                    Un système de deux équations du premier degré peut
                    être interprété comme la recherche du point
                    d'intersection de deux droites.
                </p>
            `,

            objectifs:[
                'Comprendre un système',
                'Utiliser la substitution',
                'Utiliser la combinaison',
                'Trouver un couple solution',
                'Interpréter graphiquement'
            ],

            matieres:[
                'Systèmes',
                'Substitution',
                'Combinaison',
                'Couple solution',
                'Intersection de droites'
            ],

            exercices:[
                {
                    question:"Une solution d'un système à deux inconnues est généralement...",
                    options:[
                        "Un couple (x,y)",
                        "Un seul nombre",
                        "Un angle",
                        "Une longueur"
                    ],
                    correct:0,
                    correction:"La solution est un couple de valeurs (x,y)."
                },
                {
                    question:"Si x+y=10 et x=4, y vaut...",
                    options:["6","4","10","14"],
                    correct:0,
                    correction:"4+y=10 donc y=6."
                },
                {
                    question:"Pour vérifier une solution de système, il faut...",
                    options:[
                        "La remplacer dans les deux équations",
                        "La remplacer dans une seule",
                        "La mettre au carré",
                        "La dériver"
                    ],
                    correct:0,
                    correction:"Le couple doit satisfaire les deux équations."
                }
            ]
        },


        // -------------------------------------------------
        // 12. FONCTIONS AFFINES
        // -------------------------------------------------

        {
            id:'3e_fonctions_affines',
            titre:'12. Fonctions affines',
            desc:'Coefficient directeur, ordonnée à l’origine, variations et zéros.',
            niveau:'3e',
            icone:'📊',
            color:'#0f766e',

            cours:`
                <h4>📌 Forme générale</h4>

                <p style="text-align:center;font-size:22px;">
                    <b>f(x)=ax+b</b>
                </p>

                <ul>
                    <li><b>a</b> : coefficient directeur</li>
                    <li><b>b</b> : ordonnée à l'origine</li>
                </ul>

                <h4>📈 Variations</h4>

                <ul>
                    <li>a&gt;0 → fonction croissante</li>
                    <li>a&lt;0 → fonction décroissante</li>
                    <li>a=0 → fonction constante</li>
                </ul>

                <h4>🎯 Zéro</h4>

                <p>
                    On résout :
                </p>

                <p style="text-align:center;">
                    ax+b=0
                </p>

                <p>
                    Si a≠0 :
                </p>

                <p style="text-align:center;font-size:20px;">
                    <b>x=−b/a</b>
                </p>
            `,

            objectifs:[
                'Reconnaître une fonction affine',
                'Identifier a et b',
                'Calculer une image',
                'Déterminer un zéro',
                'Étudier les variations',
                'Interpréter graphiquement'
            ],

            matieres:[
                'f(x)=ax+b',
                'Coefficient directeur',
                'Ordonnée à l’origine',
                'Croissance',
                'Décroissance',
                'Zéro'
            ],

            exercices:[
                {
                    question:"Dans f(x)=3x+2, le coefficient directeur vaut...",
                    options:["3","2","−3","5"],
                    correct:0,
                    correction:"Dans ax+b, a est le coefficient directeur."
                },
                {
                    question:"Dans f(x)=−2x+5, la fonction est...",
                    options:["Décroissante","Croissante","Constante","Impossible à savoir"],
                    correct:0,
                    correction:"Le coefficient directeur est négatif."
                },
                {
                    question:"Le zéro de f(x)=2x−8 est...",
                    options:["4","−4","8","2"],
                    correct:0,
                    correction:"2x−8=0 donc x=4."
                },
                {
                    question:"Dans f(x)=5x−7, f(2) vaut...",
                    options:["3","10","−2","17"],
                    correct:0,
                    correction:"f(2)=5×2−7=10−7=3."
                }
            ]
        }

    ],


    // =====================================================
    // 4e
    // =====================================================

    '4e': [

        // -------------------------------------------------
        // 1. FONCTIONS DE REFERENCE
        // -------------------------------------------------

        {
            id:'4e_fonctions_reference',
            titre:'1. Fonctions de référence',
            desc:'Fonctions constantes, linéaires, affines, carré et inverse.',
            niveau:'4e',
            icone:'📈',
            color:'#3182ce',

            cours:`
                <h4>📌 Fonction constante</h4>

                <p>
                    <b>f(x)=b</b>
                </p>

                <p>
                    Son graphique est une droite horizontale.
                </p>

                <h4>📌 Fonction linéaire</h4>

                <p>
                    <b>f(x)=ax</b>
                </p>

                <p>
                    Son graphique est une droite passant par l'origine.
                </p>

                <h4>📌 Fonction affine</h4>

                <p>
                    <b>f(x)=ax+b</b>
                </p>

                <h4>📌 Fonction carré</h4>

                <p>
                    <b>f(x)=x²</b>
                </p>

                <p>
                    Son graphique est une parabole.
                </p>

                <h4>📌 Fonction inverse</h4>

                <p>
                    <b>f(x)=1/x</b>, avec x≠0.
                </p>
            `,

            objectifs:[
                'Reconnaître les fonctions de référence',
                'Lire leur graphique',
                'Comparer leurs variations',
                'Identifier leur expression'
            ],

            matieres:[
                'Fonction constante',
                'Fonction linéaire',
                'Fonction affine',
                'Fonction carré',
                'Fonction inverse'
            ],

            exercices:[
                {
                    question:"La fonction carré est...",
                    options:["f(x)=x²","f(x)=2x","f(x)=1/x","f(x)=x+1"],
                    correct:0,
                    correction:"La fonction carré est f(x)=x²."
                },
                {
                    question:"La fonction inverse est...",
                    options:["f(x)=1/x","f(x)=x²","f(x)=2x","f(x)=x+1"],
                    correct:0,
                    correction:"La fonction inverse est définie par f(x)=1/x pour x≠0."
                },
                {
                    question:"Une fonction linéaire s'écrit...",
                    options:["ax","ax+b","x²","1/x"],
                    correct:0,
                    correction:"Une fonction linéaire est de la forme ax."
                }
            ]
        },


        // -------------------------------------------------
        // 2. SECOND DEGRE
        // -------------------------------------------------

        {
            id:'4e_second_degre',
            titre:'2. Équations du second degré',
            desc:'Discriminant, racines et résolution des trinômes.',
            niveau:'4e',
            icone:'🔢',
            color:'#e53e3e',

            cours:`
                <h4>📌 Forme générale</h4>

                <p style="text-align:center;font-size:21px;">
                    <b>ax²+bx+c=0</b>
                </p>

                <p>
                    avec a≠0.
                </p>

                <h4>Δ — discriminant</h4>

                <p style="text-align:center;font-size:21px;">
                    <b>Δ=b²−4ac</b>
                </p>

                <h4>🔎 Cas possibles</h4>

                <ul>
                    <li>Δ&gt;0 → deux solutions réelles</li>
                    <li>Δ=0 → une solution réelle double</li>
                    <li>Δ&lt;0 → aucune solution réelle</li>
                </ul>

                <h4>📐 Solutions</h4>

                <p>
                    Lorsque Δ≥0 :
                </p>

                <p style="text-align:center;">
                    <b>
                    x₁=(-b−√Δ)/(2a)
                    </b>
                </p>

                <p style="text-align:center;">
                    <b>
                    x₂=(-b+√Δ)/(2a)
                    </b>
                </p>
            `,

            objectifs:[
                'Identifier une équation du second degré',
                'Calculer Δ',
                'Déterminer le nombre de solutions',
                'Calculer les racines',
                'Vérifier les solutions'
            ],

            matieres:[
                'Trinôme',
                'Discriminant',
                'Racines',
                'Solution double',
                'Résolution'
            ],

            exercices:[
                {
                    question:"Le discriminant est...",
                    options:["b²−4ac","b²+4ac","a²−4bc","c²−4ab"],
                    correct:0,
                    correction:"Δ=b²−4ac."
                },
                {
                    question:"Si Δ<0, il y a...",
                    options:[
                        "Aucune solution réelle",
                        "Une solution",
                        "Deux solutions",
                        "Trois solutions"
                    ],
                    correct:0,
                    correction:"Lorsque Δ<0, il n'existe aucune solution réelle."
                },
                {
                    question:"Pour x²−5x+6=0, les solutions sont...",
                    options:[
                        "2 et 3",
                        "−2 et −3",
                        "1 et 6",
                        "−1 et −6"
                    ],
                    correct:0,
                    correction:"x²−5x+6=(x−2)(x−3), donc x=2 ou x=3."
                },
                {
                    question:"Pour x²−4=0, les solutions sont...",
                    options:[
                        "2 et −2",
                        "4 et −4",
                        "2 seulement",
                        "−2 seulement"
                    ],
                    correct:0,
                    correction:"x²=4 donc x=±2."
                }
            ]
        },


        // -------------------------------------------------
        // 3. FACTORISATION
        // -------------------------------------------------

        {
            id:'4e_factorisation',
            titre:'3. Factorisation avancée',
            desc:'Facteur commun, identités remarquables et produit nul.',
            niveau:'4e',
            icone:'🧩',
            color:'#dc2626',

            cours:`
                <h4>🔧 Facteur commun</h4>

                <p>
                    On recherche ce qui apparaît dans chaque terme.
                </p>

                <p>
                    Exemple :
                    <b>6x+12=6(x+2)</b>
                </p>

                <h4>📌 Identités remarquables</h4>

                <p><b>(a+b)²=a²+2ab+b²</b></p>

                <p><b>(a−b)²=a²−2ab+b²</b></p>

                <p><b>a²−b²=(a−b)(a+b)</b></p>

                <h4>🎯 Produit nul</h4>

                <p>
                    Si :
                    <b>A×B=0</b>
                </p>

                <p>
                    alors :
                    <b>A=0 ou B=0</b>.
                </p>
            `,

            objectifs:[
                'Identifier un facteur commun',
                'Utiliser les identités remarquables',
                'Factoriser',
                'Résoudre un produit nul',
                'Passer d’une forme développée à factorisée'
            ],

            matieres:[
                'Facteur commun',
                'Identités remarquables',
                'Différence de carrés',
                'Produit nul'
            ],

            exercices:[
                {
                    question:"Factoriser x²−16.",
                    options:[
                        "(x−4)(x+4)",
                        "(x−4)²",
                        "(x+4)²",
                        "x(x−16)"
                    ],
                    correct:0,
                    correction:"x²−16=x²−4²=(x−4)(x+4)."
                },
                {
                    question:"Factoriser 3x²+6x.",
                    options:[
                        "3x(x+2)",
                        "3(x²+6x)",
                        "x(3x+6x)",
                        "6x(x+3)"
                    ],
                    correct:0,
                    correction:"Le facteur commun est 3x."
                },
                {
                    question:"Résoudre (x−3)(x+5)=0.",
                    options:[
                        "3 et −5",
                        "−3 et 5",
                        "3 et 5",
                        "−3 et −5"
                    ],
                    correct:0,
                    correction:"x−3=0 ou x+5=0."
                }
            ]
        },


        // -------------------------------------------------
        // 4. VECTEURS
        // -------------------------------------------------

        {
            id:'4e_vecteurs',
            titre:'4. Vecteurs & coordonnées',
            desc:'Coordonnées, relation de Chasles, colinéarité et produit scalaire.',
            niveau:'4e',
            icone:'➡️',
            color:'#805ad5',

            cours:`
                <h4>📍 Coordonnées d'un vecteur</h4>

                <p>
                    Si A(xₐ,yₐ) et B(xᵦ,yᵦ), alors :
                </p>

                <p style="text-align:center;font-size:20px;">
                    <b>
                    AB⃗=(xᵦ−xₐ ; yᵦ−yₐ)
                    </b>
                </p>

                <h4>🔗 Relation de Chasles</h4>

                <p style="text-align:center;font-size:20px;">
                    <b>AB⃗+BC⃗=AC⃗</b>
                </p>

                <h4>📐 Colinéarité</h4>

                <p>
                    Deux vecteurs sont colinéaires lorsqu'ils ont la même
                    direction ou des directions opposées.
                </p>

                <h4>🎯 Produit scalaire</h4>

                <p style="text-align:center;font-size:20px;">
                    <b>
                    u·v=||u||×||v||×cos(α)
                    </b>
                </p>

                <p>
                    Deux vecteurs non nuls sont orthogonaux si leur
                    produit scalaire est nul.
                </p>
            `,

            objectifs:[
                'Calculer les coordonnées d’un vecteur',
                'Utiliser Chasles',
                'Reconnaître des vecteurs colinéaires',
                'Calculer un produit scalaire',
                'Reconnaître l’orthogonalité'
            ],

            matieres:[
                'Coordonnées',
                'Vecteurs',
                'Chasles',
                'Colinéarité',
                'Produit scalaire',
                'Orthogonalité'
            ],

            exercices:[
                {
                    question:"A(2,3) et B(7,5). AB⃗ vaut...",
                    options:[
                        "(5,2)",
                        "(9,8)",
                        "(−5,−2)",
                        "(2,5)"
                    ],
                    correct:0,
                    correction:"AB⃗=(7−2 ; 5−3)=(5 ; 2)."
                },
                {
                    question:"La relation de Chasles est...",
                    options:[
                        "AB⃗+BC⃗=AC⃗",
                        "AB⃗−BC⃗=AC⃗",
                        "AB⃗×BC⃗=AC⃗",
                        "AB⃗=BC⃗"
                    ],
                    correct:0,
                    correction:"AB⃗+BC⃗=AC⃗."
                },
                {
                    question:"Le produit scalaire de deux vecteurs est...",
                    options:[
                        "Un nombre réel",
                        "Un vecteur",
                        "Un angle",
                        "Une droite"
                    ],
                    correct:0,
                    correction:"Le produit scalaire donne un nombre réel."
                },
                {
                    question:"Deux vecteurs non nuls orthogonaux ont un produit scalaire égal à...",
                    options:["0","1","−1","Leur norme"],
                    correct:0,
                    correction:"u·v=0 pour deux vecteurs orthogonaux."
                }
            ]
        },


        // -------------------------------------------------
        // 5. STATISTIQUES
        // -------------------------------------------------

        {
            id:'4e_statistiques',
            titre:'5. Statistiques',
            desc:'Moyenne, médiane, quartiles, variance et écart-type.',
            niveau:'4e',
            icone:'📊',
            color:'#d69e2e',

            cours:`
                <h4>📌 Moyenne</h4>

                <p>
                    La moyenne est la somme des valeurs divisée par
                    le nombre de valeurs.
                </p>

                <p style="text-align:center;">
                    <b>x̄=Σxᵢ/n</b>
                </p>

                <h4>📍 Médiane</h4>

                <p>
                    On range les données dans l'ordre croissant.
                    La médiane partage la série en deux parties.
                </p>

                <h4>📊 Quartiles</h4>

                <p>
                    Les quartiles permettent d'étudier la répartition
                    des données dans une série.
                </p>

                <h4>📐 Variance</h4>

                <p>
                    La variance mesure la dispersion autour de la moyenne.
                </p>

                <h4>📏 Écart-type</h4>

                <p>
                    L'écart-type est la racine carrée de la variance.
                </p>
            `,

            objectifs:[
                'Calculer une moyenne',
                'Déterminer une médiane',
                'Déterminer des quartiles',
                'Calculer une variance',
                'Interpréter un écart-type'
            ],

            matieres:[
                'Moyenne',
                'Médiane',
                'Quartiles',
                'Variance',
                'Écart-type',
                'Diagrammes'
            ],

            exercices:[
                {
                    question:"La moyenne de 4,6,8 est...",
                    options:["6","5","7","18"],
                    correct:0,
                    correction:"(4+6+8)/3=6."
                },
                {
                    question:"La médiane de 2,4,7,9,12 est...",
                    options:["7","4","9","6"],
                    correct:0,
                    correction:"La valeur centrale est 7."
                },
                {
                    question:"Un écart-type élevé indique généralement...",
                    options:[
                        "Une forte dispersion",
                        "Une moyenne élevée",
                        "Une médiane nulle",
                        "Une série vide"
                    ],
                    correct:0,
                    correction:"Un écart-type élevé signifie que les données sont davantage dispersées autour de la moyenne."
                },
                {
                    question:"La moyenne de 4,6,8,10,12 est...",
                    options:["8","7","9","10"],
                    correct:0,
                    correction:"(4+6+8+10+12)/5=8."
                }
            ]
        },


        // -------------------------------------------------
        // 6. FONCTIONS AFFINES ET QUADRATIQUES
        // -------------------------------------------------

        {
            id:'4e_fonctions',
            titre:'6. Fonctions affines & quadratiques',
            desc:'Droites, paraboles, paramètres, sommet et variations.',
            niveau:'4e',
            icone:'📈',
            color:'#2563eb',

            cours:`
                <h4>📌 Fonction affine</h4>

                <p>
                    <b>f(x)=mx+p</b>
                </p>

                <ul>
                    <li>m : coefficient directeur</li>
                    <li>p : ordonnée à l'origine</li>
                </ul>

                <h4>📈 Variations</h4>

                <p>
                    m&gt;0 → croissante.
                    <br>
                    m&lt;0 → décroissante.
                </p>

                <h4>📌 Fonction quadratique</h4>

                <p>
                    Une fonction quadratique peut s'écrire :
                </p>

                <p style="text-align:center;">
                    <b>f(x)=ax²+bx+c</b>
                </p>

                <h4>🎯 Forme canonique</h4>

                <p style="text-align:center;">
                    <b>f(x)=a(x−h)²+k</b>
                </p>

                <p>
                    Le sommet de la parabole est alors S(h,k).
                </p>
            `,

            objectifs:[
                'Reconnaître une fonction affine',
                'Identifier son coefficient directeur',
                'Lire une ordonnée à l’origine',
                'Reconnaître une parabole',
                'Identifier un sommet'
            ],

            matieres:[
                'Fonction affine',
                'Coefficient directeur',
                'Ordonnée à l’origine',
                'Fonction quadratique',
                'Parabole',
                'Forme canonique'
            ],

            exercices:[
                {
                    question:"Dans f(x)=3x+2, 3 représente...",
                    options:[
                        "Le coefficient directeur",
                        "L'ordonnée à l'origine",
                        "Le sommet",
                        "Le discriminant"
                    ],
                    correct:0,
                    correction:"Dans mx+p, m est le coefficient directeur."
                },
                {
                    question:"Dans f(x)=−2x+5, la fonction est...",
                    options:["Décroissante","Croissante","Constante","Nulle"],
                    correct:0,
                    correction:"Le coefficient directeur est négatif."
                },
                {
                    question:"Le sommet de f(x)=2(x−3)²+4 est...",
                    options:[
                        "S(3,4)",
                        "S(−3,4)",
                        "S(3,−4)",
                        "S(2,3)"
                    ],
                    correct:0,
                    correction:"Dans a(x−h)²+k, le sommet est (h,k)."
                }
            ]
        },


        // -------------------------------------------------
        // 7. TRIGONOMETRIE APPROFONDIE
        // -------------------------------------------------

        {
            id:'4e_trigonometrie',
            titre:'7. Trigonométrie approfondie',
            desc:'Cercle trigonométrique, sinus, cosinus, tangente et relations.',
            niveau:'4e',
            icone:'⭕',
            color:'#d97706',

            cours:`
                <h4>⭕ Cercle trigonométrique</h4>

                <p>
                    Le cercle trigonométrique est un cercle de rayon 1
                    centré sur l'origine.
                </p>

                <p>
                    Pour un angle α, le point correspondant possède
                    pour coordonnées :
                </p>

                <p style="text-align:center;font-size:20px;">
                    <b>(cos α ; sin α)</b>
                </p>

                <h4>📌 Relation fondamentale</h4>

                <p style="text-align:center;font-size:21px;">
                    <b>sin²(α)+cos²(α)=1</b>
                </p>

                <h4>📌 Tangente</h4>

                <p style="text-align:center;">
                    <b>tan(α)=sin(α)/cos(α)</b>
                </p>

                <h4>🔄 Radian</h4>

                <p>
                    <b>π rad = 180°</b>
                </p>

                <p>
                    Donc :
                    <b>π/2 rad=90°</b>.
                </p>
            `,

            objectifs:[
                'Comprendre le cercle trigonométrique',
                'Utiliser sin²+cos²=1',
                'Convertir degrés et radians',
                'Utiliser la tangente',
                'Résoudre des exercices trigonométriques'
            ],

            matieres:[
                'Cercle trigonométrique',
                'Sinus',
                'Cosinus',
                'Tangente',
                'Radians',
                'Relation fondamentale'
            ],

            exercices:[
                {
                    question:"sin²(α)+cos²(α) vaut toujours...",
                    options:["1","0","2","α"],
                    correct:0,
                    correction:"La relation fondamentale donne toujours 1."
                },
                {
                    question:"180° correspondent à...",
                    options:["π rad","2π rad","π/2 rad","1 rad"],
                    correct:0,
                    correction:"π rad=180°."
                },
                {
                    question:"90° correspondent à...",
                    options:["π/2 rad","π rad","2π rad","π/4 rad"],
                    correct:0,
                    correction:"90°=π/2 rad."
                },
                {
                    question:"Si sin(α)=0,6, alors cos²(α)=...",
                    options:["0,64","0,36","0,4","1,36"],
                    correct:0,
                    correction:"cos²(α)=1−0,6²=1−0,36=0,64."
                }
            ]
        },


        // -------------------------------------------------
        // 8. GEOMETRIE ANALYTIQUE
        // -------------------------------------------------

        {
            id:'4e_geometrie_analytique',
            titre:'8. Géométrie analytique',
            desc:'Coordonnées, distances, droites et intersections.',
            niveau:'4e',
            icone:'📍',
            color:'#0891b2',

            cours:`
                <h4>📍 Coordonnées</h4>

                <p>
                    Dans un repère, un point est identifié par
                    ses coordonnées (x,y).
                </p>

                <h4>📏 Distance</h4>

                <p>
                    Pour A(x₁,y₁) et B(x₂,y₂) :
                </p>

                <p style="text-align:center;font-size:19px;">
                    <b>
                    AB=√((x₂−x₁)²+(y₂−y₁)²)
                    </b>
                </p>

                <h4>📈 Droite</h4>

                <p>
                    Une droite peut être représentée par :
                </p>

                <p style="text-align:center;">
                    <b>y=mx+p</b>
                </p>

                <h4>🎯 Intersection</h4>

                <p>
                    Le point d'intersection de deux droites satisfait
                    simultanément leurs deux équations.
                </p>
            `,

            objectifs:[
                'Lire des coordonnées',
                'Calculer une distance',
                'Déterminer une droite',
                'Trouver une intersection'
            ],

            matieres:[
                'Repère',
                'Coordonnées',
                'Distance',
                'Droites',
                'Intersections'
            ],

            exercices:[
                {
                    question:"A(0,0) et B(3,4). La distance AB vaut...",
                    options:["5","7","12","25"],
                    correct:0,
                    correction:"AB=√(3²+4²)=√25=5."
                },
                {
                    question:"Dans y=mx+p, p est...",
                    options:[
                        "L'ordonnée à l'origine",
                        "Le coefficient directeur",
                        "L'abscisse",
                        "La distance"
                    ],
                    correct:0,
                    correction:"p est l'ordonnée à l'origine."
                },
                {
                    question:"A(2,3) et B(5,7). Le vecteur AB vaut...",
                    options:[
                        "(3,4)",
                        "(7,10)",
                        "(−3,−4)",
                        "(2,4)"
                    ],
                    correct:0,
                    correction:"AB=(5−2 ; 7−3)=(3 ; 4)."
                }
            ]
        },


        // -------------------------------------------------
        // 9. GEOMETRIE DE L'ESPACE
        // -------------------------------------------------

        {
            id:'4e_espace',
            titre:'9. Géométrie dans l’espace',
            desc:'Solides, positions relatives, volumes et sections.',
            niveau:'4e',
            icone:'🧊',
            color:'#38a169',

            cours:`
                <h4>🧊 Solides</h4>

                <p>
                    On étudie les positions relatives des droites,
                    plans et solides dans l'espace.
                </p>

                <h4>📐 Positions relatives</h4>

                <ul>
                    <li>Droites sécantes</li>
                    <li>Droites parallèles</li>
                    <li>Droites gauches</li>
                    <li>Plans parallèles</li>
                    <li>Plans sécants</li>
                </ul>

                <h4>📦 Volume d'un pavé droit</h4>

                <p style="text-align:center;">
                    <b>V=L×l×h</b>
                </p>

                <h4>⭕ Volume d'un cylindre</h4>

                <p style="text-align:center;">
                    <b>V=πr²h</b>
                </p>

                <h4>✂️ Section plane</h4>

                <p>
                    Une section plane est la figure obtenue lorsqu'un
                    plan coupe un solide.
                </p>
            `,

            objectifs:[
                'Identifier les positions relatives',
                'Calculer un volume',
                'Comprendre une section plane',
                'Utiliser les unités de volume'
            ],

            matieres:[
                'Solides',
                'Droites de l’espace',
                'Plans',
                'Volumes',
                'Sections'
            ],

            exercices:[
                {
                    question:"Deux droites de l'espace qui ne sont ni parallèles ni sécantes sont...",
                    options:["Gauches","Confondues","Perpendiculaires","Identiques"],
                    correct:0,
                    correction:"On les appelle des droites gauches."
                },
                {
                    question:"Le volume d'un pavé droit est...",
                    options:["L×l×h","L+l+h","2L+2l","L²+l²"],
                    correct:0,
                    correction:"V=L×l×h."
                },
                {
                    question:"Le volume d'un cylindre est...",
                    options:["πr²h","2πr","πrh","r²+h²"],
                    correct:0,
                    correction:"V=πr²h."
                },
                {
                    question:"Un volume s'exprime en...",
                    options:["cm³","cm²","cm","°"],
                    correct:0,
                    correction:"Un volume s'exprime en unités cubiques."
                }
            ]
        },


        // -------------------------------------------------
        // 10. PROBLEMES & MODELISATION
        // -------------------------------------------------

        {
            id:'4e_modelisation',
            titre:'10. Problèmes & modélisation',
            desc:'Transformer une situation réelle en modèle mathématique et interpréter le résultat.',
            niveau:'4e',
            icone:'🎯',
            color:'#16a34a',

            cours:`
                <h4>🧠 Résoudre un problème</h4>

                <ol>
                    <li>Lire attentivement l'énoncé.</li>
                    <li>Identifier les données.</li>
                    <li>Identifier ce que l'on cherche.</li>
                    <li>Choisir une méthode.</li>
                    <li>Effectuer les calculs.</li>
                    <li>Vérifier le résultat.</li>
                    <li>Répondre avec une phrase.</li>
                </ol>

                <h4>📐 Choisir le bon outil</h4>

                <ul>
                    <li>Triangle rectangle → Pythagore ou trigonométrie</li>
                    <li>Parallèles → Thalès</li>
                    <li>Relation entre deux grandeurs → fonction</li>
                    <li>Inconnue → équation</li>
                    <li>Données numériques → statistiques</li>
                </ul>

                <h4>🎯 Très important</h4>

                <p>
                    Une réponse mathématique doit être accompagnée
                    d'une interprétation lorsque le problème est contextualisé.
                </p>
            `,

            objectifs:[
                'Analyser un énoncé',
                'Choisir une méthode',
                'Construire un modèle',
                'Calculer',
                'Vérifier',
                'Interpréter'
            ],

            matieres:[
                'Problèmes',
                'Modélisation',
                'Interprétation',
                'Unités',
                'Justification'
            ],

            exercices:[
                {
                    question:"La première étape d'un problème est généralement...",
                    options:[
                        "Comprendre les données et la question",
                        "Calculer immédiatement",
                        "Arrondir tous les nombres",
                        "Tracer un cercle"
                    ],
                    correct:0,
                    correction:"Il faut d'abord comprendre la situation."
                },
                {
                    question:"Après un calcul dans un problème, il faut...",
                    options:[
                        "Interpréter le résultat",
                        "Toujours le multiplier par 2",
                        "Supprimer les unités",
                        "Changer le résultat"
                    ],
                    correct:0,
                    correction:"Il faut répondre à la question posée et interpréter le résultat."
                },
                {
                    question:"Pour une configuration avec des parallèles et des longueurs proportionnelles, on pense à...",
                    options:["Thalès","Pythagore","Statistiques","Produit scalaire"],
                    correct:0,
                    correction:"Les parallèles et les rapports de longueurs indiquent généralement Thalès."
                }
            ]
        }

    ],


    // =====================================================
    // 5e
    // =====================================================

    '5e': [

        {
            id:'5e_limites',
            titre:'1. Limites de fonctions',
            desc:"Comportement d'une fonction aux bornes de son domaine.",
            niveau:'5e',
            icone:'📈',
            color:'#3182ce',

            cours:`
                <h4>📌 Limite</h4>
                <p>
                    La limite décrit le comportement d'une fonction
                    lorsque x se rapproche d'une valeur ou de l'infini.
                </p>

                <h4>⚠️ Formes indéterminées</h4>
                <p>
                    Les formes 0/0, ∞/∞ et ∞−∞ demandent une transformation
                    de l'expression avant de conclure.
                </p>

                <h4>📈 Asymptotes</h4>
                <p>
                    Une limite infinie peut correspondre à une asymptote
                    verticale et une limite finie à l'infini peut correspondre
                    à une asymptote horizontale.
                </p>
            `,

            objectifs:[
                'Comprendre une limite',
                'Calculer une limite simple',
                'Reconnaître une forme indéterminée',
                'Identifier une asymptote'
            ],

            matieres:[
                'Limites',
                'Formes indéterminées',
                'Asymptotes'
            ],

            exercices:[
                {
                    question:"lim 1/x quand x→+∞ vaut...",
                    options:["0","+∞","1","−∞"],
                    correct:0,
                    correction:"1/x tend vers 0."
                },
                {
                    question:"0/0 est une forme...",
                    options:["Indéterminée","Toujours nulle","Toujours infinie","Impossible"],
                    correct:0,
                    correction:"0/0 est une forme indéterminée."
                }
            ]
        },


        {
            id:'5e_derivees',
            titre:'2. Dérivées',
            desc:'Nombre dérivé, tangente et règles de dérivation.',
            niveau:'5e',
            icone:'📐',
            color:'#e53e3e',

            cours:`
                <h4>📌 Nombre dérivé</h4>

                <p>
                    Le nombre dérivé f'(a) représente la pente de la
                    tangente à la courbe au point d'abscisse a.
                </p>

                <h4>📐 Dérivées usuelles</h4>

                <ul>
                    <li>(k)'=0</li>
                    <li>(x)'=1</li>
                    <li>(x²)'=2x</li>
                    <li>(xⁿ)'=nxⁿ⁻¹</li>
                </ul>
            `,

            objectifs:[
                'Comprendre le nombre dérivé',
                'Calculer une dérivée simple',
                'Interpréter une pente',
                'Écrire une tangente'
            ],

            matieres:[
                'Nombre dérivé',
                'Tangente',
                'Dérivées usuelles'
            ],

            exercices:[
                {
                    question:"La dérivée de x³ est...",
                    options:["3x²","x²","3x","x³"],
                    correct:0,
                    correction:"(x³)'=3x²."
                },
                {
                    question:"f'(a) représente géométriquement...",
                    options:[
                        "La pente de la tangente",
                        "L'image de a",
                        "Le zéro",
                        "L'aire"
                    ],
                    correct:0,
                    correction:"Le nombre dérivé est la pente de la tangente."
                }
            ]
        },


        {
            id:'5e_complexes',
            titre:'3. Nombres complexes',
            desc:'Forme algébrique, module et opérations.',
            niveau:'5e',
            icone:'ℂ',
            color:'#805ad5',

            cours:`
                <h4>📌 Définition</h4>

                <p>
                    On définit i par :
                    <b>i²=−1</b>.
                </p>

                <p>
                    Un complexe s'écrit :
                    <b>z=a+bi</b>.
                </p>

                <h4>📏 Module</h4>

                <p>
                    <b>|z|=√(a²+b²)</b>.
                </p>
            `,

            objectifs:[
                'Utiliser i²=−1',
                'Écrire un complexe',
                'Calculer un module',
                'Effectuer des opérations'
            ],

            matieres:[
                'Forme algébrique',
                'Module',
                'Opérations'
            ],

            exercices:[
                {
                    question:"i² vaut...",
                    options:["−1","1","0","i"],
                    correct:0,
                    correction:"Par définition i²=−1."
                },
                {
                    question:"Le module de 3+4i vaut...",
                    options:["5","7","12","25"],
                    correct:0,
                    correction:"√(3²+4²)=5."
                }
            ]
        },


        {
            id:'5e_geometrie_analytique',
            titre:'4. Géométrie analytique',
            desc:'Droites, distances et cercles dans un repère.',
            niveau:'5e',
            icone:'📍',
            color:'#0e7c86',

            cours:`
                <h4>📈 Droite</h4>

                <p><b>y=mx+p</b></p>

                <h4>📏 Distance</h4>

                <p>
                    <b>
                    d=√((x₂−x₁)²+(y₂−y₁)²)
                    </b>
                </p>

                <h4>⭕ Cercle</h4>

                <p>
                    Un cercle de centre (a,b) et de rayon r vérifie :
                </p>

                <p>
                    <b>(x−a)²+(y−b)²=r²</b>
                </p>
            `,

            objectifs:[
                'Calculer une pente',
                'Calculer une distance',
                'Écrire l'équation d'un cercle'
            ],

            matieres:[
                'Droites',
                'Distance',
                'Cercles'
            ],

            exercices:[
                {
                    question:"Un cercle de centre (0,0) et de rayon 3 vérifie...",
                    options:[
                        "x²+y²=9",
                        "x²+y²=3",
                        "x+y=9",
                        "x²−y²=9"
                    ],
                    correct:0,
                    correction:"x²+y²=3²=9."
                }
            ]
        },


        {
            id:'5e_stat2',
            titre:'5. Statistiques à deux variables',
            desc:'Nuages de points, point moyen et corrélation.',
            niveau:'5e',
            icone:'📊',
            color:'#3182ce',

            cours:`
                <h4>📊 Nuage de points</h4>

                <p>
                    Une série statistique à deux variables étudie
                    deux caractéristiques simultanément.
                </p>

                <h4>📍 Point moyen</h4>

                <p>
                    <b>G(x̄,ȳ)</b>.
                </p>

                <h4>📈 Corrélation</h4>

                <p>
                    Un coefficient proche de 1 ou −1 indique une forte
                    liaison linéaire.
                </p>

                <p>
                    Attention : corrélation ne signifie pas causalité.
                </p>
            `,

            objectifs:[
                'Lire un nuage de points',
                'Calculer un point moyen',
                'Interpréter une corrélation',
                'Distinguer corrélation et causalité'
            ],

            matieres:[
                'Nuage de points',
                'Point moyen',
                'Corrélation'
            ],

            exercices:[
                {
                    question:"Le point moyen est...",
                    options:[
                        "(x̄,ȳ)",
                        "(0,0)",
                        "Le point maximal",
                        "Le premier point"
                    ],
                    correct:0,
                    correction:"Le point moyen a pour coordonnées les deux moyennes."
                },
                {
                    question:"Corrélation implique-t-elle toujours causalité ?",
                    options:["Non","Oui","Toujours","Seulement si r=0"],
                    correct:0,
                    correction:"Une corrélation ne prouve pas une relation de cause à effet."
                }
            ]
        }

    ],


    // =====================================================
    // 6e
    // =====================================================

    '6e': [

        {
            id:'6e_derivees',
            titre:'1. Dérivées & étude de fonctions',
            desc:'Dérivation, croissance, décroissance et extrema.',
            niveau:'6e',
            icone:'📐',
            color:'#e53e3e',

            cours:`
                <h4>📌 Règles</h4>

                <p><b>(u+v)'=u'+v'</b></p>
                <p><b>(uv)'=u'v+uv'</b></p>
                <p><b>(u/v)'=(u'v−uv')/v²</b></p>

                <h4>📈 Variations</h4>

                <p>
                    f'(x)>0 → fonction croissante.
                    <br>
                    f'(x)<0 → fonction décroissante.
                </p>
            `,

            objectifs:[
                'Dériver une fonction',
                'Étudier le signe d’une dérivée',
                'Construire un tableau de variation',
                'Déterminer des extrema'
            ],

            matieres:[
                'Dérivation',
                'Variations',
                'Extrema'
            ],

            exercices:[
                {
                    question:"Si f'(x)>0, f est...",
                    options:["Croissante","Décroissante","Constante","Nulle"],
                    correct:0,
                    correction:"Une dérivée positive correspond à une fonction croissante."
                },
                {
                    question:"La dérivée de x² est...",
                    options:["2x","x","2","x²"],
                    correct:0,
                    correction:"(x²)'=2x."
                }
            ]
        },


        {
            id:'6e_integrales',
            titre:'2. Intégrales',
            desc:'Primitives, intégrales définies et calcul d’aires.',
            niveau:'6e',
            icone:'∫',
            color:'#805ad5',

            cours:`
                <h4>📌 Primitive</h4>

                <p>
                    F est une primitive de f lorsque :
                    <b>F'=f</b>.
                </p>

                <h4>📐 Intégrale</h4>

                <p>
                    <b>
                    ∫ₐᵇ f(x)dx=F(b)−F(a)
                    </b>
                </p>

                <p>
                    Elle permet notamment de calculer une aire algébrique.
                </p>
            `,

            objectifs:[
                'Trouver une primitive simple',
                'Calculer une intégrale',
                'Interpréter une intégrale comme une aire'
            ],

            matieres:[
                'Primitives',
                'Intégrales',
                'Aires'
            ],

            exercices:[
                {
                    question:"Une primitive de x est...",
                    options:["x²/2","x²","2x","1"],
                    correct:0,
                    correction:"∫x dx=x²/2+C."
                }
            ]
        },


        {
            id:'6e_probabilites',
            titre:'3. Probabilités',
            desc:'Probabilités conditionnelles, indépendance et lois.',
            niveau:'6e',
            icone:'🎲',
            color:'#d69e2e',

            cours:`
                <h4>🎲 Probabilité conditionnelle</h4>

                <p>
                    <b>
                    P(A|B)=P(A∩B)/P(B)
                    </b>
                </p>

                <h4>🔗 Indépendance</h4>

                <p>
                    A et B sont indépendants si :
                </p>

                <p>
                    <b>P(A∩B)=P(A)P(B)</b>
                </p>

                <h4>📊 Loi binomiale</h4>

                <p>
                    Elle modélise le nombre de succès dans une répétition
                    d'épreuves de Bernoulli indépendantes.
                </p>
            `,

            objectifs:[
                'Calculer une probabilité conditionnelle',
                'Reconnaître l’indépendance',
                'Identifier une situation binomiale'
            ],

            matieres:[
                'Probabilité conditionnelle',
                'Indépendance',
                'Loi binomiale'
            ],

            exercices:[
                {
                    question:"Deux événements indépendants vérifient...",
                    options:[
                        "P(A∩B)=P(A)P(B)",
                        "P(A∩B)=P(A)+P(B)",
                        "P(A)=P(B)",
                        "P(A|B)=0"
                    ],
                    correct:0,
                    correction:"C'est la définition de l'indépendance."
                }
            ]
        },


        {
            id:'6e_suites',
            titre:'4. Suites numériques',
            desc:'Suites arithmétiques, géométriques et limites.',
            niveau:'6e',
            icone:'🔢',
            color:'#0e7c86',

            cours:`
                <h4>➕ Suite arithmétique</h4>

                <p>
                    <b>uₙ₊₁=uₙ+r</b>
                </p>

                <p>
                    <b>uₙ=u₀+nr</b>
                </p>

                <h4>✖️ Suite géométrique</h4>

                <p>
                    <b>uₙ₊₁=uₙq</b>
                </p>

                <p>
                    <b>uₙ=u₀qⁿ</b>
                </p>
            `,

            objectifs:[
                'Reconnaître une suite arithmétique',
                'Reconnaître une suite géométrique',
                'Calculer un terme',
                'Étudier une limite simple'
            ],

            matieres:[
                'Suites arithmétiques',
                'Suites géométriques',
                'Limites'
            ],

            exercices:[
                {
                    question:"Dans une suite arithmétique...",
                    options:[
                        "On ajoute toujours la même raison",
                        "On multiplie toujours par la même raison",
                        "On soustrait toujours le carré",
                        "On divise toujours par n"
                    ],
                    correct:0,
                    correction:"Une suite arithmétique est définie par une différence constante."
                },
                {
                    question:"Une suite géométrique de raison 0,5 tend vers...",
                    options:["0","+∞","1","−∞"],
                    correct:0,
                    correction:"Lorsque |q|<1, la suite tend vers 0."
                }
            ]
        },


        {
            id:'6e_exponentielles',
            titre:'5. Exponentielles & logarithmes',
            desc:'Fonctions exponentielles, logarithmes et équations.',
            niveau:'6e',
            icone:'📈',
            color:'#d69e2e',

            cours:`
                <h4>📈 Exponentielle</h4>

                <p>
                    La fonction exponentielle est notée :
                    <b>eˣ</b>.
                </p>

                <p>
                    <b>eˣ⁺ʸ=eˣ×eʸ</b>
                </p>

                <h4>📉 Logarithme</h4>

                <p>
                    ln est la fonction réciproque de l'exponentielle.
                </p>

                <p>
                    <b>ln(eˣ)=x</b>
                </p>

                <p>
                    et :
                    <b>eˡⁿˣ=x</b>.
                </p>
            `,

            objectifs:[
                'Utiliser les propriétés de l’exponentielle',
                'Utiliser les propriétés du logarithme',
                'Résoudre une équation simple'
            ],

            matieres:[
                'Exponentielle',
                'Logarithme',
                'Équations'
            ],

            exercices:[
                {
                    question:"ln(eˣ) vaut...",
                    options:["x","eˣ","1","0"],
                    correct:0,
                    correction:"ln et exp sont réciproques."
                },
                {
                    question:"Résoudre eˣ=5.",
                    options:["x=ln(5)","x=5","x=e⁵","x=1/5"],
                    correct:0,
                    correction:"On applique ln : x=ln(5)."
                }
            ]
        },


        {
            id:'6e_espace',
            titre:'6. Géométrie analytique de l’espace',
            desc:'Repères 3D, vecteurs, droites et plans.',
            niveau:'6e',
            icone:'🧊',
            color:'#38a169',

            cours:`
                <h4>📍 Repère de l'espace</h4>

                <p>
                    Un point de l'espace possède trois coordonnées :
                    <b>(x,y,z)</b>.
                </p>

                <h4>📐 Distance</h4>

                <p>
                    <b>
                    d=√((x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²)
                    </b>
                </p>

                <h4>📌 Plan</h4>

                <p>
                    Une équation cartésienne d'un plan peut s'écrire :
                    <b>ax+by+cz+d=0</b>.
                </p>
            `,

            objectifs:[
                'Lire un repère 3D',
                'Calculer une distance',
                'Comprendre une équation de plan',
                'Étudier les positions relatives'
            ],

            matieres:[
                'Repère 3D',
                'Vecteurs',
                'Plans',
                'Distances'
            ],

            exercices:[
                {
                    question:"Un point de l'espace possède...",
                    options:["3 coordonnées","2 coordonnées","4 coordonnées","1 coordonnée"],
                    correct:0,
                    correction:"Dans l'espace, un point possède trois coordonnées."
                },
                {
                    question:"Une équation cartésienne de plan peut être...",
                    options:[
                        "ax+by+cz+d=0",
                        "y=mx+p",
                        "x²+y²=r²",
                        "ax+b=0"
                    ],
                    correct:0,
                    correction:"C'est une forme générale d'équation cartésienne d'un plan."
                }
            ]
        }

    ]

};


// =========================================================
// FORMULES
// =========================================================

var FORMULES_DATA = {

    // -----------------------------------------------------
    // ALGEBRE
    // -----------------------------------------------------

    algebre:[
        {
            id:'alg_1',
            annee:'3e',
            titre:'Carré d’une somme',
            definition:'(a+b)²=a²+2ab+b²',
            exemple:'(x+3)²=x²+6x+9',
            icone:'🔢',
            categorie:'Algèbre'
        },
        {
            id:'alg_2',
            annee:'3e',
            titre:'Carré d’une différence',
            definition:'(a−b)²=a²−2ab+b²',
            exemple:'(x−3)²=x²−6x+9',
            icone:'🔢',
            categorie:'Algèbre'
        },
        {
            id:'alg_3',
            annee:'3e',
            titre:'Différence de carrés',
            definition:'a²−b²=(a−b)(a+b)',
            exemple:'x²−25=(x−5)(x+5)',
            icone:'🔢',
            categorie:'Algèbre'
        },
        {
            id:'alg_4',
            annee:'3e',
            titre:'Produit nul',
            definition:'A×B=0 ⇔ A=0 ou B=0',
            exemple:'(x−2)(x+3)=0 → x=2 ou x=−3',
            icone:'⚖️',
            categorie:'Algèbre'
        },
        {
            id:'alg_5',
            annee:'3e',
            titre:'Équation du premier degré',
            definition:'ax+b=0 → x=−b/a',
            exemple:'2x−8=0 → x=4',
            icone:'⚖️',
            categorie:'Algèbre'
        },
        {
            id:'alg_6',
            annee:'4e',
            titre:'Discriminant',
            definition:'Δ=b²−4ac',
            exemple:'x²−5x+6 → Δ=1',
            icone:'🔢',
            categorie:'Algèbre'
        },
        {
            id:'alg_7',
            annee:'4e',
            titre:'Racines du second degré',
            definition:'x=(-b±√Δ)/(2a)',
            exemple:'À utiliser lorsque Δ≥0',
            icone:'🔢',
            categorie:'Algèbre'
        },
        {
            id:'alg_8',
            annee:'4e',
            titre:'Somme des racines',
            definition:'x₁+x₂=−b/a',
            exemple:'x²−5x+6 → somme=5',
            icone:'🔢',
            categorie:'Algèbre'
        },
        {
            id:'alg_9',
            annee:'4e',
            titre:'Produit des racines',
            definition:'x₁×x₂=c/a',
            exemple:'x²−5x+6 → produit=6',
            icone:'🔢',
            categorie:'Algèbre'
        }
    ],


    // -----------------------------------------------------
    // GEOMETRIE
    // -----------------------------------------------------

    geometrie:[
        {
            id:'geo_1',
            annee:'3e',
            titre:'Pythagore',
            definition:'a²+b²=c²',
            exemple:'3²+4²=5²',
            icone:'📐',
            categorie:'Géométrie'
        },
        {
            id:'geo_2',
            annee:'3e',
            titre:'Thalès',
            definition:'AM/AB=AN/AC=MN/BC',
            exemple:'Permet de calculer une longueur dans une configuration de parallèles.',
            icone:'📏',
            categorie:'Géométrie'
        },
        {
            id:'geo_3',
            annee:'3e',
            titre:'Triangles isométriques — CCC',
            definition:'3 côtés homologues de même longueur',
            exemple:'Permet de démontrer l’isométrie.',
            icone:'🔺',
            categorie:'Géométrie'
        },
        {
            id:'geo_4',
            annee:'3e',
            titre:'Triangles isométriques — CAC',
            definition:'2 côtés homologues + angle compris',
            exemple:'Les deux côtés et l’angle compris sont correspondants.',
            icone:'🔺',
            categorie:'Géométrie'
        },
        {
            id:'geo_5',
            annee:'3e',
            titre:'Triangles semblables',
            definition:'Côtés homologues proportionnels',
            exemple:'AB/A’B’=AC/A’C’=BC/B’C’',
            icone:'🔺',
            categorie:'Géométrie'
        },
        {
            id:'geo_6',
            annee:'4e',
            titre:'Distance dans le plan',
            definition:'AB=√((x₂−x₁)²+(y₂−y₁)²)',
            exemple:'A(0,0), B(3,4) → AB=5',
            icone:'📍',
            categorie:'Géométrie'
        },
        {
            id:'geo_7',
            annee:'4e',
            titre:'Volume du pavé droit',
            definition:'V=L×l×h',
            exemple:'L=2,l=3,h=4 → V=24',
            icone:'📦',
            categorie:'Géométrie'
        },
        {
            id:'geo_8',
            annee:'4e',
            titre:'Volume du cylindre',
            definition:'V=πr²h',
            exemple:'r=2,h=5 → V=20π',
            icone:'⭕',
            categorie:'Géométrie'
        }
    ],


    // -----------------------------------------------------
    // TRIGONOMETRIE
    // -----------------------------------------------------

    trigonometrie:[
        {
            id:'trigo_1',
            annee:'3e',
            titre:'Sinus',
            definition:'sin(α)=opposé/hypoténuse',
            exemple:'sin(30°)=0,5',
            icone:'📐',
            categorie:'Trigonométrie'
        },
        {
            id:'trigo_2',
            annee:'3e',
            titre:'Cosinus',
            definition:'cos(α)=adjacent/hypoténuse',
            exemple:'cos(60°)=0,5',
            icone:'📐',
            categorie:'Trigonométrie'
        },
        {
            id:'trigo_3',
            annee:'3e',
            titre:'Tangente',
            definition:'tan(α)=opposé/adjacent',
            exemple:'tan(45°)=1',
            icone:'📐',
            categorie:'Trigonométrie'
        },
        {
            id:'trigo_4',
            annee:'4e',
            titre:'Relation fondamentale',
            definition:'sin²(α)+cos²(α)=1',
            exemple:'Si sin(α)=0,6 → cos²(α)=0,64',
            icone:'⭕',
            categorie:'Trigonométrie'
        },
        {
            id:'trigo_5',
            annee:'4e',
            titre:'Conversion degré/radian',
            definition:'π rad=180°',
            exemple:'π/2 rad=90°',
            icone:'⭕',
            categorie:'Trigonométrie'
        },
        {
            id:'trigo_6',
            annee:'4e',
            titre:'Tangente',
            definition:'tan(α)=sin(α)/cos(α)',
            exemple:'tan(45°)=1',
            icone:'📐',
            categorie:'Trigonométrie'
        }
    ],


    // -----------------------------------------------------
    // FONCTIONS
    // -----------------------------------------------------

    fonctions:[
        {
            id:'fonc_1',
            annee:'3e',
            titre:'Fonction affine',
            definition:'f(x)=ax+b',
            exemple:'f(x)=2x+3',
            icone:'📈',
            categorie:'Fonctions'
        },
        {
            id:'fonc_2',
            annee:'3e',
            titre:'Zéro d’une fonction affine',
            definition:'ax+b=0 → x=−b/a',
            exemple:'2x−8=0 → x=4',
            icone:'📈',
            categorie:'Fonctions'
        },
        {
            id:'fonc_3',
            annee:'4e',
            titre:'Fonction carré',
            definition:'f(x)=x²',
            exemple:'f(3)=9',
            icone:'📈',
            categorie:'Fonctions'
        },
        {
            id:'fonc_4',
            annee:'4e',
            titre:'Fonction inverse',
            definition:'f(x)=1/x',
            exemple:'f(2)=1/2',
            icone:'📈',
            categorie:'Fonctions'
        },
        {
            id:'fonc_5',
            annee:'4e',
            titre:'Forme canonique',
            definition:'f(x)=a(x−h)²+k',
            exemple:'Sommet S(h,k)',
            icone:'📈',
            categorie:'Fonctions'
        }
    ],


    // -----------------------------------------------------
    // VECTEURS
    // -----------------------------------------------------

    vecteurs:[
        {
            id:'vec_1',
            annee:'4e',
            titre:'Coordonnées d’un vecteur',
            definition:'AB⃗=(xB−xA ; yB−yA)',
            exemple:'A(2,3), B(7,5) → AB⃗=(5,2)',
            icone:'➡️',
            categorie:'Vecteurs'
        },
        {
            id:'vec_2',
            annee:'4e',
            titre:'Relation de Chasles',
            definition:'AB⃗+BC⃗=AC⃗',
            exemple:'Décomposer un déplacement.',
            icone:'➡️',
            categorie:'Vecteurs'
        },
        {
            id:'vec_3',
            annee:'4e',
            titre:'Produit scalaire',
            definition:'u·v=||u||×||v||×cos(α)',
            exemple:'u·v=0 → vecteurs orthogonaux',
            icone:'➡️',
            categorie:'Vecteurs'
        }
    ],


    // -----------------------------------------------------
    // STATISTIQUES
    // -----------------------------------------------------

    statistiques:[
        {
            id:'stat_1',
            annee:'4e',
            titre:'Moyenne',
            definition:'x̄=Σxᵢ/n',
            exemple:'(4+6+8)/3=6',
            icone:'📊',
            categorie:'Statistiques'
        },
        {
            id:'stat_2',
            annee:'4e',
            titre:'Médiane',
            definition:'Valeur centrale d’une série ordonnée',
            exemple:'2,4,7,9,12 → médiane=7',
            icone:'📊',
            categorie:'Statistiques'
        },
        {
            id:'stat_3',
            annee:'4e',
            titre:'Variance',
            definition:'V=Σ(xᵢ−x̄)²/n',
            exemple:'Mesure la dispersion autour de la moyenne.',
            icone:'📊',
            categorie:'Statistiques'
        },
        {
            id:'stat_4',
            annee:'4e',
            titre:'Écart-type',
            definition:'σ=√V',
            exemple:'Plus σ est grand, plus la dispersion est importante.',
            icone:'📊',
            categorie:'Statistiques'
        }
    ],


    // -----------------------------------------------------
    // ANALYSE
    // -----------------------------------------------------

    analyse:[
        {
            id:'ana_1',
            annee:'5e',
            titre:'Dérivée d’une puissance',
            definition:"(xⁿ)'=n×xⁿ⁻¹",
            exemple:"(x³)'=3x²",
            icone:'📈',
            categorie:'Analyse'
        },
        {
            id:'ana_2',
            annee:'5e',
            titre:'Nombre dérivé',
            definition:"f'(a)=pente de la tangente en a",
            exemple:'Permet de déterminer la pente instantanée.',
            icone:'📈',
            categorie:'Analyse'
        },
        {
            id:'ana_3',
            annee:'6e',
            titre:'Dérivée d’un produit',
            definition:"(uv)'=u'v+uv'",
            exemple:'Règle du produit.',
            icone:'📈',
            categorie:'Analyse'
        },
        {
            id:'ana_4',
            annee:'6e',
            titre:'Intégrale définie',
            definition:'∫ₐᵇf(x)dx=F(b)−F(a)',
            exemple:'Permet de calculer une aire algébrique.',
            icone:'∫',
            categorie:'Analyse'
        }
    ],


    // -----------------------------------------------------
    // SUITES
    // -----------------------------------------------------

    suites:[
        {
            id:'suite_1',
            annee:'6e',
            titre:'Suite arithmétique',
            definition:'uₙ=u₀+n×r',
            exemple:'u₀=2,r=3 → u₅=17',
            icone:'🔢',
            categorie:'Suites'
        },
        {
            id:'suite_2',
            annee:'6e',
            titre:'Suite géométrique',
            definition:'uₙ=u₀×qⁿ',
            exemple:'u₀=1,q=2 → u₅=32',
            icone:'🔢',
            categorie:'Suites'
        }
    ],


    // -----------------------------------------------------
    // PROBABILITES
    // -----------------------------------------------------

    probabilites:[
        {
            id:'proba_1',
            annee:'6e',
            titre:'Probabilité conditionnelle',
            definition:'P(A|B)=P(A∩B)/P(B)',
            exemple:'Probabilité de A sachant B.',
            icone:'🎲',
            categorie:'Probabilités'
        },
        {
            id:'proba_2',
            annee:'6e',
            titre:'Indépendance',
            definition:'P(A∩B)=P(A)×P(B)',
            exemple:'Condition d’indépendance.',
            icone:'🎲',
            categorie:'Probabilités'
        },
        {
            id:'proba_3',
            annee:'6e',
            titre:'Loi binomiale',
            definition:'P(X=k)=C(n,k)pᵏ(1−p)ⁿ⁻ᵏ',
            exemple:'Nombre de succès dans n essais.',
            icone:'🎲',
            categorie:'Probabilités'
        }
    ],


    // -----------------------------------------------------
    // COMPLEXES
    // -----------------------------------------------------

    complexes:[
        {
            id:'comp_1',
            annee:'5e',
            titre:'Unité imaginaire',
            definition:'i²=−1',
            exemple:'Base des nombres complexes.',
            icone:'ℂ',
            categorie:'Nombres complexes'
        },
        {
            id:'comp_2',
            annee:'5e',
            titre:'Module',
            definition:'|z|=√(a²+b²)',
            exemple:'|3+4i|=5',
            icone:'ℂ',
            categorie:'Nombres complexes'
        }
    ],


    // -----------------------------------------------------
    // EXPONENTIELLES / LOGARITHMES
    // -----------------------------------------------------

    expoLog:[
        {
            id:'explog_1',
            annee:'6e',
            titre:'Exponentielle',
            definition:'eˣ⁺ʸ=eˣ×eʸ',
            exemple:'e²×e³=e⁵',
            icone:'📈',
            categorie:'Exponentielles / Logarithmes'
        },
        {
            id:'explog_2',
            annee:'6e',
            titre:'Logarithme',
            definition:'ln(ab)=ln(a)+ln(b)',
            exemple:'ln(6)=ln(2)+ln(3)',
            icone:'📈',
            categorie:'Exponentielles / Logarithmes'
        },
        {
            id:'explog_3',
            annee:'6e',
            titre:'Réciprocité',
            definition:'ln(eˣ)=x',
            exemple:'ln(e⁵)=5',
            icone:'📈',
            categorie:'Exponentielles / Logarithmes'
        }
    ]

};


// =========================================================
// COULEURS DES CATEGORIES
// =========================================================

var CAT_COLOR = {
    algebre:'--rouge',
    geometrie:'--bleu',
    trigonometrie:'--ambre',
    fonctions:'--bleu',
    analyse:'--violet',
    vecteurs:'--teal',
    statistiques:'--ambre',
    suites:'--teal',
    probabilites:'--ambre',
    complexes:'--vert',
    expoLog:'--violet'
};


var CAT_COLOR_LIGHT = {
    algebre:'--rouge-clair',
    geometrie:'--bleu-clair',
    trigonometrie:'--ambre-clair',
    fonctions:'--bleu-clair',
    analyse:'--violet-clair',
    vecteurs:'--teal-clair',
    statistiques:'--ambre-clair',
    suites:'--teal-clair',
    probabilites:'--ambre-clair',
    complexes:'--vert-clair',
    expoLog:'--violet-clair'
};


// =========================================================
// COULEURS DES ANNEES
// =========================================================

var ANNEE_COLOR = {
    '3e':{
        c:'#1c5fa8',
        l:'#e8f0fe'
    },

    '4e':{
        c:'#6b46c1',
        l:'#f1ebfb'
    },

    '5e':{
        c:'#0e7c86',
        l:'#e4f5f6'
    },

    '6e':{
        c:'#c81e2c',
        l:'#fdecea'
    }
};


// =========================================================
// DESCRIPTIONS DES ANNEES
// =========================================================

var ANNEE_DESC = {

    '3e':
        'Fonctions, Angles, Triangles isométriques, Triangles semblables, Pythagore, Thalès, Trigonométrie, Racines carrées, Polynômes, Équations, Systèmes…',

    '4e':
        'Fonctions de référence, Second degré, Factorisation, Vecteurs, Statistiques, Trigonométrie, Géométrie analytique, Géométrie de l’espace…',

    '5e':
        'Limites, Dérivées, Nombres complexes, Géométrie analytique, Statistiques à deux variables…',

    '6e':
        'Dérivées, Intégrales, Probabilités, Suites, Exponentielles, Logarithmes, Géométrie de l’espace…'
};


// =========================================================
// FIN DU FICHIER
// =========================================================
