import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { CardDeck, Card } from 'react-bootstrap';
import { ItemCount } from '../itemCount'

export const CardComponent = () => {  
    return (
        <>
       
        <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>PRODUCTO 1</Card.Title>
      <Card.Text>
        Esta va a ser la descripción del producto.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><ItemCount stock="20" initial="1" /></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>PRODUCTO 2</Card.Title>
      <Card.Text>
        Esta va a ser la descripción del producto.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><ItemCount stock="20" initial="1" /></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Producto 3</Card.Title>
      <Card.Text>
        Esta va a ser la descripción del producto.
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

export default CardComponent;
