// cart.js
const CART_KEY = "ks_cart";

// Ambil keranjang
function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Simpan keranjang
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Tambah ke cart
function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
}

// Hapus item
function removeFromCart(id) {
    const cart = getCart().filter(p => p.id !== id);
    saveCart(cart);
}

// Kosongkan cart
function clearCart() {
    localStorage.removeItem(CART_KEY);
}

// Checkout (simple)
function checkout() {
    const cart = getCart();

    if (cart.length === 0) {
        return { success: false, message: "Keranjang kosong!" };
    }

    clearCart();
    return { success: true };
}
