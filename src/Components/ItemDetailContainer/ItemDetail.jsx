import React from "react";
import { Card, Container } from "react-bootstrap";

export default function ItemDetail({ producto }) {
    return (
        <>
            {(producto.id) ?
                <>
                <Container>
                    <Card>
                    <Card.Img src={producto.pictureURL}/>
                    <Card.Body>
                        <Card.Text>
                        <p>ITEM: N° {producto.id}</p>
                        <p>PRECIO: $ {producto.precio}</p>
                        <p>{producto.nombre}</p>
                        <p>CATEGORÍA: {producto.categoria}</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Container>
                </>
                :
                <> CARGANDO LA PAGINA </>
            }
        </>
    )
}