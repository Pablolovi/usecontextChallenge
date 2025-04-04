// SRC/ components/ Button.jsx      
import { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";

const Button = () => {
  const { toggleTheme } = useContext(ThemeContext);  // Acceder al contexto y obtener toggleTheme
  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      Change Theme
    </button>
  );
};

export default Button;
