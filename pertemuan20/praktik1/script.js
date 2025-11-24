// Basic dataset access
console.log("Dataset Produk:");
document.querySelectorAll(".produk, .p, .pro").forEach(el => {
    console.log(el.dataset.id, el.dataset.name, el.dataset.price);
});

// Handle purchase
function handlePurchase(productElement) {
    const price = parseInt(productElement.dataset.price);
    const stock = parseInt(productElement.dataset.stock);

    if (stock > 0) {
        const updated = stock - 1;
        productElement.dataset.stock = updated;
        productElement.querySelector(".stock").textContent = `${updated} unit tersedia`;
    }

    const info = JSON.parse(productElement.dataset.info || "{}");
    console.log("Brand:", info.brand);
}

// Consistent dataset naming
const item = document.querySelector("[data-item-id]");
console.log(item.dataset.itemId, item.dataset.itemName);
item.dataset.itemPrice = "30000";

// Type conversion example
const el = document.getElementById("product");

const priceNum = Number(el.dataset.price);
const stockNum = parseInt(el.dataset.stock);
const isAvailable = el.dataset.available === "true";
const hasDiscount = Boolean(Number(el.dataset.discount));
const config = JSON.parse(el.dataset.config);

console.log(priceNum, stockNum, isAvailable, config.material);

// Add to cart function
function addToCart(button) {
    const parent = button.parentElement;
    const d = parent.dataset;

    const cartItem = {
        id: d.productId,
        name: d.name,
        price: parseInt(d.price),
        discount: parseInt(d.discount),
        weight: parseFloat(d.weight),
        seller: d.seller
    };

    const finalPrice = cartItem.price * (1 - cartItem.discount / 100);

    console.log("Added to cart:", cartItem);
    console.log("Final price:", finalPrice);
}

// Tab switcher
function switchTab(tab) {
    document.querySelectorAll(".tab").forEach(t => {
        t.dataset.tabActive = "false";
    });

    tab.dataset.tabActive = "true";
    console.log("Tab aktif:", tab.dataset.tabId);
}
