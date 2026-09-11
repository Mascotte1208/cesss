/* Nettoyage transversal : volume honnête, objectifs spécifiques et fiches sans texte répétitif. */
(function(){
if(typeof CESS_LIBRARY_DATA==='undefined')return;
var verbs={
 anglais:['comprendre et produire un message','choisir la structure grammaticale adaptée','justifier un choix de formulation'],
 neerlandais:['comprendre et produire un message','appliquer l’ordre des mots','adapter le vocabulaire à la situation'],
 latin:['analyser les formes','justifier la fonction des mots','traduire en respectant le sens'],
 physique:['modéliser la situation','choisir une relation et ses unités','interpréter le résultat'],
 numerique:['décomposer le problème','construire ou lire un algorithme','évaluer sécurité et fiabilité'],
 histoire:['situer et contextualiser','analyser et confronter des sources','construire une explication nuancée'],
 sciences_sociales:['définir les concepts','analyser des données ou témoignages','discuter les limites de l’enquête'],
 sciences_economiques:['identifier les mécanismes','calculer et interpréter un indicateur','argumenter à partir de données'],
 epc:['distinguer faits, normes et valeurs','évaluer un argument','formuler une position justifiée']
};
function safe(s){return String(s||'').replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c];});}
Object.keys(verbs).forEach(function(key){
 var subject=CESS_LIBRARY_DATA[key];if(!subject)return;
 Object.values(subject.data).forEach(function(chapters){chapters.forEach(function(ch){
  var f=(ch.fiches||[])[0];if(!f)return;
  var notions=(ch.matieres||[]).map(function(n){return'<li>'+safe(n)+'</li>';}).join('');
  ch.objectifs=verbs[key].map(function(v){return v.charAt(0).toUpperCase()+v.slice(1)+' dans « '+String(ch.titre).replace(/^\d+\.\s*/,'')+' »';});
  ch.desc='Repère essentiel : '+f.term+'.';
  ch.cours='<h4>'+safe(f.term)+'</h4><p>'+safe(f.definition)+'</p><h4>Exemple expliqué</h4><p>'+safe(f.example)+'</p><h4>Plan du chapitre</h4><ul>'+notions+'</ul><h4>Ce que je dois savoir faire</h4><ul>'+ch.objectifs.map(function(o){return'<li>'+safe(o)+'</li>';}).join('')+'</ul>';
  var applied=(ch.exercices||[]).filter(function(e){return e.niveau==='Appliquer';});
  var base=(ch.exercices||[]).find(function(e){return e.niveau!=='Appliquer';});
  ch.exercices=(base?[base]:[]).concat(applied);
  ch.contentVersion=4;
 });});
});
})();
