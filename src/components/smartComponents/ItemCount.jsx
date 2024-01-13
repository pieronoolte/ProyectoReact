import React from 'react'
import { useCount } from '../../hooks/useCount'
import Button from 'react-bootstrap/Button';

export const ItemCount = ({sendInfo,max}) => {
  
const {decrement, increment, count}=useCount(1,1,max)

const handleClickIncrement = () => {
  if(count <= (max-1) ) sendInfo(count+1)
  increment()
}

const handleClickDecrement = () => {
  sendInfo(count-1)
  decrement()
}

  return (
    <div className="d-flex flex-row justify-content-center">
      <Button className="m-2 fw-bold border" variant="black" onClick={handleClickDecrement}>-</Button>
      <div className='text-secondary bg-body-white p-3 text-center fw-bold'>{count}</div>
      <Button className='m-2 fw-bold border' variant="black" onClick={handleClickIncrement}>+</Button>
    </div>
  )
}
