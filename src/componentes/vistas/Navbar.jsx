import React, { useEffect, useState } from "react";
import "../../assets/styles/navbar.css";
import Logo from "../../assets/img/Recurso1.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const [ClassNamescrollTop, setClassNameScrollTop] =
    useState("navbar-scrolled");
  const [StatusClassName, setStatusClassName] = useState("navbar-scrolled");

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);

      if (window.scrollY >= 60) {
        setClassNameScrollTop("navbar-scrolled");
        setStatusClassName(true);
      } else if (window.scrollY <= 60) {
        setClassNameScrollTop(" ");
        setStatusClassName(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollTop, "ClassNamescrollTop", ClassNamescrollTop);

  return (
    <nav
      className={
        StatusClassName
          ? `navbar navbar-expand-lg fixed-top ${ClassNamescrollTop}`
          : `navbar navbar-expand-lg fixed-top`
      }
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="brandImg rounded mx-auto d-block " src={Logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Materias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contactanos
              </a>
            </li>
            
          </ul>

          <a href="/login" className="btt ms-lg-3">
            Iniciar Sesión
          </a>
          <a href="/registro" className="btn btn-brand ms-lg-3">
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  );
};
