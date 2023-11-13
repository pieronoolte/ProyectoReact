import * as React from 'react'
import { Menu } from './components/navbar'
import { ItemListContainer } from './components/itemlistcontainer';
import { Logo } from './components/logo';


import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { ItemDetailContainer } from './components/itemdetailcontainer';


function App() {
  return (
    <div className='App'>
      <header id="header">
        <Logo />
        <Menu />
        <ItemListContainer greeting={"Bienvenido a React Proyect"} />
        <ItemDetailContainer title={"Combo Carritellera"} price={"S/. 30.80"}/>
      </header>
    </div>
  )
}

export default App;
library.add(fab, fas, far)
