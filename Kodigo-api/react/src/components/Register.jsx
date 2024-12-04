import React, { useState } from 'react';
import api from '../services/axios.config';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/auth/register', formData);
      alert('Usuario registrado exitosamente');
      navigate("/login");
    } catch (error) {
      alert('Error al registrar: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div className="flex items-center justify-center">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
    <h2 className="text-2xl text-center text-white mb-4">Crear Cuenta</h2>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
           className="w-full p-2 bg-gray-800 text-white rounded-lg"
      />
      <br /><br />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
           className="w-full p-2 bg-gray-800 text-white rounded-lg"
      />
      <br /><br />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Register
      </button>
    </form>
    </div>
  );
};

export default Register;
