import React from 'react'
import '../../assets/styles/navbar.css'
import Logo from '../../assets/img/Recurso1.png'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    
    const imgStyle = { width: '80px'}

  return (
     <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="brandImg rounded mx-auto d-block " src={Logo} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Materias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Contactanos</a>
              </li>
            </ul>
            <a href="" className="btt ms-lg-3">Iniciar Sesión</a>
            <a href="" className="btn btn-brand ms-lg-3">Registrarse</a>
          </div>
        </div>
      </nav>
  )
}
