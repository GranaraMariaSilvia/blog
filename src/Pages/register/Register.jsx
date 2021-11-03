import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username.trim() === ""){
      setError(true);
      return
    }

    setError(false);

    const datos = {
      username,
      email,
      password,
    };

    console.log(datos);
  };

  return (
    <div className="register">
      <Form className="registerForm" onSubmit={handleSubmit}>
        <p className="registerTitle">Register</p>

        {error ? (
          <Alert className="alertError" variant="danger"> Todos los campos son obligatorios</Alert>
        ) : null}


        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter usename"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="registerBoton" variant="outline-light" type="submit">
          Register
        </Button>
        <Button className="loginBoton" variant="outline-dark" type="submit">
          <Link className="link" to="/login">
            Login
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default Register;
