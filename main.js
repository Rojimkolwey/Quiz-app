const quizData = [
  {
    question: "How old is Rodgers?",
    a: "10",
    b: "25",
    c: "10",
    d: "10",
    correct: "b",
  },
  {
    question: "Who is the presiden ot Kenya?",
    a: "Uhuru",
    b: "Gachagua",
    c: "Ruto",
    d: "Omondi",
    correct: "c",
  },
  {
    question: "What is the most used socal media platform?",
    a: "Facebook",
    b: "Twitter",
    c: "instagram",
    d: "Whatsapp",
    correct: "b",
  },

  {
    question: "Most popular programming language",
    a: "Javascript",
    b: "Python",
    c: "Java",
    d: "Html",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions</h2>
      <button onclick="location.reload()"> 
      Reload
      </button>`;
    }
  }
});
