import React from 'react';
import '../styles/HeroSection.css';

interface HeroSectionProps {
  language: 'fr' | 'en';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const translations = {
    fr: {
      title: 'Bienvenue dans ...',
      subtitle: 'L avenir de la finance décentralisée',
      description: 'Gérez vos actifs numériques avec une interface moderne et sécurisée. Visualisez, échangez et optimisez votre portefeuille en toute simplicité.',
      cta: 'Explorer le Dashboard'
    },
    en: {
      title: 'Welcome to your',
      subtitle: 'Crypto Bank',
      description: 'Manage your digital assets with a modern and secure interface. View, exchange and optimize your portfolio with ease.',
      cta: 'Explore Dashboard'
    }
  };

  const t = translations[language];

  return (
    <section className="hero-section">
      {/* Particules de fond quantiques */}
      <div className="quantum-background">
        <div className="bg-particle bg-particle-1"></div>
        <div className="bg-particle bg-particle-2"></div>
        <div className="bg-particle bg-particle-3"></div>
        <div className="bg-particle bg-particle-4"></div>
        <div className="bg-particle bg-particle-5"></div>
        <div className="bg-particle bg-particle-6"></div>
        <div className="bg-particle bg-particle-7"></div>
        <div className="bg-particle bg-particle-8"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          {t.title} <span className="gradient-text">{t.subtitle}</span>
        </h1>
        <p className="hero-description">{t.description}</p>
        <div className="hero-cta">
          <button className="cta-button">{t.cta}</button>
        </div>
      </div>

      <div className="hero-visual">
        {/* Particules de fond scintillantes */}
        <div className="starfield">
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
          <div className="star star-5"></div>
          <div className="star star-6"></div>
          <div className="star star-7"></div>
          <div className="star star-8"></div>
          <div className="star star-9"></div>
          <div className="star star-10"></div>
        </div>

        <div className="atom-container">
          <div className="atom">
            {/* Noyau central ultra-détaillé */}
            <div className="atom-nucleus">
              <div className="nucleus-core">
                <div className="core-center"></div>
                <div className="core-layer-1"></div>
                <div className="core-layer-2"></div>
                <div className="core-layer-3"></div>
              </div>
              <div className="nucleus-glow"></div>
              <div className="nucleus-pulse"></div>
              <div className="nucleus-field"></div>
            </div>

            {/* Orbites électroniques multiples */}
            <div className="electron-orbit orbit-1">
              <div className="orbit-trail"></div>
              <div className="electron electron-1-1"></div>
              <div className="electron electron-1-2"></div>
            </div>
            <div className="electron-orbit orbit-2">
              <div className="orbit-trail"></div>
              <div className="electron electron-2-1"></div>
              <div className="electron electron-2-2"></div>
              <div className="electron electron-2-3"></div>
            </div>
            <div className="electron-orbit orbit-3">
              <div className="orbit-trail"></div>
              <div className="electron electron-3-1"></div>
              <div className="electron electron-3-2"></div>
              <div className="electron electron-3-3"></div>
              <div className="electron electron-3-4"></div>
            </div>
            <div className="electron-orbit orbit-4">
              <div className="orbit-trail"></div>
              <div className="electron electron-4-1"></div>
              <div className="electron electron-4-2"></div>
            </div>

            {/* Champs énergétiques */}
            <div className="energy-field field-1"></div>
            <div className="energy-field field-2"></div>
            <div className="energy-field field-3"></div>
            <div className="energy-field field-4"></div>

            {/* Particules quantiques flottantes */}
            <div className="quantum-particle particle-1"></div>
            <div className="quantum-particle particle-2"></div>
            <div className="quantum-particle particle-3"></div>
            <div className="quantum-particle particle-4"></div>
            <div className="quantum-particle particle-5"></div>
            <div className="quantum-particle particle-6"></div>
            <div className="quantum-particle particle-7"></div>
            <div className="quantum-particle particle-8"></div>

            {/* Rayons d'énergie */}
            <div className="energy-ray ray-1"></div>
            <div className="energy-ray ray-2"></div>
            <div className="energy-ray ray-3"></div>
            <div className="energy-ray ray-4"></div>
            <div className="energy-ray ray-5"></div>
            <div className="energy-ray ray-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
