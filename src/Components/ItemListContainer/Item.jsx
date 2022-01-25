import React from "react";
import ItemCount from "./ItemCount";
import {Card, Container} from 'react-bootstrap';

export default function Item ({producto}){

    return(
    <>

<Container style={{display:'inline-block', maxWidth:"18em" ,textAlign:"center", margin:"5px", alignItems:"center"}}>
    
  <Card>
        <p>producto N° {producto.id}</p>
    <Card.Img variant="top" src={producto.pictureURL} />
    <Card.Body>
    <Card.Title>{producto.titulo}</Card.Title>
    <Card.Text>
      <p>Precio $ {producto.precio}</p>
      <p>En stock: {producto.stock}</p>
    </Card.Text>
    <ItemCount producto={producto}/>
    </Card.Body>
  </Card>
</Container>

    </>
    )
}