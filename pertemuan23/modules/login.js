//login.js
export function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;

    if (!email || !pass) return alert("Semua field harus diisi!");

    const user = JSON.parse(localStorage.getItem("userData"));

    if (user.email === email && user.pass === pass) {
        alert("Login berhasil!");
        window.location.href = "home.html";
    } else {
        alert("Email atau password salah!");
    }
}
console.log(loginUser);
