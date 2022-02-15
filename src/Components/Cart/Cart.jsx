import React, {useContext, useState} from "react";
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';
import CartItem from './CartItem';
import { Button } from "react-bootstrap";
import { useEffect } from "react";

export default function Cart (){

    const { cart, clearCart, totalPrice, calculateAmount } = useContext(contexto);
    const [total, setTotal] = useState(0);
    const [amount, setAmount] = useState(0);

    useEffect(()=>{
        setTotal(totalPrice());
        setAmount(calculateAmount())
    },[])


    return(
        <>
        {cart.length === 0 ?
                <div>
                 <h2>EL CARRITO SE ENCUENTRA VACÍO</h2>
                    <div style={{textAlign:"center", margin:"2em", padding:"2em"}}>
                        <Link to='/'>IR A COMPRAR</Link>
                    </div>
                </div>
                :
                <div style={{textAlign:"center"}}>
                    {cart.map(element => <CartItem key={element.item.id} producto={element} />)}
                    <p>TOTAL A PAGAR: $ {total}</p>
                    <p>TOTAL DE PRODCUTOS A COMPRAR: {amount}</p>
                    <Button variant="outline-primary" className="m-2" onClick={() => clearCart()}>LIMPIAR EL CARRITO</Button>
                    <Link to={"/form"}>TERMINAR LA COMPRA</Link>
                </div>
            }
        </>
    )
}