import React, { useEffect, useState} from "react";
import ItemList from "./ItemList";

 export default function ItemListContainer () {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const promesaProd = new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve([
                    {id: 1, precio: 3900, titulo: "Zapatillas South Gris", stock: 2, pictureURL:"./img/zapas1.png", categoria:""},
                    {id: 2, precio: 4200, titulo: "Zapatillas South Negro", stock: 2, pictureURL:"./img/zapas2.png", categoria:""},
                    {id: 3, precio: 4200, titulo: "Zapatillas South Azul", stock: 4, pictureURL:"./img/zapas3.png", categoria:""},
                    {id: 4, precio: 5900, titulo: "Zapatillas Sayt Azul", stock: 3, pictureURL:"./img/zapas4.png", categoria:""},
                    {id: 5, precio: 5900, titulo: "Zapatillas Sayt Gris", stock: 1, pictureURL:"./img/zapas5.png", categoria:""},
                    {id: 6, precio: 5900, titulo: "Zapatillas Sayth Negro", stock: 1, pictureURL:"./img/zapas6.png", categoria:""},
                    {id: 7, precio: 6500, titulo: "Zapatillas Reigo Negro", stock: 5, pictureURL:"./img/zapas7.png", categoria:""},
                    {id: 8, precio: 6500, titulo: "Zapatillas Reigo Rojo", stock: 1, pictureURL:"./img/zapas8.png", categoria:""},
                    {id: 9, precio: 4900, titulo: "Zapatillas I-Run Azul/Fucsia", stock: 4, pictureURL:"./img/zapas9.png", categoria:""},
                    {id: 10, precio: 5500, titulo: "Zapatillas I-Run Bordó", stock: 2, pictureURL:"./img/zapas10.png", categoria:""},
                    {id: 11, precio: 5500, titulo: "Zapatillas I-Run Violeta", stock: 3, pictureURL:"./img/zapas11.png", categoria:""},
                    {id: 12, precio: 5500, titulo: "Zapatillas I-Run Azul", stock: 4, pictureURL:"./img/zapas12.png", categoria:""},
                    {id: 13, precio: 5500, titulo: "Zapatillas I-Run Negro/Fucsia", stock: 2, pictureURL:"./img/zapas13.png", categoria:""},
                    {id: 14, precio: 5500, titulo: "Zapatillas I-Run Azul/Verde", stock: 4, pictureURL:"./img/zapas14.png", categoria:""},
                    {id: 15, precio: 5500, titulo: "Zapatillas I-Run Azul/Violeta", stock: 3, pictureURL:"./img/zapas15.png", categoria:""},
                    {id: 16, precio: 3900, titulo: "Jean Cenitho Oxford", stock: 1, pictureURL:"./img/jeans1.png", categoria:""},
                    {id: 17, precio: 4100, titulo: "Jean Cenitho Mom", stock: 2, pictureURL:"./img/jeans2.png", categoria:""},
                    {id: 18, precio: 4900, titulo: "Jean Union Good", stock: 1, pictureURL:"./img/jeans3.png", categoria:""},
                    {id: 19, precio: 3900, titulo: "Jean Ask Azul Claro", stock: 1, pictureURL:"./img/jeans4.png", categoria:""},
                    {id: 20, precio: 3900, titulo: "Jean Ask Azul Oscuro", stock: 4, pictureURL:"./img/jeans5.png", categoria:""},
                    {id: 21, precio: 4000, titulo: "Jean Nahana Básico", stock: 5, pictureURL:"./img/jeans6.png", categoria:""},
                    {id: 22, precio: 5100, titulo: "Jean Hugs Negro Gastado", stock: 6, pictureURL:"./img/jeans7.png", categoria:""},
                    {id: 23, precio: 6900, titulo: "Campera Urus Bordó", stock: 4, pictureURL:"./img/campera1.png", categoria:""},
                    {id: 24, precio: 6900, titulo: "Campera Urus Gris", stock: 5, pictureURL:"./img/campera2.png", categoria:""},
                    {id: 25, precio: 6900, titulo: "Campera Urus Marrón", stock: 2, pictureURL:"./img/campera3.png", categoria:""},
                    {id: 26, precio: 6900, titulo: "Campera Urus Azul", stock: 1, pictureURL:"./img/campera4.png", categoria:""},
                    {id: 27, precio: 6900, titulo: "Campera Urus Morada", stock: 5, pictureURL:"./img/campera5.png", categoria:""},
                    {id: 28, precio: 6900, titulo: "Campera Urus Negra", stock: 4, pictureURL:"./img/campera6.png", categoria:""},
                    {id: 29, precio: 6900, titulo: "Campera Urus Gris Oscuro", stock: 3, pictureURL:"./img/campera7.png", categoria:""},
                    ])
                   
            }, 2000)
        })

        promesaProd
            .then((res) => {
                console.log(res)
                setProductos(res)
                
            })
            .catch((err) => {
                console.log(err);
            })
    },[])


    return(
        <>
            {(productos.length > 0) ?
            <> <ItemList productos={productos}/> </>
            :
            <> CARGANDO LA PÁGINA </>       
            }
        </>
    )
}