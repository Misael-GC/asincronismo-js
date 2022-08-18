import fetch from "node-fetch"; //use de fetch
const API = 'https://api.escuelajs.co/api/v1/'; //nuestra API

//estructura del metodo post 
function postData(urlApi, data) {
    const response = fetch(urlApi, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

//nuestra data que vamos a meter
const data = {
    "title": "Never Stop Learning",
    "price": 4000,
    "description": "PLatzi Duo",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };


  //usamos postData como una promesa, transformamos la respuesta en un objeto json
postData(`${API}products`, data)
  .then(response => response.json())
  .then(data => console.log(data));