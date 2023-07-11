<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/Banner/Banner1.png";
import image2 from "../assets/Banner/Banner2.png";
import image3 from "../assets/Banner/Banner3.png";
import "./styles/Banner.css";

function BannerCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={6000}>
        <Carousel.Item>
          <Row>
            <Col sm={12} md={3} lg={5} xl={4}>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  className="d-block img-fluid img-1"
                  src={image1}
                  alt="Mejora tu salud sin afecar tu rutina"
                  width={270}
                />
              </div>
            </Col>
            <Col sm={12} md={9} lg={7} xl={8}>
              <Carousel.Caption className="text-center carousel-caption-1">
                <h2 className="display-2  fw-bold">¡Mejora</h2>
                <h2 className="circle fw-bold display-1">tu salud</h2>
                <p className="display-5">sin afectar tu rutina!</p>
              </Carousel.Caption>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col sm={12} md={4} lg={2} xl={4}>
              <Carousel.Caption className="text-center carousel-caption-2">
                <div>
                  <h2 className="display-2  fw-bold">¡Mejora</h2>
                  <h2 className="circle fw-bold display-1">tu salud</h2>
                  <p className="display-5">sin afectar tu rutina!</p>
                </div>
              </Carousel.Caption>
            </Col>
            <Col sm={12} md={4} lg={2} xl={4}>
              <div className="d-flex align-items-center justify-content-end">
                <img
                  className="d-block img-fluid img-2"
                  src={image2}
                  alt="Mejora tu salud sin afecar tu rutina"
                  width={550}
                />
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col sm={12} md={4} lg={2} xl={4}>
              <Carousel.Caption className="text-center carousel-caption-3">
                <div>
                  <p className="fs-3 special-margin">
                    ¡Se siente bien <br /> y sabe bien!
                  </p>
                  <h2 className="display-2  fw-bold">Todos nuestros</h2>
                  <h2 className="circle fw-bold display-2">Productos</h2>
                  <p className="fs-3">
                    están endulzados con <span className="fw-bold">Stevia</span>
                  </p>
                </div>
              </Carousel.Caption>
            </Col>
            <Col sm={12} md={4} lg={2} xl={4}>
              <div className="d-flex align-items-center justify-content-end">
                <img
                  className="d-block img-fluid img-3"
                  src={image3}
                  alt="Mejora tu salud sin afecar tu rutina"
                  width={850}
                />
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default BannerCarousel;
=======
import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/Banner/Banner1.png";
import image2 from "../assets/Banner/Banner2.png";
import image3 from "../assets/Banner/Banner3.png";
import "./styles/Banner.css";

function BannerCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={6000}>
        <Carousel.Item>
          <Row>
            <Col sm={12} md={3} lg={5} xl={4}>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  className="d-block img-fluid img-1"
                  src={image1}
                  alt="Mejora tu salud sin afecar tu rutina"
                  width={270}
                />
              </div>
            </Col>
            <Col sm={12} md={9} lg={7} xl={8}>
              <Carousel.Caption className="text-center carousel-caption-1">
                <h2 className="display-2  fw-bold">¡Mejora</h2>
                <h2 className="circle fw-bold display-1">tu salud</h2>
                <p className="display-5">sin afectar tu rutina!</p>
              </Carousel.Caption>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col sm={12} md={4} lg={2} xl={4}>
              <Carousel.Caption className="text-center carousel-caption-2">
                <div>
                  <h2 className="display-2  fw-bold">¡Mejora</h2>
                  <h2 className="circle fw-bold display-1">tu salud</h2>
                  <p className="display-5">sin afectar tu rutina!</p>
                </div>
              </Carousel.Caption>
            </Col>
            <Col sm={12} md={4} lg={2} xl={4}>
              <div className="d-flex align-items-center justify-content-end">
                <img
                  className="d-block img-fluid img-2"
                  src={image2}
                  alt="Mejora tu salud sin afecar tu rutina"
                  width={550}
                />
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col sm={12} md={4} lg={2} xl={4}>
              <Carousel.Caption className="text-center carousel-caption-3">
                <div>
                  <p className="fs-3 special-margin">
                    ¡Se siente bien <br /> y sabe bien!
                  </p>
                  <h2 className="display-2  fw-bold">Todos nuestros</h2>
                  <h2 className="circle fw-bold display-2">Productos</h2>
                  <p className="fs-3">
                    están endulzados con <span className="fw-bold">Stevia</span>
                  </p>
                </div>
              </Carousel.Caption>
            </Col>
            <Col sm={12} md={4} lg={2} xl={4}>
              <div className="d-flex align-items-center justify-content-end">
                <img
                  className="d-block img-fluid img-3"
                  src={image3}
                  alt="Mejora tu salud sin afecar tu rutina"
                  width={850}
                />
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default BannerCarousel;
>>>>>>> origin/main
