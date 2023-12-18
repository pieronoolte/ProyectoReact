import React, { useContext, useEffect, useState } from 'react'
import { Item } from './Item'
import { AccordionDetail } from './AccordionDetail';
import { useProduct } from '../hooks/useProduct'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useElement } from '../hooks/useElement';
import { Loading } from './loading';
import { ToastShop } from './toast';


export const ItemDetailContainer = () => {

  const { id } = useParams()
  const { product } = useProduct(false, id)
  const { addShopping, updateTotal } = useContext(CartContext);
  const { updateElementState, elementStates } = useElement()
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='container'>
          <div className='row'>

            <Item id={product.id} title={product.name} price={product.price} img={product.img} hiddenFirst={"d-none"} hiddenSecond={""} value={(newState) => updateElementState(product.id, newState)} max={10}/>

            <div className='col-8 my-4'>
              <div className='text-start ms-5 fw-bold'>Descripción:</div>
              <div className='border border-2 bg-body-tertiary mb-5 mx-5 mt-2 p-2 rounded' >{product.content}</div>
              <AccordionDetail value={(newState) => updateElementState(123, newState)}/>
              <Button
                type="button"
                className='ms-5 my-3 fs-5 d-flex flex-row px-2'
                variant="danger"
                onClick={() => {
                  addShopping(product);
                  updateTotal((product.price * (elementStates[product.id] || 1.0)).toFixed(2)+ 2 * (elementStates[123] || 0.0).toFixed(2));
                  setShow(true)
                }}
              >
                <p className='m-1'>AGREGAR A TU PEDIDO</p>
                <span className='m-1'>{`$${(product.price * (elementStates[product.id] || 1.0)).toFixed(2)}`}</span>
              </Button>
              <ToastShop Show={show} onclose={() => setShow(false)} name="Se agregó al carrito!"/>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
