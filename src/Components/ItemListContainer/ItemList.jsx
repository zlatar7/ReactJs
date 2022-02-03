import Item from "./Item";
import React from "react";

export default function ItemList({productos}){
    return(
        <>
       {productos.map(producto => <Item producto={producto}/>)} 

        </>
    )
}