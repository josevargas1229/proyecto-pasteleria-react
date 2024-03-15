import React from 'react'
import '../../css/DetalleProd.css'
import { Button, Form } from 'react-bootstrap';

export default function Producto() {
  return (
    <Form style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
      <div style={{ marginBottom: "20px" }}>
        <h1 >Detalle del producto</h1>
      </div>
      <div className="container product-detail-container" style={{ maxWidth: "500px", border: "2px solid #000", backgroundColor: "#fff8dc", padding: "20px", borderRadius: "10px" }}>
        <div className="product-detail-info">
          <div className="product-detail-image text-center mb-3">
            <img
              src="https://placekitten.com/400/300"
              alt="Pastel"
              className="img-fluid rounded"
              style={{ width: "300px", height: "auto" }} // Ajusta el tamaño aquí
            />
          </div>
          <h2 className="product-detail-title Subtítulos">Pastel de Chocolate y Fresas</h2>
          <p className="product-detail-description Texto">
            Este delicioso pastel está hecho con una suave base de bizcocho de chocolate y está relleno de una generosa capa de crema de fresas frescas.
          </p>
          <div className="product-detail-details Texto">
            <p><strong>Tamaño:</strong> 8 pulgadas</p>
            <p><strong>Precio por porción:</strong> $4.50</p>
            <p><strong>Precio por pastel completo:</strong> $35.00</p>
          </div>
          <div className="product-detail-buttons text-center">
            <Button variant="primary">Comprar</Button>
          </div>
        </div>
      </div>
    </Form>
  );
}
