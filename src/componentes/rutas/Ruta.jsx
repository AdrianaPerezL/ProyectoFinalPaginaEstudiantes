import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../vistas/Navbar'
import { Materias } from '../vistas/Materias'
import { Index } from '../Index'
import { Login } from '../vistas/Login'


export const Ruta = () => {
  return (

    <>
{/* <Navbar/>
 */}    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Index/>}></Route>
          <Route path='/materias' element={<Materias/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    )
}
