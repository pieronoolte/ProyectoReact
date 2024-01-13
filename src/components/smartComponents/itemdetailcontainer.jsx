import React, {useEffect, useState } from 'react'
import { Item } from '../dumbComponents/Item'
import { AccordionDetail } from '../dumbComponents/AccordionDetail';
import { useProduct } from '../../hooks/useProduct'
import { useParams } from 'react-router-dom'
import { useElement } from '../../hooks/useElement';
import { Loading } from '../dumbComponents/loading';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {

  const { id } = useParams()
  const { product } = useProduct(false, id)
  const [loading, setLoading] = useState(true);
  const { updateElementState,elementStates} = useElement()

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
              <AccordionDetail/>
              <ItemDetail product={product} price={product.price} element={elementStates[product.id]}/>
           </div>

          </div>
        </div>
      )}
    </>
  )
}
