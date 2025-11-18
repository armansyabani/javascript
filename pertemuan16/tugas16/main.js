"use strict"; // Menambahkan strict mode

// Buat Promise untuk mensimulasikan login user, dan resolve jika username benar.
newFunction();
function newFunction() {
    const login = new Promise((resolve, reject) => {
        let lamun = true; // 'lamun' adalah variabel boolean yang menentukan hasil
        setTimeout(() => {
            if (lamun) {
                resolve("Login Berhasil");
            } else {
                reject("Login Gagal");
            }
        }, 2000);

    });
    console.log(login); // Ini akan menampilkan Promise dalam keadaan 'pending' (atau 'resolved'/'rejected' tergantung waktu eksekusi)
    login.then(hasil => console.log(hasil));
    login.catch(hasil => console.log(hasil));
}

// no.1 Loading Profil User (Fake Delay)
function loadUserProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                username: "armansyabni",
                email: "armansyabni@gmail"
            });
        }, 4000);
    });
}

loadUserProfile() // Argumen yang tidak digunakan dihapus dari pemanggilan
  .then((user) => {
    console.log("✅ Status: SUCCESS");
    console.log("Data user:", user);
  })
  .catch((err) => {
    console.log("❌ Status: REJECT");
    console.error("Error:", err);
  });

//no.2 Promise Cek Koneksi Internet (Simulasi)
function checkConnection() {
  console.log("🔍 Mengecek koneksi... (PENDING)");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOnline = Math.random() > 0.3; // 70% online
      if (isOnline) {
        resolve("Koneksi stabil. ✅");
      } else {
        reject("Tidak ada koneksi internet. ❌");
      }
    }, 1000);
  });
}

checkConnection()
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("REJECT:", error);
  });

 //no.3 Konversi Data ke JSON Setelah Resolve
 function getSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "id",
        notifications: true
      });
    }, 500);
  });
}

getSettings()
  .then((settings) => {
    console.log("Object settings:", settings);
    return JSON.stringify(settings);
  })
  .then((settingsJSON) => {
    console.log("Settings dalam JSON:", settingsJSON);
  })
  .catch((err) => { // Menambahkan catch handler
    console.error("Terjadi error saat konversi JSON:", err);
  });

 //no 4. Promise Sederhana Menggunakan Promise.resolve dan Promise.reject.
 const successPromise = Promise.resolve("Data berhasil di-load!");
const failPromise = Promise.reject("Terjadi error saat load data!");

successPromise.then((msg) => console.log("SUCCESS:", msg));

failPromise.catch((err) => console.log("REJECT:", err));

//no5. Membungkus setTimeout Jadi Promise (Delay Message)
function delayMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

delayMessage("Hello, world!", 2000)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));


//no 6. Load Data Produk & Hitung Total Harga (Tanpa Server Nyata)
function loadProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Laptop", price: 5000000 },
        { id: 2, name: "Handphone", price: 3000000 },
        { id: 3, name: "Tablet", price: 2000000 },
      ]);
    }, 1000);
  });
}

loadProducts()
  .then((products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });
    console.log("Total harga:", total);
  })
  .catch((err) => console.error(err));

  function validateInput(inputString) {
  // Kita kembalikan (return) sebuah Promise baru
  return new Promise((resolve, reject) => {
    // Logika validasi sederhana: cek apakah string kosong setelah menghapus spasi di awal/akhir
    if (inputString && inputString.trim().length > 0) {
      // Jika valid (ada isinya), panggil resolve()
      resolve("Input berhasil divalidasi: '" + inputString + "'");
    } else {
      // Jika tidak valid (kosong), panggil reject() dengan pesan error
      reject("Error: Input tidak boleh kosong!");
    }
  });
}

// --- CARA MENGGUNAKAN FUNGSI ---

// Contoh 1: Input VALID (akan masuk ke .then())
validateInput("Halo Dunia!")
  .then((message) => {
    console.log("✅ Sukses:", message);
  })
  .catch((error) => {
    console.log("❌ Gagal:", error);
  });