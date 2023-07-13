import React, { useState, useEffect } from "react";
import Product from "./Product";
import colageno from "../assets/Productos/Colageno-min.png";
import "./styles/ImageHighlight.css";

function ImageHighlight({ x, y, width, height, imageUrl,activeProductIndex }) {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);

  };

  useEffect(() => {
    setShowComponent(false);
  }, [x, y]);

  const style = {
    top: y,
    left: x,
    width: width,
    height: height,
    activeProductIndex:activeProductIndex
  };
  return (
    <div
      className={`image-highlight ${showComponent ? "active" : ""}`}
      style={style}
      onClick={handleClick}
    >
      {showComponent && <Product imageUrl={colageno} />}
    </div>
  );
}


export default ImageHighlight;
