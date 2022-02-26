import React, {useContext, useState} from "react";
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';
import CartItem from './CartItem';
import { Button} from "react-bootstrap";
import { useEffect } from "react";

export default function Cart (){

    const { cart, clearCart, totalPrice, calculateAmount } = useContext(contexto);
    const [total, setTotal] = useState(0);
    const [amount, setAmount] = useState(0);

    useEffect(()=>{
        setTotal(totalPrice());
        setAmount(calculateAmount())
    },[cart])


    return(
        <>
        {cart.length === 0 ?
                <div style={{textAlign:"center", padding:"1em", margin:"5em 0em 15em 0em", width:"100%", alignItems:"center"}}>
                 <div className="shadow-lg" style={{backgroundColor:"#d9d9e3de", padding:"1em", width:"fit-content", margin:"auto", border:"2.5px solid #ffffff8a", minHeight:"22em"}}>
                    <h2 style={{backgroundColor:"transparent"}}>EL CARRITO SE ENCUENTRA VACÍO</h2>
                    <br/>
                    <img style={{maxWidth:"10em"}} src="https://cdn-icons.flaticon.com/png/512/4318/premium/4318459.png?token=exp=1645572661~hmac=46c7a3d9130d553016c404f6c9f189c1" alt="carrito vacio" />
                    <br/>
                    <br/>
                    <Link className="links" to='/'>IR A COMPRAR</Link>
                 </div>
                </div>
                :
                <div>
                    {cart.map(element => <CartItem key={element.item.id} producto={element} />)}

                    <div style={{backgroundColor:"white", margin:"1em auto 1em auto", width:"50%", textAlign:"center", border:"2px solid #0d6efd", borderRadius:"20px", padding:"2em 0em 2em 0em"}}>
                        <p>TOTAL A PAGAR: $ {total}</p>
                        <p>TOTAL DE PRODCUTOS A COMPRAR: {amount}</p>
                            <Button className="m-2 border border-info" onClick={() => clearCart()}>LIMPIAR EL CARRITO</Button>
                            <hr />
                            <br />
                            <Link className="p-3 bg-primary text-white border border-info border-3 rounded" to={"/Formulario"}>TERMINAR LA COMPRA</Link>
                    </div>
                </div>
            }
        </>
    )
}