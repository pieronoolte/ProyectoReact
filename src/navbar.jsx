import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';


export const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="fs-3" href="#home">Mr. Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="mx-4" href="#home">Home</Nav.Link>
            <Nav.Link className="mx-4" href="#link">Shops</Nav.Link>
            <Nav.Link className="mx-4" href="#link">Offers</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown" className="mx-4">
              <NavDropdown.Item href="#action/3.1">Men's Fashion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Women's Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Beuty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Health</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Outlet
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="mx-4" >
            <Form.Control type="text" placeholder="Search..." />
            </Nav.Item>
            <Nav.Item className="mx-4">
              <Button variant="secondary">Search</Button>{' '}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>

  )
}
