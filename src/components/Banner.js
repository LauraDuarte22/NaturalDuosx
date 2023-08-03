import React, { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/Banner/Banner1.png";
import image2 from "../assets/Banner/Banner2.png";
import image3 from "../assets/Banner/Banner3.png";
import text1 from "../assets/Banner/Text1.png";
import text2 from "../assets/Banner/Text2.png";
import text3 from "../assets/Banner/Text3.png";
import "./styles/Banner.css";

const banners = [
  {
    image: image1,
    text: text1,
    colSizes: {
      sm: 12,
      md: 6,
    },
  },
  {
    image: image2,
    text: text2,
    colSizes: {
      sm: 12,
      md: 6,
    },
  },
  {
    image: image3,
    text: text3,
    colSizes: {
      sm: 12,
      md: 6,
    },
  },
];
function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="banner d-flex align-items-center justify-content-center margin-container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
        {banners.map((banner, idx) => (
          <Carousel.Item key={idx}>
            <Row className="align-items-center justify-content-center my-0 my-md-0">
              {idx === 0 ? (
                <>
                  <Col
                    xs={12}
                    md={banner.colSizes.md} // The order is the same on md breakpoint
                    className="text-center align-items-center order-1 order-md-0  my-3 my-md-0 margins"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        className='d-block img-fluid w-40'
                        src={banner.image}
                        alt="Envío gratis a todo el país"
                      />
                    </div>
                  </Col>
                  <Col
                    {...banner.colSizes}
                    className="text-center align-items-center order-0 order-md-1 my-3 my-md-0"
                  >
                    <div className="slide-content">
                      <img
                        className='d-block img-fluid w-75-special'
                        src={banner.text}
                        alt="Envío gratis a todo el país"
                      ></img>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col
                    {...banner.colSizes}
                    className="text-center align-items-center my-3 my-md-0 margins"
                  >
                    <div className="slide-content margin-top-banner">
                      <img
                        className="d-block img-fluid w-90"
                        src={banner.text}
                        alt="Mejora tu salud sin afectar tu rutina"
                      />
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md={12 - banner.colSizes.md}
                    className="text-center align-items-center my-0 my-md-0"
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        className="d-block img-fluid w-75"
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
