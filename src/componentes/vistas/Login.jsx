import "../../assets/styles/login.css";
import React from "react";
import fondo from "../../assets/img/Recurso4.png";

export const Login = () => {
  return (
    <>
      <div className="vh-100" style={{ backgroundImage: `url(${fondo})`,  backgroundPosition:"center",
          backgroundSize:"cover" }}>
        <section className="bodyLogin">
          <div className="card col-8 col-sm-4 col-md-4 ">
            <div className="card-body">
              <h5 className="card-title text-center w-100">Iniciar Sesión</h5>
              <form action id="form" className="w-100">
                <div className="form-group w-100">
                  <label className="mt-4">Email</label>
                  <br />
                  <input
                    className="w-100 mt-2 mb-2 form-control"
                    type="email"
                    placeholder="Escribe tu correo"
                    id="inputEmail"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  <label className="mt-4">Contraseña</label>
                  <input
                    className="w-100 mt-2 mb-2 form-control"
                    type="email"
                    placeholder="Escribe tu correo"
                    id="inputEmail"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="botondiv w-100">
                  <button className="mt-2 btn-login w-100" type="submit">
                    <a href="">Enviar</a>{" "}
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
};