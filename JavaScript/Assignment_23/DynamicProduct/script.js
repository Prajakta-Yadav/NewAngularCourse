const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1518441902111-a7d7d4aaf1f9?w=400"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    category: "Wearable",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 45.5,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587202372775-989a4e0b7c47?w=400"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 59.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400"
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 39.99,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1585386959984-b9f7d2d1d3f1?w=400"
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 99.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
  }
];

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const footerCartCount = document.getElementById("footerCartCount");
const footerCartTotal = document.getElementById("footerCartTotal");

const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const sortPrice = document.getElementById("sortPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let filteredProducts = [...products];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
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
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <button class="add-btn" data-id="${product.id}">Add to Cart</button>
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
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      cartItem.innerHTML = `
        <h4>${item.name}</h4>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
        <div class="cart-controls">
          <div class="qty-box">
            <button class="qty-btn decrement-btn" data-id="${item.id}">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn increment-btn" data-id="${item.id}">+</button>
          </div>
          <button class="remove-btn" data-id="${item.id}">Remove</button>
        </div>
      `;

      cartItems.appendChild(cartItem);
    });
  }

  updateCartSummary();
  saveCart();
}

function updateCartSummary() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  footerCartCount.textContent = totalItems;
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  footerCartTotal.textContent = `$${totalPrice.toFixed(2)}`;
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

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

function incrementQuantity(productId) {
  const item = cart.find((product) => product.id === productId);
  if (!item) return;

  item.quantity += 1;
  renderCart();
}

function decrementQuantity(productId) {
  const item = cart.find((product) => product.id === productId);
  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    renderCart();
  }
}

function applyFiltersAndSort() {
  const searchValue = searchInput.value.trim().toLowerCase();
  const filterValue = priceFilter.value;
  const sortValue = sortPrice.value;

  filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue);

    let matchesPrice = true;

    if (filterValue !== "all") {
      const [min, max] = filterValue.split("-").map(Number);
      matchesPrice = product.price >= min && product.price <= max;
    }

    return matchesSearch && matchesPrice;
  });

  if (sortValue === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  renderProducts(filteredProducts);
}

productList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-btn")) {
    const productId = Number(event.target.dataset.id);
    addToCart(productId);
  }
});

cartItems.addEventListener("click", (event) => {
  const productId = Number(event.target.dataset.id);

  if (event.target.classList.contains("remove-btn")) {
    removeFromCart(productId);
  }

  if (event.target.classList.contains("increment-btn")) {
    incrementQuantity(productId);
  }

  if (event.target.classList.contains("decrement-btn")) {
    decrementQuantity(productId);
  }
});

searchInput.addEventListener("input", applyFiltersAndSort);
priceFilter.addEventListener("change", applyFiltersAndSort);
sortPrice.addEventListener("change", applyFiltersAndSort);

renderProducts(products);
renderCart();