import React from "react";
import { Card, Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto, added, onAdd }) {

    return (
            <>
                
  <Row style={{margin:"0", padding:"0"}}>
    <Col id="containerDetail" xs={7} sm={8}>
        <Container className=" cardColor border border-primary shadow-lg">
            <Card.Img className="cards" src={producto.pictureURL}/>
            <Container>
                <p id="parrafoDetail">{producto.descripcion}</p>
            </Container>
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

            {added ?  <Link to={"/Cart"}>IR AL CARRITO</Link> : <ItemCount producto={producto} onAdd={onAdd}/>}

        </Container>
    </Col>
  </Row>
        </>
    )
}