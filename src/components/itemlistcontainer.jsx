import React from 'react'

export const ItemListContainer = ({greeting}) => {
  return (
    <h2 className='m-5 text-danger shadow-lg rounded p-2 bg-body-tertiary'>{greeting}</h2>
  )
}
