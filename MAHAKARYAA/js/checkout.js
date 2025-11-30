document.getElementById("payBtn").onclick = () => {
    const method = document.getElementById("method").value;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Keranjang kosong!");
        return;
    }

    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.push({
        items: cart,
        method: method,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("history", JSON.stringify(history));
    localStorage.removeItem("cart");

    alert("Pembayaran sukses! ya");
    window.location.href = "history.html";
};
