function numeroMayor(){
    const numero1 = parseInt(prompt("Ingrese el numero 1: "));
    const numero2 = parseInt(prompt("Ingrese el numero 2: "));

    if(numero1 >= 0 && numero2 >= 0){
        alert(`El numero mayor es ${numero1 > numero2 ? numero1 : numero2}`);
    } else {
        alert(`Numeros son negativos. Intente nuevamente.... `)
    }
}

numeroMayor();