// 1. Mengambil elemen
const title = document.getElementById("title");
const btn = document.getElementById("btn");

// 2. Event sederhana
btn.addEventListener("click", () => {
  title.innerText = "Judul Baru";
});

// 3. Ganti teks & HTML
const text = document.getElementById("text");
text.innerText = "Halo santri!";
text.innerHTML = "<b>Halo</b> santri!";

// 4. Style & class
const box = document.getElementById("box");
box.style.backgroundColor = "black";
box.style.color = "white";
box.classList.add("active");

// 5. Atribut & dataset
const photo = document.getElementById("photo");
photo.setAttribute("alt", "Foto santri");
photo.dataset.id = "123";

// 6. Membuat elemen
const ul = document.getElementById("list");
const li = document.createElement("li");
li.textContent = "Item baru";
ul.appendChild(li);

// 7. Input event
const nameInput = document.getElementById("name");
const showName = document.getElementById("show-name");

nameInput.addEventListener("keyup", () => {
  showName.textContent = nameInput.value;
});

