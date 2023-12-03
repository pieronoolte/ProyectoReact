import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import { ItemCount } from './ItemCount';
import { useElement } from '../hooks/useElement';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdLYgDmf5Ci1WFMdDOZ73fTzH4xQTXDbo",
  authDomain: "bd-rect.firebaseapp.com",
  projectId: "bd-rect",
  storageBucket: "bd-rect.appspot.com",
  messagingSenderId: "565953072638",
  appId: "1:565953072638:web:a5a3a0bf0e83aa163504af"

};

const firebaseAp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseAp);

export const Cart = () => {
  const { shoppingList, removeShopping } = useContext(CartContext);
  const { updateElementState, elementStates } = useElement()
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [andress, setAdress] = useState('');
  const [id,setID]=useState('')


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [])

  const calcularTotal = shoppingList.reduce((total, e) => total + e.total * (elementStates[e.id] || 1.0), 0).toFixed(2)
  console.log(shoppingList)

  const [validated, setValidated] = useState(false);

  const order = {name, email, phone, andress}
  const OrderCollection = collection(db, "Orders")

  const handleSubmit = (event) => {
  
  
      event.preventDefault();
      event.stopPropagation();

      addDoc(OrderCollection, order).then(({id})=>
      setID(id))

    setValidated(true);
  };

  
  return (
    <>
      {loading ? (
        // Muestra el indicador de carga mientras 'loading' es true
        <p>Cargando...</p>
      ) : (
        <>
          <div id="main__form" className='mt-5 m-3'>
            <div>
              <h2 className="text-danger text-start mt-2">Datos del Cliente</h2>
            </div>
            <Form noValidate validated={validated}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">

                  <Form.Control
                    required
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="Celphone" required onChange={(e) => setPhone(e.target.value)}/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Control type="text" placeholder="Adress" required onChange={(e) => setAdress(e.target.value)}/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Policy and use of private data"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  className='d-flex justify-content-start gap-3'
                />
              </Form.Group>
              {/* <Button type="submit">Submit form</Button> */}
              <FormGroup className='d-flex flex-row-reverse'>
                  <Button className="px-4 mt-2 col-md-3" variant="danger" type='submit'>
                    Confirmar Datos
                  </Button>
                </FormGroup>
            </Form>
            {/* <Form>
              <fieldset className=' grid row needs-validation' noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Control id="disabledTextInput" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Control id="disabledTextInput" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Control id="disabledTextInput" placeholder="Cellphone" required onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Control id="disabledTextInput" placeholder="Adress" required onChange={(e) => setAdress(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    label="Policy and use of private data"
                    className='d-flex justify-content-start gap-3'
                  />
                </Form.Group>
                <FormGroup className='d-flex flex-row-reverse'>
                  <Button className="px-4 mt-2 col-md-3" variant="danger" type='submit'>
                    Confirmar Datos
                  </Button>
                </FormGroup>

              </fieldset>
            </Form>            </div> */}
            </div>
            <ul className='mt-5'>
              {shoppingList.map(e => (
                <li className="list-group d-flex flex-row justify-content-around border m-2 my-2 p-3" key={e.id}>
                  <span className='mt-2'>{e.name}</span>
                  <p className='mt-2'>S{`${(e.total * (elementStates[e.id] || 1.0)).toFixed(2)}`}</p>
                  <ItemCount sendInfo={(newInfo) => updateElementState(e.id, newInfo)} />
                  <Button
                    type="button"
                    className='fs-5'
                    variant="danger"
                    onClick={() => removeShopping(e.id)}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
            <div className='d-flex justify-content-end'>
              <b className='mx-3 fs-1'>Total:</b>
              <span className='mx-3 fs-1'>${calcularTotal}</span>
            </div>
            <div className='d-flex flex-row-reverse m-3' >
              <Button className="px-4 mt-2 col-md-3" variant="danger" type='submit' onClick={handleSubmit}>
                Confirmar Compra
              </Button>
            </div>
            <div>Su ID de pedido es: {id}</div>
          </>
      )}
        </>

      );
};
