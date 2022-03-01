import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {contexto} from "../Cart/CartContext";
import { getFirestore } from '../../firebase'
import firebase from "firebase/app";

export default function Formulario() {
    
    const {cart, totalPrice} = useContext(contexto)

    const [orderId, setOrderId] = useState('');

	const [formularioEnviado, setFormularioEnviado] = useState(false);

    return (

    <>

	<Formik initialValues={{ nombre: '', email: '', address: '', city:'', state:'', mobile:''}}

								//VALIDACIONES Y MENSAJES DE ERROR

		validate={(valores) => {
			let errores = {};

			
			!valores.nombre  && (errores.nombre = 'Por favor ingresa un nombre')
			
			!valores.email && (errores.email = 'Por favor ingresa un email electronico')
			
			!valores.address && (errores.address = 'Por favor ingresa una dirección')
			
			!valores.city && (errores.city = 'Por favor ingresa una ciudad')
			
			!valores.state && (errores.state = 'Por favor ingresa una provincia')
			
			!valores.mobile && (errores.mobile = 'Por favor ingresa un teléfono')

			return errores;
		}}
		
								// ENVIO DE LA ORDEN Y RESETEO DE LOS CAMPOS

		onSubmit={(valores, {resetForm}) => {
		
		resetForm();
		setFormularioEnviado();

		const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: valores,
            items: cart,
            total: totalPrice(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id.cart);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            }); 
		
		}}
	>                  	
	{/* Fin de la etiqueta de apertura FORMIK */}


								{/* FORMULARIO (RENDERIZADO) */}
	
	{( {errors} ) => (
			(orderId.length > 0) ? 
				<>
				<div className="shadow-lg" style={{backgroundColor:"#c8deffea", minHeight:"10em", padding:"1em", margin:"10em auto 10em auto", maxWidth:"35em", border:"4px solid #bdd2ffde"}}>
					<h4> Su orden es : {orderId}</h4>
					<br />
				 	<div style={{display:"flex", justifyContent:"center", borderTop:"solid 1px #0d6dfdf5"}}>
						<Link className="mt-2 p-2 bg-primary text-white border rounded-4" to={"/"}>VOLVER AL INICIO</Link>
				 	</div>
				</div>
				</>
				:
				<>
				<Form id="form" className="shadow-lg">
					<div>
						<Field className="input" type="text"	name="nombre" placeholder="Nombre"/>
						<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
					</div>
					<div>
						<Field className="input" type="text" name="email" placeholder="E-mail" />
						<ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
					</div>
					<div>
						<Field className="input" type="text" name="address" placeholder="Dirección"/>
						<ErrorMessage name="address" component={() => (<div className="error">{errors.address}</div>)} />
					</div>
					<div>
						<Field className="input" type="text" name="city" placeholder="Ciudad"/>
						<ErrorMessage name="city" component={() => (<div className="error">{errors.city}</div>)} />
					</div>
					<div>
						<Field className="input" type="text" name="state" placeholder="Provincia"/>
						<ErrorMessage name="state" component={() => (<div className="error">{errors.state}</div>)} />
					</div>
					<div>
						<Field className="input" type="text" name="mobile" placeholder="N° de Teléfono"/>
						<ErrorMessage name="mobile" component={() => (<div className="error">{errors.mobile}</div>)} />
					</div>

					<Button type="submit">FINALIZAR</Button>
				</Form>
				</>
	)}

	</Formik>

    </>
    );
}