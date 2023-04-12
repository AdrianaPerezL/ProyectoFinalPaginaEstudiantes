import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../vistas/Navbar'
import { Materias } from '../vistas/Materias'
import { Index } from '../Index'
import { Login } from '../vistas/Login'
import { Registro } from '../vistas/Registro'
import { Progreso } from '../vistas/Progreso'
import { Cuestionario } from '../vistas/Cuestionario'
import { Cronometro } from '../vistas/Cronometro'
import { Perfil } from '../vistas/Perfil'
import  ListCuestionario  from '../vistas/ListCuestionario'

export const Ruta = () => {
  return (

    <>
 <Navbar/>
      <BrowserRouter>
    <Routes> 
          <Route path='/Navbar' element={<Navbar/>}></Route>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/materias' element={<Materias/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>
          <Route path='/Progreso' element={<Progreso/>}></Route>
          <Route path='/Cuestionario' element={<Cuestionario/>}></Route>
          <Route path='/Cronometro' element={<Cronometro/>}></Route>
          <Route path='/Perfil' element={<Perfil/>}></Route>
          <Route path='/list' element={<ListCuestionario />}></Route>
          
          
    </Routes>
    </BrowserRouter>
    </>
    )
}
