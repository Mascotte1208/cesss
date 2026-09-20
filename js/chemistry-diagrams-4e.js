(function () {
    if (typeof CESS_LIBRARY_DATA === 'undefined' || !CESS_LIBRARY_DATA.chimie) return;
    var FIGURES = {
        'lib_chimie_4e_1': '<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Bilan stœchiométrique</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Reaction 2A plus B donnant 2C avec reactif limitant B et reactif A en exces">' +
            '<text x="190" y="35" font-size="15" font-weight="700">2</text><text x="206" y="35" font-size="15" font-weight="700">A</text><text x="222" y="35" font-size="15" font-weight="700">+</text><text x="238" y="35" font-size="15" font-weight="700">B</text><text x="256" y="35" font-size="15" font-weight="700">→</text><text x="274" y="35" font-size="15" font-weight="700">2</text><text x="290" y="35" font-size="15" font-weight="700">C</text>' +
            '<text x="137" y="78" font-size="11" font-weight="700">Réactifs</text>' +
            '<rect x="90" y="85" width="95" height="95" rx="14" fill-opacity="0.1"/>' +
            '<circle cx="115" cy="110" r="9" fill-opacity="0.25"/><circle cx="145" cy="106" r="9" fill-opacity="0.25"/><circle cx="115" cy="140" r="9" fill-opacity="0.25"/>' +
            '<rect x="132" y="148" width="18" height="18" fill-opacity="0.4"/>' +
            '<text x="137" y="196" font-size="10">3 mol A + 1 mol B</text>' +
            '<line x1="190" y1="128" x2="280" y2="128" stroke-width="1.4"/><path d="M274,122 L286,128 L274,134 Z" fill-opacity="0.5"/>' +
            '<text x="235" y="148" font-size="10">réaction</text>' +
            '<text x="332" y="78" font-size="11" font-weight="700">Produits</text>' +
            '<rect x="285" y="85" width="95" height="95" rx="14" fill-opacity="0.1"/>' +
            '<path d="M305,158 L297,173 L313,173 Z" fill-opacity="0.25"/><path d="M340,158 L332,173 L348,173 Z" fill-opacity="0.25"/>' +
            '<circle cx="332" cy="110" r="9" fill-opacity="0.25"/><text x="332" y="196" font-size="10">2 mol C + 1 mol A restante</text>' +
            '<line x1="76" y1="86" x2="188" y2="35" stroke-width="1"/><text x="72" y="90" font-size="9" font-weight="700" style="text-anchor:end">Équation</text><text x="72" y="101" font-size="8" style="text-anchor:end">Équilibrer</text>' +
            '<line x1="76" y1="206" x2="141" y2="157" stroke-width="1"/><text x="72" y="210" font-size="9" font-weight="700" style="text-anchor:end">Limitant</text><text x="72" y="221" font-size="8" style="text-anchor:end">Maximum</text>' +
            '<line x1="384" y1="56" x2="274" y2="35" stroke-width="1"/><text x="388" y="60" font-size="9" font-weight="700" style="text-anchor:start">Rapport</text><text x="388" y="71" font-size="8" style="text-anchor:start">Coefficients</text>' +
            '<line x1="384" y1="146" x2="145" y2="106" stroke-width="1"/><text x="388" y="150" font-size="9" font-weight="700" style="text-anchor:start">Données</text><text x="388" y="161" font-size="8" style="text-anchor:start">En moles</text>' +
            '<line x1="384" y1="236" x2="332" y2="173" stroke-width="1"/><text x="388" y="240" font-size="9" font-weight="700" style="text-anchor:start">Produit</text><text x="388" y="251" font-size="8" style="text-anchor:start">Théorique</text>' +
            '</svg><p>Compare les quantités disponibles de A et de B au rapport 2:1 de l\'équation pour repérer le réactif limitant et la quantité théorique de C obtenue. B est entièrement consommé ; 1 mol de A reste dans le mélange final.</p></figure>',

        'lib_chimie_4e_2': '<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Réaliser une dilution</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Dilution d\'une solution mere en solution fille avec fiole jaugee et trait de jauge">' +
            '<text x="110" y="80" font-size="10" font-weight="700">Solution mère</text>' +
            '<rect x="100" y="90" width="20" height="50" fill-opacity="0.15"/>' +
            '<ellipse cx="110" cy="175" rx="42" ry="38" fill-opacity="0.15"/>' +
            '<circle cx="90" cy="165" r="3" fill-opacity="0.5"/><circle cx="105" cy="155" r="3" fill-opacity="0.5"/><circle cx="120" cy="170" r="3" fill-opacity="0.5"/><circle cx="95" cy="185" r="3" fill-opacity="0.5"/><circle cx="115" cy="195" r="3" fill-opacity="0.5"/><circle cx="130" cy="160" r="3" fill-opacity="0.5"/><circle cx="100" cy="200" r="3" fill-opacity="0.5"/><circle cx="125" cy="185" r="3" fill-opacity="0.5"/>' +
            '<path d="M120,88 Q232,40 345,88" stroke-width="1.4"/><path d="M338,80 L350,88 L338,96 Z" fill-opacity="0.5"/>' +
            '<ellipse cx="232" cy="52" rx="6" ry="8" fill-opacity="0.35"/>' +
            '<text x="350" y="62" font-size="10" font-weight="700">Solution fille</text>' +
            '<rect x="345" y="70" width="10" height="45" fill-opacity="0.15"/>' +
            '<path d="M345,115 L332,150 C332,175 368,175 368,150 L355,115 Z" fill-opacity="0.1"/>' +
            '<line x1="340" y1="95" x2="360" y2="95" stroke-width="1.6"/>' +
            '<path d="M341,95 L332,150 C332,175 368,175 368,150 L359,95 Z" fill-opacity="0.22"/>' +
            '<circle cx="345" cy="140" r="3" fill-opacity="0.35"/><circle cx="358" cy="150" r="3" fill-opacity="0.35"/><circle cx="350" cy="160" r="3" fill-opacity="0.35"/><circle cx="362" cy="135" r="3" fill-opacity="0.35"/>' +
            '<text x="240" y="255" font-size="13" font-weight="700">C₁V₁ = C₂V₂</text>' +
            '<line x1="76" y1="86" x2="78" y2="175" stroke-width="1"/><text x="72" y="90" font-size="9" font-weight="700" style="text-anchor:end">Mère</text><text x="72" y="101" font-size="8" style="text-anchor:end">C₁</text>' +
            '<line x1="76" y1="206" x2="352" y2="150" stroke-width="1"/><text x="72" y="210" font-size="9" font-weight="700" style="text-anchor:end">Fille</text><text x="72" y="221" font-size="8" style="text-anchor:end">C₂</text>' +
            '<line x1="384" y1="56" x2="232" y2="52" stroke-width="1"/><text x="388" y="60" font-size="9" font-weight="700" style="text-anchor:start">Prélèvement</text><text x="388" y="71" font-size="8" style="text-anchor:start">V₁</text>' +
            '<line x1="384" y1="146" x2="360" y2="95" stroke-width="1"/><text x="388" y="150" font-size="9" font-weight="700" style="text-anchor:start">Fiole</text><text x="388" y="161" font-size="8" style="text-anchor:start">V₂</text>' +
            '<line x1="384" y1="236" x2="280" y2="252" stroke-width="1"/><text x="388" y="240" font-size="9" font-weight="700" style="text-anchor:start">C₁V₁=C₂V₂</text><text x="388" y="251" font-size="8" style="text-anchor:start">Calcul</text>' +
            '</svg><p>Suis le trajet du prélèvement V₁ depuis la solution mère jusqu\'au trait de jauge de la fiole fille, puis retrouve C₁V₁ = C₂V₂.</p></figure>',

        'lib_chimie_4e_3': '<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Transférer un proton</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Transfert d\'un proton H plus entre un acide et une base selon Bronsted">' +
            '<circle cx="120" cy="150" r="34" fill-opacity="0.22"/><text x="120" y="155" font-size="14" font-weight="700">HA</text>' +
            '<circle cx="158" cy="120" r="10" fill-opacity="0.45"/><text x="158" y="123" font-size="9" font-weight="700">H⁺</text>' +
            '<path d="M166,114 Q250,65 330,114" stroke-width="1.4"/><path d="M323,107 L336,114 L323,121 Z" fill-opacity="0.5"/>' +
            '<circle cx="345" cy="150" r="34" fill-opacity="0.22"/><text x="345" y="155" font-size="14" font-weight="700">B</text>' +
            '<text x="120" y="205" font-size="9">A⁻ (base conjuguée)</text><text x="345" y="205" font-size="9">BH⁺ (acide conjugué)</text>' +
            '<line x1="150" y1="215" x2="310" y2="215" stroke-width="1" stroke-dasharray="4 3"/>' +
            '<rect x="190" y="248" width="140" height="14" rx="3" fill-opacity="0.18"/><circle cx="250" cy="255" r="5" fill-opacity="0.5"/>' +
            '<text x="185" y="259" font-size="8" style="text-anchor:end">0</text><text x="335" y="259" font-size="8" style="text-anchor:start">14</text>' +
            '<line x1="76" y1="86" x2="158" y2="120" stroke-width="1"/><text x="72" y="90" font-size="9" font-weight="700" style="text-anchor:end">Acide</text><text x="72" y="101" font-size="8" style="text-anchor:end">Cède H⁺</text>' +
            '<line x1="76" y1="206" x2="150" y2="215" stroke-width="1"/><text x="72" y="210" font-size="9" font-weight="700" style="text-anchor:end">Couples</text><text x="72" y="221" font-size="8" style="text-anchor:end">Conjugués</text>' +
            '<line x1="384" y1="56" x2="345" y2="120" stroke-width="1"/><text x="388" y="60" font-size="9" font-weight="700" style="text-anchor:start">Base</text><text x="388" y="71" font-size="8" style="text-anchor:start">Capte H⁺</text>' +
            '<line x1="384" y1="146" x2="250" y2="65" stroke-width="1"/><text x="388" y="150" font-size="9" font-weight="700" style="text-anchor:start">Réaction</text><text x="388" y="161" font-size="8" style="text-anchor:start">Transfert</text>' +
            '<line x1="384" y1="236" x2="260" y2="251" stroke-width="1"/><text x="388" y="240" font-size="9" font-weight="700" style="text-anchor:start">pH</text><text x="388" y="251" font-size="8" style="text-anchor:start">Caractériser</text>' +
            '</svg><p>Suis le trajet du proton H⁺ depuis l\'acide HA jusqu\'à la base B, puis identifie les espèces conjuguées A⁻ et BH⁺ formées.</p></figure>',

        'lib_chimie_4e_4': '<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Transférer des électrons</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Transfert de deux electrons entre un reducteur et un oxydant">' +
            '<circle cx="120" cy="150" r="34" fill-opacity="0.22"/><text x="120" y="155" font-size="13" font-weight="700">Réd</text>' +
            '<circle cx="158" cy="122" r="8" fill-opacity="0.45"/><text x="158" y="125" font-size="8" font-weight="700">e⁻</text>' +
            '<circle cx="158" cy="178" r="8" fill-opacity="0.45"/><text x="158" y="181" font-size="8" font-weight="700">e⁻</text>' +
            '<path d="M166,117 Q250,80 330,117" stroke-width="1.4"/><path d="M323,110 L336,117 L323,124 Z" fill-opacity="0.5"/>' +
            '<path d="M166,183 Q250,220 330,183" stroke-width="1.4"/><path d="M323,176 L336,183 L323,190 Z" fill-opacity="0.5"/>' +
            '<circle cx="345" cy="150" r="34" fill-opacity="0.22"/><text x="345" y="155" font-size="13" font-weight="700">Ox</text>' +
            '<text x="120" y="205" font-size="9">− e⁻ (oxydation)</text><text x="345" y="205" font-size="9">+ e⁻ (réduction)</text>' +
            '<line x1="76" y1="86" x2="100" y2="140" stroke-width="1"/><text x="72" y="90" font-size="9" font-weight="700" style="text-anchor:end">Réducteur</text><text x="72" y="101" font-size="8" style="text-anchor:end">Cède e⁻</text>' +
            '<line x1="76" y1="206" x2="100" y2="201" stroke-width="1"/><text x="72" y="210" font-size="9" font-weight="700" style="text-anchor:end">Oxydation</text><text x="72" y="221" font-size="8" style="text-anchor:end">Perte</text>' +
            '<line x1="384" y1="56" x2="345" y2="120" stroke-width="1"/><text x="388" y="60" font-size="9" font-weight="700" style="text-anchor:start">Oxydant</text><text x="388" y="71" font-size="8" style="text-anchor:start">Capte e⁻</text>' +
            '<line x1="384" y1="146" x2="158" y2="122" stroke-width="1"/><text x="388" y="150" font-size="9" font-weight="700" style="text-anchor:start">Électrons</text><text x="388" y="161" font-size="8" style="text-anchor:start">Même nombre</text>' +
            '<line x1="384" y1="236" x2="345" y2="201" stroke-width="1"/><text x="388" y="240" font-size="9" font-weight="700" style="text-anchor:start">Réduction</text><text x="388" y="251" font-size="8" style="text-anchor:start">Gain</text>' +
            '</svg><p>Suis le trajet des deux électrons depuis le réducteur (oxydation, perte d\'électrons) jusqu\'à l\'oxydant (réduction, gain d\'électrons).</p></figure>',

        'lib_chimie_4e_5': '<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Décrire un gaz</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Modele particulaire d\'un gaz dans un recipient avec pression volume et temperature">' +
            '<rect x="150" y="70" width="180" height="140" rx="6" fill-opacity="0.08"/>' +
            '<circle cx="190" cy="110" r="7" fill-opacity="0.3"/><circle cx="250" cy="95" r="7" fill-opacity="0.3"/><circle cx="300" cy="130" r="7" fill-opacity="0.3"/><circle cx="200" cy="175" r="7" fill-opacity="0.3"/><circle cx="270" cy="190" r="7" fill-opacity="0.3"/><circle cx="230" cy="140" r="7" fill-opacity="0.3"/>' +
            '<line x1="300" y1="130" x2="322" y2="128" stroke-width="1.2"/><path d="M318,123 L328,128 L318,133 Z" fill-opacity="0.5"/>' +
            '<line x1="190" y1="110" x2="188" y2="80" stroke-width="1.2"/><path d="M182,84 L188,74 L194,84 Z" fill-opacity="0.5"/>' +
            '<line x1="330" y1="120" x2="338" y2="116" stroke-width="1"/><line x1="330" y1="128" x2="340" y2="128" stroke-width="1"/><line x1="330" y1="136" x2="338" y2="140" stroke-width="1"/>' +
            '<line x1="150" y1="225" x2="330" y2="225" stroke-width="1.2"/><line x1="150" y1="220" x2="150" y2="230" stroke-width="1"/><line x1="330" y1="220" x2="330" y2="230" stroke-width="1"/>' +
            '<rect x="352" y="85" width="10" height="65" rx="5" fill-opacity="0.15"/><rect x="354" y="110" width="6" height="40" rx="3" fill-opacity="0.5"/>' +
            '<circle cx="357" cy="160" r="13" fill-opacity="0.15"/><circle cx="357" cy="160" r="9" fill-opacity="0.5"/>' +
            '<text x="240" y="265" font-size="14" font-weight="700">p V = n R T</text>' +
            '<line x1="76" y1="86" x2="190" y2="108" stroke-width="1"/><text x="72" y="90" font-size="9" font-weight="700" style="text-anchor:end">Particules</text><text x="72" y="101" font-size="8" style="text-anchor:end">Chocs</text>' +
            '<line x1="76" y1="206" x2="332" y2="128" stroke-width="1"/><text x="72" y="210" font-size="9" font-weight="700" style="text-anchor:end">p</text><text x="72" y="221" font-size="8" style="text-anchor:end">Pression</text>' +
            '<line x1="384" y1="56" x2="240" y2="225" stroke-width="1"/><text x="388" y="60" font-size="9" font-weight="700" style="text-anchor:start">V</text><text x="388" y="71" font-size="8" style="text-anchor:start">Volume</text>' +
            '<line x1="384" y1="146" x2="357" y2="150" stroke-width="1"/><text x="388" y="150" font-size="9" font-weight="700" style="text-anchor:start">T</text><text x="388" y="161" font-size="8" style="text-anchor:start">Kelvins</text>' +
            '<line x1="384" y1="236" x2="280" y2="262" stroke-width="1"/><text x="388" y="240" font-size="9" font-weight="700" style="text-anchor:start">pV=nRT</text><text x="388" y="251" font-size="8" style="text-anchor:start">État</text>' +
            '</svg><p>Observe les chocs des particules contre les parois : ce sont eux qui produisent la pression p, dans le volume V et à la température T, reliés par pV = nRT.</p></figure>',

        'lib_chimie_4e_6': '<figure class="bio-visual-atlas"><figcaption><span>Planche scientifique</span><strong>Identifier une famille</strong></figcaption><svg viewBox="0 0 480 300" role="img" aria-label="Chaine carbonee avec groupe fonctionnel hydroxyle identifie">' +
            '<text x="210" y="60" font-size="13" font-weight="700">C₃H₈O</text>' +
            '<line x1="75" y1="112" x2="274" y2="112" stroke-width="1.2"/><line x1="75" y1="112" x2="75" y2="120" stroke-width="1"/><line x1="274" y1="112" x2="274" y2="120" stroke-width="1"/>' +
            '<circle cx="65" cy="132" r="7" fill-opacity="0.2"/><text x="65" y="135" font-size="7">H</text>' +
            '<circle cx="65" cy="168" r="7" fill-opacity="0.2"/><text x="65" y="171" font-size="7">H</text>' +
            '<circle cx="90" cy="118" r="7" fill-opacity="0.2"/><text x="90" y="121" font-size="7">H</text>' +
            '<circle cx="90" cy="150" r="14" fill-opacity="0.2"/><text x="90" y="154" font-size="11" font-weight="700">C</text>' +
            '<line x1="104" y1="150" x2="161" y2="150" stroke-width="1.4"/>' +
            '<circle cx="175" cy="150" r="14" fill-opacity="0.2"/><text x="175" y="154" font-size="11" font-weight="700">C</text>' +
            '<line x1="189" y1="150" x2="246" y2="150" stroke-width="1.4"/>' +
            '<circle cx="260" cy="150" r="14" fill-opacity="0.2"/><text x="260" y="154" font-size="11" font-weight="700">C</text>' +
            '<line x1="274" y1="150" x2="321" y2="150" stroke-width="1.4"/>' +
            '<circle cx="335" cy="150" r="14" fill-opacity="0.4"/><text x="335" y="154" font-size="11" font-weight="700">O</text>' +
            '<line x1="345" y1="143" x2="362" y2="135" stroke-width="1.4"/>' +
            '<circle cx="368" cy="132" r="8" fill-opacity="0.25"/><text x="368" y="135" font-size="8">H</text>' +
            '<text x="220" y="225" font-size="13" font-weight="700" font-style="italic">propan-1-ol</text>' +
            '<line x1="76" y1="86" x2="200" y2="60" stroke-width="1"/><text x="72" y="90" font-size="9" font-weight="700" style="text-anchor:end">Formule</text><text x="72" y="101" font-size="8" style="text-anchor:end">C et H</text>' +
            '<line x1="76" y1="206" x2="150" y2="112" stroke-width="1"/><text x="72" y="210" font-size="9" font-weight="700" style="text-anchor:end">Chaîne</text><text x="72" y="221" font-size="8" style="text-anchor:end">Principale</text>' +
            '<line x1="384" y1="56" x2="297" y2="150" stroke-width="1"/><text x="388" y="60" font-size="9" font-weight="700" style="text-anchor:start">Liaisons</text><text x="388" y="71" font-size="8" style="text-anchor:start">Type</text>' +
            '<line x1="384" y1="146" x2="335" y2="150" stroke-width="1"/><text x="388" y="150" font-size="9" font-weight="700" style="text-anchor:start">Fonction</text><text x="388" y="161" font-size="8" style="text-anchor:start">Groupe</text>' +
            '<line x1="384" y1="236" x2="260" y2="222" stroke-width="1"/><text x="388" y="240" font-size="9" font-weight="700" style="text-anchor:start">Nom</text><text x="388" y="251" font-size="8" style="text-anchor:start">Nomenclature</text>' +
            '</svg><p>Repère la chaîne principale de trois carbones et le groupe fonctionnel -OH qui définit la famille des alcools : propan-1-ol.</p></figure>'
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

