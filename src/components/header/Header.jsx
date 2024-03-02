import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles.css";


export default function Header(){
  const [t, i18n] = useTranslation();


  return(
    <header className="header">
      <Link className="button-56" to={"/"}>{t('Header.About')}</Link>
      <Link className="button-56" to={"/projects"}>{t('Header.Projects')}</Link>
    </header>
  );
}