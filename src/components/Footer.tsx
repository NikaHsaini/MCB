import React from 'react';
import '../styles/Footer.css';

interface FooterProps {
  language: 'fr' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const translations = {
    fr: {
      copyright: '© 2025 MyCryptoBank - L\'avenir de la finance décentralisée',
      by: 'par Next Generation',
      links: {
        terms: 'Conditions d\'utilisation',
        privacy: 'Politique de confidentialité',
        contact: 'Contact',
        support: 'Support'
      }
    },
    en: {
      copyright: '© 2025 MyCryptoBank - The future of decentralized finance',
      by: 'by Next Generation',
      links: {
        terms: 'Terms of Use',
        privacy: 'Privacy Policy',
        contact: 'Contact',
        support: 'Support'
      }
    }
  };

  const t = translations[language];

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
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
            <div className="footer-brand">
              <div className="footer-brand-name">MyCryptoBank</div>
              <div className="footer-brand-tagline">{t.by}</div>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="#" className="footer-link">{t.links.terms}</a>
            <a href="#" className="footer-link">{t.links.privacy}</a>
            <a href="#" className="footer-link">{t.links.contact}</a>
            <a href="#" className="footer-link">{t.links.support}</a>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
