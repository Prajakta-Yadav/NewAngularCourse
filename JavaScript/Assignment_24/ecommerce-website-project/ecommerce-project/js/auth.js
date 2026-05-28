(function () {
  EcommerceApp.initCommon();

  const loginForm = document.getElementById('pageLoginForm');
  const registerForm = document.getElementById('registerForm');

  function setMessage(targetId, message, type = 'danger') {
    const box = document.getElementById(targetId);
    box.className = `alert alert-${type}`;
    box.textContent = message;
    box.classList.remove('d-none');
  }

  loginForm?.addEventListener('submit', event => {
    event.preventDefault();
    const email = document.getElementById('pageLoginEmail').value.trim();
    const password = document.getElementById('pageLoginPassword').value.trim();
    const errorBox = document.getElementById('pageLoginMessage');
    errorBox.classList.add('d-none');

    if (!EcommerceApp.validateEmail(email)) {
      setMessage('pageLoginMessage', 'Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setMessage('pageLoginMessage', 'Password must contain at least 6 characters.');
      return;
    }

    localStorage.setItem(EcommerceApp.STORAGE_KEYS.USER, JSON.stringify({ email }));
    setMessage('pageLoginMessage', 'Login successful.', 'success');
    loginForm.reset();
  });

  registerForm?.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirm = document.getElementById('confirmPassword').value.trim();
    const message = document.getElementById('registerMessage');
    message.classList.add('d-none');

    if (!name) return setMessage('registerMessage', 'Full name is required.');
    if (!EcommerceApp.validateEmail(email)) return setMessage('registerMessage', 'Enter a valid email address.');
    if (password.length < 6) return setMessage('registerMessage', 'Password must contain at least 6 characters.');
    if (password !== confirm) return setMessage('registerMessage', 'Passwords do not match.');

    localStorage.setItem(EcommerceApp.STORAGE_KEYS.USER, JSON.stringify({ name, email }));
    setMessage('registerMessage', 'Registration successful.', 'success');
    registerForm.reset();
  });
})();
