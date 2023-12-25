import React from "react";
import { Age, Contact, English, Github, Hour, Introduction, LinkedIn, MapCanvas, Stack, ChangeLanguage } from "../../components/Bentos/index"
import "./styles.css";


export default function About(){

  return(
    <section className="bento--container">
      <div className="bento-box bento-1">
        <Hour />
      </div>
      
      <div className="bento-box bento-2">
        <Age />
      </div>

      <a href="https://github.com/Bruno1084" className="bento-box bento-3 bento-link">
        <Github />
      </a>

      <div className="bento-box bento-4">
        <ChangeLanguage />
      </div>

      <div className="bento-box bento-5">
        <MapCanvas />
      </div>

      <div className="bento-box bento-6">
        <Introduction />
      </div>

      <a href="https://www.linkedin.com/in/bruno-sosa-ba2124243/" target="_blank" className="bento-box bento-7 bento-link">
        <LinkedIn />
      </a>

      <div className="bento-box bento-8">
        <Stack />
      </div>

      <a href="https://www.efset.org/cert/SRtQ8s" target="_blank" className="bento-box bento-9 bento-link">
        <English />
      </a>

      <div className="bento-box bento-10">
        <img src="./coding.gif" alt="" />
      </div>

      <div className="bento-box bento-11 bento-link">
        <Contact />
      </div>
    </section>
  );
}