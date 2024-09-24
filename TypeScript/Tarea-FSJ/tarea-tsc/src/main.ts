import './style.css';
import { Ejercicio1 } from './clases/Ejercicio1';
import { Ejercicio2 } from './clases/Ejercicio2';
import { Ejercicio3 } from './clases/Ejercicio3';
// Importa Ejercicio3 si lo necesitas

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
    
    appDiv.innerHTML = `
        <div class="card">
            <div id="cabecera">${crearCabecera('Bienvenido a mi página', 'blue', 'Arial', 'center')}</div>
            ${inicializarEjercicio(Ejercicio2, 'Calculadora', 'green', 'Arial')}
            ${inicializarEjercicio(Ejercicio3, 'Ejercicio 3', 'purple', 'Arial')}
        </div>
    `;

    // Agregar eventos para Ejercicio2
    const ejercicio2 = new Ejercicio2('Calculadora', 'green', 'Arial');
    ejercicio2.agregarEventos();

    const ejercicio3 = new Ejercicio3('Gestor de Canciones', 'black', 'Arial');
    ejercicio3.agregarEventos();
    
    // Si necesitas agregar eventos para Ejercicio3, lo harías aquí
}

// Llamar a la función de inicio
iniciarApp();
