import React from "react";
import i18next from "i18next";
import "./styles.css";


export default function ChangeLanguage(){
  localStorage.setItem("language", i18next.language);

  const handleChangeLanguage =()=> {
    if(i18next.language === 'en'){
      i18next.changeLanguage('es')
      localStorage.setItem('language', 'es')
    }
    else{
      i18next.changeLanguage('en');
      localStorage.setItem('language', 'en')
    }
  };
  

  return(
    <div className="languageIcon">
      <span className="languageSwitch" onClick={handleChangeLanguage}>
        <input type="checkbox" className="languageSwitcher" />
        <label htmlFor="languageSwitcher"></label>
      </span>
    </div>
  );
}



