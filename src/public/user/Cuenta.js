import React from 'react'

import { Button, Form } from 'react-bootstrap';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importa los iconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../../css/Perfil.css'
export default function Cuenta() {
  return (
    <div>
      <div className="banner-profile-container">
        <div className="profile-image-container">
          <img
            src="https://www.encuentra-tu-fotografo.com/media/cache/remote_news_head_watermark_photographer/uploads/newsPicture/426937906736706498-Como-hacerse-una-buena-foto-de-perfil-para-las-redes-sociales-profesionales-60f134e9a62bf.jpeg" // Ruta de la imagen del usuario
            alt="User"  
            className="profile-image"
          />
          <div className="profile-info">
            <h2 className="profile-title">User Name</h2>
            <p className="profile-text">ejemplo@ejemplo.org</p>
          </div>

          <div className="social-media">
            <br/>
            <br/>
            <br/> 
      <h3 className="profile-subtitle">Redes Sociales</h3>
      <div className="profile-social-links">
        <Link to={''} className="social-link">
          <FontAwesomeIcon icon={faFacebookF} /> Facebook
        </Link>
        <Link to={''} className="social-link">
          <FontAwesomeIcon icon={faXTwitter} /> Twitter
        </Link>
        <Link to={''} className="social-link">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </Link>
        {/* Agrega más enlaces de redes sociales según sea necesario */}
      </div>
    </div>
        </div>
        <div className="banner-container">
          <img
            src="https://wallpapercave.com/wp/wp2513220.jpg" // Ruta de la imagen del banner
            alt="Banner"
            className="banner-image"
          />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="profile-mini-form">
      <h3 className="profile-subtitle">Editar Perfil</h3>
      <Form>
      <br/>
        <Form.Group controlId="formNombreCompleto">
          <Form.Label>Nombre completo: Eduardo Castro Hernadez</Form.Label>
         
        </Form.Group>
        <br/>
        <Form.Group controlId="formCorreoElectronico">
          <Form.Label>Correo electrónico: Eduardo@gmail.com</Form.Label>
          <Form.Control type="email" placeholder="correo@example.com" />
        </Form.Group>
        <br/>
        <Form.Group controlId="formCiudad">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="text" placeholder="Contraseña" />
        </Form.Group>
        <br/>
        <Form.Group controlId="formPais">
          <Form.Label>País: Mexico</Form.Label>
       
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit" className="profile-btnModificar">
          Guardar Cambios
        </Button>
      </Form>
    
    </div>
    </div>
    
  );
}
