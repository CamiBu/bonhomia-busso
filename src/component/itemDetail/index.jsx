
import React, { useContext } from "react";
import { Card } from 'react-bootstrap';
import { ItemCount } from '../itemCount';
import { useState } from "react"
import { ShopContext } from "../../context/CartContext";

export const ItemDetail = ({ product }) => {

    const context = useContext(ShopContext);

    const [cantidad, setCantidad] = useState()  // el primero es la variable - la segunda es la funcion modificadora de la primera
    const cantidadSelect = (qty) => {         // recibe un parametro de otro lado
        
        setCantidad(qty)                        // llama a otra funcion para que le de un valor a cantidad
       
    };

    return (
        <>
            <Card >
                <Card.Img src={product.pictureURL} />
                <Card.ImgOverlay>
                    <Card.Title> {product.title} </Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                   {cantidad ? "terminar compra" : <ItemCount cantidadSelect={cantidadSelect} stock={product.stock} initial="1" />}         
                </Card.ImgOverlay>
            </Card>


        </>
    )
}

export default ItemDetail;


