import React from "react";
import "../Styles/Style.css";
import image1 from "../images/Nature/1.jpeg";
import image2 from "../images/Nature/2.jpeg";
import image3 from "../images/Nature/3.jpeg";
import image4 from "../images/Nature/4.jpeg";
import image5 from "../images/Nature/5.jpeg";
import image6 from "../images/Nature/6.jpeg";
import image7 from "../images/Nature/7.jpeg";
import image8 from "../images/Nature/8.jpeg";
import image9 from "../images/Nature/9.jpeg";
import image10 from "../images/Nature/10.jpeg";
import image11 from "../images/Nature/11.jpeg";
import image12 from "../images/Nature/12.jpeg";
import image13 from "../images/Nature/13.jpeg";
import image14 from "../images/Nature/14.jpeg";
import image15 from "../images/Nature/15.jpeg";
import image16 from "../images/Nature/16.jpeg";
import image17 from "../images/Nature/17.jpeg";
import image18 from "../images/Nature/18.jpeg";
import image19 from "../images/Nature/19.jpeg";
import image20 from "../images/Nature/20.jpeg";
import image21 from "../images/Nature/21.jpeg";
import image22 from "../images/Nature/22.jpeg";
import image23 from "../images/Nature/23.jpeg";
import image24 from "../images/Nature/24.jpeg";
import image25 from "../images/Nature/25.jpeg";
import image26 from "../images/Nature/26.jpeg";
import image27 from "../images/Nature/27.jpeg";
import image28 from "../images/Nature/28.jpeg";
import image29 from "../images/Nature/29.jpeg";
import image30 from "../images/Nature/30.jpeg";
import image31 from "../images/Nature/31.jpeg";
import image32 from "../images/Nature/32.jpeg";
import image33 from "../images/Nature/33.jpeg";
import NatureImage from "./Nature";
const Nature = () => {
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
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
  ];

  return (
    <div
      id="Nature"
      className="bg-gradient-to-b from-slate-900 to-slate-800 pr-6 pl-2"
    >
      <div className="">
        {/* Aplicar un margen negativo alrededor de CarsImage */}
        <NatureImage images={images} />
      </div>
    </div>
  );
};

export default Nature;
