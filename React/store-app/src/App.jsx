import './App.css'
import { Products } from './pages/products/Products'
import { ProtectedRoute } from './pages/products/ProtectedProducts'
import { Login } from './pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Crud Basico FireStore</h1>
      
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/products" element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
