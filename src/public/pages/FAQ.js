import React from 'react'
import { Accordion } from 'react-bootstrap';
function FAQ() {
    return (
        <div className="container fondo-pasteleria">
          <div className="container">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>¿Cómo funciona el servicio de reparto a domicilio?</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  Nos comprometemos a mostrar precios claros y completos en todos nuestros productos. Cada artículo en nuestra pastelería llevará una etiqueta con el precio final, incluyendo impuestos si son aplicables. Creemos en la transparencia para que nuestros clientes se sientan seguros y confiados al realizar sus compras.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="1">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>¿Cuáles son los estándares de calidad de sus productos?</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                En nuestra pastelería, nos esforzamos por utilizar ingredientes
              de la más alta calidad en la preparación de nuestros productos. Desde la elección de los
              insumos hasta la presentación final, garantizamos un estándar excepcional de frescura y sabor en cada bocado. Valoramos la excelencia en la calidad y
              nos comprometemos a superar las expectativas de nuestros clientes
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="2">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>¿Puedo personalizar mi pedido?</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                Sí, entendemos que cada cliente tiene preferencias únicas. Ofrecemos la posibilidad
                 de personalizar su pedido, ya sea mediante decoraciones específicas, cambios en ingredientes o la adaptación de nuestros productos para satisfacer necesidades dietéticas 
                especiales. Nos esforzamos por hacer realidad cada solicitud especial.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="3">
                <Accordion.Header style={{ backgroundColor: '#FFD700', color: '#fff' }}>¿Aceptan pedidos anticipados para eventos especiales?</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                Sí, para garantizar la disponibilidad y atención personalizada, 
                aceptamos pedidos anticipados para eventos especiales. Desde celebraciones 
                familiares hasta eventos corporativos, estamos aquí para hacer su día más dulce.
                 Póngase en contacto con nosotros con anticipación,
                 y estaremos encantados de preparar su pedido a medida.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="4">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>¿Ofrecen promociones especiales?</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                Sí, mantente atento a nuestras promociones especiales y ofertas exclusivas. Queremos recompensar a nuestros clientes leales y hacer que cada experiencia sea aún más dulce con descuentos y regalos periódicos.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="5">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>Política de Innovación Constante</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  En nuestra pastelería, nos esforzamos por mantenernos innovadores y creativos en la creación de nuevos productos. Buscamos constantemente nuevas tendencias y sabores para ofrecer experiencias únicas a nuestros clientes. Nos encanta sorprender y deleitar con nuestras creaciones.
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="6">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>¿Cuál es su política de devoluciones?</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  Entendemos que las circunstancias pueden cambiar. Si no está satisfecho con su pedido, por favor contáctenos dentro de los 7 días posteriores a la entrega y haremos todo lo posible para resolver cualquier problema o realizar una devolución.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="7">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>¿Tienen opciones sin gluten en su menú?</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  Sí, ofrecemos opciones sin gluten en nuestro menú para satisfacer las necesidades dietéticas de nuestros clientes. Consulte nuestra sección sin gluten o pregunte a nuestro personal para obtener más detalles sobre nuestras deliciosas opciones sin gluten.
                </Accordion.Body>
              </Accordion.Item>
    
              {/* Puedes seguir agregando más políticas según sea necesario */}
            </Accordion>
          </div>
        </div>
      );
}

export default FAQ