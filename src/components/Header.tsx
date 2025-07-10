import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Header.css';

interface HeaderProps {
  onLanguageChange: (lang: 'fr' | 'en') => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLanguageChange, activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <span className="logo-text">MyCryptoBank</span>
        </div>
        
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <button
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Accueil
          </button>
          <button
            className={`nav-link ${activeSection === 'wallet' ? 'active' : ''}`}
            onClick={() => handleNavClick('wallet')}
          >
            Wallet
          </button>
          <button
            className={`nav-link ${activeSection === 'swap' ? 'active' : ''}`}
            onClick={() => handleNavClick('swap')}
          >
            Swap
          </button>
          <button
            className={`nav-link ${activeSection === 'qbtc' ? 'active' : ''}`}
            onClick={() => handleNavClick('qbtc')}
          >
            <span className="qbtc-link">QBTC</span>
          </button>
        </nav>
        
        <div className="header-actions">
          <div className="language-selector">
            <button 
              className="lang-btn" 
              onClick={() => onLanguageChange('fr')}
            >
              FR
            </button>
            <span>|</span>
            <button 
              className="lang-btn" 
              onClick={() => onLanguageChange('en')}
            >
              EN
            </button>
          </div>
          
          <button className="connect-button">Connexion</button>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
