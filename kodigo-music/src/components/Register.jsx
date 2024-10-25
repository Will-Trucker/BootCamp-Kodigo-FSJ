import React from 'react'
import {useForm} from 'react-hook-form'
import {auth} from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth,data.email,data.password);
            navigate('/songs')
        } catch (error){
            console.error(error);
            alert('Error al crear la cuenta')
        }
    };

    return (
        <div class="min-h-screen flex items-center justify-center">
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
                    <input type="confirmPassword" className="w-full p-2 bg-gray-800 text-white rounded-lg" {...register('confirmPassword',{required:true,minLength:6})}/>
                    {errors.confirmPassword && <span className="text-red-500">Confirmar Contraseña es obligatorio</span>}
                </div>
                <aside>Ya tienes una cuenta | Ingresa aqui: <a href="/login"></a></aside>
                <button type="submit" className="w-full bg-blue-600 p-2 text-white rounded-lg">Registrate</button>

            </form>

        </div>
    )
}

export default Register;