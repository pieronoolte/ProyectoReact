import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link  className="text-danger" to={'/'}>
    <div className='fs-1 m-5 d-flex flex-row justify-content-center'>
        <p className='text-danger mx-3 mt-4'>Mr.</p>
        <FontAwesomeIcon className="logo__burger" icon={faBurger}  size="2xl"/>
        <p className='text-danger mx-3 mt-4'>Burger</p>
    </div>
    </Link>
  )
}