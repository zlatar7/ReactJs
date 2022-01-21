import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export default function Item (item){

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const promesaProd = new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve([
                    {id: 1, precio: 6500, titulo: "Zapatilla", stock: 4, pictureURL:"./img/zapatillas.png"},
                    {id: 2, precio: 8900, titulo: "Campera", stock: 2, pictureURL:"./img/campera.png"},
                    {id: 3, precio: 1800, titulo: "Jeans", stock: 8, pictureURL:"./img/jeans.png"},
                    ])

            }, 2000)
        })

        promesaProd
            .then((res) => {
                console.log(res)
                setProductos(res)
                
            })
            .catch((err) => {
                console.log(err);
            })


    }, [])
 
    return(
    <>
    {(productos.length > 0) ?
    
    
    <>
 {/*        {productos.map(item =>  {
        return <>
         <p>{item.id}</p>
            <p>{item.precio}</p>
            <p>{item.titulo}</p>
            <p>{item.stock}</p>
            <p>{item.pictureURL}</p>
        
        </>})}
         */}
        
        


        {productos.map(item => <ItemCount item={item} />)} 
    
    
    
    
    </>
    :
    <>
            cargando...
            </>
            
            
            
        }
    



{/* {productos.map(item => {
 return(
        <>
            <p>{item.id}</p>
            <p>{item.precio}</p>
            <p>{item.titulo}</p>
            <p>{item.stock}</p>
            <p>{item.pictureURL}</p>

        </>
        )

})}
*/}
    </>
    )
}