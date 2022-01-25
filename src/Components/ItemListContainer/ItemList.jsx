import Item from "./Item";
import React from "react";
/* import { BrowserRouter, Switch, Route } from 'react-router-dom'; */

export default function ItemList({productos}){
    return(
        <>
       {productos.map(producto => <Item producto={producto}/>)} 

        </>
    )
}