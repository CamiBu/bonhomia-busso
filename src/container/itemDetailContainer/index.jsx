import React, { useState, useEffect } from "react";
import ItemDetail from '../../component/itemDetail';
import { useParams } from "react-router-dom";




function ItemDetailContainer({ greeting }) {

    const [product, setProduct] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const waitForData = async () => {
            const response = await fetch("/json/products.json")
            const json = await response.json()
            let pro = id ? json.filter(element => element.id === id) : json
            setProduct(pro)
        };
        waitForData();

    }, [id , product])




    return (
        <>
            <h1> {greeting} </h1>
            <ItemDetail product={product} />

        </>
    )
}
export default ItemDetailContainer;

