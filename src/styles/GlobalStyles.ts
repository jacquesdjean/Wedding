import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Lato:wght@300;400;700&display=swap');

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

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 18px;
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
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.darkCharcoal};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes['5xl']};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes['6xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.sage};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.gold};
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
  }

  ul, ol {
    list-style: none;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.lightSage};
    color: ${({ theme }) => theme.colors.darkCharcoal};
  }
`;
