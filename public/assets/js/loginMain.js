const formulario = document.getElementById("form");

function getDatos(e) {
        e.preventDefault();
        showDatos();
    
};


function showDatos() {
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let email = document.getElementById('inputEmail').value;

    let alerta = `<div class="alert alert-warning mt-2" role="alert">
    Complete los datos
     </div>`

    let alertaFormulario = document.getElementById("alerta");



   if (nombre == "" || apellido == "" || email == "") {
       
    alertaFormulario.innerHTML = alerta; setTimeout(function() {
        alertaFormulario.innerHTML = "";
    },1000)

 }else{
    console.log(nombre);
    console.log(apellido);
    console.log(email);

    formulario.reset();
   }

}

formulario.addEventListener("submit", getDatos);