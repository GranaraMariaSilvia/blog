import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

function Register() {

  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
const handleSubmit = async(e)=>{
  e.preventDefault();
  try {
    setError(false)
  const res = await axios.post("/auth/register",{
      username,
      email,
      password
    });
    res.data && window.location.replace("/login")
  } catch (error) {
    console.log(error)
   setError(true)
  }
}

  

  return (
    <div className="register">
      <Form className="registerForm" onSubmit={handleSubmit}>
        <p className="registerTitle">Register</p>


        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter usename"
            name="username"
            onChange={e=>setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={e=>setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={e=>setPassword(e.target.value)}
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
     {error && <span style={{color:"red"}} >Algo salio mal!</span> } 
      </Form>
    </div>
  );
}

export default Register;
