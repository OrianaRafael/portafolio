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
  }

  html {
    scroll-behavior: smooth;
  }

  ::selection {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.body};
  }
`;