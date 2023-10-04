let canvasWidth = 800;
let canvasHeight = 600;

let currentQuestion = 0;
let score = 0;

let quizData = [
  {
    question: "What 3 lifts are performed in powerlifting?",
    options: [
      "Bench press, Deadlift, Squat",
      "Snatch, Clean and jerk, Deadlift",
      "Bench press, Clean and jerk, Squat",
      "Bench press, Deadlift, Clean and jerk",
    ],
    rightAnswer: "Bench press, Deadlift, Squat",
  },
  {
    question: "How old are the people that compete in the Junior category?",
    options: ["15 and under", "16-18", "19-23", "24-39"],
    rightAnswer: "19-23",
  },
  {
    question: "",
    options: [],
    rightAnswer: "",
  },
  {
    question: "How many attemps do you get per category?",
    options: ["2", "3", "4", "5"],
    rightAnswer: "3",
  },
  {
    question: "",
    options: [],
    rightAnswer: "",
  },
];

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  noLoop();
}

function showQuestion(questionId) {
  const question = quizData[questionId];

  noStroke();
  textSize(30);
  fill(255, 255, 255);
  text(question.question, 100, 100);

  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];

    button = createButton(option);
    button.position(200, 200 + i * 50);
    button.mousePressed(() => checkAnswer(option, question.rightAnswer));
  }
}

function checkAnswer(givenAnswer, rightAnswer) {
  if (givenAnswer === rightAnswer) {
    correctAnswer = true;
    textSize(20);
    fill(0, 255, 0);
    text("Answer is correct!", 100, 400);
  } else {
    correctAnswer = false;
    fill(255, 0, 0);
    text("Answer is wrong", 100, 400);
  }

  // Als je het antwoord goed hebt. Toon tekst dat het antwoord goed is. Als het fout is, toon dat het fout is
}

function draw() {
  background(0, 0, 0);

  showQuestion(0);
}

//powerliten??
//5 tot 10 vragen
//open EN meerkeuze vragen

// De quiz heeft een gebruiksvriendelijk vormgegeven quizpagina
// De afmetingen van het canvas zijn 800 x 600 pixels
// De code bevat een functie voor het weergeven van de vragen
// De code bevat een functie voor het controleren van het gegeven antwoord
// De code bevat een click evetn op de antwoorden
// Code is ‘bug free’ (bevat geen fouten)
// Code bevat comments zodat de code leesbaar is
