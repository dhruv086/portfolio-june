import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing...');

  const loadingTexts = [
    'Initializing...',
    'Loading modules...',
    'Connecting to database...',
    'Compiling assets...',
    'Optimizing performance...',
    'Launching application...',
    'Ready!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = Math.floor((progress / 100) * (loadingTexts.length - 1));
        return loadingTexts[Math.min(currentIndex, loadingTexts.length - 1)];
      });
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [progress, onLoadingComplete]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-logo">
          <div className="logo-circle">
            <div className="logo-inner"></div>
          </div>
          <div className="logo-text">Welcome</div>
        </div>
        
        <div className="loader-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{progress}%</div>
        </div>
        
        <div className="loader-status">
          <div className="status-text">{currentText}</div>
          <div className="status-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className="loader-grid">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="grid-cell"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader; 