import React, {useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

export default function Categoria (){

    const {categoriaId} = useParams();
    const [productos, setProductos] = useState({});

    useEffect(()=>{
            setTimeout(()=>{
        
    const arrayDeProductos= [{id: 1, precio: 3900, titulo: "Zapatillas South Gris", stock: 2, pictureURL:"./img/zapas1.png", categoria:"calzado"},
                             {id: 2, precio: 3900, titulo: "Jean Cenitho Oxford", stock: 1, pictureURL:"./img/jeans1.png", categoria:"pantalones"},
                             {id: 3, precio: 6900, titulo: "Campera Urus Bordó", stock: 4, pictureURL:"./img/campera1.png", categoria:"abrigo"}]

                        setProductos(arrayDeProductos.filter(item => item.categoria === categoriaId)[0]);
        },2000)      
    
},[categoriaId])

    return(
        <>

        {(productos.precio) ?
        <>
        <h1>Estoy en la categoria {categoriaId}</h1>
    <Container>
        <Card>
        <Card.Img src={productos.pictureURL}/>
        <Card.Body>
            <Card.Text>
            <p>ITEM: N° {productos.id}</p>
            <p>PRECIO: $ {productos.precio}</p>
            <p>{productos.titulo}</p>
            <p>CATEGORÍA: {productos.categoria}</p>
            </Card.Text>
        </Card.Body>
        </Card>
    </Container>        
    <Container>
        <Link className="m-4" to={"/categoria/calzado"}>CALZADO</Link>
        <Link className="m-4" to={"/categoria/pantalones"}>PANTALONES</Link>
        <Link className="m-4" to={"/categoria/abrigo"}>ABRIGO</Link>
    </Container>
    </>       
    :
    <> CARGANDO LA INFORMACIÓN </>    
        }     
</>

    )
}