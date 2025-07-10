import React from 'react';
import '../styles/HydroCoin.css';

const HydroCoin: React.FC = () => {
  // Utiliser useEffect pour charger l'iframe au montage du composant
  React.useEffect(() => {
    // Créer une iframe pour afficher HydroCoin
    const iframe = document.createElement('iframe');
    iframe.src = '/hydrocoin/index.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    
    // Vider le contenu du conteneur et ajouter l'iframe
    const container = document.getElementById('hydrocoin-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(iframe);
    }
    
    // Correction des chemins relatifs dans l'iframe
    iframe.onload = () => {
      try {
        // Tentative d'accès au contenu de l'iframe pour corriger les chemins
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          // Ajouter un script pour corriger les chemins relatifs
          const script = iframeDoc.createElement('script');
          script.textContent = `
            // Corriger les chemins relatifs des ressources
            document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
              if (link.href && link.href.startsWith('/')) {
                link.href = '/hydrocoin' + link.href;
              }
            });
            document.querySelectorAll('script[src]').forEach(script => {
              if (script.src && script.src.startsWith('/')) {
                script.src = '/hydrocoin' + script.src;
              }
            });
            document.querySelectorAll('img[src]').forEach(img => {
              if (img.src && img.src.startsWith('/')) {
                img.src = '/hydrocoin' + img.src;
              }
            });
            
            // Corriger les chemins pour les assets
            const baseUrl = '/hydrocoin/assets/';
            document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
              if (link.href && link.href.includes('assets/')) {
                const assetPath = link.href.split('assets/')[1];
                if (assetPath) {
                  link.href = baseUrl + assetPath;
                }
              }
            });
            document.querySelectorAll('script[src]').forEach(script => {
              if (script.src && script.src.includes('assets/')) {
                const assetPath = script.src.split('assets/')[1];
                if (assetPath) {
                  script.src = baseUrl + assetPath;
                }
              }
            });
            document.querySelectorAll('img[src]').forEach(img => {
              if (img.src && img.src.includes('assets/')) {
                const assetPath = img.src.split('assets/')[1];
                if (assetPath) {
                  img.src = baseUrl + assetPath;
                }
              }
            });
          `;
          iframeDoc.head.appendChild(script);
        }
      } catch (e) {
        console.error('Erreur lors de la correction des chemins dans l\'iframe:', e);
      }
    };
    
    // Nettoyage lors du démontage du composant
    return () => {
      const container = document.getElementById('hydrocoin-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="hydrocoin-wrapper">
      <div id="hydrocoin-container" className="hydrocoin-container"></div>
    </div>
  );
};

export default HydroCoin;
