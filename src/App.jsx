import { ThemeProvider } from "./Components/Context/ThemeContext";
import { LanguageProvider } from "./Components/Context/LanguageContext";
import "./App.css";
import Container from "./Components/Container";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <Container />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
