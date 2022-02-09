import React, {useState, createContext} from "react";


export const contexto = createContext();

export default function CartContext ({children}){

    const [cart, setCart] = useState([]);

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

      const totalPrice = () => {
       return cart.map((item)=> item.item.precio * item.count).reduce((a, b) => a + b)
      }    

      const calculateAmount = () => {
        return cart.map((item)=> item.count).reduce((a, b) => a + b)
       }  
    return(
    <>
    <contexto.Provider value={{ cart, addToCart, deleteItem, clearCart, totalPrice, calculateAmount }}>
    {children}
    </contexto.Provider>

    </>
    )
}