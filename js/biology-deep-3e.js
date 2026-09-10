/* Approfondissements originaux — Biologie 3e. */
(function () {
    if (typeof BIO_CHAPITRES === 'undefined' || !Array.isArray(BIO_CHAPITRES['3e'])) return;
    var contenus = {
  "bio3_cellule": {
    "m": "La théorie cellulaire repose sur trois idées : tout être vivant est constitué d’une ou plusieurs cellules, la cellule réalise les fonctions indispensables à la vie, et toute cellule provient d’une cellule préexistante. La membrane plasmique délimite la cellule et contrôle les échanges. Le cytoplasme contient les organites. Le noyau des cellules eucaryotes renferme l’ADN. Les mitochondries participent à la respiration cellulaire; les chloroplastes des cellules végétales réalisent la photosynthèse; la vacuole contribue au stockage et à la rigidité.",
    "lab": "Au microscope optique, commencer avec le plus faible objectif, centrer l’échantillon, régler la netteté avec la vis macrométrique puis utiliser la vis micrométrique. Le grossissement total est celui de l’oculaire multiplié par celui de l’objectif. Un dessin scientifique doit comporter un titre, des traits nets, des légendes horizontales et le grossissement. Une cellule d’épiderme d’oignon montre une paroi et une grande vacuole; une cellule buccale possède une membrane mais pas de paroi.",
    "app": "Comparer bactéries, cellules animales et végétales permet de distinguer procaryotes et eucaryotes. Une bactérie ne possède pas de noyau délimité, mais contient une membrane, du cytoplasme, des ribosomes et de l’ADN. Les virus ne sont pas des cellules : ils dépendent d’une cellule hôte pour se multiplier."
  },
  "bio3_organisation": {
    "m": "La spécialisation cellulaire résulte de l’expression différente des gènes. Un neurone possède des prolongements adaptés à la communication; une fibre musculaire contient des structures permettant la contraction; un globule rouge transporte le dioxygène. Des cellules semblables forment un tissu, plusieurs tissus constituent un organe, et des organes coordonnés forment un système. Une fonction comme la nutrition mobilise simultanément les systèmes digestif, respiratoire, circulatoire et excréteur.",
    "lab": "Pour analyser un organe, identifier d’abord les tissus présents, puis relier chaque structure à sa fonction. Dans l’intestin grêle, les replis, villosités et microvillosités augmentent la surface d’absorption. Dans les poumons, la finesse des alvéoles et leur riche vascularisation facilitent la diffusion. La relation structure-fonction doit toujours être justifiée par une caractéristique observable.",
    "app": "Les organismes maintiennent leur fonctionnement grâce à la coopération des systèmes. Une défaillance rénale modifie la composition du sang et affecte de nombreux organes. Cette interdépendance explique pourquoi une maladie localisée peut produire des effets dans tout l’organisme."
  },
  "bio3_nutrition": {
    "m": "Les glucides fournissent principalement de l’énergie, les lipides constituent une réserve et participent aux membranes, et les protéines ont des rôles structuraux et fonctionnels. Eau, sels minéraux et vitamines sont indispensables sans fournir directement d’énergie. La digestion mécanique fragmente les aliments; la digestion chimique utilise des enzymes spécifiques pour transformer les grosses molécules en nutriments absorbables : glucose, acides aminés, acides gras et glycérol.",
    "lab": "La bouche débute la digestion de l’amidon; l’estomac brasse et commence celle des protéines; l’intestin grêle reçoit bile et enzymes pancréatiques puis absorbe les nutriments. Une expérience avec amidon, amylase et eau iodée montre l’action enzymatique. Il faut comparer un tube expérimental à un témoin et maintenir température, durée et quantités identiques.",
    "app": "Une alimentation équilibrée varie selon l’âge, l’activité et la santé. Une carence résulte d’un apport ou d’une absorption insuffisante; un excès peut aussi être nocif. Les vitamines hydrosolubles sont peu stockées, tandis que plusieurs vitamines liposolubles peuvent s’accumuler. Une étiquette alimentaire doit être lue par portion et pour 100 g, en distinguant énergie, nutriments et ingrédients."
  },
  "bio3_respiration": {
    "m": "La ventilation correspond aux mouvements d’air provoqués par le diaphragme et les muscles intercostaux. Lors de l’inspiration, le volume thoracique augmente et l’air entre; lors de l’expiration calme, le relâchement musculaire réduit ce volume. Aux alvéoles, le dioxygène diffuse vers le sang et le dioxyde de carbone suit le trajet inverse selon les différences de concentration.",
    "lab": "Comparer air inspiré et expiré montre une diminution du dioxygène et une augmentation du dioxyde de carbone et de la vapeur d’eau. L’eau de chaux permet de détecter le CO₂. La fréquence respiratoire augmente pendant l’effort parce que les muscles consomment davantage d’ATP. Il faut mesurer au repos, après un effort standardisé puis pendant la récupération.",
    "app": "La respiration cellulaire utilise notamment glucose et dioxygène pour libérer de l’énergie transférée à l’ATP; elle produit du CO₂ et de l’eau. Ventilation et respiration cellulaire sont donc deux processus différents mais liés. Le tabac et les particules fines altèrent les voies respiratoires et les échanges alvéolaires."
  },
  "bio3_circulation": {
    "m": "Le cœur possède quatre cavités et fonctionne comme une double pompe. La circulation pulmonaire conduit le sang vers les poumons; la circulation générale alimente les organes. Les artères quittent le cœur, les veines y reviennent et les capillaires assurent les échanges. Le plasma transporte des substances dissoutes; les globules rouges transportent surtout le dioxygène; les globules blancs participent aux défenses; les plaquettes interviennent dans la coagulation.",
    "lab": "Le pouls correspond aux variations de pression dans les artères. Sa mesure avant et après effort permet de relier activité et débit cardiaque. Sur un schéma, suivre le sang en utilisant le sens de circulation plutôt que la couleur. Une artère ne transporte pas toujours du sang riche en dioxygène : l’artère pulmonaire constitue l’exception classique.",
    "app": "Les reins filtrent le plasma, réabsorbent les substances utiles et éliminent certains déchets dans l’urine. Ils participent à l’équilibre de l’eau et des ions. Hypertension, obstruction d’un vaisseau ou insuffisance rénale perturbent l’approvisionnement des cellules et l’homéostasie."
  },
  "bio3_photosynthese": {
    "m": "Dans les chloroplastes, l’énergie lumineuse permet de fabriquer du glucose à partir d’eau et de dioxyde de carbone, avec libération de dioxygène. Le glucose peut être utilisé par respiration, transformé en amidon ou servir à fabriquer d’autres molécules. La respiration a lieu jour et nuit dans les cellules végétales; la photosynthèse nécessite de la lumière.",
    "lab": "Pour montrer le rôle de la lumière, placer une partie d’une feuille à l’obscurité, décolorer ensuite la feuille et rechercher l’amidon avec l’iode. Une expérience valable ne modifie qu’un seul facteur et possède un témoin. Avec une plante aquatique, le nombre de bulles donne seulement une estimation du taux de photosynthèse; température, distance de la lampe et disponibilité en CO₂ doivent être contrôlées.",
    "app": "Les stomates règlent les échanges gazeux et la perte d’eau. Lumière, température, CO₂ et eau peuvent devenir des facteurs limitants. La photosynthèse constitue l’entrée principale d’énergie dans la plupart des écosystèmes et retire temporairement du CO₂ de l’atmosphère."
  },
  "bio3_ecosysteme": {
    "m": "Le biotope rassemble les conditions physiques et chimiques; la biocénose regroupe les êtres vivants. Les producteurs fabriquent leur matière organique, les consommateurs l’obtiennent en se nourrissant, et les décomposeurs transforment les restes en éléments minéraux. Les chaînes s’entrecroisent en réseaux trophiques. À chaque transfert, une partie de l’énergie est utilisée ou dissipée, ce qui limite le nombre de niveaux trophiques.",
    "lab": "Un inventaire écologique exige une méthode d’échantillonnage. Un quadrat convient aux organismes peu mobiles; un transect met en évidence une variation le long d’un gradient. Il faut noter surface, durée, date et conditions. La fréquence indique dans combien de relevés une espèce apparaît; l’abondance indique le nombre d’individus.",
    "app": "La disparition d’une espèce peut provoquer des effets en cascade. L’introduction d’une espèce invasive, l’eutrophisation ou la fragmentation d’un habitat modifient les interactions. Pour évaluer l’état d’un écosystème, croiser richesse spécifique, abondance, qualité du milieu et évolution dans le temps."
  }
};

    BIO_CHAPITRES['3e'].forEach(function (chapitre) {
        var ajout = contenus[chapitre.id];
        if (!ajout || chapitre.cours.indexOf('Mécanismes détaillés') !== -1) return;

        chapitre.cours +=
            '<h4>🔹 Mécanismes détaillés</h4><p>' + ajout.m + '</p>' +
            '<h4>🔹 Expérience et analyse</h4><p>' + ajout.lab + '</p>' +
            '<h4>🔹 Applications et santé</h4><p>' + ajout.app + '</p>' +
            '<h4>🔹 Questions de synthèse</h4><ol>' +
            '<li>Définir les structures ou acteurs du mécanisme.</li>' +
            '<li>Décrire les étapes dans leur ordre logique.</li>' +
            '<li>Expliquer le lien entre structure et fonction.</li>' +
            '<li>Interpréter une expérience en citant témoin, variable et résultat.</li>' +
            '</ol>';
    });
})();
