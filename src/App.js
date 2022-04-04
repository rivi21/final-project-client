import { useCredentials } from './hooks/useCredentials';
import Login from "./pages/Login";
import { LanguageProvider } from "./context/LanguageContext";
import { DataProvider } from './context/DataContext';
import Router from "./Router";
import './App.css';

export default function App() {

  const { token, setToken, clearToken, email, setEmail } = useCredentials();

  if (!token) {

    return <Login setToken={setToken} email={email} setEmail={setEmail} />

  } else {
    return (
      <div className="App">
        <LanguageProvider>
          <DataProvider >
            <Router clearToken={clearToken} />
          </DataProvider>
        </LanguageProvider>
      </div>
    );
  }

}
