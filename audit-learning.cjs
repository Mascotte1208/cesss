const fs=require('fs'),vm=require('vm'),assert=require('assert');
const setup=fs.readFileSync(__dirname+'/check-runtime.cjs','utf8').split('assert.equal(Object.keys(c.CESS_SUBJECTS)')[0];
vm.runInNewContext(setup+`
const chapters=Object.keys(c.CESS_SUBJECTS).flatMap(s=>c.allChaps(s));
assert.equal(chapters.length,380);assert.equal(c.HISTORY_REVISION_DATA.length,178);
const all=chapters.flatMap(ch=>ch.exercices);assert.equal(all.length,2291);assert.equal(all.filter(q=>!q.options.length).length,116);
const ch=c.allChaps('maths')[0],q=ch.exercices[0];
const reordered={...q,options:q.options.slice().reverse(),correct:q.options.length-1-q.correct};
assert.equal(c.questionIdentity(ch.id,q),c.questionIdentity(ch.id,reordered));
const ids=ch.exercices.slice(0,4).map(q=>q.uid);c.cessState.questionMemory={};
ids.forEach((id,i)=>c.recordQuestionResult(id,true,'unique'+i));
assert.equal(c.chapterEvidence(ch.id).good,4);assert.equal(c.chapterStatus(ch.id),'Acquis à confirmer');
c.recordQuestionResult(ids[0],false,'later');assert.equal(c.chapterStatus(ch.id),'À retravailler');
c.recordQuestionResult(ids[0],true,'unique0');assert.equal(c.cessState.questionMemory[ids[0]].correct,false,'finishing an old session must not overwrite later evidence');
for(let i=0;i<5;i++)c.recordQuestionResult(ids[0],true,'repeat'+i);
assert.equal(c.chapterEvidence(ch.id).seen,4,'repeating one question does not increase coverage');
const open=all.find(q=>!q.options.length);c.recordQuestionResult(open.uid,false,'open');assert(c.cessState.mistakes.includes(open.uid));assert(c.CESS_QUESTION_REGISTRY[open.uid]);
assert.equal(c.cessState.questionMemory[open.uid].selfAssessed,true);
assert(c.cessState.archivedMistakes.includes('francais_3e_1_0'));
const backup=c.backupPayload();assert.equal(c.validateLearningBackup(JSON.stringify(backup)).format,'carnet-cess-backup');
assert.throws(()=>c.validateLearningBackup('{"format":"wrong"}'));
assert.throws(()=>c.validateLearningBackup('{"__proto__": {}}'));
assert.throws(()=>c.validateLearningBackup(JSON.stringify({...backup,state:{...backup.state,results:[{score:9,total:1}]}})));
const sameDay=new Set(Object.values(c.cessState.questionMemory).flatMap(m=>m.successDays));assert.equal(sameDay.size,1);
for(const f of c.allChaps('francais')){assert(f.cours.includes('Lecture accompagnée'));assert(f.exercices.some(q=>!q.options.length&&q.criteria.length===3));}
console.log('PASS: stable identities, honest coverage, late-session deduplication, open answers, archived legacy errors, backup validation, 24 French workshops.');
`,{require,__dirname,console,global,URL,assert});
