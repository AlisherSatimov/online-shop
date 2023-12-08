document.addEventListener("DOMContentLoaded", async () => {
    axios.defaults.baseURL = "http://localhost:5050/api/v1/";

    let token = localStorage.getItem("token");
    let cardWrapper = document.querySelector(".card-wrapper");
    let formProducts = document.querySelector("#form-products");

    formProducts.addEventListener("submit", async (e) => {
        e.preventDefault();

        let pName = formProducts[0].value;
        let pCategory = formProducts[1].value;
        let pColor = formProducts[2].value;
        let pExists = formProducts[3].value;
        let pDescription = formProducts[4].value;
        let pPrice = formProducts[5].value;
        let pImage = formProducts[6].value;

        console.log(pName);
        console.log(pCategory);
        console.log(pColor);
        console.log(pExists);
        console.log(pDescription);
        console.log(pPrice);
    });

    let getProducts = await axios.get("/products", {
        headers: { authorization: `Bearer ${token}` },
    });

    console.log(getProducts.data);

    getProducts.data.forEach((products) => {
        let card = document.createElement("div");
        card.classList.add("card", "rounded-3");
        cardWrapper.append(card);

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        card.append(cardHeader);

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", products.image);
        cardHeader.append(cardImg);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "flex-column");
        card.append(cardBody);

        let name = document.createElement("h4");
        name.innerText = "Name: " + products?.name.uz;
        cardBody.append(name);

        let category = document.createElement("p");
        category.innerText = "Category: " + products.category?.uz;
        cardBody.append(category);

        let color = document.createElement("p");
        color.innerText = "Color: " + products?.color.uz;
        cardBody.append(color);

        let isExists = document.createElement("p");
        isExists.innerText = "Exists: " + products?.exists;
        cardBody.append(isExists);

        let description = document.createElement("p");
        description.innerText = "Description: " + products?.description.uz;
        cardBody.append(description);

        let cardFooter = document.createElement("div");
        cardFooter.classList.add(
            "card-footer",
            "flex-column",
            "d-flex",
            "gap-2"
        );
        card.append(cardFooter);

        let price = document.createElement("span");
        price.innerText = "Price: " + "$" + products.price;
        cardFooter.append(price);

        let btn = document.createElement("button");
        btn.type = "submit";
        btn.innerText = "Add to cart";
        btn.classList.add("btn", "btn-primary");
        cardFooter.append(btn);
    });
});
