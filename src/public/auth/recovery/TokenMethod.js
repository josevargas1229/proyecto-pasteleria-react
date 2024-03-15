import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import routes from '../../../helpers/routes';

const TokenMethod = () => {
  const { register, handleSubmit, formState: { errors, isValid,touchedFields } } = useForm({ mode: 'onTouched' });

  const onSubmit = (data) => {
    // Aquí puedes manejar la lógica de envío del formulario
  };

  const sendToken=()=>{

  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h4>Recuperación por token</h4>
      <div className="mb-3">
        <Form.Group controlId="token">
          <Form.Control
            type="text"
            placeholder="Ingrese su token"
            {...register('token', { required: true })}
          />
          {errors.token && touchedFields.token && (
            <div className="alert alert-danger mt-2">
              Este campo es necesario
            </div>
          )}
        </Form.Group>
      </div>
      <Link className="link link-secondary mb-2" onClick={sendToken}>Enviar token</Link>
      <div className="d-flex justify-content-md-between mt-2">
        <Link className="link" to={routes.recuperacionMetodo + routes.recuperacionEmail}>Probar otro método</Link>
        <Button type="submit" variant="primary" disabled={!isValid}>
          Siguiente
        </Button>
      </div>
    </Form>
  );
};

export default TokenMethod;
