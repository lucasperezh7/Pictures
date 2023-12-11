import React, { useState, useEffect } from "react";
import "../Styles/Style.css";
import Boton from "../images/boton.png";
const BotonSubir = () => {
  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    // Agrega un listener para el evento de scroll
    const handleScroll = () => {
      // Muestra el botón cuando el usuario ha bajado cierta cantidad
      if (window.scrollY > 100) {
        setMostrarBoton(true);
      } else {
        setMostrarBoton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Renderiza el botón siempre, pero usa la clase condicionalmente
    <button
      className={`boton-subir ${mostrarBoton ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <img src={Boton} alt="" />
    </button>
  );
};

export default BotonSubir;
