/* Espace d'exercices global par matière. Les questions restent reliées aux chapitres sans alourdir les fiches. */
(function(){
var exerciseSubject='',exerciseSession=null;
function esc(s){return typeof escapeHtml==='function'?escapeHtml(String(s||'')):String(s||'');}
function subjectHost(subject){
 var info=CESS_SUBJECTS[subject]||{},hosts={maths:'mathContent',geo:'geoContent',bio:'bioContent'};
 return document.getElementById(info.library?'libraryContent':hosts[subject]);
}
function levels(subject,year,chapter){
 var seen={};
 allChaps(subject).filter(function(c){return (year==='all'||c.annee===year)&&(chapter==='all'||c.id===chapter);}).forEach(function(c){
  (c.exercices||[]).forEach(function(e){seen[e.niveau||'Standard']=1;});
 });
 return Object.keys(seen);
}
function setupHtml(subject){
 var info=CESS_SUBJECTS[subject],chapters=allChaps(subject),years=[];
 chapters.forEach(function(c){if(years.indexOf(c.annee)<0)years.push(c.annee);});
 return '<div class="subject-exercise-head"><div><span class="eyebrow">ENTRAÎNEMENT PAR MATIÈRE</span><h1>'+esc(info.icon)+' '+esc(info.label)+'</h1><p>Choisis ta série. Les cours restent propres et les exercices sont rassemblés ici.</p></div><button class="button secondary" onclick="closeSubjectExercises(\''+subject+'\')">← Revenir aux cours</button></div>'+
 '<section class="panel subject-exercise-panel"><div class="session-controls">'+
 '<label>Année<select id="subjectExerciseYear" onchange="refreshSubjectExerciseFilters()"><option value="all">Toutes</option>'+years.map(function(y){return '<option value="'+esc(y)+'">'+esc(y)+'</option>';}).join('')+'</select></label>'+
 '<label>Chapitre<select id="subjectExerciseChapter" onchange="refreshSubjectExerciseLevels()"><option value="all">Toute la matière</option>'+chapters.map(function(c){return '<option value="'+c.id+'" data-year="'+c.annee+'">'+esc(c.annee+' · '+c.titre)+'</option>';}).join('')+'</select></label>'+
 '<label>Niveau<select id="subjectExerciseLevel"><option value="all">Tous les niveaux</option></select></label>'+
 '<label>Longueur<select id="subjectExerciseCount"><option value="10">10 questions</option><option value="20">20 questions</option><option value="30">30 questions</option><option value="all">Toutes</option></select></label>'+
 '<button class="button primary" onclick="startSubjectExerciseSession()">Commencer</button></div><div id="subjectExerciseSummary"></div><div id="subjectExerciseSession"></div></section>';
}
window.openSubjectExercises=function(subject){
 if(!CESS_SUBJECTS[subject])return; exerciseSubject=subject;
 if(!CESS_SUBJECTS[subject].library&&typeof showView==='function')showView(subject);
 var root=subjectHost(subject);if(!root)return;
 if(CESS_SUBJECTS[subject].library)root.innerHTML=setupHtml(subject);else root.innerHTML=setupHtml(subject);
 refreshSubjectExerciseFilters();
 try{root.scrollIntoView({behavior:'smooth',block:'start'});}catch(e){}
};
window.closeSubjectExercises=function(subject){
 exerciseSession=null;
 if(CESS_SUBJECTS[subject]&&CESS_SUBJECTS[subject].library)renderLibrarySubject(subject);else renderSubject(subject);
};
window.refreshSubjectExerciseFilters=function(){
 var year=document.getElementById('subjectExerciseYear').value,select=document.getElementById('subjectExerciseChapter');
 Array.prototype.forEach.call(select.options,function(o){o.hidden=o.value!=='all'&&year!=='all'&&o.dataset.year!==year;});
 if(select.selectedOptions[0]&&select.selectedOptions[0].hidden)select.value='all';
 refreshSubjectExerciseLevels();
};
window.refreshSubjectExerciseLevels=function(){
 var year=document.getElementById('subjectExerciseYear').value,chapter=document.getElementById('subjectExerciseChapter').value,select=document.getElementById('subjectExerciseLevel');
 select.innerHTML='<option value="all">Tous les niveaux</option>'+levels(exerciseSubject,year,chapter).map(function(l){return '<option value="'+esc(l)+'">'+esc(l)+'</option>';}).join('');
 var count=allChaps(exerciseSubject).filter(function(c){return (year==='all'||c.annee===year)&&(chapter==='all'||c.id===chapter);}).reduce(function(n,c){return n+(c.exercices||[]).length;},0);
 document.getElementById('subjectExerciseSummary').innerHTML='<p><strong>'+count+' questions disponibles</strong> pour les filtres choisis.</p>';
};
window.startSubjectExerciseSession=function(){
 var year=document.getElementById('subjectExerciseYear').value,chapter=document.getElementById('subjectExerciseChapter').value,level=document.getElementById('subjectExerciseLevel').value,count=document.getElementById('subjectExerciseCount').value,pool=[];
 allChaps(exerciseSubject).forEach(function(c){
  if((year==='all'||c.annee===year)&&(chapter==='all'||c.id===chapter))(c.exercices||[]).forEach(function(e){if(level==='all'||(e.niveau||'Standard')===level)pool.push({chapter:c,exercise:e});});
 });
 pool=shuffle(pool);if(count!=='all')pool=pool.slice(0,Number(count));
 exerciseSession={cards:pool,index:0,score:0,answered:false};renderSubjectExerciseQuestion();
};
window.renderSubjectExerciseQuestion=function(){
 var root=document.getElementById('subjectExerciseSession'),s=exerciseSession;if(!root||!s)return;var item=s.cards[s.index];
 if(!item){root.innerHTML='<div class="quiz-result"><h2>'+s.score+' / '+s.cards.length+'</h2><p>Série terminée. Reviens sur les erreurs avant de recommencer.</p><button class="button primary" onclick="startSubjectExerciseSession()">Nouvelle série</button></div>';return;}
 var e=item.exercise,opts=Array.isArray(e.options)?e.options:[];
 root.innerHTML='<div class="subject-question-meta"><span>Question '+(s.index+1)+' / '+s.cards.length+'</span><span>'+esc(item.chapter.annee+' · '+item.chapter.titre)+'</span><span>'+esc(e.niveau||'Standard')+'</span></div><h3>'+esc(e.question)+'</h3>'+(opts.length?'<div class="quiz-options">'+opts.map(function(o,i){return '<button class="quiz-option" onclick="answerSubjectExercise(this,'+i+')">'+esc(o)+'</button>';}).join('')+'</div>':'<p class="empty-state">Cette question nécessite une réponse rédigée. Consulte la correction pour t’autoévaluer.</p><button class="button primary" onclick="answerSubjectExercise(this,-1)">Voir la correction</button>')+'<div id="subjectExerciseFeedback" aria-live="polite"></div>';
};
window.answerSubjectExercise=function(button,answer){
 var s=exerciseSession;if(!s||s.answered)return;s.answered=true;var e=s.cards[s.index].exercise,correct=Number(e.correct),good=answer===correct;
 if(answer>=0){document.querySelectorAll('#subjectExerciseSession .quiz-option').forEach(function(b,i){b.disabled=true;if(i===correct)b.classList.add('correct');else if(i===answer)b.classList.add('wrong');});if(good)s.score++;}
 document.getElementById('subjectExerciseFeedback').innerHTML='<div class="'+(good?'feedback-success':'feedback-retry')+'"><strong>'+(answer<0?'Correction':good?'✓ Bonne réponse':'↺ À revoir')+'</strong><p>'+esc(e.correction||'Reprends le cours et justifie chaque étape.')+'</p></div><button class="button primary" onclick="nextSubjectExercise()">Continuer →</button>';
};
window.nextSubjectExercise=function(){if(!exerciseSession)return;exerciseSession.index++;exerciseSession.answered=false;renderSubjectExerciseQuestion();};
})();
