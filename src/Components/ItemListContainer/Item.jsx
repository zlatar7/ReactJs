import React from "react";
import {Card, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Item ({producto}){

    return(
    <>

 <div class="cards" style={{display:'inline-block', width:"21.07em" ,textAlign:"center", alignItems:"center"}}>
  <Container className="p-4">
      <Card className="p-4">
      <Card.Img src={producto.pictureURL}/>
      <Card.Body>
          <Card.Text>
          <p>ITEM: N° {producto.id}</p>
          <p>PRECIO: $ {producto.precio}</p>
          <p>{producto.titulo}</p>
          <p>CATEGORÍA: {producto.categoria}</p>
          <p>STOCK: {producto.stock}</p>
          </Card.Text>
      </Card.Body>
      <Link className="m-4" to={"/item/" + producto.id}>VER MAS DETALLES</Link>
      </Card>
  </Container>
 </div>      
    </>
    )
}