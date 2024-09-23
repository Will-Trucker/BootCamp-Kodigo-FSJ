function calcularAumento(){
    // variables
    const nombre = prompt("Digita tu nombre: ");
    const codigo = prompt("Digita tu código de Empleado: ");
    
    let salario; // valor cambiante

    // Funcion para validar que no ingrese numeros negativos
    while(true){
        salario = parseFloat(prompt("Ingrese su salario: "));
        if(salario < 0){
            alert("El salario del Empleado " + nombre + " con código: " + codigo + " está fuera de rango");
        } else {
            break;
        }
    }

    let categorias;
    while(true){
        categorias = prompt("Ingrese la categoria del Empleado (A, B, C, D): ");
        switch(categorias){
            case "A":
            case "B":
            case "C":
            case "D":
            break;
            default: 
                alert("Categoría no encontrada!!!.  Intente Nuevamente");
                continue;    
        }
        break;
    }

    let aumento;
    switch(categorias){
        case "A":
            aumento = salario * 0.15;
            break;
        case "B":
            aumento = salario * 0.3;
            break;
        case "C":
            aumento = salario * 0.1;
            break;
        case "D":
            aumento = salario * 0.2;
            break;
    }

    // Mensaje Final
    alert(`Datos del Empleado: 
    Nombre: ${nombre},
    Código: ${codigo},
    Salario Actual: ${salario.toFixed(2)},
    Categoria: ${categorias},
    Aumento: ${aumento.toFixed(2)},
    Salario Nuevo: ${(salario + aumento).toFixed(2)}`);
}

calcularAumento();