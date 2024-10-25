import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase/config"
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useEffect(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    },[]);

    if (loading) return <p>Cargando.....</p>;

    if(!user){
        return <Navigate to="/"/>;
    }

    return children;
}