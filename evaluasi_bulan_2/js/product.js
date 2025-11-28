// products.js
const PRODUCTS_KEY = "ks_products_v1";

// Ambil produk
function getProducts() {
    return JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || [];
}

// Simpan produk
function saveProducts(list) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(list));
}

// Tambah produk
function addProduct(data) {
    const list = getProducts();
    const id = Date.now();

    list.push({
        id,
        nama: data.nama,
        gambar: data.gambar,
        kategori: data.kategori,
        harga: data.harga,
        deskripsi: data.deskripsi 
    });

    saveProducts(list);
}

// Hapus
function deleteProduct(id) {
    const list = getProducts().filter(p => p.id !== id);
    saveProducts(list);
}

// Edit produk
function updateProduct(id, newData) {
    const list = getProducts();
    const idx = list.findIndex(p => p.id === id);

    if (idx !== -1) {
        list[idx] = { ...list[idx], ...newData };
        saveProducts(list);
    }
}

// Ambil produk berdasarkan ID
function getProductById(id) {
    return getProducts().find(p => p.id === id);
}
