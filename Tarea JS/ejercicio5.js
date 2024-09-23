function tiendaCoches(){
    const modelo = prompt("Seleccione el modelo: FORD FIESTA, FORD ESCAPE, FORD FOCUS: ");
    const precio = parseFloat(prompt("Ingresa el precio del vehiculo: "));

    if(precio <= 0){
        alert("Precio fuera de rango!!");
        return;
    }

    
    let descuento
    switch(modelo.toUpperCase()){
        case "FORD FIESTA":
            descuento = precio * 0.50;
            break;
        case "FORD ESCAPE":
            descuento = precio * 0.20;
            break;
        case "FORD FOCUS":
            descuento = precio * 0.10;
            break;
        default:
            alert("Modelo Invalido. Intente de Nuevo");
            return;
    }


    // Mostrar en el navegador
    document.body.innerHTML += `
        <p>Auto Seleccionado: ${modelo} </p>
        <p>Precio Descuento: $ ${descuento.toFixed(2)}</p>
        <p>Precion Final: $ ${(precio - descuento).toFixed(2)} </p>
    `;
}

tiendaCoches()