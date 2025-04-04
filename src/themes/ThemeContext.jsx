// SRC/ Themes/ ThemeContext.js
import React, { createContext, useState } from 'react';

// Creamos el contexto
export const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');  // El tema inicial es 'light'

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));  // Cambiar entre temas
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}  {/* Los hijos reciben el contexto */}
    </ThemeContext.Provider>
  );
};
