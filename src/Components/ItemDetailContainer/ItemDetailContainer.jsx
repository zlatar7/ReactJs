import React, { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {

  const { itemId } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(()=>{
      
  const promesaProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        
        resolve([
            {id: "1", precio: 3900, titulo: "Zapatillas Nike Gris/Negro", stock: 2, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOB_MWGJC4R-tQi91-E7H-pfk9jSkQ-qvqOhyQCKyNxDIwPnJuB-wiCJ29E4hzI_kwX0&usqp=CAU", marca:"Nike"},
            {id: "2", precio: 4200, titulo: "Zapatillas Reebok Blancas", stock: 2, pictureURL:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zapatillas-reebok-1578400249.png?crop=1.00xw:0.789xh;0,0.174xh&resize=480:*", marca:"Reebok"},
            {id: "3", precio: 4200, titulo: "Zapatillas Adidas Azul", stock: 4, pictureURL:"https://m.media-amazon.com/images/I/31voj3Ay-gS._SL500_.jpg", marca:"Adidas"},
            {id: "4", precio: 5900, titulo: "Zapatillas Puma Rojas", stock: 3, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCeKfGA3q7Coc3YL_EdLjg_URE4rPCrtpxA&usqp=CAU", marca:"calPumazado"},
            {id: "5", precio: 5900, titulo: "Zapatillas Puma Azul", stock: 1, pictureURL:"https://sporting.vteximg.com.br/arquivos/ids/379080-1000-1000/1076694-002-1.jpg?v=637696475063430000", marca:"Puma"},
            {id: "6", precio: 3900, titulo: "Jean Cenitho Celeste", stock: 1, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGX5inO3RavGoGlQtacZlMpjPxol5bvTobFg&usqp=CAU", marca:"Cenitho"},
            {id: "7", precio: 4100, titulo: "Jean Cenitho Mom", stock: 2, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAigySTx576VB9GCdtKD8a687UL02UHH5qgA&usqp=CAU", marca:"Cenitho"},
            {id: "8", precio: 4900, titulo: "Jean Cenitho Azul Oscuro", stock: 1, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-88IznGn7Xy0Z5CEINB53dO-a1NFL81B2Ew&usqp=CAU", marca: "Cenitho"},
            {id: "9", precio: 6900, titulo: "Campera Inflada Negra", stock: 4, pictureURL:"https://www.digitalsport.com.ar/files/products/572107edf35fa-394991-500x500.jpg", marca:"Urus"},
            {id: "10", precio: 6900, titulo: "Campera Neoprene Columbia Negro", stock: 5, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC5oEsgZO-7iv1jYygCweow7StKFdkWa4pw&usqp=CAU", marca:"Columbia"},
            ])

    }, 2000)
})

promesaProd
    .then((res) => {
        console.log(res)
        setProducto(res.filter(item=> item.id === itemId)[0]);
        
    })
    .catch((err) => {
        console.log(err);
    })
},[itemId])


  return (
    <>
      <ItemDetail producto={producto}/>

      <Link className="m-4" to={"/"}>VOLVER AL INICIO</Link>    
    </>
  );
}