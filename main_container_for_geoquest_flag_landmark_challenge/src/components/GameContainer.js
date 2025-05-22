import React, { useState } from 'react';
import Header from './Header';
import GameMode from './GameMode';
import FlagMode from './FlagMode';
import CapitalMode from './CapitalMode';
import LandmarkMode from './LandmarkMode';
import ContinentMode from './ContinentMode';
import GameResults from './GameResults';
import { gameModes } from '../data/gameData';

/**
 * PUBLIC_INTERFACE
 * GameContainer is the main component for the GeoQuest game
 * It manages the overall game state and components
 */
const GameContainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameMode, setGameMode] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameStats, setGameStats] = useState({});

  // Start a game with the selected mode and difficulty
  const handleSelectMode = (mode, diff) => {
    setGameMode(mode);
    setDifficulty(diff);
    setIsPlaying(true);
    setGameCompleted(false);
  };

  // Handle game completion
  const handleGameComplete = (stats) => {
    setGameCompleted(true);
    setGameStats({
      ...stats,
      gameMode,
      difficulty
    });
  };

  // Reset to main menu
  const handlePlayAgain = () => {
    setIsPlaying(false);
    setGameMode(null);
    setDifficulty(null);
    setGameCompleted(false);
  };

  // Render appropriate game mode component
  const renderGameContent = () => {
    if (!isPlaying) {
      return (
        <div className="home-screen">
          <div className="hero">
            <div className="subtitle">Welcome to</div>
            <h1 className="title">GeoQuest</h1>
            <div className="subtitle">Flag &amp; Landmark Challenge</div>
            
            <div className="description">
              Test your geography knowledge with our interactive challenges.
              Identify countries by their flags, match capitals to countries,
              recognize famous landmarks, and place countries in their continents.
            </div>
          </div>
          
          <GameMode onSelectMode={handleSelectMode} />
        </div>
      );
    }

    if (gameCompleted) {
      return <GameResults gameStats={gameStats} onPlayAgain={handlePlayAgain} />;
    }

    switch (gameMode) {
      case gameModes.FLAGS:
        return <FlagMode difficulty={difficulty} onGameComplete={handleGameComplete} />;
      case gameModes.CAPITALS:
        return <CapitalMode difficulty={difficulty} onGameComplete={handleGameComplete} />;
      case gameModes.LANDMARKS:
        return <LandmarkMode difficulty={difficulty} onGameComplete={handleGameComplete} />;
      case gameModes.CONTINENTS:
        return <ContinentMode difficulty={difficulty} onGameComplete={handleGameComplete} />;
      default:
        return null;
    }
  };

  return (
    <div className="game-container">
      <Header onStartGame={setIsPlaying} isPlaying={isPlaying} />
      
      <main className="game-main">
        <div className="container">
          {renderGameContent()}
        </div>
      </main>
    </div>
  );
};

export default GameContainer;
