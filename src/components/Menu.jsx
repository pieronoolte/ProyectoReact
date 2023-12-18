import React from 'react'
import { CartWidget } from './Cartwidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



import 'bootstrap/dist/css/bootstrap.min.css';


export const Menu = () => {

  return (

    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='text-danger me-4 ms-2 fs-3'>Mr. Burger</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fs-5 mx-3">Noticias</Nav.Link>
              <Nav.Link className="fs-5 mx-3">Promociones</Nav.Link>
              <Nav.Link className="fs-5 mx-3">Locales</Nav.Link>
              <Nav.Link className="fs-5 mx-3">Soporte al Cliente</Nav.Link>
              <Nav.Link className="fs-5 mx-3">Sigue tu pedido</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Navbar expand="lg" className="bg-body-tertiary border w-70 ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Button variant="outline-danger" className="mx-1 my-1 fs-5"><Link className="nav__category" to={'/category/category1'}> Los Favority del King </Link></Button>{' '}
              <Button variant="outline-danger" className="ms-1 my-1 fs-5"><Link className="nav__category" to={'/category/category2'}> Promos para uno </Link></Button>{' '}
              <Button variant="outline-danger" className="ms-1 my-1 fs-5"><Link className="nav__category" to={'/category/category3'}> Las vegetales </Link></Button>{' '}
              <Button variant="outline-danger" className="ms-1 my-1 fs-5"><Link className="nav__category" to={'/category/category4'}> Las de Pollo</Link></Button>{' '}
              <Button variant="outline-danger" className="mx-1 my-1 fs-5"><Link className="nav__category" to={'/category/category5'}> Promo para dos</Link></Button>{' '}

              <Link to={'/cart'}>
                <CartWidget />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>
  )
}
