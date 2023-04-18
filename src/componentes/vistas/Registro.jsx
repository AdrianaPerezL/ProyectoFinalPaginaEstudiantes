import React from "react";
import "../../assets/styles/registro.css";
import fondo from "../../assets/img/Recurso4.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const Registro = () => {
  useEffect(() => {
    document.title = "Aula 503 | Registrate";
  }, []);

  //Mostrar contraseña1
  const [show, setShow] = useState(false);
  const switchShow = () => setShow(!show);

  const [password, setPassword] = useState("");
  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

//mostrar contraseña2
const [show2, setShow2] = useState(false);
  const switchShow2 = () => setShow2(!show2);

  const [password2, setPassword2] = useState("");
  const onChange2 = ({ currentTarget }) => setPassword2(currentTarget.value);


  //estado inicial de formulario
  const datosFormularios = {
    NIE: "",
    email: "",
    foto: "",
    telefono: "",
    direccion: "",
    contrasena: "",
    contrasena_confirmation: "",
  };

  //Estado inicial para la alerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosFormularios);

  //Estado para manejar las alertas de validación
  const [alerta, setAlerta] = useState([initialStateInput]);

  //Función para obtener los datos de los inputs
  const ManejarEventoDeInputs = (e) => {
    //la propiedad target del event nos permitirá obtener los valores
    const name = e.target.name;
    const value = e.target.value;

    //actualizamos los valores capturados a nuestro estado de formulario
    setFormulario({ ...formulario, [name]: value });
  };

  console.log(formulario);

  //función para validar los campos
  const handleLoginSession = (e) => {
    e.preventDefault();

    //ordenar los datos para enviar la validación
    let verificarInputs = [
      { nombre: "NIE", value: formulario.NIE },
      { nombre: "email", value: formulario.email },
      { nombre: "foto", value: formulario.foto },
      { nombre: "telefono", value: formulario.telefono },
      { nombre: "direccion", value: formulario.direccion },
      { nombre: "contrasena", value: formulario.contrasena },
      {
        nombre: "contrasena_confirmation",
        value: formulario.contrasena_confirmation,
      },
    ];

    //Enviar los datos a la función de validación y se reciben
    const datosValidados = ValidarInputs(verificarInputs);

    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);

    //obtenemos el total de validaciones
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });

    console.log("Total de validaciones:", totalValidaciones.length);

    //Validación para enviar los datos al servidor
    if (totalValidaciones.length >= 5) {
      enviarDatosLogin()
    }
  };

  async function enviarDatosLogin() {
    const url = "http://127.0.0.1:8000/api/register";

    let config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const UpdateData = {
      nie: formulario.NIE,
      correo: formulario.email,
      telefono: formulario.telefono,
      direccion: formulario.direccion,
      contrasena: formulario.contrasena,
      contrasena: formulario.contrasena_confirmation,
    };

    try {
      const resp = await axios.post(url, UpdateData, config);
      console.log(resp);
    } catch (err) {
      console.error(err);
      console.error(err.response.data.error);
    }
  }

  const ValidarInputs = (data) => {
    console.log(data);

    //Declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];

    //Recibimos los datos a validar
    const datosDelFormulario = data;

    //map es como un for
    //Proceso de validación
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.nombre) {
        case "NIE": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "*Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }

          break;
        }

        case "email": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "*Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }

        case "foto": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "*Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }

        case "telefono": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "*Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }

        case "direccion": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "*Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }

          break;
        }

        case "contrasena": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "*Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }

          break;
        }

        case "contrasena_confirmation": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "*Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }

          break;
        }

        default: {
          break;
        }
      }
    });

    //Retornamos el total de validaciones
    return errors;
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <section className="section-padding" onSubmit={handleLoginSession}>
        <div className="containerform">
          <div className="">
            <div className="title">Registrarse</div>
            <div className="content">
              <form className="formDiv">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">NIE</span>
                    <input
                      type="number"
                      placeholder="Ingresa tu NIE"
                      name="NIE"
                      value={formulario.NIE}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "NIE" && input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span className="text-danger">{message.mensaje}</span>
                        </div>
                      ))}
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="text"
                      placeholder="Ingresa tu email"
                      name="email"
                      value={formulario.email}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "email" && input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span className="text-danger">{message.mensaje}</span>
                        </div>
                      ))}
                  </div>
                  <div className="input-box">
                    <span className="details">Numero telefonico</span>
                    <input
                      type="tel"
                      placeholder="Ingresa tu Numero telefonico"
                      name="telefono"
                      value={formulario.telefono}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "telefono" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span className="text-danger">{message.mensaje}</span>
                        </div>
                      ))}
                  </div>
                  <div className="input-box">
                    <span className="details">Foto</span>
                    <input
                      type="file"
                      placeholder="Ingresa foto"
                      name="foto"
                      value={formulario.foto}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "foto" && input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span className="text-danger">{message.mensaje}</span>
                        </div>
                      ))}
                  </div>

                  <div className="input-box">
                    <span className="details">Dirección</span>
                    <input
                      type="text"
                      placeholder="Ingresa tu dirección"
                      name="direccion"
                      value={formulario.direccion}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "direccion" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span className="text-danger">{message.mensaje}</span>
                        </div>
                      ))}
                  </div>

                  <div className="input-box">
                    <span className="details">Contraseña</span>
                    <div className="d-flex">
                    <input
                      type={show ? "text" : "password"}
                      placeholder="Ingresa tu contraseña"
                      name="contrasena"
                      value={formulario.contrasena}
                      onChange={ManejarEventoDeInputs}
                    />
                    <FontAwesomeIcon
                    className="fs-5 mt-2"
                      icon={faEye}
                      onClick={switchShow}
                      {...(show ? "Ocultar" : "Mostrar")}
                      style={{ color: "#e855be" }}
                    />
                    </div>
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "contrasena" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span className="text-danger">{message.mensaje}</span>
                        </div>
                      ))}
                  </div>

                  <div className="input-box" >
                    <span className="details">Confirma tu contraseña</span>
                    <div className="d-flex">
                    <input
                      type={show2 ? "text" : "password"}
                      placeholder="Ingresa tu contraseña"
                      name="contrasena_confirmation"
                      value={formulario.contrasena_confirmation}
                      onChange={ManejarEventoDeInputs}
                    />
                    <FontAwesomeIcon
                      className="fs-5 mt-2"
                      icon={faEye}
                      onClick={switchShow2}
                      {...(show2 ? "Ocultar" : "Mostrar")}
                      style={{ color: "#e855be" }}
                    />
                    </div>
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "contrasena_confirmation" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span className="text-danger">{message.mensaje}</span>
                        </div>
                      ))}
                    </div>
                </div>

                <div className="button">
                  <input type="submit" defaultValue="Registrarse" />
                </div>
                <p className="text-center mt-1 pregunta">
                  ¿Ya tienes una cuenta?{" "}
                  <Link to="/login" className="text-purple">
                    Inicia Sesión
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
