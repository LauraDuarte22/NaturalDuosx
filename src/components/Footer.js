import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import facebookIcon from "../assets/Iconos/Facebook.png";
import instagramIcon from "../assets/Iconos/Instagram.png";
import whatsappIcon from "../assets/Iconos/WhatsApp.png";
import asesor from "../assets/Iconos/asesor.png";
import "./styles/Footer.css";

const Footer = () => {
  const location = useLocation();

  const isProductPage = location.pathname === "/productos";

  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/profile.php?id=100092687883754",
      icon: facebookIcon,
      width: 50,
      height: 50,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/naturalduosxcompany/",
      icon: instagramIcon,
      width: 50,
      height: 50,
    },
  ];

  const whatsappLink = {
    name: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=573228970896&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20sobre%20los%20suplementos%20alimenticios%20%F0%9F%8D%8A%F0%9F%A7%83%F0%9F%8D%87",
    icon: whatsappIcon,
    width: 60,
    height: 60,
  };

  return (
    <footer className="fixed-bottom">
      <Container>
        <Row>
          <Col
            xs={6}
            sm={6}
            className="d-flex justify-content-center justify-content-sm-start mb-2 mb-sm-0"
          >
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url} className="me-3" target="_blank">
                <img
                  src={link.icon}
                  alt={link.name}
                  width={link.width}
                  height={link.height}
                />
              </a>
            ))}
          </Col>
          <Col
            xs={6}
            sm={6}
            className="d-flex justify-content-center justify-content-sm-end"
          >
            {" "}
            {isProductPage && (
              <div className="nube-container">
                <Container>
                  <Row>
                    <Col
                      xs={12}
                      md={9}
                      className="d-flex flex-wrap justify-content-center align-items-center"
                    >
                      <p className="text-center">
                        ¿Tienes dudas?{" "}
                        <span className="fw-bold">
                          {" "}
                          ¡Habla con <br className="d-none d-md-inline" />
                          un asesor!
                        </span>
                        Escríbenos ahora <br className="d-none d-md-inline" />y
                        recibe tus productos sin
                        <br className="d-none d-md-inline" /> costo adicional ☺️
                      </p>
                    </Col>
                    <Col
                      xs={12}
                      md={3}
                      className="d-flex flex-wrap justify-content-center align-items-center pe-md-5"
                    >
                      <img
                        src={asesor}
                        alt="Comunícate con nosotros"
                        width={65}
                        height={65}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            )}
            <a href={whatsappLink.url} target="_blank">
              <img
                src={whatsappLink.icon}
                alt={whatsappLink.name}
                width={whatsappLink.width}
                height={whatsappLink.height}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
