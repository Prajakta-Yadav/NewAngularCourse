(() => {
  const API_URL = 'https://fakestoreapi.com/products';
  const CART_KEY = 'product_dashboard_cart';
  const THEME_KEY = 'product_dashboard_theme';

  const state = {
    products: [],
    filteredProducts: [],
    cart: loadCart(),
    theme: localStorage.getItem(THEME_KEY) || 'light'
  };

  const elements = {
    productGrid: document.getElementById('productGrid'),
    loadingState: document.getElementById('loadingState'),
    errorState: document.getElementById('errorState'),
    emptyState: document.getElementById('emptyState'),
    retryButton: document.getElementById('retryButton'),
    searchInput: document.getElementById('searchInput'),
    sortSelect: document.getElementById('sortSelect'),
    categorySelect: document.getElementById('categorySelect'),
    inStockOnly: document.getElementById('inStockOnly'),
    resetFilters: document.getElementById('resetFilters'),
    cartToggle: document.getElementById('cartToggle'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartItems: document.getElementById('cartItems'),
    cartCount: document.getElementById('cartCount'),
    drawerTotal: document.getElementById('drawerTotal'),
    cartTotal: document.getElementById('cartTotal'),
    clearCart: document.getElementById('clearCart'),
    closeCart: document.getElementById('closeCart'),
    overlay: document.getElementById('overlay'),
    productCount: document.getElementById('productCount'),
    productModal: document.getElementById('productModal'),
    modalContent: document.getElementById('modalContent'),
    closeModal: document.getElementById('closeModal'),
    themeToggle: document.getElementById('themeToggle'),
    noticeBoard: document.getElementById('noticeBoard'),
    template: document.getElementById('productCardTemplate')
  };

  const notices = [
    { title: 'Sale Watch', text: 'Trending products refresh automatically after every API fetch.' },
    { title: 'Cart Memory', text: 'Your cart stays saved in local storage even after refresh.' },
    { title: 'Smart Search', text: 'Filter by title, category, and description using one search box.' }
  ];

  function init() {
    applyTheme(state.theme);
    renderNotices();
    bindEvents();
    renderCart();
    fetchProducts();
  }

  function bindEvents() {
    [elements.searchInput, elements.sortSelect, elements.categorySelect, elements.inStockOnly].forEach(el => {
      el.addEventListener('input', applyFilters);
      el.addEventListener('change', applyFilters);
    });

    elements.resetFilters.addEventListener('click', resetFilters);
    elements.retryButton.addEventListener('click', fetchProducts);
    elements.cartToggle.addEventListener('click', openCart);
    elements.closeCart.addEventListener('click', closeCart);
    elements.overlay.addEventListener('click', closeCart);
    elements.clearCart.addEventListener('click', clearCart);
    elements.closeModal.addEventListener('click', () => elements.productModal.close());
    elements.themeToggle.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  async function fetchProducts() {
    showState('loading');
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const products = await response.json();
      state.products = products;
      fillCategories(products);
      applyFilters();
    } catch (error) {
      console.error('API error:', error.message);
      showState('error');
      elements.errorState.querySelector('p').textContent = `Unable to fetch products. ${error.message}`;
      elements.retryButton.classList.remove('hidden');
    }
  }

  function fillCategories(products) {
    const categories = [...new Set(products.map(product => product.category))];
    const currentValue = elements.categorySelect.value;
    elements.categorySelect.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      elements.categorySelect.appendChild(option);
    });
    if ([...elements.categorySelect.options].some(option => option.value === currentValue)) {
      elements.categorySelect.value = currentValue;
    }
  }

  function applyFilters() {
    const searchTerm = elements.searchInput.value.trim().toLowerCase();
    const sortValue = elements.sortSelect.value;
    const categoryValue = elements.categorySelect.value;
    const inStockOnly = elements.inStockOnly.checked;

    let products = [...state.products].filter(product => {
      const matchesSearch = `${product.title} ${product.description} ${product.category}`.toLowerCase().includes(searchTerm);
      const matchesCategory = categoryValue === 'all' || product.category === categoryValue;
      const matchesStock = !inStockOnly || (product.rating && product.rating.rate >= 4);
      return matchesSearch && matchesCategory && matchesStock;
    });

    products.sort((a, b) => {
      switch (sortValue) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'title-asc': return a.title.localeCompare(b.title);
        case 'title-desc': return b.title.localeCompare(a.title);
        case 'rating-desc': return (b.rating?.rate || 0) - (a.rating?.rate || 0);
        default: return 0;
      }
    });

    state.filteredProducts = products;
    renderProducts(products);
  }

  function renderProducts(products) {
    elements.productGrid.innerHTML = '';
    elements.productCount.textContent = products.length;
    if (!state.products.length) {
      showState('loading');
      return;
    }
    if (!products.length) {
      showState('empty');
      return;
    }

    const fragment = document.createDocumentFragment();
    products.forEach(product => {
      const card = elements.template.content.firstElementChild.cloneNode(true);
      card.querySelector('.product-image').src = product.image;
      card.querySelector('.product-image').alt = product.title;
      card.querySelector('.product-category').textContent = product.category;
      card.querySelector('.product-title').textContent = product.title;
      card.querySelector('.product-description').textContent = product.description;
      card.querySelector('.product-price').textContent = formatPrice(product.price);
      card.querySelector('.product-rating').textContent = `⭐ ${product.rating?.rate ?? 'N/A'}`;
      card.querySelector('.add-btn').addEventListener('click', () => addToCart(product));
      card.querySelector('.details-btn').addEventListener('click', () => openModal(product));
      fragment.appendChild(card);
    });

    elements.productGrid.appendChild(fragment);
    showState('grid');
  }

  function addToCart(product) {
    const existing = state.cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 });
    }
    saveCart();
    renderCart();
    openCart();
  }

  function renderCart() {
    elements.cartItems.innerHTML = '';
    if (!state.cart.length) {
      elements.cartItems.innerHTML = '<p class="state-card">Your cart is empty.</p>';
    } else {
      const fragment = document.createDocumentFragment();
      state.cart.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.className = 'cart-item';
        wrapper.innerHTML = `
          <div class="cart-row">
            <div>
              <h4>${escapeHtml(item.title)}</h4>
              <p>${formatPrice(item.price)} each</p>
            </div>
            <button class="ghost-btn remove-btn">Remove</button>
          </div>
          <div class="cart-row" style="margin-top:.7rem;">
            <div class="qty-controls">
              <button class="qty-btn minus-btn">−</button>
              <strong>${item.quantity}</strong>
              <button class="qty-btn plus-btn">+</button>
            </div>
            <strong>${formatPrice(item.price * item.quantity)}</strong>
          </div>
        `;
        wrapper.querySelector('.remove-btn').addEventListener('click', () => removeFromCart(item.id));
        wrapper.querySelector('.minus-btn').addEventListener('click', () => updateQuantity(item.id, -1));
        wrapper.querySelector('.plus-btn').addEventListener('click', () => updateQuantity(item.id, 1));
        fragment.appendChild(wrapper);
      });
      elements.cartItems.appendChild(fragment);
    }

    const count = state.cart.reduce((total, item) => total + item.quantity, 0);
    const total = state.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    elements.cartCount.textContent = count;
    elements.drawerTotal.textContent = formatPrice(total);
    elements.cartTotal.textContent = formatPrice(total);
  }

  function updateQuantity(productId, change) {
    const item = state.cart.find(cartItem => cartItem.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(cartItem => cartItem.id !== productId);
    }
    saveCart();
    renderCart();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
  }

  function clearCart() {
    state.cart = [];
    saveCart();
    renderCart();
  }

  function openCart() {
    elements.cartDrawer.classList.add('open');
    elements.cartDrawer.setAttribute('aria-hidden', 'false');
    elements.overlay.classList.remove('hidden');
  }

  function closeCart() {
    elements.cartDrawer.classList.remove('open');
    elements.cartDrawer.setAttribute('aria-hidden', 'true');
    elements.overlay.classList.add('hidden');
  }

  function openModal(product) {
    elements.modalContent.innerHTML = `
      <div class="modal-layout">
        <img src="${product.image}" alt="${escapeHtml(product.title)}">
        <div>
          <p class="eyebrow">${escapeHtml(product.category)}</p>
          <h2>${escapeHtml(product.title)}</h2>
          <p>${escapeHtml(product.description)}</p>
          <div class="modal-meta">
            <strong>${formatPrice(product.price)}</strong>
            <span>⭐ ${product.rating?.rate ?? 'N/A'} (${product.rating?.count ?? 0} reviews)</span>
          </div>
          <button class="primary-btn" id="modalAddButton" style="margin-top:1rem;">Add to Cart</button>
        </div>
      </div>
    `;
    elements.productModal.showModal();
    document.getElementById('modalAddButton').addEventListener('click', () => {
      addToCart(product);
      elements.productModal.close();
    });
  }

  function renderNotices() {
    elements.noticeBoard.innerHTML = notices.map(notice => `
      <article class="notice-item">
        <h3>${notice.title}</h3>
        <p>${notice.text}</p>
      </article>
    `).join('');
  }

  function showState(type) {
    elements.loadingState.classList.toggle('hidden', type !== 'loading');
    elements.errorState.classList.toggle('hidden', type !== 'error');
    elements.emptyState.classList.toggle('hidden', type !== 'empty');
    elements.productGrid.classList.toggle('hidden', type !== 'grid');
    elements.retryButton.classList.toggle('hidden', type !== 'error');
  }

  function resetFilters() {
    elements.searchInput.value = '';
    elements.sortSelect.value = 'default';
    elements.categorySelect.value = 'all';
    elements.inStockOnly.checked = false;
    applyFilters();
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    state.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
    elements.themeToggle.textContent = theme === 'dark' ? '☀️ Theme' : '🌙 Theme';
  }

  function loadCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
  }

  function formatPrice(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  init();
})();
