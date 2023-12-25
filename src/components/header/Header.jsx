import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";


export default function Header(){
  const [t, i18n] = useTranslation();


  return(
    <header className="header">
      <a className="button-56" href="/">{t('Header.About')}</a>
      <a className="button-56" href="/Proyects">{t('Header.Proyects')}</a>
    </header>
  );
}