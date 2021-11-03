import React from "react";
import "./headers.css";

import { Card } from "react-bootstrap";

function Headers() {
  return (
    <div className="header">
      <Card className="bg-dark text-white " style={{ border: "none" }}>
        <Card.Img
          src="https://thumbs.dreamstime.com/b/textura-verde-horizontal-de-la-hoja-para-el-modelo-y-fondo-99404339.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title className="titulosm">
            {" "}
            Tendencia para el futuro
          </Card.Title>
          <Card.Text className="titulolg">
            Reduce,reutiliza,recicla e inventa...
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Headers;
