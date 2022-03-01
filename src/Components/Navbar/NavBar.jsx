import React, {useContext} from "react";
import {Container, Navbar, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { contexto } from "../Cart/CartContext";
import logo from "./logo.png";

export default function NavBar (){

  //Muestra en el icono del carrito la cantidad de productos
  const {cart} = useContext(contexto);
  const cartCount = cart.length;
  
    return(

   <>
<Navbar sticky="top" className="navbar">
  
  <Navbar.Brand className="m-0 pe-1"> <img src={logo} alt="logo" /> </Navbar.Brand>
  <Container className="justify-content-start" id="containerNav">
        <Link className="text-light ps-2" to={"/"}>HOME</Link>
        <Link className="text-light ps-2" to={"/FAQs"}>FAQs</Link>
        <NavDropdown title="CATEGORIES" id="dropDown">
          <NavDropdown.Item> <Link className="text-primary" to={"/category/abrigo"}>ABRIGO</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link className="text-primary" to={"/category/pantalones"}>PANTALONES</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link className="text-primary" to={"/category/calzado"}>CALZADO</Link></NavDropdown.Item>
        </NavDropdown>
  </Container>
      
        <Link className="text-light pe-1 justify-self-end" to={"/cart"}><CartWidget cartCount={cartCount}/></Link>

 
</Navbar>
</>
    )
    
}