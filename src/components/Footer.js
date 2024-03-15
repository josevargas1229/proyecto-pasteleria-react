import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import routes from '../helpers/routes'
import { Link } from 'react-router-dom'
import '../Estilos.css'
export default function Footer() {
    return (
        <div className='bodyF'>
            <Container>
                <Row>
                    <Col>
                        <h4>Información</h4>
                        <ul className='linkF'>
                            <li><Link className='linksF' to={routes.faq}>Preguntas Frecuentes</Link></li>
                            <li><Link className='linksF' to={routes.quienesSomos}>Quienes somos</Link></li>
                            <li><Link className='linksF' to={routes.contacto}>Contacto</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Legales</h4>
                        <ul className='linkF'>
                            <li><Link className='linksF' to={routes.politicas}>Políticas</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

