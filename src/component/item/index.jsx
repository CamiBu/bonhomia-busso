
import React from "react";
import { CardDeck, Card } from 'react-bootstrap';
import { ItemCount } from '../itemCount'

export const Item = ({ product }) => {
  return (
    <>
      <CardDeck>

        <Card>
          <Card.Img variant="top" src= { product.pictureURL } />
          <Card.Body>
            <Card.Title> {product.title} </Card.Title>
            <Card.Text>
              {product.description}
              {product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><ItemCount stock="20" initial="1" /></small>
          </Card.Footer>
        </Card>

      </CardDeck>

    </>
  )
}

export default Item;
