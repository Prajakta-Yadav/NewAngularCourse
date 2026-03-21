import { getTasks, addTask, updateTask, deleteTask } from "./api.js";
import { renderTasks } from "./ui.js";
import { getElement, showMessage } from "./utils.js";

const taskInput = getElement("#taskInput");
const addBtn = getElement("#addBtn");

function refreshUI() {
  const tasks = getTasks();
  renderTasks(tasks, handleEditTask, handleDeleteTask);
}

function handleAddTask() {
  const taskName = taskInput.value.trim();

  if (!taskName) {
    showMessage("Task name is required", "error");
    return;
  }

  addTask(taskName);
  taskInput.value = "";
  showMessage("Task added successfully");
  refreshUI();
}

function handleEditTask(id) {
  const newName = prompt("Enter updated task name:");

  if (!newName || !newName.trim()) {
    showMessage("Updated task name cannot be empty", "error");
    return;
  }

  try {
    updateTask(id, newName.trim());
    showMessage("Task updated successfully");
    refreshUI();
  } catch (error) {
    showMessage(error.message, "error");
  }
}

function handleDeleteTask(id) {
  try {
    deleteTask(id);
    showMessage("Task deleted successfully");
    refreshUI();
  } catch (error) {
    showMessage(error.message, "error");
  }
}

addBtn.addEventListener("click", handleAddTask);

refreshUI();