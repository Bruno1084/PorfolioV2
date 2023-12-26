import React from "react";
import Header from "../../components/header/Header";
import "./styles.css";

export default function Proyects(){

  return(
    <>
      <Header />
      
      <section className="proyects--container">
        <div className="proyect-box">
          <a href="#">El Buho Web</a>
        </div>
        <div className="proyect-box">
          <a href="#">Platzi Travel</a>
        </div>
        <div className="proyect-box">
          <a href="#">Concesionaria</a>
        </div>
        <div className="proyect-box">
          <a href="#">Porfolio</a>
        </div>
      </section>
    </>
  );
}