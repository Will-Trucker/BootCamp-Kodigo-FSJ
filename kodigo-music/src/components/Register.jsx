import React from 'react'
import {useForm} from 'react-hook-form'
import {auth} from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', formData);
      alert('Usuario registrado exitosamente');
    } catch (error) {
      alert('Error al registrar: ' + (error.response?.data || error.message));
    }
};

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl text-center text-white mb-4">Registrate!!</h2>

                <div className="mb-4">
                    <label className="block text-white">Email</label>
                    <input type="email" {...register('email',{required:true})} className="w-full p-2 bg-gray-800 text-white rounded-lg"/>
                    {errors.email && <span className="text-red-500">Email es obligatorio</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-white">Contraseña</label>
                    <input type="password" className="w-full p-2 bg-gray-800 text-white rounded-lg" {...register('password',{required:true,minLength:6})}/>
                    {errors.password && <span className="text-red-500">Contraseña es obligatorio</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-white">Confirmar Contraseña</label>
                    <input type="password" className="w-full p-2 bg-gray-800 text-white rounded-lg" {...register('confirmPassword',{required:true,minLength:6})}/>
                    {errors.confirmPassword && <span className="text-red-500">Confirmar Contraseña es obligatorio</span>}
                </div>
                <br />
                <p className="text-sm font-light text-white dark:text-gray-400">
                      ¿Ya tienes una cuenta? | <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Ingresa Aqui!</a>
                  </p>
                  <br />
                <button type="submit" className="w-full bg-blue-600 p-2 text-white rounded-lg">Registrate</button>

            </form>

        </div>
    )
}

export default Register;