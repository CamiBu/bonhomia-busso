import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { CardDeck, Card } from 'react-bootstrap';

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
      <small className="text-muted">Acá van a ir las cuotas</small>
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
      <small className="text-muted">Acá van a ir las cuotas</small>
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
      <small className="text-muted">Acá van a ir las cuotas</small>
    </Card.Footer>
  </Card>
</CardDeck>
        
        </>
    )
}

export default CardComponent;
