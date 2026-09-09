// =========================================================
// DONNÉES MATHÉMATIQUES - CESS
// =========================================================
var CHAPITRES = {
    '3e': [
        {
            id:'3e_fonctions', titre:"1. Approche graphique d'une fonction",
            desc:'UAA3 — Comprendre les machines, les graphiques et les tableaux', niveau:'3e', icone:'📈', color:'#3182ce',
            cours:`<h4>C'est quoi une fonction ?</h4>
                <p>Une fonction est comme une <b>machine à transformer les nombres</b>. On introduit un nombre (x), la machine applique une règle, et un nombre sort (y ou f(x)).</p>
                <h4>Vocabulaire essentiel</h4>
                <ul>
                    <li><b>Antécédent (x)</b> : le nombre qui entre dans la machine.</li>
                    <li><b>Image (y ou f(x))</b> : le nombre qui sort.</li>
                    <li><b>Domaine (dom f)</b> : tous les x qu'on peut mettre dans la machine.</li>
                    <li><b>Ensemble image (Im f)</b> : tous les résultats possibles.</li>
                </ul>
                <h4>Lire un graphique</h4>
                <p><b>Zéro d'une fonction</b> : là où la courbe coupe l'axe des x (f(x) = 0). <b>Ordonnée à l'origine</b> : là où elle coupe l'axe des y (x = 0). Une courbe qui monte de gauche à droite est croissante, qui descend est décroissante.</p>`,
            objectifs:['Comprendre la notion de machine et de fonction','Lire une image et un antécédent sur un graphique','Distinguer une fonction d’une simple relation','Déterminer le domaine et l’ensemble image'],
            matieres:['Vocabulaire : antécédents, images','Lecture graphique (axe x, axe y)','Tableaux de valeurs et de variations','Fonction ou relation ?'],
            exercices:[
                {question:"Qu'est-ce qu'une fonction ?", options:['Une relation qui donne au plus une image par antécédent','Une relation qui donne plusieurs images','Une machine qui additionne','Un tableau de valeurs'], correct:0, correction:'Une fonction associe à chaque x au plus un seul y.'},
                {question:'Que signifie f(2) = 3 ?', options:["L'image de 2 est 3","L'antécédent de 2 est 3",'La fonction est croissante','Le domaine est [2,3]'], correct:0, correction:"f(2)=3 se lit : l'image de 2 par f est 3."},
                {question:"Comment trouve-t-on le zéro d'une fonction graphiquement ?", options:['Intersection avec l’axe des abscisses','Intersection avec l’axe des ordonnées','Le sommet de la courbe','Le point le plus bas'], correct:0, correction:'Le zéro est l’abscisse du point d’intersection avec l’axe des x.'}
            ]
        },
        {
            id:'3e_algebre_polynomes', titre:'2. Polynômes & Factorisation',
            desc:'UAA5 — Calculs, identités remarquables et méthodes de factorisation', niveau:'3e', icone:'🔢', color:'#e53e3e',
            cours:`<h4>C'est quoi un polynôme ?</h4>
                <p>Un polynôme est une somme de termes (ex : <b>2x² - 5x + 3</b>). Chaque terme est un produit d'un coefficient et d'une partie littérale.</p>
                <h4>Les produits remarquables</h4>
                <ul>
                    <li><b>(a + b)²</b> = a² + 2ab + b²</li>
                    <li><b>(a - b)²</b> = a² - 2ab + b²</li>
                    <li><b>a² - b²</b> = (a - b)(a + b)</li>
                </ul>
                <h4>Factoriser = transformer une somme en produit</h4>
                <p><b>Exemple :</b> 3x + 6 = 3(x + 2) — facteur commun 3.</p>
                <p><b>Méthode des rectangles :</b> pour x² + 5x + 6, on cherche deux nombres qui multipliés donnent 6 et additionnés donnent 5 : 2 et 3. Donc x² + 5x + 6 = (x + 2)(x + 3).</p>`,
            objectifs:['Maîtriser les produits remarquables','Factoriser une expression algébrique','Résoudre des équations grâce au produit nul'],
            matieres:['Identités remarquables','Mise en évidence','Méthode des rectangles','Règle du produit nul'],
            exercices:[
                {question:'Factoriser : x² - 9', options:['(x-3)(x+3)','(x-3)²','(x+3)²','x²-9'], correct:0, correction:'a² - b² = (a-b)(a+b)'},
                {question:'Factoriser : x² + 5x + 6', options:['(x+2)(x+3)','(x+1)(x+6)','(x-2)(x-3)','Impossible'], correct:0, correction:'2×3=6 et 2+3=5'}
            ]
        },
        {
            id:'3e_pythagore', titre:'3. Théorème de Pythagore',
            desc:'UAA2 — Le triangle rectangle et ses propriétés', niveau:'3e', icone:'📐', color:'#805ad5',
            cours:`<h4>Le théorème</h4>
                <p>Dans un triangle <b>rectangle</b>, le carré de l'hypoténuse (côté le plus long) est égal à la somme des carrés des deux autres côtés.</p>
                <p style="text-align:center;font-size:19px;"><b>a² + b² = c²</b></p>
                <h4>À quoi ça sert ?</h4>
                <p>À calculer une longueur inconnue. <b>Exemple :</b> côtés 3 et 4 → 3² + 4² = 25 → hypoténuse = √25 = 5.</p>
                <h4>Attention</h4>
                <p>La réciproque prouve qu'un triangle est rectangle : si a² + b² = c², le triangle est rectangle.</p>`,
            objectifs:['Utiliser le théorème pour calculer une longueur','Utiliser la réciproque pour prouver qu’un triangle est rectangle'],
            matieres:['Triangle rectangle, hypoténuse','Diagonale d’un carré','Nombres irrationnels (√2)'],
            exercices:[
                {question:'Quel est le théorème de Pythagore ?', options:['a² + b² = c²','a + b = c','a × b = c','a² = b² + c²'], correct:0, correction:'Dans un triangle rectangle, a² + b² = c²'},
                {question:"Quelle est la diagonale d'un carré de côté 1 ?", options:['√2','2','√3','1'], correct:0, correction:'d² = 1² + 1² = 2 → d = √2'}
            ]
        },
        {
            id:'3e_thales', titre:'4. Théorème de Thalès',
            desc:'UAA1 — Les projections parallèles et les proportions', niveau:'3e', icone:'📐', color:'#319795',
            cours:`<h4>Le théorème</h4>
                <p>Quand deux droites parallèles coupent deux droites sécantes, elles déterminent des segments de longueurs <b>proportionnelles</b>.</p>
                <p style="text-align:center;font-size:18px;"><b>AB / AC = AD / AE = BD / CE</b></p>
                <h4>À quoi ça sert ?</h4>
                <p>À calculer une longueur inconnue, ou une distance inaccessible (hauteur d'une pyramide grâce à son ombre).</p>
                <h4>La réciproque</h4>
                <p>Si AB/AC = AD/AE, alors les droites BD et CE sont parallèles.</p>`,
            objectifs:['Reconnaître une configuration de Thalès','Calculer une longueur grâce aux rapports','Partager un segment en parties égales'],
            matieres:['Projections parallèles','Proportions','Théorème des milieux'],
            exercices:[
                {question:'Dans une configuration de Thalès, si AB/AC = AD/AE, que peut-on en déduire ?', options:['BD // CE','AB // CD','AC // DE','AB // DE'], correct:0, correction:'D’après Thalès, BD // CE'}
            ]
        },
        {
            id:'3e_trigo_rect', titre:'5. Trigonométrie du triangle rectangle',
            desc:'UAA2 — Sinus, cosinus, tangente pour calculer des distances', niveau:'3e', icone:'📐', color:'#e88a00',
            cours:`<h4>Les 3 formules (SOH CAH TOA)</h4>
                <p>Pour un angle aigu α dans un triangle rectangle :</p>
                <ul>
                    <li><b>sin α</b> = opposé / hypoténuse</li>
                    <li><b>cos α</b> = adjacent / hypoténuse</li>
                    <li><b>tan α</b> = opposé / adjacent</li>
                </ul>
                <h4>Exemple concret</h4>
                <p>Pour la hauteur d'un arbre : Hauteur = Distance × tan(angle).</p>`,
            objectifs:['Identifier opposé, adjacent, hypoténuse','Choisir la bonne formule (sin, cos, tan)','Calculer un côté ou un angle'],
            matieres:['SOH CAH TOA','Distances inaccessibles','Pente et inclinaison'],
            exercices:[
                {question:'Que vaut sin(30°) ?', options:['0.5','0.707','1','0.866'], correct:0, correction:'sin(30°) = 1/2 = 0.5'}
            ]
        }
    ],

    '4e': [
        {
            id:'4e_polynomes_2deg', titre:'1. Équations du 2e degré',
            desc:'UAA5 — Discriminant, racines et paraboles', niveau:'4e', icone:'🔢', color:'#e53e3e',
            cours:`<h4>La forme générale</h4><p><b>ax² + bx + c = 0</b></p>
                <h4>Le discriminant Δ</h4><p><b>Δ = b² - 4ac</b></p>
                <ul><li>Δ > 0 : 2 solutions</li><li>Δ = 0 : 1 solution</li><li>Δ < 0 : aucune solution réelle</li></ul>
                <h4>Les solutions</h4><p>Si Δ ≥ 0 : <b>x = (-b ± √Δ) / 2a</b></p>`,
            objectifs:['Calculer le discriminant','Résoudre une équation du second degré','Étudier le signe d’un trinôme'],
            matieres:['Discriminant','Formule de résolution','Racines et sommet de la parabole'],
            exercices:[
                {question:'Quelle est la formule du discriminant Δ ?', options:['b² - 4ac','b² + 4ac','a² - 4bc','c² - 4ab'], correct:0, correction:'Δ = b² - 4ac'},
                {question:'Résoudre x² - 4 = 0', options:['x = 2 ou x = -2','x = 2','x = -2','x = 4'], correct:0, correction:'x² = 4 → x = ±2'}
            ]
        },
        {
            id:'4e_vecteurs', titre:'2. Calcul vectoriel',
            desc:'UAA3 — Vecteurs et produit scalaire', niveau:'4e', icone:'➡️', color:'#805ad5',
            cours:`<h4>Le produit scalaire</h4>
                <p>Le produit scalaire de deux vecteurs est un <b>nombre</b> : <b>u·v = ||u|| × ||v|| × cos(α)</b>.</p>
                <p>Si les vecteurs sont orthogonaux, leur produit scalaire vaut <b>0</b>.</p>`,
            objectifs:['Calculer un produit scalaire','Déterminer si deux vecteurs sont orthogonaux','Utiliser la relation de Chasles'],
            matieres:['Relation de Chasles','Produit scalaire géométrique','Applications physiques (travail, force)'],
            exercices:[
                {question:'Que représente le produit scalaire de deux vecteurs ?', options:['Un nombre réel','Un vecteur','Une distance','Un angle'], correct:0, correction:'Le produit scalaire est un nombre réel'},
                {question:'Que vaut le produit scalaire de deux vecteurs orthogonaux ?', options:['0','1','Le produit de leurs normes','-1'], correct:0, correction:'Il est nul.'}
            ]
        },
        {
            id:'4e_statistiques', titre:'3. Statistiques',
            desc:'UAA1 — Moyenne, médiane, variance et graphiques', niveau:'4e', icone:'📊', color:'#d69e2e',
            cours:`<h4>Paramètres de position</h4>
                <ul><li><b>Moyenne</b> : somme divisée par le nombre total.</li><li><b>Médiane</b> : valeur du milieu une fois rangées.</li><li><b>Mode</b> : valeur la plus fréquente.</li></ul>
                <h4>Paramètres de dispersion</h4>
                <ul><li><b>Variance (V)</b> : moyenne des carrés des écarts à la moyenne.</li><li><b>Écart-type (σ)</b> : racine carrée de la variance.</li></ul>
                <h4>Boîte à moustaches</h4><p>Elle visualise Q1, la médiane (Q2), Q3, ainsi que le min et le max.</p>`,
            objectifs:['Calculer moyenne, médiane, mode','Calculer variance et écart-type','Interpréter une boîte à moustaches'],
            matieres:['Tableaux de fréquences','Diagrammes, histogrammes','Quartiles et écart-type'],
            exercices:[
                {question:'Quelle est la médiane de 3, 5, 7, 9, 11 ?', options:['7','6','8','5'], correct:0, correction:'La valeur centrale est 7.'},
                {question:'Quelle est la moyenne de 4, 6, 8, 10, 12 ?', options:['8','7','9','6'], correct:0, correction:'(4+6+8+10+12)/5 = 8'}
            ]
        },
        {
            id:'4e_fonctions_ref', titre:'4. Fonctions de référence',
            desc:'UAA4 — Fonction affine, quadratique et leurs paramètres', niveau:'4e', icone:'📈', color:'#3182ce',
            cours:`<h4>La fonction affine</h4><p><b>f(x) = mx + p</b> : m est la pente (croissante si m>0), p est l’ordonnée à l’origine.</p>
                <h4>La fonction quadratique</h4><p><b>f(x) = a(x-k)² + h</b> : parabole de sommet (k, h). Si a>0, elle ouvre vers le haut.</p>
                <h4>Effet des paramètres</h4><p>Changer a, k ou h déplace ou déforme le graphique sans changer sa nature.</p>`,
            objectifs:['Reconnaître une fonction affine ou quadratique','Identifier pente et ordonnée à l’origine','Trouver le sommet d’une parabole'],
            matieres:['Fonction affine','Fonction quadratique','Forme canonique'],
            exercices:[
                {question:'Dans f(x) = 3x + 2, que représente 3 ?', options:['La pente','L’ordonnée à l’origine','Le sommet','Le discriminant'], correct:0, correction:'Dans mx+p, m est la pente.'}
            ]
        },
        {
            id:'4e_geo_espace', titre:'5. Géométrie dans l’espace',
            desc:'UAA2 — Représenter et construire dans l’espace', niveau:'4e', icone:'📦', color:'#38a169',
            cours:`<h4>Représenter l’espace sur une feuille</h4>
                <p>Deux techniques principales : la <b>perspective cavalière</b> (les droites parallèles restent parallèles, pratique pour les solides simples) et la <b>perspective centrale</b> (les lignes convergent vers un point de fuite, plus réaliste).</p>
                <h4>Positions relatives</h4>
                <ul>
                    <li><b>Deux droites</b> : sécantes, parallèles, ou <b>gauches</b> (ni sécantes ni parallèles — elles ne se croisent jamais mais ne sont pas dans un même plan).</li>
                    <li><b>Une droite et un plan</b> : la droite est incluse dans le plan, sécante au plan, ou parallèle au plan.</li>
                    <li><b>Deux plans</b> : sécants (leur intersection est une droite) ou parallèles.</li>
                </ul>
                <h4>Point de percée et section plane</h4>
                <p>Le <b>point de percée</b> d’une droite dans un plan est le point où la droite traverse ce plan. Une <b>section plane</b> est la figure obtenue en coupant un solide par un plan (ex : couper un cube donne un carré, un rectangle ou un triangle selon l’angle de coupe).</p>`,
            objectifs:['Représenter un objet de l’espace en perspective cavalière','Identifier les positions relatives de deux droites, de deux plans, d’une droite et d’un plan','Construire un point de percée ou une section plane simple'],
            matieres:['Perspective cavalière et perspective centrale','Positions relatives (droites, plans)','Point de percée et section plane'],
            exercices:[
                {question:'Deux droites de l’espace qui ne sont ni sécantes ni parallèles sont dites…', options:['Gauches','Orthogonales','Confondues','Coplanaires'], correct:0, correction:'On les appelle des droites gauches : elles ne se croisent jamais et ne sont pas dans un même plan.'},
                {question:'Que représente l’intersection de deux plans sécants ?', options:['Une droite','Un point','Un plan','Un segment'], correct:0, correction:'Deux plans sécants se coupent toujours suivant une droite.'},
                {question:'Dans quelle perspective les droites parallèles restent-elles parallèles sur le dessin ?', options:['La perspective cavalière','La perspective centrale','Les deux','Aucune des deux'], correct:0, correction:'C’est la propriété caractéristique de la perspective cavalière.'}
            ]
        },
        {
            id:'4e_trigo_cercle', titre:'6. Trigonométrie',
            desc:'UAA3 — Le cercle trigonométrique et ses relations', niveau:'4e', icone:'⭕', color:'#d69e2e',
            cours:`<h4>Le cercle trigonométrique</h4>
                <p>C’est un cercle de <b>rayon 1</b> centré à l’origine. Pour un angle α, le point correspondant sur le cercle a pour coordonnées <b>(cos α, sin α)</b>. Cela permet de définir sin, cos et tan pour n’importe quel angle, pas seulement dans un triangle rectangle.</p>
                <h4>La relation fondamentale</h4>
                <p style="text-align:center;font-size:19px;"><b>sin²(α) + cos²(α) = 1</b></p>
                <p>Et aussi : <b>tan(α) = sin(α) / cos(α)</b>.</p>
                <h4>Résoudre un triangle quelconque</h4>
                <ul>
                    <li><b>Aire d’un triangle</b> : Aire = (1/2) × a × b × sin(C), où C est l’angle entre les côtés a et b.</li>
                    <li><b>Relation des sinus</b> : a/sin(A) = b/sin(B) = c/sin(C).</li>
                    <li><b>Théorème d’Al-Kashi</b> (généralisation de Pythagore) : a² = b² + c² - 2bc·cos(A).</li>
                </ul>`,
            objectifs:['Placer un angle et ses nombres trigonométriques sur le cercle trigonométrique','Utiliser la relation fondamentale sin²+cos²=1','Calculer une aire, une longueur ou un angle dans un triangle quelconque'],
            matieres:['Cercle trigonométrique','Relation fondamentale et tan = sin/cos','Aire d’un triangle, relation des sinus, Al-Kashi'],
            exercices:[
                {question:'Que vaut sin²(α) + cos²(α) pour tout angle α ?', options:['1','0','2','Cela dépend de α'], correct:0, correction:'C’est la relation fondamentale de la trigonométrie : elle est toujours vraie.'},
                {question:'Si sin(α) = 0,6, que vaut cos²(α) ?', options:['0,64','0,36','0,4','1,36'], correct:0, correction:'cos²(α) = 1 - sin²(α) = 1 - 0,36 = 0,64'},
                {question:'Le théorème d’Al-Kashi généralise…', options:['Le théorème de Pythagore','Le théorème de Thalès','La relation des sinus','Le cercle trigonométrique'], correct:0, correction:'Quand l’angle A vaut 90°, cos(A)=0 et on retrouve a² = b² + c² : c’est Pythagore.'}
            ]
        }
    ],

    '5e': [
        {
            id:'5e_limites', titre:'1. Limites de fonctions',
            desc:"UAA1 — Comportement d'une fonction aux bornes de son domaine", niveau:'5e', icone:'📈', color:'#3182ce',
            cours:`<h4>L'idée intuitive</h4>
                <p>La limite décrit ce que devient f(x) quand x se rapproche d'une valeur (ou de l'infini), sans forcément l'atteindre.</p>
                <h4>Les formes indéterminées</h4>
                <p>Ce sont les cas où on ne peut pas conclure directement : <b>0/0</b>, <b>∞/∞</b>, <b>∞ - ∞</b>, <b>0 × ∞</b>. Il faut alors transformer l'expression (factoriser, simplifier) avant de conclure.</p>
                <h4>Asymptotes</h4>
                <p>Si lim f(x) = L quand x → ∞, la droite y = L est une <b>asymptote horizontale</b>. Si lim f(x) = ±∞ quand x → a, la droite x = a est une <b>asymptote verticale</b>.</p>`,
            objectifs:['Calculer une limite en un point ou en l’infini','Lever une forme indéterminée','Déterminer les asymptotes d’une fonction'],
            matieres:['Limites finies et infinies','Formes indéterminées','Asymptotes horizontales et verticales'],
            exercices:[
                {question:"Quelle est la limite de f(x) = 1/x quand x → +∞ ?", options:['0','+∞','1','Elle n’existe pas'], correct:0, correction:'1/x devient de plus en plus petit : la limite est 0.'},
                {question:'0/0 est une forme...', options:['Indéterminée','Toujours nulle','Toujours infinie','Impossible à rencontrer'], correct:0, correction:'0/0 ne permet pas de conclure directement : il faut transformer l’expression.'}
            ]
        },
        {
            id:'5e_derivees_intro', titre:'2. Introduction à la dérivée',
            desc:"UAA1 — Nombre dérivé, tangente et taux de variation", niveau:'5e', icone:'📐', color:'#e53e3e',
            cours:`<h4>Le taux de variation</h4>
                <p>Le taux de variation moyen entre a et b mesure la pente moyenne de la courbe : <b>(f(b) - f(a)) / (b - a)</b>.</p>
                <h4>Le nombre dérivé</h4>
                <p>La dérivée f'(a) est la limite de ce taux quand b se rapproche de a : elle donne la <b>pente de la tangente</b> à la courbe au point a.</p>
                <h4>Fonctions dérivées usuelles</h4>
                <ul><li>(k)' = 0</li><li>(x)' = 1</li><li>(x²)' = 2x</li><li>(xⁿ)' = n·xⁿ⁻¹</li></ul>`,
            objectifs:['Calculer un taux de variation moyen','Comprendre le lien entre dérivée et tangente','Dériver une fonction polynomiale simple'],
            matieres:['Taux de variation','Nombre dérivé','Règles de dérivation de base'],
            exercices:[
                {question:'Le nombre dérivé f’(a) représente géométriquement...', options:['La pente de la tangente en a','La valeur de f en a','L’aire sous la courbe','Le zéro de la fonction'], correct:0, correction:'f’(a) est la pente de la tangente au point a.'},
                {question:'Quelle est la dérivée de x³ ?', options:['3x²','x²','3x','x³'], correct:0, correction:'(xⁿ)’ = n·xⁿ⁻¹, donc (x³)’ = 3x²'}
            ]
        },
        {
            id:'5e_complexes', titre:'3. Nombres complexes',
            desc:'UAA3 — Forme algébrique, module et opérations', niveau:'5e', icone:'ℂ', color:'#805ad5',
            cours:`<h4>Pourquoi les complexes ?</h4>
                <p>Pour donner un sens à √(-1). On pose <b>i² = -1</b>, et tout nombre complexe s'écrit <b>z = a + bi</b> (forme algébrique), avec a la partie réelle et b la partie imaginaire.</p>
                <h4>Le module</h4>
                <p><b>|z| = √(a² + b²)</b> : c'est la distance entre le point z et l'origine dans le plan complexe.</p>
                <h4>Opérations</h4>
                <p>On additionne et multiplie les complexes comme des polynômes, en remplaçant i² par -1 quand il apparaît.</p>`,
            objectifs:['Écrire un nombre complexe sous forme algébrique','Calculer le module d’un complexe','Additionner et multiplier des complexes'],
            matieres:['Forme algébrique a + bi','Module et plan complexe','Opérations sur les complexes'],
            exercices:[
                {question:'Que vaut i² ?', options:['-1','1','0','i'], correct:0, correction:'Par définition, i² = -1.'},
                {question:'Quel est le module de z = 3 + 4i ?', options:['5','7','25','12'], correct:0, correction:'|z| = √(3² + 4²) = √25 = 5'}
            ]
        },
        {
            id:'5e_geo_analytique', titre:'4. Géométrie analytique',
            desc:'UAA4 — Droites et cercles dans un repère', niveau:'5e', icone:'📐', color:'#0e7c86',
            cours:`<h4>L'équation d'une droite</h4>
                <p><b>y = mx + p</b>, où m est la pente : <b>m = (y_B - y_A) / (x_B - x_A)</b>.</p>
                <h4>Distance entre deux points</h4>
                <p><b>d(A,B) = √[(x_B - x_A)² + (y_B - y_A)²]</b> — c'est Pythagore appliqué dans le repère.</p>
                <h4>L'équation d'un cercle</h4>
                <p>Un cercle de centre (a, b) et de rayon r a pour équation : <b>(x - a)² + (y - b)² = r²</b>.</p>`,
            objectifs:['Calculer la pente d’une droite','Calculer la distance entre deux points','Écrire l’équation d’un cercle'],
            matieres:['Équation de droite','Distance dans le plan','Équation du cercle'],
            exercices:[
                {question:'Quelle est l’équation d’un cercle de centre (0,0) et de rayon 3 ?', options:['x² + y² = 9','x² + y² = 3','x + y = 9','(x-3)² + y² = 0'], correct:0, correction:'(x-a)²+(y-b)²=r² avec a=b=0 et r=3 donne x²+y²=9.'}
            ]
        },
        {
            id:'5e_stat_2var', titre:'5. Statistique à deux variables',
            desc:'UAA — Nuage de points, ajustement et corrélation', niveau:'5e', icone:'📊', color:'#3182ce',
            cours:`<h4>Étudier deux caractères à la fois</h4>
                <p>Quand on mesure deux grandeurs sur les mêmes individus (ex : taille et poids), on obtient une <b>série statistique à deux variables</b>, représentée par un <b>nuage de points</b> dans un repère.</p>
                <h4>Le point moyen et la droite de Mayer</h4>
                <p>Le <b>point moyen</b> G a pour coordonnées (x̄, ȳ), les moyennes des deux séries. La <b>droite de Mayer</b> est une droite qui approche le nuage de points ; elle passe par le point moyen et sert à faire des prévisions (ajustement linéaire).</p>
                <h4>Le coefficient de corrélation</h4>
                <p>Il mesure à quel point les points sont alignés, entre <b>-1 et 1</b>. Plus il est proche de -1 ou 1, plus la liaison linéaire est forte. Proche de 0, il n’y a pas de lien linéaire.</p>
                <h4>Attention : corrélation ≠ causalité !</h4>
                <p>Deux séries peuvent être corrélées sans que l’une soit la cause de l’autre (ex : ventes de glaces et coups de soleil sont corrélées... à cause de la chaleur, pas d’un lien de cause à effet direct).</p>`,
            objectifs:['Représenter un nuage de points et calculer le point moyen','Déterminer l’équation d’une droite d’ajustement (méthode de Mayer)','Interpréter un coefficient de corrélation et distinguer corrélation et causalité'],
            matieres:['Nuage de points, point moyen','Ajustement linéaire (méthode de Mayer)','Coefficient de corrélation, causalité vs corrélation'],
            exercices:[
                {question:'Le point moyen d’un nuage de points a pour coordonnées…', options:['(x̄, ȳ), les moyennes des deux séries','Le point le plus fréquent','L’origine du repère','Le premier point du tableau'], correct:0, correction:'G(x̄, ȳ) est calculé à partir des moyennes de chaque variable.'},
                {question:'Un coefficient de corrélation proche de 0 signifie…', options:['Pas de lien linéaire entre les deux variables','Une corrélation parfaite','Une relation de cause à effet certaine','Une erreur de calcul'], correct:0, correction:'Plus le coefficient est proche de 0, plus le nuage est dispersé sans tendance linéaire claire.'},
                {question:'Deux variables corrélées sont-elles forcément liées par une cause à effet ?', options:['Non, corrélation n’implique pas causalité','Oui, toujours','Seulement si le coefficient est négatif','Seulement en statistique à une variable'], correct:0, correction:'C’est un piège classique : la corrélation ne prouve jamais la causalité.'}
            ]
        },
        {
            id:'5e_fonctions_trigo', titre:'6. Fonctions trigonométriques',
            desc:'UAA5 — Sinus, cosinus et tangente comme fonctions', niveau:'5e', icone:'〜', color:'#805ad5',
            cours:`<h4>Du triangle au réel</h4>
                <p>En 4e, sin/cos/tan étaient définis pour des angles. En 5e, on les voit comme des <b>fonctions réelles</b> : x ↦ sin(x), définies pour tout réel x exprimé en <b>radians</b> (π rad = 180°).</p>
                <h4>Les graphiques</h4>
                <p>Les fonctions sin et cos sont <b>périodiques de période 2π</b> : leur graphique se répète tous les 2π. Elles oscillent entre -1 et 1. La fonction tan est périodique de période π et présente des asymptotes verticales.</p>
                <h4>Amplitude, période, déphasage</h4>
                <p>Pour une fonction du type <b>f(x) = a·sin(bx + c)</b> : <b>a</b> est l’amplitude (hauteur des oscillations), <b>2π/b</b> est la période, et <b>c</b> provoque un déphasage (décalage horizontal).</p>
                <h4>Résoudre une équation trigonométrique</h4>
                <p>Pour résoudre sin(x) = k, on utilise le cercle trigonométrique : il existe en général <b>plusieurs solutions</b>, à cause de la périodicité.</p>`,
            objectifs:['Convertir des degrés en radians et réciproquement','Reconnaître amplitude, période et déphasage d’une fonction trigonométrique','Résoudre une équation trigonométrique simple à l’aide du cercle trigonométrique'],
            matieres:['Radian, fonctions sin/cos/tan sur ℝ','Amplitude, période, déphasage','Équations trigonométriques'],
            exercices:[
                {question:'Combien de radians correspondent à 180° ?', options:['π','2π','π/2','360'], correct:0, correction:'Par définition, π radians équivalent à 180°.'},
                {question:'Quelle est la période de la fonction sinus ?', options:['2π','π','π/2','1'], correct:0, correction:'sin(x) reprend les mêmes valeurs toutes les 2π unités.'},
                {question:'Dans f(x) = 3·sin(2x), quelle est l’amplitude ?', options:['3','2','6','1'], correct:0, correction:'Dans a·sin(bx), a est l’amplitude : ici a = 3.'}
            ]
        }
    ],

    '6e': [
        {
            id:'6e_derivees', titre:'1. Dérivées et étude de fonctions',
            desc:'UAA1 — Règles de dérivation, croissance et extrema', niveau:'6e', icone:'📐', color:'#e53e3e',
            cours:`<h4>Règles de dérivation</h4>
                <ul>
                    <li><b>(u + v)' = u' + v'</b></li>
                    <li><b>(u × v)' = u'v + uv'</b></li>
                    <li><b>(u / v)' = (u'v - uv') / v²</b></li>
                </ul>
                <h4>Signe de la dérivée</h4>
                <p>Si <b>f'(x) > 0</b>, f est croissante. Si <b>f'(x) < 0</b>, f est décroissante. Là où f'(x) = 0 et change de signe, f admet un <b>extremum</b> (maximum ou minimum).</p>
                <h4>Tableau de variation</h4>
                <p>Il résume le signe de f' et le sens de variation de f sur tout le domaine — c'est l'outil central pour étudier une fonction.</p>`,
            objectifs:['Appliquer les règles de dérivation','Étudier le signe d’une dérivée','Construire un tableau de variation et trouver les extrema'],
            matieres:['Dérivée d’un produit, d’un quotient','Tableau de variation','Extrema locaux'],
            exercices:[
                {question:'Si f’(x) > 0 sur un intervalle, alors f est...', options:['Croissante','Décroissante','Constante','Négative'], correct:0, correction:'Une dérivée positive signale une fonction croissante.'},
                {question:'Quelle est la dérivée de u×v ?', options:["u'v + uv'","u'v'","u'v - uv'","(u'v)/(uv')"], correct:0, correction:"Règle du produit : (uv)' = u'v + uv'"}
            ]
        },
        {
            id:'6e_integrales', titre:'2. Intégrales',
            desc:"UAA2 — Primitives, calcul d'aires et intégrale définie", niveau:'6e', icone:'∫', color:'#805ad5',
            cours:`<h4>La primitive</h4>
                <p>F est une primitive de f si <b>F' = f</b>. C'est l'opération inverse de la dérivation.</p>
                <h4>L'intégrale définie</h4>
                <p><b>∫ₐᵇ f(x) dx = F(b) - F(a)</b> représente l'aire (algébrique) entre la courbe de f et l'axe des x, entre a et b.</p>
                <h4>Primitives usuelles</h4>
                <ul><li>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C</li><li>∫ k dx = kx + C</li></ul>`,
            objectifs:['Calculer une primitive simple','Calculer une intégrale définie','Interpréter l’intégrale comme une aire'],
            matieres:['Primitives usuelles','Intégrale définie','Calcul d’aires'],
            exercices:[
                {question:'Quelle est une primitive de f(x) = x ?', options:['x²/2','x²','2x','1'], correct:0, correction:"∫x dx = x²/2 + C"},
                {question:'∫ₐᵇ f(x) dx représente géométriquement...', options:["L'aire entre la courbe et l'axe des x",'La pente de la tangente','Le zéro de f','La moyenne de f'], correct:0, correction:"C'est l'aire algébrique sous la courbe entre a et b."}
            ]
        },
        {
            id:'6e_probabilites', titre:'3. Probabilités',
            desc:'UAA3 — Probabilités conditionnelles et lois de probabilité', niveau:'6e', icone:'🎲', color:'#d69e2e',
            cours:`<h4>Probabilité conditionnelle</h4>
                <p><b>P(A|B) = P(A ∩ B) / P(B)</b> : la probabilité de A sachant que B est déjà réalisé.</p>
                <h4>Événements indépendants</h4>
                <p>A et B sont indépendants si <b>P(A ∩ B) = P(A) × P(B)</b>.</p>
                <h4>Loi binomiale</h4>
                <p>Elle modélise le nombre de succès sur n répétitions indépendantes d'une expérience à deux issues (succès/échec) de probabilité p.</p>`,
            objectifs:['Calculer une probabilité conditionnelle','Vérifier l’indépendance de deux événements','Reconnaître une situation binomiale'],
            matieres:['Probabilité conditionnelle','Indépendance','Loi binomiale'],
            exercices:[
                {question:'Deux événements A et B sont indépendants si...', options:['P(A ∩ B) = P(A) × P(B)','P(A ∩ B) = P(A) + P(B)','P(A|B) = 1','P(A) = P(B)'], correct:0, correction:"C'est la définition de l'indépendance."}
            ]
        },
        {
            id:'6e_suites', titre:'4. Suites numériques',
            desc:'UAA4 — Suites arithmétiques et géométriques', niveau:'6e', icone:'🔢', color:'#0e7c86',
            cours:`<h4>Suite arithmétique</h4>
                <p>On passe d'un terme à l'autre en <b>ajoutant</b> une raison r constante : <b>u_(n+1) = u_n + r</b>, et <b>u_n = u_0 + n·r</b>.</p>
                <h4>Suite géométrique</h4>
                <p>On passe d'un terme à l'autre en <b>multipliant</b> par une raison q constante : <b>u_(n+1) = u_n × q</b>, et <b>u_n = u_0 × qⁿ</b>.</p>
                <h4>Limite d'une suite géométrique</h4>
                <p>Si |q| < 1, alors u_n tend vers 0. Si q > 1, u_n tend vers +∞.</p>`,
            objectifs:['Reconnaître une suite arithmétique ou géométrique','Calculer le terme général','Étudier la limite d’une suite géométrique'],
            matieres:['Suite arithmétique','Suite géométrique','Limites de suites'],
            exercices:[
                {question:'Dans une suite arithmétique de raison r, on a...', options:['u_(n+1) = u_n + r','u_(n+1) = u_n × r','u_(n+1) = u_n - r²','u_(n+1) = r/u_n'], correct:0, correction:'On ajoute la raison r à chaque étape.'},
                {question:'Une suite géométrique de raison q = 0.5 tend vers...', options:['0','+∞','1','-∞'], correct:0, correction:'|q| < 1 donc la suite tend vers 0.'}
            ]
        },
        {
            id:'6e_lois_proba', titre:'5. Lois de probabilités',
            desc:'UAA2 — Lois binomiale et normale', niveau:'6e', icone:'🎲', color:'#e53e3e',
            cours:`<h4>Variable aléatoire</h4>
                <p>Une <b>variable aléatoire</b> associe un nombre à chaque résultat possible d’une expérience. On la caractérise par son <b>espérance mathématique</b> (moyenne théorique) et son <b>écart-type</b> (dispersion théorique).</p>
                <h4>La loi binomiale</h4>
                <p>Elle modélise le nombre de succès dans une répétition de <b>n épreuves de Bernoulli</b> indépendantes (deux issues possibles : succès/échec, avec une probabilité p de succès à chaque fois). C’est le modèle pour « combien de fois j’obtiens face en lançant une pièce 10 fois », par exemple.</p>
                <h4>La loi normale</h4>
                <p>C’est la fameuse <b>courbe en cloche</b>, symétrique autour de la moyenne. Elle modélise de nombreux phénomènes continus (tailles, notes, mesures...). On utilise une <b>table de la loi normale</b> ou un outil informatique pour calculer les probabilités associées.</p>
                <h4>Outils de dénombrement</h4>
                <p>Pour calculer des probabilités, on s’appuie souvent sur un <b>arbre</b>, un <b>diagramme de Venn</b>, un <b>tableau</b>, ou l’<b>analyse combinatoire</b> (arrangements, combinaisons, permutations) quand il faut compter des cas.</p>`,
            objectifs:['Reconnaître une situation modélisée par une loi binomiale ou normale','Calculer une espérance mathématique et un écart-type','Utiliser une table ou un outil informatique pour une loi normale'],
            matieres:['Variable aléatoire, espérance, écart-type','Loi binomiale (schéma de Bernoulli)','Loi normale et table de valeurs'],
            exercices:[
                {question:'La loi binomiale modélise…', options:['Le nombre de succès dans des épreuves indépendantes à deux issues','Une mesure continue quelconque','Le hasard pur sans probabilité','Uniquement les jeux de cartes'], correct:0, correction:'C’est le modèle du schéma de Bernoulli répété n fois.'},
                {question:'La courbe de la loi normale est…', options:['Symétrique en forme de cloche','Toujours croissante','Une droite','Toujours nulle'], correct:0, correction:'La loi normale a une courbe en cloche symétrique autour de la moyenne.'},
                {question:'L’espérance mathématique d’une variable aléatoire représente…', options:['Sa moyenne théorique','Sa valeur maximale','Sa probabilité totale','Son écart-type'], correct:0, correction:'L’espérance est la valeur moyenne attendue « en théorie ».'}
            ]
        },
        {
            id:'6e_exp_log', titre:'6. Fonctions exponentielles et logarithmes',
            desc:'UAA4 — Croissance exponentielle et logarithmique', niveau:'6e', icone:'📈', color:'#d69e2e',
            cours:`<h4>La fonction exponentielle</h4>
                <p><b>f(x) = eˣ</b> (base e ≈ 2,718) est toujours positive, strictement croissante, et vérifie <b>eˣ⁺ʸ = eˣ × eʸ</b>. Elle croît beaucoup plus vite que n’importe quelle fonction puissance.</p>
                <h4>La fonction logarithme</h4>
                <p><b>ln(x)</b> est la fonction réciproque de l’exponentielle : <b>ln(eˣ) = x</b> et <b>e^(ln x) = x</b>. Elle n’est définie que pour x > 0, et vérifie <b>ln(a×b) = ln(a) + ln(b)</b>.</p>
                <h4>Résoudre des équations</h4>
                <p>Pour une <b>équation exponentielle</b> du type eˣ = k (k>0), on prend le logarithme des deux membres : x = ln(k). Pour une <b>équation logarithmique</b> ln(x) = k, on applique l’exponentielle : x = eᵏ.</p>
                <h4>Comparer les croissances</h4>
                <p>Pour x très grand, on a toujours : <b>ln(x) « xⁿ « eˣ</b> — le logarithme croît très lentement, l’exponentielle très vite, et les puissances sont entre les deux.</p>`,
            objectifs:['Utiliser les propriétés des exponentielles et des logarithmes','Résoudre une équation exponentielle ou logarithmique simple','Comparer les croissances des fonctions exponentielle, puissance et logarithme'],
            matieres:['Fonction exponentielle et fonction logarithme','Réciprocité eˣ / ln(x)','Équations exponentielles et logarithmiques'],
            exercices:[
                {question:'Que vaut ln(eˣ) ?', options:['x','eˣ','1','0'], correct:0, correction:'ln et exp sont des fonctions réciproques : ln(eˣ) = x.'},
                {question:'Résoudre eˣ = 5', options:['x = ln(5)','x = 5','x = e⁵','x = 1/5'], correct:0, correction:'On applique le logarithme des deux côtés : x = ln(5).'},
                {question:'Pour x très grand, quelle fonction croît le plus vite ?', options:['eˣ','ln(x)','x²','x'], correct:0, correction:'L’exponentielle domine toujours les puissances et le logarithme pour x grand.'}
            ]
        },
        {
            id:'6e_geo_analytique_espace', titre:'7. Géométrie analytique de l’espace',
            desc:'UAA5 — Droites et plans dans un repère 3D', niveau:'6e', icone:'🧊', color:'#38a169',
            cours:`<h4>Se repérer dans l’espace</h4>
                <p>Un point de l’espace a <b>trois coordonnées (x, y, z)</b> dans un repère orthonormé. Un vecteur de l’espace a lui aussi trois composantes.</p>
                <h4>Équations d’une droite et d’un plan</h4>
                <p>Une <b>droite</b> de l’espace est définie par un point et un vecteur directeur (équations paramétriques). Un <b>plan</b> est défini par un point et deux vecteurs directeurs non colinéaires, ou par une équation cartésienne du type <b>ax + by + cz + d = 0</b>.</p>
                <h4>Positions relatives et distances</h4>
                <p>Deux droites de l’espace peuvent être sécantes, parallèles, ou <b>gauches</b>. On calcule la <b>distance entre deux points</b> avec la formule de Pythagore généralisée : d = √[(x_B-x_A)² + (y_B-y_A)² + (z_B-z_A)²].</p>`,
            objectifs:['Déterminer les équations d’une droite ou d’un plan dans l’espace','Reconnaître les positions relatives de droites et de plans','Calculer une distance entre deux points de l’espace'],
            matieres:['Repère et vecteurs de l’espace','Équations de droites et de plans','Positions relatives, distances'],
            exercices:[
                {question:'Combien de coordonnées a un point dans l’espace ?', options:['3','2','4','1'], correct:0, correction:'Dans l’espace, un point a trois coordonnées (x, y, z).'},
                {question:'Une équation cartésienne de plan a la forme…', options:['ax + by + cz + d = 0','ax + b = 0','y = mx + p','x² + y² = r²'], correct:0, correction:'C’est la forme générale de l’équation cartésienne d’un plan.'},
                {question:'Deux droites de l’espace ni sécantes ni parallèles sont dites…', options:['Gauches','Orthogonales','Confondues','Symétriques'], correct:0, correction:'Comme dans le plan… mais dans l’espace, ce cas existe aussi entre deux droites : elles sont gauches.'}
            ]
        }
    ]
};

// ---- Formules ----
var FORMULES_DATA = {
    algebre: [
        {id:'alg_1', titre:'Identité remarquable', definition:'(a+b)² = a² + 2ab + b²', exemple:'(x+3)² = x² + 6x + 9', icone:'🔢', categorie:'Algèbre'},
        {id:'alg_2', titre:'Différence de carrés', definition:'a² - b² = (a-b)(a+b)', exemple:'x² - 9 = (x-3)(x+3)', icone:'🔢', categorie:'Algèbre'},
        {id:'alg_3', titre:'Discriminant', definition:'Δ = b² - 4ac', exemple:'Pour x² + 2x - 3, Δ = 16', icone:'🔢', categorie:'Algèbre'},
        {id:'alg_4', titre:'Racines du 2nd degré', definition:'x = (-b ± √Δ)/2a', exemple:'x = (-2 ± 4)/2 → 1 ou -3', icone:'🔢', categorie:'Algèbre'}
    ],
    geometrie: [
        {id:'geo_1', titre:'Théorème de Pythagore', definition:'a² + b² = c² (triangle rectangle)', exemple:'3² + 4² = 5²', icone:'📐', categorie:'Géométrie'},
        {id:'geo_2', titre:'Théorème de Thalès', definition:'AB/AC = AD/AE (si BD // CE)', exemple:'Calculer une longueur inconnue', icone:'📐', categorie:'Géométrie'},
        {id:'geo_3', titre:'Distance entre deux points', definition:'d = √[(xB-xA)² + (yB-yA)²]', exemple:'A(0,0), B(3,4) → d = 5', icone:'📐', categorie:'Géométrie'},
        {id:'geo_4', titre:'Équation du cercle', definition:'(x-a)² + (y-b)² = r²', exemple:'Centre (0,0), rayon 3 → x²+y²=9', icone:'📐', categorie:'Géométrie'}
    ],
    trigonometrie: [
        {id:'trigo_1', titre:'Sinus', definition:'sin(α) = opposé / hypoténuse', exemple:'sin(30°) = 0.5', icone:'📐', categorie:'Trigonométrie'},
        {id:'trigo_2', titre:'Cosinus', definition:'cos(α) = adjacent / hypoténuse', exemple:'cos(60°) = 0.5', icone:'📐', categorie:'Trigonométrie'},
        {id:'trigo_3', titre:'Tangente', definition:'tan(α) = opposé / adjacent', exemple:'tan(45°) = 1', icone:'📐', categorie:'Trigonométrie'},
        {id:'trigo_4', titre:'Relation fondamentale', definition:'sin²α + cos²α = 1', exemple:'Formule à connaître par cœur', icone:'📐', categorie:'Trigonométrie'}
    ],
    analyse: [
        {id:'ana_1', titre:'Dérivée d’une puissance', definition:"(xⁿ)' = n·xⁿ⁻¹", exemple:"(x³)' = 3x²", icone:'📈', categorie:'Analyse'},
        {id:'ana_2', titre:'Dérivée d’un produit', definition:"(uv)' = u'v + uv'", exemple:"(x²·x)' → règle du produit", icone:'📈', categorie:'Analyse'},
        {id:'ana_3', titre:'Dérivée d’un quotient', definition:"(u/v)' = (u'v - uv')/v²", exemple:'Utile pour les fonctions rationnelles', icone:'📈', categorie:'Analyse'},
        {id:'ana_4', titre:'Primitive d’une puissance', definition:'∫xⁿ dx = xⁿ⁺¹/(n+1) + C', exemple:'∫x dx = x²/2 + C', icone:'📈', categorie:'Analyse'},
        {id:'ana_5', titre:'Intégrale définie', definition:'∫ₐᵇ f(x)dx = F(b) - F(a)', exemple:'Aire sous la courbe entre a et b', icone:'📈', categorie:'Analyse'}
    ],
    vecteurs: [
        {id:'vec_1', titre:'Produit scalaire', definition:'u·v = ||u|| × ||v|| × cos(α)', exemple:'Si orthogonaux, u·v = 0', icone:'➡️', categorie:'Vecteurs'}
    ],
    statistiques: [
        {id:'stat_1', titre:'Moyenne', definition:'x̄ = Σxi / n', exemple:'(4+6+8)/3 = 6', icone:'📊', categorie:'Statistiques'},
        {id:'stat_2', titre:'Écart-type', definition:'σ = √Variance', exemple:'Mesure la dispersion', icone:'📊', categorie:'Statistiques'},
        {id:'stat_3', titre:'Probabilité conditionnelle', definition:'P(A|B) = P(A∩B) / P(B)', exemple:'Probabilité de A sachant B', icone:'📊', categorie:'Statistiques'}
    ],
    complexes: [
        {id:'comp_1', titre:'Module', definition:'|z| = √(a² + b²)', exemple:'|3+4i| = 5', icone:'ℂ', categorie:'Nombres complexes'},
        {id:'comp_2', titre:'Unité imaginaire', definition:'i² = -1', exemple:'Base des nombres complexes', icone:'ℂ', categorie:'Nombres complexes'}
    ]
};

var CAT_COLOR = {
    algebre:'--rouge',
    geometrie:'--bleu',
    trigonometrie:'--ambre',
    analyse:'--violet',
    vecteurs:'--teal',
    statistiques:'--ambre',
    complexes:'--vert'
};

var CAT_COLOR_LIGHT = {
    algebre:'--rouge-clair',
    geometrie:'--bleu-clair',
    trigonometrie:'--ambre-clair',
    analyse:'--violet-clair',
    vecteurs:'--teal-clair',
    statistiques:'--ambre-clair',
    complexes:'--vert-clair'
};

var ANNEE_COLOR = {
    '3e':{c:'#1c5fa8', l:'#e8f0fe'},
    '4e':{c:'#6b46c1', l:'#f1ebfb'},
    '5e':{c:'#0e7c86', l:'#e4f5f6'},
    '6e':{c:'#c81e2c', l:'#fdecea'}
};

var ANNEE_DESC = {
    '3e':'Fonctions, Algèbre, Géométrie, Trigonométrie…',
    '4e':'Fonctions de référence, 2nd degré, Vecteurs…',
    '5e':'Analyse, Complexes, Géométrie analytique…',
    '6e':'Dérivées, Intégrales, Probabilités, Suites…'
};
