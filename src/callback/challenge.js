const XMLHttpRequest = require('xmlhttprequest'); //llamamos a XMLH
const API = 'https://api.escuelajs.co/api/v1/';//MAYUSCULAS porque es un valor que no va a cambiar dentro de nuestro archivos

function fetchData(urlApi, callback){ //urlApi: no confundir y colocar API
let xhttp =new XMLHttppRequest(); //referencia a new XMLHttpRequest, una instancia

	xhttp.open('GET', urlApi,true); //petición "obtener" con true para habilitarlo,preparar la petición
	xhttp.onreadystatechange =function(event) { //escucha diferentes estados de la solicitud y conocer cuando está disponible la información

if(xhttp.readyState === 4) { //si el estado ha sido completada la llamada
if(xhttp.status === 200 ){ //el servido responde de forma correcta
			callback(null, JSON.parse(xhttp.responseText)); //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
		}
	}else {
const error =new Error('Error' + urlApi);
return callback(error,null); //es null porque no se está regresando ningún dato
	}
	}
	xhttp.send();//lanzara la petición al servidor 
}

