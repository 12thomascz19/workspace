//Funcion para mostrar el nombre
const nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofía", "Jorge", "Lucía"];

function ListaNombres(){
    const nombre = document.getElementById("nombre");

    for (let i = 0; i < nombres.length; i++){
        const primerNombre = document.createElement('span');

        primerNombre.innerHTML = nombres[i] + " ";

        nombre.appendChild(primerNombre);
        
    }
}