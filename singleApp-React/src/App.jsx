import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Login from './components/Login';
import FormularioCitas from './components/FormularioCita';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return (
    <Router>
      {user ? (
        <>
          <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
            <span className="text-lg">Hola, {user.displayName || user.email}</span>
            <button 
              onClick={handleSignOut} 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Cerrar Sesión
            </button>
          </nav>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/formulario-citas" element={<FormularioCitas />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
