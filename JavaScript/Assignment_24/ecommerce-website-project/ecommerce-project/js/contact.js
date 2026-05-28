(function () {
  EcommerceApp.initCommon();

  const form = document.getElementById('contactForm');
  const result = document.getElementById('contactMessage');

  form?.addEventListener('submit', event => {
    event.preventDefault();
    result.classList.add('d-none');

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactText').value.trim();

    if (!name || !subject || !message) {
      result.textContent = 'Please fill in all required fields.';
      result.className = 'alert alert-danger';
      result.classList.remove('d-none');
      return;
    }

    if (!EcommerceApp.validateEmail(email)) {
      result.textContent = 'Please provide a valid email address.';
      result.className = 'alert alert-danger';
      result.classList.remove('d-none');
      return;
    }

    const submissions = JSON.parse(localStorage.getItem('ecommerce_contact_messages') || '[]');
    submissions.push({ name, email, subject, message, createdAt: new Date().toISOString() });
    localStorage.setItem('ecommerce_contact_messages', JSON.stringify(submissions));

    result.textContent = 'Message sent successfully. We will get back to you soon.';
    result.className = 'alert alert-success';
    result.classList.remove('d-none');
    form.reset();
  });
})();
