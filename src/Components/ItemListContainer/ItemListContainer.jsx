import ListaDeProductos from "../ItemCount/ListaDeProductos"

const itemListContainer = ({greeting}) => {

    return(
        <>
        <p>{greeting}</p>
        <ListaDeProductos/>
        </>
    )
}
export default itemListContainer