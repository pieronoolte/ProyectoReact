import React from 'react'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { ItemCarousel } from './Carousel';
import { useProduct } from '../hooks/useProduct';

export const ItemListContainer = () => {

  const { category } = useParams()
  const { products, hidden } = useProduct(true, category)

  return (
    <>
      <ItemCarousel dnone={hidden} />
      <ItemList listProducts={products} />
    </>

  )
}
