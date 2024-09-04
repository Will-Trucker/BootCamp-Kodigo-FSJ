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



