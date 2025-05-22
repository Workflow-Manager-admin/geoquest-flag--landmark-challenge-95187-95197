import React, { useState, useEffect } from 'react';
import { getRandomCountries, continents } from '../data/gameData';
import ScoreBoard from './ScoreBoard';

/**
 * PUBLIC_INTERFACE
 * ContinentMode component for the continent identification game mode
 */
const ContinentMode = ({ difficulty, onGameComplete }) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(10);
  const [score, setScore] = useState(0);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRevealingAnswer, setIsRevealingAnswer] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [correctContinent, setCorrectContinent] = useState(null);

  // Set difficulty parameters
  useEffect(() => {
    if (difficulty === 'Easy') {
      setTotalRounds(5);
    } else if (difficulty === 'Medium') {
      setTotalRounds(10);
    } else {
      setTotalRounds(15);
    }
  }, [difficulty]);

  // Generate new question
  useEffect(() => {
    generateQuestion();
  }, [currentRound]);

  // Timer
  useEffect(() => {
    if (isRevealingAnswer) return;
    
    if (timeRemaining <= 0) {
      handleAnswer(null); // Time's up!
      return;
    }

    const timer = setTimeout(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining, isRevealingAnswer]);

  const generateQuestion = () => {
    // Get a random country
    const [randomCountry] = getRandomCountries(1);
    setCurrentCountry(randomCountry);
    setCorrectContinent(randomCountry.continent);
    
    // Get available continents based on difficulty
    let availableContinents = Object.values(continents);
    
    if (difficulty === 'Easy') {
      // In easy mode, only show a few options
      availableContinents = [
        continents.ASIA, 
        continents.EUROPE, 
        continents.NORTH_AMERICA, 
        continents.SOUTH_AMERICA
      ];
    }
    
    setOptions(availableContinents);
    setSelectedOption(null);
    setIsRevealingAnswer(false);
    setTimeRemaining(difficulty === 'Easy' ? 15 : difficulty === 'Medium' ? 10 : 7);
  };

  const handleAnswer = (selectedContinentName) => {
    setSelectedOption(selectedContinentName);
    setIsRevealingAnswer(true);
    
    // Check if answer is correct
    if (selectedContinentName === correctContinent) {
      setScore(prev => prev + (difficulty === 'Easy' ? 5 : difficulty === 'Medium' ? 10 : 15));
    }
    
    // Move to next round or end game after a delay
    setTimeout(() => {
      if (currentRound >= totalRounds) {
        onGameComplete({ score, totalRounds });
      } else {
        setCurrentRound(prev => prev + 1);
      }
    }, 2000);
  };

  return (
    <div className="game-mode-content">
      <ScoreBoard 
        score={score} 
        totalQuestions={totalRounds} 
        currentQuestion={currentRound} 
      />
      
      <div className="game-question">
        <h2>Which continent is <span className="highlight">{currentCountry?.name}</span> located in?</h2>
        <div className="countdown-timer">Time: {timeRemaining}s</div>
        
        {currentCountry && (
          <div className="flag-container">
            <img 
              src={currentCountry.flagUrl}
              alt="Country flag"
              className="flag-image"
            />
          </div>
        )}
      </div>
      
      <div className="options-grid">
        {options.map(continent => (
          <button
            key={continent}
            onClick={() => !isRevealingAnswer && handleAnswer(continent)}
            className={`option-button ${
              isRevealingAnswer && continent === correctContinent ? 'correct' : ''
            } ${
              isRevealingAnswer && selectedOption === continent && selectedOption !== correctContinent ? 'incorrect' : ''
            }`}
            disabled={isRevealingAnswer}
          >
            {continent}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContinentMode;
