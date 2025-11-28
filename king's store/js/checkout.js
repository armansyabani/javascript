// checkout.js
window.Checkout = (function(){
  const cartArea = document.getElementById('cartArea');

  function renderCart(){
    const cart = JSON.parse(localStorage.getItem('ks_cart') || '[]');
    if(cart.length===0){
      cartArea.innerHTML = '<div class="card">Keranjang kosong.</div>';
      return;
    }
    let html = '<div class="card"><h3>Keranjang Anda</h3><div>';
    let total = 0;
    cart.forEach((c,idx)=>{
      const p = window.PRODUCTS.find(x=> x.id===c.id) || {};
      const line = (c.price||0) * (c.qty||1);
      total += line;
      html += `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px dashed rgba(255,255,255,0.03);">
          <div>
            <div style="font-weight:700">${c.name}</div>
            <div class="muted">Rp ${Number(c.price).toLocaleString()} x ${c.qty}</div>
          </div>
          <div>
            <button class="btn" onclick="Checkout.dec(${idx})">-</button>
            <button class="btn" onclick="Checkout.inc(${idx})">+</button>
            <button class="btn" onclick="Checkout.remove(${idx})">Hapus</button>
          </div>
        </div>
      `;
    });
    html += `</div>
      <div style="margin-top:14px;font-weight:800">Total: Rp ${Number(total).toLocaleString()}</div>
    </div>`;
    cartArea.innerHTML = html;
  }

  function inc(i){
    const cart = JSON.parse(localStorage.getItem('ks_cart')||'[]');
    if(!cart[i]) return;
    cart[i].qty = (cart[i].qty||1) + 1;
    localStorage.setItem('ks_cart', JSON.stringify(cart));
    renderCart(); window.parent && window.parent.updateCartCount && window.parent.updateCartCount();
  }
  function dec(i){
    const cart = JSON.parse(localStorage.getItem('ks_cart')||'[]');
    if(!cart[i]) return;
    cart[i].qty = Math.max(1, (cart[i].qty||1) - 1);
    localStorage.setItem('ks_cart', JSON.stringify(cart));
    renderCart(); window.parent && window.parent.updateCartCount && window.parent.updateCartCount();
  }
  function remove(i){
    const cart = JSON.parse(localStorage.getItem('ks_cart')||'[]');
    cart.splice(i,1);
    localStorage.setItem('ks_cart', JSON.stringify(cart));
    renderCart(); window.parent && window.parent.updateCartCount && window.parent.updateCartCount();
  }

  function clearCart(){
    if(!confirm('Bersihkan seluruh keranjang?')) return;
    localStorage.removeItem('ks_cart');
    renderCart();
    window.parent && window.parent.updateCartCount && window.parent.updateCartCount();
  }

  function placeOrder(){
    const name = document.getElementById('cust_name').value.trim();
    const phone = document.getElementById('cust_phone').value.trim();
    if(!name || !phone) return alert('Isi nama & no. telepon!');
    const cart = JSON.parse(localStorage.getItem('ks_cart')||'[]');
    if(cart.length===0) return alert('Keranjang kosong');
    const orders = JSON.parse(localStorage.getItem('ks_orders')||'[]');
    const total = cart.reduce((s,i)=> s + (i.price * (i.qty||1)), 0);
    const order = {
      id: 'ORD' + Date.now(),
      buyer: { name, phone, note: document.getElementById('cust_note').value || '' },
      items: cart,
      total,
      status: 'pending',
      createdAt: Date.now()
    };
    orders.push(order);
    localStorage.setItem('ks_orders', JSON.stringify(orders));
    localStorage.removeItem('ks_cart');
    alert('Pesanan dibuat! ID: ' + order.id + '\nSilakan lakukan pembayaran sesuai instruksi (simulasi).');
    renderCart();
    window.parent && window.parent.updateCartCount && window.parent.updateCartCount();
  }

  document.addEventListener('DOMContentLoaded', renderCart);

  return { renderCart, inc, dec, remove, placeOrder, clearCart };
})();
