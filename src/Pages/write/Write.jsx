import React,{useState} from "react";
import "./write.css";
import {  Alert} from "react-bootstrap";
import { set } from "react-hook-form";

function Write() {

  const [error, setError] = useState(false);

const [publicacion, setPublicacion] =useState({
     titulo: "",
     historia: ""
});

const datosPublicacion =(e)=>{
    
  setPublicacion({
       ...publicacion,
       [e.target.name] : e.target.value
  })
}


const enviarEscrito =(e)=>{
  e.preventDefault();

 
    console.log(publicacion)
}

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/m/marcas-de-ropa-sustentables.jpg"
        alt=""
      />

  
       <form className="writeForm"  onSubmit={enviarEscrito}>

        {error ? (
          <Alert className="alertError" variant="danger"> Todos los campos son obligatorios</Alert>
        ) : null}
        <div className="writeFormGroup">

          <label htmlFor="fileInput">
            <i className=" writeIcon bi bi-plus-lg"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />

          <input
            className="writeInput"
            autoFocus={true}
            type="text"
            name="titulo"
            placeholder="Titulo"
            onChange={datosPublicacion}
          />
        </div>
        <div className="writeGroup">
          <textarea
            className="writeInput writeText"
            name="historia"
            placeholder="Cuente su historia..."
            onChange={datosPublicacion}
            type="text"
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">Publicar</button>
      </form>
    </div>
  );
}

export default Write;
