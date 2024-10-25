async function get(){
    const response = await fetch('https://restcountries.com/3.1/all')
    const data = await response.json();
    return data; 
}

get();

async function getAuth(){

}

const create = async () => {
    const response = await fetch('https://api.example.com/',{
        method: 'POST',
        headers: {
            'Content-type':'application/json',
            'Authorization':'Bearrer'
        },
        body: JSON.stringify({
            username:"new user",
            password: 12345
        })
    });
    const data = response.json();
    console.log(data);
    return data;
}

let data = create();