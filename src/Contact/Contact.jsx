import React, { useState, useRef } from 'react';
import Particles from '../Particles/Particles'; // Adjust path as needed
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      document.querySelector('.contact-submit-btn').classList.add('contact-success');
      setTimeout(() => {
        document.querySelector('.contact-submit-btn').classList.remove('contact-success');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Use Particles Component */}
      <Particles 
        count={20} 
        color="#6366f1" 
        size={4} 
        duration={6}
        className="contact-particles"
      />

      {/* Animated Background Elements */}
      <div className="contact-background">
        <div className="contact-floating-shapes">
          <div className="contact-shape contact-shape-1"></div>
          <div className="contact-shape contact-shape-2"></div>
          <div className="contact-shape contact-shape-3"></div>
        </div>
      </div>

      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <div className="contact-header-glow"></div>
          <h1 className="contact-title">
            <span className="contact-title-text">CONTACT</span>
            <span className="contact-title-subtext">PHANTOM GAMBIT</span>
          </h1>
          <div className="contact-title-underline"></div>
          <p className="contact-subtitle">
            Ready to level up your gaming experience? Let's strategize together.
          </p>
          <div className="contact-header-stats">
            <div className="contact-stat">
              <span className="contact-stat-number">24h</span>
              <span className="contact-stat-label">Response Time</span>
            </div>
            <div className="contact-stat">
              <span className="contact-stat-number">99%</span>
              <span className="contact-stat-label">Satisfaction</span>
            </div>
            <div className="contact-stat">
              <span className="contact-stat-number">1k+</span>
              <span className="contact-stat-label">Players Helped</span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-card-glow"></div>
              <div className="contact-card-header">
                <h2 className="contact-info-title">COMMAND CENTER</h2>
                <div className="contact-status-indicator">
                  <div className="contact-status-dot"></div>
                  <span>Online</span>
                </div>
              </div>
              
              <div className="contact-channels">
                <div className="contact-channel">
                  <div className="contact-channel-icon">🎮</div>
                  <div className="contact-channel-content">
                    <h3>Gaming Support</h3>
                    <p>Get help with game rules and strategies</p>
                    <span className="contact-channel-tag">Live Support</span>
                  </div>
                </div>

                <div className="contact-channel">
                  <div className="contact-channel-icon">⚡</div>
                  <div className="contact-channel-content">
                    <h3>Quick Connect</h3>
                    <p>contact@phantomgambit.com</p>
                    <span className="contact-channel-tag">Priority Response</span>
                  </div>
                </div>

                <div className="contact-channel">
                  <div className="contact-channel-icon">🌐</div>
                  <div className="contact-channel-content">
                    <h3>Community Hub</h3>
                    <p>Join our Discord server</p>
                    <span className="contact-channel-tag">Active Players</span>
                  </div>
                </div>

                <div className="contact-channel">
                  <div className="contact-channel-icon">🤝</div>
                  <div className="contact-channel-content">
                    <h3>Partnerships</h3>
                    <p>collab@phantomgambit.com</p>
                    <span className="contact-channel-tag">Business Inquiries</span>
                  </div>
                </div>
              </div>

              <div className="contact-support-hours">
                <h4>SUPPORT HOURS</h4>
                <div className="contact-time-slots">
                  <div className="contact-time-slot">
                    <span className="contact-day">MON - FRI</span>
                    <span className="contact-hours">09:00 - 18:00 EST</span>
                  </div>
                  <div className="contact-time-slot">
                    <span className="contact-day">WEEKENDS</span>
                    <span className="contact-hours">12:00 - 16:00 EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-container">
              <div className="contact-form-header">
                <h2>SEND TRANSMISSION</h2>
                <p>Initiate contact protocol. We'll decrypt your message ASAP.</p>
              </div>

              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label">PLAYER IDENTITY</label>
                    <div className="contact-input-container">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className={`contact-form-input ${activeField === 'name' ? 'contact-active' : ''}`}
                        placeholder="Enter your callsign"
                        required
                      />
                      <div className="contact-input-glow"></div>
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">COMMS CHANNEL</label>
                    <div className="contact-input-container">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className={`contact-form-input ${activeField === 'email' ? 'contact-active' : ''}`}
                        placeholder="your@transmission.portal"
                        required
                      />
                      <div className="contact-input-glow"></div>
                    </div>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">MISSION TYPE</label>
                  <div className="contact-input-container">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      className={`contact-form-select ${activeField === 'subject' ? 'contact-active' : ''}`}
                      required
                    >
                      <option value="">Select mission objective</option>
                      <option value="support">🛡️ Tactical Support</option>
                      <option value="partnership">🤝 Alliance Proposal</option>
                      <option value="wholesale">📦 Supply Chain</option>
                      <option value="feedback">💡 Strategy Feedback</option>
                      <option value="bug">🐛 Bug Report</option>
                      <option value="other">❓ Other Inquiry</option>
                    </select>
                    <div className="contact-input-glow"></div>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">ENCRYPTED MESSAGE</label>
                  <div className="contact-input-container">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className={`contact-form-textarea ${activeField === 'message' ? 'contact-active' : ''}`}
                      placeholder="Transmit your message for decryption..."
                      rows="6"
                      required
                    ></textarea>
                    <div className="contact-input-glow"></div>
                    <div className="contact-char-counter">
                      {formData.message.length}/500
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`contact-submit-btn ${isSubmitting ? 'contact-submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="contact-btn-content">
                    {isSubmitting ? (
                      <>
                        <div className="contact-transmission-loader">
                          <div className="contact-loader-dot"></div>
                          <div className="contact-loader-dot"></div>
                          <div className="contact-loader-dot"></div>
                        </div>
                        INITIATING TRANSMISSION...
                      </>
                    ) : (
                      <>
                        <span className="contact-btn-icon">🚀</span>
                        LAUNCH TRANSMISSION
                      </>
                    )}
                  </span>
                  <div className="contact-btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="contact-quick-actions">
          <h3>QUICK ACTIONS</h3>
          <div className="contact-action-grid">
            <div className="contact-action-card">
              <div className="contact-action-icon">📚</div>
              <h4>Game Rules</h4>
              <p>Download rulebooks and guides</p>
              <button className="contact-action-btn">Download</button>
            </div>
            <div className="contact-action-card">
              <div className="contact-action-icon">🎯</div>
              <h4>Strategy Guides</h4>
              <p>Master your gameplay</p>
              <button className="contact-action-btn">Explore</button>
            </div>
            <div className="contact-action-card">
              <div className="contact-action-icon">👥</div>
              <h4>Join Community</h4>
              <p>Connect with players</p>
              <button className="contact-action-btn">Join Discord</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;