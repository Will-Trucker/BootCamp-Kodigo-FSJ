import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserDataContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

export const Home = () =>{
    // const mensaje = useContext(UserContext)
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () =>{
      signOut(auth).then(() => {
        // Sign Out Successfull
        setUser(null);
        navigate('/session')
      }).catch((error) =>{
        // An error happened
        console.log(error);
      })
    }

    return(
      <>
      { user ? <h1> {user.email} </h1> : <Link to="/session">INICIAR SESION</Link> }
      <button onClick={logout}>Cerar Sesion</button>
      
      <div>Uno cuando se enamora cree que se les descargo el fone!!
        {/* <br /><br />
      <Link to="/session">Iniciar Sesion</Link>
      {mensaje} */}

      </div>  
    </>
      
    )
}

export default Home;