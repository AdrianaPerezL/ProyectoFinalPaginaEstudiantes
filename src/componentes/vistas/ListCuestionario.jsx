import React from "react";
import "../../assets/styles/listcuestionario.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListCuestionario() {
  useEffect(() => {
    document.title = "Aula 503 | Cuestionarios";
  }, []);

  return (
    <>
      <div class="container-fluid mt-xl-5">
        <div class="row">
          <h1 class="materiasTitulo">Cuestionarios</h1>

          <div class="col-12 col-sm-6 col-md-6">
            <article>
              <figure className="figureCuestionario" style={{}}>
                <h2 class="materia pt-4">Cuestionario 1</h2>
                <p class="año">1° año</p>
                <p className="parrafoCuestionario pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam consequuntur laboriosam totam illo. Maiores quos,
                  unde velit magnam similique temporibus id iusto labore et
                  ratione error ex cum. Doloremque, esse.
                </p>
                <Link to="/cuestionario" class="btn-start m-2">
                  <a href="/">Empezar</a>{" "}
                </Link>
              </figure>
            </article>
          </div>

          <div class="col-12 col-sm-6 col-md-6">
            <article>
              <figure className="figureCuestionario" style={{}}>
                <h2 class="materia pt-4">Cuestionario 1</h2>
                <p class="año">1° año</p>
                <p className="parrafoCuestionario pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam consequuntur laboriosam totam illo. Maiores quos,
                  unde velit magnam similique temporibus id iusto labore et
                  ratione error ex cum. Doloremque, esse.
                </p>
                <Link to="/cuestionario" class="btn-start m-2">
                  <a href="/">Empezar</a>{" "}
                </Link>
              </figure>
            </article>
          </div>

          <div class="col-12 col-sm-6 col-md-6">
            <article>
              <figure className="figureCuestionario" style={{}}>
                <h2 class="materia pt-4">Cuestionario 1</h2>
                <p class="año">1° año</p>
                <p className="parrafoCuestionario pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam consequuntur laboriosam totam illo. Maiores quos,
                  unde velit magnam similique temporibus id iusto labore et
                  ratione error ex cum. Doloremque, esse.
                </p>
                <Link to="/cuestionario" class="btn-start m-2">
                  <a href="/">Empezar</a>{" "}
                </Link>
              </figure>
            </article>
          </div>

          <div class="col-12 col-sm-6 col-md-6">
            <article>
              <figure className="figureCuestionario" style={{}}>
                <h2 class="materia pt-4">Cuestionario 1</h2>
                <p class="año">1° año</p>
                <p className="parrafoCuestionario pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam consequuntur laboriosam totam illo. Maiores quos,
                  unde velit magnam similique temporibus id iusto labore et
                  ratione error ex cum. Doloremque, esse.
                </p>
                <Link to="/cuestionario" class="btn-start m-2">
                  <a href="/">Empezar</a>{" "}
                </Link>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
