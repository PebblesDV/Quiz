let canvasWidth = 800;
let canvasHeight = 600;
let questionAnswered = "";

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
    question:
      "In order to be considered a good lift in competition, how many judges must give a white light?",
    options: ["1", "2", "3", "4"],
    rightAnswer: "3",
  },
  {
    question: "How many attemps do you get per category?",
    options: ["2", "3", "4", "5"],
    rightAnswer: "3",
  },
  {
    question: "What is commonly used in competitions to improve grip?",
    options: ["Lifting straps", "Chalk", "Baby powder", "Vaseline"],
    rightAnswer: "Chalk",
  },
];

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  noLoop();
}

function draw() {
  background(0, 0, 0);

  fill("purple");
  stroke("pink");
  strokeWeight(4);
  ellipse(10, 600, 500, 500);
  ellipse(800, 10, 700, 700);

  button = createButton("Next question");
  button.position(600, 480);
  button.mousePressed();

  showQuestion(0);
}

function showQuestion(questionId) {
  const question = quizData[questionId];

  stroke("black");
  textSize(30);
  fill(255, 255, 255);
  text(question.question, 130, 100);

  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];

    button = createButton(option);
    button.position(220, 200 + i * 50);
    button.mousePressed(() => checkAnswer(option, question.rightAnswer));
  }
}

function checkAnswer(givenAnswer, rightAnswer) {
  if (givenAnswer === rightAnswer) {
    correctAnswer = true;
    textSize(20);
    fill(0, 255, 0);
    text("Answer is correct!", 565, 450);
  } else {
    correctAnswer = false;
    textSize(20);
    fill(255, 0, 0);
    text("Answer is wrong", 575, 450);
  }
}

function nextQuestion() {}

function loadQuestion() {}

//even test hoor hij doet gek

//powerliten??
//5 tot 10 vragen
//open EN meerkeuze vragen

// De quiz heeft een gebruiksvriendelijk vormgegeven quizpagina
// De code bevat een functie voor het weergeven van de vragen
// De code bevat een functie voor het controleren van het gegeven antwoord
// De code bevat een click event op de antwoorden
// Code is ‘bug free’ (bevat geen fouten)
// Code bevat comments zodat de code leesbaar is
