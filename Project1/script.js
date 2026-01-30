// fetch("https://dummyjson.com/products").then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// });

// fetch("https://dummyjson.com/products").then((response)=>{
//     return response.json()
// }).then((data)=>{
//     const p =data.products;
//     console.log(p);
// })

// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => {
//     const p = data.products; 
//     // console.log(p);
//     // console.log(data.products[0].title);
//     data.products.forEach((product) => {
//         console.log(product.title, product.price);
//     });
//   });


////product img

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const products = data.products;   // array
    const container = document.getElementById("products");

    products.forEach((item) => {
      container.innerHTML += `
        <div class="product">
          <img src="${item.thumbnail}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>Price: ₹${item.price}</p>
        </div>
      `;
    });
});


//
// let allProducts = [];

// fetch("https://dummyjson.com/products")
//   .then(res => res.json())
//   .then(data => {
//     allProducts = data.products;
//     renderProducts(allProducts);
//   });

// function renderProducts(products) {
//   const container = document.getElementById("product-container");
//   container.innerHTML = "";

//   products.forEach(product => {
//     const card = document.createElement("div");

//     const img = document.createElement("img");
//     img.src = product.thumbnail;

//     const p = document.createElement("p");
//     p.innerText = product.title;

//     card.appendChild(img);
//     card.appendChild(p);
//     container.appendChild(card);
//   });
// }

// document.getElementById("search").addEventListener("click", () => {
//   const text = document.getElementById("searchInput").value.toLowerCase();

//   const filtered = allProducts.filter(product =>
//     product.title.toLowerCase().includes(text)
//   );

//   renderProducts(filtered);
// });
//



let allProducts = [];

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data.products;
  });

const input = document.getElementById("searchInput");
const suggestionBox = document.getElementById("suggestions");
const container = document.getElementById("product-container");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();

  suggestionBox.innerHTML = "";
  container.innerHTML = "";

  if (value === "") return;

  const matches = allProducts.filter(product =>
    product.title.toLowerCase().startsWith(value)
  );

  matches.forEach(product => {
    const li = document.createElement("li");
    li.innerText = product.title;

    li.addEventListener("click", () => {
      input.value = product.title;
      suggestionBox.innerHTML = "";
      renderProducts([product]);
    });

    suggestionBox.appendChild(li);
  });

  renderProducts(matches);
});

function renderProducts(products) {
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.thumbnail;
    img.width = 120;

    const p = document.createElement("p");
    p.innerText = product.title;

    card.appendChild(img);
    card.appendChild(p);
    container.appendChild(card);
  });
}
