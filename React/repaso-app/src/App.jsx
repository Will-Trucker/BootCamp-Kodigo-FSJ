
import './App.css'

const BASEUrl = 'https://reqres.in/'

function App() {

  const login = async(credentials) => {
    const response = await fetch(BASEUrl+'api/login',{
        method: 'POST',
        headers: {
          // Si enviamos datos le aclaramos el tipo de DATO ENVIADO
          'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials)
      })
  
      const data = await response.json();
      console.log(data);
    }

    login({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    });

    const getUsers = async (token) => {
      const response = await fetch(BASEUrl+'api/users?page=2',{
        method: 'GET',
        headers: {
          'Authorization':`Bearer ${token}`
        }
      })
      const data = await response.json();
      console.log(data);
    }

    getUsers('QpwL5tke4Pnpja7X4')

  return (
    <>
     <h1>Practica METODOS HTTP FETCH</h1>
    </>
  )

}
export default App
