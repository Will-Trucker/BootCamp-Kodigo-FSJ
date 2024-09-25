export class Cuenta{
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombre:string,cantidad:number,tipoCuenta:string,numeroCuenta:string){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    public depositar(cantidadDep:number): string{
        if (cantidadDep < 5) {
            return `El valor a depositar debe ser mayor a $5.00.`;
        } else {
            this.cantidad += cantidadDep;
            return `Se ha depositado correctamente $${cantidadDep}. Saldo actual: $${this.cantidad}.`;
        }
    }

    
    public retirar(valor: number): string {
        if (valor > this.cantidad) {
            return `No hay suficiente saldo en la cuenta. Saldo actual: $${this.cantidad}.`;
        } else if (valor < 5) {
            return `No se puede retirar menos de $5.00.`;
        } else {
            this.cantidad -= valor;
            return `Has retirado $${valor}. Saldo restante: $${this.cantidad}.`;
        }
    }

    public mostrarDatos(): string {
        return `
            Nombre: ${this.nombre} <br>
            Tipo de cuenta: ${this.tipoCuenta} <br>
            Número de cuenta: ${this.numeroCuenta} <br>
            Saldo actual: $${this.cantidad}
        `;
    }

}