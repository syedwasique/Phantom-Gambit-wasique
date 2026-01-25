import React, { useState, useRef } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useAuth } from '../Context/authContext';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../Firebase/auth';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef();
  const { setCurrentUser, setUserRole } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { user, role } = await doCreateUserWithEmailAndPassword(
        formData.email,
        formData.password,
        formData.username
      );
      
      setCurrentUser(user);
      setUserRole(role);
      navigate('/');
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  const MovetoSignIn = () => {
    navigate("/signin");
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setIsSubmitting(true);
    
    try {
      await doSignInWithGoogle();
      navigate('/');
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("signup-ripple");

    const ripple = button.getElementsByClassName("signup-ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <div className="signup-page-overlay">
      <motion.div 
        className="signup-page-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        ref={modalRef}
        className="signup-modal-container"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ 
          type: 'spring',
          damping: 20,
          stiffness: 300
        }}
      >
        <motion.div 
          className="signup-modal-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="signup-modal-title">JOIN THE GAMBIT</h2>
          <p className="signup-modal-subtitle">Create your account to access exclusive features</p>
        </motion.div>

        {error && (
          <motion.div 
            className="signup-error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="signup-form-container">
          <motion.div 
            className="signup-input-group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="signup-input-wrapper">
              <FaUser className="signup-input-icon" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="signup-form-input"
                required
              />
              <div className="signup-input-underline"></div>
            </div>
          </motion.div>

          <motion.div 
            className="signup-input-group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="signup-input-wrapper">
              <FaEnvelope className="signup-input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="signup-form-input"
                required
              />
              <div className="signup-input-underline"></div>
            </div>
          </motion.div>

          <motion.div 
            className="signup-input-group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="signup-input-wrapper">
              <FaLock className="signup-input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="signup-form-input"
                required
                minLength="6"
              />
              <button 
                type="button" 
                className="signup-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <div className="signup-input-underline"></div>
            </div>
          </motion.div>

          <motion.div 
            className="signup-input-group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="signup-input-wrapper">
              <FaLock className="signup-input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="signup-form-input"
                required
                minLength="6"
              />
              <button 
                type="button" 
                className="signup-password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <div className="signup-input-underline"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button 
              type="submit" 
              className="signup-submit-button"
              onClick={createRipple}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="signup-spinner"></span>
              ) : (
                <>
                  <span>CREATE ACCOUNT</span>
                  <FaArrowRight className="signup-arrow-icon" />
                </>
              )}
              <div className="signup-btn-hover-effect"></div>
            </button>
          </motion.div>

          <motion.div 
            className="signup-social-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="signup-divider">
              <span>OR CONTINUE WITH</span>
            </div>
            <button 
              type="button" 
              className="signup-social-btn signup-google-btn"
              onClick={handleGoogleSignIn}
              disabled={isSubmitting}
            >
              <FaGoogle className="signup-social-icon" />
              <span>Google</span>
            </button>
          </motion.div>
        </form>

        <motion.div 
          className="signup-login-redirect"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Already have an account? <button className="signup-login-link" onClick={MovetoSignIn}>Sign In</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;