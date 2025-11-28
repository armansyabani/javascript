// registasi
import { registerUser } from "./registrasi.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  if (form) {
    form.addEventListener("submit", registerUser);
  }
});

// login
import { loginUser } from "./login.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", loginUser);
  }
});

//home
import { home } from "./home.js";

document.addEventListener("DOMContentLoaded", () => {
  home();
});

//welcome
import { welcome } from "./welcome.js";

document.addEventListener("DOMContentLoaded", () => {
  welcome();
});

//logout
import { logoutUser } from "./home.js";

document.addEventListener("DOMContentLoaded", () => {
  logoutUser();
});