import React, { useState, useEffect } from 'react';
import { getRandomCountries } from '../data/gameData';
import ScoreBoard from './ScoreBoard';

/**
 * PUBLIC_INTERFACE
 * LandmarkMode component for the landmark identification game mode
 */
const LandmarkMode = ({ difficulty, onGameComplete }) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(10);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [currentLandmark, setCurrentLandmark] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRevealingAnswer, setIsRevealingAnswer] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [correctCountryId, setCorrectCountryId] = useState(null);

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
    const randomCountries = getRandomCountries(optionCount).filter(country => country.landmarks.length > 0);
    setOptions(randomCountries);
    
    // Choose one as correct answer
    const correctCountry = randomCountries[Math.floor(Math.random() * randomCountries.length)];
    const landmark = correctCountry.landmarks[Math.floor(Math.random() * correctCountry.landmarks.length)];
    
    setCurrentLandmark(landmark);
    setCorrectCountryId(correctCountry.id);
    setSelectedOption(null);
    setIsRevealingAnswer(false);
    setTimeRemaining(difficulty === 'Easy' ? 15 : difficulty === 'Medium' ? 10 : 7);
  };

  const handleAnswer = (selectedCountryId) => {
    setSelectedOption(selectedCountryId);
    setIsRevealingAnswer(true);
    
    // Check if answer is correct
    if (selectedCountryId === correctCountryId) {
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
        <h2>In which country is <span className="highlight">{currentLandmark?.name}</span> located?</h2>
        <div className="countdown-timer">Time: {timeRemaining}s</div>
        
        {currentLandmark && (
          <div className="landmark-container">
            <img 
              src={currentLandmark.imageUrl}
              alt={currentLandmark.name}
              className="landmark-image"
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
              isRevealingAnswer && country.id === correctCountryId ? 'correct' : ''
            } ${
              isRevealingAnswer && selectedOption === country.id && selectedOption !== correctCountryId ? 'incorrect' : ''
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

export default LandmarkMode;
