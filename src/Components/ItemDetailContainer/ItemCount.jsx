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
<Container>
   <Button variant="outline-primary" className="m-2" onClick={()=>restar()}>-</Button>{' '}
        {cantidad}
        <Button variant="outline-primary" className="m-2" onClick={()=>sumar()}>+</Button>
        <br />
        <br />
        <Button onClick={()=> {onAdd(cantidad)}} > AGREGAR AL CARRITO </Button>
        <br /> 
        </Container> 
    </>
    )
}