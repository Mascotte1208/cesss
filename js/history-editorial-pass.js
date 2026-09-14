/* Finition éditoriale Histoire : conservation intégrale, nettoyage et lisibilité. */
(function(){
if(!Array.isArray(window.HISTORY_REVISION_DATA))return;
function tidy(md){
 var s=String(md||'').replace(/\u00a0/g,' ').replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').replace(/■+/g,'…');
 var repairs=[
  [/Sfumato \(conto\b/g,'Sfumato (contours adoucis)'],[/perspective sur voût\b/g,'perspective sur voûte'],[/Madone SixtineHarmonie/g,'Madone Sixtine — harmonie'],[/Maître de la gravu\b/g,'Maître de la gravure'],
  [/Luthéranisme fide \(foi seule\), : Allemagne, Sola scriptura Scandinavie, \(Bible seule\)\. Pays Bal Tra \(1483-1546\)/g,'Martin Luther (1483-1546) — justification par la foi seule (sola fide) et autorité de la Bible (sola scriptura). Le luthéranisme s’implante notamment en Allemagne et en Scandinavie.'],
  [/Prédestination : Dieu a choisi d'avance les Calvinisme\s*\n\s*élus\. Église: dirigée Suisse,par France anciens \(huguenots\), \(presbytres\)\. Écosse, Mora \(1509-1564\)/g,'Jean Calvin (1509-1564) — prédestination et Église dirigée par des anciens (presbytres). Le calvinisme se diffuse notamment en Suisse, en France et en Écosse.'],
  [/Anglicanisme \(divorce refusé\)\. : ÉgliseCrée d'Angleterre\. l'Église anglicane dont i \(1491-1547\)/g,'Henri VIII (1491-1547) — rupture avec Rome et création de l’Église d’Angleterre, dont le souverain devient le chef.'],
  [/Réforme leszwinglienne orgues, les \(Suisse processions\. alémanique\)\. \(1484-1531\)/g,'Zwingli (1484-1531) — réforme à Zurich, autorité de la Bible et simplification du culte. La réforme zwinglienne s’implante en Suisse alémanique.'],
  [/développent L'esclavage la traite négrière/g,'développent la traite négrière'],[/transportés en atlantique Amérique/g,'transportés à travers l’Atlantique vers les Amériques']
 ];
 repairs.forEach(function(r){s=s.replace(r[0],r[1]);});
 var seen={};
 s=s.split('\n').filter(function(line){var key=line.trim().replace(/^[-*]\s*/,'').replace(/\*\*/g,'').toLowerCase();if(!key||key.length<24)return true;if(seen[key])return false;seen[key]=1;return true;}).join('\n');
 return s.trim();
}
HISTORY_REVISION_DATA.forEach(function(d){d.markdown=tidy(d.markdown);d.section=String(d.section||'').replace(/^IE I\b/,'PARTIE I');d.editorialReviewed=true;});
if(window.CESS_LIBRARY_DATA&&CESS_LIBRARY_DATA.histoire){Object.keys(CESS_LIBRARY_DATA.histoire.data||{}).forEach(function(y){(CESS_LIBRARY_DATA.histoire.data[y]||[]).forEach(function(ch){ch.cours=String(ch.cours||'').replace(/<p>\s*<\/p>/g,'').replace(/(<br\s*\/?>(\s*)){3,}/gi,'<br><br>');ch.contentVersion=12;});});}
})();
