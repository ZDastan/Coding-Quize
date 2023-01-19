function populateHighScores() {
    
    var highScoresList = JSON.parse(localStorage.getItem('highScores')) || [];
  
    var list = '';
    highScoresList.forEach(score => {
        list = list + '<p>' + score.initials + '  :  ' + score.score + '</p>';
    });
    highScoresListEl.innerHTML = list;
}

function resetScores() {
    localStorage.clear();
    populateHighScores();
}

populateHighScores();
