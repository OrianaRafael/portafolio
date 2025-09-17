import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    transition: all 0.3s ease;
    overflow-x: hidden;
    position: relative;
    line-height: 1.6;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, ${props => props.theme.primary}15 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${props => props.theme.secondary}15 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }

  html {
    scroll-behavior: smooth;
  }

  ::selection {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.body};
  }

  /* Mejoras de accesibilidad */
  a {
    color: ${props => props.theme.primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.accent};
    }
  }

  /* Mejora de contraste para textos */
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.text};
    font-weight: 700;
  }

  /* Scrollbar personalizado */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.body};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};
    border-radius: 4px;
    
    &:hover {
      background: ${props => props.theme.accent};
    }
  }
`;