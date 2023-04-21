import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../../assets/styles/login.css";
import React from "react";
import fondo from "../../assets/img/Recurso4.png";
import {useState, useEffect} from "react"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'universal-cookie';

 

export const Login = () => {
  
  const cookies = new Cookies();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  

  useEffect(() => {
    document.title = "Aula 503 | Log In"
  }, []);

   //Mostrar contraseña
   const [show, setShow] = useState(false);
   const switchShow = () => setShow(!show);
 
   const [password, setPassword] = useState("");
   const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

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
  if(totalValidaciones.length >=2){

    console.log("Enviar al servidor");
    enviarDatosLogin()

  }

 };


 async function enviarDatosLogin() {
  const url = "http://127.0.0.1:8000/api/login";

  let config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
      }
};

const UpdateData = {
  contrasena: login.contraseña,
  correo: login.email
}

try {
  const resp = await axios.post(url, UpdateData, config);
  console.log(resp.data,"---------------------");

  const token = resp.data.access_token;
  const validateSession = cookies.set("tokeApp", { token:token }, {path: "/"} ); 

  Swal.fire('Bienvenido');
  setTimeout( function() { window.location.href = "/materias"; }, 1500 );


} catch(err){
  console.error(err);
  
  MySwal.fire({
    color: '#572AB0',
    icon: "error",
    title: "Inicio de sesión fallido",
    text: "Usuario no encontrado",
    width: 400,
    padding: '3em',

    backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `
  });

  console.error(err.response.data.error);
}
 }

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

      break;
    }

    case 'contraseña': {
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
                    value={login.email}
                    onChange={ManejarEventoDeInputs}
                  />
                  {
                    alerta.filter(input => input.valorInput == "email" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                  <label className="mt-4">Contraseña</label>

                  <div className="d-flex">
                  <input
                    className="w-100 mt-2 mb-2 form-control"
                    type={show ? "text" : "password"}
                    placeholder="Escribe tu contraseña"
                    id="inputEmail"
                    aria-describedby="inputGroup-sizing-default"
                    name= 'contraseña'
                    value={login.contraseña}
                    onChange={ManejarEventoDeInputs}
                  />
                   <FontAwesomeIcon
                    className="fs-5 mt-3"
                      icon={faEye}
                      onClick={switchShow}
                      {...(show ? "Ocultar" : "Mostrar")}
                      style={{ color: "#e855be" }}
                    />
                    </div>
                  {
                    alerta.filter(input => input.valorInput == "contraseña" && input.estado === true).map(message => (
                      <div>
                        <span className='text-danger'>{message.mensaje}</span>
                      </div>
                    ))
                  }
                </div>
                <div className="botondiv w-100">
                  <button className="mt-2 btn-login w-100" type="submit">
                    Enviar
                  </button>
                </div>
                <p className="text-center mt-1 pregunta">¿No tienes una cuenta? <Link to="/registro" className="text-purple">Registrate</Link></p>

                <div role="alert" id="alerta"></div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

