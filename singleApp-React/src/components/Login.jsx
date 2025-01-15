import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import 'flowbite'; // Importar Flowbite CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/formulario-citas'); // Redireccionar al formulario de citas
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="correo@example.com" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Contraseña" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
