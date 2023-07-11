import React, { useState } from 'react';
// import Product from './Product';
import './styles/ImageHighlight.css';


function ImageHighlight({ x, y, width, height,imgName }) {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  const style = {
    top: y,
    left: x,
    width: width,
    height: height,
    imgName:imgName
  };
  console.log(style)
  return (
    <div
      // className={`image-highlight ${showComponent ? 'active' : ''}`}
      // style={style}
      // onClick={handleClick}
    >
    {/* {showComponent && <Product imageUrl={"../assets/Productos/Colageno-min.png"} />} */}
hey
    </div>
  );
}

export default ImageHighlight;
