(function () {
  EcommerceApp.initCommon();

  const cart = EcommerceApp.getCart();
  const form = document.getElementById('paymentForm');
  const emptyState = document.getElementById('emptyPaymentCart');
  const paymentItems = document.getElementById('paymentItems');
  const paymentTotal = document.getElementById('paymentTotal');
  const successModalEl = document.getElementById('paymentSuccessModal');

  function renderOrderSummary() {
    if (!cart.length) {
      emptyState.classList.remove('d-none');
      form.classList.add('d-none');
      paymentItems.innerHTML = '';
      paymentTotal.textContent = '₹0.00';
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.quantity * Number(item.price), 0);
    paymentItems.innerHTML = cart.map(item => `
      <div class="d-flex justify-content-between gap-2 py-2 border-bottom small">
        <span>${item.title} × ${item.quantity}</span>
        <strong>₹${(item.quantity * Number(item.price)).toFixed(2)}</strong>
      </div>
    `).join('');
    paymentTotal.textContent = `₹${total.toFixed(2)}`;
  }

  function validatePaymentForm() {
    const nameInput = document.getElementById('customerName');
    const emailInput = document.getElementById('customerEmail');
    let isValid = true;

    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');

    if (!nameInput.value.trim()) {
      nameInput.classList.add('is-invalid');
      isValid = false;
    }

    if (!EcommerceApp.validateEmail(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    }

    return isValid;
  }

  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!cart.length) return;

    if (!validatePaymentForm()) {
      EcommerceApp.showToast('Please complete the payment form');
      return;
    }

    const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'UPI';
    const customerName = document.getElementById('customerName').value.trim();

    EcommerceApp.saveCart([]);
    EcommerceApp.showToast(`Payment successful with ${selectedMethod}`);

    const modal = bootstrap.Modal.getOrCreateInstance(successModalEl);
    successModalEl.querySelector('.text-secondary').textContent = `Thank you, ${customerName}. Payment successful with ${selectedMethod}. Visit again!`;
    modal.show();
  });

  renderOrderSummary();
})();
