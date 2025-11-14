# 🧪 **7. 25 Study Case Penggunaan JSON (Easy → Medium → Hard)**

---

## 🟢 **EASY LEVEL (1–10)**

(untuk pemula banget)

---

### **1. Simpan data user ke JSON**

```js
const user = { name: "Amin", age: 17 };
const json = JSON.stringify(user);
```

---

### **2. Ambil data user dari JSON**

```js
const json = '{"name":"Amin","age":17}';
const user = JSON.parse(json);
```

---

### **3. Konversi array angka ke JSON**

```js
JSON.stringify([1,2,3,4]);
```

---

### **4. Konversi array object ke JSON**

```js
const siswa = [
  { nama: "Ali" },
  { nama: "Budi" }
];

JSON.stringify(siswa);
```

---

### **5. Parse JSON lalu ambil properti tertentu**

```js
const data = JSON.parse('{"x":10,"y":20}');
console.log(data.x);
```

---

### **6. Validasi JSON**

```js
try {
  JSON.parse(data);
} catch {
  console.log("JSON tidak valid!");
}
```

---

### **7. JSON untuk menyimpan score game**

```js
localStorage.setItem("score", JSON.stringify({ level: 3, point:120 }));
```

---

### **8. JSON untuk menghidupkan kembali score**

```js
const score = JSON.parse(localStorage.getItem("score"));
```

---

### **9. JSON stringify dengan indentasi**

```js
JSON.stringify(obj, null, 2);
```

---

### **10. Mengirim data ke server API**

```js
fetch("/api", {
  method: "POST",
  body: JSON.stringify({ name:"Ali" })
});
```

---

## 🟡 **MEDIUM LEVEL (11–20)**

(lebih real case)

---

### **11. Konversi hasil form ke JSON**

```js
const formData = {
  nama: inputNama.value,
  email: inputEmail.value
};

const json = JSON.stringify(formData);
```

---

### **12. Ambil data API (weather, news, dsb)**

```js
const res = await fetch("/weather");
const data = await res.json(); // Auto parse JSON
```

---

### **13. Hapus properti tertentu saat stringify**

```js
JSON.stringify(user, ["name"]); // hanya name
```

---

### **14. Menyimpan data keranjang belanja**

```js
localStorage.setItem("cart", JSON.stringify(cartItems));
```

---

### **15. Mengembalikan keranjang belanja**

```js
const cart = JSON.parse(localStorage.getItem("cart") || "[]");
```

---

### **JSON.stringify(obj, null, 2);
**

```js
const data = JSON.parse('{"user":{"name":"Ali","tag":{"rank":10}}}');
console.log(data.user.tag.rank);
```

---

### **17. Convert tanggal saat parsing**

```js
JSON.parse(json, (k,v)=>{
  if(k==="tanggal") return new Date(v);
  return v;
});
```

---

### **18. Format JSON untuk dikirim ke server chatbot**

```js
const message = {
  sender: "user",
  text: "Hello, world!"
};
```

---

### **19. Filter object sebelum stringify**

```js
JSON.stringify(data, (key,value)=>{
  if(key === "password") return undefined;
  return value;
});
```

---

### **20. Serialize object yang punya method**

```js
const user = {
  name: "Ali",
  greet(){ console.log("hai") }
};

JSON.stringify(user); // method hilang
```

---

## 🔴 **ADVANCE LEVEL (21–25)**

(pakai logika lebih dalam)

---

### **21. Custom serializer untuk date**

```js
const obj = {
  event: "Login",
  time: new Date()
};

const json = JSON.stringify(obj, (key, value) =>
  value instanceof Date ? value.toISOString() : value
);
```

---

### **22. Parse array besar dari server**

```js
const data = JSON.parse(bigJsonString);
data.forEach(item => console.log(item.name));
```

---

### **23. JSON untuk komunikasi WebSocket**

```js
ws.send(JSON.stringify({ type:"join", room:"general" }));
```

---

### **24. Konversi data dari CSV → JSON (manual)**

```js
const csv = "name,age\nAli,20\nBudi,22";
const rows = csv.split("\n").slice(1);
const json = rows.map(r=>{
  const [name,age] = r.split(",");
  return { name, age:Number(age) };
});
```

---

### **25. Normalisasi database dari JSON kompleks**

```js
const data = JSON.parse(json);
const users = data.items.map(item => ({
  id: item.id,
  username: item.profile.user,
  role: item.permissions.role,
}));
```

---

# 📌 **Kesimpulan Utama**

* JSON adalah format pertukaran data modern
* Digunakan di API, localStorage, backend-frontend
* Dua fungsi penting:

  * `JSON.stringify()` → JS → JSON
  * `JSON.parse()` → JSON → JS
* Penting untuk semua developer JS modern
* Sangat wajib dipahami untuk proyek nyata (web, mobile, IoT, backend)

---