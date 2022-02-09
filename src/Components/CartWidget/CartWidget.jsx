
import carrito from "./carrito.png"

const CartWidget = ({cartCount}) =>{
    return(
    <>   
    <span className="carrito"> <img className="icono" src={carrito} alt="carrito"/>{cartCount}</span>
    </>
    )
}

export default CartWidget