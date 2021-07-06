
import React from "react";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const Item = ({ product }) => {
  return (
    <>


      <Card className="col-md-4">
        <Link to={"/item/" + product.id}>
          <Card.Img variant="top" src={product.pictureURL} />
        </Link>
        <Card.Body>
          <Card.Title> {product.title} </Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Link to={"/item/" + product.id}>
            <button> Ver detalle </button>
          </Link>
        </Card.Body>

      </Card>



    </>
  )
}

export default Item;
