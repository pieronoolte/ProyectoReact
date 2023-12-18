import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const ToastShop = ({Show, onclose, name}) => {
    return (
        <ToastContainer
            className="p-3"
            position="bottom-end"
            style={{ zIndex: 1 }}
        >
            <Toast show={Show} onClose={() => onclose()} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2 p-3"
                        alt=""
                    />
                    <strong className="me-auto">{name}</strong>
                    <small>1 min ago</small>
                </Toast.Header>
            </Toast>
        </ToastContainer>
    )
}
