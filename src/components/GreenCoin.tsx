import React from 'react';
import '../styles/GreenCoin.css';

const GreenCoin: React.FC = () => {
  // Fonction pour ouvrir GreenCoin dans une iframe
  const openGreenCoin = () => {
    // Créer une iframe pour afficher GreenCoin
    const iframe = document.createElement('iframe');
    iframe.src = '/greencoin/index.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    
    // Vider le contenu du conteneur et ajouter l'iframe
    const container = document.getElementById('greencoin-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(iframe);
    }
  };

  // Utiliser useEffect pour charger l'iframe au montage du composant
  React.useEffect(() => {
    openGreenCoin();
    
    // Nettoyage lors du démontage du composant
    return () => {
      const container = document.getElementById('greencoin-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="greencoin-wrapper">
      <div id="greencoin-container" className="greencoin-container"></div>
    </div>
  );
};

export default GreenCoin;
