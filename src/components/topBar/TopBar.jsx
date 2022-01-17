import React,{useState, useContext} from "react";
import "./topbar.css";
import { Navbar, Container, Nav, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Context from "../../context/Context";

function Topbar() {
  const {user, dispatch}= useContext(Context)


  const handleLogout = ()=>{
    dispatch({
      type:"LOGOUT"
    })
  }

  

  const submitSearch = (e) =>{
    e.preventDefault();
   alert("search buscador")
  }

  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
        <Container >
          <Navbar.Brand href="#home">Moda Sustentable</Navbar.Brand>
          
          <Nav className="topIcon">
              <i className="bi bi-facebook"></i>

              <i className="bi bi-instagram"></i>
             
            </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto  topLink ">
              <Link className="linkBoton" to="/">
                Home
              </Link>
              <Link className="linkBoton" to="/">
                Contacto
              </Link>

              <Link className="linkBoton" to="/write">
                Escribir
              </Link>
              <li className="linkBoton"  onClick={handleLogout}>
                {user && "logout"}
              </li>
             
            
            </Nav>

           <div >
            
             {
               user? (
                <Link to="/settings">
                 <img className="topImg" src={user.profilePic} alt="" />
                 </Link>
               ) :
               (
                 < div className="botones">
                 
                <Link className="linkBoton" to="/login"> Login </Link>

                  

                <Link className="linkBoton" to="/register"> Registrarse</Link>
                  
                </ div>
               )
             }
             </div>
            <Form className="d-flex topIcon " onSubmit={submitSearch}>
              <div>
                <input className="searchInput" type="text"  placeholder="Search" />
              <button  className="searchButton"> <i  className="bi bi-search" ></i></button> 
              </div>
            </Form>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topbar;
