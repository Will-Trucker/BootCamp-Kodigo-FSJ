export class VistaBase {
    protected titulo: string;
    protected color: string;
    protected fuente: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        
    }

    protected imprimirPropiedades(): string {
        return `<h1 style="color: ${this.color}; font-family: ${this.fuente};">${this.titulo}</h1>`;
    }

    public generarVista(): string {
        return `
            <div class="card">
                <div id="cabecera">${this.imprimirPropiedades()}</div>
            </div>
        `;
    }
}