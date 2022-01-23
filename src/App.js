
import { LanguageProvider } from "./context/LanguageContext";
import Router from "./Router";
import './App.css';


function App() {

  return (
    <div className="App">
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </div>
  );
}

export default App;
