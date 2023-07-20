import React, { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/Banner/Banner1.png";
import image2 from "../assets/Banner/Banner2.png";
import image3 from "../assets/Banner/Banner3.png";
import "./styles/Banner.css";

const banners = [
  {
    image: image1,
    caption: {
      title: "Envío",
      subtitle: "gratis",
      description: "a todo el país",
      fontSize: "display-1",
    },
    colSizes: {
      sm: 12,
      md: 6,
    },
  },
  {
    image: image2,
    imgClass: "img-fluid",
    caption: {
      title: "¡Mejora",
      subtitle: "tu salud",
      description: "sin afectar tu rutina!",
      fontSize: "display-1",
      fontDescription: "display-6",
      margin: {
        marginBottom: "200px",
      },
    },
    colSizes: {
      sm: 12,
      md: 6,
      x:0,
    },
  },
  {
    image: image2,
    caption: {
      title: "Todos nuestros",
      subtitle: "productos",
      description: "están endulzados con",
      extraDescription: "¡Se siente bien y sabe bien!",
      desciptionBold: "Stevia",
      fontDescription: "fs-2",
      fontSize: "display-4",
      margin: {
        marginLeft: "10px",
        marginBottom:"100px"
      },
    
    },
    colSizes: {
      sm: 12,
      md: 5,
      x:1,
    },
  },
];
function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="mt-5 banner">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={6000}>
        {banners.map((banner, idx) => (
          <Carousel.Item key={idx}>
            <Row className="align-items-center justify-content-center">
              {idx === 0 ? (
                <>
                  <Col
                    xs={12}
                    md={12 - banner.colSizes.md}
                    className="text-center align-items-center"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        className={`d-block img-fluid w-50 ${banner.imgClass}`}
                        src={banner.image}
                        alt="Envío gratis a todo el país"
                      />
                    </div>
                  </Col>
                  <Col
                    {...banner.colSizes}
                    className="text-center align-items-center"
                  >
                    <div
                      className="text-center text-white "
                      style={{ marginRight: "60%", marginBottom: "50%" }}
                    >
                      <h2
                        className={`fw-bold text-center text-white larger-font-size ${banner.caption.fontSize}`}
                        style={{ marginLeft: "20%" }}
                      >
                        {banner.caption.title}
                      </h2>
                      <h2 className="circle fw-bold display-1 subtitle text-white">
                        {banner.caption.subtitle}
                      </h2>
                      <p
                        className="fs-3 text-center"
                        style={{ marginLeft: "62px" }}
                      >
                        {banner.caption.description}
                      </p>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col
                    {...banner.colSizes}
                    className="text-center align-items-center"
                  >
                    <div
                      className="text-center text-white"
                      style={banner.caption.margin}
                    >
                      <p className="fs-1">{banner.caption.extraDescription}</p>
                      <h2 className={`fw-bold text-white ${banner.caption.fontSize}`}>
                        {banner.caption.title}
                      </h2>
                      <h2 className={`circle fw-bold subtitle text-white ${banner.caption.fontSize}`}>
                        {banner.caption.subtitle}
                      </h2>
                      <p className={`text-white ${banner.caption.fontDescription}`}>
                        {banner.caption.description}
                        <strong> {banner.caption.desciptionBold}</strong>
                      </p>
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md={12 - (banner.colSizes.md + banner.colSizes.x)}
                    className="text-center align-items-center"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        className={`d-block img-fluid w-100 ${banner.imgClass}`}
                        src={banner.image}
                        alt="Mejora tu salud sin afectar tu rutina"
                      />
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default BannerCarousel;