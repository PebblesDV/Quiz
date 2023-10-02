let canvasWidth = 800;
let canvasHeight = 600;

let currentQuestion = 0;
let score = 0;

let quizData = [
  {
    question: "What 3 lifts are performed in powerlifting?",
    options: ["Bench press, Deadlift, Squat", "Snatch, Clean and jerk, Deadlift", "Bench press, Clean and jerk, Squat", "Bench press, Deadlift, Clean and jerk"],
    correctAnswer: "Bench press, Deadlift, Squat",
  },
  {
    question: "How old are the people that compete in the Junior category?",
    options: ["15 and under", "16-18", "19-23", "24-39"],
    correctAnswer: "19-23",
  },
  {
    question: "",
    options: [],
    correctAnswer: "",
  },
  {
    question: "How many attemps do you get per category?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3",
  },
  {
    question: "",
    options: [],
    correctAnswer: "",
  },
];

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  noLoop();
}

function draw() {
  background(220);
}

//powerliten??
//5 tot 10 vragen
//open EN meerkeuze vragen

// De quiz heeft een gebruiksvriendelijk vormgegeven quizpagina
// De afmetingen van het canvas zijn 800 x 600 pixels
// De code bevat een functie voor het weergeven van de vragen
// De code bevat een functie voor het controleren van het gegeven antwoord
// De code bevat een click event op de antwoorden
// Code is ‘bug free’ (bevat geen fouten)
// Code bevat comments zodat de code leesbaar is