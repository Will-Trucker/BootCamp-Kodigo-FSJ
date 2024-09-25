import './style.css';
import { Ejercicio1 } from './clases/Ejercicio1';
import { Ejercicio2 } from './clases/Ejercicio2';
import { Ejercicio3 } from './clases/Ejercicio3';
import { Ejercicio4 } from './clases/Ejercicio4';
import { Empleado } from './clases/Empleado';

// Función para crear y agregar la cabecera
function crearCabecera(titulo: string, color: string, fuente: string, alineacion: 'center') {
    const cabecera = new Ejercicio1(titulo, color, fuente);
    cabecera.establecerAlineacion(alineacion);
    return cabecera.imprimirPropiedades();
}

// Función para inicializar un ejercicio
function inicializarEjercicio(EjercicioClass: { new (titulo: string, color: string, fuente: string): any }, titulo: string, color: string, fuente: string): string {
    const ejercicio = new EjercicioClass(titulo, color, fuente);
    return ejercicio.generarVista();
}

// Inicialización de la aplicación
function iniciarApp() {
    const appDiv = document.querySelector<HTMLDivElement>('#app')!;
    const empleado = new Empleado('Juan', 'Pérez', 'Calle 123', '555-1234', 30, 1000);
    
    appDiv.innerHTML = `
        <div class="card">
            <div id="cabecera">${crearCabecera('Bienvenido a mi página', 'blue', 'Arial', 'center')}</div>
            ${inicializarEjercicio(Ejercicio2, 'Calculadora', 'green', 'Arial')}
            ${inicializarEjercicio(Ejercicio3, 'Gestor de Canciones', 'purple', 'Arial')}
            ${inicializarEjercicio(Ejercicio4, 'Gestión de Cuenta', 'orange', 'Arial')}
             <div id="empleadoDatos">${empleado.mostrarDatos()}</div>
            <div id="empleadoSueldo">${empleado.imprimirSueldo()}</div>
        </div>
    `;

    // Agregar eventos para Ejercicio2
    const ejercicio2 = new Ejercicio2('Calculadora', 'green', 'Arial');
    ejercicio2.agregarEventos();

    // Agregar eventos para Ejercicio3
    const ejercicio3 = new Ejercicio3('Gestor de Canciones', 'black', 'Arial');
    ejercicio3.agregarEventos();

    // Agregar eventos para Ejercicio4
    const ejercicio4 = new Ejercicio4('Gestión de Cuenta', 'orange', 'Arial');
    ejercicio4.agregarEventos(); // Método para manejar los eventos del ejercicio de cuenta


}

// Llamar a la función de inicio
iniciarApp();