import { ThemeProvider, ThemeContext } from './themes/ThemeContext';  // Asegúrate de importar correctamente el ThemeProvider y ThemeContext
import RoutesApp from './routes/RoutesApp';  // Tu componente de rutas
import './App.css';  // Estilos CSS

const App = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => {
          // Cambia la clase del body según el tema
          document.body.className = theme;  // Se aplica 'light' o 'dark' al body
          return (
            <div className="App">
              <RoutesApp />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;

