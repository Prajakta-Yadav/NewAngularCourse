import { getElement } from "./utils.js";
import { addTask, deleteTask, getTasks, updateTask } from "./task-service.js";
import { renderTasks, showMessage, clearInput, clearMessage } from "./ui.js";
import { handleError } from "./error-handler.js";

const taskInput = getElement("#taskInput");
const addTaskBtn = getElement("#addTaskBtn");

function refreshTasks() {
  const tasks = getTasks();
  renderTasks(tasks, handleEditTask, handleDeleteTask);
}

function handleAddTask() {
  clearMessage();

  try {
    const taskName = taskInput.value;
    addTask(taskName);
    showMessage("Task added successfully", "success");
    clearInput();
    refreshTasks();
  } catch (error) {
    handleError(error, "ADD TASK");
  }
}

function handleEditTask(taskId) {
  clearMessage();

  try {
    const newTaskName = prompt("Enter updated task name:");

    if (newTaskName === null) {
      return;
    }

    updateTask(taskId, newTaskName);
    showMessage("Task updated successfully", "success");
    refreshTasks();
  } catch (error) {
    handleError(error, "EDIT TASK");
  }
}

function handleDeleteTask(taskId) {
  clearMessage();

  try {
    deleteTask(taskId);
    showMessage("Task deleted successfully", "success");
    refreshTasks();
  } catch (error) {
    handleError(error, "DELETE TASK");
  }
}

function init() {
  addTaskBtn.addEventListener("click", handleAddTask);
  refreshTasks();
}

init();