import React from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-logo">
          <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="url(#paint0_linear)" />
            <path d="M20 7.5L32.5 20L20 32.5L7.5 20L20 7.5Z" fill="black" />
            <path d="M20 12.5L27.5 20L20 27.5L12.5 20L20 12.5Z" fill="url(#paint1_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3E8F" />
                <stop offset="1" stopColor="#FF80AB" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="12.5" y1="12.5" x2="27.5" y2="27.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3E8F" />
                <stop offset="1" stopColor="#FF80AB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="loading-title">MyCryptoBank</h2>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <p className="loading-text">Chargement de votre expérience financière...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
