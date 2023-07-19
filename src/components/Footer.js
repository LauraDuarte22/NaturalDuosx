import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import facebookIcon from "../assets/Iconos/Facebook.png";
import instagramIcon from "../assets/Iconos/Instagram.png";
import whatsappIcon from "../assets/Iconos/WhatsApp.png";
// import Asesor from "../assets/Contact/Asesor.svg";
import "./styles/Footer.css"; // Archivo CSS personalizado

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row">
          <Col xs={6} sm={8} md={10} className="mx-2 my-2">
            <a
              href="https://facebook.com/profile.php?id=100092687883754"
              target="_blank"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="icon img-fluid"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://www.instagram.com/naturalduosxcompany/"
              target="_blank"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="icon img-fluid"
                width={50}
                height={50}
              />
            </a>
          </Col>
          <Col xs={2} sm={2} md={1}>
          
            <a
              href="https://api.whatsapp.com/send?phone=573228970896&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20sobre%20los%20suplementos%20alimenticios%20%F0%9F%8D%8A%F0%9F%A7%83%F0%9F%8D%87"
              target="_blank"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="icon img-fluid"
                width={50}
                height={50}
              />
            </a>
          </Col>
        </Row>
        {/* <WhatsAppModal /> */}
      </Container>
    </footer>
  );
}

export default Footer;
