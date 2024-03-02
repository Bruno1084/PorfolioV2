import React from "react";
import Header from "../../components/header/Header";
import ProjectBox from "../../components/projects/ProjectBox";
import "./styles.css";

export default function Projects(){

  return(
    <>
      <Header />
      
      <section className="projects--container">
        <ProjectBox />
      </section>
    </>
  );
}