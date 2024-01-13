import React from 'react'
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { ItemCount } from '../smartComponents/ItemCount'


export const AccordionDetail = () => {
  return (
    <Accordion className='m-5'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Elige tu hamburguesa*</Accordion.Header>
              <Accordion.Body className='bg-body-tertiary'>
                <Form>
                  {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        className='d-flex flex-row grid gap-2'
                        type={type}
                        id={`inline-${type}`}
                        label={`Whopper® Brava `}
                        name="group1"
                      />
                      <Form.Check
                        className='d-flex flex-row grid gap-2'
                        type={type}
                        id={`default-${type}`}
                        label={`Whopper® Tradicional`}
                        name="group1"
                      />
                      <Form.Check
                        className='d-flex flex-row grid gap-2'
                        type={type}
                        id={`default-${type}`}
                        label={`Whopper® Vegetal + $ 2.00 `}
                        name="group1"
                      />
                    </div>
                  ))}
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Elige tu pan*</Accordion.Header>
              <Accordion.Body className='bg-body-tertiary'>
                <Form>
                  {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        className='d-flex flex-row grid gap-2'
                        type={type}
                        id={`inline-${type}`}
                        label={`Pan Premiun`}
                        name="group1"
                      />
                      <Form.Check
                        className='d-flex flex-row grid gap-2'
                        type={type}
                        id={`default-${type}`}
                        label={`Pan Premiun`}
                        name="group1"
                      />
                    </div>
                  ))}
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Personaliza tus salsas (opcional)</Accordion.Header>
              <Accordion.Body className='bg-body-tertiary'>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Mayonesa</div>
                  <ItemCount sendInfo={e=>e} max={3}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Ketchup</div>
                  <ItemCount sendInfo={e=>e} max={3}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Mostaza</div>
                  <ItemCount sendInfo={e=>e} max={3}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Ají</div>
                  <ItemCount sendInfo={e=>e} max={2}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Salsa BBQ</div>
                  <ItemCount sendInfo={e=>e} max={2}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Salsa Stacker</div>
                  <ItemCount sendInfo={e=>e} max={2}/>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Personaliza tus toppings (opcional)</Accordion.Header>
              <Accordion.Body className='bg-body-tertiary'>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Pickles</div>
                  <ItemCount sendInfo={e=>e} max={2}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Cebolla</div>
                  <ItemCount sendInfo={e=>e} max={2} />
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Tomate</div>
                  <ItemCount sendInfo={e=>e} max={2}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Lechuga</div>
                  <ItemCount sendInfo={e=>e} max={2}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Queso Americano</div>
                  <ItemCount sendInfo={e=>e} max={2}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Crispy Onion</div>
                  <ItemCount sendInfo={e=>e} max={2}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Tocino</div>
                  <ItemCount sendInfo={e=>e} max={2}/>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>¿Se te antoja algo más?</Accordion.Header>
              <Accordion.Body className='bg-body-tertiary'>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>Pie de Manzana</div>
                  <ItemCount sendInfo={e=>e} max={5}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'> Nuggets x5</div>
                  <ItemCount sendInfo={e=>e} max={5}/>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='text-secondary bg-body-white p-3 text-center fw-bold'>King Fusion OREO® Vainilla</div>
                  <ItemCount sendInfo={e=>e} max={5}/>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
  )
}
