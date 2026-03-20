const API_URL = "https://fakestoreapi.com/products";
let allProducts = [];

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateNavCartCount();
}

function updateNavCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("#navCartCount").forEach(el => el.textContent = count);
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  showToast();
}

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
  renderCartPage();
}

function changeQuantity(id, amount) {
  const cart = getCart();
  const item = cart.find(p => p.id === id);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    const updated = cart.filter(p => p.id !== id);
    saveCart(updated);
  } else {
    saveCart(cart);
  }
  renderCartPage();
}

function showToast() {
  const toastEl = document.getElementById("cartToast");
  if (!toastEl) return;
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

async function fetchProducts() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch products");
  return await response.json();
}

function createProductCard(product) {
  return `
    <div class="col-md-6 col-lg-4">
      <div class="card product-card shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>
          <p class="text-muted small text-capitalize">${product.category}</p>
          <p class="fw-bold fs-5">$${product.price.toFixed(2)}</p>
          <div class="mt-auto d-flex gap-2">
            <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary w-50">Details</a>
            <button class="btn btn-primary w-50 add-cart-btn" data-id="${product.id}">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

async function loadFeaturedProducts() {
  const loading = document.getElementById("homeLoading");
  const container = document.getElementById("homeFeaturedProducts");
  if (!container) return;

  loading.classList.remove("d-none");

  try {
    const products = await fetchProducts();
    allProducts = products;
    container.innerHTML = products.slice(0, 6).map(createProductCard).join("");
    attachAddToCartEvents();
  } catch (error) {
    container.innerHTML = `<div class="col-12"><div class="alert alert-danger">Unable to load products.</div></div>`;
  } finally {
    loading.classList.add("d-none");
  }
}

async function initProductsPage() {
  const loading = document.getElementById("productsLoading");
  const errorBox = document.getElementById("productsError");
  const list = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const categoryFilter = document.getElementById("categoryFilter");

  if (!list) return;

  try {
    const params = new URLSearchParams(window.location.search);
    const categoryFromUrl = params.get("category");

    allProducts = await fetchProducts();
    if (categoryFromUrl) categoryFilter.value = categoryFromUrl;

    renderFilteredProducts();

    searchInput.addEventListener("input", renderFilteredProducts);
    sortSelect.addEventListener("change", renderFilteredProducts);
    categoryFilter.addEventListener("change", renderFilteredProducts);

    function renderFilteredProducts() {
      let products = [...allProducts];
      const search = searchInput.value.trim().toLowerCase();
      const sort = sortSelect.value;
      const category = categoryFilter.value;

      if (search) {
        products = products.filter(p => p.title.toLowerCase().includes(search));
      }

      if (category !== "all") {
        products = products.filter(p => p.category === category);
      }

      if (sort === "low-high") {
        products.sort((a, b) => a.price - b.price);
      } else if (sort === "high-low") {
        products.sort((a, b) => b.price - a.price);
      }

      list.innerHTML = products.map(createProductCard).join("");
      attachAddToCartEvents();
    }
  } catch (error) {
    errorBox.textContent = "Unable to load products. Please try again.";
    errorBox.classList.remove("d-none");
  } finally {
    loading.style.display = "none";
  }
}

async function initProductDetailPage() {
  const container = document.getElementById("productDetail");
  const loading = document.getElementById("detailLoading");
  const errorBox = document.getElementById("detailError");
  if (!container) return;

  try {
    const id = new URLSearchParams(window.location.search).get("id");
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Failed");
    const product = await response.json();

    container.innerHTML = `
      <div class="col-md-6">
        <img src="${product.image}" alt="${product.title}" class="product-detail-image shadow-sm">
      </div>
      <div class="col-md-6">
        <h2>${product.title}</h2>
        <p class="text-muted text-capitalize">${product.category}</p>
        <h3 class="text-primary mb-3">$${product.price.toFixed(2)}</h3>
        <p>${product.description}</p>
        <p><strong>Rating:</strong> ${product.rating?.rate ?? "N/A"} / 5</p>
        <button id="detailAddBtn" class="btn btn-primary mt-3">Add to Cart</button>
      </div>
    `;

    document.getElementById("detailAddBtn").addEventListener("click", () => addToCart(product));
  } catch (error) {
    errorBox.textContent = "Unable to load product details.";
    errorBox.classList.remove("d-none");
  } finally {
    loading.style.display = "none";
  }
}

function renderCartPage() {
  const cartItemsEl = document.getElementById("cartItems");
  const cartCountEl = document.getElementById("cartCountPage");
  const cartTotalEl = document.getElementById("cartTotalPage");
  if (!cartItemsEl) return;

  const cart = getCart();

  if (!cart.length) {
    cartItemsEl.innerHTML = `<div class="alert alert-info">Your cart is empty.</div>`;
    cartCountEl.textContent = "0";
    cartTotalEl.textContent = "0.00";
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="card shadow-sm mb-3">
      <div class="card-body d-flex gap-3 align-items-center">
        <img src="${item.image}" class="cart-item-img" alt="${item.title}">
        <div class="flex-grow-1">
          <h6>${item.title}</h6>
          <p class="mb-1">$${item.price.toFixed(2)}</p>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-sm btn-outline-secondary qty-btn" data-id="${item.id}" data-change="-1">-</button>
            <span>${item.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary qty-btn" data-id="${item.id}" data-change="1">+</button>
          </div>
        </div>
        <button class="btn btn-danger btn-sm remove-btn" data-id="${item.id}">Remove</button>
      </div>
    </div>
  `).join("");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  cartCountEl.textContent = totalItems;
  cartTotalEl.textContent = totalPrice.toFixed(2);

  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.id)));
  });

  document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      changeQuantity(Number(btn.dataset.id), Number(btn.dataset.change));
    });
  });
}

function attachAddToCartEvents() {
  document.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const product = allProducts.find(p => p.id === id);
      if (product) addToCart(product);
    });
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initAuthPage() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  loginForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const emailError = document.getElementById("loginEmailError");
    const passwordError = document.getElementById("loginPasswordError");
    let valid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!validateEmail(email.value.trim())) {
      emailError.textContent = "Enter a valid email.";
      valid = false;
    }

    if (password.value.trim().length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      valid = false;
    }

    if (valid) {
      alert("Login successful");
      loginForm.reset();
    }
  });

  registerForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("registerName");
    const email = document.getElementById("registerEmail");
    const password = document.getElementById("registerPassword");

    const nameError = document.getElementById("registerNameError");
    const emailError = document.getElementById("registerEmailError");
    const passwordError = document.getElementById("registerPasswordError");

    let valid = true;
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (name.value.trim().length < 3) {
      nameError.textContent = "Name must be at least 3 characters.";
      valid = false;
    }
    if (!validateEmail(email.value.trim())) {
      emailError.textContent = "Enter a valid email.";
      valid = false;
    }
    if (password.value.trim().length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      valid = false;
    }

    if (valid) {
      alert("Registration successful");
      registerForm.reset();
    }
  });
}

function initModalLogin() {
  const form = document.getElementById("modalLoginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("modalLoginEmail");
    const password = document.getElementById("modalLoginPassword");
    const emailError = document.getElementById("modalLoginEmailError");
    const passwordError = document.getElementById("modalLoginPasswordError");

    let valid = true;
    emailError.textContent = "";
    passwordError.textContent = "";

    if (!validateEmail(email.value.trim())) {
      emailError.textContent = "Enter a valid email.";
      valid = false;
    }
    if (password.value.trim().length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      valid = false;
    }

    if (valid) {
      const modal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
      modal.hide();
      alert("Login successful");
      form.reset();
    }
  });
}

function initContactPage() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");

    const nameError = document.getElementById("contactNameError");
    const emailError = document.getElementById("contactEmailError");
    const messageError = document.getElementById("contactMessageError");
    const success = document.getElementById("contactSuccess");

    let valid = true;
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    success.classList.add("d-none");

    if (name.value.trim().length < 3) {
      nameError.textContent = "Name is required.";
      valid = false;
    }
    if (!validateEmail(email.value.trim())) {
      emailError.textContent = "Enter a valid email.";
      valid = false;
    }
    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      success.classList.remove("d-none");
      form.reset();
    }
  });
}

function initTheme() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", savedTheme);

  document.querySelectorAll("#themeToggle").forEach(btn => {
    btn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      document.querySelectorAll("#themeToggle").forEach(b => {
        b.textContent = next === "dark" ? "☀️" : "🌙";
      });
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 250 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavCartCount();
  initTheme();
  initBackToTop();
  initModalLogin();
});