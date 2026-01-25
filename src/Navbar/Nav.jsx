import React, { useState } from 'react';
import { FaGamepad, FaTrophy, FaInfoCircle, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Context/authContext";
import { doSignOut } from "../Firebase/auth";
import './Nav.css';

const Navbar = () => {
  const { currentUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    navigate(`/${section.toLowerCase()}`);
    setIsMobileMenuOpen(false);
  };

  const handleSignIn = () => {
    navigate('/signin');
    setIsMobileMenuOpen(false);
  };

  const handleSignUp = () => {
    navigate('/signup');
    setIsMobileMenuOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate('/');
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Mobile Header */}
      <div className="navbar-mobile-header">
        <button className="navbar-mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {currentUser && (
          <div className="navbar-user-display-mobile">
            <FaUser className="navbar-user-icon" />
            <span>{currentUser.displayName || currentUser.email.split('@')[0]}</span>
          </div>
        )}
      </div>

      {/* Navigation Items */}
      <div className={`navbar-items ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}`}>
        <div className="navbar-item">
          <button onClick={() => handleNavClick('games')}>
            <FaGamepad className="navbar-icon" />
            <span>GAMES</span>
          </button>
        </div>
        <div className="navbar-item">
          <button onClick={() => handleNavClick('contact')}>
            <FaTrophy className="navbar-icon" />
            <span>TOURNAMENTS</span>
          </button>
        </div>
        <div className="navbar-item">
          <button onClick={() => handleNavClick('about')}>
            <FaInfoCircle className="navbar-icon" />
            <span>ABOUT</span>
          </button>
        </div>
      </div>
      
      {/* Auth Buttons */}
      <div className={`navbar-auth-buttons ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}`}>
        {currentUser ? (
          <div className="navbar-user-section">
            <div className="navbar-user-display">
              <FaUser className="navbar-user-icon" />
              <span>{currentUser.displayName || currentUser.email.split('@')[0]}</span>
            </div>
            <button className="navbar-auth-btn navbar-signout-btn" onClick={handleSignOut}>
              <span className="navbar-auth-btn-text">SIGN OUT</span>
              <span className="navbar-auth-btn-glow"></span>
            </button>
          </div>
        ) : (
          <>
            <button className="navbar-auth-btn navbar-signin-btn" onClick={handleSignIn}>
              <span className="navbar-auth-btn-text">SIGN IN</span>
              <span className="navbar-auth-btn-glow"></span>
            </button>
            <button className="navbar-auth-btn navbar-signup-btn" onClick={handleSignUp}>
              <span className="navbar-auth-btn-text">SIGN UP</span>
              <span className="navbar-auth-btn-glow"></span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;