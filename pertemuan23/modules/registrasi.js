// registrasi.js
export function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPass").value;

  if (!name || !email || !pass) return alert("Semua field harus diisi!");

  const user = { name, email, pass };

  localStorage.setItem("userData", JSON.stringify(user));

  alert("Registrasi berhasil!");
  window.location.href = "login.html";
}
console.log(registerUser);
