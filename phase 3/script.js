const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Text Machine Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "None", correct: false }
    ]
  },

  {
    question: "What is CSS used for?",
    answers: [
      { text: "Structure", correct: false },
      { text: "Styling", correct: true },
      { text: "Database", correct: false },
      { text: "Logic", correct: false }
    ]
  },

  {
    question: "Which is JavaScript keyword?",
    answers: [
      { text: "let", correct: true },
      { text: "html", correct: false },
      { text: "style", correct: false },
      { text: "body", correct: false }
    ]
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBox = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  reset();

  let current = questions[currentIndex];

  questionEl.innerText = current.question;

  current.answers.forEach(ans => {
    let btn = document.createElement("button");
    btn.innerText = ans.text;
    btn.classList.add("btn");
    answerBox.appendChild(btn);

    btn.addEventListener("click", () => {
      if (ans.correct) {
        score++;
        btn.style.background = "green";
      } else {
        btn.style.background = "red";
      }

      disableButtons();
    });
  });
}

function reset() {
  answerBox.innerHTML = "";
}

function disableButtons() {
  let allBtns = document.querySelectorAll(".btn");
  allBtns.forEach(btn => {
    btn.disabled = true;
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    localStorage.setItem(
      "score",
      `You scored ${score} out of ${questions.length}`
    );

    window.location.href = "result.html";
  }
});

showQuestion();











