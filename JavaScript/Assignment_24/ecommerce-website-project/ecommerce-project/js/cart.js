(function () {
  EcommerceApp.initCommon();

  const cartTable = document.getElementById('cartTableBody');
  const emptyState = document.getElementById('emptyCart');
  const subtotalEl = document.getElementById('subtotal');
  const totalEl = document.getElementById('total');
  const buyItemsBtn = document.getElementById('buyItemsBtn');

  function renderCart() {
    const cart = EcommerceApp.getCart();
    if (!cart.length) {
      emptyState.classList.remove('d-none');
      cartTable.innerHTML = '';
      subtotalEl.textContent = '₹0.00';
      totalEl.textContent = '₹0.00';
      if (buyItemsBtn) buyItemsBtn.disabled = true;
      return;
    }

    emptyState.classList.add('d-none');
    if (buyItemsBtn) buyItemsBtn.disabled = false;
    cartTable.innerHTML = cart.map(item => `
      <tr>
        <td><img src="${item.image}" alt="${item.title}" class="cart-item-img"></td>
        <td>${item.title}</td>
        <td>₹${Number(item.price).toFixed(2)}</td>
        <td>
          <div class="input-group input-group-sm" style="max-width: 130px;">
            <button class="btn btn-outline-secondary" data-action="decrease" data-id="${item.id}">-</button>
            <input type="text" class="form-control text-center" value="${item.quantity}" readonly>
            <button class="btn btn-outline-secondary" data-action="increase" data-id="${item.id}">+</button>
          </div>
        </td>
        <td>₹${(item.quantity * Number(item.price)).toFixed(2)}</td>
        <td><button class="btn btn-sm btn-outline-danger" data-action="remove" data-id="${item.id}">Remove</button></td>
      </tr>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.quantity * Number(item.price), 0);
    subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    totalEl.textContent = `₹${subtotal.toFixed(2)}`;
  }

  document.getElementById('cartTableBody')?.addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;

    const cart = EcommerceApp.getCart();
    const item = cart.find(entry => String(entry.id) === button.dataset.id);
    if (!item) return;

    if (button.dataset.action === 'increase') item.quantity += 1;
    if (button.dataset.action === 'decrease') item.quantity = Math.max(1, item.quantity - 1);
    if (button.dataset.action === 'remove') {
      const updated = cart.filter(entry => String(entry.id) !== button.dataset.id);
      EcommerceApp.saveCart(updated);
      renderCart();
      return;
    }

    EcommerceApp.saveCart(cart);
    renderCart();
  });

  document.getElementById('clearCartBtn')?.addEventListener('click', () => {
    EcommerceApp.saveCart([]);
    renderCart();
    EcommerceApp.showToast('Cart cleared');
  });

  buyItemsBtn?.addEventListener('click', () => {
    if (!EcommerceApp.getCart().length) {
      EcommerceApp.showToast('Your cart is empty');
      return;
    }
    window.location.href = 'payment.html';
  });

  renderCart();
})();
