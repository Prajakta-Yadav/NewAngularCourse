let tasks = [
  { id: 1, name: "Learn JavaScript" },
  { id: 2, name: "Build CRUD App" }
];

export function getTasks() {
  return tasks;
}

export function addTask(taskName) {
  const newTask = {
    id: Date.now(),
    name: taskName
  };

  tasks.push(newTask);
  return newTask;
}

export function updateTask(id, newName) {
  const task = tasks.find(task => task.id === id);

  if (!task) {
    throw new Error(`Task with id ${id} not found`);
  }

  task.name = newName;
  return task;
}

export function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    throw new Error(`Task with id ${id} not found`);
  }

  tasks.splice(index, 1);
}