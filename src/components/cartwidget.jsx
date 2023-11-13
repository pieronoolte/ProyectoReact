import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
export const CartWidget = () => {
    return (
        <Nav.Item className="mx-4">
            <Button variant="danger">
                <FontAwesomeIcon icon={faCartShopping} />
            </Button>{' '}
            <div className="cart__count">
                <span className="cart__countproducts">5</span>
            </div>
        </Nav.Item>
    )
}
