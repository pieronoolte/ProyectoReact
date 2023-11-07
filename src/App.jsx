import * as React from 'react'
import { Menu } from './components/navbar'

import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <header id="header">
        <Menu />
      </header>
    </div>
  )
}

export default App
