/* Questions contextualisées : remplacement à indice constant pour préserver le suivi. */
(function(){
var replacements={
  "lib_chimie_3e_1": {
    "question": "On filtre de l’eau salée limpide avec un filtre à café. Que retrouve-t-on dans le filtrat ?",
    "options": [
      "De l’eau contenant encore le sel dissous",
      "De l’eau pure",
      "Uniquement du sel solide",
      "Aucun liquide"
    ],
    "correct": 0,
    "correction": "Les ions dissous traversent le filtre ; la filtration sépare des particules solides en suspension.",
    "niveau": "Application"
  },
  "lib_chimie_3e_2": {
    "question": "Un ion sodium Na⁺ possède 11 protons. Combien possède-t-il d’électrons ?",
    "options": [
      "10",
      "11",
      "12",
      "22"
    ],
    "correct": 0,
    "correction": "La charge +1 correspond à la perte d’un électron : 11 − 1 = 10.",
    "niveau": "Application"
  },
  "lib_chimie_3e_3": {
    "question": "Le lithium et le sodium sont dans la première colonne du tableau. Quel point commun explique leur comportement chimique proche ?",
    "options": [
      "Un électron de valence",
      "Le même nombre de protons",
      "La même masse atomique",
      "Le même nombre de couches électroniques"
    ],
    "correct": 0,
    "correction": "Les éléments de cette famille possèdent un électron sur leur couche externe.",
    "niveau": "Application"
  },
  "lib_chimie_3e_4": {
    "question": "Dans un cristal de NaCl, qu’est-ce qui assure la cohésion ?",
    "options": [
      "L’attraction entre ions de charges opposées",
      "L’attraction entre deux noyaux positifs",
      "Le partage d’un seul électron dans chaque molécule NaCl isolée",
      "L’absence de charges"
    ],
    "correct": 0,
    "correction": "Le solide ionique forme un réseau : les ions Na⁺ et Cl⁻ s’attirent électrostatiquement.",
    "niveau": "Application"
  },
  "lib_chimie_3e_5": {
    "question": "Quels coefficients équilibrent Al + O₂ → Al₂O₃ ?",
    "options": [
      "4 ; 3 ; 2",
      "2 ; 3 ; 1",
      "1 ; 1 ; 1",
      "2 ; 1 ; 2"
    ],
    "correct": 0,
    "correction": "4 Al + 3 O₂ → 2 Al₂O₃ conserve quatre atomes d’aluminium et six d’oxygène.",
    "niveau": "Application"
  },
  "lib_chimie_3e_6": {
    "question": "Quelle quantité de matière représentent 9 g d’eau si M = 18 g/mol ?",
    "options": [
      "0,50 mol",
      "2 mol",
      "162 mol",
      "9 mol"
    ],
    "correct": 0,
    "correction": "n = m/M = 9/18 = 0,50 mol.",
    "niveau": "Application"
  },
  "lib_chimie_4e_1": {
    "question": "Pour 2A + B → 2C, on dispose de 3 mol A et 1 mol B. Quel est le bilan final si la réaction est totale ?",
    "options": [
      "2 mol C et 1 mol A restante",
      "3 mol C uniquement",
      "2 mol C et 1 mol B restante",
      "1 mol C et 2 mol A restantes"
    ],
    "correct": 0,
    "correction": "B est limitant : 1 mol B consomme 2 mol A et produit 2 mol C ; il reste 1 mol A.",
    "niveau": "Application"
  },
  "lib_chimie_4e_2": {
    "question": "On dilue 20 mL à 0,50 mol/L jusqu’à 100 mL. Quelle est la concentration finale ?",
    "options": [
      "0,10 mol/L",
      "2,5 mol/L",
      "0,50 mol/L",
      "0,020 mol/L"
    ],
    "correct": 0,
    "correction": "La quantité de soluté est conservée : C₂ = C₁V₁/V₂ = 0,50 × 20/100.",
    "niveau": "Application"
  },
  "lib_chimie_4e_3": {
    "question": "Une solution aqueuse a [H₃O⁺] = 10⁻³ mol/L. Quel est son pH dans le modèle dilué ?",
    "options": [
      "3",
      "−3",
      "11",
      "0,001"
    ],
    "correct": 0,
    "correction": "pH = −log₁₀([H₃O⁺]/1 mol/L) = 3.",
    "niveau": "Application"
  },
  "lib_chimie_4e_4": {
    "question": "Dans Zn + Cu²⁺ → Zn²⁺ + Cu, quelle espèce est le réducteur ?",
    "options": [
      "Zn",
      "Cu²⁺",
      "Zn²⁺",
      "Cu"
    ],
    "correct": 0,
    "correction": "Zn cède deux électrons : Zn → Zn²⁺ + 2 e⁻. Le donneur d’électrons est le réducteur.",
    "niveau": "Application"
  },
  "lib_chimie_4e_5": {
    "question": "Un gaz parfait occupe 2 L à 300 K. À pression constante, quel volume occupe-t-il à 450 K ?",
    "options": [
      "3 L",
      "1,33 L",
      "4 L",
      "2 L"
    ],
    "correct": 0,
    "correction": "V/T est constant : V₂ = 2 × 450/300 = 3 L. Les températures sont en kelvins.",
    "niveau": "Application"
  },
  "lib_chimie_4e_6": {
    "question": "Quel groupe caractéristique porte l’éthanol CH₃CH₂OH ?",
    "options": [
      "Hydroxyle d’un alcool",
      "Carboxyle d’un acide",
      "Carbonyle d’une cétone",
      "Double liaison C=C"
    ],
    "correct": 0,
    "correction": "Le groupe −OH lié ici à un carbone saturé caractérise un alcool.",
    "niveau": "Application"
  },
  "lib_chimie_5e_1": {
    "question": "Un atome neutre a la répartition électronique 2,8,7. Combien d’électrons lui manque-t-il pour compléter l’octet externe ?",
    "options": [
      "1",
      "7",
      "8",
      "17"
    ],
    "correct": 0,
    "correction": "La couche externe contient sept électrons ; un électron supplémentaire complète l’octet.",
    "niveau": "Application"
  },
  "lib_chimie_5e_2": {
    "question": "Une réaction à pression constante présente ΔH = −120 kJ par mole de réaction. Que signifie ce signe ?",
    "options": [
      "Le système libère de la chaleur",
      "Le système absorbe de la chaleur",
      "La réaction est nécessairement instantanée",
      "La température ne peut jamais changer"
    ],
    "correct": 0,
    "correction": "Un ΔH négatif caractérise une réaction exothermique ; cela ne donne pas sa vitesse.",
    "niveau": "Application"
  },
  "lib_chimie_5e_3": {
    "question": "On ajoute un catalyseur à une réaction. Quel changement explique l’accélération ?",
    "options": [
      "Un chemin réactionnel d’énergie d’activation plus faible",
      "Une augmentation obligatoire de ΔH",
      "La disparition de l’état final",
      "Une modification de la quantité de matière conservée"
    ],
    "correct": 0,
    "correction": "Le catalyseur fournit un mécanisme alternatif et ne modifie pas le bilan thermodynamique.",
    "niveau": "Application"
  },
  "lib_chimie_5e_4": {
    "question": "À température constante, on comprime un équilibre N₂ + 3 H₂ ⇌ 2 NH₃ gazeux. Quel déplacement est favorisé ?",
    "options": [
      "Vers NH₃",
      "Vers N₂ et H₂",
      "Aucun déplacement car toutes les espèces sont gazeuses",
      "Vers le côté ayant quatre moles de gaz"
    ],
    "correct": 0,
    "correction": "La compression favorise le côté comportant moins de moles gazeuses : deux à droite contre quatre à gauche.",
    "niveau": "Application"
  },
  "lib_chimie_5e_5": {
    "question": "Pour un tampon acide faible/base conjuguée, [base] = [acide]. Que donne Henderson–Hasselbalch dans ses conditions d’application ?",
    "options": [
      "pH = pKa",
      "pH = 2 pKa",
      "pH = 7 dans tous les cas",
      "pH = 0"
    ],
    "correct": 0,
    "correction": "pH = pKa + log([base]/[acide]) ; log(1) = 0.",
    "niveau": "Application"
  },
  "lib_chimie_5e_6": {
    "question": "Dans une pile Zn/Cu, le zinc s’oxyde. Dans quel sens circulent les électrons dans le fil extérieur ?",
    "options": [
      "Du zinc vers le cuivre",
      "Du cuivre vers le zinc",
      "Du pont salin vers le zinc",
      "Ils restent immobiles"
    ],
    "correct": 0,
    "correction": "L’anode de zinc libère les électrons consommés à la cathode de cuivre ; le pont salin transporte des ions.",
    "niveau": "Application"
  },
  "lib_chimie_6e_1": {
    "question": "Quelle paire constitue deux isomères de constitution de formule C₂H₆O ?",
    "options": [
      "Éthanol et méthoxyméthane",
      "Éthanol et éthane",
      "Éthène et éthane",
      "Méthanol et éthanol"
    ],
    "correct": 0,
    "correction": "CH₃CH₂OH et CH₃OCH₃ ont la même formule brute, mais des enchaînements différents.",
    "niveau": "Application"
  },
  "lib_chimie_6e_2": {
    "question": "L’hydrogénation de CH₂=CH₂ par H₂ donne quel produit ?",
    "options": [
      "CH₃−CH₃",
      "CH≡CH",
      "CH₃OH",
      "CO₂"
    ],
    "correct": 0,
    "correction": "L’addition de H₂ sur la double liaison produit l’éthane en présence d’un catalyseur approprié.",
    "niveau": "Application"
  },
  "lib_chimie_6e_3": {
    "question": "Lors de la polymérisation par addition de l’éthène, que devient la double liaison ?",
    "options": [
      "Elle permet de relier les monomères par des liaisons simples",
      "Elle reste identique dans chaque unité de la chaîne",
      "Elle produit obligatoirement de l’eau",
      "Elle transforme chaque carbone en oxygène"
    ],
    "correct": 0,
    "correction": "Le polyéthylène a pour motif −CH₂−CH₂− ; cette addition ne libère pas de petite molécule.",
    "niveau": "Application"
  },
  "lib_chimie_6e_4": {
    "question": "Un apport excessif de phosphates favorise une prolifération d’algues. Pourquoi l’oxygène dissous peut-il ensuite diminuer ?",
    "options": [
      "La décomposition de la biomasse consomme du dioxygène",
      "Les phosphates deviennent du dioxygène",
      "L’eau cesse de contenir des molécules",
      "Toute photosynthèse consomme du dioxygène"
    ],
    "correct": 0,
    "correction": "La dégradation microbienne de la matière organique accroît la consommation de dioxygène : c’est un mécanisme de l’eutrophisation.",
    "niveau": "Application"
  },
  "lib_chimie_6e_5": {
    "question": "Une droite d’étalonnage est A = 0,20 c, avec c en mmol/L. Quelle concentration correspond à A = 0,60 ?",
    "options": [
      "3,0 mmol/L",
      "0,12 mmol/L",
      "0,33 mmol/L",
      "0,80 mmol/L"
    ],
    "correct": 0,
    "correction": "Dans le domaine linéaire de cet étalonnage, c = A/0,20 = 3,0 mmol/L.",
    "niveau": "Application"
  },
  "lib_chimie_6e_6": {
    "question": "On dissout 5,85 g de NaCl (M = 58,5 g/mol) dans une fiole de 500 mL. Quelle concentration molaire obtient-on ?",
    "options": [
      "0,200 mol/L",
      "0,100 mol/L",
      "11,7 mol/L",
      "0,000200 mol/L"
    ],
    "correct": 0,
    "correction": "n = 0,100 mol ; V = 0,500 L ; C = n/V = 0,200 mol/L.",
    "niveau": "Application"
  },
  "lib_physique_3e_1": {
    "question": "Une longueur vaut 12,4 ± 0,2 cm. Quel intervalle correspond à cette écriture ?",
    "options": [
      "[12,2 ; 12,6] cm",
      "[12,4 ; 12,6] cm",
      "[12,0 ; 12,8] cm",
      "[0,2 ; 12,4] cm"
    ],
    "correct": 0,
    "correction": "On retranche puis ajoute l’incertitude absolue à la valeur mesurée.",
    "niveau": "Application"
  },
  "lib_physique_3e_2": {
    "question": "Un cycliste parcourt 150 m en 30 s. Quelle est sa vitesse moyenne ?",
    "options": [
      "5 m/s",
      "4500 m/s",
      "0,20 m/s",
      "180 m/s"
    ],
    "correct": 0,
    "correction": "v = distance/durée = 150/30 = 5 m/s.",
    "niveau": "Application"
  },
  "lib_physique_3e_3": {
    "question": "Deux forces colinéaires de 8 N vers la droite et 3 N vers la gauche agissent sur un objet. Quelle est leur résultante ?",
    "options": [
      "5 N vers la droite",
      "11 N vers la droite",
      "5 N vers la gauche",
      "0 N"
    ],
    "correct": 0,
    "correction": "On choisit la droite positive : 8 − 3 = 5 N.",
    "niveau": "Application"
  },
  "lib_physique_3e_4": {
    "question": "Une force normale de 100 N agit sur 0,020 m². Quelle pression exerce-t-elle ?",
    "options": [
      "5000 Pa",
      "2 Pa",
      "5 Pa",
      "0,0002 Pa"
    ],
    "correct": 0,
    "correction": "p = F/S = 100/0,020 = 5000 Pa.",
    "niveau": "Application"
  },
  "lib_physique_3e_5": {
    "question": "À masse constante, on double la vitesse d’un objet. Que devient son énergie cinétique ?",
    "options": [
      "Elle est multipliée par quatre",
      "Elle double",
      "Elle est divisée par deux",
      "Elle reste constante"
    ],
    "correct": 0,
    "correction": "Ec = mv²/2 : le carré de la vitesse est multiplié par quatre.",
    "niveau": "Application"
  },
  "lib_physique_3e_6": {
    "question": "Quelle énergie faut-il pour chauffer 0,50 kg d’eau de 10 °C, sans perte, avec c = 4180 J/(kg·K) ?",
    "options": [
      "20 900 J",
      "2090 J",
      "83 600 J",
      "209 J"
    ],
    "correct": 0,
    "correction": "Q = mcΔT = 0,50 × 4180 × 10 = 20 900 J.",
    "niveau": "Application"
  },
  "lib_physique_4e_1": {
    "question": "Une résistance de 12 Ω est soumise à 6 V. Quelle intensité la traverse ?",
    "options": [
      "0,50 A",
      "2 A",
      "72 A",
      "18 A"
    ],
    "correct": 0,
    "correction": "Pour un conducteur ohmique, I = U/R = 6/12 = 0,50 A.",
    "niveau": "Application"
  },
  "lib_physique_4e_2": {
    "question": "Deux résistances de 6 Ω identiques sont branchées en parallèle. Quelle est leur résistance équivalente ?",
    "options": [
      "3 Ω",
      "12 Ω",
      "6 Ω",
      "36 Ω"
    ],
    "correct": 0,
    "correction": "1/Réq = 1/6 + 1/6 = 1/3 ; Réq = 3 Ω.",
    "niveau": "Application"
  },
  "lib_physique_4e_3": {
    "question": "On inverse le courant dans une bobine, à intensité égale. Que devient son champ magnétique ?",
    "options": [
      "Son sens s’inverse",
      "Sa direction devient nécessairement perpendiculaire à l’axe",
      "Il disparaît toujours",
      "Son intensité double toujours"
    ],
    "correct": 0,
    "correction": "Le champ d’une bobine dépend du sens du courant ; l’inversion échange ses pôles.",
    "niveau": "Application"
  },
  "lib_physique_4e_4": {
    "question": "Une onde a une fréquence de 50 Hz et une longueur d’onde de 2 m. Quelle est sa célérité ?",
    "options": [
      "100 m/s",
      "25 m/s",
      "0,04 m/s",
      "52 m/s"
    ],
    "correct": 0,
    "correction": "v = λf = 2 × 50 = 100 m/s.",
    "niveau": "Application"
  },
  "lib_physique_4e_5": {
    "question": "Deux sons purs ont des fréquences de 220 Hz et 440 Hz. Lequel est le plus aigu ?",
    "options": [
      "Celui de 440 Hz",
      "Celui de 220 Hz",
      "Ils ont forcément la même hauteur",
      "On ne peut le savoir qu’avec leur durée"
    ],
    "correct": 0,
    "correction": "La hauteur d’un son pur augmente avec sa fréquence ; elle ne décrit pas son volume sonore.",
    "niveau": "Application"
  },
  "lib_physique_4e_6": {
    "question": "Un rayon arrive à 30° de la normale sur un miroir plan. Quel est l’angle de réflexion mesuré à la normale ?",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "correct": 0,
    "correction": "La loi de la réflexion donne r = i, les deux angles étant mesurés à la normale.",
    "niveau": "Application"
  },
  "lib_physique_5e_1": {
    "question": "Une vitesse passe de 2 à 8 m/s en 3 s sur un axe fixé. Quelle est l’accélération moyenne ?",
    "options": [
      "2 m/s²",
      "6 m/s²",
      "18 m/s²",
      "10/3 m/s²"
    ],
    "correct": 0,
    "correction": "a = Δv/Δt = (8 − 2)/3 = 2 m/s².",
    "niveau": "Application"
  },
  "lib_physique_5e_2": {
    "question": "La résultante des forces sur une masse de 2 kg vaut 6 N. Quelle accélération obtient-on dans un référentiel inertiel ?",
    "options": [
      "3 m/s²",
      "12 m/s²",
      "1/3 m/s²",
      "8 m/s²"
    ],
    "correct": 0,
    "correction": "ΣF = ma, donc a = 6/2 = 3 m/s², dans le sens de la résultante.",
    "niveau": "Application"
  },
  "lib_physique_5e_3": {
    "question": "Un chariot de 2 kg à 3 m/s s’accroche à un chariot de 1 kg immobile. Sans force extérieure horizontale résultante, quelle vitesse commune suit le choc ?",
    "options": [
      "2 m/s",
      "3 m/s",
      "6 m/s",
      "1 m/s"
    ],
    "correct": 0,
    "correction": "La quantité de mouvement se conserve : 2 × 3 = (2 + 1)v, donc v = 2 m/s.",
    "niveau": "Application"
  },
  "lib_physique_5e_4": {
    "question": "On double la distance entre deux masses ponctuelles. Que devient leur force gravitationnelle ?",
    "options": [
      "Elle est divisée par quatre",
      "Elle est divisée par deux",
      "Elle double",
      "Elle ne change pas"
    ],
    "correct": 0,
    "correction": "F est proportionnelle à 1/r² ; doubler r multiplie le dénominateur par quatre.",
    "niveau": "Application"
  },
  "lib_physique_5e_5": {
    "question": "Une masse tombe de 5 m sans vitesse initiale ni frottement. Avec g = 10 m/s², quelle vitesse atteint-elle ?",
    "options": [
      "10 m/s",
      "50 m/s",
      "5 m/s",
      "100 m/s"
    ],
    "correct": 0,
    "correction": "mgh = mv²/2 donne v = √(2gh) = √100 = 10 m/s.",
    "niveau": "Application"
  },
  "lib_physique_5e_6": {
    "question": "Deux petites charges positives sont proches. Quelle interaction électrique exercent-elles l’une sur l’autre ?",
    "options": [
      "Une répulsion",
      "Une attraction",
      "Aucune car leurs signes sont égaux",
      "Une attraction puis une répulsion sans condition"
    ],
    "correct": 0,
    "correction": "Les charges de même signe se repoussent ; celles de signes opposés s’attirent.",
    "niveau": "Application"
  },
  "lib_physique_6e_1": {
    "question": "Une charge se déplace parallèlement à un champ magnétique uniforme. Quelle force magnétique subit-elle ?",
    "options": [
      "Une force nulle",
      "Une force maximale",
      "Une force toujours parallèle au champ",
      "Une force égale à qB sans dépendance à la vitesse"
    ],
    "correct": 0,
    "correction": "F = valeur absolue de q × vB sinθ et θ = 0, donc F = 0.",
    "niveau": "Application"
  },
  "lib_physique_6e_2": {
    "question": "La masse d’un oscillateur sur ressort idéal est multipliée par quatre, k restant constant. Que devient sa période ?",
    "options": [
      "Elle double",
      "Elle quadruple",
      "Elle est divisée par deux",
      "Elle reste constante"
    ],
    "correct": 0,
    "correction": "T = 2π√(m/k) ; √4 = 2.",
    "niveau": "Application"
  },
  "lib_physique_6e_3": {
    "question": "Une corde de 1,2 m fixée aux deux extrémités vibre dans son mode fondamental. Quelle longueur d’onde correspond ?",
    "options": [
      "2,4 m",
      "1,2 m",
      "0,6 m",
      "4,8 m"
    ],
    "correct": 0,
    "correction": "Au fondamental L = λ/2, donc λ = 2L = 2,4 m.",
    "niveau": "Application"
  },
  "lib_physique_6e_4": {
    "question": "À longueur d’onde constante, on divise par deux la largeur d’une fente. Que devient l’angle caractéristique de diffraction dans l’approximation des petits angles ?",
    "options": [
      "Il double",
      "Il est divisé par deux",
      "Il reste constant",
      "Il est multiplié par quatre"
    ],
    "correct": 0,
    "correction": "θ ≈ λ/a : diviser a par deux double θ.",
    "niveau": "Application"
  },
  "lib_physique_6e_5": {
    "question": "Un échantillon radioactif contient initialement 800 noyaux du radionucléide étudié. Combien en reste-t-il en moyenne après trois demi-vies ?",
    "options": [
      "100",
      "400",
      "200",
      "0"
    ],
    "correct": 0,
    "correction": "N = 800 × (1/2)³ = 100 ; il s’agit d’une valeur moyenne statistique.",
    "niveau": "Application"
  },
  "lib_physique_6e_6": {
    "question": "Un moteur reçoit 500 J et fournit 350 J de travail utile. Quel rendement a-t-il ?",
    "options": [
      "70 %",
      "143 %",
      "30 %",
      "150 %"
    ],
    "correct": 0,
    "correction": "η = Eutile/Ereçue = 350/500 = 0,70 ; les 150 J restants ne sont pas de l’énergie détruite.",
    "niveau": "Application"
  }
};
Object.keys(replacements).forEach(function(id){var subject=id.split("_")[1];var chapters=Object.values(CESS_LIBRARY_DATA[subject].data).flat();var ch=chapters.find(function(c){return c.id===id;});if(!ch)return;var i=ch.exercices.findIndex(function(q){return /Quelle relation|Quelle erreur faut-il éviter/.test(q.question);});if(i<0)throw new Error("Question à remplacer introuvable : "+id);ch.exercices[i]=replacements[id];});
})();
