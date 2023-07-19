import React, { useState } from "react";
import logo from "../assets/logo/LogoNatural.svg";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12} sm={6} className="d-flex align-items-center">
          <Navbar
            expand="lg"
            className={`navbar ${isMenuOpen ? "show-navbar" : ""}`}
          >
            {isMenuOpen ? (
              <AiOutlineClose
                className="menu-icon"
                onClick={handleMenuToggle}
              />
            ) : (
              <Navbar.Toggle
                aria-controls="navbar-nav"
                onClick={handleMenuToggle}
              />
            )}
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto mr-auto container">
                <Nav.Link
                  as={Link}
                  to="/"
                  className="fs-3 text-white p-5"
                  active
                >
                  Inicio
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/nosotros"
                  className="fs-3 text-white p-5"
                >
                  Nosotros
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/productos"
                  className="fs-3 text-white p-5"
                >
                  Productos
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col xs={12} sm={6} className="d-flex align-items-center justify-content-end">
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Logo Natural Duos'x"
              height="130"
              width="190"
              className="img-fluid"
            />
          </Navbar.Brand>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
