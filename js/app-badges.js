/* =========================================================
   CARNET CESS — SYSTÈME DE BADGES
   ========================================================= */

/* =========================================================
   SYSTÈME DE BADGES
   ========================================================= */

var BADGES = {
    first_quiz: { id: 'first_quiz', nom: 'Premier pas', description: 'Terminer un quiz', icone: '🎯' },
    five_quizzes: { id: 'five_quizzes', nom: 'Entraîné', description: 'Terminer 5 quiz', icone: '💪' },
    twenty_quizzes: { id: 'twenty_quizzes', nom: 'Accro', description: 'Terminer 20 quiz', icone: '🔥' },
    perfect_score: { id: 'perfect_score', nom: 'Parfait !', description: 'Obtenir 100% à un quiz', icone: '⭐' },
    maths_champion: { id: 'maths_champion', nom: 'Champion Maths', description: 'Réussir les exercices de tous les chapitres de maths', icone: '📐' },
    geo_champion: { id: 'geo_champion', nom: 'Champion Géo', description: 'Réussir les exercices de tous les chapitres de géographie', icone: '🌍' },
    bio_champion: { id: 'bio_champion', nom: 'Champion Bio', description: 'Réussir les exercices de tous les chapitres de biologie', icone: '🧬' },
    ten_streak: { id: 'ten_streak', nom: 'Série en cours', description: '10 jours de révision consécutifs', icone: '📅' },
    master_all: { id: 'master_all', nom: 'Parcours réussi', description: 'Réussir les exercices de tous les chapitres de mon parcours', icone: '👑' }
};

function getBadges() {
    var unlocked = [];
    var results = (cessState.results || []).filter(function(r){return r.contentVersion===2;});
    var mathsChaps = allChaps('maths');
    var geoChaps = allChaps('geo');
    var bioChaps = allChaps('bio');
    var allChapsTotal = mathsChaps.concat(geoChaps).concat(bioChaps);

    if (results.length >= 1) unlocked.push('first_quiz');
    if (results.length >= 5) unlocked.push('five_quizzes');
    if (results.length >= 20) unlocked.push('twenty_quizzes');

    for (var i = 0; i < results.length; i++) {
        if (results[i].percentage >= 100) {
            unlocked.push('perfect_score');
            break;
        }
    }

    var mathsDone = 0;
    for (var m = 0; m < mathsChaps.length; m++) {
        if (getChapterProgress(mathsChaps[m].id) >= 100) mathsDone++;
    }
    if (mathsDone === mathsChaps.length && mathsChaps.length > 0) unlocked.push('maths_champion');

    var geoDone = 0;
    for (var g = 0; g < geoChaps.length; g++) {
        if (getChapterProgress(geoChaps[g].id) >= 100) geoDone++;
    }
    if (geoDone === geoChaps.length && geoChaps.length > 0) unlocked.push('geo_champion');

    var bioDone = 0;
    for (var b = 0; b < bioChaps.length; b++) {
        if (getChapterProgress(bioChaps[b].id) >= 100) bioDone++;
    }
    if (bioDone === bioChaps.length && bioChaps.length > 0) unlocked.push('bio_champion');

    if (studyStreak() >= 10) unlocked.push('ten_streak');

    if (personalChapters().length > 0 && personalChapters().every(function(c){return getChapterProgress(c.id)>=100;})) unlocked.push('master_all');

    return unlocked.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}

function renderBadges() {
    var container = document.getElementById('badgesContainer');
    if (!container) return;

    var unlocked = getBadges();

    var html = `
        <div style="display:flex;flex-wrap:wrap;gap:12px;padding:10px 0;">
    `;

    for (var key in BADGES) {
        if (BADGES.hasOwnProperty(key)) {
            var badge = BADGES[key];
            var isUnlocked = unlocked.indexOf(key) !== -1;

            html += `
                <div style="
                    background:${isUnlocked ? 'var(--primary-soft)' : 'var(--paper-soft)'};
                    border:2px solid ${isUnlocked ? 'var(--primary)' : 'var(--line)'};
                    border-radius:12px;
                    padding:12px 16px;
                    text-align:center;
                    min-width:100px;
                    opacity:${isUnlocked ? 1 : 0.4};
                    transition:0.3s;
                ">
                    <div style="font-size:28px;">${badge.icone}</div>
                    <div style="font-size:11px;font-weight:850;margin-top:4px;color:${isUnlocked ? 'var(--text)' : 'var(--text-light)'};">
                        ${badge.nom}
                    </div>
                    <div style="font-size:8px;color:var(--text-light);">${badge.description}</div>
                    ${!isUnlocked ? '<div style="font-size:8px;color:var(--text-light);margin-top:4px;">🔒 Verrouillé</div>' : '<div style="font-size:8px;color:var(--green);margin-top:4px;">✅ Débloqué</div>'}
                </div>
            `;
        }
    }

    html += `
        </div>
    `;

    container.innerHTML = html;
}

