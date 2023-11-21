import React from 'react'
import { CartWidget } from './Cartwidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.min.css';


export const Menu = () => {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="fs-2 text-danger ms-5">
        <Link  className="text-danger" to={'/'}>Mr. Burger</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="mx-5 fs-4">Home</Nav.Link>
            <Nav.Link className="mx-5 fs-4">About</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown" className=" fs-4 mx-5">
              <NavDropdown.Item>
              <Link  className="text-secondary" to={'/category/category1'}> Los Favority del King </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link  className="text-secondary" to={'/category/category2'}> Promos para uno </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link  className="text-secondary" to={'/category/category3'}> Las vegetales </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link  className="text-secondary" to={'/category/category4'}> Las clasicas </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link  className="text-secondary" to={'/category/category5'}> Promo para dos </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Item className="mx-4" >
              <Form.Control type="text" placeholder="Search..." />
            </Nav.Item> */}
            <Link to={'/cart'}>
            <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
