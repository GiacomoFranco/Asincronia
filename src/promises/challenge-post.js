import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  return fetch(urlApi, {
    method: "DELETE",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

const data = {
  "title": "Black Shirt",
  "price": 900,
  "description": "A cool black shirt",
  "categoryId": 5,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products/276`)
  .then(response => response.json())
  .then(data => console.log(data))