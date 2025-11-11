const inputNamaKasir = document.getElementById("namaKasir");
const helloKasir = document.getElementById("pesanKasir");
const daftarProdukElemen = document.getElementById("daftarProduk");
const inputProductId = document.getElementById('productId');
const inputProductName = document.getElementById('productName');
const inputProductPrice = document.getElementById('productPrice');

const kasir = { nama: "" };

const daftarProduk = [
  { id: "001", nama: "Beras 1kg", harga: 15000 },
  { id: "002", nama: "Teh", harga: 8000 },
  { id: "003", nama: "Gula", harga: 5000 },
];

function formatRupiah(angka) {
  return angka.toLocaleString("id-ID");
}

function simpanKasir() {
  let nama = inputNamaKasir.value.trim();
  if (nama === "") {
    alert("Nama kasir belum diisi");
    return;
  }
  kasir.nama = nama;
  helloKasir.innerText = "Assalamualaikum Kak " + kasir.nama + " 👋";
}

function tampilkanProduk() {
  let isi = "";
  for (let i = 0; i < daftarProduk.length; i++) {
    const produk = daftarProduk[i];
    isi += `
      <div class="item-produk">
        <button class="button-kontrol" onclick="hapusProduk('${produk.id}')">-</button>
        <div>
          <h3>${produk.nama}</h3>
          <p>Rp ${formatRupiah(produk.harga)}</p>
        </div>
        <button class="button-kontrol" onclick="tambahKeranjang('${produk.id}')">>></button>
      </div>
    `;
  }
  daftarProdukElemen.innerHTML = isi;
}

function hapusProduk(id) {
  alert("Hapus produk dengan ID: " + id);
}

function tambahKeranjang(id) {
  alert("Tambah produk dengan ID: " + id);
}
 

function hapusProduk(idProduk) {
  const index = daftarProduk.findIndex(produk => produk.id === idProduk);
  if (index !== -1) {
    daftarProduk.splice(index, 1);
    tampilkanProduk();
  }
}

function tambahproduk(idProduk) {
    let ditemukan = false;
    for (let i = 0; i < keranjang.length; i++) {
        if (keranjang[i].id === idProduk) {
            keranjang[i].jumlah += 1;
            ditemukan = true;
        }
    }
    if (!ditemukan) {
        for (let j = 0; j < daftarProduk.length; j++) {
            if (daftarProduk[j].id === idProduk) {
                keranjang.push({
                    id: daftarProduk[j].id,
                    nama: daftarProduk[j].nama,
                    harga: daftarProduk[j].harga,
                    jumlah: 1
                });
            }
        }
    }
    tampilkanKeranjang();
   } 