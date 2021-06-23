import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { CardDeck, Card } from 'react-bootstrap';
import { ItemCount } from '../itemCount'

export const CardComponent = ({products}) => {  
    return (
        <>
        <CardDeck>

          <Card>
            <Card.Img variant="top" src="holder.js/100px160"/>
            <Card.Body>
              <Card.Title> {products.title} </Card.Title>
              <Card.Text>
              {products.description}
              {products.price}
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
