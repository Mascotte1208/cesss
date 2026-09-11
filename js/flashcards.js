// =========================================================
// FLASHCARDS - VOCABULAIRE INTERACTIF
// =========================================================

var FLASHCARDS_DATA = {

    maths: [
        { terme: 'Fonction', definition: 'Machine qui transforme un nombre x en un nombre y = f(x).' },
        { terme: 'Image', definition: 'Résultat obtenu après application d\'une fonction (y = f(x)).' },
        { terme: 'Antécédent', definition: 'Nombre de départ x tel que f(x) = y.' },
        { terme: 'Domaine', definition: 'Ensemble des x pour lesquels la fonction est définie.' },
        { terme: 'Zéro d\'une fonction', definition: 'Valeur de x pour laquelle f(x) = 0.' },
        { terme: 'Ordonnée à l\'origine', definition: 'Valeur de f(x) lorsque x = 0.' },
        { terme: 'Identité remarquable (somme)', definition: '(a+b)² = a² + 2ab + b²' },
        { terme: 'Identité remarquable (différence)', definition: '(a-b)² = a² - 2ab + b²' },
        { terme: 'Identité remarquable (différence carrés)', definition: 'a² - b² = (a-b)(a+b)' },
        { terme: 'Produit nul', definition: 'AB = 0 ⇔ A = 0 ou B = 0' },
        { terme: 'Hypoténuse', definition: 'Côté le plus long dans un triangle rectangle, opposé à l\'angle droit.' },
        { terme: 'Théorème de Pythagore', definition: 'Dans un triangle rectangle, a² + b² = c².' },
        { terme: 'Sinus', definition: 'sin(α) = opposé / hypoténuse' },
        { terme: 'Cosinus', definition: 'cos(α) = adjacent / hypoténuse' },
        { terme: 'Tangente', definition: 'tan(α) = opposé / adjacent' },
        { terme: 'Discriminant', definition: 'Δ = b² - 4ac pour ax² + bx + c = 0' },
        { terme: 'Dérivée (puissance)', definition: '(xⁿ)\' = n·xⁿ⁻¹' },
        { terme: 'Primitive (puissance)', definition: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C' },
        { terme: 'Intégrale définie', definition: '∫ₐᵇ f(x)dx = F(b) - F(a)' },
        { terme: 'Pente d\'une droite', definition: 'm = (y₂-y₁)/(x₂-x₁) pour y = mx+p' },
        { terme: 'Équation du cercle', definition: '(x-a)² + (y-b)² = r²' },
        { terme: 'Distance entre deux points', definition: 'd = √[(x₂-x₁)² + (y₂-y₁)²]' },
        { terme: 'Probabilité conditionnelle', definition: 'P(A|B) = P(A∩B) / P(B)' },
        { terme: 'Indépendance', definition: 'P(A∩B) = P(A) × P(B)' },
        { terme: 'Loi binomiale', definition: 'P(X=k) = C(n,k) × pᵏ × (1-p)ⁿ⁻ᵏ' },
        { terme: 'Espérance mathématique', definition: 'E(X) = Σ xi × P(X=xi)' },
        { terme: 'Suite arithmétique', definition: 'uₙ = u₀ + n×r' },
        { terme: 'Suite géométrique', definition: 'uₙ = u₀ × qⁿ' },
        { terme: 'Logarithme népérien', definition: 'ln(x) = y ⇔ eʸ = x' }
    ],

    geo: [
        { terme: 'Densité de population', definition: 'Nombre d\'habitants par unité de surface (hab./km²).' },
        { terme: 'Urbanisation', definition: 'Augmentation de la population vivant dans les villes.' },
        { terme: 'Métropolisation', definition: 'Concentration des fonctions majeures dans les grandes villes.' },
        { terme: 'Étalement urbain', definition: 'Extension des villes vers les espaces périphériques.' },
        { terme: 'Mobilité pendulaire', definition: 'Déplacement régulier entre le domicile et le travail.' },
        { terme: 'Mondialisation', definition: 'Intensification des échanges et interdépendances entre territoires.' },
        { terme: 'Flux', definition: 'Circulation de personnes, marchandises, capitaux ou informations.' },
        { terme: 'Ressource', definition: 'Élément du milieu rendu utile par une société.' },
        { terme: 'Développement durable', definition: 'Développement conciliant besoins actuels et capacités des générations futures.' },
        { terme: 'Puissance', definition: 'Capacité d\'un acteur à agir et à influencer les autres.' },
        { terme: 'Géopolitique', definition: 'Étude des rivalités de pouvoir sur les territoires.' },
        { terme: 'Prospective', definition: 'Construction de scénarios plausibles sur des évolutions futures.' },
        { terme: 'Zone Économique Exclusive (ZEE)', definition: 'Zone maritime où l\'État côtier a des droits sur les ressources.' },
        { terme: 'Interface', definition: 'Espace de contact et d\'échanges entre deux ensembles.' },
        { terme: 'Aléa', definition: 'Phénomène dangereux potentiel (séisme, inondation, etc.).' },
        { terme: 'Risque', definition: 'Rencontre entre un aléa et une vulnérabilité.' },
        { terme: 'Vulnérabilité', definition: 'Fragilité d\'un territoire face à un danger.' },
        { terme: 'Résilience', definition: 'Capacité d\'un territoire à se relever après une catastrophe.' },
        { terme: 'Bassin versant', definition: 'Territoire dont les eaux s\'écoulent vers un même cours d\'eau.' },
        { terme: 'Stress hydrique', definition: 'Situation où la demande en eau dépasse les ressources disponibles.' },
        { terme: 'Agriculture vivrière', definition: 'Agriculture destinée à nourrir la population locale.' },
        { terme: 'Agriculture commerciale', definition: 'Agriculture destinée à la vente sur les marchés.' },
        { terme: 'Sécurité alimentaire', definition: 'Accès suffisant à une alimentation sûre et adaptée.' },
        { terme: 'Aménagement du territoire', definition: 'Organisation et transformation de l\'espace.' },
        { terme: 'Accessibilité', definition: 'Facilité avec laquelle un lieu peut être atteint.' },
        { terme: 'Migration', definition: 'Déplacement impliquant un changement de lieu de résidence.' },
        { terme: 'Déforestation', definition: 'Disparition des forêts.' },
        { terme: 'Biome', definition: 'Grande formation écologique liée au climat.' },
        { terme: 'Biodiversité', definition: 'Variété des êtres vivants dans un milieu.' },
        { terme: 'Transition énergétique', definition: 'Transformation des modes de production et consommation d\'énergie.' },
        { terme: 'Mix énergétique', definition: 'Combinaison des sources d\'énergie d\'un territoire.' },
        { terme: 'Détroit', definition: 'Passage maritime étroit reliant deux mers.' },
        { terme: 'Façade maritime', definition: 'Littoral organisé autour de ports et de flux.' },
        { terme: 'Littoral', definition: 'Espace de contact entre terre et mer.' },
        { terme: 'Gouvernance mondiale', definition: 'Mécanismes de coopération entre acteurs à l\'échelle mondiale.' },
        { terme: 'ONU', definition: 'Organisation des Nations Unies.' },
        { terme: 'Soft power', definition: 'Puissance fondée sur l\'attractivité et l\'influence.' },
        { terme: 'Hard power', definition: 'Puissance fondée sur la contrainte ou la capacité matérielle.' }
    ],

    bio: [
        { terme: 'Cellule', definition: 'Plus petite unité structurale et fonctionnelle du vivant.' },
        { terme: 'Membrane cellulaire', definition: 'Enveloppe qui délimite la cellule et contrôle les échanges.' },
        { terme: 'ADN', definition: 'Molécule qui porte l’information génétique.' },
        { terme: 'Gène', definition: 'Portion d’ADN participant à la production d’une molécule ou d’un caractère.' },
        { terme: 'Mitose', definition: 'Division produisant deux cellules génétiquement identiques.' },
        { terme: 'Photosynthèse', definition: 'Production de matière organique grâce à la lumière, au CO₂ et à l’eau.' },
        { terme: 'Respiration cellulaire', definition: 'Libération d’énergie à partir de nutriments, généralement avec du dioxygène.' },
        { terme: 'Enzyme', definition: 'Protéine qui accélère une réaction chimique précise.' },
        { terme: 'Homéostasie', definition: 'Maintien d’un équilibre interne malgré les variations du milieu.' },
        { terme: 'Neurone', definition: 'Cellule spécialisée dans la transmission de messages nerveux.' },
        { terme: 'Hormone', definition: 'Messager chimique agissant sur des cellules cibles.' },
        { terme: 'Immunité', definition: 'Ensemble des défenses de l’organisme contre les agents pathogènes.' },
        { terme: 'Écosystème', definition: 'Ensemble formé par les êtres vivants et leur milieu.' },
        { terme: 'Biodiversité', definition: 'Diversité des êtres vivants, de leurs gènes et des écosystèmes.' },
        { terme: 'Sélection naturelle', definition: 'Processus favorisant les caractères qui améliorent survie et reproduction.' },
        { terme: 'Mutation', definition: 'Modification de la séquence de l’ADN.' },
        { terme: 'Vaccination', definition: 'Préparation du système immunitaire à reconnaître un agent infectieux.' },
        { terme: 'Synapse', definition: 'Zone de communication entre neurones ou avec une cellule cible.' }
    ]
};


// =========================================================
// FONCTIONS FLASHCARDS
// =========================================================

var flashcardIndex = 0;
var flashcardSubject = 'maths';
var flashcardMode = 'term-def'; // 'term-def' ou 'def-term'

var flashcardDeck=[],flashcardRevealed=false,flashcardCount=10,flashcardYear='all',flashcardChapter='all';
function ensureSubjectFlashcards(){
    Object.keys(CESS_SUBJECTS).forEach(function(k){
        var lessons=[];allChaps(k).forEach(function(c){(c.fiches||[]).forEach(function(f){lessons.push({terme:f.term,definition:f.definition,exemple:f.example,chapterId:c.id,annee:c.annee,subject:k,id:c.id+'|'+f.term});});});
        if(lessons.length)FLASHCARDS_DATA[k]=lessons;
        else FLASHCARDS_DATA[k]=(FLASHCARDS_DATA[k]||[]).map(function(f){return Object.assign({},f,{subject:k,id:k+'|'+f.terme,annee:'',chapterId:''});});
    });
    FLASHCARDS_DATA.all=Object.keys(CESS_SUBJECTS).reduce(function(a,k){return a.concat(FLASHCARDS_DATA[k]||[]);},[]);
}
function renderFlashcardSelector(){
    var select=document.getElementById('flashcardSubjectSelect');if(!select)return;
    select.innerHTML='<option value="all">Mixte — mes matières</option>'+Object.keys(CESS_SUBJECTS).map(function(k){return '<option value="'+k+'">'+escapeHtml(CESS_SUBJECTS[k].label)+'</option>';}).join('');select.value=flashcardSubject;
}
function initFlashcards(subject){
    ensureSubjectFlashcards();flashcardSubject=subject||'all';flashcardYear=learningProfile().year;flashcardChapter='all';renderFlashcardSelector();renderFlashcardSetup();
}
function renderFlashcardSetup(){
    var root=document.getElementById('flashcardContainer');if(!root)return;
    var chapters=flashcardSubject==='all'?personalChapters():allChaps(flashcardSubject);
    chapters=chapters.filter(function(c){return (c.fiches||[]).length;});
    root.innerHTML='<div class="session-controls"><label>Année<select id="flashYear" onchange="flashcardYear=this.value;flashcardChapter=\'all\';renderFlashcardSetup()">'+['all','3e','4e','5e','6e'].map(function(y){return '<option value="'+y+'"'+(y===flashcardYear?' selected':'')+'>'+(y==='all'?'Toutes les années':y)+'</option>';}).join('')+'</select></label><label>Dossier<select id="flashChapter"><option value="all">Tous les dossiers</option>'+chapters.filter(function(c){return flashcardYear==='all'||c.annee===flashcardYear;}).map(function(c){return '<option value="'+c.id+'">'+escapeHtml(CESS_SUBJECTS[c.matiere].label+' · '+c.titre)+'</option>';}).join('')+'</select></label><label>Série<select id="flashCount"><option>10</option><option>20</option><option>30</option></select></label><button class="button primary" onclick="startFlashcardSession()">Commencer</button></div><p>Les cartes difficiles et arrivées à échéance sont prioritaires. Les repères transversaux de Maths, Géo et Bio restent disponibles quelle que soit l’année.</p><div id="flashNotice" role="status"></div><div id="flashSession"></div>';
}
function startFlashcardSession(){
    flashcardYear=document.getElementById('flashYear').value;flashcardChapter=document.getElementById('flashChapter').value;flashcardCount=Number(document.getElementById('flashCount').value);
    var keys=learningProfile().subjects,mem=cessState.flashLearning||{},pool=(FLASHCARDS_DATA[flashcardSubject]||[]).filter(function(f){return (flashcardSubject!=='all'||keys.indexOf(f.subject)>=0)&&(flashcardYear==='all'||!f.annee||f.annee===flashcardYear)&&(flashcardChapter==='all'||f.chapterId===flashcardChapter);});
    pool=shuffle(pool).sort(function(a,b){return Number((mem[a.id]||{}).due||0)-Number((mem[b.id]||{}).due||0);});
    var buckets={};pool.forEach(function(f){(buckets[f.subject]||(buckets[f.subject]=[])).push(f);});
    var subjects=shuffle(Object.keys(buckets));flashcardDeck=[];
    while(flashcardDeck.length<flashcardCount&&subjects.length){subjects.forEach(function(k){if(flashcardDeck.length<flashcardCount&&buckets[k].length)flashcardDeck.push(buckets[k].shift());});subjects=subjects.filter(function(k){return buckets[k].length;});}
    flashcardIndex=0;var notice=document.getElementById('flashNotice');if(notice){notice.textContent='';notice.className='';}renderFlashcard();
}
function renderFlashcard(){
    var root=document.getElementById('flashSession');if(!root)return;flashcardRevealed=false;
    var f=flashcardDeck[flashcardIndex];if(!f){root.innerHTML='<div class="empty-state">'+(flashcardDeck.length?'Série terminée : '+flashcardDeck.length+' cartes revues.':'Aucune carte pour ces filtres.')+'</div>';return;}
    root.innerHTML='<p>'+ (flashcardIndex+1)+' / '+flashcardDeck.length+' · '+escapeHtml(CESS_SUBJECTS[f.subject].label)+' · '+escapeHtml(f.annee||'Repère transversal')+'</p><button class="button secondary" onclick="toggleFlashcardMode()">Inverser terme et définition</button><button type="button" class="session-answer" onclick="flipFlashcard()" aria-label="Retourner la carte"><strong>'+escapeHtml(flashcardMode==='def-term'?f.definition:f.terme)+'</strong><p>Clique ou appuie sur Entrée pour retourner</p></button><div id="flashAnswer" aria-live="polite"></div>';
}
function flipFlashcard(){
    var f=flashcardDeck[flashcardIndex];if(!f||flashcardRevealed)return;flashcardRevealed=true;
    document.getElementById('flashAnswer').innerHTML='<div class="panel"><h3>'+escapeHtml(flashcardMode==='def-term'?f.terme:f.definition)+'</h3><p>'+escapeHtml(f.exemple||'')+'</p>'+(f.chapterId?'<button class="button secondary" onclick="openStudyChapter(\''+f.chapterId+'\')">Revoir le cours</button>':'')+'<div class="session-controls"><button class="button secondary flash-rating-retry" onclick="rateFlashcard(false)">À revoir</button><button class="button primary flash-rating-success" onclick="rateFlashcard(true)">Je savais</button></div></div>';
}
function rateFlashcard(known){
    if(!flashcardRevealed)return;flashcardRevealed=false;var f=flashcardDeck[flashcardIndex];cessState.flashLearning=cessState.flashLearning||{};var previous=cessState.flashLearning[f.id]||{},streak=known?(previous.streak||0)+1:0;
    cessState.flashLearning[f.id]={streak:streak,due:Date.now()+(known?Math.min(30,Math.pow(2,streak-1))*86400000:600000)};cessSave();flashcardIndex++;renderFlashcard();
    var notice=document.getElementById('flashNotice');
    if(notice){notice.className='feedback-box '+(known?'feedback-success':'feedback-retry');notice.textContent=known?'✓ Carte notée comme connue.':'↺ Carte à revoir : elle sera prioritaire lors des prochaines révisions.';}
}
function toggleFlashcardMode(){flashcardMode=flashcardMode==='def-term'?'term-def':'def-term';renderFlashcard();}
function selectFlashcardSubject(subject){flashcardSubject=subject;flashcardChapter='all';renderFlashcardSetup();}
function switchFlashcardSubject(subject){selectFlashcardSubject(subject);}
