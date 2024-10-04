import './assets/css/App.css'
import {Session} from './pages/sessions/Session'
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
function App() {

  return (
    <>
    {/* BrowserRouter activamos ReactRouterDom en la APP */}
      <BrowserRouter>
      {/* Activamos la funcionalidad de poder empezar a crear rutas en */}
        <Routes>
            <Route path="/session" element={<Session/>}/>
            <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App