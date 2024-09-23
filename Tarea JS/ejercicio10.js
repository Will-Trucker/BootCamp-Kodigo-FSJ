function calculoTurno(){
    let turnoManana = [];
    let turnoTarde = [];
    let turnoNoche = [];

    for(let i=0; i < 5; i++){
        turnoManana.push(parseFloat(prompt(`Ingrese la edad del Estudiante ${i+1} del turno matutino: `)));
    }
    for(let i=0; i < 6; i++){
        turnoTarde.push(parseFloat(prompt(`Ingrese la edad del Estudiante ${i+1} del turno tarde: `)));
    }
    for(let i=0; i < 11; i++){
        turnoNoche.push(parseFloat(prompt(`Ingrese la edad del Estudiante ${i+1} del turno noche: `)));
    }

    // Calcular promedios
    let promedioManana = turnoManana.reduce((a,b) => a + b, 0) / turnoManana.length;
    let promedioTarde = turnoTarde.reduce((a,b) => a + b, 0) / turnoTarde.length;
    let promedioNoche = turnoNoche.reduce((a,b) => a + b, 0) / turnoNoche.length;

    document.write("<p>Promedio de Edades Turno Mañana: " + promedioManana.toFixed(2) + " </p>");
    document.write("<p>Promedio de Edades Turno Tarde: " + promedioTarde.toFixed(2) + " </p>");
    document.write("<p>Promedio de Edades Turno Noche: " + promedioNoche.toFixed(2) + " </p>");

    if(promedioManana > promedioTarde && promedioManana > promedioNoche){
        document.write("<p style='color:green;'> El turno mañana tiene promedio de Edad Mayor</p>");
    } else if(promedioTarde > promedioManana && promedioTarde > promedioNoche){
        document.write("<p style='purple;'>El turno tarde tiene promedio de Edad Mayor</p>");
    } else {
        document.write("<p style='blue'>El turno noche tiene promedio de Edad Mayor</p>")
    }
}

calculoTurno();