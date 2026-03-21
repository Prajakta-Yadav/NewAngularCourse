let tasks = [];

export function getTasks() {
  return [...tasks];
}

export function addTask(taskName) {
  if (!taskName || !taskName.trim()) {
    throw new Error("Task name is required");
  }

  const newTask = {
    id: Date.now(),
    name: taskName.trim()
  };

  tasks.push(newTask);
  return newTask;
}

export function deleteTask(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    throw new Error(`Task with id ${taskId} not found`);
  }

  tasks.splice(taskIndex, 1);
}

export function updateTask(taskId, newTaskName) {
  if (!newTaskName || !newTaskName.trim()) {
    throw new Error("Updated task name is required");
  }

  const task = tasks.find(item => item.id === taskId);

  if (!task) {
    throw new Error(`Task with id ${taskId} not found`);
  }

  task.name = newTaskName.trim();
  return task;
}