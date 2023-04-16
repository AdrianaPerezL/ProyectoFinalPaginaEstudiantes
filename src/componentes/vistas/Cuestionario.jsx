import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React from 'react'
import { useState, useEffect } from "react";
import '../../assets/styles/Cuestionario.css'
import { Link } from "react-router-dom";
import { Cronometro } from '../vistas/Cronometro';



export const Cuestionario = () => {

  useEffect(() => {
    document.title = "Aula 503 | Quiz"
  }, []);

  
  /* const MySwal = withReactContent(Swal)

  MySwal.fire({
  title: 'Indicaciones:',
  text: "1. Presiona el cronometro antes de empezar el cuestionario 2. Selecciona una respuesta por cada pregunta",
  footer: "Buena Suerte!",
  width: 600,
  padding: '3em',
  color: '#572AB0',

  backdrop: `
    rgba(0,0,123,0.4)
    left top
    no-repeat
  `
}); */




    const [textoPregunta, setTextoPregunta] = useState("Siguiente");

    const [pregunta, setPregunta] = useState(1);
  
    const [mostrar, setMostrar] = useState({
      mostrar: true,
      ID: 1,
    });
  
    const[respuestasFormulario, setRespuestaFormulario] = useState({
      pregunta1: "",
      pregunta2: "",
      pregunta3: "",
      pregunta4: "",
      pregunta5: "",
    });
  
  
    const ObtenerValores = (e) =>{
      console.log("hola");
      const value = e.target.value;
      const name = e.target.name;
      setRespuestaFormulario({...respuestasFormulario, [name]:value})
    };
  
    console.log(respuestasFormulario);
  
    const PasarLaSiguientePregunta = () => {
  
      let mostrarSiguiente = pregunta+1;
  
      if (mostrarSiguiente === 6) {
          setTextoPregunta("Finalizar");
          setMostrar( { mostrar:false, ID:mostrarSiguiente} )
      }else{
          setPregunta(mostrarSiguiente);
          setMostrar({mostrar:true, ID:mostrarSiguiente})
      }
    };
  
    const enviarRespuesta = (e) =>{
      e.preventDefault();
      console.log(respuestasFormulario);
    };


/* 
    Swal.fire({
      title: 'Indicaciones:',
      text: "1. Presiona el cronometro antes de empezar el cuestionario 2. Selecciona una respuesta por cada pregunta",
      footer: "Buena Suerte!",
      width: 600,
      padding: '3em',
      color: '#572AB0',

      backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `
    })
  */
    const MySwal = withReactContent(Swal);
    const mostrarAlerta = () =>{
      MySwal.fire({
        title: 'Indicaciones:',
        text: "1. Presiona el cronometro antes de empezar el cuestionario 2. Selecciona una respuesta por cada pregunta",
        footer: "Buena Suerte!",
        width: 600,
        padding: '3em',
        color: '#572AB0',
      
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `
      });
  };
    
  return (
    <>

    <div id="encabezado3">
          <h1>Ciencias Sociales</h1>
          <h2>Cuestionario</h2>
    </div><button id="botonindicaciones" onClick={() =>mostrarAlerta()}>Indicaciones</button>
    <lord-icon src="https://cdn.lordicon.com/uutnmngi.json" trigger="hover" colors="primary:#0ad5bd,secondary:#572ab0" style={{width: '60px', height: '60px', marginLeft: '35%'}}>
      </lord-icon>
      <Cronometro></Cronometro> 
      
    <container id="container1">
      <section id="sec4">
        <div className="row">
          <div className="col-4" id="list">
            <div className="list-group" id="list-tab" role="tablist">

  <form onSubmit={enviarRespuesta} style={{paddingTop: '4%'}}>
    {mostrar.mostrar === true && mostrar.ID === 1 && (
      
      <section>

      <div id='divgrande'>
        <h1 className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Primer Pregunta</h1>
      </div>

  
      <div class="form-check" id='divpequeño'>
      <p>
        1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci soluta fugiat enim maxime aspernatur? Quibusdam, tempora vel praesentium iusto expedita doloremque dicta maiores possimus adipisci rem reiciendis aut delectus voluptatum!
      </p>
      <input
      value="1"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta1"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault1" id='label' >
      Lorem
      </label>
    </div>


    <div class="form-check" id='divpequeño2'>
      <input
        value="2"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta1"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault2" id='label'>
      Lorem
      </label>
    </div>

    <div class="form-check" id='divpequeño2'>
      <input
        value="3"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta1"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault3" id='label'>
        Lorem
      </label>
    </div>

    </section>)}


  {mostrar.mostrar === true && mostrar.ID === 2 && (
    <section>
      <div id='divgrande'>
        <h1 className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Segunda Pregunta</h1>
      </div>

  
      <div class="form-check" id='divpequeño'>
      <p>
        2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci soluta fugiat enim maxime aspernatur? Quibusdam, tempora vel praesentium iusto expedita doloremque dicta maiores possimus adipisci rem reiciendis aut delectus voluptatum!
      </p>
      <input
      value="1"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta2"
        id="flexRadioDefault2"
      />
      <label class="form-check-label" for="flexRadioDefault1" id='label' >
      Lorem
      </label>
    </div>


    <div class="form-check" id='divpequeño2'>
      <input
        value="2"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta2"
        id="flexRadioDefault2"
      />
      <label class="form-check-label" for="flexRadioDefault2" id='label'>
      Lorem
      </label>
    </div>

    <div class="form-check" id='divpequeño2'>
      <input
        value="3"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta2"
        id="flexRadioDefault2"
      />
      <label class="form-check-label" for="flexRadioDefault3" id='label'>
        Lorem
      </label>
    </div>
    </section>
  )}

 {mostrar.mostrar === true && mostrar.ID === 3 && (
  <section>
    <div id='divgrande'>
        <h1 className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Tercera Pregunta</h1>
      </div>

  
      <div class="form-check" id='divpequeño'>
      <p>
        3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci soluta fugiat enim maxime aspernatur? Quibusdam, tempora vel praesentium iusto expedita doloremque dicta maiores possimus adipisci rem reiciendis aut delectus voluptatum!
      </p>
      <input
      value="1"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta3"
        id="flexRadioDefault3"
      />
      <label class="form-check-label" for="flexRadioDefault3" id='label' >
      Lorem
      </label>
    </div>


    <div class="form-check" id='divpequeño2'>
      <input
        value="2"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta3"
        id="flexRadioDefault3"
      />
      <label class="form-check-label" for="flexRadioDefault3" id='label'>
      Lorem
      </label>
    </div>

    <div class="form-check" id='divpequeño2'>
      <input
        value="3"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta3"
        id="flexRadioDefault3"
      />
      <label class="form-check-label" for="flexRadioDefault3" id='label'>
        Lorem
      </label>
    </div>
  </section>
 )}

{mostrar.mostrar === true && mostrar.ID === 4 && (
  <section>
     <div id='divgrande'>
        <h1 className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Cuarta Pregunta</h1>
      </div>

  
      <div class="form-check" id='divpequeño'>
      <p>
        4. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci soluta fugiat enim maxime aspernatur? Quibusdam, tempora vel praesentium iusto expedita doloremque dicta maiores possimus adipisci rem reiciendis aut delectus voluptatum!
      </p>
      <input
      value="1"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta4"
        id="flexRadioDefault4"
      />
      <label class="form-check-label" for="flexRadioDefault4" id='label' >
      Lorem
      </label>
    </div>


    <div class="form-check" id='divpequeño2'>
      <input
        value="2"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta4"
        id="flexRadioDefault4"
      />
      <label class="form-check-label" for="flexRadioDefault4" id='label'>
      Lorem
      </label>
    </div>

    <div class="form-check" id='divpequeño2'>
      <input
        value="3"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta4"
        id="flexRadioDefault4"
      />
      <label class="form-check-label" for="flexRadioDefault4" id='label'>
        Lorem
      </label>
    </div>
  </section>
)}

{mostrar.mostrar === true && mostrar.ID === 5 &&(
  <section>
     <div id='divgrande'>
        <h1 className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"> Quinta Pregunta</h1>
      </div>

  
      <div class="form-check" id='divpequeño'>
      <p>
        5. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci soluta fugiat enim maxime aspernatur? Quibusdam, tempora vel praesentium iusto expedita doloremque dicta maiores possimus adipisci rem reiciendis aut delectus voluptatum!
      </p>
      <input
      value="1"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta5"
        id="flexRadioDefault5"
      />
      <label class="form-check-label" for="flexRadioDefault5" id='label' >
      Lorem
      </label>
    </div>


    <div class="form-check" id='divpequeño2'>
      <input
        value="2"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta5"
        id="flexRadioDefault5"
      />
      <label class="form-check-label" for="flexRadioDefault2" id='label'>
      Lorem
      </label>
    </div>

    <div class="form-check" id='divpequeño2'>
      <input
        value="3"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta5"
        id="flexRadioDefault5"
      />
      <label class="form-check-label" for="flexRadioDefault5" id='label'>
        Lorem
      </label>
    </div>
  </section>
)}

{mostrar.mostrar === false && mostrar.ID === 6 && (
  <div>
     <div class="container">
      <table  style={{width: '100%'}}>
        <tbody class="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pregunta</th>
            <th scope="col">Opcion seleccionada</th>
          </tr>

          <tr>
            <th scope="col">1</th>
            <th scope="col">Pregunta 1</th>
            <th scope="col">{respuestasFormulario.pregunta1}</th>
          </tr>

          <tr>
            <th scope="col">2</th>
            <th scope="col">Pregunta 2</th>
            <th scope="col">{respuestasFormulario.pregunta2}</th>
          </tr>

          <tr>
            <th scope="col">3</th>
            <th scope="col">Pregunta 3</th>
            <th scope="col">{respuestasFormulario.pregunta3}</th>
          </tr>

          <tr>
            <th scope="col">4</th>
            <th scope="col">Pregunta 3</th>
            <th scope="col">{respuestasFormulario.pregunta4}</th>
          </tr>
          <tr>
            <th scope="col">5</th>
            <th scope="col">Pregunta 5</th>
            <th scope="col">{respuestasFormulario.pregunta5}</th>
          </tr>
        </thead>
        <tbody id="lista-informacion"></tbody>
        <tr id="listDefault"></tr>
      </tbody>
    </table>
    </div>

  <Link to={"/Progreso"} id="boton1" style={{textDecoration: 'none', color: 'white', marginRight: '6px%'}} type="submit">
  Enviar respuestas
  </Link>
  <button onClick={
    () => { setMostrar( { mostrar:true, ID:1} )
            setTextoPregunta("Siguiente")
          }
    } id="boton5" style={{textDecoration: 'none', color: 'white'}} type="submit">
  Empezar de nuevo
  </button>  
  </div>
  
)}


{(textoPregunta === "Siguiente") &&
<button id="boton2" style={{textDecoration: 'none', color: 'white'}}
  onClick={() => PasarLaSiguientePregunta()}
>
  {textoPregunta}
</button>                                
}

  </form>
      </div>
     </div>
    </div>
  </section>

<section>
  
</section>
</container>
</>
  )
};

