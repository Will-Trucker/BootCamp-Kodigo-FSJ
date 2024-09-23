function temperatura(){
    let temp = parseFloat(prompt("Ingrese la temperatura en Celsius (C°): "));

    // Convertir a F°
    let fah = (temp * 9/5) +32;

    document.write("<p> La Temperatura en Fahreheit es: " + fah.toFixed(2) + " °F</p>");


    if(fah >= 14 && fah <= 32){
        document.write("<p style='color:cyan;'> La temperatura es Baja: " + fah.toFixed(2) + " °F</p>");
    } else if(fah > 32 && fah <= 68){
        document.write("<p style='color:orange;'> La temperatura es Adecuada: " + fah.toFixed(2) + " °F</p>");
    } else if(fah > 68 && fah <= 96){
        document.write("<p style='color:red;'> La temperatura es Alta: " + fah.toFixed(2) + " °F</p>");
    } else {
        document.write("<p>Temperatura Desconocida</p>");
    }
}

temperatura();