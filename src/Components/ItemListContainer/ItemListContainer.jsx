import React, { useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams, Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

 export default function ItemListContainer () {

    const [productos, setProductos] = useState([]);
    const [prodCategoria, setProdCategoria] = useState([])
    const {categoriaId} = useParams();

    useEffect(() => {

        const promesaProd = new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve([
                    {id: "1", precio: 3900, titulo: "Zapatillas Nike Gris/Negro", stock: 2, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOB_MWGJC4R-tQi91-E7H-pfk9jSkQ-qvqOhyQCKyNxDIwPnJuB-wiCJ29E4hzI_kwX0&usqp=CAU", categoria:"calzado"},
                    {id: "2", precio: 4200, titulo: "Zapatillas Reebok Blancas", stock: 2, pictureURL:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zapatillas-reebok-1578400249.png?crop=1.00xw:0.789xh;0,0.174xh&resize=480:*", categoria:"calzado"},
                    {id: "3", precio: 4200, titulo: "Zapatillas Adidas Azul", stock: 4, pictureURL:"https://m.media-amazon.com/images/I/31voj3Ay-gS._SL500_.jpg", categoria:"calzado"},
                    {id: "4", precio: 5900, titulo: "Zapatillas Puma Rojas", stock: 3, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCeKfGA3q7Coc3YL_EdLjg_URE4rPCrtpxA&usqp=CAU", categoria:"calzado"},
                    {id: "5", precio: 5900, titulo: "Zapatillas Puma Azul", stock: 1, pictureURL:"https://sporting.vteximg.com.br/arquivos/ids/379080-1000-1000/1076694-002-1.jpg?v=637696475063430000", categoria:"calzado"},
                    {id: "6", precio: 3900, titulo: "Jean Cenitho Celeste", stock: 1, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGX5inO3RavGoGlQtacZlMpjPxol5bvTobFg&usqp=CAU", categoria:"pantalones"},
                    {id: "7", precio: 4100, titulo: "Jean Cenitho Mom", stock: 2, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAigySTx576VB9GCdtKD8a687UL02UHH5qgA&usqp=CAU", categoria:"pantalones"},
                    {id: "8", precio: 4900, titulo: "Jean Cenitho Azul Oscuro", stock: 1, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-88IznGn7Xy0Z5CEINB53dO-a1NFL81B2Ew&usqp=CAU", categoria: "pantalones"},
                    {id: "9", precio: 6900, titulo: "Campera Urus Inflada Negra", stock: 4, pictureURL:"https://www.digitalsport.com.ar/files/products/572107edf35fa-394991-500x500.jpg", categoria:"abrigo"},
                    {id: "10", precio: 6900, titulo: "Campera Neoprene Columbia Negro", stock: 5, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC5oEsgZO-7iv1jYygCweow7StKFdkWa4pw&usqp=CAU", categoria:"abrigo"},
                    ])
                    

            }, 2000)
        })

        promesaProd
            .then((res) => {
                console.log(res)
                setProductos(res)
                setProdCategoria(res.filter(item => item.categoria === categoriaId));
            })
            .catch((err) => {
                console.log(err);
            })
           
        },[categoriaId])
 
    return(
        <>
            {(prodCategoria.length > 0) ?
            <>
             <h1>Estoy en la categoria {categoriaId}</h1>
            {prodCategoria.map(item=>
                            <div style={{display:'inline-block', maxWidth:"22em" ,textAlign:"center", alignItems:"center"}}>
                                <Container className="p-4">
                                    <Card className="p-4">
                                    <Card.Img src={item.pictureURL}/>
                                    <Card.Body>
                                        <Card.Text>
                                        <p>ITEM: N° {item.id}</p>
                                        <p>PRECIO: $ {item.precio}</p>
                                        <p>{item.titulo}</p>
                                        <p>CATEGORÍA: {item.categoria}</p>
                                        <p>STOCK: {item.stock}</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Link className="m-4" to={"/item/" + item.id}>VER MAS DETALLES</Link>
                                    </Card>
                                </Container>        
                                        </div>      
            )}
            </>
            :
            <>
            <ItemList productos={productos}/>
            
            
            </>       
            }
        </>
    )
}