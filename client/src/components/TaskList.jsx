import "./TaskList.css";
import TaskItem from "./TaskItem";

function TaskList() {

  const sampleTasks = [
    "Finish CMSC 129 Lab",
    "Review TDD cycle",
    "Push frontend branch",
    "Prepare defense answers",
  ];

  return (
    <div className="task-list">

      {sampleTasks.map((task, index) => (
        <TaskItem
          key={index}
          title={task}
        />
      ))}

    </div>
  );
}

export default TaskList;


