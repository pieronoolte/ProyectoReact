import React from 'react'
import { Item } from './Item';


export const ItemList = ({listProducts}) => {

    return (
        <div className='d-flex flex-wrap'>
            {listProducts.map(e =>
                    <Item 
                    id={e.id} 
                    title={e.name} 
                    price={e.price} 
                    hiddenFirst={""}
                    img={e.img}
                    hiddenSecond={"d-none"}
                    />
            )}
        </div>
    )
}


