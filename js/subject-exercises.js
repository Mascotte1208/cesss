/* Un seul espace d'entraînement ; sessions sauvegardées sans recopier les cours. */
(function(){
var exerciseSubject='',exerciseSession=null;
function esc(s){return escapeHtml(String(s||''));}
function host(subject){var info=CESS_SUBJECTS[subject]||{};return document.getElementById(subject==='all'?'examPanel':info.library?'libraryContent':({maths:'mathContent',geo:'geoContent',bio:'bioContent'})[subject]);}
function value(id,fallback){var n=document.getElementById(id);return n?n.value:fallback;}
function rows(){return Object.values(CESS_QUESTION_REGISTRY).filter(function(r){return exerciseSubject==='all'?cessState.mistakes.indexOf(r.id)>=0:!r.special&&r.chapter.matiere===exerciseSubject;});}
function persist(){if(exerciseSession)checkpoint('subject',exerciseSession);}
function label(){return exerciseSubject==='all'?'Mes erreurs':CESS_SUBJECTS[exerciseSubject].label;}
function setup(){var list=rows(),chapters=Array.from(new Map(list.map(function(r){return[r.chapter.id,r.chapter];})).values());
 return '<div class="subject-exercise-head"><h1>'+esc(label())+'</h1><button class="button secondary" onclick="showView(\'library\')">← Matières</button></div><section class="panel"><p>Les réponses sont sauvegardées au fur et à mesure. Les rédactions sont autoévaluées.</p><div class="session-controls"><label>Année<select id="subjectExerciseYear" onchange="refreshSubjectExerciseFilters()"><option value="all">Toutes</option>'+['3e','4e','5e','6e','transversal'].map(function(y){return '<option>'+y+'</option>';}).join('')+'</select></label><label>Chapitre<select id="subjectExerciseChapter" onchange="refreshSubjectExerciseLevels()"><option value="all">Toute la matière</option>'+chapters.map(function(c){return '<option value="'+esc(c.id)+'" data-year="'+esc(c.annee)+'">'+esc(c.annee+' · '+c.titre)+'</option>';}).join('')+'</select></label><label>Niveau<select id="subjectExerciseLevel"><option value="all">Tous les niveaux</option></select></label><label>Longueur<select id="subjectExerciseCount"><option value="10">10 questions</option><option value="20">20 questions</option><option value="30">30 questions</option><option value="all">Toutes</option></select></label><button class="button primary" onclick="startSubjectExerciseSession()">Commencer</button></div><div id="subjectExerciseSummary"></div><div id="subjectResume"></div><div id="subjectExerciseSession"></div></section>';
}
window.openSubjectExercises=function(subject,chapterId){if(subject!=='all'&&!CESS_SUBJECTS[subject])return;
 var old=exerciseSubject?host(exerciseSubject):null;if(old&&old.querySelector('#subjectExerciseSession'))old.innerHTML='';
 exerciseSubject=subject;exerciseSession=null;showView(subject==='all'?'exam':subject);var root=host(subject);root.innerHTML=setup();
 var ch=chapterId&&findChapter(chapterId);if(ch){document.getElementById('subjectExerciseYear').value=ch.annee;document.getElementById('subjectExerciseChapter').value=ch.id;}
 refreshSubjectExerciseFilters();var saved=(cessState.sessions||{}).subject;
 if(saved&&!saved.finished)document.getElementById('subjectResume').innerHTML='<p><button class="button secondary" onclick="resumeSubjectExercises()">Reprendre ma série sauvegardée</button></p>';
 if(root.scrollIntoView)root.scrollIntoView({block:'start'});
};
window.openMistakeReview=function(){openSubjectExercises('all');};
window.closeSubjectExercises=function(subject){exerciseSession=null;showView(subject);};
window.refreshSubjectExerciseFilters=function(){var year=value('subjectExerciseYear','all'),select=document.getElementById('subjectExerciseChapter');Array.from(select.options).forEach(function(o){o.hidden=o.value!=='all'&&year!=='all'&&o.dataset.year!==year;});if(select.selectedOptions[0]&&select.selectedOptions[0].hidden)select.value='all';refreshSubjectExerciseLevels();};
window.refreshSubjectExerciseLevels=function(){var year=value('subjectExerciseYear','all'),chapter=value('subjectExerciseChapter','all'),list=rows().filter(function(r){return(year==='all'||r.chapter.annee===year)&&(chapter==='all'||r.chapter.id===chapter);}),levels=Array.from(new Set(list.map(function(r){return r.exercise.niveau||'Standard';})));document.getElementById('subjectExerciseLevel').innerHTML='<option value="all">Tous les niveaux</option>'+levels.map(function(l){return '<option>'+esc(l)+'</option>';}).join('');document.getElementById('subjectExerciseSummary').innerHTML='<p>'+list.length+' questions disponibles, dont '+list.filter(function(r){return !(r.exercise.options||[]).length;}).length+' réponses rédigées.</p>';};
window.startSubjectExerciseSession=function(){
 if((cessState.sessions||{}).subject&&!cessState.sessions.subject.finished&&!confirm('Une série est sauvegardée. La remplacer par cette nouvelle série ?'))return;
 var year=value('subjectExerciseYear','all'),chapter=value('subjectExerciseChapter','all'),level=value('subjectExerciseLevel','all'),count=value('subjectExerciseCount','10');
 var pool=rows().filter(function(r){return(year==='all'||r.chapter.annee===year)&&(chapter==='all'||r.chapter.id===chapter)&&(level==='all'||(r.exercise.niveau||'Standard')===level);});
 pool=freshExerciseRows(pool,count==='all'?pool.length:Number(count));
 exerciseSession={sessionId:newSessionId(),subject:exerciseSubject,cards:pool.map(function(r){var e=r.exercise;return {id:r.id,order:e.options&&e.options.length?shuffle(e.options.map(function(_,i){return i;})):[]};}),index:0,responses:[],drafts:{},year:year,finished:false};persist();renderSubjectExerciseQuestion();
};
window.resumeSubjectExercises=function(){var saved=(cessState.sessions||{}).subject;if(!saved)return;var copy=JSON.parse(JSON.stringify(saved));openSubjectExercises(copy.subject);exerciseSession=copy;renderSubjectExerciseQuestion();};
window.saveSubjectDraft=function(text){if(!exerciseSession)return;var id=exerciseSession.cards[exerciseSession.index].id;exerciseSession.drafts[id]=String(text).slice(0,30000);cessState.writtenAnswers=cessState.writtenAnswers||{};cessState.writtenAnswers[id]=exerciseSession.drafts[id];persist();};
function current(){var s=exerciseSession;return s&&CESS_QUESTION_REGISTRY[(s.cards[s.index]||{}).id];}
function answer(good,choice){var s=exerciseSession,r=current();if(!r||s.responses[s.index])return;
 s.responses[s.index]={id:r.id,correct:!!good,answer:choice,chapterId:r.chapter.id,selfAssessed:!(r.exercise.options||[]).length};
 recordQuestionResult(r.id,good,s.sessionId+':'+s.index);persist();renderSubjectExerciseQuestion();
}
function finish(){var s=exerciseSession;if(s.finished)return;s.finished=true;var answered=s.responses.filter(Boolean),score=answered.filter(function(r){return r.correct;}).length;
 cessState.results.push({date:new Date().toISOString(),mode:label()+' · exercices',score:score,total:answered.length,percentage:answered.length?Math.round(score/answered.length*100):0,contentVersion:2,subject:exerciseSubject,year:s.year,sessionId:s.sessionId});checkpoint('subject',s);
}
window.renderSubjectExerciseQuestion=function(){var root=document.getElementById('subjectExerciseSession'),s=exerciseSession;if(!root||!s)return;
 if(!s.cards.length){root.innerHTML='<p>Aucune question pour ces filtres.</p>';s.finished=true;checkpoint('subject',s);return;}
 if(s.index>=s.cards.length){finish();var answered=s.responses.filter(Boolean),score=answered.filter(function(r){return r.correct;}).length;root.innerHTML='<h2>Série terminée : '+score+' / '+answered.length+'</h2><p>Les réponses et les erreurs ont été enregistrées.</p><button class="button primary" onclick="showView(\'progress\')">Voir mon suivi</button>';return;}
 var r=current();if(!r){root.innerHTML='<p>Cette question a été modifiée depuis la sauvegarde. Ton historique est conservé.</p><button onclick="skipRetiredSubjectQuestion()">Continuer la série</button>';return;}
 var e=r.exercise,card=s.cards[s.index],response=s.responses[s.index];
 var support=e.support?'<div style="overflow-x:auto"><table><caption>'+esc(e.support.caption)+'</caption><thead><tr>'+e.support.headers.map(function(h){return '<th scope="col">'+esc(h)+'</th>';}).join('')+'</tr></thead><tbody>'+e.support.rows.map(function(row){return '<tr>'+row.map(function(v){return '<td>'+esc(v)+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div>':'';
 root.innerHTML='<p>Question '+(s.index+1)+' / '+s.cards.length+' · '+esc(r.chapter.annee+' · '+r.chapter.titre)+'</p><h3>'+esc(e.question)+'</h3>'+support+(card.order.length?'<div class="quiz-options">'+card.order.map(function(original,i){return '<button class="quiz-option '+(response?(original===e.correct?'correct':original===response.answer?'wrong':''):'')+'" '+(response?'disabled':'')+' onclick="answerSubjectExercise(this,'+i+')">'+esc(e.options[original])+'</button>';}).join('')+'</div>':'<label for="subjectWrittenAnswer">Ta réponse (brouillon sauvegardé)</label><textarea id="subjectWrittenAnswer" rows="7" style="display:block;width:100%;box-sizing:border-box;margin:12px 0" oninput="saveSubjectDraft(this.value)">'+esc(s.drafts[r.id]||(cessState.writtenAnswers||{})[r.id]||'')+'</textarea><button class="button primary" onclick="revealSubjectExerciseCorrection()">Voir la correction</button>')+'<div id="subjectExerciseFeedback" aria-live="polite"></div>';
 if(response)feedback(response.correct);else if(s.revealed===r.id)revealSubjectExerciseCorrection();
};
function feedback(good){var r=current();document.getElementById('subjectExerciseFeedback').innerHTML='<div class="feedback-box '+(good?'feedback-success':'feedback-retry')+'"><strong>'+(good?'✓ Réponse validée':'↺ À retravailler')+'</strong><p>'+esc(r.exercise.correction||'')+'</p></div><button class="button primary" onclick="nextSubjectExercise()">Continuer →</button>';}
window.revealSubjectExerciseCorrection=function(){var s=exerciseSession,r=current();if(!r||s.responses[s.index])return;s.revealed=r.id;persist();var criteria=r.exercise.criteria||['Répondre précisément à la consigne','Justifier les étapes du raisonnement','Comparer les résultats et les unités avec le corrigé'];document.getElementById('subjectExerciseFeedback').innerHTML='<div class="feedback-box"><h4>Correction proposée</h4><p>'+esc(r.exercise.correction||'')+'</p><h4>Critères d’autoévaluation</h4><ul>'+criteria.map(function(c){return '<li>'+esc(c)+'</li>';}).join('')+'</ul><p>Ton texte n’est pas corrigé automatiquement.</p></div><button class="button secondary" onclick="selfAssessSubjectExercise(false)">↺ Je dois revoir</button> <button class="button primary" onclick="selfAssessSubjectExercise(true)">✓ Ma réponse est correcte</button>';};
window.selfAssessSubjectExercise=function(good){if(!exerciseSession||exerciseSession.revealed!==(current()||{}).id)return;answer(!!good,null);};
window.answerSubjectExercise=function(button,index){var s=exerciseSession,r=current();if(!r||!Number.isInteger(index))return;var original=s.cards[s.index].order[index];if(original===undefined)return;answer(original===r.exercise.correct,original);};
window.nextSubjectExercise=function(){if(!exerciseSession||!exerciseSession.responses[exerciseSession.index])return;exerciseSession.index++;exerciseSession.revealed=null;persist();renderSubjectExerciseQuestion();};
window.skipRetiredSubjectQuestion=function(){if(current())return;exerciseSession.index++;persist();renderSubjectExerciseQuestion();};
})();
