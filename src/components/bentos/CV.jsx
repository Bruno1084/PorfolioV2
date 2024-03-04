import React from "react";
import { useTranslation } from "react-i18next";


export default function CV(){
  const { t, i18n } = useTranslation();

  return(
    <div className="bento-cv">
      <svg className="bento-link-svg" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
      </svg>

      <p>CV</p>
      <span>{t('CV')}</span>
    </div>
  );
}