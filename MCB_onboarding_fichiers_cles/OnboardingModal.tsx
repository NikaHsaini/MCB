import React, { useState, useEffect } from 'react';
import '../styles/OnboardingModal.css';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    phoneNumber: '',
    purpose: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Fermer la modale avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Empêcher le défilement du body quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Le nom complet est requis';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'L\'email est requis';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Format d\'email invalide';
      }
    } else if (step === 2) {
      if (!formData.country.trim()) {
        newErrors.country = 'Le pays est requis';
      }
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Le numéro de téléphone est requis';
      }
    } else if (step === 3) {
      if (!formData.purpose.trim()) {
        newErrors.purpose = 'Veuillez indiquer votre objectif';
      }
      if (!formData.acceptTerms) {
        newErrors.acceptTerms = 'Vous devez accepter les conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        // Soumettre le formulaire ou effectuer une action finale
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Ici, vous pourriez envoyer les données à une API
    console.log('Données soumises:', formData);
    
    // Simuler une soumission réussie
    setTimeout(() => {
      alert('Inscription réussie! Vous pouvez maintenant vous connecter.');
      onClose();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="onboarding-header">
          <div className="logo-container">
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
            <h2>MyCryptoBank</h2>
          </div>
          <h3>Créez votre compte</h3>
        </div>
        
        <div className="step-indicator">
          {[1, 2, 3].map((step) => (
            <div 
              key={step} 
              className={`step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
            >
              <div className="step-number">{step}</div>
              <div className="step-label">
                {step === 1 ? 'Identité' : step === 2 ? 'Contact' : 'Finalisation'}
              </div>
            </div>
          ))}
        </div>
        
        <div className="onboarding-content">
          {currentStep === 1 && (
            <div className="step-pane">
              <h4>Vos informations personnelles</h4>
              <p>Commençons par les bases. Veuillez fournir vos informations d'identité.</p>
              
              <div className="form-group">
                <label htmlFor="fullName">Nom complet</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`form-control ${errors.fullName ? 'invalid' : ''}`}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Entrez votre nom complet"
                />
                {errors.fullName && <div className="error-message">{errors.fullName}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${errors.email ? 'invalid' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemple@email.com"
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="step-pane">
              <h4>Vos coordonnées</h4>
              <p>Comment pouvons-nous vous contacter?</p>
              
              <div className="form-group">
                <label htmlFor="country">Pays</label>
                <select
                  id="country"
                  name="country"
                  className={`form-control ${errors.country ? 'invalid' : ''}`}
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez votre pays</option>
                  <option value="FR">France</option>
                  <option value="BE">Belgique</option>
                  <option value="CH">Suisse</option>
                  <option value="CA">Canada</option>
                  <option value="LU">Luxembourg</option>
                </select>
                {errors.country && <div className="error-message">{errors.country}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phoneNumber">Numéro de téléphone</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={`form-control ${errors.phoneNumber ? 'invalid' : ''}`}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+33 6 12 34 56 78"
                />
                {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="step-pane">
              <h4>Finalisation</h4>
              <p>Dernière étape avant de commencer votre aventure crypto!</p>
              
              <div className="form-group">
                <label htmlFor="purpose">Quel est votre objectif principal?</label>
                <textarea
                  id="purpose"
                  name="purpose"
                  className={`form-control ${errors.purpose ? 'invalid' : ''}`}
                  value={formData.purpose}
                  onChange={handleChange}
                  placeholder="Je souhaite investir dans les cryptomonnaies pour..."
                  rows={4}
                ></textarea>
                {errors.purpose && <div className="error-message">{errors.purpose}</div>}
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />
                  <span className="checkbox-text">
                    J'accepte les <a href="#" className="terms-link">conditions d'utilisation</a> et la <a href="#" className="terms-link">politique de confidentialité</a>
                  </span>
                </label>
                {errors.acceptTerms && <div className="error-message">{errors.acceptTerms}</div>}
              </div>
            </div>
          )}
        </div>
        
        <div className="onboarding-footer">
          {currentStep > 1 && (
            <button className="btn btn-secondary" onClick={handlePrevious}>
              Précédent
            </button>
          )}
          
          <button className="btn btn-primary" onClick={handleNext}>
            {currentStep < 3 ? 'Suivant' : 'Terminer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
