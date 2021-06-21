
import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';
import CartWidget from "../cartWidget";

const NavbarComponent =()=> {
    return (
        <>
          <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">BNH</Navbar.Brand>
          
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Productos</Nav.Link>
          </Nav>
          
          <Form inline>
         
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Buscar</Button>
          </Form>
          <CartWidget/>
           
          
        </Navbar>
        </>
    )
}

export default NavbarComponent;
