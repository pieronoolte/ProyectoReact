import React, { useState } from 'react'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { ItemCarousel } from './Carousel';
import { useProduct } from '../hooks/useProduct';
import { useEffect } from 'react';
import { Loading } from './loading';


export const ItemListContainer = () => {

  const { category } = useParams()
  const { products, hidden } = useProduct(true, category)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [category])
  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <>
          <ItemCarousel dnone={hidden} />
          <ItemList listProducts={products} />
        </>
      )}
    </>
  )
}
