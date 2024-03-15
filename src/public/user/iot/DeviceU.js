import React, { useEffect, useState } from 'react'
import useFetch from '../../../helpers/useFetch'
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import Cargando from '../../../components/Cargando';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { etiquetaRequest } from '../../../api/device';
function DeviceU() {
  const { id } = useParams();

  const [reload,setReload]=useState(false)
  // Usa el ID en la URL para realizar la solicitud
  const { data, loading } = useFetch(`http://localhost:4000/devices/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },reload)
  const formatFecha = (fecha) => {
    return new Date(fecha).toLocaleString();
  };
  const [newLabel, setNewLabel] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleLabelChange = (e) => {
    setNewLabel(e.target.value);
  };

  const handleSaveLabel = async() => {
    try {
      console.log('Nueva etiqueta:', newLabel);
      const response=await etiquetaRequest(id,newLabel)
      console.log(response)
      setShowModal(false);
      setReload(!reload)
    } catch (error) {
      console.log(error)
    }

  };
  
  return (
    <Container className='mt-4'>
      {
        loading ? (<Cargando />) : (
          <Row>
            <Col md={3} sm={12}>
              <Card style={{ fontSize: 13 }}>
                <Card.Header style={{ backgroundColor: 'blue', color: 'white', height: 90, display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                  <Card.Title style={{ fontSize: 16 }}>{data.dispositivo.label ? data.dispositivo.label : data.dispositivo._id}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Title>ID</Card.Title>
                  <Card.Text>{data.dispositivo._id}</Card.Text>
                  <Card.Title>Etiqueta</Card.Title>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                  <Card.Text>{data.dispositivo.label ? data.dispositivo.label : data.dispositivo._id}</Card.Text>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#525760",cursor: 'pointer' }}  onClick={() => setShowModal(true)} />
                  </div>
                </Card.Body>
              </Card>
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar Etiqueta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FloatingLabel controlId="etiqueta" label="Etiqueta" className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Nueva etiqueta"
                    value={newLabel}
                    onChange={handleLabelChange}
                  />
                  </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Cancelar
                  </Button>
                  <Button variant="primary" onClick={handleSaveLabel}>
                    Guardar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col>
              <Row sm={2} lg={4}>
                {data.variables.map((variable) => (
                  <Col className='p-3'>
                    <Card className="w-100" style={{ fontSize: 13 }}>
                      <Card.Header style={{ backgroundColor: 'blue', color: 'white', }}>
                        <Card.Title style={{ fontSize: 30 }}>{variable.ultimoValor}</Card.Title>
                        <Card.Text>{variable._id}</Card.Text>
                      </Card.Header>
                      <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                        <Card.Text style={{ color: '#5E5E5E' }}>Última actividad</Card.Text>
                        <Card.Text style={{ color: '#363636' }}>{formatFecha(variable.ultimaFecha)}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )
      }
    </Container>
  )
}

export default DeviceU