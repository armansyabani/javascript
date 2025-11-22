const title = document.getElementById("page-title");
const btn = document.getElementById("btn-change");

btn.addEventListener("click", () => {
  title.innerText = "Selamat Datang di Kelas DOM!";
});

const input = document.getElementById("name-input");
const preview = document.getElementById("name-preview");

input.addEventListener("keyup", () => {
  const v = input.value.trim();
  preview.textContent = v === "" ? "(belum ada)" : v;
});
const desc = document.getElementById("desc");
const bt = document.getElementById("toggle-bt");
let visible = true;

btn.addEventListener("click", () => {
  visible = !visible;
  desc.style.display = visible ? "block" : "none";
  btn.innerText = visible ? "Sembunyikan" : "Tampilkan";
});
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
let count = 0;

incBtn.addEventListener("click", () => {
  count++;
  countEl.innerText = count;
   
});



