import React from 'react';
import { gameModes, difficulties } from '../data/gameData';

/**
 * PUBLIC_INTERFACE
 * GameMode component for selecting the game mode and difficulty
 */
const GameMode = ({ onSelectMode }) => {
  const handleSelectMode = (mode, difficulty) => {
    onSelectMode(mode, difficulty);
  };

  return (
    <div className="game-mode-container">
      <h2 className="subtitle">Select a Game Mode</h2>
      <div className="game-mode-grid">
        {Object.values(gameModes).map(mode => (
          <div key={mode} className="game-mode-card">
            <h3>{mode}</h3>
            <div className="game-mode-icon">
              {mode === gameModes.FLAGS && '🏳️'}
              {mode === gameModes.CAPITALS && '🏛️'}
              {mode === gameModes.LANDMARKS && '🗿'}
              {mode === gameModes.CONTINENTS && '🌎'}
            </div>
            <p className="game-mode-description">
              {mode === gameModes.FLAGS && 'Identify countries by their flags'}
              {mode === gameModes.CAPITALS && 'Match capitals to their countries'}
              {mode === gameModes.LANDMARKS && 'Identify landmarks and their countries'}
              {mode === gameModes.CONTINENTS && 'Group countries by their continents'}
            </p>
            <div className="difficulty-buttons">
              {Object.values(difficulties).map(difficulty => (
                <button 
                  key={`${mode}-${difficulty}`} 
                  className="btn btn-difficulty"
                  onClick={() => handleSelectMode(mode, difficulty)}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameMode;
