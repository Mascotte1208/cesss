/* Identité des questions et suivi : indépendant de l'ordre des banques. */
var CESS_QUESTION_REGISTRY = Object.create(null);
function questionIdentity(chapterId,q){
 var normalize=function(s){return String(s||'').normalize('NFC').replace(/\s+/g,' ').trim();};
 var text=JSON.stringify([chapterId,normalize(q.question),(q.options||[]).map(normalize).sort(),q.options&&q.options.length?normalize(q.options[q.correct]):'open']);
 var a=2166136261,b=5381;for(var i=0;i<text.length;i++){a=Math.imul(a^text.charCodeAt(i),16777619);b=Math.imul(b,33)^text.charCodeAt(i);}
 return chapterId+'~'+(a>>>0).toString(16)+(b>>>0).toString(16);
}
function rebuildQuestionRegistry(){
 CESS_QUESTION_REGISTRY=Object.create(null);
 Object.keys(CESS_SUBJECTS).forEach(function(sub){allChaps(sub).forEach(function(ch){(ch.exercices||[]).forEach(function(q){
  q.uid=questionIdentity(ch.id,q);CESS_QUESTION_REGISTRY[q.uid]={id:q.uid,chapter:ch,exercise:q};
 });});});
}
function migrateQuestionTracking(){
 cessState.questionMemory=cessState.questionMemory||{};cessState.sessions=cessState.sessions||{};
 cessState.archivedMistakes=cessState.archivedMistakes||[];
 cessState.mistakes=(cessState.mistakes||[]).filter(function(id){
  if(CESS_QUESTION_REGISTRY[id]||/^tf_\d+$/.test(id))return true;
  if(cessState.archivedMistakes.indexOf(id)<0)cessState.archivedMistakes.push(id);return false;
 });
 cessState.questionTrackingVersion=1;cessSave();
}
function recordQuestionResult(id,good,attemptId){
 var row=CESS_QUESTION_REGISTRY[id];if(!row)return;
 var mem=cessState.questionMemory||(cessState.questionMemory={}),previous=mem[id]||{};
 if(attemptId&&(previous.attemptIds||[previous.attemptId]).indexOf(attemptId)>=0)return;
 var day=new Date().toISOString().slice(0,10),days=good?(previous.successDays||[]):[];
 if(good&&days.indexOf(day)<0)days=days.concat(day).slice(-8);
 mem[id]={correct:!!good,seen:(previous.seen||0)+1,at:Date.now(),successDays:days,attemptId:attemptId||'',attemptIds:(previous.attemptIds||[]).concat(attemptId||newSessionId()).slice(-64),selfAssessed:!(row.exercise.options||[]).length};
 cessState.mistakes=cessState.mistakes||[];var i=cessState.mistakes.indexOf(id);
 if(good&&i>=0)cessState.mistakes.splice(i,1);if(!good&&i<0)cessState.mistakes.push(id);
}
function chapterEvidence(id){
 var ch=findChapter(id),ids=ch?Array.from(new Set((ch.exercices||[]).map(function(q){return q.uid||questionIdentity(id,q);} ))):[];
 var memory=cessState.questionMemory||{},seen=ids.filter(function(k){return !!memory[k];}),good=seen.filter(function(k){return memory[k].correct;}),stable=good.filter(function(k){return (memory[k].successDays||[]).length>=2;});
 return {total:ids.length,seen:seen.length,good:good.length,stable:stable.length,errors:seen.length-good.length};
}
chapterStatus=function(id){
 var e=chapterEvidence(id);if(e.seen){if(e.errors)return 'À retravailler';if(e.total&&e.stable/e.total>=.8)return 'Acquis consolidés';if(e.good>=Math.min(3,e.total))return 'Acquis à confirmer';return 'En cours';}
 if((cessState.mastery||{})[id])return 'Historique à confirmer';
 return (cessState.readChapters||{})[id]||(cessState.progress||{})[id]?'Lu':'À découvrir';
};
getChapterProgress=function(id){var e=chapterEvidence(id);return e.total?Math.round(e.good/e.total*100):0;};
// Anciennes sessions agrégées : conservées, jamais converties en réponses inventées.
saveChapterAttempt=function(id,score,total){if(!findChapter(id)||!total)return;cessState.mastery=cessState.mastery||{};cessState.mastery[id]={score:score,total:total,date:new Date().toISOString(),historical:true};};
noteQuizAttempts=function(state){(state.questions||[]).forEach(function(q,i){if(state.responses&&state.responses[i]!==undefined)recordQuestionResult(q.id,state.responses[i]===q.correct,(state.sessionId||'session')+':'+i);});};
flattenQuestions=function(filter){
 return Object.values(CESS_QUESTION_REGISTRY).filter(function(r){return !r.special&&(r.exercise.options||[]).length&&(!CESS_SUBJECTS[filter]||r.chapter.matiere===filter)&&(filter!=='mistakes'||cessState.mistakes.indexOf(r.id)>=0);}).map(function(r){return Object.assign({},r.exercise,{id:r.id,chapterId:r.chapter.id,chapter:r.chapter.titre,annee:r.chapter.annee,matiere:r.chapter.matiere});});
};
function freshExerciseRows(rows,count){
 var memory=cessState.questionMemory||{};
 return shuffle(rows).sort(function(a,b){var x=memory[a.id],y=memory[b.id];return Number(!!x)-Number(!!y)||(x&&y?(Number(x.correct)-Number(y.correct)||x.at-y.at):0);}).slice(0,count);
}
function newSessionId(){return Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);}
function checkpoint(kind,state){cessState.sessions=cessState.sessions||{};if(!state||state.finished)delete cessState.sessions[kind];else cessState.sessions[kind]=JSON.parse(JSON.stringify(state));cessSave();}
function trackingPanel(){var archive=(cessState.archivedMistakes||[]).length;return '<section class="panel"><h2>Comprendre mon suivi</h2><p>Le pourcentage mesure les questions distinctes réussies lors de leur dernière réponse. Lire un cours ne valide pas ses exercices. Les réponses rédigées sont autoévaluées. Un acquis est consolidé après des réussites sur plusieurs jours.</p>'+(archive?'<p>'+archive+' ancien(s) repère(s) d’erreur conservé(s) dans la sauvegarde : leur question a changé et ne peut pas être réattribuée avec certitude. Les anciennes notes restent dans l’historique.</p>':'')+'<button class="button secondary" onclick="openMistakeReview()">Revoir mes erreurs, y compris les rédactions</button></section>';}
var originalRenderProgress=renderProgress;
renderProgress=function(){originalRenderProgress();var host=document.getElementById('progress');if(host){var panel=host.querySelector('#trackingTools');if(panel)panel.remove();host.insertAdjacentHTML('beforeend','<div id="trackingTools">'+trackingPanel()+backupPanel()+resumePanel()+'</div>');}};
rebuildQuestionRegistry();
(CESS_TRUEFALSE_BANK||[]).forEach(function(q){CESS_QUESTION_REGISTRY[q.id]={id:q.id,special:true,chapter:{id:'truefalse',matiere:q.matiere,annee:q.annee,titre:'Vrai ou faux'},exercise:q};});
migrateQuestionTracking();
