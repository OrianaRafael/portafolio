import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext'; // ✅ Agregar useTheme aquí
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import ThemeToggle from './components/ThemeToggle';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

// Necesitamos crear un componente interno que use el hook
const AppContent = () => {
  const { isDarkMode } = useTheme(); // ✅ Ahora sí está definido
  
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <ThemeToggle />
        <h1>Mi Portfolio</h1>
        <p>Bienvenido a mi portfolio profesional</p>
      </Container>
    </ThemeProvider>
  );
};

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;