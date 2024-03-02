import React from "react";
import JsonProyects from "./projects-info.json"
import "./styles.css";

export default function ProjectBox(){


  return(
    <>
      {JsonProyects.map((project) => (
        <div key={project.id} className="project-box">
          <img src={project["Project-cover"]} alt={project["Project-name"]} className="project-cover"/>

          <div className="overlay">
            <div className="project-tittle">{project["Project-name"]}</div>
            <div className="languages-container">
              {project["Project-technologies"].map((tech, index) => (
                <div key={index} className="language-box">{tech}</div>
              ))}
            </div>
            <p className="project-description">{project["Project-description"]}</p>
            {project["Project-repository"] && <a href={project["Project-repository"]}>Repository</a>}
            {project["Project-link"] && <a href={project["Project-link"]}>Page</a>}
          </div>
        </div>
      ))}
    </>
  );
}