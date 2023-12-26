import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles.css";


export default function Header(){
  const [t, i18n] = useTranslation();


  return(
    <header className="header">
      {/* <a className="button-56" href="/">{t('Header.About')}</a> */}
      <Link className="button-56" to={"/"}>{t('Header.About')}</Link>

      {/* <a className="button-56" href="/Proyects">{t('Header.Proyects')}</a> */}
      <Link className="button-56" to={"proyects"}>{t('Header.Proyects')}</Link>
    </header>
  );
}