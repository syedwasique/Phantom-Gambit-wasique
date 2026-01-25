import React, { useEffect } from 'react';
import { FaGamepad, FaUsers, FaRocket, FaDiscord, FaTwitter, FaHeart, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {

  useEffect(() => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateNumbers = () => {
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        
        let current = start;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            clearInterval(timer);
            current = target;
          }
          stat.textContent = Math.floor(current).toLocaleString();
        }, 16);
      });
    };
    
    // Trigger when section comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.stats-container'));
  }, []);

  return (
    <div className="about-container">
      {/* Animated Background Elements */}
      <div className="about-bg-pattern"></div>
      <div className="about-bg-gradient"></div>
      
      {/* Floating Game Elements */}
      <div className="floating-icon floating-dice">🎲</div>
      <div className="floating-icon floating-card">🃏</div>
      <div className="floating-icon floating-chess">♟️</div>
      
      <div className="about-content">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="title-reveal">WELCOME TO <span className="highlight-text">PHANTOM GAMBIT</span></h2>
          <div className="header-underline"></div>
          <p className="header-subtitle">Where Every Game Tells a Story</p>
        </div>
        
        {/* Main About Content */}
        <div className="about-grid">
          <div className="about-text animate-slide-in-left">
            <h3>The Beginning of Something Great</h3>
            <p>
              Phantom Gambit was born from a simple yet powerful idea: to create 
              board games that challenge the mind and spark meaningful connections. 
              We're a passionate team of game designers, storytellers, and 
              strategists dedicated to crafting unforgettable gaming experiences.
            </p>
            <p>
              While we're just starting our journey, our vision is grand. We believe 
              that the best games are those that stay with you long after the final 
              move - games that make you think, laugh, and connect with others in 
              new and exciting ways.
            </p>
            
            <div className="core-values">
              <h4>Our Core Values</h4>
              <div className="values-grid">
                <div className="value-item">
                  <span className="value-icon">💡</span>
                  <span className="value-text">Innovative Design</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <span className="value-text">Community First</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">🎯</span>
                  <span className="value-text">Strategic Depth</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">✨</span>
                  <span className="value-text">Quality Craftsmanship</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Cards - Updated for new brand */}
          <div className="stats-container animate-slide-in-right">
            <h3>Our Journey Begins</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon"><FaGamepad /></div>
                <div className="stat-number" data-count="1">0</div>
                <div className="stat-label">Launch Title</div>
                <div className="stat-subtext">Deceptionist</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaUsers /></div>
                <div className="stat-number" data-count="500">0</div>
                <div className="stat-label">Community Members</div>
                <div className="stat-subtext">Growing Daily</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaHeart /></div>
                <div className="stat-number" data-count="100">0</div>
                <div className="stat-label">Playtesters</div>
                <div className="stat-subtext">Helping Us Improve</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaRocket /></div>
                <div className="stat-number" data-count="2">0</div>
                <div className="stat-label">Games in Development</div>
                <div className="stat-subtext">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Focus Section */}
        <div className="focus-section animate-fade-in">
          <h3>What We're Building Right Now</h3>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon">🎭</div>
              <h4>Deceptionist</h4>
              <p>Our flagship social deduction game that's currently in final development and testing phases.</p>
              <div className="focus-status">
                <span className="status-badge">In Development</span>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-icon">🌱</div>
              <h4>Community Building</h4>
              <p>Growing our player community and gathering valuable feedback to make our games even better.</p>
              <div className="focus-status">
                <span className="status-badge">Active</span>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-icon">🚀</div>
              <h4>Future Projects</h4>
              <p>Developing new game concepts that will expand our portfolio with unique strategic experiences.</p>
              <div className="focus-status">
                <span className="status-badge">Planning Phase</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="cta-section animate-fade-in">
          <div className="cta-content">
            <h3>Join Our Founding Community</h3>
            <p>
              Be part of our journey from the very beginning. Your feedback and 
              enthusiasm will help shape the future of Phantom Gambit.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <FaDiscord className="cta-icon" />
                Join Discord
              </button>
              <button className="cta-secondary">
                <FaTwitter className="cta-icon" />
                Follow Updates
              </button>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mission-statement animate-fade-in">
          <div className="mission-quote">
            "Great games aren't just played - they're experienced, remembered, 
            and shared. We're here to create those moments."
          </div>
          <div className="mission-author">- The Phantom Gambit Team</div>
        </div>
      </div>
    </div>
  );
};

export default About;