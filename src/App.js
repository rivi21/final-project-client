import { useState } from 'react';
import Login from "./pages/Login";
import { LanguageProvider } from "./context/LanguageContext";
import Router from "./Router";
import './App.css';
import Dashboard from './pages/Dashboard';


export default function App() {
  const [token, setToken] = useState("");
  
  if (!token) {
    return (
      <LanguageProvider>
        <Login setToken={setToken} />
      </LanguageProvider>
    )
  }

  /* if (isLogged) {
    return (
      <div className="App">
        <LanguageProvider>
          <Router />
        </LanguageProvider>
      </div>
    )
  } else {
    return(
    <>
      <Login />
    </>)
  } */

  return (
    <div className="App">
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </div>
  );
}
