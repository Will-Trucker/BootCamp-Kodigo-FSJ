import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import api from "./services/axios.config";
import './App.css'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await api.get("/api/auth/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.userLogin);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error.message);
        localStorage.removeItem("token");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    alert("Sesión cerrada");
  };

  return (
    <Router>
      <header className="header flex items-center justify-between flex-wrap p-6 text-white">
        <nav className="bg-gray-700 fixed w-full z-20 top-0 start-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="./src/assets/kodigo.png"
                className="h-8"
                alt="Kodigo Logo"
              />
              <span className="self-center text-2xl text-white font-semibold">
                Kodigo API
              </span>
            </Link>
            <div className="flex space-x-3">
              {user ? (
                <>
                  <span className="text-white">Hola, {user.username}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700">
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-700">
                    Login
                  </Link>
                  <Link
                    to="/"
                    className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700">
                    Registrarse!!
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} />} // Pasar setUser como prop
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <div className="text-center mt-4">
              <h1 className="text-red-500">Página no encontrada</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
