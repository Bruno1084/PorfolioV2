import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./pages/about/About.jsx"
import Proyects from "./pages/proyects/Proyects";
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
      <BrowserRouter>
        <Routes path="/" index>
          <Route path="/" element={<About />} />
          <Route path="/proyects" element={<Proyects />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
    </>
  );
}

export default App