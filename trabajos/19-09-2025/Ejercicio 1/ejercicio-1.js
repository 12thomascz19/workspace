const container = document.getElementById('numeros');

//funcion para generar los numeros pares
//del 1 al 100 al hacer click en un button
function pares(){
    for (let i = 2; i <= 100; i = i + 2) {
        const elemento = document.createElement('hr');
        elemento.textContent = i + ' ';
        container.appendChild(elemento);
    }
}