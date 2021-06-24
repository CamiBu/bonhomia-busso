import React, { useState, useEffect } from "react";
import ItemList from '../../component/itemList';


function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const waitForData = async () => {
            const response = await fetch("./json/products.json")
            const json = await response.json()
            setProducts(json)
        };
        waitForData();

    }, [])

    return (
        <>
            <h1> {greeting} </h1>
            <ItemList productsList={products} />

        </>
    )
}
export default ItemListContainer;
