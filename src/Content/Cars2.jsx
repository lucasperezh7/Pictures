import React from "react";
import "../Styles/Style.css";
import image1 from "../images/Cars/1.jpeg";
import image2 from "../images/Cars/2.jpeg";
import image3 from "../images/Cars/3.jpeg";
import image4 from "../images/Cars/4.jpeg";
import image5 from "../images/Cars/5.jpeg";
import image6 from "../images/Cars/6.jpeg";
import image7 from "../images/Cars/7.jpeg";
import image8 from "../images/Cars/8.jpeg";
import image9 from "../images/Cars/9.jpeg";
import image10 from "../images/Cars/10.jpeg";
import image11 from "../images/Cars/11.jpeg";
import image12 from "../images/Cars/12.jpeg";
import image13 from "../images/Cars/13.jpeg";
import image14 from "../images/Cars/14.jpeg";
import image15 from "../images/Cars/15.jpeg";
import image16 from "../images/Cars/16.jpeg";
import image17 from "../images/Cars/17.jpeg";
import image18 from "../images/Cars/18.jpeg";
import image19 from "../images/Cars/19.jpeg";
import image20 from "../images/Cars/20.jpeg";
import image21 from "../images/Cars/21.jpeg";
import image22 from "../images/Cars/22.jpeg";
import image23 from "../images/Cars/23.jpeg";
import image24 from "../images/Cars/24.jpeg";
import CarsImage from "./Cars";
const Cars = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
  ];

  return (
    <div
      id="Cars"
      className="bg-gradient-to-b from-slate-700 to-slate-600 pr-6 pl-2"
    >
      <div className="">
        {/* Aplicar un margen negativo alrededor de CarsImage */}
        <CarsImage images={images} />
      </div>
    </div>
  );
};

export default Cars;
