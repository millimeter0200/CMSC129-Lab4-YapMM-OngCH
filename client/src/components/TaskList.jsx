import "./TaskList.css";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          title={task.title}
        />
      ))}
    </div>
  );
}

export default TaskList;