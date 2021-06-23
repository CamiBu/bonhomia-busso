import React, {useState , useEffect} from "react";
import CardComponent from '../../component/cardComponent';


function CardContainer() {
    
    const[ products, setProducts ] = useState([])
    
    useEffect(async () =>{  
        const response = await fetch("./json/products.json")
        const json = await response.json()
        setProducts(json)
     },[])

    return (
        <>
            <CardComponent products={products} /> 

        </> 
    )
}
export default CardContainer;
