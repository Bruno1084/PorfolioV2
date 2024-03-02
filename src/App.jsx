import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from "./pages/about/About.jsx"
import Projects from "./pages/proyects/Proyects";
import global_en from "./languages/en/translation.json";
import global_es from "./languages/es/translation.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import "./App.css";

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources:{
    en: {translation: global_en},
    es: {translation: global_es}
  }
});


function App() {

  return (
    <>
    <div className="noise"></div>
    <I18nextProvider i18n={i18next}>
      <HashRouter>
          <Routes>
            <Route exact path="/" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
          </Routes>
      </HashRouter>
    </I18nextProvider>
    </>
  );
}

export default App