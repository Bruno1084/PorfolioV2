import React from "react";
import JsonProyects from "./proyects-info.json"
import "./styles.css";

export default function ProyectBox(){


  return(
    <>

        {/* <img src="/proyect-covers/ElBuho-Web-Cover.png" alt="Avatar" className="image"/>
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
        </div> */}

        {JsonProyects.map((proyect) => (
          <div key={proyect.id} className="proyect-box">
            <img src={proyect["Proyect-cover"]} alt={proyect["Proyect-name"]} className="image"/>
            <div className="overlay">
              <div className="text">{proyect["Proyect-name"]}</div>
              <div className="languages-container">
                {proyect["Proyect-technologies"].map((tech, index) => (
                  <div key={index} className="language-box">{tech}</div>
                ))}
              </div>
              <p className="proyect-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consequatur. Lorem ipsum dolor sit amet.</p>
              {proyect["Proyect-repository"] && <a href={proyect["Proyect-repository"]}>Repository</a>}
              {proyect["Proyect-link"] && <a href={proyect["Proyect-link"]}>Page</a>}
            </div>
          </div>
        ))}
    </>
  );
}