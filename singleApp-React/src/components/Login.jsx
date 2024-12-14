import React,{useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";


function LoginIn({onLogin}){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then(() => {
            onLogin(true);
        }).catch((err) => {
            setError("Credenciales Invalidas");
        });
    };

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">Inicio de Sesion</h2>
                <div className="mb-4">
                    <label className="block text text-gray-700">Correo Electronico</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required/>
                </div>
                <div className="mb-4">
                    <label className="block text text-gray-700">Clave</label>
                    <input type="password" value={password} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required/>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginIn;