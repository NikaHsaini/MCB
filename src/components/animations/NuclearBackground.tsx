import React from 'react';
import { useState, useEffect } from 'react';
import "../../styles/NuclearBackground.css";

const NuclearBackground: React.FC = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Démarrer l'animation après un court délai pour permettre le chargement de la page
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`nuclear-background ${animationStarted ? 'animate' : ''}`}>
      <div className="nuclear-glow"></div>
      <div className="nuclear-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </div>
  );
};

export default NuclearBackground;
