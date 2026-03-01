import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaDiscord, FaGamepad, FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://www.instagram.com/deceptionistgame/', label: 'Instagram' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/share/1CjGdYKNoC/', label: 'Facebook' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/phantom-gambit/posts/?feedView=all', label: 'LinkedIn' }
  ];

  // Function to handle Games link click
  const handleGamesClick = (e) => {
    e.preventDefault();

    // Try multiple approaches to navigate to games page

    // Approach 1: Use window.location for full page reload (works with any router)
    window.location.href = '/games';

    // Approach 2: If using React Router, you can also try:
    // history.push('/games'); // If you have access to history

    return false;
  };

  // Function to handle hash links (About and Contact)
  const handleHashClick = (e, url) => {
    e.preventDefault();

    // Extract the hash part
    const hash = url.split('#')[1];

    // If we're not on the home page, go to home page with hash
    if (window.location.pathname !== '/') {
      window.location.href = url;
    } else {
      // If we're on home page, just scroll to the element
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Function to handle Home link click
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <div className="footer-wrapper">
      <footer className="footer">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <FaGamepad className="logo-icon" />
                <span className="logo-text">PHANTOM <span className="logo-highlight">GAMBIT</span></span>
              </div>
              <p className="footer-tagline">
                Redefining competitive board gaming through immersive experiences and strategic gameplay.
              </p>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section quick-links">
              <h3 className="footer-section-title">Quick Links</h3>
              <ul className="footer-links">
                {/* Home Link */}
                <li>
                  <a
                    href="/"
                    className="footer-link"
                    onClick={handleHomeClick}
                  >
                    Home
                  </a>
                </li>

                {/* Games Link - Using onClick for guaranteed navigation */}
                <li>
                  <a
                    href="/games"
                    className="footer-link games-link"
                    onClick={handleGamesClick}
                  >
                    Games
                  </a>
                </li>

                {/* About Link */}
                <li>
                  <a
                    href="/#about"
                    className="footer-link"
                    onClick={(e) => handleHashClick(e, '/#about')}
                  >
                    About
                  </a>
                </li>

                {/* Contact Link */}
                <li>
                  <a
                    href="/#contact"
                    className="footer-link"
                    onClick={(e) => handleHashClick(e, '/#contact')}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section contact-info-section">
              <h3 className="footer-section-title">Contact Us</h3>
              <ul className="contact-info">
                <li className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>phantomgambit5@gmail.com</span>
                </li>
                <li className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>campus 153 Oric office Szabist University Block 5 Clifton</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © {currentYear} Phantom Gambit. All rights reserved.
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="footer-decoration">
          <div className="floating-shape shape-1">🎲</div>
          <div className="floating-shape shape-2">🃏</div>
          <div className="floating-shape shape-3">♟️</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;