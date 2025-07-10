import React from 'react';
import { useState, useEffect, Suspense } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import StarryBackground from './components/StarryBackground';
import NuclearBackground from './components/animations/NuclearBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Wallet from './components/Wallet';
import Swap from './components/Swap';
import QBTC from './components/QBTC';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection language={language} />;
      case 'wallet':
        return <Wallet />;
      case 'swap':
        return <Swap />;
      case 'qbtc':
        return <QBTC />;
      default:
        return <HeroSection language={language} />;
    }
  };

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <StarryBackground />
          <NuclearBackground />
          
          <Header 
            onLanguageChange={handleLanguageChange} 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          
          <main className="main-content">
            <Suspense fallback={<div>Chargement...</div>}>
              {renderActiveSection()}
            </Suspense>
          </main>
          
          <Footer language={language} />
        </>
      )}
    </div>
  );
}

export default App;
