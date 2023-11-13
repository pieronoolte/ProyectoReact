import React from 'react'
import { CartWidget } from './cartwidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';



import 'bootstrap/dist/css/bootstrap.min.css';


export const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="fs-3 text-danger">Mr. Burger</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="mx-4">Home</Nav.Link>
            <Nav.Link className="mx-4">Shops</Nav.Link>
            <Nav.Link className="mx-4">Offers</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown" className="mx-4">
              <NavDropdown.Item>Men's Fashion</NavDropdown.Item>
              <NavDropdown.Item>
                Women's Fashion
              </NavDropdown.Item>
              <NavDropdown.Item >Beuty</NavDropdown.Item>
              <NavDropdown.Item >Health</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Outlet
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="mx-4" >
              <Form.Control type="text" placeholder="Search..." />
            </Nav.Item>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
