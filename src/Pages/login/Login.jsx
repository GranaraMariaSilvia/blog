import React, { useState } from "react";
import { Form, Button ,Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {

  const [error, setError] = useState(false);

  const [datos, setDatos] = useState({
       email : "",
       password: ""
  });

  
  const datosInput =(e)=>{
      setDatos({
        ...datos,
        [e.target.name] : e.target.value

      })

  }

  const enviarDatos = (e) => {
    e.preventDefault();
 
  
    
  
     console.log(datos);
  };

  return (
    <div className="login">
      <Form className="loginForm" onSubmit={enviarDatos}>
        <p className="loginTitle">Login</p>

        {error ? (
          <Alert  className="alertError" variant="danger"> Todos los campos son obligatorios</Alert>
        ) : null}


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={datosInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={datosInput}
          />
        </Form.Group>

        <Button className="botonLogin" variant="outline-light" type="submit">
          Login
        </Button>
        <Button className="botonRegister" variant="outline-dark" type="submit">
          <Link className="link" to="/register">
            Register
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default Login;
