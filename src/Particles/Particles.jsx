import React from 'react';
import './Particles.css';

const Particles = ({ 
  count = 15, 
  color = '#6366f1',
  size = 4,
  duration = 6,
  className = '' 
}) => {
  return (
    <div className={`particles-container ${className}`}>
      <div className="particles">
        {[...Array(count)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * duration}s`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Particles;