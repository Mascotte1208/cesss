/* Entraînement corrigé ou simulation chronométrée, sans certification officielle. */
var examInterval=null;
function stopExamTimer(){if(examInterval){clearInterval(examInterval);examInterval=null;}}
function renderExamPanel(){
    stopExamTimer();cessExamState=null;
    var root=document.getElementById('examPanel');if(!root)return;
    var p=learningProfile();
    root.innerHTML='<div class="panel"><h2>Entraînement ou simulation</h2><p>Les séries utilisent la banque de révision du site. Elles ne reproduisent pas une épreuve officielle du CESS.</p><div class="session-controls"><label>Matière<select id="examSubject"><option value="all">Mixte — mes matières</option>'+Object.keys(CESS_SUBJECTS).map(function(k){return '<option value="'+k+'">'+escapeHtml(CESS_SUBJECTS[k].label)+'</option>';}).join('')+'</select></label><label>Année<select id="examYear">'+['all','3e','4e','5e','6e'].map(function(y){return '<option value="'+y+'"'+(y===p.year?' selected':'')+'>'+(y==='all'?'Toutes les années':y)+'</option>';}).join('')+'</select></label><label>Longueur<select id="examCount"><option>10</option><option selected>15</option><option>30</option></select></label><label>Mode<select id="examMode"><option value="training">Correction après chaque réponse</option><option value="simulation">Simulation — correction à la fin</option></select></label><label>Durée de simulation<select id="examDuration"><option value="10">10 minutes</option><option value="20" selected>20 minutes</option><option value="30">30 minutes</option></select></label></div><button class="button primary" onclick="startExam()">Commencer →</button><p id="examMessage" role="status"></p></div>';
}
function startExam(subject){
    var byId=function(id,fallback){return document.getElementById(id)?document.getElementById(id).value:fallback;};
    subject=subject||byId('examSubject','all');var year=byId('examYear',learningProfile().year),count=Number(byId('examCount',15)),mode=byId('examMode','training'),duration=Number(byId('examDuration',20));
    var keys=learningProfile().subjects;
    var questions=flattenQuestions(subject).filter(function(q){return (subject!=='all'||keys.indexOf(q.matiere)>=0)&&(year==='all'||q.annee===year);});
    if(!questions.length){var message=document.getElementById('examMessage');if(message)message.textContent='Aucune question pour cette sélection. Essaie une autre année.';return;}
    stopExamTimer();cessExamState={subject:subject,year:year,mode:mode,questions:balancedQuestions(questions,count),responses:[],index:0,score:0,answered:false,finished:false,deadline:mode==='simulation'?Date.now()+duration*60000:null};
    renderExamQuestion();if(mode==='simulation')examInterval=setInterval(updateExamClock,500);
}
function updateExamClock(){if(!cessExamState||cessExamState.finished)return;var remaining=Math.max(0,Math.ceil((cessExamState.deadline-Date.now())/1000));var el=document.getElementById('examClock');if(el)el.textContent=Math.floor(remaining/60)+':'+String(remaining%60).padStart(2,'0');if(!remaining)finishExam();}
function renderExamQuestion(){
    var s=cessExamState;if(!s||s.finished)return;if(s.index>=s.questions.length){finishExam();return;}
    var q=s.questions[s.index];document.getElementById('examPanel').innerHTML='<div class="quiz-question-card"><div class="quiz-meta"><span>Question '+(s.index+1)+' / '+s.questions.length+'</span><span id="examClock" aria-label="Temps restant"></span></div><small>'+escapeHtml(CESS_SUBJECTS[q.matiere].label)+' · '+escapeHtml(q.annee)+'</small><h2>'+escapeHtml(q.question)+'</h2><div class="quiz-options">'+q.options.map(function(o,i){return '<button class="quiz-option" onclick="answerExam('+i+')">'+String.fromCharCode(65+i)+'. '+escapeHtml(o)+'</button>';}).join('')+'</div><div id="examFeedback" aria-live="polite"></div></div>';if(s.deadline)updateExamClock();
}
function answerExam(index){
    var s=cessExamState;if(!s||s.finished||s.answered)return;if(s.deadline&&Date.now()>=s.deadline){finishExam();return;}var q=s.questions[s.index];if(!Number.isInteger(index)||index<0||index>=q.options.length)return;
    s.answered=true;s.responses[s.index]=index;if(index===q.correct)s.score++;
    document.querySelectorAll('#examPanel .quiz-option').forEach(function(b){b.disabled=true;});
    var explanation=s.mode==='training'?'<p>'+(index===q.correct?'Bonne réponse.':'Réponse attendue : '+escapeHtml(q.options[q.correct]))+'</p><p>'+escapeHtml(q.correction)+'</p>':'';
    document.getElementById('examFeedback').innerHTML=explanation+'<button class="button primary" onclick="nextExamQuestion()">'+(s.index+1===s.questions.length?'Terminer':'Question suivante →')+'</button>';
}
function nextExamQuestion(){var s=cessExamState;if(!s||!s.answered||s.finished)return;s.index++;s.answered=false;renderExamQuestion();}
function finishExam(){
    var s=cessExamState;if(!s||s.finished)return;s.finished=true;stopExamTimer();noteQuizAttempts(s);
    s.questions.forEach(function(q,i){if(s.responses[i]!==undefined&&s.responses[i]!==q.correct&&cessState.mistakes.indexOf(q.id)<0)cessState.mistakes.push(q.id);});
    var pct=Math.round(s.score/s.questions.length*100);cessState.results.push({date:new Date().toISOString(),mode:'exam-'+s.subject,score:s.score,total:s.questions.length,percentage:pct,contentVersion:2,year:s.year});cessSave();
    document.getElementById('examPanel').innerHTML='<div class="panel"><h2>Session terminée</h2><strong>'+s.score+' / '+s.questions.length+' · '+pct+' %</strong><p>Les questions sans réponse comptent dans le total.</p><button class="button primary" onclick="renderExamPanel()">Nouvelle session</button> <button class="button secondary" onclick="showView(\'progress\')">Mon suivi</button></div>'+s.questions.map(function(q,i){var response=s.responses[i];return '<details class="memo-group"><summary>'+ (response===q.correct?'✓':'À revoir')+' · Question '+(i+1)+'</summary><div class="panel"><h3>'+escapeHtml(q.question)+'</h3><p>Ta réponse : '+(response===undefined?'Non répondue':escapeHtml(q.options[response]))+'</p><p>Réponse attendue : '+escapeHtml(q.options[q.correct])+'</p><p>'+escapeHtml(q.correction)+'</p><button class="button secondary" onclick="openStudyChapter(\''+q.chapterId+'\')">Revoir le cours</button></div></details>';}).join('');
}
