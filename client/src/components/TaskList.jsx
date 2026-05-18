import "./TaskList.css";
import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDeleteTask }) {
  return (
    <div className="task-list">

      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          title={task.title}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}

    </div>
  );
}

export default TaskList;