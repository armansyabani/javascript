const products = [
    { id: 1, name: "CapCut Pro", price: 25000, category: "editing" },
    { id: 2, name: "Canva Pro", price: 30000, category: "editing" },
    { id: 3, name: "Netflix Premium", price: 40000, category: "streaming" },
    { id: 4, name: "YouTube Premium", price: 25000, category: "streaming" },
    { id: 5, name: "Spotify Premium", price: 20000, category: "streaming" },
    { id: 6, name: "Photoshop 2024", price: 50000, category: "editing" },
    { id: 7, name: "Google One 200GB", price: 15000, category: "tools" }
];

function displayProducts(list) {
    const container = document.getElementById("productList");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <h3>${p.name}</h3>
                <p>Rp${p.price.toLocaleString()}</p>
                <button onclick="addToCart(${p.id})" class="btn">Tambah</button>
            </div>
        `;
    });
}

displayProducts(products);

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " ditambahkan ke keranjang!");
}

document.getElementById("search").addEventListener("input", e => {
    const keyword = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    displayProducts(filtered);
});


document.getElementById("filter").addEventListener("change", e => {
    const cat = e.target.value;

    if (cat === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        displayProducts(filtered);
    }
});
