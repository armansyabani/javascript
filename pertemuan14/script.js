//no1
const user = { name: "Arman ", umur: 19 };
const json = JSON.stringify(user);
console.log(json);

//no2
const data = JSON.parse(json);
console.log(data);

//no3
JSON.stringify[1, 2, 3, 4, 5];
console.log();

//no4
const siswa = [ { nama: "Arman" }, { nama: "firaun" } ];
JSON.stringify(siswa);
console.log(siswa);

//no5
const aing = JSON.parse('{"x":100,"y":750}');
console.log(aing.x);
console.log(aing.y);

//no6
try {
  JSON.parse(data);
} catch {
  console.log("JANGAN LUPA JUMA'ATAN");
}

//no7
localStorage.setItem("score", JSON.stringify({ level: 3, point:120 }));

//no8
const score = JSON.parse(localStorage.getItem("score"));
console.log(score);

//no9

const obj = {
  name: "Arman",
  age: 19
};
const json2 = JSON.stringify(obj, ["name"]);
console.log(json2);

//no10

const obj2 = {
  name: "Arman",
  age: 19
};
const json3 = JSON.stringify(obj2, ["age"]);
console.log(json3);

//11. Konversi hasil form ke JSON
  const inputNamamu = document.getElementById("inputNamamu");
  const inputEmailmu = document.getElementById("inputEmailmu");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function() {
    const data = {
      name: inputNamamu.value,
      email: inputEmailmu.value
    };
    const json = JSON.stringify(data);
    console.log(json);
  });


}

//13. Hapus properti tertentu saat stringify
JSON.stringify(user, ["name"]);
console.log(user);

//14. Menyimpan data keranjang belanja
const keranjang = JSON.parse(localStorage.getItem("keranjang"));
console.log(keranjang);

//15. Mengembalikan keranjang belanja
localStorage.setItem("keranjang", JSON.stringify(keranjang));
console.log(keranjang);

//16. Parse nested object

