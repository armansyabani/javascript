//no 1 
async function getUser() {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();

    const user = {
      nama: data.name,
      umur: 20  // API tidak punya umur jadi kita isi contoh
    };

    console.log("Nama:", user.nama);
    console.log("Umur:", user.umur);

    localStorage.setItem("user_1", JSON.stringify(user));

  } catch (error) {
    console.error(error);
  }
}

getUser();

//2. Menangani Error Ketika API Tidak Ditemukan

async function loadErrorExample() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/halaman-yang-tidak-ada');
    const data = await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

loadErrorExample();
alert("wkwkwk error ya :)");


//3. Fetch → json() → Menampilkan Daftar Judul Produk
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  const expensiveProducts = products.filter(p => p.price > 100);
  console.log("Produk dengan harga > 100:");
  console.log(expensiveProducts.map(p => p.title));
  const priceList = expensiveProducts.map(p => p.price);
  localStorage.setItem("hargaProducts", JSON.stringify(priceList));
  console.log("Harga produk disimpan ke localStorage!");
}

getProducts();

//no.4. Refactor Callback ke async/await

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  const expensiveProducts = products.filter(p => p.price > 100);
  console.log("Produk dengan harga > 100:");
  console.log(expensiveProducts.map(p => p.title));
  const priceList = expensiveProducts.map(p => p.price);
  localStorage.setItem("hargaProducts", JSON.stringify(priceList));
  console.log("Harga produk disimpan ke localStorage!");
}

getProducts();

//no 5 Fungsi Delay Menggunakan Promise + Async

async function delayMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

const message = await delayMessage("Hello, world!", 2000);
console.log(message);

