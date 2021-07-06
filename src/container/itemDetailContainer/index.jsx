import React, { useState, useEffect } from "react";
import ItemDetail from '../../component/itemDetail';
import { useParams } from "react-router-dom";




function ItemDetailContainer({ greeting }) {

    const [product, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
        const waitForData = async () => {
            const response = await fetch("/json/products.json")
            const json = await response.json()
            let pro = json.find(element => element.id === parseInt(id))
            setProduct(pro)
            
        };
        waitForData();

    }, [ id ])




    return (
        <>
            <h1> {greeting} </h1>
            { product ?  <ItemDetail product={product} /> : "no existe producto"}

        </>
    )
}
export default ItemDetailContainer;

