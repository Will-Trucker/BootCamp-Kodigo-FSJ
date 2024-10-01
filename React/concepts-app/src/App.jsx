import './App.css'
import { Saludo } from './components/Saludo'
import { Saludo as Saludito } from './components/Saludo'


function App() {
  return (
    <> 
    {/* SOY UN COMENTARIO EN JS DEL HTML RETORNADO */}
      <h1>Holaaa desde el App</h1>
      <h2>FSJ25</h2>

      { /* Llama al componente */}
      <Saludo/>
      

    </> /* Fragment */
  )
}

export default App
