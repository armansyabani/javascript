export function loadHome() {
  const email = localStorage.getItem("reg_email") || "(tidak ada)";
  document.getElementById("userEmail").innerText = "Anda login sebagai: " + email;
}

export function logoutUser() {
  window.location.href = "welcome.html";
}
