import React, { useEffect, useState } from 'react'
import '../assets/styles/navbar.css'
import axios from "axios";
import Swal from 'sweetalert2'
import about  from '../assets/img/about.jpg'
import mined from '../assets/img/brands/mined.png'
import recurso2 from '../assets/img/brands/Recurso2.png'
import recurso3 from '../assets/img/brands/Recurso3.png'
import fondo from '../assets/img/Recurso4.png'
import reunion from '../assets/img/reunion-lluvia-ideas.jpg'
import { Link } from "react-router-dom";
import { Registro } from './vistas/Registro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faEarthAmericas, faFlaskVial, faDna } from '@fortawesome/free-solid-svg-icons'



export const Index = () => {

  useEffect(() => {
    document.title = "Aula 503 | Inicio"
  }, []);

  const [datosServidor, setDatosServidor] =  useState([]);

  console.log("Listar datos", datosServidor );

 

  const datosContacto = {
    primer_nombre: "",
    primer_apellido: "",
    email: "",
    mensaje: ""
  }

  const initialStateInput = {
    input: "",
    message: '',
    state: false
  }

  const [contacto, setContacto] = useState(datosContacto);

  const [alerta, setAlerta] = useState([initialStateInput]);

  const ManejarEventoDeInputs = (e) =>{
    //la propiedad target del event nos permitirá obtener los valores
    const name = e.target.name;
    const value = e.target.value;

  //actualizamos los valores capturados a nuestro estado de formulario
  setContacto({...contacto, [name]: value});
}

function comment(){
  const url = "http://127.0.0.1:8000/api/contact";

  let config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json' 
    }
}

  axios.post(url, contacto, config)
  .then(response => console.log(response.data))
  setContacto(datosContacto)
  Swal.fire({
    icon: 'success',
    title: 'Enviado',
    showConfirmButton: false,
    timer: 1500
  })
}

const handleLoginSession = (e) =>{
  e.preventDefault();

  let verificarInputs = [
    {nombre: "primer_nombre", value: contacto.primer_nombre},
    {nombre: "primer_apellido", value: contacto.primer_apellido},
    {nombre: "email", value: contacto.email},
    {nombre: "mensaje", value: contacto.mensaje},
];

   const datosValidados = ValidarInputs(verificarInputs)

   console.log(datosValidados,"-------")

 setAlerta(datosValidados);

 const totalValidaciones = datosValidados.filter(input => input.estado === false).map
 ((estado) => {return false});

 console.log("Total de validaciones:", totalValidaciones.length);

 if(totalValidaciones.length >=4){
   console.log("Enviar al servidor");
   comment()
 }

};

const ValidarInputs = (data) =>{
  console.log(data);

let errors = [];

const datosDelFormulario = data;

//Proceso de validación
datosDelFormulario.map((valorInput) =>{
  if(valorInput.nombre === "primer_nombre"){
    if(valorInput.value === '' || valorInput.value === null){

      errors.push({
        valorInput: valorInput.nombre,
        mensaje: '*Campo requerido',
        estado: true
      });
    }else{
      errors.push({
        valorInput: valorInput.nombre,
        mensaje: '',
        estado: false
      })
    }
  }else if(valorInput.nombre === "primer_apellido"){
    if(valorInput.value === '' || valorInput.value === null){

      errors.push({
        valorInput: valorInput.nombre,
        mensaje: '*Campo requerido',
        estado: true
      });
    }else{
      errors.push({
        valorInput: valorInput.nombre,
        mensaje: '',
        estado: false
      })
    }
  }else if(valorInput.nombre === "email"){
    if(valorInput.value === '' || valorInput.value === null){

      errors.push({
        valorInput: valorInput.nombre,
        mensaje: '*Campo requerido',
        estado: true
      });
    }else{
      errors.push({
        valorInput: valorInput.nombre,
        mensaje: '',
        estado: false
      })

    }
  }else if(valorInput.nombre === "mensaje"){
    if(valorInput.value === '' || valorInput.value === null){

      errors.push({
        valorInput: valorInput.nombre,
        mensaje: '*Campo requerido',
        estado: true
      });
    }else{
      errors.push({
        valorInput: valorInput.nombre,
        mensaje: '',
        estado: false
      })

    }
  }
  }
)

return errors;
};

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
                
                <Link to={"/registro"} className="btn btn-brand me-2">Registrarse</Link>
                <Link to={"/login"} className="btn btn-light ms-2">Iniciar Sesión</Link>
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
                  <p>Aula 503 es una plataforma creada para fortalecer los conocimientos de los estudiantes de educación básica y media.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6" data-aos="fade-down" data-aos-delay={50}>
                <img className="imgg" src={about} alt="" />
              </div>
              <div data-aos="fade-down" data-aos-delay={150} className="col-lg-5">
                <h1>Conocenos</h1>
                <p className="mt-3 mb-4">Aula 503 posee diversas características para promover el aprendizaje en dos áreas</p>
                <div className="d-flex pt-4 mb-3">
                  <div className="iconbox me-4">
                  <FontAwesomeIcon icon={faFlask} style={{color: "#4e57d4",}} /> 
</div>
                  <div>
                    <h5>Ciencias</h5>
                    <p>Aprende los conocimientos en las diferentes ramas de las ciencias naturales</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="iconbox me-4">
                  <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#4e57d4",}} />                 
                  </div>
                  <div>
                    <h5>Estudios Sociales</h5>
                    <p>Conoce más sobre la sociedad</p>
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
                  <h1 className="display-4 fw-semibold">Materias</h1>
                  <div className="line" />
                  <p>Con un total de 4 materias para que te prepares en el tema de las ciencias</p>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center">
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay={150}>
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                    <i className="ri-pen-nib-fill" />
                  </div>
                  <h5 className="mt-4 mb-3">Física</h5>
                  <p>Ciencia natural que estudia, mediante leyes fundamentales, la energía, la materia, el tiempo y el espacio, es decir, el universo mismo.
</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay={250}>
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                  <FontAwesomeIcon icon={faFlaskVial} />
                  </div>
                  <h5 className="mt-4 mb-3">Química</h5>
                  <p>Ciencia natural que estudia la composición, propiedades de la materia en forma de elementos, especies, compuestos, mezclas u otras sustancias</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay={350}>
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                  <FontAwesomeIcon icon={faDna} />                  
                  </div>
                  <h5 className="mt-4 mb-3">Biología</h5>
                  <p>
                  Ciencia que estudia el origen, la evolución y las características de los seres vivos, así como sus procesos vitales con el medio ambiente.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay={450}>
                <div className="service theme-shadow p-lg-5 p-4">
                  <div className="iconbox">
                  <FontAwesomeIcon icon={faEarthAmericas} />                 
                  </div>
                  <h5 className="mt-4 mb-3">Sociales</h5>
                  <p>
                  Ciencias cuyo objeto estudio es la interacción social y la influencia del comportamiento humano en el entorno social en el que ocurre.
                  </p>
                </div>
              </div>
         
            </div>
          </div>
        </section>
        {/* COUNTER */}
        <section className="section-padding" style={{ 
          background: `linear-gradient( rgba(78, 87, 212, 0.8), rgba(78, 87, 212, 0.8) ), url(${reunion})`,
          backgroundPosition:"center",
          backgroundSize:"cover",
      }}
     >
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
                <h6 className="text-uppercase mb-0 text-white mt-3">Maestros </h6>
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
                  <h1 className="display-4 text-white fw-semibold">Contáctanos</h1>
                  <div className="line bg-white" />
                  <p className="text-white">
                  Si quiere más información sobre el programa, estaremos contentos de ayudarte, por medio del siguiente formulario
                  de contacto.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" data-aos="fade-down" data-aos-delay={250}>
              <div className="col-lg-8">
                <form  className="row g-3 p-lg-5 p-4 bg-white theme-shadow" onSubmit={handleLoginSession}>
                  <div className="form-group col-lg-6">
                    <input type="text" className="form-control" placeholder="Primer nombre" name='primer_nombre' value={contacto.primer_nombre} onChange={ManejarEventoDeInputs}/>
                    {
                    alerta.filter(input => input.valorInput == "primer_nombre" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                  </div>
                  <div className="form-group col-lg-6">
                    <input type="text" className="form-control" placeholder="Primer apellido" name='primer_apellido' value={contacto.primer_apellido} onChange={ManejarEventoDeInputs}/>
                    {
                    alerta.filter(input => input.valorInput == "primer_apellido" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                  </div>
                  <div className="form-group col-lg-12">
                    <input type="email" className="form-control" placeholder="Email" name='email' value={contacto.email} onChange={ManejarEventoDeInputs}/>
                    {
                    alerta.filter(input => input.valorInput == "email" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                  </div>
              
                  <div className="form-group col-lg-12">
                    <textarea name="mensaje" rows={5} className="form-control" placeholder="Ingresar Mensaje" defaultValue={""} value={contacto.mensaje} onChange={ManejarEventoDeInputs}/>
                    {
                    alerta.filter(input => input.valorInput == "mensaje" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
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
