import React from 'react'
/* import '../../assets/styles/registro.css'
 */import fondo from "../../assets/img/Recurso4.png";


export const Registro = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${fondo})`,  backgroundPosition:"center",
    backgroundSize:"cover" }}>
        
      <section className="section-padding">
        <div className="container">
          <div>
            <div className="title">Registrarse</div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                
                  <div className="input-box">
                    <span className="details">NIE</span>
                    <input type="text" placeholder="Ingresa tu NIE" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="text" placeholder="Ingresa tu email" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Numero telefonico</span>
                    <input type="text" placeholder="Ingresa tu Numero telefonico" required />
                  </div>
                  <div className="input-box">
                    <p className="details">Seleccione un Departamento</p> 
                    <select id="selectdepartamentos">
                      <option>Seleccione un Departamento</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <p className="details">Seleccione un Municipio</p>
                    <select id="selectmunicipios">
                      <option>Seleccione un Municipio</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Contraseña</span>
                    <input type="text" placeholder="Ingresa tu Contraseña" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirmar Contraseña</span>
                    <input type="text" placeholder="Confirma tu Contraseña" required />
                  </div>
                </div>
                <div className="gender-details">
                  <input type="radio" name="gender" id="dot-1" />
                  <input type="radio" name="gender" id="dot-2" />
                  <input type="radio" name="gender" id="dot-3" />
                  <span className="gender-title">Genero</span>
                  <div className="category">
                    <label htmlFor="dot-1">
                      <span className="dot one" />
                      <span className="gender">Masculino</span>
                    </label>
                    <label htmlFor="dot-2">
                      <span className="dot two" />
                      <span className="gender">Femenino</span>
                    </label>
                    <label htmlFor="dot-3">
                      <span className="dot three" />
                      <span className="gender">Otro</span>
                    </label>
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
