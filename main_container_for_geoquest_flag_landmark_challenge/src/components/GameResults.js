import React from 'react';

/**
 * PUBLIC_INTERFACE
 * GameResults component to display the game results once a game is completed
 */
const GameResults = ({ gameStats, onPlayAgain }) => {
  const { score, totalRounds, gameMode, difficulty } = gameStats;
  const maxPossibleScore = totalRounds * (difficulty === 'Easy' ? 5 : difficulty === 'Medium' ? 10 : 15);
  const scorePercentage = Math.round((score / maxPossibleScore) * 100);
  
  // Get feedback based on score percentage
  const getFeedback = () => {
    if (scorePercentage >= 90) return "Outstanding! You're a geography expert!";
    if (scorePercentage >= 75) return "Great job! You know your geography well!";
    if (scorePercentage >= 50) return "Good effort! Keep exploring the world!";
    if (scorePercentage >= 25) return "Nice try! Practice makes perfect!";
    return "Don't give up! Try again to improve your geography knowledge!";
  };

  return (
    <div className="game-results">
      <h2 className="results-title">Game Complete!</h2>
      
      <div className="results-summary">
        <div className="results-detail">
          <span>Game Mode:</span>
          <span>{gameMode}</span>
        </div>
        
        <div className="results-detail">
          <span>Difficulty:</span>
          <span>{difficulty}</span>
        </div>
        
        <div className="results-detail">
          <span>Final Score:</span>
          <span>{score} out of {maxPossibleScore}</span>
        </div>
        
        <div className="results-score-circle">
          <div className="score-percentage">{scorePercentage}%</div>
        </div>
        
        <div className="results-feedback">
          {getFeedback()}
        </div>
      </div>
      
      <button className="btn btn-large" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
};

export default GameResults;
