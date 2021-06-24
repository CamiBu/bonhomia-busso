import React from "react"; 
import { Item } from '../item'


export const ItemList = ({productsList}) => {  
    return (
        <>
        {productsList.map(product => {
            return <Item product={product}/> 
        })
        }
    </>
    )
}

export default ItemList 