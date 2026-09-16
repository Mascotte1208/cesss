const fs=require('fs'),vm=require('vm'),assert=require('assert');
const files=[...fs.readFileSync(__dirname+'/index.html','utf8').matchAll(/<script src="([^"?]+)/g)].map(x=>x[1]);
const nodes=new Map();const element=id=>{if(!nodes.has(id))nodes.set(id,{id,innerHTML:'',textContent:'',value:'',style:{},classList:{add(){},remove(){},contains(){return false}},querySelector(){return null},querySelectorAll(){return []},prepend(){},scrollIntoView(){},addEventListener(){}});return nodes.get(id);};
const storage=new Map([['carnetCESSv4',JSON.stringify({version:1,progress:{francais_3e_1:100},results:[],mistakes:['francais_3e_1_0'],theme:'dark'})]]);
const c={navigator:{},console,Date,Math,Map,Set,Array,Object,Number,String,JSON,FormData:global.FormData,URL,document:{readyState:'loading',getElementById:element,querySelectorAll(){return[]},querySelector(){return null},createElement(){return element('temporary')},addEventListener(){},body:{classList:{add(){},remove(){}}}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setInterval(){return 1},clearInterval(){},setTimeout(){},alert(){},scrollTo(){},print(){}};c.window=c;vm.createContext(c);
for(const f of files){try{vm.runInContext(fs.readFileSync(__dirname+'/'+f,'utf8'),c,{filename:f});}catch(e){throw Error(f+': '+e.stack);}}

const maths=Object.values(c.CHAPITRES).flat();
assert.equal(maths.length,34);assert(maths.every(ch=>ch.mathsPrecision&&ch.mathsMastery));
const history=c.HISTORY_REVISION_DATA;assert.equal(history.length,178);
const originalContext={};originalContext.window=originalContext;vm.createContext(originalContext);
for(const f of ['js/maths-data.js','js/additional-chapters.js'])vm.runInContext(fs.readFileSync(f,'utf8'),originalContext);
for(const ch of Object.values(originalContext.CHAPITRES).flat()){const now=maths.find(x=>x.id===ch.id);assert(now,'missing '+ch.id);assert(now.cours.includes(ch.cours),'original course changed '+ch.id);for(const q of ch.exercices)assert(now.exercices.some(x=>x.question===q.question),'exercise removed');}
assert(!maths.some(ch=>ch.cours.includes('M55 135 L285')),'incorrect triangle remains');
console.log(JSON.stringify({maths:maths.length,enhanced:maths.filter(x=>x.mathsPrecision).length,historyDossiers:history.length,allOriginalMathsCoursesPreserved:true,allScriptsLoaded:true}));
