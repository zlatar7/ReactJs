import React, { useState, useRef } from "react";
import { getFirestore } from '../../firebase'
import { useContext } from "react";
import {contexto} from "../Cart/CartContext";
import firebase from "firebase/app";
import "react-bootstrap"
import "firebase/firestore";
import { Button } from "react-bootstrap";

export default function Form() {
    
    const {cart, totalPrice} = useContext(contexto)

    const [orderId, setOrderId] = useState('');

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: cart,
            total: totalPrice(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    return (

        <>
            
            {orderId && (
            
            <div style={{textAlign:"center", backgroundColor:"lightgrey", padding:"1em", margin:"0.5em"}}>
                <h1>Felicitaciones tu order es: {orderId}</h1>
            </div> 
            
            )}

            <div id="form" className="shadow-lg">
                <h3>INGRESA TUS DATOS PARA FINALIZAR LA COMPRA:</h3>
                <br />
                <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" />
                <br />
                <br />
                <input type="tel" name="tel" ref={mobileRef} placeholder="N° de Celular" />
                <br />
                <br />

                <input type="email" name="email" ref={emailRef} placeholder="Email" />
                <br />
                <br />

                <input type="text" name="state" ref={stateRef} placeholder="Provincia" />
                <br />
                <br />

                <input type="text" name="city" ref={cityRef} placeholder="Ciudad" />
                <br />
                <br />

                <input type="text" name="address" ref={addressRef} placeholder="Direccion" />
                <br />
                <br />

                <Button onClick={() => handleClick()} >FINALIZAR</Button>

            </div>
        </>
    );
}