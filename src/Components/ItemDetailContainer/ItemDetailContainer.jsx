import React, { useState, useEffect, useContext} from "react";
import {useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { contexto } from "../Cart/CartContext";
import Loader from "../Loader/Loader";


export default function ItemDetailContainer() {

  const { addToCart } = useContext(contexto);

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const { itemId } = useParams();

  useEffect(()=>{
      
  setLoading(true);

  const promesaProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        
        resolve([
            {id: "1", precio: 9800, titulo: "Zapatillas Nike Gris/Negro", stock: 2, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOB_MWGJC4R-tQi91-E7H-pfk9jSkQ-qvqOhyQCKyNxDIwPnJuB-wiCJ29E4hzI_kwX0&usqp=CAU", marca:"Nike",
             descripcion:"Zapatillas ideales para runners. Livianas y con las suelas reforzadas. Todos sus materiales son ecológicos."},
            {id: "2", precio: 7000, titulo: "Zapatillas Reebok Blancas", stock: 2, pictureURL:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zapatillas-reebok-1578400249.png?crop=1.00xw:0.789xh;0,0.174xh&resize=480:*", marca:"Reebok",
             descripcion:"Estas zapatillas poseen la mejor relacion precio-calidad del mercado. Sus materiales son reforzados, lo que las convierten en unas de las mas duraderas."},
            {id: "3", precio: 11050, titulo: "Zapatillas Adidas Azul", stock: 4, pictureURL:"https://m.media-amazon.com/images/I/31voj3Ay-gS._SL500_.jpg", marca:"Adidas",
             descripcion:"Zapatillas de exelente estilo, ideales para hacer deportes como para uso cotidiano."},
            {id: "4", precio: 8900, titulo: "Zapatillas Puma Rojas", stock: 3, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCeKfGA3q7Coc3YL_EdLjg_URE4rPCrtpxA&usqp=CAU", marca:"Puma",
             descripcion:"Este calzado es la última linea de Puma. Están diseñadas con el objetivo de lograr el mejor confort al caminar."},
            {id: "5", precio: 9500, titulo: "Zapatillas Puma Azul", stock: 1, pictureURL:"https://sporting.vteximg.com.br/arquivos/ids/379080-1000-1000/1076694-002-1.jpg?v=637696475063430000", marca:"Puma",
             descripcion:"Este calzado se encuentra diseñado para usos deprotivos como urbano, y en la gama premium dentro de esta linea limitida."},
            {id: "6", precio: 4100, titulo: "Jean Cenitho Celeste", stock: 1, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGX5inO3RavGoGlQtacZlMpjPxol5bvTobFg&usqp=CAU", marca:"Cenitho",
             descripcion:"Jean de tiro alto elastizado, color celeste. Posee un lavado en la parte posterior y anterior. Estilo tobillero."},
            {id: "7", precio: 4200, titulo: "Jean Cenitho Mom", stock: 2, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAigySTx576VB9GCdtKD8a687UL02UHH5qgA&usqp=CAU", marca:"Cenitho",
             descripcion:"Pantalón Mom con lazo para ajustar en la cintura, tiro medio. Estilo baggy."},
            {id: "8", precio: 3900, titulo: "Jean Cenitho Azul Oscuro", stock: 1, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-88IznGn7Xy0Z5CEINB53dO-a1NFL81B2Ew&usqp=CAU", marca: "Cenitho",
             descripcion:"Jean clásico, sin lavado y de tiro medio. Exelente precio de acuerdo a la calidad de esta marca. Edición limitada."},
            {id: "9", precio: 6900, titulo: "Campera Inflada Negra", stock: 4, pictureURL:"https://www.digitalsport.com.ar/files/products/572107edf35fa-394991-500x500.jpg", marca:"Urus",
             descripcion:"Abrigo de invierno relleno con pluma. Cómodo para el uso cotidiano y el trabajo. Último en todo lo que es moda."},
            {id: "10", precio: 6900, titulo: "Campera Neoprene Columbia Negro", stock: 5, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC5oEsgZO-7iv1jYygCweow7StKFdkWa4pw&usqp=CAU", marca:"Columbia",
             descripcion:"Abrigo de material neoprene, cómodo y liviano, ideal para montaña o actividades recreativas. Capucha desmontable y bolsillos con cierre"},
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
    .finally(() => setLoading(false))
},[itemId])

const onAdd = (count) => {
  alert(`Se ha agregado ${count} ${producto.titulo} al carrito.`);
  addToCart(producto, count);
  setAdded(true);
}


  return (
    <>
       {loading ? <Loader /> : <ItemDetail onAdd={onAdd} producto={producto} added={added} />}
    </>
  );
}