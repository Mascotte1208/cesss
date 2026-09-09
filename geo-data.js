// Dans GEO_CHAPITRES, ajoutez ces chapitres :

'3e': [
    // ... vos chapitres existants ...
    
    // NOUVEAU : Étalement urbain et fonctions des territoires
    {
        id: 'geo3_etalement_urbain',
        titre: "6. Étalement urbain & Fonctions des territoires",
        desc: "UAA1 - L'urbanisation, l'étalement et les fonctions des territoires.",
        niveau: '3e',
        icone: '🏙️',
        color: '#6b46c1',
        
        cours: `
            <h4>🔹 L'étalement urbain</h4>
            
            <p>
                L'<b>étalement urbain</b> désigne l'extension
                des villes vers les espaces périphériques.
                Il se manifeste par la construction de lotissements,
                de zones commerciales et d'infrastructures en dehors
                des centres urbains.
            </p>
            
            <h4>🔹 Les causes</h4>
            
            <ul>
                <li>Recherche d'un cadre de vie plus agréable</li>
                <li>Coût du foncier moins élevé en périphérie</li>
                <li>Développement des infrastructures de transport</li>
                <li>Politiques d'aménagement favorisant l'extension</li>
            </ul>
            
            <h4>🔹 Les conséquences</h4>
            
            <ul>
                <li>Augmentation des migrations pendulaires</li>
                <li>Allongement des distances-temps</li>
                <li>Consommation d'espaces naturels et agricoles</li>
                <li>Augmentation des émissions de gaz à effet de serre</li>
                <li>Fragmentation des territoires</li>
            </ul>
            
            <h4>🔹 Exemples en Belgique</h4>
            
            <p>
                En Belgique, l'étalement urbain est particulièrement
                marqué en Flandre et en Wallonie, avec un habitat
                dispersé et des zones d'activités économiques
                en périphérie des villes.
            </p>
        `,
        
        objectifs: [
            'Définir l\'étalement urbain et identifier ses causes',
            'Expliquer les conséquences de l\'étalement urbain',
            'Analyser un exemple d\'étalement urbain en Belgique'
        ],
        
        matieres: [
            'Étalement urbain',
            'Migrations pendulaires',
            'Distance-temps',
            'Fonctions du territoire'
        ],
        
        exercices: [
            {
                question: 'L\'étalement urbain désigne...',
                options: [
                    'L\'extension des villes vers les périphéries',
                    'La concentration des populations dans les centres-villes',
                    'La diminution de la population urbaine',
                    'La construction de gratte-ciel'
                ],
                correct: 0,
                correction: 'L\'étalement urbain est l\'extension des villes vers les espaces périphériques.'
            },
            {
                question: 'Une conséquence de l\'étalement urbain est...',
                options: [
                    'L\'augmentation des migrations pendulaires',
                    'La réduction des distances-temps',
                    'La diminution de la consommation d\'espace',
                    'La baisse des émissions de CO2'
                ],
                correct: 0,
                correction: 'L\'étalement urbain entraîne une augmentation des déplacements domicile-travail.'
            }
        ]
    }
],

'4e': [
    // ... vos chapitres existants ...
    
    // NOUVEAU : Migrations en Belgique
    {
        id: 'geo4_migrations_belgique',
        titre: "5. Migrations en Belgique",
        desc: "UAA2 - Les migrations à toutes les échelles.",
        niveau: '4e',
        icone: '🧳',
        color: '#667eea',
        
        cours: `
            <h4>🔹 Les migrations en Belgique</h4>
            
            <p>
                La Belgique est un pays de migrations anciennes.
                Depuis le 19e siècle, elle accueille et envoie des
                populations vers d'autres territoires.
            </p>
            
            <h4>🔹 Les différents types de migrations</h4>
            
            <ul>
                <li>
                    <b>Migrations internes :</b>
                    déplacements à l'intérieur du pays
                    (ex: Wallonie → Flandre, Bruxelles → périphérie)
                </li>
                <li>
                    <b>Migrations internationales :</b>
                    déplacements entre la Belgique et d'autres pays
                </li>
                <li>
                    <b>Migrations pendulaires :</b>
                    déplacements quotidiens domicile-travail
                </li>
            </ul>
            
            <h4>🔹 Les flux migratoires</h4>
            
            <ul>
                <li>Immigration de travail (19e-20e siècles)</li>
                <li>Migrations économiques récentes</li>
                <li>Migrations de regroupement familial</li>
                <li>Migrations d'étudiants</li>
                <li>Migrations de retraités</li>
            </ul>
            
            <h4>🔹 Les territoires attractifs</h4>
            
            <p>
                Bruxelles, Anvers et les grandes villes attirent
                de nombreux migrants en raison de l'emploi,
                des études et des services.
            </p>
        `,
        
        objectifs: [
            'Identifier les différents types de migrations en Belgique',
            'Expliquer les facteurs d\'attraction et de départ',
            'Analyser les flux migratoires à différentes échelles'
        ],
        
        matieres: [
            'Migrations internes et internationales',
            'Flux migratoires',
            'Attractivité des territoires'
        ],
        
        exercices: [
            {
                question: 'Les migrations pendulaires sont...',
                options: [
                    'Des déplacements quotidiens entre le domicile et le travail',
                    'Des migrations internationales',
                    'Des déplacements touristiques',
                    'Des migrations de retraités'
                ],
                correct: 0,
                correction: 'Les migrations pendulaires sont des déplacements réguliers entre le domicile et le lieu de travail.'
            }
        ]
    }
],

'5e': [
    // ... vos chapitres existants ...
    
    // NOUVEAU : Gestion des ressources
    {
        id: 'geo5_ressources',
        titre: "4. Gestion des ressources",
        desc: "UAA3 - Accès et gestion des matières premières et des ressources.",
        niveau: '5e',
        icone: '⛏️',
        color: '#d69e2e',
        
        cours: `
            <h4>🔹 Les ressources</h4>
            
            <p>
                Une ressource est un élément naturel ou produit
                par la société qui peut être utilisé pour répondre
                à un besoin.
            </p>
            
            <h4>🔹 Les types de ressources</h4>
            
            <ul>
                <li>
                    <b>Ressources renouvelables :</b>
                    eau, énergies renouvelables, biomasse...
                </li>
                <li>
                    <b>Ressources non renouvelables :</b>
                    pétrole, gaz, charbon, minerais...
                </li>
                <li>
                    <b>Ressources stratégiques :</b>
                    terres rares, lithium, uranium...
                </li>
            </ul>
            
            <h4>🔹 Les enjeux de la gestion des ressources</h4>
            
            <ul>
                <li>Épuisement des ressources non renouvelables</li>
                <li>Conflits d'accès aux ressources</li>
                <li>Impacts environnementaux de l'extraction</li>
                <li>Dépendance des pays importateurs</li>
            </ul>
            
            <h4>🔹 La déforestation en zone intertropicale</h4>
            
            <p>
                La déforestation est liée à la mondialisation :
                l'exploitation du bois, l'agriculture commerciale
                (soja, huile de palme) et l'élevage extensif
                entraînent la disparition des forêts tropicales.
            </p>
        `,
        
        objectifs: [
            'Distinguer les types de ressources',
            'Identifier les enjeux de la gestion des ressources',
            'Comprendre les liens entre mondialisation et déforestation'
        ],
        
        matieres: [
            'Ressources naturelles',
            'Gestion durable',
            'Déforestation',
            'Dépendance énergétique'
        ],
        
        exercices: [
            {
                question: 'La déforestation en zone intertropicale est liée...',
                options: [
                    'À la mondialisation et à l\'agriculture commerciale',
                    'Uniquement aux feux naturels',
                    'À la diminution de la population',
                    'À la protection des forêts'
                ],
                correct: 0,
                correction: 'La déforestation est liée à l\'exploitation commerciale et à la mondialisation.'
            }
        ]
    }
],

'6e': [
    // ... vos chapitres existants ...
    
    // NOUVEAU : Acteurs et prospective
    {
        id: 'geo6_acteurs_prospective',
        titre: "5. Acteurs & Prospective",
        desc: "UAA - Analyser les acteurs et envisager l'avenir des territoires.",
        niveau: '6e',
        icone: '🔮',
        color: '#805ad5',
        
        cours: `
            <h4>🔹 Les acteurs du territoire</h4>
            
            <p>
                Un <b>acteur
