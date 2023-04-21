import React, { useEffect, useState } from "react";
import "../../assets/styles/navbar.css";
import Logo from "../../assets/img/Recurso1.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

export const Navbar = () => {
  const cookies = new Cookies();
  const validateSession = cookies.get("tokeApp");
  console.log("get navbar info", cookies.get("tokeApp")); // Pacman

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

  const cerrarSesionApp = () => {
    Swal.fire({
      title: "¿Estas seguro de cerrar sesión?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        cookies.remove("tokeApp");
        Swal.fire("Sesión finalizada", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Sesión cancelada", "", "info");
      }
      setTimeout(function () {
        window.location.href = "/login";
      }, 1500);
    });
  };

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
              {validateSession ? (
                <a></a>
              ) : (
                <a className="nav-link" href="#hero">
                  Inicio
                </a>
              )}
            </li>
            <li className="nav-item">
              {validateSession ? (
                <a href="/materias" className="nav-link">
                  Materias
                </a>
              ) : (
                <a className="nav-link" href="#services">
                  Materias
                </a>
              )}
            </li>
            <li className="nav-item">
              {validateSession ? (
                <a href="/list" className="nav-link">
                  Cuestionarios
                </a>
              ) : (
                <a className="nav-link" href="#contact">
                  Contactanos
                </a>
              )}
            </li>
          </ul>

          {validateSession ? (
            <a
              href="/perfil"
              className="nav-link"
              style={{
                fontWeight: "500",
                color: "#fff",
              }}
            >
              Perfil
            </a>
          ) : (
            <a href="/login" className="btt ms-lg-3">
              Iniciar Sesión
            </a>
          )}

          {validateSession ? (
            <a className="btt ms-lg-4 " onClick={cerrarSesionApp}>
              Cerrar Sesión
            </a>
          ) : (
            <a href="/registro" className="btn btn-brand ms-lg-3">
              Registrarse
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};
