const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

function showSection(hash) {
  const target = hash || '#about';
  sections.forEach(section => {
    section.classList.toggle('visible', `#${section.id}` === target);
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === target);
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = link.getAttribute('href');
    showSection(target);
    history.replaceState(null, '', target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  showSection(window.location.hash || '#about');
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const subject = formData.get('subject')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  if (!name || !email || !subject || !message) {
    formStatus.textContent = 'Please fill in all fields before sending your message.';
    formStatus.style.color = '#ff8f8f';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formStatus.textContent = 'Please enter a valid email address.';
    formStatus.style.color = '#ff8f8f';
    return;
  }

  formStatus.textContent = 'Message captured successfully. You can connect using the email or phone shown in the sidebar.';
  formStatus.style.color = '#9bdd7c';
  contactForm.reset();
});
