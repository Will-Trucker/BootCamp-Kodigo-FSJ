import './assets/css/App.css'
import {Session} from './pages/sessions/Session'
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { MyProvider } from './context/UserDataContext';
function App() {

  return (
    <>
    <MyProvider>
    {/* BrowserRouter activamos ReactRouterDom en la APP */}
        <BrowserRouter>
        {/* Activamos la funcionalidad de poder empezar a crear rutas en */}
          <Routes>
              <Route index path="/" element={<Home/>}/>
              <Route path="/session" element={<Session/>}/>
          </Routes>
        </BrowserRouter>
     </MyProvider>
    </>
  )
}

export default App