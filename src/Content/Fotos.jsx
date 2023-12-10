import React from "react";
import Foto1 from "../images/1.jpeg";
import Foto2 from "../images/2.jpeg";
import Foto3 from "../images/3.jpeg";
import Foto4 from "../images/4.jpeg";
import Foto5 from "../images/5.jpeg";
import Foto6 from "../images/6.jpeg";
import Foto7 from "../images/7.jpeg";
import Foto8 from "../images/8.jpeg";
import Foto9 from "../images/9.jpeg";
import Foto10 from "../images/10.jpeg";
import Foto11 from "../images/11.jpeg";
import Foto12 from "../images/12.jpeg";
import Foto13 from "../images/13.jpeg";

const Fotos = () => {
  return (
    <>
      <div className="pr-24 pl-24 pt-14">
        <div className="flex flex-wrap -mx-3">
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6 ">
            <img
              src={Foto1}
              alt="Descripción de la imagen"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto2}
              alt="Descripción de la imagen"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto3}
              alt="Descripción de la imagen"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto4}
              alt="Descripción de la imagen"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto5}
              alt="Descripción de la imagen"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto6}
              alt="Descripción de la imagen"
              className="w-auto h-64 object-cover"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto7}
              alt="Descripción de la imagen"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto8}
              alt="Descripción de la imagen"
              className="w-full h-64 object-cover"
              style={{
                marginTop: "-60px",
                marginLeft: "",
              }}
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto9}
              alt="Descripción de la imagen"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto10}
              alt="Descripción de la imagen"
              className="w-full h-64 object-cover"
              style={{
                marginTop: "-30px",
                marginLeft: "",
              }}
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 mb-6">
            <img
              src={Foto11}
              alt="Descripción de la imagen"
              className="w-full h-64 object-cover"
            />
          </div>
          <div class="grid grid-flow-col auto-cols-max">
            <div>01</div>
            <div>02</div>
            <div>03</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotos;
