const startButton =document.getElementById('start')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement =document.getElementById('answer-buttons')

var cardElement=document.querySelector('.card')

var shuffledQuestions, currentQuestionIndex


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
Array.from(answerButtonsElemnt.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
})
}
const handleAnswerButtonClick = (answerOption) => {
	const nextQuestion = currentQuestion + 1;
	setCurrentQuestion(nextQuestion);
};
if (nextQuestion < questions.length) {
	setCurrentQuestion(nextQuestion);
} else {
	alert('end of the quiz');
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




 
