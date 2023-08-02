import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import image from "../assets/Body.png";
import colageno from "../assets/Productos/Colageno.png";
import vitamina_c from "../assets/Productos/VitaminaC.png";
import vitamina_d from "../assets/Productos/VitadaySure.png";
import VitadaySure from "../assets/Productos/VitadaySure.png";
import Euximil from "../assets/Productos/Euximil.png";
import Euximil2 from "../assets/Productos/Euximil2.png";
import AjoUva from "../assets/Productos/AjoUva.png";
import GasPlus from "../assets/Productos/GasPlus.png";
import FibraSlim from "../assets/Productos/FibraSlim.png";
import Duoprox from "../assets/Productos/Duoprox.png";
import Uronex from "../assets/Productos/Uronex.png";
import Reuduol from "../assets/Productos/Reuduol.png";
import Vitaday from "../assets/Productos/Vitaday.png";

import Product from "./Product";
import "./styles/Body.css";

const BodyComponent = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const pointsData = [
    //Cerebro
    {
      id: 1,
      link: [1, 3],
      x: 675,
      y: 205,
      imgName: [vitamina_c, VitadaySure],
    },
    //Al lado del cerebro
    {
      id: 2,
      link: [2, 5],
      x: 690,
      y: 200,
      imgName: [colageno],
    },
    //Nariz
    {
      id: 3,
      link: [1, 3],
      x: 675,
      y: 225,
      imgName: [vitamina_c, VitadaySure],
    },
    //Garganta
    {
      id: 4,
      link: [4],
      x: 675,
      y: 255,
      imgName: [vitamina_c, Euximil, Euximil2],
    },
    //Hombro
    {
      id: 5,
      link: [5, 2],
      x: 630,
      y: 260,
      imgName: [colageno],
    },
    //Corazon
    {
      id: 6,
      link: [6],
      x: 690,
      y: 290,
      imgName: [AjoUva],
    },
    //Pulmón
    {
      id: 7,
      link: [7],
      x: 690,
      y: 320,
      imgName: [GasPlus],
    },
    //Brazo dereho
    {
      id: 8,
      link: [8, 15, 18],
      x: 725,
      y: 335,
      imgName: [colageno, Reuduol],
    },
    //Intestino
    {
      id: 9,
      link: [7, 9, 15],
      x: 690,
      y: 360,
      imgName: [FibraSlim],
    },
    //Vegija 1
    {
      id: 10,
      link: [10],
      x: 675,
      y: 390,
      imgName: [Duoprox, Uronex],
    },
    //Vegija 2
    {
      id: 11,
      link: [11],
      x: 675,
      y: 405,
      imgName: [Duoprox],
    },
    //Vegija 3
    {
      id: 12,
      link: [12],
      x: 675,
      y: 420,
      imgName: [Duoprox],
    },
    //Hueso derecha
    {
      id: 13,
      link: [13],
      x: 710,
      y: 430,
      imgName: [colageno, vitamina_d, Reuduol],
    },
    //Rodilla
    {
      id: 15,
      link: [8, 15, 18],
      x: 650,
      y: 480,
      imgName: [colageno, Reuduol],
    },
    //Tibia
    {
      id: 16,
      link: [16, 17],
      x: 635,
      y: 510,
      imgName: [Vitaday, Reuduol],
    },
    //Gemlos
    {
      id: 17,
      link: [16, 17],
      x: 655,
      y: 520,
      imgName: [Vitaday, Reuduol],
    },
    //mano
    {
      id: 18,
      link: [8, 15, 17],
      x: 740,
      y: 420,
      imgName: [colageno, Reuduol],
    },
  ];
  const handlePointClick = (pointId) => {
    setSelectedPoint((prevSelectedPoint) =>
      prevSelectedPoint === pointId ? null : pointId
    );
  };

  const renderImages = (point) => {
    if (selectedPoint === point.id) {
      // Filtrar imágenes para la izquierda y la derecha
      const leftImages = [];
      const rightImages = [];
      point.imgName.forEach((imageName, index) => {
        const product = (
          <Product key={index} index={index} imageName={imageName} />
        );

        // Agregar imágenes a la izquierda o derecha según su posición en el array
        if (index % 2 === 0) {
          leftImages.push(product);
        } else {
          rightImages.push(product);
        }
      });

      return (
        <div>
          <div className="product-container-left">{leftImages}</div>
          <div className="product-container-right">{rightImages}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <Row>
          <Col md={4} className="d-flex flex-wrap justify-content-center">
            <div className="product-container">
              {pointsData.map((point) => (
                <div key={point.id}>
                  {point.link.map((linkIndex) => (
                    <a
                      key={linkIndex}
                      className={
                        selectedPoint === point.id ? "selected-link" : ""
                      }
                    ></a>
                  ))}
                  {renderImages(point)}
                </div>
              ))}
            </div>
          </Col>

          <Col md={4} className="d-flex flex-column align-items-center">
            <img src={image} alt="Cuerpo humano" width={180} />
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
                >
                  {point.link.map((linkIndex) => (
                    <a
                      key={linkIndex}
                      className={
                        selectedPoint === point.id ? "selected-link" : ""
                      }
                    ></a>
                  ))}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default BodyComponent;
