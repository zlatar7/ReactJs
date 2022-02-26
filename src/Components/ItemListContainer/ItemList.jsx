import Item from "./Item";
import React from "react";

export default function ItemList({productos}){
    return(
        <>
       {productos.map(producto => <Item key={producto.id} producto={producto}/>)} 

        </>
    )
}