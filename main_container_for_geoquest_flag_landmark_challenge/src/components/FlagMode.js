import React, { useState, useEffect } from 'react';
import { getRandomCountries, getCountryById } from '../data/gameData';
import ScoreBoard from './ScoreBoard';

/**
 * PUBLIC_INTERFACE
 * FlagMode component for the flag identification game mode
 */
const FlagMode = ({ difficulty, onGameComplete }) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(10);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [correctCountry, setCorrectCountry] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRevealingAnswer, setIsRevealingAnswer] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(15);

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
    // Number of options based on difficulty
    const optionCount = difficulty === 'Easy' ? 3 : difficulty === 'Medium' ? 4 : 6;
    
    // Get random countries for options
    const randomCountries = getRandomCountries(optionCount);
    setOptions(randomCountries);
    
    // Choose one as correct answer
    const correct = randomCountries[Math.floor(Math.random() * randomCountries.length)];
    setCorrectCountry(correct);
    setSelectedOption(null);
    setIsRevealingAnswer(false);
    setTimeRemaining(difficulty === 'Easy' ? 15 : difficulty === 'Medium' ? 10 : 7);
  };

  const handleAnswer = (selectedCountryId) => {
    setSelectedOption(selectedCountryId);
    setIsRevealingAnswer(true);
    
    // Check if answer is correct
    if (selectedCountryId === correctCountry.id) {
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
        <h2>Which country does this flag belong to?</h2>
        <div className="countdown-timer">Time: {timeRemaining}s</div>
        
        {correctCountry && (
          <div className="flag-container">
            <img 
              src={correctCountry.flagUrl}
              alt="Country flag"
              className="flag-image"
            />
          </div>
        )}
      </div>
      
      <div className="options-grid">
        {options.map(country => (
          <button
            key={country.id}
            onClick={() => !isRevealingAnswer && handleAnswer(country.id)}
            className={`option-button ${
              isRevealingAnswer && country.id === correctCountry.id ? 'correct' : ''
            } ${
              isRevealingAnswer && selectedOption === country.id && selectedOption !== correctCountry.id ? 'incorrect' : ''
            }`}
            disabled={isRevealingAnswer}
          >
            {country.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlagMode;
