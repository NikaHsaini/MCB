# Documentation du Dashboard MyCryptoBank Unifié

## Vue d'ensemble

Ce document présente le dashboard MyCryptoBank unifié avec l'intégration de quatre crypto-monnaies : GreenCoin, QBTC, HydroCoin et UraCoin. Cette version complète permet d'accéder directement à ces quatre crypto-monnaies depuis un point d'entrée unique, offrant ainsi une expérience utilisateur fluide et cohérente.

## Fonctionnalités principales

### Dashboard MyCryptoBank
- **Interface moderne** avec animations et effets visuels
- **Wallet** pour la gestion des crypto-monnaies
- **Swap** pour l'échange de crypto-monnaies
- **Design responsive** adapté à tous les appareils

### Crypto-monnaies intégrées
- **QBTC** (bouton orange) - Alternative quantique au Bitcoin

## Point d'entrée unique

Le dashboard utilise un **point d'entrée unique** qui lance automatiquement :
- Le serveur React pour l'interface principale

QBTC est accessible directement depuis le menu principal du dashboard, sans avoir à lancer de serveurs supplémentaires ou à naviguer entre différentes applications.

## Structure du projet

```
merged_dashboard/
├── public/
│   └── qbtc/                # Fichiers statiques de QBTC
├── src/
│   ├── components/          # Composants React du dashboard
│   │   ├── ui/              # Composants UI réutilisables
│   │   ├── animations/      # Composants d'animation
│   │   └── QBTC.tsx         # Composant d'intégration de QBTC
│   ├── styles/              # Fichiers CSS du dashboard
│   ├── lib/                 # Utilitaires et fonctions
│   ├── App.tsx              # Composant principal avec routage
│   └── main.tsx             # Point d'entrée de l'application
└── main.py                  # Script de lancement unifié
```

## Installation et lancement

1. Décompressez l'archive `mycryptobank_dashboard_unified.zip`
2. Ouvrez un terminal dans le dossier `merged_dashboard`
3. Exécutez la commande :
   ```
   python main.py
   ```

Le script va automatiquement :
- Vérifier si Node.js et npm sont installés
- Installer les dépendances nécessaires avec l'option `--legacy-peer-deps`
- Démarrer le serveur proxy pour HydroCoin
- Démarrer le serveur de développement React
- Ouvrir votre navigateur par défaut à l'adresse http://localhost:3000

## Utilisation

### Navigation
- Utilisez le menu principal pour naviguer entre les différentes sections du dashboard
- Chaque crypto-monnaie est identifiée par une couleur distinctive :
  - GreenCoin : vert
  - QBTC : orange
  - HydroCoin : bleu
  - UraCoin : violet
- Cliquez sur le nom de la crypto-monnaie dans le menu pour accéder à son interface

### Fonctionnalités
- **Dashboard principal** : Gestion centralisée de vos actifs numériques
- **QBTC** : Accès aux fonctionnalités spécifiques de QBTC

## Améliorations apportées

1. **Point d'entrée unique** : Un seul script pour lancer l'ensemble du dashboard
2. **Intégration QBTC** : Accès direct à QBTC depuis le dashboard principal
3. **Design harmonisé** : Interface cohérente avec mise en évidence de QBTC
4. **Navigation intuitive** : Passage fluide entre le dashboard et QBTC
5. **Performance optimisée** : Chargement efficace de l'interface via iframe
6. **Expérience responsive** : Adaptation à tous les types d'écrans

## Notes techniques

- L'intégration de QBTC utilise une iframe pour préserver toutes les fonctionnalités originales
- Les styles ont été adaptés pour garantir une cohérence visuelle entre le dashboard et QBTC
- Le composant React encapsule l'interface QBTC pour une intégration transparente

## Dépannage

### Problème : L'interface QBTC ne s'affiche pas correctement
**Solution** : Vérifiez que tous les fichiers dans le dossier `public/qbtc` sont présents et que les chemins d'accès sont corrects.

### Problème : Erreurs lors de l'installation des dépendances
**Solution** : Le script `main.py` utilise l'option `--legacy-peer-deps` pour résoudre les conflits de dépendances. Si des problèmes persistent, essayez d'installer manuellement avec `npm install --force`.

## Évolutions futures

- Intégration plus profonde des crypto-monnaies avec le wallet MyCryptoBank
- Ajout de fonctionnalités d'achat direct de tokens
- Synchronisation du thème et des préférences utilisateur entre les différentes interfaces
- Support multilingue complet pour l'ensemble du dashboard
- Ajout d'autres crypto-monnaies à l'écosystème MyCryptoBank

---

© 2025 MyCryptoBank - Tous droits réservés
# MCB
