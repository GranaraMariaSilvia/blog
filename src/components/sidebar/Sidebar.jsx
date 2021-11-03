import React from "react";
import "./sidebar.css";
import { Image, Row, Col, Table } from "react-bootstrap";

function Sidebar() {
  return (
    <div className="sidebar">
      <Row>
        <p className="sidebarTitulo">SOBRE MI</p>
        <Col xs={6} md={4}>
          <Image
            className="sidebarImg"
            src="https://mundotextilmag.com.ar/wp-content/uploads/textilsustentable-1.jpg"
          />
        </Col>
      </Row>
      <p className="mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        harum qui facilis adipisci aspernatur. Nostrum rerum odio at voluptas
        animi odit, eveniet, ut amet qui, ratione quisquam eius repudiandae
        voluptates.
      </p>

      <p className="subtitulo">CATEGORIAS</p>
      <div className="sidebarTabla">
        <ul className="sidebarList">
          <li className="sidebarListItem">Musica</li>
          <li className="sidebarListItem">Cocina</li>
          <li className="sidebarListItem">Literatura</li>
          <li className="sidebarListItem">Otros</li>
        </ul>
      </div>

      <p className="subtitulo">FOLOW US</p>
      <div className="sidebarIcon">
        <i className="bi bi-facebook"></i>

        <i className="bi bi-instagram"></i>
      </div>
    </div>
  );
}

export default Sidebar;
