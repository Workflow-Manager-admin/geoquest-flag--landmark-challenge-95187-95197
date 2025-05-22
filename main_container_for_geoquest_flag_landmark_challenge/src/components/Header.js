import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Header component displaying the game title and navigation
 */
const Header = ({ onStartGame, isPlaying }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div className="logo">
            <span className="logo-symbol">🌍</span> GeoQuest
          </div>
          {isPlaying ? (
            <button className="btn" onClick={() => onStartGame(false)}>
              Back to Menu
            </button>
          ) : (
            <div className="subtitle" style={{ fontSize: '0.9rem', marginTop: '0' }}>
              Flag &amp; Landmark Challenge
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
