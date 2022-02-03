import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';
import CartItem from './CartItem';
import { Button } from "react-bootstrap";

export default function Cart (){

    const { cart, clearCart } = useContext(contexto);

    return(
        <>
        {cart.length === 0 ?
                <div>
                <p>El Carrito se encuentra vacío</p>
                <Link to='/'>Ir a comprar</Link>
                </div>
                :
                <div style={{textAlign:"center"}}>
                {cart.map(element => <CartItem key={element.item.id} producto={element} />)}
                <Button variant="outline-primary" className="m-2" onClick={() => clearCart()}>LIMPIAR EL CARRITO</Button>
                </div>
            }
        </>
    )
}