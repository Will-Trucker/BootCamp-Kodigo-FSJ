import './App.css'
// import { Saludo } from './components/Saludo'
// import { Saludo as Saludito } from './components/Saludo'
import { Session } from '../../auth-app/src/sessions/Session'

function App() {
  return (
    <> 
    {/* SOY UN COMENTARIO EN JS DEL HTML RETORNADO */}
      {/* <h1>Holaaa desde el App</h1>
      <h2>FSJ25</h2> */}

      { /* Llama al componente */}
      {/* <Saludo/> */}

      <Session/>
      

    </> /* Fragment */
  )
}

export default App
