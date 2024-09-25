import { Cuenta } from "./Cuenta";
import { VistaBase } from "./VistaBase";

export class Ejercicio4 extends VistaBase{
  private cuenta:Cuenta;

  constructor(titulo:string,color:string,fuente:string){
    super(titulo,color,fuente);
    this.cuenta = new Cuenta('Will Orellana',100,'Cuenta Corriente','123456');
  }

  public generarVista(): string {
      return `
        ${super.generarVista()}
        <div id="contenido">
            <h2>Cuenta de ${this.cuenta.mostrarDatos()}</h2>
            <div>
                <h2>Depositos</h2>
                <input type="number" id="deposito" placeholder="Cantidad A Depositar" min="0">
                <button id="btnDepositar">Depositar</button>
            </div>
            <div>
                <h3>Retiro</h3>
                <input type="number" id="retiro" placeholder="Cantidad A Retirar" min="0">
                <button id="btnRetirar">Retirar</button>
            </div>
            <div id=resultado">

            </div>
       </div>
      `;
  }

  public agregarEventos(): void {
    const btnDepositar = document.getElementById('btnDepositar') as HTMLButtonElement;
    const btnRetirar = document.getElementById('btnRetirar') as HTMLButtonElement;
    const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

    btnDepositar.addEventListener('click', () => {
        // Corregimos el tipo de elemento
        const cantidadDeposito = (document.getElementById('deposito') as HTMLInputElement).valueAsNumber;
        const resultado = this.cuenta.depositar(cantidadDeposito);
        resultadoDiv.innerHTML = resultado;
    });

    btnRetirar.addEventListener('click', () => {
        // Corregimos el tipo de elemento
        const cantidadRetiro = (document.getElementById('retiro') as HTMLInputElement).valueAsNumber;
        const resultado = this.cuenta.retirar(cantidadRetiro);
        resultadoDiv.innerHTML = resultado;
    });
}


}