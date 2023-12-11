import React from "react";
import "../Styles/Style.css";
import image1 from "../images/Sports/1.jpeg";
import image2 from "../images/Sports/2.jpeg";
import image3 from "../images/Sports/3.jpeg";
import image4 from "../images/Sports/4.jpeg";
import image5 from "../images/Sports/5.jpeg";
import image6 from "../images/Sports/6.jpeg";
import image7 from "../images/Sports/7.jpeg";
import image8 from "../images/Sports/8.jpeg";
import image9 from "../images/Sports/9.jpeg";
import image10 from "../images/Sports/10.jpeg";
import image11 from "../images/Sports/11.jpeg";
import image12 from "../images/Sports/12.jpeg";
import image13 from "../images/Sports/13.jpeg";
import image14 from "../images/Sports/14.jpeg";
import image15 from "../images/Sports/15.jpeg";
import image16 from "../images/Sports/16.jpeg";
import image17 from "../images/Sports/17.jpeg";
import image18 from "../images/Sports/18.jpeg";
import image19 from "../images/Sports/19.jpeg";
import image20 from "../images/Sports/20.jpeg";
import image21 from "../images/Sports/21.jpeg";
import image23 from "../images/Sports/23.jpeg";
import image24 from "../images/Sports/24.jpeg";
import image25 from "../images/Sports/25.jpeg";
import image26 from "../images/Sports/26.jpeg";
import image27 from "../images/Sports/27.jpeg";
import image28 from "../images/Sports/28.jpeg";
import image29 from "../images/Sports/29.jpeg";
import image30 from "../images/Sports/30.jpeg";
import image31 from "../images/Sports/31.jpeg";
import image32 from "../images/Sports/32.jpeg";
import image33 from "../images/Sports/33.jpeg";
import SportsImage from "../Content/Sports";

const Sports = () => {
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
      id="Sports"
      className="bg-gradient-to-b from-slate-500 to-slate-400 pr-6 pl-2"
    >
      <div className="">
        {/* Aplicar un margen negativo alrededor de CarsImage */}
        <SportsImage images={images} />
      </div>
    </div>
  );
};

export default Sports;
