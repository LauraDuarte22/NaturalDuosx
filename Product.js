import React, { useState } from "react";
import "./styles/Product.css";
const Product = (imageUrl) => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };
  console.log(imageUrl)

  return (
    <div className="container-fluid position-relative">
      <img
        src={imageUrl}
        className="image-product"
        onMouseEnter={handleMouseEnter}
        alt="Producto"
      />
      {/* {showText && (
        <div className="position-absolute start-0 bottom-0">
          <p className="description">
            La <span className="fw-bold">vitamina C + Zinc</span>, es la vitamina de todos los días que
            contribuye a fortalecer tu defensas y tu sistema inmunolófico.
            Reduce el riesgo de contraer enfermedades
          </p>
        </div>
      )} */}
    </div>
  );
};

export default Product;
