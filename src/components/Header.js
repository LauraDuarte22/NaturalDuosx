import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/LogoNatural.png";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);
  const handleMenuOptionClick = (url) => {
    setIsMenuOpen(false);
    navigate(url);
  };
  return (
    <Container fluid>
      <Row className="align-items-center mx-5 my-3">
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className="d-flex align-items-center"
        >
          <div ref={menuRef}>
            <Navbar
              id="navbar"
              expand="lg"
              className={`navbar ${isMenuOpen ? "show-navbar" : ""}`}
            >
              <Navbar.Toggle
                aria-controls="navbar-nav"
                onClick={() => {
                  setIsMenuOpen((prev) => !prev);
                }}
                className="navbar-toggler"
              />
              <Navbar.Collapse id="navbar-nav" in={isMenuOpen}>
                <Nav className="ml-auto">
                  <Nav.Link
                    as={Link}
                    to="/"
                    onClick={() => handleMenuOptionClick("/")}
                    className="fs-3 text-white p-5 text-center"
                    active
                  >
                    Inicio
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/nosotros"
                    onClick={() => handleMenuOptionClick("/nosotros")}
                    className="fs-3 text-white p-5 text-center"

                  >
                    Nosotros
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/productos"
                    onClick={() => handleMenuOptionClick("/productos")}
                    className="fs-3 text-white p-5 text-center"
                  >
                    Productos
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={8}
          lg={9}
          xl={10}
          className="d-flex align-items-center justify-content-end"
        >
          <Navbar.Brand href="/" className="ml-auto">
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
