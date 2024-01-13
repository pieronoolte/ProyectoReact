import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../smartComponents/ItemCount'
import { useElement } from '../../hooks/useElement';


export const Item = ({ id, title, price, img, hiddenFirst, hiddenSecond, value, max}) => {
  return (
    <Card id={id} key={id} style={{ width: '18rem', height: '29rem' }}  className='bg-body-tertiary m-4'>
      <Card.Img variant="top" style={{ width: '14rem' }} src={img} />
      <Card.Body>
        <Card.Title className='text-black font-weight-bold d-flex align-items-center justify-content-center' style={{ height: '4rem' }}>{title}</Card.Title>
        <Card.Title className='mx-3 my-2'>$ {price ? price.toFixed(2): price}</Card.Title>

        <Button className={`px-4 mt-2 ${hiddenFirst}`} variant="danger">
          <Link  className='text-white' to={`/item/${id}`}> Ver detalle </Link>
        </Button>
        <div className={`px-4 mt-2 ${hiddenSecond}`} >
        <ItemCount sendInfo={value} max={max}/>
        </div>
      </Card.Body> 
    </Card>
  )
}
