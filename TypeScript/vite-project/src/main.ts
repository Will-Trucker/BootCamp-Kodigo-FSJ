import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>Holis, desde Main.ts</h1>
   <form id="login-form">
      <section>
        <label>Nombre de Usuario</label>
        <input type="text" id="username" name="name" placeholder="Ingresa tu nombre de usuario">
      </section>
      <section>
        <label>Password</label>
        <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña">
      </section>

      <button type="submit">Iniciar Sesion</button>
   </form>
  </div>
`

//document.querySelector<HTMLElement>('#parrafo')!.innerText = "Este es el texto p"
const form = document.getElementById("login-form") as HTMLFormElement;

form.addEventListener('submit',(e:SubmitEvent) => {
 console.log("que pedo wey")
});