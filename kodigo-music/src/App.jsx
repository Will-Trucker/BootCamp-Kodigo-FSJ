import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import SongList from './components/SongList'
import Login from './components/Login'
import Register from './components/Register'
import {auth} from './firebase/config'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css'

function App() {
  const [user,setUser] = useState(null);
  const navigate = useNavigate;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth)
    setUser(null)
    navigate('/')
  };


  return (
    <>
      <header className="header flex items-center justify-between flex-wrap p-6 text-white">
        <nav className="bg-gray-700 fixed w-full z-20 top-0 start-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="./src/assets/img/LogoKodigoMusic.png" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kodigo Music</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {user ? (
                <>
                  <span className="text-white px-4 py-2 text-center">{user.email || 'Usuario'}</span>
                
                  <button
                    onClick={handleLogout}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/')}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Iniciar Sesión
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
      <div>
       <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/songs"
            element={
              <ProtectedRoute>
                <SongList />
              </ProtectedRoute>
            }
          />
        </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
