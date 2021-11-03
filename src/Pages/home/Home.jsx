import React from "react";
import "./home.css";
import Headers from "../../components/headers/Headers";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import { Col, Row, Table } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Headers />
      <Row>
        <Col sm={9}>
          <Posts />
        </Col>
        <Col sm={3}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
