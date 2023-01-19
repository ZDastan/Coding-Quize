const startButton =document.getElementById('start')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement =document.getElementById('answer-buttons')
const timerEl=document.getElementById('timer');


var cardElement=document.querySelector('.card')

var shuffledQuestions, currentQuestionIndex
var secondsLeft=75;



startButton.addEventListener('click', startQuiz)

function startQuiz () {
console.log('started')
cardElement.classList.add('hide')
startButton.classList.add('hide')
questionElement.classList.remove('hide')
shuffledQuestions=question.sort(()=> Math.random()- .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}
function startTimer() {
  timerEl.textContent = secondsLeft;
  var timerInterval = setInterval(()=> {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if(secondsLeft <=0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}
function setNextQuestion() {
  
  showQuestion(shuffledQuestions[currentQuestionIndex]);

}
function showQuestion(question){
  questionElement.innerText = question.question
  question.answer.forEach(answer =>{
    const button = document.createElement('button')
    button.classList.add('btn')
    button.innerHTML = answer.text
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function selectAnswer() {
const selectButton = e.target
const correct = selectButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
})
}

function clearStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  }else{
    element.classList.add('wrong')
  }
  
}
function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}




 
