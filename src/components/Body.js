import React, { useState } from "react";
import { Container } from "react-bootstrap";
import image from "../assets/Body.png";
import colageno from "../assets/Productos/Colageno-min.png";
import vitamina_c from "../assets/Productos/Vitamina C-min.png";
import vitamina_d from "../assets/Productos/Vitaday Sure-min.png";
import Product from "./Product";
import "./styles/Body.css";

const BodyComponent = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const pointsData = [
    {
      id: 1,
      link: [1, 4],
      x: 675,
      y: 185,
      imgName: [colageno],
    },
    {
      id: 2,
      link: [2, 3],
      x: 695,
      y: 185,
      imgName: [vitamina_c, vitamina_d],
    },
    {
      id: 3,
      link: [2, 3],
      x: 675,
      y: 205,
      imgName: [vitamina_c, vitamina_d],
    },
    {
      id: 4,
      link: [1, 4],
      x: 640,
      y: 245,
      imgName: [colageno],
    },
    {
      id: 5,
      link: [5],
      x: 680,
      y: 280,
      imgName: ["capsula"],
    },
    {
      id: 6,
      link: [6],
      x: 690,
      y: 315,
      imgName: ["aloeVera"],
    },
    {
      id: 7,
      link: [7, 9, 15],
      x: 735,
      y: 325,
      imgName: [colageno, "gel"],
    },
    {
      id: 8,
      link: [8],
      x: 750,
      y: 425,
      imgName: ["fibra"],
    },
    {
      id: 9,
      link: [7, 9, 15],
      x: 675,
      y: 390,
      imgName: [colageno, "gel"],
    },
    {
      id: 10,
      link: [10],
      x: 675,
      y: 402,
      imgName: ["duoprox", "uronex"],
    },
    {
      id: 11,
      link: [11],
      x: 675,
      y: 415,
      imgName: ["duoprox"],
    },
    {
      id: 12,
      link: [12],
      x: 715,
      y: 425,
      imgName: ["duoprox"],
    },
    {
      id: 13,
      link: [13],
      x: 645,
      y: 480,
      imgName: [colageno, vitamina_d, "gel"],
    },
    {
      id: 15,
      link: [7, 9, 15],
      x: 635,
      y: 515,
      imgName: [colageno, "gel"],
    },
    {
      id: 16,
      link: [16, 17],
      x: 655,
      y: 515,
      imgName: [colageno, "duo"],
    },
  ];

  const handlePointClick = (pointId) => {
    setSelectedPoint((prevSelectedPoint) =>
      prevSelectedPoint === pointId ? null : pointId
    );
  };

  const renderImages = (point) => {
    if (selectedPoint === point.id) {
      return point.imgName.map((imageName, index) => (
        <div
          key={index}
          className={`product-container-${
            index % 2 === 0 ? "left" : "right"
          }`}
        >
          <Product key={index} index={index} imageName={imageName} />
        </div>
      ));
    }
    return null;
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <img src={image} alt="Cuerpo humano" width={195} />
        <div className="points-container">
          {pointsData.map((point) => (
            <div
              key={point.id}
              className={`point ${selectedPoint === point.id ? "selected" : ""}`}
              style={{
                top: point.y,
                left: point.x,
              }}
              onClick={() => handlePointClick(point.id)}
            >
              {point.link.map((linkIndex) => (
                <a
                  key={linkIndex}
                  className={selectedPoint === point.id ? "selected-link" : ""}
                >
                  {/* Renderiza el contenido del enlace aquí */}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="image-container">
        {pointsData.map(renderImages)}
      </div>
    </Container>
  );
};

export default BodyComponent;
