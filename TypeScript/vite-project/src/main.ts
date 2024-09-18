import './style.css'
import { Producto } from './clases/Producto';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>Holis, desde Main.ts</h1>
   <form id="formProducto">
      <section>
        <label>Nombre Producto</label>
        <input type="text" id="nombre" name="nombre" placeholder="Nombre">
      </section>
      <section>
        <label>Precio</label>
        <input type="text" id="precio" name="precio" placeholder="Precio">
      </section>
      <section>
        <label>Cantidad</label>
        <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad">
      </section>
      <button type="submit">Agregar Producto</button>
   </form>
  </div>
`

//document.querySelector<HTMLElement>('#parrafo')!.innerText = "Este es el texto p"
const form = document.getElementById("formProducto") as HTMLFormElement;

form.addEventListener('submit',(e:SubmitEvent) => {
  e.preventDefault();
 console.log("que pedo wey")

 const id = Date.now()

 //SELECCIONAMOS LOS ELEMENTOS A CONTROLAR y retiramos su valor
 const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
 const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
 const cantidad = parseInt((document.getElementById('cantidad') as HTMLInputElement).value);

 console.log(id);
 console.log(nombre);
 console.log(precio);
 console.log(cantidad);

 let productito = new Producto(id,nombre,precio,cantidad);
 console.log(productito)

 localStorage.setItem('productos',JSON.stringify(productito));
});