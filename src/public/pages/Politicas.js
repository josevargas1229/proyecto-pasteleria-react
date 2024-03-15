import React from 'react'
import { Accordion } from 'react-bootstrap';
function Politicas() {
    return (
        <div className="container fondo-pasteleria">
          <div className="container">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>Política de Precios Transparentes</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  Nos comprometemos a mostrar precios claros y completos en todos nuestros productos. Cada artículo en nuestra pastelería llevará una etiqueta con el precio final, incluyendo impuestos si son aplicables. Creemos en la transparencia para que nuestros clientes se sientan seguros y confiados al realizar sus compras.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="1">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>Política de Calidad en Ingredientes</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  En nuestra pastelería, nos esforzamos por utilizar ingredientes frescos y de la más alta calidad en la elaboración de nuestros productos. Valoramos la salud y el bienestar de nuestros clientes y nos comprometemos a ofrecer productos que cumplan con los más altos estándares de calidad.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="2">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>Política Ambiental Sostenible</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  En nuestra pastelería, nos preocupamos por el medio ambiente. Por eso, implementamos prácticas sostenibles en nuestra producción y packaging. Utilizamos envases reciclables y promovemos el reciclaje entre nuestros clientes. Creemos en la responsabilidad ambiental y trabajamos constantemente para reducir nuestro impacto en el planeta.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="3">
                <Accordion.Header style={{ backgroundColor: '#FFD700', color: '#fff' }}>Política de Ambiente Acogedor</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  En nuestra pastelería, nos enorgullece ofrecer un ambiente acogedor y amigable. Nos esforzamos por brindar un excelente servicio al cliente y crear un espacio donde todos se sientan bienvenidos. Valoramos la diversidad y celebramos la comunidad que hemos construido junto a nuestros clientes a lo largo de los años.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="4">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>Política de Frescura Diaria</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  En nuestra pastelería, nos comprometemos a ofrecer productos frescos y deliciosos cada día. Trabajamos arduamente para garantizar la calidad y el sabor excepcional de nuestros pasteles y postres. La satisfacción de nuestros clientes es nuestra máxima prioridad.
                </Accordion.Body>
              </Accordion.Item>
    
              <Accordion.Item eventKey="5">
                <Accordion.Header style={{ backgroundColor: '#FF6347', color: '#fff' }}>Política de Innovación Constante</Accordion.Header>
                <Accordion.Body className="mi-fondo" style={{ backgroundColor: '#FFA07A' }}>
                  En nuestra pastelería, nos esforzamos por mantenernos innovadores y creativos en la creación de nuevos productos. Buscamos constantemente nuevas tendencias y sabores para ofrecer experiencias únicas a nuestros clientes. Nos encanta sorprender y deleitar con nuestras creaciones.
                </Accordion.Body>
              </Accordion.Item>
    
              {/* Puedes seguir agregando más políticas según sea necesario */}
            </Accordion>
          </div>
        </div>
      );
}

export default Politicas