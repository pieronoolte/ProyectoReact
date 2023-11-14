import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { json } from './product'


export const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    // const TraerDatosProductos = async () => {
    //     try {
    //         const response = await fetch('products.json')
    //         //     {
    //         //         headers : { 
    //         //             'Content-Type': 'application/json',
    //         //             'Accept': 'application/json'
    //         //            }
    //         // });
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(data);
    //             setProducts(data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    //     TraerDatosProductos();
    // }, [])
    
    useEffect(()=>{const updateArray = json.map(item => item);
        setProducts(updateArray);
    },[])
    
    return (
        <div className='d-flex flex-wrap'>
            {products.map(e =>
                <Card id={e.id} key={e.id} style={{ width: '18rem' }} className='bg-body-tertiary m-4'>
                    <Card.Img variant="top" style={{ width: '14rem' }} src={`/src/assets/image${e.id}.png`} />
                    <Card.Body>
                        <Card.Title className='text-black font-weight-bold'>{e.name}</Card.Title>
                        <Card.Title className='m-3'>$ {e.price}</Card.Title>

                        <Button className='px-4 mt-2' variant="danger">Ver mas</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}


