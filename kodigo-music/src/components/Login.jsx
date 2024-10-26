import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config'; 
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const submitHandler = async (data) => {
    setLoading(true);
    setLoginError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log('Usuario autenticado:', userCredential.user);
      alert('Login exitoso');
      navigate('/songs')
    } catch (error) {
      console.error('Error al autenticar usuario:', error.message);
      setLoginError('Credenciales incorrectas. Intenta de nuevo.');
    }

    setLoading(false);
  };

  return (
    <div className="rounded-lg px-6 py-8">

          <form onSubmit={handleSubmit(submitHandler)} className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg loginForm dark:bg-gray-800">
    {/* <form onSubmit={handleSubmit(submitHandler)} className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg"> */}
      <h2 className="text-2xl text-center text-white mb-4">Login</h2>

      {loginError && <p className="text-red-500 text-center mb-4">{loginError}</p>}

      <div className="mb-4">
      <label className="block text-white mb-2" htmlFor="email">
        Email
      </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'Email es obligatorio' })}
          className="w-full p-2 bg-gray-800 text-white rounded-lg"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-white mb-2">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Contraseña es obligatoria' })}
          className="w-full p-2 bg-gray-800 text-white rounded-lg"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 p-2 rounded-lg text-white"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Login'}
      </button>
      <br /><br />
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      ¿Aún no tienes una cuenta? | <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrate!</a>
                  </p>
    </form>
    </div>
  );
};

export default LoginForm;
