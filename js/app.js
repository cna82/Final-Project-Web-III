// swipper
// initialize swipper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 1800,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

// swipper slider dom nodes
let img1Swipper = document.getElementById("img1-swipper");
let title1Swipper = document.getElementById("title1-swipper");
let description1Swipper = document.getElementById("description1-swipper");
let category1Swipper = document.getElementById("category1-swipper");
let price1Swipper = document.getElementById("category1-swipper");
let img2Swipper = document.getElementById("img2-swipper");
let title2Swipper = document.getElementById("title2-swipper");
let description2Swipper = document.getElementById("description2-swipper");
let category2Swipper = document.getElementById("category2-swipper");
let price2Swipper = document.getElementById("category2-swipper");
let img3Swipper = document.getElementById("img3-swipper");
let title3Swipper = document.getElementById("title3-swipper");
let description3Swipper = document.getElementById("description3-swipper");
let category3Swipper = document.getElementById("category3-swipper");
let price3Swipper = document.getElementById("category3-swipper");
let slider = document.getElementById("slider");

// swipper function
function swipper(list) {
  for (let i = 0; i < list.length; i++) {
    img1Swipper.setAttribute("src", list[0].image);
    title1Swipper.innerHTML = list[0].title;
    description1Swipper.innerHTML = list[0].description;
    category1Swipper.innerHTML = list[0].category;
    price1Swipper.innerHTML = `Price : <span class="text-info">${list[0].price}</span> $`;
    img2Swipper.setAttribute("src", list[1].image);
    title2Swipper.innerHTML = list[1].title;
    description2Swipper.innerHTML = list[1].description;
    category2Swipper.innerHTML = list[1].category;
    price2Swipper.innerHTML = `Price : <span class="text-info">${list[1].price}</span> $`;
    img3Swipper.setAttribute("src", list[2].image);
    title3Swipper.innerHTML = list[2].title;
    description3Swipper.innerHTML = list[2].description;
    category3Swipper.innerHTML = list[2].category;
    price3Swipper.innerHTML = `Price : <span class="text-info">${list[2].price}</span> $`;
  }
}

// btn for scroll up
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// dom nodes seletion and variables
let productList = document.getElementById("product-list");
let yourLab = document.querySelector(".your-lab");
let footer = document.querySelector("#footer");
let counter = 0;
let article = document.querySelector("article");
let advantages = document.querySelector("#advantages");
let sliderMain = document.getElementById("slider-main");
let search = document.querySelector(".search");
let icon = document.getElementById("icon");
let nav = document.querySelector("nav");
let navItemA = document.querySelectorAll(".nav-item>a");
let header = document.querySelector("header");
let introText = document.getElementById("intro-text");
let sinaShop = document.getElementById("sina-shop");
let footerContent = document.querySelector(".content1");
let flag = 1;
// functions
const render = (list) => {
  footer.classList.remove("d-none");
  sliderMain.classList.remove("d-none");
  article.classList.remove("d-none");
  advantages.classList.remove("d-none");
  search.classList.remove("d-none");

  let section = `
  <div class="ctg">
  <h2>Products</h2>
    <div class="btn-group w-100"  role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      category
    </button>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#product-list" onclick="handleBackToMenu()">All products</a></li>
      <li><a class="dropdown-item" href="#product-list" onclick="handleCategory()" id="electronics" >Electronics</a></li>
      <li><a class="dropdown-item" href="#product-list" onclick="handleCategory()" id="jewelery">Jewelery link</a></li>
      <li><a class="dropdown-item" href="#product-list" onclick="handleCategory()" id="men's clothing">Men's clothing</a></li>
      <li><a class="dropdown-item" href="#product-list" onclick="handleCategory()" id="women's clothing">Women's clothing</a></li>
    </ul>
  </div>
  <div class="w-100"><hr></div>
  <div class="btn-group w-100"  role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Sort By
    </button>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#product-list" onclick="handleSort()">Default ID</a></li>
    <li><a class="dropdown-item" href="#product-list" onclick="handleSort()">Reverse ID</a></li>
    </ul>
  </div>
  <div class="w-100"><hr></div>
<div>
<img src="../images/vertical nav/hordan.png" alt="jordan !!!"  width="165px" height="180px">

</div>
 </div>

  <section class="products">`;
  section += list
    .map((item) => {
      return `
                <div class="product">
                    <img src="${item.image}" class="hg" />
                    <h4>${item.title}</h4>
                    <h6> ID:  <span>${item.id}</span></h6>
                    <p class="dsc">${item.description}</p>
                    <h6>Category:${item.category}</h6>
                
                    ${
                      !YOURLAB.find((yourLabItem) => yourLabItem.id === item.id)
                        ? `<button class="btn btn-lg btn-green text-light add-item" onclick="handleAddToYourLab('${item.id}'); handleToast('add');">Add to basket</button>`
                        : `<span class="badge bg-danger selected">This item has already been selected !! </span>`
                    }
                </div>`;
    })
    .join("");

  section += "</section>";
  productList.innerHTML = section;
  yourLab.textContent = YOURLAB.length;
};

function renderYourLab() {
  footer.classList.add("d-none");
  sliderMain.classList.add("d-none");
  article.classList.add("d-none");
  advantages.classList.add("d-none");
  search.classList.add("d-none");

  let section = `<section class="your-lab-items d-flex flex-column gap-3 w-100">
  <div class="text-center bg-danger mt-mine p-2">
  <button onclick="handleBackToMenu()" class="btn  btn-danger text-center">Back to main menu </button>
  </div>
  `;
  section += YOURLAB.map((item) => {
    return `
                  <div class="my-product basket p-2">
                      <img src="${item.image}" />
                      <h6>Title : ${item.title}</h6>
                      <h6>Category : ${item.category}</h6>
                      <div>
                      </div>
                      <span class="badge fs-5 bg-info">${item.price}$</span>
                      <button onclick="handleRemove(${item.id}); handleToast('remove')" class='remove btn btn-lg btn-danger'>Remove from basket </button>
                  </div>
              `;
  }).join("");

  section += `
  </section>`;
  productList.innerHTML = section;
  yourLab.textContent = YOURLAB.length;
}

const handleSearch = (event) => {
  let value = event.target.value;
  let resultOfSearch = datas[0].filter((item) => item.title.search(value) > -1);
  render(resultOfSearch);
};

const handleAddToYourLab = (prductId) => {
  let finded = datas[0].find((item) => item.id === +prductId);
  YOURLAB.push(finded);
  localStorage.setItem("favorites", JSON.stringify(YOURLAB));
  render(datas[0]);
};
const handleRemove = (productId) => {
  let filtered = YOURLAB.filter((item) => !(item.id === +productId));
  YOURLAB = filtered;
  renderYourLab();
};
const handleBackToMenu = () => {
  render(datas[0]);
};

function handleCategory() {
  console.log(datas[0]);
  let arr = datas[0];
  let category = event.target.getAttribute("id");
  console.log(category);
  let finded = arr.filter((item) => item.category === category);
  console.log(finded);
  render(finded);
}
function handleSort() {
  if (event.target.value === "Default ID") {
    render(datas[0]);
  } else {
    render(datas[0].reverse());
  }
}
let handleToast = (state) => {
  Toastify({
    text:
      state === "add" ? "Item added successfully" : "Item removed successfully",
    position: "center",
    gravity: "top",
    style: {
      background: state === "add" ? "green" : "red",
    },
  }).showToast();
};
function handleDarkMode() {
  localStorage.setItem("theme", flag);
  if (flag) {
    document.body.style.backgroundColor = "black";
    icon.classList.remove("fa-moon-o");
    icon.classList.add("fa-sun-o");
    header.classList.add("bg-dark");
    introText.classList.add("text-light");
    sinaShop.style.color = "red";
    nav.classList.add("bg-dark");
    icon.classList.remove("text-danger");
    productList.style.backgroundColor = "black";
    for (let a of navItemA) {
      a.classList.add("text-light");
    }
    article.classList.add("bg-dark");
    footerContent.classList.add("text-light");
    footer.classList.add("bg-footer");

    flag = 0;
  } else {
    document.body.style.backgroundColor = "white";
    header.classList.remove("bg-dark");
    icon.classList.add("fa-moon-o");
    icon.classList.add("text-danger");
    sinaShop.style.color = "blue";
    introText.classList.remove("text-light");
    productList.style.backgroundColor = "#ddd";
    icon.classList.remove("fa-sun-o");
    nav.classList.remove("bg-dark");
    for (let a of navItemA) {
      a.classList.remove("text-light");
    }
    article.classList.remove("bg-dark");
    footerContent.classList.remove("text-light");
    footer.classList.remove("bg-footer");

    flag = 1;
  }
}
