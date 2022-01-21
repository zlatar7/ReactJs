import React, {useState} from "react";
import { Button, Card } from 'react-bootstrap';



export default function ItemCount ({item}){

    const [cantidad, setCantidad] = useState(1);

    function sumar (){
        if(cantidad < item.stock) setCantidad(cantidad + 1);
    }

    function restar (){
        if (cantidad > 1) setCantidad(cantidad - 1)
    }

    function onAdd (){
        
        alert(cantidad + " " + item.titulo + "(s) " + "se han agregado al carrito");
        
    }

    return(
        <>
    <br />

    <Card style={{ width: '18rem' }}>
    <p>Item N° {item.id}</p>
  <Card.Img variant="top" src={item.pictureURL} />
  <Card.Body>
    <Card.Title>{item.titulo}</Card.Title>
    <Card.Text>
    <p>Precio {item.precio}</p>
    <p>En stock: {item.stock}</p>
  </Card.Text>
  </Card.Body>
</Card>

<br />

   <Button variant="outline-primary" onClick={()=>restar()}>-</Button>{' '}
        {cantidad}
        <Button variant="outline-primary" onClick={()=>sumar()}>+</Button>
        <br />
        <br />
        <Button onClick={()=> {onAdd()}} > AGREGAR AL CARRITO </Button>
        <br />
        <hr />      
    </>
    )
}