// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './themes/ThemeContext';  // Importa el ThemeProvider
import App from './App.jsx';  // Tu componente principal
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>  {/* Envuelve todo en ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



