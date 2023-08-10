import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./styles/Product.css";

const Product = ({ index, imageName, detalle }) => {
  const productData = {
    Colageno: {
      name: "Colageno",
      title: "Colágeno Hidrolizado  ",
      text: "con pulpa de uva y vitaminas enfocadas en la revitalización de tu piel y el fortalecimiento del cabello.",
    },
    VitaminaC: {
      name: "vitamina_c",
      title: "La Vitamina C + Zinc, ",
      text: "es la vitamina de todos los días que contribuye a fortalecer tus defensas y tu sistema inmunológico.Reduce el riesgo de contraer enfermedades.",
    },
    VitadaySure: {
      name: "VitadaySure",
      title: "Multivitaminico ",
      text: "esencial para el desarrollo, crecimiento y salud de los niños. Aporta Zinc, Vitamina A y C. ",
    },
    Euximil2: {
      name: "Euximil2",
      title: "Jarabe Natural ",
      text: "base de marañón, albahaca, laurel, hierbabuena y maracuyá para tratar la tos seca y con flema. Hidrata y alivia la irritación de la garganta reduciendo la tos.",
    },
    Euximil: {
      name: "Euximil",
      title: "Pastillas Masticables ",
      text: "para refrescar la boca y la garganta. Contiene Vitamina C, miel de abeja, propóleo, polen, marañón, eucalipto y menta. Encuéntralo en dos sabores: Limón o Cereza. ",
    },
    FibraSlim: {
      name: "Fibra",
      title: "El consumo de Fibra Duo Sline ",
      text: " restablece el tránsito intestinal evitando el estreñimiento. Con sus 7 fibras naturales desecha toxinas, adelgaza, evita la acumulación de grasas y limpia el colon previniendo el cáncer. ",
    },
    GasPlus: {
      name: "GasPlus",
      title: "Tratamiento de Aloe Vera ",
      text: "con acción antiséptica para evitar el deterioro del estómago y ulceras estomacales. Contribuye a la eliminación de infecciones, disminuye la acidez y el dolor ocasionado por gastritis.",
    },
    AjoUva: {
      name: "AjoUva",
      title: "Cápsulas ",
      text: " a base de Ajo y Uva para la reducción de altos niveles de presión arterial. Ayuda el tratamiento de la hipertensión, reduce los niveles de colesterol y protege el sistema cardiovascular.",
    },
    Reuduol: {
      name: "Reuduol",
      title: "Gel  ",
      text: "indicado para las dolencias articulares, inflamaciones y síntomas relacionados. Trata los problemas de artritis, artrosis y reumáticos.",
    },
    Duoprox: {
      name: "Bebida Natural",
      title: "Bebida Natural ",
      text: " a base de tomate, mangostino, sandia y vitaminas, que con sus grandes cantidades de licopeno previene la prostatitis y trata la inflamación de la próstata. Disminuye el riesgo de cáncer de próstata",
    },
    Uronex: {
      name: "Bebida Natural",
      title: "Producto de Origen Natural",
      text: " a base de arándano y mangostino ideal para las infecciones urinarias. Limpia las vías urinarias, trata la cistitis.",
    },
    vitamina_d: {
      name: "vitamina_d",
      title: "Alimento Multivitamínico ",
      text: "con complejo B, calostro bovino, omega 3, proteínas, vitaminas y minerales. Mantiene y recupera la fuerza y masa muscular del cuerpo.",
    },
    Vitaday: {
      name: "Vitaday",
      title: "Multivitamínico ",
      text: "esencial para el desarrollo y crecimiento de los niños. Contiene todas las vitaminas y minerales que el cuerpo necesita para el desarrollo de dientes y huesos sanos y fuertes.",
    },
  };
  const [isHovered, setIsHovered] = useState(false);
  const name = Object.keys(productData)[index];
  const { title, text } = productData[name];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="parent-container"
    >
      <Row className="justify-content-center">
        <Col xs="12" md="6">
          <div
            className={`selected-image-container d-flex align-items-center ${
              index === 2 ? "special-css-class" : ""
            }`}
          >
            {" "}
            {isHovered && (
              <div className="background-svg ">
                <div className="margin-text text-white">
                  <span className="fw-bold">{title}</span> {text}
                </div>
                <div className="contenedor-detalle">
                  {detalle.map((detalleImage, idx) => (
                    <img
                      src={detalleImage}
                      alt={`Detalle ${name} - ${idx}`}
                      className="detalle-image img-fluid  mx-2 mt-3"
                    />
                  ))}
                </div>
              </div>
            )}
            <img
              className="selected-image selected-image-inside-background text-center mb-5 ml-5 my-2"
              key={index}
              src={imageName}
              alt={`Producto ${name}`}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
