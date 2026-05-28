(async function () {
  EcommerceApp.initCommon();

  const wrapper = document.getElementById('productDetail');
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const products = await ProductService.fetchProducts();
  const product = ProductService.getProductById(productId, products);

  if (!product) {
    wrapper.innerHTML = '<div class="alert alert-danger">Product not found.</div>';
    return;
  }

  wrapper.innerHTML = `
    <div class="col-lg-5">
      <div class="card border-0 shadow-sm p-4 h-100">
        <img src="${product.image}" alt="${product.title}" class="img-fluid" style="max-height: 420px; object-fit: contain;">
      </div>
    </div>
    <div class="col-lg-7">
      <span class="badge text-bg-light category-badge mb-3">${product.category}</span>
      <h1 class="mb-3">${product.title}</h1>
      <p class="rating-stars mb-1">${EcommerceApp.renderStars(product.rating?.rate)}</p>
      <p class="small-muted mb-3">Rated ${product.rating?.rate || 'N/A'} by ${product.rating?.count || 0} customers</p>
      <h3 class="price-tag mb-4">₹${Number(product.price).toFixed(2)}</h3>
      <p class="lead">${product.description}</p>
      <div class="d-flex gap-3 mt-4">
        <button class="btn btn-primary" id="detailAddBtn">Add to Cart</button>
        <a href="cart.html" class="btn btn-outline-secondary">Go to Cart</a>
      </div>
    </div>
  `;

  document.getElementById('detailAddBtn')?.addEventListener('click', () => EcommerceApp.addToCart(product));
})();
