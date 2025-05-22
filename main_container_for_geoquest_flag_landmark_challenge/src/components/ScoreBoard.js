import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ScoreBoard component for displaying the current score, questions, and progress
 */
const ScoreBoard = ({ score, totalQuestions, currentQuestion }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="scoreboard">
      <div className="scoreboard-item">
        <span className="scoreboard-label">Question:</span>
        <span className="scoreboard-value">{currentQuestion} of {totalQuestions}</span>
      </div>
      <div className="scoreboard-item">
        <span className="scoreboard-label">Score:</span>
        <span className="scoreboard-value">{score} points</span>
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%`, backgroundColor: 'var(--kavia-orange)' }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreBoard;
