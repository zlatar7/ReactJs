import React from "react";
import { Accordion, Container } from "react-bootstrap";

export default function FAQs() {

    return (
        <>       
    <Container className="shadow-lg bg-primary mt-4 mb-4 pt-1 pb-4">
        <Accordion flush>
        <Accordion.Item eventKey="0">
            <Accordion.Header>¿HACEN ENVÍOS?</Accordion.Header>
            <Accordion.Body>
            Si, hacemos envíos. Al finalizar la compra vas a llenar
            un formulario con tus datos para que podamos realizar el debido envío de tu compra.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>¿CÓMO ME PUEDO CONTACTAR CON USTEDES?</Accordion.Header>
            <Accordion.Body>
            Podés contactarte con nosotros a través de nuestras redes sociales o vía whatsapp.
            <br />
            -En Instagram nos encontrás como: @AzulAzulSiempre.
            <br />
            -En Facebook estamos como: "Azul Azul".
            <br />
            -Nuestro número de whatsapp es +54 9 236-4123456
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>¿PUEDO COMPRAR VARIOS PRODUCTOS A LA VEZ?</Accordion.Header>
            <Accordion.Body>
            Por supuesto! Haciendo click en el botón "Agregar al carrito", el item seleccionado se agrega al carro.
            Luego puedes seguir navegando en la página y realizar el mismo procedimiento con todos los productos que desees.
            Una vez que termines de seleccionar los productos, clickeás en el Icono del carro (en la parte superior de la pantalla) y
            revisas los items que se encuentren allí. De ser necesario modificas o eliminas los productos y finalizas la compra.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>¿TIENEN LOCAL?</Accordion.Header>
            <Accordion.Body>
            Si, contamos con dos locales en la ciudad de Chacabuco. Los mismos están ubicados en la Av. San Martin 123 y Av. Belgrano 456.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>¿HACEN FACTURA "A"?</Accordion.Header>
            <Accordion.Body>
            Si, hacemos factura "A". En el caso de requerirla contactate con nosotros a través de nuestras redes sociales o whatsapp antes de finalizar tu compra.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </Container>

        </>
    )
}