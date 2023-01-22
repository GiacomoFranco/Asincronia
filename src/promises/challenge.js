import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then(products => {
    console.log(products)
    return fetchData(`${API}/products/${products[1].id}`)
  .then(product => product.json())
  .then(product => {
    console.log(product.title)
    return fetchData(`${API}/categories/${product.category.id}`)
})
  .then(category => category.json())
  .then(category => console.log(category.name))
})
