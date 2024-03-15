import React, { useEffect, useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form'; // Asegúrate de importar la función useForm de react-hook-form
import { FormControl, InputGroup } from 'react-bootstrap';
import routes from '../../../helpers/routes';
import { Link } from 'react-router-dom';
import { recoveryQuestionRequest } from '../../../api/auth';

const QuestionMethod = () => {
  const { register, handleSubmit, formState: { touchedFields,isValid,errors } } = useForm({ mode: 'onTouched' });
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await recoveryQuestionRequest();
        // Supongamos que response es un objeto con la propiedad email
        setQuestion(response.data.pregunta);
      } catch (error) {
        console.error('Error al obtener la pregunta secreta:', error);
      }
    };

    fetchEmail();
  }, []);

  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <div>
      <h4>Recuperación por pregunta secreta</h4>
      <p>{question}</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="mb-3">
          <FloatingLabel label='Respuesta'>
            
          <FormControl
            type="text"
            autoComplete="off"
            placeholder="Ingrese su respuesta"
            {...register('respuesta',{required:true})}
            />
            </FloatingLabel>
        </InputGroup>
        {/* Alerta de validacion */}
        <div className="alert alert-danger mt-2" style={{ display:errors?.respuesta && touchedFields.respuesta ? 'block' : 'none' }}>
          Este campo es necesario
        </div>
        <div className="d-flex justify-content-md-between">
          <Link className="link" to={routes.recuperacionMetodo+routes.recuperacionToken}>Probar otro método</Link>
          <Button type="submit" variant="primary" disabled={!isValid}>
            Siguiente
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default QuestionMethod;
