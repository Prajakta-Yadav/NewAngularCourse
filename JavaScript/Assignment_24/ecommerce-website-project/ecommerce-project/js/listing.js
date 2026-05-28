(async function () {
  EcommerceApp.initCommon();

  const grid = document.getElementById('productGrid');
  const search = document.getElementById('searchInput');
  const sort = document.getElementById('sortInput');
  const resultCount = document.getElementById('resultCount');
  const errorBox = document.getElementById('apiError');

  let products = [];

  function render() {
    const searched = ProductService.filterProducts(products, search.value);
    const sorted = ProductService.sortProducts(searched, sort.value);
    resultCount.textContent = `${sorted.length} product(s)`;

    if (!sorted.length) {
      grid.innerHTML = '<div class="col-12"><div class="alert alert-warning">No products found for your search.</div></div>';
      return;
    }

    grid.innerHTML = sorted.map(ProductService.createProductCard).join('');
  }

  try {
    products = await ProductService.fetchProducts();
    if (!products.length) {
      errorBox.classList.remove('d-none');
      errorBox.textContent = 'Products could not be loaded.';
    }
    render();
  } catch (error) {
    errorBox.classList.remove('d-none');
    errorBox.textContent = error.message;
  }

  search?.addEventListener('input', render);
  sort?.addEventListener('change', render);

  grid?.addEventListener('click', event => {
    const button = event.target.closest('[data-add-id]');
    if (!button) return;
    const product = products.find(item => String(item.id) === button.dataset.addId);
    if (product) EcommerceApp.addToCart(product);
  });
})();
