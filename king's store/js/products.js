// products.js — seed data produk
(function(){
  const seed = [
    { id:1, name:"Alight Motion", img:"https://i.ibb.co/Bq6Fq6S/alight.png", category:"apps", status:"Tersedia", price:130000, desc:"License Alight Motion Premium — 1 bulan" },
    { id:2, name:"Netflix", img:"https://i.ibb.co/9t9VVM4/netflix.png", category:"media", status:"Tersedia", price:35000, desc:"Akun Netflix Premium 1 bulan" },
    { id:3, name:"Canva Pro", img:"https://i.ibb.co/WKJB18D/canva.png", category:"apps", status:"Tersedia", price:20000, desc:"Akun Canva Pro bulanan" },
    { id:4, name:"CapCut Pro", img:"https://i.ibb.co/jJkxQ8p/capcut.png", category:"apps", status:"Tersedia", price:15000, desc:"CapCut premium license" },
    { id:5, name:"Spotify Premium", img:"https://i.ibb.co/YXGHTws/spotify.png", category:"media", status:"Tersisa 8", price:12000, desc:"Spotify Premium - shared" },
    { id:6, name:"YouTube Premium", img:"https://i.ibb.co/GTJZ0K9/youtube.png", category:"media", status:"Stok Habis", price:25000, desc:"YouTube Premium" },
    { id:7, name:"Adobe CC (1 bulan)", img:"https://i.ibb.co/3phq0yL/adobe.png", category:"apps", status:"Tersedia", price:400000, desc:"Akun Adobe CC 1 bulan" },
    { id:8, name:"Canva Elements Pack", img:"https://i.ibb.co/WKJB18D/canva.png", category:"apps", status:"Tersedia", price:50000, desc:"Asset pack Canva" }
  ];

  if(!localStorage.getItem('ks_products')){
    localStorage.setItem('ks_products', JSON.stringify(seed));
  }

  Object.defineProperty(window, 'PRODUCTS', {
    get: function(){ return JSON.parse(localStorage.getItem('ks_products')||'[]'); },
    set: function(v){ localStorage.setItem('ks_products', JSON.stringify(v)); }
  });
})();
