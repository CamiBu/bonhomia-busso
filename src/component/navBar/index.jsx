
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { } from '@fortawesome/free-brands-svg-icons';
import CartWidget from "../cartWidget";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">BNH</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <Nav.Link href="#pricing">Productos</Nav.Link>
        </Nav>

        <CartWidget />


      </Navbar>
    </>
  )
}

export default NavbarComponent;
