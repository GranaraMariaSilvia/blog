import React, { useRef, useContext} from "react";
import { Form, Button ,Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import Context from "../../context/Context";



function Login() {

  const userRef = useRef();
  const passwordRef = useRef();

  const{dispatch, isFetching} = useContext(Context);

  const handleSubmit =async (e)=>{
    e.preventDefault();

    dispatch({type:"LOGIN_START"})
    try {
      const res= await axios.post("/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value,
      })

      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE"})
    }
  }
  
    

  return (
    <div className="login">
      <Form className="loginForm" onSubmit={handleSubmit}>
        <p className="loginTitle">Login</p>



        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre de usuario..."
            name="username"
           ref={userRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña..."
            name="password"
           ref= {passwordRef}
          />
        </Form.Group>

        <Button className="botonLogin" variant="outline-light" type="submit" disabled={isFetching}>
          Login
        </Button>
        <Button className="botonRegister" variant="outline-dark" >
          <Link className="botonLink" to="/register">
            Register
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default Login;
