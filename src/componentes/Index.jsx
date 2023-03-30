import React from 'react'
import '../assets/styles/navbar.css'
import about  from '../assets/img/about.jpg'
import mined from '../assets/img/brands/mined.png'
import recurso2 from '../assets/img/brands/Recurso2.png'
import recurso3 from '../assets/img/brands/Recurso3.png'
import fondo from '../assets/img/Recurso4.png'
import comunicacion from '../assets/img/comunicacion-linea.jpg'


export const Index = () => {
  

  return (
    <>
      <section id="hero" className="min-vh-100 d-flex align-items-center text-center" style={{ 
      backgroundImage: `url(${fondo})` 
    }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 data-aos="fade-left" className="text-white fw-semibold display-1">Educación Online</h1>
                <h5 className="text-white mt-3 mb-4" data-aos="fade-right">Una manera mas rapida para el aprendizaje
                </h5>
                <div data-aos="fade-up" data-aos-delay={50}>
                  <a href="formulario.html" className="btn btn-brand me-2">Registrarse</a>
                  <a href="login.html" className="btn btn-light ms-2">Iniciar Sesión</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section id="about" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-down" data-aos-delay={50}>
                <div className="section-title">
                  <h1 className="display-4 fw-semibold">Sobre nosotros</h1>
                  <div className="line" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum, consequuntur temporibus eaque unde quibusdam possimus corporis ullam odio illum fugit explicabo corrupti facere obcaecati suscipit, iste, totam adipisci earum.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6" data-aos="fade-down" data-aos-delay={50}>
                <img className="imgg" src={about} alt="" />
              </div>
              <div data-aos="fade-down" data-aos-delay={150} className="col-lg-5">
                <h1>About</h1>
                <p className="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quo reiciendis
                  ad.</p>
                <div className="d-flex pt-4 mb-3">
                  <div className="iconbox me-4">
                    <i className="ri-mail-send-fill" />
                  </div>
                  <div>
                    <h5>We are Awesome</h5>
                    <p>Consectetur adipisicing elit. Corporis nesciunt aut temporibus!</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="iconbox me-4">
                    <i className="ri-user-5-fill" />
                  </div>
                  <div>
                    <h5>We are Awesome</h5>
                    <p>Consectetur adipisicing elit. Corporis nesciunt aut temporibus!</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="iconbox me-4">
                    <i className="ri-rocket-2-fill" />
                  </div>
                  <div>
                    <h5>We are Awesome</h5>
                    <p>Consectetur adipisicing elit. Corporis nesciunt aut temporibus!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CURSOS */}
        <section id="services" className="section-padding border-top">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-down" data-aos-delay={150}>
                <div className="section-title">
                  <h1 className="display-4 fw-semibold">Cursos</h1>
                  <div className="line" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam hic est error dolorum odio, amet molestiae! Porro similique, consectetur, nam modi dolore quis deleniti itaque iure officia facere ea?</p>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center">
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay={150}>
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <i className="ri-pen-nib-fill" />
                  </div>
                  <h5 className="mt-4 mb-3">Matematicas</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay={250}>
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <i className="ri-stack-fill" />
                  </div>
                  <h5 className="mt-4 mb-3">Lenguaje</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay={350}>
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <i className="ri-ruler-2-fill" />
                  </div>
                  <h5 className="mt-4 mb-3">Ciencias</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay={450}>
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <i className="ri-pie-chart-2-fill" />
                  </div>
                  <h5 className="mt-4 mb-3">Sociales</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay={550}>
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <i className="ri-code-box-line" />
                  </div>
                  <h5 className="mt-4 mb-3">Ingles</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat sunt distinctio?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* COUNTER */}
        <section id="counter" className="section-padding" style={{ 
      backgroundImage: `url(${comunicacion})` 
    }}>
          <div className="container text-center">
            <div className="row g-4">
              <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay={150}>
                <h1 className="text-white display-4">90,00+</h1>
                <h6 className="text-uppercase mb-0 text-white mt-3">Estuadiantes</h6>
              </div>
              <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay={250}>
                <h1 className="text-white display-4">55+</h1>
                <h6 className="text-uppercase mb-0 text-white mt-3">Centros Educativos</h6>
              </div>
              <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay={350}>
                <h1 className="text-white display-4">30+</h1>
                <h6 className="text-uppercase mb-0 text-white mt-3">Tutores</h6>
              </div>
              <div className="col-lg-3 col-sm-6" data-aos="fade-down" data-aos-delay={450}>
                <h1 className="text-white display-4">100+</h1>
                <h6 className="text-uppercase mb-0 text-white mt-3">Maestores </h6>
              </div>
            </div>
          </div>
        </section>
        {/* BRANDS */}
        <section id="brands" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-down" data-aos-delay={50}>
                <div className="section-title">
                  <h1 className="display-4 fw-semibold">Nuestros Patrocinadores</h1>
                  <div className="line" />
                  <p>Entidades que han hecho posible este proyecto</p>
                </div>
                <div className="slider">
                  <div className="slide-track">
                    <div className="slide"><img src={mined} /></div>
                  </div>
                  <div className="slide-track">
                    <div className="slide"><img src={recurso3} /></div>
                  </div>
                  <div className="slide-track">
                    <div className="slide"><img src={recurso2} /></div>
                  </div>
                  <div className="slide-track">
                    <div className="slide"><img src={mined} /></div>
                  </div>
                  <div className="slide-track">
                    <div className="slide"><img src={recurso3} /></div>
                  </div>
                  <div className="slide-track">
                    <div className="slide"><img src={recurso2} /></div>
                  </div>
                </div>
              </div></div></div></section>
        {/* CONTACT */}
        <section className="section-padding bg-light" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center" data-aos="fade-down" data-aos-delay={150}>
                <div className="section-title">
                  <h1 className="display-4 text-white fw-semibold">Contactanos</h1>
                  <div className="line bg-white" />
                  <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit exercitationem voluptatum perspiciatis? Itaque, placeat expedita rem exercitationem a soluta adipisci! Repudiandae asperiores, animi reiciendis facilis laudantium illo odio error.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" data-aos="fade-down" data-aos-delay={250}>
              <div className="col-lg-8">
                <form action="#" className="row g-3 p-lg-5 p-4 bg-white theme-shadow">
                  <div className="form-group col-lg-6">
                    <input type="text" className="form-control" placeholder="Primer nombre" />
                  </div>
                  <div className="form-group col-lg-6">
                    <input type="text" className="form-control" placeholder="Primer apellido" />
                  </div>
                  <div className="form-group col-lg-12">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group col-lg-12">
                    <input type="text" className="form-control" placeholder="Centro Escolar" />
                  </div>
                  <div className="form-group col-lg-12">
                    <input type="text" className="form-control" placeholder="NIE" />
                  </div>
                  <div className="form-group col-lg-12">
                    <textarea name="message" rows={5} className="form-control" placeholder="Ingresar Mensaje" defaultValue={""} />
                  </div>
                  <div className="form-group col-lg-12 d-grid">
                    <button className="btn btn-brand">Enviar Mensaje </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
