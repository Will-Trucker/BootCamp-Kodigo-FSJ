function turismo(){
    // variables
    let nombre = prompt("Ingrese su nombre completo: ");
    let origen = prompt("Ingrese su origen (La Palma)");
    let destino = prompt("Seleccione el Destino (Panchimalco, La Costa del Sol, Puerto El Triunfo): ");
    let precio = parseFloat(prompt("Ingrese su tarifa: "));

    if(precio <= 0){
        alert("Tarifa Fuera de Rango");
        return;
    }

    let descuento;
    switch(destino.toUpperCase()){
        case "LA COSTA DEL SOL":
            descuento = precio * 0.5;
            break;
        case "PANCHIMALCO":
            descuento = precio * 0.10;
            break;
        case "PUERTO EL TRIUNFO":
            descuento = precio * 0.15;
            break;
        default:
            alert("Destino Invalido");
            return;        
    }

    // Resultado
    alert(`Tarifa de: ${nombre}:
           Origen: ${origen},
           Destino: ${destino},
           Descuento: $ ${descuento.toFixed(2)},
           Precio Final: $ ${(precio - descuento).toFixed(2)}
    `);
}

turismo();