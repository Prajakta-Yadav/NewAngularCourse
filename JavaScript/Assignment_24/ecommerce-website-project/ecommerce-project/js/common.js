(function () {
  const STORAGE_KEYS = {
    CART: 'ecommerce_cart_v1',
    THEME: 'ecommerce_theme_v1',
    USER: 'ecommerce_user_v1'
  };

  function getCart() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || '[]');
  }

  function saveCart(cart) {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    updateCartCount();
  }

  function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: Number(product.price),
        image: product.image,
        quantity
      });
    }
    saveCart(cart);
    showToast(`${product.title} added to cart`);
  }

  function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = count;
    });
  }

  function toggleTheme(forceTheme) {
    const body = document.body;
    const nextTheme = forceTheme || (body.classList.contains('dark-mode') ? 'light' : 'dark');
    body.classList.toggle('dark-mode', nextTheme === 'dark');
    localStorage.setItem(STORAGE_KEYS.THEME, nextTheme);
    document.querySelectorAll('[data-theme-label]').forEach(el => {
      el.textContent = nextTheme === 'dark' ? 'Light mode' : 'Dark mode';
    });
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    toggleTheme(savedTheme);
  }

  function showToast(message) {
    const toastEl = document.getElementById('appToast');
    if (!toastEl) return;
    toastEl.querySelector('.toast-body').textContent = message;
    const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
    toast.show();
  }

  function setLoading(isLoading) {
    const loader = document.getElementById('loadingOverlay');
    if (!loader) return;
    loader.classList.toggle('d-none', !isLoading);
  }

  function renderStars(rate = 0) {
    const fullStars = Math.round(rate);
    return '★'.repeat(fullStars) + '☆'.repeat(Math.max(0, 5 - fullStars));
  }

  function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('show', window.scrollY > 250);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function setupSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (targetId.length > 1) {
          const target = document.querySelector(targetId);
          if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function initCommon() {
    initTheme();
    updateCartCount();
    setupBackToTop();
    setupSmoothLinks();

    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', () => toggleTheme());
    });

    document.querySelectorAll('[data-year]').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  window.EcommerceApp = {
    STORAGE_KEYS,
    getCart,
    saveCart,
    addToCart,
    updateCartCount,
    toggleTheme,
    showToast,
    setLoading,
    renderStars,
    validateEmail,
    initCommon
  };
})();
