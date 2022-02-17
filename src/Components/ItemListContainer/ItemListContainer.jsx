import React, { useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams, Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { getFirestore } from "../../firebase";
import Loader from "../Loader/Loader";

 export default function ItemListContainer () {

    const [productos, setProductos] = useState([]);
    const [prodCategoria, setProdCategoria] = useState([])
    const {categoriaId} = useParams(); 

    useEffect(() => {

        const db = getFirestore();
    
        const itemCollection = db.collection("items"); 

        const coleccion = itemCollection

        itemCollection.get()
          .then((querySnapShot) => {
    
            if (querySnapShot.size === 0) {
              console.log('no hay documentos con en ese query');
              return
            }
            setProductos(querySnapShot.docs.map((doc)=> {
                return { id: doc.id, ...doc.data() }
            }
            ));
            
        })
          .catch((err)=>{
            console.log(err);
          })

          coleccion.get()
          .then((querySnapShot) => {
    
            if (querySnapShot.size === 0) {
              console.log('no hay documentos con en ese query');
              return
            }
            setProdCategoria(querySnapShot.docs.map((doc)=> {
                return { id: doc.id, ...doc.data() }
            }
            ));
          
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

/* CONDICIONAL PARA MOSTRAR TODOS LOS PRODUCTOS O LAS CATEGORIAS */
        <>  {resultCategoria.categoria !== categoriaId ?

            <>
            {(resultCategoria.length > 0 ) ?
            <>
                  <h2>CATEGORIA: {categoriaId.toUpperCase()}</h2>
                  {resultCategoria.map(item=>
                      <div className="cards">
                          <Container className="p-4">
                              <Card className="p-4">
                              <Card.Img src={item.pictureURL}/>
                              <Card.Body>
                                  <Card.Text>
                                  <p>Precio: $ {item.precio}</p>
                                  <p>{item.titulo}</p>
                                  <p>Categoría: {item.categoria}</p>
                                  <p>Stock: {item.stock}</p>
                                  </Card.Text>
                              </Card.Body>
                              <Link className="m-4" to={"/item/" + item.id}>VER MAS DETALLES</Link>
                              </Card>
                          </Container>        
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