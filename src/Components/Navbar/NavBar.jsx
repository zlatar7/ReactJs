import {Navbar} from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar (){

    return(

   <>
  <Navbar bg="primary" variant="dark"  className="d-flex justify-content-start">



      <Link className="text-light p-1" to={"/"}>INICIO</Link>
      <Link className="text-light p-1" to={"/categoria/abrigo"}>ABRIGO</Link>
      <Link className="text-light p-1" to={"/categoria/pantalones"}>PANTALONES</Link>
      <Link className="text-light p-1" to={"/categoria/calzado"}>CALZADO</Link>
      <Link className="text-light p-1" to={"/cart"}><CartWidget />
</Link>
        
  </Navbar>
</>
    )
    
}