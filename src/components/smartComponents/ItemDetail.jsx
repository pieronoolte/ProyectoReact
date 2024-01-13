import React, { useContext, useState } from 'react'

import Button from 'react-bootstrap/Button';
import { ToastShop } from '../dumbComponents/toast';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({product, price, element}) => {

    const { addShopping, updateTotal } = useContext(CartContext);
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (!clicked) {
            addShopping(product);
            updateTotal((price * (element || 1.0)).toFixed(2));
            setShow(true);
            setClicked(true);
        }
    };

    return (
        <>
            <Button
                type="button"
                className='ms-5 my-3 fs-5 d-flex flex-row px-2'
                variant="danger"
                onClick={handleClick}
            >
                <p className='m-1'>AGREGAR A TU PEDIDO</p>
                <span className='m-1'>{`$${(price * (element || 1.0)).toFixed(2)}`}</span>
            </Button>
            <ToastShop Show={show} onclose={() => setShow(false)} name="Se agregó al carrito!" />
        </>
    )
}
