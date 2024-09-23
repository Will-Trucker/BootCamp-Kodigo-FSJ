function valorTeclado(){
    // variables
    let valores = [];
    let negativo = 0;
    let positivo = 0;
    let multiplo15 = 0;
    let sumaPar = 0;

    for (let i = 0; i < 10; i++) {
        let valor = parseInt(prompt(`Ingrese el valor ${i + 1}: `))
        valores.push(valor);

        if(valor < 0){
            negativo++;
        } else {
            positivo++;
        }

        if(valor % 15 === 0){
            multiplo15++;
        }

        if(valor % 2 ===0){
            sumaPar += valor;
        }   
    }

    // resultado
    alert(`Resultado 
    Valores Negativo: ${negativo},
    Valores Positivo: ${positivo},
    Valor Multiplo 15: ${multiplo15},
    Valor Suma Pares: ${sumaPar}    
    `);
}

valorTeclado();