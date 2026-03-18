const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirmPassword"),
  terms: document.getElementById("terms")
};

const errors = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  phone: document.getElementById("phoneError"),
  password: document.getElementById("passwordError"),
  confirmPassword: document.getElementById("confirmPasswordError"),
  gender: document.getElementById("genderError"),
  terms: document.getElementById("termsError")
};

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

function setError(input, errorElement, message) {
  if (input) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  errorElement.textContent = message;
}

function setSuccess(input, errorElement) {
  if (input) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  errorElement.textContent = "";
}

function clearState(input, errorElement) {
  if (input) {
    input.classList.remove("invalid", "valid");
  }
  errorElement.textContent = "";
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhone(phone) {
  const phonePattern = /^[0-9]{10,15}$/;
  return phonePattern.test(phone);
}

function getSelectedGender() {
  const selected = document.querySelector('input[name="gender"]:checked');
  return selected ? selected.value : "";
}

function checkPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (password.length === 0) {
    return { score: 0, label: "", width: "0%", color: "transparent" };
  }

  if (score <= 2) {
    return { score, label: "Weak password", width: "33%", color: "#dc2626" };
  }

  if (score === 3 || score === 4) {
    return { score, label: "Medium password", width: "66%", color: "#f59e0b" };
  }

  return { score, label: "Strong password", width: "100%", color: "#16a34a" };
}

function updatePasswordStrength() {
  const result = checkPasswordStrength(fields.password.value.trim());
  strengthBar.style.width = result.width;
  strengthBar.style.background = result.color;
  strengthText.textContent = result.label;
}

function validateName() {
  const value = fields.name.value.trim();

  if (value === "") {
    setError(fields.name, errors.name, "Name is required.");
    return false;
  }

  if (value.length < 3) {
    setError(fields.name, errors.name, "Name must be at least 3 characters.");
    return false;
  }

  setSuccess(fields.name, errors.name);
  return true;
}

function validateEmail() {
  const value = fields.email.value.trim();

  if (value === "") {
    setError(fields.email, errors.email, "Email is required.");
    return false;
  }

  if (!isValidEmail(value)) {
    setError(fields.email, errors.email, "Enter a valid email address.");
    return false;
  }

  setSuccess(fields.email, errors.email);
  return true;
}

function validatePhone() {
  const value = fields.phone.value.trim();

  if (value === "") {
    setError(fields.phone, errors.phone, "Phone number is required.");
    return false;
  }

  if (!isValidPhone(value)) {
    setError(fields.phone, errors.phone, "Phone must contain only 10 to 15 digits.");
    return false;
  }

  setSuccess(fields.phone, errors.phone);
  return true;
}

function validatePassword() {
  const value = fields.password.value.trim();
  const strength = checkPasswordStrength(value);

  if (value === "") {
    setError(fields.password, errors.password, "Password is required.");
    return false;
  }

  if (value.length < 8) {
    setError(fields.password, errors.password, "Password must be at least 8 characters.");
    return false;
  }

  if (strength.score < 3) {
    setError(
      fields.password,
      errors.password,
      "Password should include uppercase, lowercase, number, and special character."
    );
    return false;
  }

  setSuccess(fields.password, errors.password);
  return true;
}

function validateConfirmPassword() {
  const value = fields.confirmPassword.value.trim();
  const passwordValue = fields.password.value.trim();

  if (value === "") {
    setError(fields.confirmPassword, errors.confirmPassword, "Please confirm your password.");
    return false;
  }

  if (value !== passwordValue) {
    setError(fields.confirmPassword, errors.confirmPassword, "Passwords do not match.");
    return false;
  }

  setSuccess(fields.confirmPassword, errors.confirmPassword);
  return true;
}

function validateGender() {
  const gender = getSelectedGender();

  if (!gender) {
    errors.gender.textContent = "Please select your gender.";
    return false;
  }

  errors.gender.textContent = "";
  return true;
}

function validateTerms() {
  if (!fields.terms.checked) {
    errors.terms.textContent = "You must accept the Terms and Conditions.";
    return false;
  }

  errors.terms.textContent = "";
  return true;
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  const isGenderValid = validateGender();
  const isTermsValid = validateTerms();

  const formIsValid =
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isGenderValid &&
    isTermsValid;

  submitBtn.disabled = !formIsValid;
  return formIsValid;
}

function saveUserToLocalStorage() {
  const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  const newUser = {
    name: fields.name.value.trim(),
    email: fields.email.value.trim(),
    phone: fields.phone.value.trim(),
    gender: getSelectedGender(),
    registeredAt: new Date().toLocaleString()
  };

  users.push(newUser);
  localStorage.setItem("registeredUsers", JSON.stringify(users));
}

function resetFormState() {
  form.reset();

  Object.values(fields).forEach((field) => {
    if (field.type !== "checkbox") {
      field.classList.remove("valid", "invalid");
    }
  });

  Object.values(errors).forEach((error) => {
    error.textContent = "";
  });

  strengthBar.style.width = "0%";
  strengthBar.style.background = "transparent";
  strengthText.textContent = "";
  submitBtn.disabled = true;
}

fields.name.addEventListener("input", validateForm);
fields.email.addEventListener("input", validateForm);
fields.phone.addEventListener("input", () => {
  fields.phone.value = fields.phone.value.replace(/\D/g, "");
  validateForm();
});
fields.password.addEventListener("input", () => {
  updatePasswordStrength();
  validateForm();
});
fields.confirmPassword.addEventListener("input", validateForm);
fields.terms.addEventListener("change", validateForm);

document.querySelectorAll('input[name="gender"]').forEach((radio) => {
  radio.addEventListener("change", validateForm);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  try {
    saveUserToLocalStorage();
    popupOverlay.classList.add("show");
    resetFormState();
  } catch (error) {
    alert("An error occurred while saving your data.");
    console.error("Storage Error:", error);
  }
});

closePopup.addEventListener("click", function () {
  popupOverlay.classList.remove("show");
});

window.addEventListener("click", function (event) {
  if (event.target === popupOverlay) {
    popupOverlay.classList.remove("show");
  }
});