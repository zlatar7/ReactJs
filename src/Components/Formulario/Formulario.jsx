import React, { useState } from "react";
import { getFirestore } from '../../firebase'
import { useContext } from "react";
import {contexto} from "../Cart/CartContext";
import firebase from "firebase/app";
import "react-bootstrap"
import "firebase/firestore";
import { Button } from "react-bootstrap"; 
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

			// Nombre
			!valores.nombre  && (errores.nombre = 'Por favor ingresa un nombre')
			// email
			!valores.email && (errores.email = 'Por favor ingresa un email electronico')
			// Dirección
			!valores.address && (errores.address = 'Por favor ingresa una dirección')
			// Ciudad
			!valores.city && (errores.city = 'Por favor ingresa una ciudad')
			// Provincia
			!valores.state && (errores.state = 'Por favor ingresa una provincia')
			// Teléfono
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
							//FIN DE LA ETIQUETA FORMIK
	>


								{/* FORMULARIO (RENDERIZADO) */}
	
	{( {errors} ) => (
			(orderId.length > 0) ? 
				<>
				<div className="shadow-lg" style={{backgroundColor:"#c8deffea", minHeight:"10em", padding:"1em", margin:"10em auto 10em auto", width:"fit-content", border:"4px solid #bdd2ffde", alignItems:"center", display:"flex"}}>
				<h4> Su orden es : {orderId}</h4>
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
					<Field className="input" type="text" name="email" placeholder="Nombre@email.com" />
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