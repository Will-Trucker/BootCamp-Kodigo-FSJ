import { VistaBase } from "./VistaBase";
import { Cancion } from "./Cancion";

export class Ejercicio3 extends VistaBase{
    private cancion: Cancion;

    constructor(titulo: string, color: string, fuente: string) {
        super(titulo, color, fuente);
        this.cancion = new Cancion('', ''); // Inicializa la canción con título y género vacíos
    }

    public generarVista(): string {
        return `
            ${super.generarVista()}
            <div id="contenido">
                <h2>Agregar Canción</h2>
                <input type="text" id="titulo" placeholder="Título de la canción">
                <input type="text" id="genero" placeholder="Género de la canción">
                <input type="text" id="autor" placeholder="Autor de la canción">
                <button id="btnAgregar">Agregar Canción</button>
                <div id="resultado"></div>
            </div>
        `;
    }

    public agregarEventos(): void {
        const btnAgregar = document.getElementById('btnAgregar')!;
        const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;
        const tituloInput = document.getElementById('titulo') as HTMLInputElement;
        const generoInput = document.getElementById('genero') as HTMLInputElement;
        const autorInput = document.getElementById('autor') as HTMLInputElement;

        btnAgregar.addEventListener('click', () => {
            this.cancion.titulo = tituloInput.value;
            this.cancion.genero = generoInput.value;
            this.cancion.setAutor(autorInput.value);
            const resultado = this.cancion.mostrarAutor(); // Cambiar a mostrarAutor si solo quieres mostrar el autor
            resultadoDiv.innerHTML = resultado;
            console.log(resultado);
        });
    }
}