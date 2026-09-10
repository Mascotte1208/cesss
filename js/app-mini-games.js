/* Jeux courts avec réponses expliquées et protection contre le double comptage. */
var cessMiniGame = null, miniInterval = null;
var MINI_BANKS = {
detective: [
["Sondage fictif : 80 % des 20 membres d’un club de lecture préfèrent les romans.","Peut-on conclure pour toute l’école ?",["Non, l’échantillon est limité et sélectionné","Oui, 80 % suffit","Oui, tous les élèves lisent","Non, il faut 100 %"],0,"Les membres du club ne représentent pas nécessairement tous les élèves."],
["Tableau fictif : ventes de janvier = 100, février = 120.","Quelle hausse observe-t-on ?",["20 %","120 %","2 %","100 %"],0,"(120 − 100) / 100 × 100 = 20 %."],
["Une publicité affirme : « Notre boisson améliore la mémoire », sans étude citée.","Quel élément manque pour évaluer cette affirmation ?",["Des résultats vérifiables et une méthode","Une couleur plus vive","Un slogan plus court","Une célébrité"],0,"Une affirmation commerciale demande des preuves indépendantes et une méthode explicite."],
["Deux documents parlent de la même ville : population en 1980 et population en 2020.","Que vérifier avant la comparaison ?",["Que le territoire et la définition de population sont comparables","Que la police est identique","Que les titres ont même longueur","Que les auteurs ont même âge"],0,"Des limites administratives différentes peuvent fausser la comparaison."],
["Un graphique commence son axe vertical à 95 plutôt qu’à 0.","Quel effet cela peut-il produire ?",["Amplifier visuellement de petits écarts","Rendre les données forcément fausses","Supprimer toutes les unités","Prouver une causalité"],0,"L’échelle influence la perception : il faut lire les valeurs et les axes."],
["Texte fictif : « Les ventes de glaces et les baignades augmentent ensemble en été. »","Quelle conclusion est justifiée ?",["Une association, sans causalité démontrée","Les glaces causent les baignades","Les baignades causent les glaces","Aucun facteur commun n’est possible"],0,"La chaleur peut expliquer les deux évolutions."],
["Un témoin décrit une manifestation à laquelle il a participé.","Comment utiliser ce récit ?",["Le contextualiser et le croiser avec d’autres sources","Le considérer comme parfaitement neutre","Le rejeter automatiquement","Ignorer sa date"],0,"Un témoignage apporte un point de vue situé ; le recoupement permet de l’évaluer."],
["Une carte représente les habitants par km².","Quelle grandeur représente-t-elle ?",["La densité de population","La population totale","La superficie seule","Le taux de natalité"],0,"La densité est un rapport entre population et superficie."]
],
repair: [
["Français","Choisis la phrase correcte.",["Les élèves ont terminé leurs exercices.","Les élèves a terminé leurs exercices.","Les élèves ont terminer leurs exercices.","Les élèves ont terminés leurs exercices."],0,"Avec avoir, le participe ne s’accorde pas avec le sujet ; ici le COD suit le verbe."],
["Anglais","Complete: She ___ to school every day.",["goes","go","going","gone"],0,"Au présent simple, la troisième personne du singulier prend généralement -s."],
["Néerlandais","Choisis la phrase correcte.",["Ik blijf thuis omdat ik ziek ben.","Ik blijf thuis omdat ben ik ziek.","Ik blijf thuis omdat ik ben ziek.","Ik blijf thuis omdat ziek ik ben."],0,"Dans cette subordonnée introduite par omdat, le verbe se place à la fin."],
["Mathématiques","Développe (a + b)².",["a² + 2ab + b²","a² + b²","a² − b²","2a + 2b"],0,"Le développement inclut les deux produits ab."],
["Physique","Quelle écriture respecte la loi d’Ohm ?",["U = R × I","U = R + I","R = U × I","I = U × R"],0,"La tension est le produit de la résistance par l’intensité."],
["Chimie","Équilibre la formation de l’eau.",["2 H₂ + O₂ → 2 H₂O","H₂ + O₂ → H₂O","H₂ + 2 O₂ → H₂O","2 H₂ + O₂ → H₂O"],0,"Chaque côté comporte quatre atomes d’hydrogène et deux d’oxygène."],
["Informatique","Une boucle parcourt les entiers de 1 à 4 inclus. Combien d’itérations ?",["4","3","5","1"],0,"Les valeurs parcourues sont 1, 2, 3 et 4."],
["Économie","Chiffre d’affaires : 500 €, coûts : 350 €. Quel résultat ?",["150 €","850 €","350 €","500 €"],0,"Le résultat est la différence entre recettes et coûts dans cet exemple simplifié."]
],
lab: [
["Deux plantes identiques reçoivent des quantités de lumière différentes.","Quelle variable est modifiée ?",["La lumière","L’espèce","Le type de pot","Le volume d’eau"],0,"Pour isoler l’effet de la lumière, on maintient les autres conditions comparables."],
["Un élève veut étudier la vitesse de dissolution selon la température.","Que faut-il maintenir constant ?",["La masse de soluté et le volume de solvant","Toutes les températures","Uniquement l’heure","La couleur du cahier"],0,"Changer plusieurs facteurs empêche d’attribuer clairement l’effet observé."],
["Une mesure donne 12, 13 puis 11 secondes.","Quelle moyenne obtient-on ?",["12 secondes","36 secondes","13 secondes","11 secondes"],0,"(12 + 13 + 11) / 3 = 12 secondes."],
["Une balance indique 2,5 g pour un échantillon.","Quelle grandeur est mesurée ?",["La masse","Le volume","La température","La vitesse"],0,"Le gramme est une unité de masse."],
["Une expérience contredit l’hypothèse de départ.","Quelle démarche convient ?",["Vérifier le protocole et revoir l’hypothèse si nécessaire","Modifier les données","Cacher le résultat","Déclarer l’hypothèse prouvée"],0,"Une hypothèse doit pouvoir être confrontée aux observations."],
["Un microscope grossit 10 fois à l’oculaire et 40 fois à l’objectif.","Quel grossissement total ?",["400 fois","50 fois","30 fois","4 fois"],0,"Les grossissements de l’oculaire et de l’objectif se multiplient."]
]};
var MINI_LABELS={detective:'Détective de document',repair:'Phrase et formule à réparer',lab:'Mission laboratoire',sprint:'Sprint 60 secondes',association:'Chronologie express'};
function stopMiniGame(){if(miniInterval)clearInterval(miniInterval);miniInterval=null;}
function miniPrepare(row,i){var choices=shuffle(row[2].map(function(t,j){return {text:t,correct:j===row[3]};}));return {context:row[0],question:row[1],choices:choices,explanation:row[4],id:i};}
function startMini(mode){
 stopMiniGame();if(typeof quizTimer!=='undefined'&&quizTimer){clearInterval(quizTimer);quizTimer=null;}
 var bank=MINI_BANKS[mode]||[];
 if(mode==='sprint'){bank=[];for(var i=0;i<30;i++){var a=2+Math.floor(Math.random()*18),b=2+Math.floor(Math.random()*9),v=a*b;bank.push(['Calcul mental',a+' × '+b+' = ?', [String(v),String(v+a),String(v-b),String(v+1)],0,a+' × '+b+' = '+v+'.']);}}
 if(mode==='association'){var events=[['Imprimerie de Gutenberg en Europe',1450],['Début de la Révolution française',1789],['Indépendance de la Belgique',1830],['Début de la Première Guerre mondiale',1914],['Fin de la Seconde Guerre mondiale',1945],['Chute du mur de Berlin',1989]];bank=events.map(function(e){return ['Repère historique','Quelle date correspond à : '+e[0]+' ?',events.filter(function(x){return x!==e;}).slice(0,3).map(function(x){return String(x[1]);}).concat(String(e[1])),3,e[0]+' : '+(e[1]===1450?'vers ':'')+e[1]+'.'];});}
 cessMiniGame={mode:mode,cards:shuffle(bank).map(miniPrepare),index:0,score:0,answered:false,finished:false,deadline:Date.now()+60000};
 renderMini();
 if(mode==='sprint')miniInterval=setInterval(function(){if(!cessMiniGame||cessMiniGame.finished)return stopMiniGame();var n=Math.max(0,Math.ceil((cessMiniGame.deadline-Date.now())/1000));var el=document.getElementById('miniClock');if(el)el.textContent=n+' s';if(n===0)finishMiniGame();},250);
}
function renderMini(){
 var s=cessMiniGame,p=document.getElementById('gamePanel');if(!s||!p)return;if(s.index>=s.cards.length)return finishMiniGame();s.answered=false;var q=s.cards[s.index];
 p.innerHTML='<button class="button secondary" onclick="stopMiniGame();renderGamePanel()">← Jeux</button><h2 style="margin:18px 0">'+MINI_LABELS[s.mode]+'</h2><p>Question '+(s.index+1)+' / '+s.cards.length+' · '+s.score+' points <strong id="miniClock"></strong></p><blockquote style="padding:16px;margin:16px 0;border-left:3px solid var(--primary)">'+escapeHtml(q.context)+'</blockquote><h3>'+escapeHtml(q.question)+'</h3><div class="quiz-options">'+q.choices.map(function(c,i){return '<button type="button" class="quiz-option" onclick="answerMini('+i+')">'+escapeHtml(c.text)+'</button>';}).join('')+'</div><div id="miniFeedback" aria-live="polite"></div>';
}
function answerMini(i){
 var s=cessMiniGame;if(!s||s.answered||s.finished)return;
 if(s.mode==='sprint'&&Date.now()>=s.deadline)return finishMiniGame();
 var q=s.cards[s.index];if(!q.choices[i])return;s.answered=true;var good=q.choices[i].correct;if(good)s.score++;
 document.querySelectorAll('#gamePanel .quiz-option').forEach(function(b,j){b.disabled=true;if(q.choices[j].correct)b.classList.add('correct');else if(j===i)b.classList.add('wrong');});
 document.getElementById('miniFeedback').innerHTML='<div class="quiz-feedback"><strong>'+(good?'Bonne réponse':'À revoir')+'</strong><p>'+escapeHtml(q.explanation)+'</p><button class="button primary" onclick="nextMiniGame()">Continuer →</button></div>';
}
function nextMiniGame(){if(!cessMiniGame||!cessMiniGame.answered||cessMiniGame.finished)return;cessMiniGame.index++;renderMini();}
function finishMiniGame(){
 var s=cessMiniGame;if(!s||s.finished)return;s.finished=true;stopMiniGame();var total=s.mode==='sprint'?Math.min(s.cards.length,s.index+(s.answered?1:0)):s.cards.length;var pct=total?Math.round(s.score/total*100):0;
 cessState.results.push({contentVersion:2,date:new Date().toISOString(),mode:MINI_LABELS[s.mode],score:s.score,total:total,percentage:pct});cessSave();
 document.getElementById('gamePanel').innerHTML='<div class="quiz-result"><h2>'+s.score+' bonne(s) réponse(s)</h2><p>'+total+' question(s) traitée(s) · '+pct+' % de réussite</p><button class="button primary" onclick="startMini(\''+s.mode+'\')">Rejouer</button> <button class="button secondary" onclick="renderGamePanel()">Tous les jeux</button></div>';
}
function startSprintGame(){startMini('sprint');}
function startAssociationGame(){startMini('association');}
function startDetectiveGame(){startMini('detective');}

var matchingState=null;
function startMatchingGame(){
    stopMiniGame();var pool=personalChapters().filter(function(c){return (c.fiches||[]).length;});
    var selected=shuffle(pool).slice(0,4).map(function(c){return {chapterId:c.id,subject:c.matiere,term:c.fiches[0].term,definition:c.fiches[0].definition};});
    // Une même notion peut être étudiée à plusieurs niveaux : conserver des paires distinctes.
    selected=selected.filter(function(f,i,a){return a.findIndex(function(x){return x.term===f.term&&x.subject===f.subject;})===i;});
    matchingState={cards:selected,order:shuffle(selected.map(function(_,i){return i;})),selected:null,matched:[],attempts:0,finished:false};renderMatchingGame();
}
function renderMatchingGame(){
    var s=matchingState,root=document.getElementById('gamePanel');if(!s||!root)return;
    root.innerHTML='<button class="button secondary" onclick="renderGamePanel()">← Jeux</button><h2>Relier les notions</h2><p>Choisis un terme, puis sa définition. '+s.matched.length+' / '+s.cards.length+' paires trouvées.</p>'+(s.cards.length?'<div class="content-grid"><section aria-label="Termes">'+s.cards.map(function(f,i){return '<button class="content-card" '+(s.matched.includes(i)?'disabled':'')+' aria-pressed="'+(s.selected===i)+'" onclick="chooseMatchingTerm('+i+')">'+escapeHtml(f.term)+'<small>'+escapeHtml(CESS_SUBJECTS[f.subject].label)+'</small>'+(s.matched.includes(i)?' ✓':'')+'</button>';}).join('')+'</section><section aria-label="Définitions">'+s.order.map(function(i){return '<button class="content-card" '+(s.matched.includes(i)?'disabled':'')+' onclick="chooseMatchingDefinition('+i+')">'+escapeHtml(s.cards[i].definition)+(s.matched.includes(i)?' ✓':'')+'</button>';}).join('')+'</section></div><p id="matchingFeedback" role="status"></p>':'<p>Aucune fiche de notions dans ce parcours. Les autres jeux restent disponibles.</p>');
    if(s.finished)root.innerHTML+='<div class="panel"><h3>Série terminée</h3><p>'+s.cards.length+' paires trouvées en '+s.attempts+' tentative(s).</p><button class="button primary" onclick="startMatchingGame()">Nouvelle série</button></div>';
}
function chooseMatchingTerm(i){var s=matchingState;if(!s||s.finished||s.matched.includes(i))return;s.selected=i;renderMatchingGame();}
function chooseMatchingDefinition(i){
    var s=matchingState;if(!s||s.finished||s.selected===null||s.matched.includes(i))return;
    s.attempts++;var good=s.selected===i;
    if(good)s.matched.push(i);s.selected=null;
    if(s.matched.length===s.cards.length){s.finished=true;cessState.results.push({contentVersion:2,date:new Date().toISOString(),mode:'Relier les notions',score:s.cards.length,total:s.attempts,percentage:Math.round(s.cards.length/s.attempts*100)});cessSave();}
    renderMatchingGame();document.getElementById('matchingFeedback').textContent=good?'Bonne association.':'Pas cette définition. Relis les deux propositions puis réessaie.';
}
