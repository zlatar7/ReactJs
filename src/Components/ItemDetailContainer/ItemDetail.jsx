import React from "react";
import { Card, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto, added, onAdd }) {

    return (
            <>
                <div style={{maxWidth:"65vw", marginTop:"2em", float:"left", padding:"0vw 10vw 0vw 20vw"}}>
                    <Card.Img style={{maxWidth:"20vw"}} src={producto.pictureURL}/>
                    <p>{producto.descripcion}</p>
                    <Link className="m-4" to={"/"}>VOLVER AL INICIO</Link>                 
                </div>
                <div style={{display:"flex", flexDirection:"column", borderLeft:"solid #0d6efd 1px", height:"100vh",maxWidth:"35vw" ,textAlign:"center", backgroundColor:"#dcdaff", float:"right", paddingTop:"20vh"}}>
                        <Container>
                        <p>Item: N° {producto.id}</p>
                        <p>Precio: $ {producto.precio}</p>
                        <p>{producto.nombre}</p>
                        <p>Marca: {producto.marca}</p>
                        <p>Stock: {producto.stock}</p>

                        {added ?  <Link to={"/Cart"}>IR AL CARRITO</Link> : <ItemCount producto={producto} onAdd={onAdd}/>}
                        
                        </Container>
                </div>
        </>
    )
}