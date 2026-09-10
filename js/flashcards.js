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

function initFlashcards(subject) {
    flashcardSubject = subject || 'maths';
    flashcardIndex = 0;
    renderFlashcard();
}

function renderFlashcard() {
    var container = document.getElementById('flashcardContainer');
    if (!container) return;

    var data = FLASHCARDS_DATA[flashcardSubject] || FLASHCARDS_DATA.maths;
    var card = data[flashcardIndex];

    if (!card) {
        container.innerHTML = `
            <div class="empty-state">
                🎉 Tu as revu toutes les flashcards !
                <br>
                <button class="button primary" onclick="initFlashcards('${flashcardSubject}')" style="margin-top:12px;">
                    🔄 Recommencer
                </button>
            </div>
        `;
        return;
    }

    var total = data.length;
    var showDef = flashcardMode === 'def-term';

    container.innerHTML = `
        <div style="text-align:center;margin-bottom:12px;font-size:11px;color:var(--text-soft);">
            ${flashcardIndex + 1} / ${total} · ${flashcardSubject === 'maths' ? '📐 Mathématiques' : (flashcardSubject === 'geo' ? '🌍 Géographie' : '🧬 Biologie')}
            <span style="margin-left:12px;">
                <button class="button secondary" style="padding:4px 10px;font-size:9px;" onclick="toggleFlashcardMode()">
                    ${flashcardMode === 'term-def' ? 'Définition → Terme' : 'Terme → Définition'}
                </button>
            </span>
        </div>

        <div style="
            background:var(--paper);
            border:2px solid var(--primary);
            border-radius:16px;
            padding:30px 20px;
            text-align:center;
            min-height:180px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            cursor:pointer;
            transition:0.3s;
            box-shadow:var(--shadow);
        " onclick="flipFlashcard()">

            <div id="flashcardFront" style="display:block;">
                <span style="font-size:11px;color:var(--text-light);text-transform:uppercase;letter-spacing:0.1em;">
                    ${showDef ? '📖 Définition' : '📝 Terme'}
                </span>
                <h3 style="margin-top:10px;font-size:23px;">
                    ${showDef ? escapeHtml(card.definition) : escapeHtml(card.terme)}
                </h3>
                <p style="font-size:10px;color:var(--text-light);margin-top:15px;">👆 Clique pour retourner la carte</p>
            </div>

            <div id="flashcardBack" style="display:none;">
                <span style="font-size:11px;color:var(--text-light);text-transform:uppercase;letter-spacing:0.1em;">
                    ${showDef ? '📝 Terme' : '📖 Définition'}
                </span>
                <h3 style="margin-top:10px;font-size:23px;">
                    ${showDef ? escapeHtml(card.terme) : escapeHtml(card.definition)}
                </h3>
            </div>

        </div>

        <div style="display:flex;justify-content:space-between;gap:12px;margin-top:16px;">
            <button class="button secondary" onclick="prevFlashcard()" style="flex:1;">
                ← Précédent
            </button>
            <button class="button primary" onclick="nextFlashcard()" style="flex:1;">
                Suivant →
            </button>
        </div>
    `;

    // Réinitialiser l'affichage
    var front = document.getElementById('flashcardFront');
    var back = document.getElementById('flashcardBack');
    if (front) front.style.display = 'block';
    if (back) back.style.display = 'none';
}

function flipFlashcard() {
    var front = document.getElementById('flashcardFront');
    var back = document.getElementById('flashcardBack');
    if (!front || !back) return;

    if (front.style.display === 'none') {
        front.style.display = 'block';
        back.style.display = 'none';
    } else {
        front.style.display = 'none';
        back.style.display = 'block';
    }
}

function nextFlashcard() {
    var data = FLASHCARDS_DATA[flashcardSubject] || FLASHCARDS_DATA.maths;
    if (flashcardIndex < data.length - 1) {
        flashcardIndex++;
        renderFlashcard();
    } else {
        // Fin des flashcards
        var container = document.getElementById('flashcardContainer');
        if (container) {
            container.innerHTML = `
                <div class="empty-state">
                    🎉 Tu as terminé toutes les flashcards !
                    <br>
                    <button class="button primary" onclick="initFlashcards('${flashcardSubject}')" style="margin-top:12px;">
                        🔄 Recommencer
                    </button>
                </div>
            `;
        }
    }
}

function prevFlashcard() {
    if (flashcardIndex > 0) {
        flashcardIndex--;
        renderFlashcard();
    }
}

function toggleFlashcardMode() {
    flashcardMode = flashcardMode === 'term-def' ? 'def-term' : 'term-def';
    renderFlashcard();
}

function switchFlashcardSubject(subject) {
    flashcardSubject = subject;
    flashcardIndex = 0;
    renderFlashcard();
}
