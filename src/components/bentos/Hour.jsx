import React, { useState, useEffect } from "react";

export default function Hour(){
  const [hora, setHora] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fecha = new Date();
      const opciones = { timeZone: 'America/Argentina/Buenos_Aires', hour: 'numeric', minute: 'numeric' };
      setHora(fecha.toLocaleString('es-AR', opciones));
    }, 2000); // Actualiza cada segundo

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bento-hour">
      <p>{ hora }</p>
      <span>Argentina</span>
    </div>
  );
}