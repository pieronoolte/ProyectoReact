import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Loading = () => {
    return (
        <div className="d-flex flex-column justify-content-start align-items-center vh-100 mt-5">
            <p className='text-danger mx-3 fs-5'>Mr. Burger</p>
            <FontAwesomeIcon className="spinner__burger my-1" icon={faBurger} size="2xl" />
            <Spinner animation="border" variant="danger" size="xxl" />
        </div>
    )
}
