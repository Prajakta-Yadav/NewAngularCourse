(function () {
  const API_URL = 'https://fakestoreapi.com/products';

  async function fetchProducts() {
    window.EcommerceApp.setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Unable to load products. Status ${response.status}`);
      }
      const products = await response.json();
      localStorage.setItem('ecommerce_products_cache', JSON.stringify(products));
      return products;
    } catch (error) {
      const cached = JSON.parse(localStorage.getItem('ecommerce_products_cache') || 'null');
      if (cached?.length) {
        console.warn('Using cached products because API failed.', error.message);
        return cached;
      }
      return window.ECOMMERCE_FALLBACK_PRODUCTS || [];
    } finally {
      window.EcommerceApp.setLoading(false);
    }
  }

  function getProductById(id, products) {
    return products.find(product => String(product.id) === String(id));
  }

  function sortProducts(products, sortValue) {
    const sorted = [...products];
    switch (sortValue) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'rating-desc':
        return sorted.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
      default:
        return sorted;
    }
  }

  function filterProducts(products, searchText) {
    const q = searchText.trim().toLowerCase();
    if (!q) return [...products];
    return products.filter(product =>
      product.title.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q)
    );
  }

  function createProductCard(product) {
    return `
      <div class="col-sm-6 col-lg-4">
        <div class="card product-card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
              <span class="badge text-bg-light category-badge">${product.category}</span>
              <span class="price-tag">₹${Number(product.price).toFixed(2)}</span>
            </div>
            <h5 class="card-title">${product.title}</h5>
            <p class="small-muted mb-2"><span class="rating-stars">${window.EcommerceApp.renderStars(product.rating?.rate)}</span> (${product.rating?.count || 0})</p>
            <p class="card-text small-muted flex-grow-1">${product.description.slice(0, 85)}...</p>
            <div class="d-flex gap-2 mt-3">
              <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary btn-sm w-50">View</a>
              <button class="btn btn-primary btn-sm w-50" data-add-id="${product.id}">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.ProductService = {
    fetchProducts,
    getProductById,
    sortProducts,
    filterProducts,
    createProductCard
  };
})();
