/* Enrichissement transversal de toutes les fiches de géographie. */
(function () {
    if (typeof GEO_CHAPITRES === 'undefined') return;

    var contenus = {
  "geo3_repères": [
    "Un territoire se lit à plusieurs échelles. Les centres concentrent population, emplois et décisions; les périphéries entretiennent avec eux des flux qui peuvent renforcer dépendance ou complémentarité.",
    "Comparer Bruxelles à l’échelle belge, européenne puis mondiale pour montrer comment sa fonction change selon l’échelle."
  ],
  "geo3_cartes": [
    "Une carte est une construction sélective. Projection, discrétisation, figurés, source et date influencent le message; une carte ne doit jamais être interprétée sans sa légende.",
    "Comparer deux cartes de densité utilisant des classes différentes et expliquer pourquoi l’impression visuelle change."
  ],
  "geo3_climats": [
    "Le climat résulte de la latitude, de l’altitude, du relief, de la distance à la mer et des circulations atmosphériques. Il influence sols, végétation et activités humaines.",
    "Comparer les diagrammes climatiques de Bruxelles, Rome et Dakar en calculant amplitude thermique et saison sèche."
  ],
  "geo3_population": [
    "La répartition combine contraintes naturelles, histoire, emplois, réseaux et politiques. Une forte densité n’indique ni richesse ni surpopulation sans comparaison avec ressources et équipements.",
    "Étudier les foyers d’Asie orientale et les faibles densités du Sahara en distinguant facteurs physiques et humains."
  ],
  "geo3_urbanisation": [
    "L’urbanisation augmente la population urbaine; la métropolisation concentre les fonctions rares de commandement. Ces processus produisent attractivité mais aussi ségrégation et pression foncière.",
    "Comparer Bruxelles et une métropole mondiale à partir des fonctions, réseaux, prix du logement et mobilités."
  ],
  "geo3_etalement": [
    "L’étalement transforme des sols ruraux en espaces bâtis, augmente les distances quotidiennes et le coût des réseaux. La densification et la mixité fonctionnelle peuvent limiter ces effets.",
    "Analyser une commune périurbaine belge à partir de cartes anciennes et récentes, des déplacements et de l’occupation du sol."
  ],
  "geo3_biomes": [
    "Les biomes dépendent surtout du climat, mais les sols, le relief, les perturbations et les activités humaines modifient leur organisation. Leurs limites sont progressives.",
    "Comparer forêt équatoriale, savane et désert le long d’un gradient de précipitations en Afrique."
  ],
  "geo3_ressources": [
    "Une substance devient ressource lorsqu’une société possède les besoins, techniques et moyens pour l’exploiter. Disponibilité physique, accessibilité et partage déterminent la rareté réelle.",
    "Étudier un bassin soumis à la concurrence entre eau potable, irrigation, industrie et protection des écosystèmes."
  ],
  "geo3_risques": [
    "Le risque associe aléa, exposition et vulnérabilité. Prévision, prévention, protection, préparation et reconstruction forment une chaîne de gestion.",
    "Comparer les effets de séismes de magnitude proche dans deux territoires présentant des constructions et moyens de secours différents."
  ],
  "geo3_transition_demo": [
    "La baisse de mortalité précède souvent celle de natalité, créant une croissance rapide, puis un vieillissement. Les migrations modifient aussi la structure par âge.",
    "Comparer les pyramides des âges de la Belgique et d’un pays d’Afrique subsaharienne et prévoir les besoins futurs."
  ],
  "geo4_eau": [
    "Le cycle naturel est transformé par barrages, pompages, irrigation et urbanisation. Le stress hydrique dépend du rapport entre prélèvements, disponibilité et qualité.",
    "Analyser le bassin du Nil ou de la Meuse en identifiant amont, aval, acteurs, usages, pollutions et coopérations."
  ],
  "geo4_nourriture": [
    "La sécurité alimentaire dépend de la disponibilité, de l’accès, de la qualité et de la stabilité. Production suffisante et absence de faim peuvent coexister à cause des inégalités.",
    "Suivre une filière céréalière depuis la production jusqu’au consommateur et mesurer pertes, prix et dépendances."
  ],
  "geo4_amenagement": [
    "Aménager signifie arbitrer entre usages concurrents. Accessibilité, coût, équité sociale, environnement et participation permettent d’évaluer un projet.",
    "Évaluer une nouvelle ligne ferroviaire belge du point de vue des habitants, entreprises, pouvoirs publics et milieux naturels."
  ],
  "geo4_transports": [
    "Un réseau associe axes, nœuds et flux. L’accessibilité se mesure en temps, coût et fréquence, pas seulement en distance kilométrique.",
    "Comparer voiture et train entre deux villes selon durée, prix, capacité, émissions et régularité."
  ],
  "geo4_migrations": [
    "Les migrations répondent à plusieurs facteurs push et pull; elles peuvent être internes, internationales, temporaires ou durables. Les réseaux familiaux orientent les destinations.",
    "Étudier un flux vers Bruxelles en distinguant causes, parcours, profils, intégration et effets sur territoires de départ et d’arrivée."
  ],
  "geo4_belgique": [
    "La Belgique articule État fédéral, Régions, Communautés, provinces et communes. Les compétences territoriales expliquent quels acteurs décident du logement, des transports ou de l’enseignement.",
    "Attribuer plusieurs politiques publiques au bon niveau de pouvoir et cartographier les limites institutionnelles."
  ],
  "geo4_energie": [
    "Du gisement au service final, chaque conversion entraîne pertes, infrastructures et impacts. Un mix se juge par coût, émissions, sécurité et flexibilité.",
    "Comparer le mix belge sur plusieurs années et discuter nucléaire, gaz, éolien, solaire, importations et sobriété."
  ],
  "geo4_climat": [
    "Les émissions modifient le bilan radiatif; les impacts varient selon exposition et vulnérabilité. Atténuation et adaptation doivent être combinées.",
    "Construire un plan canicule pour Bruxelles avec végétalisation, isolation, alertes sanitaires et réduction des émissions."
  ],
  "geo4_belgique_etude": [
    "Le réseau urbain belge, les ports, les axes européens et les contrastes régionaux structurent emplois et mobilités. L’étalement dépasse souvent les frontières administratives.",
    "Réaliser un diagnostic territorial reliant Bruxelles, Anvers, Liège et les espaces transfrontaliers."
  ],
  "geo5_energie": [
    "L’accès à l’énergie favorise santé, mobilité et production, mais les choix énergétiques créent dépendances et externalités. Une transition est technique, économique et sociale.",
    "Comparer deux pays ayant des IDH proches mais des mix énergétiques et émissions par habitant différents."
  ],
  "geo5_mondialisation": [
    "Les flux de marchandises, capitaux, informations et personnes organisent des réseaux hiérarchisés. Les firmes transnationales coordonnent des chaînes de valeur mondiales.",
    "Reconstituer le trajet d’un smartphone et localiser conception, matières premières, assemblage, vente et recyclage."
  ],
  "geo5_migrations": [
    "Les écarts de revenus, conflits, études, familles et changements environnementaux se combinent. Les politiques frontalières modifient routes et risques.",
    "Analyser une route migratoire avec cartes de flux, témoignages, statistiques et politiques des pays traversés."
  ],
  "geo5_ressources": [
    "La déforestation résulte de filières agricoles, minières, forestières et d’infrastructures. Ses moteurs directs doivent être reliés à la demande mondiale et aux acteurs locaux.",
    "Étudier l’Amazonie ou le bassin du Congo par images satellites, fronts pionniers, exportations et aires protégées."
  ],
  "geo5_puissance": [
    "La puissance combine territoire, population, économie, armée, technologie, alliances et influence culturelle. Elle varie selon les domaines et les échelles.",
    "Comparer États-Unis, Chine et Union européenne avec une grille multicritère plutôt qu’un classement unique."
  ],
  "geo5_maritime": [
    "Les façades concentrent ports, industries et connexions à l’arrière-pays. Détroits, canaux et ZEE sont stratégiques pour commerce, ressources et sécurité.",
    "Étudier la Northern Range et le port d’Anvers-Bruges dans les flux européens et mondiaux."
  ],
  "geo5_metropolisation": [
    "Les villes mondiales concentrent commandement, innovation et connexions, mais connaissent fragmentation et ségrégation. Elles fonctionnent en réseau.",
    "Comparer Londres, New York et Bruxelles à partir de fonctions, accessibilité, attractivité et inégalités."
  ],
  "geo5_agriculture": [
    "Les filières mondialisées relient intrants, production, transformation, commerce et distribution. Prix mondiaux, politiques et climat influencent les producteurs.",
    "Suivre le soja ou le cacao et identifier valeur ajoutée, acteurs dominants, impacts et alternatives durables."
  ],
  "geo5_inegalites": [
    "PIB, IDH, Gini, pauvreté multidimensionnelle et accès aux services mesurent des dimensions différentes. Les moyennes nationales cachent des contrastes internes.",
    "Comparer deux territoires avec un tableau d’indicateurs puis changer d’échelle pour observer les inégalités régionales."
  ],
  "geo5_industrie_chain": [
    "La localisation industrielle dépend des coûts, compétences, marchés, réseaux et risques. Délocalisation, automatisation et relocalisation transforment les territoires.",
    "Cartographier la chaîne automobile européenne et repérer fournisseurs, usines, plateformes logistiques et marchés."
  ],
  "geo6_developpement": [
    "Le développement durable exige des arbitrages entre environnement, société et économie dans le temps. Les ODD peuvent entrer en synergie ou en tension.",
    "Évaluer un projet énergétique avec indicateurs, bénéficiaires, coûts, impacts et solutions alternatives."
  ],
  "geo6_territoires": [
    "Un territoire combine fonctions résidentielle, productive, commerciale, récréative et écologique. Les acteurs disposent de pouvoirs et ressources inégaux.",
    "Analyser un projet d’aménagement littoral opposant tourisme, habitants, agriculture et protection de la nature."
  ],
  "geo6_puissance": [
    "La géopolitique étudie rivalités et coopérations pour le contrôle de territoires, ressources, routes et représentations. Les acteurs non étatiques comptent aussi.",
    "Analyser un détroit stratégique en reliant position, flux, bases militaires, alliances et dépendances."
  ],
  "geo6_essai": [
    "Une argumentation géographique associe thèse, arguments, preuves localisées, changements d’échelle et limites. Décrire ne suffit pas à expliquer.",
    "Construire un plan en trois parties à partir d’un dossier documentaire contradictoire et citer chaque preuve."
  ],
  "geo6_acteurs": [
    "État, collectivités, entreprises, associations et habitants élaborent des scénarios selon leurs intérêts. La prospective explore plusieurs futurs plausibles.",
    "Créer trois scénarios 2040 pour une ville : continuité, transition planifiée et crise, avec indicateurs de suivi."
  ],
  "geo6_gouvernance": [
    "La gouvernance mondiale repose sur négociations entre États, organisations, entreprises et société civile. Les décisions dépendent des règles, rapports de force et moyens d’application.",
    "Étudier un accord climatique ou sanitaire en distinguant objectifs, engagements, financement et contrôle."
  ],
  "geo6_union_europeenne": [
    "L’intégration organise libre circulation, politiques communes et solidarités, tout en conservant des souverainetés nationales. Les disparités motivent la cohésion.",
    "Comparer une région centrale et une région périphérique bénéficiaire de fonds européens."
  ],
  "geo6_sig": [
    "Un SIG associe géométrie, attributs et couches. Résolution, projection, date et qualité déterminent ce que l’analyse peut réellement conclure.",
    "Croiser population, inondations et routes pour sélectionner des zones prioritaires d’évacuation."
  ],
  "geo_methode": [
    "Toute réponse solide suit localiser, décrire, expliquer, comparer et conclure. Les documents doivent être référencés et leurs limites discutées.",
    "S’entraîner sur un dossier mêlant carte, graphique et texte en construisant un tableau preuves-interprétations."
  ],
  "geo_definitions": [
    "Une définition utile précise catégorie, caractéristiques et exemple. Les notions fonctionnent en chaînes causales plutôt qu’en listes isolées.",
    "Construire des cartes conceptuelles reliant acteurs, flux, réseaux, territoires, échelles et dynamiques."
  ]
};

    Object.keys(GEO_CHAPITRES).forEach(function (annee) {
        (GEO_CHAPITRES[annee] || []).forEach(function (chapitre) {
            var ajout = contenus[chapitre.id];
            if (!ajout || chapitre.cours.indexOf('Approfondissement coordonné') !== -1) return;

            var notions = (chapitre.matieres || []).join(', ');

            chapitre.cours +=
                '<h4>🔹 Approfondissement coordonné</h4>' +
                '<p>' + ajout[0] + '</p>' +
                '<p><b>Notions à relier :</b> ' + notions + '.</p>' +
                '<h4>🔹 Étude de cas guidée</h4>' +
                '<p>' + ajout[1] + '</p>' +
                '<ol><li>Localiser et préciser l’échelle.</li><li>Décrire les faits observables.</li><li>Identifier acteurs, causes et conséquences.</li><li>Comparer les solutions et leurs limites.</li></ol>' +
                '<h4>🔹 Analyser les documents</h4>' +
                '<p>Pour une carte, vérifier titre, légende, échelle, source et date. Pour un graphique, identifier variables, unités, tendance et ruptures. Croiser ensuite au moins deux documents avant de conclure et citer une donnée précise comme preuve.</p>';
        });
    });
})();
