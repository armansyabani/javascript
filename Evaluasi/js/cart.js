const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartList = document.getElementById("cartList");
let totalPrice = 0;

cart.forEach(item => {
    cartList.innerHTML += `<li>${item.name} — Rp${item.price.toLocaleString()}</li>`;
    totalPrice += item.price;
});

document.getElementById("total").innerText = "Total: Rp" + totalPrice.toLocaleString();
