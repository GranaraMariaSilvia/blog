import React from "react";
import { Card, Button } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Moda sustentable, tendencia para el futuro.</Card.Title>
          <Card.Text>Reduce,reutiliza,recicla e inventa...</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Derechos reservados</Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
