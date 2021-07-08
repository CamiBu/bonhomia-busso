
import React from "react";
import { Card } from 'react-bootstrap';
import { ItemCount } from '../itemCount';
import { useState } from "react"

export const ItemDetail = ({ product }) => {
    const [ finalizarCompra , setFinalizarCompra ] = useState(null)
    function agregarAlCarrito (product) {
        setFinalizarCompra(finalizarCompra)
    }
    return (
        <>


            <Card>
                <Card.Img variant="top" src={product.pictureURL} />
                <Card.Body>
                    <Card.Title> {product.title} </Card.Title>
                    <Card.Text>
                        {product.description}
                        {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                {!finalizarCompra ? <ItemCount agregarAlCarrito={agregarAlCarrito} stock={product.stock} initial={1} /> : "finalizar compra"} 
                </Card.Footer>
            </Card>



        </>
    )
}

export default ItemDetail;


