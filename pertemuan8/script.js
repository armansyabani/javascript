// ================================================
// FUNCTION MANIPULATION DATA TO ARRAY
// ================================================

// Data awal
let arr = [
  'Array 1', 'Array 2', 'Array 3', 'Array 4', 'Array 5',
  'Array 6', 'Array 7', 'Array 8', 'Array 9', 'Array 10'
];

// ==================================================
// 1️⃣ FUNGSI UNTUK MENAMPILKAN DATA DI OUTPUT BOX
// ==================================================
function showOutput() {
  const box = document.getElementById('outputBox');
  box.innerHTML = ""; // kosongkan dulu
  if (arr.length === 0) {
    box.innerHTML = "<p><i>Array kosong</i></p>";
  } else {
    arr.forEach((item, i) => {
      const line = document.createElement('div');
      line.textContent = `${i + 1}. ${item}`;
      box.appendChild(line);
    });
  }
}
showOutput();

// ==================================================
// 2️⃣ POPUP (MODAL) OPEN & CLOSE
// ==================================================
function togglePopup(id) {
  document.getElementById(`popupModal${id}`).classList.toggle("hidden");
}

// ==================================================
// 3️⃣ HAPUS ELEMEN PERTAMA DAN TERAKHIR ARRAY
// ==================================================
function deleteFirstArray() {
  if (arr.length > 0) {
    arr.shift();
    showOutput();
  } else {
    alert("Array sudah kosong!");
  }
}

function deleteLastArray() {
  if (arr.length > 0) {
    arr.pop();
    showOutput();
  } else {
    alert("Array sudah kosong!");
  }
}

// ==================================================
// 4️⃣ FORM F1 (Tambah / Hapus pakai Pop atau Unshift)
// ==================================================
document.getElementById("F1").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const action = document.getElementById("action-option").value;

  if (!name) {
    alert("Nama santri tidak boleh kosong!");
    return;
  }

  if (action === "unshift") {
    arr.unshift(name); // tambah di depan
  } else if (action === "pop") {
    arr.pop(); // hapus terakhir
  }

  togglePopup("1");
  showOutput();
  e.target.reset();
});

// ==================================================
// 5️⃣ FORM F2 (Edit atau Tambah data di index tertentu)
// ==================================================
document.getElementById("F2").addEventListener("submit", function (e) {
  e.preventDefault();

  const index = parseInt(document.getElementById("index").value);
  const newData = document.getElementById("new-data").value.trim();

  if (isNaN(index) || index < 0 || index >= arr.length) {
    alert("Index tidak valid! (mulai dari 0)");
    return;
  }

  if (!newData) {
    alert("Data baru tidak boleh kosong!");
    return;
  }

  arr[index] = newData; // ubah data pada index tersebut

  togglePopup("2");
  showOutput();
  e.target.reset();
});

// ==================================================
// 6️⃣ CONTOH PENERAPAN MAP DAN FILTER (opsional)
// ==================================================

// Map: ubah setiap data dengan tambahan label
const hasilMap = arr.map((v, i) => {
  return i % 2 === 0 ? v + " RIT" : v + " PIT";
});

// Filter: pisahkan berdasarkan label
const rit = hasilMap.filter((v) => v.includes("RIT"));
const pit = hasilMap.filter((v) => v.includes("PIT"));

console.group("TABLE DATA ARRAY AWAL");
console.table(arr);
console.groupEnd();

console.group("TABLE DATA ARRAY HASIL MAP()");
console.table(hasilMap);
console.groupEnd();

console.group("TABLE DATA ARRAY FILTER RIT");
console.table(rit);
console.groupEnd();

console.group("TABLE DATA ARRAY FILTER PIT");
console.table(pit);
console.groupEnd();

