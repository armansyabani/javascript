// Membuat array bahan makanan
const products = ["terigu", "telur", "minyak", "gula"];
console.log(products[1]); // Output: "telur"
console.log(products.length); // Output: 4


//Menambah element denagn push
const minuman = ["susu", "air", "jus"];
minuman.push("teh");
console.log(minuman); // Output: ["susu", "air", "jus", "teh"]

//Menghapus element dengan pop
const colors = ["red", "green", "blue"];
colors.pop();
console.log(colors); // Output: ["red", "green"]

// Iterasi Sederhana dengan forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number); // Output: 1, 2, 3, 4, 5
});

// Pencarian dengan includes
let safar = ["tasikmalaya", "bandung", "jakarta"];
console.log(safar.includes("jakarta")); // Output: true
console.log(safar.includes("arab")); // Output: false

//Menambah di Awal dengan unshift
const arr = ["a", "b", "c"];
arr.unshift("d");
console.log(arr); // Output: ["d", "a", "b", "c"]

//Menghapus dari Awal dengan shift
const man = ["a", "b", "c"];
man.shift();
console.log(man); // Output: ["b", "c"]

//Mencari Indeks dengan indexOf
const pohon = ["kelapa", "mangga", "pisang"];
console.log(pohon.indexOf("mangga")); // Output: 1
console.log(pohon.indexOf("jambu")); // Output: -1



//==level-medium==//

//Filtering Data dengan filter
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = data.filter((item) => item % 2 === 0);
console.log(filtered); // Output: [2, 4, 6, 8, 10]

//Pencarian dengan find
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 },
]
let topStudent = students.find((student) => student.age > 20);
console.log(topStudent); // Output: { name: "Bob", age: 22 }

//Penggabungan Array dengan concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]