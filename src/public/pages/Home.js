import React from 'react'
import '../../css/diseñoPrincipal.css'
import { Carousel } from 'react-bootstrap';
export default function Home() {
  return (
    <div className="container welcome-page">
      <header className="text-center">
       
        <h1>Bienvenido a nuestra página</h1>
      </header>
      <main className="row">
        <section className="col-lg-6">
          <div className="hero">
            <h2 className="Subtítulos">¡El sabor que te conquista!</h2>
            <p>Descubre nuestra variedad de productos frescos y deliciosos.</p>
          </div>
          <div>
            <h2 className="Subtítulos">Nuestra Historia de Pasteles</h2>
            <p>
              En nuestro pequeño pueblo, la tradición de hacer pasteles ha pasado de generación en generación. Desde los primeros días de nuestra panadería, nos hemos esforzado por crear pasteles que deleiten a todos los que los prueban. Nuestros ingredientes frescos y nuestra pasión por la repostería se combinan para ofrecer los pasteles más deliciosos y hermosos que jamás hayas visto.
            </p>
          </div>
        </section>
        <section className="col-lg-6 carousel-section">
          <Carousel className="carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://panymas.com/wp-content/uploads/2019/12/Pastel-Eclipse.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Primer Slide</h3>
                <p>Este es el Pastel-Eclipse</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://sacher.com.mx/media/magefan_blog/pastelin.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Segundo Slide</h3>
                <p>Este es el pastelin</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://badun.nestle.es/imgserver/v1/80/1290x742/pastel-de-chocolate-y-fresas-con-corazones-de-chocolate-blanco.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Tercer Slide</h3>
                <p>Este es el pastel de chocolate y fresas con corazones de chocolate blanco</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </main>

      <section className="promociones-pasteles">
<div className="container">
  <h2 className="Subtítulos" style={{textAlign:"center"}}>Promociones de Pasteles Destacados</h2>
  <br/>
  <br/>
  <div className="row">
    <div className="col-md-4">
      <div className="card card-pastel">
        <img src="https://panymas.com/wp-content/uploads/2019/12/Pastel-Eclipse.jpg" className="card-img-top" alt="Pastel 1" style={{ width: "100%", height: "150px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
        <div className="card-body">
          <h5 className="card-title">Pastel 1</h5>
          <p className="card-text">Nombre del Pastel 1.</p>
          <p className="card-text">Descripción del Pastel 1.</p>
          <p className="card-text">Costo del Pastel 1.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card card-pastel">
        <img src="https://sacher.com.mx/media/magefan_blog/pastelin.jpg" className="card-img-top" alt="Pastel 2" style={{ width: "100%", height: "150px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
        <div className="card-body">
          <h5 className="card-title">Pastel 2</h5>
          <p className="card-text">Nombre del Pastel 2.</p>
          <p className="card-text">Descripción del Pastel 2.</p>
          <p className="card-text">Costo del Pastel 2.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card card-pastel">
        <img src="https://badun.nestle.es/imgserver/v1/80/1290x742/pastel-de-chocolate-y-fresas-con-corazones-de-chocolate-blanco.jpg" className="card-img-top" alt="Pastel 3" style={{ width: "100%", height: "150px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
        <div className="card-body">
          <h5 className="card-title">Pastel 3</h5>
          <p className="card-text">Nombre del Pastel 3.</p>
          <p className="card-text">Descripción del Pastel 3.</p>
          <p className="card-text">Costo del Pastel 3.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

      <footer className="text-center">
        <p>© 2024 Nuestra Página. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
