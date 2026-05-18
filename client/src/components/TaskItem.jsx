import "./TaskItem.css";

function TaskItem({ title }) {
  return (
    <div className="task-item">

      <span className="task-title">
        {title}
      </span>

      <button className="delete-btn">
        Delete
      </button>

    </div>
  );
}

export default TaskItem;
