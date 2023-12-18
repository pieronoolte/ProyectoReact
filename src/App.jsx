import * as React from 'react'
import { Cart } from './components/Cart'
import { ItemListContainer } from './components/itemlistcontainer'
import { ItemDetailContainer } from './components/itemdetailcontainer'
import { Menu } from './components/Menu'



import { Logo } from './components/Logo';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import CartProvider from './context/CartProvider';





function App() {
  return (
    <div className='App'>
      <header id="header">
        
        <BrowserRouter>
        <CartProvider>
            <Logo />
            <Menu />

            <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path='/' element={<Menu />} />
              <Route exact path='/cart' element={<Cart />} />
              <Route exact path='/item/:id' element={<ItemDetailContainer />} />
              <Route exact path='/category/:category' element={<ItemListContainer />} />
            </Routes>
            </CartProvider>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App;
library.add(fab, fas, far)
