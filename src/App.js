import { useState, useEffect } from 'react';
import Login from "./pages/Login";
import { LanguageProvider } from "./context/LanguageContext";
import { DataProvider } from './context/DataContext';
import Router from "./Router";
import './App.css';


export default function App() {

  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
  },[])

  if (!token) {
    return (
      <LanguageProvider>
        <Login
          setToken={setToken}
          userEmail={userEmail}
          setUserEmail={setUserEmail} />
      </LanguageProvider>
    )
  } else {
    return (
      <div className="App">
        <LanguageProvider>
          <DataProvider userEmail={userEmail} token={token}>
            <Router token={token} userEmail={userEmail} />
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
