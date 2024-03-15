import React from 'react'
import useFetch from '../../helpers/useFetch'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import Cargando from '../../components/Cargando'

export default function Productos() {
  const { data, loading } = useFetch('http://localhost:4000/productos')
  console.log(data)
  return (
    <div>
      <Container>
        <h1>Catalogo de Productos</h1>
        <Row sm={2} md={3} lg={4}>
          {loading ? (
            <Cargando />
          ) : (
            data.map(producto => (
              <Col>
                <Card key={producto._id} style={{ maxWidth: 280 }}>
                  <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: 250 }} />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>{producto.precio}</Card.Text>
                    <Button variant="primary">Ver detalles</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
            )}
        </Row>
      </Container>
    </div>
  )
}
