import { getElement } from "./utils.js";

export function renderTasks(tasks, onEdit, onDelete) {
  const taskList = getElement("#taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.name;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => onEdit(task.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => onDelete(task.id));

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}