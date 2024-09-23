function calculoNotas(){
    // pedir datos del Alumno: Carrera, Nombre y Carnet
    const carrera = prompt("Digita tu carrera: ");
    const nombre = prompt("Digita tu nombre: ");
    const carnet = prompt("Digita tu carnet: ");

    //Pedir las notas
    const notas = [];
    const labels = ["examen","tareas","asistencia","investigacion"];

    // Funcion 
    for(let i = 0; i < 4; i++){
        while(true){
            const nota = parseFloat(prompt(`Ingrese la nota de ${labels[i]} (0-10)`));
            if(nota >= 0 && nota <= 10){
               notas.push(nota);
               break;
            } else {
                alert("La Nota de " + nombre + " esta fuera del Rango");
            }
        }
    }
    // Calcular la nota final
    const notaFinal = (notas[0] * 0.2) + (notas[1] * 0.4) + (notas[2] * 0.1) + (notas[3] * 0.3);

    alert(`Datos del alumno:
        Nombre: ${nombre},
        Carnet: ${carnet},
        Carrera: ${carrera},
        Nota final: ${notaFinal.toFixed(2)}`);
}

calculoNotas();