function validateTask(task) {
  if (!task.title) {
    return false;
  }

  return task.title.trim() !== "";
}

module.exports = validateTask;