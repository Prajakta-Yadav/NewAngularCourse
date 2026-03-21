// ✅ Reusable API function
async function apiRequest(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      body: options.body ? JSON.stringify(options.body) : null
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}

// Helper to display output
function displayData(data) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (Array.isArray(data)) {
    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = JSON.stringify(item);
      output.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = JSON.stringify(data);
    output.appendChild(li);
  }
}

// Error display
function showError(message) {
  const error = document.getElementById("error");
  error.textContent = message;
  error.style.color = "red";
}

// ✅ GET
async function getUsers() {
  try {
    const data = await apiRequest("https://jsonplaceholder.typicode.com/users");
    displayData(data);
  } catch {
    showError("GET request failed");
  }
}

// ✅ POST
async function createPost() {
  try {
    const data = await apiRequest("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: {
        title: "New Post",
        body: "Hello from API",
        userId: 1
      }
    });
    displayData(data);
  } catch {
    showError("POST request failed");
  }
}

// ✅ PUT
async function updatePost() {
  try {
    const data = await apiRequest("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: {
        id: 1,
        title: "Updated Post",
        body: "Updated content",
        userId: 1
      }
    });
    displayData(data);
  } catch {
    showError("PUT request failed");
  }
}

// ✅ DELETE
async function deletePost() {
  try {
    const data = await apiRequest("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE"
    });
    displayData({ message: "Post deleted successfully", data });
  } catch {
    showError("DELETE request failed");
  }
}