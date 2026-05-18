import { useEffect, useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5001/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!newTask.trim()) return;

    await fetch("http://localhost:5001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTask,
      }),
    });

    setNewTask("");
    fetchTasks();
  };

  const handleDeleteTask = async (index) => {
    await fetch(`http://localhost:5001/tasks/${index}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1 className="app-title">
          Minimal Task Tracker
        </h1>

        <p className="app-subtitle">
          Organize your tasks with clarity and focus.
        </p>

        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          handleAddTask={handleAddTask}
        />

        <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;