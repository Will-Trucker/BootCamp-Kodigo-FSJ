import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/axios.config";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await api.post("/api/auth/login", formData);
      const token = response.data.token;

      if (!token) {
        throw new Error("Token no recibido del servidor");
      }

      localStorage.setItem("token", token);

      const userResponse = await api.get("/api/auth/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(userResponse.data.userLogin);  // Almacena el usuario en el estado
      alert("Inicio de sesión exitoso");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response?.data || error.message);
      setError(error.response?.data || "Hubo un error al iniciar sesión");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center text-white mb-4">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-800 text-white rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Clave"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-800 text-white rounded-lg"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
