import '../../assets/styles/login.css'
import React from 'react'
import fondo from '../../assets/img/Recurso4.png'

export const Login = () => {
  return (
    <>
         <section className='bodyLogin' style={{backgroundImage: `url(${fondo})`}}>
        <div className="card m-5 w-25">
          <div className="card-body">
            <h5 className="card-title text-center w-100">Iniciar Sesión</h5>
            <form action id="form" className="w-100">
              <div className="form-group w-100">
               
                <label htmlFor>Email</label>
                <br />
                <input className="w-100 mt-2 mb-2 form-control" type="email" placeholder="Escribe tu correo" id="inputEmail" aria-describedby="inputGroup-sizing-default" />
                <label htmlFor>Contraseña</label>
                <input className="w-100 mt-2 mb-2 form-control" type="email" placeholder="Escribe tu correo" id="inputEmail" aria-describedby="inputGroup-sizing-default" />
              </div>
              <div className="botondiv w-100"><button className="mt-2 btn-login w-100" type="submit"><a href="materias.html">Enviar</a> </button></div>
              <div role="alert" id="alerta">
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
