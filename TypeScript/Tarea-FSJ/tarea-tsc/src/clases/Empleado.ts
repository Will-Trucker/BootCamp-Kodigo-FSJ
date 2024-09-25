import { Persona } from './Persona';

export class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    public cargarSueldo(nuevoSueldo: number): void {
        this.sueldo = nuevoSueldo;
    }

    public imprimirSueldo(): string {
        return `El sueldo del empleado es: $${this.sueldo}`;
    }

    public mostrarDatos(): string {
        return `
            Nombre: ${this.nombre} ${this.apellido}<br>
            Dirección: ${this.direccion}<br>
            Teléfono: ${this.telefono}<br>
            Edad: ${this.edad} (${this.esMayorDeEdad()})<br>
            Sueldo: $${this.sueldo}
        `;
    }
}