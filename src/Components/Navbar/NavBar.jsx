import {Container, Navbar, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./logo.png";

export default function NavBar (){

    return(

   <>
<Navbar sticky="top" style={{margin:"0", padding:"0"}} bg="primary">
  
  <Navbar.Brand style={{paddingLeft:"2px", margin:"0"}}> <img src={logo} alt="logo" /> </Navbar.Brand>
  <Container className="justify-content-start ps-1 pe-0">
        <Link className="text-light ps-1" to={"/"}>INICIO</Link>
        <Link className="text-light ps-1">CONTACTO</Link>
        <NavDropdown title="CATEGORÍAS" id="dropDown">
          <NavDropdown.Item>  <Link className="text-primary" to={"/categoria/abrigo"}>ABRIGO</Link></NavDropdown.Item>
          <NavDropdown.Item>  <Link className="text-primary" to={"/categoria/pantalones"}>PANTALONES</Link></NavDropdown.Item>
          <NavDropdown.Item>  <Link className="text-primary" to={"/categoria/calzado"}>CALZADO</Link></NavDropdown.Item>
        </NavDropdown>
  </Container>
      
        <Link className="text-light pe-1 justify-self-end" to={"/cart"}><CartWidget /></Link>

 
</Navbar>
</>
    )
    
}