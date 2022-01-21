import ItemList from "../ItemCount/ItemList"

const itemListContainer = ({greeting}) => {

    return(
        <>
        <p>{greeting}</p>
        <ItemList/>
        </>
    )
}
export default itemListContainer