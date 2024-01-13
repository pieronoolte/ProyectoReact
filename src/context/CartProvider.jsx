import React, {useReducer,useState} from 'react'
import { CartContext } from './CartContext'


const CartProvider = ({ children }) => {
const [total,setTotal] = useState(0)


const initialState = []

const updateTotal= (newTotal) => {
    setTotal(newTotal)
    console.log(total)
};

  const comprasReducer =  (state = initialState, action = {}) =>{
    
    switch (action.type) {
      case '[CART] Agregar comprar':
        return [...state, Object.assign({}, action.payload, { quantity: 1, total: total })]
      case '[CART] Eliminar comprar':
        return state.filter(item => item.id !== action.payload.id)
      default:
        return state
    }
  }

  const [shoppingList, dispatch] = useReducer(comprasReducer, initialState)

  const addShopping = (newItem)=>{
    const action = {
      type: '[CART] Agregar comprar',
      payload: newItem
    }
    dispatch(action)
  }

  const removeShopping = (itemId)=>{
    const action = {
      type: '[CART] Eliminar comprar',
      payload: {id:itemId}
    }
    dispatch(action)
  }

  return (
    <CartContext.Provider value={{shoppingList, addShopping, removeShopping, updateTotal}}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider