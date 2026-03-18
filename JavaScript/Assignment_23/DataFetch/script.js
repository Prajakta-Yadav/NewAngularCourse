const API_URL = "https://jsonplaceholder.typicode.com/users";

const userContainer = document.getElementById("userContainer");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const searchInput = document.getElementById("searchInput");
const pagination = document.getElementById("pagination");
const refreshBtn = document.getElementById("refreshBtn");
const userModal = document.getElementById("userModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

let allUsers = [];
let filteredUsers = [];
let currentPage = 1;
const usersPerPage = 4;

function showLoading() {
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}

function hideError() {
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
}

async function fetchUsers() {
  showLoading();
  hideError();
  userContainer.innerHTML = "";
  pagination.innerHTML = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    allUsers = data;
    filteredUsers = [...allUsers];
    currentPage = 1;

    renderUsers();
    renderPagination();
  } catch (error) {
    showError("Failed to fetch users. Please check your network and try again.");
    console.error("Fetch Error:", error);
  } finally {
    hideLoading();
  }
}

function renderUsers() {
  userContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const usersToDisplay = filteredUsers.slice(startIndex, endIndex);

  if (usersToDisplay.length === 0) {
    userContainer.innerHTML = `<div class="no-data">No users found.</div>`;
    return;
  }

  usersToDisplay.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>City:</strong> ${user.address?.city || "N/A"}</p>
      <div class="card-actions">
        <button class="details-btn" onclick="openModal(${user.id})">View Details</button>
      </div>
    `;

    userContainer.appendChild(card);
  });
}

function renderPagination() {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.className = `page-btn ${i === currentPage ? "active" : ""}`;
    button.textContent = i;

    button.addEventListener("click", () => {
      currentPage = i;
      renderUsers();
      renderPagination();
    });

    pagination.appendChild(button);
  }
}

function filterUsers() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  filteredUsers = allUsers.filter((user) => {
    const name = user.name?.toLowerCase() || "";
    const email = user.email?.toLowerCase() || "";
    const city = user.address?.city?.toLowerCase() || "";

    return (
      name.includes(searchTerm) ||
      email.includes(searchTerm) ||
      city.includes(searchTerm)
    );
  });

  currentPage = 1;
  renderUsers();
  renderPagination();
}

function openModal(userId) {
  const user = allUsers.find((u) => u.id === userId);

  if (!user) return;

  modalBody.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Website:</strong> ${user.website}</p>
    <p><strong>Company:</strong> ${user.company?.name}</p>
    <p><strong>City:</strong> ${user.address?.city}</p>
  `;

  userModal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  userModal.classList.add("hidden");
});

searchInput.addEventListener("input", filterUsers);
refreshBtn.addEventListener("click", fetchUsers);
closeModal.addEventListener("click", closeModalBox);

window.addEventListener("click", (event) => {
  if (event.target === userModal) {
    closeModalBox();
  }
});

fetchUsers();