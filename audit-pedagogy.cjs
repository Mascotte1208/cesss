const fs=require('fs'),vm=require('vm'),assert=require('assert');
const setup=fs.readFileSync(__dirname+'/check-runtime.cjs','utf8').split('assert.equal(Object.keys(c.CESS_SUBJECTS)')[0];
vm.runInNewContext(setup+`
const history=c.allChaps('histoire');
assert.equal(history.flatMap(ch=>ch.exercices).filter(q=>q.options.length).length,361);
assert.equal(history.flatMap(ch=>ch.exercices).filter(q=>!q.options.length&&q.criteria.length===3).length,24);
for(const sub of ['chimie','physique']){
 const list=c.allChaps(sub).filter(ch=>ch.id.startsWith('lib_'+sub+'_'));
 assert.equal(list.length,24);
 assert(list.every(ch=>ch.exercices.some(q=>q.niveau==='Application'&&q.options.length===4)));
}
// Migration, résolution puis deuxième chargement : pas de résurrection.
storage.set('carnetCESSv4',JSON.stringify({version:c.CESS_STATE_VERSION,mistakes:[],legacyMistakes:['old_question'],progress:{},results:[]}));
vm.runInContext(fs.readFileSync(__dirname+'/js/app-state.js','utf8'),c);
assert(c.cessState.mistakes.includes('old_question'));assert.equal(c.cessState.legacyMistakes.length,0);
c.cessState.mistakes=[];c.cessSave();
vm.runInContext(fs.readFileSync(__dirname+'/js/app-state.js','utf8'),c);
assert.equal(c.cessState.mistakes.length,0);
// Banque et variantes : réponses distinctes, rotation persistante, pas de comptage à l'ouverture.
for(const mode of Object.keys(c.MINI_BANKS)){
 const bank=c.MINI_BANKS[mode].concat(c.miniVariants(mode));
 for(const row of bank)assert.equal(new Set(row[2]).size,4,mode+': '+row[1]);
 const first=c.miniSessionBank(mode,bank);assert(first.length<=8);
 first.forEach(row=>c.rememberMiniAnswer(mode,c.miniPrepare(row,0),true));
 const next=c.miniSessionBank(mode,bank);
 const unseen=bank.filter(row=>!first.includes(row));
 if(unseen.length>=8)assert(next.every(row=>!first.includes(row)),mode+' repeats before unseen');
}
const wave=fs.readFileSync(__dirname+'/js/physics-diagrams-4e.js','utf8');
assert(wave.includes('x (m)')&&wave.includes('t (s)'));
const chem=fs.readFileSync(__dirname+'/js/chemistry-diagrams-4e.js','utf8');assert(chem.includes('1 mol A restante'));
console.log('PASS: 48 applications, 24 rédactions, migration après résolution, banques et rotation des jeux.');
`,{require,__dirname,console,global,URL,assert});
