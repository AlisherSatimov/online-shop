document.addEventListener("DOMContentLoaded", async () => {
  axios.defaults.baseURL = "http://localhost:5050/api/v1";
  let form = document.querySelector("#form-create");

  e.preventDefault();

  let token = localStorage.getItem("token");

  let getProductsResponse = await axios.get("/products", {
    headers: { authorization: `Bearer ${token}` },
  });

  let productsTable = document.querySelector("#products-table");
  productsTable.innerHTML = " ";

  let products = getProductsResponse.data;

  products.forEach((product) => {
    let productList = document.createElement("tr");

    let productsName = document.createElement("th");
    if (!product.name) {
      product.name = "Kiritilmagan";
    }
    productsName.innerText = product.name;
    productList.append(productsName);

    let productPrice = document.createElement("td");
    if (!product.price) {
      product.price = "Kiritilmagan";
    }
    productPrice.innerText = product.price;
    productList.append(productPrice);

    let productCategory = document.createElement("td");
    if (!product.category) {
      product.category = "Kiritilmagan";
    }
    productCategory.innerText = product.category;
    productList.append(productCategory);

    let productColor = document.createElement("td");
    if (!product.color) {
      product.color = "Kiritilmagan";
    }
    productColor.innerText = product.color;
    productList.append(color);
    productsTable.append(productColor);

    let productDescription = document.createElement("td");
    if (!product.description) {
      product.description = "Kiritilmagan";
    }
    productDescription.innerText = product.description;
    productList.append(description);

    productsTable.append(productColor);
  });
});
