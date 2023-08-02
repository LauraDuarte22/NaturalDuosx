import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./styles/Product.css";

const Product = ({ index, imageName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`selected-image-container ${
        index % 2 === 0 ? "image-container-left" : "image-container-right"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="selected-image image-fluid"
        key={index}
        src={imageName}
        alt={`Producto ${imageName}`}
      />

      {/* Texto que se mostrará al hacer hover */}
      {isHovered && (
        <p className="hover-text w-20">
          {/* <span className="fw-bold">Colágeno Hidrolizado</span> con pulpa de uva y vitaminas enfocadas en la revitalización de tu piel y el fortalecimiento del cabello. */}
          hey
        </p>
      )}
      {isHovered && (
        <div className="background-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="208"
            height="230"
            viewBox="0 0 204 232"
            fill="none"
            style={{ position: "absolute", bottom: 0, left: 0, zIndex: -1 }}
          >
            <rect width="204" height="231.148" rx="31.0266" fill="url(#paint0_linear_403_145433)" />
            <defs>
              <linearGradient id="paint0_linear_403_145433" x1="102.388" y1="29.8631" x2="102" y2="231.148" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.46" />
                <stop offset="1" stopColor="white" stopOpacity="0.04" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Product;
