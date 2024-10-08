import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserDataContext";

export const Home = () =>{
    const mensaje = useContext(UserContext)
    return(
      <div>Uno cuando se enamora cree que se les descargo el fone!!
        <br /><br />
      <Link to="/session">Iniciar Sesion</Link>
      {mensaje}
      </div>
    )
}

export default Home;