import { VistaBase } from './VistaBase';
import { Calculadora } from './Calculadora';

export class Ejercicio2 extends VistaBase {
    private calculadora: Calculadora;

    constructor(titulo: string, color: string, fuente: string) {
        super(titulo, color, fuente);
        this.calculadora = new Calculadora();
    }

    public generarVista(): string {
        return `
            ${super.generarVista()}
            <div id="contenido">
                <h2 style="color:red;">Calculadora</h2>
                <input type="number" id="numero1" placeholder="Número 1">
                <input type="number" id="numero2" placeholder="Número 2">
                <button id="btnSumar">Sumar</button>
                <button id="btnRestar">Restar</button>
                <button id="btnMultiplicar">Multiplicar</button>
                <button id="btnDividir">Dividir</button>
                <button id="btnPotencia">Potencia</button>
                <button id="btnFactorial">Factorial</button>
                <div id="resultado"></div>
            </div>
        `;
    }

    public agregarEventos(): void {
        const btnSumar = document.getElementById('btnSumar')!;
        const btnRestar = document.getElementById('btnRestar')!;
        const btnMultiplicar = document.getElementById('btnMultiplicar')!;
        const btnDividir = document.getElementById('btnDividir')!;
        const btnPotencia = document.getElementById('btnPotencia')!;
        const btnFactorial = document.getElementById('btnFactorial')!;
        const resultadoDiv = document.getElementById('resultado') as HTMLDivElement; // Aquí haces Type Assertion
        const numero1Input = document.getElementById('numero1') as HTMLInputElement;
        const numero2Input = document.getElementById('numero2') as HTMLInputElement;

        btnSumar.addEventListener('click', () => {
            const resultado = this.calculadora.sumar(Number(numero1Input.value), Number(numero2Input.value));
            this.mostrarResultado(resultado, resultadoDiv);
        });

        btnRestar.addEventListener('click', () => {
            const resultado = this.calculadora.restar(Number(numero1Input.value), Number(numero2Input.value));
            this.mostrarResultado(resultado, resultadoDiv);
        });

        btnMultiplicar.addEventListener('click', () => {
            const resultado = this.calculadora.multiplicar(Number(numero1Input.value), Number(numero2Input.value));
            this.mostrarResultado(resultado, resultadoDiv);
        });

        btnDividir.addEventListener('click', () => {
            try {
                const resultado = this.calculadora.dividir(Number(numero1Input.value), Number(numero2Input.value));
                this.mostrarResultado(resultado, resultadoDiv);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    this.mostrarError(error.message, resultadoDiv);
                }
            }
        });

        btnPotencia.addEventListener('click', () => {
            const resultado = this.calculadora.potencia(Number(numero1Input.value), Number(numero2Input.value));
            this.mostrarResultado(resultado, resultadoDiv);
        });

        btnFactorial.addEventListener('click', () => {
            try {
                const resultado = this.calculadora.factorial(Number(numero1Input.value));
                this.mostrarResultado(resultado, resultadoDiv);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    this.mostrarError(error.message, resultadoDiv);
                }
            }
        });
    }

    private mostrarResultado(resultado: number, div: HTMLDivElement): void {
        div.innerHTML = `Resultado: ${resultado}`;
        console.log(`Resultado: ${resultado}`);
    }

    private mostrarError(mensaje: string, div: HTMLDivElement): void {
        div.innerHTML = `Error: ${mensaje}`;
        console.error(`Error: ${mensaje}`);
    }
}
