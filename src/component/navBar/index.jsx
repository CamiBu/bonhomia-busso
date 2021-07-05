
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { } from '@fortawesome/free-brands-svg-icons';
import CartWidget from "../cartWidget";
import {NavLink} from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">BNH</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact={true} activeClassName="active" to="/"> HOME </Nav.Link>
          <Nav.Link as={NavLink} activeClassName="active" to="/category/A"> CATEGORIA A </Nav.Link>
          <Nav.Link as={NavLink} activeClassName="active" to="/category/B"> CATEGORIA B </Nav.Link>
        </Nav>

        <CartWidget />


      </Navbar>
    </>
  )
}

export default NavbarComponent;
