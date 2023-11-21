import React, {useContext,useEffect} from 'react'
import { Item } from './Item'
import { AccordionDetail } from './AccordionDetail';
import { useProduct } from '../hooks/useProduct'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useElement } from '../hooks/useElement';


export const ItemDetailContainer = () => {

  const { id } = useParams()
  const { product } = useProduct(false, id)
  const {addShopping, updateTotal} = useContext(CartContext);
  const {updateElementState, elementStates} = useElement()

  // const [elementStates, setElementStates] = useState({});
  // const updateElementState = (id, newState) => {
  //   setElementStates((prevStates) => ({
  //     ...prevStates,
  //     [id]: newState,
  //   }));
  //   console.log(elementStates[product.id])
  // };
// useEffect(() => {

// setTotal((product.price * (elementStates[product.id] || 1.0)).toFixed(2))
// }, [elementStates])

  return (
    <div className='container'>
      <div className='row'>

        <Item id={product.id} title={product.name} price={product.price} hiddenFirst={"d-none"} hiddenSecond={""} value={(newState)=>updateElementState(product.id,newState)}/>

        <div className='col-8 my-4'>
          <div className='border border-2 bg-body-tertiary m-5 p-2 rounded' >{product.content}</div>
          <AccordionDetail />
          <Button 
          type="button" 
          className='ms-5 my-3 fs-5 d-flex flex-row px-2' 
          variant="danger" 
          onClick={() => {
            addShopping(product)
            updateTotal((product.price * (elementStates[product.id] || 1.0)).toFixed(2))
          }}
          >
            <p className='m-1'>AGREGAR A TU PEDIDO</p>
            <span className='m-1'>{ `$${(product.price * (elementStates[product.id] || 1.0)).toFixed(2)}`}</span>
            </Button>
        </div>

      </div>
    </div>

  )
}
