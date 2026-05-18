import "./TaskForm.css";

function TaskForm({ newTask, setNewTask, handleAddTask }) {
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter a task..."
        className="task-input"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button
        className="add-btn"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;