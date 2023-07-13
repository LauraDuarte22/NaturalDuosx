import React, { useState } from "react";
import image from "../assets/Body.png";
import { Container } from "react-bootstrap";
import colageno from "../assets/Productos/Colageno-min.png";
import vitamina_c from "../assets/Productos/Vitamina C-min.png";
import vitamina_d from "../assets/Productos/Vitaday Sure-min.png"
import "./styles/Body.css";

const BodyComponent = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const pointsData = [
    {
      //cerebro
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
      //nariz
      id: 3,
      link: [2, 3],
      x: 675,
      y: 205,
      imgName: [vitamina_c, vitamina_d],
    },
    {
      //brazo arriba
      id: 4,
      link: [1, 4],
      x: 640,
      y: 245,
      imgName: [colageno],
    },
    {
      //corazon
      id: 5,
      x: 680,
      y: 280,
      imgName: ["capsula"],
    },
    {
      //higado
      id: 6,
      x: 690,
      y: 315,
      imgName: ["aloeVera"],
    },
    {
      //brazo derecho
      id: 7,
      link: [7, 9, 15],
      x: 735,
      y: 325,
      imgName: [colageno, "gel"],
    },
    {
      //mano
      id: 8,
      x: 750,
      y: 425,
      imgName: ["fibra"],
    },
    {
      //vejiga
      id: 9,
      link: [7, 9, 15],
      x: 675,
      y: 390,
      imgName: [colageno, "gel"],
    },
    {
      //vejiga 2
      id: 10,
      x: 675,
      y: 402,
      imgName: ["duoprox", "uronex"],
    },
    {
      //vejiga 3
      id: 11,
      x: 675,
      y: 415,
      imgName: ["duoprox"],
    },
    {
      //hueso derecha
      id: 12,
      x: 715,
      y: 425,
      imgName: ["duoprox"],
    },
    {
      //rodilla
      id: 13,
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
    if (selectedPoint === pointId) {
      setSelectedPoint(null);
    } else {
      setSelectedPoint(pointId);
    }
  };

  const renderImages = (point) => {
    if (selectedPoint === point.id) {
      return point.imgName.map((imageName, index) => (
        <img
          width={150}
          key={index}
          src={imageName}
          alt={`Imagen ${imageName}`}
          style={{ marginLeft: index !== 0 ? "10px" : "0" }}

        />
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
              className={`point ${
                selectedPoint === point.id ? "selected" : ""
              }`}
              style={{
                top: point.y,
                left: point.x,
              }}
              onClick={() => handlePointClick(point.id)}
            ></div>
          ))}
        </div>
      </div>
      <div className="image-container">
        {pointsData.map((point) => renderImages(point))}
      </div>
    </Container>
  );
};

export default BodyComponent;
