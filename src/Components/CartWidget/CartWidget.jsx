import React from "react"
import carrito from "./carrito.png"

const CartWidget = ({cartCount}) =>{
    return(
    <>   
    <div className="carrito"> <img src={carrito} alt="carrito"/>{cartCount}</div>
    </>
    )
}

export default CartWidget