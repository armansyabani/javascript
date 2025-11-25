const form = document.getElementById('myForm');

const input = document.getElementById('textInput');
const error = document.getElementById('error');

const email = document.getElementById("email");
const errEmail = document.getElementById("err");

const phoneInput = document.getElementById('phoneInput');
const errorPhone = document.getElementById('errorPhone');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Reset error semua
    error.textContent = "";
    errEmail.textContent = "";
    errorPhone.textContent = "";

    // Input remove border
    input.classList.remove("error-border");
    email.classList.remove("error-border");
    phoneInput.classList.remove("error-border");

    const name = input.value.trim();
    const emailValue = email.value.trim();
    const phone = phoneInput.value.trim();

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ====================
    // VALIDASI NAMA
    // ====================
    if (name === "") {
        error.textContent = "Nama tidak boleh kosong!";
        input.classList.add("error-border");
        return;
    }

    if (/\d/.test(name)) {
        error.textContent = "Nama tidak boleh mengandung angka!";
        input.classList.add("error-border");
        return;
    }

    if (name.length < 6) {
        error.textContent = "Nama minimal 6 huruf!";
        input.classList.add("error-border");
        return;
    }

    // ====================
    // VALIDASI EMAIL
    // ====================
    if (!polaEmail.test(emailValue)) {
        errEmail.textContent = "Email tidak valid!";
        email.classList.add("error-border");
        return;
    }

    // ====================
    // VALIDASI TELEPON
    // ====================
    if (!/^\d+$/.test(phone)) {
        errorPhone.textContent = "Nomor telepon hanya boleh berisi angka!";
        phoneInput.classList.add("error-border");
        return;
    }

    if (phone.length < 10) {
        errorPhone.textContent = "Nomor telepon minimal 10 angka!";
        phoneInput.classList.add("error-border");
        return;
    }

    // ====================
    // SEMUA VALID
    // ====================
    alert("Form Berhasil Dikirim!");
});
