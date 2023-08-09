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

import cabello from "../assets/Productos/Beneficios/Cabello.png";
import Estomagoinstestinos from "../assets/Productos/Beneficios/Estomagoinstestinos.png";
import Frenteycuello from "../assets/Productos/Beneficios/Frenteycuello.png";
import Garganta from "../assets/Productos/Beneficios/Garganta.png";
import garganta1 from "../assets/Productos/Beneficios/garganta1.png";
import huesos1 from "../assets/Productos/Beneficios/huesos1.png";
import huesos2 from "../assets/Productos/Beneficios/huesos2.png";
import manosycodos from "../assets/Productos/Beneficios/manosycodos.png";
import manosycodos2 from "../assets/Productos/Beneficios/manosycodos2.png";
import mano from "../assets/Productos/Beneficios/mano.png";
import musculo from "../assets/Productos/Beneficios/musculo.png";
import musculo2 from "../assets/Productos/Beneficios/musculo2.png";
import adbomen from "../assets/Productos/Beneficios/adbomen.png";
import Piel from "../assets/Productos/Beneficios/Piel.png";
import Prostata from "../assets/Productos/Beneficios/Prostata.png";
import Pulmones from "../assets/Productos/Beneficios/Pulmones.png";
import Sexo from "../assets/Productos/Beneficios/Sexo.png";
import Tos from "../assets/Productos/Beneficios/Tos.png";
import Vejiga from "../assets/Productos/Beneficios/Vejiga.png";
import VitadayBe from "../assets/Productos/Beneficios/Vitaday.png";

import Product from "./Product";
import "./styles/Body.css";

const BodyComponent = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const pointsData = [
    //Cerebro
    {
      id: 1,
      link: [1, 3],
      x: '45%',
      y: 415,
      imgName: {
        1: {
          principal: vitamina_c,
          detalle: [Frenteycuello, Pulmones, Garganta],
        },
        2: { principal: VitadaySure, detalle: [VitadayBe] },
      },
    },
    //Al lado del cerebro
    {
      id: 2,
      link: [2, 5],
      x: '55%',
      y: 415,
      imgName: {
        1: {
          principal: colageno,
          detalle: [cabello, Piel],
        },
      },
    },
    //Nariz
    {
      id: 3,
      link: [1, 3],
      x: '45%',
      y: 385,
      imgName: {
        1: {
          principal: vitamina_c,
          detalle: [cabello, Piel],
        },
        2: { principal: VitadaySure, detalle: [VitadayBe] },
      },
    },
    //Garganta
    {
      id: 4,
      link: [4],
      x: '45%',
      y: 360,
      imgName: {
        1: {
          principal: vitamina_c,
          detalle: [Frenteycuello, Pulmones, Garganta],
        },
        2: { principal: Euximil, detalle: [garganta1] },
        3: { principal: Euximil2, detalle: [Tos] },
      },
    },
    //Hombro
    {
      id: 5,
      link: [5, 2],
      x: '25%',
      y: 360,
      imgName: {
        1: {
          principal: colageno,
          detalle: [cabello, Piel],
        },
      },
    },
    //Corazon
    {
      id: 6,
      link: [6],
      x: '50%',
      y: 325,
      imgName: {
        1: {
          principal: AjoUva,
          detalle: [cabello, Piel],
        },
      },
    },
    //Pulmón
    {
      id: 7,
      link: [7],
      x: '55%',
      y: 290,
      imgName: {
        1: {
          principal: GasPlus,
          detalle: [Estomagoinstestinos],
        },
      },
    },
    //Brazo dereho
    {
      id: 8,
      link: [8, 15, 18],
      x: '75%',
      y: 285,
      imgName: {
        1: {
          principal: colageno,
          detalle: [manosycodos],
        },
        2: {
          principal: Reuduol,
          detalle: [manosycodos2],
        },
      },
    },
    //Intestino
    {
      id: 9,
      link: [7, 9, 15],
      x: '55%',
      y: 255,
      imgName: {
        1: {
          principal: FibraSlim,
          detalle: [Estomagoinstestinos],
        },
      },
    },
    //Vegija 1
    {
      id: 10,
      link: [10],
      x: '45%',
      y: 225,
      imgName: {
        1: {
          principal: Duoprox,
          detalle: [Vejiga],
        },
        2: {
          principal: Uronex,
          detalle: [Vejiga],
        },
      },
    },
    //Vegija 2
    {
      id: 11,
      link: [11],
      x: '45%',
      y: 210,
      imgName: {
        1: {
          principal: Duoprox,
          detalle: [Prostata],
        },
      },
    },
    //Vegija 3
    {
      id: 12,
      link: [12],
      x: '45%',
      y: 190,
      imgName: {
        1: {
          principal: Duoprox,
          detalle: [Sexo],
        },
      },
    },
    //Hueso derecha
    {
      id: 13,
      link: [13],
      x: '65%',
      y: 180,
      imgName: {
        1: {
          principal: Reuduol,
          detalle: [huesos1],
        },
        2: {
          principal: vitamina_d,
          detalle: [VitadayBe],
        },
        3: {
          principal: colageno,
          detalle: [huesos2],
        },
      },
    },
    //Rodilla
    {
      id: 15,
      link: [8, 15, 18],
      x: '30%',
      y: 130,
      imgName: {
        1: {
          principal: colageno,
          detalle: [manosycodos],
        },
        2: {
          principal: Reuduol,
          detalle: [manosycodos2],
        },
      },
    },
    //Tibia
    {
      id: 16,
      link: [16, 17],
      x: '25%',
      y: 110,
      imgName: {
        1: {
          principal: Vitaday,
          detalle: [musculo2],
        },
        2: {
          principal: Reuduol,
          detalle: [adbomen],
        },
      },
    },
    //Gemlos
    {
      id: 17,
      link: [16, 17],
      x: '35%',
      y: 100,
      imgName: {
        1: {
          principal: Vitaday,
          detalle: [musculo2],
        },
        2: {
          principal: Reuduol,
          detalle: [adbomen],
        },
      },
    },
    //mano
    {
      id: 18,
      link: [8, 15, 17],
      x: '80%',
      y: 190,
      imgName: {
        1: {
          principal: colageno,
          detalle: [manosycodos],
        },
        2: {
          principal: Reuduol,
          detalle: [manosycodos2],
        },
      },
    },
  ];
  const handlePointClick = (pointId) => {
    setSelectedPoint((prevSelectedPoint) =>
      prevSelectedPoint === pointId ? null : pointId
    );
  };

  const renderImages = (point) => {
    if (selectedPoint === point.id) {
      const leftImages = [];
      const rightImages = [];
      let count = 0;

      Object.keys(point.imgName).forEach((key, index) => {
        const imageName = point.imgName[key];

        const product = (
          <Product
            key={index}
            index={index}
            imageName={imageName.principal}
            detalle={imageName.detalle}
          />
        );

        if (index % 2 === 0) {
          leftImages.push(product);
        } else {
          rightImages.push(product);
        }
        count++;
      });

      // Paso 3: Agregar la clase CSS especial solo si es la tercera imagen
      const containerClass =
        count !== 1
          ? "product-container-left"
          : "product-container-left-unique";

      return (
        <div>
          <div className={`${containerClass}`}>{leftImages}</div>

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
            <div className="container-body">
              <img src={image} alt="Cuerpo humano" width={180} className="" />
              <div className="points-container">
                {pointsData.map((point) => (
                  <div
                    key={point.id}
                    className={`point ${
                      selectedPoint === point.id ? "selected" : ""
                    }`}
                    style={{
                      bottom: point.y,
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BodyComponent;
