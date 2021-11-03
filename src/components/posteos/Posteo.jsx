import React from "react";
import "./posteo.css";
import { Card } from "react-bootstrap";

function Posteo() {
  return (
    <div>
      <Card className="containerCard">
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/736x/f0/d6/e5/f0d6e5807105131fda7e9e5c16b140b1.jpg"
        />
        <Card.Body>
          <Card.Title>Titulo</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of
          </Card.Text>
          <Card.Link className="linkCard" href="#">
            Categoria
          </Card.Link>
          <Card.Link className="link" href="#">
            ver mas
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Posteo;
