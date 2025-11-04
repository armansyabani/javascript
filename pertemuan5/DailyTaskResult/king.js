// 🌍 Variabel Global
const appName = "FinBalance";
let version = "1.0.0";
var user = "Arman";

// Elemen DOM
const infoBox = document.getElementById("infoBox");
const logBox = document.getElementById("logBox");
const balanceText = document.getElementById("balanceText");
const showInfoBtn = document.getElementById("showInfoBtn");
const addBtn = document.getElementById("addBtn");
const amountInput = document.getElementById("amountInput");

// 🧭 Fungsi akses variabel global
function showAppInfo() {
  infoBox.textContent = `📱 App: ${appName} (v${version})\n👤 User: ${user}`;
}

// ==============================
// ⚙️ Eksperimen Hoisting
// ==============================
console.log("=== Hoisting Demo ===");

// var
console.log(a); // undefined (karena hoisting)
var a = 10;
console.log(a); // 10

// let
try {
  console.log(b);
} catch {
  console.log("b belum bisa diakses sebelum deklarasi (let)");
}
let b = 20;

// const
try {
  console.log(c);
} catch {
  console.log("c belum bisa diakses sebelum deklarasi (const)");
}
const c = 30;

// ==============================
// 💰 Closure: Dompet Digital
// ==============================
function createWallet(owner) {
  let balance = 0;

  return {
    getBalance: () => balance,
    addBalance: (amount) => {
      if (amount <= 0) {
        logBox.textContent += "❌ Jumlah harus lebih dari 0\n";
        return;
      }
      balance += amount;
      logBox.textContent += `✅ ${owner} menambah Rp${amount.toLocaleString()}\n`;
      updateBalanceDisplay(balance);
    },
  };
}

// Buat wallet
const myWallet = createWallet(user);

// 🖱️ Event Listener
showInfoBtn.addEventListener("click", showAppInfo);

addBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  myWallet.addBalance(amount);
  amountInput.value = "";
});

// 🔄 Update tampilan saldo
function updateBalanceDisplay(value) {
  balanceText.textContent = `Saldo: Rp${value.toLocaleString()}`;
}

// Inisialisasi tampilan awal
updateBalanceDisplay(myWallet.getBalance());
