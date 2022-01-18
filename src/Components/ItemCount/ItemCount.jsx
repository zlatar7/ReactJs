import React, {useState} from "react";
import { Button } from 'react-bootstrap';



export default function ItemCount ({item}){

    const [cantidad, setCantidad] = useState(1);

    function sumar (){
        if(cantidad < item.stock) setCantidad(cantidad + 1);
    }

    function restar (){
        if (cantidad > 1) setCantidad(cantidad - 1)
    }

    function onAdd (){
        
        alert(cantidad + " " + item.nombre + "(s) " + "se han agregado al carrito");
        
    }

    return(
        <>
    <br />
    <p>{item.nombre}(s)</p>
    <p>En stock: {item.stock}</p>
        <Button variant="outline-primary" onClick={()=>restar()}>-</Button>{' '}
        {cantidad}
        <Button variant="outline-primary" onClick={()=>sumar()}>+</Button>
        <br />
        <Button onClick={()=> {onAdd()}} > AGREGAR AL CARRITO </Button>
        <br />
        <hr />
        </>
    )
}