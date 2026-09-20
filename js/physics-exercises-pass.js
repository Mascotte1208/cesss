/* Exercices QCM pour les 15 chapitres de physique dont le cours croisé
   (js/physics-pdf-crossed.js) avait été ajouté sans aucun exercice. */
(function () {
    if (typeof CESS_LIBRARY_DATA === 'undefined' || typeof findChapter !== 'function') return;

    var DATA = {

        'physique_carnet_3e_02': [
            ['Quelle est la vitesse de la lumière dans le vide ?', ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10⁵ m/s', '3 × 10¹⁰ m/s'], 0, 'c ≈ 3 × 10⁸ m/s (299 792 458 m/s exactement) dans le vide.'],
            ['Une source secondaire de lumière est un objet qui...', ['diffuse ou réfléchit la lumière reçue', 'émet sa propre lumière', 'est totalement opaque à la lumière', 'est transparent et n’interagit jamais avec la lumière'], 0, 'La Lune ou un objet éclairé sont des sources secondaires : ils ne font que renvoyer la lumière reçue.'],
            ['D’après les lois de Descartes pour la réflexion, quelle relation relie l’angle d’incidence i et l’angle de réflexion r ?', ['i = r', 'i = 2r', 'i + r = 90°', 'r = i/2'], 0, 'L’angle de réflexion est toujours égal à l’angle d’incidence, mesurés par rapport à la normale.'],
            ['Un rayon passe de l’air (n≈1) vers l’eau (n=1,33). D’après la loi de Snell-Descartes, le rayon réfracté...', ['se rapproche de la normale', 's’éloigne de la normale', 'reste à un angle identique', 'subit une réflexion totale'], 0, 'En entrant dans un milieu plus dense (n plus grand), le rayon se rapproche de la normale.'],
            ['L’image d’un objet dans un miroir plan est...', ['virtuelle, droite et de même taille que l’objet', 'réelle, renversée et plus petite', 'virtuelle, renversée et agrandie', 'réelle, droite et plus grande'], 0, 'Le miroir plan donne toujours une image virtuelle, droite, symétrique et de même taille.'],
            ['La réflexion totale se produit quand un rayon lumineux passe...', ['d’un milieu dense vers un milieu moins dense, avec un angle supérieur à l’angle limite', 'd’un milieu moins dense vers un milieu plus dense', 'à travers un miroir plan', 'uniquement dans le vide'], 0, 'C’est le principe des fibres optiques : au-delà de l’angle limite, aucun rayon n’est transmis.'],
            ['Quelle observation prouve la propagation rectiligne de la lumière ?', ['la formation d’ombres nettes derrière un obstacle', 'la dispersion par un prisme', 'la réflexion sur un miroir courbe', 'l’absorption par un corps noir'], 0, 'Une ombre nette (chambre noire) n’est possible que si la lumière se propage en ligne droite.'],
            ['Le principe des fibres optiques repose sur...', ['la réflexion totale interne', 'la réfraction simple', 'la diffraction', 'l’effet photoélectrique'], 0, 'La lumière reste piégée dans la fibre par réflexion totale successive sur ses parois.']
        ],

        'physique_carnet_3e_03': [
            ['Une lentille convergente est plus épaisse...', ['au centre', 'sur les bords', 'uniformément partout', 'en un seul point'], 0, 'C’est sa forme convexe qui la rend convergente.'],
            ['La vergence V d’une lentille de distance focale f’ est donnée par...', ['V = 1/f′', 'V = f′', 'V = f′²', 'V = 2 × f′'], 0, 'La vergence, en dioptries, est l’inverse de la distance focale exprimée en mètres.'],
            ['Une lentille a une distance focale f′ = 0,25 m. Sa vergence est de...', ['4 δ', '0,25 δ', '40 δ', '2,5 δ'], 0, 'V = 1/f′ = 1/0,25 = 4 dioptries.'],
            ['Dans la construction de l’image par une lentille convergente, le rayon qui passe par le centre optique O...', ['n’est pas dévié', 'passe par le foyer image', 'ressort parallèle à l’axe', 'subit une réflexion totale'], 0, 'Le rayon passant par le centre optique traverse la lentille sans être dévié.'],
            ['Un objet placé entre le foyer F et le centre optique O d’une lentille convergente donne une image...', ['virtuelle, droite et agrandie (effet loupe)', 'réelle, renversée et plus petite', 'réelle, renversée, même taille', 'ponctuelle au foyer image'], 0, 'C’est le principe de la loupe : l’image est virtuelle, droite et agrandie.'],
            ['La dispersion de la lumière blanche par un prisme s’explique par le fait que...', ['l’indice de réfraction du verre dépend de la longueur d’onde', 'le prisme absorbe certaines couleurs', 'la lumière blanche ne contient qu’une seule couleur', 'le verre réfléchit toute la lumière'], 0, 'Chaque longueur d’onde est réfractée différemment, ce qui sépare les couleurs.'],
            ['Dans le spectre visible, quelle couleur est la plus déviée par un prisme ?', ['le violet', 'le rouge', 'le vert', 'toutes les couleurs sont déviées de façon identique'], 0, 'Le violet, de plus courte longueur d’onde, est le plus dévié ; le rouge le moins.'],
            ['La relation entre vitesse, longueur d’onde et fréquence d’une onde lumineuse est...', ['c = λ × f', 'c = λ / f', 'c = λ + f', 'c = λ² × f'], 0, 'c = λ × f, avec c constant dans le vide.']
        ],

        'physique_carnet_3e_06': [
            ['L’intensité du courant électrique se mesure avec...', ['un ampèremètre branché en série', 'un ampèremètre branché en dérivation', 'un voltmètre branché en série', 'un voltmètre branché en dérivation'], 0, 'L’ampèremètre se place en série pour que tout le courant le traverse.'],
            ['D’après la loi d’Ohm, si R = 100 Ω et I = 0,5 A, la tension U aux bornes est...', ['50 V', '200 V', '2 V', '150 V'], 0, 'U = R × I = 100 × 0,5 = 50 V.'],
            ['Dans un circuit en série, l’intensité du courant...', ['est la même en tout point du circuit', 'se divise entre chaque composant', 'double à chaque résistance', 'est nulle si une résistance est ajoutée'], 0, 'En série, il n’y a qu’un seul chemin pour le courant : I est identique partout.'],
            ['Dans un circuit en parallèle, si une branche est défectueuse...', ['les autres branches continuent de fonctionner', 'tout le circuit s’arrête', 'l’intensité totale devient nulle', 'la tension double dans les autres branches'], 0, 'C’est l’avantage du montage parallèle, utilisé dans les installations domestiques.'],
            ['La résistance équivalente de deux résistances R1 et R2 montées en série est...', ['R_eq = R1 + R2', 'R_eq = R1×R2/(R1+R2)', 'R_eq = 1/(R1+R2)', 'R_eq = R1 − R2'], 0, 'En série, les résistances s’additionnent simplement.'],
            ['La résistance équivalente de deux résistances égales R montées en parallèle est...', ['R/2', '2R', 'R²', 'R'], 0, '1/R_eq = 1/R + 1/R = 2/R, donc R_eq = R/2.'],
            ['Le voltmètre doit toujours être branché...', ['en dérivation (parallèle) aux bornes du composant', 'en série dans le circuit', 'entre le générateur et la masse uniquement', 'en série avec l’ampèremètre'], 0, 'Le voltmètre mesure une différence de potentiel entre deux points, donc en dérivation.'],
            ['La relation I = Q/t définit l’intensité, où Q représente...', ['la charge électrique ayant traversé une section du circuit', 'la puissance dissipée', 'la résistance du circuit', 'la tension aux bornes du générateur'], 0, 'I est la quantité de charge Q qui traverse une section par unité de temps t.']
        ],

        'physique_carnet_4e_07': [
            ['Une force perpendiculaire au déplacement d’un objet...', ['ne travaille pas (W = 0)', 'produit un travail moteur maximal', 'produit un travail résistant', 'double l’énergie cinétique de l’objet'], 0, 'W = F×d×cos(90°) = 0 : une force perpendiculaire au déplacement ne fournit aucun travail.'],
            ['La formule de l’énergie cinétique d’un objet de masse m et de vitesse v est...', ['Ec = ½ × m × v²', 'Ec = m × g × h', 'Ec = m × v²', 'Ec = 2 × m × v²'], 0, 'L’énergie cinétique vaut ½mv², proportionnelle au carré de la vitesse.'],
            ['Un objet de 2 kg est levé à 5 m de hauteur (g ≈ 10 N/kg). Son énergie potentielle de pesanteur est...', ['100 J', '50 J', '10 J', '1000 J'], 0, 'Ep = m×g×h = 2×10×5 = 100 J.'],
            ['En l’absence de frottement, lors d’une chute libre...', ['l’énergie mécanique totale (Ec+Ep) reste constante', 'l’énergie cinétique diminue continuellement', 'l’énergie potentielle augmente continuellement', 'l’énergie mécanique double à chaque seconde'], 0, 'C’est la conservation de l’énergie mécanique : Ep perdue devient Ec gagnée.'],
            ['La puissance P se calcule par la relation...', ['P = W / t', 'P = W × t', 'P = F / t', 'P = m × g × h'], 0, 'La puissance est le travail fourni par unité de temps.'],
            ['Un moteur électrique a un rendement η typique de...', ['90 à 95 %', '25 à 35 %', '5 %', '100 %'], 0, 'Les moteurs électriques sont bien plus efficaces que les moteurs à essence (25-35 %).'],
            ['Une force de 20 N déplace un objet de 5 m dans le sens exact de la force. Le travail effectué est...', ['100 J', '4 J', '25 J', '0 J'], 0, 'W = F×d×cos(0°) = 20×5×1 = 100 J.'],
            ['Le rendement d’un appareil est défini par...', ['η = P_utile / P_totale × 100 %', 'η = P_totale / P_utile', 'η = P_utile + P_totale', 'η = P_utile × P_totale'], 0, 'Le rendement compare la puissance utile obtenue à la puissance totale fournie.']
        ],

        'physique_carnet_4e_08': [
            ['25 °C correspond, en kelvin, à...', ['298,15 K', '25 K', '248,15 K', '273,15 K'], 0, 'T(K) = T(°C) + 273,15 = 25 + 273,15 = 298,15 K.'],
            ['Le zéro absolu correspond à...', ['−273,15 °C', '0 °C', '−100 °C', '−373,15 °C'], 0, 'C’est la température minimale théoriquement possible : 0 K.'],
            ['La quantité de chaleur Q reçue par un corps se calcule par...', ['Q = m × c × ΔT', 'Q = m × c / ΔT', 'Q = m / c × ΔT', 'Q = c × ΔT'], 0, 'Q dépend de la masse, de la chaleur massique et de la variation de température.'],
            ['Parmi ces matériaux, lequel se réchauffe le plus lentement (chaleur massique la plus élevée) ?', ['l’eau liquide', 'le plomb', 'le cuivre', 'le fer'], 0, 'L’eau a une chaleur massique très élevée (4186 J·kg⁻¹·K⁻¹), bien plus que les métaux.'],
            ['La fusion est le changement d’état...', ['du solide vers le liquide, en absorbant de l’énergie', 'du liquide vers le solide, en libérant de l’énergie', 'du liquide vers le gaz', 'du gaz vers le solide'], 0, 'La fusion (solide→liquide) est endothermique : elle absorbe de l’énergie.'],
            ['Pendant un changement d’état, la température du corps...', ['reste constante', 'augmente progressivement', 'diminue progressivement', 'double'], 0, 'Toute l’énergie échangée sert à changer l’état, pas à faire varier la température.'],
            ['Le transfert de chaleur par déplacement de matière (fluide chaud qui monte) s’appelle...', ['la convection', 'la conduction', 'le rayonnement', 'la sublimation'], 0, 'La convection déplace physiquement le fluide chaud, contrairement à la conduction.'],
            ['Contrairement à la conduction et à la convection, le rayonnement thermique...', ['peut se propager dans le vide', 'nécessite toujours un solide', 'nécessite toujours un liquide', 'ne transporte aucune énergie'], 0, 'Le rayonnement (ondes électromagnétiques) n’a besoin d’aucun support matériel, ex : la chaleur du Soleil.']
        ],

        'physique_carnet_4e_09': [
            ['La puissance électrique consommée par un appareil est donnée par...', ['P = U × I', 'P = U / I', 'P = U + I', 'P = U × I²'], 0, 'La puissance électrique est le produit de la tension et de l’intensité.'],
            ['Un radiateur de 2000 W fonctionne pendant 3 heures. L’énergie consommée est...', ['6 kWh', '2 kWh', '600 kWh', '18 kWh'], 0, 'E = P × t = 2000 W × 3 h = 6000 Wh = 6 kWh.'],
            ['L’effet Joule correspond à...', ['la transformation d’énergie électrique en chaleur dans une résistance', 'la transformation de chaleur en électricité', 'la création d’un champ magnétique par un aimant', 'la conversion de lumière en électricité'], 0, 'Tout conducteur parcouru par un courant s’échauffe : c’est l’effet Joule.'],
            ['La chaleur dégagée par effet Joule se calcule par...', ['Q = R × I² × t', 'Q = R × I × t', 'Q = R / I² × t', 'Q = R + I² + t'], 0, 'Q = R×I²×t : la chaleur dépend du carré de l’intensité.'],
            ['Un courant électrique qui circule dans un fil conducteur crée autour de lui...', ['un champ magnétique', 'un champ électrique statique uniquement', 'une onde sonore', 'aucun effet physique'], 0, 'C’est le principe de base de l’électromagnétisme, utilisé dans les électroaimants.'],
            ['L’induction électromagnétique découverte par Faraday consiste à...', ['produire une tension par la variation du flux magnétique à travers une bobine', 'produire un courant continu sans aucune source d’énergie', 'convertir la lumière en électricité directement', 'annuler le champ magnétique d’un aimant'], 0, 'Une variation de flux magnétique induit une force électromotrice dans la bobine.'],
            ['Dans un transformateur idéal, le rapport des tensions U1/U2 est égal à...', ['N1/N2 (rapport du nombre de spires)', 'N2/N1', 'toujours 1', 'la résistance du circuit'], 0, 'U1/U2 = N1/N2 : le rapport de transformation dépend du nombre de spires.'],
            ['La force de Laplace subie par un conducteur parcouru par un courant dans un champ magnétique dépend de...', ['l’intensité du courant, la longueur du conducteur et le champ magnétique', 'uniquement de la résistance du fil', 'uniquement de la tension aux bornes', 'uniquement de la température du conducteur'], 0, 'F = B×I×L×sin(α) : la force dépend de B, I et L.']
        ],

        'physique_carnet_5e_11': [
            ['La pression est définie par la relation...', ['P = F / S', 'P = F × S', 'P = F + S', 'P = S / F'], 0, 'La pression est une force répartie sur une surface.'],
            ['1 atmosphère (atm) correspond approximativement à...', ['101 325 Pa', '1 000 Pa', '1 000 000 Pa', '10 Pa'], 0, 'La pression atmosphérique standard vaut environ 101 325 Pa.'],
            ['Dans un liquide en équilibre, la pression...', ['augmente avec la profondeur', 'diminue avec la profondeur', 'reste constante quelle que soit la profondeur', 'ne dépend que de la surface du récipient'], 0, 'Le poids de la colonne de liquide au-dessus augmente la pression avec la profondeur.'],
            ['Selon P = P0 + ρ×g×h, la pression à une profondeur h dépend de...', ['la masse volumique du liquide, g et la profondeur', 'uniquement de la surface du récipient', 'uniquement de la température de l’eau', 'uniquement du volume total du liquide'], 0, 'La formule fait intervenir ρ (masse volumique), g et h, pas le volume ni la surface.'],
            ['Le principe de Pascal énonce que...', ['une pression appliquée en un point d’un fluide se transmet intégralement dans toutes les directions', 'la pression ne se transmet que verticalement', 'la pression diminue en se transmettant', 'seule la surface libre subit la pression'], 0, 'C’est ce principe qui permet le fonctionnement des presses et freins hydrauliques.'],
            ['La presse hydraulique utilise la relation...', ['F1/S1 = F2/S2', 'F1 × S1 = F2 × S2', 'F1 + S1 = F2 + S2', 'F1 = F2 uniquement'], 0, 'La pression étant identique partout, F/S est constant.'],
            ['Une pression de 2,5 bar correspond à...', ['250 000 Pa', '2 500 Pa', '25 000 Pa', '2 500 000 Pa'], 0, '1 bar = 100 000 Pa, donc 2,5 bar = 250 000 Pa.'],
            ['La pression est une grandeur...', ['scalaire', 'vectorielle', 'toujours négative', 'sans unité'], 0, 'La pression n’a pas de direction : c’est un scalaire, exprimé en pascals.']
        ],

        'physique_carnet_5e_12': [
            ['Dans le spectre électromagnétique, la lumière visible se situe...', ['entre les ultraviolets et les infrarouges', 'entre les rayons X et les ultraviolets', 'entre les micro-ondes et les ondes radio', 'au-delà des rayons gamma'], 0, 'Le spectre visible (380-780 nm) se situe entre l’UV et l’IR.'],
            ['La diffraction d’une onde est particulièrement visible quand...', ['la taille de l’obstacle ou de la fente est du même ordre de grandeur que la longueur d’onde', 'l’onde traverse le vide', 'la fréquence de l’onde est nulle', 'l’onde est monochromatique uniquement'], 0, 'Plus la fente est proche de λ, plus la diffraction est marquée.'],
            ['L’expérience des fentes de Young (1801) a prouvé...', ['la nature ondulatoire de la lumière par des interférences', 'la nature exclusivement corpusculaire de la lumière', 'que la lumière ne se propage pas dans le vide', 'que la vitesse de la lumière est infinie'], 0, 'Les franges d’interférence observées ne s’expliquent que par un modèle ondulatoire.'],
            ['L’énergie d’un photon est donnée par la relation...', ['E = h × f', 'E = h / f', 'E = h + f', 'E = h × f²'], 0, 'E = h×f, avec h la constante de Planck.'],
            ['L’effet photoélectrique, expliqué par Einstein en 1905, montre que...', ['l’arrachement d’électrons dépend de la fréquence de la lumière, pas de son intensité', 'seule l’intensité lumineuse compte, jamais la fréquence', 'la lumière n’a aucun effet sur les électrons d’un métal', 'seules les ondes radio produisent cet effet'], 0, 'Sous le seuil de fréquence, aucun électron n’est arraché, même avec une intensité énorme.'],
            ['La dualité onde-corpuscule signifie que la lumière...', ['se comporte tantôt comme une onde, tantôt comme une particule selon l’expérience', 'n’est ni une onde ni une particule', 'est uniquement une onde dans tous les cas', 'est uniquement composée de particules massives'], 0, 'Diffraction (onde) et effet photoélectrique (particule) révèlent cette double nature.'],
            ['Des interférences destructives se produisent quand...', ['une crête rencontre un creux et les ondes s’annulent', 'deux crêtes se rencontrent et s’additionnent', 'les ondes ont des fréquences différentes uniquement', 'les ondes se propagent dans des directions parallèles'], 0, 'Crête + creux = annulation ; crête + crête = renforcement (interférence constructive).'],
            ['Toutes les ondes électromagnétiques se propagent dans le vide à...', ['la même vitesse c ≈ 3 × 10⁸ m/s', 'des vitesses différentes selon leur couleur', 'une vitesse infinie', 'une vitesse nulle'], 0, 'C’est une propriété fondamentale : c est la même pour toutes les ondes électromagnétiques dans le vide.']
        ],

        'physique_carnet_5e_13': [
            ['Le courant alternatif se distingue du courant continu par...', ['un sens et une intensité qui varient périodiquement', 'un sens et une intensité toujours constants', 'l’absence totale de tension', 'une fréquence toujours nulle'], 0, 'Le CA change périodiquement de sens et d’intensité, contrairement au CC.'],
            ['En Europe, la fréquence du secteur électrique est de...', ['50 Hz', '60 Hz', '230 Hz', '0 Hz'], 0, 'Le réseau électrique européen fonctionne à 50 Hz (60 Hz aux États-Unis).'],
            ['La tension maximale (crête) du secteur 230 V (valeur efficace) est d’environ...', ['325 V', '230 V', '162 V', '460 V'], 0, 'Umax = Ueff × √2 = 230 × 1,414 ≈ 325 V.'],
            ['Un condensateur en courant alternatif...', ['laisse passer le courant alternatif mais bloque le courant continu', 'bloque systématiquement tout courant', 'se comporte exactement comme une résistance', 'laisse passer uniquement le courant continu'], 0, 'C’est l’inverse de la bobine : le condensateur bloque le continu mais laisse passer l’alternatif.'],
            ['La réactance inductive d’une bobine est donnée par...', ['XL = ω × L', 'XL = 1/(ω × L)', 'XL = ω × L²', 'XL = L / ω'], 0, 'XL = ωL, avec ω = 2πf la pulsation.'],
            ['Dans un circuit RLC série, la résonance se produit quand...', ['la réactance inductive égale la réactance capacitive (XL = Xc)', 'la résistance R est nulle', 'la fréquence est nulle', 'le condensateur est déchargé'], 0, 'À la résonance, les deux réactances s’annulent mutuellement.'],
            ['La tension efficace Ueff d’un signal sinusoïdal est reliée à la tension maximale par...', ['Ueff = Umax / √2', 'Ueff = Umax × √2', 'Ueff = Umax', 'Ueff = Umax / 2'], 0, 'Ueff = Umax/√2 ≈ 0,707 × Umax.'],
            ['Un condensateur se caractérise par sa...', ['capacité, en farads', 'inductance, en henrys', 'résistance, en ohms', 'fréquence propre, en hertz'], 0, 'La capacité C, en farads, caractérise un condensateur ; l’inductance L caractérise une bobine.']
        ],

        'physique_carnet_5e_14': [
            ['Le moment de force (couple) se calcule par la relation...', ['M = F × d', 'M = F / d', 'M = F + d', 'M = F × d²'], 0, 'M = F×d, où d est le bras de levier.'],
            ['Un corps est en équilibre de rotation quand...', ['la somme des moments de force est nulle (ΣM = 0)', 'toutes les forces sont nulles', 'la vitesse angulaire est maximale', 'le moment d’inertie est nul'], 0, 'Les moments horaires et anti-horaires doivent se compenser exactement.'],
            ['L’énergie cinétique de rotation d’un corps est donnée par...', ['Ec_rot = ½ × I × ω²', 'Ec_rot = I × ω', 'Ec_rot = ½ × I × ω', 'Ec_rot = m × ω²'], 0, 'Par analogie avec ½mv², l’énergie de rotation vaut ½Iω².'],
            ['Le moment d’inertie d’un disque plein de masse m et de rayon R est...', ['I = ½ × m × R²', 'I = m × R²', 'I = 2/5 × m × R²', 'I = m × R'], 0, 'Le disque plein a I = ½mR² ; l’anneau a I = mR² ; la sphère pleine a I = 2/5 mR².'],
            ['La relation entre vitesse linéaire v et vitesse angulaire ω pour un point à distance r de l’axe est...', ['v = ω × r', 'v = ω / r', 'v = ω + r', 'v = ω² × r'], 0, 'v = ωr : plus on est loin de l’axe, plus la vitesse linéaire est grande.'],
            ['Augmenter le bras de levier d en gardant la même force F a pour effet de...', ['augmenter le moment de force M', 'diminuer le moment de force M', 'ne rien changer au moment de force', 'annuler le moment de force'], 0, 'M = F×d : un bras de levier plus grand donne un moment plus grand pour la même force.'],
            ['Une sphère pleine a un moment d’inertie...', ['I = 2/5 × m × R²', 'I = ½ × m × R²', 'I = m × R²', 'I = 1/3 × m × R²'], 0, 'La sphère pleine a le moment d’inertie le plus faible des trois formes usuelles pour une même masse et un même rayon.'],
            ['Deux moments de force opposés qui s’équilibrent sur un axe correspondent à...', ['un moment horaire égal au moment anti-horaire', 'une accélération angulaire maximale', 'une énergie de rotation nulle obligatoirement', 'une masse nulle'], 0, 'C’est la condition d’équilibre en rotation : ΣM = 0.']
        ],

        'physique_carnet_6e_15': [
            ['Le numéro atomique Z représente...', ['le nombre de protons dans le noyau', 'le nombre total de nucléons', 'le nombre de neutrons uniquement', 'la masse de l’atome en kg'], 0, 'Z est le nombre de protons ; A = Z + N est le nombre total de nucléons.'],
            ['Des isotopes d’un même élément ont...', ['le même nombre de protons mais un nombre de neutrons différent', 'le même nombre de neutrons mais un nombre de protons différent', 'des numéros atomiques différents', 'des propriétés chimiques totalement différentes'], 0, 'Les isotopes partagent le même Z (donc les mêmes propriétés chimiques) mais diffèrent par N.'],
            ['Un rayonnement alpha (α) est constitué de...', ['un noyau d’hélium (2 protons + 2 neutrons)', 'un électron rapide', 'un photon de haute énergie', 'un neutron isolé'], 0, 'La particule α est identique à un noyau d’hélium-4.'],
            ['Le rayonnement gamma (γ) est arrêté efficacement par...', ['plusieurs cm de plomb ou de béton', 'une simple feuille de papier', 'quelques mm d’aluminium', 'rien, il traverse toute matière sans atténuation'], 0, 'Le rayonnement γ a le plus grand pouvoir de pénétration des rayonnements radioactifs.'],
            ['La demi-vie (période radioactive) t½ d’un isotope est...', ['le temps nécessaire pour que la moitié des noyaux se désintègrent', 'le temps pour que tous les noyaux se désintègrent', 'toujours égale à 1 seconde', 'la masse initiale de l’échantillon'], 0, 'C’est une durée caractéristique de chaque isotope radioactif.'],
            ['Le carbone-14, utilisé en datation archéologique, a une demi-vie d’environ...', ['5 730 ans', '8 jours', '138 jours', '4,47 milliards d’années'], 0, 'Cette demi-vie de 5 730 ans permet de dater des restes organiques.'],
            ['La loi de décroissance radioactive s’écrit...', ['N(t) = N0 × (1/2)^(t/t½)', 'N(t) = N0 × t/t½', 'N(t) = N0 + t/t½', 'N(t) = N0 × 2^(t/t½)'], 0, 'Après chaque demi-vie écoulée, le nombre de noyaux restants est divisé par deux.'],
            ['Un noyau devient instable (radioactif) principalement quand...', ['il a trop ou pas assez de neutrons par rapport aux protons, ou qu’il est trop lourd', 'il possède exactement un proton', 'il ne contient aucun neutron ni proton', 'il est entouré d’électrons'], 0, 'Un déséquilibre neutrons/protons ou une masse trop élevée déstabilise le noyau.']
        ],

        'physique_carnet_6e_16': [
            ['La relation d’Einstein entre masse et énergie s’écrit...', ['E = m × c²', 'E = m × c', 'E = m / c²', 'E = m² × c'], 0, 'E = mc² : la masse et l’énergie sont équivalentes.'],
            ['La fission nucléaire consiste à...', ['diviser un noyau lourd en deux noyaux plus légers en libérant de l’énergie', 'fusionner deux noyaux légers en un noyau plus lourd', 'arracher des électrons à un atome', 'accélérer des protons dans un champ magnétique'], 0, 'C’est le principe utilisé dans les réacteurs nucléaires (uranium, plutonium).'],
            ['Dans un réacteur nucléaire, les barres de contrôle servent à...', ['absorber des neutrons pour réguler la réaction en chaîne', 'accélérer la réaction en chaîne sans limite', 'refroidir directement le combustible', 'produire l’électricité directement'], 0, 'Elles permettent de maintenir la réaction en chaîne sous contrôle, contrairement à une bombe.'],
            ['La fusion nucléaire, source d’énergie du Soleil, nécessite...', ['des températures supérieures à 100 millions de degrés', 'des températures proches de 0 °C', 'l’absence totale de pression', 'un vide parfait sans aucune matière'], 0, 'Ces températures extrêmes créent un plasma nécessaire à la fusion.'],
            ['Le modérateur dans un réacteur nucléaire a pour rôle de...', ['ralentir les neutrons rapides pour maintenir la réaction en chaîne', 'accélérer les neutrons au maximum', 'absorber toute la radioactivité', 'remplacer le combustible'], 0, 'Les neutrons doivent être ralentis (eau, graphite) pour provoquer efficacement de nouvelles fissions.'],
            ['Comparée à la fission, la fusion nucléaire présente l’avantage de...', ['ne pas produire de déchets radioactifs à longue durée de vie', 'utiliser un combustible beaucoup plus rare', 'nécessiter des températures plus basses', 'être plus facile à contrôler techniquement'], 0, 'Le deutérium (dans l’eau de mer) est abondant, et la fusion ne produit pas de déchets à vie longue.'],
            ['Le projet ITER (Cadarache, France) a pour objectif de...', ['démontrer la viabilité de la fusion nucléaire contrôlée', 'produire de l’énergie par fission uniquement', 'stocker des déchets radioactifs', 'étudier uniquement la relativité générale'], 0, 'ITER est un réacteur expérimental international visant à démontrer la fusion contrôlée (Q>1).'],
            ['Une réaction en chaîne se produit quand...', ['les neutrons émis par une fission provoquent d’autres fissions', 'un seul neutron est émis sans jamais en provoquer d’autres', 'la masse d’uranium est inférieure à la masse critique', 'aucun neutron n’est libéré durant la réaction'], 0, 'Chaque fission libère des neutrons qui déclenchent de nouvelles fissions, en cascade.']
        ],

        'physique_carnet_6e_17': [
            ['Selon le deuxième postulat de la relativité restreinte, la vitesse de la lumière dans le vide...', ['est la même pour tous les observateurs, quelle que soit leur vitesse', 'dépend de la vitesse de l’observateur', 'dépend de la vitesse de la source lumineuse', 'varie selon la couleur de la lumière'], 0, 'Ce postulat, contre-intuitif, est à la base de toute la relativité restreinte.'],
            ['La dilatation du temps signifie qu’une horloge en mouvement, vue par un observateur au repos...', ['retarde par rapport à une horloge au repos', 'avance par rapport à une horloge au repos', 's’arrête complètement', 'reste parfaitement synchronisée'], 0, 'Vérifié expérimentalement avec les muons cosmiques et les satellites GPS.'],
            ['Le facteur de Lorentz γ = 1/√(1−v²/c²) est toujours...', ['supérieur ou égal à 1', 'inférieur à 1', 'égal à 0', 'négatif'], 0, 'γ vaut exactement 1 à vitesse nulle et augmente avec v, sans jamais descendre sous 1.'],
            ['Les satellites GPS doivent corriger leurs horloges car...', ['leur vitesse et leur altitude modifient l’écoulement du temps par rapport à la Terre', 'ils n’utilisent aucune horloge précise', 'la lumière ne les atteint jamais', 'leur masse est nulle'], 0, 'Relativité restreinte (vitesse) et générale (altitude) agissent en sens opposés sur leurs horloges.'],
            ['La relativité générale décrit la gravitation comme...', ['une courbure de l’espace-temps due à la masse', 'une force qui se propage instantanément', 'une illusion sans réalité physique', 'identique en tout point à la force électromagnétique'], 0, 'Les corps massifs courbent l’espace-temps ; les autres corps suivent cette courbure.'],
            ['La déflexion de la lumière par la gravité a été confirmée pour la première fois lors de...', ['l’éclipse solaire de 1919', 'la découverte du boson de Higgs en 2012', 'la première détection d’ondes gravitationnelles en 2015', 'l’expérience de Young en 1801'], 0, 'L’observation d’Eddington en 1919 a confirmé une prédiction majeure d’Einstein.'],
            ['Un trou noir est une région où...', ['la courbure de l’espace-temps est si intense que rien, pas même la lumière, ne peut s’échapper', 'la gravité est nulle', 'la vitesse de la lumière devient infinie', 'le temps s’écoule plus vite qu’ailleurs'], 0, 'Au-delà du rayon de Schwarzschild, rien ne peut s’échapper de l’attraction du trou noir.'],
            ['Les ondes gravitationnelles, prédites en 1915, ont été détectées pour la première fois en...', ['2015 (LIGO)', '1919', '1905', '2012 (CERN)'], 0, 'Un siècle après leur prédiction par Einstein, LIGO les a détectées en 2015.']
        ],

        'physique_carnet_6e_18': [
            ['Selon le modèle de Bohr, les électrons d’un atome...', ['ne peuvent occuper que des niveaux d’énergie bien définis (quantifiés)', 'peuvent avoir n’importe quelle énergie de façon continue', 'sont toujours au repos autour du noyau', 'n’ont aucune énergie propre'], 0, 'C’est l’idée centrale du modèle de Bohr : des orbites d’énergie discrètes.'],
            ['Un électron émet un photon quand il passe...', ['d’un niveau d’énergie supérieur à un niveau inférieur', 'd’un niveau d’énergie inférieur à un niveau supérieur', 'toujours à vitesse constante sans changer de niveau', 'hors de l’atome uniquement'], 0, 'L’émission correspond à une perte d’énergie, donc une transition vers un niveau plus bas.'],
            ['Le principe d’incertitude de Heisenberg énonce que...', ['on ne peut connaître simultanément et précisément la position et la quantité de mouvement d’une particule', 'on peut toujours mesurer position et vitesse avec une précision infinie', 'seule la position d’une particule existe réellement', 'ce principe ne concerne que les objets macroscopiques'], 0, 'C’est une limite fondamentale de la nature, pas un simple problème d’instrument.'],
            ['Le boson de Higgs, découvert en 2012 au CERN, est responsable de...', ['donner leur masse aux autres particules', 'transmettre la force électromagnétique', 'transmettre la force forte entre quarks', 'constituer les protons et les neutrons'], 0, 'Le mécanisme de Higgs explique pourquoi les particules du Modèle Standard ont une masse.'],
            ['Les quarks up et down sont les constituants de...', ['protons et neutrons', 'électrons et muons', 'photons et gluons', 'neutrinos uniquement'], 0, 'Le proton (uud) et le neutron (udd) sont formés de quarks up et down.'],
            ['Le photon est le boson de jauge responsable de...', ['la force électromagnétique', 'la force forte', 'la force faible', 'la gravitation'], 0, 'Le photon transmet l’interaction électromagnétique ; les gluons transmettent la force forte.'],
            ['L’énergie de l’état fondamental (n=1) de l’atome d’hydrogène est de...', ['−13,6 eV', '+13,6 eV', '0 eV', '−1 eV'], 0, 'C’est l’énergie la plus basse possible ; +13,6 eV est l’énergie d’ionisation.'],
            ['Le LHC (Grand Collisionneur de Hadrons), situé au CERN, est...', ['l’accélérateur de particules le plus puissant du monde', 'un télescope spatial', 'un réacteur à fusion expérimental', 'un détecteur d’ondes gravitationnelles'], 0, 'C’est dans le LHC qu’a été découvert le boson de Higgs en 2012.']
        ],

        'physique_carnet_6e_19': [
            ['Une étoile est en équilibre entre...', ['la gravité qui la comprime et la pression de radiation qui la dilate', 'la lumière et l’obscurité', 'le champ magnétique et le champ électrique', 'sa rotation et sa translation'], 0, 'Cet équilibre hydrostatique maintient l’étoile stable pendant la majeure partie de sa vie.'],
            ['Une étoile de faible masse comme le Soleil terminera sa vie en...', ['naine blanche', 'trou noir', 'étoile à neutrons', 'supernova immédiate'], 0, 'Les étoiles de moins de 8 masses solaires finissent en naines blanches, pas en trous noirs.'],
            ['La loi de Hubble s’écrit...', ['v = H0 × d', 'v = H0 / d', 'v = H0 + d', 'v = H0 × d²'], 0, 'La vitesse de récession d’une galaxie est proportionnelle à sa distance.'],
            ['Le décalage vers le rouge (redshift) d’une galaxie indique...', ['qu’elle s’éloigne de nous', 'qu’elle se rapproche de nous', 'qu’elle ne bouge pas', 'qu’elle est très proche du système solaire'], 0, 'La lumière d’une galaxie qui s’éloigne est décalée vers les grandes longueurs d’onde (rouge).'],
            ['Le Fond Diffus Cosmologique (CMB), découvert en 1964, est considéré comme...', ['un rayonnement fossile reliquat du Big Bang', 'la lumière émise par le Soleil', 'un signal provenant d’un trou noir proche', 'une preuve que l’Univers n’est pas en expansion'], 0, 'Ce rayonnement à 2,73 K est une des preuves majeures du Big Bang.'],
            ['L’âge estimé de l’Univers depuis le Big Bang est d’environ...', ['13,8 milliards d’années', '4,6 milliards d’années', '100 millions d’années', '1 000 milliards d’années'], 0, '4,6 milliards d’années est l’âge du Soleil, pas celui de l’Univers.'],
            ['Pendant la nucléosynthèse primordiale, quelques minutes après le Big Bang, se forment principalement...', ['l’hydrogène, l’hélium et un peu de lithium', 'le fer et le carbone', 'les premières galaxies complètes', 'les trous noirs supermassifs'], 0, 'Les éléments lourds ne se forment que plus tard, dans le cœur des étoiles.'],
            ['Une étoile massive (plus de 8 masses solaires) termine généralement sa vie par...', ['une supernova, puis une étoile à neutrons ou un trou noir', 'une naine blanche stable', 'une expansion infinie sans effondrement', 'une transformation directe en planète'], 0, 'Sa gravité intense provoque un effondrement violent suivi d’une explosion en supernova.']
        ]

    };

    Object.keys(DATA).forEach(function (id) {
        var chapter = findChapter(id);
        if (!chapter || !Array.isArray(chapter.exercices)) return;
        DATA[id].forEach(function (row, i) {
            chapter.exercices.push({
                question: row[0],
                options: row[1],
                correct: row[2],
                correction: row[3],
                niveau: ['Comprendre', 'Appliquer', 'Analyser'][i % 3],
                contentVersion: 1
            });
        });
    });

})();
