import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../vistas/Navbar'
import { Materias } from '../vistas/Materias'
import { Index } from '../Index'
import { Cuestionario } from '../vistas/Cuestionario'
import { Progreso } from '../vistas/Progreso'


export const Ruta = () => {
  return (

    <>
<Navbar/>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/materias' element={<Materias/>}></Route>
        <Route path='/Cuestionario' element={<Cuestionario/>}></Route> {/*Componente Vane*/}
        <Route path='/Progreso' element={<Progreso/>}></Route> {/*Componente Vane*/}
    </Routes>
    </BrowserRouter>
    </>
    )
}
