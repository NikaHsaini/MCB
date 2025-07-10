import React from 'react';
import '../styles/QBTC.css';

const QBTC: React.FC = () => {
  // Fonction pour vérifier que les assets QBTC sont accessibles
  const checkQBTCAssets = async () => {
    const assetsToCheck = [
      '/qbtc/static/media/qbtc-logo.4601f84f3cd6c03b7740.png',
      '/qbtc/static/media/circuit-bg.edcf6a241e7d9baeafd2.png',
      '/qbtc/static/css/main.48b47757.css',
      '/qbtc/static/js/main.29bc5484.js'
    ];

    for (const asset of assetsToCheck) {
      try {
        const response = await fetch(asset, { method: 'HEAD' });
        if (!response.ok) {
          console.warn(`Asset QBTC non accessible: ${asset}`);
        } else {
          console.log(`✅ Asset QBTC vérifié: ${asset}`);
        }
      } catch (error) {
        console.warn(`Erreur lors de la vérification de l'asset QBTC: ${asset}`, error);
      }
    }
  };

  // Utiliser useEffect pour charger l'iframe au montage du composant
  React.useEffect(() => {
    // Vérifier les assets avant de charger l'iframe
    checkQBTCAssets();
    // Créer une iframe pour afficher QBTC
    const iframe = document.createElement('iframe');
    iframe.src = '/qbtc/index.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    
    // Vider le contenu du conteneur et ajouter l'iframe
    const container = document.getElementById('qbtc-container');
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
              if (link.href.startsWith('/') && !link.href.startsWith('/qbtc/')) {
                link.href = '/qbtc' + link.href;
              }
            });
            document.querySelectorAll('script[src]').forEach(script => {
              if (script.src.startsWith('/') && !script.src.startsWith('/qbtc/')) {
                script.src = '/qbtc' + script.src;
              }
            });

            // Corriger les chemins dans les CSS pour les images de fond
            const styleSheets = document.styleSheets;
            for (let i = 0; i < styleSheets.length; i++) {
              try {
                const sheet = styleSheets[i];
                if (sheet.href && sheet.href.includes('/qbtc/')) {
                  const rules = sheet.cssRules || sheet.rules;
                  for (let j = 0; j < rules.length; j++) {
                    const rule = rules[j];
                    if (rule.style && rule.style.backgroundImage) {
                      const bgImage = rule.style.backgroundImage;
                      if (bgImage.includes('url(/static/')) {
                        rule.style.backgroundImage = bgImage.replace('url(/static/', 'url(/qbtc/static/');
                      }
                    }
                  }
                }
              } catch (e) {
                // Ignorer les erreurs CORS pour les feuilles de style externes
                console.log('Impossible d\\'accéder aux règles CSS:', e);
              }
            }
            document.querySelectorAll('img[src]').forEach(img => {
              if (img.src.startsWith('/')) {
                img.src = '/qbtc' + img.src;
              }
            });

            // Corriger les chemins pour les assets statiques
            const baseUrl = '/qbtc/static/';
            document.querySelectorAll('img[src]').forEach(img => {
              if (img.src && img.src.includes('static/')) {
                const assetPath = img.src.split('static/')[1];
                if (assetPath) {
                  img.src = baseUrl + assetPath;
                }
              }
            });

            // Observer pour les éléments ajoutés dynamiquement
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                  if (node.nodeType === 1) { // Element node
                    // Corriger les images ajoutées dynamiquement
                    if (node.tagName === 'IMG' && node.src) {
                      if (node.src.startsWith('/') && !node.src.startsWith('/qbtc/')) {
                        node.src = '/qbtc' + node.src;
                      } else if (node.src.includes('static/') && !node.src.includes('/qbtc/static/')) {
                        const assetPath = node.src.split('static/')[1];
                        if (assetPath) {
                          node.src = baseUrl + assetPath;
                        }
                      }
                    }
                    // Corriger les images dans les éléments enfants
                    const imgs = node.querySelectorAll ? node.querySelectorAll('img[src]') : [];
                    imgs.forEach(img => {
                      if (img.src.startsWith('/') && !img.src.startsWith('/qbtc/')) {
                        img.src = '/qbtc' + img.src;
                      } else if (img.src.includes('static/') && !img.src.includes('/qbtc/static/')) {
                        const assetPath = img.src.split('static/')[1];
                        if (assetPath) {
                          img.src = baseUrl + assetPath;
                        }
                      }
                    });
                  }
                });
              });
            });

            // Commencer l'observation
            observer.observe(document.body, {
              childList: true,
              subtree: true
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
      const container = document.getElementById('qbtc-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="qbtc-wrapper">
      <div id="qbtc-container" className="qbtc-container"></div>
    </div>
  );
};

export default QBTC;
