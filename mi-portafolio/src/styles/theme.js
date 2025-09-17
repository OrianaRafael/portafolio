export const lightTheme = {
  // Colores principales de tu paleta
  primary: '#CE7D67',       // 500
  secondary: '#DE9DBB',     // 400
  accent: '#BB61AA',        // 600
  tertiary: '#9AAF3B',      // 700
  
  // Colores de fondo y texto
  body: '#FCF6F4',          // 50 - fondo claro
  card: '#FFFFFF',          // Blanco para tarjetas
  text: '#6C3D30',          // 900 - texto principal
  textSecondary: '#804434', // 800 - texto secundario
  
  // Colores adicionales
  success: '#39ID16',       // 950 - verde (ajusté el código)
  warning: '#EBC1B6',       // 300 - para advertencias
  error: '#BB61AA',         // 600 - para errores
  
  // Utilidades
  shadow: 'rgba(108, 61, 48, 0.1)', // 900 con opacidad
  border: 'rgba(206, 125, 103, 0.2)', // primary con opacidad
  overlay: 'rgba(252, 246, 244, 0.9)' // 50 con opacidad
}

export const darkTheme = {
  // Colores principales (mismos que light)
  primary: '#CE7D67',       // 500
  secondary: '#DE9DBB',     // 400
  accent: '#BB61AA',        // 600
  tertiary: '#9AAF3B',      // 700
  
  // Colores de fondo y texto invertidos para dark
  body: '#6C3D30',          // 900 - fondo oscuro
  card: '#804434',          // 800 - tarjetas oscuras
  text: '#F9E8E7',          // 100 - texto claro
  textSecondary: '#F4DBD4', // 200 - texto secundario claro
  
  // Colores adicionales
  success: '#39ID16',       // 950
  warning: '#EBC1B6',       // 300
  error: '#BB61AA',         // 600
  
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