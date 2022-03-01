import React, { useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";

 export default function ItemListContainer () {

 const [productos, setProductos] = useState([]);
 const [prodCategoria, setProdCategoria] = useState([])
 const {categoriaId} = useParams(); 

 useEffect(() => {

    const db = getFirestore();

    const itemCollection = db.collection("items"); 

    itemCollection.get()
      .then((querySnapShot) => {

        if (querySnapShot.size === 0) {
          console.log('no hay documentos con en ese query');
          return
        }
        setProductos(querySnapShot.docs.map((doc)=> {
            return { id: doc.id, ...doc.data() }
        }
        ))
        setProdCategoria(querySnapShot.docs.map((doc)=> {
            return { id: doc.id, ...doc.data() }
        }
        ))
        ;
        
        })
      .catch((err)=>{
        console.log(err);
      })

}, [categoriaId])

 const resultCategoria = prodCategoria.filter((item)=> item.categoria === categoriaId)

    return(

<>
{/* CONDICIONAL PARA MOSTRAR EL LOADER */}

{(productos.length > 0) ?

// CONDICIONAL PARA MOSTRAR LA LISTA DE TODOS LOS PRODUCTOS O LAS CATEGORIAS

<>  {resultCategoria.categoria !== categoriaId ?

  // LISTA DE CATEGORIAS
    <>
    {(resultCategoria.length > 0 ) ?
    <>
      <h2>CATEGORIA: {categoriaId.toUpperCase()}</h2>
      {resultCategoria.map(item=>
        <div key={item.id} className="cardItem">
          <Card className="shadow-lg p-4 rounded border-primary border-2">
          <Card.Img className="border-primary border-bottom" src={item.pictureURL}/>
          <Card.Body>
            <Card.Text>
            <p>Precio: $ {item.precio}</p>
            <p>{item.titulo}</p>
            <p>Categoría: {item.categoria}</p>
            <p>Stock: {item.stock}</p>
            </Card.Text>
          </Card.Body>
          <Link className="links" to={"/item/" + item.id}>+ VER MAS DETALLES</Link>
          </Card>        
        </div>          
    )}
    </>
    :
    <>
    <Loader/>
    </>
    }
    </>
    :
    <>
    {/* LISTA DE TODOS LOS PRODUCTOS */}
    
          <ItemList productos={productos}/>
    </>
}       
    </>
:
<>
<Loader/>
</>


 }
        </>
    )
}