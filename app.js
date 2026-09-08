const STORAGE_KEY = "carnet_cess_v2";

const state = {
  view: "home",
  subject: "maths",
  year: "3e",
  memo: "formulas",
  search: "",
  quiz: null,
  exam: null,
  results: [],
  completed: {},
  dark: false
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

    Object.assign(state, saved);

    if (!Array.isArray(state.results)) state.results = [];
    if (!state.completed || typeof state.completed !== "object") {
      state.completed = {};
    }
  } catch (error) {
    console.warn("Impossible de charger la sauvegarde.", error);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      results: state.results,
      completed: state.completed,
      dark: state.dark
    })
  );
}

function qs(selector) {
  return document.querySelector(selector);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function setView(view) {
  state.view = view;

  document.querySelectorAll(".view").forEach(section => {
    section.classList.toggle("active", section.id === `view-${view}`);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  renderCurrentView();
}

function renderCurrentView() {
  if (state.view === "home") renderHome();
  if (state.view === "maths") renderSubject("maths");
  if (state.view === "geo") renderSubject("geo");
  if (state.view === "memo") renderMemo();
  if (state.view === "games") renderGames();
  if (state.view === "exams") renderExams();
  if (state.view === "progress") renderProgress();
}

function getMathData() {
  return Array.isArray(window.MATH_DATA)
    ? window.MATH_DATA
    : [];
}

function getGeoData() {
  return Array.isArray(window.GEO_DATA)
    ? window.GEO_DATA
    : [];
}

function getVocabData() {
  return Array.isArray(window.GEO_VOCAB)
    ? window.GEO_VOCAB
    : [];
}

function getSubjectData(subject) {
  return subject === "maths"
    ? getMathData()
    : getGeoData();
}

function getYears(subject) {
  const data = getSubjectData(subject);

  const years = [...new Set(
    data
      .map(item => item.year || item.annee || item.niveau)
      .filter(Boolean)
  )];

  return years.length
    ? years
    : ["3e", "4e", "5e", "6e"];
}

function getYearData(subject, year) {
  return getSubjectData(subject).filter(item => {
    const itemYear = item.year || item.annee || item.niveau;
    return !year || itemYear === year;
  });
}

function getTitle(item) {
  return (
    item.title ||
    item.titre ||
    item.name ||
    item.nom ||
    "Chapitre"
  );
}

function getDescription(item) {
  return (
    item.description ||
    item.desc ||
    item.resume ||
    item.summary ||
    ""
  );
}

function getContent(item) {
  return (
    item.content ||
    item.contenu ||
    item.course ||
    item.cours ||
    item.text ||
    ""
  );
}

function getQuestionsFromData(subject, year) {
  const data = getYearData(subject, year);

  const questions = [];

  data.forEach(chapter => {
    const chapterTitle = getTitle(chapter);

    const possibleArrays = [
      chapter.questions,
      chapter.quiz,
      chapter.exercices,
      chapter.exercises,
      chapter.qcm
    ];

    possibleArrays.forEach(list => {
      if (!Array.isArray(list)) return;

      list.forEach(question => {
        if (!question) return;

        questions.push({
          ...question,
          chapter: question.chapter || chapterTitle,
          subject
        });
      });
    });
  });

  return questions;
}

function questionText(question) {
  return (
    question.question ||
    question.text ||
    question.enonce ||
    question.title ||
    "Question"
  );
}

function questionOptions(question) {
  return (
    question.options ||
    question.choices ||
    question.choix ||
    question.answers ||
    []
  );
}

function questionAnswer(question) {
  if (question.answer !== undefined) return question.answer;
  if (question.correct !== undefined) return question.correct;
  if (question.reponse !== undefined) return question.reponse;
  if (question.solution !== undefined) return question.solution;

  return null;
}

function isCorrect(question, selected) {
  const answer = questionAnswer(question);

  if (Array.isArray(answer)) {
    return answer.some(a => normalize(a) === normalize(selected));
  }

  if (typeof answer === "number") {
    const options = questionOptions(question);
    return Number(selected) === answer ||
      normalize(options[answer]) === normalize(selected);
  }

  return normalize(answer) === normalize(selected);
}

function completedKey(subject, year, index) {
  return `${subject}-${year}-${index}`;
}

function markCompleted(subject, year, index) {
  state.completed[completedKey(subject, year, index)] = true;
  saveState();
}

function chapterCompleted(subject, year, index) {
  return Boolean(
    state.completed[completedKey(subject, year, index)]
  );
}

function calculateSubjectProgress(subject) {
  const years = getYears(subject);

  let total = 0;
  let done = 0;

  years.forEach(year => {
    const chapters = getYearData(subject, year);

    total += chapters.length;

    chapters.forEach((_, index) => {
      if (chapterCompleted(subject, year, index)) {
        done++;
      }
    });
  });

  return total
    ? Math.round((done / total) * 100)
    : 0;
}

function calculateGlobalProgress() {
  const maths = calculateSubjectProgress("maths");
  const geo = calculateSubjectProgress("geo");

  return Math.round((maths + geo) / 2);
}

function renderHome() {
  const mathsProgress = calculateSubjectProgress("maths");
  const geoProgress = calculateSubjectProgress("geo");
  const global = calculateGlobalProgress();

  const mathsEl = qs("#home-maths-progress");
  const geoEl = qs("#home-geo-progress");
  const globalEl = qs("#global-progress");
  const resultEl = qs("#home-results");

  if (mathsEl) {
    mathsEl.innerHTML = `
      <div class="progress-label">
        <span>Maths</span>
        <span>${mathsProgress}%</span>
      </div>
      <div class="bar">
        <i style="width:${mathsProgress}%"></i>
      </div>
    `;
  }

  if (geoEl) {
    geoEl.innerHTML = `
      <div class="progress-label">
        <span>Géographie</span>
        <span>${geoProgress}%</span>
      </div>
      <div class="bar">
        <i style="width:${geoProgress}%"></i>
      </div>
    `;
  }

  if (globalEl) {
    globalEl.textContent = `${global}%`;
  }

  if (resultEl) {
    resultEl.textContent = state.results.length;
  }

  const statsProgress = qs("#stat-progress");
  const statsChapters = qs("#stat-chapters");
  const statsResults = qs("#stat-results");

  if (statsProgress) statsProgress.textContent = `${global}%`;

  if (statsChapters) {
    const total =
      getMathData().length +
      getGeoData().length;

    statsChapters.textContent = total;
  }

  if (statsResults) {
    statsResults.textContent = state.results.length;
  }

  renderPriority();
}

function renderPriority() {
  const container = qs("#priority-list");

  if (!container) return;

  const items = [];

  ["maths", "geo"].forEach(subject => {
    getYears(subject).forEach(year => {
      getYearData(subject, year).forEach((chapter, index) => {
        if (!chapterCompleted(subject, year, index)) {
          items.push({
            subject,
            year,
            index,
            title: getTitle(chapter)
          });
        }
      });
    });
  });

  if (!items.length) {
    container.innerHTML = `
      <div class="empty">
        🎉 Tous les chapitres sont marqués comme terminés !
      </div>
    `;
    return;
  }

  container.innerHTML = items
    .slice(0, 5)
    .map(item => `
      <div class="priority">
        <div>
          <strong>${escapeHTML(item.title)}</strong>
          <small>
            ${item.subject === "maths" ? "Maths" : "Géographie"}
            · ${escapeHTML(item.year)}
          </small>
        </div>

        <button
          class="secondary"
          onclick="openChapter(
            '${item.subject}',
            '${escapeHTML(item.year)}',
            ${item.index}
          )">
          Ouvrir
        </button>
      </div>
    `)
    .join("");
}

function renderSubject(subject) {
  const years = getYears(subject);

  state.subject = subject;

  const title = qs("#subject-title");
  const subtitle = qs("#subject-subtitle");
  const tabs = qs("#subject-years");
  const chapters = qs("#subject-chapters");

  if (title) {
    title.textContent =
      subject === "maths"
        ? "Mathématiques"
        : "Géographie";
  }

  if (subtitle) {
    subtitle.textContent =
      subject === "maths"
        ? "Cours, formules et exercices pour préparer le CESS."
        : "Cours, notions, vocabulaire et exercices pour préparer le CESS.";
  }

  if (tabs) {
    tabs.innerHTML = years
      .map(year => `
        <button
          class="year-card ${year === state.year ? "active" : ""}"
          onclick="selectYear('${subject}','${escapeHTML(year)}')">
          <b>${escapeHTML(year)}</b>
          <small>
            ${getYearData(subject, year).length} chapitre(s)
          </small>
        </button>
      `)
      .join("");
  }

  if (chapters) {
    const data = getYearData(subject, state.year);

    if (!data.length) {
      chapters.innerHTML = `
        <div class="empty">
          Aucun chapitre trouvé pour cette année.
        </div>
      `;
      return;
    }

    chapters.innerHTML = data
      .map((chapter, index) => {
        const done = chapterCompleted(
          subject,
          state.year,
          index
        );

        return `
          <article class="chapter">
            <div>
              <span class="badge ${done ? "done" : ""}">
                ${done ? "✓ Terminé" : "À revoir"}
              </span>
            </div>

            <div class="chapter-main">
              <h3>${escapeHTML(getTitle(chapter))}</h3>
              <p>${escapeHTML(getDescription(chapter))}</p>
            </div>

            <button
              onclick="openChapter(
                '${subject}',
                '${escapeHTML(state.year)}',
                ${index}
              )">
              Voir le cours
            </button>
          </article>
        `;
      })
      .join("");
  }
}

function selectYear(subject, year) {
  state.subject = subject;
  state.year = year;

  renderSubject(subject);
}

function openChapter(subject, year, index) {
  const data = getYearData(subject, year);
  const chapter = data[index];

  if (!chapter) return;

  const container = qs("#chapter-detail");

  if (!container) return;

  container.innerHTML = `
    <div class="detail">
      <div class="section-head">
        <div>
          <span class="eyebrow">
            ${subject === "maths" ? "Mathématiques" : "Géographie"}
            · ${escapeHTML(year)}
          </span>

          <h2>${escapeHTML(getTitle(chapter))}</h2>
        </div>

        <button
          class="secondary"
          onclick="closeChapter()">
          Fermer
        </button>
      </div>

      ${
        getDescription(chapter)
          ? `<p>${escapeHTML(getDescription(chapter))}</p>`
          : ""
      }

      <div class="course">
        ${formatContent(getContent(chapter))}
      </div>

      <div class="detail-actions">
        <button
          class="success"
          onclick="completeChapter(
            '${subject}',
            '${escapeHTML(year)}',
            ${index}
          )">
          ✓ Marquer comme terminé
        </button>

        <button
          class="secondary"
          onclick="startChapterQuiz(
            '${subject}',
            '${escapeHTML(year)}',
            ${index}
          )">
          🎯 Quiz sur ce chapitre
        </button>
      </div>
    </div>
  `;

  container.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function formatContent(content) {
  if (!content) {
    return `
      <div class="empty">
        Aucun contenu détaillé n'est disponible.
      </div>
    `;
  }

  if (Array.isArray(content)) {
    return content
      .map(item => `<p>${escapeHTML(item)}</p>`)
      .join("");
  }

  return String(content)
    .split(/\n+/)
    .map(line => {
      if (!line.trim()) return "";

      return `<p>${escapeHTML(line)}</p>`;
    })
    .join("");
}

function closeChapter() {
  const container = qs("#chapter-detail");

  if (container) {
    container.innerHTML = "";
  }
}

function completeChapter(subject, year, index) {
  markCompleted(subject, year, index);

  renderCurrentView();
  renderHome();

  alert("Chapitre marqué comme terminé ✅");
}

function startChapterQuiz(subject, year, index) {
  const questions = getQuestionsFromData(subject, year)
    .filter(question => {
      const chapter = question.chapter || "";
      const data = getYearData(subject, year)[index];

      return normalize(chapter) ===
        normalize(getTitle(data));
    });

  if (!questions.length) {
    alert("Aucune question de quiz n'est disponible pour ce chapitre.");
    return;
  }

  startQuizWithQuestions(
    questions,
    `${getTitle(getYearData(subject, year)[index])}`
  );

  setView("games");
}

function renderMemo() {
  const searchInput = qs("#memo-search");
  const container = qs("#memo-results");

  if (!container) return;

  if (searchInput) {
    searchInput.value = state.search;
  }

  const search = normalize(state.search);

  if (state.memo === "vocab") {
    renderVocabulary(container, search);
  } else {
    renderFormulas(container, search);
  }
}

function renderFormulas(container, search) {
  const formulas = [];

  getMathData().forEach(chapter => {
    const title = getTitle(chapter);

    const possible =
      chapter.formulas ||
      chapter.formules ||
      chapter.formula ||
      [];

    if (Array.isArray(possible)) {
      possible.forEach(formula => {
        if (typeof formula === "string") {
          formulas.push({
            title,
            formula,
            description: ""
          });
        } else if (formula) {
          formulas.push({
            title:
              formula.title ||
              formula.titre ||
              title,
            formula:
              formula.formula ||
              formula.formule ||
              formula.expression ||
              "",
            description:
              formula.description ||
              formula.desc ||
              ""
          });
        }
      });
    }
  });

  if (!formulas.length) {
    container.innerHTML = `
      <div class="empty">
        Les formules ne sont pas structurées dans les données Maths actuelles.
      </div>
    `;
    return;
  }

  const filtered = formulas.filter(item => {
    const haystack = normalize(
      `${item.title} ${item.formula} ${item.description}`
    );

    return !search || haystack.includes(search);
  });

  container.innerHTML = filtered.length
    ? filtered.map(item => `
        <article class="memo-card">
          <div class="top">
            <h3>${escapeHTML(item.title)}</h3>
            <span class="badge">Maths</span>
          </div>

          <p>${escapeHTML(item.description)}</p>

          <div class="formula">
            ${escapeHTML(item.formula)}
          </div>
        </article>
      `).join("")
    : `<div class="empty">Aucune formule trouvée.</div>`;
}

function renderVocabulary(container, search) {
  const vocab = getVocabData();

  const filtered = vocab.filter(item => {
    const haystack = normalize(
      `${item.term || item.terme || ""}
       ${item.definition || item.definition || ""}
       ${item.year || item.annee || ""}`
    );

    return !search || haystack.includes(search);
  });

  if (!filtered.length) {
    container.innerHTML = `
      <div class="empty">
        Aucun mot de vocabulaire trouvé.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map(item => `
      <article class="memo-card">
        <div class="top">
          <h3>
            ${escapeHTML(item.term || item.terme || "Terme")}
          </h3>

          <span class="badge">
            ${escapeHTML(item.year || item.annee || "CESS")}
          </span>
        </div>

        <p>
          ${escapeHTML(
            item.definition ||
            item.def ||
            "Définition non disponible."
          )}
        </p>
      </article>
    `)
    .join("");
}

function setMemo(type) {
  state.memo = type;

  document
    .querySelectorAll(".memo-tabs button")
    .forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.memo === type
      );
    });

  renderMemo();
}

function searchMemo(value) {
  state.search = value;
  renderMemo();
}

function renderGames() {
  const container = qs("#game-area");

  if (!container) return;

  if (!state.quiz) {
    container.innerHTML = `
      <div class="game-grid">

        <button class="game-card"
          onclick="startQuiz('maths')">
          <span>🧮</span>
          <b>Quiz Maths</b>
          <small>Teste tes connaissances.</small>
        </button>

        <button class="game-card"
          onclick="startQuiz('geo')">
          <span>🌍</span>
          <b>Quiz Géographie</b>
          <small>Révise les notions essentielles.</small>
        </button>

        <button class="game-card"
          onclick="startQuiz('mixed')">
          <span>🎯</span>
          <b>Quiz mixte</b>
          <small>Maths + géographie.</small>
        </button>

        <button class="game-card"
          onclick="startQuiz('truefalse')">
          <span>✅</span>
          <b>Vrai ou faux</b>
          <small>Réponds rapidement.</small>
        </button>

        <button class="game-card"
          onclick="startCapitalGame()">
          <span>🏛️</span>
          <b>Capitales</b>
          <small>Retrouve les capitales.</small>
        </button>

      </div>
    `;

    return;
  }

  renderQuiz(container);
}

function startQuiz(type) {
  let questions = [];

  if (type === "maths") {
    questions = getQuestionsFromData(
      "maths",
      state.year
    );
  } else if (type === "geo") {
    questions = getQuestionsFromData(
      "geo",
      state.year
    );
  } else if (type === "mixed") {
    questions = [
      ...getQuestionsFromData("maths", state.year),
      ...getQuestionsFromData("geo", state.year)
    ];
  } else if (type === "truefalse") {
    questions = [
      ...getQuestionsFromData("maths", state.year),
      ...getQuestionsFromData("geo", state.year)
    ].filter(q => questionAnswer(q) !== null);
  }

  if (!questions.length) {
    alert("Aucune question disponible pour ce mode.");
    return;
  }

  questions = shuffle(questions).slice(
    0,
    Math.min(10, questions.length)
  );

  if (type === "truefalse") {
    questions = questions.map(question => {
      const correct = questionAnswer(question);

      const statement = questionText(question);

      const makeFalse = Math.random() > 0.5;

      return {
        ...question,
        originalQuestion: statement,
        trueFalseMode: true,
        displayedAnswer: makeFalse
          ? !toBoolean(correct)
          : toBoolean(correct),
        originalCorrect: toBoolean(correct)
      };
    });
  }

  startQuizWithQuestions(
    questions,
    type === "truefalse"
      ? "Vrai ou faux"
      : "Quiz"
  );
}

function startQuizWithQuestions(questions, title) {
  state.quiz = {
    title,
    questions,
    index: 0,
    score: 0,
    answered: false
  };

  renderGames();
}

function renderQuiz(container) {
  const quiz = state.quiz;
  const question = quiz.questions[quiz.index];

  if (!question) {
    finishQuiz();
    return;
  }

  let text = questionText(question);
  let options = questionOptions(question);

  if (question.trueFalseMode) {
    const original =
      question.originalCorrect;

    const displayed =
      question.displayedAnswer;

    text =
      `${question.originalQuestion}<br>
       <small>
       Cette affirmation est-elle vraie ou fausse ?
       </small>`;

    options = ["Vrai", "Faux"];
  }

  container.innerHTML = `
    <div class="panel quiz-panel">

      <div class="quiz-meta">
        <span>${escapeHTML(quiz.title)}</span>
        <span>
          ${quiz.index + 1}/${quiz.questions.length}
        </span>
      </div>

      <div class="question">
        ${text}
      </div>

      <div class="options">
        ${options.map((option, index) => `
          <button
            onclick="answerQuiz(${index})">
            ${escapeHTML(
              typeof option === "string"
                ? option
                : option.text ||
                  option.label ||
                  option.answer ||
                  ""
            )}
          </button>
        `).join("")}
      </div>

    </div>
  `;
}

function answerQuiz(optionIndex) {
  if (!state.quiz || state.quiz.answered) return;

  const quiz = state.quiz;
  const question = quiz.questions[quiz.index];

  let selected;

  if (question.trueFalseMode) {
    selected = optionIndex === 0;
  } else {
    const options = questionOptions(question);
    selected = options[optionIndex];

    if (
      selected &&
      typeof selected === "object"
    ) {
      selected =
        selected.value ||
        selected.text ||
        selected.label ||
        selected.answer;
    }
  }

  let correct;

  if (question.trueFalseMode) {
    correct =
      selected === question.displayedAnswer;
  } else {
    correct = isCorrect(
      question,
      selected
    );
  }

  if (correct) {
    quiz.score++;
  }

  quiz.answered = true;

  const container = qs("#game-area");

  if (!container) return;

  container.innerHTML = `
    <div class="panel result">

      <b>${correct ? "✓" : "✗"}</b>

      <h2>
        ${correct ? "Bonne réponse !" : "Pas tout à fait"}
      </h2>

      <p>
        ${
          correct
            ? "Continue comme ça."
            : "Regarde la correction puis continue."
        }
      </p>

      ${
        question.explanation ||
        question.explication ||
        question.solution
          ? `
            <p>
              <strong>Correction :</strong><br>
              ${escapeHTML(
                question.explanation ||
                question.explication ||
                question.solution
              )}
            </p>
          `
          : ""
      }

      <button
        class="primary"
        onclick="nextQuizQuestion()">
        ${
          quiz.index + 1 >= quiz.questions.length
            ? "Voir le résultat"
            : "Question suivante"
        }
      </button>

    </div>
  `;
}

function nextQuizQuestion() {
  if (!state.quiz) return;

  state.quiz.index++;
  state.quiz.answered = false;

  if (
    state.quiz.index >=
    state.quiz.questions.length
  ) {
    finishQuiz();
  } else {
    renderGames();
  }
}

function finishQuiz() {
  if (!state.quiz) return;

  const quiz = state.quiz;

  const result = {
    date: new Date().toISOString(),
    title: quiz.title,
    score: quiz.score,
    total: quiz.questions.length
  };

  state.results.push(result);
  saveState();

  const container = qs("#game-area");

  if (!container) return;

  const percent = Math.round(
    (quiz.score / quiz.questions.length) * 100
  );

  container.innerHTML = `
    <div class="panel result">

      <b>${percent}%</b>

      <h2>Quiz terminé 🎉</h2>

      <p>
        ${quiz.score} bonne(s) réponse(s)
        sur ${quiz.questions.length}.
      </p>

      <button
        class="primary"
        onclick="resetQuiz()">
        Recommencer
      </button>

    </div>
  `;

  state.quiz = null;
}

function resetQuiz() {
  state.quiz = null;
  renderGames();
}

function shuffle(array) {
  return [...array].sort(
    () => Math.random() - 0.5
  );
}

function toBoolean(value) {
  if (typeof value === "boolean") {
    return value;
  }

  const valueNormalized = normalize(value);

  return [
    "true",
    "vrai",
    "yes",
    "oui",
    "1"
  ].includes(valueNormalized);
}

function startCapitalGame() {
  const container = qs("#game-area");

  if (!container) return;

  const vocab = getVocabData().filter(item => {
    return (
      item.capital ||
      item.capitale
    );
  });

  if (!vocab.length) {
    container.innerHTML = `
      <div class="panel">
        <h2>🏛️ Capitales</h2>
        <p>
          Les données de capitales ne sont pas disponibles
          dans le fichier actuel.
        </p>

        <button
          class="secondary"
          onclick="renderGames()">
          Retour
        </button>
      </div>
    `;

    return;
  }

  const item =
    vocab[Math.floor(Math.random() * vocab.length)];

  const capital =
    item.capital ||
    item.capitale;

  const country =
    item.country ||
    item.pays ||
    item.term ||
    item.terme;

  const wrong = shuffle(
    vocab
      .filter(v => v !== item)
      .map(v =>
        v.capital ||
        v.capitale
      )
      .filter(Boolean)
  ).slice(0, 3);

  const options = shuffle([
    capital,
    ...wrong
  ]);

  container.innerHTML = `
    <div class="panel quiz-panel">

      <div class="quiz-meta">
        <span>🏛️ Capitales</span>
      </div>

      <div class="question">
        Quelle est la capitale de
        <strong>${escapeHTML(country)}</strong> ?
      </div>

      <div class="options">
        ${options.map(option => `
          <button
            onclick="
              checkCapital(
                '${escapeHTML(option)}',
                '${escapeHTML(capital)}'
              )">
            ${escapeHTML(option)}
          </button>
        `).join("")}
      </div>

    </div>
  `;
}

function checkCapital(selected, correct) {
  const container = qs("#game-area");

  if (!container) return;

  const good =
    normalize(selected) ===
    normalize(correct);

  container.innerHTML = `
    <div class="panel result">

      <b>${good ? "✓" : "✗"}</b>

      <h2>
        ${good ? "Bonne réponse !" : "Raté !"}
      </h2>

      <p>
        La bonne réponse était :
        <strong>${escapeHTML(correct)}</strong>
      </p>

      <button
        class="primary"
        onclick="startCapitalGame()">
        Autre capitale
      </button>

    </div>
  `;
}

function renderExams() {
  const container = qs("#exam-area");

  if (!container) return;

  if (state.exam) {
    renderExamQuestion(container);
    return;
  }

  container.innerHTML = `
    <div class="exam-grid">

      <button
        class="exam-card"
        onclick="startExam('maths')">
        <span>🧮</span>
        <b>Examen blanc Maths</b>
        <small>Entraînement à partir des exercices disponibles.</small>
      </button>

      <button
        class="exam-card"
        onclick="startExam('geo')">
        <span>🌍</span>
        <b>Examen blanc Géographie</b>
        <small>Révision des exercices disponibles.</small>
      </button>

      <button
        class="exam-card"
        onclick="startExam('mixed')">
        <span>📚</span>
        <b>Examen blanc CESS</b>
        <small>Maths + Géographie.</small>
      </button>

    </div>
  `;
}

function startExam(subject) {
  let questions;

  if (subject === "mixed") {
    questions = [
      ...getQuestionsFromData("maths", state.year),
      ...getQuestionsFromData("geo", state.year)
    ];
  } else {
    questions = getQuestionsFromData(
      subject,
      state.year
    );
  }

  if (!questions.length) {
    alert(
      "Aucun exercice/question disponible pour cet examen."
    );
    return;
  }

  state.exam = {
    title:
      subject === "mixed"
        ? "Examen blanc CESS"
        : `Examen blanc ${
            subject === "maths"
              ? "Maths"
              : "Géographie"
          }`,
    questions: shuffle(questions).slice(0, 15),
    index: 0,
    score: 0
  };

  renderExams();
}

function renderExamQuestion(container) {
  const exam = state.exam;
  const question = exam.questions[exam.index];

  if (!question) {
    finishExam();
    return;
  }

  const options = questionOptions(question);

  container.innerHTML = `
    <div class="panel quiz-panel">

      <div class="quiz-meta">
        <span>${escapeHTML(exam.title)}</span>
        <span>
          ${exam.index + 1}/${exam.questions.length}
        </span>
      </div>

      <div class="question">
        ${escapeHTML(questionText(question))}
      </div>

      ${
        options.length
          ? `
            <div class="options">
              ${options.map((option, index) => `
                <button
                  onclick="answerExam(${index})">
                  ${escapeHTML(
                    typeof option === "string"
                      ? option
                      : option.text ||
                        option.label ||
                        option.answer ||
                        ""
                  )}
                </button>
              `).join("")}
            </div>
          `
          : `
            <p>
              Cet exercice ne possède pas de choix de réponse
              interactifs.
            </p>

            <button
              class="primary"
              onclick="skipExamQuestion()">
              Continuer
            </button>
          `
      }

    </div>
  `;
}

function answerExam(optionIndex) {
  if (!state.exam) return;

  const exam = state.exam;
  const question = exam.questions[exam.index];
  const options = questionOptions(question);

  let selected = options[optionIndex];

  if (
    selected &&
    typeof selected === "object"
  ) {
    selected =
      selected.value ||
      selected.text ||
      selected.label ||
      selected.answer;
  }

  if (isCorrect(question, selected)) {
    exam.score++;
  }

  exam.index++;

  renderExams();
}

function skipExamQuestion() {
  if (!state.exam) return;

  state.exam.index++;

  renderExams();
}

function finishExam() {
  if (!state.exam) return;

  const exam = state.exam;

  const total = exam.questions.length;

  const percent = Math.round(
    (exam.score / total) * 100
  );

  state.results.push({
    date: new Date().toISOString(),
    title: exam.title,
    score: exam.score,
    total
  });

  saveState();

  const container = qs("#exam-area");

  if (!container) return;

  container.innerHTML = `
    <div class="panel result">

      <b>${percent}%</b>

      <h2>Examen terminé 🎓</h2>

      <p>
        ${exam.score} bonne(s) réponse(s)
        sur ${total}.
      </p>

      <button
        class="primary"
        onclick="resetExam()">
        Retour aux examens
      </button>

    </div>
  `;

  state.exam = null;
}

function resetExam() {
  state.exam = null;
  renderExams();
}

function renderProgress() {
  const container = qs("#progress-area");

  if (!container) return;

  const maths = calculateSubjectProgress("maths");
  const geo = calculateSubjectProgress("geo");
  const global = calculateGlobalProgress();

  container.innerHTML = `
    <div class="stats">

      <div class="stat">
        <b>${global}%</b>
        <span>Progression globale</span>
      </div>

      <div class="stat">
        <b>${maths}%</b>
        <span>Maths</span>
      </div>

      <div class="stat">
        <b>${geo}%</b>
        <span>Géographie</span>
      </div>

      <div class="stat">
        <b>${state.results.length}</b>
        <span>Résultats</span>
      </div>

    </div>

    <div class="grid2">

      <div class="panel">
        <h2>Mathématiques</h2>
        <div class="bar">
          <i style="width:${maths}%"></i>
        </div>
        <p>${maths}% des chapitres terminés.</p>
      </div>

      <div class="panel">
        <h2>Géographie</h2>
        <div class="bar">
          <i style="width:${geo}%"></i>
        </div>
        <p>${geo}% des chapitres terminés.</p>
      </div>

    </div>

    <div class="panel" style="margin-top:20px">
      <h2>Derniers résultats</h2>

      ${
        state.results.length
          ? state.results
              .slice(-10)
              .reverse()
              .map(result => `
                <div class="priority">
                  <div>
                    <strong>
                      ${escapeHTML(result.title)}
                    </strong>
                    <small>
                      ${new Date(result.date).toLocaleDateString()}
                    </small>
                  </div>

                  <span class="badge">
                    ${result.score}/${result.total}
                  </span>
                </div>
              `)
              .join("")
          : `
            <div class="empty">
              Aucun résultat pour le moment.
            </div>
          `
      }

    </div>
  `;
}

function toggleDarkMode() {
  state.dark = !state.dark;

  document.body.classList.toggle(
    "dark",
    state.dark
  );

  saveState();
}

function initNavigation() {
  document.querySelectorAll(
    "[data-view]"
  ).forEach(button => {
    button.addEventListener(
      "click",
      () => setView(
        button.dataset.view
      )
    );
  });
}

function init() {
  loadState();

  document.body.classList.toggle(
    "dark",
    state.dark
  );

  initNavigation();

  const themeButton = qs("#theme-toggle");

  if (themeButton) {
    themeButton.addEventListener(
      "click",
      toggleDarkMode
    );
  }

  renderCurrentView();
}

document.addEventListener(
  "DOMContentLoaded",
  init
);
