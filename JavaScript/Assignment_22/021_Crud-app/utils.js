export function getElement(selector) {
  return document.querySelector(selector);
}

export function showMessage(message, type = "success") {
  const messageBox = getElement("#message");
  messageBox.textContent = message;
  messageBox.style.color = type === "error" ? "red" : "green";
}