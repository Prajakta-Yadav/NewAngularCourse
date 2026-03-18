const API_URL = "https://fakestoreapi.com/products";

const loginSection = document.getElementById("loginSection");
const shopSection = document.getElementById("shopSection");
const welcomeText = document.getElementById("welcomeText");
const logoutBtn = document.getElementById("logoutBtn");

const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginEmailError = document.getElementById("loginEmailError");
const loginPasswordError = document.getElementById("loginPasswordError");

const searchInput = document.getElementById("searchInput");
const refreshBtn = document.getElementById("refreshBtn");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("errorBox");
const productList = document.getElementById("productList");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const checkoutForm = document.getElementById("checkoutForm");
const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const address = document.getElementById("address");

const fullNameError = document.getElementById("fullNameError");
const phoneError = document.getElementById("phoneError");
const addressError = document.getElementById("addressError");

const successModal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModalBtn");

let products = [];
let filteredProducts = [];
let cart = JSON.parse(localStorage.getItem("megaCart")) || [];
let currentUser = JSON.parse(localStorage.getItem("megaUser")) || null;

function setError(input, errorElement, message) {
  input.classList.add("invalid");
  errorElement.textContent = message;
}

function clearError(input, errorElement) {
  input.classList.remove("invalid");
  errorElement.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateLogin() {
  let isValid = true;

  if (loginEmail.value.trim() === "") {
    setError(loginEmail, loginEmailError, "Email is required.");
    isValid = false;
  } else if (!isValidEmail(loginEmail.value.trim())) {
    setError(loginEmail, loginEmailError, "Enter a valid email.");
    isValid = false;
  } else {
    clearError(loginEmail, loginEmailError);
  }

  if (loginPassword.value.trim() === "") {
    setError(loginPassword, loginPasswordError, "Password is required.");
    isValid = false;
  } else if (loginPassword.value.trim().length < 6) {
    setError(loginPassword, loginPasswordError, "Password must be at least 6 characters.");
    isValid = false;
  } else {
    clearError(loginPassword, loginPasswordError);
  }

  return isValid;
}

function validateCheckout() {
  let isValid = true;

  if (fullName.value.trim() === "") {
    setError(fullName, fullNameError, "Full name is required.");
    isValid = false;
  } else {
    clearError(fullName, fullNameError);
  }

  if (phone.value.trim() === "") {
    setError(phone, phoneError, "Phone is required.");
    isValid = false;
  } else if (!/^\d{10,15}$/.test(phone.value.trim())) {
    setError(phone, phoneError, "Enter valid phone number.");
    isValid = false;
  } else {
    clearError(phone, phoneError);
  }

  if (address.value.trim() === "") {
    setError(address, addressError, "Address is required.");
    isValid = false;
  } else {
    clearError(address, addressError);
  }

  if (cart.length === 0) {
    alert("Your cart is empty.");
    isValid = false;
  }

  return isValid;
}

function saveCart() {
  localStorage.setItem("megaCart", JSON.stringify(cart));
}

function saveUser() {
  localStorage.setItem("megaUser", JSON.stringify(currentUser));
}

function updateAuthUI() {
  if (currentUser) {
    loginSection.classList.add("hidden");
    shopSection.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");
    welcomeText.textContent = `Welcome, ${currentUser.email}`;
  } else {
    loginSection.classList.remove("hidden");
    shopSection.classList.add("hidden");
    logoutBtn.classList.add("hidden");
    welcomeText.textContent = "Not logged in";
  }
}

function showLoading() {
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");
}

function hideError() {
  errorBox.textContent = "";
  errorBox.classList.add("hidden");
}

async function fetchProducts() {
  showLoading();
  hideError();
  productList.innerHTML = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    products = data;
    filteredProducts = [...products];
    renderProducts(filteredProducts);
  } catch (error) {
    showError("Unable to load products. Check your internet connection.");
    console.error(error);
  } finally {
    hideLoading();
  }
}

function renderProducts(productArray) {
  productList.innerHTML = "";

  if (productArray.length === 0) {
    productList.innerHTML = `<div class="no-products">No products found.</div>`;
    return;
  }

  productArray.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-image">
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <button class="primary-btn add-btn" data-id="${product.id}">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="empty-cart">Your cart is empty.</div>`;
  } else {
    cart.forEach((item) => {
      const div = document.createElement("div");
      div.className = "cart-item";

      div.innerHTML = `
        <h4>${item.title}</h4>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
        <div class="cart-controls">
          <div class="qty-box">
            <button class="qty-btn decrement-btn" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn increment-btn" data-id="${item.id}">+</button>
          </div>
          <button class="remove-btn" data-id="${item.id}">Remove</button>
        </div>
      `;

      cartItems.appendChild(div);
    });
  }

  updateCartSummary();
  saveCart();
}

function updateCartSummary() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = totalPrice.toFixed(2);
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function incrementQuantity(productId) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  item.quantity += 1;
  renderCart();
}

function decrementQuantity(productId) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.id !== productId);
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

function filterProducts() {
  const searchValue = searchInput.value.trim().toLowerCase();

  filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue)
  );

  renderProducts(filteredProducts);
}

function saveOrder() {
  const existingOrders = JSON.parse(localStorage.getItem("megaOrders")) || [];

  const order = {
    id: Date.now(),
    user: currentUser,
    customerName: fullName.value.trim(),
    phone: phone.value.trim(),
    address: address.value.trim(),
    items: cart,
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    createdAt: new Date().toLocaleString()
  };

  existingOrders.push(order);
  localStorage.setItem("megaOrders", JSON.stringify(existingOrders));
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validateLogin()) return;

  currentUser = {
    email: loginEmail.value.trim()
  };

  saveUser();
  updateAuthUI();
  fetchProducts();
});

logoutBtn.addEventListener("click", function () {
  currentUser = null;
  localStorage.removeItem("megaUser");
  updateAuthUI();
});

searchInput.addEventListener("input", filterProducts);
refreshBtn.addEventListener("click", fetchProducts);

productList.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-btn")) {
    const productId = Number(event.target.dataset.id);
    addToCart(productId);
  }
});

cartItems.addEventListener("click", function (event) {
  const productId = Number(event.target.dataset.id);

  if (event.target.classList.contains("increment-btn")) {
    incrementQuantity(productId);
  }

  if (event.target.classList.contains("decrement-btn")) {
    decrementQuantity(productId);
  }

  if (event.target.classList.contains("remove-btn")) {
    removeFromCart(productId);
  }
});

checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validateCheckout()) return;

  saveOrder();
  cart = [];
  renderCart();
  checkoutForm.reset();
  successModal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", function () {
  successModal.classList.add("hidden");
});

window.addEventListener("click", function (event) {
  if (event.target === successModal) {
    successModal.classList.add("hidden");
  }
});

updateAuthUI();
renderCart();

if (currentUser) {
  fetchProducts();
}