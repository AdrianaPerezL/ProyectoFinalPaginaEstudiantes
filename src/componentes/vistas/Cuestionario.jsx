import React from 'react'
import { useState } from "react";
import '../../assets/styles/Cuestionario.css'
import { Link } from "react-router-dom";

export const Cuestionario = () => {
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
      pregunta6: "",
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
    }
  
  return (
    <>
    <div id="encabezado3">
          <h1>Ciencias Sociales</h1>
          <h2>Quiz</h2>
    </div>
    <container id="container1">
      <section id="sec4">
        <div className="row">
          <div className="col-4" id="list">
            <div className="list-group" id="list-tab" role="tablist">

            <form onSubmit={enviarRespuesta} className="mt-8 p-4">

{mostrar.mostrar === true && mostrar.ID === 1 && (
  <div>
    <h1 className="list-group-item" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Primer Pregunta</h1>
    <div class="form-check">
      <input
      value="1" 
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta1"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault1" >
        Verdadero
      </label>
    </div>

    <div class="form-check">
      <input
        value="2"
        onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta1"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault2">
      Falso
      </label>
    </div>
  </div>
)}

{mostrar.mostrar === true && mostrar.ID === 2 && (
  <div>
    <h1 className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Segunda Pregunta</h1>
    <div class="form-check">
      <input
      value="1"
      onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta2"
        id="flexRadioDefault2"
        
      />
      <label class="form-check-label" for="flexRadioDefault2">
        Verdadero
      </label>
    </div>

    <div class="form-check">
      <input
     value="2"
     onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta2"
        id="flexRadioDefault2"
   
      />
      <label class="form-check-label" for="flexRadioDefault2">
        Falso
      </label>
    </div>
  </div>
)}

{mostrar.mostrar === true && mostrar.ID === 3 && (
  <div>
    <h1 className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Tercer Pregunta</h1>
    <div class="form-check">
      <input
         value="1"
         onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta3"
        id="flexRadioDefault3"
       
      />
      <label class="form-check-label" for="flexRadioDefault2">
        True
      </label>
    </div>
    <div class="form-check">
      <input
      value="2"
      onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta3"
        id="flexRadioDefault3"
        
      />
      <label class="form-check-label" for="flexRadioDefault2">
        Falso
      </label>
    </div>
  </div>
)}

{mostrar.mostrar === true && mostrar.ID === 4 && (
  <div>
   
    <h1 className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Cuarta Pregunta</h1>
    <div class="form-check">
      <input
      value="1"
      onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta4"
        id="flexRadioDefault4"
      
      />
      <label class="form-check-label" for="flexRadioDefault2">
        Verdadero
      </label>
    </div>
    <div class="form-check">
      <input
      value="2"            
      onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta4"
        id="flexRadioDefault4"
        
      />
      <label class="form-check-label" for="flexRadioDefault2">
        Falso
      </label>
    </div>
    
  </div>
)}

{mostrar.mostrar === true && mostrar.ID === 5 && (
  <div>
   
    <h1 className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Quinta Pregunta</h1>
    <div class="form-check">
      <input
      value="1"
      onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta5"
        id="flexRadioDefault5"
       
      />
      <label class="form-check-label" for="flexRadioDefault2">
      Verdadero
      </label>
    </div>
    <div class="form-check">
      <input
      value="2"
      onChange={ObtenerValores}
        class="form-check-input"
        type="radio"
        name="pregunta5"
        id="flexRadioDefault5"
        
      />
      <label class="form-check-label" for="flexRadioDefault2">
        Falso
      </label>
    </div>
  </div>
)}
</form>

{mostrar.mostrar === false && mostrar.ID === 6 && (
  <div>
  <Link to={"/Progreso"} id="boton1" style={{textDecoration: 'none', color: 'white'}} type="submit">
  Enviar respuesta
  </Link>
{/* <button id="boton1" style={{textDecoration: 'none', color: 'white'}} type="submit" >Enviar respuesta
</button>   */}        
  </div>
)}

{(textoPregunta === "Siguiente") &&
<button id="boton2" style={{textDecoration: 'none', color: 'white'}}
  onClick={() => PasarLaSiguientePregunta()}
>
  {textoPregunta}
</button>                                
}

      </div>
      <nav aria-label="Page navigation example" id="pasarpag">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Previous" style={{color: '#E855BE'}}>
                    <span aria-hidden="true">«</span>
                    <span className="sr-only" style={{color: '#E855BE'}}>
                      Previous
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/" style={{color: '#E855BE'}}>
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/" style={{color: '#E855BE'}}>
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/" style={{color: '#E855BE'}}>
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Next" style={{color: '#E855BE'}}>
                    <span aria-hidden="true">»</span>
                    <span className="sr-only" style={{color: '#E855BE'}}>
                      Next
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
     </div>
    </div>
  </section>

<section>
  
</section>
</container>


    
    </>
  )
};


