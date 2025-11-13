// fungsi menambah
export function tambah(a, b) {
    return a + b;
}

// fungsi mengurangi
export function kurang(a, b) {
    return a - b;
}

// fungsi perkalian
export function kali(a, b) {
    return a * b;
}

// fungsi pembagian
export function bagi(a, b) {
    if (b === 0) return "Error: pembagi nol!";
    return a / b;
}

// variabel & fungsi tambahan
let a = "A dari ar";
let b = "B dari ar";
let c = "C dari ar";
let d = "D dari ar";
let e = "E dari aritmatika";

function f1() { return `INI DARI F1`; }
function f2() { return `INI DARI F2`; }
function f3() { return `INI DARI F3`; }
function f4() { return `INI DARI F4`; }

// export tambahan
export { a, b, c, d, f1, f2, f3, f4 };
