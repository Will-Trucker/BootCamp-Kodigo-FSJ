function verificarEdad(){
    const nombre = prompt("Digita tu nombre");
    const edad = parseInt(prompt("Ingrese su edad:"));
     if(edad <= 0){
        alert("La edad de: " + nombre + " es incorrecta");
     } else {
        const mensaje = edad >= 18 ? " Es Mayor de Edad" : " Es Menor de Edad";
        alert("Usted " + nombre + mensaje);
     }
}

verificarEdad();