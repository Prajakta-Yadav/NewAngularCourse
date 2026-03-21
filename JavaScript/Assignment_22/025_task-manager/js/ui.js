import { createElement, getElement } from "./utils.js";

export function showMessage(message, type = "success") {
  const messageBox = getElement("#message");
  messageBox.textContent = message;
  messageBox.className = type;
}

export function clearMessage() {
  const messageBox = getElement("#message");
  messageBox.textContent = "";
  messageBox.className = "";
}

export function clearInput() {
  const taskInput = getElement("#taskInput");
  taskInput.value = "";
}

export function renderTasks(tasks, onEdit, onDelete) {
  const taskList = getElement("#taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const listItem = createElement("li");
    const taskText = createElement("span", task.name);

    const actions = createElement("div", "", "actions");

    const editButton = createElement("button", "Edit");
    editButton.addEventListener("click", () => onEdit(task.id));

    const deleteButton = createElement("button", "Delete");
    deleteButton.addEventListener("click", () => onDelete(task.id));

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    listItem.appendChild(taskText);
    listItem.appendChild(actions);

    taskList.appendChild(listItem);
  });
}