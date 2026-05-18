function validateTask(task) {
  return !!task.title && task.title.trim() !== "";
}

module.exports = validateTask;