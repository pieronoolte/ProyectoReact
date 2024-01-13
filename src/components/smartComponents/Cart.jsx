import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {collection, addDoc } from "firebase/firestore"
import { Loading } from '../dumbComponents/loading';
import { ToastShop } from '../dumbComponents/toast';
import {firebase} from '../../hooks/useFirebase'
import { CartView } from './CartView';

export const Cart = () => {
  

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [id, setID] = useState('')
  const [atribute, setAtribute] = useState(0)
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [])


  const [validated, setValidated] = useState(false);

  const {db} = firebase()
  const order = { name, email, phone, adress }
  const OrderCollection = collection(db, "Orders")

  const handleSubmitOne = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      setAtribute(1)
      setShowOne(true)
    }
    setValidated(true);
  }

  const handleSubmitTwo = (event) => {

    event.preventDefault();
    event.stopPropagation();

    if (atribute === 1) {
      addDoc(OrderCollection, order).then(({ id }) =>
        setID(id))
      setAtribute(0)
      setShowTwo(true)
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div id="main__form" className='mt-5 m-3'>
            <div>
              <h2 className="text-danger text-start mt-2">Datos del Cliente</h2>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmitOne}>
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
                  <Form.Control type="text" placeholder="Celphone" required onChange={(e) => setPhone(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Control type="text" placeholder="Adress" required onChange={(e) => setAdress(e.target.value)} />
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
              <FormGroup className='d-flex flex-row-reverse'>
                <Button className="px-4 mt-2 col-md-3" variant="danger" type='submit'>
                  Confirmar Datos
                </Button>
              </FormGroup>
            </Form>
            <ToastShop Show={showOne} onclose={() => setShowOne(false)} name="Confirmación de Datos!" />
          </div>
          <CartView/>
          <div className='d-flex flex-row-reverse m-3' >
            <Button className="px-4 mt-2 col-md-3" variant="danger" type='submit' onClick={handleSubmitTwo}>
              Confirmar Compra
            </Button>
            <ToastShop Show={showTwo} onclose={() => setShowTwo(false)} name="Confirmación de Compra!" />
          </div>
          <div>Su ID de pedido es: {id}</div>
        </>
      )}
    </>
  );
};
