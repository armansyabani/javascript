// Meng-import fungsi dari dua file tersebut
// Mencetak hasil fungsi `keRupiah(1500000)` → "Rp1.500.000"
//  Mencetak hasil fungsi `judul("belajar modular javascript")` → "Belajar Modular Javascript"

import { keRupiah } from "./utils/format.js";
import { judul } from "./utils/konversi.js";
console.log(keRupiah(1500000));
console.log(judul("belajar modular javascript"));
