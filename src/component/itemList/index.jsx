import React from "react"; 
import { cardComponent } from '../cardComponent'


export const ItemList = (products) => {  
    return (
        <>
        {products.map(product => {
            return <cardComponent product={product} key={product.id}/> 
        })
        }
    </>
    )
}

export default Itemlist 