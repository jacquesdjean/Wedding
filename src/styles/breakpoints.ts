export const breakpoints = {
  mobile: '320px',    // Base - no query needed
  tablet: '768px',    // min-width: 768px
  desktop: '1024px',  // min-width: 1024px
  wide: '1440px',     // min-width: 1440px
};

export const media = {
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
  wide: `@media (min-width: ${breakpoints.wide})`,
};

// Mobile-first type scale
export const typography = {
  h1: {
    mobile: '2rem',      // 32px
    tablet: '2.5rem',    // 40px
    desktop: '3.5rem',   // 56px
  },
  h2: {
    mobile: '1.5rem',    // 24px
    tablet: '1.75rem',   // 28px
    desktop: '2.25rem',  // 36px
  },
  h3: {
    mobile: '1.25rem',   // 20px
    tablet: '1.375rem',  // 22px
    desktop: '1.5rem',   // 24px
  },
  body: {
    mobile: '1rem',      // 16px - never smaller
    tablet: '1rem',
    desktop: '1.125rem', // 18px
  },
  small: {
    mobile: '0.875rem',  // 14px - minimum readable
    tablet: '0.875rem',
    desktop: '1rem',
  },
};

// Mobile-first spacing
export const spacing = {
  section: {
    mobile: '3rem',      // 48px vertical padding
    tablet: '4rem',      // 64px
    desktop: '6rem',     // 96px
  },
  container: {
    mobile: '1rem',      // 16px horizontal padding
    tablet: '2rem',      // 32px
    desktop: '4rem',     // 64px
  },
};
