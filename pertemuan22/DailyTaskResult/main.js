// Fungsi dasar penyimpanan
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

/* ===========================
   1. Simpan Nama Pengguna
===========================*/
function saveName() {
  const name = document.getElementById("namaInput").value.trim();
  if (!name) return alert("Nama tidak boleh kosong");
  save("nama_user", name);
  renderName();
}

function renderName() {
  document.getElementById("display").innerText = load("nama_user") ?? "-";
}

/* ===========================
   2. Penghitung Kunjungan
===========================*/
function increaseVisit() {
  let count = load("visit_count") ?? 0;
  count++;
  save("visit_count", count);
  renderVisit();
}

function renderVisit() {
  document.getElementById("app").innerHTML =
    `<p>Jumlah kunjungan: <b>${load("visit_count")}</b></p>`;
}

/* ===========================
   3. Mode Gelap / Terang
===========================*/
function toggleTheme() {
  const now = load("theme") ?? "light";
  const newTheme = now === "light" ? "dark" : "light";
  save("theme", newTheme);
  applyTheme();
}

function applyTheme() {
  const theme = load("theme");
  document.body.style.background = theme === "dark" ? "#111" : "#fff";
  document.body.style.color = theme === "dark" ? "#eee" : "#000";
}

/* ===========================
   4. Auto Draft Tugas
===========================*/
function saveDraft() {
  const text = document.getElementById("draft").value;
  save("draft_tugas", text);
}

function loadDraft() {
  document.getElementById("draft").value = load("draft_tugas") ?? "";
}

/* ===========================
   5. Pilihan Bahasa
===========================*/
function saveLang() {
  const value = document.getElementById("lang").value;
  save("bahasa", value);
  renderLang();
}

function renderLang() {
  document.getElementById("selected").innerText = load("bahasa") ?? "ID";
}

/* ===========================
   6. To-do Belajar
===========================*/
function addTodo() {
  const text = document.getElementById("todo").value.trim();
  if (!text) return;

  const todos = load("todo_list") ?? [];
  todos.push(text);
  save("todo_list", todos);
  renderTodo();
}

function renderTodo() {
  const todos = load("todo_list") ?? [];
  document.getElementById("list").innerHTML =
    todos.map(t => `<li>${t}</li>`).join("");
}

/* ===========================
   7. Ukuran Font
===========================*/
function saveFont() {
  save("font_size", document.getElementById("font").value);
  applyFont();
}

function applyFont() {
  document.body.style.fontSize = load("font_size") ?? "16px";
}

/* ===========================
   8. Form Biodata
===========================*/
function saveForm() {
  save("form_user", {
    nama: document.getElementById("f_name").value,
    email: document.getElementById("f_email").value
  });
}

function loadForm() {
  const d = load("form_user");
  if (!d) return;
  document.getElementById("f_name").value = d.nama;
  document.getElementById("f_email").value = d.email;
}

/* ===========================
   Load Data Saat Halaman Dibuka
===========================*/
window.onload = () => {
  renderName();
  renderVisit();
  applyTheme();
  loadDraft();
  renderLang();
  renderTodo();
  applyFont();
  loadForm();
};
