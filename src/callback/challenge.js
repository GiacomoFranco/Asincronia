const XMLHttpsRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi, callback) {
  const xhttp = new XMLHttpsRequest();
  xhttp.open('GET', urlApi,true);
  xhttp.onreadystatechange = function (e){
    if(xhttp.readyState === 4){
        if (xhttp.status === 200) {
            callback(null, JSON.parse(xhttp.responseText))
        }
        else{
            const error = new Error(urlApi)
            callback(error, null)
        }
    }
  }
  xhttp.send();
}

fetchData(`${API}/products`, function (error, respuesta){
    if(error) console.log(error);
    fetchData(`${API}/products/${respuesta[0].id}`, function (error2, respuesta2){
        if (error2) console.log(error2)
        fetchData(`${API}/categories/${respuesta2.category.id}`, function(error3, respuesta3){
            if (error3) console.log(error3);

            console.log(respuesta[0]);
            console.log(respuesta2);
            console.log(respuesta3.name);
        })
    })
})


