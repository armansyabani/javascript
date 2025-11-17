function simpanNama() {
  let nama = document.getElementById("namaInput").value;

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  // Simpan ke localStorage
  localStorage.setItem("namaUser", nama);

  document.getElementById("output").innerText = "Nama berhasil disimpan!";
}

function tampilNama() {
  let nama = localStorage.getItem("namaUser");

  if (!nama) {
    document.getElementById("output").innerText = "Tidak ada nama yang tersimpan!";
  } else {
    document.getElementById("output").innerText = "Nama yang tersimpan: " + nama;
  }
}

function hapusNama() {
  localStorage.removeItem("namaUser");
  document.getElementById("output").innerText = "Nama berhasil dihapus!";
}
