import { useState } from "react";

// Declaracion de un componentes
export const Saludo = ()=> {
    // let nombre = "Will";
    // nombre = "Will";

    // Primer Hook -> useState
    // Hook -> es una funcion para realizar x accion
    // useState(VALOR INICIAL);


    const [nombre,cambiarNombre] = useState("Will")


    return (
      <>
        <h3>TODAS MIENTEN!!</h3>
        <h2>Y tu crees {nombre} que se le descargo el phone</h2>
        <button onClick={() => cambiarNombre("NambeChele")}>Magia</button>
      </>
    );
  }