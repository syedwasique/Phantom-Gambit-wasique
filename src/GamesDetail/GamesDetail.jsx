import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GameDetails.css';
import Particles from '../Particles/Particles';

const GameDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const { gameId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameData = {
    title: "Deceptionist",
    subtitle: "A Game of Lies and Strategy",
    description: "In a world where truth is scarce and deception reigns, players must outwit opponents through cunning strategies and clever bluffs.",
    price: "49.99",
    players: "2-6",
    duration: "45-90min",
    age: "14+",
    rating: "4.8",
    features: [
      "Social Deduction & Strategic Gameplay",
      "Asymmetric Player Roles",
      "Dynamic Gameplay with Multiple Endings",
      "High Replayability"
    ],
    rules: [
      "Each player receives a secret role with unique abilities",
      "Take turns performing actions while maintaining cover",
      "Use deduction cards to reveal information",
      "Game ends when objectives are achieved"
    ],
    components: [
      "Game Board",
      "Character Tokens",
      "Action Cards",
      "Deduction Cards",
      "Secret Role Cards"
    ]
  };

  return (
    <div className="gd-page">

       <Particles 
        count={30} 
        color="#8b5cf6" 
        size={4} 
        duration={8}
        className="games-particles"
      />
      {/* Back Button */}
      {/* <button className="gd-back-btn" onClick={() => navigate('/games')}>
        <span className="gd-btn-icon">←</span>
        Back to Games
      </button> */}

      {/* Hero Section */}
      <section className="gd-hero">
        <div className="gd-hero-background">
          <div className="gd-hero-glow gd-glow-1"></div>
          <div className="gd-hero-glow gd-glow-2"></div>
        </div>
        <div className="gd-hero-content">
          <div className="gd-title-container">
            <h1 className="gd-game-title">
              <span className="gd-title-text">{gameData.title}</span>
              <span className="gd-title-shadow">{gameData.title}</span>
            </h1>
            <div className="gd-title-accent"></div>
          </div>
          
          <p className="gd-game-subtitle">{gameData.subtitle}</p>
          <p className="gd-game-description">{gameData.description}</p>
          
          <div className="gd-game-stats">
            <div className="gd-stat">
              <div className="gd-stat-icon">👥</div>
              <span className="gd-stat-value">{gameData.players}</span>
              <span className="gd-stat-label">Players</span>
            </div>
            <div className="gd-stat">
              <div className="gd-stat-icon">⏱️</div>
              <span className="gd-stat-value">{gameData.duration}</span>
              <span className="gd-stat-label">Duration</span>
            </div>
            <div className="gd-stat">
              <div className="gd-stat-icon">🎯</div>
              <span className="gd-stat-value">{gameData.age}</span>
              <span className="gd-stat-label">Age</span>
            </div>
            <div className="gd-stat">
              <div className="gd-stat-icon">⭐</div>
              <span className="gd-stat-value">{gameData.rating}</span>
              <span className="gd-stat-label">Rating</span>
            </div>
          </div>

          <div className="gd-hero-actions">
            <button className="gd-primary-btn">
              <span className="gd-btn-sparkle">✨</span>
              Buy Now - ${gameData.price}
              <span className="gd-btn-sparkle">✨</span>
            </button>
            <button className="gd-secondary-btn">
              <span className="gd-btn-play">▶</span>
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="gd-content-section">
        <div className="gd-container">
          <nav className="gd-tabs-nav">
            {['overview', 'features', 'rules', 'components'].map(tab => (
              <button
                key={tab}
                className={`gd-tab ${activeTab === tab ? 'gd-tab-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="gd-tab-icon">
                  {tab === 'overview' && '📖'}
                  {tab === 'features' && '🚀'}
                  {tab === 'rules' && '📝'}
                  {tab === 'components' && '🎁'}
                </span>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          <div className="gd-tab-content">
            {activeTab === 'overview' && (
              <div className="gd-tab-panel">
                <div className="gd-panel-header">
                  <h2>About the Game</h2>
                  <div className="gd-header-decoration"></div>
                </div>
                <p>Deceptionist is a social deduction game that pits players against each other in a battle of wits and deception. Every game is a unique experience that tests your ability to read others while concealing your own intentions.</p>
                <div className="gd-overview-highlights">
                  <div className="gd-highlight-card">
                    <span className="gd-highlight-emoji">🎭</span>
                    <h3>Social Deduction</h3>
                    <p>Read players and bluff your way to victory</p>
                  </div>
                  <div className="gd-highlight-card">
                    <span className="gd-highlight-emoji">⚡</span>
                    <h3>Fast-Paced</h3>
                    <p>45-90 minutes of intense gameplay</p>
                  </div>
                  <div className="gd-highlight-card">
                    <span className="gd-highlight-emoji">🔄</span>
                    <h3>High Replay</h3>
                    <p>Never the same game twice</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="gd-tab-panel">
                <div className="gd-panel-header">
                  <h2>Game Features</h2>
                  <div className="gd-header-decoration"></div>
                </div>
                <ul className="gd-features-list">
                  {gameData.features.map((feature, idx) => (
                    <li key={idx} className="gd-feature-item">
                      <div className="gd-feature-icon">
                        <div className="gd-icon-bg"></div>
                        <span>✨</span>
                      </div>
                      <div className="gd-feature-content">
                        <h3>{feature}</h3>
                        <p>Experience this unique aspect that sets Deceptionist apart from other games.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="gd-tab-panel">
                <div className="gd-panel-header">
                  <h2>How to Play</h2>
                  <div className="gd-header-decoration"></div>
                </div>
                <ol className="gd-rules-list">
                  {gameData.rules.map((rule, idx) => (
                    <li key={idx} className="gd-rule-item">
                      <div className="gd-rule-step">
                        <span className="gd-step-number">{idx + 1}</span>
                        <div className="gd-step-line"></div>
                      </div>
                      <div className="gd-rule-content">
                        <h3>{rule}</h3>
                        <p>Detailed explanation of this step in the gameplay process.</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {activeTab === 'components' && (
              <div className="gd-tab-panel">
                <div className="gd-panel-header">
                  <h2>What's Included</h2>
                  <div className="gd-header-decoration"></div>
                </div>
                <div className="gd-components-grid">
                  {gameData.components.map((component, idx) => (
                    <div key={idx} className="gd-component-card">
                      <div className="gd-component-icon">
                        <div className="gd-icon-shine"></div>
                        <span>📦</span>
                      </div>
                      <h3>{component}</h3>
                      <p>High-quality component designed for durability and aesthetic appeal.</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gd-cta-section">
        <div className="gd-cta-background">
          <div className="gd-cta-glow"></div>
        </div>
        <div className="gd-cta-content">
          <h2>Ready to Deceive?</h2>
          <p>Join thousands of players experiencing the thrill of deception and strategy. Will you be the master deceiver?</p>
          <div className="gd-cta-buttons">
            <button className="gd-cta-primary">
              <span className="gd-cta-sparkle">🎲</span>
              Buy Now - ${gameData.price}
              <span className="gd-cta-sparkle">🎲</span>
            </button>
            <button className="gd-cta-secondary">
              <span className="gd-cta-icon">📥</span>
              Download Rulebook
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameDetails;