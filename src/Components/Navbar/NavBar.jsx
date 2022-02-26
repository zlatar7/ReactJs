import {Container, Navbar, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./logo.png";
import { contexto } from "../Cart/CartContext";
import React, {useContext} from "react";

export default function NavBar (){

  const {cart} = useContext(contexto);
  const cartCount = cart.length;
  
    return(

   <>
<Navbar sticky="top" className="navbar">
  
  <Navbar.Brand className="m-0 pe-1"> <img src={logo} alt="logo" /> </Navbar.Brand>
  <Container className="justify-content-start ps-1 pe-0 containerNav">
        <Link className="text-light ps-1" to={"/"}>INICIO</Link>
        <Link className="text-light ps-1" to={"/"}>CONTACTO</Link>
        <NavDropdown title="CATEGORÍAS" id="dropDown">
          <NavDropdown.Item>  <Link className="text-primary" to={"/categoria/abrigo"}>ABRIGO</Link></NavDropdown.Item>
          <NavDropdown.Item>  <Link className="text-primary" to={"/categoria/pantalones"}>PANTALONES</Link></NavDropdown.Item>
          <NavDropdown.Item>  <Link className="text-primary" to={"/categoria/calzado"}>CALZADO</Link></NavDropdown.Item>
        </NavDropdown>
  </Container>
      
        <Link className="text-light pe-1 justify-self-end" to={"/cart"}><CartWidget cartCount={cartCount}/></Link>

 
</Navbar>
</>
    )
    
}