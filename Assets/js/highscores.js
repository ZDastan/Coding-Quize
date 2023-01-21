var highScore = document.querySelector("#highScoreList");
var clearHighScores = document.querySelector("#clear");
var tryAgain = document.querySelector("#tryAgain");

// Event listener to clear scores 
clear.addEventListener("click", function () {
   localStorage.clear();
   location.reload();
});

// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
