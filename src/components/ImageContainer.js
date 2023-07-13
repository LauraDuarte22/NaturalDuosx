import React from "react";
import ImageHighlight from "./ImageHighlight";
import image from "../assets/Body.png";
import { Container } from "react-bootstrap";
import Product from "./Product";
import colageno from "../assets/Productos/Colageno-min.png";

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedAreas: [
        {
          id: 1,
          link: [1, 4],
          x: 665,
          y: 160,
          width: 70,
          height: 70,
          imgName: ["colageno"],
        },
        {
          id: 2,
          link: [2, 3],
          x: 645,
          y: 165,
          width: 70,
          height: 70,
          imgName: ["vitamina_c", "vitamina_d"],
        },
        {
          id: 3,
          link: [2, 3],
          x: 645,
          y: 220,
          width: 70,
          height: 70,
          imgName: ["vitamina_c", "vitamina_d"],
        },
        {
          id: 4,
          link: [1, 4],
          x: 595,
          y: 225,
          width: 70,
          height: 70,
          imgName: ["colageno"],
        },
        {
          id: 5,
          x: 660,
          y: 255,
          width: 70,
          height: 70,
          imgName: ["capsula"],
        },
        {
          id: 6,
          x: 665,
          y: 285,
          width: 70,
          height: 70,
          imgName: ["aloeVera"],
        },
        {
          id: 7,
          link: [7, 9, 15],
          x: 705,
          y: 300,
          width: 70,
          height: 70,
          imgName: ["colageno", "gel"],
        },
        {
          id: 8,
          x: 665,
          y: 330,
          width: 70,
          height: 70,
          imgName: ["fibra"],
        },
        {
          id: 9,
          link: [7, 9, 15],
          x: 720,
          y: 395,
          width: 70,
          height: 70,
          imgName: ["colageno", "gel"],
        },
        {
          id: 10,
          x: 649,
          y: 360,
          width: 70,
          height: 70,
          imgName: ["duoprox", "uronex"],
        },
        {
          id: 11,
          x: 649,
          y: 375,
          width: 70,
          height: 70,
          imgName: ["duoprox"],
        },
        {
          id: 12,
          x: 649,
          y: 390,
          width: 70,
          height: 70,
          imgName: ["duoprox"],
        },
        {
          id: 13,
          x: 685,
          y: 400,
          width: 70,
          height: 70,
          imgName: ["colageno", "vitamina_d", "gel"],
        },

        {
          id: 15,
          link: [7, 9, 15],
          x: 620,
          y: 455,
          width: 70,
          height: 70,
          imgName: ["colageno", "gel"],
        },

        {
          id: 16,
          link: [16, 17],
          x: 625,
          y: 495,
          width: 70,
          height: 70,
          imgName: ["colageno", "duo"],
        },
        {
          id: 17,
          link: [16, 17],
          x: 605,
          y: 490,
          width: 70,
          height: 70,
          imgName: ["colageno", "duo"],
        },
        {
          id: 18,
          x: 645,
          y: 190,
          width: 70,
          height: 70,
          imgName: ["vitamina_c", "jarabe", "pastilla"],
        },
      ],
      activeIndex: null,
    };
  }
  handleAreaClick = (index) => {
    console.log('entra')
    const { activeIndex } = this.state;

    if (activeIndex === index) {
      this.setState({
        activeIndex: null,
      });
    } else {
      this.setState({
        activeIndex: index,
      });
    }
  };
  render() {
    const { highlightedAreas, activeIndex } = this.state;
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="image-container">
          <img src={image} alt="Imagen" className="image" width={195} />
          {highlightedAreas.map((area, index) => (
            <ImageHighlight
              key={index}
              x={area.x}
              y={area.y}
              width={area.width}
              height={area.height}
              imageUrl={area.imgName}
              active={index === activeIndex}
              onClick={() => this.handleAreaClick(index)}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default ImageContainer;
