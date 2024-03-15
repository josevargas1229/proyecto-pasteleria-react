import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../../../helpers/routes'
import SweetAlert from '../../../helpers/SweetAlert'

function EmailMethod() {
    const alerta=()=>{
        SweetAlert.showAlert('Hola','Esta es una prueba','success')
    }
    return (
        <div className='m-5'>
            <h4>Recuperación por email</h4>
            <Container>
                <div className="d-flex justify-content-md-between">
                    <Link to={routes.recuperacionMetodo+routes.recuperacionQuestion}>Probar otro método</Link>
                    <Button onClick={alerta}>Enviar</Button>
                </div>
            </Container>
        </div>
    )
}

export default EmailMethod