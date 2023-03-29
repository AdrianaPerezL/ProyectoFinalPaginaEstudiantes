import '../../assets/styles/materias.css'

import React from 'react'

export  function Materias() {
  return (
    <>
    <div class="container-fluid mt-xl-5">
            <div class="row">
                <h1 class="materiasTitulo">Materias</h1>

                <div class="col-12 col-sm-6 col-md-6">
                    <article>
                        <figure>
                            <h2 class="materia">Ciencias</h2>
                            <p class="año">1° año</p>
                            <button class="btn-materia m-2"><a href="quiz.html">Entrar</a> </button>
                            <img className='imgMateria' src="https://cdn-icons-png.flaticon.com/512/2497/2497595.png" alt=""/>
                        </figure>
                    </article>
                </div>

                <div class="col-12 col-sm-6 col-md-6">
                    <article>
                        <figure>
                            <h2 class="materia">Lenguaje y Literatura</h2>
                            <p class="año">1° año</p>
                            <button class="btn-materia m-2">Entrar</button>

                            <img className='imgMateria' src="https://cdn-icons-png.flaticon.com/512/5520/5520958.png" alt=""/>
                        </figure>
                    </article>
                </div>

                <div class="col-12 col-sm-6 col-md-6">
                    <article>
                        <figure>
                            <h2 class="materia">Estudios Sociales</h2>
                            <p class="año">1° año</p>
                            <button class="btn-materia m-2">Entrar</button>

                            <img className='imgMateria' src="https://cdn-icons-png.flaticon.com/512/3113/3113431.png" alt=""/>
                        </figure>
                    </article>
                </div>
                <div class="col-12 col-sm-6 col-md-6">
                    <article>
                        <figure>
                            <h2 class="materia">Matemáticas</h2>
                            <p class="año">1° año</p>
                            <button class="btn-materia m-2">Entrar</button>

                            <img className='imgMateria' src="https://cdn-icons-png.flaticon.com/512/2084/2084541.png" alt=""/>
                        </figure>
                    </article>
                </div>
            </div>
        </div>
    </>
  )
}


