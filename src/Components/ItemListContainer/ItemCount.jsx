import React, {useState} from "react";
import { Button} from 'react-bootstrap';



export default function ItemCount ({producto}){

    const [cantidad, setCantidad] = useState(1);

    function sumar (){
        if(cantidad < producto.stock) setCantidad(cantidad + 1);
    }

    function restar (){
        if (cantidad > 1) setCantidad(cantidad - 1)
    }

    function onAdd (){
        
        alert( "Se ha agregado al carrito " +cantidad + " " + producto.titulo);
        
    }

    return(
        <>

   <Button variant="outline-primary" className="m-2" onClick={()=>restar()}>-</Button>{' '}
        {cantidad}
        <Button variant="outline-primary" className="m-2" onClick={()=>sumar()}>+</Button>
        <br />
        <br />
        <Button onClick={()=> {onAdd()}} > AGREGAR AL CARRITO </Button>
        <br />  
    </>
    )
}