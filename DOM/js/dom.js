console.log("Estoy andando soy dominic");


// ELEMENTO DEL DOM
let elementoDOM = document.getElementById('textoSaludo');
// console.log(elementoDOM);

// ELEMENTOS MÁS UTILIZADO
// Extrae todo el contenido HTML
console.log(elementoDOM.innerHTML); // inner es obtener solo
// Extrae todo el contenido TEXTO
console.log(elementoDOM.innerText);

elementoDOM.innerText = "Te cambie el texto desde el JS";
console.log(elementoDOM.innerHTML);
elementoDOM.innerHTML = "<span>Cambien otra vez</span>"
console.log(elementoDOM.innerHTML);

// Agarrar Otro elemento del HTML
const contenido = document.querySelector('#content'); // Retorna el primer elemento que encuentre con eso

console.log(contenido);

contenido.innerHTML = '<h1> Ingresado desde JS </h1>'; // Permite cambiar el contenido de la etiqueta
console.log(contenido);

const btnApretable = document.getElementById('btnMagia');

btnApretable.addEventListener("click", () => {
    alert('Avada kedavra');
    console.log("Despues del alert, COPPERFIELD")
})

/* Realiza una funcion que reciba un array NUMERICO y retorne un array completamente nuevo solamente con los numeros que sean multiplo de 3 y que la suma de todos sus numeros de menos de 200
*/







