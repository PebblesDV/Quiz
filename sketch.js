let canvasWidth = 800;
let canvasHeight = 600;

//variables i use later to keep track of the score and the current question
let currentQuestion = 0;
let score = 0;

let quizData = [
  //all of the questions, options and the right answers in objects
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
    question:
      "How many attemps to lift as heavy as you can do you get per category?",
    options: ["2", "3", "4", "5"],
    rightAnswer: "3",
  },
  {
    question: "What is commonly used in competitions to improve grip?",
    options: ["Lifting straps", "Chalk", "Baby powder", "Vaseline"],
    rightAnswer: "Chalk",
  },
  {
    question: "What is the main focus in powerlifting?",
    options: ["Endurance", "Speed", "Strength", "Flexibility"],
    rightAnswer: "Strength",
  },
  {
    question:
      "What is the weight of a standard barbell used in men's competitions?",
    options: ["15kg", "20kg", "25kg", "30kg"],
    rightAnswer: "20kg",
  },
  {
    question:
      "What piece of equipment is mandatory for a powerlifter to wear during official competitions?",
    options: ["Belt", "Weightlifting gloves", "Knee sleeves", "Singlet"],
    rightAnswer: "Singlet",
  },
];

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  noLoop(); //makes sure things won't continue to loop without stop
}

function draw() {
  background(0, 0, 0); //black

  fill("purple"); //decoration for the background
  stroke("pink");
  strokeWeight(4);
  ellipse(10, 600, 500, 500);
  ellipse(800, 10, 700, 700);

  showQuestion(0);
}

function showQuestion(questionId) {
  const question = quizData[questionId];

  stroke("black");
  textSize(30);
  fill(255, 255, 255); //white
  text(question.question, 130, 100); //showing question on the screen

  for (let i = 0; i < question.options.length; i++) {
    //loop to make buttons for all of the answers
    const option = question.options[i];

    button = createButton(option);
    button.position(220, 200 + i * 50);
    button.mousePressed(() => handleClickAnswer(option, question.rightAnswer));
  }
}

function handleClickAnswer(givenAnswer, rightAnswer) {
  checkAnswer(givenAnswer, rightAnswer);
  button = createButton("Next question"); //button to continue to the next question
  button.position(600, 480);
  button.mousePressed();

  console.log("DEZE CODE DOE IK NADAT IK OP EEN ANTWOORD HEB GEKLIKT");
}

function checkAnswer(givenAnswer, rightAnswer) {
  //function to check if the given answer is the right answer
  if (givenAnswer === rightAnswer) {
    correctAnswer = true;
    textSize(20);
    fill(0, 255, 0); //green
    text("Answer is correct!", 565, 450); //Feedback on whether the answer was correct or wrong
  } else {
    correctAnswer = false;
    textSize(20);
    fill(255, 0, 0); //red
    text("Answer is wrong", 575, 450);
  }
}

function nextQuestion() {}

function loadQuestion() {}

// Na het klikken op een antwoord moet het niet nog een keer kunnen
// Na het klikken op een antwoord waarbij je feedback krijgt, moet de feedback van de andere antwoorden niet meer geschreven kunnen worden
// Met de "Next question" button moet je door kunnen gaan naar de volgende vraag
// De score, en op welke vraag je momenteel zit moet bijgehouden en weergegeven worden
