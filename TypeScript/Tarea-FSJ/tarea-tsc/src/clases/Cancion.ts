export class Cancion{
    private autor: string;

    constructor(public titulo:string, public genero:string){
        this.autor = '';
    }

    public getAutor(): string{
        return this.autor;
    }

    public setAutor(autor:string):void{
        this.autor = autor;
    }

    public mostrarAutor():string{
        return `Titulo: ${this.titulo}, Genero: ${this.genero}, Autor: ${this.autor}`;
    }

    public mostrarDatos(): string {
        return `
            <ul>
                <li>Título: ${this.titulo}</li>
                <li>Género: ${this.genero}</li>
                <li>Autor: ${this.autor}</li>
            </ul>
        `;
    }
}