import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.charcoal};
    background-color: ${({ theme }) => theme.colors.offWhite};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* Safe area padding for notched devices */
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    /* Prevent horizontal overflow */
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.darkCharcoal};
  }

  /* Mobile-first typography - base styles are mobile */
  h1 {
    font-size: ${({ theme }) => theme.typography.h1.mobile};

    ${({ theme }) => theme.media.tablet} {
      font-size: ${({ theme }) => theme.typography.h1.tablet};
    }

    ${({ theme }) => theme.media.desktop} {
      font-size: ${({ theme }) => theme.typography.h1.desktop};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.h2.mobile};

    ${({ theme }) => theme.media.tablet} {
      font-size: ${({ theme }) => theme.typography.h2.tablet};
    }

    ${({ theme }) => theme.media.desktop} {
      font-size: ${({ theme }) => theme.typography.h2.desktop};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.h3.mobile};

    ${({ theme }) => theme.media.tablet} {
      font-size: ${({ theme }) => theme.typography.h3.tablet};
    }

    ${({ theme }) => theme.media.desktop} {
      font-size: ${({ theme }) => theme.typography.h3.desktop};
    }
  }

  p {
    font-size: ${({ theme }) => theme.typography.body.mobile};
    margin-bottom: ${({ theme }) => theme.spacing.md};

    &:last-child {
      margin-bottom: 0;
    }

    ${({ theme }) => theme.media.desktop} {
      font-size: ${({ theme }) => theme.typography.body.desktop};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.sage};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    /* Remove tap highlight on mobile */
    -webkit-tap-highlight-color: transparent;

    &:active {
      color: ${({ theme }) => theme.colors.sageDark};
    }

    /* Only apply hover on devices that support it */
    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.gold};
      }
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    /* Remove tap highlight */
    -webkit-tap-highlight-color: transparent;
    /* Minimum touch target */
    min-height: ${({ theme }) => theme.touch.minTarget};
  }

  ul, ol {
    list-style: none;
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.sage};
    outline-offset: 2px;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.lightSage};
    color: ${({ theme }) => theme.colors.darkCharcoal};
  }

  /* Utility class for visually hidden but accessible text */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
