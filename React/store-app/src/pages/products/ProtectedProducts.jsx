import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false); // Cargamos el estado de autenticación
    });
    return unsubscribe;
  }, []);

  if (loading) return <p>Cargando...</p>; // Mostrar un mensaje mientras se verifica el estado del usuario

  if (!user) {
    return <Navigate to="/" />; // Redirige al login si no hay usuario autenticado
  }

  return children; // Si está autenticado, muestra el contenido
};
