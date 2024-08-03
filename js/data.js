// api for all products

// api for all products
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => render(data))
  .catch((error) => console.log("error"));

let datas = [];
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => datas.push(data))
  .catch((error) => console.log("error"));

// api limit
fetch("https://fakestoreapi.com/products?limit=3")
  .then((response) => response.json())
  .then((data) => swipper(data))
  .catch((error) =>
    alert(
      `Sorry we have a problem please check your connection and trSSSSSSSy again `
    )
  );

// Basket
let YOURLAB = JSON.parse(localStorage.getItem("favorites"));
