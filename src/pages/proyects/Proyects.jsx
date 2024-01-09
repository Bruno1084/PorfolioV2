import React from "react";
import Header from "../../components/header/Header";
import ProyectBox from "../../components/proyects/ProyectBox";
import "./styles.css";

export default function Proyects(){

  return(
    <>
      <Header />
      
      <section className="proyects--container">

        <ProyectBox />
      </section>
    </>
  );
}