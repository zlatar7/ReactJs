import { useState } from "react"
import { useContext, useEffect } from "react"
import { contexto } from "../Cart/CartContext"
import carrito from "./carrito.png"

const CartWidget = () =>{

    const {cart, /* calculateAmount */} = useContext(contexto);
    const [products, setProducts] = useState(0);
    
    useEffect(()=>{
        setProducts(cart.map((item)=>item.count))

/*         setProducts(cart.map((item)=>item.count).reduce((a, b) =>{ a + b}))
        setProducts(calculateAmount()) */
    },[cart])
    return(
    <>   
    <span className="carrito"> <img className="icono" src={carrito} alt="carrito"/>{products}</span>
    </>
    )
}

export default CartWidget