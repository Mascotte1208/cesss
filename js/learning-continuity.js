/* Reprise, sauvegarde locale et navigation contextuelle. */
function resumePanel(){var s=cessState.sessions||{};return '<section class="panel"><h2>Reprendre mon travail</h2>'+['subject','quiz','exam'].filter(function(k){return s[k]&&!s[k].finished;}).map(function(k){return '<p><button class="button secondary" onclick="'+({subject:'resumeSubjectExercises()',quiz:'resumeLearningQuiz()',exam:'resumeLearningExam()'})[k]+'">Reprendre '+({subject:'mes exercices',quiz:'mon quiz',exam:'mon entraînement ou examen'})[k]+'</button></p>';}).join('')+'<p>Les brouillons des exercices sont sauvegardés sur cet appareil. Le temps d’une simulation continue de s’écouler pendant une interruption.</p></section>';}
function backupPanel(){return '<section class="panel"><h2>Sauvegarder mon travail</h2><p>Emporte ta progression et tes brouillons sur un autre appareil avec un fichier de sauvegarde.</p><button class="button secondary" onclick="exportLearningBackup()">Télécharger ma sauvegarde</button><label style="display:block;margin-top:12px">Restaurer une sauvegarde<input type="file" accept="application/json,.json" onchange="importLearningBackup(this.files[0])"></label><p id="backupMessage" role="status"></p></section>';}
function backupPayload(){var extras={};for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k==='cessMiniHistoryV1'||/^carnetCESS_recent_/.test(k))extras[k]=localStorage.getItem(k);}return {format:'carnet-cess-backup',version:1,exportedAt:new Date().toISOString(),state:JSON.parse(JSON.stringify(cessState)),extras:extras};}
function exportLearningBackup(){var url=URL.createObjectURL(new Blob([JSON.stringify(backupPayload(),null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='carnet-cess-sauvegarde.json';a.click();setTimeout(function(){URL.revokeObjectURL(url);},1000);}
function validateLearningBackup(raw){
 if(typeof raw!=='string'||raw.length>5000000)throw new Error('Fichier trop volumineux (maximum 5 Mo).');
 var data=JSON.parse(raw,function(key,value){if(['__proto__','constructor','prototype'].includes(key))throw new Error('Clé invalide dans la sauvegarde.');return value;});
 if(!data||data.format!=='carnet-cess-backup'||data.version!==1||!data.state||typeof data.state!=='object'||Array.isArray(data.state))throw new Error('Ce fichier n’est pas une sauvegarde Carnet CESS compatible.');
 var s=data.state;if(!Array.isArray(s.results)||!Array.isArray(s.mistakes)||!s.mistakes.every(function(x){return typeof x==='string';}))throw new Error('Historique invalide.');
 for(var k of ['progress','readChapters','mastery','flashLearning','questionMemory','sessions','writtenAnswers'])if(s[k]!==undefined&&(!s[k]||typeof s[k]!=='object'||Array.isArray(s[k])))throw new Error('Données de suivi invalides.');
 for(var item of s.results)if(!item||typeof item!=='object'||!Number.isFinite(item.score)||!Number.isFinite(item.total)||item.score<0||item.total<0||item.score>item.total)throw new Error('Résultat invalide.');
 for(var m of Object.values(s.questionMemory||{}))if(!m||typeof m.correct!=='boolean'||!Number.isFinite(m.at)||!Array.isArray(m.successDays))throw new Error('Suivi de question invalide.');
 for(var draft of Object.values(s.writtenAnswers||{}))if(typeof draft!=='string'||draft.length>30000)throw new Error('Réponse écrite invalide.');
 for(var kind of Object.keys(s.sessions||{})){
  var session=s.sessions[kind];if(!['subject','quiz','exam'].includes(kind)||!session||!Number.isInteger(session.index)||session.index<0||!Array.isArray(session.responses))throw new Error('Session invalide.');
  var cards=kind==='subject'?session.cards:session.questions;if(!Array.isArray(cards)||cards.length>5000||session.index>cards.length)throw new Error('Série invalide.');
  if(kind==='subject'&&(!session.drafts||typeof session.drafts!=='object'||!(session.subject==='all'||CESS_SUBJECTS[session.subject])))throw new Error('Brouillon invalide.');
  if(kind==='subject'){
   if(!cards.every(function(card){return card&&typeof card.id==='string'&&Array.isArray(card.order)&&card.order.every(Number.isInteger);}))throw new Error('Ordre de réponses invalide.');
   if(!Object.values(session.drafts).every(function(t){return typeof t==='string'&&t.length<=30000;}))throw new Error('Texte de brouillon invalide.');
   cards.forEach(function(card){var row=CESS_QUESTION_REGISTRY[card.id];if(row&&((new Set(card.order)).size!==row.exercise.options.length||card.order.some(function(i){return i<0||i>=row.exercise.options.length;})))throw new Error('Choix incohérents.');});
  }else{
   if(!Number.isFinite(session.score)||session.score<0||session.score>cards.length)throw new Error('Score de session invalide.');
   cards.forEach(function(q){var row=q&&CESS_QUESTION_REGISTRY[q.id];if(!row||!Array.isArray(q.options)||q.options.length!==row.exercise.options.length||q.options.some(function(o){return row.exercise.options.indexOf(o)<0;})||new Set(q.options).size!==q.options.length||q.options[q.correct]!==row.exercise.options[row.exercise.correct]||q.question!==row.exercise.question||q.correction&&q.correction!==row.exercise.correction||!row.special&&q.chapterId!==row.chapter.id)throw new Error('Question de session incompatible avec cette version.');});
  }

 }
 return data;
}
async function importLearningBackup(file){var notice=document.getElementById('backupMessage');if(!file)return;try{if(file.size>5000000)throw new Error('Fichier trop volumineux.');var data=validateLearningBackup(await file.text());if(!confirm('Restaurer cette sauvegarde remplacera la progression actuelle de cet appareil. Télécharge d’abord une copie si tu souhaites la conserver.'))return;
 localStorage.setItem(CESS_DBKEY,JSON.stringify(data.state));Object.keys(data.extras||{}).forEach(function(k){if(k==='cessMiniHistoryV1'||/^carnetCESS_recent_/.test(k))localStorage.setItem(k,String(data.extras[k]));});location.reload();
 }catch(e){if(notice)notice.textContent='Sauvegarde non restaurée : '+e.message;}}
var renderQuizBeforeContinuity=renderQuizQuestion;
renderQuizQuestion=function(){var s=cessQuizState;if(s&&!s.sessionId)s.sessionId=newSessionId();renderQuizBeforeContinuity();if(!s)return;
 if(s.answered){if(quizTimer){clearInterval(quizTimer);quizTimer=null;}document.querySelectorAll('#gamePanel .quiz-option').forEach(function(b){b.disabled=true;});var feedback=document.getElementById('quizFeedback');if(feedback)feedback.innerHTML='<p>Réponse déjà enregistrée.</p><button class="button primary" onclick="nextQuizQuestion()">Continuer →</button>';}
 checkpoint('quiz',s);
};
var answerQuizBeforeContinuity=answerQuiz;
answerQuiz=function(i){if(!cessQuizState||cessQuizState.finished)return;answerQuizBeforeContinuity(i);checkpoint('quiz',cessQuizState);};
var finishQuizBeforeContinuity=finishQuiz;
finishQuiz=function(){finishQuizBeforeContinuity();checkpoint('quiz',cessQuizState);};
function resumeLearningQuiz(){var saved=(cessState.sessions||{}).quiz;if(!saved)return;var copy=JSON.parse(JSON.stringify(saved));showView('games');cessQuizState=copy;renderQuizQuestion();}
var renderExamBeforeContinuity=renderExamQuestion;
renderExamQuestion=function(){var s=cessExamState;if(s&&!s.sessionId)s.sessionId=newSessionId();renderExamBeforeContinuity();if(!s)return;
 if(s.answered&&!s.finished){document.querySelectorAll('#examPanel .quiz-option').forEach(function(b){b.disabled=true;});document.getElementById('examFeedback').innerHTML='<p>Réponse déjà enregistrée.</p><button class="button primary" onclick="nextExamQuestion()">Continuer →</button>';}
 checkpoint('exam',s);
};
var answerExamBeforeContinuity=answerExam;
answerExam=function(i){answerExamBeforeContinuity(i);checkpoint('exam',cessExamState);};
var finishExamBeforeContinuity=finishExam;
finishExam=function(){finishExamBeforeContinuity();checkpoint('exam',cessExamState);};
function resumeLearningExam(){var saved=(cessState.sessions||{}).exam;if(!saved)return;var copy=JSON.parse(JSON.stringify(saved));showView('exam');cessExamState=copy;renderExamQuestion();if(copy.deadline&&!copy.finished)examInterval=setInterval(updateExamClock,500);}
var chapterResourceContext=null, restoringLearningRoute=false;
function setLearningRoute(route){if(!window.location||restoringLearningRoute)return;if(location.hash!==route)history.pushState(null,'',route);}
var showViewBeforeContinuity=showView;
showView=function(id){chapterResourceContext=null;showViewBeforeContinuity(id);setLearningRoute('#view/'+encodeURIComponent(id));};
var openChapterBeforeContinuity=openChapter;
openChapter=function(id){var ch=findChapter(id);if(!ch)return;chapterResourceContext=ch.id;openChapterBeforeContinuity(id);setLearningRoute('#chapter/'+encodeURIComponent(id));
 if(typeof ensureSubjectFigures==='function')ensureSubjectFigures(ch.matiere).then(function(changed){if(changed&&chapterResourceContext===id)openChapterBeforeContinuity(id);});
};
function applyLearningRoute(){if(!window.location)return;var parts=location.hash.slice(1).split('/'),id;try{id=decodeURIComponent(parts.slice(1).join('/'));}catch(e){return;}restoringLearningRoute=true;try{if(parts[0]==='chapter'&&findChapter(id)){var ch=findChapter(id);showView(ch.matiere);openChapter(id);}else if(parts[0]==='view'&&document.getElementById(CESS_SUBJECTS[id]&&CESS_SUBJECTS[id].library?'library':id))showView(id);}finally{restoringLearningRoute=false;}}
// Un changement de hash créé par l'application ne doit pas recréer le formulaire courant.
if(window.addEventListener){window.addEventListener('popstate',applyLearningRoute);window.addEventListener('hashchange',applyLearningRoute);document.addEventListener('DOMContentLoaded',applyLearningRoute);}
function openChapterResource(kind,id){var ch=findChapter(id);if(!ch)return;
 if(kind==='exercise'){openSubjectExercises(ch.matiere,id);return;}
 if(kind==='memo'){cessMemoMode='all';showView('memo');document.getElementById('memoSubject').value=ch.matiere;document.getElementById('memoYear').value=ch.annee;document.getElementById('memoSearch').value=ch.titre;renderMemo();return;}
 if(kind==='flashcards'){showView('flashcards');selectFlashcardSubject(ch.matiere);flashcardYear=ch.annee;renderFlashcardSetup();document.getElementById('flashChapter').value=id;}
}

var renderHomeBeforeContinuity=renderHome;
renderHome=function(){renderHomeBeforeContinuity();var root=document.getElementById('homePriorities');if(root&&Object.keys(cessState.sessions||{}).length)root.insertAdjacentHTML('afterbegin',resumePanel());};
