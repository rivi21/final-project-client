/* import React, { useState } from "react"; */
import Router from "./Router";
import Footer from "./components/Footer";
import './App.css';
import { LanguageProvider } from "./context/LanguageContext";

function App() {


  return (
    <div className="App">
      <LanguageProvider>
        <Router />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
