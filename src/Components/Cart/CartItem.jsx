import React, { useContext } from 'react';
import { contexto } from './CartContext';
import {Button, Card } from 'react-bootstrap';

export default function CartItem ({ producto }) {

  const { deleteItem } = useContext(contexto);

  return (
    <>
      <div style={{textAlign:"center"}}>
        <h2>{producto.item.titulo}</h2>
        <Card.Img style={{maxWidth:"20vw"}} src={producto.item.pictureURL}/>
        <p>Cantidad: {producto.count}</p> 
        <p>Precio: $ {producto.item.precio}</p>
        <p>Subtotal: $ {producto.item.precio * producto.count}</p>
        <Button variant="outline-primary" className="m-2" onClick={() => deleteItem(producto.item.id)}>Borrar Item</Button>
      </div>
      <hr />
      </>
  )
};