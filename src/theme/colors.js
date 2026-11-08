/**
 * Source unique de vérité pour la palette chromatique
 * Aucune couleur hexadécimale ne doit être codée en dur dans les composants.
 */
export const colors = {
  brand: {
    dark: '#064e3b',       // Émeraude profonde / Académique
    primary: '#047857',    // Vert microbiologie
    accent: '#059669',     // Accent dynamique
    light: '#d1fae5',      // Fond subtil d'accent
    subtle: '#ecfdf5',     // Fond badges positifs
  },
  surface: {
    bg: '#f8fafc',         // Fond principal de page
    card: '#ffffff',       // Fond des cartes et conteneurs
    cardHover: '#f1f5f9',  // Survol des cartes interactives
    border: '#e2e8f0',     // Bordure discrète
    borderHover: '#cbd5e1',// Bordure survol
  },
  text: {
    heading: '#0f172a',    // Titres principaux et emphase
    body: '#334155',       // Corps de texte lisible
    muted: '#64748b',      // Métadonnées et annotations
    inverted: '#ffffff',   // Texte sur fond contrasté
  },
  academic: {
    badgeBg: '#fef3c7',    // Fond doré discret
    badgeBorder: '#fde68a',// Bordure dorée
    badgeText: '#92400e',  // Texte doré noble
  },
  status: {
    success: '#15803d',
    info: '#0284c7',
  }
};

