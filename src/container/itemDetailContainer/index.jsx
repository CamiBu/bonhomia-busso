import React, { useState, useEffect } from "react";
import ItemDetail from '../../component/itemDetail';



function ItemDetailContainer({ greeting }) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const waitForData = async () => {
            const response = await fetch("./json/products.json")
            const json = await response.json()
            setProduct(json[0])
        };
        waitForData();

    }, [])

    return (
        <>
            <h1> {greeting} </h1>
            <ItemDetail product={product} />

        </>
    )
}
export default ItemDetailContainer;

