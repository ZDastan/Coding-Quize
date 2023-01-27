var highScore = document.querySelector("#highscores-list");
var clearHighScores = document.querySelector("#clear");
var tryAgain = document.querySelector("#tryAgain");

// Event listener to clear scores 
clear.addEventListener("click", function () {
   localStorage.clear();
   location.reload();
});

// Retreives local stroage 
var allScores = localStorage.getItem("highScores");
allScores = JSON.parse(allScores);
console.log(allScores);
allScores.forEach(element => {
   let score=document.createElement('p')
   score.textContent=`initials: ${element.initials} score: ${element.score}`
   highScore.appendChild(score)
});

