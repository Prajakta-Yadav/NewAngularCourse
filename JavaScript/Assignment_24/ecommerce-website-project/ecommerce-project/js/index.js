(async function () {
  EcommerceApp.initCommon();

  const featuredContainer = document.getElementById('featuredProducts');
  const notices = document.getElementById('noticeBoard');
  const loginForm = document.getElementById('loginForm');

  const noticeItems = [
    'Mega sale starts this weekend with up to 50% off.',
    'Free shipping available on orders above ₹999.',
    'New electronics collection has just arrived.',
    'Register now and get exclusive early-access deals.'
  ];

  if (notices) {
    notices.innerHTML = noticeItems.map(item => `<li class="list-group-item">${item}</li>`).join('');
  }

  if (featuredContainer) {
    const products = await ProductService.fetchProducts();
    const featured = products.slice(0, 6);
    featuredContainer.innerHTML = featured.map(ProductService.createProductCard).join('');

    featuredContainer.addEventListener('click', event => {
      const button = event.target.closest('[data-add-id]');
      if (!button) return;
      const product = products.find(item => String(item.id) === button.dataset.addId);
      if (product) EcommerceApp.addToCart(product);
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', event => {
      event.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();
      const error = document.getElementById('loginError');
      error.textContent = '';

      if (!EcommerceApp.validateEmail(email)) {
        error.textContent = 'Enter a valid email address.';
        return;
      }
      if (password.length < 6) {
        error.textContent = 'Password must be at least 6 characters long.';
        return;
      }
      localStorage.setItem(EcommerceApp.STORAGE_KEYS.USER, JSON.stringify({ email }));
      bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
      EcommerceApp.showToast('Login successful');
      loginForm.reset();
    });
  }
})();
