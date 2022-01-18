import React, {useState} from "react";
import ItemCount from "./ItemCount";


export default function ListaDeProductos(){

    const [arrayDeProductos, setArrayDeProductos] = useState([
    {nombre: "Zapatilla", stock: 4},
    {nombre: "Campera", stock: 2},
    {nombre: "Remera", stock: 8},
    ]);


    return(
        <>
       {arrayDeProductos.map(item => <ItemCount item={item} />)}
      
        </>
    )
}