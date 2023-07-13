import React, { useState, useEffect } from "react";
import "./styles/Product.css";

const Product = ({ imageUrl }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
    return () => {
      setShowText(false);
    };
  }, [imageUrl]);

  return (
    <div className="container-fluid position-relative">
      <img
        src={imageUrl}
        className="image-product"
        alt="Producto"
        width={900}
      />
      {/* {showText && (
        <div className="position-absolute start-0 bottom-0">
          <p className="description">
            La <span className="fw-bold">vitamina C + Zinc</span>, es la vitamina de todos los días que
            contribuye a fortalecer tus defensas y tu sistema inmunológico.
            Reduce el riesgo de contraer enfermedades.
          </p>
        </div>
      )} */}
    </div>
  );
};

export default Product;
