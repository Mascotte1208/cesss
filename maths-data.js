// ============================================================
// CESS — MATHS
// Carnet de révision — 3e + 4e
// Basé sur les cours fournis
// ============================================================

const MATHS_CHAPITRES = {

    "3e": [

        // =====================================================
        // 3E — GÉOMÉTRIE
        // =====================================================

        {
            id: "3e_isometrie",
            titre: "Triangles isométriques",
            short: "Isométrie",
            desc: "Reconnaître, justifier et exploiter des triangles isométriques.",
            niveau: "3e",
            icone: "📐",
            categorie: "Géométrie",

            aSavoir: [
                "Deux figures sont isométriques lorsqu'elles sont superposables.",
                "Les côtés qui se superposent sont les côtés homologues.",
                "Les angles qui se superposent sont les angles homologues.",
                "Les sommets qui se superposent sont les sommets homologues.",
                "Deux triangles isométriques ont leurs côtés homologues de même longueur et leurs angles homologues de même amplitude."
            ],

            formules: [
                {
                    titre: "CCC",
                    formule: "Côté – Côté – Côté",
                    explication: "Si les trois côtés homologues de deux triangles ont la même longueur, les triangles sont isométriques."
                },
                {
                    titre: "CAC",
                    formule: "Côté – Angle – Côté",
                    explication: "Deux côtés homologues de même longueur et l'angle compris de même amplitude suffisent."
                },
                {
                    titre: "ACA",
                    formule: "Angle – Côté – Angle",
                    explication: "Un côté de même longueur, adjacent à deux angles homologues de même amplitude, suffit."
                },
                {
                    titre: "HA",
                    formule: "Hypoténuse – Angle aigu",
                    explication: "Pour deux triangles rectangles : même hypoténuse et même angle aigu."
                },
                {
                    titre: "HC",
                    formule: "Hypoténuse – Côté",
                    explication: "Pour deux triangles rectangles : même hypoténuse et même côté de l'angle droit."
                }
            ],

            methodes: [
                {
                    titre: "Prouver que deux triangles sont isométriques",
                    etapes: [
                        "Repérer les deux triangles concernés.",
                        "Lister les données connues.",
                        "Identifier un critère : CCC, CAC, ACA, HA ou HC.",
                        "Écrire clairement les égalités utilisées.",
                        "Conclure que les deux triangles sont isométriques.",
                        "En déduire l'égalité de côtés ou d'angles homologues."
                    ]
                }
            ],

            exemple: {
                question: "Deux triangles ont trois côtés homologues respectivement égaux. Que peut-on conclure ?",
                solution: "Ils sont isométriques par le critère CCC. On peut alors déduire que leurs angles homologues ont la même amplitude."
            },

            exercices: [
                {
                    question: "Quel critère utilise trois côtés homologues de même longueur ?",
                    options: ["CCC", "CAC", "ACA", "HA"],
                    correct: 0,
                    correction: "CCC signifie Côté-Côté-Côté."
                },
                {
                    question: "Dans le critère CAC, où doit se trouver l'angle ?",
                    options: [
                        "N'importe où",
                        "Entre les deux côtés considérés",
                        "Sur un troisième côté",
                        "Uniquement à 90°"
                    ],
                    correct: 1,
                    correction: "L'angle doit être compris entre les deux côtés homologues."
                },
                {
                    question: "Deux triangles rectangles ont même hypoténuse et même côté de l'angle droit. Quel critère ?",
                    options: ["CCC", "CAC", "HA", "HC"],
                    correct: 3,
                    correction: "C'est le critère HC : Hypoténuse-Côté."
                }
            ]
        },

        {
            id: "3e_semblables",
            titre: "Triangles semblables",
            short: "Similitude",
            desc: "Reconnaître des triangles semblables et utiliser les rapports de longueurs.",
            niveau: "3e",
            icone: "🔺",
            categorie: "Géométrie",

            aSavoir: [
                "Deux triangles semblables ont leurs angles homologues de même amplitude.",
                "Les côtés homologues sont proportionnels.",
                "Il faut toujours identifier correctement les côtés homologues.",
                "La similitude permet de calculer une longueur inconnue grâce à une proportion."
            ],

            formules: [
                {
                    titre: "Rapports de similitude",
                    formule: "AB/A'B' = AC/A'C' = BC/B'C'",
                    explication: "Les rapports des longueurs homologues sont égaux."
                },
                {
                    titre: "Coefficient de similitude",
                    formule: "k = longueur image / longueur originale",
                    explication: "Le même coefficient relie toutes les longueurs homologues."
                }
            ],

            methodes: [
                {
                    titre: "Calculer une longueur avec des triangles semblables",
                    etapes: [
                        "Identifier les deux triangles.",
                        "Identifier les côtés homologues.",
                        "Écrire un rapport de longueurs correspondant.",
                        "Construire une proportion.",
                        "Résoudre la proportion.",
                        "Vérifier que les unités sont cohérentes."
                    ]
                },
                {
                    titre: "Justifier que deux triangles sont semblables",
                    etapes: [
                        "Comparer les angles connus.",
                        "Utiliser les critères de similitude vus au cours.",
                        "Identifier les correspondances entre sommets.",
                        "En déduire les rapports de côtés homologues."
                    ]
                }
            ],

            exemple: {
                question: "Deux triangles semblables ont un coefficient de similitude 2. Un côté du premier mesure 4 cm. Combien mesure le côté homologue ?",
                solution: "4 × 2 = 8 cm."
            },

            exercices: [
                {
                    question: "Dans des triangles semblables, que peut-on dire des côtés homologues ?",
                    options: [
                        "Ils sont toujours égaux",
                        "Ils sont proportionnels",
                        "Ils sont perpendiculaires",
                        "Ils n'ont aucun rapport"
                    ],
                    correct: 1,
                    correction: "Les côtés homologues sont proportionnels."
                },
                {
                    question: "Si le coefficient de similitude vaut 3 et qu'un côté mesure 5 cm, le côté homologue mesure...",
                    options: ["8 cm", "15 cm", "2 cm", "25 cm"],
                    correct: 1,
                    correction: "5 × 3 = 15 cm."
                }
            ]
        },

        {
            id: "3e_thales",
            titre: "Théorème de Thalès",
            short: "Thalès",
            desc: "Utiliser les configurations de parallélisme et les rapports de longueurs.",
            niveau: "3e",
            icone: "📏",
            categorie: "Géométrie",

            aSavoir: [
                "Le théorème de Thalès s'utilise dans une configuration avec des droites parallèles.",
                "Il permet de mettre en relation des longueurs homologues.",
                "La rédaction doit préciser la configuration et le parallélisme utilisé."
            ],

            formules: [
                {
                    titre: "Rapport de Thalès",
                    formule: "AB/AC = AD/AE = BD/CE",
                    explication: "Dans la configuration correspondante, les rapports de longueurs homologues sont égaux."
                }
            ],

            methodes: [
                {
                    titre: "Calculer une longueur avec Thalès",
                    etapes: [
                        "Identifier les deux triangles concernés.",
                        "Repérer les droites parallèles.",
                        "Écrire les rapports de longueurs homologues.",
                        "Remplacer par les valeurs connues.",
                        "Résoudre la proportion.",
                        "Conclure avec l'unité."
                    ]
                }
            ],

            exemple: {
                question: "Une configuration de Thalès donne AB/AC = AD/AE. Si trois longueurs sont connues, comment trouver la quatrième ?",
                solution: "On remplace les longueurs connues dans la proportion puis on effectue un produit en croix."
            },

            exercices: [
                {
                    question: "Quelle information géométrique est essentielle pour appliquer Thalès ?",
                    options: [
                        "Des droites parallèles",
                        "Deux angles droits obligatoires",
                        "Un cercle",
                        "Deux côtés égaux"
                    ],
                    correct: 0,
                    correction: "Le parallélisme est l'élément clé de la configuration de Thalès."
                }
            ]
        },

        {
            id: "3e_angles",
            titre: "Angles et cercle",
            short: "Angles",
            desc: "Relations entre angles inscrits, angles au centre et angles associés.",
            niveau: "3e",
            icone: "⭕",
            categorie: "Géométrie",

            aSavoir: [
                "Des angles inscrits peuvent intercepter le même arc.",
                "Les angles au centre et les angles inscrits sont reliés par des propriétés spécifiques.",
                "Des relations entre angles permettent de calculer des amplitudes inconnues.",
                "Les angles à côtés perpendiculaires peuvent également être exploités."
            ],

            formules: [
                {
                    titre: "Angle inscrit",
                    formule: "Relations entre angles inscrits interceptant le même arc",
                    explication: "Deux angles inscrits interceptant le même arc ont la même amplitude."
                },
                {
                    titre: "Angle au centre / inscrit",
                    formule: "angle au centre = 2 × angle inscrit",
                    explication: "Lorsqu'ils interceptent le même arc."
                }
            ],

            methodes: [
                {
                    titre: "Calculer un angle dans un cercle",
                    etapes: [
                        "Repérer les angles concernés.",
                        "Identifier l'arc intercepté.",
                        "Déterminer s'il s'agit d'un angle inscrit ou au centre.",
                        "Appliquer la relation adaptée.",
                        "Conclure avec l'amplitude en degrés."
                    ]
                }
            ],

            exercices: [
                {
                    question: "Deux angles inscrits interceptent le même arc. Que peut-on dire ?",
                    options: [
                        "Ils sont supplémentaires",
                        "Ils ont la même amplitude",
                        "Ils sont toujours droits",
                        "Ils sont opposés"
                    ],
                    correct: 1,
                    correction: "Deux angles inscrits qui interceptent le même arc ont la même amplitude."
                }
            ]
        },

        {
            id: "3e_trigo",
            titre: "Trigonométrie",
            short: "Trigonométrie",
            desc: "Calculer des longueurs et des angles dans un triangle rectangle.",
            niveau: "3e",
            icone: "📐",
            categorie: "Trigonométrie",

            aSavoir: [
                "La trigonométrie relie les angles et les longueurs dans un triangle rectangle.",
                "Il faut identifier le côté opposé, le côté adjacent et l'hypoténuse par rapport à l'angle étudié.",
                "Le choix entre sinus, cosinus et tangente dépend des côtés connus et recherchés."
            ],

            formules: [
                {
                    titre: "Sinus",
                    formule: "sin(α) = opposé / hypoténuse",
                    explication: "À utiliser lorsque l'on travaille avec le côté opposé et l'hypoténuse."
                },
                {
                    titre: "Cosinus",
                    formule: "cos(α) = adjacent / hypoténuse",
                    explication: "À utiliser avec le côté adjacent et l'hypoténuse."
                },
                {
                    titre: "Tangente",
                    formule: "tan(α) = opposé / adjacent",
                    explication: "À utiliser avec les deux côtés de l'angle droit."
                }
            ],

            methodes: [
                {
                    titre: "Choisir la bonne relation",
                    etapes: [
                        "Repérer l'angle connu ou recherché.",
                        "Identifier les côtés opposé, adjacent et hypoténuse.",
                        "Regarder les deux longueurs disponibles.",
                        "Choisir sinus, cosinus ou tangente.",
                        "Écrire la relation.",
                        "Isoler l'inconnue.",
                        "Utiliser la calculatrice en mode degrés si nécessaire."
                    ]
                }
            ],

            exemple: {
                question: "Dans un triangle rectangle, on connaît l'hypoténuse et le côté opposé à α. Quelle relation utiliser ?",
                solution: "Le sinus : sin(α) = opposé / hypoténuse."
            },

            exercices: [
                {
                    question: "sin(α) correspond à...",
                    options: [
                        "adjacent / hypoténuse",
                        "opposé / hypoténuse",
                        "opposé / adjacent",
                        "hypoténuse / opposé"
                    ],
                    correct: 1,
                    correction: "sin(α) = côté opposé / hypoténuse."
                },
                {
                    question: "cos(α) correspond à...",
                    options: [
                        "adjacent / hypoténuse",
                        "opposé / hypoténuse",
                        "opposé / adjacent",
                        "hypoténuse / adjacent"
                    ],
                    correct: 0,
                    correction: "cos(α) = côté adjacent / hypoténuse."
                },
                {
                    question: "tan(α) correspond à...",
                    options: [
                        "opposé / hypoténuse",
                        "adjacent / hypoténuse",
                        "opposé / adjacent",
                        "hypoténuse / adjacent"
                    ],
                    correct: 2,
                    correction: "tan(α) = côté opposé / côté adjacent."
                }
            ]
        },

        // =====================================================
        // 3E — ALGÈBRE
        // =====================================================

        {
            id: "3e_racines",
            titre: "Racines carrées et racines cubiques",
            short: "Racines",
            desc: "Manipuler, simplifier et calculer avec les radicaux.",
            niveau: "3e",
            icone: "√",
            categorie: "Algèbre",

            aSavoir: [
                "La racine carrée d'un nombre positif est le nombre positif dont le carré donne ce nombre.",
                "Pour simplifier une racine, on recherche un carré parfait dans le radicande.",
                "Les propriétés des radicaux permettent de transformer certaines expressions.",
                "La racine cubique de a est le nombre dont le cube vaut a."
            ],

            formules: [
                {
                    titre: "Racine carrée",
                    formule: "√(a²) = |a|",
                    explication: "La racine carrée est toujours positive ou nulle."
                },
                {
                    titre: "Produit",
                    formule: "√(ab) = √a × √b",
                    explication: "Pour des nombres auxquels cette propriété s'applique."
                },
                {
                    titre: "Racine cubique",
                    formule: "∛a × ∛a × ∛a = a",
                    explication: "Définition de la racine cubique."
                },
                {
                    titre: "Produit — racines cubiques",
                    formule: "∛(ab) = ∛a × ∛b",
                    explication: "Propriété présentée dans le cours."
                }
            ],

            methodes: [
                {
                    titre: "Simplifier une racine carrée",
                    etapes: [
                        "Décomposer le nombre sous la racine.",
                        "Chercher le plus grand carré parfait possible.",
                        "Séparer la racine.",
                        "Extraire la racine du carré parfait.",
                        "Laisser le reste sous le radical."
                    ]
                }
            ],

            exemple: {
                question: "Simplifier √75.",
                solution: "75 = 25 × 3, donc √75 = √25 × √3 = 5√3."
            },

            exercices: [
                {
                    question: "Quel carré parfait peut-on extraire de √75 ?",
                    options: ["3", "5", "25", "75"],
                    correct: 2,
                    correction: "75 = 25 × 3 et 25 est un carré parfait."
                },
                {
                    question: "Que signifie ∛27 ?",
                    options: ["3", "9", "27²", "1/3"],
                    correct: 0,
                    correction: "3³ = 27, donc ∛27 = 3."
                }
            ]
        },

        {
            id: "3e_polynomes",
            titre: "Polynômes et factorisation",
            short: "Polynômes",
            desc: "Développer, factoriser et reconnaître les identités remarquables.",
            niveau: "3e",
            icone: "🔢",
            categorie: "Algèbre",

            aSavoir: [
                "Factoriser consiste à transformer une somme ou différence en produit.",
                "Il faut rechercher un facteur commun avant d'utiliser une identité remarquable.",
                "Les identités remarquables sont des outils de développement et de factorisation.",
                "La règle du produit nul permet ensuite de résoudre certaines équations."
            ],

            formules: [
                {
                    titre: "Carré d'une somme",
                    formule: "(a+b)² = a² + 2ab + b²",
                    explication: "Première identité remarquable."
                },
                {
                    titre: "Carré d'une différence",
                    formule: "(a-b)² = a² - 2ab + b²",
                    explication: "Deuxième identité remarquable."
                },
                {
                    titre: "Différence de carrés",
                    formule: "a²-b² = (a-b)(a+b)",
                    explication: "Troisième identité remarquable."
                },
                {
                    titre: "Produit nul",
                    formule: "A × B = 0 ⇔ A = 0 ou B = 0",
                    explication: "Permet de résoudre une équation factorisée."
                }
            ],

            methodes: [
                {
                    titre: "Factoriser par facteur commun",
                    etapes: [
                        "Chercher ce qui est commun aux termes.",
                        "Mettre le facteur commun devant une parenthèse.",
                        "Écrire ce qui reste dans la parenthèse.",
                        "Vérifier en développant."
                    ]
                },
                {
                    titre: "Factoriser avec une identité remarquable",
                    etapes: [
                        "Reconnaître la forme de l'expression.",
                        "Identifier a et b.",
                        "Choisir l'identité remarquable.",
                        "Écrire la forme factorisée."
                    ]
                }
            ],

            exemple: {
                question: "Factoriser x² - 9.",
                solution: "x² - 9 = x² - 3² = (x-3)(x+3)."
            },

            exercices: [
                {
                    question: "Quelle identité correspond à a²-b² ?",
                    options: [
                        "(a-b)²",
                        "(a+b)²",
                        "(a-b)(a+b)",
                        "a²+2ab+b²"
                    ],
                    correct: 2,
                    correction: "a²-b² = (a-b)(a+b)."
                },
                {
                    question: "Si A × B = 0, alors...",
                    options: [
                        "A = B",
                        "A = 0 ou B = 0",
                        "A+B = 0",
                        "A et B sont positifs"
                    ],
                    correct: 1,
                    correction: "C'est la règle du produit nul."
                }
            ]
        },

        // =====================================================
        // 3E — FONCTIONS
        // =====================================================

        {
            id: "3e_fonctions",
            titre: "Approche graphique d'une fonction",
            short: "Fonctions",
            desc: "Lire, interpréter et exploiter une fonction à partir d'un graphique, tableau ou formule.",
            niveau: "3e",
            icone: "📈",
            categorie: "Analyse",

            aSavoir: [
                "Une fonction associe à un antécédent une image.",
                "f(2)=3 signifie que l'image de 2 est 3.",
                "Le domaine est l'ensemble des valeurs de x pour lesquelles la fonction est définie.",
                "L'ensemble image rassemble les valeurs obtenues par la fonction.",
                "Un zéro est une valeur de x telle que f(x)=0.",
                "L'ordonnée à l'origine correspond à f(0).",
                "Une fonction peut être croissante, décroissante ou constante sur un intervalle."
            ],

            formules: [
                {
                    titre: "Image",
                    formule: "y = f(x)",
                    explication: "y est l'image de l'antécédent x."
                },
                {
                    titre: "Zéro",
                    formule: "f(x) = 0",
                    explication: "Les zéros correspondent graphiquement aux intersections avec l'axe des abscisses."
                },
                {
                    titre: "Ordonnée à l'origine",
                    formule: "f(0)",
                    explication: "C'est la valeur lue sur l'axe des ordonnées lorsque x=0."
                }
            ],

            methodes: [
                {
                    titre: "Lire une image sur un graphique",
                    etapes: [
                        "Partir de l'antécédent sur l'axe des x.",
                        "Monter ou descendre jusqu'au graphique.",
                        "Rejoindre l'axe des y.",
                        "Lire l'image."
                    ]
                },
                {
                    titre: "Trouver un zéro",
                    etapes: [
                        "Repérer les intersections de la courbe avec l'axe des abscisses.",
                        "Lire les abscisses de ces points.",
                        "Ces abscisses sont les zéros."
                    ]
                },
                {
                    titre: "Déterminer le signe",
                    etapes: [
                        "Repérer les zéros.",
                        "Observer les portions de courbe au-dessus de l'axe des x.",
                        "Observer les portions sous l'axe des x.",
                        "Écrire les intervalles où f(x)>0, f(x)<0 ou f(x)=0."
                    ]
                }
            ],

            exemple: {
                question: "Que signifie f(2)=3 ?",
                solution: "L'image de 2 par la fonction f est 3."
            },

            exercices: [
                {
                    question: "Que signifie f(2)=3 ?",
                    options: [
                        "L'image de 2 est 3",
                        "L'antécédent de 3 est 2 uniquement",
                        "Le domaine est 3",
                        "La fonction vaut toujours 3"
                    ],
                    correct: 0,
                    correction: "f(2)=3 signifie que l'image de 2 est 3."
                },
                {
                    question: "Graphiquement, un zéro est...",
                    options: [
                        "Une intersection avec l'axe des ordonnées",
                        "Une intersection avec l'axe des abscisses",
                        "Le sommet",
                        "Le point le plus haut"
                    ],
                    correct: 1,
                    correction: "Un zéro correspond à f(x)=0, donc à l'axe des abscisses."
                }
            ]
        },

        {
            id: "3e_premier_degre",
            titre: "Fonction du premier degré",
            short: "Premier degré",
            desc: "Comprendre y = mx + p, pente, ordonnée à l'origine, signe et variations.",
            niveau: "3e",
            icone: "📊",
            categorie: "Analyse",

            aSavoir: [
                "Une fonction du premier degré s'écrit f(x)=mx+p.",
                "m est le taux d'accroissement, aussi appelé pente de la droite.",
                "p est l'ordonnée à l'origine.",
                "Si m>0, la fonction est croissante.",
                "Si m<0, la fonction est décroissante.",
                "Si m=0, la fonction est constante.",
                "Si p=0, f(x)=mx est une fonction linéaire.",
                "Si p≠0, on parle de fonction affine."
            ],

            formules: [
                {
                    titre: "Forme générale",
                    formule: "f(x)=mx+p",
                    explication: "m est le taux d'accroissement et p l'ordonnée à l'origine."
                },
                {
                    titre: "Zéro",
                    formule: "x₀ = -p/m",
                    explication: "Pour une fonction du premier degré avec m≠0."
                },
                {
                    titre: "Ordonnée à l'origine",
                    formule: "f(0)=p",
                    explication: "Le point d'intersection avec l'axe des ordonnées est (0,p)."
                },
                {
                    titre: "Taux d'accroissement",
                    formule: "m = (yB-yA)/(xB-xA)",
                    explication: "Calcul à partir de deux points de la droite."
                }
            ],

            methodes: [
                {
                    titre: "Déterminer m avec deux points",
                    etapes: [
                        "Choisir deux points A(xA,yA) et B(xB,yB).",
                        "Calculer Δy = yB-yA.",
                        "Calculer Δx = xB-xA.",
                        "Calculer m = Δy/Δx.",
                        "Utiliser ensuite un point pour trouver p."
                    ]
                },
                {
                    titre: "Trouver le zéro",
                    etapes: [
                        "Poser f(x)=0.",
                        "Écrire mx+p=0.",
                        "Isoler mx.",
                        "Obtenir x=-p/m."
                    ]
                }
            ],

            exemple: {
                question: "Pour f(x)=3x-2, déterminer l'ordonnée à l'origine et le zéro.",
                solution: "p=-2. Le zéro vérifie 3x-2=0, donc x=2/3."
            },

            exercices: [
                {
                    question: "Dans f(x)=3x-2, quelle est la valeur de m ?",
                    options: ["-2", "2", "3", "5"],
                    correct: 2,
                    correction: "Dans mx+p, m est le coefficient de x : m=3."
                },
                {
                    question: "Une fonction du premier degré est croissante si...",
                    options: ["m<0", "m>0", "p<0", "p>0"],
                    correct: 1,
                    correction: "Elle est croissante lorsque m>0."
                },
                {
                    question: "L'ordonnée à l'origine de f(x)=mx+p vaut...",
                    options: ["m", "p", "-p/m", "0"],
                    correct: 1,
                    correction: "f(0)=p."
                }
            ]
        },

        {
            id: "3e_systemes",
            titre: "Systèmes de deux équations",
            short: "Systèmes",
            desc: "Résoudre et interpréter graphiquement des systèmes à deux inconnues.",
            niveau: "3e",
            icone: "🧩",
            categorie: "Algèbre",

            aSavoir: [
                "Un système associe deux équations à deux inconnues.",
                "Une solution doit vérifier les deux équations.",
                "Graphiquement, la solution correspond au point d'intersection des deux droites lorsqu'il existe.",
                "Les systèmes peuvent modéliser des situations concrètes."
            ],

            formules: [
                {
                    titre: "Interprétation graphique",
                    formule: "f(x)=g(x)",
                    explication: "Résoudre f(x)=g(x), c'est chercher les abscisses des points communs aux deux graphiques."
                }
            ],

            methodes: [
                {
                    titre: "Résoudre un système",
                    etapes: [
                        "Identifier les deux équations.",
                        "Choisir une méthode adaptée.",
                        "Trouver x et y.",
                        "Vérifier les deux valeurs dans les deux équations.",
                        "Présenter la solution sous forme de couple."
                    ]
                },
                {
                    titre: "Résolution graphique",
                    etapes: [
                        "Tracer les deux fonctions.",
                        "Repérer leur point d'intersection.",
                        "Lire ses coordonnées.",
                        "Vérifier si une précision supplémentaire est nécessaire."
                    ]
                }
            ],

            exercices: [
                {
                    question: "Graphiquement, une solution de deux fonctions correspond à...",
                    options: [
                        "Un point de l'axe x",
                        "Un point d'intersection des deux graphiques",
                        "L'ordonnée à l'origine",
                        "Un zéro uniquement"
                    ],
                    correct: 1,
                    correction: "La solution correspond au point commun aux deux représentations."
                }
            ]
        }
    ],

    // =========================================================
    // 4E
    // =========================================================

    "4e": [

        {
            id: "4e_fonctions_reference",
            titre: "Fonctions de référence",
            short: "Fonctions de référence",
            desc: "Reconnaître les fonctions usuelles, leurs graphiques et leurs transformations.",
            niveau: "4e",
            icone: "📈",
            categorie: "Analyse",

            aSavoir: [
                "Une fonction de référence sert de modèle pour étudier une famille de fonctions.",
                "Le cours étudie notamment x, x², √x, x³, ∛x, 1/x et |x|.",
                "Certaines fonctions sont réciproques : x² et √x dans le cadre étudié, ainsi que x³ et ∛x.",
                "Les transformations permettent de déplacer ou modifier les graphiques.",
                "On peut interpréter croissance, décroissance, extremum et parité graphiquement."
            ],

            fonctions: [
                "f(x)=x",
                "f(x)=x²",
                "f(x)=√x",
                "f(x)=x³",
                "f(x)=∛x",
                "f(x)=1/x",
                "f(x)=|x|"
            ],

            formules: [
                {
                    titre: "Fonction identité",
                    formule: "f(x)=x",
                    explication: "Chaque nombre est envoyé sur lui-même."
                },
                {
                    titre: "Fonction carré",
                    formule: "f(x)=x²",
                    explication: "La courbe est une parabole."
                },
                {
                    titre: "Fonction racine",
                    formule: "f(x)=√x",
                    explication: "Elle est définie pour x≥0 dans les réels."
                },
                {
                    titre: "Fonction cube",
                    formule: "f(x)=x³",
                    explication: "Elle est liée à la racine cubique."
                },
                {
                    titre: "Fonction inverse",
                    formule: "f(x)=1/x",
                    explication: "Elle n'est pas définie en x=0."
                },
                {
                    titre: "Valeur absolue",
                    formule: "f(x)=|x|",
                    explication: "Elle mesure la distance de x à 0."
                }
            ],

            transformations: [
                {
                    titre: "Translation horizontale",
                    exemple: "g(x)=f(x+k)",
                    idee: "Modification horizontale du graphique."
                },
                {
                    titre: "Translation verticale",
                    exemple: "g(x)=f(x)+k",
                    idee: "Modification verticale du graphique."
                }
            ],

            methodes: [
                {
                    titre: "Identifier une fonction de référence",
                    etapes: [
                        "Observer la forme du graphique.",
                        "Comparer avec les graphiques connus.",
                        "Vérifier le domaine.",
                        "Vérifier les propriétés caractéristiques.",
                        "Associer le graphique à l'expression."
                    ]
                },
                {
                    titre: "Étudier une transformation",
                    etapes: [
                        "Partir de la fonction de référence.",
                        "Identifier la modification dans l'expression.",
                        "Déterminer le déplacement ou la transformation.",
                        "Tracer le nouveau graphique."
                    ]
                }
            ],

            exercices: [
                {
                    question: "Quelle fonction a pour expression 1/x ?",
                    options: [
                        "Fonction carré",
                        "Fonction inverse",
                        "Fonction identité",
                        "Fonction cube"
                    ],
                    correct: 1,
                    correction: "f(x)=1/x est la fonction inverse."
                },
                {
                    question: "Quelle fonction est définie par f(x)=x² ?",
                    options: [
                        "Fonction carré",
                        "Fonction cube",
                        "Fonction inverse",
                        "Valeur absolue"
                    ],
                    correct: 0,
                    correction: "x² est la fonction carré."
                }
            ]
        },

        {
            id: "4e_trigonometrie",
            titre: "Trigonométrie",
            short: "Trigonométrie",
            desc: "Approfondir les relations trigonométriques et leurs applications.",
            niveau: "4e",
            icone: "📐",
            categorie: "Trigonométrie",

            aSavoir: [
                "La trigonométrie établit un lien entre angles et longueurs.",
                "Elle peut être reliée aux triangles semblables.",
                "Les relations sinus, cosinus et tangente permettent de calculer des longueurs ou des angles.",
                "Ces outils permettent notamment de traiter des distances difficiles à mesurer directement."
            ],

            formules: [
                {
                    titre: "Sinus",
                    formule: "sin(α)=opposé/hypoténuse",
                    explication: "Relation trigonométrique."
                },
                {
                    titre: "Cosinus",
                    formule: "cos(α)=adjacent/hypoténuse",
                    explication: "Relation trigonométrique."
                },
                {
                    titre: "Tangente",
                    formule: "tan(α)=opposé/adjacent",
                    explication: "Relation trigonométrique."
                }
            ],

            methodes: [
                {
                    titre: "Calculer une longueur",
                    etapes: [
                        "Faire un schéma.",
                        "Identifier l'angle.",
                        "Identifier les côtés connus.",
                        "Choisir la relation trigonométrique.",
                        "Remplacer par les valeurs.",
                        "Isoler l'inconnue."
                    ]
                },
                {
                    titre: "Calculer un angle",
                    etapes: [
                        "Écrire la relation trigonométrique.",
                        "Calculer le rapport de longueurs.",
                        "Utiliser la fonction réciproque correspondante sur la calculatrice.",
                        "Donner l'angle dans l'unité demandée."
                    ]
                }
            ],

            exercices: [
                {
                    question: "La tangente utilise quels deux côtés ?",
                    options: [
                        "Opposé et hypoténuse",
                        "Adjacent et hypoténuse",
                        "Opposé et adjacent",
                        "Deux hypoténuses"
                    ],
                    correct: 2,
                    correction: "tan(α)=opposé/adjacent."
                }
            ]
        },

        {
            id: "4e_stats",
            titre: "Statistique descriptive à une variable",
            short: "Statistiques",
            desc: "Décrire, représenter et interpréter une série statistique.",
            niveau: "4e",
            icone: "📊",
            categorie: "Statistiques",

            aSavoir: [
                "La statistique descriptive sert à synthétiser, décrire, présenter et interpréter des données.",
                "On distingue différents types de caractères statistiques.",
                "Les indicateurs de position permettent de situer le centre d'une série.",
                "Les indicateurs de dispersion permettent d'étudier l'étalement des données.",
                "Les graphiques permettent de représenter et d'extraire des informations.",
                "L'inégalité de Tchebychev peut être utilisée pour encadrer une proportion de données."
            ],

            vocabulaire: [
                "Population",
                "Individu",
                "Caractère statistique",
                "Modalité",
                "Effectif",
                "Fréquence",
                "Série statistique"
            ],

            indicateurs: [
                "Moyenne",
                "Médiane",
                "Quartiles",
                "Indicateurs de dispersion",
                "Écart-type"
            ],

            formules: [
                {
                    titre: "Moyenne simple",
                    formule: "x̄=(x₁+x₂+...+xₙ)/n",
                    explication: "Somme des valeurs divisée par le nombre de valeurs."
                },
                {
                    titre: "Moyenne pondérée",
                    formule: "x̄=Σ(nᵢxᵢ)/Σnᵢ",
                    explication: "Chaque valeur est pondérée par son effectif."
                },
                {
                    titre: "Étendue",
                    formule: "Étendue = maximum - minimum",
                    explication: "Mesure simple de dispersion."
                },
                {
                    titre: "Variance",
                    formule: "V = moyenne des carrés des écarts à la moyenne",
                    explication: "Mesure de dispersion autour de la moyenne."
                },
                {
                    titre: "Écart-type",
                    formule: "σ = √V",
                    explication: "Racine carrée de la variance."
                }
            ],

            methodes: [
                {
                    titre: "Calculer une moyenne pondérée",
                    etapes: [
                        "Multiplier chaque valeur par son effectif.",
                        "Additionner les produits.",
                        "Additionner les effectifs.",
                        "Diviser la première somme par la seconde."
                    ]
                },
                {
                    titre: "Interpréter un indicateur",
                    etapes: [
                        "Identifier l'indicateur utilisé.",
                        "Regarder son unité.",
                        "Comparer les valeurs si nécessaire.",
                        "Relier le résultat au contexte."
                    ]
                },
                {
                    titre: "Choisir un graphique",
                    etapes: [
                        "Identifier le type de caractère.",
                        "Choisir une représentation adaptée.",
                        "Construire correctement les axes et les unités.",
                        "Ajouter les informations nécessaires à la lecture."
                    ]
                }
            ],

            exercices: [
                {
                    question: "La statistique descriptive sert notamment à...",
                    options: [
                        "Synthétiser et interpréter des données",
                        "Résoudre uniquement des équations",
                        "Construire uniquement des triangles",
                        "Calculer uniquement des angles"
                    ],
                    correct: 0,
                    correction: "Elle sert à synthétiser, décrire, présenter et interpréter des données."
                },
                {
                    question: "L'étendue d'une série vaut...",
                    options: [
                        "maximum + minimum",
                        "maximum - minimum",
                        "moyenne - médiane",
                        "quartile 3 - moyenne"
                    ],
                    correct: 1,
                    correction: "Étendue = maximum - minimum."
                },
                {
                    question: "L'écart-type est lié à...",
                    options: [
                        "La dispersion",
                        "Uniquement à la médiane",
                        "Uniquement au maximum",
                        "La géométrie"
                    ],
                    correct: 0,
                    correction: "L'écart-type est un indicateur de dispersion."
                }
            ]
        }
    ]
};


// ============================================================
// COMPATIBILITÉ AVEC L'ANCIEN SITE
// ============================================================

const CHAPITRES = MATHS_CHAPITRES;


// ============================================================
// FORMULES — générées automatiquement depuis les chapitres
// ============================================================

const FORMULES_DATA = {};

MATHS_CHAPITRES["3e"].concat(MATHS_CHAPITRES["4e"]).forEach(chapitre => {

    if (!chapitre.formules) return;

    chapitre.formules.forEach((f, index) => {

        const categorie = chapitre.categorie || "Autres";

        if (!FORMULES_DATA[categorie]) {
            FORMULES_DATA[categorie] = [];
        }

        FORMULES_DATA[categorie].push({
            id: `${chapitre.id}_formule_${index}`,
            titre: f.titre,
            definition: f.formule,
            formule: f.formule,
            explication: f.explication || "",
            exemple: chapitre.exemple ? chapitre.exemple.solution : "",
            chapitreId: chapitre.id,
            chapitre: chapitre.titre,
            niveau: chapitre.niveau,
            icone: chapitre.icone || "📘",
            categorie
        });
    });
});


// ============================================================
// COULEURS / INFOS
// ============================================================

const MATHS_CATEGORIES = {
    "Algèbre": "🔢",
    "Géométrie": "📐",
    "Trigonométrie": "📐",
    "Analyse": "📈",
    "Statistiques": "📊"
};

const CAT_COLOR = {
    "Algèbre": "#e53e3e",
    "Géométrie": "#805ad5",
    "Trigonométrie": "#dd6b20",
    "Analyse": "#3182ce",
    "Statistiques": "#38a169"
};

const CAT_COLOR_LIGHT = {
    "Algèbre": "#fff5f5",
    "Géométrie": "#faf5ff",
    "Trigonométrie": "#fffaf0",
    "Analyse": "#ebf8ff",
    "Statistiques": "#f0fff4"
};

const ANNEE_COLOR = {
    "3e": "#3182ce",
    "4e": "#805ad5"
};

const ANNEE_DESC = {
    "3e": "Géométrie, trigonométrie, algèbre et fonctions",
    "4e": "Fonctions de référence, trigonométrie et statistiques"
};
