import React from "react";
import Header from "../../components/header/Header";
import ProyectBox from "../../components/proyects/ProyectBox";
import "./styles.css";

export default function Projects(){

  return(
    <>
      <Header />
      
      <section className="projects--container">

        <ProyectBox />
      </section>
    </>
  );
}