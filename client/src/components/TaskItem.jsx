import "./TaskItem.css";

function TaskItem({ title, onDelete }) {
  return (
    <div className="task-item">

      <span className="task-title">
        {title}
      </span>

      <button
        className="delete-btn"
        onClick={onDelete}
      >
        Delete
      </button>

    </div>
  );
}

export default TaskItem;