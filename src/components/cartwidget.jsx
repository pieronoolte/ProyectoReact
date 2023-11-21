import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export const CartWidget = () => {

    const { shoppingList } = useContext(CartContext);
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (shoppingList.length > 0) {
            setCount(shoppingList.length)
        }
        console.log("hola")
        console.log(count)
    }, [shoppingList,count])

    return (
        <Nav.Item className="mx-5 my-2">
            <Button variant="danger">
                <FontAwesomeIcon icon={faCartShopping} />
            </Button>{' '}
            <div className="cart__count">
                <span className="cart__countproducts">{count}</span>
            </div>
        </Nav.Item>
    )
}
