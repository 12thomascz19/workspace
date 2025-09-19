function verNombre() {
    let nombre = document.getElementById("nombre").innerHTML="Thomas Cano";
}

function verNumeros() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listaNumeros = document.getElementById("numeros");

    for (let i = 0; i < numeros.length; i++) {
        let elemento = document.createElement("li");
        elemento.innerHTML = numeros[i];
        listaNumeros.appendChild(elemento);
    }
}

function cambiarColorFondo() {
    const colores = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
    const colorAleatorio = Math.floor(Math.random() * colores.length);
    const color = colores[colorAleatorio];
    document.body.style.background = color;
}
