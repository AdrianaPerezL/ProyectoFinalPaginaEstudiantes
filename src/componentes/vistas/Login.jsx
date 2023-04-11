import "../../assets/styles/login.css";
import React from "react";
import fondo from "../../assets/img/Recurso4.png";
import {useState} from "react"

export const Login = () => {
  const datosLogin = {
    email: "",
    contraseña: ""
  }

  const initialStateInput = {
    input: "",
    message: '',
    state: false
  }

  const [login, setLogin] = useState(datosLogin);

  const [alerta, setAlerta] = useState([initialStateInput]);

  const ManejarEventoDeInputs = (e) =>{
      //la propiedad target del event nos permitirá obtener los valores
      const name = e.target.name;
      const value = e.target.value;

    //actualizamos los valores capturados a nuestro estado de formulario
    setLogin({...login, [name]: value});
  }

  console.log(login);


  //función para validar los campos
  const handleLoginSession = (e) =>{
    e.preventDefault();


  //ordenar los datos para enviar la validación

  let verificarInputs = [
      {nombre: "email", value: login.email},
      {nombre: "contraseña", value: login.contraseña},
  ];


    //Enviar los datos a la función de validación y se reciben
    const datosValidados = ValidarInputs(verificarInputs)

    console.log(datosValidados);

       //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
  setAlerta(datosValidados);

  //obtenemos el total de validaciones
  const totalValidaciones = datosValidados.filter(input => input.estado === false).map
  ((estado) => {return false});

  console.log("Total de validaciones:", totalValidaciones.length);

  //Validación para enviar los datos al servidor
  if(totalValidaciones.length >=1){
    console.log("Enviar al servidor");
  }
 };

 const ValidarInputs = (data) =>{
  console.log(data);

//Declaramos un arreglo el cual se va a encargar de guardar las validaciones 
let errors = [];

//Recibimos los datos a validar
const datosDelFormulario = data;

//Proceso de validación
datosDelFormulario.map((valorInput) =>{
  switch(valorInput.nombre){
    case 'email': {
      if(valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput: valorInput.nombre,
          mensaje: 'Campo requerido',
          estado: true
        });
      }else{
        errors.push({
          valorInput: valorInput.nombre,
          mensaje: '',
          estado: false
        })
      }

      break;
    }

    case 'contraseña': {
      if(valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput: valorInput.nombre,
          mensaje: 'Campo requerido',
          estado: true
        });
      }else{
        errors.push({
          valorInput: valorInput.nombre,
          mensaje: '',
          estado: false
        })

        break;
      }
    }

    default: {

      break;
    }
  }
})

return errors;
};


  return (
    <>
      <div className="vh-100" style={{ backgroundImage: `url(${fondo})`,  backgroundPosition:"center",
          backgroundSize:"cover" }}>
        <section className="bodyLogin">
          <div className="card col-8 col-sm-4 col-md-4 ">
            <div className="card-body">
              <h5 className="card-title text-center w-100">Iniciar Sesión</h5>
              <form id="" className="w-100" onSubmit={handleLoginSession}>
                <div className="form-group w-100">
                  <label className="mt-4">Email</label>
                  <br />
                  <input
                    className="w-100 mt-2 mb-2 form-control"
                    type="email"
                    placeholder="Escribe tu correo"
                    id="inputEmail"
                    aria-describedby="inputGroup-sizing-default"
                    name="email"
                    value={Login.email}
                    onChange={ManejarEventoDeInputs}
                  />
                  <label className="mt-4">Contraseña</label>
                  <input
                    className="w-100 mt-2 mb-2 form-control"
                    type="password"
                    placeholder="Escribe tu correo"
                    id="inputEmail"
                    aria-describedby="inputGroup-sizing-default"
                    name= 'contraseña'
                    value={Login.contraseña}
                    onChange={ManejarEventoDeInputs}
                  />
                </div>
                <div className="botondiv w-100">
                  <button className="mt-2 btn-login w-100" type="submit">
                    <a href="" style={{textDecoration: "none"}}>Enviar</a>
                  </button>
                </div>
                <div role="alert" id="alerta"></div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

