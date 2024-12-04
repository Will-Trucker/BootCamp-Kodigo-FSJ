import React, { useState, useEffect } from "react";
import api from "../services/axios.config";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [bootcamps, setBootcamps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", description: "", technologies: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No estás autenticado. Por favor, inicia sesión.");
        setLoading(false);
        return;
      }

      try {
        // Obtener el usuario autenticado
        const userResponse = await api.get("/api/auth/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(userResponse.data.userLogin);  // Establecer los datos del usuario

        // Obtener los bootcamps disponibles
        const bootcampResponse = await api.get("/api/auth/bootcamps/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBootcamps(bootcampResponse.data || []);  // Establecer los bootcamps
      } catch (err) {
        setError("Error al cargar los datos. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await api.delete(`/api/auth/bootcamps/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBootcamps(bootcamps.filter((bootcamp) => bootcamp.id !== id));
      alert("Bootcamp desactivado correctamente.");
    } catch (error) {
      alert("Error al desactivar el bootcamp.");
    }
  };

  const handleEdit = (bootcamp) => {
    setForm({
      name: bootcamp.name,
      description: bootcamp.description,
      technologies: bootcamp.technologies.join(", "),
    });
    setEditId(bootcamp.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const { name, description, technologies } = form;

    try {
      if (editId) {
        // Actualizar bootcamp existente
        await api.put(
          `/api/auth/bootcamps/update/${editId}`,
          { name, description, technologies: technologies.split(", ") },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Bootcamp actualizado correctamente.");
      } else {
        // Crear nuevo bootcamp
        await api.post(
          "/api/auth/bootcamps/create",
          { name, description, technologies: technologies.split(", ") },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Bootcamp creado correctamente.");
      }

      setForm({ name: "", description: "", technologies: "" });
      setEditId(null);
      // Recargar bootcamps
      const response = await api.get("/api/auth/bootcamps/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBootcamps(response.data || []);
    } catch (error) {
      alert("Error al guardar el bootcamp.");
    }
  };

  return (
    <div className="p-4">
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="dash">
            <h2 className="text-center text-xl">Bienvenido, {user.username} 👋</h2>
          </div>
          <br />
          <h3 className="text-center text-lg text-white">Gestión de Bootcamps</h3>
          <br />
          <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-4 rounded-lg text-white mb-4 max-w-md mx-auto p-6 rounded-lg shadow-lg">
            <div className="mb-2">
              <label className="block">Nombre</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-2">
              <label className="block">Descripción</label>
              <textarea
                className="w-full p-2 rounded bg-gray-700"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-2">
              <label className="block">Tecnologías (separadas por coma)</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700"
                value={form.technologies}
                onChange={(e) =>
                  setForm({ ...form, technologies: e.target.value })
                }
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded">
              {editId ? "Actualizar" : "Crear"} Bootcamp
            </button>
          </form>
          </div>
          <br /><br />
          <div className="relative overflow-x-auto sm:rounded-lg ">
          <div className="mx-auto container">      
          <table class="w-full text-sm text-left rtl:text-right tabla-em text-black">
              <thead className="text-xs uppercase bg-gray-600 text-white">
              <tr>
              <th scope="col" className="px-6 py-3 text-center">Nombre</th>
              <th scope="col" className="px-6 py-3 text-center">Descripción</th>
              <th scope="col" className="px-6 py-3 text-center">Tecnologías</th>
              <th scope="col" className="px-6 py-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {bootcamps.map((bootcamp) => (
                <tr key={bootcamp.id}  className="bg-white border-b hover:bg-gray-50">
                    <td class="px-6 py-4 text-center">{bootcamp.name}</td>
                    <td class="px-6 py-4 text-center">{bootcamp.description}</td>
                    <td class="px-6 py-4 text-center">{bootcamp.technologies.join(", ")}</td>
                    <td class="px-6 py-4 text-center">
                    <button
                      onClick={() => handleEdit(bootcamp)}
                      className="bg-yellow-500 px-3 py-1 rounded text-white">
                      Editar
                    </button>
                    <br /><br />
                    <button
                      onClick={() => handleDelete(bootcamp.id)}
                      className="bg-red-500 px-3 py-1 rounded text-white ml-2">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
