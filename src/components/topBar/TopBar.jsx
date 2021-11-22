import React,{useState} from "react";
import "./topbar.css";
import { Navbar, Container, Nav, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Topbar() {
  const user = true;

  const [search , setSearch]=useState(false);

  const openSearch =(e)=>{
    setSearch(true)
  }

  const searchClass = search ? "searchInput.active " : "searchInput";

  const submitSearch = (e) =>{
    e.preventDefault();
   alert("search funkkkn")
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Moda Sustentable</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/">
                Contacto
              </Link>

              <Link className="link" to="/write">
                Escribir
              </Link>
              <Link className="link" to="/login">
                {user && "login"}
              </Link>
              <Link className="link" to="/register">
                Registrarse
              </Link>
            </Nav>

            <Nav className="topIcon">
              <i className="bi bi-facebook"></i>

              <i className="bi bi-instagram"></i>
            </Nav>
           
            <Form className="d-flex topIcon " onSubmit={submitSearch}>
              <div>
                <input className={searchClass} type="text"  placeholder="Search" />
              <button  onClick={ openSearch} className="searchButton"> <i  className="bi bi-search" ></i></button> 
              </div>
            </Form>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topbar;
