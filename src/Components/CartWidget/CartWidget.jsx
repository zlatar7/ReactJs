
import carrito from "./carrito.png"

const CartWidget = ({cartCount}) =>{
    return(
    <>   
    <div className="carrito"> <img className="icono" src={carrito} alt="carrito"/>{cartCount}</div>
    </>
    )
}

export default CartWidget