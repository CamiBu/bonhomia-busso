
import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';

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
        </Navbar>
        </>
    )
}

export default NavbarComponent;
