import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function deleteData(urlApi){//no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idNumber = 204;  //se debe colocar el id del objeto qu se quiere eliminar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
.then(() => {
    console.log(`Borrando ${idNumber}`);//opcional
});