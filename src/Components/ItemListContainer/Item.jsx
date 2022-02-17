import React from "react";
import {Card, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Item ({producto}){

    return(
    <>

 <div className="cardItem">
  <Container className="p-4">
      <Card className="p-4">
      <Card.Img src={producto.pictureURL}/>
      <Card.Body>
          <Card.Text>
          <p>Precio: $ {producto.precio}</p>
          <p>{producto.titulo}</p>
          <p>Categoría: {producto.categoria}</p>
          <p>Stock: {producto.stock}</p>
          </Card.Text>
      </Card.Body>
      <Link className="m-4" to={"/item/" + producto.id}>VER MAS DETALLES</Link>
      </Card>
  </Container>
 </div>      
    </>
    )
}