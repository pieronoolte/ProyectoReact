import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from './ItemCount'
import { useElement } from '../hooks/useElement';

export const Item = ({ id, title, price, hiddenFirst, hiddenSecond, value=useElement}) => {
  return (
    <Card id={id} key={id} style={{ width: '18rem', height: '30.5rem' }} className='bg-body-tertiary m-4'>
      <Card.Img variant="top" style={{ width: '14rem' }} src={`/image${id}.png`} />
      <Card.Body>
        <Card.Title className='text-black font-weight-bold'>{title}</Card.Title>
        <Card.Title className='m-3'>$ {price}</Card.Title>

        <Button className={`px-4 mt-2 ${hiddenFirst}`} variant="danger">
          <Link  className='text-white' to={`/item/${id}`}> Ver detalle </Link>
        </Button>
        <div className={`px-4 mt-2 ${hiddenSecond}`} >
        <ItemCount sendInfo={value}/>
        </div>
      </Card.Body>
    </Card>
  )
}
