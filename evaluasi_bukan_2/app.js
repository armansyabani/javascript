// app.js

// Render list produk ke halaman
function renderProducts(containerId) {
    const container = document.getElementById(containerId);
    const list = getProducts();

    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${p.gambar}" alt="">
                <h3>${p.nama}</h3>
                <p>${p.deskripsi}</p>
                <p class="harga">Rp ${p.harga}</p>

                <button onclick="addToCart(${p.id})">Tambah ke Keranjang</button>

                <a href="edit-product.html?id=${p.id}" class="edit-btn">Edit</a>
                <button onclick="deleteProduct(${p.id})" class="delete-btn">Delete</button>
            </div>
        `;
    });
}
