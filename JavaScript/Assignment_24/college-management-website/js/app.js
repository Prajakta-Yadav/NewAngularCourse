(function () {
  const notices = [
    {
      title: 'Semester exam form submission closes on April 10, 2026',
      date: 'Updated today'
    },
    {
      title: 'Workshop on AI and Data Careers on April 2, 2026 at 11:00 AM',
      date: 'Career Cell'
    },
    {
      title: 'Library will remain open until 8:00 PM during internal assessment week',
      date: 'Library Notice'
    },
    {
      title: 'New merit scholarship guidelines published for first-year applicants',
      date: 'Admissions Office'
    }
  ];

  const selectors = {
    themeToggle: '#themeToggle',
    noticeBoard: '#noticeBoard',
    galleryImages: '.gallery-image',
    modalImage: '#modalImage',
    galleryTitle: '#galleryTitle',
    admissionForm: '#admissionForm',
    formAlert: '#formAlert'
  };

  function getElement(selector) {
    return document.querySelector(selector);
  }

  function getAll(selector) {
    return document.querySelectorAll(selector);
  }

  function initializeTheme() {
    const currentTheme = localStorage.getItem('college-theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', currentTheme);

    const themeToggleButton = getElement(selectors.themeToggle);
    if (!themeToggleButton) return;

    updateThemeButtonText(currentTheme);
    themeToggleButton.addEventListener('click', toggleTheme);
  }

  function toggleTheme() {
    const existingTheme = document.documentElement.getAttribute('data-bs-theme');
    const nextTheme = existingTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', nextTheme);
    localStorage.setItem('college-theme', nextTheme);
    updateThemeButtonText(nextTheme);
  }

  function updateThemeButtonText(theme) {
    const themeToggleButton = getElement(selectors.themeToggle);
    if (!themeToggleButton) return;
    themeToggleButton.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  }

  function renderNoticeBoard() {
    const noticeBoard = getElement(selectors.noticeBoard);
    if (!noticeBoard) return;

    noticeBoard.innerHTML = notices.map((notice, index) => `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between gap-3">
          <div>
            <h3 class="h6 mb-1">${index + 1}. ${notice.title}</h3>
            <small class="text-secondary">${notice.date}</small>
          </div>
        </div>
      </div>
    `).join('');
  }

  function initializeGalleryModal() {
    const galleryImages = getAll(selectors.galleryImages);
    const modalImage = getElement(selectors.modalImage);
    const galleryTitle = getElement(selectors.galleryTitle);

    if (!galleryImages.length || !modalImage || !galleryTitle) return;

    galleryImages.forEach((image) => {
      image.addEventListener('click', () => {
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        galleryTitle.textContent = image.alt;
      });
    });
  }

  function initializeAdmissionForm() {
    const form = getElement(selectors.admissionForm);
    const formAlert = getElement(selectors.formAlert);
    if (!form || !formAlert) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const payload = collectFormData();
      const validationResult = validateAdmissionPayload(payload);

      if (!validationResult.isValid || !form.checkValidity()) {
        form.classList.add('was-validated');
        showFormAlert(validationResult.message || 'Please fix the highlighted fields.', 'danger');
        return;
      }

      saveAdmission(payload);
      form.reset();
      form.classList.remove('was-validated');
      showFormAlert('Application submitted successfully. Data stored in local storage.', 'success');
    });
  }

  function collectFormData() {
    return {
      fullName: getElement('#fullName')?.value.trim() || '',
      email: getElement('#email')?.value.trim() || '',
      phone: getElement('#phone')?.value.trim() || '',
      course: getElement('#course')?.value || '',
      message: getElement('#message')?.value.trim() || '',
      submittedAt: new Date().toISOString()
    };
  }

  function validateAdmissionPayload(payload) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!payload.fullName) {
      return { isValid: false, message: 'Full name is required.' };
    }

    if (!emailPattern.test(payload.email)) {
      return { isValid: false, message: 'Please enter a valid email address.' };
    }

    if (!phonePattern.test(payload.phone)) {
      return { isValid: false, message: 'Phone number must contain exactly 10 digits.' };
    }

    if (!payload.course) {
      return { isValid: false, message: 'Please select a preferred course.' };
    }

    if (payload.message.length < 10) {
      return { isValid: false, message: 'Your message should be at least 10 characters long.' };
    }

    return { isValid: true, message: '' };
  }

  function saveAdmission(payload) {
    const existing = JSON.parse(localStorage.getItem('college-admissions') || '[]');
    existing.push(payload);
    localStorage.setItem('college-admissions', JSON.stringify(existing));
  }

  function showFormAlert(message, type) {
    const formAlert = getElement(selectors.formAlert);
    if (!formAlert) return;

    formAlert.className = `alert alert-${type}`;
    formAlert.textContent = message;
    formAlert.classList.remove('d-none');
  }

  function init() {
    initializeTheme();
    renderNoticeBoard();
    initializeGalleryModal();
    initializeAdmissionForm();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
