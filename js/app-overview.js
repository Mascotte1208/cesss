/* Vue d'ensemble transversale : toutes les matières enregistrées. */
(function () {
    function subjects() {
        return Object.keys(CESS_SUBJECTS || {}).filter(function (key) {
            return allChaps(key).length;
        });
    }
    function subjectInfo(key) {
        return CESS_SUBJECTS[key] || { label: key, icon: '📘' };
    }
    function done(chapters) {
        return chapters.filter(function (chapter) { return getChapterProgress(chapter.id) >= 100; }).length;
    }
    window.renderHome = function () {
        var stats = document.getElementById('homeStats');
        var keys = subjects();
        var chapters = [];
        keys.forEach(function (key) { chapters = chapters.concat(allChaps(key)); });
        var mastered = done(chapters);
        if (stats) {
            stats.innerHTML = [
                ['📚', chapters.length, 'Chapitres disponibles'],
                ['✓', mastered + '/' + chapters.length, 'Chapitres maîtrisés'],
                ['🎯', cessState.results.length, 'Quiz réalisés'],
                ['🗂️', keys.length, 'Matières au catalogue']
            ].map(function (item) {
                return '<div class="home-stat"><span class="home-stat-icon">' + item[0] + '</span><span class="home-stat-value">' + item[1] + '</span><span class="home-stat-label">' + item[2] + '</span></div>';
            }).join('');
        }
        var subjectRoot = document.getElementById('homeSubjects');
        if (subjectRoot) {
            var featured = ['francais', 'maths', 'geo', 'bio'].filter(function (key) { return keys.indexOf(key) !== -1; });
            subjectRoot.innerHTML = featured.map(function (key) {
                var info = subjectInfo(key), list = allChaps(key), pct = pctSubject(key);
                return '<div class="subject-card games-card"><div class="subject-card-top"><div class="subject-icon">' + (info.icon || '📘') + '</div><span class="subject-arrow">→</span></div><h3>' + escapeHtml(info.label) + '</h3><p>' + done(list) + '/' + list.length + ' chapitres maîtrisés</p><div class="progress-line"><span style="width:' + pct + '%"></span></div><div class="subject-card-footer"><span>' + pct + '% terminé</span><button onclick="showView(\'' + key + '\')">Continuer →</button></div></div>';
            }).join('') + '<button class="subject-card games-card" type="button" onclick="showView(\'library\')"><div class="subject-card-top"><div class="subject-icon">🗂️</div><span class="subject-arrow">→</span></div><h3>Toutes les matières</h3><p>' + keys.length + ' matières classées par famille</p><div class="subject-card-footer"><span>Catalogue complet</span><span>→</span></div></button>';
        }
    };
    window.renderProgress = function () {
        var content = document.getElementById('progressContent');
        if (!content) return;
        var keys = subjects(), chapters = [];
        keys.forEach(function (key) { chapters = chapters.concat(allChaps(key)); });
        var mastered = done(chapters), total = chapters.length, overall = total ? Math.round(mastered / total * 100) : 0;
        var correct = 0, answered = 0;
        (cessState.results || []).forEach(function (result) { correct += Number(result.score || 0); answered += Number(result.total || 0); });
        var rate = answered ? Math.round(correct / answered * 100) : 0;
        var cards = keys.map(function (key) {
            var info = subjectInfo(key), list = allChaps(key), pct = pctSubject(key);
            return '<div class="panel"><h2>' + (info.icon || '📘') + ' ' + escapeHtml(info.label) + '</h2><div class="progress-row"><div class="progress-row-name">Progression</div><div class="progress-row-bar"><span style="width:' + pct + '%"></span></div><div class="progress-row-value">' + pct + '%</div></div><div style="margin-top:10px;font-size:11px;color:var(--text-soft)">' + done(list) + '/' + list.length + ' chapitres maîtrisés</div></div>';
        }).join('');
        var chapterList = chapters.map(function (chapter) {
            var pct = Math.max(0, getChapterProgress(chapter.id) || 0), color = pct >= 100 ? 'var(--green)' : (pct ? 'var(--primary)' : 'var(--text-light)');
            return '<div style="background:var(--paper-soft);border:1px solid var(--line);border-radius:10px;padding:12px 15px"><div style="display:flex;align-items:center;gap:8px;font-size:11px"><span>' + (chapter.icone || '📘') + '</span><span style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + escapeHtml(chapter.titre || '') + '</span><span style="font-weight:850;color:' + color + '">' + pct + '%</span></div><div class="progress-line" style="margin-top:6px"><span style="width:' + pct + '%;background:' + color + '"></span></div></div>';
        }).join('');
        content.innerHTML = '<div class="progress-overview"><div class="progress-big-card"><strong>' + overall + '%</strong><span>Progression globale</span></div><div class="progress-big-card"><strong>' + mastered + '/' + total + '</strong><span>Chapitres maîtrisés</span></div><div class="progress-big-card"><strong>' + rate + '%</strong><span>Réussite aux quiz</span></div></div><div class="section-heading"><span class="eyebrow">Toutes les matières</span><h2>Suivi par matière</h2></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px;margin-bottom:18px">' + cards + '</div><div class="panel"><h2>📊 Progression par chapitre</h2><div style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px">' + chapterList + '</div></div>';
    };
}());
