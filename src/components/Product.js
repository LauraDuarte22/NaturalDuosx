import React from "react";
import "./styles/Product.css"

const Product = ({ index, imageName }) => {
  return (
    <img
      className={`selected-image ${index % 2 === 0 ? 'image-container-left' : 'image-container-right'}`}
      width={150}
      key={index}
      src={imageName}
      alt={`Producto ${imageName}`}
    />
  );
};

export default Product;
