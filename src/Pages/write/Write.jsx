import React from "react";
import "./write.css";
import { Form, Button, Col, Row, Card } from "react-bootstrap";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/m/marcas-de-ropa-sustentables.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon bi bi-plus-lg"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />

          <input
            className="writeInput"
            autoFocus={true}
            type="text"
            placeholder="Titulo"
          />
        </div>
        <div className="writeGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Cuente su historia..."
            type="text"
          ></textarea>
        </div>
        <button className="writeSubmit">Publicar</button>
      </form>
    </div>
  );
}

export default Write;
