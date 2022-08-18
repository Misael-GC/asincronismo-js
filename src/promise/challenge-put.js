import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function putData(urlApi, dataPut){
    const response = fetch(urlApi, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(dataPut),
    });
    return response;
};


const dataPut = {
    "title": "Nunca pares de aprender",
    "price": 500,
  }

  putData(`${API}/products/204`, dataPut)
  .then(response => response.json())
  .then(data => console.log(data));
  