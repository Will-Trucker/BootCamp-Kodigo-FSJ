import { useEffect, useState } from "react";
import { ICountry } from "../models/ICountry";
import { ListCountries } from "./countries/components/ListCountries";

const Apiuri = "https://restcountries.com/v3.1/all?";

export const Countries = () => {

    const [countries, setCountries] = useState();

    const getCountries = async() => {
      const response = await fetch(Apiuri);
      const data:ICountry[] = await response.json();
      console.log(data);
      /* .then((response) => {
        console.log(response)
       }); */

    
    };

   
    /* Ciclos de vidas son Eventos o Fases */

    useEffect( () => {
        getCountries();
    },[]);

    /*
          Fases
      - Montaje (Cuando el componente aparece en la vista)
      - Actualización (Cuando sucede algun cambio el cual el componente tiene que renderizar)
      - Desmontaje ()
    
    
    */

  return (
    <div>
      Countries  
     <ListCountries/>
    </div>
  
  )
}
