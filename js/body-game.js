/* Questions d'anatomie : chaque ligne contient question, réponse, trois distracteurs et explication. */
var BODY_GAME_DATA = {
    os: [
        ['Quel os se situe dans la cuisse ?', 'Fémur', 'Humérus', 'Radius', 'Tibia', 'Le fémur relie la hanche au genou.'],
        ['Quel os forme le bras entre épaule et coude ?', 'Humérus', 'Fémur', 'Fibula', 'Sternum', 'L’humérus est l’os du bras; radius et ulna sont dans l’avant-bras.'],
        ['Quels os protègent principalement les poumons ?', 'Côtes', 'Carpes', 'Phalanges', 'Tarses', 'Les côtes participent à la cage thoracique, qui protège notamment cœur et poumons.'],
        ['Quel ensemble osseux protège le cerveau ?', 'Crâne', 'Bassin', 'Thorax', 'Carpe', 'Les os du crâne entourent et protègent le cerveau.'],
        ['Où se trouve la rotule ?', 'À l’avant du genou', 'Dans le coude', 'Dans le poignet', 'Derrière l’oreille', 'La rotule est un os inclus dans le tendon du quadriceps, devant le genou.'],
        ['Quel os de l’avant-bras est du côté du pouce en position anatomique ?', 'Radius', 'Ulna', 'Tibia', 'Clavicule', 'Le radius est du côté du pouce lorsque les paumes regardent vers l’avant.'],
        ['Quel os est situé au centre de la face avant du thorax ?', 'Sternum', 'Sacrum', 'Scapula', 'Mandibule', 'Le sternum est relié à plusieurs côtes par des cartilages.'],
        ['Comment appelle-t-on les os des doigts ?', 'Phalanges', 'Vertèbres', 'Côtes', 'Clavicules', 'Les doigts comportent des phalanges : deux pour le pouce, trois pour les autres doigts.'],
        ['Quelle structure protège la moelle épinière ?', 'Colonne vertébrale', 'Mandibule', 'Sternum', 'Rotule', 'Les vertèbres forment un canal dans lequel passe la moelle épinière.'],
        ['Quel tissu réduit les frottements aux extrémités des os dans une articulation synoviale ?', 'Cartilage articulaire', 'Émail', 'Épiderme', 'Tissu adipeux uniquement', 'Le cartilage articulaire recouvre les surfaces osseuses en contact.'],
        ['Quelle structure relie habituellement un muscle à un os ?', 'Tendon', 'Ligament', 'Nerf', 'Artère', 'Un tendon transmet la force musculaire à l’os; un ligament relie des os entre eux.'],
        ['Où sont produites de nombreuses cellules du sang ?', 'Moelle osseuse rouge', 'Cartilage du nez', 'Émail dentaire', 'Liquide synovial', 'La moelle osseuse rouge produit notamment globules rouges, globules blancs et plaquettes.']
    ],
    organes: [
        ['Quel organe propulse le sang ?', 'Cœur', 'Foie', 'Estomac', 'Rate', 'Les contractions du cœur font circuler le sang dans les vaisseaux.'],
        ['Quels organes forment l’urine ?', 'Reins', 'Poumons', 'Ovaires', 'Glandes salivaires', 'Les reins filtrent le plasma et ajustent la composition de l’urine par réabsorption et sécrétion.'],
        ['Quel organe stocke l’urine avant son évacuation ?', 'Vessie', 'Rein', 'Foie', 'Pancréas', 'L’urine arrive dans la vessie par les uretères, puis sort par l’urètre.'],
        ['Où la majorité des nutriments sont-ils absorbés ?', 'Intestin grêle', 'Œsophage', 'Estomac', 'Rectum', 'Les villosités de l’intestin grêle offrent une grande surface d’absorption.'],
        ['Quel organe produit la bile ?', 'Foie', 'Vésicule biliaire', 'Estomac', 'Rate', 'Le foie produit la bile; la vésicule biliaire la stocke et la concentre.'],
        ['Quel organe sécrète notamment l’insuline ?', 'Pancréas', 'Vessie', 'Poumon', 'Œsophage', 'Des cellules endocrines du pancréas sécrètent l’insuline dans le sang.'],
        ['Quel tube conduit les aliments vers l’estomac ?', 'Œsophage', 'Trachée', 'Uretère', 'Aorte', 'L’œsophage pousse le bol alimentaire par des contractions appelées péristaltisme.'],
        ['Où ont lieu les échanges gazeux entre air et sang ?', 'Alvéoles pulmonaires', 'Cordes vocales', 'Cavité buccale', 'Œsophage', 'Les alvéoles ont une paroi fine et sont entourées de capillaires.'],
        ['Quel organe reçoit la lumière et contient la rétine ?', 'Œil', 'Oreille', 'Langue', 'Nez', 'Les photorécepteurs de la rétine transforment la lumière en signaux nerveux.'],
        ['Quel organe abrite normalement le développement de l’embryon après nidation ?', 'Utérus', 'Ovaire', 'Vessie', 'Estomac', 'L’embryon s’implante dans l’endomètre, la muqueuse de l’utérus.'],
        ['Quel organe forme une barrière extérieure contre de nombreux agents pathogènes ?', 'Peau', 'Rate', 'Pancréas', 'Thyroïde', 'La peau intacte constitue une barrière physique; ses sécrétions participent aussi à la protection.'],
        ['Quelle partie du cerveau contribue fortement à la coordination des mouvements ?', 'Cervelet', 'Rétine', 'Moelle osseuse', 'Hypophyse', 'Le cervelet intervient notamment dans la précision des mouvements et l’équilibre.']
    ],
    fonctions: [
        ['Quelles cellules transportent principalement le dioxygène dans le sang ?', 'Globules rouges', 'Plaquettes', 'Neurones', 'Cellules osseuses', 'L’hémoglobine des globules rouges fixe le dioxygène.'],
        ['Quel élément du sang participe à l’arrêt d’un saignement ?', 'Plaquettes', 'Neurones', 'Ovocytes', 'Cellules musculaires', 'Les plaquettes participent à la formation du clou plaquettaire lors de l’hémostase.'],
        ['Lors de l’inspiration calme, que fait le diaphragme ?', 'Il se contracte et s’abaisse', 'Il remonte en se relâchant', 'Il ferme l’œsophage', 'Il arrête le cœur', 'Son abaissement augmente le volume thoracique et favorise l’entrée d’air.'],
        ['Qu’est-ce qui définit une artère ?', 'Elle conduit le sang depuis le cœur', 'Elle conduit toujours du sang riche en O₂', 'Elle ramène le sang au cœur', 'Elle transporte uniquement de la lymphe', 'Le sens de circulation définit une artère; l’artère pulmonaire transporte du sang pauvre en O₂.'],
        ['Quelle substance est utilisée avec le glucose lors de la respiration cellulaire aérobie ?', 'Dioxygène', 'Diazote', 'Bile', 'Amidon', 'La respiration cellulaire consomme du dioxygène et permet la production d’ATP.'],
        ['Quel est le rôle principal des enzymes digestives ?', 'Découper des molécules alimentaires', 'Produire les globules rouges', 'Transporter le sang', 'Former les os', 'Les enzymes digestives catalysent des transformations chimiques en molécules plus petites.'],
        ['Quel est le rôle des globules blancs ?', 'Participer aux défenses immunitaires', 'Transporter principalement le dioxygène', 'Produire la bile', 'Stocker l’urine', 'Les globules blancs regroupent plusieurs types de cellules impliqués dans l’immunité.'],
        ['Quel type de cellule transmet des messages nerveux ?', 'Neurone', 'Globule rouge', 'Adipocyte', 'Ovocyte', 'Les neurones reçoivent et transmettent des informations par des signaux électriques et synaptiques.'],
        ['Comment la sueur aide-t-elle à refroidir le corps ?', 'Son évaporation emporte de la chaleur', 'Elle transforme la peau en os', 'Elle arrête la circulation', 'Elle supprime les besoins en eau', 'L’évaporation de la sueur nécessite de l’énergie thermique prélevée à la surface du corps.'],
        ['Quelle structure relie les os et stabilise une articulation ?', 'Ligament', 'Tendon', 'Alvéole', 'Uretère', 'Les ligaments limitent les mouvements excessifs entre les os.'],
        ['Quelle hormone contribue à faire baisser la glycémie après un repas ?', 'Insuline', 'Glucagon', 'Adrénaline', 'Mélatonine', 'L’insuline favorise l’utilisation et le stockage du glucose.'],
        ['Quelle structure transporte un message du système nerveux vers un muscle ?', 'Nerf moteur', 'Veine', 'Uretère', 'Canal biliaire', 'Les fibres motrices transmettent la commande nerveuse aux fibres musculaires.']
    ]
};

function showBodyGame() {
    if (quizTimer) { clearInterval(quizTimer); quizTimer = null; }
    cessQuizState = null;
    var panel = document.getElementById('gamePanel');
    panel.innerHTML = '<h2>🦴 Mission Corps humain</h2><p>36 questions expliquées. Choisis un thème pour une série de 10 questions. Les questions récentes sont moins souvent proposées.</p>' +
        '<div class="body-game-choices">' +
        [['os','Os et articulations'],['organes','Organes'],['fonctions','Fonctionnement du corps'],['all','Tout mélanger']].map(function (item) {
            return '<button type="button" class="button primary" onclick="startBodyGame(\'' + item[0] + '\')">' + item[1] + '</button>';
        }).join('') + '</div><button type="button" class="button secondary" onclick="renderGamePanel()">← Tous les jeux</button>';
}

function startBodyGame(theme) {
    if (quizTimer) { clearInterval(quizTimer); quizTimer = null; }
    if (theme !== 'all' && !BODY_GAME_DATA[theme]) theme = 'all';
    var questions = [];
    Object.keys(BODY_GAME_DATA).forEach(function (key) {
        if (theme !== 'all' && theme !== key) return;
        BODY_GAME_DATA[key].forEach(function (row, i) {
            var options = shuffle(row.slice(1, 5));
            questions.push({id:'body_' + key + '_' + i, question:row[0], options:options, correct:options.indexOf(row[1]), correction:row[5], matiere:'bio', annee:'Corps humain', chapter:'Anatomie et physiologie'});
        });
    });
    cessQuizState = {mode:'body', bodyTheme:theme, questions:selectFreshQuestions(questions,10,'body_' + theme), index:0, score:0, answered:false};
    renderQuizQuestion();
}
