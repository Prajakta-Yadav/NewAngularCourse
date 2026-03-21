import { getElement } from "./utils.js";

export function handleError(error, context = "Application") {
  console.error(`[${context}] ${error.message}`);

  const messageBox = getElement("#message");
  if (messageBox) {
    messageBox.textContent = `Error: ${error.message}`;
    messageBox.className = "error";
  }
}