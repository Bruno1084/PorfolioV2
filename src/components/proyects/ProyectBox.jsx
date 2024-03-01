import React from "react";
import JsonProyects from "./proyects-info.json"
import "./styles.css";

export default function ProyectBox(){


  return(
    <>
      {JsonProyects.map((proyect) => (
        <div key={proyect.id} className="proyect-box">
          <img src={proyect["Proyect-cover"]} alt={proyect["Proyect-name"]} className="proyect-cover"/>

          <div className="overlay">
            <div className="proyect-tittle">{proyect["Proyect-name"]}</div>
            <div className="languages-container">
              {proyect["Proyect-technologies"].map((tech, index) => (
                <div key={index} className="language-box">{tech}</div>
              ))}
            </div>
            <p className="proyect-description">{proyect["Proyect-description"]}</p>
            {proyect["Proyect-repository"] && <a href={proyect["Proyect-repository"]}>Repository</a>}
            {proyect["Proyect-link"] && <a href={proyect["Proyect-link"]}>Page</a>}
          </div>
        </div>
      ))}
    </>
  );
}