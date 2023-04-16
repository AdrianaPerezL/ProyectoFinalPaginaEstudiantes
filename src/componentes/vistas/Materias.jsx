import '../../assets/styles/materias.css'
import { useEffect } from 'react'

import React from 'react'

export  function Materias() {
    useEffect(() => {
        document.title = "Aula 503 | Materias"
      }, []);
  return (
    <>
    <div class="container-fluid mt-xl-5">
            <div class="row">
                <h1 class="materiasTitulo">Materias</h1>

                <div class="col-12 col-sm-6 col-md-6">
                    <article>
                        <figure>
                            <h2 class="materia pt-4">Biología</h2>
                            <p class="año">1° año</p>
                            <button class="btn-materia m-2"><a href="/Cuestionario">Entrar</a> </button>
                            <img className='imgMateria' src="https://cdn-icons-png.flaticon.com/512/6502/6502964.png" alt=""/>
                        </figure>
                    </article>
                </div>

                <div class="col-12 col-sm-6 col-md-6">
                    <article>
                        <figure>
                            <h2 class="materia pt-4">Física</h2>
                            <p class="año">1° año</p>
                            <button class="btn-materia m-2">Entrar</button>

                            <img className='imgMateria' src="https://cdn-icons-png.flaticon.com/512/1467/1467187.png" alt=""/>
                        </figure>
                    </article>
                </div>

                <div class="col-12 col-sm-6 col-md-6">
                    <article>
                        <figure>
                            <h2 class="materia pt-4">Química</h2>
                            <p class="año">1° año</p>
                            <button class="btn-materia m-2">Entrar</button>

                            <img className='imgMateria' src="https://cdn-icons-png.flaticon.com/512/2470/2470882.png" alt=""/>
                        </figure>
                    </article>
                </div>
                <div class="col-12 col-sm-6 col-md-6">
                    <article>
                        <figure>
                            <h2 class="materia pt-4">Estudios Sociales</h2>
                            <p class="año">1° año</p>
                            <button class="btn-materia m-2">Entrar</button>

                            <img className='imgMateria' src="https://cdn-icons-png.flaticon.com/512/3079/3079289.png" alt=""/>
                        </figure>
                    </article>
                </div>
            </div>
        </div>
    </>
  )
}


