(function () {
    if (typeof CESS_LIBRARY_DATA === 'undefined' || !CESS_LIBRARY_DATA.chimie) return;
    var FIGURES = {
        'lib_chimie_6e_1': `<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Structure et propriété</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Molécule organique avec squelette carboné, groupe fonctionnel polaire OH marqué par des charges partielles et liaison hydrogène avec une molécule d'eau voisine">
<path d="M70,175 L100,145 L130,175 L160,145 L190,175 L215,155"/>
<line x1="222" y1="150" x2="245" y2="165"/>
<text x="214" y="150" font-size="13" font-weight="700" style="text-anchor:start">O</text>
<text x="250" y="175" font-size="13" font-weight="700" style="text-anchor:start">H</text>
<text x="192" y="122" font-size="11" style="text-anchor:start">δ-</text>
<text x="256" y="192" font-size="11" style="text-anchor:start">δ+</text>
<line x1="370" y1="90" x2="350" y2="70"/>
<line x1="370" y1="90" x2="392" y2="76"/>
<text x="374" y="95" font-size="12" font-weight="700" style="text-anchor:start">O</text>
<text x="338" y="65" font-size="12" font-weight="700" style="text-anchor:start">H</text>
<text x="396" y="73" font-size="12" font-weight="700" style="text-anchor:start">H</text>
<line x1="250" y1="170" x2="368" y2="92" stroke-dasharray="4 4"/>
<rect x="325" y="220" width="55" height="45"/>
<rect x="325" y="242" width="55" height="23" fill-opacity="0.35"/>
<circle cx="342" cy="253" r="3"/>
<circle cx="358" cy="248" r="3"/>
<circle cx="350" cy="260" r="3"/>
<text x="70" y="55" font-size="11" font-weight="700" style="text-anchor:end">Squelette</text>
<text x="70" y="67" font-size="9" style="text-anchor:end">forme</text>
<line x1="75" y1="60" x2="115" y2="160"/>
<text x="345" y="108" font-size="11" font-weight="700" style="text-anchor:start">Fonction</text>
<text x="345" y="120" font-size="9" style="text-anchor:start">réactivité</text>
<line x1="340" y1="113" x2="220" y2="150"/>
<text x="345" y="205" font-size="11" font-weight="700" style="text-anchor:start">Polarité</text>
<text x="345" y="217" font-size="9" style="text-anchor:start">charges</text>
<line x1="340" y1="210" x2="248" y2="168"/>
<text x="70" y="235" font-size="11" font-weight="700" style="text-anchor:end">Interactions</text>
<text x="70" y="247" font-size="9" style="text-anchor:end">molécules</text>
<line x1="75" y1="240" x2="310" y2="128"/>
<text x="345" y="268" font-size="11" font-weight="700" style="text-anchor:start">Propriété</text>
<text x="345" y="280" font-size="9" style="text-anchor:start">observable</text>
<line x1="340" y1="273" x2="365" y2="248"/>
</svg><p>Repère le squelette carboné, le groupe fonctionnel -OH portant les charges partielles, puis la liaison hydrogène qui explique la solubilité observée.</p></figure>`,
        'lib_chimie_6e_2': `<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Classer une réaction</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Réaction d'addition sur l'éthylène : la liaison double se rompt, deux liaisons C-H se forment avec le dihydrogène pour donner l'éthane">
<line x1="90" y1="145" x2="130" y2="145"/>
<line x1="90" y1="155" x2="130" y2="155"/>
<line x1="165" y1="100" x2="185" y2="100"/>
<text x="160" y="95" font-size="12" font-weight="700" style="text-anchor:end">H</text>
<text x="190" y="95" font-size="12" font-weight="700" style="text-anchor:start">H</text>
<path d="M178,108 Q150,125 112,142" stroke-dasharray="3 3"/>
<path d="M112,142 L120,138 L118,148 Z" fill-opacity="0.3"/>
<line x1="200" y1="150" x2="238" y2="150"/>
<path d="M238,150 L228,145 L228,155 Z" fill-opacity="0.3"/>
<line x1="280" y1="150" x2="320" y2="150"/>
<line x1="280" y1="150" x2="270" y2="120" stroke-width="5"/>
<line x1="280" y1="150" x2="270" y2="180"/>
<line x1="320" y1="150" x2="330" y2="120"/>
<line x1="320" y1="150" x2="330" y2="180" stroke-width="5"/>
<text x="264" y="115" font-size="11" font-weight="700" style="text-anchor:end">H</text>
<text x="264" y="188" font-size="11" font-weight="700" style="text-anchor:end">H</text>
<text x="336" y="115" font-size="11" font-weight="700" style="text-anchor:start">H</text>
<text x="336" y="188" font-size="11" font-weight="700" style="text-anchor:start">H</text>
<text x="70" y="55" font-size="11" font-weight="700" style="text-anchor:end">Réactifs</text>
<text x="70" y="67" font-size="9" style="text-anchor:end">fonctions</text>
<line x1="75" y1="60" x2="110" y2="148"/>
<text x="70" y="270" font-size="11" font-weight="700" style="text-anchor:end">Liaisons</text>
<text x="70" y="282" font-size="9" style="text-anchor:end">rompues</text>
<line x1="75" y1="265" x2="110" y2="153"/>
<text x="345" y="55" font-size="11" font-weight="700" style="text-anchor:start">Liaisons</text>
<text x="345" y="67" font-size="9" style="text-anchor:start">formées</text>
<line x1="340" y1="60" x2="273" y2="130"/>
<text x="345" y="150" font-size="11" font-weight="700" style="text-anchor:start">Type</text>
<text x="345" y="162" font-size="9" style="text-anchor:start">classer</text>
<line x1="340" y1="155" x2="222" y2="149"/>
<text x="345" y="250" font-size="11" font-weight="700" style="text-anchor:start">Produit</text>
<text x="345" y="262" font-size="9" style="text-anchor:start">vérifier</text>
<line x1="340" y1="255" x2="300" y2="150"/>
</svg><p>Suis la liaison π qui se rompt sur l'alcène, les deux liaisons C-H qui se forment avec H2, puis identifie le type de réaction et le produit obtenu.</p></figure>`,
        'lib_chimie_6e_3': `<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Du monomère au matériau</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Monomères s'assemblant par polymérisation en une chaîne polymère avec motif répétitif entouré et matériau final">
<line x1="70" y1="65" x2="110" y2="65"/>
<line x1="70" y1="75" x2="110" y2="75"/>
<text x="90" y="105" font-size="16" font-weight="700">+</text>
<line x1="70" y1="135" x2="110" y2="135"/>
<line x1="70" y1="145" x2="110" y2="145"/>
<text x="90" y="175" font-size="16" font-weight="700">+</text>
<line x1="70" y1="205" x2="110" y2="205"/>
<line x1="70" y1="215" x2="110" y2="215"/>
<line x1="120" y1="140" x2="165" y2="140"/>
<path d="M165,140 L155,135 L155,145 Z" fill-opacity="0.3"/>
<path d="M170,160 L190,130 L210,160 L230,130 L250,160 L270,130 L290,160 L310,130 L330,160 L350,130 L370,160"/>
<path d="M208,120 L200,120 L200,168 L208,168"/>
<path d="M252,120 L260,120 L260,168 L252,168"/>
<text x="268" y="178" font-size="11" style="text-anchor:start">n</text>
<rect x="350" y="215" width="70" height="45"/>
<path d="M358,225 L372,245 L358,255"/>
<path d="M375,222 L390,240 L378,258"/>
<path d="M395,228 L408,248 L400,255"/>
<text x="65" y="45" font-size="11" font-weight="700" style="text-anchor:end">Monomère</text>
<text x="65" y="57" font-size="9" style="text-anchor:end">départ</text>
<line x1="70" y1="50" x2="90" y2="140"/>
<text x="65" y="250" font-size="11" font-weight="700" style="text-anchor:end">Polymérisation</text>
<text x="65" y="262" font-size="9" style="text-anchor:end">réaction</text>
<line x1="70" y1="255" x2="142" y2="141"/>
<text x="345" y="55" font-size="11" font-weight="700" style="text-anchor:start">Motif</text>
<text x="345" y="67" font-size="9" style="text-anchor:start">répétition</text>
<line x1="340" y1="60" x2="232" y2="148"/>
<text x="345" y="140" font-size="11" font-weight="700" style="text-anchor:start">Chaîne</text>
<text x="345" y="152" font-size="9" style="text-anchor:start">organisation</text>
<line x1="340" y1="145" x2="330" y2="158"/>
<text x="345" y="270" font-size="11" font-weight="700" style="text-anchor:start">Matériau</text>
<text x="345" y="282" font-size="9" style="text-anchor:start">propriété</text>
<line x1="340" y1="275" x2="385" y2="237"/>
</svg><p>Suis les monomères qui s'associent par polymérisation, repère le motif qui se répète dans la chaîne, puis le matériau obtenu.</p></figure>`,
        'lib_chimie_6e_4': `<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Évaluer un risque</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Pictogramme de danger relié à un diagramme dose-exposition-risque et à une mesure de prévention">
<path d="M75,60 L110,95 L75,130 L40,95 Z" fill-opacity="0.3"/>
<line x1="75" y1="78" x2="75" y2="100" stroke-width="4"/>
<circle cx="75" cy="112" r="3" fill-opacity="0.4"/>
<circle cx="210" cy="120" r="50" fill-opacity="0.15"/>
<circle cx="170" cy="190" r="50" fill-opacity="0.15"/>
<circle cx="250" cy="190" r="50" fill-opacity="0.15"/>
<path d="M380,120 L400,128 L400,158 Q400,178 380,190 Q360,178 360,158 L360,128 Z" fill-opacity="0.25"/>
<text x="65" y="50" font-size="11" font-weight="700" style="text-anchor:end">Substance</text>
<text x="65" y="62" font-size="9" style="text-anchor:end">danger</text>
<line x1="70" y1="55" x2="78" y2="90"/>
<text x="65" y="250" font-size="11" font-weight="700" style="text-anchor:end">Dose</text>
<text x="65" y="262" font-size="9" style="text-anchor:end">quantité</text>
<line x1="70" y1="255" x2="150" y2="210"/>
<text x="345" y="50" font-size="11" font-weight="700" style="text-anchor:start">Exposition</text>
<text x="345" y="62" font-size="9" style="text-anchor:start">durée, voie</text>
<line x1="340" y1="55" x2="280" y2="155"/>
<text x="345" y="150" font-size="11" font-weight="700" style="text-anchor:start">Risque</text>
<text x="345" y="162" font-size="9" style="text-anchor:start">évaluer</text>
<line x1="340" y1="155" x2="225" y2="165"/>
<text x="345" y="250" font-size="11" font-weight="700" style="text-anchor:start">Prévention</text>
<text x="345" y="262" font-size="9" style="text-anchor:start">réduire</text>
<line x1="340" y1="255" x2="375" y2="180"/>
</svg><p>Relie le pictogramme de danger à la dose et à l'exposition qui déterminent le risque, puis à la mesure de prévention qui le réduit.</p></figure>`,
        'lib_chimie_6e_5': `<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Étalonnage</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Courbe d'étalonnage avec points expérimentaux, droite ajustée et interpolation d'une concentration inconnue à partir de son signal">
<line x1="70" y1="250" x2="420" y2="250"/>
<line x1="70" y1="250" x2="70" y2="40"/>
<text x="420" y="268" font-size="10" style="text-anchor:start">c (mol/L)</text>
<text x="65" y="38" font-size="10" style="text-anchor:end">Signal</text>
<path d="M90,235 L330,90"/>
<circle cx="110" cy="220" r="4" fill-opacity="0.4"/>
<circle cx="160" cy="190" r="4" fill-opacity="0.4"/>
<circle cx="210" cy="160" r="4" fill-opacity="0.4"/>
<circle cx="260" cy="130" r="4" fill-opacity="0.4"/>
<circle cx="310" cy="100" r="4" fill-opacity="0.4"/>
<line x1="70" y1="145" x2="239" y2="145" stroke-dasharray="4 4"/>
<line x1="239" y1="145" x2="239" y2="250" stroke-dasharray="4 4"/>
<rect x="235" y="141" width="8" height="8" fill-opacity="0.4"/>
<line x1="229" y1="245" x2="229" y2="255"/>
<line x1="249" y1="245" x2="249" y2="255"/>
<text x="65" y="55" font-size="11" font-weight="700" style="text-anchor:end">Étalons</text>
<text x="65" y="67" font-size="9" style="text-anchor:end">c connues</text>
<line x1="70" y1="60" x2="207" y2="163"/>
<text x="65" y="270" font-size="11" font-weight="700" style="text-anchor:end">Signal</text>
<text x="65" y="282" font-size="9" style="text-anchor:end">mesurer</text>
<line x1="70" y1="265" x2="75" y2="145"/>
<text x="345" y="55" font-size="11" font-weight="700" style="text-anchor:start">Courbe</text>
<text x="345" y="67" font-size="9" style="text-anchor:start">tracer</text>
<line x1="340" y1="60" x2="280" y2="118"/>
<text x="345" y="150" font-size="11" font-weight="700" style="text-anchor:start">Inconnue</text>
<text x="345" y="162" font-size="9" style="text-anchor:start">mesurer</text>
<line x1="340" y1="155" x2="241" y2="147"/>
<text x="345" y="270" font-size="11" font-weight="700" style="text-anchor:start">Interpolation</text>
<text x="345" y="282" font-size="9" style="text-anchor:start">c ± incertitude</text>
<line x1="340" y1="275" x2="239" y2="250"/>
</svg><p>Place les étalons sur la courbe, mesure le signal de l'inconnue, puis lis par interpolation la concentration correspondante.</p></figure>`,
        'lib_chimie_6e_6': `<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Résolution CESS</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Organigramme de résolution d'un problème scientifique : question, données, modèle, calcul, conclusion">
<circle cx="60" cy="150" r="28" fill-opacity="0.15"/>
<text x="60" y="158" font-size="22" font-weight="700">?</text>
<line x1="88" y1="150" x2="122" y2="150"/>
<path d="M122,150 L112,145 L112,155 Z" fill-opacity="0.3"/>
<rect x="125" y="130" width="50" height="40" fill-opacity="0.15"/>
<line x1="135" y1="140" x2="165" y2="140"/>
<line x1="135" y1="150" x2="165" y2="150"/>
<line x1="135" y1="160" x2="165" y2="160"/>
<line x1="178" y1="150" x2="202" y2="150"/>
<path d="M202,150 L192,145 L192,155 Z" fill-opacity="0.3"/>
<ellipse cx="240" cy="150" rx="35" ry="25" fill-opacity="0.15"/>
<text x="240" y="155" font-size="14" font-weight="700">f(x)</text>
<line x1="278" y1="150" x2="302" y2="150"/>
<path d="M302,150 L292,145 L292,155 Z" fill-opacity="0.3"/>
<rect x="305" y="130" width="50" height="40" fill-opacity="0.15"/>
<text x="330" y="155" font-size="12" font-weight="700">x = ?</text>
<line x1="358" y1="150" x2="388" y2="150"/>
<path d="M388,150 L378,145 L378,155 Z" fill-opacity="0.3"/>
<circle cx="420" cy="150" r="28" fill-opacity="0.15"/>
<path d="M405,150 L416,161 L436,138"/>
<text x="60" y="60" font-size="11" font-weight="700">Question</text>
<text x="60" y="72" font-size="9">inconnue</text>
<line x1="60" y1="76" x2="60" y2="124"/>
<text x="150" y="225" font-size="11" font-weight="700">Données</text>
<text x="150" y="237" font-size="9">convertir</text>
<line x1="150" y1="172" x2="150" y2="213"/>
<text x="240" y="60" font-size="11" font-weight="700">Modèle</text>
<text x="240" y="72" font-size="9">justifier</text>
<line x1="240" y1="76" x2="240" y2="126"/>
<text x="330" y="225" font-size="11" font-weight="700">Calcul</text>
<text x="330" y="237" font-size="9">unités</text>
<line x1="330" y1="172" x2="330" y2="213"/>
<text x="420" y="60" font-size="11" font-weight="700">Conclusion</text>
<text x="420" y="72" font-size="9">sens et limite</text>
<line x1="420" y1="76" x2="420" y2="124"/>
</svg><p>Suis les cinq étapes de résolution, de la question posée jusqu'à la conclusion exprimée avec unité et limites.</p></figure>`
    };
    ['3e','4e','5e','6e'].forEach(function (y) {
        (CESS_LIBRARY_DATA.chimie.data[y] || []).forEach(function (chapter) {
            var fig = FIGURES[chapter.id];
            if (!fig) return;
            var old = String(chapter.cours).match(/<figure class="bio-diagram chem-diagram">[\s\S]*?<\/figure>/);
            if (old) chapter.cours = String(chapter.cours).replace(old[0], fig);
        });
    });
})();
