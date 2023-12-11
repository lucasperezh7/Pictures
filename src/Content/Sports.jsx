import React from "react";

const SportsImage = ({ images }) => {
  return (
    <div className="space-x-2 space-y-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-full h-auto object-contain rounded-lg"
        />
      ))}
    </div>
  );
};

export default SportsImage;
