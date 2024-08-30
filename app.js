// const odgIpitanja = [
//   {
//     pitanje: "Koji je glavni grad Francuske",
//     odgovor: [
//       { text: "Berlin", isCorrect: false },
//       { text: "London", isCorrect: false },
//       { text: "Pariz", isCorrect: true },
//       { text: "Madrid", isCorrect: false },
//     ],
//   },
//   {
//     pitanje: "Koliko ima dana u nedelji",
//     odgovor: [
//       { text: 4, isCorrect: false },
//       { text: 7, isCorrect: true },
//       { text: 6, isCorrect: false },
//       { text: 5, isCorrect: false },
//     ],
//   },
//   {
//     pitanje: "Koliko ima meseci u godini",
//     odgovor: [
//       { text: 9, isCorrect: false },
//       { text: 7, isCorrect: false },
//       { text: 11, isCorrect: false },
//       { text: 12, isCorrect: true },
//     ],
//   },
//   {
//     pitanje: "Koji je glavni grad Nemacke",
//     odgovor: [
//       { text: "Berlin", isCorrect: true },
//       { text: "London", isCorrect: false },
//       { text: "San marino", isCorrect: false },
//       { text: "Beograd", isCorrect: false },
//     ],
//   },
//   {
//     pitanje: "Koliko ima godisnjih doba",
//     odgovor: [
//       { text: 1, isCorrect: false },
//       { text: 5, isCorrect: false },
//       { text: 4, isCorrect: true },
//       { text: 3, isCorrect: false },
//     ],
//   },
// ];

// const questionConteiner = document.getElementById("questionConteiner");
// const showAnswers = document.getElementById("showAnswers");

// let currQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currQuestionIndex = 0;
//   score = 0;
//   showQA(odgIpitanja[currQuestionIndex]);
// }

// function showQA(pitanje) {
//   questionConteiner.innerText = pitanje.question;
//   pitanje.odgovor.forEach((odgovor) => {
//     const button = document.createElement("button");
//     button.innerText = odgovor.text;

//     button.addEventListener("click", () => {
//       selectAnswer(odgovor);
//     });
//     showAnswers.appendChild(odgovor);
//   });
// }

// function selectAnswer(odgovor) {
//   if (odgovor.isCorrect) {
//     score++;
//   }
//   nextQustion();
// }

// function nextQustion() {
//   currQuestionIndex++;
//   if (currQuestionIndex < odgIpitanja.length) {
//     showQA(odgIpitanja[currQuestionIndex]);
//   } else {
//     showResults();
//   }
// }
// nextQustion();

// function showResults() {
//   questionConteiner.innerText = `Završili ste kviz! Vaš rezultat je: ${score}/${odgIpitanja.length}`;
//   showAnswers.innerHTML = "";
// }

// startQuiz();

const odgIpitanja = [
  {
    pitanje: "Koji je glavni grad Francuske",
    odgovor: [
      { text: "Berlin", isCorrect: false },
      { text: "London", isCorrect: false },
      { text: "Pariz", isCorrect: true },
      { text: "Madrid", isCorrect: false },
    ],
  },
  {
    pitanje: "Koliko ima dana u nedelji",
    odgovor: [
      { text: 4, isCorrect: false },
      { text: 7, isCorrect: true },
      { text: 6, isCorrect: false },
      { text: 5, isCorrect: false },
    ],
  },
  {
    pitanje: "Koliko ima meseci u godini",
    odgovor: [
      { text: 9, isCorrect: false },
      { text: 7, isCorrect: false },
      { text: 11, isCorrect: false },
      { text: 12, isCorrect: true },
    ],
  },
  {
    pitanje: "Koji je glavni grad Nemačke",
    odgovor: [
      { text: "Berlin", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "San marino", isCorrect: false },
      { text: "Beograd", isCorrect: false },
    ],
  },
  {
    pitanje: "Koliko ima godišnjih doba",
    odgovor: [
      { text: 1, isCorrect: false },
      { text: 5, isCorrect: false },
      { text: 4, isCorrect: true },
      { text: 3, isCorrect: false },
    ],
  },
];

const questionConteiner = document.getElementById("questionConteiner");
const showAnswers = document.getElementById("showAnswers");

let currQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currQuestionIndex = 0;
  score = 0;
  showQA(odgIpitanja[currQuestionIndex]);
}

function showQA(pitanje) {
  questionConteiner.innerText = pitanje.pitanje;

  showAnswers.innerHTML = "";

  pitanje.odgovor.forEach((odgovor) => {
    const button = document.createElement("button");
    button.innerText = odgovor.text;

    button.addEventListener("click", () => {
      selectAnswer(odgovor);
    });
    showAnswers.appendChild(button);
  });
}

function selectAnswer(odgovor) {
  if (odgovor.isCorrect) {
    score++;
  }
  nextQustion();
}

function nextQustion() {
  currQuestionIndex++;
  if (currQuestionIndex < odgIpitanja.length) {
    showQA(odgIpitanja[currQuestionIndex]);
  } else {
    showResults();
  }
}

function showResults() {
  questionConteiner.innerText = `Završili ste kviz! Vaš rezultat je: ${score}/${odgIpitanja.length}`;
  showAnswers.innerHTML = "";
}

startQuiz();
