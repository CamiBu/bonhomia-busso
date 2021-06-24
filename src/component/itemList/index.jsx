import  React from "react"; 
import { Item } from '../item'
import { Row } from 'react-bootstrap';



export const ItemList = ({productsList}) => {  
    return (
        <>
        <Row>
        {productsList.map(product => {
            return <Item product={product}/> 
        })
        }
        </Row>
    </>
    )
}

export default ItemList 