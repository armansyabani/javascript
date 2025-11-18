const janji = new Promise(function(resolve, reject) {

    let kalau = true
    setTimeout(() => {
    if(kalau){
        resolve("Sukses")
    }else{
        reject("Gagal")
    }
}, 2000);
});
console.log(janji);
janji.then(hasil => console.log(hasil));
janji.catch(hasil => console.log(hasil));




function ambilData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("alhamdulillah");
        }, 3000);
    });
}


ambilData().then(data => console.log(data));
ambilData().catch(data => console.log(data));

function step1() {
  return Promise.resolve("ngaji pagi selesai");
}

function step2(pesan) {
  return Promise.resolve(pesan + " → ngaji siang selesai");
}

function step3(pesan) {
  return Promise.resolve(pesan + " → ngaji malam selesai");
}

step1()
  .then(step2)
  .then(step3)
  .then(console.log);
