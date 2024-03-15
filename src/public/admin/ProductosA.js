import React from 'react'
import '../../css/AdminProductos.css'
function ProductosA() {
    const pasteles = [
        { id: 1, nombre: "Pastel de chocolate", descripcion: "Delicioso pastel de chocolate", precio: "$20", imagen: "https://panymas.com/wp-content/uploads/2019/12/Pastel-Eclipse.jpg" },
        { id: 2, nombre: "Pastel de fresa", descripcion: "Exquisito pastel de fresa", precio: "$18", imagen: "https://sacher.com.mx/media/magefan_blog/pastelin.jpg" },
        { id: 3, nombre: "Pastel de vainilla", descripcion: "Suave pastel de vainilla", precio: "$15", imagen: "https://badun.nestle.es/imgserver/v1/80/1290x742/pastel-de-chocolate-y-fresas-con-corazones-de-chocolate-blanco.jpg" }
      ];
  
      return (
        <div>
          <div className="table-container">
            <h1 style={{textAlign:"center"}}>Lista de Pasteles</h1>
            <table className="table">
              <thead>
                <tr className="Subtítulos">
                  <th >ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Imagen</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="Texto">
                {pasteles.map((pastel) => (
                  <tr key={pastel.id}>
                    <td style={{textAlign:"center"}}>{pastel.id}</td>
                    <td>{pastel.nombre}</td>
                    <td>{pastel.descripcion}</td>
                    <td>{pastel.precio}</td>
                    <td><img src={pastel.imagen} alt={pastel.nombre} style={{width: '100px', height: 'auto'}} /></td>
                    <td>
                      <button className="btn btn-primary">Modificar</button>
                      <button className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default ProductosA