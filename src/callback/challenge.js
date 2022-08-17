const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //llamamos a XMLH
const API = 'https://api.escuelajs.co/api/v1/';//MAYUSCULAS porque es un valor que no va a cambiar dentro de nuestro archivos

function fetchData(urlApi, callback){ //urlApi: no confundir y colocar API
let xhttp  =new XMLHttpRequest(); //referencia a new XMLHttpRequest, una instancia

	xhttp.open('GET', urlApi, true); //petición "obtener" con true para habilitarlo,preparar la petición
	xhttp.onreadystatechange = function(event) { //escucha diferentes estados de la solicitud y conocer cuando está disponible la información

if(xhttp.readyState === 4) { //si el estado ha sido completada la llamada
if(xhttp.status === 200 ){ //el servido responde de forma correcta
			callback(null, JSON.parse(xhttp.responseText)); //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
		}else {
			const error =new Error('Error' + urlApi);
			return callback(error, null); //es null porque no se está regresando ningún dato
			}
		}
	}
	xhttp.send();//lanzara la petición al servidor 
}

fetchData(`${API}products`, function(error1, data1){
	if(error1) return console.error(error1);
	fetchData(`${API}products/${data1[0].id}`, function(error2, data2){
		if(error2) return console.error(error2);
		fetchData(`${API}categories/${data2?.category?.id}`, function(error3, data3){
			if(error3) return console.error(error3);
			console.log(data1[0]);
			console.log(data2.title);
			console.log(data3.name);
		});
	});
});