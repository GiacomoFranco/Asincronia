const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://pokeapi.co/api/v2";

function fetchData(urlApi, callback) {

  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", urlApi, true);

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }else {
        const error = new Error(urlApi);
        callback(error, null);
      }
      
    }
  };

  xhttp.send()
}

fetchData(`${API}/pokemon`, function (error1, data1){
    if (error1) {console.log(error1)}
    console.log(data1)
})
