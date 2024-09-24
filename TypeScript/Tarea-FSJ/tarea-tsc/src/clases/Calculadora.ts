export class Calculadora {
    public sumar(a: number, b: number): number {
        return a + b;
    }

    public restar(a: number, b: number): number {
        return a - b;
    }

    public multiplicar(a: number, b: number): number {
        return a * b;
    }

    public dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }

    public potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    public factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
