import "./TaskForm.css";

function TaskForm() {
  return (
    <div className="task-form">

      <input
        type="text"
        placeholder="Enter a task..."
        className="task-input"
      />

      <button className="add-btn">
        Add Task
      </button>

    </div>
  );
}


export default TaskForm;