import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./pages/About/About.jsx";
import Proyects from "./pages/Proyects/Proyects.jsx";
import Header from "./components/Header/Header.jsx";
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
    <I18nextProvider i18n={i18next}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<About />} />
          <Route path="/Proyects" element={<Proyects />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
    </>
  );
}

export default App