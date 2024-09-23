function tablaMultiplicar(){
    let num = parseInt(prompt("Ingrese un número: "));

    document.write("<h2>Tabla de Multiplicar " + num + " </h2>");
    document.write("<ul>");
    for(let i = 1; i <= 10; i++){
        document.write("<li> " + num + " x " + i + " = " + (num * i) + "</li>");
    }
    document.write("</ul>");
}

tablaMultiplicar();