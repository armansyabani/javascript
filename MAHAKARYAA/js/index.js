// TAMPILKAN FORM
function showRegister() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";
}
function showLogin() {
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

// ===== REGISTER =====
function register() {
    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value;
    const confirm = document.getElementById("regConfirm").value;

    if (!user || !pass || !confirm) {
        alert("Semua field harus diisi!");
        return;
    }
    if (pass !== confirm) {
        alert("Password tidak sama!");
        return;
    }

    // simpan ke localStorage
    const akun = { user, pass };
    localStorage.setItem("akun", JSON.stringify(akun));

    alert("Registrasi sukses! Silakan login.");
    showLogin();
}

// ===== LOGIN =====
function login() {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value;

    const akun = JSON.parse(localStorage.getItem("akun"));

    if (!akun) {
        alert("Belum ada akun yang terdaftar!");
        return;
    }

    if (user === akun.user && pass === akun.pass) {
        alert("Login berhasil!");
        // pindah halaman
        window.location.href = "products.html";
    } else {
        alert("Username atau password salah!");
    }
}
