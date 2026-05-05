const cart = [];

const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

addButton.addEventListener("click", () => {
    const productName = productInput.value;
    const price = priceInput.value;

    let found = false;

    for (let product of cart) {
        if (product.productName === productName) {
        product.quantity = product.quantity + 1;
        found = true;
        break;
        }
    }

    if (!found) {
        cart.push({
        productName: productName,
        price: price,
        quantity: 1
        });
    }

    productInput.value = "";
    priceInput.value = "";

    renderCart();
});

function renderCart() {
    cartList.innerHTML = "";

for (let product of cart) {
    const li = document.createElement("li");
    li.textContent =
        product.productName +
        " - " +
        product.price +
        " kr - Antal: " +
        product.quantity;

    cartList.appendChild(li);
    }
}