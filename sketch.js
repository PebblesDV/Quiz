let canvasWidth = 800;
let canvasHeight = 600;
let hasAlreadyAnswered = false; //lets me check whether a question has already been answered
let colorWhite = (255, 255, 255);
let colorBlack = (0, 0, 0);

//variables i use later to keep track of the score and the current question
let currentQuestion = 0;
let score = 0;

let quizData = [
  //all of the questions, options and the right answers in objects
  {
    question: "What 3 lifts are performed in powerlifting?",
    options: [
      "Squat, Bench press, Deadlift",
      "Snatch, Clean and jerk, Deadlift",
      "Bench press, Clean and jerk, Squat",
      "Bench press, Deadlift, Clean and jerk",
    ],
    rightAnswer: "Squat, Bench press, Deadlift",
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
    rightAnswer: "2",
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

  deadlift = loadImage("assets/deadlift.jpg"); //image i can use later on

  noLoop(); //makes sure things won't continue to loop without stop
}

function draw() {
  setBackground();

  fill(colorWhite);
  stroke(colorBlack);
  strokeWeight(2);
  textSize(20);
  textAlign(CENTER);
  text(score, 130, 500); //shows score on the screen
  text("Score:", 90, 500);
  text(currentQuestion + 1, 735, 40);
  text("Question:", 680, 40); //shows question number on the screen

  showQuestion(currentQuestion); //shows question on the screen
}

function showQuestion(questionId) {
  const question = quizData[questionId]; //function to show questions and answer buttons

  stroke(colorBlack);
  strokeWeight(2);
  textSize(30);
  fill(colorWhite); //white
  textWrap(WORD);
  textAlign(CENTER);
  text(question.question, 150, 80, 500); //showing question on the screen

  for (let i = 0; i < question.options.length; i++) {
    //loop to make buttons for all of the answers
    const option = question.options[i];

    button = createButton(option);
    button.position(220, 200 + i * 50);
    button.mousePressed(() => handleClickAnswer(option, question.rightAnswer));
  }
}

function handleClickAnswer(givenAnswer, rightAnswer) {
  //function to show "Next question" button after an answer has been given
  if (hasAlreadyAnswered === false) {
    checkAnswer(givenAnswer, rightAnswer);
    button = createButton("Next question"); //button to continue to the next question
    button.position(600, 480);
    button.mousePressed(nextQuestion);
  }
  hasAlreadyAnswered = true; //checking if a question has already been answered
}

function checkAnswer(givenAnswer, rightAnswer) {
  //function to check if the given answer is the right answer
  if (givenAnswer === rightAnswer) {
    correctAnswer = true;
    textSize(20);
    fill(0, 255, 0); //green
    text("Answer is correct!", 645, 455); //Feedback on whether the answer was correct or wrong
    score++; //adds +1 to the score after every right answer
  } else {
    correctAnswer = false;
    textSize(20);
    fill(255, 0, 0); //red
    text("Answer is wrong", 645, 455);
  }
}

function nextQuestion() {
  //function on what to do after each question
  if (currentQuestion + 1 < quizData.length) {
    hasAlreadyAnswered = false;
    clearCanvas();

    currentQuestion++; //adds +1 to question counter after every question
    redraw(); //redraws everything
  } else {
    showResults();
  }
}

function showResults() {
  //function on what to do after last question
  clearCanvas();
  setBackground();

  fill(colorWhite);
  stroke(colorBlack);
  strokeWeight(2);
  textSize(40);
  text("Your final score is:", 225, 190); //shows final score when quiz is done
  text(score, 225, 260);

  textSize(12);
  text("Now start training, I'll see u at worlds next year;)", 635, 100);
  text("<- Me deadlifting more than you", 675, 500);

  image(deadlift, 370, 355, 200, 245); //image
}

function clearCanvas() {
  const allButtons = selectAll("button");
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].remove(); //removes all buttons off the screen
  }
  clear(); //clears the canvas
}

function setBackground() {
  background(colorBlack); //black

  fill("purple"); //decoration for the background
  stroke("pink");
  strokeWeight(4);
  ellipse(10, 600, 500, 500);
  ellipse(800, 10, 700, 700);
}
