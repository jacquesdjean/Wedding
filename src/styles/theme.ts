import { media, typography, spacing as responsiveSpacing } from './breakpoints';

export const theme = {
  colors: {
    white: '#FFFFFF',
    offWhite: '#FAF9F7',
    cream: '#F5F3EF',
    sand: '#E8E0D5',
    warmSand: '#D4C8B8',
    sage: '#9CAF88',
    sageDark: '#7A9168',
    mutedSage: '#B8C4A8',
    lightSage: '#E8EDE4',
    gold: '#C9A962',
    mutedGold: '#D4BE82',
    lightGold: '#F5EED9',
    charcoal: '#3D3D3D',
    darkCharcoal: '#2A2A2A',
    mediumGray: '#6B6B6B',
    lightGray: '#9A9A9A',
    overlay: 'rgba(0, 0, 0, 0.4)',
    overlayLight: 'rgba(0, 0, 0, 0.2)',
  },
  fonts: {
    heading: "'Cormorant Garamond', 'Georgia', serif",
    body: "'Inter', 'Helvetica Neue', sans-serif",
  },
  // Mobile-first font sizes (base values)
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px - minimum readable
    base: '1rem',      // 16px - never smaller for body
    md: '1.125rem',    // 18px
    lg: '1.25rem',     // 20px
    xl: '1.5rem',      // 24px
    '2xl': '2rem',     // 32px
    '3xl': '2.5rem',   // 40px
    '4xl': '3rem',     // 48px
    '5xl': '3.5rem',   // 56px
  },
  // Responsive typography (mobile-first)
  typography,
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
  },
  // Mobile-first spacing
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },
  // Responsive spacing
  responsiveSpacing,
  // Media query helpers
  media,
  maxWidth: {
    mobile: '100%',
    tablet: '720px',
    desktop: '960px',
    wide: '1200px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 2px 8px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  },
  transitions: {
    fast: '150ms ease',
    normal: '200ms ease',
    slow: '300ms ease',
  },
  // Touch-friendly minimum sizes
  touch: {
    minTarget: '44px',
    minButton: '48px',
  },
};

export type Theme = typeof theme;
