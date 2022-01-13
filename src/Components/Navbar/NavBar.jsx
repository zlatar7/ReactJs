import {Navbar, Nav, Container} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar (){

    const lista = [
        {nombre: "HOME", enlace:"/"},
        {nombre: "PRODUCTS", enlace:"/PRODUCTS"},
        {nombre: "FAQs", enlace:"/FAQs"},
        {nombre:"CONTACT", enlace:"/CONTACT"}]

    return(

   <>
  <Navbar collapseOnSelect bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">
    {lista.map(item=>{
    return <Nav.Link href={item.enlace}> {item.nombre} </Nav.Link>})}
    </Nav> 
  

    <CartWidget/>
    </Container>
  </Navbar>

 
</>
    )
    
}