import React, {useState, createContext} from "react";


export const contexto = createContext();

export default function CartContext ({children}){

    const [cart, setCart] = useState([]);

    /* FUNCIÓN PARA AGREGAR LOS PRODUCTOS AL CARRO */

    const addToCart = (product, count) => {
        if (isInCart(product.id)){
          const indexItem = cart.findIndex(ele => ele.item.id === product.id);
          cart[indexItem].count = cart[indexItem].count + count;
          setCart([...cart]);
        } else {
          setCart([...cart, { item: product, count }])
        }
      }
    
      const deleteItem = (id) => {
        const updatedCart = cart.filter(element => element.item.id !== id)
        setCart(updatedCart);
      }
    
      const isInCart = (id) => {
        return cart.some(element => element.item.id === id)
      }
    
      const clearCart = () => {
        setCart([])
      }

      //Función que calcula el precio total de todos los items del carrito
      const totalPrice = () => {
        /*  return cart.map((item)=> item.item.precio * item.count).reduce((a, b) => a + b) */
      return  cart.reduce((a, b) => a + (b.item.precio * b.count),0)
      }    

      //Función que calcula la cantidad total de productos agregados al carrito
      const calculateAmount = () => {
      return cart.reduce((a, b) => a + b.count, 0)
       }

    return(
    <>
    <contexto.Provider value={{ cart, addToCart, deleteItem, clearCart, totalPrice, calculateAmount }}>
    {children}
    </contexto.Provider>

    </>
    )
}