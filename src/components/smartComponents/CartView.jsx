import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import { ItemCount } from './ItemCount';
import { useElement } from '../../hooks/useElement';


export const CartView = () => {

    const { shoppingList, removeShopping } = useContext(CartContext);
    const { updateElementState, elementStates } = useElement();

    const calcularTotal = shoppingList.reduce((total, e) => total + e.total * (elementStates[e.id] || 1.0), 0).toFixed(2)
    console.log(shoppingList)

    return (
        <>
            <ul className='mt-5'>
                {shoppingList.map(e => (
                    <li className="list-group d-flex flex-row justify-content-around border m-2 my-2 p-3" key={e.id}>
                        <span className='mt-2'>{e.name}</span>
                        <p className='mt-2'>S{`${(e.total * (elementStates[e.id] || 1.0)).toFixed(2)}`}</p>
                        <ItemCount sendInfo={(newInfo) => updateElementState(e.id, newInfo)} max={10} />
                        <Button
                            type="button"
                            className='fs-5'
                            variant="danger"
                            onClick={() => {
                                
                                removeShopping(e.id)
                            console.log(shoppingList)}}
                        >
                            Remove
                        </Button>
                    </li>
                ))}
            </ul>
            <div className='d-flex justify-content-end'>
                <b className='mx-3 fs-1'>Total:</b>
                <span className='mx-3 fs-1'>${calcularTotal}</span>
            </div>
        </>
    )
}
