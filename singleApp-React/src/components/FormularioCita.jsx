import React, { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { database } from "../firebaseConfig";

const FormularioCitas = () => {
  const [cita, setCita] = useState({
    nombre: "",
    fechaHora: "",
    motivo: "",
    telefono: "",
  });

  const [citas, setCitas] = useState([]);

  const handleChange = (e) => {
    setCita({ ...cita, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const citasRef = ref(database, "citas");
    push(citasRef, cita)
      .then(() => {
        setCita({ nombre: "", fechaHora: "", motivo: "", telefono: "" });
      })
      .catch((err) => console.error("Error al Guardar la Cita !!", err));
  };

  useEffect(() => {
    const citasRef = ref(database, "citas");
    onValue(citasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const listaCitas = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCitas(listasCitas);
      }
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"> Registrar Citas </h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Nombre del Paciente</label>
          <input
            type="text"
            name="nombre"
            value={cita.nombre}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha y Hora</label>
          <input
            type="datetime-local"
            name="fechaHora"
            value={cita.fechaHora}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Motivo de la cita</label>
          <input
            type="text"
            name="motivo"
            value={cita.motivo}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telefono</label>
          <input
            type="tel"
            name="telefono"
            value={cita.telefono}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button className="'bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
          Registrar
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6">Citas Registradas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {citas.map((item) => (
          <>
            <div key="{item.id}" className="p-4 bg-gray-100 rounded shadow">
              <h3 className="font-bold">{item.nombre}</h3>
              <p>Fecha: {new Date(item.fechaHora).toLocaleString()}</p>
              <p>Motivo: {item.motivo}</p>
              <p>Telefono: {item.fecha}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FormularioCitas;
