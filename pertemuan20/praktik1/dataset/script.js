// Mengakses dataset
const product = document.getElementById('product');

// Akses individual property
console.log(product.dataset.id);        // "123"
console.log(product.dataset.name);      // "Laptop"
console.log(product.dataset.price);     // "1500000"

// Akses semua dataset
console.log(product.dataset);
// {id: "123", name: "Laptop", price: "1500000", inStock: "true", category: "electronics"}

// Konversi tipe data
const price = parseInt(product.dataset.price);
const inStock = product.dataset.inStock === "true";


const element = document.getElementById('product');

// Update nilai
element.dataset.price = "1600000";
element.dataset.stock = "10";

// Tambah dataset baru
element.dataset.discount = "15";

// Hapus dataset
delete element.dataset.category;

// Check existence
if ('discount' in element.dataset) {
    console.log('Discount available');
}

const buttons = document.querySelectorAll(".btn-detail");
const detailBox = document.getElementById("detailBox");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const item = btn.parentElement;

        // Ambil semua dataset produk
        const data = {
            name: item.dataset.name,
            price: parseInt(item.dataset.price),
            stock: item.dataset.stock,
            description: item.dataset.description
        };

        // Tampilkan detailnya
        detailBox.style.display = "block";
        detailBox.innerHTML = `
            <h3>${data.name}</h3>
            <p><strong>Harga:</strong> ${formatRupiah(data.price)}</p>
            <p><strong>Stok:</strong> ${data.stock} unit</p>
            <p>${data.description}</p>
        `;
    });
});

// Fungsi format Rupiah
function formatRupiah(num) {
    return "Rp " + num.toLocaleString("id-ID");
}

function beliProduk(product) {
    // Akses data langsung TANPA parsing
    const harga = parseInt(product.dataset.price);
    const stok = parseInt(product.dataset.stock);

    if (stok > 0) {
        const sisa = stok - 1;

        // Update sumber data utama
        product.dataset.stock = sisa.toString();

        // Update tampilan
        product.querySelector(".stock").textContent =
            `${sisa} unit tersedia`;
    }
}

function beliProduk(product) {
    // HARUS parsing manual → rentan salah
    const hargaTeks = product.querySelector(".price").textContent;
    const stokTeks = product.querySelector(".stock").textContent;

    const harga = parseInt(hargaTeks.replace(/[^\d]/g, ""));
    const stok = parseInt(stokTeks.match(/\d+/)[0]);

    if (stok > 0) {
        const sisa = stok - 1;

        // Hanya update tampilan (data asli hilang)
        product.querySelector(".stock").textContent =
            `${sisa} unit tersedia`;
    }
}