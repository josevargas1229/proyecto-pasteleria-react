import React, { useRef, useState } from 'react';
import { Form, Button, Card, FloatingLabel, Alert, Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import useFetch from '../../helpers/useFetch';
import { useForm } from 'react-hook-form';
import useAuth from '../../auth/useAuth';
import '../../Estilos.css'
const Registro = () => {
  const [datos, setDatos] = useState('Personales');
  const { data, loading } = useFetch('http://localhost:4000/questions')

  const { register, handleSubmit, formState: { errors, isValid, touchedFields } } = useForm({ mode: 'onTouched' })
  const { signup } = useAuth()
  const navRef = useRef(null);
  const changeDatos = (newDatos) => {
    setDatos(newDatos);
  };
  const onSubmit = handleSubmit(async (values) => {
    console.log(values)
    signup(values)
  })
  const handleNext = () => {
    changeDatos('Cuenta');
    navRef.current.querySelector('a[data-nav="Cuenta"]').click();
  };

  const handleBack = () => {
    changeDatos('Personales');
    navRef.current.querySelector('a[data-nav="Personales"]').click();
  };
  return (
    <div style={{ minHeight: '100%', maxWidth: '100%' }} className='backGroundRegistro'>
      <Row className='justify-content-md-center' style={{ minWidth: '100%', minHeight: '100%', maxWidth: '100%' }}>
        <Col className='mb-5'>
          <Container style={{ width: '30rem' }} className='mb-4' fluid>
            <div style={{ backgroundColor: 'white', borderRadius: 10 }} className='p-4'>
              <Container className='text-center'>
                <h1 className="py-3">Registro</h1>
              </Container>
              <Card >
                <Nav fill variant="tabs" defaultActiveKey={'Personales'} ref={navRef}>
                  <Nav.Item>
                    <Nav.Link eventKey={'Personales'}
                      data-nav="Personales"
                      onClick={() => changeDatos('Personales')}>
                      Datos Personales
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={'Cuenta'}
                      data-nav="Cuenta"
                      onClick={() => changeDatos('Cuenta')}
                    >
                      Datos de la Cuenta
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Container className="card-body" >
                  <Form autoComplete='off'
                    onSubmit={onSubmit} >
                    {datos === 'Personales' && (
                      <>
                        <Container className="mb-3">
                          <FloatingLabel controlId="name" label="Nombre">
                            <Form.Control type="text" placeholder="Ingrese su nombre" {...register('nombre.nombre', { required: 'Este campo es obligatorio', pattern: { value: /^([A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]*((\\s[A-ZÑÁÉÍÓÚÜa-zñáéíóúü])?[A-Za-zñÑzñáéíóúü]*)*)$/, message: 'El nombre debe comenzar con mayúscula, no contener números ni caracteres especiales' } })} />
                          </FloatingLabel>
                          {errors?.nombre?.nombre && touchedFields?.nombre?.nombre && (
                            <Alert variant='danger' className='mt-2'>{errors.nombre.nombre.message}</Alert>
                          )}
                        </Container>
                        <Container className="mb-3">
                          <FloatingLabel controlId="apP" label="Apellido paterno">
                            <Form.Control type="text" placeholder="Ingrese su apellido paterno"  {...register('nombre.apP', { required: 'Este campo es obligatorio', pattern: { value: /^[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]*$/, message: 'El apellido debe empezar en mayúscula, no tener caracteres especiales, ni números' } })} />
                          </FloatingLabel>
                          {errors?.nombre?.apP && (
                            <Alert variant='danger' className='mt-2'>{errors.nombre.apP.message}</Alert>
                          )}
                        </Container>
                        <Container className="mb-3">
                          <FloatingLabel controlId="apM" label="Apellido Materno">
                            <Form.Control type="text" placeholder="Ingrese su apellido Materno"  {...register('nombre.apM', { required: 'Este campo es obligatorio', pattern: { value: /^[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]*$/, message: 'El apellido debe empezar en mayúscula, no tener caracteres especiales, ni números' } })} />
                          </FloatingLabel>
                          {errors?.nombre?.apM && (
                            <Alert variant='danger' className='mt-2'>{errors.nombre.apM.message}</Alert>
                          )}
                        </Container>
                        <Container className="mb-3">
                          <FloatingLabel controlId="tel" label="Teléfono">
                            <Form.Control type="number" placeholder="Ingrese su teléfono"  {...register('telefono', { required: 'Este campo es obligatorio', pattern: { value: /^[0-9]{10}$/, message: 'Ingrese un número de teléfono válido' } })} />
                          </FloatingLabel>
                          {
                            errors.telefono && (<Alert variant='danger' className='mt-2'>{errors.telefono.message}</Alert>)
                          }
                        </Container>
                        <Button variant='outline-primary' className=" me-2" onClick={handleNext}>
                          Siguiente
                        </Button>
                      </>
                    )}

                    {datos === 'Cuenta' && (
                      <>
                        <Container className="mb-3">
                          <FloatingLabel controlId="email" label="E-mail">
                            <Form.Control type="email" placeholder="Ingrese su e-mail"  {...register('datosCuenta.email', { required: 'Este campo es obligatorio', pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Ingrese un correo electrónico válido' } })} />
                          </FloatingLabel>
                          {errors?.datosCuenta?.email && (
                            <Alert variant='danger' className='mt-2'>{errors.datosCuenta.email.message}</Alert>
                          )}
                        </Container>
                        <Container className='mb-3'>
                          <FloatingLabel controlId="password" label="Password">
                            <Form.Control type="password" placeholder="Ingrese su contraseña" {...register('datosCuenta.password', { required: 'Este campo es obligatorio', minLength: { value: 8, message: 'La contraseña debe tener al menos 8 caracteres' }, pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/, message: 'La contraseña debe tener al menos una mayúscula, una minúscula, un número y un caracter especial ($@$!%*?&)' } })} />
                          </FloatingLabel>
                          {errors?.datosCuenta?.password && (
                            <Alert variant='danger' className='mt-2'>{errors.datosCuenta.password.message}</Alert>
                          )}
                        </Container>
                        <Container className='mb-3'>
                          <FloatingLabel controlId="repPass" label="Repetir password">
                            <Form.Control type="password" placeholder="Repita su password"  {...register('repPass', { required: 'Este campo es obligatorio' })} />
                          </FloatingLabel>
                          {errors?.repPass && (
                            <Alert variant='danger' className='mt-2'>{errors.datosCuenta.repPass.message}</Alert>
                          )}
                        </Container>
                        <Container className='mb-3'>
                          <Form.Label >Pregunta Secreta</Form.Label>
                          <Form.Select  {...register('datosCuenta.preguntaRecuperacion.idPregunta', { required: 'Este campo es obligatorio' })}>
                            <option value={''}>Elija su pregunta secreta...</option>
                            {loading ? (<></>) : (
                              data.map(pregunta => (
                                <option key={pregunta._id} value={pregunta._id}>{pregunta.pregunta}</option>
                              ))
                            )}
                          </Form.Select>
                          {errors?.datosCuenta?.preguntaRecuperacion?.idPregunta && (
                            <Alert variant='danger' className='mt-2'>{errors.datosCuenta.preguntaRecuperacion.idPregunta.message}</Alert>
                          )}
                        </Container>
                        <Container className="mb-3">
                          <FloatingLabel controlId="respuesta" label="Respuesta">
                            <Form.Control type="text" placeholder="Ingrese su respuesta"  {...register('datosCuenta.preguntaRecuperacion.respuesta', { required: 'Este campo es obligatorio' })} />
                          </FloatingLabel>
                          {errors?.datosCuenta?.preguntaRecuperacion?.respuesta && (
                            <Alert variant='danger' className='mt-2'>{errors.datosCuenta.preguntaRecuperacion.respuesta.message}</Alert>
                          )}
                        </Container>
                        <Button variant='outline-primary' className=" me-2" onClick={handleBack}>
                          Regresar
                        </Button>
                      </>
                    )}
                    <Button type='submit' variant='primary' disabled={!isValid}>Registrarse</Button>
                  </Form>
                  <div className="text-center mt-3">
                    <p>
                      ¿Ya tiene una cuenta? <Link to={routes.login} >Inicie sesión aquí</Link>
                    </p>
                  </div>
                </Container>
              </Card>
            </div>
          </Container>

        </Col>
      </Row>
    </div>
  );
};

export default Registro;
