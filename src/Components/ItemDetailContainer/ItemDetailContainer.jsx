import React, { useState, useEffect, useContext} from "react";
import {useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { contexto } from "../Cart/CartContext";
import Loader from "../Loader/Loader";
import {getFirestore} from "../../firebase";

export default function ItemDetailContainer() {

  const { addToCart } = useContext(contexto);

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {

    setLoading(true);

    // SE OBTIENE LA COLECCIÓN "ITEMS" DE LA BASE DE DATOS DE FIRESTORE

    const db = getFirestore();
    
    const itemCollection = db.collection("items");

    const miItem = itemCollection.doc(itemId);

    miItem.get()    
      .then((doc) => {

        if (!doc.exists) {
          console.log('no existe ese documento');
          return
        }

        console.log('item found');
        setProducto({ id: doc.id, ...doc.data() });

      })
      .catch((err)=>{
        console.log(err);
      })
      .finally(() => setLoading(false))
  },[itemId])

//EL ITEM ES AGREGADO

const onAdd = (count) => {
    addToCart(producto, count);
    setAdded(true);
  }

  return (
    <>
       {loading ? <Loader /> : <ItemDetail onAdd={onAdd} producto={producto} added={added} />}
    </>
  );
}