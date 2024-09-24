// src/clases/CabeceraPagina.ts
import { VistaBase } from './VistaBase';
export class Ejercicio1 extends VistaBase{
    private alineacion: string;

    constructor(titulo: string, color: string, fuente: string) {
        super(titulo, color, fuente);
        this.alineacion = 'center'; // Alineación por defecto
    }

    public establecerAlineacion(alineacion: 'center' | 'right' | 'left'): void {
        this.alineacion = alineacion;
    }

    public imprimirPropiedades(): string {
        return `
            <h1 style="
                color: ${this.color}; 
                font-family: ${this.fuente}; 
                text-align: ${this.alineacion};
            ">
                ${this.titulo}
            </h1>
            <p style="text-align:center">Propiedades:</p>
            <ul style="color:black;">
                <li  style="color:black;">Título: ${this.titulo}</li>
                <li style="color:black;">Color: ${this.color}</li>
                <li style="color:black;">Fuente: ${this.fuente}</li>
                <li style="color:black;">Alineación: ${this.alineacion}</li>
            </ul>
        `;
    }
}
