
import React from "react";
import { Card } from 'react-bootstrap';
import { ItemCount } from '../itemCount'

export const ItemDetail = ({ product }) => {
    return (
        <>


            <Card>
                <Card.Img variant="top" src={ product.pictureURL } /> 
                <Card.Body>
                    <Card.Title> {product.title} </Card.Title>
                    <Card.Text>
                        {product.description}
                        {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><ItemCount stock={product.stock} initial="1" /></small>
                </Card.Footer>
            </Card>



        </>
    )
}

export default ItemDetail;


