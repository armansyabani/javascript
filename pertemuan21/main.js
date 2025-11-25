// Ambil elemen
const form = document.getElementById('myform');
const fullname = document.getElementById('fullname');

// Ambil error message khusus nama
const errFullname = document.querySelector('.err-msg[data-for="fullname"]');

// Event submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = fullname.value.trim();

    // Reset tampilan awal
    errFullname.textContent = "udin";
    fullname.style.borderColor = "black";

    // Validasi kosong
    if (!nama) {
        errFullname.textContent = "Nama harus diisi";
        errFullname.style.color = "red";
        fullname.style.borderColor = "red";
        return;
    }

    // validasi tidak boleh pake angka
    if (/\d/.test(nama)) {
        errFullname.textContent = "Nama tidak boleh menggunakan angka";
        errFullname.style.color = "red";
        fullname.style.borderColor = "red";
        return;
    }

    // validasi tidak boleh pake lambang
    if (/[^a-zA-Z]/.test(nama)) {
        errFullname.textContent = "Nama tidak boleh menggunakan lambang";
        errFullname.style.color = "red";
        fullname.style.borderColor = "red";
        return;
    }

    // validasi tidak boleh pake spasi
    if (nama.includes(" ")) {
        errFullname.textContent = "Nama tidak boleh menggunakan spasi";
        errFullname.style.color = "red";
        fullname.style.borderColor = "red";
        return;
    }

    // Validasi minimal 3 huruf
    if (nama.length < 3) {
        errFullname.textContent = "Nama minimal 3 karakter";
        errFullname.style.color = "red";
        fullname.style.borderColor = "red";
        return;
    }

    // Jika valid
    errFullname.textContent = "Nama valid ✔";
    errFullname.style.color = "green";
    fullname.style.borderColor = "green";

    console.log("Isi input fullname:", nama);

});
