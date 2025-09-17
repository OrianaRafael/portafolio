export const lightTheme = {
  // Colores principales de tu paleta
  primary: '#8a9eca',       // 500
  secondary: '#9fb4d6',     // 400
  accent: '#7283b9',        // 600
  tertiary: '#606ea2',      // 700
  
  // Colores de fondo y texto
  body: '#f3f6fa',          // 50 - fondo claro
  card: '#FFFFFF',          // Blanco para tarjetas
  text: '#454f6a',          // 900 - texto principal
  textSecondary: '#505c83', // 800 - texto secundario
  
  // Colores adicionales
  success: '#282c3e',       // 950 - verde (ajusté el código)
  warning: '#bdcfe4',       // 300 - para advertencias
  error: '#7283b9',         // 600 - para errores
  
  // Utilidades
  shadow: 'rgba(108, 61, 48, 0.1)', // 900 con opacidad
  border: 'rgba(206, 125, 103, 0.2)', // primary con opacidad
  overlay: 'rgba(252, 246, 244, 0.9)' // 50 con opacidad
}

export const darkTheme = {
  // Colores principales (mismos que light)
  primary: '#8a9eca',       // 500
  secondary: '#9fb4d6',     // 400
  accent: '#7283b9',        // 600
  tertiary: '#606ea2',      // 700
  
  // Colores de fondo y texto invertidos para dark
  body: '#454f6a',          // 900 - fondo oscuro
  card: '#505c83',          // 800 - tarjetas oscuras
  text: '#e9f0f6',          // 100 - texto claro
  textSecondary: '#d6e2ef', // 200 - texto secundario claro
  
  // Colores adicionales
  success: '#282c3e',       // 950
  warning: '#bdcfe4',       // 300
  error: '#7283b9',         // 600
  
  // Utilidades
  shadow: 'rgba(249, 232, 231, 0.1)', // 100 con opacidad
  border: 'rgba(206, 125, 103, 0.3)', // primary con opacidad
  overlay: 'rgba(108, 61, 48, 0.9)'   // 900 con opacidad
}

// Función para inyectar variables CSS (opcional)
export const injectThemeVariables = (theme) => {
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
};