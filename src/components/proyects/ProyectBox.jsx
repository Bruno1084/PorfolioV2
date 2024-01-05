import React from "react";
import JsonProyects from "./proyects-info.json"
import "./styles.css";

export default function ProyectBox(){


  return(
    <>
      <div className="container">
        <img src="/proyect-covers/ElBuho-Web-Cover.png" alt="Avatar" className="image"/>
        <div className="overlay">
          <div className="text">ElBuho Web</div>
          <div className="languages-container">
            <div className="language-box">HTML</div>
            <div className="language-box">CSS</div>
            <div className="language-box">Javascript</div>
          </div>
          <p className="proyect-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consequatur. Lorem ipsum dolor sit amet.</p>
          <a href="#">Repository</a>
          <a href="#">Page</a>

        </div>
      </div>
    </>
  );
}