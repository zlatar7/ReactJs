import React, { useContext } from 'react';
import { contexto } from './CartContext';
import {Button, Card } from 'react-bootstrap';

export default function CartItem ({ producto }) {

  const { deleteItem } = useContext(contexto);

  return (
    <>
      <div style={{textAlign:"center", margin:"1em auto auto auto", width:"40%", justifyContent:"center"}}>
        <div className='bg-white bg-opacity-75 border border-primary rounded border-radius-4'>
        <h4>{producto.item.titulo}</h4>
          <br />
        <Card.Img className='border border-primary' style={{maxWidth:"20vw"}} src={producto.item.pictureURL}/>
        <p>Cantidad: {producto.count}</p> 
        <p>Precio: $ {producto.item.precio}</p>
        <p>Subtotal: $ {producto.item.precio * producto.count}</p>
        <Button className="m-2 bg-white text-primary" onClick={() => deleteItem(producto.item.id)}>Borrar Item</Button>
        </div>
        
      </div>
      </>
  )
};