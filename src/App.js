import { useState } from 'react';
import Login from "./pages/Login";
import { LanguageProvider } from "./context/LanguageContext";
import { DataProvider } from './context/DataContext';
import Router from "./Router";
import './App.css';


export default function App() {
  const [token, setToken] = useState("");


  if (!token) {
    return (
      <LanguageProvider>
        <Login setToken={setToken} />
      </LanguageProvider>
    )
  } else {
    return (
      <div className="App">
        <LanguageProvider>
          <DataProvider>
            <Router />
          </DataProvider>
        </LanguageProvider>
      </div>
    );
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


}
