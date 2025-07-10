# Documentation de l'intégration de l'onboarding pour My Crypto Bank

## Vue d'ensemble

Cette documentation décrit l'intégration d'un parcours d'onboarding multi-étapes autour du bouton de connexion de My Crypto Bank. L'onboarding a été conçu comme un composant React modulaire qui s'affiche sous forme de modale lorsque l'utilisateur clique sur le bouton "Connexion" dans l'en-tête du site.

## Fichiers créés/modifiés

1. **Nouveaux fichiers** :
   - `/src/components/OnboardingModal.tsx` - Composant React principal de la modale d'onboarding
   - `/src/styles/OnboardingModal.css` - Styles dédiés à la modale d'onboarding

2. **Fichiers modifiés** :
   - `/src/components/Header.tsx` - Intégration de la modale dans le header
   - `/vite.config.ts` - Configuration pour permettre l'accès via domaines proxy

## Structure du composant

Le composant `OnboardingModal` est structuré comme suit :

- **Props** :
  - `isOpen` : Booléen contrôlant la visibilité de la modale
  - `onClose` : Fonction de rappel pour fermer la modale

- **État interne** :
  - `currentStep` : Étape actuelle du parcours (1-3)
  - `formData` : Données du formulaire collectées
  - `errors` : Erreurs de validation par champ

- **Fonctionnalités** :
  - Navigation multi-étapes (précédent/suivant)
  - Validation des champs par étape
  - Fermeture via bouton ou touche Escape
  - Soumission finale des données

## Intégration dans le Header

Le composant est intégré dans le Header via :

```tsx
// Dans Header.tsx
import OnboardingModal from './OnboardingModal';

// État pour contrôler l'ouverture/fermeture
const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

// Fonctions de gestion
const openOnboarding = () => {
  setIsOnboardingOpen(true);
};

const closeOnboarding = () => {
  setIsOnboardingOpen(false);
};

// Bouton déclencheur
<button className="connect-button" onClick={openOnboarding}>Connexion</button>

// Intégration de la modale
<OnboardingModal isOpen={isOnboardingOpen} onClose={closeOnboarding} />
```

## Personnalisation

Le composant peut être personnalisé de plusieurs façons :

1. **Contenu des étapes** : Modifier le contenu JSX dans chaque condition `currentStep === X`
2. **Validation** : Ajuster les règles dans la fonction `validateStep`
3. **Styles** : Modifier les variables CSS dans `OnboardingModal.css`
4. **Comportement** : Ajuster les fonctions `handleNext`, `handlePrevious`, et `handleSubmit`

## Accessibilité

Le composant respecte les bonnes pratiques d'accessibilité :

- Navigation au clavier (Escape pour fermer)
- Messages d'erreur explicites
- Contraste suffisant pour la lisibilité
- Structure sémantique avec labels appropriés

## Responsive Design

La modale s'adapte aux différentes tailles d'écran grâce aux media queries dans le CSS :

```css
@media (max-width: 768px) {
  .onboarding-modal {
    width: 95%;
    max-height: 95vh;
  }
  
  /* Autres ajustements responsive */
}
```

## Exemple d'utilisation avancée

Pour ajouter une étape supplémentaire :

1. Augmenter le nombre d'étapes dans le tableau de la step-indicator
2. Ajouter une nouvelle condition `currentStep === 4` avec le contenu JSX
3. Ajuster la fonction `validateStep` pour inclure la validation de cette étape
4. Mettre à jour la fonction `handleNext` pour gérer cette étape supplémentaire

## Dépannage

- **Problème** : La modale ne s'ouvre pas
  **Solution** : Vérifier que l'état `isOnboardingOpen` est correctement mis à jour

- **Problème** : Styles non appliqués
  **Solution** : Vérifier l'importation du fichier CSS dans le composant

- **Problème** : Validation ne fonctionne pas
  **Solution** : Vérifier les conditions dans la fonction `validateStep`
