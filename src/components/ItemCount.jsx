import React from 'react'
import { useCount } from '../hooks/useCount'
import Button from 'react-bootstrap/Button';

export const ItemCount = ({sendInfo}) => {
  
const {decrement, increment, count}=useCount(1,0,10)

const handleClickIncrement = () => {
  increment()
  sendInfo(count+1)
}

const handleClickDecrement = () => {
  decrement()
  sendInfo(count-1)
}

  return (
    <div className="d-flex flex-row justify-content-center">
      <Button className="m-2 fw-bold border" variant="black" onClick={handleClickDecrement}>-</Button>
      <div className='text-secondary bg-body-white p-3 text-center fw-bold'>{count}</div>
      <Button className='m-2 fw-bold border' variant="black" onClick={handleClickIncrement}>+</Button>
    </div>
  )
}
