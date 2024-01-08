import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

export default function Introduction() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bento-introduction">
      <h1>{t('Presentation.Tittle')}</h1>
      <p>{t('Presentation.Description')}</p>
      <h3>{t('Education.Tittle')}</h3>
      {t('Education.Description', { returnObjects: true }).map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
