import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { emailRequest } from '../../api/auth';
import '../../Estilos.css'
import { useNavigate } from 'react-router-dom';
import routes from '../../helpers/routes';
const EmailConfirmation = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();
  const navigate=useNavigate()
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await emailRequest(data)
      console.log(response)
      navigate(routes.recuperacionMetodo+routes.recuperacionEmail)
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="d-flex justify-content-center align-items-center backGroundRecovery" style={{ minHeight: '79vh', flex: 1 }}>
      <div className="content p-4 mt-3 border border-secondary rounded-3" style={{ width: '30rem', backgroundColor: 'white' }}>
        <div className="p-4 d-md-flex flex-column justify-content-md-center">
          <h2>Busca tu dirección de correo electrónico</h2>
          <p>Introduce tu dirección de correo electrónico de recuperación</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <FloatingLabel controlId="email" label="Email" className="mb-4">
                <Form.Control
                  type="email"
                  autoComplete="off"
                  placeholder="Ingrese su e-mail"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  isInvalid={errors.email}
                />
              </FloatingLabel>
              {/* Alerta de validación */}
              <Form.Control.Feedback type="invalid">
                {errors.email?.type === 'required' && 'Este campo es necesario'}
                {errors.email?.type === 'pattern' && 'El email debe ser válido'}
              </Form.Control.Feedback>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary me-md-2" disabled={!isValid}>Siguiente</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
