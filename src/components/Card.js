import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./styles/Card.css";

function Cards() {
  return (
    <Container className="d-flex justify-content-center mb-4"> 
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={4} className="d-flex justify-content-center mb-5">
          <Card className="card justify-content-center">
            <Card.Body>
              <Card.Title className="text-center fw-bold fs-2">
                Misión
              </Card.Title>
              <div className="card-divider"></div>
              <Card.Text className="lead my-2">
                Somos una empresa dedicada al desarrollo de productos naturales,
                utilizando procesos que cumplen normas internacionales de calidad
                brindando productos naturales de beneficio de la salud de nuestros
                consumidores.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="d-flex justify-content-center mb-5">
          <Card className="card">
            <Card.Body>
              <Card.Title className="text-center fw-bold fs-2">
                Visión
              </Card.Title>
              <div className="card-divider"></div>
              <Card.Text className="lead">
                Incursionar, posicionar, crecer y permanecer en los mercados
                nacionales e internacionales, convirtiéndose en especialistas en
                el desarrollo y la comercialización de productos naturales,
                beneficiando la salud de nuestros clientes, con una alta garantía
                en control de calidad e investigación.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="d-flex justify-content-center mb-5">
          <Card className="card ">
            <Card.Body>
              <Card.Title className="text-center fw-bold fs-2">
                Valores
              </Card.Title>
              <div className="card-divider"></div>
              <Card.Text className="lead">
                <ul className="custom-list">
                  <li>Calidad Humana</li>
                  <li>Profesionalismo</li>
                  <li>Pasión por lo que hacemos</li>
                  <li>Respeto por el cliente</li>
                  <li>Servicio</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
