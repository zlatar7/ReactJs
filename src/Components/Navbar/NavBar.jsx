import {Navbar, Nav} from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar (){

    return(

   <>
  <Navbar /* fixed="top" */ bg="primary" variant="dark">

    <Nav className="me-auto">
      <Link className="text-light p-0 m-1" to={"/"}>HOME</Link>
      <Link className="text-light p-0 m-1" to={"/preguntasfrecuentes"}>PREGUNTAS FRECUENTES</Link>
      <Link className="text-light p-0 m-1 flex" to={"/contacto"}>CONTACTO</Link>
    </Nav> 
    <CartWidget/>

  </Navbar>

 
</>
    )
    
}