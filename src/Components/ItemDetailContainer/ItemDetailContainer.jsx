import React, { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {

  const { itemId } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(()=>{
      setTimeout(()=>{
        
        const listadoDeProductos = [
        {id: "1", precio: 9800, nombre: 'Zapatillas Deportivas', categoria: 'Sayt', pictureURL:"./img/zapas.png"},
        {id: "2", precio: 5100, nombre: 'Jean', categoria: 'Oxford', pictureURL:"./img/jeans.png"},
        {id: "3", precio: 8400, nombre: 'Campera', categoria: 'Uniqlo', pictureURL:"./img/campera.png"}];

        setProducto(listadoDeProductos.filter(item=> item.id === itemId)[0]);

      }, 2000)
  }, [itemId])

  return (
    <>

      <ItemDetail producto={producto}/>
      
      <Link className="m-4" to={"/item/1"}>ir al item 1</Link>
      <Link className="m-4" to={"/item/2"}>ir al item 2</Link>
      <Link className="m-4" to={"/item/3"}>ir al item 3</Link>
      
    </>
  );
}