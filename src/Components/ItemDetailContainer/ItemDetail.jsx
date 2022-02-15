import React from "react";
import { Card, Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto, added, onAdd }) {

    return (
            <>
                
  <Row >
    <Col style={{padding:"0"}} xs={8}>     
        <Container style={{width:"50%"}}>
            <Card.Img src={producto.pictureURL}/>
                <p style={{backgroundColor:"#dcdaff"}}>{producto.descripcion}</p>
            <Link className="m-4" to={"/"}>SEGUIR COMPRANDO</Link>                 
        </Container>
    </Col>
    <Col style={{padding:"0"}} xs={4}>
        <Container style={{borderLeft:"solid #0d6efd 1.5px",textAlign:"center", padding:"25% 0px 0px 0px" ,backgroundColor:"#dcdaff", height:"100%", width:"100%"}}>
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