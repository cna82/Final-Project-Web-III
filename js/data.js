// using sweet alert library to alert the errors

// api for all products
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => render(data))
  .catch((error) =>
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `
    Something went wrong!
    Please check your internet connection and try again later 
    `,
      footer:
        '<a href="https://www.pixelfish.com.au/blog/most-common-website-errors/" target="_blank">Why do I have this issue?</a>',
    })
  );

let datas = [];
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => datas.push(data))
  .catch((error) =>
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `
    Something went wrong!
    Please check your internet connection and try again later 
    `,
      footer:
        '<a href="https://www.pixelfish.com.au/blog/most-common-website-errors/" target="_blank">Why do I have this issue?</a>',
    })
  );

// api limit
fetch("https://fakestoreapi.com/products?limit=3")
  .then((response) => response.json())
  .then((data) => swipper(data))
  .catch((error) =>
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `
      Something went wrong!
      Please check your internet connection and try again later 
      `,
      footer:
        '<a href="https://www.pixelfish.com.au/blog/most-common-website-errors/" target="_blank">Why do I have this issue?</a>',
    })
  );

// Basket
let YOURLAB = JSON.parse(localStorage.getItem("favorites"));
