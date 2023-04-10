import React from 'react'
import '../../assets/styles/registro.css'
 import fondo from "../../assets/img/Recurso4.png";
 import { useState } from "react";



export const Registro = () => {

          //estado inicial de formulario
          const datosFormularios = {
            NIE: "",
            email: "",
            foto: "",
            telefono: "",
            direccion: ""
        }

        //Estado inicial para la alerta
        const initialStateInput = {
            input: "",
            message: '',
            state: false 
        };

       
    
      
 //Estado para manejar los valores del formulario
 const [formulario, setFormulario] = useState(datosFormularios);

 //Estado para manejar las alertas de validación
 const [alerta, setAlerta] = useState([initialStateInput]);

  //Función para obtener los datos de los inputs 
  const ManejarEventoDeInputs = (e) =>{

     //la propiedad target del event nos permitirá obtener los valores
       const name = e.target.name;
       const value = e.target.value;

     //actualizamos los valores capturados a nuestro estado de formulario
     setFormulario({...formulario, [name]: value});

    
   }


   console.log(formulario);

    //función para validar los campos
 const handleLoginSession = (e) =>{
    e.preventDefault();


    //ordenar los datos para enviar la validación
    let verificarInputs = [
        { NIE: "NIE", value: formulario.NIE},
        { email: "email", value: formulario.email},
        { foto: "foto", value: formulario.foto},
        { telefono: "telefono", value: formulario.telefono},
        { direccion: "direccion", value: formulario.direccion},
    ];

  /*   //Enviar los datos a la función de validación y se reciben
    const datosValidados = ValidarInputs(verificarInputs) */
 };
  return (
    <div className="" style={{ backgroundImage: `url(${fondo})`,  backgroundPosition:"center",
    backgroundSize:"cover" }}>
        
      <section className="section-padding" onSubmit={handleLoginSession} >
        <div className="containerform">
          <div className=''>
            <div className="title">Registrarse</div>
            <div className="content">
              <form className='formDiv'>
                <div className="user-details">
                
                  <div className="input-box">
                    <span className="details">NIE</span>
                    <input type="number" placeholder="Ingresa tu NIE" name='NIE' value={formulario.NIE} onChange={ManejarEventoDeInputs}/>
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="text" placeholder="Ingresa tu email" name='email' value={formulario.email} onChange={ManejarEventoDeInputs}/>
                  </div>
                  <div className="input-box">
                    <span className="details">Numero telefonico</span>
                    <input type="number" placeholder="Ingresa tu Numero telefonico" name='telefono' value={formulario.telefono} onChange={ManejarEventoDeInputs}/>
                  </div>
                  <div className="input-box">
                    <span className="details">Foto</span>
                    <input type="file" placeholder="Ingresa tu Numero telefonico" name='foto' value={formulario.foto} onChange={ManejarEventoDeInputs}/>
                  </div>
                 
                  <div className="input-box">
                    <span className="details">Dirección</span>
                    <input type="text" placeholder="Ingresa tu dirección" name='direccion' value={formulario.direccion} onChange={ManejarEventoDeInputs}/>
                  </div>
                  
                </div>
              
                <div className="button">
                  <input type="submit" defaultValue="Registrarse" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
