import React, { useState, useEffect } from 'react';
import { doc, setDoc, onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const FormularioCitas = () => {
  const [cita, setCita] = useState({
    nombre: '',
    fechaHora: '',
    motivo: '',
    telefono: '',
  });

  const [citas, setCitas] = useState([]);

  const handleChange = (e) => {
    setCita({ ...cita, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const citaRef = doc(collection(db, 'citas'));
      await setDoc(citaRef, cita);
      setCita({ nombre: '', fechaHora: '', motivo: '', telefono: '' });
    } catch (err) {
      console.error('Error al Guardar la Cita !!', err);
    }
  };

  useEffect(() => {
    const citasCollection = collection(db, 'citas');
    const unsubscribe = onSnapshot(citasCollection, (snapshot) => {
      const listaCitas = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCitas(listaCitas);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registrar Citas</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Nombre del Paciente</label>
          <input
            type="text"
            name="nombre"
            defaultValue={cita.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha y Hora</label>
          <input
            type="datetime-local"
            name="fechaHora"
            defaultValue={cita.fechaHora}
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
            defaultValue={cita.motivo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telefono</label>
          <input
            type="tel"
            name="telefono"
            defaultValue={cita.telefono}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Registrar
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6">Citas Registradas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {citas.map((item) => (
          <div key={item.id} className="p-4 bg-gray-100 rounded shadow">
            <h3 className="font-bold">{item.nombre}</h3>
            <p>Fecha: {new Date(item.fechaHora).toLocaleString()}</p>
            <p>Motivo: {item.motivo}</p>
            <p>Telefono: {item.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormularioCitas;
