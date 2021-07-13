import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../../component/itemList';


function ItemListContainer() {

    const [products, setProducts] = useState([])
    const {id} = useParams ();

    useEffect(() => {

        const waitForData = async () => {
            const response = await fetch("/json/products.json")
            const json = await response.json()
            let aux = id ? json.filter (element => element.category === id) : json   
            
            setProducts(aux)
             
        };
        waitForData();

    }, [id])

    return (
        <>
         
            <ItemList productsList={products} />

        </>
    )
}
export default ItemListContainer;
