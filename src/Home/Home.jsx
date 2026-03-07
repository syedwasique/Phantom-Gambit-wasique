import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Context/authContext";
import { doSignOut } from "../Firebase/auth";
// Removed Ballpit from here to prevent duplicate render

function Home() {
  const { currentUser, userRole } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleExploreClick = () => {
    navigate('/games');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate('/');
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="home-container">
      {/* Background is now fully handled in Layout.jsx to prevent dual-rendering */}

      {/* Enhanced Gradient Background */}
      <div className="gradient-bg"></div>

      {/* Improved Floating Particles */}
      <div className="particles">
        {[...Array(isMobile ? 15 : 50)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--size': `${Math.random() * 6 + 2}px`,
            '--delay': `${Math.random() * 2}s`,
            '--duration': `${Math.random() * 10 + 5}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--move-x': `${Math.random() * 100 - 50}px`,
            '--move-y': `${Math.random() * 100 - 50}px`
          }}></div>
        ))}
      </div>

      {/* Glowing Orbs with Enhanced Effects */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Centered Content */}
      <div className="center-container">
        {/* Logo with Enhanced Glow */}
        <div className="logo-container">
          <div className="logo-main">PHANTOM GAMBIT</div>
          <div className="logo-sub">REDEFINE COMPETITIVE GAMING</div>
          <div className="logo-glow"></div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="cta-container">
          <button className="cta-button" onClick={handleExploreClick}>
            <span className="cta-text">EXPLORE GAME</span>
            <span className="cta-icon"><FaChevronRight /></span>
            <div className="cta-hover"></div>
            <div className="cta-pulse"></div>
            <div className="cta-sparkles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="sparkle" style={{
                  '--sparkle-delay': `${i * 0.1}s`,
                  '--sparkle-pos': `${Math.random() * 100}%`
                }}></div>
              ))}
            </div>
          </button>
        </div>


      </div>
    </div>
  );
}

export default Home;