/* Conditions, résolution détaillée et vérification pour chaque chapitre de maths. */
(function(){if(typeof CHAPITRES==='undefined')return;
function e(s){return String(s||'').replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
var data={
'3e_fonctions':['f(x)=y','x appartient au domaine','f(x)=2x−3 ; f(4)',['f(4)=2·4−3','f(4)=8−3','f(4)=5'],'Le point (4 ; 5) appartient au graphique.'],
'3e_algebre_polynomes':['a²−b²=(a−b)(a+b)','reconnaître deux carrés','factoriser x²−25',['25=5²','x²−25=x²−5²','(x−5)(x+5)'],'Le développement redonne x²−25.'],
'3e_pythagore':['c²=a²+b²','triangle rectangle ; c est l’hypoténuse','côtés 6 cm et 8 cm',['c²=6²+8²','c²=100','c=10 cm'],'10²=6²+8².'],
'3e_thales':['AM/AB=AN/AC','alignements et parallélisme vérifiés','AM=3, AB=5, AC=10',['3/5=AN/10','AN=10·3/5','AN=6'],'6/10=3/5.'],
'3e_trigo_rect':['sin α=opposé/hypoténuse','triangle rectangle ; bon mode angulaire','hypoténuse 10, α=30°',['sin 30°=x/10','x=10·sin 30°','x=5'],'5/10=sin 30°.'],
'4e_polynomes_2deg':['Δ=b²−4ac','a≠0 ; analyser le signe de Δ','x²−5x+6=0',['Δ=25−24=1','x=(5±1)/2','x=2 ou x=3'],'Les deux valeurs annulent le polynôme.'],
'4e_vecteurs':['u·v=xᵤxᵥ+yᵤyᵥ','même base orthonormée','u=(2,3), v=(4,−1)',['u·v=2·4+3·(−1)','u·v=8−3','u·v=5'],'Le produit non nul exclut l’orthogonalité.'],
'4e_statistiques':['x̄=Σ(nᵢxᵢ)/Σnᵢ','valeurs et effectifs correspondants','moyenne de 4, 6 et 8',['x̄=(4+6+8)/3','x̄=18/3','x̄=6'],'6 est compris entre 4 et 8.'],
'4e_fonctions_ref':['f(x)=a(x−h)²+k','a≠0','sommet de 2(x−3)²−1',['Identifier la forme canonique','h=3 et k=−1','S(3 ; −1)'],'f(3)=−1.'],
'4e_geo_espace':['d=√(Δx²+Δy²+Δz²)','repère orthonormé','A(0,0,0), B(1,2,2)',['d=√(1²+2²+2²)','d=√9','d=3'],'La distance est positive.'],
'4e_trigo_cercle':['sin²α+cos²α=1','valable pour tout angle','cos α=0,6 et α aigu',['sin²α=1−0,36','sin α=√0,64','sin α=0,8'],'0,8²+0,6²=1.'],
'5e_limites':['lim(f+g)=lim f+lim g','limites existantes ; surveiller 0/0 et ∞/∞','lim(x→2)(3x+1)',['La fonction est continue','3·2+1','La limite vaut 7'],'Les valeurs proches de 2 donnent environ 7.'],
'5e_derivees_intro':["f'(a)=lim [f(a+h)−f(a)]/h",'la limite existe','f(x)=x² ; f′(3)',['f′(x)=2x','f′(3)=2·3','f′(3)=6'],'La tangente a une pente positive.'],
'5e_complexes':['i²=−1','séparer parties réelle et imaginaire','(2+3i)+(4−i)',['Réels : 2+4=6','Imaginaires : 3i−i=2i','Résultat : 6+2i'],'Re=6 et Im=2.'],
'5e_geo_analytique':['m=(y₂−y₁)/(x₂−x₁)','x₂≠x₁','A(1,2), B(3,6)',['m=(6−2)/(3−1)=2','y=2x+p','avec A, p=0 : y=2x'],'B vérifie 6=2·3.'],
'5e_stat_2var':['−1≤r≤1','corrélation ne signifie pas causalité','interpréter r=−0,92',['Signe négatif : relation décroissante','|r| proche de 1 : liaison forte','Ne pas conclure à une causalité'],'−0,92 appartient à [−1,1].'],
'5e_fonctions_trigo':['T=2π/|ω|','ω≠0 ; angles en radians','période de sin(2x)',['ω=2','T=2π/2','T=π'],'f(x+π)=f(x).'],
'6e_derivees':["(uv)'=u'v+uv'",'u et v dérivables','f(x)=x²eˣ',['u=x², v=eˣ','f′=2xeˣ+x²eˣ','f′=eˣ(x²+2x)'],'Le développement retrouve les deux termes.'],
'6e_integrales':['∫ₐᵇf=F(b)−F(a)','f continue sur [a,b]','∫₀²x dx',['F(x)=x²/2','F(2)−F(0)=4/2','Résultat : 2'],'L’aire du triangle vaut aussi 2.'],
'6e_probabilites':['P(A|B)=P(A∩B)/P(B)','P(B)>0','0,18/0,30',['P(A|B)=0,18/0,30','P(A|B)=0,60','Soit 60 %'],'0≤0,60≤1.'],
'6e_suites':['uₙ=u₀+n·r','suite arithmétique','u₀=2, r=3 ; u₅',['u₅=2+5·3','u₅=2+15','u₅=17'],'Les termes augmentent bien de 3.'],
'6e_lois_proba':['P(X=k)=C(n,k)pᵏ(1−p)ⁿ⁻ᵏ','essais indépendants et p constant','X~B(4;0,5), P(X=2)',['C(4,2)=6','P=6·0,5⁴','P=0,375'],'La valeur est dans [0,1].'],
'6e_exp_log':['ln(eˣ)=x','argument du logarithme strictement positif','résoudre eˣ=7',['Appliquer ln','ln(eˣ)=ln 7','x=ln 7≈1,946'],'e¹·⁹⁴⁶≈7.'],
'6e_geo_analytique_espace':['ax+by+cz+d=0','(a,b,c) vecteur normal non nul','n=(1,2,−1), A(1,0,2)',['x+2y−z+d=0','1−2+d=0','d=1'],'A vérifie l’équation.'],
'trans_methode':['Données → modèle → calcul → conclusion','contrôler unités et domaine','une longueur vaut −4 cm',['Repérer l’incohérence','Reprendre modèle et signes','Corriger avant de conclure'],'Une longueur doit être positive.'],
'trans_pieges':['dénominateur≠0 ; radicande≥0','tester avant de calculer','domaine de √(5−2x)',['5−2x≥0','−2x≥−5','x≤2,5'],'x=3 est bien exclu.']};
Object.keys(CHAPITRES).forEach(function(y){CHAPITRES[y].forEach(function(ch){var c=data[ch.id];if(!c)return;ch.cours='<section class="maths-precision"><div class="maths-formula"><span>Relation centrale</span><strong>'+e(c[0])+'</strong><p><b>Conditions :</b> '+e(c[1])+'</p></div><div class="maths-solution"><span>Résolution complète</span><h4>'+e(c[2])+'</h4><ol>'+c[3].map(function(x){return'<li>'+e(x)+'</li>';}).join('')+'</ol><p class="maths-check"><b>Vérification :</b> '+e(c[4])+'</p></div></section>'+ch.cours;ch.mathsPrecision=true;ch.contentVersion=14;});});
})();
