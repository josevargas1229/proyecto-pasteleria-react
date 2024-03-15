import React, { useState } from 'react'
import useAuth from '../../auth/useAuth'
import { Link, useLocation } from 'react-router-dom';
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import routes from '../../helpers/routes';
import { loginRequest } from '../../api/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../Estilos.css'
import SweetAlert from '../../helpers/SweetAlert';
export default function Login() {
  const { login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const alerta=(title,text,icon)=>{
    SweetAlert.showAlert(title,text,icon)
}
  const handleLogin = async (e) => {
    e.preventDefault();
    const userCredentials = { email, password };
    try {
      //solicitud del login
      const response = await loginRequest(userCredentials);
      // Obtener datos de respuesta si es necesario
      const responseData = response.data;
      login(responseData, location.state?.from);
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      alerta('Error',error.response.data.message,'error')
    }
  };

  return (
    <div style={{ minHeight: '100%', maxWidth: '100%' }} className='backGroundLogin'>
      <Row className='justify-content-md-center pb-2' style={{ minWidth: '100%', minHeight: '100%', maxWidth: '100%' }}>
        
        <Col className='mb-4 pb-3'>
          <Container style={{ backgroundColor: 'white', borderRadius: 10,width:'30rem' }} className='mb-5 pb-3 text-center'>
            
            <h1 className="py-4">Login</h1>
            <Card className='p-4'>
              <Form onSubmit={handleLogin} autoComplete='off'>
                {/* Username input */}
                <FloatingLabel controlId="email" label="Email" className="mb-4">
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FloatingLabel>

                {/* Password input */}
                <FloatingLabel controlId="password" label="Contraseña" className="mb-4">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FloatingLabel>

                {/* 2 column grid layout for inline styling */}
                <Row className="mb-4">
                  <Col className="d-flex justify-content-center">
                    {/* Checkbox */}
                    <Form.Check
                      type="checkbox"
                      id="form2Example31"
                      label="Recuérdame"
                      defaultChecked
                    />
                  </Col>
                  <Col>
                    {/* Simple link */}
                    <Link to={routes.recuperacion}>¿Olvidó su contraseña?</Link>
                  </Col>
                </Row>

                <div className="d-grid gap-2">
                  {/* Submit button */}
                  <Button type="submit" variant="primary" className="btn-block mb-4" disabled={!email || !password}>
                    Iniciar sesión
                  </Button>
                </div>

                {/* Register buttons */}
                <div className="text-center">

                  <p>¿No tiene una cuenta? <Link to={routes.registro}>Regístrate</Link></p>
                  <p>O inicia sesión con: </p>
                  <Button type="button" variant="secondary" className="btn-floating mx-1">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>

                  <Button type="button" variant="secondary" className="btn-floating mx-1">
                    <FontAwesomeIcon icon={faGoogle} />
                  </Button>

                  <Button type="button" variant="secondary" className="btn-floating mx-1">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Button>

                  <Button type="button" variant="secondary" className="btn-floating mx-1">
                    <FontAwesomeIcon icon={faGithub} />

                  </Button>
                </div>
              </Form>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

