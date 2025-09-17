//Funcion para mostrar el nombre
function MostrarNombre(){
    const nombre = document.getElementById("nombre");

    const primerNombre = document.createElement('span');
    const apellido = document.createElement('i');

    primerNombre.innerHTML = "Thomas ";
    apellido.innerHTML = "Zapata";

    nombre.appendChild(primerNombre);
    nombre.appendChild(apellido);
}

//Funcion para ocultar el nombre
function OcultarNombre(){
    const nombre = document.getElementById("nombre");
    nombre.innerText = "";
}