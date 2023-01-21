const startButton = document.getElementById('start');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const timerEl = document.getElementById('timer');
const endQuizElement = document.getElementById('end-card');
const finalScoreSpan = document.getElementById('final-score-span');
const submitInitialsBtn = document.getElementById('submit-initials-btn');
var introCardEl = document.getElementById('intro-card');
console.log(introCardEl);

var shuffledQuestionsArray, currentQuestionIndex
var timeEl = document.querySelector("timer");
var secondsLeft = 20;

var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;


function startQuiz() {
  // start our timer
  setTime();
  console.log('started')
  introCardEl.classList.add('hide')
  startButton.classList.add('hide')
  // questionElement.classList.remove('hide')
  shuffledQuestionsArray = questionsArray.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  // setNextQuestion()
  showQuestion(shuffledQuestionsArray[currentQuestionIndex]);
}

// Sets interval 
function setTime() {

  var timerInterval = setInterval(function () {
    // subtract 1 from the remaining seconds
    secondsLeft--;
    // set the text content of the timer element
    timerEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      // stop our set interval function from continuing
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);
}



function endQuiz() {
  console.log('endQuiz function ran');
  questionContainerElement.classList.add('hide');
  endQuizElement.classList.remove('hide');
  finalScoreSpan.textContent = secondsLeft;
}

function showQuestion(question) {
  // clear out the children of our answer buttons element container
  answerButtonsElement.replaceChildren();
  // set the question element text to the current question
  questionElement.innerText = question.question;
  // for each answer choice, do the following
  question.answer.forEach(answer => {
    // create a button
    const button = document.createElement('button');
    // add a class to the button
    button.classList.add('btn');
    // set the button text
    button.innerHTML = answer.text
    // add a dataset attribute if the answer is the correct one
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    // add an event listener to the button
    button.addEventListener('click', selectAnswer)
    // append the button to the DOM
    answerButtonsElement.appendChild(button);
  })
}

function selectAnswer(e) {
  // target the clicked-on button
  const selectButton = e.target

  const hasDataAttribute = selectButton.dataset.correct
  console.log('correct is', hasDataAttribute);
  // now that the user seelected an answer, determine if it's right or wrong
  // and if it's wrong subtract time. In either case, move on to the next question


  // if selected answer does not have data attribute, subtract time
  if(!hasDataAttribute) {
    secondsLeft = secondsLeft - 4;

  }

  // increment question index by 1
  currentQuestionIndex++;
  // proceed to the next question
  showQuestion(shuffledQuestionsArray[currentQuestionIndex]);

  
}

function checkAnswer(answer) {

  if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
      // correct answer, add 1 score to final score
      correctAns++;
      // console.log(correctAns);
      answerCheck.textContent = "Correct!";
  } else {
      // wrong answer, deduct 10 second from timer
      totalTime -= 10;
      timeLeft.textContent = totalTime;
      answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
  }

  questionIndex++;
  // repeat with the rest of questions 
  if (questionIndex < questions.length) {
      nextQuestion();
  } else {
      // if no more question, run game over function
      gameOver();
  }
}

function clearStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }

}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


startButton.addEventListener('click', startQuiz)


