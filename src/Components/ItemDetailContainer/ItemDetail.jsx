import React from "react";
import { useContext } from "react";
import { Card, Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { contexto } from "../Cart/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto, added, onAdd }) {

    const {cart} = useContext(contexto)

    const cantidad = cart.map((item) => item.count) ;
    const ultimoProd = cart.map((item) => item.item.titulo) ;

    return (
            <>
                
  <Row style={{margin:"0", padding:"0", minHeight:"85vh"}}>
    <Col id="containerDetail" xs={7} sm={8}>
        <Container className=" cardColor border border-primary shadow-lg p-0">

            {added ?
            <> 
            {/* MENSAJE DEL PRODUCTO AGREGADO */}

             <div className="mensajeProducto">
              <h4>Se ha agregado ({cantidad.pop()}) {ultimoProd.pop()} al carrito </h4>
             </div>
            </>
            :
            <>
            {/* FOTO Y DESCRIPCIÓN DEL PRODUCTO */}

           <Card.Img className="cards" src={producto.pictureURL}/>
             <Container>
              <p id="parrafoDetail">{producto.descripcion}</p>
             </Container>
            </>
            }
        </Container>
        <br />
        <br />
        <Link className="p-2 bg-primary text-light border border-info border-2 rounded" to={"/"}>{added ? "SEGUIR COMPRANDO" : "VOLVER AL INICIO"}</Link> 
        <br/>
        <br/>
        <br/>               
    </Col>

    <Col id="informacionDetail" className="shadow-lg" xs={5} sm={4}>
        <Container className="p-0">
         <p>Precio: $ {producto.precio}</p>
         <p>{producto.nombre}</p>
         <p>Marca: {producto.marca}</p>
         <p>Stock: {producto.stock}</p>

            {/* Boton de AGREGAR AL CARRITO del Componente ITEMCOUNT.jsx */}
         {added ?  <Link to={"/Cart"}>IR AL CARRITO</Link> : <ItemCount producto={producto} onAdd={onAdd}/>}
        </Container>
    </Col>
  </Row>
        </>
    )
}