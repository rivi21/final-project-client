import { useState } from 'react';
import Login from "./pages/Login";
import { LanguageProvider } from "./context/LanguageContext";
import { DataProvider } from './context/DataContext';
import Router from "./Router";
import './App.css';


export default function App() {

  const [token, setToken] = useState();
  const [agentEmail, setAgentEmail] = useState("");

  if (!token) {
    return (
      <LanguageProvider>
        <Login
          setToken={setToken}
          setAgentEmail={setAgentEmail} />
      </LanguageProvider>
    )
  } else {
    return (
      <div className="App">
        <LanguageProvider>
          <DataProvider token={token} agentEmail={agentEmail}>
            <Router setToken={setToken} agentEmail={agentEmail} />
          </DataProvider>
        </LanguageProvider>
      </div>
    );
  }

}
