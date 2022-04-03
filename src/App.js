import { useState } from 'react';
import { useToken } from './hooks/useToken';
import Login from "./pages/Login";
import { LanguageProvider } from "./context/LanguageContext";
import { DataProvider } from './context/DataContext';
import Router from "./Router";
import './App.css';
 
export default function App() {

  const { token, setToken } = useToken();

  const [userEmail, setUserEmail] = useState("");

  if (!token) {
    return (
      <LanguageProvider>
        <Login
          setToken={setToken}
          setUserEmail={setUserEmail} />
      </LanguageProvider>
    )
  } else {
    return (
      <div className="App">
        <LanguageProvider>
          <DataProvider userEmail={userEmail}>
            <Router setToken={setToken} userEmail={userEmail} />
          </DataProvider>
        </LanguageProvider>
      </div>
    );
  }

}
