import React from "react";
import Posteo from "../posteos/Posteo";
import "./posts.css";
import { Col, Row } from "react-bootstrap";

function Posts() {
  return (
    <div className="containerPost">
      <Row>
        <Col sm={6}>
          <Posteo />
        </Col>
        <Col sm={6}>
          <Posteo />
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Posteo />
        </Col>
        <Col sm={6}>
          <Posteo />
        </Col>
      </Row>
    </div>
  );
}

export default Posts;
