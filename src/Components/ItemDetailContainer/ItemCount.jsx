import React, {useState} from "react";
import { Button, Container} from 'react-bootstrap';



export default function ItemCount ({producto, onAdd}){

    const [cantidad, setCantidad] = useState(1);

    function sumar (){
        if(cantidad < producto.stock) setCantidad(cantidad + 1);
    }

    function restar (){
        if (cantidad > 1) setCantidad(cantidad - 1)
    }

    return(
        <>

    <Container style={{display:"inline-block", width:"fit-content"}}>
       
        <Button variant="outline-primary" onClick={()=>restar()}>-</Button>{' '}
        <p style={{display:"inline", margin:"0.5em"}}>{cantidad}</p>
        <Button variant="outline-primary" onClick={()=>sumar()}>+</Button>
        </Container>
        <br />
    <br />
    <Button className=" bg-primary text-light border border-info border-2 rounded text-sm" onClick={()=> {onAdd(cantidad)}} > AGREGAR AL CARRITO </Button>
    <br /> 
    
   
    </>
    )
}