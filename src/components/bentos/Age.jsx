import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";


export default function Age(){
  const { t, i18n } = useTranslation();

  return(
    <div className="bento-age">
      <span>{t('Age.0')}</span>
      <p>20</p>
      <span>{t('Age.1')}</span>
    </div>
  );
}