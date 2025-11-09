//Buat object bernama `buku` dengan properti: `judul`, `pengarang`, `tahunTerbit`
let kitabsaya ={
    judul : "Safinatunnajah",
    pengarang :"Syekh Salim bin Sumair al-Hadlrami",
    "tahun terbit" :1850,
    pulldata : (password)=>{
        if (password == "pw") {
            return `Ok You Can Access My Full Data:
        judul : ${kitabsaya['judul']}
        pengarang : ${kitabsaya.pengarang}
        tahun di terbitkan : ${kitabsaya['tahun terbit']} `
        } else {
            return "Password Salah"
        }
    }
}
console.log(kitabsaya.pulldata("pw"))

//menambahkan produk
kitabsaya.pengarang = "Syekh Salim bin Sumair al-Hadlrami"

//mengubah nilai tahun terbit
kitabsaya.tahunterbit = 2023

//hapus properti pengarang
delete kitabsaya.pengarang


//Tampilkan semua isi object menggunakan looping
for (let key in kitabsaya) {
    console.log(kitabsaya[key])
}


