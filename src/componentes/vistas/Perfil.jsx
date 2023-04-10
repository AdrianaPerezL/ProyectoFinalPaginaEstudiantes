import React from 'react'
import '../../assets/styles/perfil.css'

export const Perfil = () => {
  return (
    
    <div className="container">
    <div className="main-body">
   
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Admin" className="rounded-circle" width={150} />
                <div className="mt-3">
                  <h4>Adriana Pérez</h4>
                  <p className="text-secondary mb-1">Estudiante</p>
                  <p className="text-muted font-size-sm">1° año</p>
                  <button className="btn btn-edit" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                </div>
              </div>
            </div>
          </div>
         
        </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title agregar" id="exampleModalLabel">Editar mi perfil</h5>

              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-outline">
                    
                    
                    <label class="form-label" for="typeText">Fecha de nacimiento</label>
                    <input type="date" id="typeText" class="form-control mb-3" placeholder="Edad" />
                   
                    <label class="form-label" for="typeText">Foto</label>
                    <div class="input-group">
                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="foto" aria-label="Upload"/>
                      </div>
                      <label class="form-label" for="typeText">Centro Educativo</label>
                    <input type="text" id="typeText" class="form-control mb-3" placeholder="Centro Educativo" />
                      <label class="form-label" for="typeText">Grado</label>
                    <input type="text" id="typeText" class="form-control mb-3" placeholder="Grado" />

                  </div>
            </div>
             
              <button type="button" class="btn-edit m-4 p-2">Editar</button>
        
          </div>
        </div>
      </div>


        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Nombre</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Adriana Pérez
                </div>
              </div>
              
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">NIE</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  0123456789
                </div>
              </div>
              
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Correo</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  a@gmail.com
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Fecha de nacimiento</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  1 enero 2000
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Institución</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Centro Escolar ...
                </div>
              </div>
              <hr />
             
              <div className="row">
                <div className="col-sm-12">
                </div>
              </div>
            </div>
          </div>
          
                  
        </div>
      </div>
    </div>
  </div>
  )
}
